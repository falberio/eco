# 📔 HUESHA — Registro Vital y Diario de Vida (100 historias)

**Fecha:** 5 de febrero de 2026  
**Módulo:** HUESHA  
**Propósito:** Registro vital completo + Diario inteligente + Archivo de vida. Editor WYSIWYG con referencias a entidades, memoria oral con transcripción, archivo de comunicaciones, cultura como huella emocional, periodos como columna vertebral biográfica, integraciones pasivas, navegación temporal, IA como lectora del pasado, journaling guiado y legado.

> *"HUESHA es pasado, pero también es lo que alguna vez será pasado."*

**Características clave:**
- 🔒 100% privado por usuario (nadie del hogar ve tu HUESHA)
- ✍️ Editor WYSIWYG con referencias @ a entidades — escribir nunca debe dar miedo
- 🎤 Memoria oral: grabar, transcribir, buscar por palabras dichas
- 🎬 Cultura como huella emocional, no base de datos
- ✈️ Todo lo vivido es evento, solo cambia el nivel de densidad
- 📅 Periodos de vida como columna vertebral biográfica
- 💬 Memoria conversacional: WhatsApp, Instagram, Messenger, Gmail
- 🔌 HUESHA observa, no interrumpe — integraciones pasivas
- 👁️ El tiempo es la UI principal
- 🤖 IA como lector del pasado, no juez
- 📓 Escribir sin presión, pero con sentido
- 🕊️ Tu vida no queda cautiva — privacidad, legado, futuro

---

## 🧭 Principios Fundacionales de HUESHA

> Estos principios guían todas las decisiones de diseño, priorización y alcance del módulo.

**1. HUESHA es pasivo primero, activo después**
Registrar sin fricción > escribir perfecto. Todo lo que se puede traer automáticamente, mejor. La captura vale más que la redacción pulida.

**2. HUESHA es cronológico, no jerárquico**
El día es la unidad base. Las entidades (personas, lugares, eventos) existen para leer el pasado, no para ordenar el presente.

**3. HUESHA no compite con herramientas externas**
Las orquesta. No duplica Google Photos, no reemplaza Letterboxd. Importa metadata, previews y referencias temporales.

**4. Todo dato debe responder a una pregunta futura**
Si no puedo formular "¿para qué querría ver esto dentro de 5 años?", se posterga.

---

**Distribución por Épica:**
- Épica 1: Escritura, Captura y Editor → 10 historias
- Épica 2: Voz, Audio y Memoria Oral → 8 historias
- Épica 3: Cultura, Consumo y Contexto Vital → 10 historias
- Épica 4: Eventos, Experiencias y Vida Social → 10 historias
- Épica 5: Periodos de Vida y Estructura Biográfica → 10 historias
- Épica 6: Archivo de Comunicaciones → 9 historias
- Épica 7: Integraciones Pasivas y Contexto Automático → 8 historias
- Épica 8: Vista Día, Timeline y Navegación Temporal → 10 historias
- Épica 9: IA, Síntesis y Lectura del Pasado → 9 historias
- Épica 10: Journaling Guiado y Emoción → 8 historias
- Épica 11: Importación, Exportación y Backups → 6 historias
- Épica 12: Privacidad, Legado y Futuro → 2 historias

**TOTAL:** 100 historias

---

## ✍️ Épica 1: Escritura, Captura y Editor (10 historias)

> Escribir nunca debe dar miedo.

**HUE-01: Editor WYSIWYG base**
- Como usuario quiero escribir entradas de diario en un editor de texto rico (bold, italic, listas, headings, links)
- Para redactar mis reflexiones con formato sin conocer Markdown
- **Estimación:** L | **Prioridad:** P1

**HUE-02: Escritura rápida (modo minimal / sin formato)**
- Como usuario quiero un modo de escritura minimal sin formato visible — solo texto plano con cursor, pantalla limpia
- Para capturar pensamientos al vuelo sin fricción de UI. Priorizar hábito de registro sobre calidad de redacción
- **Estimación:** S | **Prioridad:** P1

**HUE-03: Referencias @ a personas**
- Como usuario quiero escribir @nombre y que me sugiera personas de mi directorio
- Para vincular mis entradas a personas y luego buscar todo lo relacionado con alguien
- **Estimación:** M | **Prioridad:** P1

**HUE-04: Referencias @ a lugares**
- Como usuario quiero escribir @lugar y que me sugiera lugares registrados (ciudades, bares, mi casa)
- Para vincular entradas a ubicaciones y construir mi mapa de vida
- **Estimación:** M | **Prioridad:** P1

**HUE-05: Referencias @ a eventos**
- Como usuario quiero escribir @evento y que me sugiera eventos registrados (viajes, recitales, hitos)
- Para enlazar mis reflexiones con experiencias específicas
- **Estimación:** S | **Prioridad:** P2

**HUE-06: Referencias @ a entidades ECO transversales**
- Como usuario quiero referenciar entidades de cualquier módulo ECO (MANTIA, ALACENA, ECOSALUD, FINANCIA) desde mi diario
- Para cruzar contexto (ej: "hoy completé @tarea-pintar-pared y me sentí genial")
- **Nota arquitectónica:** Consume un Entity Registry transversal de ECO. HUESHA no conoce la lógica interna de cada módulo, solo consulta el registry centralizado. Baja acoplamiento.
- **Estimación:** M | **Prioridad:** P3

**HUE-07: Autocompletado inteligente con íconos**
- Como usuario quiero que el autocompletado muestre ícono según tipo (👤 persona, 📍 lugar, ✈️ evento, 🏢 empresa) y ordene por frecuencia de uso
- Para encontrar rápidamente la entidad que busco sin confusión
- **Estimación:** M | **Prioridad:** P2

