// Script para cargar los frascos de la alacena con sus productos
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🚀 Iniciando carga de frascos y productos...\n');

    // 1. Crear ubicación principal
    const mainLocation = await prisma.location.upsert({
        where: { code: 'ALACENA-PRINCIPAL' },
        update: {},
        create: {
            code: 'ALACENA-PRINCIPAL',
            name: 'Estantería Principal',
            kind: 'AREA',
            sortIndex: 0,
            notes: 'Sistema EN_SECO_ALACENA - Orientación: arriba→abajo, izquierda→derecha'
        }
    });
    console.log('✅ Ubicación principal creada:', mainLocation.name);

    // 2. Crear estantes (shelves)
    const shelves = [];
    for (let i = 1; i <= 5; i++) {
        const shelf = await prisma.location.upsert({
            where: { code: `SHELF-${i}` },
            update: {},
            create: {
                code: `SHELF-${i}`,
                name: `Estante ${i}`,
                kind: 'SECTION',
                parentId: mainLocation.id,
                sortIndex: i,
                notes: i === 3 ? 'Posiciones 1 y 2 reservadas para especias' : null
            }
        });
        shelves.push(shelf);
    }
    console.log(`✅ ${shelves.length} estantes creados\n`);

    // 3. Crear tipo de contenedor (frasco estándar)
    const jarType = await prisma.containerType.upsert({
        where: { code: 'FRASCO-STD' },
        update: {},
        create: {
            code: 'FRASCO-STD',
            name: 'Frasco estándar alacena',
            nominalVolume_ml: 750,
            notes: 'Frasco de vidrio para secos'
        }
    });
    console.log('✅ Tipo de contenedor creado:', jarType.name);

    // 4. Datos de productos por estante
    const shelfData = [
        {
            shelf: 1,
            items: [
                { id: 1, product: "Azúcar impalpable", net_g: 363, stock: "medio" },
                { id: 2, product: "Nueces", net_g: 192, stock: "medio" },
                { id: 3, product: "Maíz salado", net_g: 57, stock: "critico" },
                { id: 4, product: "Sal rosa", net_g: 858, stock: "alto" },
                { id: 5, product: "Arroz largo fino", net_g: 184, stock: "medio" },
                { id: 6, product: "Tomates secos", net_g: 153, stock: "critico" }
            ]
        },
        {
            shelf: 2,
            items: [
                { id: 7, product: "Maíz pisingallo", net_g: 278, stock: "medio" },
                { id: 8, product: "Lentejas chicas", net_g: 148, stock: "medio" },
                { id: 9, product: "Lentejas coloradas", net_g: 392, stock: "bueno" },
                { id: 10, product: "Lentejas grandes (lentejones)", net_g: 555, stock: "bueno" },
                { id: 11, product: "Porotos blancos", net_g: 397, stock: "bueno" },
                { id: 12, product: "Porotos colorados", net_g: 234, stock: "medio" }
            ]
        },
        {
            shelf: 3,
            items: [
                { id: 13, product: "Salvado de trigo", net_g: 201, stock: "medio" },
                { id: 14, product: "Polenta", net_g: 45, stock: "critico" },
                { id: 15, product: "Fideos de sopa", net_g: 78, stock: "critico" },
                { id: 16, product: "Fideos moñito", net_g: 333, stock: "bueno" }
            ]
        },
        {
            shelf: 4,
            items: [
                { id: 17, product: "Avena", net_g: 216, stock: "medio" },
                { id: 18, product: "Duraznos deshidratados", net_g: 225, stock: "medio" },
                { id: 19, product: "Damascos deshidratados", net_g: 174, stock: "medio" },
                { id: 20, product: "Ciruelas deshidratadas", net_g: 104, stock: "critico" },
                { id: 21, product: "Pasas negras", net_g: 32, stock: "critico" },
                { id: 22, product: "Pasas rubias", net_g: 32, stock: "critico" }
            ]
        },
        {
            shelf: 5,
            items: [
                { id: 23, product: "Sal gruesa", net_g: 547, stock: "alto" },
                { id: 24, product: "Leche en polvo", net_g: 215, stock: "medio" },
                { id: 25, product: "Arroz (tipo a definir)", net_g: 156, stock: "medio" },
                { id: 26, product: "Arroz para sushi", net_g: 363, stock: "bueno" },
                { id: 27, product: "Azúcar común", net_g: 677, stock: "alto" },
                { id: 28, product: "Arroz Carolina", net_g: 314, stock: "bueno" }
            ]
        }
    ];

    // 5. Crear items, contenedores y reservas
    let totalCreated = 0;

    for (const shelfInfo of shelfData) {
        const shelf = shelves[shelfInfo.shelf - 1];
        console.log(`\n📦 Procesando ${shelf.name}...`);

        for (const itemData of shelfInfo.items) {
            // Crear el Item (producto)
            const item = await prisma.item.upsert({
                where: { code: `ITEM-${itemData.id.toString().padStart(3, '0')}` },
                update: {
                    name: itemData.product,
                },
                create: {
                    code: `ITEM-${itemData.id.toString().padStart(3, '0')}`,
                    name: itemData.product,
                    kind: 'PRODUCT',
                    defaultUnit: 'GRAM',
                    notes: `Stock: ${itemData.stock}`
                }
            });

            // Crear el Container (frasco)
            const container = await prisma.container.upsert({
                where: { code: `JAR-${itemData.id.toString().padStart(3, '0')}` },
                update: {},
                create: {
                    code: `JAR-${itemData.id.toString().padStart(3, '0')}`,
                    typeId: jarType.id,
                    notes: `${shelf.name} - Posición ${itemData.id}`
                }
            });

            // Crear la Reserve (stock actual)
            const reserve = await prisma.reserve.upsert({
                where: { code: `RES-${itemData.id.toString().padStart(3, '0')}` },
                update: {
                    netWeight_g: itemData.net_g,
                },
                create: {
                    code: `RES-${itemData.id.toString().padStart(3, '0')}`,
                    itemId: item.id,
                    locationId: shelf.id,
                    containerId: container.id,
                    status: 'ACTIVE',
                    netWeight_g: itemData.net_g,
                    notes: `Stock inicial: ${itemData.stock}`
                }
            });

            console.log(`  ✓ ${itemData.product}: ${itemData.net_g}g (${itemData.stock})`);
            totalCreated++;
        }
    }

    console.log(`\n🎉 ¡Completado! ${totalCreated} productos cargados en la alacena`);
    console.log('\n📊 Resumen:');
    console.log(`   - Ubicaciones: 1 área principal + ${shelves.length} estantes`);
    console.log(`   - Items: ${totalCreated} productos`);
    console.log(`   - Contenedores: ${totalCreated} frascos`);
    console.log(`   - Reservas: ${totalCreated} registros de stock`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
