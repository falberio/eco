# 🏺 ALACENA - Inventario Inteligente del Hogar (100 historias)

**Fecha:** 5 de febrero de 2026  
**Módulo:** ALACENA  
**Propósito:** Gestión completa del inventario doméstico: alimentos, productos, ubicaciones, lotes, recetas, conservación — con trazabilidad, inteligencia de consumo e integración con el resto de ECO.

> *"Sabé qué tenés, dónde está, cuánto te queda y qué podés cocinar con eso."*

**Características clave:**
- 📦 Inventario con stock, vencimientos, lotes y ubicaciones físicas
- 📸 Visual: fotos, QR, mapa de freezer, colores por estado
- 🍳 Recetas inteligentes: ingredientes, porciones, sustituciones, cálculo automático
- 🧪 Lotes y FIFO: trazabilidad profesional para freezer, vacío y viandas
- 🧠 Inteligencia de consumo: predicción, sobrestock, quiebre de stock
- ❄️ Conservación pro: vacío, congelado, regeneración, alertas de uso incorrecto
- 🛒 Integración con Lista de Compras y FINANCIA

**Distribución por Épica:**
- Épica 1: CRUD y operaciones básicas (Core) → 12 historias
- Épica 2: Ubicaciones físicas → 4 historias
- Épica 3: Recetas y planificación → 4 historias
- Épica 4: Compartir y uso del hogar → 2 historias
- Épica 5: Alertas inteligentes → 4 historias
- Épica 6: Stock avanzado y trazabilidad → 6 historias
- Épica 7: Identidad del producto → 8 historias
- Épica 8: Visual, fotos y OCR → 7 historias
- Épica 9: Lotes, vencimientos y FIFO → 8 historias
- Épica 10: Mapa físico avanzado → 7 historias
- Épica 11: Recetas pro → 8 historias
- Épica 12: Inteligencia de consumo → 7 historias
- Épica 13: Compras e integraciones → 7 historias
- Épica 14: Personas y preferencias → 6 historias
- Épica 15: Conservación, vacío y freezer pro → 5 historias
- Épica 16: Futuro e infraestructura → 5 historias

**TOTAL:** 100 historias

---

## 🧱 Épica 1: CRUD y Operaciones Básicas — Core (12 historias)

> Fundacional. Sin esto no hay ALACENA.

**ALA-01: Crear item de inventario** 🟢
- Como usuario quiero agregar un nuevo item al inventario (nombre, cantidad, categoría, vencimiento)
- Para tener registro de lo que hay en mi casa
- **Estimación:** M | **Prioridad:** P1

**ALA-02: Editar item** 🟢
- Como usuario quiero modificar los datos de un item existente (cantidad, nombre, categoría, etc.)
- Para corregir errores o actualizar información
- **Estimación:** S | **Prioridad:** P1

**ALA-03: Eliminar item** 🟢
- Como usuario quiero eliminar un item del inventario
- Para quitar productos que ya no existen o fueron descartados
- **Estimación:** S | **Prioridad:** P1

**ALA-04: Ver detalle de item** 🟢
- Como usuario quiero ver toda la información de un item en una vista de detalle
- Para consultar rápidamente stock, vencimiento, ubicación y datos completos
- **Estimación:** S | **Prioridad:** P1

**ALA-05: Categorización y filtros** ✅
- Como usuario quiero categorizar items (lácteos, carnes, limpieza, etc.) y filtrar por categoría
- Para organizar mi inventario y encontrar rápido lo que busco
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**ALA-06: Estados de stock (ok / bajo / agotado)** ✅
- Como usuario quiero que cada item muestre su estado de stock con indicador visual
- Para saber de un vistazo qué me está faltando
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**ALA-07: Búsqueda de items** ✅
- Como usuario quiero buscar items por nombre, categoría o ubicación
- Para encontrar cualquier producto en segundos
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**ALA-08: Escaneo de código de barras** 🟢
- Como usuario quiero escanear el código de barras de un producto con la cámara del celular
- Para agregar items sin escribir manualmente (autocompletar nombre, marca, etc.)
- **Estimación:** L | **Prioridad:** P2

**ALA-09: Sugerencias de items frecuentes** 🟢
- Como usuario quiero que al crear un item me sugiera productos que suelo comprar
- Para agregar más rápido sin tipear todo cada vez
- **Estimación:** M | **Prioridad:** P3

**ALA-10: Vista grid con fotos** 🟢
- Como usuario quiero ver mis items en grilla con fotos tipo "estante visual"
- Para identificar visualmente qué tengo sin leer nombres
- **Estimación:** M | **Prioridad:** P2