**HUE-08: Backlinks por entidad**
- Como usuario quiero ver desde el perfil de una persona/lugar/evento todas las entradas que la referencian
- Para navegar "todo lo que escribí sobre María" o "todo lo del bar de la esquina"
- **Estimación:** M | **Prioridad:** P2

**HUE-09: Guardado automático y drafts por día**
- Como usuario quiero que HUESHA guarde automáticamente mientras escribo (cada 30s o al perder foco) y mantenga un draft por día si no publico
- Para nunca perder lo que estoy escribiendo, incluso si cierro la app sin guardar
- **Estimación:** M | **Prioridad:** P1

**HUE-10: Recuperación de texto perdido (crash-safe)**
- Como usuario quiero que si la app crashea o se corta internet, al volver encuentre mi texto tal como lo dejé
- Para que escribir nunca dé miedo — saber que nada se pierde genera confianza para escribir más
- **Estimación:** M | **Prioridad:** P1

---

## 🎤 Épica 2: Voz, Audio y Memoria Oral (8 historias)

> Esto convierte a HUESHA en memoria oral, no solo escrita.

**HUE-11: Grabar audio desde la app**
- Como usuario quiero presionar un botón de micrófono y dictar una entrada que se transcriba a texto
- Para capturar pensamientos al vuelo sin tipear (ej: caminando, cocinando, manejando)
- **Estimación:** L | **Prioridad:** P1

**HUE-12: Subir audio externo**
- Como usuario quiero subir un archivo de audio (.mp3, .m4a, .wav, .ogg) y que se transcriba a texto
- Para convertir notas de voz grabadas en otro momento/app en entradas del diario
- **Estimación:** L | **Prioridad:** P2

**HUE-13: Edición manual de transcripción**
- Como usuario quiero poder editar el texto transcrito antes de guardarlo como entrada
- Para corregir errores de transcripción y mejorar claridad sin perder la captura original
- **Estimación:** S | **Prioridad:** P1

**HUE-14: Vincular audio original a entrada**
- Como usuario quiero que el audio original quede vinculado a la entrada transcrita y sea reproducible
- Para poder volver a escuchar mi voz y captar matices que el texto no refleja (tono, emoción, pausas)
- **Estimación:** S | **Prioridad:** P3

**HUE-15: Marcas temporales internas (timestamps)**
- Como usuario quiero que la transcripción tenga marcas de tiempo cada ciertos segundos/párrafos
- Para saltar directamente al momento del audio que me interesa sin escuchar todo de nuevo
- **Estimación:** M | **Prioridad:** P3

**HUE-16: Transcripción parcial (solo fragmentos útiles)**
- Como usuario quiero poder seleccionar qué fragmentos de un audio largo transcribo (ej: del minuto 3 al 7)
- Para no transcribir audios enteros cuando solo un pedacito tiene valor — ahorrar tiempo y créditos de IA
- **Estimación:** M | **Prioridad:** P3

**HUE-17: Entrada "solo audio" (sin texto)**
- Como usuario quiero guardar un audio como entrada de diario sin transcribirlo — solo la grabación con fecha y mood
- Para los días en que quiero hablar pero no leer lo que dije. A veces la voz es el registro, no el texto
- **Estimación:** S | **Prioridad:** P2

**HUE-18: Búsqueda por palabras dichas (STT full-text)**
- Como usuario quiero buscar palabras dentro de todos mis audios transcritos (búsqueda full-text sobre transcripciones)
- Para encontrar "¿cuándo hablé de mudanza?" o "¿qué dije sobre el viaje?" en memorias orales
- **Estimación:** M | **Prioridad:** P3

---

## 🎬 Épica 3: Cultura, Consumo y Contexto Vital (10 historias)

> Cultura como huella emocional, no base de datos.

**HUE-19: Registrar película o serie**
- Como usuario quiero registrar qué película/serie vi, cuándo la vi, y una nota breve
- Para tener un historial de lo que consumí y recordar qué pensé en ese momento
- **Estimación:** M | **Prioridad:** P1

**HUE-20: Registrar libro**
- Como usuario quiero registrar título, autor, fecha de lectura y una reseña personal
- Para llevar mi historial de lecturas y recordar qué pensé de cada libro
- **Estimación:** M | **Prioridad:** P1

**HUE-21: Registrar música (álbum / canción)**
- Como usuario quiero registrar álbum/canción, artista, fecha y nota personal
- Para recordar descubrimientos musicales y momentos asociados ("este disco lo escuchaba cuando...")
- **Estimación:** M | **Prioridad:** P2

**HUE-22: Registrar podcast / charla**
- Como usuario quiero registrar podcast, episodio, fecha y notas/aprendizajes
- Para volver a ideas que escuché y no perder esos aprendizajes
- **Estimación:** S | **Prioridad:** P2

**HUE-23: Registrar consumo cultural sin identificar obra**
- Como usuario quiero registrar un consumo cultural sin título exacto (ej: "escuché un disco nuevo", "vi una peli francesa vieja en el cable")
- Para capturar el momento vital sin fricción de buscar el título correcto. Siempre se puede completar después
- **Estimación:** S | **Prioridad:** P2

**HUE-24: Rating opcional + nota personal**
- Como usuario quiero calificar opcionalmente cada contenido consumido con 1-5 estrellas + comentario libre
- Para tener mi ranking personal. **El rating nunca es obligatorio** — la nota personal siempre tiene más peso que un número
- **Estimación:** S | **Prioridad:** P2

**HUE-25: Wishlist cultural**
- Como usuario quiero mantener listas de contenido pendiente (películas por ver, libros por leer, discos por escuchar)
- Para no olvidar recomendaciones y tener siempre qué elegir cuando tengo tiempo
- **Estimación:** M | **Prioridad:** P2

**HUE-26: Historial cultural con filtros**
- Como usuario quiero buscar y filtrar por tipo (peli/libro/música/podcast), rating, fecha, tags
- Para encontrar rápidamente "¿qué películas de 5 estrellas vi en 2024?" o "¿qué libros leí en verano?"
- **Estimación:** M | **Prioridad:** P2

