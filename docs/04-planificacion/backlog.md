# 📋 Backlog Maestro

**Última actualización:** 04 Febrero 2026  
**Sprint actual:** Sprint 0

---

## 🎯 Propósito

Consolidación de todas las épicas, historias de usuario e issues del proyecto ECO. Fuente centralizada para planificación de sprints.

---

## 📊 Estado General

| Estado | Épicas | Historias | Issues |
|--------|--------|-----------|--------|
| ✅ Completado | 1 | 8 | 15 |
| ⏳ En progreso | 1 | 3 | 5 |
| 📋 Planificado | 3 | 12 | 0 |
| **Total** | **5** | **23** | **20** |

---

## 🎯 Épicas

### EP-01: Base ECO ✅
**Estado:** Completado  
**Sprint:** Sprint 0 y anteriores

**Objetivo:** Infraestructura base del sistema (autenticación, hogares, navegación)

**Historias:**
- ✅ BASE-01: Autenticación básica (email/password)
- ✅ BASE-02: Gestión de hogares
- ✅ BASE-03: Navegación principal
- ✅ BASE-04: Deploy a producción

---

### EP-02: ALACENA MVP ⏳
**Estado:** Parcialmente completado  
**Sprint:** Sprints previos + Sprint 1

**Objetivo:** Gestión completa de inventario doméstico

**Historias completadas:**
- ✅ ALA-01: CRUD de items
- ✅ ALA-02: Registro de movimientos
- ✅ ALA-03: Vista de stock
- ✅ ALA-04: Sistema de taras automáticas

**Historias pendientes:**

