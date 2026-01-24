const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔧 COMPLETANDO MENÚ FALTANTE\n');

    // 1. Buscar o crear ñoquis
    const noquis = await prisma.item.upsert({
        where: { code: 'NOQUIS' },
        update: {},
        create: {
            code: 'NOQUIS',
            name: 'Ñoquis',
            kind: 'RECIPE',
            category: 'Pastas'
        }
    });

    // 2. Buscar o crear lasagna
    const lasagna = await prisma.item.upsert({
        where: { code: 'LASAGNA' },
        update: {},
        create: {
            code: 'LASAGNA',
            name: 'Lasagna',
            kind: 'RECIPE',
            category: 'Pastas'
        }
    });

    // 3. Crear pollo al horno
    const polloHorno = await prisma.item.upsert({
        where: { code: 'POLLO-PATAMUSLO' },
        update: {},
        create: {
            code: 'POLLO-PATAMUSLO',
            name: 'Patamuslo de Pollo al Horno',
            kind: 'PRODUCT',
            category: 'Carnes',
            notes: '6 porciones disponibles'
        }
    });

    // 4. Crear recetas de pollo
    const polloArroz = await prisma.item.upsert({
        where: { code: 'POLLO-ARROZ' },
        update: {},
        create: {
            code: 'POLLO-ARROZ',
            name: 'Pollo al Horno con Arroz',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    const polloPure = await prisma.item.upsert({
        where: { code: 'POLLO-PURE' },
        update: {},
        create: {
            code: 'POLLO-PURE',
            name: 'Pollo al Horno con Puré',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    // 5. Buscar tartas
    const tartaVerdura = await prisma.item.findFirst({ where: { name: 'Tarta de Verdura' } });
    const tartaZapallo = await prisma.item.findFirst({ where: { name: 'Tarta de Zapallo' } });

    console.log('📦 Items creados/verificados\n');

    // 6. Actualizar MenuItems
    const menuUpdates = [
        // Pastas
        { section: 'Pastas', name: 'Ñoquis con Salsa a Elección', itemId: noquis.id, notes: 'Vegetariano' },
        { section: 'Pastas', name: 'Lasagna', itemId: lasagna.id, notes: 'Omnívoro' },

        // Carnes - Pollo
        { section: 'Carnes', name: 'Pollo al Horno con Arroz', itemId: polloArroz.id, notes: 'Omnívoro' },
        { section: 'Carnes', name: 'Pollo al Horno con Puré', itemId: polloPure.id, notes: 'Omnívoro' },

        // Tartas (re-crear si no existen)
        { section: 'Tartas', name: 'Tarta de Verdura', itemId: tartaVerdura?.id, notes: 'Vegetariano' },
        { section: 'Tartas', name: 'Tarta de Zapallo', itemId: tartaZapallo?.id, notes: 'Vegetariano' },
    ];

    console.log('📋 Agregando items al menú:\n');

    for (const item of menuUpdates) {
        if (item.itemId) {
            // Verificar si ya existe
            const exists = await prisma.menuItem.findFirst({
                where: {
                    itemId: item.itemId,
                    section: item.section
                }
            });

            if (!exists) {
                await prisma.menuItem.create({
                    data: {
                        name: item.name,
                        itemId: item.itemId,
                        section: item.section,
                        isActive: true,
                        notes: item.notes
                    }
                });
                console.log(`  ✅ ${item.section} → ${item.name}`);
            } else {
                console.log(`  ⏭️  ${item.section} → ${item.name} (ya existe)`);
            }
        }
    }

    // 7. Actualizar nombres de hamburguesas con ingredientes
    console.log('\n🍔 Actualizando hamburguesas con ingredientes:\n');

    await prisma.menuItem.updateMany({
        where: { name: 'La Mediterránea' },
        data: { name: 'La Mediterránea (tomates secos, pesto albahaca)' }
    });
    console.log('  ✅ La Mediterránea actualizada');

    await prisma.menuItem.updateMany({
        where: { name: 'La Provenzal' },
        data: { name: 'La Provenzal (ajos confitados, morrones)' }
    });
    console.log('  ✅ La Provenzal actualizada');

    await prisma.menuItem.updateMany({
        where: { name: 'La del Bosque' },
        data: { name: 'La del Bosque (hongos, pesto)' }
    });
    console.log('  ✅ La del Bosque actualizada');

    // 8. Crear reserva de pollo
    console.log('\n🐔 Creando stock de pollo:\n');

    const viandaContainer = await prisma.container.findFirst({
        where: { code: { startsWith: 'VIANDA-' } }
    });

    if (viandaContainer) {
        const typeId = viandaContainer.typeId;

        // Crear contenedor para pollo
        const polloContainer = await prisma.container.create({
            data: {
                code: 'VIANDA-POLLO-001',
                typeId: typeId
            }
        });

        // Crear reserva
        await prisma.reserve.create({
            data: {
                code: 'RES-POLLO-001',
                itemId: polloHorno.id,
                containerId: polloContainer.id,
                qty: 6,
                unit: 'UNIT',
                status: 'ACTIVE'
            }
        });

        console.log('  ✅ Creado contenedor VIANDA-POLLO-001 con 6 porciones');
    }

    console.log('\n🎉 MENÚ ACTUALIZADO!');
    await prisma.$disconnect();
}

main().catch(console.error);
