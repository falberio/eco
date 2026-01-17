# 🎓 Quick Reference - ALACENA

## Acceso Rápido

```
📱 Frontend:  https://alacena-frontend.vercel.app
🔗 Backend:   https://alacena-backend.fly.dev
📊 DB:        Supabase (PostgreSQL)
📝 Docs:      /docs/sesiones/INDEX.md
```

## Login de Prueba
```
📧 admin@alacena.com
🔑 admin123
```

## Archivos Importantes

| Archivo | Para qué |
|---------|----------|
| [GETTING_STARTED.md](./GETTING_STARTED.md) | 👈 LEER PRIMERO |
| [STATUS.md](./STATUS.md) | Estado rápido |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Cómo deployar |
| [docs/MAPA_VISUAL.md](./docs/MAPA_VISUAL.md) | Mapa de todas las funciones |
| [docs/sesiones/2026-01-17--dashboard-y-auth.md](./docs/sesiones/2026-01-17--dashboard-y-auth.md) | Sesión anterior (leer si necesitas entender cómo funciona) |

## Comandos Útiles

### Deployar cambios
```bash
cd c:\Users\Usuario\alacena
git add -A
git commit -m "feat: Descripción"
git push
# Auto-deploy a Fly.io + Vercel en 2-5 min
```

### Testear backend
```bash
curl https://alacena-backend.fly.dev/health
# Debe responder: {"status":"ok",...}
```

### Testear login
```bash
curl -X POST https://alacena-backend.fly.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@alacena.com","password":"admin123"}'
```

### Ver logs de backend
```bash
# En Fly.io dashboard:
# https://fly.io/dashboard → alacena-backend → Logs
```

## Stack Tecnológico

| Capa | Stack | Status |
|------|-------|--------|
| Frontend | Next.js 15 + TypeScript + Tailwind | ✅ |
| Autenticación | NextAuth v5 + JWT | ✅ |
| Backend | Express.js + Node 20 | ✅ |
| DB | PostgreSQL (Supabase) | ✅ |
| ORM | Prisma v5.22.0 | ✅ |
| Validaciones | Zod | ✅ |
| Hash | bcryptjs | ✅ |
| Hosting | Fly.io (backend) + Vercel (frontend) | ✅ |

## Rutas Principales

```
Frontend:
  ├─ /                    Inicio
  ├─ /login               Login
  ├─ /dashboard           Admin home
  │  ├─ /items           CRUD items
  │  ├─ /locations       CRUD ubicaciones
  │  ├─ /reserves        CRUD inventario
  │  └─ /menu            CRUD menú
  └─ /guest/menu         Menú público

Backend:
  ├─ /health             Health check
  └─ /api/
     ├─ /auth
     │  ├─ POST /register
     │  ├─ POST /login
     │  └─ GET /profile
     ├─ /items           GET/POST/PUT/DELETE
     ├─ /locations       GET/POST/PUT/DELETE
     ├─ /reserves        GET/POST/PUT/DELETE
     ├─ /menu-items      GET/POST/PUT/DELETE
     ├─ /containers      GET/POST/PUT/DELETE
     └─ /batches         GET/POST/PUT/DELETE
```

## Tablas de Base de Datos

| Tabla | Propósito |
|-------|-----------|
| User | Autenticación |
| Item | Productos/Recetas |
| Location | Ubicaciones de almacenamiento |
| Reserve | Inventario/Stock |
| MenuItem | Menú público |
| Container | Contenedores físicos |
| Batch | Lotes/trazabilidad |

## Modelos de Request

### Login
```json
POST /api/auth/login
{
  "email": "admin@alacena.com",
  "password": "admin123"
}

Response:
{
  "user": {
    "id": "...",
    "email": "admin@alacena.com",
    "name": "admin"
  },
  "token": "eyJhbGciOiJIUzI1NiI..."
}
```

### Crear Item
```json
POST /api/items
{
  "name": "Lentejas",
  "kind": "PRODUCT",
  "code": "LENTEJA-CH",
  "category": "Legumbres"
}
```

### Crear Ubicación
```json
POST /api/locations
{
  "name": "Estante 2",
  "kind": "SECTION",
  "code": "EST2",
  "sortIndex": 2
}
```

### Crear Reserva
```json
POST /api/reserves
{
  "itemId": "cltx...",
  "locationId": "cltx...",
  "status": "ACTIVE",
  "qty": 5,
  "unit": "UNIT"
}
```

## Variables de Entorno

### Frontend (.env.local)
```
NEXT_PUBLIC_API_URL=https://alacena-backend.fly.dev
NEXTAUTH_URL=https://alacena-frontend.vercel.app
NEXTAUTH_SECRET=...
```

### Backend (.env)
```
DATABASE_URL=postgresql://postgres:...
JWT_SECRET=...
PORT=3001
NODE_ENV=production
```

## Troubleshooting Rápido

| Problema | Solución |
|----------|----------|
| Backend no responde | Ver logs en Fly.io dashboard |
| Frontend da error | Verificar NEXT_PUBLIC_API_URL en .env.local |
| Login no funciona | Verificar JWT_SECRET en Fly.io secrets |
| 404 en dashboard | Asegurarse de hacer login primero |
| BD no sincroniza | Verificar DATABASE_URL en Fly.io secrets |

## Próximos Pasos

1. ✅ Leer GETTING_STARTED.md
2. ✅ Verificar que https://alacena-backend.fly.dev/health responda
3. ✅ Entrar a https://alacena-frontend.vercel.app/login
4. ✅ Usar credenciales: admin@alacena.com / admin123
5. 📝 Nota: Setear JWT_SECRET en Fly.io si aún no está

---

**Última actualización:** 17-01-2026  
**Proyecto:** Alacena - Sistema de Gestión de Cocina  
**Estado:** ✅ Listo para producción
