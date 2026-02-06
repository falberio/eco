# 💚 ECOSALUD - Salud y Bienestar (100 historias)

**Fecha:** 5 de febrero de 2026  
**Módulo:** ECOSALUD  
**Propósito:** Registro integral de salud física, mental y emocional — con medicación, síntomas, estudios médicos, metas, inteligencia contextual y conexión con el resto de ECO.

> *"Clínico pero humano. No es una app fitness genérica: es tu historia de salud, completa y conectada."*

**Características clave:**
- 📋 Registro flexible: peso, presión, glucemia, ánimo, síntomas, medicación
- 📊 Visualización: gráficos, tendencias, promedios móviles, comparativas
- 🎯 Metas y hábitos: rachas, badges, recordatorios, proyecciones
- 💊 Medicación: recurrente/puntual, stock, alertas de dosis olvidada
- 🧠 Salud mental: ánimo, estrés, ansiedad, sueño, patrones emocionales
- 🧪 Estudios médicos: fotos, OCR, comparación temporal, alertas de rango
- 🔗 Integraciones: Google Fit, Apple Health, smartwatch, apps de running
- 👨‍⚕️ Médicos: turnos, consultas, compartición controlada de datos
- 🤖 IA: correlaciones, insights, predicción de riesgos

**Distribución por Épica:**
- Épica 1: Registro básico de salud (Core) → 10 historias
- Épica 2: Visualización y análisis básico → 10 historias
- Épica 3: Metas, hábitos y motivación → 10 historias
- Épica 4: Medicación y tratamientos → 10 historias
- Épica 5: Salud mental y emocional → 10 historias
- Épica 6: Síntomas, dolencias y eventos → 10 historias
- Épica 7: Estudios médicos y documentación → 10 historias
- Épica 8: Integraciones y dispositivos → 10 historias
- Épica 9: Médicos, consultas y compartición → 10 historias
- Épica 10: Inteligencia y contexto vital → 10 historias

**TOTAL:** 100 historias

---

## 🧱 Épica 1: Registro Básico de Salud — Core (10 historias)

> Lo mínimo indispensable para que ECOSALUD exista.

**ECO-01: Registro manual de datos** ✅
- Como usuario quiero registrar manualmente un dato de salud (peso, presión, glucemia, temperatura, etc.)
- Para llevar control de mis indicadores de salud en un solo lugar
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**ECO-02: Histórico cronológico** ✅
- Como usuario quiero ver todos mis registros ordenados por fecha (más reciente primero)
- Para tener una línea de tiempo de mi salud
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**ECO-03: Tipos de registro (peso, presión, glucemia, etc.)** ✅
- Como usuario quiero elegir el tipo de dato que registro (peso, presión arterial, glucemia, frecuencia cardíaca, temperatura, saturación O₂)
- Para tener datos estructurados y comparables en el tiempo
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**ECO-04: Registro rápido (1 tap / quick add)** 🟢
- Como usuario quiero registrar un dato con un solo toque eligiendo tipo + valor (sin formulario completo)
- Para registrar en 5 segundos — si es difícil, no lo voy a hacer todos los días
- **Estimación:** S | **Prioridad:** P1

**ECO-05: Registro con fecha pasada** 🟢
- Como usuario quiero registrar un dato con una fecha diferente a hoy (ej: "ayer me pesé y no lo anoté")
- Para completar el historial aunque no haya registrado en el momento
- **Estimación:** S | **Prioridad:** P1

**ECO-06: Edición de registros históricos** 🟢
- Como usuario quiero editar un registro previo si me equivoqué en el valor
- Para corregir errores sin tener que borrar y recrear
- **Estimación:** S | **Prioridad:** P1

**ECO-07: Eliminación con confirmación** 🟢
- Como usuario quiero eliminar un registro con confirmación previa
- Para poder borrar datos erróneos sin riesgo de eliminar por error
- **Estimación:** S | **Prioridad:** P1

**ECO-08: Notas libres por registro** 🟢
- Como usuario quiero agregar notas de texto libre a cualquier registro ("después de correr 5km", "estaba en ayunas", "me sentía mal")
- Para darle contexto al número y entender de verdad qué pasaba ese día
- **Estimación:** S | **Prioridad:** P2

**ECO-09: Adjuntar ubicación opcional** 🟡
- Como usuario quiero registrar opcionalmente dónde estaba cuando me medí (casa, consultorio, gimnasio)
- Para detectar si el contexto físico influye en mis valores (ej: presión más alta en consultorio)
- **Estimación:** S | **Prioridad:** P3

**ECO-10: Tags personalizados por registro** 🟢
- Como usuario quiero agregar tags libres a un registro (ej: "post-ejercicio", "en ayunas", "con medicación")
- Para filtrar y cruzar datos por contexto y encontrar patrones
- **Estimación:** S | **Prioridad:** P2

---

## 📊 Épica 2: Visualización y Análisis Básico (10 historias)

> Ver para entender.

