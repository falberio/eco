# 🛒 Lista de Compras (36 historias)

**Fecha:** 5 de febrero de 2026  
**Módulo:** Lista de Compras  
**Propósito:** Entidad transversal de uso cotidiano — puente entre datos y decisiones. Conecta ALACENA (stock), FINANCIA (presupuesto), MANTIA (tareas) y los hábitos del hogar para generar listas inteligentes, colaborativas y con memoria de precios.

> *"No es lo que falta. Es lo que necesitás, cuándo, dónde y a cuánto."*

**Características clave:**
- 📝 CRUD con origen trazable (manual, ALACENA, hábito, receta, MANTIA)
- 🧠 Sugerencias inteligentes: por consumo, recurrencia, stock bajo, menú planificado
- 💸 Precios: histórico, inflación personal, presupuesto, alertas de aumento
- 🤝 Colaboración: lista compartida, roles, "yo lo compro", historial de acciones
- 🔗 Integraciones: WhatsApp, voz, OCR de tickets, balanza inteligente, lista predictiva

**Distribución por Épica:**
- Épica 1: Base operativa (Core Sprint 1) → 5 historias
- Épica 2: Generación inteligente de ítems → 5 historias
- Épica 3: Priorización y organización → 5 historias
- Épica 4: Precios, costos e inflación personal → 7 historias
- Épica 5: Colaboración y hogar → 6 historias
- Épica 6: Integraciones externas → 8 historias

**TOTAL:** 36 historias

> **Nota:** Lista de Compras es una entidad transversal, no un módulo independiente de 100 historias. Su potencia viene de las integraciones con ALACENA, FINANCIA y MANTIA, no de complejidad propia.

---

## 🧱 Épica 1: Base Operativa — Core Sprint 1 (5 historias)

> Lo mínimo vital. Ya está casi cerrado.

**LST-01: CRUD manual de ítems** ✅
- Como usuario quiero agregar, editar y eliminar ítems de mi lista de compras manualmente
- Para tener control total de lo que necesito comprar
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

**LST-02: Agregar ítems desde ALACENA** ✅
- Como usuario quiero agregar un ítem a la lista directamente desde el inventario de ALACENA
- Para no tipear de nuevo lo que ya existe en mi inventario (con nombre, categoría y cantidad sugerida)
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**LST-03: Marcar ítem como comprado** ✅
- Como usuario quiero marcar un ítem como comprado con un toque
- Para ir tachando mientras recorro el supermercado
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**LST-04: Vista por categorías** ✅
- Como usuario quiero ver los ítems agrupados por categoría (lácteos, limpieza, verduras, etc.)
- Para navegar la lista de forma organizada y no olvidar nada por pasillo
- **Estimación:** S | **Prioridad:** P1 | **Sprint 1 completado**

**LST-05: Sugerencias basadas en historial** ✅
- Como usuario quiero que al empezar una lista nueva me sugiera ítems que compro habitualmente
- Para armar la lista más rápido sin pensar todo desde cero
- **Estimación:** M | **Prioridad:** P1 | **Sprint 1 completado**

---

## ⚙️ Épica 2: Generación Inteligente de Ítems (5 historias)

> Acá entra fuerte todo lo de origen y sugerencias contextuales.

**LST-19: Ver origen del ítem** 🟢
- Como usuario quiero ver por qué un ítem está en la lista: si lo agregué yo manualmente, si vino de ALACENA (stock bajo), de MANTIA (tarea pendiente), de una receta, o de un hábito detectado
- Para entender la lista y decidir si realmente lo necesito o fue una sugerencia que puedo ignorar
- **Estimación:** S | **Prioridad:** P2

**LST-20: Aceptar / rechazar sugerencias** 🟢
- Como usuario quiero que las sugerencias automáticas (de ALACENA, hábitos, recetas) lleguen como "propuestas" que yo apruebo o rechazo antes de entrar a la lista
- Para mantener el control de mi lista sin que se llene de cosas que no quiero comprar ahora
- **Estimación:** M | **Prioridad:** P2

