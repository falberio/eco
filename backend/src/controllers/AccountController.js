// src/controllers/AccountController.js
const prisma = require('../prisma/client');

class AccountController {
    // GET /api/mantia/accounts
    async getAll(req, res) {
        try {
            const { page = 1, limit = 20, type, isActive } = req.query;
            const skip = (page - 1) * limit;

            const where = {};
            if (type) where.type = type;
            if (isActive !== undefined) where.isActive = isActive === 'true';

            const [accounts, total] = await Promise.all([
                prisma.financia_Account.findMany({
                    where,
                    skip: parseInt(skip),
                    take: parseInt(limit),
                    orderBy: { name: 'asc' }
                }),
                prisma.financia_Account.count({ where })
            ]);

            return res.json({
                data: accounts,
                pagination: {
                    page: parseInt(page),
                    limit: parseInt(limit),
                    total,
                    totalPages: Math.ceil(total / limit)
                }
            });
        } catch (error) {
            console.error('Error fetching accounts:', error);
            return res.status(500).json({ error: 'Error fetching accounts' });
        }
    }

    // GET /api/mantia/accounts/:id
    async getById(req, res) {
        try {
            const { id } = req.params;

            const account = await prisma.financia_Account.findUnique({
                where: { id },
                include: {
                    transactionsFrom: {
                        take: 10,
                        orderBy: { transactionDate: 'desc' }
                    },
                    transactionsTo: {
                        take: 10,
                        orderBy: { transactionDate: 'desc' }
                    }
                }
            });

            if (!account) {
                return res.status(404).json({ error: 'Account not found' });
            }

            return res.json(account);
        } catch (error) {
            console.error('Error fetching account:', error);
            return res.status(500).json({ error: 'Error fetching account' });
        }
    }

    // POST /api/mantia/accounts
    async create(req, res) {
        try {
            const { code, name, type, initialBalance, currency, icon, color, notes } = req.body;

            const account = await prisma.financia_Account.create({
                data: {
                    code,
                    name,
                    type,
                    initialBalance: initialBalance || 0,
                    currentBalance: initialBalance || 0,
                    currency: currency || 'ARS',
                    icon,
                    color,
                    notes,
                    isActive: true
                }
            });

            return res.status(201).json(account);
        } catch (error) {
            console.error('Error creating account:', error);
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'Account code already exists' });
            }
            return res.status(500).json({ error: 'Error creating account' });
        }
    }

    // PUT /api/mantia/accounts/:id
    async update(req, res) {
        try {
            const { id } = req.params;
            const { code, name, type, currency, icon, color, notes, isActive } = req.body;

            // No permitimos actualizar balances directamente (se manejan con transactions)
            const account = await prisma.financia_Account.update({
                where: { id },
                data: {
                    ...(code !== undefined && { code }),
                    ...(name !== undefined && { name }),
                    ...(type !== undefined && { type }),
                    ...(currency !== undefined && { currency }),
                    ...(icon !== undefined && { icon }),
                    ...(color !== undefined && { color }),
                    ...(notes !== undefined && { notes }),
                    ...(isActive !== undefined && { isActive })
                }
            });

            return res.json(account);
        } catch (error) {
            console.error('Error updating account:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Account not found' });
            }
            if (error.code === 'P2002') {
                return res.status(409).json({ error: 'Account code already exists' });
            }
            return res.status(500).json({ error: 'Error updating account' });
        }
    }

    // DELETE /api/mantia/accounts/:id
    async delete(req, res) {
        try {
            const { id } = req.params;

            // Verificar si hay transacciones asociadas
            const transactionCount = await prisma.mantia_Transaction.count({
                where: {
                    OR: [
                        { fromAccountId: id },
                        { toAccountId: id }
                    ]
                }
            });

            if (transactionCount > 0) {
                return res.status(409).json({
                    error: 'Cannot delete account with existing transactions',
                    transactionCount
                });
            }

            await prisma.financia_Account.delete({
                where: { id }
            });

            return res.status(204).send();
        } catch (error) {
            console.error('Error deleting account:', error);
            if (error.code === 'P2025') {
                return res.status(404).json({ error: 'Account not found' });
            }
            return res.status(500).json({ error: 'Error deleting account' });
        }
    }

    // GET /api/mantia/accounts/:id/balance
    async getBalance(req, res) {
        try {
            const { id } = req.params;

            const account = await prisma.financia_Account.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    currentBalance: true,
                    initialBalance: true,
                    currency: true
                }
            });

            if (!account) {
                return res.status(404).json({ error: 'Account not found' });
            }

            return res.json(account);
        } catch (error) {
            console.error('Error fetching balance:', error);
            return res.status(500).json({ error: 'Error fetching balance' });
        }
    }
}

module.exports = new AccountController();
