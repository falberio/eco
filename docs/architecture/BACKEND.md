# 🔧 Backend Architecture - ECO Platform

> Documentación completa de la arquitectura backend (Node.js + Express + Prisma)

**Runtime:** Node.js 20  
**Framework:** Express 4  
**ORM:** Prisma 5.22.0  
**Database:** PostgreSQL 15  
**Última actualización:** 2026-01-25

---

## 🏗️ Estructura General

```
backend/
├── src/
│   ├── shared/                  # Código compartido entre módulos
│   │   ├── auth/
│   │   │   ├── authMiddleware.js
│   │   │   └── jwt.js
│   │   ├── qr/
│   │   │   └── qrGenerator.js
│   │   ├── validations/
│   │   │   └── common.js         # Zod schemas
│   │   └── integrations/         # APIs externas compartidas
│   │       └── google-docs.js    # Ejemplo futuro
│   │
│   ├── modules/
│   │   ├── alacena/
│   │   │   ├── controllers/
│   │   │   │   ├── itemController.js
│   │   │   │   ├── locationController.js
│   │   │   │   ├── batchController.js
│   │   │   │   ├── reserveController.js
│   │   │   │   └── menuController.js
│   │   │   ├── routes/
│   │   │   │   ├── itemRoutes.js
│   │   │   │   ├── locationRoutes.js
│   │   │   │   ├── batchRoutes.js
│   │   │   │   ├── reserveRoutes.js
│   │   │   │   └── menuRoutes.js
│   │   │   └── schemas/
│   │   │       ├── itemSchema.js
│   │   │       └── ...
│   │   │
│   │   └── mantia/                # Futuro
│   │       ├── controllers/
│   │       ├── routes/
│   │       └── schemas/
│   │
│   ├── prisma/
│   │   └── client.js             # Singleton Prisma Client
│   │
│   ├── app.js                    # Express setup
│   └── server.js                 # Entry point
│
├── prisma/
│   ├── schema.prisma
│   ├── migrations/
│   ├── seed.js
│   ├── seed-users.js
│   ├── seed-jars.js
│   └── generate-types.js         # Type generation script
│
├── Dockerfile
├── package.json
├── .env
└── .env.example
```

---

## 🚀 Entry Point

### server.js

```javascript
require('dotenv').config()
const app = require('./src/app')

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📡 API: http://localhost:${PORT}`)
  console.log(`🏥 Health: http://localhost:${PORT}/health`)
})
```

### app.js

```javascript
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// Rutas
const alacenaRoutes = require('./modules/alacena/routes/itemRoutes')
const sharedRoutes = require('./shared/routes/sharedRoutes')

const app = express()

// Middleware global
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
}))
app.use(express.json())
app.use(morgan('dev'))

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  })
})

// Rutas modulares
app.use('/api/alacena', alacenaRoutes)
app.use('/api/mantia', mantiaRoutes)  // Futuro
app.use('/api/shared', sharedRoutes)

// Error handler global
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

module.exports = app
```

---

## 🗄️ Prisma Client

### Singleton Pattern

**Archivo:** `backend/src/prisma/client.js`

```javascript
const { PrismaClient } = require('@prisma/client')

let prisma

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  // En desarrollo, evitar múltiples instancias con hot reload
  if (!global.prisma) {
    global.prisma = new PrismaClient({
      log: ['query', 'error', 'warn'],
    })
  }
  prisma = global.prisma
}

module.exports = prisma
```

**Uso:**

```javascript
const prisma = require('../../prisma/client')

const items = await prisma.item.findMany()
```

---

## 🧩 Módulo Alacena (Referencia)

### Controller Pattern

**Archivo:** `backend/src/modules/alacena/controllers/itemController.js`

```javascript
const prisma = require('../../../prisma/client')
const { itemCreateSchema, itemUpdateSchema } = require('../schemas/itemSchema')

