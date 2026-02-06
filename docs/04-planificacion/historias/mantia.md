# 📋 MANTIA - Gestión de Tareas del Hogar (100 historias)

**Fecha:** 5 de febrero de 2026  
**Módulo:** MANTIA  
**Propósito:** Gestión inteligente de todas las tareas domésticas: limpieza, mantenimiento, compras, turnos, trámites — con recurrencia, colaboración, automatización e integración con el resto de ECO.

> *"Que la casa se mantenga sola. MANTIA piensa, vos ejecutás."*

**Características clave:**
- 🔧 Tareas recurrentes con lógica avanzada (semanal, mensual, estacional)
- 👥 Colaboración familiar con roles, asignación y estadísticas
- 📊 Gamificación: rachas, puntos, logros, ranking del hogar
- 🤖 IA: sugerencias, detección de hábitos, reordenamiento inteligente
- 🔌 Integraciones: Google Calendar, Notion, IoT, FINANCIA, HUESHA
- 📱 Notificaciones inteligentes con reglas y contexto

**Distribución por Épica:**
- Épica 1: Core de tareas y lógica doméstica → 25 historias
- Épica 2: UX, planificación y visualización → 15 historias
- Épica 3: Notificaciones, reglas y automatización → 15 historias
- Épica 4: Integraciones externas → 10 historias
- Épica 5: Colaboración y hogar compartido → 10 historias
- Épica 6: Estadísticas, hábitos y gamificación → 10 historias
- Épica 7: Contexto inteligente e IA → 7 historias
- Épica 8: Inventario, espacios y objetos → 4 historias
- Épica 9: Hardware, sensores y gadgets → 3 historias
- Épica 10: Sistema avanzado → 1 historia

**TOTAL:** 100 historias

---

## 🧱 Épica 1: Core de tareas y lógica doméstica (25 historias)

> Las primeras 20 ya existen en el backlog original. MAN-01 a MAN-07 están completadas en Sprint 1.

**MAN-01: CRUD de tareas** ✅
- Como usuario quiero crear, editar, ver y eliminar tareas del hogar
- Para tener una lista organizada de todo lo que hay que hacer en casa
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-02: Marcar tarea como hecha** ✅
- Como usuario quiero marcar una tarea como completada con un click/tap
- Para llevar registro de lo que ya hice
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-03: Registrar ejecución** ✅
- Como usuario quiero que al completar una tarea se registre fecha, hora y quién la hizo
- Para tener historial detallado de ejecuciones
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-04: Vista de pendientes** ✅
- Como usuario quiero ver todas las tareas pendientes ordenadas por fecha/prioridad
- Para saber de un vistazo qué tengo que hacer
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-05: Cálculo de próxima fecha** ✅
- Como usuario quiero que tareas recurrentes calculen automáticamente su próxima fecha
- Para no tener que reprogramar manualmente cada vez
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-06: Filtros por estado** ✅
- Como usuario quiero filtrar tareas por estado (pendiente, completada, vencida)
- Para enfocarme en lo relevante
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-07: Categorización de tareas** ✅
- Como usuario quiero categorizar tareas (limpieza, mantenimiento, compras, trámites, etc.)
- Para organizar por tipo y filtrar
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**MAN-08: Recordatorios por email**
- Como usuario quiero recibir email 1 día antes de tarea vencida
- Para no olvidar tareas importantes
- **Estimación:** M | **Prioridad:** P2

**MAN-09: Vista calendario mensual**
- Como usuario quiero ver tareas en calendario visual mensual
- Para planificar mejor mi mes y ver la distribución de carga
- **Estimación:** L | **Prioridad:** P2

**MAN-10: Arrastrar y soltar para reprogramar**
- Como usuario quiero arrastrar tarea en calendario para cambiar su fecha
- Para reprogramar de forma intuitiva sin abrir formularios
- **Estimación:** M | **Prioridad:** P3

**MAN-11: Notificación push móvil**
- Como usuario quiero recibir push notification en mi celular cuando una tarea vence hoy
- Para enterarme incluso si no entro a la app
- **Estimación:** M | **Prioridad:** P2

**MAN-12: Sincronización Google Calendar**
- Como usuario quiero exportar tareas a mi Google Calendar
- Para verlas en mi calendario personal junto con mis otros eventos
- **Estimación:** L | **Prioridad:** P3

**MAN-13: Webhooks para integraciones**
- Como desarrollador quiero configurar webhooks al completar tareas
- Para integrar con Notion, Zapier, IFTTT o sistemas externos
- **Estimación:** M | **Prioridad:** P3