**ECO-11: Gráficos de evolución temporal** 🟢
- Como usuario quiero ver un gráfico de línea con la evolución de mi peso (o cualquier indicador) en los últimos 3/6/12 meses
- Para visualizar tendencias y no depender solo de números sueltos
- **Estimación:** M | **Prioridad:** P2

**ECO-12: Filtros por rango de fechas** 🟢
- Como usuario quiero filtrar mis registros por rango de fechas (última semana, último mes, personalizado)
- Para enfocarme en el período que me interesa analizar
- **Estimación:** S | **Prioridad:** P2

**ECO-13: Vista comparativa por períodos** 🟡
- Como usuario quiero comparar dos períodos (ej: enero vs febrero, este año vs el anterior)
- Para ver si estoy mejorando, empeorando o estable
- **Estimación:** M | **Prioridad:** P2

**ECO-14: Comparar con metas** 🟢
- Como usuario quiero ver en el gráfico una línea de mi meta superpuesta con los valores reales
- Para visualizar de un vistazo qué tan lejos/cerca estoy de mi objetivo
- **Estimación:** S | **Prioridad:** P2

**ECO-15: Alertas por valores anormales** 🟢
- Como usuario quiero recibir alerta si registro un valor fuera de rango (ej: presión > 140/90, glucemia > 200)
- Para actuar rápido ante una situación de riesgo
- **Estimación:** M | **Prioridad:** P2

**ECO-16: Líneas de referencia (peso ideal, rango saludable)** 🟡
- Como usuario quiero que el gráfico muestre líneas de referencia (ej: peso ideal según IMC, rango normal de presión)
- Para tener contexto médico visual sin googlear
- **Estimación:** S | **Prioridad:** P2

**ECO-17: Vista "foto del mes"** 🟡
- Como usuario quiero ver un resumen visual del mes: valor promedio, mínimo, máximo, tendencia, cantidad de registros
- Para tener un snapshot rápido de cómo fue mi mes en salud
- **Estimación:** M | **Prioridad:** P2

**ECO-18: Promedios móviles** 🟡
- Como usuario quiero ver un promedio móvil (7 días, 30 días) superpuesto al gráfico de valores individuales
- Para suavizar las fluctuaciones diarias y ver la tendencia real
- **Estimación:** M | **Prioridad:** P3

**ECO-19: Exportar datos a PDF** 🟢
- Como usuario quiero exportar mi historial de salud a PDF con gráficos incluidos
- Para llevar un documento completo al médico sin depender de la app
- **Estimación:** M | **Prioridad:** P2

**ECO-20: Exportar datos a CSV** 🟡
- Como usuario quiero exportar mis datos crudos a CSV/Excel
- Para hacer mi propio análisis offline o guardar backup
- **Estimación:** S | **Prioridad:** P2

---

## 🎯 Épica 3: Metas, Hábitos y Motivación (10 historias)

> Salud sostenida en el tiempo.

**ECO-21: Definir metas (peso, pasos, presión)** 🟢
- Como usuario quiero definir metas de salud (ej: "llegar a 75kg", "presión menor a 130/85", "10.000 pasos/día")
- Para tener un objetivo claro que me guíe y motive
- **Estimación:** M | **Prioridad:** P2

**ECO-22: Metas con fecha objetivo** 🟢
- Como usuario quiero asignar una fecha límite a mi meta (ej: "75kg para julio 2026")
- Para tener un deadline concreto y medir si voy bien con el ritmo
- **Estimación:** S | **Prioridad:** P2

**ECO-23: Proyección de cumplimiento** 🟡
- Como usuario quiero ver cuándo llegaré a mi meta según la tendencia actual (ej: "a este ritmo, llegás el 15 de agosto")
- Para ajustar esfuerzo si voy lento o celebrar si voy rápido
- **Estimación:** M | **Prioridad:** P3

**ECO-24: Racha de registros consecutivos** 🟢
- Como usuario quiero ver mi racha de días consecutivos registrando datos (streak)
- Para gamificar el hábito y no querer romper la racha
- **Estimación:** S | **Prioridad:** P2

**ECO-25: Recordatorio diario configurable** 🟢
- Como usuario quiero configurar a qué hora recibir el recordatorio de registrar mis datos
- Para que me llegue cuando realmente me voy a medir (ej: 7am al despertar)
- **Estimación:** S | **Prioridad:** P2

**ECO-26: Recordatorios por tipo de dato** 🟡
- Como usuario quiero configurar recordatorios diferentes por tipo (peso: diario 7am, presión: lunes y viernes 9am, glucemia: antes de cada comida)
- Para que cada indicador tenga su frecuencia adecuada
- **Estimación:** M | **Prioridad:** P2

**ECO-27: Alertas por abandono de hábito** 🟡
- Como usuario quiero que ECOSALUD me notifique suavemente si dejé de registrar hace X días ("Hace 5 días que no registrás peso. ¿Todo bien?")
- Para reactivarme sin generar culpa ni presión excesiva
- **Estimación:** S | **Prioridad:** P3