**LST-21: Silenciar sugerencias por tipo** 🟡
- Como usuario quiero desactivar sugerencias de ciertos módulos (ej: "no me sugieran más desde MANTIA") o silenciar ítems específicos ("no me sugieran más jabón de ropa")
- Para evitar ruido en las sugerencias y personalizar qué fuentes me son útiles
- **Estimación:** M | **Prioridad:** P3

**LST-22: Sugerir por consumo acelerado** 🟡
- Como usuario quiero que ECO me sugiera comprar un ítem si detecta que lo estoy consumiendo más rápido de lo normal (ej: "esta semana usaste 2x más leche que lo habitual")
- Para anticipar quiebres de stock por cambios en el consumo (visitas, vacaciones, cambio de hábito)
- **Estimación:** L | **Prioridad:** P3

**LST-23: Ítems recurrentes automáticos** 🟢
- Como usuario quiero que ECO sugiera automáticamente compras recurrentes basándose en mi patrón de compra (ej: "comprás café cada 15 días, ¿lo agregamos?")
- Para no tener que recordar compras repetitivas — que el sistema las proponga
- **Estimación:** M | **Prioridad:** P2

---

## 🧭 Épica 3: Priorización y Organización (5 historias)

> Que la lista sea usable EN el supermercado.

**LST-06: Ordenar por supermercado** 🟢
- Como usuario quiero agrupar ítems por supermercado donde suelo comprar cada uno
- Para optimizar mi recorrido de compra y no volver atrás por algo que olvidé
- **Estimación:** M | **Prioridad:** P2

**LST-24: Prioridad del ítem (urgente / importante / opcional)** 🟢
- Como usuario quiero asignar prioridad a cada ítem: urgente (se acabó), importante (se está acabando), opcional (si hay oferta)
- Para decidir rápido qué compro primero si no tengo tiempo/plata para comprar todo
- **Estimación:** S | **Prioridad:** P2

**LST-25: Agrupar por lugar de compra** 🟢
- Como usuario quiero ver la lista agrupada por tipo de comercio (supermercado, verdulería, dietética, farmacia, ferretería)
- Para planificar mi recorrido y saber qué llevo a cada lugar
- **Estimación:** M | **Prioridad:** P2

**LST-26: Vista "compra rápida"** 🟢
- Como usuario quiero una vista minimalista solo con ítems pendientes (nombre + cantidad), tipo checklist sin detalles
- Para usar en el supermercado con una mano, sin distracciones — ir tachando rápido
- **Estimación:** S | **Prioridad:** P2

**LST-27: Notas por ítem** 🟢
- Como usuario quiero agregar notas libres a cada ítem ("marca La Serenísima", "si está en oferta", "no la saborizada", "la de tapa azul")
- Para que quien compre sepa exactamente qué traer sin tener que preguntar
- **Estimación:** S | **Prioridad:** P3

---

## 💸 Épica 4: Precios, Costos e Inflación Personal (7 historias)

> Acá la Lista se vuelve poderosa. Conecta con FINANCIA.

**LST-07: Estimar costo total** 🟢
- Como usuario quiero ver el precio estimado total de la lista basándose en últimos precios registrados
- Para saber cuánto voy a gastar ANTES de ir al supermercado y decidir si ajusto
- **Estimación:** M | **Prioridad:** P2

**LST-08: Agregar precio real al comprar** 🟢
- Como usuario quiero registrar el precio real que pagué al marcar un ítem como comprado
- Para alimentar el historial de precios y comparar con el estimado
- **Estimación:** S | **Prioridad:** P2

**LST-09: Comparar precios históricos** 🟡
- Como usuario quiero ver si el precio de un producto subió o bajó respecto a la última compra
- Para detectar inflación real en MIS productos, no la del INDEC
- **Estimación:** M | **Prioridad:** P3

