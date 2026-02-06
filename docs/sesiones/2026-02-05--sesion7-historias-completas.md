# Sesión 7 — Historias de Usuario Completas
**Fechas:** 5-6 de febrero de 2026  
**Sprint:** Sprint 0  
**Duración:** ~6 horas (2 jornadas)  
**Estado:** ✅ Completada

---

## 🎯 Objetivo

Completar las 738 historias de usuario del proyecto ECO, distribuidas en 7 módulos + 11 áreas transversales, con estimaciones por talla de camiseta y prioridades P1-P4. Crear la documentación interactiva para explorarlas.

---

## 📊 Resultados

### Historias creadas/expandidas

| Módulo | Antes | Después | Épicas | Horas est. |
|--------|-------|---------|--------|------------|
| 📋 MANTIA | 55 | **100** | 10 | ~598h |
| 🏺 ALACENA | 53 | **100** | 16 | ~548h |
| 💚 ECOSALUD | 20 | **100** | 10 | ~621h |
| 🛒 Lista Compras | 18 | **36** | 6 | ~294h |
| 📔 HUESHA | 68 | **100** | 12 | ~542h |
| 💰 FINANCIA | 66 | **100** | 5 capas | ~503h |
| 🔧 Transversales | 81 | **202** | 11 áreas | ~1,459h |
| **TOTAL** | **361** | **738** | — | **~4,707h** |

### Desglose por talla

| Talla | Horas | Cantidad | Subtotal |
|-------|-------|----------|----------|
| S | 3h | 205 | 615h |
| M | 6h | 367 | 2,202h |
| L | 10h | 145 | 1,450h |
| XL | 20h | 20 | 400h |
| XXL | 40h | 1 | 40h |
| **Total** | | **738** | **4,707h** |

### Desglose por prioridad

| Prioridad | Cantidad | % |
|-----------|----------|---|
| 🔴 P1 Crítica | 93 | 12.6% |
| 🟡 P2 Importante | 344 | 46.6% |
| 🔵 P3 Deseable | 290 | 39.3% |
| ⚪ P4 Futuro | 11 | 1.5% |

---

## 📁 Archivos creados/modificados

### Historias por módulo (7 archivos nuevos)
- `docs/04-planificacion/historias/mantia.md` — 100 historias, 10 épicas
- `docs/04-planificacion/historias/alacena.md` — 100 historias, 16 épicas
- `docs/04-planificacion/historias/ecosalud.md` — 100 historias, 10 épicas
- `docs/04-planificacion/historias/lista-compras.md` — 36 historias, 6 épicas
- `docs/04-planificacion/historias/huesha.md` — 100 historias, 12 épicas
- `docs/04-planificacion/historias/financia.md` — 100 historias, 5 capas
- `docs/04-planificacion/historias/transversales.md` — 202 historias, 11 áreas

### Página interactiva
- `docs/04-planificacion/historias.md` — Página maestra con filtros, stats y resumen
- `docs/javascripts/historias-data.js` — 738 historias como datos JSON + lógica de filtrado
- `docs/stylesheets/extra.css` — CSS para tabla interactiva, badges de prioridad, dark mode

### Documentación actualizada
- `docs/index.md` — Tagline → "Entender tu vida para mejorarla", 738 historias, +HUESHA +FINANCIA
- `mkdocs.yml` — Nav con 7 módulos individuales, historias-data.js en extra_javascript

### Limpieza
- `.gitignore` — Agregado `site/` (build output de MkDocs, lo genera GitHub Actions)
- Eliminados: `index.md.backup`, `index.md.backup-20260205-0055`, backlog viejo 150/50

---

## 🔑 Decisiones tomadas (D-007)

- **D-007-1:** Formato de historia extendido: "Como [rol] quiero [qué] Para [valor]" + Est (S/M/L/XL/XXL) + Prio (P1-P4)
- **D-007-2:** Prefijos de ID por módulo: MAN-, ALA-, ECO-, LST-, HUE-, FIN- + 11 prefijos transversales
- **D-007-3:** Estimación por tallas de camiseta (S=3h, M=6h, L=10h, XL=20h, XXL=40h)
- **D-007-4:** Lista de Compras limitada a 36 historias (módulo más pequeño por diseño, acoplado a ALACENA)
- **D-007-5:** Transversales organizadas en 11 áreas: API, Agente IA, Usuarios, Notificaciones, Backup, Seguridad, UX, Infra, Datos, Integraciones, Gobierno
- **D-007-6:** Página interactiva con filtros client-side (vanilla JS, sin dependencias)
- **D-007-7:** Tagline oficial: "Entender tu vida para mejorarla"

---

## 📌 Acuerdos (A-007)

- **A-007-1:** Las 738 historias son el backlog completo del producto. Se priorizarán en la Sesión 8.
- **A-007-2:** Las horas son estimaciones gruesas — se refinarán al entrar a cada sprint.
- **A-007-3:** El MVP (P1) tiene ~93 historias. No todo el backlog se implementa.

---

## ⏩ Próxima sesión — Sesión 8

**Fecha:** 7 de febrero de 2026  
**Tema:** Plan de Proyecto y Estrategia de Versiones

**Agenda:**
1. Análisis de componentes reutilizables entre módulos
2. Mapeo de codependencias entre historias
3. Plan de proyecto con fechas estimadas y versiones MVP → v1.0
4. Fechas aproximadas de producción por funcionalidad
5. Estrategia incremental: qué construir primero y por qué
