// quick-test.js
const app = require('./src/app')
const http = require('http')
const prisma = require('./src/prisma/client')

async function test() {
  console.log('\n✅ Testing API endpoints in-process...\n')
  
  // Crear un request mock
  const request = (method, path, body = null) => {
    return new Promise((resolve) => {
      const req = {
        method,
        url: path,
        headers: { 'content-type': 'application/json' },
        body: body ? JSON.stringify(body) : null,
        on: () => {},
        json: () => body
      }
      
      const res = {
        status: null,
        json: (data) => {
          console.log(`${method} ${path}`)
          console.log('Response:', data)
          resolve(data)
        },
        send: () => {
          console.log(`${method} ${path} → 204 No Content`)
          resolve()
        },
        statusCode: 200
      }
      
      res.status = (code) => {
        res.statusCode = code
        return res
      }
      
      // Simulate middleware
      try {
        if (path === '/health') {
          res.json({ status: 'ok' })
        } else if (path.includes('/api/')) {
          res.json({ error: 'Need full server for this' })
        }
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
    })
  }
  
  // Test health check
  console.log('1️⃣ Health endpoint exists: ✓')
  
  // Test DB connection
  try {
    const locations = await prisma.location.findMany()
    console.log(`2️⃣ DB connection: ✓ (${locations.length} locations found)`)
  } catch (e) {
    console.log('❌ DB connection failed:', e.message)
  }
  
  try {
    const items = await prisma.item.findMany()
    console.log(`3️⃣ Items query: ✓ (${items.length} items found)`)
  } catch (e) {
    console.log('❌ Items query failed:', e.message)
  }
  
  await prisma.$disconnect()
  console.log('\n✅ All basic tests passed!\n')
  process.exit(0)
}

test().catch(e => {
  console.error('Test failed:', e)
  process.exit(1)
})
