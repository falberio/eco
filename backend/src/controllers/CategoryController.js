// src/controllers/CategoryController.js
const prisma = require('../prisma/client');

class CategoryController {
    // GET /api/mantia/categories
    async getAll(req, res) {
        try {
            const { page = 1, limit = 100, isActive } = req.query;
            const skip = (page - 1) * limit;

            const where = {};
            if (isActive !== undefined) where.isActive = isActive === 'true';

            const [categories, total] = await Promise.all([
                prisma.financia_Category.findMany({
                    where,
                    include: {
                        parent: {
                            select: { id: true, name: true }
                        },
                        children: {
                            select: { id: true, name: true, icon: true, color: true }
                        },
                        _count: {
                            select: {
                                transactions: true,
                                budgets: true
                            }
                        }
                    },
                    skip: parseInt(skip),
                    take: parseInt(limit),
                    orderBy: { name: 'asc' }
                }),
                prisma.financia_Category.count({ where })
            ]);

            return res.json({
                data: categories,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Error fetching categories:', error);
            return res.status(500).json({ error: 'Error fetching categories' });
        }
    }

    // GET /api/mantia/categories/tree
    async getTree(req, res) {
        try {
            const { isActive } = req.query;

            const where = { parentId: null };
            if (isActive !== undefined) where.isActive = isActive === 'true';

            // Obtener categorías raíz con sus hijos recursivamente
            const categories = await prisma.financia_Category.findMany({
                where,
                include: {
                    children: {
                        include: {
                            children: true,
                            _count: {
                                select: { transactions: true, budgets: true }
                            }
                        }
                    },
                    _count: {
                        select: { transactions: true, budgets: true }
                    }
                },
                orderBy: { name: 'asc' }
            });

            return res.json(categories);
        } catch (error) {
            console.error('Error fetching category tree:', error);
            return res.status(500).json({ error: 'Error fetching category tree' });
        }
    }

    // GET /api/mantia/categories/:id
    async getById(req, res) {
        try {
            const { id } = req.params;

            const category = await prisma.financia_Category.findUnique({
                where: { id },
                include: {
                    parent: true,
                    children: true,
                    transactions: {
                        take: 10,
                        orderBy: { transactionDate: 'desc' },
                        include: {
                            fromAccount: { select: { name: true } },
                            toAccount: { select: { name: true } }
                        }
                    },
                    budgets: {
                        where: { isActive: true },
                        orderBy: { startDate: 'desc' }
                    },
                    _count: {
                        select: {
                            transactions: true,
                            budgets: true,
                            children: true
                        }
                    }
                }
            });

            if (!category) {
                return res.status(404).json({ error: 'Category not found' });
            }

            return res.json(category);
        } catch (error) {
            console.error('Error fetching category:', error);
            return res.status(500).json({ error: 'Error fetching category' });
        }
    }

    // POST /api/mantia/categories
    async create(req, res) {
        try {
            const { code, name, parentId, icon, color, notes } = req.body;

            // Validar que el parent existe si se proporciona
            if (parentId) {
                const parent = await prisma.financia_Category.findUnique({
                    where: { id: parentId }
                });
                if (!parent) {
                    return res.status(400).json({ error: 'Parent category not found' });
                }
            }

            const category = await prisma.financia_Category.create({
                data: {
                    code,
                    name,
                    parentId,
                    icon,
                    color,
                    notes,
                    isActive: true
                },
                include: {
                    parent: { select: { id: true, name: true } }
                }
            });

            return res.status(201).json(category);
        } catch (error) {
            console.error('Error creating category:', error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'Category code already exists' });
            }
            return res.status(500).json({ error: 'Error creating category' });
        }
    }

    // PUT /api/mantia/categories/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const { code, name, parentId, icon, color, notes, isActive } = req.body;

            // Validar que el parent existe si se proporciona
            if (parentId) {
                if (parentId === id) {
                    return res.status(400).json({ error: 'Category cannot be its own parent' });
                }
                const parent = await prisma.financia_Category.findUnique({
                    where: { id: parentId }
                });
                if (!parent) {
                    return res.status(400).json({ error: 'Parent category not found' });
                }
            }

            const category = await prisma.financia_Category.update({
                where: { id },
                data: {
                    ...(code !== undefined && { code }),
                    ...(name !== undefined && { name }),
                    ...(parentId !== undefined && { parentId }),
                    ...(icon !== undefined && { icon }),
                    ...(color !== undefined && { color }),
                    ...(notes !== undefined && { notes }),
                    ...(isActive !== undefined && { isActive })
                },
                include: {
                    parent: { select: { id: true, name: true } },
                    children: { select: { id: true, name: true } }
                }
            });

            return res.json(category);
        } catch (error) {
            console.error('Error updating category:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Category not found' });
            }
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'Category code already exists' });
            }
            return res.status(500).json({ error: 'Error updating category' });
        }
    }

    // DELETE /api/mantia/categories/:id
    async delete(req, res) {
        try {
            const { id } = req.params;

            // Verificar si hay transacciones o budgets asociados
            const [transactionCount, budgetCount, childrenCount] = await Promise.all([
                prisma.mantia_Transaction.count({ where: { categoryId: id } }),
                prisma.mantia_Budget.count({ where: { categoryId: id } }),
                prisma.financia_Category.count({ where: { parentId: id } })
            ]);

            if (transactionCount > 0 || budgetCount > 0 || childrenCount > 0) {
                return res.status(409).json({
                    error: 'Cannot delete category with existing transactions, budgets, or children',
                    transactionCount,
                    budgetCount,
                    childrenCount
                });
            }

            await prisma.financia_Category.delete({
                where: { id }
            });

            return res.status(204).send();
        } catch (error) {
            console.error('Error deleting category:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Category not found' });
            }
            return res.status(500).json({ error: 'Error deleting category' });
        }
    }
}

module.exports = new CategoryController();
