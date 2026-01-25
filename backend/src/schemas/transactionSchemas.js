// src/schemas/transactionSchemas.js
const { z } = require('zod');

const transactionTypeEnum = z.enum(['INCOME', 'EXPENSE', 'TRANSFER']);

const createTransactionSchema = z.object({
    code: z.string().optional(),
    type: transactionTypeEnum,
    fromAccountId: z.string().optional(),
    toAccountId: z.string().optional(),
    amount: z.number().positive('Amount must be positive'),
    categoryId: z.string().optional(),
    description: z.string().optional(),
    transactionDate: z.string().datetime().optional(),
    isRecurring: z.boolean().optional().default(false),
    recurringRule: z.string().optional(),
    receiptNumber: z.string().optional(),
    receiptUrl: z.string().url().optional(),
    tags: z.string().optional(),
    notes: z.string().optional()
});

const updateTransactionSchema = z.object({
    description: z.string().optional(),
    categoryId: z.string().optional(),
    transactionDate: z.string().datetime().optional(),
    receiptNumber: z.string().optional(),
    receiptUrl: z.string().url().optional(),
    tags: z.string().optional(),
    notes: z.string().optional()
});

module.exports = {
    createTransactionSchema,
    updateTransactionSchema
};
