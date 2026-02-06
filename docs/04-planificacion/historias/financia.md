# 💰 FINANCIA — Gestión Financiera Personal (100 historias)

**Fecha:** 6 de febrero de 2026  
**Módulo:** FINANCIA  
**Propósito:** La columna vertebral económica de ECO. Gestión → Conciencia → Optimización → Proyección → Memoria. No es contabilidad: es entender tu vida económica real, en Argentina, con multi-moneda, deudas sociales, promociones, automatización de imports y conexión con cada módulo de ECO.

> *"Registrar para mejorar. Entender a dónde va mi plata para tomar mejores decisiones."*

**Arquitectura en 5 capas:**
- **Capa 1 — Fundaciones (1-35):** FINANCIA usable, confiable, diaria
- **Capa 2 — Importación y Automatización (36-55):** FINANCIA deja de ser manual
- **Capa 3 — Moneda, Patrimonio y Realidad Argentina (56-70):** FINANCIA localmente inteligente
- **Capa 4 — Vida Compartida, Deudas y Decisiones (71-85):** FINANCIA como sistema social
- **Capa 5 — Conciencia, Análisis y Memoria (86-100):** FINANCIA como memoria económica de tu vida

---

## 🧱 CAPA 1 — FUNDACIONES (historias 1-35)

> FINANCIA usable, confiable, diaria. Lo mínimo para registrar tu vida financiera.

---

### 🏦 Cuentas & Configuración (FIN-01 → FIN-10)

**FIN-01: CRUD de cuentas/billeteras**
- Como usuario quiero crear y gestionar mis cuentas financieras
- Para tener organizadas todas las fuentes de dinero y ver saldo por cuenta
- **Estimación:** M | **Prioridad:** P1

**FIN-02: Tipos de cuenta (banco, crédito, efectivo, virtual)**
- Como usuario quiero clasificar cada cuenta por tipo: banco, tarjeta de crédito, efectivo, billetera virtual (Mercado Pago, Ualá, etc.)
- Para que FINANCIA entienda las reglas de cada tipo (ej: tarjeta tiene cierre, efectivo no tiene extracto)
- **Estimación:** S | **Prioridad:** P1

**FIN-03: Moneda por cuenta**
- Como usuario quiero asignar moneda a cada cuenta (ARS o USD) y ver saldos en su moneda nativa
- Para manejar cuentas en pesos y dólares claramente separadas
- **Estimación:** S | **Prioridad:** P1

**FIN-04: Configurar fechas de cierre/vencimiento tarjeta**
- Como usuario quiero definir la fecha de cierre y vencimiento de cada tarjeta de crédito
- Para ver gastos agrupados por periodo de cierre y saber cuánto me viene
- **Estimación:** S | **Prioridad:** P1

**FIN-05: Cuenta activa/inactiva (archivar sin borrar)**
- Como usuario quiero archivar una cuenta que ya no uso sin perder los datos históricos
- Para mantener limpio el dashboard sin destruir información valiosa
- **Estimación:** S | **Prioridad:** P2

**FIN-06: Cuenta compartida (hogar)**
- Como usuario quiero marcar una cuenta como compartida con otros usuarios del hogar
- Para que ambos registren gastos en la misma cuenta y veamos quién pagó qué
- **Estimación:** L | **Prioridad:** P1

**FIN-07: Colores, íconos y orden visual**
- Como usuario quiero asignar color e ícono a cada cuenta y ordenarlas como prefiera en el dashboard
- Para reconocer visualmente cada cuenta de un vistazo (azul=Galicia, verde=efectivo, violeta=MP)
- **Estimación:** S | **Prioridad:** P2

**FIN-08: Saldo inicial editable (con auditoría)**
- Como usuario quiero poder editar el saldo inicial de una cuenta en cualquier momento, con registro de quién lo cambió y cuándo
- Para corregir errores sin perder trazabilidad de por qué el saldo cambió
- **Estimación:** S | **Prioridad:** P2

**FIN-09: Vista histórica de saldo por cuenta**
- Como usuario quiero ver cómo evolucionó el saldo de cada cuenta a lo largo del tiempo (gráfico de línea)
- Para detectar tendencias: "esta cuenta baja todos los meses" o "acá se acumula plata que no uso"
- **Estimación:** M | **Prioridad:** P2

**FIN-10: Permisos por usuario en cuentas compartidas**
- Como usuario quiero definir quién puede ver, editar o solo consultar una cuenta compartida
- Para que mi pareja vea los gastos comunes pero no edite mi cuenta personal
- **Estimación:** M | **Prioridad:** P3

---

### 💸 Transacciones Básicas (FIN-11 → FIN-22)

**FIN-11: Registrar gasto manual**
- Como usuario quiero registrar un gasto con monto, fecha, cuenta, categoría, descripción y medio de pago
- Para llevar un registro detallado de en qué gasto mi plata
- **Estimación:** M | **Prioridad:** P1

**FIN-12: Registrar ingreso manual**
- Como usuario quiero registrar un ingreso con monto, fecha, cuenta, categoría y descripción
- Para trackear de dónde viene mi dinero
- **Estimación:** S | **Prioridad:** P1

**FIN-13: Transferencia entre cuentas**
- Como usuario quiero registrar una transferencia de una cuenta a otra (ej: banco → Mercado Pago) indicando cuenta origen y destino
- Para que los saldos se actualicen sin que cuente como gasto ni ingreso
- **Reglas:** Misma moneda → directo. Distinta moneda → requiere tipo de cambio explícito (conversión). Se registran `account_origen_id` y `account_destino_id` por separado
- **Estimación:** M | **Prioridad:** P1

