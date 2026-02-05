// src/schemas/accountSchemas.js
const { z } = require('zod');

const accountTypeEnum = z.enum(['CASH', 'BANK', 'CREDIT_CARD', 'DEBIT_CARD', 'DIGITAL', 'OTHER']);

const createAccountSchema = z.object({
    code: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    type: accountTypeEnum,
    initialBalance: z.number().optional().default(0),
    currency: z.string().length(3).optional().default('ARS'),
    icon: z.string().optional(),
    color: z.string().optional(),
    notes: z.string().optional()
});

const updateAccountSchema = z.object({
    code: z.string().optional(),
    name: z.string().min(1).optional(),
    type: accountTypeEnum.optional(),
    currency: z.string().length(3).optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    notes: z.string().optional(),
    isActive: z.boolean().optional()
});

module.exports = {
    createAccountSchema,
    updateAccountSchema
};
