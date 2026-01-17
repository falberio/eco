require('dotenv').config()
const pg = require('pg')

const client = new pg.Client({
    connectionString: process.env.DATABASE_URL
})

client.connect()
    .then(() => {
        console.log('✓ Conexión a base de datos exitosa')
        process.exit(0)
    })
    .catch(err => {
        console.error('✗ Error de conexión:', err.message)
        process.exit(1)
    })
