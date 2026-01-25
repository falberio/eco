// src/schemas/categorySchemas.js
const { z } = require('zod');

const createCategorySchema = z.object({
    code: z.string().optional(),
    name: z.string().min(1, 'Name is required'),
    parentId: z.string().optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    notes: z.string().optional()
});

const updateCategorySchema = z.object({
    code: z.string().optional(),
    name: z.string().min(1).optional(),
    parentId: z.string().optional(),
    icon: z.string().optional(),
    color: z.string().optional(),
    notes: z.string().optional(),
    isActive: z.boolean().optional()
});

module.exports = {
    createCategorySchema,
    updateCategorySchema
};
