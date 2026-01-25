// src/controllers/TransactionController.js
const prisma = require('../prisma/client');

class TransactionController {
    // GET /api/mantia/transactions
    async getAll(req, res) {
        try {
            const {
                page = 1,
                limit = 20,
                type,
                categoryId,
                accountId,
                startDate,
                endDate
            } = req.query;
            const skip = (page - 1) * limit;

            const where = {};
            if (type) where.type = type;
            if (categoryId) where.categoryId = categoryId;

            // Filtrar por cuenta (origen o destino)
            if (accountId) {
                where.OR = [
                    { fromAccountId: accountId },
                    { toAccountId: accountId }
                ];
            }

            // Filtrar por rango de fechas
            if (startDate || endDate) {
                where.transactionDate = {};
                if (startDate) where.transactionDate.gte = new Date(startDate);
                if (endDate) where.transactionDate.lte = new Date(endDate);
            }

            const [transactions, total] = await Promise.all([
                prisma.financia_Transaction.findMany({
                    where,
                    include: {
                        fromAccount: { select: { id: true, name: true, type: true } },
                        toAccount: { select: { id: true, name: true, type: true } },
                        category: { select: { id: true, name: true, icon: true, color: true } }
                    },
                    skip: parseInt(skip),
                    take: parseInt(limit),
                    orderBy: { transactionDate: 'desc' }
                }),
                prisma.financia_Transaction.count({ where })
            ]);

            return res.json({
                data: transactions,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Error fetching transactions:', error);
            return res.status(500).json({ error: 'Error fetching transactions' });
        }
    }

    // GET /api/mantia/transactions/:id
    async getById(req, res) {
        try {
            const { id } = req.params;

            const transaction = await prisma.financia_Transaction.findUnique({
                where: { id },
                include: {
                    fromAccount: true,
                    toAccount: true,
                    category: true
                }
            });

            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }

            return res.json(transaction);
        } catch (error) {
            console.error('Error fetching transaction:', error);
            return res.status(500).json({ error: 'Error fetching transaction' });
        }
    }

    // POST /api/mantia/transactions
    async create(req, res) {
        try {
            const {
                code,
                type,
                fromAccountId,
                toAccountId,
                amount,
                categoryId,
                description,
                transactionDate,
                isRecurring,
                recurringRule,
                receiptNumber,
                receiptUrl,
                tags,
                notes
            } = req.body;

            // Validaciones según tipo
            if (type === 'EXPENSE' && !fromAccountId) {
                return res.status(400).json({ error: 'EXPENSE requires fromAccountId' });
            }
            if (type === 'INCOME' && !toAccountId) {
                return res.status(400).json({ error: 'INCOME requires toAccountId' });
            }
            if (type === 'TRANSFER' && (!fromAccountId || !toAccountId)) {
                return res.status(400).json({ error: 'TRANSFER requires both fromAccountId and toAccountId' });
            }
            if (type === 'TRANSFER' && fromAccountId === toAccountId) {
                return res.status(400).json({ error: 'Cannot transfer to same account' });
            }

            // Crear transacción y actualizar balances en una transacción DB
            const result = await prisma.$transaction(async (tx) => {
                // Crear la transacción
                const transaction = await tx.financia_Transaction.create({
                    data: {
                        code,
                        type,
                        fromAccountId,
                        toAccountId,
                        amount: parseFloat(amount),
                        categoryId,
                        description,
                        transactionDate: transactionDate ? new Date(transactionDate) : new Date(),
                        isRecurring: isRecurring || false,
                        recurringRule,
                        receiptNumber,
                        receiptUrl,
                        tags,
                        notes
                    },
                    include: {
                        fromAccount: true,
                        toAccount: true,
                        category: true
                    }
                });

                // Actualizar balances
                if (type === 'EXPENSE' && fromAccountId) {
                    await tx.financia_Account.update({
                        where: { id: fromAccountId },
                        data: {
                            currentBalance: {
                                decrement: parseFloat(amount)
                            }
                        }
                    });
                }

                if (type === 'INCOME' && toAccountId) {
                    await tx.financia_Account.update({
                        where: { id: toAccountId },
                        data: {
                            currentBalance: {
                                increment: parseFloat(amount)
                            }
                        }
                    });
                }

                if (type === 'TRANSFER') {
                    await tx.financia_Account.update({
                        where: { id: fromAccountId },
                        data: {
                            currentBalance: {
                                decrement: parseFloat(amount)
                            }
                        }
                    });

                    await tx.financia_Account.update({
                        where: { id: toAccountId },
                        data: {
                            currentBalance: {
                                increment: parseFloat(amount)
                            }
                        }
                    });
                }

                return transaction;
            });

            return res.status(201).json(result);
        } catch (error) {
            console.error('Error creating transaction:', error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'Transaction code already exists' });
            }
            if (error.code === 'P2003') {
                return res.status(400).json({ error: 'Invalid account or category ID' });
            }
            return res.status(500).json({ error: 'Error creating transaction' });
        }
    }

    // PUT /api/mantia/transactions/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const {
                description,
                categoryId,
                transactionDate,
                receiptNumber,
                receiptUrl,
                tags,
                notes
            } = req.body;

            // No permitimos cambiar tipo, monto o cuentas (requiere eliminar y recrear)
            const transaction = await prisma.financia_Transaction.update({
                where: { id },
                data: {
                    ...(description !== undefined && { description }),
                    ...(categoryId !== undefined && { categoryId }),
                    ...(transactionDate !== undefined && { transactionDate: new Date(transactionDate) }),
                    ...(receiptNumber !== undefined && { receiptNumber }),
                    ...(receiptUrl !== undefined && { receiptUrl }),
                    ...(tags !== undefined && { tags }),
                    ...(notes !== undefined && { notes })
                },
                include: {
                    fromAccount: true,
                    toAccount: true,
                    category: true
                }
            });

            return res.json(transaction);
        } catch (error) {
            console.error('Error updating transaction:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            return res.status(500).json({ error: 'Error updating transaction' });
        }
    }

    // DELETE /api/mantia/transactions/:id
    async delete(req, res) {
        try {
            const { id } = req.params;

            // Obtener transacción para revertir balances
            const transaction = await prisma.financia_Transaction.findUnique({
                where: { id }
            });

            if (!transaction) {
                return res.status(404).json({ error: 'Transaction not found' });
            }

            // Eliminar y revertir balances
            await prisma.$transaction(async (tx) => {
                // Revertir balances
                if (transaction.type === 'EXPENSE' && transaction.fromAccountId) {
                    await tx.financia_Account.update({
                        where: { id: transaction.fromAccountId },
                        data: {
                            currentBalance: {
                                increment: parseFloat(transaction.amount)
                            }
                        }
                    });
                }

                if (transaction.type === 'INCOME' && transaction.toAccountId) {
                    await tx.financia_Account.update({
                        where: { id: transaction.toAccountId },
                        data: {
                            currentBalance: {
                                decrement: parseFloat(transaction.amount)
                            }
                        }
                    });
                }

                if (transaction.type === 'TRANSFER') {
                    await tx.financia_Account.update({
                        where: { id: transaction.fromAccountId },
                        data: {
                            currentBalance: {
                                increment: parseFloat(transaction.amount)
                            }
                        }
                    });

                    await tx.financia_Account.update({
                        where: { id: transaction.toAccountId },
                        data: {
                            currentBalance: {
                                decrement: parseFloat(transaction.amount)
                            }
                        }
                    });
                }

                // Eliminar transacción
                await tx.financia_Transaction.delete({
                    where: { id }
                });
            });

            return res.status(204).send();
        } catch (error) {
            console.error('Error deleting transaction:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Transaction not found' });
            }
            return res.status(500).json({ error: 'Error deleting transaction' });
        }
    }

    // GET /api/mantia/transactions/stats
    async getStats(req, res) {
        try {
            const { startDate, endDate, accountId } = req.query;

            const where = {};
            if (startDate || endDate) {
                where.transactionDate = {};
                if (startDate) where.transactionDate.gte = new Date(startDate);
                if (endDate) where.transactionDate.lte = new Date(endDate);
            }
            if (accountId) {
                where.OR = [
                    { fromAccountId: accountId },
                    { toAccountId: accountId }
                ];
            }

            const [incomeStats, expenseStats] = await Promise.all([
                prisma.financia_Transaction.aggregate({
                    where: { ...where, type: 'INCOME' },
                    _sum: { amount: true },
                    _count: true
                }),
                prisma.financia_Transaction.aggregate({
                    where: { ...where, type: 'EXPENSE' },
                    _sum: { amount: true },
                    _count: true
                })
            ]);

            const totalIncome = incomeStats._sum.amount || 0;
            const totalExpense = expenseStats._sum.amount || 0;
            const balance = totalIncome - totalExpense;

            return res.json({
                income: {
                    total: parseFloat(totalIncome),
                    count: incomeStats._count
                },
                expense: {
                    total: parseFloat(totalExpense),
                    count: expenseStats._count
                },
                balance: parseFloat(balance)
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
            return res.status(500).json({ error: 'Error fetching stats' });
        }
    }
}

module.exports = new TransactionController();
