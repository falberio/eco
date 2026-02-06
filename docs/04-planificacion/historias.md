# 🎯 Historias de Usuario — ECO

**738 funcionalidades planificadas** para construir el sistema de gestión doméstica más completo.  
Usá los filtros para explorar por módulo, prioridad o estimación.

<div class="historia-stats">
  <div class="stat-card">
    <div class="stat-number">738</div>
    <div class="stat-label">Historias Totales</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">93</div>
    <div class="stat-label">🔴 Críticas (P1)</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">344</div>
    <div class="stat-label">🟡 Importantes (P2)</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">~4,565h</div>
    <div class="stat-label">Estimación Total</div>
  </div>
</div>

---

## 🔍 Filtros

<div id="eco-filters">
  <div class="filter-group">
    <label><strong>Módulo:</strong></label>
    <div class="filter-buttons" id="filter-module">
      <button class="filter-btn active" data-filter="all">📋 Todos (738)</button>
      <button class="filter-btn" data-filter="mantia">📋 MANTIA (100)</button>
      <button class="filter-btn" data-filter="alacena">🏺 ALACENA (100)</button>
      <button class="filter-btn" data-filter="ecosalud">💚 ECOSALUD (100)</button>
      <button class="filter-btn" data-filter="lista">🛒 Lista (36)</button>
      <button class="filter-btn" data-filter="huesha">📔 HUESHA (100)</button>
      <button class="filter-btn" data-filter="financia">💰 FINANCIA (100)</button>
      <button class="filter-btn" data-filter="transversal">🔧 Transversales (202)</button>
    </div>
  </div>
  <div class="filter-group">
    <label><strong>Prioridad:</strong></label>
    <div class="filter-buttons" id="filter-priority">
      <button class="filter-btn active" data-filter="all">Todas</button>
      <button class="filter-btn" data-filter="P1">🔴 P1 Crítica</button>
      <button class="filter-btn" data-filter="P2">🟡 P2 Importante</button>
      <button class="filter-btn" data-filter="P3">🔵 P3 Deseable</button>
      <button class="filter-btn" data-filter="P4">⚪ P4 Futuro</button>
    </div>
  </div>
  <div class="filter-group">
    <label><strong>Estimación:</strong></label>
    <div class="filter-buttons" id="filter-size">
      <button class="filter-btn active" data-filter="all">Todas</button>
      <button class="filter-btn" data-filter="S">S (~3h)</button>
      <button class="filter-btn" data-filter="M">M (~6h)</button>
      <button class="filter-btn" data-filter="L">L (~10h)</button>
      <button class="filter-btn" data-filter="XL">XL (~20h)</button>
      <button class="filter-btn" data-filter="XXL">XXL (~40h)</button>
    </div>
  </div>
  <div class="filter-group">
    <input type="text" id="filter-search" placeholder="🔎 Buscar por nombre, ID o descripción..." class="search-input">
  </div>
  <div id="filter-count" class="filter-count">Mostrando <strong>738</strong> de 738 historias</div>
</div>

---

<div id="historia-table-container">
  <table id="historia-table" class="historia-table">
    <thead>
      <tr>
        <th class="col-id">ID</th>
        <th class="col-title">Funcionalidad</th>
        <th class="col-module">Módulo</th>
        <th class="col-prio">Prio</th>
        <th class="col-est">Est.</th>
        <th class="col-date">Fecha aprox.</th>
      </tr>
    </thead>
    <tbody id="historia-tbody">
      <!-- Las filas se generan dinámicamente desde historias-data.js -->
    </tbody>
  </table>
  <div id="no-results" class="no-results" style="display:none;">
    <p>😕 No se encontraron historias con esos filtros.</p>
    <button class="filter-btn" onclick="resetFilters()">Limpiar filtros</button>
  </div>
</div>

---

## 📊 Resumen por Módulo

| Módulo | Historias | P1 | P2 | P3 | P4 | Horas aprox | Detalle |
|--------|-----------|----|----|----|----|-------------|---------|
| [📋 MANTIA](historias/mantia.md) | 100 | 9 | 38 | 53 | 0 | ~598h | Tareas y mantenimiento del hogar |
| [🏺 ALACENA](historias/alacena.md) | 100 | 10 | 52 | 38 | 0 | ~548h | Inventario inteligente |
| [💚 ECOSALUD](historias/ecosalud.md) | 100 | 7 | 50 | 43 | 0 | ~621h | Salud y bienestar |
| [🛒 Lista](historias/lista-compras.md) | 36 | 5 | 14 | 13 | 4 | ~294h | Compras compartidas |
| [📔 HUESHA](historias/huesha.md) | 100 | 15 | 46 | 39 | 0 | ~542h | Diario de vida y registro vital |
| [💰 FINANCIA](historias/financia.md) | 100 | 19 | 49 | 32 | 0 | ~503h | Gestión financiera personal |
| [🔧 Transversales](historias/transversales.md) | 202 | 28 | 95 | 72 | 7 | ~1,459h | Plataforma, API, seguridad, UX |
| **TOTAL** | **738** | **93** | **344** | **290** | **11** | **~4,565h** | |

---

## 📖 Convenciones

### Prioridades

- 🔴 **P1 — Crítica:** Sin esto el producto no funciona. MVP obligatorio.
- 🟡 **P2 — Importante:** Aporta valor significativo. Incluir cuanto antes después del MVP.
- 🔵 **P3 — Deseable:** Mejora la experiencia. Se puede vivir sin ella por ahora.
- ⚪ **P4 — Futuro:** Ideas a largo plazo, baja urgencia.

### Estimaciones (tallas de camiseta)

| Talla | Horas | Ejemplo |
|-------|-------|---------|
| **S** | ~3h | Un filtro, un campo nuevo, un botón |
| **M** | ~6h | Un CRUD simple, una vista básica |
| **L** | ~10h | Una integración, un dashboard |
| **XL** | ~20h | Un módulo complejo, IA, IoT |
| **XXL** | ~40h | Sistema end-to-end, IA avanzada |

!!! info "Nota sobre fechas"
    Las fechas son **estimaciones aproximadas** basadas en prioridad y dependencias. Se ajustarán en el Plan de Proyecto (Sesión 8). P1 → Q1-Q2 2026 · P2 → Q2-Q3 · P3 → Q3-Q4 · P4/IA avanzada → 2027.

---

*Última actualización: 6 de febrero de 2026 — Sprint 0, Sesión 7*  
*Total: 738 historias · ~4,565 horas estimadas · 7 módulos + 11 áreas transversales*