**MAN-14: Importar tareas desde Todoist**
- Como usuario quiero importar mis tareas existentes de Todoist
- Para migrar al sistema sin perder mi historial de tareas
- **Estimación:** L | **Prioridad:** P3

**MAN-15: Dashboard de estadísticas**
- Como usuario quiero ver cuántas tareas completé este mes, tiempo promedio, y tendencias
- Para motivarme y ver mi progreso en el mantenimiento del hogar
- **Estimación:** M | **Prioridad:** P2

**MAN-16: Racha de días consecutivos completando tareas**
- Como usuario quiero ver mi racha de días sin romper (streak)
- Para gamificar mi productividad doméstica
- **Estimación:** S | **Prioridad:** P3

**MAN-17: Puntos por completar tareas**
- Como usuario quiero ganar puntos según complejidad de la tarea completada
- Para tener un sistema de recompensas que motive la constancia
- **Estimación:** M | **Prioridad:** P3

**MAN-18: Asignar tarea a otro miembro del hogar**
- Como usuario quiero asignar una tarea a mi pareja o familiar
- Para delegar responsabilidades y distribuir la carga doméstica
- **Estimación:** M | **Prioridad:** P2

**MAN-19: Comentarios en tareas**
- Como usuario quiero comentar en una tarea compartida
- Para coordinar con otros ("¿compraste el producto?", "usé el de la derecha")
- **Estimación:** S | **Prioridad:** P3

**MAN-20: Historial de quién completó cada tarea**
- Como usuario quiero ver quién hizo qué y cuándo
- Para llevar registro familiar justo y transparente
- **Estimación:** S | **Prioridad:** P3

**MAN-21: Tareas recurrentes avanzadas** 🟢
- Como usuario quiero configurar recurrencias complejas: cada 2 semanas, primer lunes del mes, cada 3 meses, estacional (primavera/otoño)
- Para adaptar tareas a la realidad del hogar (ej: "limpiar filtro aire acondicionado cada octubre")
- **Estimación:** M | **Prioridad:** P1

**MAN-22: Tareas con fecha flexible ("cuando se pueda")** 🟢
- Como usuario quiero crear tareas sin fecha fija, tipo "cuando se pueda" o "esta semana"
- Para no saturar el calendario con cosas que no son urgentes pero sí necesarias
- **Estimación:** S | **Prioridad:** P2

**MAN-23: Tareas dependientes** 🟢
- Como usuario quiero que una tarea se habilite automáticamente cuando otra se completa (ej: "pintar" se habilita cuando "lijar" se completa)
- Para modelar flujos de trabajo domésticos que tienen orden lógico
- **Estimación:** M | **Prioridad:** P2

**MAN-24: Subtareas** 🟢
- Como usuario quiero dividir una tarea grande en pasos chicos con checkbox (ej: "Limpieza general" → limpiar baño, aspirar, trapear, sacudir)
- Para no abrumarme con tareas grandes y poder avanzar paso a paso
- **Estimación:** S | **Prioridad:** P1

**MAN-25: Estados personalizados de tarea** 🟢
- Como usuario quiero definir estados propios además de pendiente/completada (ej: "bloqueada", "en espera de material", "delegada")
- Para reflejar la realidad de tareas que no son simplemente "pendiente o hecha"
- **Estimación:** S | **Prioridad:** P2

---

## 🗓️ Épica 2: UX, planificación y visualización (15 historias)

**MAN-26: Vista semanal** 🟢
- Como usuario quiero ver las tareas de la semana actual en columnas (lun-dom)
- Para planificar mi semana y distribuir carga equitativamente
- **Estimación:** M | **Prioridad:** P2

**MAN-27: Vista agenda (lista cronológica)** 🟢
- Como usuario quiero ver todas las tareas próximas en formato lista tipo agenda, ordenadas por fecha
- Para tener una vista lineal de "qué viene" sin ruido visual
- **Estimación:** S | **Prioridad:** P2

**MAN-28: Vista por ambiente (cocina, baño, balcón)** 🟢
- Como usuario quiero filtrar tareas por ambiente/zona del hogar
- Para cuando estoy en la cocina ver solo lo que hay que hacer ahí
- **Estimación:** M | **Prioridad:** P2

**MAN-29: Vista por tipo (limpieza, mantenimiento, compras)** 🟢
- Como usuario quiero agrupar tareas por tipo de actividad
- Para hacer "sesión de limpieza" o "sesión de mantenimiento" enfocado
- **Estimación:** S | **Prioridad:** P2

