import { z } from 'zod'

/**
 * Validaciones compartidas con Zod
 * Usables en backend Y frontend
 */

// ===== COMUNES =====

export const emailSchema = z.string().email('Email inválido')

export const passwordSchema = z.string().min(6, 'Mínimo 6 caracteres')

export const paginationSchema = z.object({
    limit: z.number().int().positive().max(200).optional(),
    skip: z.number().int().nonnegative().optional(),
})

// ===== AUTH =====

export const loginSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
})

export const registerSchema = z.object({
    email: emailSchema,
    password: passwordSchema,
    name: z.string().min(2, 'Nombre muy corto').optional(),
})

// ===== TIPOS GENERADOS =====

export type LoginInput = z.infer<typeof loginSchema>
export type RegisterInput = z.infer<typeof registerSchema>
export type PaginationInput = z.infer<typeof paginationSchema>
