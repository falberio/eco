# 📊 Inventario AS-IS

**Última actualización:** 04 Febrero 2026  
**Sprint:** Sprint 0

---

## 🎯 Propósito

Estado real del ecosistema ECO según el sistema actual en producción. **No es el plano ideal**, es la realidad operativa. Actualizar cuando cambie algo relevante.

---

## 🌐 URLs en Producción

| Servicio | URL | Estado |
|----------|-----|--------|
| **Frontend** | https://eco-app.vercel.app | ✅ Activo |
| **Backend API** | https://eco-backend.fly.dev | ✅ Activo |
| **Database** | Supabase PostgreSQL | ✅ Activo |
| **Media** | Cloudinary | ✅ Activo |

### Credenciales de Prueba

- **Admin:** admin@alacena.com / admin123
- **Usuario:** user@alacena.com / user123

---

## 🎨 Frontend

### Hosting & Deploy
- **Proveedor:** Vercel
- **URL producción:** https://eco-app.vercel.app
- **Branch principal:** main
- **Auto-deploy:** ✅ Habilitado en push a main
- **Preview deploys:** ✅ Habilitado en PRs

### Stack Tecnológico
- **Framework:** Next.js 14
- **UI Library:** React 18
- **Lenguaje:** TypeScript
- **Styling:** Tailwind CSS
- **Auth:** NextAuth.js v5
- **HTTP Client:** Fetch API nativo

### Variables de Entorno (Vercel)
```bash
NEXT_PUBLIC_API_URL=https://eco-backend.fly.dev
NEXT_PUBLIC_AUTH_SECRET=[secret]
NEXT_PUBLIC_NEXTAUTH_SECRET=[secret]
```

### Estado Actual
- ✅ **ALACENA:** Operativo completo
  - CRUD de items
  - Registro de movimientos
  - Sistema de taras
  - Control de stock masivo
  - Códigos QR
- ⏳ **MANTIA:** No implementado
- ⏳ **ECOSALUD:** No implementado
- ⏳ **Lista de Compras:** No implementado

---

## ⚙️ Backend / API

### Hosting & Deploy
- **Proveedor:** Fly.io
- **URL producción:** https://eco-backend.fly.dev
- **Branch principal:** main
- **Deploy:** Manual via `fly deploy`
- **Región:** Miami (mia)

### Stack Tecnológico
- **Runtime:** Node.js 18
- **Framework:** Express
- **ORM:** Prisma
- **Lenguaje:** JavaScript (ES modules)
- **Base image:** Debian Slim (no Alpine por OpenSSL)

### Estructura
```
backend/
  api/
    index.js           # Entry point para Vercel (legacy)
  src/
    app.js             # Express app
    server.js          # Server startup
    controllers/       # Controladores por módulo
    routes/            # Rutas por módulo
    services/          # Lógica de negocio
    prisma/            # Cliente Prisma
  prisma/
    schema.prisma      # Modelo de datos
    migrations/        # Migraciones
```

### Secrets en Fly.io
```bash
DATABASE_URL=[supabase connection string]
JWT_SECRET=[secret]
```

### Endpoints Disponibles

#### ALACENA
- `GET /api/items` - Listar items
- `POST /api/items` - Crear item
- `GET /api/items/:id` - Detalle de item
- `PUT /api/items/:id` - Actualizar item
- `DELETE /api/items/:id` - Eliminar item
- `POST /api/items/:id/movements` - Registrar movimiento
- `GET /api/containers` - Listar contenedores
- `GET /api/containers/:code` - Detalle de contenedor
- `PUT /api/containers/:code` - Actualizar contenedor
- `POST /api/reserves` - Crear reserva
- `GET /api/reserves/:containerId` - Obtener reserva

### Estado Actual
- ✅ **ALACENA:** Endpoints completos
- ⏳ **MANTIA:** No implementado
- ⏳ **ECOSALUD:** No implementado
- ⏳ **Lista:** No implementado
- ✅ **Auth:** JWT básico funcionando

---

## 🗄️ Base de Datos

### Proveedor & Ubicación
- **Proveedor:** Supabase
- **Engine:** PostgreSQL 15
- **Región:** us-east-1
- **Host:** db.orqnbchxoqalghcaaajw.supabase.co

### Entornos
- **Producción:** ✅ Activo (único entorno actual)
- **Desarrollo:** N/A (usa producción)
- **Test:** N/A

