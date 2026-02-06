# 🔧 TRANSVERSALES — Capacidades de Plataforma (202 historias)

**Fecha:** 6 de febrero de 2026  
**Alcance:** Transversal a todos los módulos funcionales  
**Propósito:** Todo lo que NO es un módulo funcional pero sin lo cual el producto no funciona en producción real: API, agente, usuarios, notificaciones, backups, seguridad, UX base, infra, datos, integraciones y gobernanza.

> *"Los módulos son lo que el usuario ve. Las transversales son lo que hace que todo funcione, escale y sea confiable."*

**Nota técnica:** Se corrigió el conteo original — Agente Conversacional tenía 14 historias listadas (no 12), con lo cual las existentes reales eran 83. Con las 119 nuevas, el total es **202 historias** (no 200 exactas).

**Distribución por Área (11 áreas):**

| Área | Prefijo | Existentes | Nuevas | Total | Est. aprox |
|------|---------|-----------|--------|-------|------------|
| API para IA (Plataforma API) | API- | 15 | 15 | **30** | ~200h |
| Agente Conversacional | AGT- | 14 | 16 | **30** | ~233h |
| Multi-usuario y Roles | USR- | 10 | 10 | **20** | ~135h |
| Notificaciones | NOT- | 10 | 10 | **20** | ~121h |
| Backups y Exportación | BKP- | 8 | 10 | **18** | ~118h |
| Seguridad y Admin | SEC- | 8 | 12 | **20** | ~143h |
| UX y Onboarding | UXO- | 10 | 10 | **20** | ~143h |
| Infraestructura y DevOps | INF- | 8 | 10 | **18** | ~122h |
| Datos, Búsqueda y Conocimiento | DAT- | — | 10 | **10** | ~88h |
| Integraciones Externas | INT- | — | 10 | **10** | ~116h |
| Gobernanza y Cumplimiento | GOV- | — | 6 | **6** | ~40h |
| **TOTAL** | | **83** | **119** | **202** | **~1,459h** |

**Prioridades:** 28 P1 · 95 P2 · 72 P3 · 7 P4

**Convenciones de estimación:**
- S = ~3h | M = ~6h | L = ~10h | XL = ~20h | XXL = ~40h

---

# 🤖 API PARA IA — PLATAFORMA API (30 historias)

> La API no es "solo para IA": es la superficie programática completa de ECO. La consume el agente conversacional, integraciones externas, webhooks, mobile y cualquier cliente futuro.

---

### Épica 1: Schema y Queries Core (API-01 → API-05)

**API-01: Schema GraphQL para MANTIA**
- Como desarrollador quiero queries y mutations GraphQL para tareas (getTasks, createTask, updateTask, completeTask, deleteTask)
- Para que cualquier cliente (agente IA, mobile, web) pueda operar sobre MANTIA de forma programática
- **Estimación:** L | **Prioridad:** P1

**API-02: Schema GraphQL para ALACENA**
- Como desarrollador quiero queries y mutations GraphQL para inventario (getItems, updateStock, getLocations, etc.)
- Para exponer el inventario del hogar a clientes externos y al agente conversacional
- **Estimación:** L | **Prioridad:** P1

**API-03: Schema GraphQL para Lista de Compras**
- Como desarrollador quiero queries y mutations GraphQL para listas de compra (getShoppingList, addItem, markBought, etc.)
- Para que el agente pueda agregar items por voz y que apps externas sincronicen
- **Estimación:** M | **Prioridad:** P1

**API-04: Schema GraphQL para ECOSALUD**
- Como desarrollador quiero queries y mutations GraphQL para registros de salud (getHealthRecords, addWeight, getHistory, etc.)
- Para centralizar el acceso a datos de salud desde cualquier interfaz
- **Estimación:** M | **Prioridad:** P1

**API-05: Subscriptions GraphQL para cambios en tiempo real**
- Como desarrollador quiero subscriptions GraphQL para recibir notificación cuando cambia inventario, se completa tarea o se agrega item a lista
- Para construir interfaces reactivas y notificaciones sin polling
- **Estimación:** L | **Prioridad:** P2

---

### Épica 2: Autenticación y Seguridad API (API-06 → API-08)

**API-06: Generar API Key por usuario**
- Como usuario quiero generar una API Key personal desde mi perfil
- Para usar con el agente IA, scripts personales o integraciones externas
- **Estimación:** M | **Prioridad:** P1

**API-07: Rotar/Revocar API Keys**
- Como usuario quiero desactivar o regenerar mi API Key si se compromete o envejece
- Para mantener la seguridad de mi cuenta sin depender de soporte
- **Estimación:** S | **Prioridad:** P2

**API-08: Rate limiting por API Key**
- Como admin quiero limitar la cantidad de requests por minuto por API Key
- Para evitar abuso, proteger la infraestructura y garantizar equidad entre usuarios
- **Estimación:** M | **Prioridad:** P2

---

### Épica 3: Queries Conversacionales (API-09 → API-12)

**API-09: Query "getNextTasks" optimizado para voz**
- Como agente IA quiero obtener las próximas 3 tareas pendientes de forma simple y directa
- Para responder preguntas de voz tipo "¿qué tengo pendiente?" sin latencia ni datos innecesarios
- **Estimación:** S | **Prioridad:** P1

**API-10: Query "whatCanICookToday" para recetas**
- Como agente IA quiero consultar qué recetas se pueden preparar con el stock actual para N personas
- Para responder "¿qué puedo cocinar hoy si somos 5?" cruzando inventario con recetas
- **Estimación:** M | **Prioridad:** P2

**API-11: Query "getHealthSummary" con parámetros flexibles**
- Como agente IA quiero obtener resumen de salud (último peso, colesterol, presión) con rango temporal configurable
- Para responder "¿cómo vengo de salud?" con datos concretos y tendencia
- **Estimación:** M | **Prioridad:** P2

**API-12: Mutation "addItemByVoice" con parsing de lenguaje natural**
- Como agente IA quiero interpretar "agregar leche y pan a la lista" y crear 2 items automáticamente
- Para que el usuario agregue items por voz sin necesidad de interfaz gráfica
- **Estimación:** L | **Prioridad:** P2

---

### Épica 4: Webhooks Salientes (API-13 → API-14)

**API-13: Configurar webhook al completar tarea**
- Como usuario quiero ejecutar un webhook cuando se completa una tarea
- Para integrar con Zapier, IFTTT, Notion u otras automatizaciones externas
- **Estimación:** M | **Prioridad:** P3

**API-14: Webhook al stock bajo**
- Como usuario quiero ejecutar webhook cuando un item baja de su umbral de stock
- Para notificar a sistemas externos o disparar compra automática
- **Estimación:** M | **Prioridad:** P3

---

### Épica 5: Developer Experience (API-15)

**API-15: Playground GraphQL público con autenticación**
- Como desarrollador quiero probar queries en un playground web autenticado con mi API Key
- Para debuggear integraciones y explorar el schema sin escribir código
- **Estimación:** S | **Prioridad:** P2

---

### Épica 6: Estándares y Calidad API (API-16 → API-23) ✨ NUEVO

**API-16: Versionado de API (v1/v2) + política de deprecación**
- Como desarrollador quiero que la API tenga versionado explícito (v1, v2) con política clara de deprecación y sunset
- Para actualizar mi integración sin que se rompa de un día para el otro
- **Estimación:** M | **Prioridad:** P1

**API-17: Convención de errores (codes, messages, field paths)**
- Como desarrollador quiero errores estructurados con código, mensaje legible y path del campo que falló
- Para construir manejo de errores consistente en cualquier cliente sin adivinar qué pasó
- **Estimación:** S | **Prioridad:** P1

**API-18: Paginación estándar (cursor-based) en listas grandes**
- Como desarrollador quiero paginación cursor-based en todas las listas (no offset-based) con hasNextPage/endCursor
- Para paginar de forma eficiente y consistente en datasets grandes sin saltos ni duplicados
- **Estimación:** M | **Prioridad:** P1

**API-19: Filtros/sort estándar (DSL común)**
- Como desarrollador quiero un DSL de filtros y ordenamiento consistente en todos los endpoints (where/orderBy)
- Para no aprender un patrón distinto en cada query
- **Estimación:** M | **Prioridad:** P2

**API-20: Idempotencia en mutations críticas (Idempotency-Key)**
- Como desarrollador quiero enviar un header Idempotency-Key en mutations que crean/modifican datos
- Para que reintentos por timeout o error de red no creen duplicados
- **Estimación:** M | **Prioridad:** P2

