// Script para crear la estructura de la Estantería de Frascos
// 5 estantes × 6 espacios = 30 espacios totales
// Estante 3, posiciones 1-2 bloqueadas

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    console.log('🏺 Creando estructura de Estantería de Frascos...\n');

    // 1. Crear o actualizar el AREA principal
    const shelfArea = await prisma.location.upsert({
        where: { code: 'SHELF-MAIN' },
        update: {},
        create: {
            code: 'SHELF-MAIN',
            name: 'Estantería de Frascos',
            kind: 'AREA',
            sortIndex: 0,
            notes: 'Estantería principal de frascos - 5 estantes × 6 posiciones'
        }
    });
    console.log(`✅ AREA creada: ${shelfArea.name} (${shelfArea.code})`);

    // 2. Crear los 5 estantes (SECTION)
    const shelves = [];
    for (let shelfNum = 1; shelfNum <= 5; shelfNum++) {
        const shelf = await prisma.location.upsert({
            where: { code: `SHELF-${shelfNum}` },
            update: {},
            create: {
                code: `SHELF-${shelfNum}`,
                name: `Estante ${shelfNum}`,
                kind: 'SECTION',
                parentId: shelfArea.id,
                sortIndex: shelfNum,
                notes: `Estante ${shelfNum} - 6 posiciones`
            }
        });
        shelves.push(shelf);
        console.log(`  ✅ Estante ${shelfNum} creado`);
    }

    // 3. Crear los 30 espacios (SLOT) - 6 por estante
    console.log('\n📍 Creando espacios (slots)...');
    const slots = [];

    for (let shelfNum = 1; shelfNum <= 5; shelfNum++) {
        for (let position = 1; position <= 6; position++) {
            const shelfParent = shelves[shelfNum - 1];

            // Marcar posiciones 1-2 del estante 3 como bloqueadas
            const isBlocked = (shelfNum === 3 && (position === 1 || position === 2));

            const slot = await prisma.location.upsert({
                where: { code: `SHELF-${shelfNum}-${position}` },
                update: {},
                create: {
                    code: `SHELF-${shelfNum}-${position}`,
                    name: isBlocked ? `Posición ${position} (Bloqueada)` : `Posición ${position}`,
                    kind: 'SLOT',
                    parentId: shelfParent.id,
                    sortIndex: position,
                    notes: isBlocked ? 'BLOQUEADO - Espacio ocupado por otros objetos' : null
                }
            });

            slots.push(slot);

            if (isBlocked) {
                console.log(`  ⛔ Estante ${shelfNum} - Posición ${position}: BLOQUEADO`);
            } else {
                console.log(`  ✅ Estante ${shelfNum} - Posición ${position}: Creado`);
            }
        }
    }

    // 4. Obtener todos los frascos existentes
    console.log('\n🏺 Asignando frascos a espacios...');
    const containers = await prisma.container.findMany({
        where: {
            code: {
                startsWith: 'JAR-'
            }
        },
        orderBy: {
            code: 'asc'
        },
        take: 28 // Solo los primeros 28 frascos
    });

    console.log(`\n📊 Encontrados ${containers.length} frascos en DB`);

    // 5. Asignar frascos a espacios disponibles (excluyendo bloqueados)
    const availableSlots = slots.filter(slot =>
        !slot.notes || !slot.notes.includes('BLOQUEADO')
    );

    console.log(`📊 Espacios disponibles: ${availableSlots.length}`);
    console.log(`📦 Frascos a asignar: ${Math.min(containers.length, availableSlots.length)}\n`);

    let assigned = 0;
    for (let i = 0; i < Math.min(containers.length, availableSlots.length); i++) {
        const container = containers[i];
        const slot = availableSlots[i];

        // Buscar si hay una reserva activa para este contenedor
        const activeReserve = await prisma.reserve.findFirst({
            where: {
                containerId: container.id,
                status: 'ACTIVE'
            },
            include: {
                item: true
            }
        });

        // Actualizar la reserva para que apunte al slot
        if (activeReserve) {
            await prisma.reserve.update({
                where: { id: activeReserve.id },
                data: { locationId: slot.id }
            });

            const itemName = activeReserve.item?.name || 'Sin contenido';
            console.log(`  ✅ ${container.code} → ${slot.code} (${itemName})`);
        } else {
            console.log(`  ⚠️  ${container.code} → ${slot.code} (vacío)`);
        }

        assigned++;
    }

    console.log(`\n✅ Total asignados: ${assigned} frascos`);
    console.log(`📊 Espacios libres: ${availableSlots.length - assigned}`);
    console.log(`⛔ Espacios bloqueados: 2`);

    console.log('\n🎉 ¡Estructura de estantería creada exitosamente!');
    console.log('\n📋 Resumen:');
    console.log(`   - 1 AREA: Estantería de Frascos`);
    console.log(`   - 5 SECTION: Estantes 1-5`);
    console.log(`   - 30 SLOT: 6 posiciones por estante`);
    console.log(`   - 2 posiciones bloqueadas (Estante 3, pos 1-2)`);
    console.log(`   - 28 posiciones disponibles`);
    console.log(`   - ${assigned} frascos asignados\n`);
}

main()
    .catch((e) => {
        console.error('❌ Error:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
