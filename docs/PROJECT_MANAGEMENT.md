# 📋 Gestión de Proyecto ECO - Metodología Ágil

## 🎯 Sistema de Trabajo

### Sprints
- **Duración:** 1 semana (flexible según disponibilidad)
- **Inicio:** Lunes (cuando sea posible)
- **Cierre:** Domingo con retrospectiva
- **Planificación:** Al inicio de cada sprint, definir objetivos claros

### Features vs Issues
- **Feature:** Nueva funcionalidad completa (ej: "Módulo Mantia - Gestión de Cuentas")
- **Issue:** Bug, mejora, o tarea técnica específica (ej: "Paginación rota en items")
- **Epic:** Agrupador de features relacionadas (ej: "ECO Platform v1.0")

---

## 📁 Estructura de Documentación

```
docs/
├── README.md                          # Índice maestro de docs
├── PROJECT_MANAGEMENT.md              # Este archivo
├── ONBOARDING.md                      # Guía para nuevos devs
├── API_REFERENCE.md                   # Endpoints y ejemplos
├── DEPLOYMENT.md                      # Dónde está cada servicio
├── CHANGELOG.md                       # Historial de versiones
├── ROADMAP.md                         # Features futuras
│
├── architecture/
│   ├── OVERVIEW.md                    # Arquitectura general
│   ├── DATABASE.md                    # Schema y relaciones
│   ├── FRONTEND.md                    # Next.js, shared code
│   └── BACKEND.md                     # Express, Prisma, modules
│
├── modules/
│   ├── alacena/
│   │   ├── README.md                  # Qué hace este módulo
│   │   ├── API.md                     # Endpoints específicos
│   │   └── FEATURES.md                # Funcionalidades
│   ├── mantia/
│   │   └── ... (mismo patrón)
│   └── ...
│
├── sprints/
│   ├── 2026-01-W04.md                 # Sprint semana 4 de enero
│   ├── 2026-02-W01.md
│   └── TEMPLATE.md                    # Plantilla para nuevos sprints
│
├── sessions/
│   ├── INDEX.md                       # Índice de sesiones
│   ├── 2026-01-24--mantia-planning.md
│   └── TEMPLATE.md                    # Plantilla para sesiones
│
└── retrospectives/
    ├── 2026-01-W04.md                 # Qué salió bien/mal
    └── TEMPLATE.md
```

---

## 🔄 Flujo de Trabajo por Sesión

### 1. Inicio de Sesión
```
1. Usuario dice: "Empezamos una nueva sesión"
2. Copilot pregunta: "¿Qué querés lograr hoy?"
3. Crear archivo docs/sessions/YYYY-MM-DD--HH-MM--titulo.md
4. Revisar:
   - docs/sessions/INDEX.md (pendientes de sesión anterior)
   - docs/sprints/actual.md (objetivos del sprint)
   - docs/BACKLOG.md (lista de tareas)
```

### 2. Durante la Sesión
```
- Ir documentando cambios en memoria
- Marcar tareas completadas en sprint actual
- Crear issues nuevos si aparecen bugs
```

### 3. Cierre de Sesión
```
Usuario dice: "Finalizamos la sesión"

Copilot ejecuta automáticamente:
1. Guardar docs/sessions/YYYY-MM-DD--HH-MM--titulo.md
   - Objetivos
   - Cambios realizados
   - Archivos modificados
   - Comandos ejecutados
   - Errores encontrados
   - Pendientes

2. Actualizar docs/sessions/INDEX.md
   - Agregar nueva entrada

3. Actualizar docs/CHANGELOG.md
   - Versión nueva si corresponde
   - Features/fixes de la sesión

4. Actualizar docs/sprints/actual.md
   - Marcar tareas completadas
   - Agregar nuevas si aparecieron

5. Actualizar docs/BACKLOG.md
   - Nuevas tareas pendientes
   - Prioridades ajustadas

6. Resumen al usuario:
   "✅ Sesión guardada
   📝 Cambios: X archivos
   ✨ Completado: Y tareas
   📌 Pendientes: Z items"
```

---

## 📊 Backlog y Priorización

### Estados de Tareas
- 🆕 **New:** Recién creada, sin analizar
- 🔍 **Analyzed:** Analizada, lista para tomar
- 🏃 **In Progress:** En desarrollo actual
- ✅ **Done:** Completada y validada
- 🚫 **Blocked:** Bloqueada por dependencia
- ❄️ **Frozen:** Pospuesta indefinidamente

### Prioridades (MoSCoW)
- **Must Have:** Crítico, sin esto no funciona
- **Should Have:** Importante, alta prioridad
- **Could Have:** Deseable, media prioridad
- **Won't Have (now):** No para este sprint/versión

### Formato de Tarea
```markdown
### [MUST] Implementar autenticación JWT
- **Módulo:** Shared / Auth
- **Estado:** 🏃 In Progress
- **Estimación:** 4 horas
- **Asignado:** Usuario + Copilot
- **Issue:** #12
- **Notas:** Necesario para todos los módulos
```

---

## 🏃 Metodología Ágil Adaptada