**ECO-28: Logros simbólicos (badges)** 🟡
- Como usuario quiero desbloquear logros al cumplir hitos (ej: "7 días seguidos", "primer mes completo", "meta alcanzada", "100 registros")
- Para sentir progreso y diversión en algo que puede ser aburrido
- **Estimación:** M | **Prioridad:** P3

**ECO-29: Historial de metas cumplidas** 🟡
- Como usuario quiero ver un historial de mis metas pasadas con resultado (cumplida / no cumplida / en curso)
- Para ver mi trayectoria y celebrar logros anteriores
- **Estimación:** S | **Prioridad:** P3

**ECO-30: Comparar metas pasadas vs actuales** 🟡
- Como usuario quiero comparar cómo fue mi progreso en metas anteriores vs la actual
- Para ajustar expectativas y aprender de experiencias previas ("la última vez bajé 3kg en 2 meses, ahora voy más lento")
- **Estimación:** M | **Prioridad:** P3

---

## ⏰ Épica 4: Medicación y Tratamientos (10 historias)

> Muy clínica, muy útil.

**ECO-31: Registro de medicamentos tomados** 🟢
- Como usuario quiero registrar qué medicamento tomé, cuándo y cuánto (ej: "Enalapril 10mg, 8:00am")
- Para tener historial completo de mi medicación
- **Estimación:** M | **Prioridad:** P2

**ECO-32: Registro de dosis y horarios** 🟢
- Como usuario quiero definir la dosis y horarios de cada medicamento (ej: "Ibuprofeno 400mg cada 8 horas")
- Para que ECOSALUD sepa cuándo y cuánto debo tomar
- **Estimación:** M | **Prioridad:** P2

**ECO-33: Recordatorio para tomar medicación** 🟢
- Como usuario quiero recibir notificación push/email cuando llega la hora de tomar un medicamento
- Para no olvidar dosis y mantener el tratamiento correctamente
- **Estimación:** M | **Prioridad:** P2

**ECO-34: Medicación recurrente vs puntual** 🟡
- Como usuario quiero diferenciar entre medicación crónica/recurrente (tomo todos los días) y puntual (solo cuando duele)
- Para que los recordatorios solo apliquen a la recurrente y la puntual sea registro libre
- **Estimación:** S | **Prioridad:** P2

**ECO-35: Alertas de dosis olvidada** 🟡
- Como usuario quiero recibir alerta si pasó la hora y no marqué que tomé el medicamento
- Para no saltear dosis sin darme cuenta
- **Estimación:** S | **Prioridad:** P2

**ECO-36: Registro de efectos secundarios** 🟡
- Como usuario quiero registrar si un medicamento me produjo efectos secundarios (mareos, náuseas, somnolencia)
- Para reportar al médico y tener evidencia concreta
- **Estimación:** M | **Prioridad:** P3

**ECO-37: Historial por medicamento** 🟡
- Como usuario quiero ver el historial completo de un medicamento específico (cuándo lo tomé, por cuánto tiempo, efectos)
- Para consultar rápido "¿cuánto tiempo tomé Enalapril?" o "¿qué me pasó con ese antibiótico?"
- **Estimación:** M | **Prioridad:** P2

**ECO-38: Adjuntar receta médica** 🟡
- Como usuario quiero adjuntar foto de la receta médica al medicamento
- Para tener la receta digitalizada y disponible cuando voy a la farmacia
- **Estimación:** M | **Prioridad:** P2

**ECO-39: Control de stock de medicación** 🟡
- Como usuario quiero registrar cuántas pastillas me quedan de un medicamento
- Para saber cuándo tengo que comprar más antes de que se me acaben
- **Estimación:** M | **Prioridad:** P3

**ECO-40: Alertas por medicación próxima a terminar** 🟡
- Como usuario quiero recibir alerta cuando me quedan pocas pastillas (ej: "Te quedan 5 pastillas de Enalapril, para ~5 días")
- Para comprar a tiempo y no interrumpir el tratamiento
- **Estimación:** S | **Prioridad:** P3

---

## 🧠 Épica 5: Salud Mental y Emocional (10 historias)

> Clave para tu perfil. No es una app de meditación: es registro real de cómo te sentís.

**ECO-41: Registro de estado de ánimo diario** 🟢
- Como usuario quiero registrar mi estado de ánimo del día con un selector visual (emoji o escala 1-5)
- Para ver patrones emocionales a lo largo del tiempo
- **Estimación:** M | **Prioridad:** P2

**ECO-42: Escala emocional configurable** 🟢
- Como usuario quiero personalizar mi escala emocional (3 niveles, 5 niveles, emojis custom, palabras propias)
- Para que el registro se sienta mío y no forzado por categorías ajenas
- **Estimación:** S | **Prioridad:** P2

**ECO-43: Registro de estrés** 🟡
- Como usuario quiero registrar mi nivel de estrés del día (bajo/medio/alto/extremo) con nota opcional
- Para trackear cuándo el estrés se vuelve crónico y requiere atención
- **Estimación:** S | **Prioridad:** P2