**ALA-11: Ordenar por fecha de vencimiento** 🟢
- Como usuario quiero ordenar items por fecha de vencimiento (más próximo primero)
- Para consumir primero lo que vence antes y evitar desperdicios
- **Estimación:** S | **Prioridad:** P1

**ALA-12: Subir foto del item** 🟢
- Como usuario quiero tomar o subir foto del producto
- Para recordar visualmente cuál es (especialmente productos nuevos o similares)
- **Estimación:** M | **Prioridad:** P2

---

## 🗺️ Épica 2: Ubicaciones Físicas (4 historias)

> Donde empieza a volverse "hogar real".

**ALA-13: CRUD de ubicaciones (estantes, cajones)** 🟢
- Como usuario quiero definir ubicaciones físicas en mi casa (heladera, freezer, alacena cocina, bajo mesada, despensa)
- Para saber exactamente dónde está cada cosa
- **Estimación:** M | **Prioridad:** P2

**ALA-14: Asignar ubicación a items** 🟢
- Como usuario quiero asignar una ubicación a cada item del inventario
- Para encontrar físicamente el producto sin buscarlo por toda la casa
- **Estimación:** S | **Prioridad:** P2

**ALA-15: Buscar por ubicación** 🟢
- Como usuario quiero ver todos los items de una ubicación específica
- Para revisar qué hay en el freezer o en un estante particular
- **Estimación:** S | **Prioridad:** P2

**ALA-16: Generar QR por ubicación** 🟡
- Como usuario quiero generar e imprimir un QR para pegar en cada estante/cajón
- Para escanear el QR y ver al instante el inventario de ese lugar
- **Estimación:** M | **Prioridad:** P3

---

## 🍳 Épica 3: Recetas y Planificación (4 historias)

> El puente entre inventario y cocina.

**ALA-17: CRUD de recetas** 🟡
- Como usuario quiero crear recetas con nombre, ingredientes, pasos y tiempo de preparación
- Para tener mi recetario digital vinculado al inventario
- **Estimación:** L | **Prioridad:** P2

**ALA-18: Ver si tengo ingredientes para receta** 🟡
- Como usuario quiero que al ver una receta me diga qué ingredientes tengo y cuáles me faltan
- Para decidir qué cocinar hoy sin ir al super
- **Estimación:** M | **Prioridad:** P2

**ALA-19: Descontar ingredientes al cocinar** 🟡
- Como usuario quiero que al marcar "cociné esta receta" se descuenten automáticamente los ingredientes del stock
- Para mantener el inventario actualizado sin ajustar uno por uno
- **Estimación:** M | **Prioridad:** P3

**ALA-20: Sugerencias de recetas según stock** 🟡
- Como usuario quiero ver qué recetas puedo hacer con lo que tengo en inventario
- Para aprovechar ingredientes antes de que venzan y no desperdiciar
- **Estimación:** L | **Prioridad:** P3

---

## 🤝 Épica 4: Compartir y Uso del Hogar (2 historias)

> Multi-persona, pero doméstico.

**ALA-21: Compartir item con otro usuario del hogar** 🟡
- Como usuario quiero notificar a otro miembro que agregué un item o que algo se está acabando
- Para coordinar compras y consumo familiar
- **Estimación:** M | **Prioridad:** P3

**ALA-22: Historial de consumo por persona** 🟡
- Como usuario quiero ver quién consumió qué y cuándo
- Para entender patrones de uso y distribuir mejor las compras
- **Estimación:** M | **Prioridad:** P3

---

## 🚨 Épica 5: Alertas Inteligentes (4 historias)

> Anticiparse > reaccionar.

**ALA-23: Alerta de vencimiento próximo** 🟢
- Como usuario quiero recibir notificación 3 días antes de que un producto venza
- Para consumirlo a tiempo y no desperdiciar comida
- **Estimación:** M | **Prioridad:** P2

**ALA-24: Alerta automática de stock bajo** 🟢
- Como usuario quiero que el sistema me notifique cuando un item baja de su umbral mínimo (ej: leche < 1L)
- Para no quedarme sin productos esenciales
- **Estimación:** M | **Prioridad:** P2

**ALA-25: Predicción de cuándo se acabará un item** 🟡
- Como usuario quiero ver una estimación de cuándo se me va a acabar el café según mi ritmo de consumo
- Para planificar compras con anticipación y no comprar de emergencia
- **Estimación:** L | **Prioridad:** P3

**ALA-26: Generar lista de compras automática desde stock bajo** 🟢
- Como usuario quiero que los items con stock bajo se agreguen automáticamente a mi Lista de Compras
- Para no tener que cruzar mentalmente inventario con lista
- **Estimación:** M | **Prioridad:** P2