class ItemController {
  // GET /api/alacena/items
  async getAll(req, res, next) {
    try {
      const { skip = 0, take = 100, search } = req.query
      
      // Construir where clause
      const where = search ? {
        OR: [
          { name: { contains: search, mode: 'insensitive' } },
          { code: { contains: search, mode: 'insensitive' } },
        ],
      } : {}
      
      // Query con paginación
      const [items, total] = await prisma.$transaction([
        prisma.item.findMany({
          skip: parseInt(skip),
          take: parseInt(take),
          where,
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: { id: true, email: true, name: true },
            },
          },
        }),
        prisma.item.count({ where }),
      ])
      
      res.json({
        data: items,
        pagination: {
          total,
          limit: parseInt(take),
          offset: parseInt(skip),
          hasNext: parseInt(skip) + parseInt(take) < total,
          hasPrevious: parseInt(skip) > 0,
        },
      })
    } catch (error) {
      next(error)
    }
  }
  
  // GET /api/alacena/items/:id
  async getById(req, res, next) {
    try {
      const { id } = req.params
      
      const item = await prisma.item.findUnique({
        where: { id },
        include: {
          batches: {
            where: { consumed: false },
            include: { location: true },
          },
          reserves: {
            where: { status: 'ACTIVE' },
          },
        },
      })
      
      if (!item) {
        return res.status(404).json({ error: 'Item not found' })
      }
      
      res.json(item)
    } catch (error) {
      next(error)
    }
  }
  
  // POST /api/alacena/items
  async create(req, res, next) {
    try {
      // Validar con Zod
      const validatedData = itemCreateSchema.parse(req.body)
      
      // Verificar código único
      const existing = await prisma.item.findUnique({
        where: { code: validatedData.code },
      })
      
      if (existing) {
        return res.status(409).json({ error: 'Code already exists' })
      }
      
      // Crear item
      const item = await prisma.item.create({
        data: {
          ...validatedData,
          userId: req.user.id, // Del middleware de auth
        },
      })
      
      res.status(201).json(item)
    } catch (error) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ 
          error: 'Validation error', 
          details: error.errors,
        })
      }
      next(error)
    }
  }
  
  // PUT /api/alacena/items/:id
  async update(req, res, next) {
    try {
      const { id } = req.params
      const validatedData = itemUpdateSchema.parse(req.body)
      
      const item = await prisma.item.update({
        where: { id },
        data: validatedData,
      })
      
      res.json(item)
    } catch (error) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Item not found' })
      }
      next(error)
    }
  }
  
  // DELETE /api/alacena/items/:id
  async delete(req, res, next) {
    try {
      const { id } = req.params
      
      // Verificar que no tenga batches activos
      const activeBatches = await prisma.batch.count({
        where: { itemId: id, consumed: false },
      })
      
      if (activeBatches > 0) {
        return res.status(409).json({ 
          error: 'Cannot delete item with active batches',
        })
      }
      
      await prisma.item.delete({ where: { id } })
      
      res.json({ message: 'Item deleted', id })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new ItemController()
```

---

### Route Pattern

**Archivo:** `backend/src/modules/alacena/routes/itemRoutes.js`

```javascript
const express = require('express')
const router = express.Router()
const itemController = require('../controllers/itemController')
const authMiddleware = require('../../../shared/auth/authMiddleware')

// Rutas públicas (si hubiera)
// router.get('/public', itemController.getPublic)

// Rutas protegidas
router.use(authMiddleware) // Todas las rutas requieren auth

router.get('/', itemController.getAll)
router.get('/:id', itemController.getById)
router.post('/', itemController.create)
router.put('/:id', itemController.update)
router.delete('/:id', itemController.delete)

module.exports = router
```

---

### Schema Pattern (Zod)

**Archivo:** `backend/src/modules/alacena/schemas/itemSchema.js`

```javascript
const { z } = require('zod')

const itemCreateSchema = z.object({
  code: z.string().min(1, 'Code is required'),
  name: z.string().min(1, 'Name is required'),
  unit: z.enum(['kg', 'L', 'u'], {
    errorMap: () => ({ message: 'Unit must be kg, L, or u' }),
  }),
  minStock: z.number().min(0).default(0),
  maxStock: z.number().min(0).default(0),
})

const itemUpdateSchema = itemCreateSchema.partial()

module.exports = {
  itemCreateSchema,
  itemUpdateSchema,
}
```

---

## 🔐 Autenticación

### JWT Middleware

**Archivo:** `backend/src/shared/auth/authMiddleware.js`

```javascript
const jwt = require('jsonwebtoken')
const prisma = require('../../prisma/client')

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-prod'

async function authMiddleware(req, res, next) {
  try {
    // Obtener token del header
    const authHeader = req.headers.authorization
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'No token provided' })
    }
    
    const token = authHeader.substring(7) // Remove 'Bearer '
    
    // Verificar token
    const decoded = jwt.verify(token, JWT_SECRET)
    
    // Obtener usuario de DB
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, email: true, name: true }, // Sin password
    })
    
    if (!user) {
      return res.status(401).json({ error: 'User not found' })
    }
    
    // Agregar usuario a request
    req.user = user
    next()
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' })
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ error: 'Token expired' })
    }
    next(error)
  }
}