**API-21: Observabilidad por request (request-id + trace-id)**
- Como desarrollador quiero que cada response incluya request-id y trace-id
- Para rastrear problemas en logs y soporte sin ambigüedad
- **Estimación:** M | **Prioridad:** P2

**API-22: Bulk mutations (alta masiva / update masivo)**
- Como desarrollador quiero mutations batch para crear/actualizar múltiples entidades en una sola llamada
- Para imports masivos y operaciones bulk sin hacer N llamadas individuales
- **Estimación:** L | **Prioridad:** P2

**API-23: Export de schema + SDK types (TS) autogenerados**
- Como desarrollador quiero que se generen automáticamente tipos TypeScript desde el schema GraphQL
- Para tener tipado fuerte en clientes sin mantener tipos manualmente
- **Estimación:** M | **Prioridad:** P2

---

### Épica 7: Seguridad y Gobernanza API (API-24 → API-30) ✨ NUEVO

**API-24: Entitlements/scopes por API Key (qué puede llamar)**
- Como admin quiero definir qué módulos y operaciones puede usar cada API Key (read-only, solo MANTIA, etc.)
- Para aplicar principio de menor privilegio y evitar que un token comprometido acceda a todo
- **Estimación:** L | **Prioridad:** P1

**API-25: Service tokens para integraciones server-to-server**
- Como admin quiero crear tokens de servicio (sin usuario humano asociado) para integraciones backend
- Para que cron jobs e integraciones server-side se autentiquen sin usar credenciales de usuario
- **Estimación:** M | **Prioridad:** P2

**API-26: Sandbox environment (API de testing con data fake)**
- Como desarrollador quiero un entorno sandbox con datos ficticios y límites relajados
- Para desarrollar y testear integraciones sin afectar datos reales
- **Estimación:** L | **Prioridad:** P3

**API-27: Rate limit por usuario + por IP + por token (granular)**
- Como admin quiero rate limiting granular por usuario, IP y token con ventanas configurables
- Para proteger la API de abuso diferenciando entre un usuario legítimo y un bot
- **Estimación:** M | **Prioridad:** P2

**API-28: Persisted queries (seguridad + performance)**
- Como admin quiero soportar persisted queries para producción
- Para bloquear queries arbitrarias, mejorar performance y reducir superficie de ataque
- **Estimación:** L | **Prioridad:** P3

**API-29: Auditoría de llamadas API (quién, qué, cuándo)**
- Como admin quiero log de auditoría de todas las llamadas API con actor, operación, timestamp y resultado
- Para detectar uso indebido, investigar incidentes y cumplir requisitos de compliance
- **Estimación:** M | **Prioridad:** P2

**API-30: Documentación viva (GraphQL docs + ejemplos)**
- Como desarrollador quiero documentación auto-generada desde el schema con ejemplos reales y guías
- Para integrarme sin leer código fuente ni depender de documentación desactualizada
- **Estimación:** M | **Prioridad:** P2

---

# 🗣️ AGENTE CONVERSACIONAL (30 historias)

> El agente es la interfaz de "manos libres" de ECO. Recibe texto o voz, interpreta la intención, ejecuta acciones y responde. Separamos infraestructura del agente, skills por módulo e inteligencia conversacional.

---

### Épica 1: Infraestructura del Agente (AGT-01 → AGT-04)

**AGT-01: Endpoint para recibir texto/voz y devolver respuesta**
- Como usuario quiero enviar una pregunta por texto y recibir respuesta del agente en formato estructurado
- Para interactuar con ECO de forma conversacional sin usar la UI gráfica
- **Estimación:** L | **Prioridad:** P1

**AGT-02: Integración con Whisper API para transcribir voz**
- Como usuario quiero enviar un audio y que se transcriba automáticamente a texto
- Para hablarle a ECO desde el celular sin escribir
- **Estimación:** M | **Prioridad:** P2

**AGT-03: Integración con TTS (Text-to-Speech) para respuestas habladas**
- Como usuario quiero recibir la respuesta del agente en audio además de texto
- Para escuchar la respuesta mientras cocino o manejo sin leer la pantalla
- **Estimación:** M | **Prioridad:** P3

**AGT-04: Context awareness (recordar conversación previa)**
- Como usuario quiero que el agente recuerde el contexto de la conversación anterior ("¿y el de hoy?" refiriéndose al peso)
- Para tener conversaciones naturales sin repetir contexto en cada mensaje
- **Estimación:** L | **Prioridad:** P2

---

### Épica 2: Skills MANTIA (AGT-05 → AGT-07)

**AGT-05: "¿Qué tareas tengo hoy?"**
- Como usuario quiero preguntar al agente qué tareas vencen hoy y recibir la lista
- Para revisar mis pendientes por voz mientras desayuno
- **Estimación:** S | **Prioridad:** P1

**AGT-06: "Marca tarea X como completada"**
- Como usuario quiero completar una tarea por comando de voz diciendo su nombre o número
- Para marcar tareas hechas sin abrir la app
- **Estimación:** S | **Prioridad:** P1

**AGT-07: "Cuándo tengo turno con peluquero"**
- Como usuario quiero consultar la fecha de la próxima tarea de tipo "Turno" por voz
- Para saber cuándo es mi próximo turno sin buscar manualmente
- **Estimación:** M | **Prioridad:** P2

---

### Épica 3: Skills ALACENA (AGT-08 → AGT-10)

**AGT-08: "¿Qué pastas podemos comer hoy si somos 5?"**
- Como usuario quiero que el agente sugiera recetas de pasta para 5 personas según stock actual
- Para decidir qué cocinar por voz cruzando inventario con recetas
- **Estimación:** L | **Prioridad:** P2

**AGT-09: "¿Cuánta leche queda?"**
- Como usuario quiero consultar el stock actual de un item por voz
- Para verificar si necesito comprar algo antes de salir
- **Estimación:** S | **Prioridad:** P1

**AGT-10: "Agregar 2 litros de leche al inventario"**
- Como usuario quiero sumar stock por voz especificando cantidad y item
- Para actualizar el inventario con las manos ocupadas (guardando compras)
- **Estimación:** M | **Prioridad:** P2

---

### Épica 4: Skills ECOSALUD (AGT-11 → AGT-12)

**AGT-11: "¿Cómo dio mi último estudio de colesterol?"**
- Como usuario quiero preguntarle al agente el resultado de mi último registro de colesterol
- Para consultar datos de salud rápidamente sin buscar en el historial
- **Estimación:** S | **Prioridad:** P1

**AGT-12: "Registra que hoy peso 78kg"**
- Como usuario quiero crear un registro de peso por voz con un solo comando
- Para registrar datos de salud en 5 segundos mientras me bajo de la balanza
- **Estimación:** S | **Prioridad:** P2

---

### Épica 5: Integraciones Externas del Agente (AGT-13 → AGT-14)

**AGT-13: Integración con Home Assistant via MQTT**
- Como usuario quiero conectar ECO con Home Assistant para hablarle al sistema desde parlantes inteligentes del hogar
- Para usar ECO desde cualquier habitación sin celular (ej: "Hey, ¿qué tengo pendiente?")
- **Estimación:** XL | **Prioridad:** P3

**AGT-14: Custom skill para Google Assistant/Alexa**
- Como usuario quiero decir "Ok Google, pregúntale a ECO qué tareas tengo" desde mi celular o parlante
- Para integrarme con asistentes de voz que ya uso diariamente
- **Estimación:** XL | **Prioridad:** P3

---

### Épica 6: Inteligencia Conversacional (AGT-15 → AGT-22) ✨ NUEVO

**AGT-15: Detección de intención + entidades (NLU) con fallback**
- Como usuario quiero que el agente entienda la intención de mi mensaje ("quiero saber", "agregá", "mostrá") incluso con errores de tipeo o voz
- Para que la experiencia sea robusta y no dependa de comandos exactos
- **Estimación:** L | **Prioridad:** P1

**AGT-16: Confirmaciones seguras ("¿Confirmás marcar X?")**
- Como usuario quiero que el agente me pida confirmación antes de ejecutar acciones destructivas o ambiguas
- Para evitar que un malentendido borre datos o complete la tarea equivocada
- **Estimación:** M | **Prioridad:** P1

**AGT-17: Deshacer última acción por voz ("undo")**
- Como usuario quiero decir "deshacé eso" o "undo" y que el agente revierta la última acción
- Para corregir errores de interpretación sin tener que ir a la UI
- **Estimación:** M | **Prioridad:** P2

**AGT-18: Modo dictado para captura rápida a HUESHA**
- Como usuario quiero activar "modo dictado" para que todo lo que diga se capture como entrada de diario en HUESHA
- Para grabar pensamientos, reflexiones o eventos del día mientras camino o antes de dormir
- **Estimación:** M | **Prioridad:** P2