---

## 📦 Épica 6: Stock Avanzado y Trazabilidad (6 historias)

> Clave para freezer, vacío, viandas.

**ALA-27: Manejo de unidades (g, kg, ml, L, unidades)** 🟢
- Como usuario quiero definir la unidad de medida de cada item (gramos, kilogramos, mililitros, litros, unidades)
- Para llevar stock preciso ("tengo 500g de queso" en vez de "tengo queso")
- **Estimación:** M | **Prioridad:** P1

**ALA-28: Conversión automática de unidades** 🟡
- Como usuario quiero que el sistema convierta automáticamente entre unidades compatibles (ej: 1.5kg = 1500g)
- Para no hacer cálculos mentales al agregar o descontar stock
- **Estimación:** M | **Prioridad:** P2

**ALA-29: Ajuste manual de stock** 🟢
- Como usuario quiero ajustar manualmente la cantidad de un item (sumar o restar) con motivo
- Para corregir diferencias entre lo registrado y lo que realmente hay ("consumí un poco", "tiré porque estaba feo")
- **Estimación:** S | **Prioridad:** P1

**ALA-30: Historial de cambios de stock** 🟡
- Como usuario quiero ver el historial completo de movimientos de un item (ingresó, consumió, ajustó, descontó por receta)
- Para tener trazabilidad total de cada producto
- **Estimación:** M | **Prioridad:** P2

**ALA-31: Stock abierto vs cerrado** 🟡
- Como usuario quiero diferenciar entre un item cerrado (sin abrir) y uno abierto (en uso)
- Para saber que tengo "2 leches cerradas + 1 abierta" y priorizar la abierta
- **Estimación:** S | **Prioridad:** P2

**ALA-32: Marcar item como consumido** 🟢
- Como usuario quiero marcar un item como totalmente consumido con un toque
- Para sacarlo del inventario activo rápidamente (y que quede en historial)
- **Estimación:** S | **Prioridad:** P1

---

## 🏷️ Épica 7: Identidad del Producto (8 historias)

> El item como entidad rica.

**ALA-33: Marca / fabricante** 🟢
- Como usuario quiero registrar la marca del producto (ej: La Serenísima, Arcor)
- Para diferenciar entre productos similares y recordar cuál prefiero
- **Estimación:** S | **Prioridad:** P2

**ALA-34: SKU o código interno** 🟡
- Como usuario quiero asignar un código interno a items sin código de barras (ej: viandas caseras)
- Para identificar items propios como preparaciones, conservas o producciones caseras
- **Estimación:** S | **Prioridad:** P3

**ALA-35: País de origen** 🟡
- Como usuario quiero registrar el país de origen del producto
- Para preferencias de consumo o trazabilidad (ej: "aceite de oliva español")
- **Estimación:** S | **Prioridad:** P3

**ALA-36: Fecha de compra** 🟢
- Como usuario quiero registrar cuándo compré el producto
- Para saber hace cuánto lo tengo y cruzar con vida útil
- **Estimación:** S | **Prioridad:** P2

**ALA-37: Precio de compra** 🟢
- Como usuario quiero registrar cuánto pagué por el producto
- Para llevar registro de costos y cruzar con FINANCIA
- **Estimación:** S | **Prioridad:** P2

**ALA-38: Precio por unidad / kg / litro** 🟡
- Como usuario quiero ver el precio unitario calculado automáticamente (ej: $1500/kg)
- Para comparar precios entre marcas, tamaños y supermercados
- **Estimación:** S | **Prioridad:** P2

**ALA-39: Lugar de compra** 🟡
- Como usuario quiero registrar dónde compré el producto (supermercado, dietética, online)
- Para saber dónde volver a comprarlo o comparar precios por local
- **Estimación:** S | **Prioridad:** P2

**ALA-40: Notas libres por item** 🟢
- Como usuario quiero agregar notas de texto libre a cualquier item ("este queso es para la raclette del sábado", "no comprar más de esta marca")
- Para registrar contexto personal que no entra en ningún campo estructurado
- **Estimación:** S | **Prioridad:** P2

---

## 📸 Épica 8: Visual, Fotos y OCR (7 historias)

> Memoria visual del alimento.

**ALA-41: Galería de fotos por item** 🟡
- Como usuario quiero subir múltiples fotos por item (producto cerrado, abierto, etiqueta nutricional)
- Para tener referencia visual completa del producto
- **Estimación:** M | **Prioridad:** P2