**MAN-30: Vista "Hoy realista" (capacidad limitada)** 🟢
- Como usuario quiero que MANTIA me sugiera máximo 3-5 tareas para hoy según mi historial de capacidad
- Para no abrumarme con 15 tareas y terminar haciendo 0
- **Estimación:** M | **Prioridad:** P2

**MAN-31: Reprogramación masiva** 🟡
- Como usuario quiero seleccionar varias tareas y reprogramarlas juntas (ej: "mover todo del miércoles al sábado")
- Para reajustar cuando un plan se rompe sin editar una a una
- **Estimación:** M | **Prioridad:** P2

**MAN-32: Zoom de carga diaria (indicador de saturación)** 🟡
- Como usuario quiero ver un indicador visual de carga por día (verde/amarillo/rojo)
- Para detectar de un vistazo días sobrecargados vs días libres
- **Estimación:** S | **Prioridad:** P2

**MAN-33: Colores por categoría** 🟢
- Como usuario quiero asignar un color a cada categoría de tarea
- Para identificar visualmente el tipo de tarea en calendario y listas
- **Estimación:** S | **Prioridad:** P2

**MAN-34: Modo foco (solo 1 tarea visible)** 🟡
- Como usuario quiero un modo que oculte todo y me muestre SOLO la tarea actual a hacer
- Para concentrarme sin distracciones ni ansiedad por la lista completa
- **Estimación:** S | **Prioridad:** P3

**MAN-35: Vista backlog doméstico** 🟡
- Como usuario quiero una vista "backlog" con todas las tareas sin fecha asignada
- Para revisar periódicamente qué tengo pendiente sin urgencia y programar
- **Estimación:** S | **Prioridad:** P2

**MAN-36: Estimación de duración de tarea** 🟢
- Como usuario quiero asignar duración estimada a cada tarea (15min, 30min, 1h, 2h+)
- Para planificar mi día sabiendo cuánto tiempo me va a llevar
- **Estimación:** S | **Prioridad:** P2

**MAN-37: Alertas de sobrecarga semanal** 🟡
- Como usuario quiero recibir aviso si programé más horas de tareas que las que suelo completar en una semana
- Para ser realista y no frustrarme por no llegar
- **Estimación:** M | **Prioridad:** P3

**MAN-38: Plantillas de rutinas** 🟢
- Como usuario quiero crear plantillas reutilizables (ej: "Rutina domingo" = aspirar + lavar baño + cambiar sábanas)
- Para activar una rutina completa con un click en vez de crear varias tareas
- **Estimación:** M | **Prioridad:** P2

**MAN-39: Timeline histórico del hogar** 🟡
- Como usuario quiero ver una línea de tiempo con todas las tareas completadas mes a mes
- Para visualizar "¿cuándo fue la última vez que limpié el filtro del aire?"
- **Estimación:** M | **Prioridad:** P3

**MAN-40: Modo "checklist rápida"** 🟢
- Como usuario quiero un modo simplificado tipo checklist para ir tachando tareas sin abrir detalles
- Para usar la app rápido mientras limpio, sin detenernme en cada tarea
- **Estimación:** S | **Prioridad:** P2

---

## 🔔 Épica 3: Notificaciones, reglas y automatización (15 historias)

**MAN-41: Reglas automáticas (IF/THEN)** 🟡
- Como usuario quiero crear reglas tipo "SI tarea X se completa ENTONCES crear tarea Y" o "SI llueve ENTONCES posponer riego"
- Para automatizar la lógica doméstica sin intervención manual
- **Estimación:** L | **Prioridad:** P2

**MAN-42: Snooze inteligente** 🟢
- Como usuario quiero posponer una notificación 1h, 3h o "mañana" con un toque
- Para no perder la tarea pero atenderla cuando pueda
- **Estimación:** S | **Prioridad:** P2

**MAN-43: Recordatorios escalonados** 🟢
- Como usuario quiero recibir recordatorio 3 días antes, 1 día antes y el mismo día de una tarea
- Para tener aviso progresivo de tareas importantes (ej: turno médico)
- **Estimación:** S | **Prioridad:** P2

**MAN-44: Notificaciones según rol (dueño / invitado)** 🟡
- Como usuario quiero que cada rol del hogar reciba las notificaciones que le corresponden
- Para no molestar al invitado con tareas que no le competen
- **Estimación:** S | **Prioridad:** P3