**HUE-27: Estadísticas culturales anuales**
- Como usuario quiero ver resumen de cuántas películas vi este año, cuántos libros leí, cuántas horas de podcasts escuché
- Para visualizar mi consumo cultural y descubrir patrones (ej: "leo más en invierno")
- **Estimación:** M | **Prioridad:** P3

**HUE-28: Línea de tiempo cultural (qué consumías en cada etapa)**
- Como usuario quiero ver una línea de tiempo que cruce mi consumo cultural con mis periodos de vida (ej: "cuando vivía en Córdoba leía mucho Cortázar")
- Para descubrir cómo mi contexto vital influye en lo que consumo — la cultura como espejo de las etapas
- **Estimación:** L | **Prioridad:** P3

---

## ✈️ Épica 4: Eventos, Experiencias y Vida Social (10 historias)

> Todo lo vivido es evento, solo cambia el nivel de densidad.

**HUE-29: Registrar evento genérico (base unificada)**
- Como usuario quiero registrar cualquier evento de vida con campos comunes: título, descripción, fecha inicio/fin, lugar, personas, mood, fotos, notas
- Para tener una única forma base de registrar experiencias sin fragmentación de tipos
- **Nota arquitectónica:** Todos los eventos son `HueshaEvent` con `event_type` + campos opcionales según tipo. Misma entidad, distinto nivel de densidad.
- **Estimación:** L | **Prioridad:** P1

**HUE-30: Registrar viaje**
- Como usuario quiero registrar un viaje con destino, itinerario, duración, transporte, alojamiento y fotos
- Para tener una crónica completa de cada viaje con todo el contexto vital que lo rodea
- **Estimación:** M | **Prioridad:** P1

**HUE-31: Registrar hito vital**
- Como usuario quiero registrar hitos de vida (mudanza, nacimiento, graduación, casamiento, logro personal) con su significado
- Para marcar los momentos que cambiaron el rumbo de mi vida y verlos destacados en la timeline
- **Estimación:** S | **Prioridad:** P1

**HUE-32: Registrar evento deportivo**
- Como usuario quiero registrar eventos deportivos vividos (fui a la cancha, corrí una maratón, jugué paddle) con resultado y emociones
- Para guardar esos momentos de pasión que después querés recordar con detalle
- **Estimación:** S | **Prioridad:** P2

**HUE-33: Registrar experiencia social informal**
- Como usuario quiero registrar experiencias sociales sin estructura rígida (asado con amigos, salida al bar, cena familiar, juntada)
- Para que lo cotidiano importante no se pierda — no todo lo memorable es un viaje o un hito
- **Estimación:** S | **Prioridad:** P2

**HUE-34: Etiquetar evento con personas / lugares / emociones**
- Como usuario quiero que cada evento tenga tags de personas involucradas, lugar y cómo me sentí
- Para buscar "todos los eventos con @Juan" o "todo lo que viví en @Bariloche" o "momentos felices"
- **Estimación:** M | **Prioridad:** P2

**HUE-35: Eventos recurrentes**
- Como usuario quiero marcar un evento como recurrente (ej: fútbol semanal, cena mensual, tradición anual) y que HUESHA lo sugiera automáticamente
- Para registrar rituales y hábitos sociales sin tener que crearlos desde cero cada vez
- **Estimación:** M | **Prioridad:** P3

**HUE-36: Eventos no confirmados ("creo que fue ese día")**
- Como usuario quiero marcar un evento como "fecha aproximada" o "no estoy seguro si fue ese día"
- Para registrar recuerdos imprecisos sin forzar exactitud. La memoria es difusa y eso está bien
- **Estimación:** S | **Prioridad:** P3

**HUE-37: Línea narrativa del evento (crónica larga)**
- Como usuario quiero escribir una crónica extensa de un evento (tipo blog post / relato) vinculada al evento
- Para cuando un viaje o un hito merece más que una nota corta — contar la historia completa con principio, medio y fin
- **Estimación:** M | **Prioridad:** P2

**HUE-38: Evento como nodo central (media + chats + fotos)**
- Como usuario quiero que un evento agrupe automáticamente todo lo relacionado: fotos de ese rango de fechas, chats archivados, entradas de diario, música escuchada
- Para ver el evento como un universo completo, no como un registro aislado
- **Estimación:** L | **Prioridad:** P3

---

## 📅 Épica 5: Periodos de Vida y Estructura Biográfica (10 historias)

> Esto es la columna vertebral de HUESHA.

**HUE-39: Periodos de vivienda**
- Como usuario quiero registrar dónde viví y cuándo (dirección, ciudad, fechas inicio/fin, con quién)
- Para responder "¿dónde vivía en 2018?" y reconstruir mi mapa de hogares
- **Estimación:** M | **Prioridad:** P1

**HUE-40: Periodos laborales**
- Como usuario quiero registrar dónde trabajé, qué rol tenía, área, fechas inicio/fin
- Para responder "¿de qué trabajaba en 2015?" y ver mi evolución profesional
- **Estimación:** M | **Prioridad:** P1

**HUE-41: Periodos de estudio**
- Como usuario quiero registrar dónde estudié, qué carrera/curso, institución, fechas inicio/fin
- Para responder "¿qué estudiaba en 2012?" y ver mi recorrido formativo
- **Estimación:** S | **Prioridad:** P1

**HUE-42: Periodos de relaciones sentimentales**
- Como usuario quiero registrar relaciones sentimentales con persona, tipo (pareja / novio / etc.), fecha inicio/fin y notas
- Para responder "¿con quién estaba en 2016?" — es parte central de la biografía
- **Estimación:** S | **Prioridad:** P2

