// Script para actualizar tipos de contenedores con taras
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const jarTypes = [
    { code: 'JAR-750-LOW', name: 'Frasco 750ml bajo', capacity_ml: 750, tare_g: 637 },
    { code: 'JAR-750-HIGH', name: 'Frasco 750ml alto', capacity_ml: 750, tare_g: 692 },
    { code: 'JAR-1000', name: 'Frasco 1000ml', capacity_ml: 1000, tare_g: 746 },
    { code: 'JAR-1500', name: 'Frasco 1500ml', capacity_ml: 1500, tare_g: 929 }
]

async function main() {
    console.log('🏺 Actualizando tipos de frascos con taras...\n')

    for (const jar of jarTypes) {
        const type = await prisma.containerType.upsert({
            where: { code: jar.code },
            create: {
                code: jar.code,
                name: jar.name,
                nominalVolume_ml: jar.capacity_ml,
                tareWeight_g: jar.tare_g,
                notes: `Tara: ${jar.tare_g}g`
            },
            update: {
                name: jar.name,
                nominalVolume_ml: jar.capacity_ml,
                tareWeight_g: jar.tare_g,
                notes: `Tara: ${jar.tare_g}g`
            }
        })
        console.log(`✓ ${jar.code}: ${jar.name} - Tara: ${jar.tare_g}g`)
    }

    // Actualizar todos los frascos existentes al tipo por defecto (JAR-750-LOW)
    console.log('\n📦 Actualizando frascos existentes al tipo por defecto...')

    const defaultType = await prisma.containerType.findUnique({
        where: { code: 'JAR-750-LOW' }
    })

    if (defaultType) {
        const updated = await prisma.container.updateMany({
            where: {
                code: { startsWith: 'JAR-' }
            },
            data: {
                typeId: defaultType.id
            }
        })
        console.log(`✓ ${updated.count} frascos actualizados a tipo JAR-750-LOW (637g)`)
    }

    console.log('\n✅ Tipos de frascos actualizados correctamente!')
}

main()
    .catch((e) => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
