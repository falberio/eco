# 🧺 ALACENA - Guía Completa de Arquitectura y Código

**Última Actualización:** 23 de enero de 2026  
**Versión:** 1.0 - Guía educativa para entender el proyecto desde cero

---

## Tabla de Contenidos

1. [¿QUÉ ES ALACENA?](#qué-es-alacena)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Flujo de una Sesión Típica](#flujo-de-una-sesión-típica)
4. [Estructura de Carpetas](#estructura-de-carpetas)
5. [Modelos de Base de Datos](#modelos-de-base-de-datos)
6. [Flujo de una Petición API](#flujo-de-una-petición-api)
7. [Autenticación - JWT](#autenticación---jwt)
8. [Lenguajes Explicados](#lenguajes-explicados)
9. [Componentes Clave](#componentes-clave)
10. [Solucionar Problemas](#solucionar-problemas)

---

## ¿QUÉ ES ALACENA?

ALACENA es un **sistema full-stack** (frontend + backend + base de datos) para gestionar un inventario de cocina. Es como un "ERP ligero" pero para tu cocina personal.

**Propósito:**
- Guardar qué ingredientes tienes y dónde están
- Registrar recetas que hiciste
- Gestionar reservas/porciones de comida
- Ver un menú público con lo que hay disponible

**Componentes principales:**
- 🖥️ **Frontend**: Interfaz visual (lo que ves en pantalla)
- ⚙️ **Backend**: Lógica del negocio (procesa datos, autenticación)
- 🗄️ **Base de datos**: Guarda toda la información persistentemente

---

## Tecnologías Utilizadas

### Frontend (c:\Users\Usuario\alacena\frontend\alacena-app)

| Tecnología | Tipo | ¿Qué es? | ¿Para qué? |
|-----------|------|---------|-----------|
| **Next.js 15** | Framework | Basado en React | Crea aplicaciones web modernas con SSR |
| **React 18** | Librería UI | Componentes visuales | Crea componentes interactivos reutilizables |
| **TypeScript** | Lenguaje | JavaScript con tipos | Añade seguridad de tipos al código |
| **Tailwind CSS** | Framework CSS | Utilidades de estilos | Crea interfaces bonitas sin escribir CSS manual |
| **NextAuth v5** | Librería Auth | Autenticación | Gestiona login/logout/sesiones seguro |
| **Zod** | Librería Validación | Schema validation | Valida que los datos sean del tipo correcto |
| **Axios** | Librería HTTP | Cliente HTTP | Hace peticiones al backend |

**Lenguaje:** TypeScript/JavaScript (TSX - TypeScript + JSX)

### Backend (c:\Users\Usuario\alacena\backend)

| Tecnología | Tipo | ¿Qué es? | ¿Para qué? |
|-----------|------|---------|-----------|
| **Express.js** | Framework | Framework web | Crea un servidor HTTP con rutas |
| **Node.js** | Runtime | Entorno de ejecución | Ejecuta JavaScript en el servidor |
| **Prisma** | ORM | Object-Relational Mapping | Interactúa con la BD de forma segura y tipada |
| **PostgreSQL** | Base de datos | SQL relacional | Almacena todos los datos |
| **JWT** | Librería Tokens | JSON Web Tokens | Crea tokens para verificar autenticación |
| **bcryptjs** | Librería Hash | Password hashing | Guarda contraseñas de forma segura |
| **CORS** | Librería | Cross-Origin Resource Sharing | Permite que frontend acceda al backend |
| **dotenv** | Librería Config | Variables de entorno | Lee configuración desde .env |

**Lenguaje:** JavaScript (Node.js)

### Base de Datos

| Componente | Tecnología | Ubicación |
|-----------|-----------|-----------|
| **BD Principal** | PostgreSQL | Supabase (IPv6) |
| **URL de conexión** | Connection String | Variables de entorno |
| **Migraciones** | Prisma Migrations | backend/prisma/migrations/ |

---

## Flujo de una Sesión Típica

### Escenario: Usuario intenta loguear

```
┌──────────────────────────────────────────────────────────────────────┐
│ PASO 1: Usuario entra a http://localhost:3000                        │
│ ✓ Frontend carga la página                                          │
│ ✓ Middleware (middleware.ts) revisa: ¿hay sesión?                   │
│ ✗ NO hay sesión → redirige a /login                                 │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ PASO 2: Usuario ve FORMULARIO DE LOGIN (app/login/page.tsx)         │
│ ✓ Página renderizada con campos:                                    │
│   - Email: [              ]                                         │
│   - Contraseña: [         ]                                         │
│   - [Ingresar]                                                      │
│                                                                      │
│ Usuario ingresa:                                                     │
│   - Email: admin@alacena.com                                        │
│   - Contraseña: admin123                                            │
│   - Hace click en "Ingresar"                                        │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ PASO 3: FRONTEND (NextAuth) interpreta el submit                    │
│ ✓ handleSubmit() se ejecuta                                         │
│ ✓ Llama a: signIn('credentials', { email, password })               │
│ ✓ NextAuth intercepta y usa el CredentialsProvider                  │
│ ✓ Llama authorize() definido en auth.ts                             │
│ ✓ authorize() hace fetch a backend: POST /api/auth/login            │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ PASO 4: BACKEND recibe petición POST /api/auth/login                │
│ (Archivo: src/routes/auth.routes.js → src/controllers/auth.js)      │
│                                                                      │
│ ✓ Express recibe POST /api/auth/login                               │
│ ✓ auth.controller.login(req, res) se ejecuta:                       │
│   1. Lee email y password del request body                          │
│   2. Busca usuario en BD: WHERE email = "admin@alacena.com"         │
│   3. Compara password con bcrypt:                                   │
│      bcrypt.compare(password, user.passwordHash)                    │
│   4. Si NO coincide → return error 401                              │
│   5. Si coincide → genera JWT:                                      │
│      jwt.sign({ userId, email }, JWT_SECRET, { expiresIn: '30d' })  │
│   6. Retorna: { user: {id, email, name}, token: "JWT..." }         │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ PASO 5: FRONTEND (NextAuth) recibe la respuesta                     │
│ ✓ authorize() retorna el usuario con el token                       │
│ ✓ NextAuth ejecuta callbacks:                                       │
│   1. jwt({ token, user }) → guarda userId, email, token en JWT      │
│   2. session({ session, token }) → añade datos a la sesión          │
│ ✓ NextAuth crea COOKIE SEGURA con el JWT encriptado                │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ PASO 6: Usuario redirigido a /dashboard                             │
│ ✓ signIn() termina correctamente                                    │
│ ✓ router.push('/dashboard')                                         │
│ ✓ Middleware revisa: ¿hay sesión?                                   │
│ ✓ SÍ hay sesión (cookie JWT) → permite acceso                       │
│ ✓ Dashboard se carga con los datos del usuario                      │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Estructura de Carpetas

### Frontend

```
frontend/alacena-app/
├── app/                                    # Carpeta de rutas (Next.js App Router)
│   ├── page.tsx                           # Página raíz (/) - Menú principal
│   ├── layout.tsx                         # HTML/CSS común para todas las páginas
│   ├── globals.css                        # Estilos globales
│   ├── providers.tsx                      # Proveedor de sesión (NextAuth)
│   │
│   ├── login/
│   │   └── page.tsx                       # Formulario de login
│   │
│   ├── dashboard/                         # Protegida por middleware
│   │   ├── page.tsx                       # Home del dashboard
│   │   ├── layout.tsx                     # Sidebar con navegación
│   │   ├── items/
│   │   │   └── page.tsx                   # CRUD de items (ingredientes)
│   │   ├── locations/
│   │   │   └── page.tsx                   # CRUD de ubicaciones
│   │   ├── reserves/
│   │   │   └── page.tsx                   # CRUD de reservas
│   │   └── menu/
│   │       └── page.tsx                   # CRUD del menú público
│   │
│   ├── guest/                             # Rutas públicas (sin login)
│   │   └── menu/
│   │       └── page.tsx                   # Menú público por QR
│   │
│   └── api/                               # Endpoints API (rutas de servidor)
│       └── auth/
│           └── [...nextauth]/
│               └── route.ts               # Maneja rutas de NextAuth
│
├── auth.ts                                # Configuración de NextAuth
│                                          # - CredentialsProvider
│                                          # - Callbacks JWT
│                                          # - Callbacks Session
│
├── middleware.ts                          # Protección de rutas
│                                          # - Redirige a /login si no hay sesión
│
├── lib/
│   └── validations.ts                     # Schemas de Zod para formularios
│
├── .env.local                             # Variables de entorno (desarrollo)
│                                          # - NEXT_PUBLIC_API_URL
│                                          # - AUTH_SECRET
│
└── package.json                           # Dependencias y scripts
    ├── "dev": "next dev"                  # Inicia servidor en 3000
    ├── "build": "next build"              # Compila para producción
    └── "start": "next start"              # Inicia versión compilada
```

### Backend

```
backend/
├── src/
│   ├── app.js                             # Configuración de Express
│   │                                      # - CORS habilitado
│   │                                      # - JSON parser
│   │                                      # - Rutas registradas
│   │
│   ├── server.js                          # Punto de entrada
│   │                                      # - Inicia servidor en puerto 3001
│   │
│   ├── controllers/                       # Lógica de negocio
│   │   ├── auth.controller.js             # register(), login(), getProfile()
│   │   ├── item.controller.js             # Maneja Items
│   │   ├── location.controller.js         # Maneja Locations
│   │   ├── reserve.controller.js          # Maneja Reserves
│   │   ├── menuItem.controller.js         # Maneja Menu Items
│   │   ├── container.controller.js        # Maneja Containers
│   │   └── batch.controller.js            # Maneja Batches
│   │
│   ├── routes/                            # Rutas HTTP
│   │   ├── auth.routes.js                 # GET/POST /api/auth/*
│   │   ├── items.routes.js                # GET/POST/PUT/DELETE /api/items/*
│   │   ├── locations.routes.js            # GET/POST/PUT/DELETE /api/locations/*
│   │   ├── reserves.routes.js             # GET/POST/PUT/DELETE /api/reserves/*
│   │   ├── menuItems.routes.js            # GET/POST/PUT/DELETE /api/menu-items/*
│   │   ├── containers.routes.js           # GET/POST/PUT/DELETE /api/containers/*
│   │   └── batches.routes.js              # GET/POST/PUT/DELETE /api/batches/*
│   │
│   ├── schemas/                           # Validación de datos (Zod)
│   │   ├── item.schema.js
│   │   ├── location.schema.js
│   │   ├── reserve.schema.js
│   │   ├── menuItem.schema.js
│   │   ├── container.schema.js
│   │   └── batch.schema.js
│   │
│   ├── services/                          # Servicios (lógica adicional)
│   │   └── [vacío por ahora]
│   │
│   └── prisma/
│       └── client.js                      # Singleton de Prisma Client
│                                          # - Conexión única a BD
│
├── prisma/
│   ├── schema.prisma                      # *** DEFINICIÓN DE MODELOS ***
│   │                                      # - User, Item, Location, etc.
│   │
│   ├── seed.js                            # Script de datos de prueba
│   │                                      # - Crea usuario admin
│   │                                      # - Crea items de ejemplo
│   │
│   └── migrations/                        # Histórico de cambios de BD
│       ├── migration_lock.toml
│       ├── 20260117002524_init/
│       │   └── migration.sql
│       └── 20260117045609_add_user_model/
│           └── migration.sql
│
├── .env                                   # Variables de entorno (desarrollo)
│                                          # - DATABASE_URL
│                                          # - JWT_SECRET
│
├── .env.production                        # Variables para producción
├── package.json                           # Dependencias y scripts
│   ├── "dev": "nodemon src/server.js"    # Inicia con auto-reload
│   ├── "start": "node src/server.js"     # Inicia normalmente
│   ├── "build": "prisma generate"        # Genera Prisma Client
│   └── "prisma:seed": "node prisma/seed.js"
│
├── Procfile                               # Configuración para Fly.io
├── Dockerfile                             # Configuración para Docker
├── vercel.json                            # Configuración para Vercel
└── fly.toml                               # Configuración para Fly.io
```

---

## Modelos de Base de Datos

El archivo `schema.prisma` define la **estructura de datos** persistente.

### Modelo: User (Usuario)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique              // Identificador único
  name          String?                        // Nombre del usuario
  passwordHash  String                         // Contraseña hasheada con bcrypt
  role          String    @default("user")     // "admin" o "user"
  isActive      Boolean   @default(true)       // Si está activo/inactivo
  createdAt     DateTime  @default(now())      // Cuándo se creó
  updatedAt     DateTime  @updatedAt           // Última actualización
}
```

**Casos de uso:**
- Login: Buscamos por email y verificamos passwordHash
- Perfil: Recuperamos datos del usuario logueado

---

### Modelo: Item (Ingrediente/Producto)

```prisma
model Item {
  id          String   @id @default(cuid())
  code        String?  @unique               // Código único (ej: "LENTEJA-CH")
  name        String                         // Nombre (ej: "Lentejas Chicas")
  kind        ItemKind                       // PRODUCT o RECIPE
  // ... más campos
}

enum ItemKind {
  PRODUCT   // Ingredientes, bebidas, productos sueltos
  RECIPE    // Preparaciones, recetas, viandas
}
```

**Casos de uso:**
- Listar todos los items disponibles
- Buscar un item específico
- Crear/actualizar/eliminar items

---

### Modelo: Location (Ubicación)

```prisma
model Location {
  id          String       @id @default(cuid())
  code        String?      @unique           // Código (ej: "FV", "EF")
  name        String                         // Nombre amigable
  kind        LocationKind                   // AREA, SECTION, SLOT
  parentId    String?                        // Para crear jerarquía
  parent      Location?    @relation(...)    // Ubicación padre
  children    Location[]   @relation(...)    // Ubicaciones hijas
  sortIndex   Int          @default(0)       // Orden visual
}

enum LocationKind {
  AREA      // Gran lugar: "Freezer Vertical", "Heladera"
  SECTION   // Sub-ubicación: "Cajón 3", "Estante 2"
  SLOT      // Sub-sub: "Posición 4", "Hueco 1"
}
```

**Casos de uso:**
- Crear jerarquía de ubicaciones (Freezer → Compartimiento → Posición)
- Ubicar dónde está almacenado algo

---

### Modelo: Reserve (Reserva/Porción)

```prisma
model Reserve {
  id            String   @id @default(cuid())
  itemId        String                        // Qué cosa está guardada
  item          Item     @relation(...)       // Relación a Item
  locationId    String                        // Dónde está guardada
  location      Location @relation(...)       // Relación a Location
  containerId   String                        // En qué envase
  container     Container @relation(...)      // Relación a Container
  status        ReserveStatus                 // Estado actual
  quantity      Float?                        // Cantidad
  unit          UnitKind                      // GRAM, ML, UNIT
}

enum ReserveStatus {
  ACTIVE        // Existe y cuenta en inventario
  TRANSFORMED   // Fue transformada/porcionada
  CONSUMED      // Consumida (futuro)
  DISCARDED     // Descartada (futuro)
}
```

**Casos de uso:**
- Registrar dónde guardé las lentejas (qué item, en qué ubicación, en qué envase)
- Ver inventario total
- Marcar como consumido

---

### Modelo: Container (Envase)

```prisma
model Container {
  id            String   @id @default(cuid())
  code          String   @unique             // Código único (ej: "F-001")
  typeId        String                        // Tipo de envase
  type          ContainerType @relation(...)  // Relación
  tareWeight_g  Int?                          // Peso del envase vacío
}
```

---

## Flujo de una Petición API

### Ejemplo: Crear un nuevo item

#### **1. Frontend hace la petición**

Archivo: `app/dashboard/items/page.tsx`

```typescript
// Usuario ingresa datos en formulario
const formData = {
  name: "Lentejas",
  code: "LENT-CH",
  kind: "PRODUCT"
}

// Validar con Zod
import { itemSchema } from '@/lib/validations'
const validData = itemSchema.parse(formData)  // ✓ O lanza error

// Enviar al backend
const response = await fetch('http://localhost:3001/api/items', {
  method: 'POST',
  headers: { 
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${session.backendToken}`  // JWT
  },
  body: JSON.stringify(validData)
})

const result = await response.json()
```

#### **2. Backend recibe y procesa**

Archivo: `src/routes/items.routes.js`

```javascript
const express = require('express')
const itemController = require('../controllers/item.controller.js')

const router = express.Router()

// POST /api/items → Llama al controller
router.post('/', itemController.create)

module.exports = router
```

Archivo: `src/controllers/item.controller.js`

```javascript
async function create(req, res) {
  try {
    // 1. Validar datos (otra validación)
    const { name, code, kind } = req.body
    
    if (!name) {
      return res.status(400).json({ error: 'Name es requerido' })
    }

    // 2. Usar Prisma para insertar en BD
    const item = await prisma.item.create({
      data: {
        name,
        code,
        kind
      }
    })

    // 3. Retornar el item creado
    res.status(201).json({
      success: true,
      item,
      message: 'Item creado exitosamente'
    })

  } catch (error) {
    console.error('Error creando item:', error)
    res.status(500).json({ error: error.message })
  }
}

module.exports = { create }
```

#### **3. Base de datos ejecuta**

Prisma traduce el `create()` a SQL:

```sql
INSERT INTO Item (id, name, code, kind, createdAt, updatedAt)
VALUES ('cuid-random-123', 'Lentejas', 'LENT-CH', 'PRODUCT', NOW(), NOW())
RETURNING *;
```

#### **4. Frontend recibe respuesta**

```typescript
if (response.ok) {
  const { item } = await response.json()
  
  // Actualizar lista en memoria
  setItems([...items, item])
  
  // Mostrar éxito
  setMessage('Item creado ✓')
} else {
  setError('Error al crear item')
}
```

---

## Autenticación - JWT

### ¿Qué es un JWT?

Un **JWT (JSON Web Token)** es como un "carnet de identidad digital" que el backend firma y da al cliente. El cliente lo envía en cada petición para probar quién es.

### Estructura de un JWT

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VySWQiOiIxMjMiLCJlbWFpbCI6ImFkbWluQGFsYWNlbmEuY29tIn0
.dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXo

Decodificado:
┌─────────────────────────────────────────────────┐
│ HEADER (encabezado)                             │
│ {                                               │
│   "alg": "HS256",    // Algoritmo de firma      │
│   "typ": "JWT"       // Tipo de token          │
│ }                                               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ PAYLOAD (datos)                                 │
│ {                                               │
│   "userId": "123",                              │
│   "email": "admin@alacena.com",                 │
│   "iat": 1674000000,      // Emitido en...     │
│   "exp": 1676592000       // Expira en...      │
│ }                                               │
└─────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ SIGNATURE (firma digital)                       │
│ HMACSHA256(                                     │
│   base64(header) + "." + base64(payload),       │
│   JWT_SECRET                                    │
│ )                                               │
│                                                 │
│ El backend es el único que conoce JWT_SECRET   │
│ Si alguien cambia el payload, la firma es      │
│ inválida y el backend lo rechaza               │
└─────────────────────────────────────────────────┘
```

### Flujo de autenticación completo

```
1. LOGIN
   ┌──────────────┐
   │ Cliente      │
   │ email/pass   │──→ POST /api/auth/login
   └──────────────┘
                        ↓
                   ┌──────────────┐
                   │ Backend      │
                   │ Verifica     │
                   │ contraseña   │
                   └──────────────┘
                        ↓
                   Si correcto:
                   jwt.sign(
                     { userId, email },
                     JWT_SECRET,
                     { expiresIn: '30d' }
                   )

2. RETORNO DEL TOKEN
   ┌──────────────┐
   │ Backend      │
   │ {            │
   │   user,      │
   │   token: "JWT..."
   │ }            │←── Retorna JWT
   └──────────────┘

3. CLIENTE GUARDA EL TOKEN
   ┌──────────────┐
   │ Frontend     │
   │ NextAuth     │
   │ Guarda JWT   │
   │ en cookie    │←── Cookie segura
   │ encriptada   │
   └──────────────┘

4. PETICIONES SUBSECUENTES
   ┌──────────────┐
   │ Cliente      │
   │ GET /api/items
   │ Header:      │
   │ Authorization:
   │ Bearer JWT...│──→ Envía JWT en encabezado
   └──────────────┘
                        ↓
                   ┌──────────────┐
                   │ Backend      │
                   │ Verifica JWT │
                   │ jwt.verify() │
                   └──────────────┘
                        ↓
                   ✓ Válido → Procesa petición
                   ✗ Inválido/Expirado → 401 Unauthorized

5. TOKEN EXPIRA (después de 30 días)
   ┌──────────────┐
   │ Cliente      │
   │ jwt.verify() │
   │ falla        │←── Token expirado
   └──────────────┘
                        ↓
                   Frontend redirige a /login
                   Usuario debe loguear nuevamente
```

### Contraseñas: bcrypt

Las contraseñas NUNCA se guardan en texto plano. Se usan hashes con bcrypt:

```javascript
// Registro
const password = "admin123"
const passwordHash = await bcrypt.hash(password, 10)
// passwordHash = "$2a$10$GHX8.yL9OJ1CpQs3f6J3He7JM45VUFvR4PgGhR1HPl..."
// Se guarda passwordHash en BD

// Login
const password = "admin123"
const isValid = await bcrypt.compare(password, user.passwordHash)
// Compara el password ingresado con el hash guardado
// Retorna true o false
```

---

## Lenguajes Explicados

### JavaScript (Backend)

**¿Qué es?** Lenguaje de programación que tradicionalmente corre en navegadores, pero ahora también en servidores (Node.js).

**Sintaxis básica:**

```javascript
// Variables
const nombre = "Juan"              // Constante (no cambia)
let edad = 30                       // Variable (puede cambiar)
var antigua = "no uses"             // Antigua (evitar)

// Funciones
function saludar(nombre) {
  return `Hola ${nombre}`
}

// Funciones flecha (modernas)
const sumar = (a, b) => a + b

// Async/await (operaciones asincrónicas)
async function obtenerDatos() {
  try {
    const response = await fetch('http://...')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error:', error)
  }
}

// Objetos
const usuario = {
  id: 1,
  nombre: "Juan",
  saludar: function() {
    return `Hola, soy ${this.nombre}`
  }
}

// Arrays
const numeros = [1, 2, 3, 4, 5]
numeros.map(n => n * 2)            // [2, 4, 6, 8, 10]
numeros.filter(n => n > 2)          // [3, 4, 5]
```

**En nuestro proyecto:**
- Controllers: Funciones async que reciben `(req, res)`
- Routes: Definen qué función llamar según la ruta
- Prisma: Interacción con la BD

---

### TypeScript (Frontend)

**¿Qué es?** JavaScript + un sistema de tipos. Detecta errores antes de ejecutar el código.

**Diferencia fundamental:**

```javascript
// JavaScript (sin tipos)
function sumar(a, b) {
  return a + b
}

sumar(5, 3)        // ✓ Funciona: 8
sumar("5", "3")    // ✓ "Funciona": "53" ❌ NO es lo esperado
sumar({}, [])      // ✓ ¿Funciona? Resultado raro
```

```typescript
// TypeScript (con tipos)
function sumar(a: number, b: number): number {
  return a + b
}

sumar(5, 3)        // ✓ Bien: 8
sumar("5", "3")    // ✗ ERROR en tiempo de desarrollo
sumar({}, [])      // ✗ ERROR en tiempo de desarrollo

// El compilador te dice el error ANTES de ejecutar
```

**Sintaxis de tipos:**

```typescript
// Tipos básicos
const nombre: string = "Juan"
const edad: number = 30
const activo: boolean = true
const cualquiera: any = "puede ser cualquier cosa"

// Interfaces (definir forma de objetos)
interface Usuario {
  id: string
  email: string
  name?: string              // ? = opcional
  role: 'admin' | 'user'     // Solo estos valores
}

// Tipos genéricos
const numeros: number[] = [1, 2, 3]
const promesa: Promise<string> = fetch('...')

// React Component
interface Props {
  title: string
  onClick: () => void
}

export default function Button({ title, onClick }: Props) {
  return <button onClick={onClick}>{title}</button>
}
```

**En nuestro proyecto:**
- Componentes `.tsx` = TypeScript + JSX
- Props validadas con tipos
- Mejor IntelliSense en el editor

---

### JSX/TSX (Frontend)

**¿Qué es?** Sintaxis que mezcla HTML con JavaScript/TypeScript. React lo transforma a JavaScript.

```jsx
// JSX
const titulo = <h1>Hola Mundo</h1>

// React transforma a:
const titulo = React.createElement('h1', null, 'Hola Mundo')
```

**Ejemplos en nuestro proyecto:**

```tsx
// Componente simple
function Saludo({ nombre }: { nombre: string }) {
  return <p>Hola, {nombre}!</p>
}

// Componente con lógica
function Lista({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// Componente con estado
'use client'

import { useState } from 'react'

export default function Contador() {
  const [count, setCount] = useState(0)
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}
```

---

### SQL (Base de Datos)

**¿Qué es?** Lenguaje para consultar y manipular bases de datos.

**En nuestro proyecto, Prisma traduce esto:**

```typescript
// Prisma (TypeScript)
const user = await prisma.user.findUnique({
  where: { email: "admin@alacena.com" }
})
```

**A esto (SQL):**

```sql
SELECT * FROM "User" WHERE email = 'admin@alacena.com';
```

---

## Componentes Clave

### 1. NextAuth (Autenticación Frontend)

**Archivo:** `auth.ts`

**¿Qué hace?**
- Gestiona sesiones de usuario
- Protege rutas que requieren login
- Maneja cookies seguras con JWT

**Flujo:**

```typescript
export const { auth, handlers, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,  // ← Encripta la sesión
  
  providers: [
    CredentialsProvider({            // ← Usa usuario/contraseña
      credentials: {
        email: {},
        password: {}
      },
      async authorize(credentials) {
        // Llama a backend para validar
        const res = await fetch(`${API_URL}/api/auth/login`, {
          method: 'POST',
          body: JSON.stringify(credentials)
        })
        
        if (!res.ok) return null
        
        const user = await res.json()
        return user  // ← Retorna usuario si es válido
      }
    })
  ],
  
  callbacks: {
    async jwt({ token, user }) {
      // Llama cuando se crea el JWT
      if (user) {
        token.backendToken = user.token  // ← Guarda JWT del backend
      }
      return token
    },
    async session({ session, token }) {
      // Llama cuando se obtiene la sesión
      if (session.user) {
        (session as any).backendToken = token.backendToken
      }
      return session
    }
  },
  
  pages: {
    signIn: '/login'  // ← Página de login
  }
})
```

---

### 2. Middleware (Protección de Rutas)

**Archivo:** `middleware.ts`

**¿Qué hace?** Intercepta peticiones y redirige si no hay sesión.

```typescript
import { auth } from './auth'

export const middleware = auth((req) => {
  // Si no hay sesión y accede a /dashboard → redirige a /login
  if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
    const loginUrl = new URL('/login', req.nextUrl.origin)
    loginUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
    return Response.redirect(loginUrl)
  }
  
  // Si no hay sesión y accede a / → redirige a /login
  if (!req.auth && req.nextUrl.pathname === '/') {
    return Response.redirect(new URL('/login', req.nextUrl.origin))
  }
})

export const config = {
  matcher: ['/', '/dashboard/:path*']  // ← Rutas a proteger
}
```

**Flujo:**

```
Usuario accede a http://localhost:3000/dashboard
         ↓
Middleware intercepta
         ↓
¿Hay req.auth (sesión)?
    ├─ Sí → Continúa normal
    └─ No → Redirige a /login
```

---

### 3. Express Backend

**Archivo:** `src/app.js` y `src/server.js`

**¿Qué hace?** Crea un servidor HTTP que escucha peticiones.

```javascript
// app.js - Configuración
const express = require('express')
const cors = require('cors')

const app = express()

// Middleware de Express
app.use(cors())                    // Permite peticiones desde otros orígenes
app.use(express.json())            // Parsea JSON del request body

// Rutas
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/api/auth', authRoutes)   // Rutas de autenticación
app.use('/api/items', itemsRoutes) // Rutas de items
// ... más rutas

module.exports = app

// server.js - Inicia el servidor
const app = require('./app.js')

const PORT = process.env.PORT || 3001

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🧺 Backend corriendo en puerto ${PORT}`)
})
```

---

### 4. Prisma (ORM)

**Archivo:** `prisma/schema.prisma`

**¿Qué es?** Un "intermediario" entre tu código y la base de datos.

**Sin Prisma (SQL puro):**

```javascript
const connection = new Connection(...)
const result = await connection.query(
  "SELECT * FROM users WHERE email = $1",
  [email]
)
const user = result.rows[0]
```

**Con Prisma (tipado y seguro):**

```typescript
const user = await prisma.user.findUnique({
  where: { email }
})
// user es de tipo User (tipado)
```

**Operaciones comunes:**

```typescript
// CREATE (Insertar)
const user = await prisma.user.create({
  data: {
    email: "nuevo@email.com",
    passwordHash: "hash...",
    name: "Juan"
  }
})

// READ (Leer)
const user = await prisma.user.findUnique({
  where: { id: "123" }
})

const usuarios = await prisma.user.findMany({
  where: { role: "admin" }
})

// UPDATE (Actualizar)
const updated = await prisma.user.update({
  where: { id: "123" },
  data: { name: "Juan Actualizado" }
})

// DELETE (Eliminar)
await prisma.user.delete({
  where: { id: "123" }
})
```

---

## Solucionar Problemas

### Problema: "MissingSecret: Please define a secret"

**Causa:** La variable `AUTH_SECRET` o `NEXTAUTH_SECRET` no está configurada.

**Solución:**

1. Abre `frontend/alacena-app/.env.local`
2. Asegúrate de que tiene:
   ```
   AUTH_SECRET=tu-secret-aqui
   NEXTAUTH_SECRET=tu-secret-aqui
   ```
3. Reinicia el frontend: `npm run dev`

---

### Problema: "No es posible conectar con el servidor remoto"

**Causa:** Frontend no puede acceder al backend.

**Verificación:**

1. Abre una terminal PowerShell
2. Ejecuta:
   ```powershell
   curl.exe http://localhost:3001/health
   ```
3. Si devuelve JSON → Backend está bien
4. Si falla → Backend no está corriendo

**Solución:**

```powershell
# Verifica procesos de Node
Get-Process -Name node

# Si no hay, levanta el backend
Set-Location 'c:\Users\Usuario\alacena\backend'
npm run dev
```

---

### Problema: "Email o contraseña incorrectos"

**Causas posibles:**

1. Usuario no existe en BD
2. Contraseña incorrecta
3. BD no tiene el usuario de prueba

**Verificación:**

1. Asegúrate de ejecutar el seed:
   ```powershell
   cd c:\Users\Usuario\alacena\backend
   npm run prisma:seed
   ```

2. Verifica que el usuario exista (credenciales de prueba):
   - Email: `admin@alacena.com`
   - Contraseña: `admin123`

---

### Problema: Frontend no redirige a login

**Causa:** Middleware no se cargó correctamente.

**Solución:**

1. Detén el frontend (Ctrl+C)
2. Elimina carpeta `.next`:
   ```powershell
   rm -Recurse frontend/alacena-app/.next
   ```
3. Reinicia:
   ```powershell
   npm run dev
   ```

---

### Problema: Base de datos no conecta

**Verificación:**

1. Abre `backend/.env`
2. Verifica que `DATABASE_URL` sea correcta
3. Prueba la conexión:
   ```powershell
   cd backend
   npm run prisma:migrate
   ```

Si hay error → URL incorrecta o credenciales malas.

---

## Conclusión

ALACENA está construido con:

- **Frontend moderno:** Next.js + TypeScript + React
- **Backend robusto:** Express + Prisma + PostgreSQL
- **Autenticación segura:** JWT + bcrypt + NextAuth
- **Código tipado:** TypeScript para menos errores

Los conceptos clave para dominar el proyecto:

1. **Flujo de login:** Middleware → NextAuth → Backend → JWT
2. **Peticiones API:** Frontend → Express routes → Controllers → Prisma → BD
3. **Autenticación:** JWT en cookies + Middleware de protección
4. **Lenguajes:** JavaScript (backend), TypeScript (frontend), SQL (BD)

---

**Próximos pasos para aprender:**

1. Lee un controlador completamente (ej: `auth.controller.js`)
2. Entiende cómo se conecta con su ruta (`auth.routes.js`)
3. Revisa cómo el frontend lo usa (`login/page.tsx`)
4. Modifica algo pequeño y observa el flujo

¡Mucho éxito en tu aprendizaje! 🚀