**AGT-19: "Daily Brief" por voz (tareas + clima + agenda)**
- Como usuario quiero pedir un resumen matutino que combine tareas del día, clima, eventos y alertas pendientes
- Para arrancar el día con panorama completo en 30 segundos sin abrir la app
- **Estimación:** L | **Prioridad:** P2

**AGT-20: Multi-turn: aclaraciones ("¿cuál leche? descremada/entera")**
- Como usuario quiero que el agente me pregunte aclaraciones cuando mi comando es ambiguo
- Para resolver ambigüedades naturalmente en vez de recibir un error genérico
- **Estimación:** L | **Prioridad:** P2

**AGT-21: Memoria por sesión + resumen compacto persistible**
- Como usuario quiero que el agente mantenga contexto durante la sesión y pueda guardar un resumen al terminar
- Para tener conversaciones largas sin que pierda el hilo después de 3 mensajes
- **Estimación:** L | **Prioridad:** P2

**AGT-22: Comandos peligrosos requieren 2 pasos (seguridad)**
- Como usuario quiero que acciones destructivas (borrar cuenta, eliminar datos masivos) requieran doble confirmación explícita
- Para protegerme de errores irreversibles ejecutados por voz en un descuido
- **Estimación:** M | **Prioridad:** P1

---

### Épica 7: Routing, Personalización y Testing (AGT-23 → AGT-30) ✨ NUEVO

**AGT-23: Skill routing por módulo (MANTIA/ALACENA/etc.)**
- Como sistema quiero un router que dirija cada intención al módulo correcto automáticamente
- Para que el agente sepa que "¿cuánta leche queda?" va a ALACENA y "¿qué tareas tengo?" va a MANTIA
- **Estimación:** M | **Prioridad:** P1

**AGT-24: Soporte bilingüe ES/EN (input mixto)**
- Como usuario quiero que el agente entienda mensajes en español y en inglés (o mezclados)
- Para usar el sistema como me sale natural sin pensar en qué idioma escribo
- **Estimación:** M | **Prioridad:** P3

**AGT-25: Perfil de voz (preferencias, apodos, nombres)**
- Como usuario quiero que el agente recuerde mis preferencias ("a mí me dicen Fal", "la leche que compro es La Serenísima")
- Para personalizar la experiencia sin repetir contexto cada vez
- **Estimación:** M | **Prioridad:** P3

**AGT-26: Respuestas con formato (cards/resúmenes)**
- Como usuario quiero que el agente me responda con formato enriquecido (listas, cards, tablas) cuando corresponda
- Para ver respuestas claras y no un bloque de texto plano sin estructura
- **Estimación:** M | **Prioridad:** P2

**AGT-27: Modo manos libres en mobile (wake + timeout)**
- Como usuario quiero activar "modo manos libres" donde el micrófono queda abierto con timeout
- Para operar ECO cocinando o manejando sin tocar el teléfono cada vez
- **Estimación:** L | **Prioridad:** P3

**AGT-28: Integración con calendario: "bloqueá 30 min para X"**
- Como usuario quiero que el agente cree eventos en mi calendario desde ECO
- Para convertir una tarea MANTIA en un bloque horario sin salir de ECO
- **Estimación:** L | **Prioridad:** P3

**AGT-29: "Explicame por qué" (trazabilidad de respuesta)**
- Como usuario quiero preguntar "¿por qué decís eso?" y que el agente explique su razonamiento
- Para confiar en las recomendaciones del agente y entender de dónde salen los datos
- **Estimación:** M | **Prioridad:** P2

**AGT-30: Testing de skills con suites (frases → asserts)**
- Como desarrollador quiero un framework de testing donde defino frases de entrada y valido la respuesta esperada
- Para garantizar que cambios en el NLU no rompan skills que ya funcionaban (regression testing)
- **Estimación:** L | **Prioridad:** P2

---

# 👥 MULTI-USUARIO Y ROLES (20 historias)

> El sistema de usuarios, hogares, roles y permisos. ECO es hogareño por naturaleza — todo se piensa para familias y convivientes.

---

### Épica 1: Sistema Base de Roles (USR-01 → USR-04)

**USR-01: CRUD de usuarios (admin)**
- Como admin quiero crear, editar y eliminar usuarios del hogar
- Para gestionar quién tiene acceso al sistema
- **Estimación:** M | **Prioridad:** P1

**USR-02: Roles: Admin, Familia, Invitado**
- Como admin quiero asignar roles predefinidos con permisos diferentes a cada usuario
- Para que mi pareja tenga acceso completo pero mi suegra solo vea lo que corresponda
- **Estimación:** M | **Prioridad:** P1

**USR-03: Permisos por rol (Admin: todo, Familia: CRUD propio, Invitado: solo lectura)**
- Como admin quiero definir qué puede hacer cada rol (crear, editar, eliminar, solo leer)
- Para proteger datos sensibles y evitar que invitados modifiquen cosas
- **Estimación:** L | **Prioridad:** P1

**USR-04: Invitar usuario por email**
- Como admin quiero enviar invitación por email para que otra persona se una al hogar
- Para agregar miembros sin necesidad de compartir contraseñas o links manuales
- **Estimación:** M | **Prioridad:** P2

---

### Épica 2: Colaboración Multi-usuario (USR-05 → USR-08)

**USR-05: Ver actividad de otros usuarios (feed)**
- Como usuario quiero ver qué hicieron otros en el hogar hoy ("Juan completó Regar plantas", "María agregó leche a la lista")
- Para estar al tanto de la actividad del hogar sin preguntar
- **Estimación:** M | **Prioridad:** P3

**USR-06: Asignar tareas/items a usuarios específicos**
- Como admin quiero asignar "Sacar basura" a un usuario específico del hogar
- Para distribuir responsabilidades de forma explícita
- **Estimación:** S | **Prioridad:** P2

**USR-07: Notificar a usuario cuando se le asigna algo**
- Como usuario quiero recibir notificación cuando me asignan una tarea o responsabilidad
- Para enterarme sin que me lo digan personalmente
- **Estimación:** S | **Prioridad:** P2

**USR-08: Filtrar por usuario (ver solo mis tareas/items)**
- Como usuario quiero ver solo lo que me corresponde a mí filtrando por mi usuario
- Para concentrarme en mis responsabilidades sin ruido
- **Estimación:** S | **Prioridad:** P2

---

### Épica 3: Hogar/Household (USR-09 → USR-10)

**USR-09: CRUD de "Household" (múltiples hogares por usuario)**
- Como usuario quiero tener acceso a 2 o más hogares (mi casa + casa de mis padres)
- Para gestionar ambos hogares desde la misma cuenta sin datos mezclados
- **Estimación:** L | **Prioridad:** P3

**USR-10: Cambiar entre hogares con selector**
- Como usuario quiero switchear entre mis hogares con un selector rápido
- Para cambiar de contexto sin logout/login ni navegar por menús profundos
- **Estimación:** M | **Prioridad:** P3

---

### Épica 4: Permisos Avanzados y Gobernanza (USR-11 → USR-20) ✨ NUEVO

**USR-11: Invitación por link (expirable) además de email**
- Como admin quiero generar un link de invitación con fecha de expiración
- Para compartir acceso al hogar rápidamente (ej: por WhatsApp) sin depender del email
- **Estimación:** M | **Prioridad:** P2

**USR-12: Transferir ownership del household**
- Como admin quiero transferir la propiedad del hogar a otro usuario
- Para que si yo dejo de administrarlo, otra persona pueda hacerlo sin perder datos
- **Estimación:** M | **Prioridad:** P2

**USR-13: Roles custom por household (no solo 3 fijos)**
- Como admin quiero crear roles personalizados ("Adolescente", "Empleada", "Abuelo") con permisos a medida
- Para adaptar los permisos a la realidad de mi hogar sin forzarlos en 3 categorías genéricas
- **Estimación:** L | **Prioridad:** P3

**USR-14: Permisos por entidad/objeto (ACL granular)**
- Como admin quiero definir permisos a nivel de entidad (ej: "este presupuesto es privado", "esta receta es pública")
- Para compartir selectivamente sin exponer todo el módulo
- **Estimación:** L | **Prioridad:** P1

**USR-15: Compartir selectivo entre hogares (cross-household share)**
- Como usuario quiero compartir una receta o lista con otro hogar sin mover datos
- Para colaborar entre hogares (ej: compartir lista del asado del domingo con la familia extendida)
- **Estimación:** L | **Prioridad:** P3

