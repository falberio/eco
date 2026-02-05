# 📋 Backlog Maestro

**Última actualización:** 04 Febrero 2026  
**Sprint actual:** Sprint 0

---

## 🎯 Propósito

Consolidación de todas las épicas, historias de usuario e issues del proyecto ECO. Fuente centralizada para planificación de sprints.

---

## 📊 Estado General

| Estado | Épicas | Historias | Issues |
|--------|--------|-----------|--------|
| ✅ Completado | 1 | 8 | 15 |
| ⏳ En progreso | 1 | 3 | 5 |
| 📋 Planificado | 3 | 12 | 0 |
| **Total** | **5** | **23** | **20** |

---

## 🎯 Épicas

### EP-01: Base ECO ✅
**Estado:** Completado  
**Sprint:** Sprint 0 y anteriores

**Objetivo:** Infraestructura base del sistema (autenticación, hogares, navegación)

**Historias:**
- ✅ BASE-01: Autenticación básica (email/password)
- ✅ BASE-02: Gestión de hogares
- ✅ BASE-03: Navegación principal
- ✅ BASE-04: Deploy a producción

---

### EP-02: ALACENA MVP ⏳
**Estado:** Parcialmente completado  
**Sprint:** Sprints previos + Sprint 1

**Objetivo:** Gestión completa de inventario doméstico

**Historias:**
- ✅ ALA-01: CRUD de items
- ✅ ALA-02: Registro de movimientos
- ✅ ALA-03: Vista de stock
- ✅ ALA-04: Sistema de taras automáticas
- ⏳ ALA-05: Categorización y filtros
- 📋 ALA-06: Estados de stock (bajo, normal, alto)
- 📋 ALA-07: Búsqueda de items

---

### EP-03: MANTIA MVP 📋
**Estado:** Planificado  
**Sprint:** Sprint 1

**Objetivo:** Gestión de tareas y mantenimiento del hogar

**Historias:**
- 📋 MAN-01: CRUD de tareas
- 📋 MAN-02: Marcar tarea como hecha
- 📋 MAN-03: Registrar ejecución
- 📋 MAN-04: Vista de pendientes
- 📋 MAN-05: Cálculo de próxima fecha (periodicidad)
- 📋 MAN-06: Filtros por estado
- 📋 MAN-07: Categorización de tareas

---

### EP-04: Lista de Compras 📋
**Estado:** Planificado  
**Sprint:** Sprint 1

**Objetivo:** Lista transversal alimentada por módulos

**Historias:**
- 📋 LST-01: CRUD manual de items
- 📋 LST-02: Agregar desde ALACENA (stock bajo)
- 📋 LST-03: Marcar como comprado
- 📋 LST-04: Vista por categorías
- 📋 LST-05: Sugerencias basadas en historial

---

### EP-05: ECOSALUD Básico 📋
**Estado:** Planificado  
**Sprint:** Sprint 1 (mínimo)

**Objetivo:** Registro mínimo de salud y bienestar

**Historias:**
- 📋 ECO-01: Registro manual de datos
- 📋 ECO-02: Histórico cronológico
- 📋 ECO-03: Tipos de registro (peso, presión, notas)

---

## 📅 Backlog por Sprint

### Sprint 0 (01-09 Feb 2026)
**Objetivo:** Marco del producto

**Issues:**
- ✅ #001: Estructura documental
- ⏳ #002: Migración a Markdown
- ⏳ #003: Configuración MkDocs
- 📋 #004: Backlog detallado Sprint 1
- 📋 #005: Plan de proyecto completo

---

### Sprint 1 (10-23 Feb 2026)
**Objetivo:** MVP operable

**Historias planificadas:**
- MAN-01 a MAN-07 (MANTIA completo)
- LST-01 a LST-04 (Lista básica)
- ECO-01 a ECO-03 (ECOSALUD mínimo)
- ALA-05 a ALA-07 (ALACENA mejoras)

**Criterio de éxito:**
- ✅ ≥ 20 registros reales en la semana
- ✅ Uso diario durante 7 días consecutivos
- ✅ Sin bloqueos críticos en flujo

---

## 🔖 Convenciones

### Estados
- ✅ **Completado** - Deployed y funcionando
- ⏳ **En progreso** - En desarrollo activo
- 📋 **Planificado** - Definido pero no iniciado
- 🔴 **Bloqueado** - Impedimento identificado

### Prioridades
- **P1** - Crítico para MVP
- **P2** - Importante pero no bloqueante
- **P3** - Deseable / Mejora

### Labels de GitHub
- `type:feature` - Funcionalidad nueva
- `type:bug` - Corrección de error
- `type:tech` - Tarea técnica
- `module:alacena` / `module:mantia` / etc.
- `sprint:N` - Sprint asignado

---

## 📝 Plantilla de Historia de Usuario

```markdown
### [MÓDULO]-[##]: [Título]

**Estado:** 📋 Planificado | ⏳ En progreso | ✅ Completado
**Prioridad:** P1 | P2 | P3
**Sprint:** N
**Estimación:** S | M | L | XL

**Historia:**
Como [ROL]
Quiero [ACCIÓN]
Para [BENEFICIO]

**Criterios de Aceptación:**
1. [CRITERIO 1]
2. [CRITERIO 2]
3. [CRITERIO 3]

**Notas Técnicas:**
- [Detalle técnico relevante]

**Dependencias:**
- [Historia dependiente]

**DoD:**
- [ ] Código mergeado a main
- [ ] Migraciones aplicadas (si aplica)
- [ ] Probado en móvil
- [ ] Deployado a producción
```

---

## 🔗 Enlaces

- [Documento Funcional](../02-documento-funcional.md)
- [Roadmap](roadmap.md)
- [Sprints](sprints.md)
- [GitHub Issues](https://github.com/falberio/eco/issues)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Sesión 2 (05 Feb 2026) - Completar historias Sprint 1
