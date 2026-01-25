# 🌍 ECO - Módulos del Ecosistema

**Fecha:** 25 Enero 2026

---

## 📋 ESTRUCTURA DE ECO

ECO es un ecosistema de aplicaciones/módulos para organizar, registrar y optimizar distintos aspectos de la vida cotidiana.

**Principio:** Cada módulo puede tener UI/flujo propio, pero comparten infraestructura y datos cuando tiene sentido.

---

## 🟢 MÓDULOS IMPLEMENTADOS

### 1. 🥘 ALACENA (Alimentación)
**Estado:** ✅ **PRODUCCIÓN** - Desplegado en Vercel + Fly.io  
**Propósito:** Sistema de gestión alimentaria (inventario de alimentos, producción de viandas, recetas)

**Funcionalidades:**
- ✅ Inventario de alimentos por lotes
- ✅ Producción de viandas y recetas
- ✅ Movimientos de stock (entradas/salidas/consumo)
- ✅ Vencimientos y alertas
- ✅ Trazabilidad con QR por lote
- ✅ Cálculo de porciones posibles según stock
- ✅ Sistema de ubicaciones (estanterías, heladera, freezer)

**Integraciones futuras:**
- → FINANCIA: costos de ingredientes / costo por porción
- → SALUD: nutrición/macros

**URLs:**
- Frontend: https://alacena-frontend.vercel.app
- Backend: https://alacena-backend.fly.dev
- Local: http://localhost:3000

---

### 2. 💰 FINANCIA (Economía Personal)
**Estado:** ✅ **LOCAL** - Funcional 100%  
**Propósito:** Gestión económica personal (gastos/ingresos/presupuestos/hábitos financieros)

**Funcionalidades:**
- ✅ Gestión de cuentas (efectivo, bancarias, tarjetas, billeteras digitales)
- ✅ Registro de transacciones (ingresos, gastos, transferencias)
- ✅ Categorías de gastos con iconos y colores
- ✅ Presupuestos con alertas y barras de progreso
- ✅ Estadísticas y visualización de balances
- ✅ Actualización automática de saldos
- ✅ API completa con validaciones

**Pendiente:**
- ⏳ Deploy a producción (Fly.io + Vercel)
- ⏳ Autenticación con JWT
- ⏳ Migración a PostgreSQL
- ⏳ Escaneo de tickets (OCR para extracción)
- ⏳ Análisis y visualizaciones avanzadas

**Integraciones futuras:**
- → ALACENA: costos de comida, costo por porción, compras de supermercado
- → HUESHA: hábitos/decisiones vinculadas a gastos

**URLs:**
- Local Backend: http://localhost:4000
- Local Frontend: http://localhost:3001

**Tests:** 10/10 endpoints verificados (100%)

---

## 🟡 MÓDULOS EN PLANIFICACIÓN

### 3. 🏠 MANTIA (Hogar - Inventario + Mantenimiento)
**Estado:** 📝 **PLANIFICADO** - No implementado  
**Propósito:** Inventario general del hogar y mantenimiento

**⚠️ IMPORTANTE:** MANTIA NO ES FINANZAS

**Funcionalidades planeadas:**
- 📋 Inventario de objetos (electrodomésticos, muebles, herramientas, etc.)
- 🏗️ Inventario estructural de la casa (ambientes, instalaciones)
- 🧹 Limpieza (tareas programadas)
- 🔧 Mantenimiento preventivo y correctivo
- 📝 Registro de arreglos e historial técnico
- 📊 Modelos, marcas, consumos, repuestos, manuales, garantías

**Concepto clave:** 
- Separa INVENTARIO (cosas que existen) vs TAREAS (acciones a hacer)

**Datos disponibles:**
- ✅ Listado de inventario del departamento (pendiente de procesar)
- ✅ Listado de tareas pendientes (pendiente de procesar)

---

### 4. 📖 HUESHA (Registro Vital/Personal)
**Estado:** 📝 **PLANIFICADO** - No implementado  
**Antes:** Se llamaba "Ekho"  
**Propósito:** Registro transversal de la vida y memoria personal

**Funcionalidades planeadas:**
- 📝 Registros diarios / diarios / notas
- ✅ Hábitos y check-ins
- 👥 Personas, vínculos, eventos
- 🎬 Películas vistas, lugares, viajes
- 📅 Timeline/visualización cronológica

**NO incluye:**
- ❌ Inventarios de la casa
- ❌ Gestión de objetos

---

### 5. 🏥 SALUD (Bienestar Corporal)
**Estado:** 📝 **PLANIFICADO** - No implementado  
**Propósito:** Hábitos físicos y estado corporal (no clínico)