**HUE-43: Periodos de convivencia (roommates / pareja)**
- Como usuario quiero registrar con quién conviví más allá de la relación sentimental (compañeros de depto, amigos, familia)
- Para responder "¿con quién vivía en ese momento?" — la convivencia es contexto vital clave
- **Estimación:** S | **Prioridad:** P2

**HUE-44: Periodos con mascotas**
- Como usuario quiero registrar mis mascotas con nombre, tipo, fecha adopción/fallecimiento y fotos
- Para que formen parte de mi historia de vida — son familia
- **Estimación:** S | **Prioridad:** P2

**HUE-45: Periodos de vehículos**
- Como usuario quiero registrar qué auto/moto/bici tuve, modelo, fechas de compra/venta
- Para recordar "¿qué auto tenía en 2019?" y asociar viajes a vehículos
- **Estimación:** S | **Prioridad:** P3

**HUE-46: Periodos de salud relevantes**
- Como usuario quiero registrar periodos de salud significativos (lesión, tratamiento, embarazo, recuperación, terapia)
- Para contextualizar mi vida con lo que pasaba en mi cuerpo/mente. No es ECOSALUD clínico — es biografía
- **Estimación:** S | **Prioridad:** P3

**HUE-47: Parámetros personalizados por periodo**
- Como usuario quiero crear mis propios parámetros de vida (ej: "¿dónde lavaba la ropa?", "¿qué gimnasio iba?", "¿qué celular tenía?")
- Para registrar cualquier aspecto de mi rutina que varíe en el tiempo sin necesidad de una categoría formal
- **Estimación:** L | **Prioridad:** P3

**HUE-48: Superposición visual de periodos**
- Como usuario quiero ver todos mis periodos superpuestos en una vista horizontal (vivienda + trabajo + estudio + relación + mascotas en bandas paralelas)
- Para visualizar de un vistazo cómo se cruzan las dimensiones de mi vida en cada momento
- **Estimación:** L | **Prioridad:** P2

---

## 💬 Épica 6: Archivo de Comunicaciones (9 historias)

> Esto es memoria conversacional, no backup técnico.

**HUE-49: Importar WhatsApp**
- Como usuario quiero importar un archivo .txt de exportación de WhatsApp y que HUESHA parsee mensajes, fechas y remitentes
- Para archivar conversaciones importantes y poder buscarlas por fecha o contenido
- **Estimación:** L | **Prioridad:** P2

**HUE-50: Importar Instagram DMs**
- Como usuario quiero importar mis DMs de Instagram (via export de datos de Meta)
- Para conservar conversaciones que podrían perderse si cierro la cuenta o Meta cambia políticas
- **Estimación:** L | **Prioridad:** P3

**HUE-51: Importar Messenger**
- Como usuario quiero importar mis mensajes de Facebook Messenger (via export de datos de Meta)
- Para tener un archivo centralizado de comunicaciones históricas — especialmente pre-WhatsApp
- **Estimación:** L | **Prioridad:** P3

**HUE-52: Importar emails (Gmail)**
- Como usuario quiero conectar Gmail y ver emails relevantes por fecha
- Para reconstruir comunicaciones formales (trabajo, trámites, decisiones) en mi vista de día
- **Estimación:** L | **Prioridad:** P3

**HUE-53: Vista cronológica unificada de chats**
- Como usuario quiero ver TODOS los mensajes de TODAS las plataformas intercalados cronológicamente en un solo día
- Para reconstruir "¿con quién hablé y qué dije el 14 de febrero de 2023?" sin buscar en 4 apps distintas
- **Estimación:** L | **Prioridad:** P1

**HUE-54: Búsqueda full-text global en comunicaciones**
- Como usuario quiero buscar por texto en todos mis chats archivados de todas las plataformas
- Para encontrar "¿quién me recomendó ese libro?" o "¿qué le dije a María en 2019?"
- **Estimación:** M | **Prioridad:** P1

**HUE-55: Vincular chat a entrada o evento**
- Como usuario quiero asociar un chat archivado a una entrada de diario o evento
- Para dar contexto completo (la entrada + la conversación que tuve ese día)
- **Estimación:** S | **Prioridad:** P3

**HUE-56: Marcar conversación como "importante"**
- Como usuario quiero marcar conversaciones o fragmentos de chat como "importantes" para encontrarlos rápido
- Para distinguir chats trascendentes de ruido cotidiano y crear un archivo de conversaciones que importan
- **Estimación:** S | **Prioridad:** P3

**HUE-57: Conversaciones incompletas / fragmentadas**
- Como usuario quiero poder importar conversaciones parciales (ej: solo capturas de pantalla, fragmentos copiados, resúmenes)
- Para no perder recuerdos conversacionales por limitaciones del export — algo es mejor que nada
- **Estimación:** M | **Prioridad:** P3

---

## 🔌 Épica 7: Integraciones Pasivas y Contexto Automático (8 historias)

> HUESHA observa, no interrumpe.

**HUE-58: Google Photos (lectura por fecha)**
- Como usuario quiero conectar mi cuenta de Google Photos y ver mis fotos por fecha dentro de HUESHA
- Para que la vista de día muestre las fotos que saqué sin duplicarlas ni ocupar espacio
- **Estimación:** L | **Prioridad:** P2

**HUE-59: Spotify (historial de escucha)**
- Como usuario quiero conectar Spotify y ver qué escuchaba cada día/periodo
- Para reconstruir mi soundtrack vital ("¿qué escuchaba en 2017?" → "ah, era cuando estaba en Córdoba")
- **Estimación:** L | **Prioridad:** P2

**HUE-60: Letterboxd import**
- Como usuario quiero importar mis ratings y reseñas de Letterboxd
- Para traer mi historial cinéfilo sin duplicar carga manual
- **Estimación:** M | **Prioridad:** P2

