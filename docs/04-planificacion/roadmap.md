# 🗺️ Roadmap

**Última actualización:** 04 Febrero 2026  
**Horizonte:** Q1-Q2 2026

---

## 🎯 Propósito

Visualizar evolución por trimestres/releases y alinear capacidad con objetivos. Referencia: [Backlog](backlog.md) y [DF](../02-documento-funcional.md).

---

## 📋 Principios de Planificación

- ✅ **Ritmo sostenible:** Sesión semanal + retro quincenal
- ✅ **Priorizar MVP operable:** Uso real antes que features
- ✅ **Aprendizaje continuo:** Historial primero
- ✅ **ADRs revisados cada 2 semanas**

---

## 📅 Hitos y Fechas

### 🎯 Sprint 0: Marco del Producto
**Fechas:** 01 Feb - 09 Feb 2026  
**Estado:** ⏳ En progreso

**Objetivo:**  
Consolidar documentación, backlog y ADRs para arrancar Sprint 1 con claridad total.

**Entregables:**
- ✅ Estructura documental en Markdown
- ⏳ Configuración MkDocs Material
- ⏳ Backlog Sprint 1 detallado
- ⏳ Plan de proyecto completo
- ✅ ADRs v1 documentados

---

### 🚀 Sprint 1: MVP Operable
**Fechas:** 10 Feb - 23 Feb 2026  
**Estado:** 📋 Planificado

**Objetivo:**  
Sistema utilizable en el día a día (ALACENA + MANTIA + Lista + ECOSALUD mínimo).

**Alcance funcional:**
- **ALACENA:** Mejoras (filtros, búsqueda, estados de stock)
- **MANTIA:** CRUD completo + ejecuciones + vista pendientes
- **Lista:** CRUD + integración ALACENA + marcar comprado
- **ECOSALUD:** Registro básico + histórico

**Criterio de éxito:**
- ✅ ≥ 20 registros reales en la semana
- ✅ Uso diario durante 7 días consecutivos
- ✅ Sin bloqueos críticos

---

### Sprint 2-3: Consolidación y Reportes
**Fechas:** 24 Feb - 23 Mar 2026  
**Estado:** 📋 Planificado

**Objetivo:**  
Mejorar UX, agregar reportes básicos y consolidar estabilidad.

**Alcance tentativo:**
- Reportes de consumo ALACENA
- Estadísticas de cumplimiento MANTIA
- Mejoras de navegación
- Estados vacíos completos
- Optimizaciones de performance

---

## 📊 Roadmap por Trimestre

### Q1 2026 (Ene - Mar)

**Objetivos:**
- ✅ Consolidar MVP Sprint 1
- ✅ Medir uso real (≥ 20 registros/semana, 7 días consecutivos)
- ✅ Estabilizar ALACENA, MANTIA, Lista

**Entregables:**
- EP-02 (ALACENA MVP) - Completo
- EP-03 (MANTIA MVP) - Completo
- EP-04 (Lista) - Completo
- EP-05 (ECOSALUD) - Básico funcional

**Riesgos y Mitigaciones:**
- ⚠️ **Riesgo:** Sobrecarga de features sin uso real
  - **Mitigación:** Mantener foco en MVP, medir uso diario
- ⚠️ **Riesgo:** Complejidad técnica inesperada
  - **Mitigación:** Simplicidad first, ADRs claros

---

### Q2 2026 (Abr - Jun)

**Objetivos:**
- 📊 Reportes y análisis de datos
- 🔔 Notificaciones básicas (stock bajo, tareas vencidas)
- 🏠 Exploración de HUESHA (espacios físicos)
- 📱 Mejoras móviles (PWA completo)

**Entregables:**
- Sistema de notificaciones interno
- Reportes ALACENA (consumo, tendencias)
- Reportes MANTIA (cumplimiento, frecuencia)
- HUESHA MVP (definición de espacios)

**Riesgos y Mitigaciones:**
- ⚠️ **Riesgo:** Feature creep
  - **Mitigación:** DoR/DoD estrictos, retros quincenales

---

### Q3 2026 (Jul - Sep) - Tentativo

**Objetivos:**
- 💰 FINANCIA MVP (presupuestos básicos)
- 🤖 Asistencia progresiva (sugerencias basadas en historial)
- 📈 Dashboards consolidados
- 🔄 Sincronización básica entre dispositivos

---

## 📈 Capacidad Estimada

### Por Sprint
- **Issues técnicos:** 2-5 por sprint
- **Historias de usuario:** 3-7 por sprint
- **Duración:** 2 semanas
- **Velocidad estimada:** Aumentará tras Sprint 1 (baseline)

### Por Trimestre
- **Sprints:** ~6 sprints por trimestre
- **Épicas:** 1-2 épicas completas por trimestre
- **Issues totales:** ~20-30 por trimestre

---

## 🎯 Hitos Clave

| Hito | Fecha | Estado | Descripción |
|------|-------|--------|-------------|
| **Deploy inicial** | Nov 2025 | ✅ | ALACENA en producción |
| **Sistema de taras** | Ene 2026 | ✅ | Control de stock masivo |
| **Framework documental** | 09 Feb 2026 | ⏳ | Docs consolidados |
| **MVP Sprint 1** | 23 Feb 2026 | 📋 | Sistema operable diario |
| **100 registros reales** | Mar 2026 | 📋 | Validación de uso |
| **HUESHA MVP** | Jun 2026 | 📋 | Gestión de espacios |
| **FINANCIA MVP** | Sep 2026 | 📋 | Presupuestos básicos |

---

## 🔄 Revisión y Ajuste

### Frecuencia
- **Semanal:** Review de progreso y bloqueos
- **Quincenal:** Retro + ajuste de roadmap
- **Mensual:** Revisión de hitos y capacidad

### Triggers de Actualización
- ✅ Cambio de alcance de épica
- ✅ Nueva ADR que impacta roadmap
- ✅ Bloqueo técnico significativo
- ✅ Cambio de prioridades

---

## 🔗 Enlaces de Referencia

- [Documento Funcional](../02-documento-funcional.md)
- [Backlog Maestro](backlog.md)
- [Sprints](sprints.md)
- [Libro de Sesiones](../03-libro-sesiones.md)
- [ADRs](../05-arquitectura/adrs.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Post Sprint 1 (24 Feb 2026)