**Funcionalidades planeadas:**
- ⚡ Check-ins (energía, sueño, movimiento)
- 📊 Métricas simples longitudinales
- 📈 Tendencias y visualización

**Integraciones futuras:**
- → ALACENA: alimentación/nutrición
- → HUESHA: contexto diario

---

## 🔧 FEATURES TRANSVERSALES (Reutilizables)

Funcionalidades comunes que pueden usarse en múltiples módulos:

### Gestión de Datos
- 📥 **Carga masiva** - Import/Export (Excel/CSV, validación previa)
- 🔍 **Búsqueda global** - Buscar por personas, objetos, eventos, textos, fechas
- 🏷️ **Tags transversales** - Etiquetas comunes para clasificar en todos los módulos
- 📜 **Historial de cambios** - Qué cambió, cuándo (por qué opcional)

### Notificaciones & Alertas
- 🔔 **Alertas** - Vencimientos, stock bajo, recordatorios configurables
- 💡 **Notificaciones inteligentes** - Sugerencias suaves, recordatorios contextuales
- 🚦 **Panel semáforo** - Vista "rojo/amarillo/verde" de lo más importante

### Visualización
- 📊 **Dashboards** - Vistas generales, gráficos, paneles por módulo
- ⏱️ **Timeline unificada** - Vista cronológica transversal (eventos, registros)
- 🖼️ **Inventario visual** - Navegación visual por fotos/representaciones
- 📺 **Modo dashboard TV** - Panel pasivo de alta densidad
- 👁️ **Modo presentación** - Mostrar info sin editar (solo lectura)

### Captura & Procesamiento
- ⚡ **Quick Capture** - Texto/foto/audio rápido → cae a "Inbox" para procesar después
- 📸 **Escaneo OCR/Vision** - Tickets, etiquetas de equipos (marca/modelo/serie), documentos
- 🛒 **Lista de compras** - Ítems manuales + sugeridos, integración con stock/consumo y gastos

### Análisis & Reportes
- 📈 **Comparador** - Comparar periodos/entidades (gastos, hábitos, stocks, etc.)
- 📄 **Resúmenes automáticos** - Semanal/mensual, highlights (puede usar IA)
- ⭐ **Favoritos** - Personas, objetos, vistas, dashboards

---

## 📁 ESTRUCTURA DEL PROYECTO

```
eco/
├── backend/                    # Backend compartido (Express + Prisma)
│   ├── src/
│   │   ├── routes/
│   │   │   ├── alacenaRoutes.js    # ALACENA
│   │   │   ├── financiaRoutes.js   # FINANCIA (antes mantiaRoutes)
│   │   │   └── ...
│   │   ├── controllers/
│   │   │   ├── alacena/
│   │   │   ├── financia/
│   │   │   └── ...
│   │   └── prisma/
│   │       └── schema.prisma       # DB unificada
│   └── prisma/
│       └── migrations/
├── frontend/
│   ├── alacena-app/           # Frontend ALACENA (Next.js - puerto 3000)
│   ├── financia-app/          # Frontend FINANCIA (Next.js - puerto 3001)
│   └── ...
└── docs/                      # Documentación completa
```

---

## 🎯 ROADMAP

### ✅ Completado
- [x] ALACENA completo y en producción
- [x] FINANCIA completo y funcionando localmente
- [x] Testing automatizado de FINANCIA
- [x] Documentación de arquitectura

### 🔄 En Progreso
- [ ] Deploy FINANCIA a producción
- [ ] Autenticación en FINANCIA
- [ ] Migración de FINANCIA a PostgreSQL

### 📅 Próximos Pasos
1. **MANTIA** - Crear módulo de inventario del hogar + mantenimiento
2. **HUESHA** - Registro vital/personal
3. **SALUD** - Hábitos y bienestar
4. **Features transversales** - Búsqueda global, timeline unificada, etc.

---

## 📝 NOTAS IMPORTANTES

### ⚠️ Confusión Histórica Resuelta
- **25 Enero 2026:** Se creó un módulo financiero pero se le llamó "MANTIA" por error
- **Corrección:** Ese módulo financiero es **FINANCIA**
- **Aclaración:** El verdadero **MANTIA** es para inventario del hogar + mantenimiento (aún no implementado)

### 🎨 Identidad Visual por Módulo
- 🥘 **ALACENA:** Verde/Naranja (cocina, calidez)
- 💰 **FINANCIA:** Azul (confianza, estabilidad financiera)
- 🏠 **MANTIA:** Gris/Marrón (hogar, estructura)
- 📖 **HUESHA:** Púrpura (memoria, introspección)
- 🏥 **SALUD:** Turquesa (vitalidad, bienestar)

---

**Última actualización:** 25 Enero 2026  
**Autor:** Sistema ECO