**FIN-14: Edición / eliminación con log**
- Como usuario quiero editar o eliminar cualquier transacción, con registro de quién cambió qué y cuándo
- Para corregir errores sin perder trazabilidad — nunca borrado físico
- **Estimación:** M | **Prioridad:** P1

**FIN-15: Adjuntar comprobante**
- Como usuario quiero adjuntar foto de ticket, factura o comprobante a un gasto
- Para tener respaldo visual y poder reclamar si hace falta
- **Estimación:** M | **Prioridad:** P2

**FIN-16: Duplicar transacción**
- Como usuario quiero duplicar una transacción existente (copiando monto, categoría, cuenta) y solo cambiar la fecha
- Para registrar gastos repetitivos rápidamente (ej: mismo almuerzo todos los días)
- **Estimación:** S | **Prioridad:** P2

**FIN-17: Marcar transacción como "pendiente"**
- Como usuario quiero marcar un gasto como pendiente de confirmación (ej: "pagué pero no sé si se debitó")
- Para diferenciar gastos confirmados de tentativos y no ensuciar el balance
- **Estimación:** S | **Prioridad:** P2

**FIN-18: Marcar transacción como "revisada"**
- Como usuario quiero marcar transacciones como ya revisadas/conciliadas
- Para distinguir lo que ya chequeé contra el extracto bancario de lo que todavía no
- **Estimación:** S | **Prioridad:** P3

**FIN-19: Búsqueda avanzada**
- Como usuario quiero buscar transacciones por texto, fecha, rango de monto, categoría, cuenta, tags — combinables
- Para encontrar rápidamente movimientos específicos sin scrollear
- **Estimación:** M | **Prioridad:** P1

**FIN-20: Filtros guardados**
- Como usuario quiero guardar combinaciones de filtros frecuentes (ej: "Gastos de supermercado últimos 3 meses")
- Para acceder a mis consultas habituales con un toque
- **Estimación:** S | **Prioridad:** P3

**FIN-21: Etiquetas libres (tags)**
- Como usuario quiero agregar tags libres a cualquier transacción (ej: "vacaciones", "impulsivo", "necesario", "regalo", "estrés")
- Para categorización emocional/contextual más allá de la categoría contable
- **Estimación:** S | **Prioridad:** P2

**FIN-22: Notas privadas por transacción**
- Como usuario quiero agregar notas libres a una transacción que solo yo veo (incluso en cuentas compartidas)
- Para registrar contexto personal ("me arrepentí", "fue por el cumple de X", "último mes que lo pago")
- **Estimación:** S | **Prioridad:** P3

---

### 🗂️ Categorías (FIN-23 → FIN-28)

**FIN-23: CRUD de categorías**
- Como usuario quiero crear, editar y eliminar mis categorías de gastos e ingresos
- Para clasificar mis movimientos según MI forma de organizar la plata
- **Estimación:** M | **Prioridad:** P1

**FIN-24: Subcategorías**
- Como usuario quiero que las categorías tengan un nivel de subcategoría (ej: Transporte → Uber / Nafta / SUBE)
- Para detalle donde lo necesito sin perder la vista macro
- **Estimación:** M | **Prioridad:** P2

**FIN-25: Categorías sugeridas iniciales**
- Como usuario quiero que al crear FINANCIA me sugiera categorías comunes argentinas (Supermercado, Transporte, Servicios, Ocio, Salud, Educación, Alquiler, etc.)
- Para no arrancar de cero y tener una base útil desde el día 1
- **Estimación:** S | **Prioridad:** P2

**FIN-26: Categorías ocultables**
- Como usuario quiero ocultar categorías que no uso sin eliminarlas (ej: "Mascotas" si no tengo)
- Para mantener limpia la UI sin perder la opción de reactivarlas
- **Estimación:** S | **Prioridad:** P3

**FIN-27: Reglas simples de auto-categorización**
- Como usuario quiero definir reglas tipo "si la descripción contiene 'UBER' → categoría Transporte"
- Para que transacciones futuras (manuales o importadas) se categoricen solas
- **Estimación:** M | **Prioridad:** P2

**FIN-28: Estadísticas por categoría**
- Como usuario quiero ver gasto promedio mensual, tendencia y % del total por cada categoría
- Para entender el peso relativo de cada categoría en mi vida financiera
- **Estimación:** M | **Prioridad:** P2

---

### 🔁 Recurrentes y Cuotas (FIN-29 → FIN-35)

**FIN-29: Gastos recurrentes**
- Como usuario quiero definir gastos que se repiten (Netflix, alquiler, luz, gas, internet, gimnasio) con periodicidad configurable
- Para que se carguen automáticamente cada periodo sin ingresarlos a mano
- **Estimación:** M | **Prioridad:** P1

**FIN-30: Ingresos recurrentes**
- Como usuario quiero definir ingresos recurrentes (sueldo, cobros fijos, alquiler cobrado)
- Para que se registren automáticamente y pueda proyectar mi flujo de caja
- **Estimación:** S | **Prioridad:** P2

**FIN-31: Pausar recurrente**
- Como usuario quiero pausar temporalmente un gasto/ingreso recurrente sin eliminarlo (ej: "pausé el gym por vacaciones")
- Para reflejar la realidad sin perder la configuración para reactivar después
- **Estimación:** S | **Prioridad:** P2

