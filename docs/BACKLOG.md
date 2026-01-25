# 📌 Backlog ECO Platform

> Lista maestra de tareas pendientes, ordenadas por prioridad

**Última actualización:** 2026-01-25

---

## 🔥 Must Have (Críticas)

### [MUST-001] Módulo Mantia - Modelo de Datos
- **Estado:** ✅ Done
- **Módulo:** Mantia
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Definir schema Prisma para Mantia_Account, Mantia_Transaction, Mantia_Budget, Mantia_Category
- **Dependencias:** Ninguna
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [MUST-002] Módulo Mantia - Backend CRUD
- **Estado:** ✅ Done
- **Módulo:** Mantia
- **Estimación:** L (6-8 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Implementar controllers, routes, schemas en backend/src/controllers/ y routes/
- **Dependencias:** MUST-001
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [MUST-003] Módulo Mantia - Frontend App
- **Estado:** ✅ Done
- **Módulo:** Mantia
- **Estimación:** L (6-8 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Crear mantia-app/ con tema azul, dashboard con cuentas/transacciones/presupuestos
- **Dependencias:** MUST-002
- **Completado:** 2026-01-25
- **Asignado:** Copilot

---

## 🎯 Should Have (Alta Prioridad)

### [SHOULD-001] Documentación de Arquitectura
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Crear docs/architecture/ con OVERVIEW.md, DATABASE.md, FRONTEND.md, BACKEND.md
- **Dependencias:** Ninguna
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-002] API Reference Completa
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Documentar todos los endpoints de Alacena + Shared en docs/API_REFERENCE.md
- **Dependencias:** Ninguna
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-003] Onboarding Guide
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** S (2-3 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Crear docs/ONBOARDING.md con guía paso a paso para nuevos devs
- **Dependencias:** SHOULD-001, SHOULD-002
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-004] Deployment Inventory
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** S (1-2 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Documentar dónde está cada servicio (Vercel, Fly.io, DB) con URLs y credenciales
- **Dependencias:** Ninguna
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-006] Documento Fundacional ECO
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** L (6-8 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Crear ECO_FUNDACIONAL.md con visión, misión, roadmap, arquitectura, casos de uso
- **Dependencias:** SHOULD-001
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-007] Documentación Técnica Arquitectura
- **Estado:** ✅ Done
- **Módulo:** Docs
- **Estimación:** XL (10-12 horas)
- **Sprint:** 2026-01-W04
- **Descripción:** Crear DATABASE.md, FRONTEND.md, BACKEND.md con detalles técnicos completos
- **Dependencias:** SHOULD-001
- **Completado:** 2026-01-25
- **Asignado:** Copilot

### [SHOULD-005] Tests Unitarios - Shared Hooks
- **Estado:** 🆕 New
- **Módulo:** Frontend / Shared
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-02-W01
- **Descripción:** Tests para usePagination, useAuth con Jest + React Testing Library
- **Dependencias:** Ninguna
- **Asignado:** -

---

## 💡 Could Have (Media Prioridad)

### [COULD-001] Dark Mode
- **Estado:** 🆕 New
- **Módulo:** Frontend / Shared
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-02-W01
- **Descripción:** Implementar tema oscuro en theme.base.ts con toggle en DashboardLayout
- **Dependencias:** Ninguna
- **Asignado:** -

### [COULD-002] Logs Estructurados Backend
- **Estado:** 🆕 New
- **Módulo:** Backend / Shared
- **Estimación:** S (2-3 horas)
- **Sprint:** 2026-02-W01
- **Descripción:** Implementar Winston o Pino para logging estructurado (JSON) con niveles
- **Dependencias:** Ninguna
- **Asignado:** -

### [COULD-003] Monitoreo de Errores
- **Estado:** 🆕 New
- **Módulo:** Backend / Frontend
- **Estimación:** M (3-4 horas)
- **Sprint:** 2026-02-W02
- **Descripción:** Integrar Sentry o similar para tracking de errores en producción
- **Dependencias:** Ninguna
- **Asignado:** -

### [COULD-004] Búsqueda Global en Items
- **Estado:** 🆕 New
- **Módulo:** Alacena
- **Estimación:** S (2-3 horas)
- **Sprint:** 2026-02-W02
- **Descripción:** Input de búsqueda por nombre/código en página de items
- **Dependencias:** Ninguna
- **Asignado:** -

### [COULD-005] Export a CSV/Excel
- **Estado:** 🆕 New
- **Módulo:** Alacena
- **Estimación:** S (2-3 horas)
- **Sprint:** 2026-02-W02
- **Descripción:** Botón para exportar items/ubicaciones/menú a CSV
- **Dependencias:** Ninguna
- **Asignado:** -

---

## ❄️ Won't Have (Now) - Pospuestos

### [WONT-001] Módulo Salud
- **Estado:** ❄️ Frozen
- **Módulo:** Salud
- **Estimación:** XL (12+ horas)
- **Sprint:** TBD
- **Descripción:** Módulo completo para tracking de salud y bienestar
- **Razón:** Prioridad en Mantia primero
- **Asignado:** -

### [WONT-002] Módulo Financia
- **Estado:** ❄️ Frozen
- **Módulo:** Financia
- **Estimación:** XL (12+ horas)
- **Sprint:** TBD
- **Descripción:** Módulo para gestión financiera personal
- **Razón:** Overlap con Mantia, revisar alcance
- **Asignado:** -

### [WONT-003] Módulo Huesha
- **Estado:** ❄️ Frozen
- **Módulo:** Huesha
- **Estimación:** XL (12+ horas)
- **Sprint:** TBD
- **Descripción:** Módulo para [descripción pendiente]
- **Razón:** Alcance no definido aún
- **Asignado:** -

---

## 🐛 Bugs Conocidos

### [BUG-001] Env Vars No Leídas en Dev
- **Estado:** ✅ Done
- **Módulo:** Frontend / Next.js
- **Prioridad:** Must Have
- **Resuelto:** 2026-01-24
- **Solución:** Cleared .next cache + hardcoded URLs removed
- **Commit:** [referencia]

---

## 📝 Notas

### Cómo Agregar Tarea
```markdown
### [TIPO-NNN] Título Corto
- **Estado:** 🆕 New
- **Módulo:** Nombre
- **Estimación:** XS/S/M/L/XL
- **Sprint:** YYYY-MM-WNN o TBD
- **Descripción:** Qué hay que hacer
- **Dependencias:** Otras tareas o "Ninguna"
- **Asignado:** Nombre o "-"
```

### Estados
- 🆕 New
- 🔍 Analyzed
- 🏃 In Progress
- ✅ Done
- 🚫 Blocked
- ❄️ Frozen

### Estimaciones
- **XS:** < 1 hora
- **S:** 1-2 horas
- **M:** 3-4 horas
- **L:** 6-8 horas
- **XL:** 12+ horas (dividir en tareas más chicas)

---

*Backlog creado: 2026-01-25*
