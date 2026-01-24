const express = require('express');
const router = express.Router();
const QRCode = require('qrcode');
const { prisma } = require('../prisma/client');

// GET /api/qr/container/:containerId
// Genera QR code para un contenedor específico
router.get('/container/:containerId', async (req, res) => {
    try {
        const { containerId } = req.params;

        // Verificar que el contenedor existe
        const container = await prisma.container.findUnique({
            where: { id: containerId },
            include: {
                type: true,
                reserves: {
                    where: { status: 'ACTIVE' },
                    include: { item: true }
                }
            }
        });

        if (!container) {
            return res.status(404).json({ error: 'Contenedor no encontrado' });
        }

        // URL que apunta a la página de actualización de stock
        const baseUrl = process.env.FRONTEND_URL || 'https://alacena-blush.vercel.app';
        const url = `${baseUrl}/stock/${container.code}`;

        // Generar QR como Data URL
        const qrDataUrl = await QRCode.toDataURL(url, {
            errorCorrectionLevel: 'M',
            margin: 2,
            width: 300
        });

        res.json({
            container: {
                id: container.id,
                code: container.code,
                type: container.type.name,
                currentItem: container.reserves[0]?.item?.name || null
            },
            url,
            qrCode: qrDataUrl
        });

    } catch (error) {
        console.error('Error generando QR:', error);
        res.status(500).json({ error: 'Error al generar código QR' });
    }
});

// GET /api/qr/menu
// Genera QR code para el menú público
router.get('/menu', async (req, res) => {
    try {
        const baseUrl = process.env.FRONTEND_URL || 'https://alacena-blush.vercel.app';
        const url = `${baseUrl}/guest/menu`;

        const qrDataUrl = await QRCode.toDataURL(url, {
            errorCorrectionLevel: 'M',
            margin: 2,
            width: 400
        });

        res.json({
            url,
            qrCode: qrDataUrl
        });

    } catch (error) {
        console.error('Error generando QR de menú:', error);
        res.status(500).json({ error: 'Error al generar código QR' });
    }
});

// GET /api/qr/container-by-code/:code
// Genera QR a partir del código del contenedor
router.get('/container-by-code/:code', async (req, res) => {
    try {
        const { code } = req.params;

        const container = await prisma.container.findUnique({
            where: { code },
            include: {
                type: true,
                reserves: {
                    where: { status: 'ACTIVE' },
                    include: { item: true }
                }
            }
        });

        if (!container) {
            return res.status(404).json({ error: 'Contenedor no encontrado' });
        }

        const baseUrl = process.env.FRONTEND_URL || 'https://alacena-blush.vercel.app';
        const url = `${baseUrl}/stock/${container.code}`;

        const qrDataUrl = await QRCode.toDataURL(url, {
            errorCorrectionLevel: 'M',
            margin: 2,
            width: 300
        });

        res.json({
            container: {
                id: container.id,
                code: container.code,
                type: container.type.name,
                currentItem: container.reserves[0]?.item?.name || null
            },
            url,
            qrCode: qrDataUrl
        });

    } catch (error) {
        console.error('Error generando QR:', error);
        res.status(500).json({ error: 'Error al generar código QR' });
    }
});

module.exports = router;
