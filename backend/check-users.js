// Script temporal para verificar usuarios
require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isActive: true
            }
        })

        console.log('📊 Usuarios en la base de datos:')
        console.log(JSON.stringify(users, null, 2))
        console.log(`\n Total: ${users.length} usuarios`)
    } catch (error) {
        console.error('❌ Error:', error.message)
    } finally {
        await prisma.$disconnect()
    }
}

main()
