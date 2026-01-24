const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔄 REPLANTEO COMPLETO DEL MENÚ\n');

    // 1. LIMPIAR MENÚ ACTUAL
    console.log('🗑️  Eliminando MenuItems antiguos...');
    await prisma.menuItem.deleteMany({});
    console.log('✅ MenuItems eliminados\n');

    // 2. CREAR NUEVOS INGREDIENTES
    console.log('📦 Creando nuevos ingredientes...');
    
    const morrones = await prisma.item.upsert({
        where: { code: 'MORRONES-CONSERVA' },
        update: {},
        create: {
            code: 'MORRONES-CONSERVA',
            name: 'Morrones en conserva',
            kind: 'PRODUCT',
            category: 'Conservas',
            defaultUnit: 'GRAM'
        }
    });

    const ajosConfitados = await prisma.item.upsert({
        where: { code: 'AJOS-CONFITADOS' },
        update: {},
        create: {
            code: 'AJOS-CONFITADOS',
            name: 'Ajos confitados',
            kind: 'PRODUCT',
            category: 'Conservas',
            defaultUnit: 'GRAM'
        }
    });

    const tomatosSecos = await prisma.item.upsert({
        where: { code: 'TOMATES-SECOS' },
        update: {},
        create: {
            code: 'TOMATES-SECOS',
            name: 'Tomates secos en conserva',
            kind: 'PRODUCT',
            category: 'Conservas',
            defaultUnit: 'GRAM'
        }
    });

    const pestoAlbahaca = await prisma.item.upsert({
        where: { code: 'PESTO-ALBAHACA' },
        update: {},
        create: {
            code: 'PESTO-ALBAHACA',
            name: 'Pesto de albahaca',
            kind: 'PRODUCT',
            category: 'Salsas',
            defaultUnit: 'GRAM'
        }
    });

    const pestoTomate = await prisma.item.upsert({
        where: { code: 'PESTO-TOMATE' },
        update: {},
        create: {
            code: 'PESTO-TOMATE',
            name: 'Pesto de tomates secos',
            kind: 'PRODUCT',
            category: 'Salsas',
            defaultUnit: 'GRAM'
        }
    });

    const hongosSecos = await prisma.item.upsert({
        where: { code: 'HONGOS-SECOS' },
        update: {},
        create: {
            code: 'HONGOS-SECOS',
            name: 'Hongos secos',
            kind: 'PRODUCT',
            category: 'Deshidratados',
            defaultUnit: 'GRAM'
        }
    });

    const banana = await prisma.item.upsert({
        where: { code: 'BANANA' },
        update: {},
        create: {
            code: 'BANANA',
            name: 'Banana',
            kind: 'PRODUCT',
            category: 'Frutas frescas',
            defaultUnit: 'UNIT'
        }
    });

    const yogur = await prisma.item.upsert({
        where: { code: 'YOGUR' },
        update: {},
        create: {
            code: 'YOGUR',
            name: 'Yogur',
            kind: 'PRODUCT',
            category: 'Lácteos',
            defaultUnit: 'UNIT'
        }
    });

    console.log('✅ Ingredientes creados\n');

    // 3. CREAR/ACTUALIZAR RECETAS
    console.log('🍳 Creando recetas...');

    // DESAYUNOS
    const bowlAvenaFrutas = await prisma.item.upsert({
        where: { code: 'BOWL-AVENA-FRUTAS' },
        update: {},
        create: {
            code: 'BOWL-AVENA-FRUTAS',
            name: 'Bowl de Avena con Frutas Deshidratadas',
            kind: 'RECIPE',
            category: 'Desayunos'
        }
    });

    const yogurtBanana = await prisma.item.upsert({
        where: { code: 'YOGURT-BANANA' },
        update: {},
        create: {
            code: 'YOGURT-BANANA',
            name: 'Yogurt con Banana',
            kind: 'RECIPE',
            category: 'Desayunos'
        }
    });

    // HAMBURGUESAS (al plato)
    const hamburguesaArroz = await prisma.item.upsert({
        where: { code: 'HAMBURGUESA-ARROZ' },
        update: {},
        create: {
            code: 'HAMBURGUESA-ARROZ',
            name: 'Hamburguesa Casera al Plato con Arroz',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    const hamburguesaPure = await prisma.item.upsert({
        where: { code: 'HAMBURGUESA-PURE' },
        update: {},
        create: {
            code: 'HAMBURGUESA-PURE',
            name: 'Hamburguesa Casera al Plato con Puré',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    const albondigasArroz = await prisma.item.upsert({
        where: { code: 'ALBONDIGAS-ARROZ' },
        update: {},
        create: {
            code: 'ALBONDIGAS-ARROZ',
            name: 'Albóndigas con Salsa y Arroz',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    const albondigasPure = await prisma.item.upsert({
        where: { code: 'ALBONDIGAS-PURE' },
        update: {},
        create: {
            code: 'ALBONDIGAS-PURE',
            name: 'Albóndigas con Salsa y Puré',
            kind: 'RECIPE',
            category: 'Carnes'
        }
    });

    // HAMBURGUESAS (con pan)
    const hambMediterranea = await prisma.item.upsert({
        where: { code: 'HAMB-MEDITERRANEA' },
        update: {},
        create: {
            code: 'HAMB-MEDITERRANEA',
            name: 'La Mediterránea',
            kind: 'RECIPE',
            category: 'Hamburguesas',
            notes: 'Con tomates secos y pesto de albahaca'
        }
    });

    const hambProvenzal = await prisma.item.upsert({
        where: { code: 'HAMB-PROVENZAL' },
        update: {},
        create: {
            code: 'HAMB-PROVENZAL',
            name: 'La Provenzal',
            kind: 'RECIPE',
            category: 'Hamburguesas',
            notes: 'Con ajos confitados y morrones'
        }
    });

    const hambBosque = await prisma.item.upsert({
        where: { code: 'HAMB-BOSQUE' },
        update: {},
        create: {
            code: 'HAMB-BOSQUE',
            name: 'La del Bosque',
            kind: 'RECIPE',
            category: 'Hamburguesas',
            notes: 'Con hongos secos rehidratados y pesto'
        }
    });

    // PASTAS
    const pastasBolognesa = await prisma.item.upsert({
        where: { code: 'PASTA-BOLOGNESA' },
        update: {},
        create: {
            code: 'PASTA-BOLOGNESA',
            name: 'Fideos con Salsa Boloñesa',
            kind: 'RECIPE',
            category: 'Pastas'
        }
    });

    const pastasPestoAlbahaca = await prisma.item.upsert({
        where: { code: 'PASTA-PESTO-ALBAHACA' },
        update: {},
        create: {
            code: 'PASTA-PESTO-ALBAHACA',
            name: 'Fideos con Pesto de Albahaca',
            kind: 'RECIPE',
            category: 'Pastas'
        }
    });

    const pastasPestoTomate = await prisma.item.upsert({
        where: { code: 'PASTA-PESTO-TOMATE' },
        update: {},
        create: {
            code: 'PASTA-PESTO-TOMATE',
            name: 'Fideos con Pesto de Tomates Secos',
            kind: 'RECIPE',
            category: 'Pastas'
        }
    });

    console.log('✅ Recetas creadas\n');

    // 4. CREAR MENU ITEMS CON NUEVA ESTRUCTURA
    console.log('📋 Creando menú organizado...\n');

    const menuData = [
        // ============ DESAYUNOS ============
        { section: 'Desayunos', name: 'Bowl de Avena con Frutas Deshidratadas', itemId: bowlAvenaFrutas.id, notes: 'Vegetariano, Vegano' },
        { section: 'Desayunos', name: 'Yogurt con Banana', itemId: yogurtBanana.id, notes: 'Vegetariano' },
        { section: 'Desayunos', name: 'Tostadas con Mermelada', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Tostadas con mermelada' } } }))?.id, notes: 'Vegetariano, Vegano' },
        { section: 'Desayunos', name: 'Tostadas con Manteca', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Tostadas con manteca' } } }))?.id, notes: 'Vegetariano' },

        // ============ CARNES ============
        { section: 'Carnes', name: 'Hamburguesa Casera al Plato con Arroz', itemId: hamburguesaArroz.id, notes: 'Omnívoro' },
        { section: 'Carnes', name: 'Hamburguesa Casera al Plato con Puré', itemId: hamburguesaPure.id, notes: 'Omnívoro' },
        { section: 'Carnes', name: 'Albóndigas con Salsa y Arroz', itemId: albondigasArroz.id, notes: 'Omnívoro' },
        { section: 'Carnes', name: 'Albóndigas con Salsa y Puré', itemId: albondigasPure.id, notes: 'Omnívoro' },

        // ============ HAMBURGUESAS ============
        { section: 'Hamburguesas', name: 'La Mediterránea', itemId: hambMediterranea.id, notes: 'Omnívoro - Tomates secos y pesto de albahaca' },
        { section: 'Hamburguesas', name: 'La Provenzal', itemId: hambProvenzal.id, notes: 'Omnívoro - Ajos confitados y morrones' },
        { section: 'Hamburguesas', name: 'La del Bosque', itemId: hambBosque.id, notes: 'Omnívoro - Hongos secos y pesto' },

        // ============ PASTAS ============
        { section: 'Pastas', name: 'Fideos con Salsa Boloñesa', itemId: pastasBolognesa.id, notes: 'Omnívoro' },
        { section: 'Pastas', name: 'Fideos con Pesto de Albahaca', itemId: pastasPestoAlbahaca.id, notes: 'Vegetariano' },
        { section: 'Pastas', name: 'Fideos con Pesto de Tomates Secos', itemId: pastasPestoTomate.id, notes: 'Vegetariano' },

        // ============ TARTAS ============
        { section: 'Tartas', name: 'Tarta de Verdura', itemId: (await prisma.item.findFirst({ where: { name: 'Tarta de Verdura' } }))?.id, notes: 'Vegetariano' },
        { section: 'Tartas', name: 'Tarta de Zapallo', itemId: (await prisma.item.findFirst({ where: { name: 'Tarta de Zapallo' } }))?.id, notes: 'Vegetariano' },

        // ============ VEGETARIANOS ============
        { section: 'Platos Vegetarianos', name: 'Guiso de Lentejas con Vegetales', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Guiso de Lentejas' } } }))?.id, notes: 'Vegano, Apto Celíaco' },
        { section: 'Platos Vegetarianos', name: 'Polenta Cremosa con Salsa', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Polenta' } } }))?.id, notes: 'Vegetariano' },
        { section: 'Platos Vegetarianos', name: 'Arroz Primavera con Nueces', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Arroz Primavera' } } }))?.id, notes: 'Vegetariano, Apto Celíaco' },
        { section: 'Platos Vegetarianos', name: 'Sopa de Verduras', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Sopa' } } }))?.id, notes: 'Vegano, Apto Celíaco' },

        // ============ CAFETERÍA ============
        { section: 'Cafetería', name: 'Cortado (espresso)', itemId: (await prisma.item.findFirst({ where: { name: 'Cortado (espresso)' } }))?.id },
        { section: 'Cafetería', name: 'Cortado (doble)', itemId: (await prisma.item.findFirst({ where: { name: 'Cortado (doble)' } }))?.id },
        { section: 'Cafetería', name: 'Café con leche', itemId: (await prisma.item.findFirst({ where: { name: 'Café con leche' } }))?.id },
        { section: 'Cafetería', name: 'Café doble', itemId: (await prisma.item.findFirst({ where: { name: 'Café doble' } }))?.id },
        { section: 'Cafetería', name: 'Lágrima', itemId: (await prisma.item.findFirst({ where: { name: 'Lágrima' } }))?.id },
        { section: 'Cafetería', name: 'Café espresso', itemId: (await prisma.item.findFirst({ where: { name: 'Café espresso' } }))?.id },
        { section: 'Cafetería', name: 'Té verde', itemId: (await prisma.item.findFirst({ where: { name: 'Té verde' } }))?.id },
        { section: 'Cafetería', name: 'Té negro', itemId: (await prisma.item.findFirst({ where: { name: 'Té negro' } }))?.id },
        { section: 'Cafetería', name: 'Té de hierbas', itemId: (await prisma.item.findFirst({ where: { name: 'Té de hierbas' } }))?.id },
        { section: 'Cafetería', name: 'Té helado', itemId: (await prisma.item.findFirst({ where: { name: 'Té helado' } }))?.id },

        // ============ BAR - TRAGOS ============
        { section: 'Bar - Tragos Clásicos', name: 'Gin Tonic', itemId: (await prisma.item.findFirst({ where: { name: { equals: 'Gin Tonic' } } }))?.id },
        { section: 'Bar - Tragos Clásicos', name: 'Negroni', itemId: (await prisma.item.findFirst({ where: { name: 'Negroni' } }))?.id },
        { section: 'Bar - Tragos Clásicos', name: 'Gin Tonic (Heráclito)', itemId: (await prisma.item.findFirst({ where: { name: { contains: 'Heráclito' } } }))?.id },
        
        { section: 'Bar - Vodka', name: 'Vodka Peppar Tonic', itemId: (await prisma.item.findFirst({ where: { name: 'Vodka Peppar Tonic' } }))?.id },
        { section: 'Bar - Vodka', name: 'Vodka Raspberri con Soda', itemId: (await prisma.item.findFirst({ where: { name: 'Vodka Raspberri con Soda' } }))?.id },
        { section: 'Bar - Vodka', name: 'Vodka Vanilia con Pomelo', itemId: (await prisma.item.findFirst({ where: { name: 'Vodka Vanilia con Pomelo' } }))?.id },

        { section: 'Bar - Aperitivos', name: 'Campari con Naranja', itemId: (await prisma.item.findFirst({ where: { name: 'Campari con Naranja' } }))?.id },
        { section: 'Bar - Aperitivos', name: 'Fernet con Coca', itemId: (await prisma.item.findFirst({ where: { name: 'Fernet con Coca' } }))?.id },

        { section: 'Bar - Destilados', name: 'Whisky Red Label', itemId: (await prisma.item.findFirst({ where: { name: 'Whisky Red Label' } }))?.id },
        { section: 'Bar - Destilados', name: 'Pisco Sour', itemId: (await prisma.item.findFirst({ where: { name: 'Pisco Sour' } }))?.id },

        { section: 'Bar - Tropicales', name: 'Piña Colada', itemId: (await prisma.item.findFirst({ where: { name: 'Piña Colada' } }))?.id },

        { section: 'Bar - Cafés Especiales', name: 'Café con Tia Maria', itemId: (await prisma.item.findFirst({ where: { name: 'Café con Tia Maria' } }))?.id },

        // ============ VINOS ============
        { section: 'Vinos', name: 'Copa de Cabernet Sauvignon', itemId: (await prisma.item.findFirst({ where: { name: 'Copa de Cabernet Sauvignon' } }))?.id },
        { section: 'Vinos', name: 'Copa de Malbec', itemId: (await prisma.item.findFirst({ where: { name: 'Copa de Malbec' } }))?.id },
        { section: 'Vinos', name: 'Copa de Chardonnay', itemId: (await prisma.item.findFirst({ where: { name: 'Copa de Chardonnay' } }))?.id },
        { section: 'Vinos', name: 'Copa de Rosado', itemId: (await prisma.item.findFirst({ where: { name: 'Copa de Rosado' } }))?.id },
    ];

    for (const item of menuData) {
        if (item.itemId) {
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
        }
    }

    console.log('\n🎉 REPLANTEO COMPLETO!');
    console.log('\n📊 NUEVA ESTRUCTURA:');
    console.log('  🍳 Desayunos: 4 opciones');
    console.log('  🥩 Carnes: 4 platos');
    console.log('  🍔 Hamburguesas: 3 variedades');
    console.log('  🍝 Pastas: 3 opciones');
    console.log('  🥧 Tartas: 2 opciones');
    console.log('  🍲 Platos Vegetarianos: 4 opciones');
    console.log('  ☕ Cafetería: 10 opciones');
    console.log('  🍹 Bar: 16 tragos organizados');
    console.log('  🍷 Vinos: 4 copas');

    await prisma.$disconnect();
}

main().catch(console.error);