**ALA-42: Zoom / vista detallada de foto** 🟡
- Como usuario quiero ampliar las fotos de un item para ver detalles (info nutricional, ingredientes en letra chica)
- Para consultar información del envase sin tenerlo en la mano
- **Estimación:** S | **Prioridad:** P3

**ALA-43: Foto por lote** 🟡
- Como usuario quiero asociar una foto a un lote específico del mismo item
- Para diferenciar visualmente entre lotes (ej: fecha de envasado, color del producto)
- **Estimación:** S | **Prioridad:** P3

**ALA-44: Foto del ticket de compra** 🟡
- Como usuario quiero sacar foto del ticket de compra y vincularla a los items comprados
- Para tener comprobante visual de la compra asociado al inventario
- **Estimación:** M | **Prioridad:** P2

**ALA-45: OCR de tickets para precarga** 🟡
- Como usuario quiero que la app lea el ticket de compra con OCR y precargue items, cantidades y precios
- Para acelerar el ingreso masivo de items después de ir al supermercado
- **Estimación:** L | **Prioridad:** P3

**ALA-46: Vista "heladera / freezer" visual** 🟡
- Como usuario quiero una representación visual tipo "mapa" de mi heladera/freezer mostrando qué hay en cada sector
- Para tener una vista intuitiva de lo que tengo como si estuviera mirando adentro
- **Estimación:** L | **Prioridad:** P3

**ALA-47: Colores por estado de vencimiento** 🟢
- Como usuario quiero que los items tengan colores según su estado de vencimiento (verde = ok, amarillo = pronto, rojo = vencido)
- Para identificar de un vistazo qué consumir primero
- **Estimación:** S | **Prioridad:** P2

---

## 🧪 Épica 9: Lotes, Vencimientos y FIFO (8 historias)

> Nivel profesional.

**ALA-48: Múltiples lotes por item** 🟡
- Como usuario quiero registrar varios lotes del mismo item (ej: 3 paquetes de arroz comprados en distintas fechas)
- Para trackear cada unidad individualmente con su propio vencimiento
- **Estimación:** M | **Prioridad:** P2

**ALA-49: Vencimiento por lote** 🟡
- Como usuario quiero asignar fecha de vencimiento diferente a cada lote del mismo producto
- Para consumir siempre el que vence primero
- **Estimación:** S | **Prioridad:** P2

**ALA-50: FIFO automático sugerido** 🟡
- Como usuario quiero que ALACENA me sugiera consumir el lote más viejo primero (First In, First Out)
- Para minimizar desperdicios siguiendo la lógica profesional de rotación de stock
- **Estimación:** M | **Prioridad:** P2

**ALA-51: Diferenciar congelado / heladera / ambiente** 🟡
- Como usuario quiero marcar si un item está congelado, refrigerado o a temperatura ambiente
- Para ajustar vida útil estimada según método de conservación
- **Estimación:** S | **Prioridad:** P2

**ALA-52: Fecha de elaboración** 🟡
- Como usuario quiero registrar la fecha de elaboración de un producto (especialmente viandas y preparaciones caseras)
- Para calcular vida útil desde la fecha correcta, no desde la compra
- **Estimación:** S | **Prioridad:** P2

**ALA-53: Vida útil estimada por categoría** 🟡
- Como usuario quiero que ALACENA sugiera vida útil según la categoría del producto (ej: carne congelada = 3 meses, pan en heladera = 5 días)
- Para no tener que googlear cuánto dura cada cosa
- **Estimación:** M | **Prioridad:** P3

**ALA-54: Estado sanitario del lote** 🟡
- Como usuario quiero marcar el estado sanitario de un lote (bueno, dudoso, descartado)
- Para documentar si algo me pareció raro y decidir si consumirlo o tirarlo
- **Estimación:** S | **Prioridad:** P3

**ALA-55: Lote asociado a receta** 🟡
- Como usuario quiero vincular un lote a la receta en la que lo usé
- Para trazabilidad completa: "este lote de harina lo usé en el pan del domingo"
- **Estimación:** S | **Prioridad:** P3

---

## 🧭 Épica 10: Mapa Físico Avanzado (7 historias)

> Glaciar-ready. 🏔️

**ALA-56: Jerarquía de ubicaciones** 🟡
- Como usuario quiero crear ubicaciones con niveles jerárquicos (ej: Cocina → Heladera → Cajón de verduras)
- Para modelar exactamente la estructura física de mi hogar
- **Estimación:** M | **Prioridad:** P2

**ALA-57: Posición física exacta (A1, B3, etc.)** 🟡
- Como usuario quiero asignar coordenada de posición dentro de una ubicación (ej: estante A, posición 3)
- Para encontrar items rápido en espacios con muchos productos (freezer, despensa grande)
- **Estimación:** S | **Prioridad:** P3

