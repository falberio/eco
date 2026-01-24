const { PrismaClient } = require('@prisma/client');
const QRCode = require('qrcode');
const fs = require('fs').promises;
const path = require('path');
const prisma = new PrismaClient();

async function main() {
    console.log('🔲 GENERANDO CÓDIGOS QR PARA FRASCOS\n');

    const baseUrl = 'https://alacena-blush.vercel.app';
    const outputDir = path.join(__dirname, '..', 'qr-codes');

    // Crear directorio si no existe
    try {
        await fs.mkdir(outputDir, { recursive: true });
    } catch (e) {}

    // Obtener todos los frascos
    const containers = await prisma.container.findMany({
        where: {
            code: { startsWith: 'JAR-' }
        },
        include: {
            reserves: {
                where: { netWeight_g: { not: null } },
                include: { item: true }
            }
        },
        orderBy: { code: 'asc' }
    });

    console.log(`📦 Generando QR para ${containers.length} frascos...\n`);

    const qrList = [];

    for (const container of containers) {
        const url = `${baseUrl}/stock/${container.code}`;
        const reserve = container.reserves[0];
        const itemName = reserve?.item?.name || 'Vacío';

        // Generar QR como archivo PNG
        const filename = `${container.code}.png`;
        const filepath = path.join(outputDir, filename);

        await QRCode.toFile(filepath, url, {
            errorCorrectionLevel: 'M',
            margin: 2,
            width: 400,
            color: {
                dark: '#000000',
                light: '#FFFFFF'
            }
        });

        qrList.push({
            code: container.code,
            item: itemName,
            url: url,
            file: filename
        });

        console.log(`✅ ${container.code} - ${itemName}`);
    }

    // Crear archivo HTML para imprimir
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Códigos QR - Alacena</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .qr-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            page-break-inside: avoid;
        }
        .qr-item {
            border: 2px solid #333;
            padding: 15px;
            text-align: center;
            page-break-inside: avoid;
        }
        .qr-item img {
            width: 100%;
            max-width: 200px;
            height: auto;
        }
        .qr-code {
            font-weight: bold;
            font-size: 18px;
            margin-bottom: 10px;
        }
        .qr-item-name {
            font-size: 14px;
            color: #666;
            margin-top: 10px;
        }
        @media print {
            .qr-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }
        h1 {
            text-align: center;
            color: #d97706;
        }
    </style>
</head>
<body>
    <h1>🏺 Códigos QR - Sistema Alacena</h1>
    <p style="text-align: center; color: #666;">Escanear para actualizar stock</p>
    <div class="qr-grid">
        ${qrList.map(item => `
            <div class="qr-item">
                <div class="qr-code">${item.code}</div>
                <img src="${item.file}" alt="${item.code}">
                <div class="qr-item-name">${item.item}</div>
            </div>
        `).join('\n')}
    </div>
    <p style="text-align: center; margin-top: 30px; color: #888; font-size: 12px;">
        Generado el ${new Date().toLocaleDateString('es-AR')}
    </p>
</body>
</html>
    `;

    await fs.writeFile(path.join(outputDir, 'index.html'), htmlContent);

    console.log(`\n🎉 ¡QR GENERADOS!`);
    console.log(`\n📁 Ubicación: ${outputDir}`);
    console.log(`\n📋 Archivos creados:`);
    console.log(`   - ${containers.length} archivos PNG individuales`);
    console.log(`   - 1 archivo HTML para impresión`);
    console.log(`\n💡 Para imprimir:`);
    console.log(`   1. Abre: ${path.join(outputDir, 'index.html')}`);
    console.log(`   2. Presiona Ctrl+P (o Cmd+P en Mac)`);
    console.log(`   3. Imprime o guarda como PDF`);

    await prisma.$disconnect();
}

main().catch(console.error);