**USR-16: "Guest mode" real: acceso temporal con expiración**
- Como admin quiero dar acceso temporal a un invitado que expire automáticamente después de N días
- Para que un huésped use ECO mientras se queda en casa sin acceso permanente
- **Estimación:** M | **Prioridad:** P2

**USR-17: Revocar acceso + limpiar tokens/dispositivos asociados**
- Como admin quiero revocar el acceso de un usuario y limpiar todos sus tokens y sesiones activas
- Para que al sacar a alguien del hogar, pierda acceso inmediatamente en todos sus dispositivos
- **Estimación:** M | **Prioridad:** P2

**USR-18: Registro de actividad por household (auditable)**
- Como admin quiero ver un log completo de actividad del hogar: quién hizo qué y cuándo
- Para auditar cambios importantes y resolver dudas ("¿quién borró la receta de torta?")
- **Estimación:** M | **Prioridad:** P2

**USR-19: Asignaciones con estados (pendiente/aceptada/rechazada)**
- Como usuario quiero que cuando me asignan una tarea pueda aceptarla o rechazarla con motivo
- Para que las asignaciones sean colaborativas y no imposiciones unilaterales
- **Estimación:** M | **Prioridad:** P3

**USR-20: Configurar privacidad: qué módulos ve cada rol**
- Como admin quiero elegir qué módulos puede ver cada rol (ej: invitados no ven FINANCIA ni ECOSALUD)
- Para proteger datos sensibles (finanzas, salud) de roles con menos confianza
- **Estimación:** L | **Prioridad:** P2

---

# 🔔 NOTIFICACIONES (20 historias)

> El motor de notificaciones transversal: multi-canal (email, push, SMS, in-app), con reintentos, priorización, dedup y configuración granular por usuario.

---

### Épica 1: Canales Base — Email (NOT-01 → NOT-03)

**NOT-01: Email de tarea vencida (MANTIA)**
- Como usuario quiero recibir email cuando una tarea vence hoy
- Para enterarme incluso si no abrí la app
- **Estimación:** S | **Prioridad:** P2

**NOT-02: Email de stock bajo (ALACENA)**
- Como usuario quiero email cuando un item baja de su umbral de stock
- Para saber que tengo que comprar algo antes de que se acabe
- **Estimación:** S | **Prioridad:** P2

**NOT-03: Email de resumen semanal (ECOSALUD)**
- Como usuario quiero email dominical con resumen de mi semana de salud
- Para ver mi progreso sin tener que abrir la app cada día
- **Estimación:** M | **Prioridad:** P3

---

### Épica 2: Canales Base — Push Móvil (NOT-04 → NOT-06)

**NOT-04: Push de tarea vencida**
- Como usuario quiero push en celular cuando una tarea vence hoy
- Para recibir recordatorio en tiempo real aunque no tenga la app abierta
- **Estimación:** M | **Prioridad:** P2

**NOT-05: Push de item agregado a lista compartida**
- Como usuario quiero push cuando alguien agrega un item urgente a la lista compartida
- Para enterarme al instante si alguien necesita que compre algo
- **Estimación:** S | **Prioridad:** P2

**NOT-06: Push de valor anormal en ECOSALUD**
- Como usuario quiero push si registro un valor de salud fuera de rango (ej: presión >140/90)
- Para actuar rápido ante un indicador de salud preocupante
- **Estimación:** S | **Prioridad:** P2

---

### Épica 3: Canal SMS (NOT-07)

**NOT-07: SMS de alerta crítica (ej: presión muy alta)**
- Como usuario quiero SMS si un valor de salud es peligroso
- Para que la alerta me llegue aunque no tenga datos o push desactivado
- **Estimación:** M | **Prioridad:** P3

---

### Épica 4: Configuración de Notificaciones (NOT-08 → NOT-10)

**NOT-08: Preferencias de notificación por usuario**
- Como usuario quiero elegir qué notificaciones recibir y por qué canal (push sí, email no)
- Para controlar el volumen y canal de las alertas según mi preferencia
- **Estimación:** M | **Prioridad:** P2

**NOT-09: Horario de no molestar**
- Como usuario quiero silenciar notificaciones de 22h a 8h
- Para dormir tranquilo sin alertas de stock bajo a las 3am
- **Estimación:** S | **Prioridad:** P3

**NOT-10: Consolidar notificaciones (digest)**
- Como usuario quiero recibir 1 email diario con todas las alertas agrupadas
- Para evitar recibir 15 emails individuales y tener un resumen condensado
- **Estimación:** M | **Prioridad:** P3

---

### Épica 5: Motor de Notificaciones Robusto (NOT-11 → NOT-16) ✨ NUEVO

**NOT-11: Motor de reintentos + backoff por canal**
- Como sistema quiero reintentar automáticamente notificaciones fallidas con backoff exponencial
- Para que un error temporal del proveedor no pierda una notificación importante
- **Estimación:** L | **Prioridad:** P1

**NOT-12: Dedup (evitar spam por eventos repetidos)**
- Como usuario quiero que el sistema no me envíe la misma notificación 5 veces si el evento se repite
- Para no recibir spam cuando un proceso reintenta o un cron corre seguido
- **Estimación:** M | **Prioridad:** P1

**NOT-13: Priorización (crítica/alta/media/baja)**
- Como sistema quiero clasificar notificaciones por prioridad para decidir canal y urgencia
- Para que una alerta de presión alta use SMS+push pero un digest semanal solo use email
- **Estimación:** M | **Prioridad:** P2

**NOT-14: Plantillas con variables + vista previa**
- Como admin quiero plantillas de notificación con variables dinámicas ({{userName}}, {{taskName}}) y preview
- Para personalizar los mensajes y ver cómo quedan antes de activarlas
- **Estimación:** M | **Prioridad:** P2

**NOT-15: Tracking de entregabilidad (sent/delivered/open/fail)**
- Como admin quiero ver el estado de cada notificación enviada (enviada/entregada/abierta/fallida)
- Para monitorear la salud del sistema de notificaciones y detectar problemas de entrega
- **Estimación:** L | **Prioridad:** P2

**NOT-16: Fallback de canal (push→email→sms según urgencia)**
- Como sistema quiero escalar automáticamente a otro canal si el primario falla o no se confirma lectura
- Para que notificaciones críticas lleguen aunque el push falle (fallback a email, luego SMS)
- **Estimación:** L | **Prioridad:** P2

---

### Épica 6: Notificaciones Avanzadas (NOT-17 → NOT-20) ✨ NUEVO

**NOT-17: Centro de notificaciones in-app (historial)**
- Como usuario quiero ver un historial de todas mis notificaciones dentro de la app
- Para revisar alertas pasadas que no leí en su momento o buscar algo que recibí hace días
- **Estimación:** M | **Prioridad:** P2

**NOT-18: "Acciones" desde notificación (marcar hecho/agregar)**
- Como usuario quiero ejecutar acciones directamente desde la notificación ("Marcar hecho", "Agregar a lista")
- Para resolver pendientes en 1 tap sin abrir la app completa
- **Estimación:** L | **Prioridad:** P2

**NOT-19: Quiet hours avanzadas por día (ej: finde distinto)**
- Como usuario quiero configurar horarios de silencio diferentes para días de semana y fines de semana
- Para no recibir alertas de tareas del hogar los domingos a las 7am pero sí los lunes
- **Estimación:** M | **Prioridad:** P3

**NOT-20: Modo "viaje" (cambia reglas de alertas temporalmente)**
- Como usuario quiero activar modo viaje que suspende notificaciones rutinarias y solo deja pasar críticas
- Para que durante vacaciones ECO me deje en paz con el stock de leche
- **Estimación:** M | **Prioridad:** P3

---

# 💾 BACKUPS Y EXPORTACIÓN (18 historias)

> Proteger los datos del usuario, permitir portabilidad y garantizar que una restauración realmente funcione.

---

### Épica 1: Backups Automáticos (BKP-01 → BKP-03)

**BKP-01: Backup diario automático de base de datos**
- Como admin quiero que se ejecute un backup diario automático de la base de datos
- Para no perder datos ante un fallo — la pregunta no es "si va a pasar" sino "cuándo"
- **Estimación:** M | **Prioridad:** P1

**BKP-02: Retención de backups (30 días)**
- Como admin quiero mantener backups de los últimos 30 días con rotación automática
- Para poder restaurar a un punto específico sin acumular backups infinitamente
- **Estimación:** S | **Prioridad:** P2

**BKP-03: Restaurar desde backup específico**
- Como admin quiero restaurar el sistema desde un backup de hace N días
- Para recuperarme de un error grave (ej: borrado masivo accidental)
- **Estimación:** M | **Prioridad:** P2