**ALA-58: Mapa visual del freezer** 🔵
- Como usuario quiero un mapa visual interactivo de mi freezer mostrando qué hay en cada posición
- Para planificar qué entra y encontrar cosas sin abrir y buscar
- **Estimación:** L | **Prioridad:** P3

**ALA-59: Mover items entre ubicaciones** 🟡
- Como usuario quiero mover un item de una ubicación a otra (ej: del freezer a la heladera para descongelar)
- Para mantener actualizado dónde está cada cosa
- **Estimación:** S | **Prioridad:** P2

**ALA-60: Historial de ubicaciones** 🟡
- Como usuario quiero ver dónde estuvo un item a lo largo del tiempo
- Para trazabilidad ("entró al freezer el 1/2, pasó a heladera el 5/2, se consumió el 6/2")
- **Estimación:** M | **Prioridad:** P3

**ALA-61: QR por item** 🟡
- Como usuario quiero generar un QR individual para un item específico (ej: bolsa de vacío)
- Para escanear y ver al instante qué es, cuándo se preparó y cuándo vence
- **Estimación:** M | **Prioridad:** P2

**ALA-62: QR por lote** 🟡
- Como usuario quiero generar un QR para un lote completo
- Para identificar un grupo de items relacionados (ej: "tandada de milanesas del 3/2")
- **Estimación:** M | **Prioridad:** P3

---

## 🍽️ Épica 11: Recetas Pro (8 historias)

> Cocina con cabeza de sistema.

**ALA-63: Cantidades exactas por ingrediente** 🟡
- Como usuario quiero definir cantidad exacta de cada ingrediente en una receta (ej: 500g harina, 3 huevos, 200ml leche)
- Para que el descuento automático de stock sea preciso
- **Estimación:** S | **Prioridad:** P2

**ALA-64: Ingredientes opcionales** 🟡
- Como usuario quiero marcar ingredientes como opcionales en una receta
- Para saber que puedo cocinar la receta aunque me falte el "toque de nuez moscada"
- **Estimación:** S | **Prioridad:** P3

**ALA-65: Sustituciones posibles** 🟡
- Como usuario quiero definir sustitutos para cada ingrediente (ej: crema → yogur griego, manteca → aceite)
- Para que ALACENA me diga "no tenés crema pero podés usar yogur"
- **Estimación:** M | **Prioridad:** P3

**ALA-66: Recetas base y variantes** 🟡
- Como usuario quiero crear variantes de una receta base (ej: "Pizza base" → "Pizza fugazzeta", "Pizza napolitana")
- Para no duplicar recetas que comparten la misma preparación
- **Estimación:** M | **Prioridad:** P3

**ALA-67: Cálculo automático de porciones** 🟡
- Como usuario quiero que la receta me diga cuántas porciones rinde según los ingredientes
- Para planificar comidas familiares ("¿alcanza para 6?")
- **Estimación:** M | **Prioridad:** P2

**ALA-68: Escalar receta** 🟡
- Como usuario quiero ajustar la receta a X porciones y que recalcule todas las cantidades
- Para cocinar para más o menos personas sin hacer regla de tres mental
- **Estimación:** M | **Prioridad:** P2

**ALA-69: Recetas favoritas** 🟡
- Como usuario quiero marcar recetas como favoritas
- Para acceder rápido a las que más uso
- **Estimación:** S | **Prioridad:** P2

**ALA-70: Tiempo estimado de preparación** 🟡
- Como usuario quiero registrar tiempo estimado de preparación y cocción de cada receta
- Para planificar mi tiempo: "¿tengo 30 minutos? → estas recetas van"
- **Estimación:** S | **Prioridad:** P2

---

## 🧠 Épica 12: Inteligencia de Consumo (7 historias)

> Datos → decisiones.

**ALA-71: Consumo promedio por item** 🟡
- Como usuario quiero ver cuánto consumo de cada producto por semana/mes en promedio
- Para entender mis patrones reales de uso ("gasto 3L de leche por semana")
- **Estimación:** M | **Prioridad:** P2

**ALA-72: Historial temporal de consumo** 🟡
- Como usuario quiero ver gráfico de consumo de un item a lo largo del tiempo
- Para detectar cambios estacionales o de hábitos
- **Estimación:** M | **Prioridad:** P3

**ALA-73: Predicción de quiebre de stock** 🟡
- Como usuario quiero que ALACENA prediga cuándo se me va a acabar un item crítico según mi consumo
- Para comprar antes de quedarme sin (ej: "la leche se acaba en 4 días")
- **Estimación:** M | **Prioridad:** P2

