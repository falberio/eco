const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const menuDir = path.join(imagesDir, 'menu');

// Mapeo de nombres de archivo a categorías y nombres finales
const imageMapping = {
    // Desayunos
    'tostadas': { category: 'desayunos', name: 'tostadas-mermelada' },
    'huevos_revueltos': { category: 'desayunos', name: 'huevos-revueltos' },
    'yogurt': { category: 'desayunos', name: 'bowl-yogurt-avena' },

    // Carnes
    'albondigas_con_arroz': { category: 'carnes', name: 'albondigas-arroz' },
    'albondigas_con_pure': { category: 'carnes', name: 'albondigas-pure' },
    'pollo_con_arroz': { category: 'carnes', name: 'pollo-arroz' },
    'pollo_con_pure': { category: 'carnes', name: 'pollo-pure' },

    // Pastas
    'fettuccine': { category: 'pastas', name: 'fetuccini' },
    'spaguetti': { category: 'pastas', name: 'spaguetti' },
    'lasagna': { category: 'pastas', name: 'lasagna' },
    'ñoquis': { category: 'pastas', name: 'noquis' },

    // Salsas
    'bolognesa': { category: 'salsas', name: 'bolognesa' },
    'salsa_blanca': { category: 'salsas', name: 'salsa-blanca' },
    'pesto_albahaca': { category: 'salsas', name: 'pesto-albahaca' },
    'pesto_tomates_secos': { category: 'salsas', name: 'pesto-tomates-secos' },

    // Bar
    'gin_tonic': { category: 'bar', name: 'gin-tonic' },
    'campari': { category: 'bar', name: 'campari' }
};

function normalizeFileName(fileName) {
    // Quitar extensión y normalizar
    const base = fileName.toLowerCase()
        .replace(/\.(jpg|jpeg|png|webp|avif)$/i, '')
        .replace(/jpeg$/i, '')
        .trim();
    return base;
}

function findBestMatch(fileName) {
    const normalized = normalizeFileName(fileName);

    // Buscar coincidencia exacta
    if (imageMapping[normalized]) {
        return imageMapping[normalized];
    }

    // Buscar coincidencia parcial
    for (const [key, value] of Object.entries(imageMapping)) {
        if (normalized.includes(key) || key.includes(normalized)) {
            return value;
        }
    }

    return null;
}

async function organizeImages() {
    console.log('📸 Organizando imágenes del menú...\n');

    const files = fs.readdirSync(imagesDir);
    const imageFiles = files.filter(f =>
        /\.(jpg|jpeg|png|webp|avif)$/i.test(f) &&
        !f.startsWith('.')
    );

    console.log(`Encontradas ${imageFiles.length} imágenes:\n`);

    let organized = 0;
    let skipped = 0;

    for (const file of imageFiles) {
        const match = findBestMatch(file);

        if (match) {
            const sourcePath = path.join(imagesDir, file);
            const ext = path.extname(file);
            const destDir = path.join(menuDir, match.category);
            const destPath = path.join(destDir, `${match.name}${ext}`);

            // Crear directorio si no existe
            if (!fs.existsSync(destDir)) {
                fs.mkdirSync(destDir, { recursive: true });
            }

            // Copiar archivo
            fs.copyFileSync(sourcePath, destPath);
            console.log(`✓ ${file} → ${match.category}/${match.name}${ext}`);
            organized++;
        } else {
            console.log(`⚠️  ${file} - No se pudo asociar automáticamente`);
            skipped++;
        }
    }

    console.log(`\n📊 Resumen:`);
    console.log(`   ✓ Organizadas: ${organized}`);
    console.log(`   ⚠️  Sin asociar: ${skipped}`);

    if (organized > 0) {
        console.log(`\n💡 Las imágenes se copiaron a las subcarpetas de menu/`);
        console.log(`   Podés eliminar las originales de /images/ si querés.`);
    }
}

organizeImages().catch(console.error);