**HUE-61: Clima automático diario**
- Como usuario quiero que HUESHA registre automáticamente el clima de cada día en mi ubicación
- Para dar contexto ambiental a mis entradas (y descubrir que los días de lluvia escribo más)
- **Estimación:** M | **Prioridad:** P2

**HUE-62: Geolocalización automática**
- Como usuario quiero que al crear una entrada se auto-detecte mi ubicación actual
- Para construir mi mapa de vida sin carga manual
- **Estimación:** S | **Prioridad:** P3

**HUE-63: Calendario externo (Google Calendar)**
- Como usuario quiero conectar Google Calendar y que los eventos del calendario aparezcan como contexto en la vista de día
- Para que HUESHA sepa "ese día tenías reunión con X" o "ese día fue el cumple de Y" sin que yo lo registre
- **Estimación:** L | **Prioridad:** P3

**HUE-64: Eventos históricos externos (contexto mundial)**
- Como usuario quiero que HUESHA muestre opcionalmente qué pasó en el mundo cada día (noticias, efemérides, eventos deportivos globales)
- Para contextualizar mi vida con lo que pasaba afuera ("el día que ganó Messi el mundial, yo estaba en...")
- **Estimación:** M | **Prioridad:** P3

**HUE-65: Integraciones como "capas" activables**
- Como usuario quiero activar/desactivar cada fuente de datos externa como una capa (tipo capas de un mapa)
- Para controlar cuánta información veo en cada vista sin que todo sea ruido — cada persona muestra distinta densidad
- **Estimación:** M | **Prioridad:** P2

---

## 👁️ Épica 8: Vista Día, Timeline y Navegación Temporal (10 historias)

> El tiempo es la UI principal.

**HUE-66: Vista día unificada (mega-dashboard)**
- Como usuario quiero abrir cualquier fecha y ver TODO junto: entradas de diario, chats, fotos (Google Photos), emails, clima, música, registros de salud (ECOSALUD), tareas (MANTIA)
- Para reconstruir completamente qué pasó cualquier día de mi vida
- **Estimación:** XL | **Prioridad:** P1

**HUE-67: Días sin escritura (día implícito)**
- Como usuario quiero que si un día tuvo chats importados, fotos, música, registros de salud o eventos — pero no escribí nada — ese día igualmente exista con su contenido pasivo
- Para que no haya "días vacíos" y no generar culpa por no escribir. El día existe aunque yo no haya escrito
- **Estimación:** M | **Prioridad:** P1

**HUE-68: Vista semanal**
- Como usuario quiero ver un resumen de la semana con indicadores por día (escritura, fotos, eventos, salud, mood)
- Para navegar mi vida a nivel semanal y detectar patrones de actividad
- **Estimación:** M | **Prioridad:** P2

**HUE-69: Vista mensual con indicadores**
- Como usuario quiero ver un calendario mensual con íconos indicando qué tipo de registro hay cada día (✏️ diario, 📷 fotos, ✈️ viaje, 🏆 hito, 😊 mood)
- Para navegar mi vida mes a mes y ver de un vistazo los días con más actividad
- **Estimación:** M | **Prioridad:** P2

**HUE-70: Vista anual completa**
- Como usuario quiero ver el año entero en una vista condensada tipo heatmap (días con actividad más intensos, hitos marcados, periodos superpuestos)
- Para tener la foto del año de un vistazo — cuándo viajé, cuándo escribí más, cuándo no hice nada
- **Estimación:** L | **Prioridad:** P2

**HUE-71: Timeline biográfico vertical**
- Como usuario quiero ver una línea de tiempo vertical con todos mis periodos de vida superpuestos (vivienda + trabajo + estudio + relación + mascotas en paralelo)
- Para visualizar la evolución completa de mi vida como si fuera una biografía visual
- **Estimación:** L | **Prioridad:** P2

**HUE-72: Mapa vital de lugares**
- Como usuario quiero ver un mapa con pins de todos los lugares que visité, viví o referencié
- Para visualizar geográficamente mi recorrido de vida
- **Estimación:** L | **Prioridad:** P3

**HUE-73: Filtros temporales avanzados**
- Como usuario quiero filtrar todo HUESHA por rangos de fecha, tipo de contenido, personas, lugares, mood, tags — combinables
- Para hacer preguntas complejas como "todo lo que escribí sobre @María entre 2018 y 2020 cuando estaba feliz"
- **Estimación:** M | **Prioridad:** P2

**HUE-74: "Mi vida en el año X"**
- Como usuario quiero buscar un año y ver resumen completo: dónde vivía, qué trabajaba, pelis/libros, viajes, hitos, personas frecuentes
- Para tener una foto completa de cualquier momento de mi vida en una sola pantalla
- **Estimación:** L | **Prioridad:** P2

**HUE-75: Capas de lectura (hechos / resumen / texto)**
- Como usuario quiero ver una entrada de diario en múltiples capas: tal como la escribí, resumida por IA, o solo hechos extraídos
- Para revisitar el pasado a la profundidad que necesite — a veces quiero la emoción completa, a veces solo qué pasó
- **Estimación:** M | **Prioridad:** P3

---

## 🤖 Épica 9: IA, Síntesis y Lectura del Pasado (9 historias)

> IA como lector del pasado, no juez.

**HUE-76: Resumen semanal automático**
- Como usuario quiero que cada domingo se genere un resumen de mi semana basado en todo lo que registré (escritura, eventos, media, salud)
- Para tener una síntesis sin esfuerzo y descubrir qué fue importante sin releer todo
- **Estimación:** L | **Prioridad:** P2

**HUE-77: Resumen mensual**
- Como usuario quiero un resumen del mes con hitos, estadísticas, mood promedio y temas recurrentes
- Para cerrar el mes con perspectiva y detectar tendencias que no vi en el día a día
- **Estimación:** L | **Prioridad:** P2