**ECO-44: Registro de ansiedad** 🟡
- Como usuario quiero registrar episodios de ansiedad (intensidad, duración, disparador)
- Para tener datos concretos que mostrar al psicólogo/psiquiatra
- **Estimación:** M | **Prioridad:** P2

**ECO-45: Registro de calidad del sueño (manual)** 🟡
- Como usuario quiero registrar cuántas horas dormí, si me desperté durante la noche y cómo me sentí al despertar
- Para cruzar calidad de sueño con ánimo, síntomas y rendimiento
- **Estimación:** M | **Prioridad:** P2

**ECO-46: Notas emocionales libres** 🟢
- Como usuario quiero escribir texto libre sobre cómo me siento hoy (más allá de un número o emoji)
- Para complementar el registro cuantitativo con contexto cualitativo real
- **Estimación:** S | **Prioridad:** P2

**ECO-47: Detección de patrones emocionales** 🟡
- Como usuario quiero que ECOSALUD detecte patrones (ej: "los lunes tu ánimo suele bajar", "después de 3 días malos suele venir uno bueno")
- Para entender mis ciclos emocionales y anticiparme
- **Estimación:** M | **Prioridad:** P3

**ECO-48: Relación ánimo ↔ síntomas** 🟡
- Como usuario quiero ver si hay correlación entre mi ánimo y mis síntomas físicos (ej: "cuando estás estresado, suele aparecerte dolor de cabeza")
- Para vincular mente y cuerpo con datos reales, no intuición
- **Estimación:** M | **Prioridad:** P3

**ECO-49: Relación ánimo ↔ hábitos** 🟡
- Como usuario quiero ver si hay relación entre mis hábitos (ejercicio, sueño, alimentación) y mi ánimo
- Para identificar qué hábitos me hacen bien y cuáles me perjudican
- **Estimación:** M | **Prioridad:** P3

**ECO-50: Línea de tiempo emocional** 🟡
- Como usuario quiero ver una línea de tiempo visual con mi estado emocional a lo largo del mes/año (colores o emojis por día)
- Para tener una "foto emocional" del período y detectar épocas difíciles
- **Estimación:** M | **Prioridad:** P3

---

## 🤕 Épica 6: Síntomas, Dolencias y Eventos (10 historias)

> El "diario clínico" real.

**ECO-51: Registro de síntomas** 🟢
- Como usuario quiero registrar un síntoma (dolor de cabeza, mareos, náuseas, dolor de espalda, etc.)
- Para tener un historial de dolencias que pueda mostrar al médico
- **Estimación:** M | **Prioridad:** P2

**ECO-52: Intensidad del síntoma** 🟢
- Como usuario quiero indicar la intensidad del síntoma en escala 1-10
- Para diferenciar entre un dolor leve y uno incapacitante
- **Estimación:** S | **Prioridad:** P2

**ECO-53: Duración del síntoma** 🟡
- Como usuario quiero registrar cuánto duró el síntoma (15 min, 2 horas, todo el día, varios días)
- Para que el médico tenga datos precisos y no "me dolió un rato"
- **Estimación:** S | **Prioridad:** P2

**ECO-54: Síntomas recurrentes** 🟡
- Como usuario quiero que ECOSALUD detecte si un síntoma aparece repetidamente (ej: "dolor de cabeza 8 veces este mes")
- Para identificar problemas crónicos que requieren atención médica
- **Estimación:** M | **Prioridad:** P2

**ECO-55: Asociación síntoma ↔ medicamento** 🟡
- Como usuario quiero vincular un síntoma con un medicamento que tomé (¿el mareo es por el Enalapril?)
- Para documentar posibles efectos secundarios con evidencia temporal
- **Estimación:** S | **Prioridad:** P3

**ECO-56: Asociación síntoma ↔ evento** 🟡
- Como usuario quiero vincular un síntoma con un evento o actividad (ej: "dolor de rodilla después de correr")
- Para identificar disparadores y prevenir futuras ocurrencias
- **Estimación:** S | **Prioridad:** P3

**ECO-57: Registro de crisis (migraña, pánico, etc.)** 🟡
- Como usuario quiero registrar un evento de crisis con intensidad, duración, disparador y qué hice para manejarlo
- Para tener historial detallado de episodios graves y sus resoluciones
- **Estimación:** M | **Prioridad:** P2

**ECO-58: Línea de tiempo de síntomas** 🟡
- Como usuario quiero ver una línea de tiempo cronológica de todos mis síntomas
- Para llevar al médico y decir "estos son todos mis síntomas de los últimos 3 meses, ordenados"
- **Estimación:** M | **Prioridad:** P2

**ECO-59: Adjuntar fotos (lesiones, erupciones)** 🟡
- Como usuario quiero adjuntar fotos a un síntoma (ej: foto de erupción cutánea, hinchazón, herida)
- Para documentar visualmente y mostrar al médico la evolución
- **Estimación:** M | **Prioridad:** P2

**ECO-60: Exportar síntomas para consulta médica** 🟡
- Como usuario quiero exportar un reporte de síntomas de un período a PDF
- Para llevar al médico un documento organizado en vez de tratar de recordar todo
- **Estimación:** M | **Prioridad:** P2

