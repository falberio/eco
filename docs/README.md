# 📚 Documentación ECO

**Sistema de Gestión Doméstica Modular**  
**Última actualización:** 04 Febrero 2026  
**Sprint actual:** Sprint 0 (Cierre: 09 Feb 2026)

---

## 🎯 Bienvenida

ECO es un sistema personal/modular para gestionar vida doméstica con foco en **registro, historial y simplicidad operativa**. Esta documentación es la fuente de verdad del proyecto.

### 🚀 Quick Start

Si es tu primera vez aquí, lee en este orden:
1. [Contexto General](01-contexto-general.md) – Qué es ECO y qué no es
2. [Documento Funcional](02-documento-funcional.md) – Modelo de datos, ADRs, alcance
3. [Roadmap](04-planificacion/roadmap.md) – Planificación de sprints

---

## 📖 Índice de Documentación

### 📋 Documentos Core

| Documento | Propósito | Frecuencia de actualización |
|-----------|-----------|------------------------------|
| [01 - Contexto General](01-contexto-general.md) | Visión, principios, límites del proyecto | Muy baja (solo cambios estratégicos) |
| [02 - Documento Funcional](02-documento-funcional.md) | **Fuente de verdad:** modelo de datos, ADRs, alcance | Alta (cada sprint) |
| [03 - Libro de Sesiones](03-libro-sesiones.md) | Minutas de trabajo, decisiones y acuerdos | Continua (cada sesión) |

### 📅 Planificación

| Documento | Propósito |
|-----------|-----------|
| [Backlog Maestro](04-planificacion/backlog.md) | Épicas, historias de usuario, issues |
| [Roadmap](04-planificacion/roadmap.md) | Visión trimestral y planificación de releases |
| [Sprints](04-planificacion/sprints.md) | Detalle de cada sprint (objetivos, alcance, DoD) |

### 🏗️ Arquitectura & Técnica

| Documento | Propósito |
|-----------|-----------|
| [ADRs](05-arquitectura/adrs.md) | Architecture Decision Records (decisiones técnicas) |
| [Inventario AS-IS](05-arquitectura/inventario-as-is.md) | Estado actual del sistema (infraestructura, stack) |
| [Modelo de Datos](05-arquitectura/modelo-datos.md) | Esquema completo de la base de datos |
| [Procedimientos](05-arquitectura/procedimientos.md) | Procesos operativos (deploy, backfill, etc.) |

### 🎨 Diseño & UX

| Documento | Propósito |
|-----------|-----------|
| [UX & Navegación](06-ux-navegacion.md) | Flujos de usuario, estados vacíos, patrones UI |

### ⚡ Referencia Rápida

| Documento | Propósito |
|-----------|-----------|
| [Cheatsheet](07-cheatsheet.md) | Comandos rápidos para trabajar con Copilot |

---

## 🗂️ Estructura de Carpetas

```
docs/
├── README.md                         # Este archivo (índice maestro)
├── 01-contexto-general.md           # Visión y límites del proyecto
├── 02-documento-funcional.md        # Fuente de verdad funcional/técnica
├── 03-libro-sesiones.md             # Minutas de todas las sesiones
├── 04-planificacion/                # Planificación y backlog
│   ├── backlog.md                   # Épicas e historias
│   ├── roadmap.md                   # Roadmap trimestral
│   └── sprints.md                   # Detalle de sprints
├── 05-arquitectura/                 # Documentación técnica
│   ├── adrs.md                      # Decisiones de arquitectura
│   ├── inventario-as-is.md         # Estado actual del sistema
│   ├── modelo-datos.md              # Esquema de base de datos
│   └── procedimientos.md            # Procesos operativos
├── 06-ux-navegacion.md              # Diseño y experiencia de usuario
├── 07-cheatsheet.md                 # Comandos rápidos
├── archive/                         # Documentación histórica
│   └── ...
└── mkdocs.yml                       # Configuración de docs web
```

---

## 🧭 Cómo Navegar Esta Documentación

### Por Rol/Necesidad