**HUE-78: Resumen anual (Year in Review)**
- Como usuario quiero en diciembre ver un resumen del año con hitos, stats (películas, libros, viajes, personas más mencionadas) y fotos destacadas
- Para cerrar el año con perspectiva y celebrar lo vivido
- **Estimación:** L | **Prioridad:** P2

**HUE-79: "Un día como hoy" — Recuerdos automáticos**
- Como usuario quiero ver cada día qué registré en esa misma fecha en años anteriores
- Para revivir momentos y descubrir coincidencias (como "Recuerdos" de Facebook/Google Photos, pero con TODO mi archivo)
- **Estimación:** M | **Prioridad:** P2

**HUE-80: Comparación hace 1 / 5 / 10 años**
- Como usuario quiero ver qué estaba haciendo hace exactamente 1, 5 o 10 años (dónde vivía, qué trabajaba, qué leía, con quién estaba)
- Para reflexionar sobre mi progreso, cambios y ciclos
- **Estimación:** M | **Prioridad:** P3

**HUE-81: Detección de patrones emocionales**
- Como usuario quiero que la IA detecte patrones en mi estado de ánimo: estacionalidad, correlación con eventos, tendencias preocupantes
- Para conocerme mejor sin terapia — aunque no reemplaza a un profesional, me da datos sobre mí mismo
- **Estimación:** L | **Prioridad:** P3

**HUE-82: Detección de silencios prolongados**
- Como usuario quiero que si paso muchos días sin escribir, HUESHA me lo señale suavemente sin juzgar: "Hace 12 días que no escribís. ¿Querés dejar una nota general?"
- Para mantener hábito sin generar culpa. El tono es de invitación, nunca de reclamo
- **Estimación:** S | **Prioridad:** P2

**HUE-83: Sugerencias narrativas ("acá pasó algo")**
- Como usuario quiero que la IA me diga "entre marzo y junio de 2019 dejaste de escribir y cuando volviste cambió el tono — ¿querés agregar contexto?"
- Para llenar huecos biográficos importantes. La IA señala discontinuidades, yo decido si las explico
- **Estimación:** L | **Prioridad:** P3

**HUE-84: Resúmenes por persona / lugar / periodo**
- Como usuario quiero pedir un resumen de "todo lo que viví con @María" o "mi etapa en @Córdoba" y recibir una síntesis narrativa generada por IA
- Para revisitar relaciones, lugares o épocas sin releer cientos de entradas
- **Estimación:** L | **Prioridad:** P3

---

## 📓 Épica 10: Journaling Guiado y Emoción (8 historias)

> Escribir sin presión, pero con sentido.

**HUE-85: Prompts guiados**
- Como usuario quiero recibir preguntas sugeridas para escribir ("¿Qué aprendiste hoy?", "¿Por qué estás agradecido?", "¿Qué te preocupa?")
- Para superar el "no sé qué escribir" y crear hábito de registro
- **Estimación:** M | **Prioridad:** P2

**HUE-86: Prompts contextuales automáticos**
- Como usuario quiero que HUESHA sugiera prompts basados en mi contexto real: "Hoy estuviste en @lugar", "Ayer completaste @tarea", "Esta semana viste 3 películas"
- Para que las preguntas sean relevantes a mi vida, no genéricas de app de meditación
- **Estimación:** M | **Prioridad:** P3

**HUE-87: Registro de estado de ánimo**
- Como usuario quiero seleccionar mi estado de ánimo al crear una entrada (😊 😐 😢 😡 🤩 😴 😰 etc.)
- Para poder ver patrones emocionales a lo largo del tiempo
- **Estimación:** S | **Prioridad:** P2

**HUE-88: Emociones múltiples por día**
- Como usuario quiero registrar más de una emoción por día (ej: "enojado en el trabajo pero contento en casa")
- Para reflejar que los días no son monocromáticos — un día puede ser bueno Y malo a la vez
- **Estimación:** S | **Prioridad:** P3

**HUE-89: Evolución emocional en el tiempo**
- Como usuario quiero ver un gráfico de mi evolución emocional a lo largo de semanas/meses/años
- Para detectar tendencias, estacionalidad y correlaciones con eventos de vida
- **Estimación:** M | **Prioridad:** P3

**HUE-90: Journaling no lineal (responder días después)**
- Como usuario quiero abrir una entrada vieja y agregar reflexiones posteriores ("2 semanas después, esto ya no duele")
- Para que el diario sea vivo y no se congele en el momento de escritura — a veces el sentido llega después
- **Estimación:** M | **Prioridad:** P2

**HUE-91: Modo descarga emocional (sin estructura)**
- Como usuario quiero un modo "descarga" donde escribo flujo de conciencia sin título, sin tags, sin mood, sin formato
- Para los momentos en que necesito sacar algo de adentro y cualquier estructura es una barrera
- **Estimación:** S | **Prioridad:** P2

**HUE-92: Cierre diario opcional**
- Como usuario quiero un prompt de cierre de día al anochecer: "¿Cómo estuvo tu día en una frase?" + mood selector
- Para crear un registro mínimo incluso los días que no escribí una entrada completa. Es el safety net del hábito
- **Estimación:** S | **Prioridad:** P2

---

## 📦 Épica 11: Importación, Exportación y Backups (6 historias)

> Tu vida no queda cautiva.

**HUE-93: Import masivo de periodos (CSV)**
- Como usuario quiero subir un Excel/CSV con periodos de vida (vivienda, trabajo, estudio) y que HUESHA los cree automáticamente
- Para migrar mis datos históricos ya recopilados sin carga manual uno a uno
- **Estimación:** M | **Prioridad:** P1

**HUE-94: Templates guiados descargables**
- Como usuario quiero que HUESHA me dé plantillas descargables por tipo ("Historial de viviendas", "Historial laboral", "Historial cultural")
- Para saber exactamente qué formato necesita y cargar masivamente con estructura correcta
- **Estimación:** S | **Prioridad:** P1