#### ALA-05: Categorización y filtros
**Issue:** [#33](https://github.com/falberio/eco/issues/33)  
**Estado:** ⏳ En progreso  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **organizar items por categorías y filtrarlos**  
Para **encontrar rápidamente lo que busco**

**Criterios de Aceptación:**
1. **Categorías existentes:** Usar modelo actual (si existe campo `categoria` en `Item`) o agregar
2. **Categorías sugeridas:** Almacén, Bebidas, Condimentos, Lácteos, Frescos, Limpieza, Otro
3. **Asignación:** Al crear/editar item, select de categoría (default "Otro")
4. **Filtro:** En `/alacena`, dropdown "Todas las categorías" + opciones individuales
5. **Visual:** Badge de color por categoría en card de item

**Notas Técnicas:**
- Verificar si `Item` ya tiene campo `category` o similar en Prisma
- Si no existe, agregar campo `categoria String?` con migración
- Frontend: Filtro en header de `/alacena`, mantener estado en query param `?categoria=`

**Dependencias:**
- ALA-01 (CRUD items - ya completado)

**DoD:**
- [ ] Campo categoría en modelo (si no existe)
- [ ] Select en formulario item
- [ ] Filtro dropdown funcionando
- [ ] Badges visibles
- [ ] Deployado a producción

---

#### ALA-06: Estados de stock (bajo, normal, alto)
**Issue:** [#34](https://github.com/falberio/eco/issues/34)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **ver indicadores visuales de estado de stock (bajo, normal, alto)**  
Para **saber qué reponer**

**Criterios de Aceptación:**
1. **Cálculo stock:** Según implementación actual (sumar `Reserve` activas o leer `Item.currentStock_g`)
2. **Umbrales sugeridos:**
   - Bajo: stock < 20% del promedio histórico o < umbral fijo (100g / 2 unidades)
   - Normal: 20% ≤ stock ≤ 80%
   - Alto: stock > 80%
3. **Indicadores visuales:**
   - Bajo: Badge rojo "Stock bajo" + ícono ⚠️
   - Normal: Sin badge (estado default)
   - Alto: Badge verde "Stock alto" (opcional)
4. **Acción rápida:** Items con stock bajo muestran botón "→ Lista" (integración LST-02)
5. **Vista filtrada:** Toggle "Solo stock bajo" en `/alacena` para ver items críticos

**Notas Técnicas:**
- Función backend: `getStockStatus(item: Item): "bajo" | "normal" | "alto"`
- Umbral: Por ahora hardcodeado, futuro: configurable por item
- Frontend: Badge condicional en card de item

**Dependencias:**
- ALA-03 (vista de stock - ya completado)
- LST-02 (botón "→ Lista" - de Sprint 1)

**DoD:**
- [ ] Función cálculo estado implementada
- [ ] Badges visibles según estado
- [ ] Toggle "Solo stock bajo" funciona
- [ ] Botón "→ Lista" integrado
- [ ] Deployado a producción

---

#### ALA-07: Búsqueda de items
**Issue:** [#35](https://github.com/falberio/eco/issues/35)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **buscar items por nombre o categoría**  
Para **encontrar rápidamente uno específico**

**Criterios de Aceptación:**
1. **Input búsqueda:** En `/alacena`, input text en header con placeholder "Buscar items..."
2. **Búsqueda en tiempo real:** Al escribir, filtrar items por coincidencia en `nombre` (case-insensitive, parcial)
3. **Resultados:** Mostrar items que incluyan el texto en nombre, resaltar coincidencia
4. **Búsqueda vacía:** Si no hay resultados, mostrar "No se encontraron items" + botón "Limpiar búsqueda"
5. **Combinación filtros:** Búsqueda + filtro categoría funcionan juntos (AND lógico)

**Notas Técnicas:**
- Query backend: `WHERE nombre ILIKE %:query%` (PostgreSQL)
- Frontend: Debounce 300ms para evitar queries excesivas
- State: Mantener búsqueda en query param `?q=`

**Dependencias:**
- ALA-01 (CRUD items - ya completado)
- ALA-05 (filtro categoría - en progreso)

**DoD:**
- [ ] Input búsqueda funcionando
- [ ] Filtrado en tiempo real OK
- [ ] Debounce implementado
- [ ] Combinación con filtros correcta
- [ ] Deployado a producción

---

### EP-03: MANTIA MVP 📋
**Estado:** Planificado  
**Sprint:** Sprint 1

**Objetivo:** Gestión de tareas y mantenimiento del hogar

**Historias:**

#### MAN-01: CRUD de tareas
**Issue:** [#18](https://github.com/falberio/eco/issues/18)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **crear, editar y eliminar tareas de mantenimiento**  
Para **organizar las actividades recurrentes del hogar**

**Criterios de Aceptación:**
1. **Crear tarea:** Formulario con campos: título (req), descripción (opt), categoría (select: Limpieza, Cocina, Jardín, Mascotas, Mantenimiento, Otro), periodicidad (select: null, diaria, semanal, mensual), estado inicial "activa"
2. **Editar tarea:** Modificar cualquier campo excepto `id`, `created_at`, actualizar `updated_at` automáticamente
3. **Eliminar tarea:** Confirmación antes de eliminar, eliminar también todas las ejecuciones asociadas (cascade)
4. **Validaciones:** Título max 100 caracteres, descripción max 500, categoría en enum válido
5. **UX móvil:** Formulario usable en pantalla <400px, botón guardar siempre visible

**Notas Técnicas:**
- Prisma schema: `Task` con campos según `docs/02-documento-funcional.md` sección 4.3
- Rutas API: `POST /api/tasks`, `PUT /api/tasks/:id`, `DELETE /api/tasks/:id`
- Frontend: `app/mantia/tareas/nueva` y `app/mantia/tareas/[id]/editar`

**Dependencias:**
- Ninguna (historia base)

**DoD:**
- [ ] Migración Prisma aplicada en dev y prod
- [ ] CRUD completo backend con validaciones Zod
- [ ] UI formulario responsive
- [ ] Probado en móvil (Chrome Android)
- [ ] Deployado a producción

---

#### MAN-02: Marcar tarea como hecha
**Issue:** [#19](https://github.com/falberio/eco/issues/19)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **marcar una tarea como completada con un botón rápido**  
Para **registrar que la hice sin pasos adicionales**

**Criterios de Aceptación:**
1. **Botón quick-complete:** En vista de pendientes (MAN-04), botón "✓ Hecho" visible en cada tarea
2. **Acción:** Al presionar, crear registro en `TaskExecution` con `fecha` = now, `user_id` = usuario actual, `notas` = null
3. **Feedback visual:** Toast "Tarea completada" + actualizar lista sin reload
4. **Cálculo automático:** Si tarea tiene `periodicidad`, calcular y actualizar `proxima_sugerida` (ver MAN-05)
5. **UX:** Botón accesible con pulgar derecho en móvil, confirmación NO requerida (acción reversible)

**Notas Técnicas:**
- Endpoint: `POST /api/tasks/:id/complete` (crea ejecución + actualiza próxima fecha)
- Lógica de cálculo de próxima fecha: reusar función de MAN-05
- Frontend: Optimistic update con revert si falla

**Dependencias:**
- MAN-01 (tareas deben existir)
- MAN-03 (modelo TaskExecution)
- MAN-05 (lógica de periodicidad)

**DoD:**
- [ ] Endpoint `/complete` funcionando
- [ ] Toast confirmación visible
- [ ] Próxima fecha calculada correctamente
- [ ] Probado en móvil
- [ ] Deployado a producción

---

#### MAN-03: Registrar ejecución
**Issue:** [#20](https://github.com/falberio/eco/issues/20)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **registrar cuándo completé una tarea con notas opcionales**  
Para **tener historial de ejecuciones**

**Criterios de Aceptación:**
1. **Modelo TaskExecution:** Campos según `docs/02-documento-funcional.md` sección 4.3: `id`, `task_id`, `fecha`, `user_id`, `notas`
2. **Crear ejecución:** Modal/formulario con fecha (default hoy), notas opcional (textarea), botón "Registrar"
3. **Acceso:** Desde vista de tarea individual, botón "Registrar ejecución manual"
4. **Validaciones:** `fecha` no puede ser futura, `notas` max 500 caracteres, `task_id` debe existir
5. **Historial:** Ver últimas 5 ejecuciones en vista de tarea individual

**Notas Técnicas:**
- Prisma schema: `TaskExecution` con relación a `Task`
- Rutas API: `POST /api/tasks/:id/executions`, `GET /api/tasks/:id/executions?limit=5`
- Frontend: Modal con DatePicker (default hoy)

**Dependencias:**
- MAN-01 (tareas deben existir)

**DoD:**
- [ ] Migración Prisma aplicada
- [ ] CRUD ejecuciones backend
- [ ] Modal registro funcionando
- [ ] Historial visible
- [ ] Deployado a producción

---

#### MAN-04: Vista de pendientes
**Issue:** [#21](https://github.com/falberio/eco/issues/21)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **ver una lista de tareas pendientes ordenadas por prioridad**  
Para **saber qué hacer hoy**

**Criterios de Aceptación:**
1. **Vista principal MANTIA:** Ruta `/mantia` muestra tareas con `estado = "activa"`
2. **Ordenamiento:** Por `proxima_sugerida` ASC (las más urgentes primero), null al final
3. **Información por tarea:** Título, categoría (badge), próxima fecha (relativa: "Hoy", "Hace 3 días", "En 2 días"), botón "✓ Hecho" (MAN-02)
4. **Indicador urgencia:** Color rojo si `proxima_sugerida < hoy`, amarillo si hoy, verde si futuro
5. **Vacío:** Si no hay tareas, mostrar estado vacío: "No tienes tareas pendientes" + botón "Crear primera tarea"

**Notas Técnicas:**
- Query Prisma: `where: { estado: "activa" }, orderBy: { proxima_sugerida: "asc" }`
- Frontend: Card list con scroll infinito (límite inicial 20, cargar más)
- Cálculo fechas relativas: usar `date-fns` (formatDistanceToNow)

**Dependencias:**
- MAN-01 (tareas deben existir)
- MAN-05 (cálculo de próxima fecha)

**DoD:**
- [ ] Vista `/mantia` renderiza lista
- [ ] Ordenamiento correcto
- [ ] Indicadores de urgencia visibles
- [ ] Probado en móvil
- [ ] Deployado a producción

---

#### MAN-05: Cálculo de próxima fecha (periodicidad)
**Issue:** [#22](https://github.com/falberio/eco/issues/22)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** L

**Historia:**
Como **usuario del hogar**  
Quiero **que el sistema calcule automáticamente cuándo debo hacer una tarea recurrente**  
Para **no tener que acordarme manualmente**

**Criterios de Aceptación:**
1. **Lógica de cálculo:** Según `periodicidad`:
   - `"diaria"`: `proxima_sugerida = última_ejecución + 1 día`
   - `"semanal"`: `proxima_sugerida = última_ejecución + 7 días`
   - `"mensual"`: `proxima_sugerida = última_ejecución + 1 mes` (mismo día del mes, ajustar si no existe)
   - `null` (única): `proxima_sugerida = null` (no recalcular)
2. **Trigger:** Al crear `TaskExecution` (MAN-02 o MAN-03), actualizar `Task.proxima_sugerida` automáticamente
3. **Inicialización:** Al crear tarea con periodicidad, `proxima_sugerida = created_at` (primera vez es inmediata)
4. **Edge cases:** Si `periodicidad = mensual` y día no existe en mes siguiente (ej: 31 Feb), usar último día del mes
5. **Tests:** Casos de prueba para todas las periodicidades + edge cases

**Notas Técnicas:**
- Función backend: `calculateNextDate(task: Task, lastExecution: TaskExecution): Date | null`
- Usar librería `date-fns` (addDays, addWeeks, addMonths, lastDayOfMonth)
- IMPORTANTE: NO usar cron jobs ni scheduled tasks (ADR-004)

**Dependencias:**
- MAN-01 (tareas con periodicidad)
- MAN-03 (ejecuciones)

**DoD:**
- [ ] Función `calculateNextDate` implementada
- [ ] Tests unitarios pasando (6+ casos)
- [ ] Integrado en MAN-02 y MAN-03
- [ ] Probado con datos reales
- [ ] Deployado a producción

---

#### MAN-06: Filtros por estado
**Issue:** [#23](https://github.com/falberio/eco/issues/23)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **filtrar tareas por estado (activa, pausada, completada)**  
Para **ver solo las que me interesan**

**Criterios de Aceptación:**
1. **Tabs en `/mantia`:** "Activas" (default), "Pausadas", "Completadas"
2. **Query por tab:**
   - Activas: `estado = "activa"`
   - Pausadas: `estado = "pausada"`
   - Completadas: `estado = "completada"`
3. **Contador:** Badge en cada tab con número de tareas (ej: "Activas (5)")
4. **Persistencia:** Al navegar entre tabs, mantener scroll y no recargar innecesariamente
5. **UX:** Tabs sticky en top al hacer scroll

**Notas Técnicas:**
- Frontend: State management con query params `?estado=activa|pausada|completada`
- Backend: Endpoint acepta `?estado=` filter
- Cache cliente: Invalidar al crear/editar/eliminar tarea

**Dependencias:**
- MAN-01 (CRUD tareas)
- MAN-04 (vista pendientes)

**DoD:**
- [ ] Tabs funcionando
- [ ] Contadores actualizados
- [ ] Query params en URL
- [ ] Probado en móvil
- [ ] Deployado a producción

---

#### MAN-07: Categorización de tareas
**Issue:** [#24](https://github.com/falberio/eco/issues/24)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **organizar tareas por categorías (Limpieza, Cocina, Jardín, etc.)**  
Para **visualizarlas agrupadas**

**Criterios de Aceptación:**
1. **Categorías predefinidas:** Limpieza, Cocina, Jardín, Mascotas, Mantenimiento, Otro (enum en backend)
2. **Asignación:** Al crear/editar tarea (MAN-01), select de categoría (default "Otro")
3. **Filtro adicional:** En `/mantia`, dropdown "Todas las categorías" + opciones individuales
4. **Visual:** Badge de color por categoría (Limpieza=azul, Cocina=naranja, Jardín=verde, etc.)
5. **Combinación filtros:** Filtro categoría + filtro estado (tabs) funcionan juntos

**Notas Técnicas:**
- Campo `categoria` en `Task` model (String? nullable, default null)
- Enum validación backend: `["Limpieza", "Cocina", "Jardín", "Mascotas", "Mantenimiento", "Otro"]`
- Frontend: Select en formulario + filter dropdown en lista

**Dependencias:**
- MAN-01 (CRUD tareas)
- MAN-04 (vista pendientes)

**DoD:**
- [ ] Campo categoría en modelo
- [ ] Select en formulario
- [ ] Filtro dropdown funcionando
- [ ] Badges de color visibles
- [ ] Deployado a producción

---

### EP-04: Lista de Compras 📋
**Estado:** Planificado  
**Sprint:** Sprint 1

**Objetivo:** Lista transversal alimentada por módulos

**Historias:**

#### LST-01: CRUD manual de items
**Issue:** [#25](https://github.com/falberio/eco/issues/25)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **agregar, editar y eliminar items manualmente en la lista de compras**  
Para **recordar qué comprar**

**Criterios de Aceptación:**
1. **Crear item:** Formulario con campos: nombre (req), cantidad (opt, number), unidad (opt, select: unidades, kg, litros, paquetes, otro), estado inicial "pendiente", origen "manual"
2. **Editar item:** Modificar nombre, cantidad, unidad de items `estado = "pendiente"`
3. **Eliminar item:** Confirmación antes de eliminar (solo items "pendiente")
4. **Validaciones:** Nombre max 100 caracteres, cantidad > 0 si se especifica
5. **UX móvil:** Input nombre con autocomplete de items anteriores, botón "+" floating para agregar rápido

**Notas Técnicas:**
- Prisma schema: `ShoppingListItem` según `docs/02-documento-funcional.md` sección 4.4
- Rutas API: `POST /api/shopping-list`, `PUT /api/shopping-list/:id`, `DELETE /api/shopping-list/:id`
- Frontend: `app/lista` con formulario inline

**Dependencias:**
- Ninguna (historia base)

**DoD:**
- [ ] Migración Prisma aplicada
- [ ] CRUD backend funcionando
- [ ] UI formulario responsive
- [ ] Autocomplete funcionando
- [ ] Deployado a producción

---

#### LST-02: Agregar desde ALACENA (stock bajo)
**Issue:** [#26](https://github.com/falberio/eco/issues/26)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **agregar automáticamente a la lista los items con stock bajo en ALACENA**  
Para **no olvidar reponerlos**

**Criterios de Aceptación:**
1. **Indicador stock bajo:** En `/alacena`, items con stock < umbral muestran badge "Stock bajo" + botón "→ Lista"
2. **Agregar a lista:** Al presionar "→ Lista", crear `ShoppingListItem` con `origen = "alacena"`, `origen_ref_id = item.id`, `nombre = item.nombre`, `cantidad = null` (usuario define al comprar)
3. **Evitar duplicados:** Si ya existe item pendiente con mismo `origen_ref_id`, mostrar toast "Ya está en la lista"
4. **Feedback:** Toast "Agregado a lista de compras" + contador en badge de Lista (navbar)
5. **Sincronización:** Al marcar como comprado (LST-03), NO actualizar automáticamente stock en ALACENA (eso se hace al registrar ingreso manual)

**Notas Técnicas:**
- Lógica stock bajo: Leer de `Item.currentStock_g` o calcular desde `Reserve` activas (según implementación actual)
- Umbral: Hardcodeado por ahora (ej: < 100g o < 2 unidades), futuro: configurable por item
- Frontend: Botón "→ Lista" en card de item en `/alacena`

**Dependencias:**
- LST-01 (modelo ShoppingListItem)
- ALA-03 (vista de stock)

**DoD:**
- [ ] Indicador stock bajo visible
- [ ] Botón "→ Lista" funcionando
- [ ] Validación duplicados OK
- [ ] Toast confirmación
- [ ] Deployado a producción

---

#### LST-03: Marcar como comprado
**Issue:** [#27](https://github.com/falberio/eco/issues/27)  
**Estado:** 📋 Planificado  
**Prioridad:** P1  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **marcar items como comprados con un checkbox**  
Para **saber qué me falta**

**Criterios de Aceptación:**
1. **Checkbox:** En `/lista`, cada item pendiente tiene checkbox a la izquierda
2. **Acción:** Al marcar, actualizar `estado = "comprado"`, agregar timestamp `updated_at`
3. **Visual:** Items comprados se tachan (line-through) y mueven al final de la lista
4. **Deshacer:** Checkbox de items comprados permite desmarcar (vuelve a `estado = "pendiente"`)
5. **Limpiar:** Botón "Limpiar comprados" elimina todos los items `estado = "comprado"` con confirmación

**Notas Técnicas:**
- Endpoint: `PATCH /api/shopping-list/:id/toggle-status` (alterna pendiente ↔ comprado)
- Frontend: Optimistic update, revert si falla
- CSS: `.item-comprado { text-decoration: line-through; opacity: 0.6; }`

**Dependencias:**
- LST-01 (CRUD manual)

**DoD:**
- [ ] Checkbox funcionando
- [ ] Toggle pendiente ↔ comprado OK
- [ ] Botón "Limpiar" funcionando
- [ ] Line-through visible
- [ ] Deployado a producción

---

#### LST-04: Vista por categorías
**Issue:** [#28](https://github.com/falberio/eco/issues/28)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **ver la lista agrupada por categorías (Almacén, Verdulería, Carnicería, etc.)**  
Para **optimizar mi recorrido en el super**

**Criterios de Aceptación:**
1. **Toggle vista:** En `/lista`, botón toggle "Agrupar por categorías" (default OFF)
2. **Agrupación:** Al activar, agrupar items por categoría inferida del nombre o origen:
   - Si `origen = "alacena"`, usar categoría del `Item` de ALACENA
   - Si `origen = "manual"`, inferir de nombre (ej: "Tomate" → Verdulería, "Pan" → Panadería) o usar "Otros"
3. **Categorías sugeridas:** Almacén, Verdulería, Carnicería, Panadería, Bebidas, Limpieza, Otros
4. **Ordenamiento:** Categorías alfabéticas, items dentro de categoría alfabéticos
5. **Persistencia:** Estado del toggle en localStorage

**Notas Técnicas:**
- Lógica inferencia: Función `inferCategory(nombre: string): string` en backend/frontend (diccionario de palabras clave)
- Frontend: State toggle con re-render agrupado
- Futuro: Permitir al usuario editar categoría manualmente

**Dependencias:**
- LST-01 (CRUD manual)
- LST-02 (items desde ALACENA)

**DoD:**
- [ ] Toggle funcionando
- [ ] Agrupación correcta
- [ ] Inferencia básica funcionando
- [ ] LocalStorage persistiendo estado
- [ ] Deployado a producción

---

#### LST-05: Sugerencias basadas en historial
**Issue:** [#29](https://github.com/falberio/eco/issues/29)  
**Estado:** 📋 Planificado  
**Prioridad:** P3  
**Sprint:** 1 (si hay tiempo) / Sprint 2  
**Estimación:** L

**Historia:**
Como **usuario del hogar**  
Quiero **que el sistema me sugiera items que compro frecuentemente**  
Para **agregar rápido sin escribir**

**Criterios de Aceptación:**
1. **Análisis historial:** Al abrir `/lista`, analizar últimos 30 días de items `estado = "comprado"`
2. **Sugerencias:** Si un item fue comprado ≥ 3 veces en 30 días, mostrarlo en sección "Sugerencias" al top
3. **Agregar sugerido:** Botón "+" en cada sugerencia agrega a lista pendiente (mismo flujo LST-01)
4. **Límite:** Mostrar max 5 sugerencias
5. **Ocultar:** Botón "✕" en sugerencia la oculta por 7 días (guardar en localStorage o tabla `HiddenSuggestions`)

**Notas Técnicas:**
- Query: `SELECT nombre, COUNT(*) FROM ShoppingListItem WHERE estado='comprado' AND updated_at > NOW() - INTERVAL '30 days' GROUP BY nombre HAVING COUNT(*) >= 3 ORDER BY COUNT(*) DESC LIMIT 5`
- Frontend: Sección colapsable "📝 Sugerencias" al top de `/lista`
- Caché: Calcular sugerencias cada 24h (no en cada visit)

**Dependencias:**
- LST-01 (CRUD manual)
- LST-03 (marcar comprado - genera historial)

**DoD:**
- [ ] Query historial funcionando
- [ ] Sugerencias renderizadas
- [ ] Botón "+" agrega a lista
- [ ] Ocultar sugerencia funciona
- [ ] Deployado a producción

---

### EP-05: ECOSALUD Básico 📋
**Estado:** Planificado  
**Sprint:** Sprint 1 (mínimo)

**Objetivo:** Registro mínimo de salud y bienestar

**Historias:**

#### ECO-01: Registro manual de datos
**Issue:** [#30](https://github.com/falberio/eco/issues/30)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **registrar manualmente datos de salud (peso, presión, notas)**  
Para **hacer seguimiento de mi bienestar**

**Criterios de Aceptación:**
1. **Formulario registro:** Campos: fecha (default hoy), tipo (select: Peso, Presión, Nota), valor (number si peso/presión, textarea si nota), unidad (auto según tipo: kg, mmHg, null)
2. **Crear registro:** `POST /api/health-records` crea `HealthRecord` con `household_id`, `user_id`, `tipo`, `valor`, `unidad`, `fecha`, `notas`
3. **Validaciones:** 
   - Peso: 20 < valor < 300 kg
   - Presión: formato "120/80" (dos números separados por `/`)
   - Nota: max 1000 caracteres
   - Fecha no puede ser futura
4. **UX:** Formulario rápido en `/ecosalud` con botón floating "+", campos pre-rellenados según `tipo` seleccionado
5. **Feedback:** Toast "Registro guardado" + actualizar vista cronológica (ECO-02)

**Notas Técnicas:**
- Prisma schema: `HealthRecord` según `docs/02-documento-funcional.md` sección 4.5
- Campos: `id`, `household_id`, `user_id`, `tipo`, `valor`, `unidad`, `fecha`, `notas`, `created_at`
- Tipo enum: `["Peso", "Presión", "Nota", "Glucosa", "Temperatura"]` (extensible)

**Dependencias:**
- Ninguna (historia base)

**DoD:**
- [ ] Migración Prisma aplicada
- [ ] Formulario funcionando
- [ ] Validaciones OK
- [ ] Toast confirmación
- [ ] Deployado a producción

---

#### ECO-02: Histórico cronológico
**Issue:** [#31](https://github.com/falberio/eco/issues/31)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** M

**Historia:**
Como **usuario del hogar**  
Quiero **ver un listado cronológico de todos mis registros de salud**  
Para **revisar mi evolución**

**Criterios de Aceptación:**
1. **Vista `/ecosalud`:** Timeline vertical con registros ordenados por `fecha` DESC (más reciente arriba)
2. **Información por registro:** Fecha (relativa: "Hoy 15:30", "Ayer", "Hace 3 días"), tipo (badge), valor + unidad, notas si existen
3. **Paginación:** Cargar inicial 20 registros, botón "Cargar más" al final (infinite scroll opcional)
4. **Filtro rápido:** Mostrar solo registros del usuario actual (multi-usuario: toggle "Ver todos del hogar")
5. **Vacío:** Si no hay registros, estado vacío: "Aún no tienes registros" + botón "Crear primer registro"

**Notas Técnicas:**
- Query: `GET /api/health-records?user_id=:id&limit=20&offset=0`
- Frontend: Timeline con cards, usar `date-fns` para fechas relativas
- Optimización: Index en `(household_id, user_id, fecha DESC)` para query performance

**Dependencias:**
- ECO-01 (registros deben existir)

**DoD:**
- [ ] Vista timeline renderiza
- [ ] Ordenamiento cronológico correcto
- [ ] Paginación funcionando
- [ ] Estado vacío visible
- [ ] Deployado a producción

---

#### ECO-03: Tipos de registro (peso, presión, notas)
**Issue:** [#32](https://github.com/falberio/eco/issues/32)  
**Estado:** 📋 Planificado  
**Prioridad:** P2  
**Sprint:** 1  
**Estimación:** S

**Historia:**
Como **usuario del hogar**  
Quiero **filtrar registros por tipo (Peso, Presión, Nota)**  
Para **ver solo la información relevante**

**Criterios de Aceptación:**
1. **Tabs en `/ecosalud`:** "Todos" (default), "Peso", "Presión", "Notas"
2. **Query por tab:**
   - Todos: sin filtro de tipo
   - Peso: `tipo = "Peso"`
   - Presión: `tipo = "Presión"`
   - Notas: `tipo = "Nota"`
3. **Contador:** Badge en cada tab con número de registros últimos 30 días (ej: "Peso (12)")
4. **Visual específica:** 
   - Peso: Gráfico de línea simple (opcional, si hay tiempo)
   - Presión: Mostrar sistólica/diastólica separados
   - Notas: Card expandible con texto completo
5. **Persistencia:** Tab seleccionado en query param `?tipo=Peso`

**Notas Técnicas:**
- Frontend: State management con query params
- Backend: Endpoint acepta `?tipo=` filter
- Gráfico peso: Usar `recharts` o `chart.js` (simplificado: solo últimos 10 registros)

**Dependencias:**
- ECO-01 (registros existentes)
- ECO-02 (vista cronológica base)

**DoD:**
- [ ] Tabs funcionando
- [ ] Filtros por tipo OK
- [ ] Contadores actualizados
- [ ] Visual específica por tipo
- [ ] Deployado a producción

---

## 📅 Backlog por Sprint

### Sprint 0 (01-09 Feb 2026)
**Objetivo:** Marco del producto

**Issues:**
- ✅ #001: Estructura documental
- ⏳ #002: Migración a Markdown
- ⏳ #003: Configuración MkDocs
- 📋 #004: Backlog detallado Sprint 1
- 📋 #005: Plan de proyecto completo

---

### Sprint 1 (10-23 Feb 2026)
**Objetivo:** MVP operable

**Historias planificadas:**
- MAN-01 a MAN-07 (MANTIA completo)
- LST-01 a LST-04 (Lista básica)
- ECO-01 a ECO-03 (ECOSALUD mínimo)
- ALA-05 a ALA-07 (ALACENA mejoras)

**Criterio de éxito:**
- ✅ ≥ 20 registros reales en la semana
- ✅ Uso diario durante 7 días consecutivos
- ✅ Sin bloqueos críticos en flujo

---

## 🔖 Convenciones

### Estados
- ✅ **Completado** - Deployed y funcionando
- ⏳ **En progreso** - En desarrollo activo
- 📋 **Planificado** - Definido pero no iniciado
- 🔴 **Bloqueado** - Impedimento identificado

### Prioridades
- **P1** - Crítico para MVP
- **P2** - Importante pero no bloqueante
- **P3** - Deseable / Mejora

### Labels de GitHub
- `type:feature` - Funcionalidad nueva
- `type:bug` - Corrección de error
- `type:tech` - Tarea técnica
- `module:alacena` / `module:mantia` / etc.
- `sprint:N` - Sprint asignado

---

## 📝 Plantilla de Historia de Usuario

```markdown
### [MÓDULO]-[##]: [Título]

**Estado:** 📋 Planificado | ⏳ En progreso | ✅ Completado
**Prioridad:** P1 | P2 | P3
**Sprint:** N
**Estimación:** S | M | L | XL

**Historia:**
Como [ROL]
Quiero [ACCIÓN]
Para [BENEFICIO]

**Criterios de Aceptación:**
1. [CRITERIO 1]
2. [CRITERIO 2]
3. [CRITERIO 3]

**Notas Técnicas:**
- [Detalle técnico relevante]

**Dependencias:**
- [Historia dependiente]

**DoD:**
- [ ] Código mergeado a main
- [ ] Migraciones aplicadas (si aplica)
- [ ] Probado en móvil
- [ ] Deployado a producción
```

---

## 🔗 Enlaces

- [Documento Funcional](../02-documento-funcional.md)
- [Roadmap](roadmap.md)
- [Sprints](sprints.md)
- [GitHub Issues](https://github.com/falberio/eco/issues)

---

**Última actualización:** 04 Febrero 2026 - 19:45h  
**Próxima revisión:** Sesión 7 (05 Feb 2026) - Crear issues GitHub
