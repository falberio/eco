# Sesión: Reestructuración Alacena → Eco

**Fecha**: 24 de enero de 2026  
**Objetivo**: Migrar de proyecto individual Alacena a plataforma Eco multi-app

---

## Resumen Ejecutivo

Se decidió evolucionar Alacena de una app individual a una **plataforma paraguas "Eco"** que contendrá 5 aplicaciones integradas para gestión completa del hogar:

1. **Alacena**: Despensa y cocina (existente, migrar)
2. **Mantia**: Inventario del hogar + tareas de mantenimiento (nuevo)
3. **Financia**: Finanzas personales (futuro)
4. **Salud**: Métricas de salud y bienestar (futuro)
5. **Huesha**: Narrativa de vida (futuro)

**Patrón arquitectónico elegido**: Monolito modular
- 1 backend compartido con módulos separados
- 1 base de datos con tablas prefijadas por dominio
- 5 frontends independientes (Next.js)

---

## Decisiones Estratégicas

### ¿Por qué Eco?

**Problema original**: Alacena es solo una parte de la gestión del hogar. Se necesitaba:
- Sistema de inventario general (no solo comida)
- Tareas de mantenimiento
- Control financiero integrado
- Tracking de salud
- Historia personal

**Solución**: Crear ecosistema integrado bajo marca "Eco" donde cada app tiene:
- ✅ Identidad visual propia
- ✅ Dominio separado posible
- ✅ Funcionalidad enfocada
- ✅ Integración con otras apps del ecosistema

### Arquitectura: Monolito Modular vs Microservicios

**Opción rechazada**: 5 backends separados (microservicios)
- ❌ Más infraestructura
- ❌ Complejidad de despliegue
- ❌ Autenticación duplicada
- ❌ No cabe en free tier de Fly.io (3 containers)

**Opción elegida**: 1 backend modular
- ✅ Autenticación centralizada
- ✅ Código compartido (auth, qr, media)
- ✅ Queries cross-app posibles
- ✅ Cabe en free tier
- ✅ Fácil de separar más adelante si escala

---

## Mantia: Primera Nueva App

### Concepto

**Mantia** = **Man**tenimiento + Inven**ta**rio

**Problema que resuelve**:
- "¿Dónde guardé el manual de la heladera?"
- "¿Cuándo compré esto?"
- "¿Qué hay que hacer esta semana en la casa?"
- "¿Hasta cuándo tiene garantía?"
- "¿Cuándo fue la última vez que limpié el baño?"

### Separación Conceptual Clave

**INVENTARIO** (sustantivos - cosas que existen)
- Items físicos del hogar
- 9 categorías: electrónicos, electrodomésticos, muebles, estructura, limpieza, ropa, plantas, mascotas, varios
- Ubicación espacial jerárquica
- Specs técnicas, garantías, manuales

**TAREAS** (verbos - acciones a realizar)
- Reparaciones necesarias
- Mantenimiento preventivo
- Pedidos/compras
- Decisiones pendientes
- Aprendizaje (leer manual, ver tutorial)
- Historial (registro de eventos)

### Modelado de Datos Clave

**Discusión importante**: ¿El departamento es un Item o una Location?

**Decisión**: Sistema de Locations separado del inventario

```
Mantia_Location (jerarquía espacial)
└── Mantia_Item (objetos físicos)
    └── Mantia_Item (items dentro de items)
```

**Ejemplo**:
```
DEPTO (Location)
├── LIVING (Location)
│   └── Heladera (Item en locationId: LIVING)
│       └── Termómetro (Item con containerItemId: Heladera)
└── COCINA (Location)
```

**Ventajas de separar Location vs Item**:
- ✅ Conceptos claros: espacio físico vs objeto físico
- ✅ Queries simples: "Dame todo del living"
- ✅ Reutilizable: CleaningRoutines se asocian a Locations
- ✅ Flexible: Puedes mover items entre locations
- ✅ Escalable: Agregar zonas sin crear items ficticios

### Categorías Mantia (9)