### Daily Standup (Inicio de Sesión)
```
¿Qué hicimos la última sesión?
¿Qué haremos hoy?
¿Hay blockers?
```

### Sprint Planning (Inicio de Sprint)
```
- Revisar backlog
- Seleccionar features/issues para sprint
- Definir Definition of Done
- Estimar esfuerzo (tallas: XS, S, M, L, XL)
```

### Sprint Review (Fin de Sprint)
```
- Demo de funcionalidades completadas
- Actualizar CHANGELOG con versión
- Deploy a producción si corresponde
```

### Sprint Retrospective (Fin de Sprint)
```
¿Qué salió bien? ✅
¿Qué salió mal? ❌
¿Qué mejoramos para próximo sprint? 🔄
```

---

## 🎫 Sistema de Issues

### Tipos
- 🐛 **Bug:** Algo no funciona
- ✨ **Feature:** Nueva funcionalidad
- 🔧 **Improvement:** Mejora de algo existente
- 📝 **Docs:** Documentación
- 🚀 **Deploy:** Relacionado con deployment
- 🧪 **Test:** Testing y validaciones

### Plantilla de Issue
```markdown
## [BUG] Paginación no muestra item #129

**Módulo:** Alacena / Items
**Prioridad:** Must Have
**Estado:** 🏃 In Progress

**Descripción:**
Al crear el item #129 "prueba", no aparece en la lista.

**Reproducción:**
1. Ir a /dashboard/items
2. Observar que solo aparecen 50 items

**Causa:**
Falta implementar paginación (GET sin query params)

**Solución:**
- [ ] Crear hook usePagination
- [ ] Agregar PaginationControls component
- [ ] Actualizar 3 páginas (items, locations, menu)

**Archivos:**
- frontend/shared/hooks/usePagination.ts
- frontend/shared/components/PaginationControls.tsx
- ...

**Relacionado:** Sprint 2026-01-W04
```

---

## 📈 Versionado (Semantic Versioning)

### Formato: `MAJOR.MINOR.PATCH`

- **MAJOR (1.x.x):** Cambios incompatibles (breaking changes)
- **MINOR (x.1.x):** Nueva funcionalidad retrocompatible
- **PATCH (x.x.1):** Bug fixes, mejoras menores

### Etiquetas
- `v1.0.0-alpha.1` - Versión temprana, inestable
- `v1.0.0-beta.1` - Feature-complete, testeando
- `v1.0.0-rc.1` - Release candidate, casi listo
- `v1.0.0` - Producción estable

### Ejemplo de Progreso
```
v0.1.0 - Alacena inicial (MVP)
v0.2.0 - Autenticación + Dashboard
v0.3.0 - Sistema de Taras
v1.0.0 - ECO Platform lanzamiento
v1.1.0 - Módulo Mantia agregado
v1.2.0 - Módulo Salud agregado
```

---

## 🤝 Onboarding de Nuevos Devs

### Día 1: Setup (2 horas)
```
1. Leer docs/ONBOARDING.md
2. Clonar repo + instalar dependencias
3. Levantar backend + frontend local
4. Hacer primer test: crear un item
5. Leer docs/architecture/OVERVIEW.md
```

### Día 2-3: Arquitectura (4 horas)
```
1. Revisar docs/architecture/ completo
2. Entender schema de DB (docs/architecture/DATABASE.md)
3. Ver cómo funciona autenticación
4. Explorar código de Alacena (módulo de referencia)
```

### Día 4-5: Primera Tarea (6 horas)
```
1. Asignar issue simple (Could Have)
2. Seguir flujo: branch → código → test → PR
3. Code review con mentor
4. Merge + deploy a dev
```

### Semana 2+: Autonomía
```
1. Tomar tareas Should Have
2. Participar en sprint planning
3. Proponer mejoras
```

---

## 📱 Herramientas Sugeridas

### Control de Versiones
- **Git + GitHub:** Para código y branches
- **GitHub Projects:** Para sprints y backlog (opcional)
- **GitHub Issues:** Para tracking de bugs/features

### Documentación
- **Markdown:** Simple, versionable con git
- **Draw.io / Excalidraw:** Diagramas de arquitectura
- **Notion / Obsidian:** Docs colaborativas (opcional)

### Comunicación
- **Slack / Discord:** Mensajes rápidos del equipo
- **GitHub Discussions:** Decisiones técnicas documentadas

---

## ✅ Checklist de Calidad

Antes de cerrar una feature/issue:

- [ ] Código testeado manualmente
- [ ] Sin errores en consola
- [ ] Funciona en dev + producción
- [ ] Documentación actualizada
- [ ] Types generados (si tocás Prisma)
- [ ] Variables de entorno documentadas
- [ ] CHANGELOG actualizado
- [ ] Issue marcado como Done

---

## 🎯 Próximos Pasos

1. **Crear estructura de docs/** según esquema propuesto
2. **Iniciar Sprint 2026-01-W04** con objetivo: "Módulo Mantia MVP"
3. **Primera sesión con nuevo sistema:** Probar flujo completo
4. **Ajustar según feedback:** Iterar en retrospectiva

---

*Sistema de gestión creado: 2026-01-25*
*Última actualización: 2026-01-25*
