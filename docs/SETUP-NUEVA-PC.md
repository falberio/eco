# 🖥️ Setup en Nueva Computadora — ECO Platform

> Guía paso a paso para configurar el entorno de desarrollo en una PC nueva.  
> **Última actualización:** 6 de febrero de 2026  
> **Tiempo estimado:** 15-30 minutos

---

## Requisitos Previos

Instalar estos programas **antes** de ejecutar el script:

| Software | Versión mín. | Descarga | Notas |
|----------|-------------|----------|-------|
| **Node.js** | v20+ | https://nodejs.org | Elegir LTS. Incluye npm |
| **Git** | 2.40+ | https://git-scm.com | En la instalación, dejar "Git from command line" |
| **VS Code** | Última | https://code.visualstudio.com | Marcar "Add to PATH" en el instalador |
| **Python** | 3.10+ | https://python.org | Opcional (solo para documentación MkDocs). Marcar "Add to PATH" |

### Verificar instalación

Abrir PowerShell y ejecutar:

```powershell
node --version    # Debe mostrar v20+
npm --version     # Debe mostrar 10+
git --version     # Debe mostrar 2.40+
code --version    # Debe mostrar algo
python --version  # Opcional, 3.10+
```

---

## Setup Automático (Recomendado)

### 1. Clonar el repositorio

```powershell
git clone https://github.com/falberio/eco.git eco
cd eco
```

### 2. Ejecutar el script de setup

```powershell
.\scripts\setup-nueva-pc.ps1
```

> **Nota:** Si PowerShell bloquea la ejecución por políticas, ejecutar primero:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

El script hace automáticamente:

1. ✅ Verifica que Node, npm, Git estén instalados
2. ✅ Crea `backend/.env` con la conexión a Supabase y JWT_SECRET
3. ✅ Crea `frontend/alacena-app/.env.local` con URLs locales y NEXTAUTH_SECRET
4. ✅ Ejecuta `npm install` en backend y frontend
5. ✅ Ejecuta `npx prisma generate` para el cliente de base de datos
6. ✅ Instala `mkdocs-material` (si Python está disponible)
7. ✅ Instala extensiones de VS Code (Prisma, Tailwind, ESLint, Copilot)

### 3. Verificar que todo funcione

```powershell
# Terminal 1 — Backend
cd backend
npm run dev
# Debe mostrar: "Server running on port 4000"

# Terminal 2 — Frontend
cd frontend/alacena-app
npm run dev
# Debe mostrar: "Ready on http://localhost:3000"
```

Abrir en el navegador:
- **Frontend:** http://localhost:3000
- **Backend health:** http://localhost:4000/health

Login con credenciales de prueba:
- **Email:** `admin@alacena.com`
- **Password:** `admin123`

---

## Setup Manual (si el script falla)

### 1. Clonar el repositorio

```powershell
git clone https://github.com/falberio/eco.git eco
cd eco
```

### 2. Configurar Backend

```powershell
cd backend
npm install
```

Crear archivo `backend/.env`:

```env
DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@db.orqnbchxoqalghcaaajw.supabase.co:5432/postgres?schema=public"
JWT_SECRET="eco-jwt-secret-2026-development"
NODE_ENV="development"
PORT=4000
```

Generar cliente Prisma:

```powershell
npx prisma generate
```

### 3. Configurar Frontend

```powershell
cd ../frontend
npm install
```

Crear archivo `frontend/alacena-app/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=vfD04LjH7l1tUM9QBbFrqs2aeRwhO5XYgGZ3AICJKxdmyEoNzkTV8uSWPipc6n
```

### 4. Instalar MkDocs (opcional)

```powershell
pip install mkdocs-material
```

### 5. Instalar extensiones de VS Code

```powershell
code --install-extension Prisma.prisma
code --install-extension bradlc.vscode-tailwindcss
code --install-extension dbaeumer.vscode-eslint
code --install-extension GitHub.copilot
code --install-extension GitHub.copilot-chat
```

---

## Estructura del Proyecto