**ALA-74: Detección de sobrestock** 🟡
- Como usuario quiero que me avise si tengo demasiado de algo (ej: 8 latas de tomate)
- Para no seguir comprando lo que me sobra y liberar espacio/plata
- **Estimación:** M | **Prioridad:** P3

**ALA-75: Sugerencia de no recompra** 🟡
- Como usuario quiero que ALACENA me diga "no compres X, todavía tenés bastante"
- Para evitar acumulación innecesaria y optimizar gasto
- **Estimación:** S | **Prioridad:** P3

**ALA-76: Consumo real vs estimado** 🟡
- Como usuario quiero comparar cuánto pensaba que iba a durar un item vs cuánto duró realmente
- Para ajustar mis patrones de compra y no sub/sobre estimar
- **Estimación:** M | **Prioridad:** P3

**ALA-77: Items críticos recurrentes** 🟡
- Como usuario quiero definir items como "críticos" (nunca pueden faltar: leche, pan, café)
- Para recibir alertas especiales y que se agreguen automáticamente a la lista de compras cuando bajan
- **Estimación:** S | **Prioridad:** P2

---

## 🛒 Épica 13: Compras e Integraciones (7 historias)

> ALACENA sale al mundo.

**ALA-78: Lista de compras inteligente (desde ALACENA)** 🟡
- Como usuario quiero generar lista de compras automática basada en stock bajo, items críticos y recetas planificadas
- Para que la lista se arme sola con lo que realmente necesito
- **Estimación:** M | **Prioridad:** P2

**ALA-79: Lista de compras por local** 🟡
- Como usuario quiero que la lista se agrupe por local (ej: items de dietética, items de supermercado, items de verdulería)
- Para hacer recorrido eficiente de compras
- **Estimación:** M | **Prioridad:** P3

**ALA-80: Lista por urgencia** 🟡
- Como usuario quiero que los items de la lista se ordenen por urgencia (vence pronto > stock agotado > stock bajo > nice-to-have)
- Para priorizar qué comprar si no puedo comprar todo
- **Estimación:** S | **Prioridad:** P2

**ALA-81: Integración con supermercados online** 🔵
- Como usuario quiero conectar ALACENA con supermercados online (Coto Digital, Disco, etc.)
- Para comprar directo desde la app sin copiar la lista manualmente
- **Estimación:** XL | **Prioridad:** P3

**ALA-82: Historial de precios por producto** 🟡
- Como usuario quiero ver cómo evolucionó el precio de un producto a lo largo del tiempo
- Para detectar inflación real y decidir cuándo conviene stockear
- **Estimación:** M | **Prioridad:** P2

**ALA-83: Alertas de ofertas** 🔵
- Como usuario quiero recibir notificación cuando un producto que compro habitualmente está en oferta
- Para aprovechar descuentos en items de consumo frecuente
- **Estimación:** L | **Prioridad:** P3

**ALA-84: Recomendación de cantidad a comprar** 🟡
- Como usuario quiero que ALACENA me sugiera cuánto comprar de cada item basado en mi consumo y espacio disponible
- Para no comprar de más ni de menos
- **Estimación:** M | **Prioridad:** P3

---

## 🏠 Épica 14: Personas y Preferencias (6 historias)

> Hogar vivo.

**ALA-85: Perfiles del hogar (personas que viven en casa)** 🟡
- Como usuario quiero definir quiénes viven en el hogar (nombre, edad, relación)
- Para que ALACENA entienda para cuántos cocino y quién consume qué
- **Estimación:** M | **Prioridad:** P2

**ALA-86: Consumo por persona** 🟡
- Como usuario quiero asignar consumo de un item a una persona específica ("Juan tomó la última leche")
- Para entender patrones individuales y distribuir compras
- **Estimación:** M | **Prioridad:** P3

**ALA-87: Preferencias alimentarias por persona** 🟡
- Como usuario quiero registrar preferencias (ej: "María no come cerdo", "Tomás prefiere leche descremada")
- Para que las sugerencias de recetas y compras respeten gustos individuales
- **Estimación:** M | **Prioridad:** P2

**ALA-88: Restricciones alimentarias (sin TACC, vegano, alérgicos)** 🟡
- Como usuario quiero registrar restricciones alimentarias (celiaquía, alergia al maní, lactosa, etc.)
- Para que ALACENA alerte si un item o receta contiene algo prohibido
- **Estimación:** M | **Prioridad:** P2

