# 🏃 Sprints

**Última actualización:** 04 Febrero 2026  
**Sprint actual:** Sprint 0

---

## 🎯 Propósito

Detalle completo de cada sprint: objetivos, alcance, historias, DoR/DoD y retrospectivas.

---

## 📋 Sprint 0: Marco del Producto

**Fechas:** 01 Feb - 09 Feb 2026  
**Estado:** ⏳ En progreso  
**Tipo:** Preparación y documentación

### Objetivo

Consolidar marco del producto (documentación, backlog, ADRs) para arrancar Sprint 1 con total claridad.

### Alcance

**Documentación:**
- ✅ Migración de ECO.htm a Markdown estructurado
- ⏳ Configuración de MkDocs Material
- ⏳ README maestro con índice completo
- ✅ Estructura de carpetas definida

**Planificación:**
- ⏳ Backlog Sprint 1 detallado (épicas + historias)
- ⏳ Roadmap Q1-Q2 2026
- ⏳ Plan de proyecto completo

**Arquitectura:**
- ✅ ADRs v1 documentados
- ⏳ Modelo de datos consolidado
- ⏳ Inventario AS-IS completo

### Sesiones

| Fecha | Duración | Tema | Estado |
|-------|----------|------|--------|
| 04 Feb | 200 min | Estructura documental | ⏳ En curso |
| 05 Feb | 200 min | Consolidación técnica | 📋 Planificado |
| 06 Feb | 200 min | Plan de proyecto final | 📋 Planificado |

### Entregables

- ✅ docs/01-contexto-general.md
- ✅ docs/02-documento-funcional.md
- ✅ docs/03-libro-sesiones.md
- ✅ docs/04-planificacion/ (backlog, roadmap, sprints)
- ⏳ docs/05-arquitectura/ (adrs, modelo, inventario)
- ⏳ docs/06-ux-navegacion.md
- ✅ docs/07-cheatsheet.md
- ✅ docs/README.md
- ✅ mkdocs.yml

### Criterio de Éxito

- ✅ Documentación navegable y completa
- ✅ Backlog Sprint 1 listo para ejecutar
- ✅ ADRs v1 consolidados
- ✅ MkDocs funcionando localmente
- ⏳ Plan de proyecto con fechas y capacidad

### Retrospectiva

> Pendiente de completar el 09 Feb 2026

---

## 🚀 Sprint 1: MVP Operable

**Fechas:** 10 Feb - 23 Feb 2026  
**Estado:** 📋 Planificado  
**Tipo:** Desarrollo funcional

### Objetivo

Que ECO pueda ser usado **por vos mismo** de forma real y diaria. Sistema completamente funcional para ALACENA, MANTIA, Lista y ECOSALUD básico.

### Alcance Funcional

#### ALACENA (Mejoras)
- 📋 ALA-05: Categorización y filtros
- 📋 ALA-06: Estados de stock (bajo, normal, alto)
- 📋 ALA-07: Búsqueda de items

#### MANTIA (Completo)
- 📋 MAN-01: CRUD de tareas
- 📋 MAN-02: Marcar tarea como hecha
- 📋 MAN-03: Registrar ejecución
- 📋 MAN-04: Vista de pendientes
- 📋 MAN-05: Cálculo de próxima fecha (periodicidad)
- 📋 MAN-06: Filtros por estado
- 📋 MAN-07: Categorización de tareas

#### Lista de Compras
- 📋 LST-01: CRUD manual de items
- 📋 LST-02: Agregar desde ALACENA (stock bajo)
- 📋 LST-03: Marcar como comprado
- 📋 LST-04: Vista por categorías

#### ECOSALUD (Básico)
- 📋 ECO-01: Registro manual de datos
- 📋 ECO-02: Histórico cronológico
- 📋 ECO-03: Tipos de registro (peso, presión, notas)

### Alcance Técnico

