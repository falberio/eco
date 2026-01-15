// src/prisma/client.js
// Singleton del cliente Prisma para toda la app

require('dotenv/config')
const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const { Pool } = require('pg')

// Crear pool de conexiones con configuración de Supabase
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Supabase usa certificados autofirmados
})

// Crear adapter de PostgreSQL para Prisma v7
const adapter = new PrismaPg(pool)

// Instancia única del cliente (reutilizada en toda la app)
const prisma = new PrismaClient({ adapter })

module.exports = prisma