**ALA-89: Notas compartidas del hogar** 🟡
- Como usuario quiero dejar notas visibles para todos sobre el inventario ("no usar el arroz del estante de arriba, es para el sushi del sábado")
- Para coordinar sin tener que hablar todo en persona
- **Estimación:** S | **Prioridad:** P3

**ALA-90: Modo invitado** 🟡
- Como usuario quiero un modo invitado que permita ver el inventario pero no modificarlo
- Para que alguien de visita pueda consultar qué hay sin romper nada
- **Estimación:** S | **Prioridad:** P3

---

## ❄️ Épica 15: Conservación, Vacío y Freezer Pro (5 historias)

> Tu ADN. 🫙

**ALA-91: Tipo de conservación por item** 🟡
- Como usuario quiero registrar el método de conservación de cada item (vacío, freezer, heladera, ambiente, conserva, salmuera)
- Para saber exactamente cómo está guardado cada producto
- **Estimación:** S | **Prioridad:** P2

**ALA-92: Equipamiento requerido** 🟡
- Como usuario quiero indicar qué equipamiento se usó (máquina de vacío X, bolsas marca Y, frasco tipo Z)
- Para reproducir el proceso y saber qué insumos necesito reabastecer
- **Estimación:** S | **Prioridad:** P3

**ALA-93: Regeneración sugerida** 🟡
- Como usuario quiero que ALACENA me sugiera cómo regenerar un producto congelado/vaciado (ej: "descongelar 24h en heladera", "calentar sin abrir bolsa a baño maría")
- Para no arruinar un producto bien conservado por mala regeneración
- **Estimación:** M | **Prioridad:** P3

**ALA-94: Registro de recongelado** 🟡
- Como usuario quiero registrar si un item fue recongelado
- Para tener control sanitario y decisión informada de consumo (recongelar afecta calidad/seguridad)
- **Estimación:** S | **Prioridad:** P2

**ALA-95: Alertas de uso incorrecto** 🟡
- Como usuario quiero que ALACENA me alerte si detecto un patrón riesgoso (ej: item congelado hace más de 6 meses, recongelado 2 veces, abierto hace demasiado)
- Para evitar problemas de salud por conservación incorrecta
- **Estimación:** M | **Prioridad:** P2

---

## 🌐 Épica 16: Futuro e Infraestructura (5 historias)

> Largo plazo, sin miedo.

**ALA-96: Integración con balanza digital** 🔵
- Como usuario quiero conectar una balanza digital a ALACENA para registrar peso exacto automáticamente
- Para no estimar cantidades y tener registros precisos
- **Estimación:** XL | **Prioridad:** P3

**ALA-97: Control por voz** 🔵
- Como usuario quiero agregar, consultar y descontar items usando comandos de voz ("Alexa, ¿cuánta leche queda?")
- Para usar ALACENA mientras cocino con las manos ocupadas
- **Estimación:** XL | **Prioridad:** P3

**ALA-98: Import desde fotos / WhatsApp** 🔵
- Como usuario quiero enviar foto de un producto por WhatsApp a ALACENA y que lo reconozca y agregue
- Para agregar items de la forma más natural posible, sin abrir la app
- **Estimación:** L | **Prioridad:** P3

**ALA-99: API pública ALACENA** 🔵
- Como desarrollador quiero una API REST/GraphQL documentada para interactuar con el inventario de ALACENA
- Para permitir integraciones externas, chatbots y automatizaciones
- **Estimación:** L | **Prioridad:** P2

**ALA-100: Export / backup completo** 🟡
- Como usuario quiero exportar todo mi inventario, recetas, historial y configuración a JSON/CSV
- Para tener backup completo de mis datos y poder migrar si lo necesito
- **Estimación:** M | **Prioridad:** P2

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 10 | 🟢 Corto plazo (Sprint 1-3) |
| **P2** | 52 | 🟢🟡 Corto-mediano plazo |
| **P3** | 38 | 🟡🔵 Mediano-largo plazo |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 38 | ~114h |
| **M** | 44 | ~264h |
| **L** | 11 | ~110h |
| **XL** | 3 | ~60h |
| **TOTAL** | **100** | **~548h** |

> ⚠️ **Nota:** 4 nuevas historias de Sprint 1 (ALA-01→04) se suman a las 3 ya completadas (ALA-05→07).

---

## 🎯 Modelo de Datos Conceptual

