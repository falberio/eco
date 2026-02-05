# 🚀 Deployment Guide - ECO Platform

> Inventario completo de servicios y deployment procedures

**Última actualización:** 2026-01-25

---

## 📍 Servicios en Producción

| Servicio | Proveedor | URL | Estado |
|----------|-----------|-----|--------|
| Frontend - Alacena | Vercel | https://alacena-frontend.vercel.app | ✅ Online |
| Frontend - Mantia | Vercel | - | 🏗️ Pendiente |
| Backend API | Fly.io | https://alacena-backend.fly.dev | ✅ Online |
| Base de Datos | Fly.io Postgres | (interno) | ✅ Online |

---

## 🎯 Frontend Deployment (Vercel)

### Alacena App

**Proyecto:** alacena-frontend  
**URL Producción:** https://alacena-frontend.vercel.app  
**Root Directory:** `frontend/alacena-app`

#### Variables de Entorno (Vercel)

Configurar en: Project Settings → Environment Variables

```env
NEXT_PUBLIC_API_URL=https://alacena-backend.fly.dev
NEXTAUTH_SECRET=<secreto_seguro_generado>
NEXTAUTH_URL=https://alacena-frontend.vercel.app
```

#### Deploy Manual

```bash
cd frontend/alacena-app
vercel --prod
```

#### Deploy Automático

Vercel detecta cambios en `main` branch automáticamente:
```bash
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main
# Vercel deploya automáticamente en ~2 minutos
```

#### Ver Logs

```bash
vercel logs alacena-frontend
# O en dashboard: https://vercel.com/usuario/alacena-frontend
```

---

### Mantia App (Futuro)

**Root Directory:** `frontend/mantia-app`  
**Proceso:** Idéntico a Alacena, cambiar env vars según corresponda

---

## 🔧 Backend Deployment (Fly.io)

### Alacena Backend

**App Name:** alacena-backend  
**URL:** https://alacena-backend.fly.dev  
**Region:** ewr (US East)  
**Docker:** Yes (ver Dockerfile en raíz de backend/)

---

### Prerequisitos
- Tener `flyctl` CLI instalado: https://fly.io/docs/hands-on/install-flyctl/
- Estar autenticado: `flyctl auth login`

### Setear Secrets (Primera Vez)

Ejecuta estos comandos en la terminal:

```bash
flyctl secrets set DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable" -a alacena-backend

flyctl secrets set JWT_SECRET="your-super-secret-jwt-key-change-in-production" -a alacena-backend
```

### Verificar Secrets

```bash
flyctl secrets list -a alacena-backend
```

Deberías ver:
- DATABASE_URL
- JWT_SECRET

### Deploy Manual

Si está configurado el GitHub Actions automático (recomendado):
```bash
git push
```

O manualmente con:
```bash
flyctl deploy -a alacena-backend
```

### Ver Logs

```bash
flyctl logs -a alacena-backend
```

### Health Check

```bash
curl https://alacena-backend.fly.dev/health
```

Debería retornar:
```json
{"status":"ok","app":"alacena","timestamp":"..."}
```

### Test de Autenticación

```bash
curl -X POST https://alacena-backend.fly.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@alacena.com","password":"admin123"}'
```

Debería retornar un token JWT y datos del usuario.

---

## 🗄️ Base de Datos (PostgreSQL en Fly.io)

**App Name:** alacena-db (Fly Postgres)  
**Conexión:** Solo accesible desde backend en Fly.io  
**Backup:** Automático por Fly.io

### Acceder a DB desde Local (Túnel)

```bash
# Crear túnel SSH
flyctl proxy 5432 -a alacena-db

# En otra terminal, conectar con psql
psql "postgresql://postgres:PASSWORD@localhost:5432/postgres"
```

### Migrations en Producción

```bash
# Desde local con túnel activo
cd backend
DATABASE_URL="postgresql://postgres:PASSWORD@localhost:5432/postgres" npx prisma migrate deploy

# O SSH directo a app de backend
flyctl ssh console -a alacena-backend
cd /app
npx prisma migrate deploy
```

### Backup Manual

```bash
# Con túnel activo
pg_dump -h localhost -U postgres -d postgres > backup-$(date +%Y%m%d).sql
```

### Restore

```bash
# Con túnel activo
psql -h localhost -U postgres -d postgres < backup-20260125.sql
```

---

## 🔐 Secrets Management

### Variables Sensibles

**Backend (Fly.io):**
- `DATABASE_URL` - Conexión a PostgreSQL
- `JWT_SECRET` - Secreto para tokens JWT
- `NODE_ENV` - production/development

**Frontend (Vercel):**
- `NEXTAUTH_SECRET` - Secreto para NextAuth
- `NEXTAUTH_URL` - URL del frontend en producción
- `NEXT_PUBLIC_API_URL` - URL del backend

### Rotar Secrets