**LST-10: Sugerir supermercado más barato** 🟡
- Como usuario quiero que el sistema me sugiera dónde conviene comprar cada ítem según mis precios históricos por local
- Para optimizar gasto eligiendo el super correcto para cada producto
- **Estimación:** L | **Prioridad:** P3

**LST-28: Precio promedio histórico** 🟡
- Como usuario quiero ver el precio promedio que vengo pagando por un ítem a lo largo del tiempo
- Para tener referencia rápida de "cuánto sale normalmente" y detectar si me están cobrando de más
- **Estimación:** M | **Prioridad:** P3

**LST-29: Alertar aumentos atípicos** 🟡
- Como usuario quiero que ECO me alerte si un producto subió mucho más que el promedio (ej: "la leche subió 25% respecto al mes pasado")
- Para tomar decisiones informadas: stockear, cambiar de marca, o buscar alternativa
- **Estimación:** L | **Prioridad:** P3

**LST-30: Asociar lista a presupuesto** 🟡
- Como usuario quiero ver si el costo estimado de mi lista entra dentro de mi presupuesto mensual de supermercado (cruzando con FINANCIA)
- Para no pasarme del presupuesto y priorizar ítems si estoy justo
- **Estimación:** M | **Prioridad:** P3

---

## 🤝 Épica 5: Colaboración y Hogar (6 historias)

> La lista del hogar, no de una persona.

**LST-11: Compartir lista con otros usuarios** 🟢
- Como usuario quiero compartir mi lista de compras con mi pareja/familia
- Para que ambos veamos y editemos la misma lista en tiempo real
- **Estimación:** L | **Prioridad:** P2

**LST-12: Notificación push al agregar ítem urgente** 🟡
- Como usuario quiero que cuando alguien agrega un ítem marcado como "urgente", el otro reciba push
- Para que alguien que pasa por el super lo compre sin tener que llamar
- **Estimación:** M | **Prioridad:** P3

**LST-13: Ver quién agregó cada ítem** 🟡
- Como usuario quiero ver quién agregó cada ítem a la lista
- Para coordinar ("¿vos pediste esto?") y entender las necesidades de cada persona
- **Estimación:** S | **Prioridad:** P3

**LST-14: Marcar ítem como "yo lo compro"** 🟢
- Como usuario quiero reservar ítems que voy a comprar yo
- Para que el otro sepa que ya están cubiertos y no compre duplicado
- **Estimación:** S | **Prioridad:** P2

**LST-31: Historial de acciones por ítem** 🟡
- Como usuario quiero ver el historial completo de un ítem: quién lo agregó, quién le cambió la prioridad, quién lo compró, cuándo
- Para trazabilidad completa en listas compartidas y resolver "¿quién sacó el pan de la lista?"
- **Estimación:** S | **Prioridad:** P3

**LST-32: Roles en la lista (editor / viewer)** 🟡
- Como usuario quiero definir quién puede editar la lista y quién solo puede verla
- Para compartir con alguien (ej: suegra) sin que modifique cosas por accidente
- **Estimación:** M | **Prioridad:** P3

---

## 🔗 Épica 6: Integraciones Externas (8 historias)

> Largo plazo. La lista conectada con el mundo.

**LST-15: Sincronizar con Notion** 🟡
- Como usuario quiero exportar/importar mi lista desde/hacia una base de datos Notion
- Para integrar con mi sistema personal de productividad
- **Estimación:** L | **Prioridad:** P3

**LST-16: Enviar lista por WhatsApp** 🟡
- Como usuario quiero compartir mi lista formateada por WhatsApp con un toque
- Para enviarla a alguien que va al super y no tiene la app instalada
- **Estimación:** M | **Prioridad:** P3

**LST-17: Comando de voz para agregar ítems** 🟡
- Como usuario quiero decir "Agregar leche y pan a la lista" y que se agreguen automáticamente
- Para agregar ítems mientras cocino o tengo las manos ocupadas
- **Estimación:** XL | **Prioridad:** P3