#### 👨‍💻 Soy Developer
1. Lee el [Documento Funcional](02-documento-funcional.md) completo
2. Revisa [ADRs](05-arquitectura/adrs.md) y [Modelo de Datos](05-arquitectura/modelo-datos.md)
3. Consulta [Procedimientos](05-arquitectura/procedimientos.md) para deploys
4. Usa el [Cheatsheet](07-cheatsheet.md) para comandos frecuentes

#### 📋 Quiero Planificar/Priorizar
1. Revisa el [Roadmap](04-planificacion/roadmap.md)
2. Consulta el [Backlog Maestro](04-planificacion/backlog.md)
3. Lee el [Libro de Sesiones](03-libro-sesiones.md) para decisiones recientes

#### 🎨 Voy a Trabajar en UX/UI
1. Lee [UX & Navegación](06-ux-navegacion.md)
2. Revisa el alcance funcional en el [Documento Funcional](02-documento-funcional.md)
3. Consulta estados vacíos y flujos

#### 🆕 Alguien Nuevo en el Proyecto
1. Comienza por [Contexto General](01-contexto-general.md)
2. Lee el resumen ejecutivo del [Documento Funcional](02-documento-funcional.md)
3. Revisa el [Roadmap](04-planificacion/roadmap.md) para entender hacia dónde vamos

---

## 🔄 Comando de Retomada (para Copilot)

Si estás trabajando con GitHub Copilot y necesitas retomar contexto:

```
Retomemos donde quedamos
```

Copilot leerá automáticamente:
- [Contexto General](01-contexto-general.md)
- [Documento Funcional](02-documento-funcional.md)
- [Libro de Sesiones](03-libro-sesiones.md) (última sesión)
- Estado de [Backlog](04-planificacion/backlog.md) actual

---

## 📊 Estado Actual del Proyecto

### Sprint 0 (01 Feb - 09 Feb 2026)
**Objetivo:** Consolidar marco del producto (documentación, backlog, ADRs)

**Progreso:**
- ✅ Estructura documental definida
- ✅ Migración de ECO.htm a Markdown
- ⏳ Configuración de MkDocs
- ⏳ Backlog Sprint 1 detallado
- ⏳ Plan de proyecto completo

### URLs en Producción
- **Frontend:** https://alacena-blush.vercel.app
- **Backend API:** https://alacena-backend.fly.dev
- **Database:** Supabase PostgreSQL

### Credenciales de Prueba
- **Admin:** admin@alacena.com / admin123
- **User:** user@alacena.com / user123

---

## 🛠️ Herramientas y Tecnologías

### Stack Actual
- **Frontend:** Next.js 14 + React + TypeScript
- **Backend:** Node.js + Express + Prisma
- **Database:** PostgreSQL (Supabase)
- **Hosting:** Vercel (frontend) + Fly.io (backend)
- **Auth:** Supabase Auth
- **Media:** Cloudinary

### Documentación
- **Formato:** Markdown
- **Web:** MkDocs Material
- **Versionado:** Git + GitHub

---

## 📝 Convenciones de Documentación

### Actualización de Documentos
- **Cada cambio:** Actualizar fecha de última modificación
- **Cada sprint:** Revisar DF completo
- **Cada sesión:** Agregar entrada al Libro de Sesiones

### Formato de Fechas
- Documentos: `DD Mes AAAA` (ej: 04 Febrero 2026)
- Sesiones: `AAAA-MM-DD` (ej: 2026-02-04)

### Estados de Tareas
- ✅ **Completado**
- ⏳ **En progreso**
- 📋 **Planificado**
- ❌ **Bloqueado**

---

## 🔗 Enlaces Externos

- **Repositorio:** [github.com/falberio/eco](https://github.com/falberio/eco)
- **Issues:** [github.com/falberio/eco/issues](https://github.com/falberio/eco/issues)
- **Documentación Web:** _Próximamente con MkDocs_

---

## 📞 Contacto

**Proyecto:** ECO – Sistema de Gestión Doméstica  
**Owner:** Fran Alberio  
**Inicio:** Noviembre 2025  
**Sprint Actual:** Sprint 0 (Documentación y planificación)

---

## 📜 Licencia

Este es un proyecto personal. Documentación y código sujetos a decisión del owner.

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Post Sprint 0 (09 Feb 2026)
