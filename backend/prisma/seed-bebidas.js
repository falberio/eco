// Script para cargar bebidas alcohólicas al inventario
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🍸 Cargando bebidas alcohólicas al inventario...\n');

    // Espirituosas y Aperitivos
    const spirits = [
        { code: 'GIN-BEEFEATER', name: 'Gin Beefeater London Dry', category: 'Gin', bottles: 1, percentage: 100 },
        { code: 'GIN-HERACLITO', name: 'Gin Heráclito', category: 'Gin', bottles: 1, percentage: 15 },
        { code: 'VODKA-PEPPAR', name: 'Vodka Absolut Peppar', category: 'Vodka', bottles: 1, percentage: 100 },
        { code: 'VODKA-RASPBERRI', name: 'Vodka Absolut Raspberri', category: 'Vodka', bottles: 1, percentage: 100 },
        { code: 'VODKA-VANILIA', name: 'Vodka Absolut Vanilia', category: 'Vodka', bottles: 1, percentage: 100 },
        { code: 'VODKA-MANGO', name: 'Vodka Absolut Mango', category: 'Vodka', bottles: 1, percentage: 5 },
        { code: 'WHISKY-JW-RED', name: 'Whisky Johnnie Walker Red Label', category: 'Whisky', bottles: 1, percentage: 60 },
        { code: 'PISCO-MISTRAL', name: 'Pisco Mistral', category: 'Pisco', bottles: 1, percentage: 100 },
        { code: 'FERNET-1882', name: 'Fernet 1882', category: 'Fernet', bottles: 1, percentage: 60 },
        { code: 'CAMPARI', name: 'Campari', category: 'Aperitivos', bottles: 1, percentage: 55 },
        { code: 'APEROL', name: 'Aperol', category: 'Aperitivos', bottles: 1, percentage: 10 },
        { code: 'MALIBU', name: 'Malibu', category: 'Ron', bottles: 1, percentage: 100 },
        { code: 'TIA-MARIA', name: 'Tia Maria', category: 'Licores', bottles: 2, percentage: 90 },
        { code: 'HESPERIDINA', name: 'Hesperidina', category: 'Aperitivos', bottles: 1, percentage: 100 },
        { code: 'AMARGO-OBRERO', name: 'Amargo Obrero', category: 'Aperitivos', bottles: 1, percentage: 100 }
    ];

    // Vinos tintos
    const redWines = [
        { code: 'VINO-BIANCHI-CAB', name: 'Don Valentin Lacrado Cabernet Sauvignon', producer: 'Bianchi', bottles: 3 },
        { code: 'VINO-BOSCA-MALB', name: 'Luigi Bosca Malbec', bottles: 1 },
        { code: 'VINO-PADRILLOS', name: 'Padrillos Malbec', bottles: 1 },
        { code: 'VINO-PIEL-LOBO', name: 'Piel de Lobo Malbec', bottles: 1 },
        { code: 'VINO-FDM-PINOT', name: 'Fin del Mundo Pinot Noir', bottles: 1 }
    ];

    // Vinos blancos y rosados
    const whiteWines = [
        { code: 'VINO-DD-CHARD', name: 'Don David Chardonnay', bottles: 2 },
        { code: 'VINO-ELEM-ROSADO', name: 'Elementos Rosado de Torrontes', bottles: 3 }
    ];

    let itemsCreated = 0;
    let reservesCreated = 0;

    // Cargar espirituosas
    console.log('🥃 Destilados y Aperitivos:');
    for (const spirit of spirits) {
        const item = await prisma.item.upsert({
            where: { code: spirit.code },
            update: { name: spirit.name },
            create: {
                code: spirit.code,
                name: spirit.name,
                kind: 'PRODUCT',
                category: spirit.category,
                defaultUnit: 'UNIT',
                notes: `${spirit.percentage}% lleno`
            }
        });
        itemsCreated++;

        await prisma.reserve.upsert({
            where: { code: `RES-${spirit.code}` },
            update: { unitCount: spirit.bottles },
            create: {
                code: `RES-${spirit.code}`,
                itemId: item.id,
                status: 'ACTIVE',
                unitCount: spirit.bottles,
                notes: `${spirit.percentage}% contenido`
            }
        });
        reservesCreated++;
        console.log(`  ✓ ${spirit.name} (${spirit.percentage}%)`);
    }

    // Cargar vinos tintos
    console.log('\n🍷 Vinos Tintos:');
    for (const wine of redWines) {
        const item = await prisma.item.upsert({
            where: { code: wine.code },
            update: { name: wine.name },
            create: {
                code: wine.code,
                name: wine.name,
                kind: 'PRODUCT',
                category: 'Vinos Tintos',
                defaultUnit: 'UNIT',
                notes: wine.producer ? `Bodega: ${wine.producer}` : null
            }
        });
        itemsCreated++;

        await prisma.reserve.upsert({
            where: { code: `RES-${wine.code}` },
            update: { unitCount: wine.bottles },
            create: {
                code: `RES-${wine.code}`,
                itemId: item.id,
                status: 'ACTIVE',
                unitCount: wine.bottles
            }
        });
        reservesCreated++;
        console.log(`  ✓ ${wine.name} (${wine.bottles} botella${wine.bottles > 1 ? 's' : ''})`);
    }

    // Cargar vinos blancos/rosados
    console.log('\n🥂 Vinos Blancos y Rosados:');
    for (const wine of whiteWines) {
        const item = await prisma.item.upsert({
            where: { code: wine.code },
            update: { name: wine.name },
            create: {
                code: wine.code,
                name: wine.name,
                kind: 'PRODUCT',
                category: 'Vinos Blancos y Rosados',
                defaultUnit: 'UNIT'
            }
        });
        itemsCreated++;

        await prisma.reserve.upsert({
            where: { code: `RES-${wine.code}` },
            update: { unitCount: wine.bottles },
            create: {
                code: `RES-${wine.code}`,
                itemId: item.id,
                status: 'ACTIVE',
                unitCount: wine.bottles
            }
        });
        reservesCreated++;
        console.log(`  ✓ ${wine.name} (${wine.bottles} botella${wine.bottles > 1 ? 's' : ''})`);
    }

    console.log(`\n📊 Resumen:`);
    console.log(`   - Bebidas agregadas: ${itemsCreated}`);
    console.log(`   - Stock registrado: ${reservesCreated} reservas`);
    console.log(`\n🎉 ¡Listo! Ahora crea los tragos/cocteles en el menú`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
