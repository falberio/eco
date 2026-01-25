// src/controllers/BudgetController.js
const prisma = require('../prisma/client');

class BudgetController {
    // GET /api/mantia/budgets
    async getAll(req, res) {
        try {
            const { page = 1, limit = 20, categoryId, period, isActive } = req.query;
            const skip = (page - 1) * limit;

            const where = {};
            if (categoryId) where.categoryId = categoryId;
            if (period) where.period = period;
            if (isActive !== undefined) where.isActive = isActive === 'true';

            const [budgets, total] = await Promise.all([
                prisma.financia_Budget.findMany({
                    where,
                    include: {
                        category: {
                            select: { id: true, name: true, icon: true, color: true }
                        }
                    },
                    skip: parseInt(skip),
                    take: parseInt(limit),
                    orderBy: { startDate: 'desc' }
                }),
                prisma.financia_Budget.count({ where })
            ]);

            // Calcular gasto actual para cada budget
            const budgetsWithStats = await Promise.all(
                budgets.map(async (budget) => {
                    const result = await prisma.financia_Transaction.aggregate({
                        where: {
                            categoryId: budget.categoryId,
                            type: 'EXPENSE',
                            transactionDate: {
                                gte: budget.startDate,
                                ...(budget.endDate && { lte: budget.endDate })
                            }
                        },
                        _sum: {
                            amount: true
                        }
                    });

                    const spent = parseFloat(result._sum.amount || 0);
                    const percentage = budget.amount > 0 ? (spent / parseFloat(budget.amount)) * 100 : 0;
                    const remaining = parseFloat(budget.amount) - spent;

                    return {
                        ...budget,
                        spent,
                        percentage: parseFloat(percentage.toFixed(2)),
                        remaining: parseFloat(remaining.toFixed(2)),
                        isOverBudget: spent > parseFloat(budget.amount),
                        isNearLimit: budget.alertThreshold
                            ? percentage >= parseFloat(budget.alertThreshold) * 100
                            : false
                    };
                })
            );

            return res.json({
                data: budgetsWithStats,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Error fetching budgets:', error);
            return res.status(500).json({ error: 'Error fetching budgets' });
        }
    }

    // GET /api/mantia/budgets/:id
    async getById(req, res) {
        try {
            const { id } = req.params;

            const budget = await prisma.financia_Budget.findUnique({
                where: { id },
                include: {
                    category: true
                }
            });

            if (!budget) {
                return res.status(404).json({ error: 'Budget not found' });
            }

            // Calcular estadísticas
            const spent = await this._calculateSpent(budget);
            const percentage = budget.amount > 0 ? (spent / parseFloat(budget.amount)) * 100 : 0;
            const remaining = parseFloat(budget.amount) - spent;

            // Obtener transacciones de este período
            const transactions = await prisma.financia_Transaction.findMany({
                where: {
                    categoryId: budget.categoryId,
                    type: 'EXPENSE',
                    transactionDate: {
                        gte: budget.startDate,
                        ...(budget.endDate && { lte: budget.endDate })
                    }
                },
                include: {
                    fromAccount: { select: { name: true } }
                },
                orderBy: { transactionDate: 'desc' }
            });

            return res.json({
                ...budget,
                spent,
                percentage: parseFloat(percentage.toFixed(2)),
                remaining: parseFloat(remaining.toFixed(2)),
                isOverBudget: spent > parseFloat(budget.amount),
                isNearLimit: budget.alertThreshold
                    ? percentage >= parseFloat(budget.alertThreshold) * 100
                    : false,
                transactions
            });
        } catch (error) {
            console.error('Error fetching budget:', error);
            return res.status(500).json({ error: 'Error fetching budget' });
        }
    }

    // POST /api/mantia/budgets
    async create(req, res) {
        try {
            const {
                name,
                categoryId,
                amount,
                period,
                startDate,
                endDate,
                alertThreshold,
                notes
            } = req.body;

            // Validar que la categoría existe
            if (categoryId) {
                const category = await prisma.mantia_Category.findUnique({
                    where: { id: categoryId }
                });
                if (!category) {
                    return res.status(400).json({ error: 'Category not found' });
                }
            }

            // Validar fechas
            if (endDate && new Date(startDate) > new Date(endDate)) {
                return res.status(400).json({ error: 'Start date must be before end date' });
            }

            const budget = await prisma.financia_Budget.create({
                data: {
                    name,
                    categoryId,
                    amount: parseFloat(amount),
                    period: period || 'MONTHLY',
                    startDate: new Date(startDate),
                    endDate: endDate ? new Date(endDate) : null,
                    alertThreshold: alertThreshold ? parseFloat(alertThreshold) : null,
                    notes,
                    isActive: true
                },
                include: {
                    category: {
                        select: { id: true, name: true, icon: true, color: true }
                    }
                }
            });

            return res.status(201).json(budget);
        } catch (error) {
            console.error('Error creating budget:', error);
            return res.status(500).json({ error: 'Error creating budget' });
        }
    }

    // PUT /api/mantia/budgets/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const {
                name,
                categoryId,
                amount,
                period,
                startDate,
                endDate,
                alertThreshold,
                notes,
                isActive
            } = req.body;

            // Validar que la categoría existe si se proporciona
            if (categoryId) {
                const category = await prisma.mantia_Category.findUnique({
                    where: { id: categoryId }
                });
                if (!category) {
                    return res.status(400).json({ error: 'Category not found' });
                }
            }

            const budget = await prisma.financia_Budget.update({
                where: { id },
                data: {
                    ...(name !== undefined && { name }),
                    ...(categoryId !== undefined && { categoryId }),
                    ...(amount !== undefined && { amount: parseFloat(amount) }),
                    ...(period !== undefined && { period }),
                    ...(startDate !== undefined && { startDate: new Date(startDate) }),
                    ...(endDate !== undefined && { endDate: endDate ? new Date(endDate) : null }),
                    ...(alertThreshold !== undefined && { alertThreshold: alertThreshold ? parseFloat(alertThreshold) : null }),
                    ...(notes !== undefined && { notes }),
                    ...(isActive !== undefined && { isActive })
                },
                include: {
                    category: {
                        select: { id: true, name: true, icon: true, color: true }
                    }
                }
            });

            return res.json(budget);
        } catch (error) {
            console.error('Error updating budget:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Budget not found' });
            }
            return res.status(500).json({ error: 'Error updating budget' });
        }
    }

    // DELETE /api/mantia/budgets/:id
    async delete(req, res) {
        try {
            const { id } = req.params;

            await prisma.financia_Budget.delete({
                where: { id }
            });

            return res.status(204).send();
        } catch (error) {
            console.error('Error deleting budget:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Budget not found' });
            }
            return res.status(500).json({ error: 'Error deleting budget' });
        }
    }

    // Método helper privado para calcular gasto
    async _calculateSpent(budget) {
        const result = await prisma.financia_Transaction.aggregate({
            where: {
                categoryId: budget.categoryId,
                type: 'EXPENSE',
                transactionDate: {
                    gte: budget.startDate,
                    ...(budget.endDate && { lte: budget.endDate })
                }
            },
            _sum: {
                amount: true
            }
        });

        return parseFloat(result._sum.amount || 0);
    }
}

module.exports = new BudgetController();