---

### Épica 2: Exportación de Datos (BKP-04 → BKP-06)

**BKP-04: Exportar todos mis datos a JSON**
- Como usuario quiero descargar un JSON con todos mis datos personales
- Para tener copia local y cumplir con mi derecho a la portabilidad de datos
- **Estimación:** M | **Prioridad:** P2

**BKP-05: Exportar ALACENA a Excel**
- Como usuario quiero exportar mi inventario a Excel
- Para hacer análisis offline o compartir con alguien que no usa ECO
- **Estimación:** S | **Prioridad:** P3

**BKP-06: Exportar ECOSALUD a PDF**
- Como usuario quiero un PDF con mi histórico médico formateado profesionalmente
- Para llevar al médico un resumen impreso de mi evolución de salud
- **Estimación:** M | **Prioridad:** P2

---

### Épica 3: Importación de Datos (BKP-07 → BKP-08)

**BKP-07: Importar tareas desde CSV**
- Como usuario quiero importar 100 tareas desde un archivo CSV/Excel
- Para migrar desde otra herramienta sin cargar una por una manualmente
- **Estimación:** M | **Prioridad:** P3

**BKP-08: Importar inventario desde plantilla Excel**
- Como usuario quiero cargar mi inventario actual masivamente desde una plantilla Excel
- Para arrancar con ECO sin tipear 200 items uno por uno
- **Estimación:** M | **Prioridad:** P3

---

### Épica 4: Backups Robustos e Integridad (BKP-09 → BKP-14) ✨ NUEVO

**BKP-09: Backups cifrados (KMS)**
- Como admin quiero que los backups estén cifrados con gestión de claves (KMS)
- Para que si alguien accede al storage de backups, no pueda leer datos de usuarios
- **Estimación:** M | **Prioridad:** P1

**BKP-10: Prueba automática de restore (fire drill mensual)**
- Como admin quiero que mensualmente se ejecute un restore de prueba de forma automática con reporte
- Para verificar que los backups realmente funcionan y no descubrirlo en la emergencia
- **Estimación:** L | **Prioridad:** P1

**BKP-11: Backup por tenant/household (export aislado)**
- Como admin quiero poder exportar/restaurar datos de un household específico sin afectar otros
- Para operar sobre un hogar sin riesgo colateral sobre los demás
- **Estimación:** M | **Prioridad:** P2

**BKP-12: Export incremental (desde fecha X)**
- Como usuario quiero exportar solo los datos nuevos o modificados desde una fecha
- Para no bajar 500MB cada vez, solo lo que cambió desde mi último export
- **Estimación:** M | **Prioridad:** P2

**BKP-13: Import con validación + reporte de errores**
- Como usuario quiero que al importar CSV/Excel, el sistema valide cada fila y me muestre errores antes de confirmar
- Para corregir problemas en el archivo antes de cargar datos incorrectos
- **Estimación:** L | **Prioridad:** P2

**BKP-14: Compatibilidad de versiones de plantilla (migrations)**
- Como sistema quiero que las plantillas de import sean versionadas y migrables
- Para que un Excel generado hace 6 meses se pueda importar aunque el schema cambió
- **Estimación:** M | **Prioridad:** P2

---

### Épica 5: Portabilidad y Borrado (BKP-15 → BKP-18) ✨ NUEVO

**BKP-15: Snapshot de medios (fotos/audio) separado de BD**
- Como admin quiero que el backup de archivos media (fotos, audios) se maneje separado de la BD
- Para poder restaurar datos sin descargar 50GB de media o viceversa
- **Estimación:** L | **Prioridad:** P3

**BKP-16: "Takeout" full (zip) con estructura estándar**
- Como usuario quiero descargar un ZIP con todos mis datos en estructura legible (carpetas por módulo, JSON + media)
- Para tener un export humano, no solo un dump técnico
- **Estimación:** M | **Prioridad:** P2

**BKP-17: Política de retención configurable por usuario**
- Como usuario quiero configurar cuánto tiempo se retienen mis datos eliminados (30/60/90 días)
- Para elegir entre "borrado inmediato" y "papelera con recuperación"
- **Estimación:** M | **Prioridad:** P3

**BKP-18: Borrado seguro (crypto-shred) al eliminar cuenta**
- Como usuario quiero que al eliminar mi cuenta, los datos se destruyan criptográficamente (no solo se marquen)
- Para tener certeza de que mis datos no persisten en backups ni storage residual
- **Estimación:** L | **Prioridad:** P2

---

# 🔒 SEGURIDAD Y ADMIN (20 historias)

> Proteger al usuario, proteger el sistema y cumplir con buenas prácticas de seguridad sin convertir la app en un bunker inutilizable.

---

### Épica 1: Autenticación Básica (SEC-01 → SEC-04)

**SEC-01: 2FA (autenticación de dos factores)**
- Como usuario quiero activar autenticación de dos factores (TOTP o SMS)
- Para agregar una capa extra de seguridad a mi cuenta
- **Estimación:** L | **Prioridad:** P3

**SEC-02: Historial de sesiones**
- Como usuario quiero ver dónde estoy logueado (dispositivos, IPs, navegadores, última actividad)
- Para detectar accesos no autorizados y saber cuántos dispositivos tengo activos
- **Estimación:** M | **Prioridad:** P3

**SEC-03: Cerrar sesión remota**
- Como usuario quiero cerrar sesión en un dispositivo que ya no uso o perdí
- Para revocar acceso sin cambiar la contraseña
- **Estimación:** S | **Prioridad:** P3

**SEC-04: Cambio de contraseña**
- Como usuario quiero cambiar mi contraseña fácilmente desde mi perfil
- Para actualizar mi credencial periódicamente o si sospecho compromiso
- **Estimación:** S | **Prioridad:** P2

---

### Épica 2: Logging y Auditoría (SEC-05 → SEC-06)

**SEC-05: Log de acciones críticas (admin)**
- Como admin quiero ver quién eliminó qué y cuándo (log de acciones destructivas)
- Para investigar incidentes y tener trazabilidad en cambios sensibles
- **Estimación:** M | **Prioridad:** P2

**SEC-06: Alerta de login sospechoso**
- Como usuario quiero recibir email si alguien intenta loguearse desde una IP o dispositivo nuevo
- Para detectar intentos de acceso no autorizado en tiempo real
- **Estimación:** M | **Prioridad:** P3

---

### Épica 3: Privacidad y GDPR (SEC-07 → SEC-08)

**SEC-07: Eliminar cuenta y todos los datos**
- Como usuario quiero borrar mi cuenta permanentemente con todos mis datos asociados
- Para ejercer mi derecho al olvido (GDPR compliance)
- **Estimación:** M | **Prioridad:** P2

**SEC-08: Descargar todos mis datos (GDPR)**
- Como usuario quiero descargar copia completa de mis datos personales en formato estándar
- Para ejercer mi derecho a la portabilidad de datos
- **Estimación:** M | **Prioridad:** P2

---

### Épica 4: Autenticación Avanzada (SEC-09 → SEC-12) ✨ NUEVO

**SEC-09: Passkeys (WebAuthn)**
- Como usuario quiero loguedarme con passkeys/biometría (huella, Face ID) en vez de contraseña
- Para tener acceso más seguro y más rápido sin recordar contraseñas
- **Estimación:** L | **Prioridad:** P3

**SEC-10: OAuth/SSO (Google)**
- Como usuario quiero iniciar sesión con mi cuenta de Google en un click
- Para no crear otra contraseña y aprovechar la seguridad de mi cuenta Google
- **Estimación:** L | **Prioridad:** P2

**SEC-11: Password policy + fuerza + blacklist**
- Como admin quiero que el sistema exija contraseñas fuertes y rechace contraseñas comunes (blacklist)
- Para evitar contraseñas débiles como "123456" o "password"
- **Estimación:** M | **Prioridad:** P2

**SEC-12: Bloqueo por intentos fallidos + captcha adaptativo**
- Como sistema quiero bloquear temporalmente tras N intentos fallidos y mostrar captcha adaptativo
- Para proteger contra ataques de fuerza bruta sin bloquear permanentemente al usuario legítimo
- **Estimación:** M | **Prioridad:** P2

---

### Épica 5: Cifrado y Secretos (SEC-13 → SEC-15) ✨ NUEVO

**SEC-13: Cifrado en reposo (BD) + secretos en vault**
- Como admin quiero que datos sensibles estén cifrados en BD y las claves manejadas por un vault externo
- Para que un acceso al storage no exponga datos de usuario en texto plano
- **Estimación:** L | **Prioridad:** P1