- ⏳ DB extendida según modelo (migraciones Prisma)
- ⏳ Logs estructurados simples
- ⏳ Estados vacíos para todos los módulos
- ⏳ Validaciones básicas en frontend y backend
- ⏳ Tests mínimos (endpoints críticos)

### Historias Totales

**Total:** 18 historias  
**Estimación:** L (Sprint completo de 2 semanas)

### Criterio de Éxito

#### Métricas de Uso
- ✅ ≥ 20 registros reales durante la semana
- ✅ Uso diario durante 7 días consecutivos
- ✅ Sin bloqueos críticos que impidan flujo

#### Métricas Técnicas
- ✅ 100% de historias mergeadas a main
- ✅ 100% de migraciones aplicadas en producción
- ✅ 0 errores críticos en producción
- ✅ Todas las features probadas desde móvil

### Definition of Ready (DoR)

Una historia está lista si:

- ✅ Tiene objetivo claro
- ✅ Criterios de aceptación testables (mínimo 3)
- ✅ Impacto en datos definido (modelo actualizado)
- ✅ Flujo feliz escrito
- ✅ Estados vacíos considerados
- ✅ No hay dependencias bloqueantes

### Definition of Done (DoD)

Está hecha si:

- ✅ Código mergeado a main
- ✅ Migraciones aplicadas en producción (si aplica)
- ✅ Log básico funcionando
- ✅ Probado desde móvil (responsive)
- ✅ Deployado a producción
- ✅ Documentado en DF si cambia modelo/ADR

### Retrospectiva

> Pendiente de completar el 24 Feb 2026

---

## 📊 Template de Sprint Futuro

```markdown
## 🚀 Sprint N: [Nombre]

**Fechas:** DD MMM - DD MMM AAAA
**Estado:** 📋 Planificado | ⏳ En progresso | ✅ Completado
**Tipo:** [Desarrollo | Refactor | Infraestructura]

### Objetivo
[Una frase clara del objetivo principal]

### Alcance Funcional
[Lista de épicas/historias incluidas]

### Alcance Técnico
[Cambios de infraestructura, refactors, etc.]

### Historias Totales
**Total:** X historias
**Estimación:** S | M | L | XL

### Criterio de Éxito
[Métricas claras y medibles]

### DoR / DoD
[Referencias o especificaciones si difieren del estándar]

### Retrospectiva
**Qué funcionó:**
- [Item 1]

**Qué mejorar:**
- [Item 1]

**Acciones:**
- [Acción 1]: [Responsable]
```

---

## 📈 Métricas de Sprints

### Velocidad (Stories completadas por sprint)

| Sprint | Planificado | Completado | % |
|--------|-------------|------------|---|
| Sprint 0 | 8 items | TBD | TBD |
| Sprint 1 | 18 historias | - | - |

> Se establecerá baseline tras Sprint 1

### Tiempo por Historia

> Pendiente de medir tras Sprint 1

### Bloqueos por Sprint

> Pendiente de registrar

---

## 🔄 Ceremonias de Sprint

### Planning (Lunes semana 1)
- **Duración:** 30 min
- **Objetivo:** Seleccionar historias del backlog
- **Output:** Sprint definido en este documento

### Daily Stand-up (Opcional)
- **Frecuencia:** 2-3 veces por semana
- **Duración:** 5 min
- **Formato:** Async (actualización de estado)

### Review (Viernes semana 2)
- **Duración:** 30 min
- **Objetivo:** Demostrar entregables
- **Output:** Actualización de roadmap

### Retro (Viernes semana 2)
- **Duración:** 20 min
- **Objetivo:** Identificar mejoras
- **Output:** Acciones concretas

---

## 🔗 Enlaces

- [Backlog Maestro](backlog.md)
- [Roadmap](roadmap.md)
- [Documento Funcional](../02-documento-funcional.md)
- [Libro de Sesiones](../03-libro-sesiones.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Fin de Sprint 0 (09 Feb 2026)