---

## 🧪 Épica 7: Estudios Médicos y Documentación (10 historias)

> Acá se vuelve serio-serio.

**ECO-61: Subir fotos de estudios médicos** 🟡
- Como usuario quiero subir foto de un análisis de sangre, radiografía, ecografía o cualquier estudio
- Para tener todos mis estudios digitalizados en un solo lugar
- **Estimación:** M | **Prioridad:** P2

**ECO-62: OCR de estudios (laboratorios)** 🟡
- Como usuario quiero que ECOSALUD lea la foto de mi análisis de sangre y extraiga valores automáticamente (glucemia: 95, colesterol: 210, etc.)
- Para no cargar a mano cada valor y tener los datos listos para graficar
- **Estimación:** L | **Prioridad:** P3

**ECO-63: Interpretación básica de valores** 🔵
- Como usuario quiero que ECOSALUD me diga si un valor está dentro del rango normal, alto o bajo
- Para entender mis estudios sin necesidad de googlear cada línea
- **Estimación:** M | **Prioridad:** P3

**ECO-64: Alertas por valores fuera de rango** 🟡
- Como usuario quiero recibir alerta si un valor de estudio está fuera de rango (ej: colesterol > 200)
- Para no pasar por alto un resultado preocupante
- **Estimación:** M | **Prioridad:** P2

**ECO-65: Histórico de estudios por tipo** 🟡
- Como usuario quiero ver todos mis análisis de sangre ordenados cronológicamente, o todas mis ecografías agrupadas
- Para comparar evolución de un tipo de estudio a lo largo del tiempo
- **Estimación:** M | **Prioridad:** P2

**ECO-66: Comparar estudios en el tiempo** 🟡
- Como usuario quiero comparar dos análisis de sangre lado a lado (ej: marzo vs septiembre) con diferencias destacadas
- Para ver qué mejoró y qué empeoró en cada indicador
- **Estimación:** M | **Prioridad:** P3

**ECO-67: Adjuntar órdenes médicas** 🟡
- Como usuario quiero adjuntar la orden médica que generó el estudio
- Para tener el ciclo completo: orden → estudio → resultado
- **Estimación:** S | **Prioridad:** P3

**ECO-68: Adjuntar informes médicos** 🟡
- Como usuario quiero subir informes médicos completos (PDF, fotos, documentos)
- Para tener toda la documentación médica centralizada y accesible
- **Estimación:** M | **Prioridad:** P2

**ECO-69: Clasificación automática de estudios** 🔵
- Como usuario quiero que ECOSALUD clasifique automáticamente mis estudios por tipo (laboratorio, imagen, cardiología, etc.)
- Para no tener que organizar manualmente cada archivo subido
- **Estimación:** M | **Prioridad:** P3

**ECO-70: Búsqueda por palabra clave en estudios** 🟡
- Como usuario quiero buscar dentro de mis estudios por palabra clave (ej: "colesterol", "radiografía rodilla")
- Para encontrar rápido un estudio específico entre muchos archivos
- **Estimación:** M | **Prioridad:** P2

---

## 🔗 Épica 8: Integraciones y Dispositivos (10 historias)

> Mediano / largo plazo.

**ECO-71: Importar desde Google Fit** 🟡
- Como usuario quiero importar pasos, peso y ejercicio desde Google Fit
- Para centralizar todos mis datos de salud sin duplicar registros
- **Estimación:** L | **Prioridad:** P3

**ECO-72: Integración con Apple Health** 🟡
- Como usuario iOS quiero importar datos de Apple Health (pasos, peso, FC, sueño)
- Para no registrar a mano lo que mi iPhone ya captura automáticamente
- **Estimación:** L | **Prioridad:** P3

**ECO-73: Sincronización con báscula inteligente** 🟡
- Como usuario quiero que mi báscula inteligente (Xiaomi, Withings, etc.) registre automáticamente mi peso en ECOSALUD
- Para pesarme y que el dato aparezca solo, sin abrir la app
- **Estimación:** L | **Prioridad:** P3

**ECO-74: Integración con smartwatch (pasos, FC)** 🔵
- Como usuario quiero importar datos de mi smartwatch (pasos diarios, frecuencia cardíaca, calorías)
- Para incorporar actividad física medida automáticamente al perfil de salud
- **Estimación:** L | **Prioridad:** P3

**ECO-75: Importar datos de sueño (API externa)** 🔵
- Como usuario quiero importar datos de sueño desde apps especializadas (Sleep Cycle, Samsung Health, Fitbit)
- Para complementar mi registro manual de sueño con datos precisos del dispositivo
- **Estimación:** L | **Prioridad:** P3

**ECO-76: Integración con apps de running** 🔵
- Como usuario quiero importar actividades de running desde Strava, Nike Run Club o MapMyRun
- Para vincular mis entrenamientos con mi evolución de salud
- **Estimación:** L | **Prioridad:** P3