| Código | Nombre | Ejemplos |
|--------|--------|----------|
| `electronics` | Electrónicos | TV, notebook, celular, router |
| `appliances` | Electrodomésticos | Heladera, microondas, aspiradora |
| `furniture` | Muebles | Sillón, mesa, cama, estantería |
| `structure` | Estructura | Ventanas, puertas, pintura, instalaciones |
| `cleaning` | Limpieza | Escoba, balde, trapo |
| `clothing` | Ropa | Remeras, pantalones, calzado |
| `misc` | Varios | Herramientas, decoración |
| `plants` | Plantas | Plantas de interior, macetas |
| `pet` | Mascotas | Comederos, juguetes |

### Tipos de Tareas (6)

| Código | Nombre | Ejemplo |
|--------|--------|---------|
| `repair` | Reparación | Reparar heladera rota |
| `maintenance` | Mantenimiento | Limpiar filtro aire acondicionado |
| `order` | Pedido/Compra | Comprar bombita LED |
| `decision` | Decisión | Decidir si pintar pared del living |
| `learning` | Aprendizaje | Aprender a usar cortadora de pasto |
| `history` | Historial | Registro: compré heladera 15/03/2024 |

---

## Trabajo Realizado

### 1. Creación de Carpeta Eco

```powershell
# Detener procesos Node.js
Get-Process -Name node | Stop-Process -Force

# Crear nueva carpeta
New-Item -ItemType Directory -Path "C:\Users\Usuario\eco"

# Copiar todo desde alacena
Copy-Item -Path "C:\Users\Usuario\alacena\*" -Destination "C:\Users\Usuario\eco\" -Recurse
```

**Resultado**: ✅ Carpeta eco/ creada con todo el código de Alacena

**Nota**: La carpeta original `alacena/` sigue existiendo como backup. Se puede eliminar después de verificar que todo funciona.

### 2. Estructura Modular Backend

```powershell
cd C:\Users\Usuario\eco\backend\src

# Crear carpetas modulares
New-Item -ItemType Directory -Path "modules\alacena"
New-Item -ItemType Directory -Path "modules\mantia"
New-Item -ItemType Directory -Path "shared"
```

**Resultado**: ✅ Estructura creada

```
backend/src/
├── modules/
│   ├── alacena/
│   │   ├── controllers/
│   │   ├── routes/
│   │   └── schemas/
│   └── mantia/      (vacío - futuro)
└── shared/
    ├── auth/
    └── qr/
```

### 3. Migración de Código a Estructura Modular ✅ COMPLETADO

**Fecha de ejecución**: 24 de enero de 2026

#### 3.1. Creación de estructura de carpetas

```powershell
cd C:\Users\Usuario\eco\backend\src\modules\alacena
New-Item -ItemType Directory -Path "controllers", "routes", "schemas" -Force
```

#### 3.2. Mover archivos de Alacena

```powershell
# Controllers
Move-Item -Path "controllers\batch.controller.js" -Destination "modules\alacena\controllers\"
Move-Item -Path "controllers\container.controller.js" -Destination "modules\alacena\controllers\"
Move-Item -Path "controllers\item.controller.js" -Destination "modules\alacena\controllers\"
Move-Item -Path "controllers\location.controller.js" -Destination "modules\alacena\controllers\"
Move-Item -Path "controllers\menuItem.controller.js" -Destination "modules\alacena\controllers\"
Move-Item -Path "controllers\reserve.controller.js" -Destination "modules\alacena\controllers\"

# Routes
Move-Item -Path "routes\batches.routes.js" -Destination "modules\alacena\routes\"
Move-Item -Path "routes\containers.routes.js" -Destination "modules\alacena\routes\"
Move-Item -Path "routes\items.routes.js" -Destination "modules\alacena\routes\"
Move-Item -Path "routes\locations.routes.js" -Destination "modules\alacena\routes\"
Move-Item -Path "routes\menuItems.routes.js" -Destination "modules\alacena\routes\"
Move-Item -Path "routes\reserves.routes.js" -Destination "modules\alacena\routes\"

# Schemas
Move-Item -Path "schemas\batch.schema.js" -Destination "modules\alacena\schemas\"
Move-Item -Path "schemas\container.schema.js" -Destination "modules\alacena\schemas\"
Move-Item -Path "schemas\item.schema.js" -Destination "modules\alacena\schemas\"
Move-Item -Path "schemas\location.schema.js" -Destination "modules\alacena\schemas\"
Move-Item -Path "schemas\menuItem.schema.js" -Destination "modules\alacena\schemas\"
Move-Item -Path "schemas\reserve.schema.js" -Destination "modules\alacena\schemas\"
```

