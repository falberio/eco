# 🎯 Propuesta: 50 Historias de Usuario - ECO

**Contexto:** Historias para los 4 módulos principales sin límite temporal, priorizando UX decente e integraciones completas.

**Distribución:**
- MANTIA: 13 historias
- ALACENA: 13 historias  
- Lista de Compras: 12 historias
- ECOSALUD: 12 historias

**TOTAL:** 50 historias

---

## 📋 MANTIA - Gestión de Tareas (13 historias)

### Épica 1: CRUD y Operaciones Básicas (ya definidas - Sprint 1)
- ✅ MAN-01: CRUD de tareas (#18)
- ✅ MAN-02: Marcar tarea como hecha (#19)
- ✅ MAN-03: Registrar ejecución (#20)
- ✅ MAN-04: Vista de pendientes (#21)
- ✅ MAN-05: Cálculo de próxima fecha (#22)
- ✅ MAN-06: Filtros por estado (#23)
- ✅ MAN-07: Categorización de tareas (#24)

### Épica 2: UX y Notificaciones
**MAN-08: Recordatorios por email**
- Como usuario quiero recibir email 1 día antes de tarea vencida
- Para no olvidar tareas importantes
- **Estimación:** M | **Prioridad:** P2

**MAN-09: Vista calendario mensual**
- Como usuario quiero ver tareas en calendario visual
- Para planificar mejor mi mes
- **Estimación:** L | **Prioridad:** P2

**MAN-10: Arrastrar y soltar para reprogramar**
- Como usuario quiero arrastrar tarea en calendario para cambiar fecha
- Para reprogramar fácilmente
- **Estimación:** M | **Prioridad:** P3

### Épica 3: Integraciones
**MAN-11: Sincronización Google Calendar**
- Como usuario quiero exportar tareas a mi Google Calendar
- Para verlas en mi calendario personal
- **Estimación:** L | **Prioridad:** P3

**MAN-12: Webhooks para integraciones**
- Como desarrollador quiero configurar webhooks al completar tareas
- Para integrar con Notion, Zapier, etc.
- **Estimación:** M | **Prioridad:** P3

### Épica 4: Gamificación y Estadísticas
**MAN-13: Dashboard de estadísticas**
- Como usuario quiero ver cuántas tareas completé este mes
- Para motivarme y ver mi progreso
- **Estimación:** M | **Prioridad:** P2

---

## 🏺 ALACENA - Inventario (13 historias)

### Épica 1: CRUD y Stock (ya definidas - Sprint 1)
- ✅ ALA-05: Categorización y filtros (#33)
- ✅ ALA-06: Estados de stock (#34)
- ✅ ALA-07: Búsqueda de items (#35)

### Épica 2: Mejoras de UX
**ALA-08: Escaneo de código de barras**
- Como usuario quiero escanear código de barras al agregar item
- Para no escribir manualmente
- **Estimación:** L | **Prioridad:** P2

**ALA-09: Sugerencias de items frecuentes**
- Como usuario quiero ver items que suelo comprar al crear nuevo
- Para agregar más rápido
- **Estimación:** M | **Prioridad:** P3

**ALA-10: Vista grid con fotos**
- Como usuario quiero ver items con fotos en grid
- Para identificar visualmente
- **Estimación:** M | **Prioridad:** P2

**ALA-11: Ordenar por fecha de vencimiento**
- Como usuario quiero ver items ordenados por vencimiento
- Para consumir primero lo que vence antes
- **Estimación:** S | **Prioridad:** P1

### Épica 3: Ubicaciones Físicas
**ALA-12: CRUD de ubicaciones (estantes, cajones)**
- Como usuario quiero definir ubicaciones físicas en mi casa
- Para saber dónde está cada cosa
- **Estimación:** M | **Prioridad:** P2

**ALA-13: Asignar ubicación a items**
- Como usuario quiero asignar ubicación al item
- Para encontrarlo fácilmente
- **Estimación:** S | **Prioridad:** P2

**ALA-14: Buscar por ubicación**
- Como usuario quiero ver todos los items de una ubicación
- Para revisar un estante completo
- **Estimación:** S | **Prioridad:** P2

### Épica 4: Recetas y Planificación
**ALA-15: CRUD de recetas**
- Como usuario quiero crear recetas con ingredientes
- Para planificar comidas
- **Estimación:** L | **Prioridad:** P2

**ALA-16: Ver si tengo ingredientes para receta**
- Como usuario quiero saber si tengo stock para hacer una receta
- Para decidir qué cocinar
- **Estimación:** M | **Prioridad:** P2

**ALA-17: Descontar ingredientes al cocinar**
- Como usuario quiero descontar automáticamente ingredientes al marcar receta como cocinada
- Para mantener stock actualizado
- **Estimación:** M | **Prioridad:** P3

### Épica 5: Compartir y Colaboración
**ALA-18: Compartir item con otro usuario del hogar**
- Como usuario quiero notificar a alguien que agregué un item
- Para coordinar compras
- **Estimación:** M | **Prioridad:** P3

---

## 🛒 Lista de Compras (12 historias)

### Épica 1: CRUD Básico (ya definidas - Sprint 1)
- ✅ LST-01: CRUD manual de items (#25)
- ✅ LST-02: Agregar desde ALACENA (#26)
- ✅ LST-03: Marcar como comprado (#27)
- ✅ LST-04: Vista por categorías (#28)
- ✅ LST-05: Sugerencias basadas en historial (#29)

### Épica 2: Optimización Compra
**LST-06: Ordenar por supermercado**
- Como usuario quiero agrupar items por supermercado
- Para optimizar mi recorrido de compra
- **Estimación:** M | **Prioridad:** P2

**LST-07: Estimar costo total**
- Como usuario quiero ver precio estimado de la lista
- Para saber cuánto gastaré
- **Estimación:** M | **Prioridad:** P2

**LST-08: Agregar precio real al comprar**
- Como usuario quiero registrar precio real al marcar como comprado
- Para tener historial de precios
- **Estimación:** S | **Prioridad:** P2

### Épica 3: Colaboración
**LST-09: Compartir lista con otros usuarios**
- Como usuario quiero compartir lista con mi pareja
- Para que ambos veamos y editemos
- **Estimación:** L | **Prioridad:** P2

**LST-10: Notificación push al agregar item**
- Como usuario quiero notificar a otros cuando agrego item urgente
- Para que alguien más pueda comprarlo
- **Estimación:** M | **Prioridad:** P3

### Épica 4: Integraciones
**LST-11: Sincronizar con Notion**
- Como usuario quiero exportar/importar lista desde Notion
- Para integrar con mi sistema personal
- **Estimación:** L | **Prioridad:** P3

**LST-12: Comando de voz para agregar items**
- Como usuario quiero decir "Agregar leche a la lista" por voz
- Para agregar mientras cocino sin tocar el móvil
- **Estimación:** XL | **Prioridad:** P3

---

## 💚 ECOSALUD - Salud y Bienestar (12 historias)

### Épica 1: Registro Básico (ya definidas - Sprint 1)
- ✅ ECO-01: Registro manual de datos (#30)
- ✅ ECO-02: Histórico cronológico (#31)
- ✅ ECO-03: Tipos de registro (#32)

### Épica 2: Visualización y Análisis
**ECO-04: Gráficos de evolución**
- Como usuario quiero ver gráfico de mi peso en últimos 3 meses
- Para visualizar mi progreso
- **Estimación:** M | **Prioridad:** P2

**ECO-05: Alertas de valores anormales**
- Como usuario quiero recibir alerta si presión está alta (>140/90)
- Para actuar rápido
- **Estimación:** M | **Prioridad:** P2

**ECO-06: Exportar datos a PDF**
- Como usuario quiero exportar histórico a PDF
- Para llevar al médico
- **Estimación:** M | **Prioridad:** P2

### Épica 3: Metas y Recordatorios
**ECO-07: Definir metas (ej: bajar 5kg)**
- Como usuario quiero definir meta de peso
- Para trackear mi objetivo
- **Estimación:** M | **Prioridad:** P3

**ECO-08: Recordatorio diario de registro**
- Como usuario quiero recordatorio diario para pesarme
- Para mantener hábito constante
- **Estimación:** S | **Prioridad:** P2

**ECO-09: Racha de registros consecutivos**
- Como usuario quiero ver mi racha de días consecutivos registrando
- Para motivarme a no romperla
- **Estimación:** S | **Prioridad:** P3

### Épica 4: Integraciones Salud
**ECO-10: Importar desde Google Fit**
- Como usuario quiero importar pasos y peso desde Google Fit
- Para centralizar todos mis datos
- **Estimación:** L | **Prioridad:** P3

**ECO-11: Integración con Apple Health**
- Como usuario iOS quiero importar datos de Apple Health
- Para no duplicar registros
- **Estimación:** L | **Prioridad:** P3

**ECO-12: Compartir datos con médico**
- Como usuario quiero generar link de acceso temporal para mi médico
- Para que vea mi histórico sin darle acceso total
- **Estimación:** L | **Prioridad:** P3

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Ejemplos |
|-----------|----------|----------|
| **P1** | 1 | ALA-11 (Ordenar por vencimiento) |
| **P2** | 26 | MAN-08 (Email), ALA-08 (Barcode), LST-06 (Por super), ECO-04 (Gráficos) |
| **P3** | 23 | MAN-11 (GCal), ALA-18 (Compartir), LST-12 (Voz), ECO-10 (Google Fit) |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 6 | ~18h |
| **M** | 26 | ~156h |
| **L** | 10 | ~100h |
| **XL** | 1 | ~20h |
| **TOTAL** | 43 nuevas | **~294h** (+ 18 existentes) |

---

## 🎯 Próximos Pasos

1. **Revisar y aprobar** estas 50 historias
2. **Priorizar** cuáles van a Sprint 2-5
3. **Detallar** las de Sprint 2 (próximas 2 semanas)
4. **Crear issues** en GitHub para las priorizadas

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
