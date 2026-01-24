const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔧 ARREGLANDO ITEMS FALTANTES\n');

    // 1. AGREGAR TARTAS AL MENÚ
    const tartaVerdura = await prisma.item.findFirst({ where: { code: 'TARTA-VERDURA' } });
    const tartaZapallo = await prisma.item.findFirst({ where: { code: 'TARTA-ZAPALLO' } });

    if (tartaVerdura) {
        await prisma.menuItem.upsert({
            where: { id: 'temp-tarta-verdura' },
            update: {},
            create: {
                id: 'temp-tarta-verdura',
                name: 'Tarta de Verdura',
                itemId: tartaVerdura.id,
                section: 'Tartas',
                isActive: true,
                notes: 'Vegetariano'
            }
        }).catch(async () => {
            // Si falla el upsert, crear directamente
            await prisma.menuItem.create({
                data: {
                    name: 'Tarta de Verdura',
                    itemId: tartaVerdura.id,
                    section: 'Tartas',
                    isActive: true,
                    notes: 'Vegetariano'
                }
            });
        });
        console.log('✅ Tarta de Verdura agregada al menú');
    }

    if (tartaZapallo) {
        await prisma.menuItem.create({
            data: {
                name: 'Tarta de Zapallo',
                itemId: tartaZapallo.id,
                section: 'Tartas',
                isActive: true,
                notes: 'Vegetariano'
            }
        }).catch(() => console.log('⏭️  Tarta de Zapallo ya existe'));
        console.log('✅ Tarta de Zapallo agregada al menú');
    }

    // 2. CREAR TIPO DE CONTENEDOR PARA VIANDAS
    const viandaType = await prisma.containerType.upsert({
        where: { code: 'VIANDA-STD' },
        update: {},
        create: {
            code: 'VIANDA-STD',
            name: 'Vianda estándar',
            notes: 'Porciones individuales de comida preparada'
        }
    });
    console.log('\n✅ Tipo de contenedor para viandas creado');

    // 3. CREAR CONTENEDOR Y STOCK DE POLLO
    const polloItem = await prisma.item.findFirst({ where: { code: 'POLLO-PATAMUSLO' } });

    if (polloItem) {
        const polloContainer = await prisma.container.upsert({
            where: { code: 'VIANDA-POLLO-001' },
            update: {},
            create: {
                code: 'VIANDA-POLLO-001',
                typeId: viandaType.id
            }
        });

        const existingReserve = await prisma.reserve.findFirst({
            where: { containerId: polloContainer.id }
        });

        if (!existingReserve) {
            await prisma.reserve.create({
                data: {
                    code: 'RES-POLLO-001',
                    itemId: polloItem.id,
                    containerId: polloContainer.id,
                    unitCount: 6,
                    status: 'ACTIVE'
                }
            });
        }

        console.log('✅ Pollo creado: 6 porciones en VIANDA-POLLO-001');
    }

    console.log('\n🎉 ¡TODO ARREGLADO!');
    await prisma.$disconnect();
}

main().catch(console.error);