module.exports = authMiddleware
```

---

### Login Controller

**Archivo:** `backend/src/shared/auth/authController.js`

```javascript
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const prisma = require('../../prisma/client')

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-in-prod'

class AuthController {
  // POST /api/auth/register
  async register(req, res, next) {
    try {
      const { email, password, name } = req.body
      
      // Validación básica
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' })
      }
      
      // Verificar si existe
      const existing = await prisma.user.findUnique({ where: { email } })
      if (existing) {
        return res.status(409).json({ error: 'Email already exists' })
      }
      
      // Hash password
      const passwordHash = await bcrypt.hash(password, 10)
      
      // Crear usuario
      const user = await prisma.user.create({
        data: { email, passwordHash, name },
        select: { id: true, email: true, name: true },
      })
      
      // Generar token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '7d',
      })
      
      res.status(201).json({ user, token })
    } catch (error) {
      next(error)
    }
  }
  
  // POST /api/auth/login
  async login(req, res, next) {
    try {
      const { email, password } = req.body
      
      if (!email || !password) {
        return res.status(400).json({ error: 'Email and password required' })
      }
      
      // Buscar usuario
      const user = await prisma.user.findUnique({ where: { email } })
      
      if (!user) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }
      
      // Verificar password
      const valid = await bcrypt.compare(password, user.passwordHash)
      
      if (!valid) {
        return res.status(401).json({ error: 'Invalid credentials' })
      }
      
      // Generar token
      const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
        expiresIn: '7d',
      })
      
      // Retornar sin password
      const { passwordHash, ...userPublic } = user
      
      res.json({ user: userPublic, token })
    } catch (error) {
      next(error)
    }
  }
  
  // GET /api/auth/me
  async me(req, res, next) {
    try {
      // req.user ya viene del middleware
      res.json(req.user)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = new AuthController()
```

---

## 📊 Shared Services

### QR Generator

**Archivo:** `backend/src/shared/qr/qrGenerator.js`

```javascript
function generateQRUrl(data, size = 200) {
  const baseUrl = 'https://api.qrserver.com/v1/create-qr-code/'
  return `${baseUrl}?data=${encodeURIComponent(data)}&size=${size}x${size}`
}

module.exports = { generateQRUrl }
```

**Uso:**

```javascript
const { generateQRUrl } = require('../../../shared/qr/qrGenerator')

const location = await prisma.location.create({
  data: {
    code: 'JAR-001',
    name: 'Frasco 1',
    qrCode: generateQRUrl('JAR-001'),
  },
})
```

---

## 🔄 Transactions y Stock

### Recalcular Stock

```javascript
async function recalculateItemStock(itemId) {
  // Sumar todos los batches no consumidos
  const result = await prisma.batch.aggregate({
    where: { 
      itemId,
      consumed: false,
    },
    _sum: { quantity: true },
  })
  
  const totalStock = result._sum.quantity || 0
  
  // Actualizar item
  await prisma.item.update({
    where: { id: itemId },
    data: { currentStock: totalStock },
  })
  
  return totalStock
}
```

**Uso en batch creation:**

```javascript
async create(req, res, next) {
  try {
    const batch = await prisma.batch.create({
      data: req.body,
    })
    
    // Recalcular stock del item
    await recalculateItemStock(batch.itemId)
    
    res.status(201).json(batch)
  } catch (error) {
    next(error)
  }
}
```

---

## 🧪 Testing

### Setup de Test

```javascript
// test/setup.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

beforeAll(async () => {
  // Limpiar DB de test
  await prisma.item.deleteMany()
  await prisma.user.deleteMany()
})

afterAll(async () => {
  await prisma.$disconnect()
})
```

### Test Example (Jest)

```javascript
// test/item.test.js
const request = require('supertest')
const app = require('../src/app')
const prisma = require('../src/prisma/client')

describe('Items API', () => {
  let authToken
  let userId
  
  beforeAll(async () => {
    // Crear usuario de test
    const res = await request(app)
      .post('/api/auth/register')
      .send({
        email: 'test@example.com',
        password: 'password123',
      })
    
    authToken = res.body.token
    userId = res.body.user.id
  })
  
  test('GET /api/alacena/items should return paginated items', async () => {
    const res = await request(app)
      .get('/api/alacena/items?take=10')
      .set('Authorization', `Bearer ${authToken}`)
    
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('data')
    expect(res.body).toHaveProperty('pagination')
    expect(res.body.pagination.limit).toBe(10)
  })
  
  test('POST /api/alacena/items should create item', async () => {
    const res = await request(app)
      .post('/api/alacena/items')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        code: 'TEST-001',
        name: 'Test Item',
        unit: 'kg',
        minStock: 1,
        maxStock: 5,
      })
    
    expect(res.status).toBe(201)
    expect(res.body.code).toBe('TEST-001')
  })
  
  test('POST with duplicate code should return 409', async () => {
    const res = await request(app)
      .post('/api/alacena/items')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        code: 'TEST-001', // Duplicado
        name: 'Another Item',
        unit: 'kg',
      })
    
    expect(res.status).toBe(409)
  })
})
```

---

## 🚀 Deployment

### Dockerfile

```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copiar package files
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependencies
RUN npm ci --only=production

# Generar Prisma Client
RUN npx prisma generate

# Copiar código
COPY src ./src

# Exponer puerto
EXPOSE 4000

# Comando de inicio
CMD ["npm", "start"]
```

### Build

```bash
docker build -t eco-backend .
docker run -p 4000:4000 --env-file .env eco-backend
```

---

## 📊 Logging

### Morgan (HTTP Logs)

```javascript
// En app.js
const morgan = require('morgan')

if (process.env.NODE_ENV === 'production') {
  app.use(morgan('combined'))
} else {
  app.use(morgan('dev'))
}
```

### Winston (Application Logs) - Futuro

```javascript
const winston = require('winston')

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }))
}

module.exports = logger
```

---

## 🔍 Debugging

### VS Code Launch Config

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Backend",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/backend/src/server.js",
      "envFile": "${workspaceFolder}/backend/.env"
    }
  ]
}
```

---

## 📚 Recursos

- **Express Docs:** https://expressjs.com
- **Prisma Docs:** https://www.prisma.io/docs
- **Node.js Docs:** https://nodejs.org/docs
- **Zod Docs:** https://zod.dev

---

*Backend documentation creada: 2026-01-25*
