const express = require('express')
const cors = require('cors')

// Shared routes (cross-app)
const authRoutes = require('./shared/auth/auth.routes.js')
const qrRoutes = require('./shared/qr/qr.routes.js')

// Alacena module routes
const reservesRoutes = require('./modules/alacena/routes/reserves.routes.js')
const itemsRoutes = require('./modules/alacena/routes/items.routes.js')
const locationsRoutes = require('./modules/alacena/routes/locations.routes.js')
const menuItemsRoutes = require('./modules/alacena/routes/menuItems.routes.js')
const containersRoutes = require('./modules/alacena/routes/containers.routes.js')
const batchesRoutes = require('./modules/alacena/routes/batches.routes.js')

// Financia module routes
const financiaRoutes = require('./routes/financiaRoutes.js')

const app = express();

app.use(cors());
app.use(express.json());

// Test endpoint - simple response
app.get('/test', (req, res) => {
    res.json({ test: 'ok', timestamp: new Date().toISOString() });
});

// Ruta de health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', app: 'eco', modules: ['alacena', 'financia'], timestamp: new Date().toISOString() });
});

// ======== SHARED ROUTES (cross-app) ========
app.use('/api/shared/auth', authRoutes);
app.use('/api/shared/qr', qrRoutes);

// ======== ALACENA MODULE ========
app.use('/api/alacena/reserves', reservesRoutes);
app.use('/api/alacena/items', itemsRoutes);
app.use('/api/alacena/locations', locationsRoutes);
app.use('/api/alacena/menu-items', menuItemsRoutes);
app.use('/api/alacena/containers', containersRoutes);
app.use('/api/alacena/batches', batchesRoutes);

// ======== FINANCIA MODULE ========
app.use('/api/financia', financiaRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;