**HUE-95: Import masivo de media**
- Como usuario quiero subir un Excel/CSV con películas vistas, libros leídos, con fechas y ratings
- Para migrar mi historial cultural existente al sistema sin tipear uno a uno
- **Estimación:** M | **Prioridad:** P2

**HUE-96: Exportar a PDF**
- Como usuario quiero exportar todo mi HUESHA o un rango de fechas a PDF (versión imprimible, con fotos y formato)
- Para tener una versión física/offline de mi historia de vida que pueda imprimir
- **Estimación:** M | **Prioridad:** P2

**HUE-97: Exportar a JSON**
- Como usuario quiero exportar todo mi HUESHA a JSON (versión técnica, completa, parseable)
- Para tener un backup portátil de mi historia de vida que pueda importar en cualquier sistema futuro
- **Estimación:** M | **Prioridad:** P2

**HUE-98: Exportar por rango temporal / persona**
- Como usuario quiero exportar solo un rango de fechas o solo las entradas que mencionan a una persona/lugar específico
- Para generar "el libro de mi relación con @María" o "mis años en @Córdoba" como exportación temática
- **Estimación:** M | **Prioridad:** P3

---

## 🕊️ Épica 12: Privacidad, Legado y Futuro (2 historias)

> Esta épica es la que hace que HUESHA importe de verdad.

**HUE-99: Entradas protegidas con PIN / capas de privacidad**
- Como usuario quiero marcar ciertas entradas como "privadas extra" y protegerlas con PIN adicional (dentro de un módulo que ya es 100% privado)
- Para protección por capas: hay cosas que no quiero ver ni yo sin intención. Diario dentro del diario
- **Estimación:** M | **Prioridad:** P3

**HUE-100: Modo legado (qué quedaría si algún día no estás)**
- Como usuario quiero marcar entradas como "legado" — registros que querés que alguien lea algún día, o que formen parte de una versión exportable especial para tus seres queridos
- Para pensar en el futuro de mis registros. No es compartir hoy, es preparar para después. La pregunta más difícil de HUESHA: "¿qué querés que quede?"
- **Estimación:** M | **Prioridad:** P3

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 15 | 🟢 Fundacional — Sprint 1-3 |
| **P2** | 46 | 🟡 Corto/mediano plazo |
| **P3** | 39 | 🔵 Mediano/largo plazo |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 22 | ~66h |
| **M** | 41 | ~246h |
| **L** | 21 | ~210h |
| **XL** | 1 | ~20h |
| **TOTAL** | **100** | **~542h** |

## 📊 Distribución por Épica

| # | Épica | Historias | Horas est. |
|---|-------|-----------|------------|
| 1 | Escritura, Captura y Editor | 10 | ~60h |
| 2 | Voz, Audio y Memoria Oral | 8 | ~46h |
| 3 | Cultura, Consumo y Contexto Vital | 10 | ~52h |
| 4 | Eventos, Experiencias y Vida Social | 10 | ~52h |
| 5 | Periodos de Vida y Estructura Biográfica | 10 | ~52h |
| 6 | Archivo de Comunicaciones | 9 | ~62h |
| 7 | Integraciones Pasivas y Contexto Automático | 8 | ~56h |
| 8 | Vista Día, Timeline y Navegación Temporal | 10 | ~76h |
| 9 | IA, Síntesis y Lectura del Pasado | 9 | ~70h |
| 10 | Journaling Guiado y Emoción | 8 | ~36h |
| 11 | Importación, Exportación y Backups | 6 | ~30h |
| 12 | Privacidad, Legado y Futuro | 2 | ~12h |

---

## 🎯 Modelo de Datos Conceptual