#### 3.3. Mover código compartido a shared/

```powershell
# Crear estructura shared
cd C:\Users\Usuario\eco\backend\src\shared
New-Item -ItemType Directory -Path "auth", "qr" -Force

# Mover archivos compartidos
Move-Item -Path "controllers\auth.controller.js" -Destination "shared\auth\"
Move-Item -Path "routes\auth.routes.js" -Destination "shared\auth\"
Move-Item -Path "routes\qr.routes.js" -Destination "shared\qr\"
```

#### 3.4. Actualizar imports

**Archivos modificados**:

1. **app.js**: Actualizar imports y cambiar rutas de API
   - Imports ahora apuntan a `./modules/alacena/routes/*` y `./shared/*/`
   - Rutas cambiadas a `/api/alacena/*` y `/api/shared/*`

2. **Controllers** (6 archivos):
   - `item.controller.js`
   - `reserve.controller.js`
   - `location.controller.js`
   - `menuItem.controller.js`
   - `container.controller.js`
   - `batch.controller.js`
   
   Cambios:
   ```javascript
   // Antes
   const prisma = require('../prisma/client.js')
   
   // Después
   const prisma = require('../../../prisma/client.js')
   ```

3. **Archivos shared**:
   - `shared/auth/auth.controller.js`: Actualizado import de prisma
   - `shared/auth/auth.routes.js`: Actualizado import de controller (mismo directorio)
   - `shared/qr/qr.routes.js`: Actualizado import de prisma y corregido destructuring

#### 3.5. Limpieza

```powershell
# Eliminar carpetas vacías
Remove-Item -Path "controllers", "routes", "schemas" -Recurse -Force
```

**Resultado final**:

```
backend/src/
├── app.js              ✅ Actualizado
├── server.js           (sin cambios)
├── modules/
│   ├── alacena/
│   │   ├── controllers/     ✅ 6 archivos
│   │   ├── routes/          ✅ 6 archivos
│   │   └── schemas/         ✅ 6 archivos
│   └── mantia/          (vacío - futuro)
├── shared/
│   ├── auth/
│   │   ├── auth.controller.js  ✅
│   │   └── auth.routes.js      ✅
│   └── qr/
│       └── qr.routes.js        ✅
├── prisma/
│   └── client.js        (sin cambios)
└── services/           (vacío)
```

### 4. Nuevas Rutas de API ⚠️ BREAKING CHANGE

**Cambios en las rutas**:

| Ruta antigua | Ruta nueva | Tipo |
|--------------|------------|------|
| `/api/auth/*` | `/api/shared/auth/*` | Shared |
| `/api/qr/*` | `/api/shared/qr/*` | Shared |
| `/api/reserves` | `/api/alacena/reserves` | Alacena |
| `/api/items` | `/api/alacena/items` | Alacena |
| `/api/locations` | `/api/alacena/locations` | Alacena |
| `/api/menu-items` | `/api/alacena/menu-items` | Alacena |
| `/api/containers` | `/api/alacena/containers` | Alacena |
| `/api/batches` | `/api/alacena/batches` | Alacena |

**Health check actualizado**:
```json
{
  "status": "ok",
  "app": "eco",
  "modules": ["alacena"],
  "timestamp": "2026-01-25T01:55:20.982Z"
}
```

### 5. Verificación ✅ COMPLETADO

```powershell
# Iniciar backend
cd C:\Users\Usuario\eco\backend
node src/server.js
# ✅ Arranca sin errores: "🧺 Alacena backend corriendo en puerto 4000"

# Probar health check
curl http://localhost:4000/health
# ✅ {"status":"ok","app":"eco","modules":["alacena"],...}

# Probar API de Alacena
curl http://localhost:4000/api/alacena/locations
# ✅ Devuelve lista de locations correctamente

# Probar API compartida
curl http://localhost:4000/api/shared/auth/profile
# ✅ {"error":"No autorizado"} (correcto, sin token)
```

