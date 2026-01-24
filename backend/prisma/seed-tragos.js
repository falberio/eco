// Script para crear menú de tragos/cocteles
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🍸 Creando carta de tragos...\n');

  const tragosConfig = [
    // CLÁSICOS CON GIN
    { itemCode: 'GIN-BEEFEATER', menuName: 'Gin Tonic', section: 'Tragos Clásicos', isActive: true },
    { itemCode: 'GIN-BEEFEATER', menuName: 'Negroni', section: 'Tragos Clásicos', isActive: true },
    { itemCode: 'GIN-HERACLITO', menuName: 'Gin Tonic (Heráclito)', section: 'Tragos Clásicos', isActive: true },
    
    // VODKA
    { itemCode: 'VODKA-PEPPAR', menuName: 'Vodka Peppar Tonic', section: 'Vodka', isActive: true },
    { itemCode: 'VODKA-RASPBERRI', menuName: 'Vodka Raspberri con Soda', section: 'Vodka', isActive: true },
    { itemCode: 'VODKA-VANILIA', menuName: 'Vodka Vanilia con Pomelo', section: 'Vodka', isActive: true },
    
    // APERITIVOS
    { itemCode: 'CAMPARI', menuName: 'Campari con Naranja', section: 'Aperitivos', isActive: true },
    { itemCode: 'APEROL', menuName: 'Aperol Spritz', section: 'Aperitivos', isActive: false },
    { itemCode: 'FERNET-1882', menuName: 'Fernet con Coca', section: 'Clásicos Argentinos', isActive: true },
    
    // WHISKY Y PISCO
    { itemCode: 'WHISKY-JW-RED', menuName: 'Whisky Red Label', section: 'Whiskies', isActive: true },
    { itemCode: 'PISCO-MISTRAL', menuName: 'Pisco Sour', section: 'Destilados', isActive: true },
    
    // TROPICALES
    { itemCode: 'MALIBU', menuName: 'Piña Colada', section: 'Tropicales', isActive: true },
    
    // CAFÉ
    { itemCode: 'TIA-MARIA', menuName: 'Café con Tia Maria', section: 'Cafés Especiales', isActive: true },
    
    // VINOS
    { itemCode: 'VINO-BIANCHI-CAB', menuName: 'Copa de Cabernet Sauvignon', section: 'Vinos', isActive: true },
    { itemCode: 'VINO-BOSCA-MALB', menuName: 'Copa de Malbec', section: 'Vinos', isActive: true },
    { itemCode: 'VINO-DD-CHARD', menuName: 'Copa de Chardonnay', section: 'Vinos', isActive: true },
    { itemCode: 'VINO-ELEM-ROSADO', menuName: 'Copa de Rosado', section: 'Vinos', isActive: true },
  ];

  let created = 0;
  let skipped = 0;

  for (const config of tragosConfig) {
    const item = await prisma.item.findUnique({
      where: { code: config.itemCode }
    });

    if (!item) {
      console.log(`  ⚠️  ${config.itemCode} no encontrado`);
      skipped++;
      continue;
    }

    const existing = await prisma.menuItem.findFirst({
      where: {
        itemId: item.id,
        name: config.menuName
      }
    });

    if (existing) {
      skipped++;
      continue;
    }

    await prisma.menuItem.create({
      data: {
        name: config.menuName,
        itemId: item.id,
        section: config.section,
        isActive: config.isActive,
        notes: 'Consultar disponibilidad'
      }
    });

    const status = config.isActive ? '✅' : '⏸️';
    console.log(`  ${status} ${config.menuName} → ${config.section}`);
    created++;
  }

  console.log(`\n📊 Resumen:`);
  console.log(`   - Tragos creados: ${created}`);
  console.log(`   - Omitidos: ${skipped}`);
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
