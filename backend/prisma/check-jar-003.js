const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🔍 VERIFICANDO FRASCO DE MAÍZ SALADO\n');

    // Buscar el frasco JAR-003
    const container = await prisma.container.findUnique({
        where: { code: 'JAR-003' },
        include: {
            type: true,
            reserves: {
                include: { item: true }
            }
        }
    });

    if (!container) {
        console.log('❌ NO SE ENCONTRÓ el contenedor JAR-003');

        // Buscar cualquier contenedor con maíz
        const maizContainers = await prisma.container.findMany({
            where: {
                reserves: {
                    some: {
                        item: {
                            name: { contains: 'Maíz' }
                        }
                    }
                }
            },
            include: {
                reserves: {
                    include: { item: true }
                }
            }
        });

        console.log(`\n📦 Contenedores con maíz: ${maizContainers.length}`);
        maizContainers.forEach(c => {
            const item = c.reserves[0]?.item?.name || 'Vacío';
            console.log(`  - ${c.code}: ${item}`);
        });
    } else {
        console.log('✅ Contenedor encontrado:');
        console.log(`   Código: ${container.code}`);
        console.log(`   Tipo: ${container.type.name}`);
        console.log(`   Reservas: ${container.reserves.length}`);
        container.reserves.forEach(r => {
            console.log(`     - ${r.item.name}: ${r.netWeight_g}g`);
        });
    }

    // Ver todos los frascos JAR para comparar
    console.log('\n📋 Primeros 5 frascos JAR:');
    const jars = await prisma.container.findMany({
        where: { code: { startsWith: 'JAR-' } },
        take: 5,
        include: {
            reserves: {
                include: { item: true },
                where: { netWeight_g: { not: null } }
            }
        },
        orderBy: { code: 'asc' }
    });

    jars.forEach(j => {
        const item = j.reserves[0]?.item?.name || 'Vacío';
        console.log(`  ${j.code} - ${item}`);
    });

    await prisma.$disconnect();
}

main().catch(console.error);
