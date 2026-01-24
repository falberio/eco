const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const containers = await prisma.container.findMany({
        include: {
            reserves: {
                include: { item: true }
            }
        },
        orderBy: { code: 'asc' }
    });

    console.log('\n📦 FRASCOS CARGADOS:\n');
    
    containers.forEach(container => {
        const activeReserve = container.reserves.find(r => r.netWeight_g !== null);
        const item = activeReserve?.item?.name || 'Vacío';
        const weight = activeReserve?.netWeight_g || 0;
        console.log(`${container.code} - ${item} (${weight}g)`);
    });

    await prisma.$disconnect();
}

main().catch(console.error);
