# Sesión 7 - Planning Sprint 2
**Fecha:** 6 de febrero de 2026  
**Duración estimada:** 3-4 horas  
**Estado:** 🟡 Pendiente

---

## 🎯 Objetivos

### 1. Priorizar backlog de 161 historias
- Revisar 161 historias en [gestión visual](../04-planificacion/historias.md)
- Clasificar historias en milestones (v0.1, v0.2, v0.3, v1.0)
- Identificar dependencias críticas
- Decidir alcance de Sprint 2

### 2. Crear Milestones en GitHub
- **v0.1 - MVP Core** (Mar 2026) - MANTIA + ALACENA básico
- **v0.2 - Extensiones** (Abr 2026) - Lista + ECOSALUD
- **v0.3 - IA & Voz** (May 2026) - API GraphQL + Agente
- **v1.0 - Producción** (Jun 2026) - Multi-usuario + Seguridad

### 3. Planificar Sprint 2
- Seleccionar 15-20 historias para Sprint 2
- Asignar issues a Sprint 2 milestone
- Estimar esfuerzo total
- Definir criterios de aceptación

### 4. Validar arquitectura API
- Revisar schema GraphQL (API-01 a API-04)
- Validar integración con Agente IA
- Documentar flujo de autenticación JWT para API
- Verificar compatibilidad con OpenAI API

---

## 📋 Tareas Específicas

### Fase 1: Revisión de Historias (60 min)
- [ ] Abrir [página de gestión visual](../04-planificacion/historias.md)
- [ ] Revisar 26 historias P2 y validar prioridad
- [ ] Identificar 1 historia P1 (ALA-11) y asignar a Sprint 2
- [ ] Marcar historias que pueden archivarse o bajar prioridad
- [ ] Documentar decisiones de priorización

### Fase 2: Milestones en GitHub (45 min)
- [ ] Crear 4 milestones en GitHub
- [ ] Asignar fechas de cierre a cada milestone
- [ ] Distribuir 95 issues existentes entre milestones
- [ ] Agregar descripción y criterios a cada milestone

### Fase 3: Sprint 2 Planning (90 min)
- [ ] Seleccionar 15 historias para Sprint 2
- [ ] Prioridad: ALA-11 (P1), MAN-08, MAN-09 (P2), ALA-08 (P2)
- [ ] Crear tasks/sub-issues si es necesario
- [ ] Asignar labels: `sprint-2`, `en-progreso`
- [ ] Estimar: apuntar a 40-60 horas total (2 semanas)

### Fase 4: Arquitectura API (60 min)
- [ ] Revisar [API-01](https://github.com/falberio/eco/issues/52) - Schema GraphQL
- [ ] Diseñar queries conversacionales: `askWhatCanICook(ingredients, people)`
- [ ] Validar autenticación JWT en GraphQL context
- [ ] Documentar integraciones: Whisper STT + OpenAI GPT + Home Assistant
- [ ] Crear ADR si es necesario

---

## 🎯 Criterios de Éxito

### Backlog Priorizado
- ✅ 161 historias clasificadas en 4 milestones
- ✅ Dependencias identificadas y documentadas
- ✅ Historias P1 y P2 asignadas a milestones correctos

### Sprint 2 Definido
- ✅ 15 historias seleccionadas y asignadas
- ✅ Issues etiquetados con `sprint-2`
- ✅ Estimación total entre 40-60 horas
- ✅ Criterios de aceptación claros en cada issue

### Arquitectura Validada
- ✅ Schema GraphQL diseñado
- ✅ Queries conversacionales definidas
- ✅ Flujo de autenticación documentado
- ✅ Integraciones con IA planificadas

---

## 📊 Distribución Sugerida de Milestones

### v0.1 - MVP Core (15 Mar 2026)
**Objetivo:** Funcionalidad básica de MANTIA y ALACENA  
**Total:** ~30 historias

- **MANTIA:** MAN-01 a MAN-07 (Sprint 1 ✅), MAN-08, MAN-09
- **ALACENA:** ALA-05, ALA-06, ALA-07 (Sprint 1 ✅), ALA-08, ALA-11 (P1)
- **Lista:** LST-01 a LST-05 (Sprint 1 ✅), LST-06, LST-07
- **ECOSALUD:** ECO-01, ECO-02, ECO-03 (Sprint 1 ✅)

### v0.2 - Extensiones (15 Abr 2026)
**Objetivo:** Completar módulos core + notificaciones  
**Total:** ~40 historias

- **MANTIA:** MAN-10 a MAN-15
- **ALACENA:** ALA-10, ALA-12, ALA-13, ALA-14, ALA-17, ALA-18
- **Lista:** LST-08, LST-11, LST-14, LST-18
- **ECOSALUD:** ECO-04, ECO-05, ECO-06, ECO-07, ECO-09
- **Notificaciones:** NOT-01 a NOT-10
- **Multi-usuario:** USR-01 a USR-05

### v0.3 - IA & Voz (15 May 2026)
**Objetivo:** API GraphQL + Agente conversacional  
**Total:** ~40 historias

- **API para IA:** API-01 a API-15
- **Agente:** AGT-01 a AGT-12
- **Infraestructura:** INF-04, INF-05 (WebSockets)

### v1.0 - Producción (15 Jun 2026)
**Objetivo:** Seguridad, backups, optimizaciones  
**Total:** ~51 historias

- **Seguridad:** SEG-01 a SEG-12
- **Backups:** BCK-01 a BCK-10
- **UX:** UX-01 a UX-15
- **Infraestructura:** INF-01 a INF-14

---

## 🔗 Recursos

- [Gestión Visual de Historias](../04-planificacion/historias.md)
- [Backlog Completo](../04-planificacion/historias-completas-150.md)
- [GitHub Issues](https://github.com/falberio/eco/issues)
- [GitHub Milestones](https://github.com/falberio/eco/milestones)
- [Workflow de Gestión](../04-planificacion/flujo-gestion-historias.md)

---

## 💡 Notas

### Dependencias Críticas
- API GraphQL (API-01 a API-04) debe ir antes del Agente
- Multi-usuario requiere cambios en todos los CRUDs
- Notificaciones dependen de configuración de usuario (USR-03)

### Integraciones Planificadas
- **OpenAI API:** GPT-4 para agente conversacional
- **Whisper:** Speech-to-text para comandos de voz
- **Home Assistant:** Control de voz desde dispositivos
- **Google Fit:** Sincronización de datos de salud
- **Google Calendar:** Sincronización de tareas
- **Todoist/Notion:** Importación de tareas

### Estimaciones por Tamaño
- **S (Small):** 2-4 horas → 60 historias
- **M (Medium):** 4-8 horas → 70 historias
- **L (Large):** 8-16 horas → 25 historias
- **XL (Extra Large):** 16+ horas → 6 historias

**Total estimado:** ~800-1200 horas de desarrollo

---

## 📝 Próximos Pasos después de Sesión 7

1. **Inicio Sprint 2** (7 Feb)
   - Comenzar con ALA-11 (P1 - Ordenar por vencimiento)
   - Setup entorno de desarrollo local
   - Verificar tests existentes

2. **Daily Progress** (8-20 Feb)
   - Completar 15 historias de Sprint 2
   - Actualizar issues en GitHub
   - Documentar decisiones técnicas

3. **Sprint Review** (21 Feb)
   - Demo de funcionalidades completadas
   - Retrospectiva del sprint
   - Planificar Sprint 3

---

**Preparado por:** GitHub Copilot  
**Última actualización:** 5 de febrero de 2026