**ECO-77: Integración con apps de meditación** 🔵
- Como usuario quiero importar sesiones de meditación desde Headspace, Calm o Insight Timer
- Para correlacionar práctica de meditación con ánimo y estrés
- **Estimación:** L | **Prioridad:** P3

**ECO-78: Importación automática diaria** 🔵
- Como usuario quiero que las integraciones sincronicen datos automáticamente una vez al día sin intervención manual
- Para mantener ECOSALUD actualizado sin esfuerzo
- **Estimación:** M | **Prioridad:** P3

**ECO-79: Resolución de conflictos de datos** 🔵
- Como usuario quiero que ECOSALUD maneje correctamente cuando llegan datos duplicados o contradictorios de distintas fuentes
- Para no tener "dos pesos diferentes" del mismo día
- **Estimación:** M | **Prioridad:** P3

**ECO-80: Log de sincronizaciones** 🔵
- Como usuario quiero ver un log de todas las sincronizaciones: cuándo ocurrieron, qué datos entraron, si hubo errores
- Para diagnosticar problemas de integración y confiar en los datos
- **Estimación:** S | **Prioridad:** P3

---

## 👨‍⚕️ Épica 9: Médicos, Consultas y Compartición (10 historias)

> Salud compartida, pero controlada.

**ECO-81: Registro de médicos y especialistas** 🟡
- Como usuario quiero registrar mis médicos (nombre, especialidad, teléfono, dirección, obra social)
- Para tener mi agenda médica centralizada
- **Estimación:** M | **Prioridad:** P2

**ECO-82: Registro de consultas médicas** 🟡
- Como usuario quiero registrar cada consulta médica (fecha, médico, motivo, diagnóstico)
- Para tener un historial de visitas médicas organizado
- **Estimación:** M | **Prioridad:** P2

**ECO-83: Notas post-consulta** 🟡
- Como usuario quiero anotar lo que el médico me dijo después de la consulta
- Para no olvidar indicaciones ("bajar sal", "controlar presión 2 veces por semana", "repetir análisis en 3 meses")
- **Estimación:** S | **Prioridad:** P2

**ECO-84: Próxima consulta programada** 🟡
- Como usuario quiero registrar la fecha de mi próxima consulta con cada médico
- Para tener visibilidad de cuándo tengo que volver
- **Estimación:** S | **Prioridad:** P2

**ECO-85: Recordatorios de turnos** 🟡
- Como usuario quiero recibir recordatorio 3 días antes y 1 día antes del turno médico
- Para no olvidar consultas y poder preparar lo que necesite llevar
- **Estimación:** S | **Prioridad:** P2

**ECO-86: Compartir histórico con médico (link temporal)** 🟡
- Como usuario quiero generar un link de acceso temporal para que mi médico vea mi historial de salud
- Para que el profesional acceda a mis datos sin darle acceso permanente a mi cuenta
- **Estimación:** L | **Prioridad:** P3

**ECO-87: Acceso temporal con vencimiento** 🟡
- Como usuario quiero configurar cuánto dura el acceso del médico (24h, 7 días, hasta próxima consulta)
- Para controlar exactamente cuándo se revoca el acceso
- **Estimación:** M | **Prioridad:** P3

**ECO-88: Modo "consulta médica" (vista resumida)** 🔵
- Como usuario quiero activar un modo "consulta" que muestre solo los datos relevantes para el médico: últimos estudios, medicación actual, síntomas recientes, gráficos principales
- Para no perder tiempo en la consulta buscando datos mientras el médico espera
- **Estimación:** M | **Prioridad:** P3

**ECO-89: Exportar pack médico completo** 🟡
- Como usuario quiero exportar un "pack médico" con: resumen de salud, medicación actual, últimos estudios, síntomas y gráficos a PDF
- Para llevar todo listo al médico nuevo que no me conoce
- **Estimación:** L | **Prioridad:** P2

**ECO-90: Historial de accesos externos** 🔵
- Como usuario quiero ver un log de cuándo y quién accedió a mis datos compartidos
- Para tener control total sobre la privacidad de mi información de salud
- **Estimación:** M | **Prioridad:** P3

---

## 🤖 Épica 10: Inteligencia y Contexto Vital (10 historias)

> Largo plazo — ECO en su máxima expresión.

**ECO-91: Detección de correlaciones automáticas** 🔵
- Como usuario quiero que ECOSALUD detecte automáticamente correlaciones entre mis datos (ej: "cuando dormís menos de 6h, tu presión sube al día siguiente")
- Para descubrir relaciones que yo no veo a simple vista
- **Estimación:** XL | **Prioridad:** P3

**ECO-92: Resumen semanal automático** 🟡
- Como usuario quiero recibir un resumen cada domingo con: registros de la semana, tendencias, racha, alertas y estado de metas
- Para tener perspectiva sin abrir la app todos los días
- **Estimación:** M | **Prioridad:** P3

**ECO-93: Resumen mensual de salud** 🔵
- Como usuario quiero recibir un resumen mensual más profundo con gráficos, evolución de metas y comparación con mes anterior
- Para revisar mi salud con perspectiva temporal amplia
- **Estimación:** M | **Prioridad:** P3