**FIN-32: Gastos en cuotas**
- Como usuario quiero registrar un gasto en cuotas indicando cantidad total y monto por cuota
- Para ver cuánto me queda por pagar, en qué cuota voy, y cuánto impacta cada mes
- **Estimación:** M | **Prioridad:** P1

**FIN-33: Estado de cuota (pendiente/pagada)**
- Como usuario quiero que cada cuota tenga estado: pendiente | pagada | cancelada
- Para trackear exactamente cuáles ya se debitaron y cuáles faltan
- **Estimación:** S | **Prioridad:** P1

**FIN-34: Adelantar cuotas**
- Como usuario quiero registrar el adelanto de cuotas (pagar antes de tiempo, cancelar saldo)
- Para reflejar decisiones de optimización financiera como cancelar cuotas para ahorrar intereses
- **Estimación:** S | **Prioridad:** P2

**FIN-35: Vista de compromisos futuros**
- Como usuario quiero ver un calendario/lista de todos mis compromisos futuros: cuotas pendientes + recurrentes + deudas
- Para saber exactamente cuánto dinero ya está comprometido en los próximos meses
- **Estimación:** M | **Prioridad:** P1

---

## 📥 CAPA 2 — IMPORTACIÓN, AUTOMATIZACIÓN Y LIMPIEZA (historias 36-55)

> FINANCIA deja de ser manual. Importá, automatizá, limpiá.

---

### 📄 Importaciones (FIN-36 → FIN-45)

**FIN-36: Importar CSV bancario**
- Como usuario quiero subir un CSV/Excel del extracto bancario y que FINANCIA parse las transacciones
- Para no cargar a mano los movimientos del banco
- **Estimación:** L | **Prioridad:** P1

**FIN-37: Templates por banco**
- Como usuario quiero que FINANCIA tenga templates predefinidos para bancos argentinos comunes (Galicia, Santander, BBVA, Macro, HSBC, Brubank, etc.)
- Para que el import entienda automáticamente las columnas del CSV de mi banco
- **Estimación:** L | **Prioridad:** P2

**FIN-38: Importar resumen tarjeta CSV**
- Como usuario quiero importar el resumen de mi tarjeta de crédito en formato CSV
- Para tener todos los gastos del periodo sin carga manual
- **Estimación:** L | **Prioridad:** P2

**FIN-39: Importar resumen tarjeta PDF**
- Como usuario quiero subir un PDF de resumen de tarjeta y que FINANCIA lo parsee (vía OCR o parsing de texto)
- Para importar incluso cuando el banco solo da PDF y no CSV
- **Estimación:** XL | **Prioridad:** P3

**FIN-40: Detección de duplicados**
- Como usuario quiero que al importar, FINANCIA detecte transacciones que ya existen y me pregunte antes de duplicar
- Para no tener movimientos repetidos que ensucien el balance
- **Estimación:** M | **Prioridad:** P2

**FIN-41: Vista previa antes de importar**
- Como usuario quiero ver una preview de lo que se va a importar (con categorías sugeridas, posibles duplicados marcados) antes de confirmar
- Para revisar y corregir antes de que entre a mi contabilidad
- **Estimación:** M | **Prioridad:** P2

**FIN-42: Reglas por banco/tarjeta**
- Como usuario quiero definir reglas específicas por banco (ej: "ignorar líneas de impuestos de Galicia", "mapear columna 3 como monto")
- Para ajustar el parseo a las particularidades de cada extracto
- **Estimación:** M | **Prioridad:** P3

**FIN-43: Importación incremental**
- Como usuario quiero que al importar un CSV nuevo, FINANCIA solo agregue las transacciones nuevas (comparando con lo ya importado)
- Para importar regularmente sin miedo a duplicados masivos
- **Estimación:** M | **Prioridad:** P2

**FIN-44: Historial de imports**
- Como usuario quiero ver un log de todas las importaciones realizadas: fecha, archivo, cantidad de transacciones, estado
- Para saber qué ya importé, cuándo y desde dónde
- **Estimación:** S | **Prioridad:** P3

**FIN-45: Rollback de import**
- Como usuario quiero poder deshacer una importación completa (borrar todas las transacciones de ese batch)
- Para corregir si importé un archivo incorrecto sin buscar transacción por transacción
- **Estimación:** M | **Prioridad:** P2

---

### 🤖 Automatización (FIN-46 → FIN-55)

**FIN-46: Auto-categorización avanzada**
- Como usuario quiero que FINANCIA aplique automáticamente categorías basándose en la descripción importada, aprendiendo de mis correcciones anteriores
- Para que cada vez categorice mejor sin reglas manuales
- **Estimación:** M | **Prioridad:** P2

**FIN-47: Reglas condicionales (monto + texto)**
- Como usuario quiero crear reglas compuestas: "si contiene 'COTO' Y monto > $50.000 → categoría: Supermercado / Compra grande"
- Para auto-categorización precisa que distingue entre una compra chica y una grande en el mismo lugar
- **Estimación:** M | **Prioridad:** P3

**FIN-48: Normalización de descripciones**
- Como usuario quiero que FINANCIA limpie las descripciones bancarias ilegibles ("VD 230115 CTO SA BUE" → "Coto - Compra con débito")
- Para que mis transacciones sean legibles sin esfuerzo manual
- **Estimación:** M | **Prioridad:** P2