**SEC-14: Security headers (CSP, HSTS, etc.)**
- Como desarrollador quiero que la app configure todos los headers de seguridad estándar (CSP, HSTS, X-Frame, etc.)
- Para proteger contra XSS, clickjacking y ataques de downgrade de protocolo
- **Estimación:** S | **Prioridad:** P2

**SEC-15: Permisos por scope para tokens (API/agent/mobile)**
- Como admin quiero que cada token tenga scopes explícitos (read:mantia, write:alacena, etc.)
- Para que un token robado no dé acceso a todo el sistema
- **Estimación:** L | **Prioridad:** P1

---

### Épica 6: Monitoreo de Seguridad (SEC-16 → SEC-20) ✨ NUEVO

**SEC-16: Alertas de cambios sensibles (email/2FA/keys)**
- Como usuario quiero recibir notificación inmediata si alguien cambia mi email, 2FA o API Keys
- Para detectar al instante si me hackearon la cuenta
- **Estimación:** M | **Prioridad:** P2

**SEC-17: "Data access log" por usuario (quién accedió qué)**
- Como usuario quiero ver un log de quién accedió a mis datos y cuándo
- Para tener transparencia sobre el acceso a mi información personal
- **Estimación:** L | **Prioridad:** P2

**SEC-18: Gestión de dispositivos confiables**
- Como usuario quiero marcar dispositivos como "confiables" para que no pidan 2FA cada vez
- Para equilibrar seguridad y comodidad en mis dispositivos habituales
- **Estimación:** M | **Prioridad:** P3

**SEC-19: WAF/rules básicas anti abuso**
- Como admin quiero reglas básicas de WAF que bloqueen patrones de ataque conocidos
- Para proteger la app de bots, scrapers y ataques automatizados sin infraestructura dedicada
- **Estimación:** L | **Prioridad:** P3

**SEC-20: Clasificación de datos (PII) y controles por tipo**
- Como admin quiero que el sistema clasifique datos por sensibilidad (PII, salud, finanzas) y aplique controles diferenciados
- Para cumplir regulaciones y aplicar cifrado/acceso diferenciado según el tipo de dato
- **Estimación:** L | **Prioridad:** P2

---

# 🎨 UX Y ONBOARDING (20 historias)

> La experiencia del usuario en sentido amplio: primera vez, personalización, accesibilidad, errores, búsqueda, productividad.

---

### Épica 1: Onboarding (UXO-01 → UXO-03)

**UXO-01: Tutorial interactivo al primer uso**
- Como usuario nuevo quiero un tutorial guiado paso a paso cuando entro por primera vez
- Para aprender el sistema en 2 minutos sin leer documentación
- **Estimación:** L | **Prioridad:** P2

**UXO-02: Setup wizard (elegir módulos activos)**
- Como usuario nuevo quiero elegir qué módulos activar y cuáles no (solo MANTIA, o todos)
- Para simplificar la interfaz desde el inicio y no abrumarme con 6 módulos vacíos
- **Estimación:** M | **Prioridad:** P2

**UXO-03: Tooltips contextuales**
- Como usuario nuevo quiero ver tooltips de ayuda al pasar el mouse sobre botones o secciones nuevas
- Para entender funciones sin buscar en documentación externa
- **Estimación:** S | **Prioridad:** P3

---

### Épica 2: Personalización Visual (UXO-04 → UXO-06)

**UXO-04: Temas claro/oscuro**
- Como usuario quiero cambiar entre modo claro y oscuro
- Para usar la app cómodamente de noche y adaptarla a mi preferencia visual
- **Estimación:** M | **Prioridad:** P2

**UXO-05: Elegir color primario del sistema**
- Como usuario quiero personalizar el color principal de la app
- Para sentirla "mía" y diferenciarla visualmente de otras apps
- **Estimación:** S | **Prioridad:** P3

**UXO-06: Densidad de interfaz (compacta/normal/espaciosa)**
- Como usuario quiero ajustar el espaciado de la interfaz entre compacta, normal y espaciosa
- Para optimizar la pantalla según si uso desktop grande o celular chico
- **Estimación:** M | **Prioridad:** P3

---

### Épica 3: Accesibilidad (UXO-07 → UXO-10)

**UXO-07: Soporte de teclado completo (shortcuts)**
- Como usuario power quiero navegar solo con teclado (Ctrl+N nueva tarea, Esc cerrar modal, etc.)
- Para ser más productivo sin tocar el mouse
- **Estimación:** L | **Prioridad:** P3

**UXO-08: Tamaño de fuente ajustable**
- Como usuario con dificultad visual quiero agrandar el texto de toda la interfaz
- Para leer cómodamente sin depender del zoom del navegador
- **Estimación:** S | **Prioridad:** P3

**UXO-09: Alto contraste para accesibilidad**
- Como usuario con baja visión quiero un modo de alto contraste
- Para distinguir elementos de la interfaz sin esforzar la vista
- **Estimación:** M | **Prioridad:** P3

**UXO-10: Soporte screen readers (ARIA labels)**
- Como usuario ciego quiero que la app tenga labels ARIA correctos en todos los elementos interactivos
- Para poder navegar completamente con screen reader (VoiceOver, NVDA)
- **Estimación:** L | **Prioridad:** P3

---

### Épica 4: UX de Producto (UXO-11 → UXO-20) ✨ NUEVO

**UXO-11: Estados vacíos por módulo (con CTA útil)**
- Como usuario quiero que cuando un módulo está vacío muestre un estado especial con acción clara
- Para saber qué hacer en vez de ver una pantalla en blanco que parece rota
- **Estimación:** M | **Prioridad:** P2

**UXO-12: Manejo consistente de errores (toasts/codes)**
- Como usuario quiero que los errores se muestren de forma consistente (toast con mensaje y código) en toda la app
- Para entender qué pasó y reportarlo si necesito ayuda
- **Estimación:** M | **Prioridad:** P1

**UXO-13: Deshacer/rehacer (acciones críticas)**
- Como usuario quiero un "Deshacer" (Ctrl+Z o toast con botón) después de borrar o mover algo
- Para corregir errores sin entrar en pánico por haber borrado sin querer
- **Estimación:** L | **Prioridad:** P2

**UXO-14: Bulk actions (seleccionar 20 items y operar)**
- Como usuario quiero seleccionar múltiples items/tareas y aplicar una acción en lote (borrar, categorizar, mover)
- Para gestionar datos masivamente sin hacer click 20 veces
- **Estimación:** M | **Prioridad:** P2

**UXO-15: Import wizard UX (CSV/Excel → mapping)**
- Como usuario quiero un wizard visual que me guíe para importar datos, mapeando columnas Excel a campos de ECO
- Para importar sin conocimientos técnicos ni plantillas rígidas
- **Estimación:** L | **Prioridad:** P2

**UXO-16: Centro de ayuda/FAQ interno + "report issue"**
- Como usuario quiero acceder a un FAQ/ayuda dentro de la app y reportar problemas directamente
- Para resolver dudas sin salir de ECO y reportar bugs con contexto automático
- **Estimación:** M | **Prioridad:** P3

**UXO-17: Búsqueda omnibox (tipo Spotlight/Command-K)**
- Como usuario quiero un buscador global (Ctrl+K) que encuentre tareas, items, recetas, registros y comandos
- Para encontrar cualquier cosa en ECO en 2 segundos sin navegar por menús
- **Estimación:** L | **Prioridad:** P2

**UXO-18: Atajos configurables por usuario**
- Como usuario quiero personalizar los atajos de teclado según mi preferencia
- Para adaptar la productividad a mi flujo personal (ej: vim-like, emacs-like)
- **Estimación:** L | **Prioridad:** P3

**UXO-19: "Focus mode" (solo hoy / solo urgentes)**
- Como usuario quiero activar un modo enfocado que oculte todo menos lo urgente o lo de hoy
- Para concentrarme sin distraerme con tareas futuras o módulos que no necesito ahora
- **Estimación:** M | **Prioridad:** P3

**UXO-20: Layout responsive pro (mobile-first real)**
- Como usuario quiero que toda la app funcione perfectamente en mobile con gestos y layout adaptado
- Para usar ECO como app principal en el celular, no solo una versión "achicada" del desktop
- **Estimación:** L | **Prioridad:** P2

---

# 🏗️ INFRAESTRUCTURA Y DEVOPS (18 historias)

> Lo que el usuario no ve pero lo salva en producción: monitoreo, CI/CD, cache, feature flags, jobs, observabilidad y costos.

---

### Épica 1: Monitoreo (INF-01 → INF-03)

