# 🚀 ECO - Backlog Completo (295 Historias)

**Fecha generación:** 5 de febrero de 2026  
**Última actualización:** 5 de febrero de 2026  
**Objetivo:** Visión completa del producto con horizonte libre

---

## 📦 Resumen de Distribución

| Módulo/Épica | Historias | Estado |
|--------------|-----------|--------|
| **MANTIA** | 20 | 7 en Sprint 1 |
| **ALACENA** | 22 | 3 en Sprint 1 |
| **Lista de Compras** | 18 | 5 en Sprint 1 |
| **ECOSALUD** | 20 | 3 en Sprint 1 |
| **API para IA** | 15 | - |
| **Agente Conversacional** | 12 | - |
| **Multi-usuario/Roles** | 10 | - |
| **Notificaciones** | 10 | - |
| **Backups/Exportación** | 8 | - |
| **Seguridad/Admin** | 8 | - |
| **UX/Onboarding** | 10 | - |
| **Infraestructura** | 8 | - |
| **HUESHA** | 68 | 0 |
| **FINANCIA** | 66 | 0 |
| **TOTAL** | **295** | **18** |

---

# 📋 MANTIA - Gestión de Tareas (20 historias)

### Épica 1: CRUD y Operaciones Básicas (Sprint 1)
- ✅ **MAN-01:** CRUD de tareas (#18)
- ✅ **MAN-02:** Marcar tarea como hecha (#19)
- ✅ **MAN-03:** Registrar ejecución (#20)
- ✅ **MAN-04:** Vista de pendientes (#21)
- ✅ **MAN-05:** Cálculo de próxima fecha (#22)
- ✅ **MAN-06:** Filtros por estado (#23)
- ✅ **MAN-07:** Categorización de tareas (#24)

### Épica 2: UX y Notificaciones
**MAN-08: Recordatorios por email** (#66)
Como usuario quiero recibir email 1 día antes de tarea vencida para no olvidar tareas importantes.  
**Estimación:** M | **Prioridad:** P2

**MAN-09: Vista calendario mensual** (#36)
Como usuario quiero ver tareas en calendario visual para planificar mejor mi mes.  
**Estimación:** L | **Prioridad:** P2

**MAN-10: Arrastrar y soltar para reprogramar** (#67)
Como usuario quiero arrastrar tarea en calendario para cambiar fecha fácilmente.  
**Estimación:** M | **Prioridad:** P3

**MAN-11: Notificación push móvil**  
Como usuario quiero recibir push en mi celular cuando tarea vence hoy.  
**Estimación:** M | **Prioridad:** P2

### Épica 3: Integraciones Externas
**MAN-12: Sincronización Google Calendar** (#68)
Como usuario quiero exportar tareas a mi Google Calendar para verlas en mi calendario personal.  
**Estimación:** L | **Prioridad:** P3

**MAN-13: Webhooks para integraciones** (#37)
Como desarrollador quiero configurar webhooks al completar tareas para integrar con Notion, Zapier, etc.  
**Estimación:** M | **Prioridad:** P3

**MAN-14: Importar tareas desde Todoist** (#38)
Como usuario quiero importar mis tareas existentes de Todoist para migrar al sistema.  
**Estimación:** L | **Prioridad:** P3

### Épica 4: Gamificación y Estadísticas
**MAN-15: Dashboard de estadísticas** (#69)
Como usuario quiero ver cuántas tareas completé este mes para motivarme y ver mi progreso.  
**Estimación:** M | **Prioridad:** P2

**MAN-16: Racha de días consecutivos completando tareas** (#70)
Como usuario quiero ver mi racha de días sin romper para gamificar mi productividad.  
**Estimación:** S | **Prioridad:** P3

**MAN-17: Puntos por completar tareas** (#71)
Como usuario quiero ganar puntos según complejidad de tarea para tener sistema de recompensas.  
**Estimación:** M | **Prioridad:** P3

### Épica 5: Colaboración
**MAN-18: Asignar tarea a otro miembro del hogar** (#39)
Como usuario quiero asignar tarea a mi pareja para delegar responsabilidades.  
**Estimación:** M | **Prioridad:** P2

**MAN-19: Comentarios en tareas** (#40)
Como usuario quiero comentar en una tarea para coordinar con otros.  
**Estimación:** S | **Prioridad:** P3

**MAN-20: Historial de quién completó cada tarea** (#72)
Como usuario quiero ver quién hizo qué para llevar registro familiar.  
**Estimación:** S | **Prioridad:** P3

---

# 🏺 ALACENA - Inventario (22 historias)

### Épica 1: CRUD y Stock (Sprint 1)
- ✅ **ALA-05:** Categorización y filtros (#33)
- ✅ **ALA-06:** Estados de stock (#34)
- ✅ **ALA-07:** Búsqueda de items (#35)

### Épica 2: Mejoras de UX
**ALA-08: Escaneo de código de barras** (#73)
Como usuario quiero escanear código de barras al agregar item para no escribir manualmente.  
**Estimación:** L | **Prioridad:** P2

**ALA-09: Sugerencias de items frecuentes** (#74)
Como usuario quiero ver items que suelo comprar al crear nuevo para agregar más rápido.  
**Estimación:** M | **Prioridad:** P3

**ALA-10: Vista grid con fotos** (#41)
Como usuario quiero ver items con fotos en grid para identificar visualmente.  
**Estimación:** M | **Prioridad:** P2

**ALA-11: Ordenar por fecha de vencimiento** (#42)
Como usuario quiero ver items ordenados por vencimiento para consumir primero lo que vence antes.  
**Estimación:** S | **Prioridad:** P1

**ALA-12: Subir foto del item** (#75)
Como usuario quiero tomar foto del producto para recordar cuál es.  
**Estimación:** M | **Prioridad:** P2

### Épica 3: Ubicaciones Físicas
**ALA-13: CRUD de ubicaciones (estantes, cajones)** (#76)
Como usuario quiero definir ubicaciones físicas en mi casa para saber dónde está cada cosa.  
**Estimación:** M | **Prioridad:** P2

**ALA-14: Asignar ubicación a items** (#77)
Como usuario quiero asignar ubicación al item para encontrarlo fácilmente.  
**Estimación:** S | **Prioridad:** P2

**ALA-15: Buscar por ubicación** (#78)
Como usuario quiero ver todos los items de una ubicación para revisar un estante completo.  
**Estimación:** S | **Prioridad:** P2

**ALA-16: Generar QR por ubicación** (#79)
Como usuario quiero poner QR en cada estante para escanear y ver inventario de ese lugar.  
**Estimación:** M | **Prioridad:** P3

### Épica 4: Recetas y Planificación
**ALA-17: CRUD de recetas** (#43)
Como usuario quiero crear recetas con ingredientes para planificar comidas.  
**Estimación:** L | **Prioridad:** P2

**ALA-18: Ver si tengo ingredientes para receta** (#80)
Como usuario quiero saber si tengo stock para hacer una receta para decidir qué cocinar.  
**Estimación:** M | **Prioridad:** P2

**ALA-19: Descontar ingredientes al cocinar** (#81)
Como usuario quiero descontar automáticamente ingredientes al marcar receta como cocinada para mantener stock actualizado.  
**Estimación:** M | **Prioridad:** P3

**ALA-20: Sugerencias de recetas según stock disponible** (#82)
Como usuario quiero ver qué recetas puedo hacer con lo que tengo para aprovechar ingredientes.  
**Estimación:** L | **Prioridad:** P3

### Épica 5: Compartir y Colaboración
**ALA-21: Compartir item con otro usuario del hogar** (#83)
Como usuario quiero notificar a alguien que agregué un item para coordinar compras.  
**Estimación:** M | **Prioridad:** P3

**ALA-22: Historial de consumo por persona** (#84)
Como usuario quiero ver quién consumió qué para entender patrones de uso.  
**Estimación:** M | **Prioridad:** P3

### Épica 6: Alertas Inteligentes
**ALA-23: Alerta de vencimiento próximo** (#85)
Como usuario quiero recibir notificación 3 días antes de vencimiento para no desperdiciar comida.  
**Estimación:** M | **Prioridad:** P2

**ALA-24: Alerta de stock bajo automático**  
Como usuario quiero que el sistema detecte cuando leche baja de 1L y me notifique.  
**Estimación:** M | **Prioridad:** P2

**ALA-25: Predicción de cuándo se acabará un item**  
Como usuario quiero ver estimación de cuándo se acabará el café según mi consumo promedio.  
**Estimación:** L | **Prioridad:** P3

**ALA-26: Generar lista de compras automática desde stock bajo**  
Como usuario quiero que items con stock bajo se agreguen automáticamente a lista de compras.  
**Estimación:** M | **Prioridad:** P2

---

# 🛒 Lista de Compras (18 historias)

### Épica 1: CRUD Básico (Sprint 1)
- ✅ **LST-01:** CRUD manual de items (#25)
- ✅ **LST-02:** Agregar desde ALACENA (#26)
- ✅ **LST-03:** Marcar como comprado (#27)
- ✅ **LST-04:** Vista por categorías (#28)
- ✅ **LST-05:** Sugerencias basadas en historial (#29)

### Épica 2: Optimización Compra
**LST-06: Ordenar por supermercado** (#44)
Como usuario quiero agrupar items por supermercado para optimizar mi recorrido de compra.  
**Estimación:** M | **Prioridad:** P2

**LST-07: Estimar costo total** (#86)
Como usuario quiero ver precio estimado de la lista para saber cuánto gastaré.  
**Estimación:** M | **Prioridad:** P2

**LST-08: Agregar precio real al comprar** (#45)
Como usuario quiero registrar precio real al marcar como comprado para tener historial de precios.  
**Estimación:** S | **Prioridad:** P2

**LST-09: Comparar precios históricos** (#87)
Como usuario quiero ver si el precio subió/bajó vs última compra para detectar inflación.  
**Estimación:** M | **Prioridad:** P3

**LST-10: Sugerir supermercado más barato**  
Como usuario quiero que el sistema me sugiera dónde comprar según precios históricos.  
**Estimación:** L | **Prioridad:** P3

### Épica 3: Colaboración
**LST-11: Compartir lista con otros usuarios** (#46)
Como usuario quiero compartir lista con mi pareja para que ambos veamos y editemos.  
**Estimación:** L | **Prioridad:** P2

**LST-12: Notificación push al agregar item urgente** (#88)
Como usuario quiero notificar a otros cuando agrego item urgente para que alguien más pueda comprarlo.  
**Estimación:** M | **Prioridad:** P3

**LST-13: Ver quién agregó cada item** (#89)
Como usuario quiero ver quién pidió cada cosa para coordinar.  
**Estimación:** S | **Prioridad:** P3

**LST-14: Marcar item como "yo lo compro"** (#47)
Como usuario quiero reservar items que voy a comprar yo para que otros no dupliquen.  
**Estimación:** S | **Prioridad:** P2

### Épica 4: Integraciones
**LST-15: Sincronizar con Notion** (#48)
Como usuario quiero exportar/importar lista desde Notion para integrar con mi sistema personal.  
**Estimación:** L | **Prioridad:** P3

**LST-16: Enviar lista por WhatsApp**  
Como usuario quiero compartir lista por WhatsApp con alguien que va al super.  
**Estimación:** M | **Prioridad:** P3

**LST-17: Comando de voz para agregar items** (#90)
Como usuario quiero decir "Agregar leche a la lista" por voz para agregar mientras cocino sin tocar el móvil.  
**Estimación:** XL | **Prioridad:** P3

**LST-18: Importar receta como lista de compras**  
Como usuario quiero convertir una receta en lista de compras descontando lo que ya tengo.  
**Estimación:** M | **Prioridad:** P2

---

# 💚 ECOSALUD - Salud y Bienestar (20 historias)

### Épica 1: Registro Básico (Sprint 1)
- ✅ **ECO-01:** Registro manual de datos (#30)
- ✅ **ECO-02:** Histórico cronológico (#31)
- ✅ **ECO-03:** Tipos de registro (#32)

### Épica 2: Visualización y Análisis
**ECO-04: Gráficos de evolución** (#91)
Como usuario quiero ver gráfico de mi peso en últimos 3 meses para visualizar mi progreso.  
**Estimación:** M | **Prioridad:** P2

**ECO-05: Alertas de valores anormales** (#92)
Como usuario quiero recibir alerta si presión está alta (>140/90) para actuar rápido.  
**Estimación:** M | **Prioridad:** P2

**ECO-06: Exportar datos a PDF** (#93)
Como usuario quiero exportar histórico a PDF para llevar al médico.  
**Estimación:** M | **Prioridad:** P2

**ECO-07: Comparar con metas**  
Como usuario quiero ver si estoy cumpliendo mi meta de peso en gráfico.  
**Estimación:** S | **Prioridad:** P2

### Épica 3: Metas y Recordatorios
**ECO-08: Definir metas (ej: bajar 5kg)** (#49)
Como usuario quiero definir meta de peso para trackear mi objetivo.  
**Estimación:** M | **Prioridad:** P3

**ECO-09: Recordatorio diario de registro** (#94)
Como usuario quiero recordatorio diario para pesarme y mantener hábito constante.  
**Estimación:** S | **Prioridad:** P2

**ECO-10: Racha de registros consecutivos** (#95)
Como usuario quiero ver mi racha de días consecutivos registrando para motivarme a no romperla.  
**Estimación:** S | **Prioridad:** P3

**ECO-11: Proyección de meta**  
Como usuario quiero ver cuándo llegaré a mi meta según tendencia actual.  
**Estimación:** M | **Prioridad:** P3

### Épica 4: Integraciones Salud
**ECO-12: Importar desde Google Fit** (#50)
Como usuario quiero importar pasos y peso desde Google Fit para centralizar todos mis datos.  
**Estimación:** L | **Prioridad:** P3

**ECO-13: Integración con Apple Health** (#96)
Como usuario iOS quiero importar datos de Apple Health para no duplicar registros.  
**Estimación:** L | **Prioridad:** P3

**ECO-14: Compartir datos con médico** (#97)
Como usuario quiero generar link de acceso temporal para mi médico vea mi histórico sin darle acceso total.  
**Estimación:** L | **Prioridad:** P3

**ECO-15: Sincronizar con báscula inteligente**  
Como usuario quiero que mi báscula Xiaomi registre automáticamente mi peso en ECO.  
**Estimación:** L | **Prioridad:** P3

### Épica 5: Tipos de Registro Avanzados
**ECO-16: Registro de medicamentos tomados**  
Como usuario quiero registrar qué medicamentos tomé y a qué hora.  
**Estimación:** M | **Prioridad:** P2

**ECO-17: Recordatorio de tomar medicamento** (#51)
Como usuario quiero recibir alerta diaria para tomar mi medicamento.  
**Estimación:** M | **Prioridad:** P2

**ECO-18: Registro de estados de ánimo** (#98)
Como usuario quiero registrar mi estado de ánimo diario para ver patrones emocionales.  
**Estimación:** M | **Prioridad:** P3

**ECO-19: Registro de síntomas** (#99)
Como usuario quiero anotar síntomas (dolor cabeza, mareos) para mostrar al médico.  
**Estimación:** M | **Prioridad:** P3

**ECO-20: Agregar foto de estudio médico** (#100)
Como usuario quiero subir foto de análisis de sangre para tenerlo digitalizado.  
**Estimación:** M | **Prioridad:** P2

### Épica 6: Análisis Inteligente
**ECO-21: Detectar correlaciones (ej: peso vs estado ánimo)**  
Como usuario quiero que el sistema me muestre si hay relación entre mi peso y mi ánimo.  
**Estimación:** XL | **Prioridad:** P3

**ECO-22: Resumen semanal automático**  
Como usuario quiero recibir email los domingos con resumen de mi semana de salud.  
**Estimación:** M | **Prioridad:** P3

---

# 🤖 API para IA (15 historias)

### Épica 1: GraphQL Schema Base
**API-01: Schema GraphQL para MANTIA** (#52)
Como desarrollador quiero queries/mutations GraphQL para tareas (getTasks, createTask, updateTask, etc.).  
**Estimación:** L | **Prioridad:** P1

**API-02: Schema GraphQL para ALACENA** (#53)
Como desarrollador quiero queries/mutations GraphQL para inventario (getItems, updateStock, etc.).  
**Estimación:** L | **Prioridad:** P1

**API-03: Schema GraphQL para Lista de Compras** (#54)
Como desarrollador quiero queries/mutations GraphQL para listas (getShoppingList, addItem, etc.).  
**Estimación:** M | **Prioridad:** P1

**API-04: Schema GraphQL para ECOSALUD** (#55)
Como desarrollador quiero queries/mutations GraphQL para registros salud (getHealthRecords, addWeight, etc.).  
**Estimación:** M | **Prioridad:** P1

**API-05: Subscriptions GraphQL para cambios en tiempo real** (#56)
Como desarrollador quiero subscriptions para notificar cuando cambia inventario/lista.  
**Estimación:** L | **Prioridad:** P2

### Épica 2: Autenticación API
**API-06: Generar API Key por usuario** (#57)
Como usuario quiero generar API Key personal para usar con agente IA.  
**Estimación:** M | **Prioridad:** P1

**API-07: Rotar/Revocar API Keys**  
Como usuario quiero desactivar API Key antigua si se compromete.  
**Estimación:** S | **Prioridad:** P2

**API-08: Rate limiting por API Key** (#58)
Como admin quiero limitar requests por minuto por API Key para evitar abuso.  
**Estimación:** M | **Prioridad:** P2

### Épica 3: Queries Conversacionales
**API-09: Query "getNextTasks" optimizado para voz** (#101)
Como agente IA quiero obtener próximas 3 tareas de forma simple para responder pregunta de voz.  
**Estimación:** S | **Prioridad:** P1

**API-10: Query "whatCanICookToday" para recetas** (#102)
Como agente IA quiero saber qué recetas se pueden hacer con stock actual para 5 personas.  
**Estimación:** M | **Prioridad:** P2

**API-11: Query "getHealthSummary" con parámetros flexibles**  
Como agente IA quiero obtener resumen de salud (último colesterol, peso actual, etc.).  
**Estimación:** M | **Prioridad:** P2

**API-12: Mutation "addItemByVoice" con parsing de lenguaje natural**  
Como agente IA quiero interpretar "agregar leche y pan" y crear 2 items en lista.  
**Estimación:** L | **Prioridad:** P2

### Épica 4: Webhooks Salientes
**API-13: Configurar webhook al completar tarea** (#59)
Como usuario quiero ejecutar webhook cuando se completa tarea para integrar con automatizaciones.  
**Estimación:** M | **Prioridad:** P3

**API-14: Webhook al stock bajo** (#60)
Como usuario quiero ejecutar webhook cuando stock baja de umbral para notificar sistema externo.  
**Estimación:** M | **Prioridad:** P3

**API-15: Playground GraphQL público con autenticación** (#103)
Como desarrollador quiero probar queries en playground web para debuggear integraciones.  
**Estimación:** S | **Prioridad:** P2

---

# 🗣️ Agente Conversacional (12 historias)

### Épica 1: Infraestructura Agente
**AGT-01: Endpoint para recibir texto/voz y devolver respuesta**  
Como usuario quiero enviar pregunta por texto y recibir respuesta del agente.  
**Estimación:** L | **Prioridad:** P1

**AGT-02: Integración con Whisper API para transcribir voz**  
Como usuario quiero enviar audio y que se transcriba automáticamente.  
**Estimación:** M | **Prioridad:** P2

**AGT-03: Integración con TTS (Text-to-Speech) para respuestas habladas** (#104)
Como usuario quiero recibir respuesta en audio para escucharla sin leer.  
**Estimación:** M | **Prioridad:** P3

**AGT-04: Context awareness (recordar conversación previa)**  
Como usuario quiero que el agente recuerde contexto anterior ("¿y el de hoy?" refiriéndose a peso).  
**Estimación:** L | **Prioridad:** P2

### Épica 2: Comandos MANTIA
**AGT-05: "¿Qué tareas tengo hoy?"**  
Como usuario quiero preguntar qué tareas vencen hoy y recibir lista.  
**Estimación:** S | **Prioridad:** P1

**AGT-06: "Marca tarea X como completada"**  
Como usuario quiero completar tarea por comando de voz.  
**Estimación:** S | **Prioridad:** P1

**AGT-07: "Cuándo tengo turno con peluquero"**  
Como usuario quiero consultar fecha de próxima tarea de tipo "Turno".  
**Estimación:** M | **Prioridad:** P2

### Épica 3: Comandos ALACENA
**AGT-08: "Qué pastas podemos comer hoy si somos 5"** (#105)
Como usuario quiero que sugiera recetas de pasta para 5 personas según stock.  
**Estimación:** L | **Prioridad:** P2

**AGT-09: "Cuánta leche queda"**  
Como usuario quiero consultar stock actual de un item.  
**Estimación:** S | **Prioridad:** P1

**AGT-10: "Agregar 2 litros de leche al inventario"**  
Como usuario quiero sumar stock por voz.  
**Estimación:** M | **Prioridad:** P2

### Épica 4: Comandos ECOSALUD
**AGT-11: "Cómo dio mi último estudio de colesterol"**  
Como usuario quiero preguntarle al agente resultado de último registro de colesterol.  
**Estimación:** S | **Prioridad:** P1

**AGT-12: "Registra que hoy peso 78kg"**  
Como usuario quiero crear registro de peso por voz.  
**Estimación:** S | **Prioridad:** P2

### Épica 5: Integración Home Assistant
**AGT-13: Integración con Home Assistant via MQTT** (#106)
Como usuario quiero conectar ECO con Home Assistant para hablarle al sistema desde parlantes.  
**Estimación:** XL | **Prioridad:** P3

**AGT-14: Custom skill para Google Assistant/Alexa**  
Como usuario quiero decir "Ok Google, pregúntale a ECO qué tareas tengo" desde mi celular.  
**Estimación:** XL | **Prioridad:** P3

---

# 👥 Multi-usuario y Roles (10 historias)

### Épica 1: Sistema de Roles
**USR-01: CRUD de usuarios (admin)**  
Como admin quiero crear/editar/eliminar usuarios del hogar.  
**Estimación:** M | **Prioridad:** P1

**USR-02: Roles: Admin, Familia, Invitado**  
Como admin quiero asignar roles con permisos diferentes.  
**Estimación:** M | **Prioridad:** P1

**USR-03: Permisos por rol (Admin: todo, Familia: CRUD propio, Invitado: solo lectura)**  
Como admin quiero definir qué puede hacer cada rol.  
**Estimación:** L | **Prioridad:** P1

**USR-04: Invitar usuario por email** (#107)
Como admin quiero enviar invitación por email para que otra persona se una al hogar.  
**Estimación:** M | **Prioridad:** P2

### Épica 2: Colaboración Multi-usuario
**USR-05: Ver actividad de otros usuarios (feed)**  
Como usuario quiero ver qué hicieron otros en el hogar hoy (ej: "Juan completó tarea Regar plantas").  
**Estimación:** M | **Prioridad:** P3

**USR-06: Asignar tareas/items a usuarios específicos**  
Como admin quiero asignar "Sacar basura" a un usuario específico.  
**Estimación:** S | **Prioridad:** P2

**USR-07: Notificar a usuario cuando se le asigna algo**  
Como usuario quiero recibir notificación cuando me asignan una tarea.  
**Estimación:** S | **Prioridad:** P2

**USR-08: Filtrar por usuario (ver solo mis tareas/items)**  
Como usuario quiero ver solo lo que me corresponde a mí.  
**Estimación:** S | **Prioridad:** P2

### Épica 3: Hogar/Household
**USR-09: CRUD de "Household" (múltiples hogares por usuario)**  
Como usuario quiero tener acceso a 2 hogares (casa + casa padres).  
**Estimación:** L | **Prioridad:** P3

**USR-10: Cambiar entre hogares con selector**  
Como usuario quiero switchear entre mis hogares fácilmente.  
**Estimación:** M | **Prioridad:** P3

---

# 🔔 Notificaciones (10 historias)

### Épica 1: Email
**NOT-01: Email de tarea vencida (MANTIA)**  
Como usuario quiero recibir email cuando tarea vence.  
**Estimación:** S | **Prioridad:** P2

**NOT-02: Email de stock bajo (ALACENA)**  
Como usuario quiero email cuando item baja de umbral.  
**Estimación:** S | **Prioridad:** P2

**NOT-03: Email de resumen semanal (ECOSALUD)**  
Como usuario quiero email dominical con resumen de salud.  
**Estimación:** M | **Prioridad:** P3

### Épica 2: Push Móvil
**NOT-04: Push de tarea vencida**  
Como usuario quiero push en celular cuando tarea vence hoy.  
**Estimación:** M | **Prioridad:** P2

**NOT-05: Push de item agregado a lista compartida**  
Como usuario quiero push cuando alguien agrega item urgente.  
**Estimación:** S | **Prioridad:** P2

**NOT-06: Push de valor anormal en ECOSALUD**  
Como usuario quiero push si registro presión alta.  
**Estimación:** S | **Prioridad:** P2

### Épica 3: SMS (Opcional)
**NOT-07: SMS de alerta crítica (ej: presión muy alta)**  
Como usuario quiero SMS si valor de salud es peligroso.  
**Estimación:** M | **Prioridad:** P3

### Épica 4: Configuración de Notificaciones
**NOT-08: Preferencias de notificación por usuario**  
Como usuario quiero elegir qué notificaciones recibir (push sí, email no).  
**Estimación:** M | **Prioridad:** P2

**NOT-09: Horario de no molestar**  
Como usuario quiero silenciar notificaciones de 22h a 8h.  
**Estimación:** S | **Prioridad:** P3

**NOT-10: Consolidar notificaciones (digest)**  
Como usuario quiero recibir 1 email diario con todas las alertas en vez de múltiples emails.  
**Estimación:** M | **Prioridad:** P3

---

# 💾 Backups y Exportación (8 historias)

### Épica 1: Backups Automáticos
**BKP-01: Backup diario automático de base de datos** (#108)
Como admin quiero backup diario para no perder datos.  
**Estimación:** M | **Prioridad:** P1

**BKP-02: Retención de backups (30 días)**  
Como admin quiero mantener backups de últimos 30 días.  
**Estimación:** S | **Prioridad:** P2

**BKP-03: Restaurar desde backup específico**  
Como admin quiero restaurar sistema desde backup de hace 1 semana.  
**Estimación:** M | **Prioridad:** P2

### Épica 2: Exportación de Datos
**BKP-04: Exportar todos mis datos a JSON** (#61)
Como usuario quiero descargar JSON con todos mis datos para tener copia local.  
**Estimación:** M | **Prioridad:** P2

**BKP-05: Exportar ALACENA a Excel** (#109)
Como usuario quiero exportar inventario a Excel para análisis offline.  
**Estimación:** S | **Prioridad:** P3

**BKP-06: Exportar ECOSALUD a PDF** (#110)
Como usuario quiero PDF con mi histórico médico para llevar al doctor.  
**Estimación:** M | **Prioridad:** P2

### Épica 3: Importación de Datos
**BKP-07: Importar tareas desde CSV**  
Como usuario quiero importar 100 tareas desde Excel.  
**Estimación:** M | **Prioridad:** P3

**BKP-08: Importar inventario desde plantilla Excel**  
Como usuario quiero cargar mi inventario actual masivamente desde Excel.  
**Estimación:** M | **Prioridad:** P3

---

# 🔒 Seguridad y Admin (8 historias)

### Épica 1: Autenticación y Seguridad
**SEC-01: 2FA (autenticación de dos factores)** (#111)
Como usuario quiero activar 2FA para mayor seguridad.  
**Estimación:** L | **Prioridad:** P3

**SEC-02: Historial de sesiones**  
Como usuario quiero ver dónde estoy logueado (dispositivos, IPs).  
**Estimación:** M | **Prioridad:** P3

**SEC-03: Cerrar sesión remota**  
Como usuario quiero cerrar sesión en dispositivo perdido.  
**Estimación:** S | **Prioridad:** P3

**SEC-04: Cambio de contraseña**  
Como usuario quiero cambiar mi contraseña fácilmente.  
**Estimación:** S | **Prioridad:** P2

### Épica 2: Logging y Auditoría
**SEC-05: Log de acciones críticas (admin)**  
Como admin quiero ver quién eliminó qué y cuándo.  
**Estimación:** M | **Prioridad:** P2

**SEC-06: Alerta de login sospechoso**  
Como usuario quiero recibir email si alguien intenta loguearse desde IP nueva.  
**Estimación:** M | **Prioridad:** P3

### Épica 3: Privacidad
**SEC-07: Eliminar cuenta y todos los datos**  
Como usuario quiero borrar mi cuenta permanentemente (GDPR compliance).  
**Estimación:** M | **Prioridad:** P2

**SEC-08: Descargar todos mis datos (GDPR)**  
Como usuario quiero descargar copia completa de mis datos personales.  
**Estimación:** M | **Prioridad:** P2

---

# 🎨 UX y Onboarding (10 historias)

### Épica 1: Onboarding
**UXO-01: Tutorial interactivo al primer uso** (#62)
Como usuario nuevo quiero tutorial guiado para aprender el sistema.  
**Estimación:** L | **Prioridad:** P2

**UXO-02: Setup wizard (elegir módulos activos)**  
Como usuario nuevo quiero elegir qué módulos usar (solo MANTIA, o todos).  
**Estimación:** M | **Prioridad:** P2

**UXO-03: Tooltips contextuales**  
Como usuario nuevo quiero ver ayuda al pasar mouse sobre botones.  
**Estimación:** S | **Prioridad:** P3

### Épica 2: Personalización Visual
**UXO-04: Temas claro/oscuro**  
Como usuario quiero cambiar entre modo claro y oscuro.  
**Estimación:** M | **Prioridad:** P2

**UXO-05: Elegir color primario del sistema**  
Como usuario quiero personalizar color de la app.  
**Estimación:** S | **Prioridad:** P3

**UXO-06: Densidad de interfaz (compacta/normal/espaciosa)** (#112)
Como usuario quiero ajustar espaciado para pantallas pequeñas.  
**Estimación:** M | **Prioridad:** P3

### Épica 3: Accesibilidad
**UXO-07: Soporte de teclado completo (shortcuts)** (#63)
Como usuario power quiero navegar solo con teclado (Ctrl+N para nueva tarea).  
**Estimación:** L | **Prioridad:** P3

**UXO-08: Tamaño de fuente ajustable**  
Como usuario con problemas de vista quiero agrandar texto.  
**Estimación:** S | **Prioridad:** P3

**UXO-09: Alto contraste para accesibilidad**  
Como usuario con baja visión quiero modo alto contraste.  
**Estimación:** M | **Prioridad:** P3

**UXO-10: Soporte screen readers (ARIA labels)** (#64)
Como usuario ciego quiero usar screen reader para navegar.  
**Estimación:** L | **Prioridad:** P3

---

# 🏗️ Infraestructura y DevOps (8 historias)

### Épica 1: Monitoreo
**INF-01: Logs centralizados (Sentry/LogRocket)**  
Como desarrollador quiero ver errores de producción en tiempo real.  
**Estimación:** M | **Prioridad:** P2

**INF-02: Monitoreo de performance (Lighthouse CI)**  
Como desarrollador quiero medir performance en cada deploy.  
**Estimación:** M | **Prioridad:** P3

**INF-03: Alertas de uptime (cuando cae el servicio)**  
Como admin quiero recibir alerta si la app cae.  
**Estimación:** S | **Prioridad:** P2

### Épica 2: CI/CD
**INF-04: Tests E2E automatizados (Playwright)**  
Como desarrollador quiero tests que validen flujos completos.  
**Estimación:** L | **Prioridad:** P2

**INF-05: Preview deployments por PR**  
Como desarrollador quiero preview automático por cada PR.  
**Estimación:** M | **Prioridad:** P3

**INF-06: Rollback automático si tests fallan**  
Como desarrollador quiero que se revierta deploy si rompe algo.  
**Estimación:** M | **Prioridad:** P3

### Épica 3: Escalabilidad
**INF-07: Cache de queries pesadas (Redis)** (#65)
Como desarrollador quiero cachear queries lentas para mejorar velocidad.  
**Estimación:** L | **Prioridad:** P3

**INF-08: CDN para assets estáticos**  
Como usuario quiero que imágenes carguen rápido desde CDN.  
**Estimación:** S | **Prioridad:** P3

---

# 🏠 HUESHA - Registro Vital y Diario de Vida (68 historias)

> Detalle completo en [historias-huesha-66.md](historias-huesha-66.md)

### Épica 1: Editor WYSIWYG + Referencias @ (9)
- **HUE-01:** Editor WYSIWYG para entradas de diario | L | P1
- **HUE-67:** Modo escritura rápida (captura minimal) | S | P1
- **HUE-02:** Referencias @ a personas | M | P1
- **HUE-03:** Referencias @ a lugares | M | P1
- **HUE-04:** Referencias @ a empresas/trabajos | S | P2
- **HUE-05:** Referencias @ a eventos | S | P2
- **HUE-06:** Referencias a entidades transversales de ECO (Entity Registry) | M | P3
- **HUE-07:** Autocompletado inteligente de @referencias | M | P2
- **HUE-08:** Vista "backlinks" — todo lo que referencia a una entidad | M | P2

### Épica 2: Captura de Voz / Transcripción (4)
- **HUE-09:** Grabar audio desde la app y transcribir a texto | L | P1
- **HUE-10:** Subir archivo de audio y transcribir (con timestamps opcionales) | L | P2
- **HUE-11:** Editar transcripción generada | S | P1
- **HUE-12:** Conservar audio original vinculado a la entrada | S | P3

### Épica 3: Media y Cultura — como contexto vital, no catálogo (9)
- **HUE-13:** Registrar película o serie vista | M | P1
- **HUE-14:** Registrar libro leído | M | P1
- **HUE-15:** Registrar álbum o canción escuchada | M | P2
- **HUE-16:** Registrar podcast o charla escuchada | S | P2
- **HUE-17:** Rating y valoración personal (opcional, 1-5) | S | P2
- **HUE-18:** Wishlist "Quiero ver / leer / escuchar" | M | P2
- **HUE-19:** Búsqueda y filtro en historial cultural | M | P2
- **HUE-20:** Estadísticas culturales | M | P3
- **HUE-68:** Registrar media sin identificar (sin título exacto) | S | P2

### Épica 4: Eventos y Experiencias — unificado (2)
- **HUE-21:** CRUD de eventos/experiencias unificado (viaje/recital/hito/deporte/relación) | L | P1
- **HUE-26:** Etiquetar evento con personas, lugares y emociones | M | P2

### Épica 5: Historia Vital / Periodos / Parámetros (7)
- **HUE-27:** Definir periodos de vivienda | M | P1
- **HUE-28:** Definir periodos laborales | M | P1
- **HUE-29:** Definir periodos de estudio | S | P1
- **HUE-30:** Definir periodos de relación sentimental | S | P2
- **HUE-31:** Registrar mascotas | S | P2
- **HUE-32:** Registrar vehículos | S | P3
- **HUE-33:** Parámetros personalizados por periodo | L | P3

### Épica 6: Archivo de Comunicaciones (6)
- **HUE-34:** Importar conversaciones de WhatsApp | L | P2
- **HUE-35:** Importar conversaciones de Instagram DMs | L | P3
- **HUE-36:** Importar conversaciones de Facebook Messenger | L | P3
- **HUE-37:** Vista unificada de chats por fecha | L | P1
- **HUE-38:** Búsqueda full-text en comunicaciones archivadas | M | P1
- **HUE-39:** Vincular comunicación a entrada de diario o evento | S | P3

### Épica 7: Integraciones Externas — metadata, no copia (7)
- **HUE-40:** Integración con Google Photos (lectura, metadata) | L | P2
- **HUE-41:** Integración con Spotify / historial de escuchas | L | P2
- **HUE-42:** Integración con Letterboxd | M | P2
- **HUE-43:** Integración con Gmail | L | P3
- **HUE-44:** Integración con Instagram Stories | M | P3
- **HUE-45:** Clima del día automático | M | P2
- **HUE-46:** Geolocalización automática al crear entrada | S | P3

### Épica 8: Vista Día + Visualización + Timeline (7)
- **HUE-47:** Vista unificada de día (mega-dashboard) | XL | P1
- **HUE-48:** Línea de tiempo visual (motor compartido con HUE-49) | L | P2
- **HUE-49:** Vista "Mi vida en el año X" (motor compartido con HUE-48) | L | P2
- **HUE-50:** Mapa de lugares visitados / vividos | L | P3
- **HUE-51:** Vista calendario mensual con indicadores | M | P2
- **HUE-52:** Búsqueda global full-text en todo HUESHA | M | P1
- **HUE-69:** Entrada implícita (día sin texto pero con datos) | M | P1

### Épica 9: IA, Resúmenes y Análisis (6)
- **HUE-53:** Resumen semanal automático con IA | L | P2
- **HUE-54:** Resumen anual automático (Year in Review) | L | P2
- **HUE-55:** Grafo de personas/relaciones | L | P3
- **HUE-56:** "Un día como hoy" — Recuerdos automáticos | M | P2
- **HUE-57:** Comparar "hace 1 año" / "hace 5 años" | M | P3
- **HUE-72:** Capas de lectura (original / resumida / solo hechos) | M | P3

### Épica 10: Journaling, Legado y Utilidades (7)
- **HUE-58:** Journaling guiado con prompts (neutros + contextuales) | M | P2
- **HUE-59:** Registrar estado de ánimo en cada entrada | S | P2
- **HUE-60:** OCR para documentos físicos | L | P3
- **HUE-61:** Entradas privadas con protección PIN | M | P3
- **HUE-62:** Historial de versiones de entradas | M | P3
- **HUE-70:** Silencio prolongado (notificación suave) | S | P2
- **HUE-71:** Modo legado (entradas para el futuro) | S | P3

### Épica 11: Carga Masiva + Import/Export (4)
- **HUE-63:** Import masivo desde Excel/CSV para periodos | M | P1
- **HUE-64:** Templates de carga guiada por tipo de periodo | S | P1
- **HUE-65:** Import masivo de media/cultura desde CSV | M | P2
- **HUE-66:** Exportar todo HUESHA a PDF / JSON | M | P2

---

# 💰 FINANCIA - Gestión Financiera Personal (66 historias)

> Detalle completo en [historias-financia-63.md](historias-financia-63.md)

### Épica 1: Cuentas y Configuración (6)
- **FIN-01:** CRUD de cuentas/billeteras | M | P1
- **FIN-02:** Definir moneda por cuenta | S | P1
- **FIN-03:** Dashboard financiero general | M | P1
- **FIN-04:** Configurar categorías de gastos/ingresos | M | P1
- **FIN-05:** Categorías predeterminadas sugeridas | S | P2
- **FIN-06:** Configurar fecha de cierre de tarjeta | S | P1

### Épica 2: Transacciones (9)
- **FIN-07:** Registrar gasto manual | M | P1
- **FIN-08:** Registrar ingreso manual | S | P1
- **FIN-09:** Registrar transferencia entre cuentas (origen/destino explícito) | M | P1
- **FIN-10:** Gastos recurrentes | M | P1
- **FIN-11:** Ingresos recurrentes | S | P2
- **FIN-12:** Gastos en cuotas (con estado por cuota) | M | P1
- **FIN-13:** Búsqueda y filtro de transacciones | M | P1
- **FIN-14:** Adjuntar comprobante/foto a transacción | M | P2
- **FIN-65:** Etiqueta emocional / tags libres | S | P2

### Épica 3: Importación de Datos (6)
- **FIN-15:** Importar desde CSV del banco | L | P1
- **FIN-16:** Templates de parseo por banco | L | P2
- **FIN-17:** Importar resumen tarjeta crédito | L | P2
- **FIN-18:** Lectura de emails de notificación | XL | P3
- **FIN-19:** Detección de duplicados al importar | M | P2
- **FIN-20:** Categorización automática al importar | M | P2

### Épica 4: Presupuestos (5)
- **FIN-21:** Crear presupuesto mensual por categoría | M | P1
- **FIN-22:** Barra de progreso presupuesto vs real | M | P1
- **FIN-23:** Alerta al 80% del presupuesto | S | P2
- **FIN-24:** Copiar presupuesto del mes anterior | S | P2
- **FIN-25:** Presupuesto anual con distribución mensual | M | P3

### Épica 5: Deudas, Préstamos y Cuentas Compartidas (7)
- **FIN-26:** Registrar deuda | M | P1
- **FIN-27:** Registrar préstamo | S | P1
- **FIN-28:** Pago parcial de deuda/préstamo | S | P2
- **FIN-29:** Split de gasto entre personas | M | P2
- **FIN-30:** Cuentas compartidas del hogar | L | P1
- **FIN-31:** Balance entre usuarios del hogar | M | P2
- **FIN-32:** Liquidación / saldar cuentas | M | P2

### Épica 6: Multi-moneda y Tipo de Cambio (5)
- **FIN-33:** Tipo de cambio oficial automático | M | P1
- **FIN-34:** Tipo de cambio MEP / CCL / Blue | M | P1
- **FIN-35:** Registrar compra/venta de dólares | M | P2
- **FIN-36:** Patrimonio total unificado en una moneda | M | P2
- **FIN-37:** Historial de tipo de cambio | M | P3

### Épica 7: Reportes y Visualización (9)
- **FIN-38:** Gráfico gastos por categoría | M | P1
- **FIN-39:** Balance mensual | M | P1
- **FIN-40:** Tendencia de gastos mes a mes | M | P2
- **FIN-41:** Presupuesto vs real (comparación) | M | P2
- **FIN-42:** Estado de deudas consolidado | M | P2
- **FIN-43:** Proyección a futuro | L | P2
- **FIN-44:** Comparación interanual | M | P3
- **FIN-64:** Estado financiero del mes (semáforo) | M | P2
- **FIN-66:** Simulación financiera (¿qué pasa si...?) | L | P3

### Épica 8: Promociones y Descuentos (6)
- **FIN-45:** CRUD de promociones activas | M | P2
- **FIN-46:** Campos detallados de promoción | M | P2
- **FIN-47:** Recordatorio de promoción por día | S | P2
- **FIN-48:** Sugerir mejor medio de pago | M | P3
- **FIN-49:** Calcular ahorro por promociones | M | P3
- **FIN-50:** Importar promociones desde fuentes públicas | XL | P3

### Épica 9: Integraciones ECO (5)
- **FIN-51:** Vincular gasto con Lista de Compras | M | P2
- **FIN-52:** Vincular gasto con ALACENA | L | P2
- **FIN-53:** Vincular gasto con tarea MANTIA | S | P3
- **FIN-54:** Registrar gastos de salud en ECOSALUD | S | P3
- **FIN-55:** Vincular gastos con periodos HUESHA | M | P3

### Épica 10: Alertas y Automatización (4)
- **FIN-56:** Alerta de gasto inusual | M | P2
- **FIN-57:** Alerta de vencimiento tarjeta/servicio | S | P2
- **FIN-58:** Resumen financiero periódico | M | P3
- **FIN-59:** Reglas de categorización automática | M | P2

### Épica 11: Carga Masiva + Export (4)
- **FIN-60:** Import masivo desde Excel/CSV | M | P1
- **FIN-61:** Template de carga guiada | S | P1
- **FIN-62:** Exportar movimientos a Excel/CSV | S | P2
- **FIN-63:** Exportar reporte financiero a PDF | M | P2

---

## 📊 Resumen Final

| Categoría | Historias | Estimación Total (horas) |
|-----------|-----------|--------------------------|
| MANTIA | 20 | ~120h |
| ALACENA | 22 | ~165h |
| Lista | 18 | ~115h |
| ECOSALUD | 20 | ~130h |
| API IA | 15 | ~85h |
| Agente Conversacional | 12 | ~110h |
| Multi-usuario/Roles | 10 | ~65h |
| Notificaciones | 10 | ~45h |
| Backups | 8 | ~40h |
| Seguridad/Admin | 8 | ~45h |
| UX/Onboarding | 10 | ~70h |
| Infraestructura | 8 | ~55h |
| HUESHA | 68 | ~378h |
| FINANCIA | 66 | ~359h |
| **TOTAL** | **295** | **~1783h** |

---

## 🎯 Próximos Pasos

1. **Revisar y aprobar** estas 295 historias
2. **Crear issues en GitHub** para todas (usar script automatizado)
3. **Priorizar** cuáles van a cada Sprint
4. **Definir milestones** (v0.1 MVP, v0.2 IA Básica, v0.3 Multi-usuario, v0.4 HUESHA, v0.5 FINANCIA, v1.0 Completo)
5. **Empezar con Sprint 2** (siguiente sesión)

---

**¿Aprobadas? ¿Falta algo crítico?**
