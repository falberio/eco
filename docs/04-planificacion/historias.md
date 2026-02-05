# 🎯 Gestión de Historias

**Panel de control para revisar, priorizar y gestionar las 161 historias de usuario del proyecto ECO.**

<div class="historia-stats">
  <div class="stat-card">
    <div class="stat-number">161</div>
    <div class="stat-label">Historias Totales</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">95</div>
    <div class="stat-label">En GitHub</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">18</div>
    <div class="stat-label">Sprint 1</div>
  </div>
  <div class="stat-card">
    <div class="stat-number">143</div>
    <div class="stat-label">Pendientes</div>
  </div>
</div>

---

## 🔍 Filtros Rápidos

<div class="filter-buttons">
  <button class="filter-btn active" data-filter="all">📋 Todas</button>
  <button class="filter-btn" data-filter="p1">🔥 P1 - Alta</button>
  <button class="filter-btn" data-filter="p2">⚡ P2 - Media</button>
  <button class="filter-btn" data-filter="p3">⭐ P3 - Baja</button>
  <button class="filter-btn" data-filter="mantia">📋 MANTIA</button>
  <button class="filter-btn" data-filter="alacena">🏺 ALACENA</button>
  <button class="filter-btn" data-filter="lista">🛒 Lista</button>
  <button class="filter-btn" data-filter="ecosalud">💚 ECOSALUD</button>
  <button class="filter-btn" data-filter="api">🤖 API/IA</button>
</div>

---

## 📊 Vista por Prioridad

### 🔥 Prioridad 1 - Críticas (1 historia)

<div class="historia-list">
  <div class="historia-item p1" data-module="alacena">
    <div class="historia-header">
      <span class="historia-code">ALA-11</span>
      <a href="https://github.com/falberio/eco/issues/42" target="_blank" class="historia-issue">#42</a>
      <span class="historia-priority p1">P1</span>
      <span class="historia-size">S</span>
    </div>
    <h4 class="historia-title">Ordenar por fecha de vencimiento</h4>
    <p class="historia-description">Como usuario quiero ver items ordenados por vencimiento para consumir primero lo que vence antes.</p>
    <div class="historia-actions">
      <button class="btn-action move-sprint">➡️ Mover a Sprint</button>
      <button class="btn-action change-priority">🔄 Cambiar Prioridad</button>
      <button class="btn-action archive">🗑️ Archivar</button>
    </div>
  </div>
</div>

### ⚡ Prioridad 2 - Importantes (26 historias)

!!! tip "Historias P2"
    Funcionalidades importantes para UX y valor del producto. Deberían ir en v0.1 o v0.2.

<details>
<summary><strong>Ver 26 historias P2</strong> (click para expandir)</summary>

<div class="historia-list">
  <!-- MAN-08 -->
  <div class="historia-item p2" data-module="mantia">
    <div class="historia-header">
      <span class="historia-code">MAN-08</span>
      <a href="https://github.com/falberio/eco/issues/66" target="_blank" class="historia-issue">#66</a>
      <span class="historia-priority p2">P2</span>
      <span class="historia-size">M</span>
    </div>
    <h4 class="historia-title">Recordatorios por email</h4>
    <p class="historia-description">Como usuario quiero recibir email 1 día antes de tarea vencida para no olvidar tareas importantes.</p>
    <div class="historia-actions">
      <button class="btn-action move-sprint">➡️ Mover a Sprint</button>
      <button class="btn-action change-priority">🔄 Cambiar Prioridad</button>
    </div>
  </div>

  <!-- MAN-09 -->
  <div class="historia-item p2" data-module="mantia">
    <div class="historia-header">
      <span class="historia-code">MAN-09</span>
      <a href="https://github.com/falberio/eco/issues/36" target="_blank" class="historia-issue">#36</a>
      <span class="historia-priority p2">P2</span>
      <span class="historia-size">L</span>
    </div>
    <h4 class="historia-title">Vista calendario mensual</h4>
    <p class="historia-description">Como usuario quiero ver tareas en calendario visual para planificar mejor mi mes.</p>
    <div class="historia-actions">
      <button class="btn-action move-sprint">➡️ Mover a Sprint</button>
      <button class="btn-action change-priority">🔄 Cambiar Prioridad</button>
    </div>
  </div>

  <!-- Ver documento completo para todas las P2 -->
  <p><em>...y 24 historias P2 más. <a href="04-planificacion/historias-completas-150">Ver backlog completo</a></em></p>
</div>

</details>

### ⭐ Prioridad 3 - Nice-to-have (23 historias)

!!! info "Historias P3"
    Features opcionales, optimizaciones, integraciones avanzadas. Para v0.3 en adelante.

<details>
<summary><strong>Ver 23 historias P3</strong> (click para expandir)</summary>

<div class="historia-list">
  <p><em>Integraciones (Google Cal, Todoist, Notion), Gamificación, Webhooks, etc.</em></p>
  <p><a href="04-planificacion/historias-completas-150">Ver backlog completo con todas las P3</a></p>
</div>

</details>

---

## 📦 Vista por Módulo

### 📋 MANTIA - Gestión de Tareas (20 historias)

<div class="module-summary">
  <div class="module-stat">
    <strong>7</strong> en Sprint 1
  </div>
  <div class="module-stat">
    <strong>13</strong> pendientes
  </div>
  <div class="module-stat">
    <strong>2</strong> P2
  </div>
  <div class="module-stat">
    <strong>11</strong> P3
  </div>
</div>

<details>
<summary><strong>Ver detalles</strong></summary>

