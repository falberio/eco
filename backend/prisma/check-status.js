const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔍 VERIFICANDO ESTADO:\n');

    // Tartas
    const tartas = await prisma.item.findMany({
        where: { name: { contains: 'Tarta' } }
    });
    console.log('Tartas en DB:', tartas.length);
    tartas.forEach(t => console.log(`  - ${t.name} (${t.code})`));

    // Menu items de tartas
    const tartasMenu = await prisma.menuItem.findMany({
        where: { section: 'Tartas' }
    });
    console.log('\nTartas en Menú:', tartasMenu.length);

    // Viandas containers
    const viandas = await prisma.container.findMany({
        where: { code: { contains: 'VIANDA' } },
        include: { type: true }
    });
    console.log('\nViandas containers:', viandas.length);
    if (viandas.length > 0) {
        console.log(`  Tipo: ${viandas[0].type.name} (${viandas[0].typeId})`);
    }

    await prisma.$disconnect();
}

main().catch(console.error);