**MAN-45: Silenciar tareas no críticas** 🟢
- Como usuario quiero marcar tareas como "no crítica" para que no me notifiquen si tengo mucho pendiente hoy
- Para priorizar lo importante sin ruido
- **Estimación:** S | **Prioridad:** P2

**MAN-46: Resumen diario automático** 🟢
- Como usuario quiero recibir cada mañana un resumen con las tareas del día + las vencidas de ayer
- Para arrancar el día sabiendo qué tengo que hacer
- **Estimación:** M | **Prioridad:** P2

**MAN-47: Resumen semanal por email** 🟡
- Como usuario quiero recibir un email los domingos con resumen de la semana: completadas, pendientes, próxima semana
- Para tener perspectiva y planificar sin abrir la app
- **Estimación:** M | **Prioridad:** P3

**MAN-48: Aviso por inactividad prolongada** 🟡
- Como usuario quiero que MANTIA me notifique suavemente si llevo X días sin completar ninguna tarea
- Para reactivarme sin generar culpa ("Hace 5 días que no marcás tareas. ¿Todo bien?")
- **Estimación:** S | **Prioridad:** P3

**MAN-49: Alertas de tareas "olvidadas"** 🟡
- Como usuario quiero que me avise si hay tareas vencidas hace más de 7 días sin atender
- Para que nada se pierda en el olvido
- **Estimación:** S | **Prioridad:** P2

**MAN-50: Notificación contextual (clima, hora)** 🟡
- Como usuario quiero que MANTIA considere el clima al notificar (ej: "Hoy llueve, ¿posponemos regar?")
- Para notificaciones más inteligentes y menos robóticas
- **Estimación:** M | **Prioridad:** P3

**MAN-51: Integración con asistentes de voz** 🟡
- Como usuario quiero preguntar "¿qué tareas tengo hoy?" a Google Home / Alexa
- Para consultar MANTIA sin tocar el celular
- **Estimación:** L | **Prioridad:** P3

**MAN-52: Confirmación doble para tareas críticas** 🟡
- Como usuario quiero que tareas marcadas como "críticas" pidan confirmación antes de completar
- Para evitar cerrar por error una tarea importante (ej: pago de impuesto)
- **Estimación:** S | **Prioridad:** P3

**MAN-53: Notificaciones agrupadas (digest)** 🟡
- Como usuario quiero recibir 1 notificación agrupada en vez de 5 separadas cuando hay varias tareas pendientes
- Para no ser bombardeado y poder procesar todo junto
- **Estimación:** M | **Prioridad:** P3

**MAN-54: Reglas por horario del día** 🟡
- Como usuario quiero definir que las tareas de limpieza me notifiquen a la mañana y las de cocina a la tarde
- Para recibir cada aviso en el momento adecuado
- **Estimación:** M | **Prioridad:** P3

**MAN-55: Automatización por ubicación (geofencing)** 🔵
- Como usuario quiero que MANTIA me notifique tareas de compras cuando paso cerca del supermercado
- Para aprovechar oportunidades de cercanía sin tener que recordar
- **Estimación:** L | **Prioridad:** P3

---

## 🔌 Épica 4: Integraciones externas (10 historias)

**MAN-56: Integración Google Tasks** 🟡
- Como usuario quiero sincronizar tareas de MANTIA con Google Tasks (bidireccional)
- Para que mis tareas del hogar aparezcan en el ecosistema Google
- **Estimación:** L | **Prioridad:** P3

**MAN-57: Integración Apple Reminders** 🟡
- Como usuario quiero sincronizar tareas con Apple Reminders
- Para que mis tareas aparezcan en mi iPhone/iPad nativamente
- **Estimación:** L | **Prioridad:** P3

**MAN-58: Importación desde CSV/Excel** 🟢
- Como usuario quiero importar tareas masivamente desde un archivo CSV o Excel
- Para migrar tareas existentes o cargar muchas de golpe al arrancar
- **Estimación:** M | **Prioridad:** P2

**MAN-59: Exportación completa de historial** 🟡
- Como usuario quiero exportar todo mi historial de tareas a CSV/Excel/JSON
- Para backup personal, análisis offline o compartir con alguien
- **Estimación:** M | **Prioridad:** P2

**MAN-60: Integración con Notion** 🟡
- Como usuario quiero sincronizar tareas con una base de datos de Notion
- Para integrar MANTIA en mi sistema personal de productividad
- **Estimación:** L | **Prioridad:** P3