**FIN-49: Unificación de comercios ("COTO SA", "COTO")**
- Como usuario quiero que FINANCIA unifique variaciones del mismo comercio bajo un solo nombre normalizado
- Para que los reportes muestren "Coto" en vez de 5 variantes distintas del mismo supermercado
- **Estimación:** M | **Prioridad:** P2

**FIN-50: Lectura de emails bancarios**
- Como usuario quiero que FINANCIA lea emails de notificación de compra/débito de mis bancos y cree transacciones automáticamente
- Para registrar gastos al instante sin intervención manual — el nivel máximo de automatización
- **Estimación:** XL | **Prioridad:** P3

**FIN-51: Confirmación automática de gastos chicos**
- Como usuario quiero que transacciones por debajo de un monto configurable (ej: $5.000) se confirmen automáticamente sin pedir revisión
- Para no tener que aprobar cada café uno por uno
- **Estimación:** S | **Prioridad:** P3

**FIN-52: Alertas por gasto inusual**
- Como usuario quiero recibir notificación si un gasto es mucho mayor al promedio de esa categoría (ej: "Gastaste $80.000 en Transporte — tu promedio es $25.000")
- Para detectar errores, gastos impulsivos o cobros incorrectos
- **Estimación:** M | **Prioridad:** P2

**FIN-53: Alertas por duplicado sospechoso**
- Como usuario quiero que FINANCIA me alerte si detecta dos transacciones muy similares en fecha y monto cercanos
- Para evitar cobros dobles o registros accidentales
- **Estimación:** S | **Prioridad:** P2

**FIN-54: Alertas por falta de datos**
- Como usuario quiero que FINANCIA me avise si tengo transacciones sin categoría, sin cuenta asignada, o con datos incompletos
- Para mantener la calidad de mis datos financieros y no acumular basura
- **Estimación:** S | **Prioridad:** P3

**FIN-55: Modo "revisión semanal"**
- Como usuario quiero un flujo guiado semanal que me muestre transacciones no revisadas, categorías pendientes, y un mini-resumen
- Para mantener FINANCIA limpio dedicando 10 minutos por semana en vez de 1 hora mensual
- **Estimación:** M | **Prioridad:** P2

---

## 💱 CAPA 3 — MONEDA, PATRIMONIO Y REALIDAD ARGENTINA (historias 56-70)

> FINANCIA se vuelve localmente inteligente. Multi-moneda real, patrimonio consolidado, contexto argentino.

---

### 💵 Multi-moneda (FIN-56 → FIN-63)

**FIN-56: Tipo de cambio oficial automático**
- Como usuario quiero que FINANCIA obtenga automáticamente el tipo de cambio oficial del día (BCRA)
- Para ver mis saldos en USD equivalentes o viceversa sin buscar cotizaciones
- **Estimación:** M | **Prioridad:** P1

**FIN-57: Tipo de cambio MEP**
- Como usuario quiero ver y usar el tipo de cambio MEP (dólar bolsa) para convertir entre ARS y USD
- Para reflejar el valor real de mis dólares según el mercado financiero
- **Estimación:** M | **Prioridad:** P1

**FIN-58: Tipo de cambio CCL**
- Como usuario quiero ver y usar el tipo de cambio contado con liquidación (CCL) para mis conversiones
- Para tener referencia del dólar "cable" cuando aplique
- **Estimación:** S | **Prioridad:** P2

**FIN-59: Tipo de cambio Blue**
- Como usuario quiero ver y usar el tipo de cambio blue (informal) para mis conversiones
- Para reflejar la realidad de compras en dólares fuera del sistema bancario
- **Estimación:** S | **Prioridad:** P2

**FIN-60: Fuente configurable**
- Como usuario quiero elegir qué fuente de datos usar para cada tipo de cambio y cuál es mi TC por defecto para conversiones
- Para personalizar según mis fuentes de confianza (DolarAPI, Ámbito, BCRA, etc.)
- **Estimación:** S | **Prioridad:** P3

**FIN-61: Historial de tipo de cambio**
- Como usuario quiero ver cómo evolucionó cada tipo de cambio mes a mes, con gráfico temporal
- Para correlacionar con mis compras/ventas de dólares y evaluar timing
- **Estimación:** M | **Prioridad:** P3

**FIN-62: Conversión manual histórica**
- Como usuario quiero registrar una conversión con un tipo de cambio que yo ingrese (distinto al del día)
- Para reflejar operaciones pasadas o del mercado informal donde el TC no coincide con el publicado
- **Estimación:** S | **Prioridad:** P2

**FIN-63: Alerta de variación brusca**
- Como usuario quiero que FINANCIA me avise si algún tipo de cambio tuvo una variación inusual (ej: "el blue subió 10% en un día")
- Para tomar decisiones rápidas de compra/venta o proteger mis ahorros
- **Estimación:** M | **Prioridad:** P3

---

### 🧮 Patrimonio (FIN-64 → FIN-70)

**FIN-64: Patrimonio consolidado**
- Como usuario quiero ver mi patrimonio total: suma de todas las cuentas, incluyendo efectivo, bancos, billeteras virtuales, inversiones y deudas
- Para tener una cifra única de "cuánto tengo" (activos - pasivos)
- **Estimación:** M | **Prioridad:** P1

**FIN-65: Vista en ARS o USD**
- Como usuario quiero alternar la vista de patrimonio entre ARS y USD, usando el tipo de cambio que yo elija
- Para ver "cuánto tengo en dólares" o "cuánto tengo en pesos" con un toggle
- **Estimación:** S | **Prioridad:** P1

