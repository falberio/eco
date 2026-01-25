# 🏗️ Arquitectura ECO Platform - Visión General

> Arquitectura de plataforma modular para múltiples aplicaciones

**Última actualización:** 2026-01-25

---

## 🎯 Concepto Principal

ECO es una **plataforma modular** que aloja múltiples aplicaciones especializadas:

- **Alacena:** Gestión de alacena/despensa
- **Mantia:** Gestión financiera/presupuestal  
- **Salud:** Tracking de salud y bienestar
- **Financia:** Finanzas personales
- **Huesha:** [Por definir]

**Principio clave:** Código compartido + módulos independientes con personalización

---

## 📐 Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────────┐
│                       FRONTEND APPS                          │
├──────────────┬──────────────┬──────────────┬───────────────┤
│ alacena-app  │ mantia-app   │ salud-app    │  ...          │
│ (verde)      │ (azul)       │ (rojo)       │               │
│ Port 3000    │ Port 3001    │ Port 3002    │               │
└──────┬───────┴──────┬───────┴──────┬───────┴───────┬───────┘
       │              │              │               │
       └──────────────┴──────────────┴───────────────┘
                      │
              ┌───────▼────────┐
              │ SHARED CODE    │
              │ @eco/shared    │
              │                │
              │ - Components   │
              │ - Hooks        │
              │ - Theme        │
              │ - Auth         │
              │ - Types        │
              └────────┬───────┘
                       │
       ┌───────────────┴───────────────┐
       │                               │
   ┌───▼────┐                    ┌─────▼─────┐
   │ VERCEL │                    │ FLY.IO    │
   │        │                    │           │
   │Frontend│◄───────────────────┤  Backend  │
   │ Static │      HTTPS         │  Node.js  │
   └────────┘                    └─────┬─────┘
                                       │
                                 ┌─────▼─────┐
                                 │PostgreSQL │
                                 │           │
                                 │ Shared DB │
                                 └───────────┘
```

---

## 🗄️ Base de Datos Compartida

### Estrategia: Single Database con Prefijos

Todas las apps comparten una PostgreSQL, usando **prefijos en nombres de tabla**:

```sql
-- Alacena
User, Item, Location, Container, Batch, Reserve, MenuItem

-- Mantia (futuro)
Mantia_Account, Mantia_Transaction, Mantia_Budget, Mantia_Category

-- Salud (futuro)
Salud_Measurement, Salud_Goal, Salud_Activity

-- Shared (sin prefijo)
User (compartido entre todos)
```

**Ventajas:**
- Una sola conexión DB
- Migrations unificadas
- Relaciones cross-module posibles (ej: User → Mantia_Account)
- Simplicidad operacional

**Trade-off:** Menos aislamiento que DBs separadas (aceptable para MVP)

---

## 🎨 Frontend: Modular con Shared Code

### Estructura

```
frontend/
├── shared/              # @eco/shared package
│   ├── components/      # Componentes reutilizables
│   │   ├── layout/      # DashboardLayout
│   │   ├── data/        # PaginationControls, Table
│   │   └── ui/          # Button, Input, Modal (futuro)
│   ├── hooks/           # usePagination, useAuth, useFetch
│   ├── lib/             # api-client.ts, validations.ts, utils.ts
│   ├── styles/          # theme.base.ts, theme.ts, tailwind.preset.js
│   ├── types/           # common.ts, prisma.generated.ts
│   └── auth/            # config.ts, hooks.ts
│
├── alacena-app/         # App 1 (independiente)
│   ├── app/             # Next.js pages
│   ├── theme.ts         # alacenaTheme (verde)
│   ├── package.json     # dependency: "@eco/shared": "file:../shared"
│   └── tsconfig.json    # paths: "@eco/shared/*"
│
└── mantia-app/          # App 2 (independiente)
    ├── app/
    ├── theme.ts         # mantiaTheme (azul)
    └── ...
```

### npm Workspaces

Configurado en `frontend/package.json`:

```json
{
  "workspaces": ["alacena-app", "mantia-app", "shared"]
}
```

**Beneficios:**
- Importar shared como `import { DashboardLayout } from '@eco/shared/components'`
- Hot reload entre shared ↔ apps
- Single `node_modules` a nivel raíz

---

## 🎨 Sistema de Theming

### Base Theme (Neutro)

```typescript
// frontend/shared/styles/theme.base.ts
export const baseTheme = {
  spacing: { xs: '4px', sm: '8px', ... },
  colors: { 
    neutral: { ... },
    success: { ... },
    // primary/secondary NO definidos (cada app los sobrescribe)
  },
  typography: { ... },
  shadows: { ... },
  breakpoints: { ... }
}
```

### App-Specific Override

```typescript
// frontend/alacena-app/theme.ts
import { defaultTheme } from '@eco/shared/styles'

