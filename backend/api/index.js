require('dotenv/config')
const app = require('../src/app.js')

// Handler para Vercel Serverless Function
module.exports = (req, res) => {
  return app(req, res)
}