**MAN-61: Integración con Slack / Discord** 🟡
- Como usuario quiero recibir resúmenes y alertas de MANTIA en un canal de Slack o Discord
- Para familias/convivientes que ya usan estas herramientas para coordinarse
- **Estimación:** M | **Prioridad:** P3

**MAN-62: API pública de MANTIA** 🟡
- Como desarrollador quiero una API REST/GraphQL documentada para interactuar con MANTIA
- Para permitir integraciones personalizadas y automatizaciones externas
- **Estimación:** L | **Prioridad:** P2

**MAN-63: Webhooks avanzados (con filtros y condiciones)** 🟡
- Como desarrollador quiero configurar webhooks con condiciones (ej: solo tareas de categoría "mantenimiento")
- Para integraciones más sofisticadas sin recibir ruido
- **Estimación:** M | **Prioridad:** P3

**MAN-64: Integración con FINANCIA (costos de tareas)** 🟡
- Como usuario quiero vincular un costo a una tarea de mantenimiento y que se registre en FINANCIA
- Para saber cuánto me cuesta cada reparación/mantenimiento del hogar
- **Estimación:** M | **Prioridad:** P2

**MAN-65: Integración con HUESHA (registro vital)** 🟡
- Como usuario quiero que tareas completadas significativas aparezcan en HUESHA como parte de mi historia de vida
- Para que "pinté toda la casa" o "arreglé la pérdida del baño" quede registrado como hito
- **Estimación:** S | **Prioridad:** P3

---

## 👥 Épica 5: Colaboración y hogar compartido (10 historias)

**MAN-66: Roles del hogar (admin, colaborador, invitado)** 🟢
- Como admin del hogar quiero definir roles con permisos diferentes (admin puede crear/borrar, colaborador puede completar, invitado solo ve)
- Para que cada persona tenga acceso apropiado a MANTIA
- **Estimación:** M | **Prioridad:** P2

**MAN-67: Aprobación de tareas completadas** 🟡
- Como admin quiero revisar y aprobar/rechazar tareas marcadas como completadas por otros
- Para verificar que "limpiar baño" realmente se hizo bien (opcional, configurable)
- **Estimación:** M | **Prioridad:** P3

**MAN-68: Reasignación automática por ausencia** 🟡
- Como usuario quiero definir que si estoy ausente (viaje), mis tareas se reasignen automáticamente a otro miembro
- Para que nada quede sin hacer cuando alguien no está
- **Estimación:** M | **Prioridad:** P3

**MAN-69: Comentarios con menciones (@)** 🟡
- Como usuario quiero mencionar a otro miembro en un comentario de tarea (@Juan ¿compraste el producto?)
- Para comunicarme en contexto sin salir de la app
- **Estimación:** S | **Prioridad:** P3

**MAN-70: Historial de conflictos (tarea rebotada)** 🟡
- Como usuario quiero ver cuando una tarea fue asignada, rechazada, reasignada múltiples veces
- Para detectar tareas que nadie quiere hacer y buscar solución
- **Estimación:** M | **Prioridad:** P3

**MAN-71: Delegación por carga de trabajo** 🟡
- Como sistema quiero sugerir reasignar tareas del miembro más cargado al más libre
- Para equilibrar la distribución doméstica automáticamente
- **Estimación:** M | **Prioridad:** P3

**MAN-72: Vista "qué hizo cada uno" (reporte por persona)** 🟢
- Como usuario quiero ver un reporte de tareas completadas por cada miembro del hogar esta semana/mes
- Para tener transparencia y evitar conflictos tipo "yo siempre hago todo"
- **Estimación:** M | **Prioridad:** P2

**MAN-73: Acuerdos domésticos visibles** 🟡
- Como hogar quiero definir "acuerdos" (ej: "los martes cocina Juan", "limpieza general los sábados")
- Para tener reglas del hogar documentadas y vinculadas a tareas recurrentes
- **Estimación:** M | **Prioridad:** P3

**MAN-74: Modo convivencia temporal** 🔵
- Como usuario quiero agregar un conviviente temporal (ej: amigo que se queda 1 mes) con permisos limitados
- Para incluirlo en la dinámica doméstica sin darle acceso permanente
- **Estimación:** S | **Prioridad:** P3

**MAN-75: Estadísticas por persona** 🟡
- Como usuario quiero ver estadísticas individuales de cada miembro (tareas completadas, categorías, promedio semanal)
- Para entender la contribución de cada uno al hogar
- **Estimación:** M | **Prioridad:** P2

