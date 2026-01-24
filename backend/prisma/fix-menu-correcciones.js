// Script para corregir el menú según feedback del usuario
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    console.log('🔧 Aplicando correcciones al menú...\n')

    // 1. ACTUALIZAR TOSTADAS - combinar en una sola con opciones de mermeladas
    console.log('1️⃣ Actualizando tostadas con opciones de mermeladas...')

    // Buscar y eliminar las tostadas viejas
    await prisma.menuItem.deleteMany({
        where: {
            OR: [
                { name: { contains: 'Tostadas con manteca' } },
                { name: { contains: 'Tostadas con mermelada' } }
            ]
        }
    })

    // Crear nueva versión con mermeladas como opciones
    const tostadaItem = await prisma.item.upsert({
        where: { code: 'ITEM-TOSTADAS-MERM' },
        create: {
            code: 'ITEM-TOSTADAS-MERM',
            name: 'Tostadas con manteca y mermelada',
            kind: 'RECIPE',
            category: 'Desayunos'
        },
        update: {
            name: 'Tostadas con manteca y mermelada',
            category: 'Desayunos'
        }
    })

    await prisma.menuItem.create({
        data: {
            itemId: tostadaItem.id,
            name: 'Tostadas con manteca y mermelada',
            section: 'Desayunos',
            isActive: true,
            notes: 'Frutilla, Durazno, Naranja, Ciruela'
        }
    })
    console.log('  ✓ Tostadas con opciones de mermeladas')

    // 2. REEMPLAZAR BOWL DE AVENA por dos opciones nuevas
    console.log('\n2️⃣ Reemplazando bowl de avena por nuevas opciones...')

    await prisma.menuItem.deleteMany({
        where: {
            name: { contains: 'Bowl de Avena' }
        }
    })

    const bowlYogurtAvena = await prisma.item.upsert({
        where: { code: 'ITEM-BOWL-YOG-AVENA' },
        create: {
            code: 'ITEM-BOWL-YOG-AVENA',
            name: 'Bowl de yogurt, avena y nueces',
            kind: 'RECIPE',
            category: 'Desayunos'
        },
        update: {
            name: 'Bowl de yogurt, avena y nueces'
        }
    })

    await prisma.menuItem.create({
        data: {
            itemId: bowlYogurtAvena.id,
            name: 'Bowl de yogurt, avena y nueces',
            section: 'Desayunos',
            isActive: true,
            notes: 'Vegano, Nutritivo'
        }
    })

    const bowlYogurtBanana = await prisma.item.upsert({
        where: { code: 'ITEM-BOWL-YOG-BANANA' },
        create: {
            code: 'ITEM-BOWL-YOG-BANANA',
            name: 'Bowl de yogurt con banana y crumble',
            kind: 'RECIPE',
            category: 'Desayunos'
        },
        update: {
            name: 'Bowl de yogurt con banana y crumble'
        }
    })

    await prisma.menuItem.create({
        data: {
            itemId: bowlYogurtBanana.id,
            name: 'Bowl de yogurt con banana y crumble',
            section: 'Desayunos',
            isActive: true,
            notes: 'Vegano, Dulce'
        }
    })
    console.log('  ✓ Bowl de yogurt, avena y nueces')
    console.log('  ✓ Bowl de yogurt con banana y crumble')

    // 3. REORGANIZAR PASTAS - separar pastas de salsas
    console.log('\n3️⃣ Reorganizando sección Pastas...')

    // Eliminar platos de pastas viejos
    await prisma.menuItem.deleteMany({
        where: {
            section: 'Pastas'
        }
    })

    // Crear pastas base
    const pastas = [
        { code: 'PASTA-FETUCCINI', name: 'Fetuccini', notes: null },
        { code: 'PASTA-SPAGUETTI', name: 'Spaguetti', notes: null },
        { code: 'PASTA-LASAGNA', name: 'Lasagna', notes: 'Horno' },
        { code: 'PASTA-ÑOQUIS', name: 'Ñoquis', notes: 'Caseros' }
    ]

    for (const pasta of pastas) {
        const item = await prisma.item.upsert({
            where: { code: pasta.code },
            create: {
                code: pasta.code,
                name: pasta.name,
                kind: 'RECIPE',
                category: 'Pastas'
            },
            update: {
                name: pasta.name,
                category: 'Pastas'
            }
        })

        await prisma.menuItem.create({
            data: {
                itemId: item.id,
                name: pasta.name,
                section: 'Pastas',
                isActive: true,
                notes: pasta.notes
            }
        })
        console.log(`  ✓ ${pasta.name}`)
    }

    // Crear salsas
    const salsas = [
        { code: 'SALSA-BOLOGNESA', name: 'Bolognesa', notes: 'Carne, Tomate' },
        { code: 'SALSA-BLANCA', name: 'Salsa blanca', notes: 'Cremosa' },
        { code: 'SALSA-ROSA', name: 'Salsa rosa', notes: 'Blanca, Tomate' },
        { code: 'SALSA-PESTO-ALBAHACA', name: 'Pesto de albahaca', notes: 'Vegetariano' },
        { code: 'SALSA-PESTO-TOMATE', name: 'Pesto de tomates secos', notes: 'Vegetariano' }
    ]

    for (const salsa of salsas) {
        const item = await prisma.item.upsert({
            where: { code: salsa.code },
            create: {
                code: salsa.code,
                name: salsa.name,
                kind: 'RECIPE',
                category: 'Salsas'
            },
            update: {
                name: salsa.name,
                category: 'Salsas'
            }
        })

        await prisma.menuItem.create({
            data: {
                itemId: item.id,
                name: salsa.name,
                section: 'Salsas',
                isActive: true,
                notes: salsa.notes
            }
        })
        console.log(`  ✓ ${salsa.name}`)
    }

    // 4. ELIMINAR TARTAS REPETIDAS
    console.log('\n4️⃣ Eliminando tartas duplicadas...')

    // Obtener todas las tartas
    const tartas = await prisma.menuItem.findMany({
        where: {
            OR: [
                { name: { contains: 'Tarta' } },
                { section: 'Tartas' }
            ]
        }
    })

    // Agrupar por nombre normalizado
    const tartasMap = new Map()
    for (const tarta of tartas) {
        const normalizedName = tarta.name.toLowerCase().trim()
        if (!tartasMap.has(normalizedName)) {
            tartasMap.set(normalizedName, tarta)
        } else {
            // Eliminar duplicado
            await prisma.menuItem.delete({ where: { id: tarta.id } })
            console.log(`  ✗ Eliminada duplicada: ${tarta.name}`)
        }
    }
    console.log(`  ✓ Tartas únicas mantenidas: ${tartasMap.size}`)

    // 5. ELIMINAR PLATOS VEGETARIANOS
    console.log('\n5️⃣ Eliminando platos vegetarianos...')

    const deletedVeg = await prisma.menuItem.deleteMany({
        where: {
            section: 'Platos Vegetarianos'
        }
    })
    console.log(`  ✗ Eliminados ${deletedVeg.count} platos vegetarianos`)

    // 6. AGREGAR NUEVOS TRAGOS Y BEBIDAS
    console.log('\n6️⃣ Agregando nuevos tragos y bebidas...')

    // Agregar Pisco Sour
    const piscoSour = await prisma.item.upsert({
        where: { code: 'TRAGO-PISCO-SOUR' },
        create: {
            code: 'TRAGO-PISCO-SOUR',
            name: 'Pisco Sour',
            kind: 'RECIPE',
            category: 'Tragos'
        },
        update: {
            name: 'Pisco Sour'
        }
    })

    await prisma.menuItem.create({
        data: {
            itemId: piscoSour.id,
            name: 'Pisco Sour',
            section: 'Bar - Tragos Clásicos',
            isActive: true,
            notes: 'Peruano'
        }
    })
    console.log('  ✓ Pisco Sour')

    // Agregar Vermú
    const vermu = await prisma.item.upsert({
        where: { code: 'TRAGO-VERMU' },
        create: {
            code: 'TRAGO-VERMU',
            name: 'Vermú',
            kind: 'RECIPE',
            category: 'Tragos'
        },
        update: {
            name: 'Vermú'
        }
    })

    await prisma.menuItem.create({
        data: {
            itemId: vermu.id,
            name: 'Vermú',
            section: 'Bar - Aperitivos',
            isActive: true,
            notes: 'Clásico'
        }
    })
    console.log('  ✓ Vermú')

    // Agregar Bebidas (medidas)
    const bebidas = [
        { code: 'BEBIDA-VODKA', name: 'Vodka', notes: 'Medida 50ml' },
        { code: 'BEBIDA-GIN', name: 'Gin', notes: 'Medida 50ml' },
        { code: 'BEBIDA-WHISKY', name: 'Whisky', notes: 'Medida 50ml' },
        { code: 'BEBIDA-PISCO', name: 'Pisco', notes: 'Medida 50ml' }
    ]

    for (const bebida of bebidas) {
        const item = await prisma.item.upsert({
            where: { code: bebida.code },
            create: {
                code: bebida.code,
                name: bebida.name,
                kind: 'PRODUCT',
                category: 'Bebidas'
            },
            update: {
                name: bebida.name,
                category: 'Bebidas'
            }
        })

        await prisma.menuItem.create({
            data: {
                itemId: item.id,
                name: bebida.name,
                section: 'Bebidas (medidas)',
                isActive: true,
                notes: bebida.notes
            }
        })
        console.log(`  ✓ ${bebida.name}`)
    }

    console.log('\n✅ Correcciones aplicadas exitosamente!')

    // Resumen
    const totalMenu = await prisma.menuItem.count({ where: { isActive: true } })
    console.log(`\n📊 Total de items en el menú: ${totalMenu}`)
}

main()
    .catch((e) => {
        console.error('❌ Error:', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
