const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // Contar ubicaciones SHELF
    const shelves = await prisma.location.findMany({
        where: {
            code: { startsWith: 'SHELF-' }
        },
        include: {
            reserves: {
                where: { status: 'ACTIVE' }
            }
        },
        orderBy: { code: 'asc' }
    });

    console.log(`\n📍 UBICACIONES DE ESTANTERÍA:\n`);
    console.log(`Total de ubicaciones SHELF: ${shelves.length}\n`);

    shelves.slice(0, 10).forEach(loc => {
        console.log(`  ${loc.code} - Reservas activas: ${loc.reserves.length}`);
    });

    const withReserves = shelves.filter(s => s.reserves.length > 0);
    console.log(`\n✅ Ubicaciones con reservas: ${withReserves.length}`);
    console.log(`❌ Ubicaciones vacías: ${shelves.length - withReserves.length}`);
}

main()
    .catch(console.error)
    .finally(() => prisma.$disconnect());