**INF-01: Logs centralizados (Sentry/LogRocket)**
- Como desarrollador quiero ver errores de producción centralizados en Sentry con contexto (usuario, request, stack)
- Para diagnosticar bugs sin pedirle al usuario que reproduzca el problema
- **Estimación:** M | **Prioridad:** P2

**INF-02: Monitoreo de performance (Lighthouse CI)**
- Como desarrollador quiero medir performance en cada deploy con Lighthouse CI
- Para detectar regresiones de velocidad antes de que el usuario las note
- **Estimación:** M | **Prioridad:** P3

**INF-03: Alertas de uptime (cuando cae el servicio)**
- Como admin quiero recibir alerta instantánea si la app cae o responde lento
- Para enterarme del downtime antes que los usuarios
- **Estimación:** S | **Prioridad:** P2

---

### Épica 2: CI/CD (INF-04 → INF-06)

**INF-04: Tests E2E automatizados (Playwright)**
- Como desarrollador quiero tests E2E automatizados que validen flujos completos (login → crear tarea → completar)
- Para detectar bugs de integración que los unit tests no cubren
- **Estimación:** L | **Prioridad:** P2

**INF-05: Preview deployments por PR**
- Como desarrollador quiero un preview automático por cada PR abierto
- Para que reviewers prueben cambios en un entorno real sin mergear a main
- **Estimación:** M | **Prioridad:** P3

**INF-06: Rollback automático si tests fallan**
- Como desarrollador quiero que se revierta el deploy automáticamente si tests post-deploy fallan
- Para que una regresión no quede en producción más de unos minutos
- **Estimación:** M | **Prioridad:** P3

---

### Épica 3: Escalabilidad (INF-07 → INF-08)

**INF-07: Cache de queries pesadas (Redis)**
- Como desarrollador quiero cachear queries lentas (dashboard, reportes, stats) en Redis con TTL
- Para mejorar velocidad de respuesta en las vistas más usadas
- **Estimación:** L | **Prioridad:** P3

**INF-08: CDN para assets estáticos**
- Como usuario quiero que imágenes y assets carguen desde CDN geográficamente distribuido
- Para tener carga rápida independientemente de mi ubicación
- **Estimación:** S | **Prioridad:** P3

---

### Épica 4: Pipeline y Entorno (INF-09 → INF-13) ✨ NUEVO

**INF-09: Gestión de secretos por entorno (Vault/Supabase secrets)**
- Como desarrollador quiero que los secretos (API keys, DB passwords) estén en un vault por entorno (dev/staging/prod)
- Para no hardcodear secretos ni compartirlos por Slack
- **Estimación:** M | **Prioridad:** P1

**INF-10: Migraciones DB en CI/CD con rollback seguro**
- Como desarrollador quiero que las migraciones Prisma se ejecuten automáticamente en CI/CD con posibilidad de rollback
- Para que los deploys no requieran pasos manuales de DB y un error de migración no destruya prod
- **Estimación:** L | **Prioridad:** P1

**INF-11: Jobs/colas (background worker) con monitoreo**
- Como desarrollador quiero un sistema de cola de jobs (Bull/BullMQ) con dashboard de monitoreo
- Para procesar backups, emails, imports y tareas pesadas sin bloquear el request del usuario
- **Estimación:** L | **Prioridad:** P1

**INF-12: Feature flags (activar/desactivar features)**
- Como desarrollador quiero activar/desactivar features progresivamente por usuario o porcentaje
- Para lanzar features experimentales sin riesgo y hacer rollback instantáneo si fallan
- **Estimación:** M | **Prioridad:** P2

**INF-13: Config central (remote config)**
- Como admin quiero cambiar configuración de la app sin re-deploy (límites, textos, flags)
- Para ajustar parámetros operativos en caliente
- **Estimación:** M | **Prioridad:** P3

---

### Épica 5: Observabilidad y Costos (INF-14 → INF-18) ✨ NUEVO

**INF-14: Cost monitoring + alertas (infra + APIs)**
- Como admin quiero dashboard de costos de infraestructura y APIs externas con alertas por umbral
- Para detectar si un bug o un abuso está generando costos inesperados
- **Estimación:** M | **Prioridad:** P2

**INF-15: SLO/SLI (latencia, errores, uptime)**
- Como equipo quiero definir SLOs (99.5% uptime, p95 <500ms) con métricas automatizadas
- Para medir objetivamente la salud del servicio y priorizar deuda técnica
- **Estimación:** M | **Prioridad:** P2

**INF-16: Observabilidad de cron/jobs (éxito/falla/duración)**
- Como desarrollador quiero ver el estado de cada job/cron (éxito, falla, duración, última ejecución)
- Para detectar jobs silenciosamente rotos que nadie nota hasta que el backup lleva 3 semanas sin correr
- **Estimación:** M | **Prioridad:** P2

**INF-17: Load testing (k6) para endpoints críticos**
- Como desarrollador quiero correr tests de carga automatizados en staging antes de cada release
- Para verificar que los cambios no rompan performance bajo carga real
- **Estimación:** L | **Prioridad:** P3

**INF-18: Gestión de logs sensibles (redaction)**
- Como desarrollador quiero que los logs redacten automáticamente datos sensibles (passwords, tokens, PII)
- Para que un acceso a logs no exponga datos de usuario
- **Estimación:** M | **Prioridad:** P2

---

# 🧠 DATOS, BÚSQUEDA Y CONOCIMIENTO (10 historias) ✨ NUEVO

> La capa de datos transversal: búsqueda global, timeline unificada, relaciones entre entidades, tags compartidos y motor de recomendaciones. Lo que conecta los módulos.

---

### Épica 1: Búsqueda e Índice (DAT-01 → DAT-03)

**DAT-01: Búsqueda global real (full-text + filtros + ranking)**
- Como usuario quiero buscar en todo ECO con un solo campo de texto, con resultados rankeados por relevancia
- Para encontrar "leche" y ver el item de ALACENA, la tarea de MANTIA, la receta de milanesas y el gasto de FINANCIA — todo junto
- **Estimación:** L | **Prioridad:** P1

**DAT-02: Índice unificado de entidades (items/tareas/recetas/personas)**
- Como sistema quiero un índice unificado de todas las entidades de todos los módulos
- Para alimentar búsqueda global, timeline, relaciones y autocompletados de forma consistente
- **Estimación:** L | **Prioridad:** P2

**DAT-03: Timeline transversal (eventos de todos los módulos)**
- Como usuario quiero ver una línea de tiempo que muestre eventos de todos los módulos en orden cronológico
- Para ver "un día como hoy" con las tareas que hice, lo que comí, mis registros de salud, los gastos y lo que escribí en HUESHA
- **Estimación:** L | **Prioridad:** P1

---

### Épica 2: Calidad de Datos (DAT-04 → DAT-05)

**DAT-04: Dedupe/merge de entidades (evitar duplicados)**
- Como usuario quiero que el sistema detecte entidades duplicadas y me ofrezca fusionarlas
- Para no tener "Leche" y "leche descremada" como items separados cuando son lo mismo
- **Estimación:** L | **Prioridad:** P2

**DAT-05: Etiquetas globales (tags) reutilizables por módulos**
- Como usuario quiero crear tags que se puedan usar en cualquier módulo (ej: "urgente", "para el finde", "viaje")
- Para categorizar transversalmente y filtrar por contexto sin importar el módulo
- **Estimación:** M | **Prioridad:** P2

---

### Épica 3: Relaciones y Conocimiento (DAT-06 → DAT-10)

**DAT-06: Motor de relaciones (item↔receta↔compra↔salud)**
- Como sistema quiero modelar relaciones explícitas entre entidades de distintos módulos
- Para conectar "compré leche" (FINANCIA) con "leche en stock" (ALACENA) con "receta de flan" con "gasto en lácteos"
- **Estimación:** L | **Prioridad:** P2

**DAT-07: Auditoría de cambios por entidad (diff + historial)**
- Como usuario quiero ver el historial de cambios de cualquier entidad (quién cambió qué, cuándo y valor anterior)
- Para entender cómo evolucionó un dato y deshacer cambios no deseados
- **Estimación:** M | **Prioridad:** P2

**DAT-08: "Snapshots" de estado (qué había en el freezer tal día)**
- Como usuario quiero consultar el estado del inventario en una fecha pasada
- Para responder "¿qué teníamos en el freezer el 15 de enero?" sin depender de mi memoria
- **Estimación:** L | **Prioridad:** P3

**DAT-09: Motor de recomendaciones transversal (basado en historial)**
- Como usuario quiero que ECO me recomiende acciones basándose en mis patrones
- Para recibir sugerencias tipo "solés comprar café los viernes, ¿agregamos a la lista?"
- **Estimación:** L | **Prioridad:** P3