---

## 📊 Épica 6: Estadísticas, hábitos y gamificación (10 historias)

**MAN-76: Tareas completadas por categoría (gráfico)** 🟡
- Como usuario quiero ver un gráfico de torta/barras con cuántas tareas completé por categoría
- Para entender en qué gasto más tiempo: limpieza, mantenimiento, compras, etc.
- **Estimación:** M | **Prioridad:** P2

**MAN-77: Tiempo invertido por ambiente** 🟡
- Como usuario quiero ver cuánto tiempo dediqué al baño vs cocina vs living
- Para distribuir mejor mi esfuerzo doméstico
- **Estimación:** M | **Prioridad:** P3

**MAN-78: Tendencias mensuales** 🟡
- Como usuario quiero ver cómo evolucionan mis tareas completadas mes a mes (línea temporal)
- Para detectar si estoy mejorando o aflojando
- **Estimación:** M | **Prioridad:** P3

**MAN-79: Ranking interno del hogar** 🟡
- Como miembro del hogar quiero ver un ranking de quién completó más tareas este mes
- Para gamificar la convivencia con competencia sana
- **Estimación:** S | **Prioridad:** P3

**MAN-80: Logros y badges** 🟡
- Como usuario quiero desbloquear logros (ej: "Primer mes sin tareas vencidas", "100 tareas completadas", "Rey de la cocina")
- Para sentir progreso y diversión en lo doméstico
- **Estimación:** M | **Prioridad:** P3

**MAN-81: Penalización por tareas vencidas (configurable)** 🟡
- Como hogar quiero que las tareas vencidas resten puntos al responsable (configurable, opt-in)
- Para agregar consecuencia a no cumplir, con humor y sin conflicto
- **Estimación:** S | **Prioridad:** P3

**MAN-82: Sistema de recompensas reales** 🔵
- Como hogar quiero definir recompensas canjeables por puntos (ej: "500 puntos = no cocino el viernes")
- Para motivar con incentivos reales además de virtuales
- **Estimación:** M | **Prioridad:** P3

**MAN-83: Modo "reset mensual"** 🟡
- Como usuario quiero resetear estadísticas cada mes para empezar limpio
- Para que un mes malo no arrastre la motivación eternamente
- **Estimación:** S | **Prioridad:** P3

**MAN-84: Predicción de carga futura** 🔵
- Como usuario quiero ver una proyección de la próxima semana/mes basada en tareas recurrentes + pendientes
- Para anticipar semanas pesadas y planificar (ej: "la semana que viene tenés 12h de tareas")
- **Estimación:** M | **Prioridad:** P3

**MAN-85: Objetivos domésticos** 🟡
- Como hogar quiero definir objetivos mensuales (ej: "completar el 90% de tareas", "no pasar de 3 vencidas")
- Para tener metas compartidas y celebrar cuando se cumplen
- **Estimación:** M | **Prioridad:** P3

---

## 🧠 Épica 7: Contexto inteligente e IA (7 historias)

**MAN-86: Sugerencia automática de tareas** 🔵
- Como usuario quiero que MANTIA sugiera tareas basándose en la época del año, historial y contexto (ej: "Octubre → ¿limpieza de filtro de aire?")
- Para no tener que recordar tareas estacionales
- **Estimación:** L | **Prioridad:** P3

**MAN-87: IA que detecta tareas faltantes** 🔵
- Como usuario quiero que MANTIA detecte que hace 6 meses no registro "limpieza de horno" y me pregunte si quiero agregarla
- Para encontrar gaps en mi mantenimiento doméstico
- **Estimación:** L | **Prioridad:** P3

**MAN-88: Reordenamiento inteligente del día** 🔵
- Como usuario quiero que MANTIA me sugiera el mejor orden para hacer las tareas del día (ej: primero regar, después cocinar, después limpiar)
- Para optimizar mi tiempo y energía según lógica doméstica
- **Estimación:** M | **Prioridad:** P3

**MAN-89: Detección de hábitos implícitos** 🔵
- Como usuario quiero que MANTIA detecte que siempre limpio el baño los sábados y me sugiera convertirlo en tarea recurrente
- Para automatizar la creación de tareas según mis hábitos reales
- **Estimación:** L | **Prioridad:** P3

