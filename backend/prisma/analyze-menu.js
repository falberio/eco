const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const menuItems = await prisma.menuItem.findMany({
        include: {
            item: true
        },
        orderBy: { section: 'asc' }
    });

    console.log('\n📋 ANÁLISIS DEL MENÚ ACTUAL:\n');
    
    // Agrupar por sección
    const sections = {};
    menuItems.forEach(mi => {
        const section = mi.section || 'Sin sección';
        if (!sections[section]) sections[section] = [];
        sections[section].push({
            name: mi.name,
            kind: mi.item.kind,
            active: mi.isActive
        });
    });

    Object.entries(sections).forEach(([section, items]) => {
        console.log(`\n🔹 ${section}:`);
        items.forEach(item => {
            const icon = item.kind === 'RECIPE' ? '🍲' : '🥗';
            const status = item.active ? '✅' : '❌';
            console.log(`  ${status} ${icon} ${item.name}`);
        });
    });

    console.log(`\n\n📊 RESUMEN:`);
    console.log(`Total items: ${menuItems.length}`);
    console.log(`Activos: ${menuItems.filter(m => m.isActive).length}`);
    console.log(`Recetas: ${menuItems.filter(m => m.item.kind === 'RECIPE').length}`);
    console.log(`Productos: ${menuItems.filter(m => m.item.kind === 'PRODUCT').length}`);

    await prisma.$disconnect();
}

main().catch(console.error);
