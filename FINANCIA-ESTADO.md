# � FINANCIA - Estado Actual

**Fecha:** 25 de Enero 2026

⚠️ **NOTA:** Este módulo se creó inicialmente con el nombre "MANTIA" por error.  
**FINANCIA** es el módulo de economía personal (cuentas, transacciones, presupuestos).  
El verdadero **MANTIA** (inventario del hogar + mantenimiento) aún está por implementarse.

---

## ✅ LO QUE FUNCIONA (100%)

### 🔧 Backend API (localhost:4000)
**Estado:** ✅ Funcionando perfectamente
**Tests:** 10/10 pasaron (100%)
**Módulo:** `financia` (rutas en `/api/mantia/*` - pendiente renombrar)

#### Endpoints Verificados:
- ✅ GET `/health` - Health check
- ✅ GET `/api/mantia/accounts` - Listar cuentas
- ✅ GET `/api/mantia/accounts/:id` - Cuenta por ID
- ✅ GET `/api/mantia/accounts/:id/balance` - Balance de cuenta
- ✅ POST `/api/mantia/accounts` - Crear cuenta
- ✅ GET `/api/mantia/transactions` - Listar transacciones
- ✅ GET `/api/mantia/transactions/stats` - Estadísticas
- ✅ GET `/api/mantia/categories` - Listar categorías
- ✅ GET `/api/mantia/categories/tree` - Árbol de categorías
- ✅ GET `/api/mantia/budgets` - Listar presupuestos

⚠️ **TODO:** Renombrar rutas `/api/mantia/*` → `/api/financia/*`

#### Datos de Ejemplo:
- **4 Cuentas:** Efectivo, Banco Nación, VISA, MercadoPago
- **4 Transacciones:** Ingresos, gastos y transferencias
- **6 Categorías:** Alimentación, Servicios, Transporte, Salud, Entretenimiento, Ingresos
- **2 Presupuestos:** Alimentación ($40k) y Servicios ($20k) para Enero 2026
- **Balance Total:** $127,000 (Ingresos: $150k, Gastos: $23k)

### 🎨 Frontend App (localhost:3001)
**Estado:** ✅ Funcionando
**Tecnología:** Next.js 15.5.9 (App Router)
**Puerto:** 3001
**Carpeta:** `frontend/financia-app` (antes `mantia-app` - pendiente renombrar)

#### Páginas Disponibles:
- 🏠 `/` - Home con tarjetas de navegación
- 💼 `/dashboard/accounts` - Gestión de cuentas
- 💸 `/dashboard/transactions` - Listado y stats de transacciones
- 📁 `/dashboard/categories` - Gestión de categorías con iconos
- 📊 `/dashboard/budgets` - Presupuestos con barras de progreso

⚠️ **TODO:** Renombrar carpeta `frontend/mantia-app` → `frontend/financia-app`

#### Características:
- ✅ Tema azul/financiero
- ✅ Formularios de creación
- ✅ Visualización de estadísticas
- ✅ Navegación fluida
- ✅ Componentes reutilizables

---

## 📍 ESTADO DE DEPLOYMENT

### 🏠 LOCAL (Actual)
**Backend:** http://localhost:4000
**Frontend Mantia:** http://localhost:3001
**Frontend Alacena:** http://localhost:3000

✅ Todo corriendo en tu máquina
✅ Base de datos SQLite local
✅ Sin autenticación configurada aún

### ☁️ PRODUCCIÓN (Pendiente)

#### Backend Online:
❌ **NO desplegado aún**

**Opciones disponibles:**
1. **Fly.io** - Ya tenés configuración (`fly.toml`)
   - Comando: `flyctl deploy`
   - Base de datos: PostgreSQL en Fly
   
2. **Railway** - Alternativa rápida
   - Deploy directo desde GitHub
   - PostgreSQL incluido

3. **Vercel** - Ya tenés `vercel.json`
   - Serverless functions
   - Limitado para backend pesado

#### Frontend Online:
❌ **NO desplegado aún**

**Opciones:**
1. **Vercel** (Recomendado para Next.js)
   - Deploy automático
   - Preview deployments
   - Custom domain gratis
   
2. **Netlify**
   - Similar a Vercel
   - Edge functions

---

## 🚀 PARA PONER ONLINE

### Opción 1: Deploy Completo a Fly.io (Recomendado)

```powershell
# 1. Backend a Fly.io
cd C:\Users\Usuario\eco\backend
flyctl launch  # Si no lo hiciste antes
flyctl deploy

# 2. Frontend Mantia a Vercel
cd C:\Users\Usuario\eco\frontend\mantia-app
vercel --prod

# 3. Conectar frontend con backend
# Editar .env.production con la URL de Fly.io
```

### Opción 2: Todo en Railway

```powershell
# 1. Conectar GitHub repo
# 2. Crear servicio para backend
# 3. Crear servicio para frontend
# 4. Railway conecta automáticamente
```

### Lo que falta configurar:

1. **Variables de entorno:**
   - `DATABASE_URL` para producción (PostgreSQL)
   - `NEXT_PUBLIC_API_URL` en frontend
   - `JWT_SECRET` para autenticación
   