**MAN-90: Explicación del "por qué" de una tarea** 🔵
- Como usuario quiero que MANTIA me explique por qué una tarea es importante (ej: "Limpiar filtro de aire cada 3 meses evita problemas respiratorios y baja el consumo eléctrico")
- Para entender el valor de mantener la casa, no solo cumplir por cumplir
- **Estimación:** M | **Prioridad:** P3

**MAN-91: Conversación natural con MANTIA** 🔵
- Como usuario quiero interactuar con MANTIA en lenguaje natural ("limpiame el baño" → crea tarea, asigna, programa)
- Para gestionar tareas sin navegar menús ni formularios
- **Estimación:** L | **Prioridad:** P3

**MAN-92: Predicción de desgaste doméstico** 🔵
- Como usuario quiero que MANTIA prediga cuándo algo va a necesitar mantenimiento basándose en uso y tiempo (ej: "La pintura del living tiene 3 años, probablemente necesite retoque")
- Para anticipar necesidades antes de que sean urgencias
- **Estimación:** L | **Prioridad:** P3

---

## 🧰 Épica 8: Inventario, espacios y objetos (4 historias)

**MAN-93: Tareas ligadas a objetos específicos** 🔵
- Como usuario quiero vincular una tarea a un objeto registrado (ej: "limpiar filtro" → "Aire acondicionado Samsung del living")
- Para tener historial de mantenimiento por objeto y no genérico
- **Estimación:** M | **Prioridad:** P3

**MAN-94: Tareas por QR del objeto** 🔵
- Como usuario quiero escanear un QR pegado en un electrodoméstico y ver sus tareas pendientes y su historial de mantenimiento
- Para acceder instantáneamente a "¿qué hay que hacerle a este aparato?"
- **Estimación:** M | **Prioridad:** P3

**MAN-95: Historial de mantenimiento por objeto** 🔵
- Como usuario quiero ver todo lo que se le hizo a un objeto a lo largo del tiempo (filtros limpiados, reparaciones, service)
- Para tener un "carnet de salud" de cada electrodoméstico o instalación
- **Estimación:** M | **Prioridad:** P3

**MAN-96: Alertas por uso acumulado** 🔵
- Como usuario quiero que MANTIA me avise cuando un objeto cumple X horas/usos/meses de uso (ej: "El lavarropas tiene 1000 lavados, revisá las mangueras")
- Para mantenimiento preventivo basado en desgaste real
- **Estimación:** M | **Prioridad:** P3

---

## 🧲 Épica 9: Hardware, sensores y gadgets (3 historias)

**MAN-97: Integración con sensores IoT** 🔵
- Como usuario quiero conectar sensores de temperatura, humedad, humo del hogar a MANTIA
- Para que tareas se disparen automáticamente según condiciones reales (ej: "humedad > 70% → deshumidificar")
- **Estimación:** XL | **Prioridad:** P3

**MAN-98: Tareas disparadas por consumo eléctrico** 🔵
- Como usuario quiero que un aumento anormal de consumo eléctrico genere tarea de revisión
- Para detectar electrodomésticos con problemas antes de que rompan
- **Estimación:** XL | **Prioridad:** P3

**MAN-99: Integración con balanzas, medidores y dispositivos del hogar** 🔵
- Como usuario quiero conectar balanzas de cocina, medidores de agua, o dispositivos IoT del hogar
- Para automatizar registros y disparar tareas según datos reales (ej: "garrafa de gas por debajo de 3kg → pedir recarga")
- **Estimación:** XL | **Prioridad:** P3

---

## 🌱 Épica 10: Sistema avanzado (1 historia)

**MAN-100: MANTIA como cerebro operativo del hogar** 🔵
- Como usuario quiero que MANTIA coordine tareas, objetos, personas, tiempos y contexto de forma integrada — cruzando datos de ALACENA (stock), FINANCIA (costos), ECOSALUD (bienestar), HUESHA (historia) y sensores
- Para que la gestión del hogar sea proactiva, inteligente y casi autónoma. MANTIA no espera que le digan qué hacer: lo anticipa
- **Estimación:** XL | **Prioridad:** P3

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 9 | 🟢 Corto plazo (MAN-01→07 Sprint 1, MAN-21, MAN-24) |
| **P2** | 38 | 🟢🟡 Corto-mediano plazo |
| **P3** | 53 | 🟡🔵 Mediano-largo plazo |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 30 | ~90h |
| **M** | 43 | ~258h |
| **L** | 17 | ~170h |
| **XL** | 4 | ~80h |
| **TOTAL** | **100** | **~598h** |

---

## 🎯 Modelo de Datos Conceptual

