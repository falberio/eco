require('dotenv/config')
const app = require('../src/app')

// Vercel Serverless Function Handler
export default async (req, res) => {
  return app(req, res)
}