**Sprint 1 (Completadas):** MAN-01 a MAN-07  
**Pendientes P2:** MAN-08 (Email), MAN-09 (Calendario), MAN-11 (Push), MAN-15 (Stats), MAN-18 (Asignar)  
**Pendientes P3:** MAN-10, MAN-12, MAN-13, MAN-14, MAN-16, MAN-17, MAN-19, MAN-20

[Ver historias completas →](04-planificacion/historias-completas-150#mantia)

</details>

### 🏺 ALACENA - Inventario (22 historias)

<div class="module-summary">
  <div class="module-stat">
    <strong>3</strong> en Sprint 1
  </div>
  <div class="module-stat">
    <strong>19</strong> pendientes
  </div>
  <div class="module-stat">
    <strong>1</strong> P1
  </div>
  <div class="module-stat">
    <strong>9</strong> P2
  </div>
</div>

<details>
<summary><strong>Ver detalles</strong></summary>

**Sprint 1:** ALA-05, ALA-06, ALA-07  
**P1:** ALA-11 (Ordenar por vencimiento)  
**Pendientes P2:** ALA-08 (Barcode), ALA-10 (Fotos), ALA-12 (Foto item), ALA-13 (Ubicaciones), ALA-14 (Asignar ubicación), ALA-15 (Buscar ubicación), ALA-17 (Recetas), ALA-18 (Ingredientes), ALA-23 (Alertas), ALA-24 (Stock bajo)

[Ver historias completas →](04-planificacion/historias-completas-150#alacena)

</details>

### 🛒 Lista de Compras (18 historias)

<div class="module-summary">
  <div class="module-stat">
    <strong>5</strong> en Sprint 1
  </div>
  <div class="module-stat">
    <strong>13</strong> pendientes
  </div>
  <div class="module-stat">
    <strong>6</strong> P2
  </div>
  <div class="module-stat">
    <strong>7</strong> P3
  </div>
</div>

<details>
<summary><strong>Ver detalles</strong></summary>

**Sprint 1:** LST-01 a LST-05  
**Pendientes P2:** LST-06 (Por super), LST-07 (Costo), LST-08 (Precio real), LST-11 (Compartir), LST-14 (Reservar), LST-18 (Desde receta)  
**Pendientes P3:** LST-09, LST-10, LST-12, LST-13, LST-15, LST-16, LST-17

[Ver historias completas →](04-planificacion/historias-completas-150#lista)

</details>

### 💚 ECOSALUD - Salud y Bienestar (20 historias)

<div class="module-summary">
  <div class="module-stat">
    <strong>3</strong> en Sprint 1
  </div>
  <div class="module-stat">
    <strong>17</strong> pendientes
  </div>
  <div class="module-stat">
    <strong>8</strong> P2
  </div>
  <div class="module-stat">
    <strong>9</strong> P3
  </div>
</div>

<details>
<summary><strong>Ver detalles</strong></summary>

**Sprint 1:** ECO-01, ECO-02, ECO-03  
**Pendientes P2:** ECO-04 (Gráficos), ECO-05 (Alertas), ECO-06 (PDF), ECO-07 (Comparar metas), ECO-09 (Recordatorio), ECO-16 (Medicamentos), ECO-17 (Alerta medicamento), ECO-20 (Foto estudio)  
**Pendientes P3:** Resto

[Ver historias completas →](04-planificacion/historias-completas-150#ecosalud)

</details>

---

## 🤖 APIs y Agente IA (27 historias)

!!! success "Módulos Clave para v0.2+"
    Estas historias habilitan la funcionalidad de comandos de voz e interacción con IA.

### API para IA (15 historias)
- **11 Issues creados** (#52-#60, #101-#103)
- GraphQL schemas, autenticación, queries conversacionales
- [Ver detalles →](04-planificacion/historias-completas-150#api-para-ia)

### Agente Conversacional (12 historias)
- **3 Issues creados** (#104, #105, #106)
- Comandos voz, integración Whisper, Home Assistant
- [Ver detalles →](04-planificacion/historias-completas-150#agente-conversacional)

---

## 🎯 Acciones Rápidas

<div class="quick-actions">
  <a href="https://github.com/falberio/eco/issues" target="_blank" class="action-card">
    <h3>🐛 Ver Issues en GitHub</h3>
    <p>95 issues actualmente</p>
  </a>
  
  <a href="https://github.com/falberio/eco/milestones" target="_blank" class="action-card">
    <h3>🎯 Milestones</h3>
    <p>Configurar sprints</p>
  </a>
  
  <a href="04-planificacion/historias-completas-150" class="action-card">
    <h3>📋 Backlog Completo</h3>
    <p>161 historias detalladas</p>
  </a>
  
  <a href="04-planificacion/flujo-gestion-historias" class="action-card">
    <h3>⚙️ Workflow</h3>
    <p>Cómo gestionar historias</p>
  </a>
</div>

---

## 📝 Notas para Priorización

!!! tip "Criterios"
    - **P1:** Bloqueante, sin esto no funciona nada
    - **P2:** Alto valor, mejora experiencia significativamente
    - **P3:** Nice-to-have, puede esperar

!!! warning "Dependencias"
    - APIs GraphQL (API-01 a API-04) deben ir antes del Agente
    - Multi-usuario requiere ajustes en CRUD básicos
    - Integraciones externas (Google Cal, Fit) son P3

!!! info "Estimaciones"
    - **S** (Small): 2-4 horas
    - **M** (Medium): 4-8 horas
    - **L** (Large): 8-16 horas
    - **XL** (Extra Large): 16+ horas

---

**Última actualización:** 5 de febrero de 2026  
**Total historias:** 161  
**Issues GitHub:** 95 creados
