// Script para agregar items de menú de ejemplo
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🍽️  Creando items de menú de ejemplo...\n');

    // Primero crear algunos items tipo RECIPE
    const recipes = [
        { code: 'GUISO-LENT', name: 'Guiso de lentejas', category: 'Platos Principales' },
        { code: 'SOPA-VERD', name: 'Sopa de verduras', category: 'Sopas' },
        { code: 'ARROZ-PRIM', name: 'Arroz primavera', category: 'Acompañamientos' },
        { code: 'POLENTA-SALSA', name: 'Polenta con salsa', category: 'Platos Principales' },
        { code: 'AVENA-FRUTAS', name: 'Avena con frutas deshidratadas', category: 'Desayunos' }
    ];

    for (const recipe of recipes) {
        await prisma.item.upsert({
            where: { code: recipe.code },
            update: {},
            create: {
                code: recipe.code,
                name: recipe.name,
                kind: 'RECIPE',
                category: recipe.category
            }
        });
    }
    console.log(`✅ ${recipes.length} recetas creadas\n`);

    // Ahora crear los MenuItem
    const menuItems = [
        { name: 'Guiso de Lentejas con Vegetales', recipeCode: 'GUISO-LENT', section: 'Almuerzos' },
        { name: 'Sopa Casera de Verduras', recipeCode: 'SOPA-VERD', section: 'Entradas' },
        { name: 'Arroz Primavera con Nueces', recipeCode: 'ARROZ-PRIM', section: 'Guarniciones' },
        { name: 'Polenta Cremosa con Salsa de Tomate', recipeCode: 'POLENTA-SALSA', section: 'Almuerzos' },
        { name: 'Bowl de Avena con Frutos Secos', recipeCode: 'AVENA-FRUTAS', section: 'Desayunos' }
    ];

    for (const menu of menuItems) {
        const item = await prisma.item.findUnique({
            where: { code: menu.recipeCode }
        });

        if (item) {
            await prisma.menuItem.create({
                data: {
                    name: menu.name,
                    itemId: item.id,
                    section: menu.section,
                    isActive: true,
                    notes: 'Plato disponible según stock de ingredientes'
                }
            });
            console.log(`  ✓ ${menu.name}`);
        }
    }

    console.log(`\n🎉 ¡Menú creado con ${menuItems.length} platos!`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