**FIN-66: Compra de dólares**
- Como usuario quiero registrar una operación de compra de dólares con monto en pesos, cantidad de dólares recibidos y tipo de cambio usado
- Para trackear a cuánto compré y actualizar saldos de ambas cuentas
- **Estimación:** M | **Prioridad:** P2

**FIN-67: Venta de dólares**
- Como usuario quiero registrar una operación de venta de dólares con cantidad vendida, pesos recibidos y tipo de cambio
- Para trackear a cuánto vendí y ver si gané o perdí respecto a la compra
- **Estimación:** M | **Prioridad:** P2

**FIN-68: Ganancia/pérdida por tipo de cambio**
- Como usuario quiero ver cuánto gané o perdí por diferencia de cambio (compraste a $800, hoy está a $1.100 → ganaste X%)
- Para evaluar mis decisiones cambiarias con datos, no sensaciones
- **Estimación:** M | **Prioridad:** P3

**FIN-69: Línea temporal de patrimonio**
- Como usuario quiero ver cómo evolucionó mi patrimonio total a lo largo de los meses/años (gráfico de línea)
- Para responder "¿estoy ahorrando o me estoy comiendo los ahorros?" con una imagen clara
- **Estimación:** L | **Prioridad:** P2

**FIN-70: Foto patrimonial mensual**
- Como usuario quiero que FINANCIA tome una "foto" automática de mi patrimonio el último día de cada mes
- Para tener un registro histórico confiable de mi evolución patrimonial, inmune a ajustes retroactivos
- **Estimación:** M | **Prioridad:** P2

---

## 🤝 CAPA 4 — VIDA COMPARTIDA, DEUDAS Y DECISIONES REALES (historias 71-85)

> FINANCIA como sistema social. La plata no es solo tuya — es del hogar, de tus amigos, de tus decisiones de consumo.

---

### 🤝 Compartido / Deudas (FIN-71 → FIN-78)

**FIN-71: Registrar deuda (debo)**
- Como usuario quiero registrar que le debo $X a alguien, con motivo, fecha y plazo estimado
- Para tener claro cuánto debo y a quién sin depender de la memoria
- **Estimación:** M | **Prioridad:** P1

**FIN-72: Registrar préstamo (me deben)**
- Como usuario quiero registrar que alguien me debe $X, con motivo, fecha y quién es
- Para no perder de vista lo que me deben sin incomodidad
- **Estimación:** S | **Prioridad:** P1

**FIN-73: Pagos parciales**
- Como usuario quiero registrar pagos parciales de una deuda o préstamo (ej: "pagué $5.000 de los $20.000 que debo")
- Para ir viendo cómo se reduce el saldo pendiente progresivamente
- **Estimación:** S | **Prioridad:** P2

**FIN-74: Split de gasto**
- Como usuario quiero dividir un gasto entre varias personas (ej: cena $30.000 entre 3 → cada uno $10.000)
- Para registrar automáticamente quién me debe qué sin hacer cuentas mentales
- **Estimación:** M | **Prioridad:** P2

**FIN-75: Balance entre personas**
- Como usuario quiero ver el saldo neto entre yo y cada persona ("María me debe $5.000", "le debo $2.000 a Juan")
- Para saldar cuentas fácilmente y saber quién le debe a quién de un vistazo
- **Estimación:** M | **Prioridad:** P2

**FIN-76: Liquidación automática**
- Como usuario quiero marcar "saldamos" y que todas las deudas cruzadas se cancelen con un solo movimiento optimizado
- Para simplificar la rendición de cuentas del hogar sin hacer transferencias innecesarias
- **Estimación:** M | **Prioridad:** P2

**FIN-77: Historial de rendiciones**
- Como usuario quiero ver el historial de todas las liquidaciones/rendiciones pasadas: cuándo, cuánto, con quién
- Para tener trazabilidad de las cuentas entre personas a lo largo del tiempo
- **Estimación:** S | **Prioridad:** P3

**FIN-78: Deudas recurrentes**
- Como usuario quiero registrar deudas recurrentes (ej: "mi roommate me paga $50.000 por mes por la mitad del alquiler")
- Para automatizar la creación mensual de la deuda sin cargarla cada vez
- **Estimación:** M | **Prioridad:** P3

---

### 🏷️ Promos y Optimización (FIN-79 → FIN-85)

**FIN-79: CRUD de promociones**
- Como usuario quiero registrar promociones vigentes (ej: "Galicia 3x2 en Coto los martes", "Mercado Pago 30% off en farmacia")
- Para tener un directorio de beneficios disponibles y no perder descuentos por olvido
- **Estimación:** M | **Prioridad:** P2

**FIN-80: Campos completos de promo**
- Como usuario quiero especificar en cada promoción: banco, tarjeta, app, comercio, días vigentes, tope de reintegro, % descuento, fecha inicio/fin
- Para tener toda la letra chica en un solo lugar y saber exactamente cuándo aplica
- **Estimación:** M | **Prioridad:** P2

**FIN-81: Calendario de promos**
- Como usuario quiero ver un calendario mensual que muestre qué promos hay cada día de la semana
- Para planificar mis compras según los días de descuento ("martes Coto, jueves farmacia")
- **Estimación:** M | **Prioridad:** P2

**FIN-82: Notificación por día de promo**
- Como usuario quiero recibir notificación cuando sea un día con promoción activa (ej: "Hoy es martes → 3x2 en Coto con Galicia")
- Para nunca perder un descuento por olvido
- **Estimación:** S | **Prioridad:** P2

