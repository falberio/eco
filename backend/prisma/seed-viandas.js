// Script para cargar viandas/preparaciones al inventario
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🍽️ Cargando viandas y preparaciones...\n');

    const viandas = [
        {
            code: 'ALBON-CARNE',
            name: 'Albóndigas de carne',
            category: 'Carnes',
            cantidad: 72,
            unidad: 'UNIT',
            peso_unitario_g: 45,
            estado: 'congelado',
            notas: 'Congeladas individualmente. 72 unidades de 45g c/u'
        },
        {
            code: 'HAMB-CASERA',
            name: 'Hamburguesas caseras',
            category: 'Carnes',
            cantidad: 8,
            unidad: 'UNIT',
            peso_unitario_g: 220,
            estado: 'congelado',
            notas: 'Formato grande, caseras. 8 unidades de 220g c/u'
        },
        {
            code: 'SALSA-BOLO',
            name: 'Salsa Boloñesa',
            category: 'Salsas',
            cantidad: 3,
            unidad: 'UNIT',
            estado: 'pendiente_fraccionar',
            notas: '1 olla grande + 2 chicas. Pendiente fraccionar en porciones'
        },
        {
            code: 'ESTOF-CARNE',
            name: 'Estofado de carne',
            category: 'Carnes',
            cantidad: null,
            unidad: 'UNIT',
            estado: 'pendiente_confirmar',
            notas: 'Cantidad exacta a definir'
        },
        {
            code: 'POLLO-PATAS',
            name: 'Patas/muslos de pollo',
            category: 'Aves',
            cantidad: null,
            unidad: 'UNIT',
            estado: 'congelado',
            notas: 'Partidas, cantidad a confirmar'
        },
        {
            code: 'NOQUIS',
            name: 'Ñoquis',
            category: 'Pastas',
            cantidad: null,
            unidad: 'UNIT',
            estado: 'congelado',
            notas: 'Congelados en bandejas'
        },
        {
            code: 'PAPPARDELLE',
            name: 'Pappardelle',
            category: 'Pastas',
            cantidad: null,
            unidad: 'UNIT',
            estado: 'congelado',
            notas: 'Formato nidos'
        },
        {
            code: 'TARTA-ZAPALLO',
            name: 'Tarta de zapallo',
            category: 'Tartas',
            cantidad: 14,
            unidad: 'UNIT',
            estado: 'congelado',
            notas: 'Stock restante estimado: 14 unidades'
        },
        {
            code: 'TARTA-VERDURA',
            name: 'Tarta de verdura',
            category: 'Tartas',
            cantidad: 14,
            unidad: 'UNIT',
            estado: 'congelado',
            notas: 'Stock completo: 14 unidades'
        },
        {
            code: 'SALSA-BLANCA',
            name: 'Salsa blanca',
            category: 'Salsas',
            cantidad: null,
            unidad: 'UNIT',
            estado: 'pendiente_fraccionar',
            notas: 'Cantidad exacta a definir'
        }
    ];

    let createdItems = 0;
    let createdReserves = 0;

    for (const vianda of viandas) {
        // Crear el Item (receta/vianda)
        const item = await prisma.item.upsert({
            where: { code: vianda.code },
            update: {
                name: vianda.name,
                category: vianda.category,
                notes: vianda.notas
            },
            create: {
                code: vianda.code,
                name: vianda.name,
                kind: 'RECIPE',
                category: vianda.category,
                defaultUnit: vianda.unidad,
                notes: vianda.notas
            }
        });
        createdItems++;
        console.log(`  ✓ ${vianda.name} (${vianda.category})`);

        // Si tiene cantidad definida, crear Reserve
        if (vianda.cantidad !== null && vianda.cantidad > 0) {
            const reserve = await prisma.reserve.upsert({
                where: { code: `RES-${vianda.code}` },
                update: {
                    unitCount: vianda.cantidad,
                    notes: vianda.notas
                },
                create: {
                    code: `RES-${vianda.code}`,
                    itemId: item.id,
                    status: 'ACTIVE',
                    unitCount: vianda.cantidad,
                    notes: `${vianda.estado} - ${vianda.notas}`
                }
            });
            createdReserves++;
            console.log(`    → Stock: ${vianda.cantidad} unidades`);
        }
    }

    console.log(`\n📊 Resumen:`);
    console.log(`   - Viandas creadas: ${createdItems}`);
    console.log(`   - Reservas de stock: ${createdReserves}`);
    console.log(`\n🎉 ¡Listo! Ahora crea los MenuItems para mostrarlas en la carta`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
