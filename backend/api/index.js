require('dotenv/config')
const app = require('../src/app')

// Vercel Serverless Function Handler
module.exports = (req, res) => {
  // Manejar CORS preflight
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.status(200).end()
    return
  }
  
  // Pasar la solicitud a Express
  return app(req, res)
}