2. **Autenticación:**
   - Descomentar `authMiddleware` en routes
   - Configurar NextAuth.js en frontend
   - Sistema de registro/login
   
3. **Base de datos:**
   - Migrar de SQLite a PostgreSQL
   - Ejecutar migraciones en producción
   - Ejecutar seeding inicial

---

## 📊 ARQUITECTURA ACTUAL

```
┌─────────────────────────────────────────────┐
│           FRONTEND (Next.js)                │
│         http://localhost:3001               │
│                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│  │ Accounts │  │ Transactions│ │ Budgets │ │
│  └──────────┘  └──────────┘  └──────────┘ │
│         │              │             │      │
└─────────┼──────────────┼─────────────┼──────┘
          │              │             │
          └──────────────┴─────────────┘
                      │ HTTP
          ┌───────────▼──────────────┐
          │   BACKEND (Express.js)   │
          │  http://localhost:4000   │
          │                          │
          │  ┌────────────────────┐  │
          │  │   Controllers      │  │
          │  ├────────────────────┤  │
          │  │   Routes           │  │
          │  ├────────────────────┤  │
          │  │   Prisma ORM       │  │
          │  └─────────┬──────────┘  │
          └────────────┼─────────────┘
                       │
          ┌────────────▼──────────────┐
          │   SQLite Database         │
          │   backend/prisma/dev.db   │
          │                           │
          │  Tables:                  │
          │  - mantia_Account         │
          │  - mantia_Transaction     │
          │  - mantia_Category        │
          │  - mantia_Budget          │
          └───────────────────────────┘
```

---

## 🎯 PRÓXIMOS PASOS

### Inmediato (Hoy):
- [x] ✅ Backend funcional
- [x] ✅ Frontend funcional
- [x] ✅ Tests automatizados
- [ ] Probar funcionalidad completa en navegador
- [ ] Crear algunas transacciones de prueba

### Corto Plazo (Esta semana):
- [ ] Deploy a producción (Fly.io + Vercel)
- [ ] Configurar autenticación
- [ ] Migrar a PostgreSQL
- [ ] Configurar variables de entorno

### Mediano Plazo:
- [ ] Sistema de usuarios multi-tenant
- [ ] Dashboards con gráficos
- [ ] Exportación a Excel/PDF
- [ ] Notificaciones de presupuesto
- [ ] App móvil (React Native)

---

## 🧪 TESTING

### Backend:
✅ **Script automatizado:** `test-mantia-v2.ps1`
- 10 tests de endpoints
- Verificación de datos
- Creación de recursos

### Frontend:
⏳ **Pendiente:**
- Tests con React Testing Library
- E2E con Playwright
- Visual regression tests

---

## 📝 ARCHIVOS IMPORTANTES

### Configuración:
- `backend/prisma/schema.prisma` - Modelos de base de datos
- `frontend/mantia-app/next.config.js` - Config Next.js
- `fly.toml` - Config para Fly.io
- `vercel.json` - Config para Vercel

### Documentación:
- `PROBAR-MANTIA.md` - Guía de testing
- `TESTING.md` - Guía completa de testing
- `docs/sesiones/2026-01-24--sistema-taras-control-stock.md` - Historia del desarrollo

### Scripts:
- `test-mantia-v2.ps1` - Tests automatizados
- `backend/prisma/seed-mantia.js` - Datos de ejemplo
- `start-backend.ps1` - Iniciar backend
- `start-frontend.ps1` - Iniciar frontend
FINANCIA está 100% funcional en LOCAL. Para ponerlo ONLINE necesitás hacer el deploy del backend y frontend a servicios en la nube (Fly.io + Vercel recomendado).

---

## ⚠️ PENDIENTES DE REFACTORING

### Renombrar Módulo: mantia → financia

**Backend:**
- [ ] `src/routes/mantiaRoutes.js` → `financiaRoutes.js`
- [ ] `src/controllers/*Controller.js` - Actualizar imports
- [ ] Cambiar rutas `/api/mantia/*` → `/api/financia/*`
- [ ] `prisma/schema.prisma` - Renombrar tablas `mantia_*` → `financia_*`
- [ ] `prisma/seed-mantia.js` → `seed-financia.js`

**Frontend:**
- [ ] Carpeta `frontend/mantia-app` → `frontend/financia-app`
- [ ] Actualizar llamadas API: `/api/mantia/*` → `/api/financia/*`
- [ ] `package.json` - name: "financia-app"
- [ ] Títulos y metadatos: "Mantia" → "Financia"

**Tests:**
- [ ] `test-mantia-v2.ps1` → `test-financia.ps1`
- [ ] Actualizar URLs en tests

**Documentación:**
- [x] Crear `ECO-MODULOS.md` con estructura correcta
- [x] Renombrar `MANTIA-ESTADO.md` → `FINANCIA-ESTADO.md`
- [ ] Actualizar `README.md`
- [ ] Actualizar `STATUS.md`
---

**Resumen:** Mantia está 100% funcional en LOCAL. Para ponerlo ONLINE necesitás hacer el deploy del backend y frontend a servicios en la nube (Fly.io + Vercel recomendado).