export const alacenaTheme: AppTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: {
      500: '#22c55e', // Verde
      ...
    },
    secondary: {
      500: '#eab308', // Amarillo
      ...
    }
  },
  app: {
    name: 'Alacena',
    logo: '/logo-alacena.svg'
  }
}
```

### Uso

```tsx
// En layout.tsx de cada app
<ThemeProvider theme={alacenaTheme}>
  <SharedDashboardLayout menuItems={...} />
</ThemeProvider>
```

---

## 🔧 Backend: Monolito Modular

### Estructura

```
backend/
├── src/
│   ├── shared/              # Código compartido
│   │   ├── auth/            # JWT, middleware
│   │   ├── qr/              # Generación QR
│   │   ├── validations/     # Zod schemas
│   │   └── integrations/    # APIs externas comunes
│   │
│   ├── modules/
│   │   ├── alacena/
│   │   │   ├── controllers/ # itemController.js
│   │   │   ├── routes/      # itemRoutes.js
│   │   │   └── schemas/     # itemSchema.js (Zod)
│   │   │
│   │   └── mantia/
│   │       ├── controllers/
│   │       ├── routes/
│   │       └── schemas/
│   │
│   ├── app.js               # Express setup
│   └── server.js            # Entry point
│
└── prisma/
    └── schema.prisma        # Todos los modelos
```

### Routing

Un solo servidor en puerto `4000`, rutas modulares:

```javascript
// src/app.js
app.use('/api/alacena', alacenaRoutes)  // /api/alacena/items, /locations, etc.
app.use('/api/mantia', mantiaRoutes)    // /api/mantia/accounts, /transactions
app.use('/api/shared', sharedRoutes)    // /api/shared/qr, /auth
```

**Ventajas:**
- Single deployment
- Shared database connection pool
- Código compartido fácil (require('../shared/...'))
- Simplicidad operacional

**Trade-off:** Menos granularidad de scaling (aceptable para MVP)

---

## 🔐 Autenticación

### Estrategia: JWT Compartido

```
┌──────────┐                ┌──────────┐
│ User     │                │ Backend  │
│ (login)  ├───────────────►│ /login   │
│          │  POST email/pw │          │
│          │◄───────────────┤ Returns  │
│          │   JWT token    │ JWT      │
└────┬─────┘                └──────────┘
     │
     │ Guarda en sessionStorage
     │
     ▼
┌──────────────┐
│ Alacena App  │  Usa JWT en headers
└──────────────┘
     │
┌──────────────┐
│ Mantia App   │  Mismo JWT válido
└──────────────┘
```

**Single User model:** Tabla `User` compartida por todos los módulos

### NextAuth Config Compartido

```typescript
// frontend/shared/auth/config.ts
export function createAuthConfig(options) {
  return {
    providers: [CredentialsProvider(...)],
    callbacks: {
      async jwt({ token, user }) {
        // Lógica compartida
      }
    },
    // ...
  }
}
```

Cada app lo usa:

```typescript
// frontend/alacena-app/auth.ts
import { createAuthConfig } from '@eco/shared/auth'
export const authOptions = createAuthConfig({ appName: 'Alacena' })
```

---

## 📦 Type Generation Automática

### Flujo

```
1. Prisma Schema (schema.prisma)
   ↓
2. npm run generate:types (backend)
   ↓
3. Ejecuta prisma generate
   ↓
4. Extrae types de @prisma/client
   ↓
5. Escribe frontend/shared/types/prisma.generated.ts
   ↓
6. Apps importan: import { User, Item } from '@eco/shared/types'
```

### Script

```javascript
// backend/prisma/generate-types.js
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// 1. Generate Prisma Client
execSync('npx prisma generate', { stdio: 'inherit' })

// 2. Read types from node_modules/@prisma/client/index.d.ts
// 3. Extract relevant exports
// 4. Write to frontend/shared/types/prisma.generated.ts
```

**Comando:** `cd backend && npm run generate:types`

---

## 🌐 APIs Externas

### Decisión: Shared vs Module-Specific

**Pregunta clave:** ¿Lo usarán 2+ módulos?

#### Si SÍ → `backend/src/shared/integrations/`

Ejemplo: Google Docs para documentación general

```
backend/src/shared/integrations/
└── google-docs.js   # Cliente reutilizable
```

#### Si NO → `backend/src/modules/{nombre}/services/`

Ejemplo: API de bancos solo para Mantia

```
backend/src/modules/mantia/services/
└── bank-api.js      # Específico de Mantia
```

### Refactoring Fácil

Si una integración módulo-específica se vuelve útil para otro:

```bash
# Mover de módulo a shared
mv backend/src/modules/mantia/services/google-docs.js \
   backend/src/shared/integrations/google-docs.js

