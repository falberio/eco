// src/schemas/budgetSchemas.js
const { z } = require('zod');

const budgetPeriodEnum = z.enum(['WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY', 'CUSTOM']);

const createBudgetSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    categoryId: z.string().optional(),
    amount: z.number().positive('Amount must be positive'),
    period: budgetPeriodEnum.optional().default('MONTHLY'),
    startDate: z.string().datetime(),
    endDate: z.string().datetime().optional(),
    alertThreshold: z.number().min(0).max(1).optional(),
    notes: z.string().optional()
});

const updateBudgetSchema = z.object({
    name: z.string().min(1).optional(),
    categoryId: z.string().optional(),
    amount: z.number().positive().optional(),
    period: budgetPeriodEnum.optional(),
    startDate: z.string().datetime().optional(),
    endDate: z.string().datetime().optional(),
    alertThreshold: z.number().min(0).max(1).optional(),
    notes: z.string().optional(),
    isActive: z.boolean().optional()
});

module.exports = {
    createBudgetSchema,
    updateBudgetSchema
};
