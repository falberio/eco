# 🎓 Onboarding Guide - ECO Platform

> Guía completa para nuevos desarrolladores

**Tiempo estimado:** 4-6 horas (setup + learning)

---

## 👋 Bienvenido a ECO

ECO es una **plataforma modular** que aloja múltiples aplicaciones:
- **Alacena** - Gestión de alacena/despensa
- **Mantia** - Gestión financiera (en desarrollo)
- **Salud, Financia, Huesha** - Planificados

**Stack:** Next.js 15, React 18, Node.js 20, Express, Prisma, PostgreSQL, Zod

---

## 📋 Checklist de Onboarding

### Día 1: Setup (2 horas)

- [ ] 1. **Clonar repositorio**
- [ ] 2. **Instalar dependencias**
- [ ] 3. **Configurar variables de entorno**
- [ ] 4. **Levantar base de datos**
- [ ] 5. **Iniciar backend**
- [ ] 6. **Iniciar frontend**
- [ ] 7. **Hacer primer test**
- [ ] 8. **Leer documentación base**

### Día 2-3: Arquitectura (4 horas)

- [ ] 9. **Entender arquitectura general**
- [ ] 10. **Explorar schema de base de datos**
- [ ] 11. **Revisar código de Alacena (referencia)**
- [ ] 12. **Entender shared code**
- [ ] 13. **Probar type generation**

### Día 4-5: Primera Tarea (6 horas)

- [ ] 14. **Tomar issue del backlog**
- [ ] 15. **Crear branch de feature**
- [ ] 16. **Implementar cambios**
- [ ] 17. **Testear manualmente**
- [ ] 18. **Commit + push**

---

## 🚀 Paso a Paso

### 1. Clonar Repositorio

```bash
# Si hay GitHub repo
git clone https://github.com/usuario/eco.git
cd eco

# O usar carpeta local existente
cd c:\Users\Usuario\eco
```

### 2. Instalar Dependencias

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install  # Instala para todas las apps (workspaces)
```

**Verificar:**
```bash
# Backend
cd backend
npm list --depth=0

# Frontend
cd frontend/alacena-app
npm list --depth=0
```

### 3. Configurar Variables de Entorno

**Backend:**

Crear `backend/.env`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/eco_db"
JWT_SECRET="tu_secreto_super_seguro_aqui"
NODE_ENV="development"
PORT=4000
```

**Frontend:**

Crear `frontend/alacena-app/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXTAUTH_SECRET=tu_secreto_nextauth_aqui
NEXTAUTH_URL=http://localhost:3000
```

**Importante:**
- ❌ NUNCA comitear archivos `.env` o `.env.local`
- ✅ Usar `.env.example` como referencia
- 🔐 Pedir credenciales al mentor si necesitas acceso a DB de dev

### 4. Levantar Base de Datos

**Opción A: PostgreSQL Local**

```bash
# Instalar PostgreSQL (si no lo tenés)
# Windows: https://www.postgresql.org/download/windows/

# Crear base de datos
psql -U postgres
CREATE DATABASE eco_db;
\q
```

**Opción B: Docker**

```bash
docker run --name eco-postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=eco_db \
  -p 5432:5432 \
  -d postgres:15
```

**Migrar schema:**

```bash
cd backend
npx prisma migrate dev
```

**Seedear datos de prueba:**

```bash
npm run prisma:seed
# O ejecutar seeds específicos:
node prisma/seed-users.js
node prisma/seed-jars.js
```

### 5. Iniciar Backend

```bash
cd backend
npm run dev  # Modo desarrollo con nodemon

# Verificar que corre en http://localhost:4000
```

**Test rápido:**
```bash
# PowerShell
Invoke-WebRequest http://localhost:4000/health

# Debería retornar: {"status":"ok", ...}
```

### 6. Iniciar Frontend

```bash
cd frontend/alacena-app
npm run dev  # Corre en http://localhost:3000
```

**Abrir en navegador:**
```
http://localhost:3000
```

### 7. Hacer Primer Test

**Login:**
1. Ir a http://localhost:3000/login
2. Email: `admin@alacena.com`
3. Password: `admin123`
4. Click en "Iniciar Sesión"

**Crear Item:**
1. Dashboard → Items
2. Click "Nuevo Item"
3. Código: `TEST-001`
4. Nombre: `Mi Primer Item`
5. Unidad: `kg`
6. Stock mín: `1`, máx: `5`
7. Guardar

**Verificar:**
- Item aparece en la lista
- Paginación funciona
- No hay errores en consola (F12)

✅ **Si todo funciona, ¡estás listo para desarrollar!**

### 8. Leer Documentación Base

Leer en este orden (30-45 min total):

1. [README.md](../README.md) - Visión general
2. [docs/README.md](./README.md) - Índice de docs
3. [architecture/OVERVIEW.md](./architecture/OVERVIEW.md) - Arquitectura
4. [PROJECT_MANAGEMENT.md](./PROJECT_MANAGEMENT.md) - Metodología

