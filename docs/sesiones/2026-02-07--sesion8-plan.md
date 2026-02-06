# Sesión 8 — Plan de Proyecto y Estrategia de Versiones
**Fecha:** 7 de febrero de 2026  
**Sprint:** Sprint 0  
**Duración estimada:** 3-4 horas  
**Estado:** 🟡 Pendiente

---

## 🎯 Objetivo

Transformar las 738 historias en un plan de proyecto ejecutable: identificar qué se comparte entre módulos, qué depende de qué, y definir versiones con fechas realistas.

---

## 📋 Agenda

### 1. Componentes Reutilizables (~45 min)

Analizar las 738 historias para identificar patrones comunes entre módulos que se pueden construir UNA vez y reusar:

**Candidatos probables:**
- CRUD genérico (todos los módulos tienen crear/editar/eliminar/listar)
- Sistema de filtros y búsqueda (MANTIA, ALACENA, ECOSALUD, FINANCIA)
- Dashboard/estadísticas (todos tienen dashboards)
- Importación CSV/archivos (FINANCIA, HUESHA, ECOSALUD)
- Exportación PDF (ECOSALUD, FINANCIA, HUESHA)
- Sistema de notificaciones (MANTIA, ALACENA, Lista, ECOSALUD)
- Gráficos de evolución/tendencias (ECOSALUD, FINANCIA, MANTIA)
- Categorización/etiquetas (todos los módulos)
- Multi-usuario/permisos (transversal USR-)

**Entregable:** Tabla de componentes compartidos con módulos que los usan.

### 2. Codependencias entre Historias (~45 min)

Mapear qué historias necesitan que otras estén hechas primero:

**Dependencias conocidas:**
- Lista de Compras depende de ALACENA (LST-02: crear item desde ALACENA)
- Agente IA depende de API REST de cada módulo (AGT-* → API-*)
- Notificaciones depende de infraestructura push (NOT-* → INF-*)
- Multi-usuario depende de autenticación (USR-* → SEC-*)
- Dashboard unificado depende de módulos individuales

**Entregable:** Diagrama de dependencias entre módulos y áreas.

### 3. Plan de Versiones (~60 min)

Definir versiones incrementales del producto:

| Versión | Alcance tentativo | Historias | Horas est. |
|---------|-------------------|-----------|------------|
| v0.1 - MVP | MANTIA + ALACENA básico | ~30-40 P1 | ~200-300h |
| v0.2 | + Lista + ECOSALUD básico | ~40-50 | ~300-400h |
| v0.3 | + FINANCIA + API REST | ~50-60 | ~400-500h |
| v0.4 | + HUESHA + multi-usuario | ~40-50 | ~300-400h |
| v1.0 | Agente IA + voz + producción | ~30-40 | ~200-300h |

**Decisiones necesarias:**
- ¿Cuántas horas/semana de dedicación real?
- ¿Qué módulo se construye primero después de MANTIA?
- ¿FINANCIA o ECOSALUD? ¿O Lista/HUESHA?
- ¿MVP = solo MANTIA+ALACENA, o incluye más?

### 4. Cronograma con Fechas (~30 min)

Basado en horas/semana del usuario, calcular fechas de entrega por versión.

**Entregable:** Timeline con fechas estimadas para cada versión, publicable en la documentación.

### 5. Actualizar Documentación (~30 min)

- Crear/actualizar `ROADMAP.md` con el plan de versiones
- Actualizar `index.md` con fechas del roadmap
- Actualizar `historias.md` con asignación de historias a versiones

---

## 🔗 Contexto necesario

Para la sesión, tener presente:
- [738 Historias interactivas](../04-planificacion/historias.md)
- [Historias por módulo](../04-planificacion/historias/) (7 archivos)
- [Libro de Sesiones](../03-libro-sesiones.md)
- [Documento Funcional](../02-documento-funcional.md)

### Datos clave
- **738 historias** | ~4,707h estimadas
- **93 P1** (críticas) | **344 P2** | **290 P3** | **11 P4**
- **Tallas:** 205 S, 367 M, 145 L, 20 XL, 1 XXL
- **7 módulos:** MANTIA, ALACENA, ECOSALUD, Lista, HUESHA, FINANCIA + Transversales