**LST-18: Importar receta como lista de compras** 🟢
- Como usuario quiero seleccionar una receta de ALACENA y que genere la lista de compras con los ingredientes que me faltan (descontando stock actual)
- Para pasar de "quiero hacer lasanga" a "lista de lo que falta" en 1 click
- **Estimación:** M | **Prioridad:** P2

**LST-33: Importar ticket por foto (OCR)** 🔵
- Como usuario quiero sacar foto al ticket de compra y que ECO lea los ítems, cantidades y precios para conciliar con la lista
- Para cerrar el ciclo: lista → compra → registro automático de precios y stock sin tipear
- **Estimación:** XL | **Prioridad:** P4

**LST-34: Integración con Google Assistant / Alexa** 🔵
- Como usuario quiero decir "Ok Google, agregá jabón a la lista de ECO" desde cualquier dispositivo
- Para agregar ítems de la forma más natural posible sin abrir la app
- **Estimación:** XL | **Prioridad:** P4

**LST-35: Integración con balanza inteligente** 🔵
- Como usuario quiero que una balanza conectada detecte que un producto bajó de peso y sugiera comprarlo
- Para automatización real: la balanza detecta que queda poca harina → aparece en la lista
- **Estimación:** XL | **Prioridad:** P4

**LST-36: Lista predictiva semanal** 🔵
- Como usuario quiero que ECO me proponga una lista de compras completa para la semana basándose en: hábitos de consumo, menú planificado (recetas), stock actual (ALACENA), presupuesto disponible (FINANCIA) y eventos del hogar (MANTIA)
- Para que la compra semanal esté resuelta antes de que yo piense en ella — el santo grial de la lista inteligente
- **Estimación:** XXL | **Prioridad:** P4

---

## 📊 Resumen por Prioridad

| Prioridad | Cantidad | Horizonte |
|-----------|----------|-----------|
| **P1** | 5 | 🟢 Sprint 1 (completados) |
| **P2** | 14 | 🟢 Corto plazo |
| **P3** | 13 | 🟡 Mediano plazo |
| **P4** | 4 | 🔵 Largo plazo / visionario |

## 📊 Resumen por Estimación

| Estimación | Cantidad | Horas totales estimadas |
|------------|----------|------------------------|
| **S** | 10 | ~30h |
| **M** | 14 | ~84h |
| **L** | 5 | ~50h |
| **XL** | 5 | ~100h |
| **XXL** | 1 | ~30h |
| **TOTAL** | **36** | **~294h** |

> **Nota sobre XXL:** LST-36 (lista predictiva) es la historia más ambiciosa — cruza ALACENA + FINANCIA + MANTIA + hábitos + IA. Es el "santo grial" del módulo y justifica el tamaño.

---

## 🎯 Modelo de Datos Conceptual