```
MantiaTask (tarea)
├── id, user_id, household_id
├── titulo, descripcion
├── category_id (→ MantiaCategory)
├── ambiente: "cocina" | "baño" | "living" | "balcón" | "general" | custom
├── tipo: "limpieza" | "mantenimiento" | "compras" | "trámite" | "turno" | custom
├── estado: "pendiente" | "completada" | "vencida" | "bloqueada" | "en_espera" | custom
├── prioridad: "alta" | "media" | "baja"
├── fecha_programada, fecha_completada
├── es_flexible (boolean - "cuando se pueda")
├── duracion_estimada_min
├── assigned_to (user_id)
├── parent_task_id (para subtareas)
├── depends_on_task_id (para dependencias)
├── object_id (→ MantiaObject, para tareas ligadas a objetos)
├── recurrence_rule (→ MantiaRecurrence)
├── routine_id (→ MantiaRoutine)
├── costo_estimado, costo_real (enlace FINANCIA)
├── tags[], adjuntos[]
└── is_critical (boolean)

MantiaExecution (ejecución/historial)
├── id, task_id, user_id
├── fecha_ejecucion, duracion_real_min
├── notas, fotos_antes[], fotos_despues[]
├── aprobada (boolean, para flujo de aprobación)
└── puntos_otorgados

MantiaRecurrence (recurrencia avanzada)
├── id
├── tipo: "diaria" | "semanal" | "quincenal" | "mensual" | "anual" | "personalizada"
├── dias_semana[], dia_mes, mes_año
├── cada_n (cada N días/semanas/meses)
├── estacional: "primavera" | "verano" | "otoño" | "invierno"
└── excepciones[] (fechas a saltar)

MantiaRoutine (plantilla de rutina)
├── id, user_id, household_id
├── nombre ("Rutina domingo", "Limpieza profunda mensual")
├── tasks[] (lista ordenada de tareas que incluye)
├── duracion_total_estimada
└── frecuencia_sugerida

MantiaObject (objeto del hogar)
├── id, household_id
├── nombre ("Aire acondicionado Samsung", "Lavarropas")
├── tipo, marca, modelo
├── ubicacion (ambiente)
├── fecha_compra, garantia_hasta
├── qr_code
├── uso_acumulado (horas/ciclos)
└── tasks[] (tareas vinculadas)

MantiaAgreement (acuerdo doméstico)
├── id, household_id
├── titulo ("Los martes cocina Juan")
├── descripcion
├── participantes[]
├── is_active
├── linked_tasks[] (tareas recurrentes vinculadas)
└── created_at

MantiaRule (regla de automatización)
├── id, household_id
├── nombre
├── condicion (JSON: {trigger, params})
├── accion (JSON: {action, params})
├── is_active
└── last_triggered
```

---

## 🔗 Integraciones Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **Google Calendar** | Google Calendar API | MAN-12 |
| **Google Tasks** | Google Tasks API | MAN-56 |
| **Apple Reminders** | Apple EventKit | MAN-57 |
| **Todoist** | Todoist API (import) | MAN-14 |
| **Notion** | Notion API | MAN-60 |
| **Slack / Discord** | Slack/Discord webhooks | MAN-61 |
| **Asistentes de voz** | Google Assistant / Alexa SDK | MAN-51 |
| **FINANCIA** | API interna ECO | MAN-64 |
| **HUESHA** | API interna ECO | MAN-65 |
| **IoT / Sensores** | MQTT, Home Assistant | MAN-97, MAN-98, MAN-99 |
| **Clima** | OpenWeatherMap | MAN-50 |

---

## 🎯 Roadmap MANTIA

**🟢 MVP (v0.1 — Sprint 1-3):** MAN-01→07 (done), MAN-21, MAN-24, core básico
**🟢 v0.2 — UX mejorada:** Vistas (MAN-26→33), plantillas (MAN-38), checklist rápida (MAN-40)
**🟡 v0.3 — Notificaciones:** Resumen diario (MAN-46), recordatorios (MAN-43), snooze (MAN-42)
**🟡 v0.4 — Colaboración:** Roles (MAN-66), reportes por persona (MAN-72), estadísticas (MAN-75)
**🟡 v0.5 — Gamificación:** Logros (MAN-80), objetivos (MAN-85), ranking (MAN-79)
**🔵 v1.0 — IA y avanzado:** Sugerencias (MAN-86), detección hábitos (MAN-89), cerebro hogar (MAN-100)

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
