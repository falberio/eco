#!/usr/bin/env node
/**
 * Script para generar tipos TypeScript desde Prisma
 * y copiarlos al frontend shared
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🔄 Generando tipos desde Prisma...\n')

try {
    // 1. Generar el cliente de Prisma
    console.log('📦 Generando Prisma Client...')
    execSync('npx prisma generate', { stdio: 'inherit' })

    // 2. Leer el archivo de tipos generado
    const prismaTypesPath = path.join(__dirname, '../node_modules/.prisma/client/index.d.ts')
    const outputPath = path.join(__dirname, '../../frontend/shared/types/prisma.generated.ts')

    console.log('\n📝 Extrayendo tipos relevantes...')

    // 3. Crear archivo de tipos simplificado
    const typesContent = `/**
 * Tipos generados automáticamente desde Prisma
 * ⚠️ NO EDITAR MANUALMENTE - Generado con: npm run generate:types
 * Última generación: ${new Date().toISOString()}
 */

// Re-exportar tipos desde Prisma Client
export type { 
  User,
  Item,
  Location,
  Container,
  Batch,
  Reserve,
  MenuItem,
  ItemKind,
  UnitKind,
  ReserveStatus,
  LocationKind
} from '@prisma/client'

// Helpers de paginación
export interface PaginationParams {
  limit?: number
  skip?: number
}

export interface PaginationMeta {
  total: number
  limit: number
  skip: number
  hasMore?: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: PaginationMeta
}

// Tipos públicos (sin password)
export type UserPublic = Omit<User, 'password'>
`

    // 4. Escribir archivo
    fs.writeFileSync(outputPath, typesContent, 'utf8')

    console.log(`✅ Tipos generados en: ${outputPath}\n`)
    console.log('🎉 ¡Completado!')

} catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
}