```
ListaCompras (la lista en sí)
├── id, user_id, household_id
├── nombre ("Semanal", "Super del sábado", "Farmacia")
├── estado: "activa" | "completada" | "archivada"
├── fecha_creacion, fecha_completada
├── costo_estimado_total (calculado)
├── costo_real_total (calculado al completar)
├── presupuesto_vinculado_id (→ FINANCIA, nullable)
├── compartida_con[] (user_ids)
├── roles: { user_id: "editor" | "viewer" }
└── notas

ListaComprasItem (ítem de la lista)
├── id, lista_id
├── nombre, descripcion
├── category_id (→ categoría)
├── cantidad, unidad_medida
├── estado: "pendiente" | "comprado" | "descartado"
├── prioridad: "urgente" | "importante" | "opcional"
├── origen: "manual" | "alacena_stock_bajo" | "alacena_receta" | "mantia" | "habito" | "sugerencia_ia"
├── origen_detalle (JSON: {modulo, item_id, motivo})
├── sugerencia_aceptada (boolean, null si no fue sugerencia)
├── precio_estimado
├── precio_real (al comprar)
├── lugar_compra_sugerido
├── lugar_compra_real
├── notas ("marca X", "si hay oferta")
├── comprado_por (user_id)
├── agregado_por (user_id)
├── reservado_por (user_id, "yo lo compro")
├── alacena_item_id (nullable, para vincular con inventario)
├── fecha_comprado
└── created_at

ListaComprasHistorial (log de acciones)
├── id, item_id, lista_id
├── accion: "agregado" | "editado" | "comprado" | "descartado" | "prioridad_cambiada" | "reservado"
├── user_id
├── detalle (JSON: cambios realizados)
└── created_at

ListaComprasPrecioHistorico (historial de precios)
├── id
├── item_nombre_normalizado
├── precio, lugar_compra
├── fecha_compra
├── user_id
├── precio_por_unidad (calculado)
└── variacion_vs_anterior (% calculado)

ListaComprasSugerencia (sugerencia pendiente)
├── id, household_id
├── item_nombre
├── origen: "alacena" | "habito" | "consumo_acelerado" | "receta" | "ia_predictiva"
├── motivo_texto ("Stock bajo de leche", "Comprás cada 15 días")
├── estado: "pendiente" | "aceptada" | "rechazada" | "silenciada"
├── silenciada_hasta (fecha, nullable)
└── created_at

ListaComprasRecurrente (patrón de compra detectado)
├── id, household_id
├── item_nombre_normalizado
├── frecuencia_dias (cada cuánto se compra)
├── ultima_compra
├── proxima_sugerencia (calculada)
├── activa (boolean)
└── confianza (% de predicción)
```

---

## 🔗 Integraciones Requeridas

| Integración | API/Método | Historias |
|-------------|-----------|-----------|
| **ALACENA** | API interna ECO (stock bajo, recetas) | LST-02, LST-18, LST-19 |
| **FINANCIA** | API interna ECO (presupuesto) | LST-30 |
| **MANTIA** | API interna ECO (tareas que requieren compra) | LST-19 |
| **Notion** | Notion API | LST-15 |
| **WhatsApp** | WhatsApp Business API / Share Intent | LST-16 |
| **Google Assistant** | Actions on Google / Alexa SDK | LST-34 |
| **OCR tickets** | Google Vision / Tesseract | LST-33 |
| **Balanza IoT** | MQTT / Bluetooth | LST-35 |

---

## 🎯 Roadmap Lista de Compras

**🟢 MVP (v0.1 — Sprint 1):** LST-01→05 (core, completado)
**🟢 v0.2 — Inteligencia básica:** LST-19 (origen), LST-20 (aceptar/rechazar), LST-23 (recurrentes), LST-24 (prioridad), LST-26 (compra rápida)
**🟢 v0.3 — Organización:** LST-06 (por super), LST-25 (por comercio), LST-18 (receta→lista), LST-27 (notas)
**🟡 v0.4 — Precios:** LST-07→08 (estimar/registrar), LST-09 (histórico), LST-28 (promedio), LST-30 (presupuesto)
**🟡 v0.5 — Colaboración:** LST-11 (compartir), LST-14 (yo lo compro), LST-31 (historial), LST-32 (roles)
**🔵 v1.0 — Futuro:** LST-33 (OCR), LST-34 (voz), LST-35 (balanza), LST-36 (predictiva semanal)

---

## 🧭 Observaciones

- **No es un módulo de 100 historias** — Lista de Compras es una entidad transversal. Su potencia viene de las conexiones, no de complejidad interna
- **El valor real está en las integraciones:** ALACENA (qué falta), FINANCIA (cuánto puedo gastar), MANTIA (qué necesito para una tarea), hábitos (qué compro siempre)
- **LST-36 es el santo grial:** una lista que se arma sola cruzando todo ECO. Es el futuro, no el presente
- **P4 = visionario** — primera vez que usamos P4, reservado para las 4 historias más ambiciosas que requieren hardware, IA avanzada o integraciones complejas

---

**¿Aprobadas? ¿Alguna que quieras cambiar, agregar o eliminar?**
