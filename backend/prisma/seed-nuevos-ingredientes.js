const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔧 COMPLETANDO INGREDIENTES Y RESERVAS\n');

    // 1. Crear frascos para los nuevos ingredientes
    const jarType = await prisma.containerType.findFirst({ where: { code: 'FRASCO-STD' } });

    const newJars = [
        { code: 'JAR-029', product: 'Morrones en conserva', net_g: 250 },
        { code: 'JAR-030', product: 'Ajos confitados', net_g: 180 },
        { code: 'JAR-031', product: 'Pesto de albahaca', net_g: 150 },
        { code: 'JAR-032', product: 'Pesto de tomates secos', net_g: 120 },
        { code: 'JAR-033', product: 'Hongos secos', net_g: 85 }
    ];

    console.log('📦 Creando frascos y reservas para nuevos ingredientes:\n');

    for (const jarData of newJars) {
        // Crear contenedor
        const container = await prisma.container.create({
            data: {
                code: jarData.code,
                typeId: jarType.id
            }
        });

        // Buscar el item
        const item = await prisma.item.findFirst({
            where: { name: { contains: jarData.product.split(' ')[0] } }
        });

        if (item) {
            // Crear reserva
            await prisma.reserve.create({
                data: {
                    code: `RES-${jarData.code}`,
                    itemId: item.id,
                    containerId: container.id,
                    netWeight_g: jarData.net_g,
                    status: 'ACTIVE'
                }
            });
            console.log(`  ✅ ${jarData.code} - ${jarData.product} (${jarData.net_g}g)`);
        }
    }

    console.log('\n🎉 Ingredientes completados!');
    await prisma.$disconnect();
}

main().catch(console.error);