### Conexión
- **Desde Backend:** Connection string DNS (no IPv6)
- **Pool size:** Default Supabase
- **SSL:** ✅ Habilitado

### Tablas Existentes (ALACENA)

#### User
```sql
id, email, password_hash, name, role, created_at, updated_at
```

#### Container
```sql
id, code, name, location_id, current_item_id, shelf_row, shelf_col,
capacity_ml, typeId, created_at, updated_at
```

#### ContainerType
```sql
id, name, description, tareWeight_g, capacity_ml, created_at, updated_at
```

#### Item
```sql
id, code, name, category, unit, location, created_at, updated_at
```

#### Reserve
```sql
id, container_id, item_id, weight_g, timestamp, created_at, updated_at
```

#### Location
```sql
id, name, type, created_at, updated_at
```

### Migraciones
- **Total:** ~15 migraciones
- **Estado:** Todas aplicadas en producción
- **Herramienta:** Prisma Migrate

---

## 🔐 Autenticación

### Proveedor
- **Supabase Auth** integrado con NextAuth.js

### Métodos Soportados
- ✅ Email + Password
- ❌ OAuth/Social (no implementado)
- ❌ 2FA (no implementado)

### Tokens
- **Tipo:** JWT
- **Expiración:** 24 horas (default Supabase)
- **Refresh:** Automático via Supabase

### Flujo Actual
1. Usuario ingresa email/password en `/login`
2. NextAuth valida con Supabase
3. Supabase devuelve JWT
4. Frontend incluye JWT en headers (`Authorization: Bearer ...`)
5. Backend valida JWT con Supabase

---

## 📁 Media / Archivos

### Proveedor
- **Cloudinary**

### Uso Actual
- Imágenes de items de ALACENA
- Formato: JPG/PNG
- Transformaciones: Automáticas (optimización, resize)

### Configuración
- **Cloud name:** [configurado]
- **Upload preset:** [configurado]
- **Folder:** `eco/alacena/`

---

## 🔧 Infraestructura Transversal

### Repositorio
- **URL:** https://github.com/falberio/eco
- **Nombre actual:** `alacena` (pendiente renombrar a `eco`)
- **Branch principal:** `main`
- **Protecciones:** N/A

### Issue Tracking
- **GitHub Issues**
- **Labels:** type:*, module:*, priority:*, sprint:*
- **Projects:** Pendiente de crear

### CI/CD
- **Frontend:** Vercel (automático en push)
- **Backend:** Manual (`fly deploy`)
- **Database:** Migraciones manuales (`npx prisma migrate deploy`)

### Documentación
- **Formato:** Markdown
- **Ubicación:** `docs/`
- **Web:** MkDocs (en configuración)
- **Hosting docs:** Pendiente

### Monitoreo & Logs
- **Frontend:** Vercel logs
- **Backend:** Fly.io logs (`fly logs`)
- **Database:** Supabase dashboard
- **Errores:** Console logs (no servicio de tracking)

---

## 📊 Estado de Módulos

| Módulo | Backend | Frontend | DB | Estado |
|--------|---------|----------|-----|--------|
| **ALACENA** | ✅ | ✅ | ✅ | Operativo |
| **MANTIA** | ❌ | ❌ | ❌ | No implementado |
| **ECOSALUD** | ❌ | ❌ | ❌ | No implementado |
| **Lista** | ❌ | ❌ | ❌ | No implementado |
| **HUESHA** | ❌ | ❌ | ❌ | Futuro |
| **FINANCIA** | ❌ | ❌ | ❌ | Futuro |

---

## 🚀 Próximas Expansiones (Sprint 1)

### Backend
- ⏳ Endpoints MANTIA
- ⏳ Endpoints Lista de Compras
- ⏳ Endpoints ECOSALUD (básico)

### Database
- ⏳ Tablas MANTIA (Task, TaskExecution)
- ⏳ Tabla ShoppingListItem
- ⏳ Tabla HealthRecord

### Frontend
- ⏳ Páginas MANTIA
- ⏳ Página Lista de Compras
- ⏳ Página ECOSALUD (básico)

---

## 🔗 Enlaces

- [ADRs](adrs.md)
- [Modelo de Datos](modelo-datos.md)
- [Procedimientos](procedimientos.md)
- [Documento Funcional](../02-documento-funcional.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Fin de Sprint 1 (24 Feb 2026)
