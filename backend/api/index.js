require('dotenv/config')
const app = require('../src/app')

module.exports = (req, res) => {
  // Permitir que Express maneje la solicitud
  return app(req, res)
}
