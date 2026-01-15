require('dotenv/config')
const { PrismaClient } = require('@prisma/client')
const { PrismaPg } = require('@prisma/adapter-pg')
const { Pool } = require('pg')

const pool = new Pool({ 
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  const locations = await prisma.location.findMany()
  const items = await prisma.item.findMany()
  const menuItems = await prisma.menuItem.findMany()
  const containers = await prisma.container.findMany()
  
  console.log('\n✅ DATOS EN LA BASE DE DATOS:\n')
  console.log('📍 Locations:', locations.length, locations)
  console.log('🥘 Items:', items.length, items)
  console.log('🍽️ MenuItems:', menuItems.length, menuItems)
  console.log('📦 Containers:', containers.length, containers)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
