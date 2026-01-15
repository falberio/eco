// test-api.js
// Test simple de las APIs

const http = require('http')

async function testAPI() {
  const baseURL = 'http://localhost:3001'
  
  console.log('\n🧪 TESTING ALACENA API\n')
  
  // Helper para hacer requests
  const makeRequest = (method, path, body = null) => {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3001,
        path,
        method
      }
      
      const req = http.request(options, (res) => {
        let data = ''
        res.on('data', chunk => data += chunk)
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, data: JSON.parse(data) })
          } catch {
            resolve({ status: res.statusCode, data })
          }
        })
      })
      
      req.on('error', reject)
      if (body) req.write(JSON.stringify(body))
      req.end()
    })
  }
  
  try {
    // Test 1: Health check
    console.log('1️⃣ Testing GET /health...')
    let res = await makeRequest('GET', '/health')
    console.log('✅ Status:', res.status, 'Data:', res.data)
    
    // Test 2: Listar items
    console.log('\n2️⃣ Testing GET /api/items...')
    res = await makeRequest('GET', '/api/items')
    console.log('✅ Status:', res.status, 'Items:', res.data.data?.length)
    
    // Test 3: Listar locations
    console.log('\n3️⃣ Testing GET /api/locations...')
    res = await makeRequest('GET', '/api/locations')
    console.log('✅ Status:', res.status, 'Locations:', res.data.data?.length)
    
    // Test 4: Crear location
    console.log('\n4️⃣ Testing POST /api/locations...')
    res = await makeRequest('POST', '/api/locations', {
      code: 'TEST-LOC',
      name: 'Location Test',
      kind: 'AREA'
    })
    console.log('✅ Status:', res.status, 'Location creada:', res.data.id || res.data.error)
    
    console.log('\n✅ TESTS COMPLETADOS\n')
  } catch (error) {
    console.error('❌ ERROR:', error.message)
  }
}

// Esperar un poco a que el servidor esté listo
setTimeout(testAPI, 2000)
