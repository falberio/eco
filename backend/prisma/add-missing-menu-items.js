const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔧 AGREGANDO ITEMS FALTANTES\n');

    // 1. HUEVOS REVUELTOS
    const huevosRevueltos = await prisma.item.upsert({
        where: { code: 'HUEVOS-REVUELTOS' },
        update: {},
        create: {
            code: 'HUEVOS-REVUELTOS',
            name: 'Huevos Revueltos',
            kind: 'RECIPE',
            category: 'Desayunos'
        }
    });

    await prisma.menuItem.create({
        data: {
            name: 'Huevos Revueltos',
            itemId: huevosRevueltos.id,
            section: 'Desayunos',
            isActive: true,
            notes: 'Vegetariano'
        }
    }).catch(() => console.log('⏭️  Huevos revueltos ya existe'));
    console.log('✅ Huevos Revueltos agregado al desayuno');

    // 2. TRAGOS FALTANTES
    console.log('\n🍹 Agregando tragos básicos...\n');

    // Gin Tonic clásico
    const ginTonic = await prisma.item.findFirst({ where: { name: 'Gin Tonic' } });
    if (!ginTonic) {
        const newGinTonic = await prisma.item.create({
            data: {
                code: 'GIN-TONIC',
                name: 'Gin Tonic',
                kind: 'RECIPE',
                category: 'Tragos'
            }
        });
        await prisma.menuItem.create({
            data: {
                name: 'Gin Tonic',
                itemId: newGinTonic.id,
                section: 'Bar - Tragos Clásicos',
                isActive: true
            }
        });
        console.log('✅ Gin Tonic agregado');
    }

    // Negroni
    const negroni = await prisma.item.findFirst({ where: { name: 'Negroni' } });
    if (negroni) {
        const menuNegroni = await prisma.menuItem.findFirst({
            where: { itemId: negroni.id, section: 'Bar - Tragos Clásicos' }
        });
        if (!menuNegroni) {
            await prisma.menuItem.create({
                data: {
                    name: 'Negroni',
                    itemId: negroni.id,
                    section: 'Bar - Tragos Clásicos',
                    isActive: true
                }
            });
            console.log('✅ Negroni agregado');
        }
    }

    // Caipiroska
    const caipiroska = await prisma.item.upsert({
        where: { code: 'CAIPIROSKA' },
        update: {},
        create: {
            code: 'CAIPIROSKA',
            name: 'Caipiroska',
            kind: 'RECIPE',
            category: 'Tragos'
        }
    });
    await prisma.menuItem.create({
        data: {
            name: 'Caipiroska',
            itemId: caipiroska.id,
            section: 'Bar - Tragos Clásicos',
            isActive: true
        }
    }).catch(() => { });
    console.log('✅ Caipiroska agregado');

    // Fernet con Coca
    const fernet = await prisma.item.findFirst({ where: { name: { contains: 'Fernet' } } });
    if (fernet) {
        const menuFernet = await prisma.menuItem.findFirst({
            where: { itemId: fernet.id }
        });
        if (!menuFernet) {
            await prisma.menuItem.create({
                data: {
                    name: 'Fernet con Coca',
                    itemId: fernet.id,
                    section: 'Bar - Aperitivos',
                    isActive: true
                }
            });
            console.log('✅ Fernet con Coca agregado');
        } else {
            console.log('⏭️  Fernet con Coca ya existe');
        }
    }

    // Campari con Naranja
    const campari = await prisma.item.findFirst({ where: { name: { contains: 'Campari' } } });
    if (campari) {
        const menuCampari = await prisma.menuItem.findFirst({
            where: { itemId: campari.id }
        });
        if (!menuCampari) {
            await prisma.menuItem.create({
                data: {
                    name: 'Campari con Naranja',
                    itemId: campari.id,
                    section: 'Bar - Aperitivos',
                    isActive: true
                }
            });
            console.log('✅ Campari con Naranja agregado');
        } else {
            console.log('⏭️  Campari con Naranja ya existe');
        }
    }

    // 3. VINOS
    console.log('\n🍷 Agregando vinos...\n');

    const vinos = await prisma.item.findMany({
        where: {
            name: { contains: 'Copa de' }
        }
    });

    for (const vino of vinos) {
        const exists = await prisma.menuItem.findFirst({
            where: { itemId: vino.id, section: 'Vinos' }
        });

        if (!exists) {
            await prisma.menuItem.create({
                data: {
                    name: vino.name,
                    itemId: vino.id,
                    section: 'Vinos',
                    isActive: true
                }
            }).catch(() => { });
            console.log(`✅ ${vino.name} agregado a Vinos`);
        }
    }

    console.log('\n🎉 ¡COMPLETADO!');
    await prisma.$disconnect();
}

main().catch(console.error);
