# 📚 Documentación ECO Platform

> Índice maestro de toda la documentación del proyecto

---

## 🚀 Empezá Aquí

Si sos nuevo en el proyecto:
1. Lee [ONBOARDING.md](./ONBOARDING.md) - Guía paso a paso para nuevos desarrolladores
2. Revisa [architecture/OVERVIEW.md](./architecture/OVERVIEW.md) - Arquitectura general
3. Consulta [API_REFERENCE.md](./API_REFERENCE.md) - Endpoints disponibles
4. Revisa [DEPLOYMENT.md](./DEPLOYMENT.md) - Dónde está cada servicio

---

## 📖 Documentación Principal

### Gestión de Proyecto
- **[PROJECT_MANAGEMENT.md](./PROJECT_MANAGEMENT.md)** - Metodología ágil, sprints, flujo de trabajo
- **[BACKLOG.md](./BACKLOG.md)** - Lista de tareas pendientes priorizadas
- **[CHANGELOG.md](./CHANGELOG.md)** - Historial de versiones y cambios
- **[ROADMAP.md](./ROADMAP.md)** - Features planificadas a futuro

### Desarrollo
- **[ONBOARDING.md](./ONBOARDING.md)** - Guía para nuevos devs (setup, arquitectura, primera tarea)
- **[API_REFERENCE.md](./API_REFERENCE.md)** - Documentación completa de endpoints
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Inventario de servicios externos (Vercel, Fly.io, DB)

### Arquitectura
- **[architecture/OVERVIEW.md](./architecture/OVERVIEW.md)** - Visión general del sistema
- **[architecture/DATABASE.md](./architecture/DATABASE.md)** - Schema, relaciones, convenciones
- **[architecture/FRONTEND.md](./architecture/FRONTEND.md)** - Next.js, shared code, theming
- **[architecture/BACKEND.md](./architecture/BACKEND.md)** - Express, Prisma, módulos

### Módulos
- **[modules/alacena/](./modules/alacena/)** - Gestión de alacena/despensa
- **[modules/mantia/](./modules/mantia/)** - Gestión financiera (en desarrollo)
- **[modules/salud/](./modules/salud/)** - Tracking de salud (planificado)
- **[modules/financia/](./modules/financia/)** - Finanzas personales (planificado)
- **[modules/huesha/](./modules/huesha/)** - TBD

---

## 📅 Historial

### Sprints
- **[sprints/](./sprints/)** - Planificación y seguimiento de sprints semanales
- **[sprints/TEMPLATE.md](./sprints/TEMPLATE.md)** - Plantilla para nuevos sprints

### Sesiones
- **[sessions/INDEX.md](./sessions/INDEX.md)** - Índice de todas las sesiones de trabajo
- **[sessions/TEMPLATE.md](./sessions/TEMPLATE.md)** - Plantilla para nuevas sesiones

### Retrospectivas
- **[retrospectives/](./retrospectives/)** - Aprendizajes de cada sprint
- **[retrospectives/TEMPLATE.md](./retrospectives/TEMPLATE.md)** - Plantilla para retrospectivas

---

## 🔍 Búsqueda Rápida

### ¿Cómo hago para...?

| Necesito... | Consultar... |
|-------------|--------------|
| Empezar a desarrollar | [ONBOARDING.md](./ONBOARDING.md) |
| Ver endpoints de API | [API_REFERENCE.md](./API_REFERENCE.md) |
| Hacer deploy | [DEPLOYMENT.md](./DEPLOYMENT.md) |
| Entender la arquitectura | [architecture/OVERVIEW.md](./architecture/OVERVIEW.md) |
| Ver tareas pendientes | [BACKLOG.md](./BACKLOG.md) |
| Revisar cambios | [CHANGELOG.md](./CHANGELOG.md) |
| Planificar sprint | [PROJECT_MANAGEMENT.md](./PROJECT_MANAGEMENT.md) |
| Agregar módulo nuevo | [architecture/OVERVIEW.md](./architecture/OVERVIEW.md#agregar-modulo) |
| Ver schema DB | [architecture/DATABASE.md](./architecture/DATABASE.md) |
| Configurar tema | [architecture/FRONTEND.md](./architecture/FRONTEND.md#theming) |

---

## 📊 Estado Actual

**Versión:** v0.3.0 (ECO Platform)  
**Sprint Actual:** [2026-01-W04](./sprints/2026-01-W04.md)  
**Módulos Activos:** Alacena (✅), Mantia (🏗️)  
**Última Actualización:** 2026-01-25

---

## 🤝 Contribuir

### Agregar Documentación
1. Seguir estructura de carpetas existente
2. Usar Markdown con formato consistente
3. Actualizar este README.md con link al nuevo doc
4. Agregar entry en CHANGELOG.md si es relevante

### Templates Disponibles
- [sprints/TEMPLATE.md](./sprints/TEMPLATE.md)
- [sessions/TEMPLATE.md](./sessions/TEMPLATE.md)
- [retrospectives/TEMPLATE.md](./retrospectives/TEMPLATE.md)

---

## 📝 Convenciones

### Formato de Archivos
- **Nombres:** MAYÚSCULAS para docs principales (`README.md`, `CHANGELOG.md`)
- **Fechas:** `YYYY-MM-DD` para sesiones/sprints
- **Formato:** Markdown con emojis para mejor escaneabilidad

### Estructura de Docs
```markdown
# Título Principal

> Descripción breve

---

## Secciones

### Subsecciones

- Listas
- Items

---

*Footer con metadata*
```

---

## 🔗 Links Externos

- **Repositorio:** [GitHub](https://github.com/usuario/eco) (si aplica)
- **Frontend Producción:** [Vercel](https://alacena-frontend.vercel.app)
- **Backend Producción:** [Fly.io](https://alacena-backend.fly.dev)
- **Base de Datos:** [Servicio DB](https://...)

---

*Documentación iniciada: 2026-01-16*  
*Reestructurada: 2026-01-25*