**ECO-94: Insights accionables ("ojo con X")** 🔵
- Como usuario quiero recibir insights especificos y accionables (ej: "tu glucemia subió 3 registros seguidos — ¿querés consultar al médico?")
- Para que ECOSALUD no solo registre sino que me ayude a actuar
- **Estimación:** L | **Prioridad:** P3

**ECO-95: Relación salud ↔ clima** 🔵
- Como usuario quiero ver si hay relación entre el clima (presión atmosférica, humedad, temperatura) y mis síntomas
- Para entender si mis dolores de cabeza tienen que ver con cambios de clima
- **Estimación:** M | **Prioridad:** P3

**ECO-96: Relación salud ↔ actividad física** 🔵
- Como usuario quiero cruzar mis datos de salud con mis registros de ejercicio
- Para ver concretamente si hacer ejercicio mejora mi presión, peso y ánimo
- **Estimación:** M | **Prioridad:** P3

**ECO-97: Relación salud ↔ alimentación (ALACENA)** 🔵
- Como usuario quiero cruzar datos de salud con lo que como (desde ALACENA)
- Para detectar si ciertos alimentos afectan mis indicadores (ej: "comiste pizza 3 veces esta semana y tu peso subió")
- **Estimación:** L | **Prioridad:** P3

**ECO-98: Relación salud ↔ sueño** 🔵
- Como usuario quiero ver cómo impacta mi calidad de sueño en mis indicadores de salud y ánimo
- Para priorizar descanso cuando los datos muestran que dormir poco me afecta
- **Estimación:** M | **Prioridad:** P3

**ECO-99: Asistente de preguntas pre-consulta** 🔵
- Como usuario quiero que ECOSALUD me genere una lista de preguntas para hacerle al médico basada en mis datos recientes ("preguntale por tu presión que está subiendo", "mencioná que el Enalapril te da mareos")
- Para aprovechar al máximo la consulta y no olvidar nada importante
- **Estimación:** L | **Prioridad:** P3

**ECO-100: Predicción de riesgos básicos** 🔵
- Como usuario quiero que ECOSALUD me avise si mis datos sugieren un riesgo potencial (ej: "tu presión promedio de los últimos 3 meses está por encima del rango normal — considerá consultar")
- Para prevención temprana basada en datos, no diagnóstico, sino señal de alerta
- **Estimación:** XL | **Prioridad:** P3

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 7 | 🟢 Corto plazo (Sprint 1-2) |
| **P2** | 50 | 🟢🟡 Corto-mediano plazo |
| **P3** | 43 | 🟡🔵 Mediano-largo plazo |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 33 | ~99h |
| **M** | 47 | ~282h |
| **L** | 16 | ~160h |
| **XL** | 4 | ~80h |
| **TOTAL** | **100** | **~621h** |

---

## 🎯 Modelo de Datos Conceptual