---

## 📚 Día 2-3: Entender la Arquitectura

### 9. Arquitectura General

**Leer:** [architecture/OVERVIEW.md](./architecture/OVERVIEW.md)

**Conceptos clave a entender:**
- ✅ Monolito modular backend vs microservicios
- ✅ Single DB con prefijos (Mantia_, Salud_)
- ✅ npm workspaces para shared code
- ✅ Theme system (base + override)
- ✅ Type generation automática

**Ejercicio:**
```bash
# Ver estructura de módulos
cd backend/src
tree /F

# Observar:
# - modules/alacena/ (implementado)
# - modules/mantia/ (vacío)
# - shared/ (auth, qr, validations)
```

### 10. Explorar Schema de DB

**Leer:** `backend/prisma/schema.prisma`

**Ejercicio:**
```bash
cd backend
npx prisma studio  # Abre UI en http://localhost:5555
```

**Explorar:**
- Tabla `User` (compartida)
- Tabla `Item` (Alacena)
- Relaciones: `Item → Batch`, `Batch → Location`
- Enums: `LocationType`, `ReserveStatus`

**Preguntas para responder:**
- ¿Cómo se relaciona User con Item?
- ¿Qué significa `currentStock` en Item?
- ¿Cómo se calcula el peso neto de un Batch?

### 11. Revisar Código de Alacena

**Módulo de referencia:** Todo nuevo módulo debe seguir este patrón.

**Backend - Explorar:**
```bash
cd backend/src/modules/alacena

# Abrir en editor:
code controllers/itemController.js
code routes/itemRoutes.js
code schemas/itemSchema.js
```

**Entender:**
- **Controller:** Lógica de negocio, interacción con Prisma
- **Route:** Definición de endpoints, middlewares
- **Schema:** Validaciones con Zod

**Frontend - Explorar:**
```bash
cd frontend/alacena-app/app/dashboard

code items/page.tsx
code layout.tsx
```

**Entender:**
- Uso de `usePagination` hook
- Integración con `@eco/shared`
- Patrón de fetch con `api-client`

### 12. Entender Shared Code

**Backend Shared:**
```bash
cd backend/src/shared
ls -R

# Revisar:
code auth/authMiddleware.js  # Cómo funciona JWT
code validations/common.js    # Schemas Zod compartidos
```

**Frontend Shared:**
```bash
cd frontend/shared
ls -R

# Revisar:
code components/layout/DashboardLayout.tsx  # Layout compartido
code hooks/usePagination.ts                 # Hook reutilizable
code styles/theme.base.ts                   # Sistema de theming
code types/prisma.generated.ts              # Types auto-generados
```

**Ejercicio:**
- Importar `usePagination` en un componente nuevo
- Ver cómo `DashboardLayout` recibe `theme` prop
- Observar types en `prisma.generated.ts`

### 13. Probar Type Generation

```bash
# Hacer un cambio en schema
cd backend/prisma
code schema.prisma

# Agregar campo temporal a Item:
# ej: testField String?

# Generar types
cd ..
npm run generate:types

# Ver cambio reflejado
cd ../frontend/shared/types
code prisma.generated.ts

# ¡El campo testField apareció en la interfaz Item!

# Revertir cambio en schema.prisma
```

**Entender:**
- Cualquier cambio en Prisma se propaga automáticamente
- Frontend siempre tiene types sincronizados
- Comando: `cd backend && npm run generate:types`

---

## 🎯 Día 4-5: Primera Tarea

### 14. Tomar Issue del Backlog

**Leer:** [BACKLOG.md](./BACKLOG.md)

**Buscar issue:**
- Estado: 🆕 New o 🔍 Analyzed
- Prioridad: **Could Have** (para empezar)
- Estimación: **XS o S** (< 2 horas)

**Ejemplo de buenos primeros issues:**
- `[COULD-004]` Búsqueda en Items
- `[COULD-005]` Export a CSV
- Agregar validación en formulario
- Mejorar UI de componente existente

**Comunicar:**
```
"Voy a trabajar en [COULD-004] - Búsqueda Global en Items"
```

Mentor actualiza estado a 🏃 In Progress

### 15. Crear Branch de Feature

```bash
git checkout -b feature/COULD-004-search-items

# Convención de nombres:
# feature/{ISSUE-ID}-descripcion-corta
# bugfix/{BUG-ID}-descripcion-corta
```

### 16. Implementar Cambios

**Ejemplo: Búsqueda en Items**

**Backend:**
```javascript
// backend/src/modules/alacena/controllers/itemController.js

async getAllItems(req, res) {
  const { skip, take, search } = req.query  // ← Agregar search
  
  const where = search ? {
    OR: [
      { name: { contains: search, mode: 'insensitive' } },
      { code: { contains: search, mode: 'insensitive' } }
    ]
  } : {}
  
  const items = await prisma.item.findMany({ skip, take, where })
  // ...
}
```

