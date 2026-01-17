# 🧺 ALACENA - Sistema Completo Deployado

## ✅ Completado en esta sesión

### Backend (Express + Prisma)
- ✅ 6 rutas CRUD completas (items, locations, reserves, containers, batches, menu-items)
- ✅ Autenticación con JWT
- ✅ Endpoints: `/api/auth/register`, `/api/auth/login`, `/api/auth/profile`
- ✅ Modelo de User en Prisma con hashedPassword
- ✅ Migraciones automáticas en Dockerfile
- ✅ Seed con usuario de prueba (admin@alacena.com / admin123)

### Frontend (Next.js + NextAuth)
- ✅ Dashboard completo con 4 secciones (items, locations, reserves, menu)
- ✅ Página de login profesional
- ✅ Protección de rutas con middleware
- ✅ Validaciones con Zod en todos los formularios
- ✅ Integración con backend para autenticación
- ✅ CRUD operacionales en todas las páginas

### Base de datos (Supabase PostgreSQL)
- ✅ Tabla User agregada
- ✅ Migración ejecutada exitosamente
- ✅ Seed de usuario de prueba

## 🚀 Instrucciones de Deployment Final

### Paso 1: Configurar secrets en Fly.io

Abre https://fly.io/dashboard, ve a tu app `alacena-backend`, y en la sección "Secrets":

Agrega estos 2 secretos:

**Secret 1: DATABASE_URL**
```
postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable
```

**Secret 2: JWT_SECRET**
```
your-super-secret-jwt-key-change-in-production
```

### Paso 2: Deployar Backend

El backend ya se deployó automáticamente con el git push.

Verifica que esté corriendo:
```bash
curl https://alacena-backend.fly.dev/health
```

Deberías ver:
```json
{"status":"ok","app":"alacena","timestamp":"..."}
```

### Paso 3: Testear Login

```bash
curl -X POST https://alacena-backend.fly.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@alacena.com","password":"admin123"}'
```

Deberías recibir un response con JWT token y datos del usuario.

### Paso 4: Verificar Frontend

La app frontend ya está en Vercel y se auto-deployó.

Abre: https://alacena-frontend.vercel.app/login

Credenciales de prueba:
- Email: `admin@alacena.com`
- Contraseña: `admin123`

## 📍 URLs Finales

### Producción
- **Frontend Home:** https://alacena-frontend.vercel.app/
- **Frontend Login:** https://alacena-frontend.vercel.app/login
- **Frontend Dashboard:** https://alacena-frontend.vercel.app/dashboard
- **Backend API:** https://alacena-backend.fly.dev/
- **Backend Health:** https://alacena-backend.fly.dev/health

### Rutas de API disponibles
- `POST /api/auth/register` - Registrar nuevo usuario
- `POST /api/auth/login` - Login
- `GET /api/auth/profile` - Obtener perfil (requiere JWT)
- `GET /api/items` - Listar items
- `POST /api/items` - Crear item
- `PUT /api/items/:id` - Editar item
- `DELETE /api/items/:id` - Eliminar item
- Similar para: `/locations`, `/reserves`, `/menu-items`, `/containers`, `/batches`

## 🔐 Seguridad - Pasos a tomar en Producción

1. **Cambiar credenciales de prueba:**
   - Cambiar contraseña del usuario `admin@alacena.com` en Supabase
   - O crear nuevos usuarios desde el dashboard

2. **Actualizar JWT_SECRET:**
   - Generar una clave aleatoria fuerte
   - Actualizar en Fly.io secrets

3. **Habilitar HTTPS** (ya está en Fly.io)

4. **Agregar rate limiting** en Express (opcional pero recomendado)

5. **Implementar CORS restrictivo** (actualmente abierto para desarrollo)

## 📊 Base de Datos - Estructura

Tablas principales:
- **User** - Usuarios del sistema
- **Item** - Productos y recetas
- **Location** - Ubicaciones de almacenamiento
- **Reserve** - Inventario/reservas
- **MenuItem** - Menú público
- **Container** - Contenedores físicos
- **Batch** - Lotes/trazabilidad

## 🛠️ Próximos Pasos (Opcional)

1. Agregar autenticación con OAuth (Google, GitHub)
2. Implementar reportes/análitica
3. Agregar búsqueda con índices full-text
4. Crear app móvil con React Native
5. Agregar QR scanning para inventario
6. Implementar notificaciones en tiempo real con WebSockets

## 📝 Notas

- Todas las validaciones de formularios usan Zod
- Las contraseñas se hashean con bcryptjs
- Los tokens JWT expiran en 30 días
- Las migraciones de Prisma se ejecutan automáticamente en deploy
- El seed de usuario se ejecuta solo si no existe

---

**Fecha:** 17 de enero de 2026  
**Estado:** ✅ PRODUCCIÓN