**FIN-83: Sugerir mejor medio de pago**
- Como usuario quiero que al registrar un gasto, FINANCIA me sugiera con qué tarjeta/app pagar según promociones activas para ese comercio/día
- Para maximizar mis descuentos sin pensar — FINANCIA piensa por mí
- **Estimación:** M | **Prioridad:** P3

**FIN-84: Registrar promo aplicada**
- Como usuario quiero vincular una transacción con una promoción usada y registrar el ahorro real obtenido
- Para trackear cuánto me ahorré realmente gracias a cada promo
- **Estimación:** S | **Prioridad:** P2

**FIN-85: Ahorro real vs potencial**
- Como usuario quiero ver un reporte de "cuánto ahorré este mes con promos" vs "cuánto podría haber ahorrado si hubiera usado todas las promos disponibles"
- Para valorar el esfuerzo de trackear promos y motivarme a usar las que no aprovecho
- **Estimación:** M | **Prioridad:** P3

---

## 📊 CAPA 5 — CONCIENCIA, ANÁLISIS Y MEMORIA (historias 86-100)

> FINANCIA como memoria económica de tu vida. No solo números — sentido.

---

### 📈 Reportes & Análisis (FIN-86 → FIN-93)

**FIN-86: Gastos por categoría (torta/barras)**
- Como usuario quiero ver un gráfico de torta o barras con mis gastos del mes desglosados por categoría
- Para entender de un vistazo en qué gasto más
- **Estimación:** M | **Prioridad:** P1

**FIN-87: Balance mensual (ingresos - gastos = ahorro)**
- Como usuario quiero ver un resumen mensual con total ingresos, total gastos y ahorro/déficit resultante
- Para saber si estoy ahorrando o gastando de más — el número más importante del mes
- **Estimación:** M | **Prioridad:** P1

**FIN-88: Tendencias mensuales**
- Como usuario quiero ver cómo evolucionan mis gastos totales y por categoría a lo largo de los meses (gráfico de línea)
- Para detectar si estoy gastando cada vez más en algo o si logré reducir un gasto
- **Estimación:** M | **Prioridad:** P2

**FIN-89: Presupuesto vs real**
- Como usuario quiero comparar gráficamente lo presupuestado vs lo gastado por categoría, con barras de progreso
- Para ver dónde me paso y dónde me sobra — y ajustar el mes siguiente
- **Estimación:** M | **Prioridad:** P2

**FIN-90: Estado de deudas**
- Como usuario quiero ver un resumen consolidado de todas mis deudas activas: a quién, cuánto, cuándo vence, progreso de pago
- Para tener claridad total de mis compromisos financieros en una pantalla
- **Estimación:** M | **Prioridad:** P2

**FIN-91: Proyección 3/6/12 meses**
- Como usuario quiero ver una proyección de los próximos 3, 6 y 12 meses basada en ingresos/gastos recurrentes + cuotas pendientes + tendencias
- Para anticipar déficits, planificar compras grandes y tomar decisiones a futuro
- **Estimación:** L | **Prioridad:** P2

**FIN-92: Comparación interanual**
- Como usuario quiero comparar mis gastos del mes actual con el mismo mes del año anterior, por categoría
- Para ver si estoy gastando más o menos (y entender si es inflación o cambio de hábitos)
- **Estimación:** M | **Prioridad:** P3

**FIN-93: Score financiero mensual**
- Como usuario quiero que FINANCIA evalúe mi mes con un score/semáforo (🟢🟡🔴) basado en: ahorro, cumplimiento de presupuesto, deudas, tendencia
- Para conciencia rápida de mi situación sin leer números — un semáforo financiero personal
- **Estimación:** M | **Prioridad:** P2

---

### 🧠 Integración ECO & Sentido (FIN-94 → FIN-100)

**FIN-94: Link con Lista de Compras**
- Como usuario quiero que al marcar un ítem como comprado en Lista, se pueda registrar el gasto en FINANCIA automáticamente (con precio, categoría, cuenta)
- Para que la compra del supermercado se refleje en mis finanzas sin doble carga
- **Estimación:** M | **Prioridad:** P2

**FIN-95: Link con ALACENA (costo unitario histórico)**
- Como usuario quiero asociar un gasto de supermercado con los items que compré en ALACENA
- Para saber cuánto me cuesta cada producto a lo largo del tiempo (ej: "¿cuánto gasto en leche por mes?" / "¿subió o bajó?")
- **Estimación:** L | **Prioridad:** P2

**FIN-96: Link con MANTIA**
- Como usuario quiero asociar un gasto a una tarea de mantenimiento del hogar (ej: "comprar pintura" → tarea "Pintar pared")
- Para saber cuánto me cuestan las tareas del hogar y presupuestar las que vienen
- **Estimación:** S | **Prioridad:** P3

**FIN-97: Link con ECOSALUD**
- Como usuario quiero vincular gastos médicos (consulta, farmacia, estudios, medicamentos) con registros de ECOSALUD
- Para cruzar "cuánto gasto en salud" con "mi historial de salud" y ver correlaciones
- **Estimación:** S | **Prioridad:** P3

**FIN-98: Link con HUESHA (etapas de vida)**
- Como usuario quiero ver mis gastos asociados a periodos de vida de HUESHA (ej: "¿cuánto me costaba vivir cuando alquilaba en Palermo?" vs "ahora que tengo casa propia")
- Para comparar mi costo de vida entre diferentes etapas y entender cómo evolucionó mi economía
- **Estimación:** M | **Prioridad:** P3