```
HueshaDiaryEntry (entrada de diario)
├── id, user_id
├── titulo (nullable — modo descarga no lo requiere)
├── contenido_html (editor WYSIWYG)
├── contenido_plain (para búsqueda full-text)
├── fecha, hora
├── mood (emoji estado ánimo, nullable)
├── moods[] (para emociones múltiples por día)
├── tipo: "normal" | "rapida" | "descarga" | "cierre_diario" | "solo_audio"
├── is_draft (boolean — guardado automático)
├── is_private_extra (boolean), pin_hash
├── is_legacy (boolean — modo legado)
├── audio_url (si viene de transcripción o solo audio)
├── geolocation_lat, geolocation_lng
├── weather_data (JSON: temp, condición, humedad)
├── tags[] (→ HueshaTag)
├── entity_references[] (→ HueshaEntityRef)
├── linked_communications[]
├── addendum_entries[] (journaling no lineal — reflexiones posteriores)
├── prompt_used_id (si fue journaling guiado)
├── versions[] (historial de ediciones)
├── created_at, updated_at
└── last_auto_save_at

HueshaEntityRef (referencia @ inline)
├── id, diary_entry_id
├── entity_type: "persona" | "lugar" | "evento" | "eco_item"
├── entity_id (ID de la entidad referenciada)
├── display_text (@nombre como aparece en el editor)
└── position_in_text (offset para renderizar)

HueshaAudioEntry (registro de audio)
├── id, diary_entry_id (nullable — puede ser solo audio)
├── user_id
├── audio_url, audio_duration_seconds
├── formato: "mp3" | "m4a" | "wav" | "ogg" | "webm"
├── transcripcion_completa (texto full)
├── transcripcion_editada (texto corregido por el usuario)
├── transcripcion_parcial_ranges[] (JSON: [{start: 180, end: 420}])
├── timestamps[] (JSON: [{time: 30, text: "párrafo 1"}, ...])
├── is_transcribed (boolean)
├── stt_provider: "whisper" | "google" | "deepgram"
├── created_at
└── fuente: "grabado_app" | "subido" | "nota_voz_externa"

HueshaMediaLog (registro de media/cultura)
├── id, user_id
├── tipo: "pelicula" | "serie" | "libro" | "album" | "cancion" | "podcast" | "charla" | "otro"
├── titulo (nullable — permite registro sin identificar)
├── artista_autor
├── descripcion_informal (para registros sin título exacto)
├── fecha_consumo
├── rating (1-5, nullable — nunca obligatorio)
├── nota_personal
├── status: "consumido" | "pendiente" (wishlist)
├── external_id (TMDB, Spotify, Letterboxd, ISBN)
├── external_source
├── tags[]
└── created_at

HueshaEvent (evento/experiencia — UNIFICADO)
├── id, user_id
├── event_type: "viaje" | "hito" | "deporte" | "social" | "recital" | "evento_generico"
├── titulo, descripcion
├── cronica_larga (texto largo, para línea narrativa)
├── lugar, location_lat, location_lng
├── fecha_inicio, fecha_fin
├── fecha_aproximada (boolean — "creo que fue ese día")
├── mood
├── resultado (para deportes)
├── campos_extra (JSON: destino/itinerario para viaje, artista para recital, etc.)
├── personas[] (→ HueshaTag tipo persona)
├── photos[], linked_media[], linked_chats[], linked_entries[]
├── is_recurrent (boolean)
├── recurrence_pattern (JSON: {frecuencia, dia_semana})
├── parent_event_id (para eventos recurrentes)
└── created_at

HueshaLifePeriod (periodo de vida)
├── id, user_id
├── tipo: "vivienda" | "trabajo" | "estudio" | "relacion" | "convivencia" | "mascota" | "vehiculo" | "salud" | "custom"
├── tipo_custom_label (para parámetros personalizados)
├── titulo, descripcion, valor
├── fecha_inicio, fecha_fin
├── lugar
├── personas[]
└── metadata (JSON: campos extra según tipo)

HueshaCommunication (archivo de comunicación)
├── id, user_id
├── source: "whatsapp" | "instagram" | "messenger" | "email"
├── conversation_with (nombre contacto/grupo)
├── messages[] (JSON array con {sender, text, timestamp})
├── is_complete (boolean — false para fragmentadas)
├── is_important (boolean — marcada como importante)
├── import_date
├── fecha_range_start, fecha_range_end
└── linked_diary_entry_id, linked_event_id

HueshaTag (tags reutilizables)
├── id, user_id
├── nombre
├── tipo: "tema" | "persona" | "lugar" | "emocion" | "custom"
├── metadata (JSON: para personas → relación, foto)
└── color

HueshaJournalPrompt (prompts de journaling guiado)
├── id
├── texto ("¿Qué aprendiste hoy?")
├── categoria: "reflexion" | "gratitud" | "aprendizaje" | "emocional" | "contextual"
├── is_contextual (boolean — usa datos del usuario)
├── template_contexto (ej: "Hoy estuviste en {lugar}")
└── is_active

HueshaIntegrationLayer (capas de integraciones)
├── id, user_id
├── source: "google_photos" | "spotify" | "letterboxd" | "clima" | "geo" | "calendar" | "mundo"
├── is_active (boolean — capa activada/desactivada)
├── config (JSON: credenciales, filtros, preferencias)
├── last_sync_at
└── sync_status
```

---

## 🔗 Integraciones Externas Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **Google Photos** | Google Photos API (lectura) | HUE-58 |
| **Spotify** | Spotify Web API (recently played) | HUE-59 |
| **Letterboxd** | CSV export + RSS feed | HUE-60 |
| **Gmail** | Gmail API (lectura) | HUE-52 |
| **Google Calendar** | Google Calendar API | HUE-63 |
| **Instagram** | Meta Data Export (JSON) | HUE-50 |
| **Facebook** | Meta Data Export (JSON) | HUE-51 |
| **WhatsApp** | Archivo .txt export | HUE-49 |
| **Whisper/STT** | OpenAI Whisper API o similar | HUE-11, HUE-12, HUE-18 |
| **Clima** | OpenWeatherMap o similar | HUE-61 |
| **Geolocalización** | Browser Geolocation API | HUE-62 |
| **Eventos mundiales** | Wikipedia API / Newsdata.io | HUE-64 |
| **IA Resúmenes** | OpenAI GPT o similar | HUE-75→HUE-84 |

---

## 🎯 Roadmap HUESHA

**🟢 MVP (v0.1):** Editor + Voz + Periodos base + Vista día + Import masivo
→ HUE-01→04, HUE-09→11, HUE-13, HUE-19→20, HUE-29→31, HUE-39→41, HUE-53→54, HUE-66→67, HUE-93→94

**🟡 v0.2 — Profundidad:** Cultura completa + Eventos ricos + Periodos extendidos + Journaling
→ Épicas 3-5 completas, Épica 10

**🟡 v0.3 — Conexiones:** Comunicaciones + Integraciones pasivas + Timeline
→ Épicas 6-8 completas

**🔵 v0.4 — Inteligencia:** IA completa + Navegación avanzada + Export
→ Épicas 9, 11

**🔵 v1.0 — Legado:** Privacidad, legado, capas de lectura
→ Épica 12

---

## 🧭 Observaciones

- **No inflamos por inflar** — cada una de las 34 historias nuevas responde a una pregunta futura real
- **Corto plazo usable** (P1 = 15 historias que permiten registrar vida desde día 1)
- **Mediano plazo profundo** (P2 = 46 historias que convierten datos en biografía)
- **Largo plazo humano** (P3 = 39 historias que hacen de HUESHA algo único y personal)
- **La épica 12 es la más pequeña (2 historias) pero la más importante** — validar que lo que construimos importa de verdad
- **HUESHA es el módulo más personal de ECO** — no comparte datos con el hogar, no tiene colaboración, no tiene uso "productivo". Es pura identidad

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