```
EcosaludRegistro (registro base de salud)
├── id, user_id, household_id
├── tipo: "peso" | "presion_sistolica" | "presion_diastolica" | "glucemia" | "fc" | "temperatura" | "saturacion_o2" | "colesterol" | custom
├── valor (numeric)
├── unidad ("kg" | "mmHg" | "mg/dl" | "bpm" | "°C" | "%")
├── fecha_registro, hora_registro
├── ubicacion_opcional
├── notas
├── tags[] ("en_ayunas", "post_ejercicio", "con_medicacion")
└── created_at

EcosaludAnimo (registro emocional)
├── id, user_id
├── fecha
├── estado_animo (1-5 o custom)
├── nivel_estres: "bajo" | "medio" | "alto" | "extremo"
├── ansiedad_intensidad (nullable, 1-10)
├── ansiedad_duracion_min (nullable)
├── ansiedad_disparador (nullable)
├── calidad_sueno_horas (nullable)
├── sueno_despertares (nullable)
├── sueno_como_desperto: "bien" | "regular" | "mal"
├── notas_emocionales (texto libre)
└── created_at

EcosaludSintoma (registro de síntoma)
├── id, user_id
├── nombre ("dolor_cabeza" | "mareos" | "nauseas" | custom)
├── intensidad (1-10)
├── duracion_min
├── fecha_inicio, fecha_fin
├── es_recurrente (boolean, calculado)
├── disparador (texto)
├── medicamento_asociado_id (nullable)
├── evento_asociado (texto)
├── fotos[]
├── notas
└── created_at

EcosaludCrisis (evento de crisis)
├── id, user_id
├── tipo: "migraña" | "pánico" | "asma" | "hipoglucemia" | custom
├── intensidad (1-10)
├── duracion_min
├── disparador
├── que_hice (texto - cómo lo resolví)
├── medicacion_usada
└── fecha

EcosaludMedicamento (medicación registrada)
├── id, user_id
├── nombre, principio_activo
├── dosis ("10mg", "400mg")
├── frecuencia: "diario" | "cada_8h" | "semanal" | "puntual"
├── horarios[] ("08:00", "20:00")
├── tipo: "recurrente" | "puntual"
├── fecha_inicio, fecha_fin (nullable)
├── stock_actual (cantidad restante)
├── stock_alerta_minimo
├── efectos_secundarios[]
├── receta_foto
├── medico_id (nullable)
└── activo (boolean)

EcosaludTomaMedicamento (registro de toma)
├── id, medicamento_id, user_id
├── fecha, hora
├── tomado (boolean)
├── notas
└── efecto_secundario_reportado

EcosaludMeta (meta de salud)
├── id, user_id
├── tipo_dato ("peso" | "presion" | "pasos" | custom)
├── valor_objetivo
├── valor_inicial
├── fecha_inicio, fecha_objetivo
├── estado: "en_curso" | "cumplida" | "no_cumplida" | "abandonada"
├── progreso_actual (calculado)
└── proyeccion_fecha_llegada (calculado)

EcosaludEstudio (estudio médico)
├── id, user_id
├── tipo: "laboratorio" | "imagen" | "cardiologia" | "clinico" | custom
├── titulo ("Hemograma completo", "Eco abdominal")
├── fecha
├── medico_id (nullable)
├── archivos[] (fotos, PDFs)
├── valores_extraidos[] (JSON: [{nombre, valor, unidad, rango_normal, estado}])
├── orden_medica_foto
├── notas
└── tags[]

EcosaludMedico (médico/especialista)
├── id, user_id
├── nombre, especialidad
├── telefono, email, direccion
├── obra_social, plan
├── notas
└── proxima_consulta

EcosaludConsulta (consulta médica)
├── id, user_id, medico_id
├── fecha
├── motivo
├── diagnostico
├── notas_post_consulta (indicaciones del médico)
├── proxima_consulta_fecha
├── estudios_solicitados[] (texto)
└── recetas_emitidas[]

EcosaludAccesoExterno (compartición con médicos)
├── id, user_id
├── medico_id (nullable)
├── token_acceso
├── url_compartida
├── vigencia_hasta
├── datos_incluidos[] ("registros", "medicacion", "estudios", "sintomas")
├── accesos_log[] ({fecha, ip})
└── activo (boolean)

EcosaludLogro (badge/achievement)
├── id, user_id
├── tipo ("racha_7", "racha_30", "primera_meta", "100_registros")
├── fecha_obtenido
└── descripcion
```

---

## 🔗 Integraciones Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **Google Fit** | Google Fitness REST API | ECO-71 |
| **Apple Health** | Apple HealthKit | ECO-72 |
| **Báscula inteligente** | Bluetooth / APIs fabricante | ECO-73 |
| **Smartwatch** | Wear OS / watchOS APIs | ECO-74 |
| **Apps de sueño** | APIs respectivas | ECO-75 |
| **Strava / Nike Run** | OAuth + REST API | ECO-76 |
| **Apps meditación** | APIs respectivas | ECO-77 |
| **OCR estudios** | Google Vision / Tesseract | ECO-62 |
| **Clima** | OpenWeatherMap | ECO-95 |
| **ALACENA** | API interna ECO | ECO-97 |
| **HUESHA** | API interna ECO | vía ánimo/eventos |

---

## 🎯 Roadmap ECOSALUD

**🟢 MVP (v0.1 — Sprint 1-3):** ECO-01→07 (core registro), ECO-04/05 (quick add, fecha pasada), ECO-11 (gráficos), ECO-15 (alertas)
**🟢 v0.2 — Metas + Medicación:** ECO-21→26 (metas, recordatorios), ECO-31→35 (medicación básica), ECO-19 (export PDF)
**🟡 v0.3 — Salud mental + Síntomas:** ECO-41→46 (ánimo, estrés, ansiedad, sueño), ECO-51→54 (síntomas), ECO-57 (crisis)
**🟡 v0.4 — Estudios + Médicos:** ECO-61→65 (estudios, fotos), ECO-81→85 (médicos, consultas, turnos)
**🟡 v0.5 — Análisis avanzado:** ECO-47→50 (patrones emocionales), ECO-58 (timeline síntomas), ECO-66 (comparar estudios)
**🔵 v1.0 — Inteligencia + Integraciones:** ECO-71→80 (integraciones), ECO-91→100 (IA, correlaciones, predicción)

---

## 🧭 Observaciones Clave

- **Clínico pero humano:** No es una app fitness genérica — es registro real de salud, pensado para personas reales con médicos reales
- **Corto plazo (P1-P2):** Hasta Épica 6 — todo lo que un usuario puede usar sin integraciones externas
- **Mediano plazo (P3):** Épicas 7-8 — estudios médicos, integraciones con dispositivos
- **Largo plazo (P3 avanzado):** Épicas 9-10 — compartición controlada, IA y contexto vital
- **Alineado con ECO:** ECOSALUD se cruza con ALACENA (alimentación), HUESHA (ánimo como entrada vital), MANTIA (turnos médicos como tareas) y FINANCIA (gastos de salud)
- **Escala a futuro:** Familia, adulto mayor, cuidadores, médico de cabecera con acceso controlado

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