**FIN-99: Etiqueta emocional del gasto**
- Como usuario quiero que FINANCIA muestre reportes cruzados de tags emocionales: "gasté $150.000 en compras etiquetadas como 'impulsivo' este mes"
- Para conciencia financiera emocional — entender que mis finanzas tienen un componente psicológico, no solo racional
- **Estimación:** M | **Prioridad:** P3

**FIN-100: Simulación financiera ("¿qué pasa si…?")**
- Como usuario quiero simular escenarios sin registrar nada: ¿qué pasa si compro X en cuotas?, ¿si sube el alquiler 20%?, ¿si cancelo Netflix y gym?, ¿si cambio de trabajo?
- Para tomar decisiones informadas antes de comprometer plata — FINANCIA como laboratorio de decisiones
- **Estimación:** L | **Prioridad:** P3

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 19 | 🟢 Fundacional — Sprint 1-3 |
| **P2** | 49 | 🟡 Corto/mediano plazo |
| **P3** | 32 | 🔵 Mediano/largo plazo |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 27 | ~81h |
| **M** | 52 | ~312h |
| **L** | 7 | ~70h |
| **XL** | 2 | ~40h |
| **TOTAL** | **100** | **~503h** |

## 📊 Distribución por Capa

| Capa | Épica | Historias | Horas est. |
|------|-------|-----------|------------|
| **1 — Fundaciones** | Cuentas & Config | 10 | ~46h |
| | Transacciones | 12 | ~58h |
| | Categorías | 6 | ~34h |
| | Recurrentes & Cuotas | 7 | ~34h |
| **2 — Automatización** | Importaciones | 10 | ~61h |
| | Automatización | 10 | ~48h |
| **3 — Multi-moneda** | Multi-moneda | 8 | ~40h |
| | Patrimonio | 7 | ~46h |
| **4 — Social** | Deudas & Compartido | 8 | ~40h |
| | Promos & Optimización | 7 | ~40h |
| **5 — Conciencia** | Reportes & Análisis | 8 | ~52h |
| | Integración ECO | 7 | ~40h |

---

## 🎯 Modelo de Datos Conceptual

```
FinanciaAccount (cuenta/billetera)
├── id, user_id, household_id
├── nombre ("Banco Galicia", "Efectivo", "Mercado Pago")
├── tipo: "banco" | "tarjeta_credito" | "efectivo" | "billetera_virtual"
├── moneda: "ARS" | "USD"
├── saldo_inicial, saldo_actual (calculado)
├── saldo_inicial_audit_log[] (quién cambió, cuándo, por qué)
├── fecha_cierre_tarjeta, fecha_vencimiento_tarjeta
├── is_shared (boolean — cuenta compartida)
├── is_active (boolean — archivar sin borrar)
├── shared_permissions: { user_id: "editor" | "viewer" }
├── color, icono, orden_visual
└── created_at

FinanciaTransaction (transacción)
├── id, user_id, account_id
├── tipo: "gasto" | "ingreso" | "transferencia"
├── monto, moneda
├── fecha, descripcion, descripcion_normalizada
├── category_id (→ FinanciaCategory)
├── subcategory_id (nullable)
├── is_recurring, recurring_id (→ FinanciaRecurring)
├── cuotas_total, cuota_actual
├── cuota_estado: "pendiente" | "pagada" | "cancelada"
├── estado: "confirmada" | "pendiente" | "revisada"
├── comprobante_url
├── tags[] (etiquetas libres/emocionales)
├── notas_privadas
├── promotion_id (→ FinanciaPromotion)
├── ahorro_promo (monto ahorrado)
├── account_origen_id, account_destino_id (transferencias)
├── tipo_cambio_usado (multi-moneda)
├── eco_link_type: "lista" | "alacena" | "mantia" | "ecosalud" | "huesha" | null
├── eco_link_id
├── split_group_id (gastos divididos)
├── import_batch_id (si fue importada)
├── comercio_normalizado (nombre unificado)
├── edit_log[] (historial de ediciones)
└── created_at, updated_at

FinanciaCategory (categoría)
├── id, user_id
├── nombre, tipo: "gasto" | "ingreso"
├── icono, color
├── parent_id (subcategorías)
├── is_hidden (ocultar sin eliminar)
├── is_suggested (categoría sugerida inicial)
└── auto_rules[] (→ FinanciaAutoRule)

FinanciaAutoRule (regla de auto-categorización)
├── id, user_id
├── condicion_texto (ej: "contiene 'UBER'")
├── condicion_monto_min, condicion_monto_max
├── category_id_resultado
├── subcategory_id_resultado
├── comercio_normalizado_resultado
├── prioridad (para resolver conflictos)
└── is_active

FinanciaRecurring (gastos/ingresos recurrentes)
├── id, user_id, account_id
├── tipo: "gasto" | "ingreso"
├── monto, moneda, category_id
├── descripcion
├── periodicidad: "mensual" | "quincenal" | "semanal" | "anual"
├── dia_del_mes
├── is_active, is_paused
├── paused_until (fecha para reactivar)
├── last_generated, next_due
└── created_at

FinanciaDebt (deuda/préstamo)
├── id, user_id
├── tipo: "debo" | "me_deben"
├── person_name (o user_id si es del hogar)
├── monto_original, monto_pendiente, moneda
├── motivo, fecha_creacion, fecha_limite
├── is_recurring, recurring_pattern
└── pagos[] (→ FinanciaDebtPayment)

FinanciaDebtPayment (pago parcial)
├── id, debt_id
├── monto, fecha
├── notas
└── transaction_id (vinculado a transacción)

FinanciaBudget (presupuesto)
├── id, user_id
├── mes, año
├── category_id
├── monto_presupuestado (null = sin límite, solo tracking)
├── tipo_limite: "hard" | "soft" | "tracking"
├── monto_gastado (calculado)
└── alerta_80_pct_enviada (boolean)

FinanciaPromotion (promoción/descuento)
├── id, user_id
├── titulo, descripcion
├── banco, tarjeta, app, comercio
├── dias_vigentes[] ("lunes", "martes", etc.)
├── porcentaje_descuento, tope_reintegro
├── fecha_inicio, fecha_fin
├── is_active
└── ahorro_acumulado (calculado)

FinanciaPromoUsage (uso real de promoción)
├── id, promotion_id, transaction_id
├── fecha_uso
├── ahorro_real
└── notas

FinanciaSplitGroup (gasto dividido)
├── id, created_by_user_id
├── transaction_id
├── total_amount
└── splits[] (→ {user_id/person_name, amount, is_paid})

FinanciaSettlement (liquidación/rendición)
├── id, user_ids[]
├── fecha
├── deudas_canceladas[] (debt_ids)
├── monto_neto, pagador, receptor
└── notas

FinanciaExchangeRate (tipo de cambio)
├── id
├── fecha
├── tipo: "oficial" | "mep" | "ccl" | "blue"
├── compra, venta
└── source

FinanciaCurrencyOperation (compra/venta de dólares)
├── id, user_id
├── tipo: "compra" | "venta"
├── monto_ars, monto_usd
├── tipo_cambio_usado, tipo_tc: "oficial" | "mep" | "ccl" | "blue" | "manual"
├── account_ars_id, account_usd_id
├── ganancia_perdida (calculado vs TC actual)
└── fecha

FinanciaImportBatch (lote de importación)
├── id, user_id
├── archivo_nombre, archivo_tipo: "csv" | "pdf"
├── banco_template
├── cantidad_transacciones
├── cantidad_duplicados_detectados
├── estado: "completado" | "parcial" | "rollback"
├── fecha_import
└── notas

FinanciaPatrimonialSnapshot (foto patrimonial mensual)
├── id, user_id
├── mes, año
├── patrimonio_total_ars, patrimonio_total_usd
├── cuentas_snapshot (JSON: {account_id, saldo, moneda})
├── tc_usado (tipo de cambio del día)
└── fecha_snapshot

FinanciaSavedFilter (filtro guardado)
├── id, user_id
├── nombre ("Gastos super últimos 3 meses")
├── filtros (JSON: {categorias, fechas, montos, tags, cuentas})
└── created_at
```