**Frontend:**
```tsx
// frontend/alacena-app/app/dashboard/items/page.tsx

const [search, setSearch] = useState('')

// En el fetch:
const url = `/api/alacena/items?${params}&search=${search}`

// En el JSX:
<input 
  value={search} 
  onChange={(e) => setSearch(e.target.value)}
  placeholder="Buscar por nombre o código..."
/>
```

### 17. Testear Manualmente

**Checklist:**
- [ ] Backend responde correctamente
  ```bash
  curl "http://localhost:4000/api/alacena/items?search=arroz"
  ```
- [ ] Frontend muestra resultados filtrados
- [ ] Sin errores en consola (F12)
- [ ] Funciona con búsqueda vacía
- [ ] Funciona con búsqueda sin resultados
- [ ] Paginación sigue funcionando

**Casos edge:**
- Buscar con caracteres especiales: `ñ`, `á`
- Buscar string muy largo
- Buscar con espacios

### 18. Commit + Push

```bash
git add .
git commit -m "feat(alacena): agregar búsqueda en items

- Agregar query param 'search' en backend
- Implementar input de búsqueda en frontend
- Búsqueda case-insensitive en nombre y código

Closes #COULD-004"

git push origin feature/COULD-004-search-items
```

**Buenas prácticas:**
- ✅ Commit messages descriptivos
- ✅ Referenciar issue (`Closes #XXX`)
- ✅ Commits atómicos (una funcionalidad por commit)
- ❌ No commitear `console.log()` de debug
- ❌ No commitear código comentado

**Notificar al mentor:**
```
"Terminé [COULD-004]. Branch: feature/COULD-004-search-items
Listo para review"
```

---

## 🔍 Code Review (Mentor)

Mentor revisará:
- ✅ Código sigue patrones de Alacena
- ✅ Sin errores de linting/typescript
- ✅ Funcionalidad testeada
- ✅ Sin breaking changes

**Feedback:**
- Cambios menores → Ajustar en mismo branch
- Aprobado → Merge a main

---

## 📚 Recursos de Aprendizaje

### Documentación Oficial
- [Next.js Docs](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs)
- [Zod Docs](https://zod.dev)
- [TailwindCSS](https://tailwindcss.com/docs)

### ECO Docs Internas
- [API_REFERENCE.md](./API_REFERENCE.md) - Endpoints disponibles
- [architecture/DATABASE.md](./architecture/DATABASE.md) - Schema detallado
- [CHANGELOG.md](./CHANGELOG.md) - Historial de cambios

### Metodología
- [PROJECT_MANAGEMENT.md](./PROJECT_MANAGEMENT.md) - Sprints, issues
- [BACKLOG.md](./BACKLOG.md) - Tareas disponibles

---

## 💬 Comunicación

### Daily Standup (opcional)
Al inicio de cada sesión:
1. ¿Qué hice ayer?
2. ¿Qué haré hoy?
3. ¿Hay blockers?

### Pedir Ayuda
**Antes de preguntar:**
- ✅ Buscar en docs
- ✅ Revisar código de Alacena
- ✅ Googlear error específico

**Al preguntar:**
```
"Estoy trabajando en [ISSUE-XXX]
Tengo este error: [error exacto]
Ya probé: [X, Y, Z]
¿Alguna idea?"
```

---

## ✅ Checklist Final

Después de 5 días, deberías poder:

- [ ] Levantar backend + frontend en local
- [ ] Explicar arquitectura general de ECO
- [ ] Entender diferencia entre shared vs module code
- [ ] Crear una API endpoint nueva
- [ ] Crear una página frontend nueva
- [ ] Usar `usePagination`, `useAuth`, `DashboardLayout`
- [ ] Ejecutar `npm run generate:types`
- [ ] Seguir flujo de Git (branch → commit → push)
- [ ] Leer y entender código de Alacena

---

## 🎯 Próximos Pasos

### Semana 2+
- Tomar issues **Should Have**
- Participar en sprint planning
- Proponer mejoras
- Ayudar en code reviews

### Mes 2+
- Liderar una feature completa
- Contribuir a arquitectura
- Mentorar a nuevos devs

---

## 🆘 Troubleshooting

### "npm install falla"

```bash
# Limpiar cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### "Prisma no genera types"

```bash
cd backend
rm -rf node_modules/.prisma
npx prisma generate
npm run generate:types
```

### "Frontend no lee .env.local"

```bash
cd frontend/alacena-app
rm -rf .next
npm run dev
```

### "Puerto 4000 ya en uso"

```bash
# Windows PowerShell
Get-Process -Id (Get-NetTCPConnection -LocalPort 4000).OwningProcess | Stop-Process
```

---

**¡Bienvenido al equipo! 🎉**

Si tenés dudas, revisá [docs/README.md](./README.md) o preguntá al mentor.

---

*Onboarding guide creada: 2026-01-25*
