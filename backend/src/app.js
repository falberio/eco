const express = require('express')
const cors = require('cors')
const reservesRoutes = require('./routes/reserves.routes.js')
const itemsRoutes = require('./routes/items.routes.js')
const locationsRoutes = require('./routes/locations.routes.js')
const menuItemsRoutes = require('./routes/menuItems.routes.js')
const containersRoutes = require('./routes/containers.routes.js')
const batchesRoutes = require('./routes/batches.routes.js')

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', app: 'alacena', timestamp: new Date().toISOString() });
});

// Rutas de API
app.use('/api/reserves', reservesRoutes);
app.use('/api/items', itemsRoutes);
app.use('/api/locations', locationsRoutes);
app.use('/api/menu-items', menuItemsRoutes);
app.use('/api/containers', containersRoutes);
app.use('/api/batches', batchesRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

module.exports = app;