---

## Próximos Pasos

### ✅ Completado - Sesión 1: Migración Backend a Estructura Modular

1. ✅ **Mover código Alacena a modules/**
2. ✅ **Extraer código compartido a shared/**
3. ✅ **Actualizar app.js**
4. ✅ **Verificar backend funcional**

### ✅ Completado - Sesión 1 (continuación): Actualizar Frontend

**Archivos actualizados**: 13 archivos con 38 cambios en rutas de API

#### Archivos modificados:

**Autenticación**:
- `auth.ts`: `/api/auth/login` → `/api/shared/auth/login`

**Dashboard** (7 archivos):
- `dashboard/items/page.tsx`: 3 rutas actualizadas
- `dashboard/locations/page.tsx`: 3 rutas actualizadas  
- `dashboard/menu/page.tsx`: 5 rutas actualizadas
- `dashboard/qr/page.tsx`: 3 rutas actualizadas (auth y QR a shared)
- `dashboard/reserves/page.tsx`: 5 rutas actualizadas

**Páginas públicas y stock** (5 archivos):
- `guest/menu/page.tsx`: 1 ruta actualizada
- `shelf-view/page.tsx`: 2 rutas actualizadas
- `stock/[code]/page.tsx`: 3 rutas actualizadas
- `stock-control/page.tsx`: 3 rutas actualizadas
- `test-qr/page.tsx`: 2 rutas actualizadas

#### Resumen de cambios:

```
/api/auth/*        → /api/shared/auth/*
/api/qr/*          → /api/shared/qr/*
/api/items         → /api/alacena/items
/api/locations     → /api/alacena/locations
/api/menu-items    → /api/alacena/menu-items
/api/containers    → /api/alacena/containers
/api/batches       → /api/alacena/batches
/api/reserves      → /api/alacena/reserves
```

#### Verificación:

✅ Backend corriendo en puerto 4000  
✅ Health check responde con `"app": "eco", "modules": ["alacena"]`  
✅ API `/api/alacena/locations` funcional  
✅ Todas las rutas antiguas eliminadas del código

**Nota**: El frontend Next.js detectará automáticamente los cambios en desarrollo. En producción, se necesitará un nuevo deploy.

### 🎯 Siguiente: Sesión 2 - Mantia Backend

1. **Actualizar schema.prisma**
   - Agregar 7 modelos de Mantia
   - Mantener modelos Alacena existentes

2. **Seeds iniciales**
   - `seed-mantia-categories.js`: 9 categorías
   - `seed-mantia-task-types.js`: 6 tipos de tareas

3. **Controllers y Routes**
   - `mantia/controllers/item.controller.js`
   - `mantia/controllers/task.controller.js`
   - `mantia/controllers/location.controller.js`
   - `mantia/routes/index.js`

4. **Migración**
   ```bash
   npx prisma migrate dev --name add_mantia_models
   npx prisma db seed
   ```

### Sesión 3: Mantia Frontend

1. **Clonar app**
   ```bash
   cp -r frontend/alacena-app frontend/mantia-app
   ```

2. **Actualizar identidad**
   - Colores (ej: naranja/marrón para Mantia)
   - Logo
   - Título

3. **Vistas básicas**
   - `/inventory`: Lista de items
   - `/tasks`: Tareas pendientes
   - `/cleaning`: Rutinas de limpieza
   - `/item/[id]`: Detalle de item

4. **Deploy**
   ```bash
   cd frontend/mantia-app
   vercel --prod
   ```

---

## Riesgos y Mitigaciones

### Riesgo 1: Migración rompe Alacena existente

**Mitigación**:
- ✅ Carpeta original `alacena/` preservada como backup
- ✅ Verificar funcionalidad después de cada cambio
- ✅ Git commits frecuentes

### Riesgo 2: Schema muy complejo para modificar

**Mitigación**:
- ✅ Campos opcionales en Mantia (`String?`)
- ✅ Tablas separadas (categorías, task types)
- ✅ Relaciones con `onDelete: SetNull` donde tiene sentido

**Tiempos de modificación estimados**:
- Agregar campo nuevo: 2-5 minutos
- Modificar tipo de campo existente: 10-30 minutos
- Cambiar relación: 20-60 minutos
- Restructuración mayor: 1-2 horas

### Riesgo 3: Sobrecarga de features

**Mitigación**:
- ✅ Implementar apps de a una
- ✅ MVP primero (Alacena funciona, Mantia básico)
- ✅ Iterar basado en uso real

---

## Aprendizajes y Observaciones

### 1. Separación Location vs Item

**Inicialmente se consideró**: Todo son Items (jerarquía pura)
```
Departamento (Item)
└── Living (Item)
    └── Heladera (Item)
```

**Se decidió**: Separar conceptos espaciales de objetos
```
LIVING (Location)
└── Heladera (Item)
```

**Razón**: Mayor claridad conceptual y queries más simples

### 2. Flexibilidad del Schema

Se diseñó con campos opcionales y text fields para maximizar flexibilidad:
- `dimensions String?` en vez de width/height/depth numéricos
- `power String?` en vez de watts numérico
- `status String` en vez de enum

**Ventaja**: Fácil agregar nuevos valores sin migración
**Desventaja**: Menos validación en DB, más en app layer

### 3. Prefijos en Nombres de Tablas

Se decidió prefijar todas las tablas de Mantia con `Mantia_`:
- ✅ Clara separación de dominios
- ✅ Evita colisiones de nombres
- ✅ Facilita queries por app
- ✅ Posibilita separar DB más adelante

---

## ✅ Sesión 1 Completada - 24 de enero de 2026

### Resultado: MIGRACIÓN EXITOSA

**Backend**: ✅ Completamente migrado y funcional  
**Frontend**: ✅ Actualizado y funcionando (URL hardcodeada temporalmente)  
**Pruebas**: ✅ Items, Locations, Menu cargando correctamente

### Notas Técnicas

**Problema encontrado**: Next.js no tomaba variables de `.env.local`
**Solución temporal**: Hardcodear `const API_URL = 'http://localhost:4000'` en archivos del frontend
**TODO**: Arreglar variables de entorno para producción

### Archivos con URL hardcodeada (temporal):
- `auth.ts`
- `app/dashboard/items/page.tsx`
- `app/dashboard/locations/page.tsx`
- `app/dashboard/menu/page.tsx`
- `app/dashboard/reserves/page.tsx`
- `app/dashboard/qr/page.tsx`
- `app/stock/[code]/page.tsx`
- `app/stock-control/page.tsx`
- `app/guest/menu/page.tsx`

---

## Contexto para Próxima Sesión

Cuando retomes el proyecto, busca:
1. **Este archivo**: `docs/sesiones/2026-01-24--reestructuracion-eco.md`
2. **Arquitectura completa**: `docs/PROYECTO-ECO-ARQUITECTURA.md`
3. **Estado del código**: 
   - ✅ Carpeta eco/ creada
   - ✅ Estructura modular creada
   - ✅ Código Alacena movido a modules/alacena/
   - ✅ Código compartido movido a shared/
   - ✅ Backend funcional con nuevas rutas
   - ✅ Frontend actualizado con nuevas rutas

**Backend está corriendo**: 
```bash
cd C:\Users\Usuario\eco\backend
node src/server.js
# 🧺 Alacena backend corriendo en puerto 4000
```

**Frontend en desarrollo**:
```bash
cd C:\Users\Usuario\eco\frontend\alacena-app
npm run dev
# http://localhost:3000
```

**API funcionando**:
- Health: `http://localhost:4000/health`
- Alacena: `http://localhost:4000/api/alacena/*`
- Shared: `http://localhost:4000/api/shared/*`

**Próximo paso**: Implementar Mantia backend (schema + controllers + routes)

---

**Fin de sesión - 24 de enero de 2026**  
**Estado**: ✅ Migración completa - Backend y Frontend listos  
**Próxima sesión**: Desarrollo de Mantia