**JWT_SECRET:**
```bash
# Generar nuevo secret
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Actualizar en Fly.io
flyctl secrets set JWT_SECRET="nuevo_secret_aqui" -a alacena-backend

# Actualizar en código si es necesario
```

**NEXTAUTH_SECRET:**
```bash
# Generar
openssl rand -base64 32

# Actualizar en Vercel Dashboard → Settings → Environment Variables
```

---

## 📊 Monitoring

### Backend Health

**Endpoint:** `GET https://alacena-backend.fly.dev/health`

**Response esperado:**
```json
{
  "status": "ok",
  "timestamp": "2026-01-25T14:00:00.000Z",
  "uptime": 123456
}
```

**Alertas:** Configurar en Fly.io Dashboard o usar servicio externo (UptimeRobot, etc.)

### Logs

**Backend:**
```bash
flyctl logs -a alacena-backend
flyctl logs -a alacena-backend --follow  # Tiempo real
```

**Frontend:**
```bash
vercel logs alacena-frontend
vercel logs alacena-frontend --follow
```

### Métricas

**Fly.io:**
- Dashboard: https://fly.io/dashboard/alacena-backend
- CPU, RAM, Network usage

**Vercel:**
- Analytics: https://vercel.com/usuario/alacena-frontend/analytics
- Bandwidth, función executions

---

## 🚨 Rollback

### Frontend (Vercel)

```bash
# Ver deployments
vercel ls alacena-frontend

# Promover deployment anterior
vercel promote <deployment-url> --scope=usuario
```

**O en Dashboard:** Deployments → [deployment anterior] → Promote to Production

### Backend (Fly.io)

```bash
# Ver releases
flyctl releases -a alacena-backend

# Rollback a versión anterior
flyctl releases rollback <version> -a alacena-backend
```

---

## 🔄 CI/CD

### GitHub Actions (Recomendado)

**Backend:**

Crear `.github/workflows/deploy-backend.yml`:

```yaml
name: Deploy Backend to Fly.io

on:
  push:
    branches: [main]
    paths:
      - 'backend/**'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: superfly/flyctl-actions/setup-flyctl@master
      - run: flyctl deploy -a alacena-backend
        env:
          FLY_API_TOKEN: ${{ secrets.FLY_API_TOKEN }}
```

**Frontend:**

Vercel auto-detecta cambios, no requiere config adicional.

---

## 📋 Checklist Pre-Deploy

Antes de hacer deploy a producción:

- [ ] Tests manuales pasaron en dev
- [ ] Sin errores en consola (frontend)
- [ ] Sin errores en logs (backend)
- [ ] Migrations testeadas en dev
- [ ] Variables de entorno configuradas
- [ ] Secrets verificados
- [ ] CHANGELOG.md actualizado
- [ ] Git tag creado (ej: `v0.4.0`)

---

## 🎯 Deploy de Nuevo Módulo

### Backend

1. Código ya en `backend/src/modules/{nombre}/`
2. Migrations ejecutadas en dev
3. Deploy backend (incluye todos los módulos):
   ```bash
   cd backend
   flyctl deploy -a alacena-backend
   ```

### Frontend

1. Crear nuevo proyecto en Vercel
2. Configurar:
   - Root Directory: `frontend/{nombre}-app`
   - Build Command: `npm run build`
   - Output Directory: `.next`
3. Setear environment variables
4. Deploy:
   ```bash
   cd frontend/{nombre}-app
   vercel --prod
   ```

---

## 🔗 URLs de Administración

| Servicio | Dashboard | Credenciales |
|----------|-----------|--------------|
| Fly.io | https://fly.io/dashboard | Usuario ECO |
| Vercel | https://vercel.com/dashboard | Usuario ECO |
| GitHub | https://github.com/usuario/eco | Usuario ECO |

**Acceso:** Credenciales en gestor de passwords del equipo.

---

## 🆘 Troubleshooting

### "Deployment failed en Fly.io"

```bash
# Ver logs detallados
flyctl logs -a alacena-backend

# Causas comunes:
# - Migration falló → Ejecutar manualmente con SSH
# - Out of memory → Escalar recursos
# - Build error → Revisar Dockerfile
```

### "Frontend no conecta con backend"

**Verificar:**
1. `NEXT_PUBLIC_API_URL` en Vercel env vars
2. CORS configurado en backend
3. Backend health check OK
4. Clear cache de Vercel y re-deploy

### "Database connection timeout"

```bash
# Verificar DB está up
flyctl status -a alacena-db

# Reiniciar DB (último recurso)
flyctl apps restart alacena-db
```

---

## 📞 Contactos

**Soporte Fly.io:** https://community.fly.io  
**Soporte Vercel:** https://vercel.com/support  
**Mentor del proyecto:** [Nombre/Email]

---

*Deployment guide actualizada: 2026-01-25*