---

## 🔗 Integraciones Externas Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **Bancos AR (CSV)** | Parseo CSV por banco | FIN-36, FIN-37 |
| **Tarjetas (CSV/PDF)** | Parseo resumen | FIN-38, FIN-39 |
| **Email notificaciones** | Gmail API + parsing | FIN-50 |
| **Tipo de cambio** | DolarAPI / Ámbito / BCRA | FIN-56→FIN-63 |
| **ALACENA** | API interna ECO | FIN-95 |
| **Lista de Compras** | API interna ECO | FIN-94 |
| **MANTIA** | API interna ECO | FIN-96 |
| **ECOSALUD** | API interna ECO | FIN-97 |
| **HUESHA** | API interna ECO | FIN-98 |

---

## 🎯 Roadmap FINANCIA

**🟢 MVP (v0.1 — Capa 1):** Cuentas + Transacciones + Categorías + Recurrentes + Presupuesto básico
→ FIN-01→04, FIN-06, FIN-11→14, FIN-19, FIN-23, FIN-27, FIN-29, FIN-32→33, FIN-35, FIN-36, FIN-56→57, FIN-64→65, FIN-71→72, FIN-86→87

**🟡 v0.2 — Importación:** CSV bancario + auto-categorización + duplicados + revisión
→ FIN-36→41, FIN-43, FIN-45→46, FIN-48→49, FIN-52→53, FIN-55

**🟡 v0.3 — Multi-moneda & Patrimonio:** TC completo + patrimonio + compra/venta USD
→ FIN-58→63, FIN-66→70

**🟡 v0.4 — Social:** Deudas + Split + Liquidación + Promos
→ FIN-73→78, FIN-79→84

**🔵 v0.5 — Conciencia:** Reportes avanzados + Proyección + Score + Integración ECO
→ FIN-88→93, FIN-94→100

---

## 🧭 Observaciones

- **5 capas, no 11 épicas** — la organización por capas permite recortar por releases sin perder visión
- **Capa 1 es autocompleta** — con solo eso FINANCIA es usable para registrar vida financiera real
- **Capa 2 es la que cambia todo** — pasar de "cargo a mano" a "importo y reviso" es el salto de adopción
- **Capa 3 es uniquely argentina** — multi-TC (oficial/MEP/CCL/blue) es algo que ninguna app genérica resuelve bien
- **Capa 4 es social** — la plata no es solo tuya, es del hogar, de tus amigos, de tus decisiones compartidas
- **Capa 5 es memoria** — FINANCIA como espejo económico de tu vida, no como planilla contable
- **Esto ya no es solo FINANCIA: es la columna vertebral económica de ECO**

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