```
eco/
├── backend/                  ← API Express + Prisma (Fly.io)
│   ├── src/                  ← Código fuente del servidor
│   ├── prisma/               ← Schema y migraciones de DB
│   ├── .env                  ← Variables locales (NO en Git)
│   └── package.json
├── frontend/
│   ├── alacena-app/          ← Next.js 15 (Vercel)
│   │   ├── .env.local        ← Variables locales (NO en Git)
│   │   └── package.json
│   ├── alacena-web/          ← Web estática (futuro)
│   └── financia-app/         ← Módulo Financia (futuro)
├── docs/                     ← Documentación MkDocs
├── scripts/
│   └── setup-nueva-pc.ps1   ← Script de setup automático
├── mkdocs.yml                ← Config de documentación
└── fly.toml                  ← Config de Fly.io (deploy)
```

---

## Servicios en la Nube

| Servicio | Proveedor | URL | Acceso |
|----------|-----------|-----|--------|
| **Frontend** | Vercel | https://eco-app.vercel.app | GitHub OAuth |
| **Backend API** | Fly.io | https://eco-backend.fly.dev | GitHub OAuth |
| **Base de datos** | Supabase | Panel: supabase.com | Email/password |
| **Repositorio** | GitHub | github.com/falberio/eco | GitHub |
| **Documentación** | GitHub Pages | falberio.github.io/eco | Auto-deploy |

### Deploy

Los deploys son **automáticos con `git push`**:
- Push a `main` → Vercel redeploy frontend (~2 min)
- Push a `main` → Fly.io redeploy backend (~3-5 min)

Para deploy manual del backend:

```powershell
# Instalar Fly CLI (solo una vez)
powershell -Command "iwr https://fly.io/install.ps1 -useb | iex"

# Deploy
fly deploy
```

---

## Comandos Frecuentes

| Qué hacer | Comando | Dónde |
|-----------|---------|-------|
| Levantar backend | `npm run dev` | `backend/` |
| Levantar frontend | `npm run dev` | `frontend/alacena-app/` |
| Ver documentación | `mkdocs serve` | Raíz del proyecto |
| Abrir Prisma Studio | `npx prisma studio` | `backend/` |
| Generar tipos Prisma | `npx prisma generate` | `backend/` |
| Crear migración DB | `npx prisma migrate dev --name nombre` | `backend/` |
| Build frontend | `npm run build` | `frontend/alacena-app/` |
| Ver logs producción | `fly logs -a eco-backend` | Cualquier lugar |

---

## Troubleshooting

### "scripts deshabilitados en este sistema"

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

### Backend no conecta a la base de datos

1. Verificar que `backend/.env` tiene el `DATABASE_URL` correcto
2. Ejecutar `npx prisma db pull` para verificar conexión
3. Si cambió la IP, verificar en Supabase que no hay restricciones de IP

### Frontend da error de autenticación

1. Verificar que `NEXTAUTH_SECRET` está en `.env.local`
2. Verificar que `NEXT_PUBLIC_API_URL` apunta al backend correcto
3. Si es local: `http://localhost:4000`, si es producción: `https://eco-backend.fly.dev`

### `npm install` falla

```powershell
# Limpiar caché y reintentar
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install
```

### Puerto ocupado

```powershell
# Ver qué usa el puerto 4000
netstat -ano | findstr :4000
# Matar el proceso (reemplazar PID)
taskkill /PID <PID> /F
```

---

## Credenciales de Referencia

| Servicio | Dato | Valor |
|----------|------|-------|
| Test user | Email | `admin@alacena.com` |
| Test user | Password | `admin123` |
| Supabase DB | Host | `db.orqnbchxoqalghcaaajw.supabase.co` |
| Supabase DB | Password | `DjDK6YNUopieqRGW` |
| Backend local | Puerto | `4000` |
| Frontend local | Puerto | `3000` |
| MkDocs local | Puerto | `8000` |

> ⚠️ **Importante:** Estas credenciales son de desarrollo. Antes de ir a producción real, cambiar JWT_SECRET, password de DB y credenciales de usuario.

---

*Documento creado: 6 de febrero de 2026*  
*Script de setup: `scripts/setup-nueva-pc.ps1`*
