// Script para crear menú tipo restaurante con las viandas
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('📋 Creando carta de menú...\n');

    const menuConfig = [
        // PLATOS PRINCIPALES
        { itemCode: 'ALBON-CARNE', menuName: 'Albóndigas de Carne al Horno', section: 'Platos Principales', isActive: true },
        { itemCode: 'HAMB-CASERA', menuName: 'Hamburguesa Casera Completa', section: 'Platos Principales', isActive: true },
        { itemCode: 'ESTOF-CARNE', menuName: 'Estofado de Carne con Vegetales', section: 'Platos Principales', isActive: false },
        { itemCode: 'POLLO-PATAS', menuName: 'Patas de Pollo al Horno', section: 'Platos Principales', isActive: false },

        // TARTAS
        { itemCode: 'TARTA-ZAPALLO', menuName: 'Tarta de Zapallo', section: 'Tartas', isActive: true },
        { itemCode: 'TARTA-VERDURA', menuName: 'Tarta de Verdura', section: 'Tartas', isActive: true },

        // PASTAS
        { itemCode: 'NOQUIS', menuName: 'Ñoquis con Salsa a Elección', section: 'Pastas', isActive: false },
        { itemCode: 'PAPPARDELLE', menuName: 'Pappardelle con Salsa a Elección', section: 'Pastas', isActive: false },

        // ACOMPAÑAMIENTOS
        { itemCode: 'SALSA-BOLO', menuName: 'Salsa Boloñesa', section: 'Salsas y Acompañamientos', isActive: true },
        { itemCode: 'SALSA-BLANCA', menuName: 'Salsa Blanca', section: 'Salsas y Acompañamientos', isActive: false },

        // DE LA ALACENA (algunos ejemplos de platos que se pueden hacer con los ingredientes)
        { itemCode: 'GUISO-LENT', menuName: 'Guiso de Lentejas Casero', section: 'De la Alacena', isActive: true },
        { itemCode: 'ARROZ-PRIM', menuName: 'Arroz Primavera', section: 'De la Alacena', isActive: true },
        { itemCode: 'POLENTA-SALSA', menuName: 'Polenta con Salsa', section: 'De la Alacena', isActive: true },
        { itemCode: 'AVENA-FRUTAS', menuName: 'Bowl de Avena con Frutas Deshidratadas', section: 'Desayunos', isActive: true },
    ];

    let created = 0;
    let skipped = 0;

    for (const config of menuConfig) {
        // Buscar el item
        const item = await prisma.item.findUnique({
            where: { code: config.itemCode }
        });

        if (!item) {
            console.log(`  ⚠️  ${config.itemCode} no encontrado, skipping...`);
            skipped++;
            continue;
        }

        // Verificar si ya existe
        const existing = await prisma.menuItem.findFirst({
            where: {
                itemId: item.id,
                name: config.menuName
            }
        });

        if (existing) {
            console.log(`  ⏭️  ${config.menuName} ya existe`);
            skipped++;
            continue;
        }

        // Crear MenuItem
        await prisma.menuItem.create({
            data: {
                name: config.menuName,
                itemId: item.id,
                section: config.section,
                isActive: config.isActive,
                notes: config.isActive ? 'Disponible según stock' : 'Disponible próximamente'
            }
        });

        const status = config.isActive ? '✅' : '⏸️ ';
        console.log(`  ${status} ${config.menuName} → ${config.section}`);
        created++;
    }

    console.log(`\n📊 Resumen:`);
    console.log(`   - Items de menú creados: ${created}`);
    console.log(`   - Ya existentes/omitidos: ${skipped}`);
    console.log(`\n🎉 ¡Carta lista! Ahora puedes verla en /guest/menu`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
