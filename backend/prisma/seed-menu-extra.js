// Script para cargar menú extendido: Cafetería, Tés, Desayuno, Bebidas
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const prisma = new PrismaClient();

async function main() {
  console.log('☕ Cargando menú extendido (Cafetería, Desayuno, Bebidas)...\n');

  // Cargar JSONs
  const menuData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'menu_extra_items.json'), 'utf8')
  );
  const inventoryData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'inventory_initial_non_viandas.json'), 'utf8')
  );

  let itemsCreated = 0;
  let menuItemsCreated = 0;
  let reservesCreated = 0;

  // 1. Crear Items y MenuItems desde menu_extra_items.json
  for (const section of menuData.sections) {
    console.log(`\n📋 Sección: ${section.title}`);

    for (const menuItem of section.items) {
      const itemCode = menuItem.id.toUpperCase().replace(/_/g, '-');
      
      // Crear el Item base
      const item = await prisma.item.upsert({
        where: { code: itemCode },
        update: { name: menuItem.name },
        create: {
          code: itemCode,
          name: menuItem.name,
          kind: 'PRODUCT',
          category: section.title,
          defaultUnit: 'UNIT'
        }
      });
      itemsCreated++;

      // Construir notas con opciones si existen
      let notes = null;
      if (menuItem.options && menuItem.options.length > 0) {
        const optionNames = menuItem.options.map(o => o.name).join(', ');
        notes = `Opciones disponibles: ${optionNames}`;
      }

      // Crear MenuItem
      await prisma.menuItem.create({
        data: {
          name: menuItem.name,
          itemId: item.id,
          section: section.title,
          isActive: true,
          notes
        }
      });
      menuItemsCreated++;
      console.log(`  ✓ ${menuItem.name}`);
    }
  }

  // 2. Crear Reserves desde inventory_initial_non_viandas.json
  console.log(`\n\n📦 Cargando stock inicial...`);
  
  for (const inv of inventoryData) {
    const itemCode = inv.product_id.toUpperCase().replace(/_/g, '-');
    
    const item = await prisma.item.findUnique({
      where: { code: itemCode }
    });

    if (!item) {
      console.log(`  ⚠️  ${inv.name}: Item no encontrado (code: ${itemCode}), skipping...`);
      continue;
    }

    if (inv.quantity !== null && inv.quantity > 0) {
      await prisma.reserve.upsert({
        where: { code: `RES-${itemCode}` },
        update: {
          unitCount: inv.quantity,
          notes: inv.notes
        },
        create: {
          code: `RES-${itemCode}`,
          itemId: item.id,
          status: 'ACTIVE',
          unitCount: inv.quantity,
          notes: inv.notes
        }
      });
      reservesCreated++;
      console.log(`  ✓ ${inv.name}: ${inv.quantity} ${inv.unit}(es)`);
    } else {
      console.log(`  ⏸️  ${inv.name}: Sin stock definido (pendiente)`);
    }
  }

  console.log(`\n\n📊 Resumen:`);
  console.log(`   - Items (productos) creados: ${itemsCreated}`);
  console.log(`   - MenuItems creados: ${menuItemsCreated}`);
  console.log(`   - Reserves (stock) creadas: ${reservesCreated}`);
  console.log(`\n🎉 ¡Menú extendido cargado! Ahora en /guest/menu verás:`);
  console.log(`   ☕ Cafetería (6 opciones de café)`);
  console.log(`   🍵 Tés (3 variedades)`);
  console.log(`   🥐 Desayuno (tostadas, yogur, banana)`);
  console.log(`   🥤 Bebidas (agua, té helado, vino)`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