# Actualizar imports
# Ya está disponible para todos
```

---

## 🚀 Deployment

### Frontend: Vercel (cada app independiente)

- **alacena-app:** https://alacena-frontend.vercel.app
- **mantia-app:** https://mantia-frontend.vercel.app (futuro)

**Configuración:** Cada app tiene su `vercel.json` apuntando a su carpeta

### Backend: Fly.io (monolito único)

- **URL:** https://alacena-backend.fly.dev
- **Puerto:** 4000
- **Proceso:** Single Node.js process con todas las rutas

**Configuración:** `fly.toml` en raíz de backend/

### Base de Datos: PostgreSQL

- **Proveedor:** [Fly.io Postgres / Supabase / otro]
- **Conexión:** Variable `DATABASE_URL` en backend
- **Acceso:** Solo backend conecta, frontend via API

---

## 🧩 Agregar Nuevo Módulo

### Checklist

#### Backend

1. Crear estructura:
```bash
mkdir -p backend/src/modules/{nombre}/{controllers,routes,schemas}
```

2. Definir modelos en `backend/prisma/schema.prisma`:
```prisma
model NombreModulo_Entidad {
  id     Int    @id @default(autoincrement())
  userId Int
  user   User   @relation(fields: [userId], references: [id])
  // ...
}
```

3. Crear controllers, routes, schemas siguiendo patrón de Alacena

4. Registrar routes en `backend/src/app.js`:
```javascript
app.use('/api/nombre', nombreRoutes)
```

5. Generar types:
```bash
cd backend && npm run generate:types
```

#### Frontend

1. Crear app:
```bash
cd frontend
npx create-next-app@latest nombre-app
```

2. Configurar workspace:
```json
// frontend/package.json
{
  "workspaces": [..., "nombre-app"]
}
```

3. Agregar dependency a shared:
```json
// frontend/nombre-app/package.json
{
  "dependencies": {
    "@eco/shared": "file:../shared"
  }
}
```

4. Crear theme:
```typescript
// frontend/nombre-app/theme.ts
export const nombreTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: { 500: '#XXXX' }, // Color distintivo
  },
  app: { name: 'Nombre' }
}
```

5. Configurar auth usando `createAuthConfig()`

6. Usar `DashboardLayout` con theme

---

## 📊 Decisiones de Arquitectura

### ¿Por qué monolito modular y no microservicios?

**Razones:**
- MVP, equipo pequeño (1-2 devs)
- Simplicidad operacional (1 backend deploy)
- Shared code fácil (no necesita npm packages publicados)
- Single DB connection pool (mejor performance)
- Refactoring futuro posible si escala

**Trade-off aceptable:** Menos granularidad de scaling

### ¿Por qué npm workspaces y no monorepo tools (Nx, Turborepo)?

**Razones:**
- Nativo de npm, cero config adicional
- Suficiente para compartir código entre apps
- Menos complejidad de tooling

**Trade-off aceptable:** Sin build caching avanzado (no crítico por ahora)

### ¿Por qué Single DB con prefijos y no DBs separadas?

**Razones:**
- Relaciones cross-module (User compartido)
- Migrations unificadas
- Queries cross-module posibles (analytics)
- Backup/restore simplificado

**Trade-off aceptable:** Menos aislamiento (OK para apps del mismo usuario)

---

## 🔍 Patrones Comunes

### Compartir Validaciones Zod

```typescript
// backend/src/shared/validations/common.ts
export const emailSchema = z.string().email()
export const passwordSchema = z.string().min(6)

// frontend/shared/lib/validations.ts
export { emailSchema, passwordSchema } from '../../backend/src/shared/validations/common'
// (o copiar con type generation)
```

### Pagination Pattern

Todos los listados paginados siguen:

```typescript
// Backend
router.get('/', async (req, res) => {
  const { skip, take } = req.query
  const [data, total] = await prisma.$transaction([
    prisma.item.findMany({ skip, take }),
    prisma.item.count()
  ])
  res.json({ data, pagination: { total, limit: take, offset: skip } })
})

// Frontend
const { currentPage, getPaginationParams, setTotalItems } = usePagination(100)
const params = getPaginationParams() // { skip: 0, take: 100 }
// fetch con params...
setTotalItems(response.pagination.total)
```

### Layout Pattern

```tsx
// Cada app
<ThemeProvider theme={appTheme}>
  <SharedDashboardLayout 
    menuItems={moduleSpecificMenu}
    appName={appTheme.app.name}
  />
</ThemeProvider>
```

---

## 📚 Recursos

- [DATABASE.md](./DATABASE.md) - Schema detallado
- [FRONTEND.md](./FRONTEND.md) - Next.js, shared code
- [BACKEND.md](./BACKEND.md) - Express, Prisma, módulos
- [../ONBOARDING.md](../ONBOARDING.md) - Setup para nuevos devs

---

*Documentación de arquitectura creada: 2026-01-25*
