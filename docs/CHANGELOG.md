# 📜 Changelog ECO Platform

Todos los cambios notables del proyecto serán documentados aquí.

Formato basado en [Keep a Changelog](https://keepachangelog.com/es/1.0.0/),
versionado según [Semantic Versioning](https://semver.org/lang/es/).

---

## [Unreleased]

### En Desarrollo
- Mantia: Gráficos y visualizaciones
- Mantia: Transacciones recurrentes
- Mantia: Exportación de datos
- Alacena: Búsqueda y filtros avanzados

---

## [0.4.0] - 2026-01-25

### Agregado
- **🎉 Módulo Mantia - Gestión Financiera:** Nuevo módulo completo
- **Backend Mantia:**
  - 4 Modelos: `Mantia_Account`, `Mantia_Transaction`, `Mantia_Category`, `Mantia_Budget`
  - 4 Controllers con lógica de negocio completa
  - 4 Schemas Zod para validación
  - Routes con autenticación JWT
  - Actualización automática de balances en transacciones DB
- **Frontend Mantia (`mantia-app`):**
  - Aplicación Next.js 15 independiente (puerto 3001)
  - Tema azul/financiero
  - Dashboard con 4 módulos (cuentas, transacciones, categorías, presupuestos)
  - Formularios de creación
  - Visualización de stats y balances
  - Indicadores de presupuesto con alertas
- **Base de Datos:**
  - Migración `20260125050245_add_mantia_models`
  - 3 Enums: `AccountType`, `TransactionType`, `BudgetPeriod`
  - Relaciones: Account ↔ Transaction, Category ↔ Transaction/Budget
  - Índices para performance
- **Seeding:** Script `seed-mantia.js` con datos de ejemplo
  - 4 cuentas (efectivo, banco, tarjeta, digital)
  - 6 categorías (alimentación, servicios, transporte, salud, entretenimiento, ingresos)
  - 4 transacciones de ejemplo
  - 2 presupuestos
- **Documentación:** README completo de Mantia con API, uso y troubleshooting

### Modificado
- `backend/src/app.js`: Agregada ruta `/api/mantia`
- Health check ahora reporta `modules: ['alacena', 'mantia']`
- Tipos TypeScript regenerados con modelos Mantia

### Técnico
- Decimal precision (12,2) para cantidades monetarias
- Soporte multi-moneda (ARS, USD, EUR)
- Transacciones DB para atomicidad en balances
- Validación de reglas de negocio (transfers, account types)

---

## [0.3.0] - 2026-01-24

### Agregado
- **Migración ECO Platform:** De Alacena individual a plataforma modular
- **Estructura Backend Modular:** `backend/src/modules/alacena/` y `backend/src/shared/`
- **Frontend Shared Code:** `frontend/shared/` con componentes, hooks, lib, types
- **Theme System:** Base theme + per-app override (Alacena verde/natural)
- **Auth Sharing:** `createAuthConfig()` y `useAuth` hook compartidos
- **DashboardLayout Compartido:** Layout reutilizable con theming
- **Paginación:** `usePagination` hook + `PaginationControls` component
- **Type Generation:** Script automático desde Prisma a frontend (`npm run generate:types`)
- **npm Workspaces:** Configuración para `@eco/shared` package
- **Zod Validations Shared:** Schemas compartidos backend ↔ frontend
- Paginación en Items (100/página), Locations (50/página), Menu (50/página)

### Modificado
- **Frontend:** 10 archivos ahora usan `process.env.NEXT_PUBLIC_API_URL`
- **Backend:** 18 archivos migrados a estructura modular
- `frontend/alacena-app/auth.ts` usa `createAuthConfig` de shared
- `frontend/alacena-app/app/dashboard/layout.tsx` usa `SharedDashboardLayout` + `ThemeProvider`
- `frontend/alacena-app/app/dashboard/items/page.tsx` usa hooks y componentes compartidos

### Corregido
- ✅ **[BUG-001]** Paginación no mostraba item #129 "prueba"
- ✅ **[BUG-002]** Variables de entorno .env.local no leídas (Next.js cache)
- ✅ **[BUG-003]** URLs hardcodeadas en 10 archivos (riesgo producción)

### Técnico
- Prisma 5.22.0
- Next.js 15.5.9
- React 18
- Node.js 20
- PostgreSQL con tablas prefijadas por módulo

---

## [0.2.0] - 2026-01-24 (Tarde)

### Agregado
- **Sistema de Taras:** Cálculo automático de peso neto
- **Control Secuencial de Stock:** Modal para ingreso masivo
- **Códigos QR:** Generación automática para ubicaciones
- Campos `tara` en contenedores y lotes
- Validación de peso bruto vs tara

### Modificado
- Schema Prisma con campos de tara
- Dashboard con flujos optimizados de entrada

---

## [0.1.0] - 2026-01-17

### Agregado
- **Dashboard Completo:** 4 páginas CRUD (Items, Ubicaciones, Reservas, Menú)
- **Autenticación JWT:** Login/Register con backend
- **Validaciones Zod:** En formularios y backend
- Middleware de autenticación Next.js
- Protección de rutas `/dashboard/*`

### Modificado
- Frontend migrado a Next.js App Router
- Backend con Express + Prisma

---

## [0.0.1] - 2026-01-16

### Agregado
- **Deploy Inicial:** Frontend (Vercel) + Backend (Fly.io)
- **PostgreSQL:** Base de datos en la nube
- **Alacena MVP:** Gestión básica de alacena/despensa
- Modelos: User, Item, Location, Container, Batch, Reserve, MenuItem
- API REST básica
- Autenticación simple

### Técnico
- Primera versión desplegada accesible desde internet
- URLs: 
  - Frontend: https://alacena-frontend.vercel.app
  - Backend: https://alacena-backend.fly.dev

---

## Tipos de Cambios

- **Agregado:** para funcionalidades nuevas
- **Modificado:** para cambios en funcionalidades existentes
- **Deprecado:** para funcionalidades que se eliminarán pronto
- **Eliminado:** para funcionalidades eliminadas
- **Corregido:** para corrección de bugs
- **Seguridad:** en caso de vulnerabilidades
- **Técnico:** detalles de implementación, dependencias, etc.

---

*Changelog iniciado: 2026-01-25*