```
AlacenaItem (item de inventario)
├── id, user_id, household_id
├── nombre, descripcion
├── category_id (→ AlacenaCategory)
├── marca, fabricante, pais_origen
├── sku_interno, codigo_barras
├── unidad_medida: "g" | "kg" | "ml" | "L" | "unidades"
├── cantidad_actual, cantidad_minima (umbral alerta)
├── estado_stock: "ok" | "bajo" | "agotado"
├── estado_uso: "cerrado" | "abierto" | "consumido"
├── is_critico (boolean - nunca puede faltar)
├── conservacion: "ambiente" | "heladera" | "freezer" | "vacío" | "conserva"
├── ubicacion_id (→ AlacenaUbicacion)
├── precio_compra, lugar_compra, fecha_compra
├── fecha_vencimiento
├── notas, tags[]
├── fotos[] (galería)
└── qr_code

AlacenaLote (lote individual)
├── id, item_id
├── cantidad, unidad_medida
├── fecha_elaboracion, fecha_vencimiento
├── estado_sanitario: "bueno" | "dudoso" | "descartado"
├── conservacion, equipamiento_usado
├── recongelado (boolean, count)
├── ubicacion_id, posicion_exacta
├── foto, qr_code
├── receta_usada_id (si se usó en receta)
└── notas

AlacenaUbicacion (ubicación física)
├── id, household_id
├── nombre ("Freezer vertical", "Alacena cocina")
├── parent_id (jerarquía: Cocina → Heladera → Cajón verduras)
├── tipo: "heladera" | "freezer" | "alacena" | "bajo_mesada" | "despensa" | custom
├── posiciones[] (grilla A1-D4)
├── qr_code
└── mapa_visual (JSON layout)

AlacenaReceta (receta)
├── id, user_id, household_id
├── nombre, descripcion, pasos[]
├── tiempo_prep_min, tiempo_coccion_min
├── porciones_rendimiento
├── es_favorita (boolean)
├── parent_receta_id (base → variante)
├── ingredientes[] → AlacenaRecetaIngrediente
└── tags[], foto

AlacenaRecetaIngrediente
├── id, receta_id
├── item_id | nombre_libre (si no existe como item)
├── cantidad, unidad_medida
├── es_opcional (boolean)
├── sustitutos[] (lista de item_ids o nombres)
└── notas

AlacenaMovimiento (historial de stock)
├── id, item_id, lote_id (nullable)
├── tipo: "ingreso" | "consumo" | "ajuste" | "descuento_receta" | "descarte"
├── cantidad_anterior, cantidad_nueva
├── motivo
├── user_id (quién lo hizo)
├── receta_id (si fue por receta)
└── created_at

AlacenaPreferenciaPersona
├── id, household_id, persona_nombre
├── preferencias[] ("no come cerdo", "prefiere leche descremada")
├── restricciones[] ("celiaco", "alérgico maní", "vegano")
└── notas

AlacenaHistorialPrecio
├── id, item_id
├── precio, lugar_compra, fecha
└── precio_unitario_calculado
```

---

## 🔗 Integraciones Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **Lista de Compras** | API interna ECO | ALA-26, ALA-78, ALA-79, ALA-80 |
| **FINANCIA** | API interna ECO | ALA-37, ALA-82 |
| **Código de barras** | Open Food Facts API | ALA-08 |
| **Supermercados online** | Scraping / APIs locales | ALA-81 |
| **Balanza digital** | Bluetooth / USB | ALA-96 |
| **Asistentes de voz** | Google Assistant / Alexa SDK | ALA-97 |
| **WhatsApp** | WhatsApp Business API | ALA-98 |
| **OCR** | Google Vision / Tesseract | ALA-45 |

---

## 🎯 Roadmap ALACENA

**🟢 MVP (v0.1 — Sprint 1-3):** ALA-01→07 (core), ALA-11 (vencimiento), ALA-27 (unidades), ALA-29 (ajuste stock), ALA-32 (consumido)
**🟢 v0.2 — Visual + Ubicaciones:** ALA-08 (barras), ALA-10 (grid), ALA-12 (fotos), ALA-13→15 (ubicaciones), ALA-47 (colores)
**🟡 v0.3 — Alertas + Stock avanzado:** ALA-23→24 (alertas), ALA-26 (lista auto), ALA-28 (conversión), ALA-30→31 (historial, abierto/cerrado)
**🟡 v0.4 — Recetas + Lotes:** ALA-17→18 (recetas), ALA-48→52 (lotes, FIFO, congelado), ALA-63→70 (recetas pro)
**🟡 v0.5 — Inteligencia:** ALA-71→77 (consumo), ALA-82 (precios), ALA-85→88 (personas/preferencias)
**🔵 v1.0 — Pro:** ALA-45 (OCR), ALA-46 (vista visual freezer), ALA-91→95 (conservación pro), ALA-96→99 (hardware/voz/API)

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