**DAT-10: Export de grafo de conocimiento (para análisis personal)**
- Como usuario quiero exportar las relaciones entre entidades como grafo (JSON-LD o similar)
- Para visualizar o analizar las conexiones de mi vida doméstica con herramientas externas
- **Estimación:** M | **Prioridad:** P3

---

# 🔌 INTEGRACIONES EXTERNAS (10 historias) ✨ NUEVO

> Conectores con servicios externos. No reemplazamos el servicio: capturamos metadata relevante para que ECO tenga contexto completo del día/vida.

---

### Épica 1: Google Workspace (INT-01 → INT-03)

**INT-01: Conectar Google (OAuth) para Gmail/Calendar**
- Como usuario quiero autorizar mi cuenta Google para que ECO acceda a Calendar y Gmail (lectura)
- Para centralizar eventos y emails relevantes en la timeline de ECO
- **Estimación:** L | **Prioridad:** P2

**INT-02: Import de eventos de Calendar a timeline**
- Como usuario quiero que los eventos de mi Google Calendar aparezcan en la timeline transversal
- Para ver "tenía reunión de 10 a 11" junto a lo que cociné, registré de salud o gasté: el día completo
- **Estimación:** M | **Prioridad:** P2

**INT-03: Import de emails "relevantes" a timeline (opt-in)**
- Como usuario quiero marcar ciertos emails para que se importen como referencia en la timeline
- Para capturar recibos, confirmaciones de turno o info importante sin copiar manualmente
- **Estimación:** L | **Prioridad:** P3

---

### Épica 2: Entretenimiento y Cultura (INT-04 → INT-06)

**INT-04: Spotify: guardar discos escuchados y linkear a día**
- Como usuario quiero que ECO capture lo que escuché en Spotify y lo vincule al día en HUESHA
- Para que mi timeline tenga contexto musical: "ese día escuché Spinetta"
- **Estimación:** L | **Prioridad:** P3

**INT-05: Letterboxd: sync de películas vistas + ratings**
- Como usuario quiero sincronizar mi historial de Letterboxd con HUESHA
- Para que las películas que vi aparezcan automáticamente en mi línea de vida sin duplicar carga
- **Estimación:** L | **Prioridad:** P3

**INT-06: YouTube: registrar videos vistos (historial)**
- Como usuario quiero importar mi historial de YouTube como metadata
- Para recordar qué documentales o charlas vi en un período
- **Estimación:** L | **Prioridad:** P4

---

### Épica 3: Mensajería y Dispositivos (INT-07 → INT-08)

**INT-07: WhatsApp: importar exports y mapear contactos**
- Como usuario quiero importar conversaciones exportadas de WhatsApp y vincularlas a personas conocidas
- Para que las comunicaciones archivadas en HUESHA tengan contexto real (quién, cuándo, sobre qué)
- **Estimación:** L | **Prioridad:** P2

**INT-08: Home Assistant: eventos (sensores) a timeline**
- Como usuario quiero que eventos de Home Assistant (sensor de puerta, temperatura, presencia) se registren en ECO
- Para cruzar "la casa estuvo a 35°C" con "ese día me sentí mal" y encontrar correlaciones
- **Estimación:** XL | **Prioridad:** P3

---

### Épica 4: Plataforma de Integraciones (INT-09 → INT-10)

**INT-09: Webhooks genéricos entrantes (IFTTT/Zapier-like)**
- Como usuario quiero configurar webhooks entrantes que creen entidades en ECO al recibir payload
- Para conectar cualquier servicio externo sin desarrollo custom (ej: "cuando Mercado Libre confirma compra → crear gasto en FINANCIA")
- **Estimación:** L | **Prioridad:** P3

**INT-10: Conectores "pluggable" (framework para nuevas integraciones)**
- Como desarrollador quiero un framework de conectores con interfaz estándar (auth, sync, mapping)
- Para que agregar una integración nueva (ej: Goodreads, Strava) sea implementar una interfaz, no reescribir todo
- **Estimación:** XL | **Prioridad:** P3

---

# 🏛️ GOBERNANZA, CUMPLIMIENTO Y POLÍTICA DE DATOS (6 historias) ✨ NUEVO

> Transparencia, consentimiento y control real del usuario sobre sus datos. No es "compliance checkbox": es confianza.

---

### Épica 1: Transparencia y Consentimiento (GOV-01 → GOV-02)

**GOV-01: Centro de privacidad: qué se guarda y por qué**
- Como usuario quiero ver un panel claro que explique qué datos guarda ECO, por qué, y por cuánto tiempo
- Para confiar en el sistema sabiendo exactamente qué se almacena y dónde
- **Estimación:** M | **Prioridad:** P2

**GOV-02: Consentimiento por integración (scopes y revocación)**
- Como usuario quiero dar consentimiento explícito por cada integración y poder revocarlo en cualquier momento
- Para controlar qué servicios externos acceden a mis datos y cortar acceso cuando quiera
- **Estimación:** M | **Prioridad:** P2

---

### Épica 2: Políticas de Datos (GOV-03 → GOV-04)

**GOV-03: Retención por tipo de dato (logs, audios, etc.)**
- Como admin quiero definir políticas de retención diferentes por tipo de dato (logs 90 días, audios 1 año, salud indefinido)
- Para cumplir regulaciones y no acumular datos innecesarios
- **Estimación:** L | **Prioridad:** P2

**GOV-04: Políticas de compartición (household vs privado)**
- Como usuario quiero definir qué datos son compartidos con el hogar y cuáles son estrictamente privados
- Para que mi registro de salud mental o mis finanzas personales no sean visibles para otros del hogar
- **Estimación:** M | **Prioridad:** P2

---

### Épica 3: Export y Modos de Privacidad (GOV-05 → GOV-06)

**GOV-05: Export "legible" (human-readable) además de JSON**
- Como usuario quiero que el export de mis datos incluya una versión legible (PDF/HTML) además del JSON técnico
- Para poder leer mis datos sin herramientas de desarrollo
- **Estimación:** M | **Prioridad:** P3

**GOV-06: Modo "máxima privacidad" (desactiva features sensibles)**
- Como usuario quiero activar un modo de privacidad máxima que desactive tracking, integraciones y features que recolectan datos extra
- Para usar ECO de forma minimalista sin compartir nada más allá de lo esencial
- **Estimación:** M | **Prioridad:** P3

---

# 📊 RESUMEN GENERAL

## Distribución por Prioridad

| Prioridad | Cantidad | Porcentaje |
|-----------|----------|------------|
| **P1** | 28 | 14% |
| **P2** | 95 | 47% |
| **P3** | 72 | 36% |
| **P4** | 7 | 3% |
| **Total** | **202** | 100% |

## Estimación por Área

| Área | Historias | S | M | L | XL | Horas aprox |
|------|-----------|---|---|---|----|----|
| API para IA | 30 | 3 | 16 | 10 | 1 | ~200h |
| Agente Conversacional | 30 | 7 | 11 | 8 | 4 | ~233h |
| Multi-usuario y Roles | 20 | 3 | 10 | 7 | 0 | ~135h |
| Notificaciones | 20 | 4 | 9 | 5 | 2 | ~121h |
| Backups y Exportación | 18 | 1 | 10 | 5 | 2 | ~118h |
| Seguridad y Admin | 20 | 3 | 7 | 10 | 0 | ~143h |
| UX y Onboarding | 20 | 3 | 7 | 8 | 2 | ~143h |
| Infraestructura | 18 | 1 | 9 | 6 | 2 | ~122h |
| Datos y Conocimiento | 10 | 0 | 3 | 7 | 0 | ~88h |
| Integraciones Externas | 10 | 0 | 1 | 7 | 2 | ~116h |
| Gobernanza | 6 | 0 | 5 | 1 | 0 | ~40h |
| **TOTAL** | **202** | **25** | **88** | **74** | **15** | **~1,459h** |

## Totales del Proyecto ECO (todas las historias)

| Módulo/Área | Historias | Horas aprox |
|-------------|-----------|------------|
| MANTIA | 100 | ~598h |
| ALACENA | 100 | ~548h |
| ECOSALUD | 100 | ~621h |
| Lista de Compras | 36 | ~294h |
| HUESHA | 100 | ~542h |
| FINANCIA | 100 | ~503h |
| **Transversales** | **202** | **~1,459h** |
| **TOTAL ECO** | **738** | **~4,565h** |

---

*Archivo generado el 6 de febrero de 2026 — Sprint 0, Sesión 7*
