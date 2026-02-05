# ECO – 01 Contexto General

**Última actualización:** 04 Febrero 2026  
**Sprint actual:** Sprint 0 (Cierre: 09 Feb 2026)

---

## 📋 Propósito de este Documento

Orientar rápidamente sobre qué es ECO, cómo está organizado y cuáles son sus límites. Este documento **NO duplica detalle funcional ni técnico** – eso vive en el [Documento Funcional](02-documento-funcional.md).

---

## 🎯 1. Visión y Objetivo

### Visión
Construir un sistema personal/modular para gestionar vida doméstica con foco en **registro, historial y simplicidad operativa**.

### Principios Rectores
- ✅ **Descargar la mente**: Nada crítico reside solo en memoria
- ✅ **Registro antes que automatización**: Capturar primero, asistir después
- ✅ **Historial primero**: Todo evento debe ser trazable
- ✅ **Asistencia progresiva**: El sistema aprende de lo registrado
- ✅ **Modularidad clara**: Separación de responsabilidades funcionales

---

## 🚫 2. Alcance y No-Objetivos (v1)

### Alcance v1
- ✅ Operación con un solo backend/API
- ✅ Modelo de datos único y extensible
- ✅ Foco **mobile-first**
- ✅ Uso personal/familiar (no multihogar colaborativo avanzado)

### No-Objetivos (límites conscientes)

#### ALACENA
- ❌ Sin escaneo de códigos de barras
- ❌ Sin recetas/menú semanal
- ❌ Sin sincronización con comercios

#### MANTIA
- ❌ Sin recordatorios push
- ❌ Sin integraciones de calendario externo
- ❌ Sin dependencias entre tareas

#### ECOSALUD
- ❌ Sin correlaciones avanzadas
- ❌ Sin dashboards complejos

#### Lista de Compras
- ❌ Sin múltiples listas por hogar
- ❌ Sin compartir listas fuera del sistema

#### Plataforma
- ❌ Sin multilenguaje
- ❌ Sin modelo multi-hogar colaborativo avanzado

> **Nota:** Los No-Objetivos no son descartes permanentes, son límites conscientes para v1.

---

## 🧩 3. Módulos y Transversales

### Módulos Funcionales
- 🏺 **ALACENA**: Gestión de inventario doméstico
- 📋 **MANTIA**: Tareas y mantenimiento del hogar
- 💊 **ECOSALUD**: Registro de salud y bienestar
- 🏠 **HUESHA**: Gestión de espacios físicos (futuro)
- 💰 **FINANCIA**: Gestión financiera doméstica (futuro)

### Transversales
- 🛒 **Lista de Compras**: Alimentada por todos los módulos
- 📊 **Historial Global**: Trazabilidad completa de eventos

### Capa de Soporte
- 👥 Usuarios y hogares
- 🔒 Permisos (aislamiento por hogar)
- 🔐 Autenticación básica

---

## 🏗️ 4. Arquitectura (Resumen Ejecutivo)

### Decisiones Clave (ADRs)
- ✅ **ADR-001**: Monolito modular con una sola API (no microservicios)
- ✅ **ADR-002**: Aislamiento por hogar (multi-tenancy básico)
- ✅ **ADR-003**: Autenticación básica (email/password)
- ✅ **ADR-004**: Periodicidad declarativa en MANTIA
- ✅ **ADR-005**: Lista de Compras como entidad transversal

> Ver detalles completos en [Arquitectura](05-arquitectura/adrs.md)

### Stack Actual
- **Frontend:** Next.js + React (Vercel)
- **Backend:** Node.js + Express (Fly.io)
- **Database:** PostgreSQL (Supabase)
- **Auth:** Supabase Auth
- **Media:** Cloudinary

---

## 📍 5. Estado del Proyecto

### Sprint Actual
**Sprint 0** – Extendido hasta **09/Feb/2026**
- **Objetivo:** Consolidar marco del producto (documentación, backlog, ADRs)
- **Sesiones planeadas:**
  - Miércoles 04/02 (200 min) – Estructura documental
  - Jueves 05/02 (200 min) – Consolidación técnica
  - Viernes 06/02 (200 min) – Plan de proyecto final

### Próximo Sprint
**Sprint 1** – **10 Feb → 23 Feb 2026**
- **Objetivo:** MVP operable (uso real diario)
- **Alcance:** ALACENA, MANTIA, ECOSALUD (mínimo) y Lista

---

## 📚 6. Dónde Profundizar

| Documento | Propósito |
|-----------|-----------|
| [02 - Documento Funcional](02-documento-funcional.md) | Fuente de verdad: modelo de datos, ADRs funcionales, backlog |
| [03 - Libro de Sesiones](03-libro-sesiones.md) | Minutas de trabajo, decisiones y acuerdos |
| [04 - Backlog Maestro](04-planificacion/backlog.md) | Épicas, historias y tareas |
| [05 - Roadmap](04-planificacion/roadmap.md) | Visión trimestral y planificación |
| [06 - UX & Navegación](06-ux-navegacion.md) | Flujos, estados vacíos, patrones UI |
| [07 - Cheatsheet](07-cheatsheet.md) | Comandos rápidos para trabajar con Copilot |

---

## 🔄 Notas de Uso

- Este documento cambia **muy poco**
- Si cambia la visión o límites, actualizar y referenciar en el DF
- Toda definición concreta (entidades, historias, reglas) vive en el [Documento Funcional](02-documento-funcional.md)

---

**Última revisión:** 04 Febrero 2026  
**Próxima revisión planeada:** Post Sprint 1
