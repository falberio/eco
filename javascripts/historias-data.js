/**
 * ECO — Historias de Usuario: datos + filtros interactivos
 * 738 historias en 7 módulos + 11 áreas transversales
 * Sprint 0, Sesión 7 — 6 Feb 2026
 */
(function () {
    "use strict";

    // ── Helper para asignar fecha aproximada según prioridad ──
    function fecha(prio, id) {
        // Stories already shipped
        const shipped = [
            "MAN-01", "MAN-02", "MAN-03", "MAN-04", "MAN-05", "MAN-06", "MAN-07",
            "ALA-05", "ALA-06", "ALA-07"
        ];
        if (shipped.includes(id)) return "Sprint 1 ✅";
        if (prio === "P1") return "Q1-Q2 2026";
        if (prio === "P2") return "Q2-Q3 2026";
        if (prio === "P3") return "Q3-Q4 2026";
        return "2027+";
    }

    // ── Module labels ──
    const MOD = {
        mantia: "📋 MANTIA",
        alacena: "🏺 ALACENA",
        ecosalud: "💚 ECOSALUD",
        lista: "🛒 Lista",
        huesha: "📔 HUESHA",
        financia: "💰 FINANCIA",
        transversal: "🔧 Transversal"
    };

    // ── Compact data: [id, title, module, prio, est] ──
    const RAW = [
        // ══════════════ MANTIA (100) ══════════════
        ["MAN-01", "Crear, editar y eliminar tareas del hogar", "mantia", "P1", "M"],
        ["MAN-02", "Marcar tarea como completada", "mantia", "P1", "S"],
        ["MAN-03", "Registrar cada ejecución de una tarea", "mantia", "P1", "M"],
        ["MAN-04", "Vista de tareas pendientes de hoy", "mantia", "P1", "S"],
        ["MAN-05", "Cálculo automático de próxima fecha", "mantia", "P1", "M"],
        ["MAN-06", "Filtros por estado (pendiente, hecho, vencido)", "mantia", "P1", "S"],
        ["MAN-07", "Categorización de tareas por tipo", "mantia", "P1", "S"],
        ["MAN-08", "Recordatorios por email de tareas próximas", "mantia", "P2", "M"],
        ["MAN-09", "Vista calendario mensual de tareas", "mantia", "P2", "L"],
        ["MAN-10", "Arrastrar y soltar para reprogramar", "mantia", "P3", "M"],
        ["MAN-11", "Notificaciones push en el celular", "mantia", "P2", "M"],
        ["MAN-12", "Sincronizar con Google Calendar", "mantia", "P3", "L"],
        ["MAN-13", "Webhooks al completar tareas", "mantia", "P3", "M"],
        ["MAN-14", "Importar tareas desde Todoist", "mantia", "P3", "L"],
        ["MAN-15", "Dashboard de estadísticas del hogar", "mantia", "P2", "M"],
        ["MAN-16", "Racha de días consecutivos completando", "mantia", "P3", "S"],
        ["MAN-17", "Puntos por completar tareas", "mantia", "P3", "M"],
        ["MAN-18", "Asignar tarea a otro miembro del hogar", "mantia", "P2", "M"],
        ["MAN-19", "Comentarios en tareas", "mantia", "P3", "S"],
        ["MAN-20", "Historial de quién completó cada tarea", "mantia", "P3", "S"],
        ["MAN-21", "Tareas recurrentes avanzadas (cada X días, semanal, mensual)", "mantia", "P1", "M"],
        ["MAN-22", "Tareas con fecha flexible ('esta semana')", "mantia", "P2", "S"],
        ["MAN-23", "Tareas dependientes entre sí", "mantia", "P2", "M"],
        ["MAN-24", "Subtareas dentro de una tarea", "mantia", "P1", "S"],
        ["MAN-25", "Estados personalizados de tarea", "mantia", "P2", "S"],
        ["MAN-26", "Vista semanal de tareas", "mantia", "P2", "M"],
        ["MAN-27", "Vista agenda cronológica", "mantia", "P2", "S"],
        ["MAN-28", "Vista por ambiente del hogar (cocina, baño…)", "mantia", "P2", "M"],
        ["MAN-29", "Vista por tipo de tarea", "mantia", "P2", "S"],
        ["MAN-30", "Vista 'Hoy realista' (lo que realmente puedo hacer)", "mantia", "P2", "M"],
        ["MAN-31", "Reprogramación masiva de tareas", "mantia", "P2", "M"],
        ["MAN-32", "Zoom de carga diaria", "mantia", "P2", "S"],
        ["MAN-33", "Colores por categoría de tarea", "mantia", "P2", "S"],
        ["MAN-34", "Modo foco (ocultar distracciones)", "mantia", "P3", "S"],
        ["MAN-35", "Vista backlog doméstico", "mantia", "P2", "S"],
        ["MAN-36", "Estimación de duración de cada tarea", "mantia", "P2", "S"],
        ["MAN-37", "Alertas de sobrecarga semanal", "mantia", "P3", "M"],
        ["MAN-38", "Plantillas de rutinas domésticas", "mantia", "P2", "M"],
        ["MAN-39", "Timeline histórico del hogar", "mantia", "P3", "M"],
        ["MAN-40", "Modo checklist rápida", "mantia", "P2", "S"],
        ["MAN-41", "Reglas automáticas IF/THEN para tareas", "mantia", "P2", "L"],
        ["MAN-42", "Snooze inteligente de recordatorios", "mantia", "P2", "S"],
        ["MAN-43", "Recordatorios escalonados (1h, 1d, 3d antes)", "mantia", "P2", "S"],
        ["MAN-44", "Notificaciones según rol del usuario", "mantia", "P3", "S"],
        ["MAN-45", "Silenciar tareas no críticas", "mantia", "P2", "S"],
        ["MAN-46", "Resumen diario automático del hogar", "mantia", "P2", "M"],
        ["MAN-47", "Resumen semanal por email", "mantia", "P3", "M"],
        ["MAN-48", "Aviso por inactividad prolongada", "mantia", "P3", "S"],
        ["MAN-49", "Alertas de tareas olvidadas", "mantia", "P2", "S"],
        ["MAN-50", "Notificación contextual (clima, hora del día)", "mantia", "P3", "M"],
        ["MAN-51", "Integración con asistentes de voz", "mantia", "P3", "L"],
        ["MAN-52", "Confirmación doble para tareas críticas", "mantia", "P3", "S"],
        ["MAN-53", "Notificaciones agrupadas (digest)", "mantia", "P3", "M"],
        ["MAN-54", "Reglas por horario del día", "mantia", "P3", "M"],
        ["MAN-55", "Automatización por ubicación (geofencing)", "mantia", "P3", "L"],
        ["MAN-56", "Integración con Google Tasks", "mantia", "P3", "L"],
        ["MAN-57", "Integración con Apple Reminders", "mantia", "P3", "L"],
        ["MAN-58", "Importar tareas desde CSV/Excel", "mantia", "P2", "M"],
        ["MAN-59", "Exportar historial completo de tareas", "mantia", "P2", "M"],
        ["MAN-60", "Integración con Notion", "mantia", "P3", "L"],
        ["MAN-61", "Integración con Slack / Discord", "mantia", "P3", "M"],
        ["MAN-62", "API pública de MANTIA", "mantia", "P2", "L"],
        ["MAN-63", "Webhooks avanzados configurables", "mantia", "P3", "M"],
        ["MAN-64", "Vincular tarea con gasto en FINANCIA", "mantia", "P2", "M"],
        ["MAN-65", "Vincular tarea con entrada de HUESHA", "mantia", "P3", "S"],
        ["MAN-66", "Roles del hogar para asignación", "mantia", "P2", "M"],
        ["MAN-67", "Aprobación de tareas completadas", "mantia", "P3", "M"],
        ["MAN-68", "Reasignación automática por ausencia", "mantia", "P3", "M"],
        ["MAN-69", "Comentarios con menciones @", "mantia", "P3", "S"],
        ["MAN-70", "Historial de conflictos de asignación", "mantia", "P3", "M"],
        ["MAN-71", "Delegación por carga de trabajo", "mantia", "P3", "M"],
        ["MAN-72", "Vista 'qué hizo cada uno esta semana'", "mantia", "P2", "M"],
        ["MAN-73", "Acuerdos domésticos visibles", "mantia", "P3", "M"],
        ["MAN-74", "Modo convivencia temporal (visitas)", "mantia", "P3", "S"],
        ["MAN-75", "Estadísticas por persona del hogar", "mantia", "P2", "M"],
        ["MAN-76", "Gráfico de tareas por categoría", "mantia", "P2", "M"],
        ["MAN-77", "Tiempo invertido por ambiente", "mantia", "P3", "M"],
        ["MAN-78", "Tendencias mensuales de completitud", "mantia", "P3", "M"],
        ["MAN-79", "Ranking interno del hogar", "mantia", "P3", "S"],
        ["MAN-80", "Logros y badges por completar tareas", "mantia", "P3", "M"],
        ["MAN-81", "Penalización por tareas vencidas", "mantia", "P3", "S"],
        ["MAN-82", "Sistema de recompensas reales", "mantia", "P3", "M"],
        ["MAN-83", "Modo reset mensual de estadísticas", "mantia", "P3", "S"],
        ["MAN-84", "Predicción de carga futura del hogar", "mantia", "P3", "M"],
        ["MAN-85", "Objetivos domésticos configurables", "mantia", "P3", "M"],
        ["MAN-86", "IA: sugerencia automática de tareas faltantes", "mantia", "P3", "L"],
        ["MAN-87", "IA: detectar tareas que deberías tener", "mantia", "P3", "L"],
        ["MAN-88", "IA: reordenamiento inteligente del día", "mantia", "P3", "M"],
        ["MAN-89", "IA: detección de hábitos implícitos", "mantia", "P3", "L"],
        ["MAN-90", "IA: explicación del 'por qué' de una tarea", "mantia", "P3", "M"],
        ["MAN-91", "Conversación natural con MANTIA", "mantia", "P3", "L"],
        ["MAN-92", "Predicción de desgaste doméstico", "mantia", "P3", "L"],
        ["MAN-93", "Tareas ligadas a objetos específicos", "mantia", "P3", "M"],
        ["MAN-94", "Tareas por QR del objeto", "mantia", "P3", "M"],
        ["MAN-95", "Historial de mantenimiento por objeto", "mantia", "P3", "M"],
        ["MAN-96", "Alertas por uso acumulado de objetos", "mantia", "P3", "M"],
        ["MAN-97", "Integración con sensores IoT", "mantia", "P3", "XL"],
        ["MAN-98", "Tareas disparadas por consumo eléctrico", "mantia", "P3", "XL"],
        ["MAN-99", "Integración con medidores IoT", "mantia", "P3", "XL"],
        ["MAN-100", "MANTIA como cerebro operativo del hogar", "mantia", "P3", "XL"],
        // ══════════════ ALACENA (100) ══════════════
        ["ALA-01", "Crear item de inventario", "alacena", "P1", "M"],
        ["ALA-02", "Editar item del inventario", "alacena", "P1", "S"],
        ["ALA-03", "Eliminar item del inventario", "alacena", "P1", "S"],
        ["ALA-04", "Ver detalle de un item", "alacena", "P1", "S"],
        ["ALA-05", "Categorización y filtros de inventario", "alacena", "P1", "S"],
        ["ALA-06", "Estados de stock (lleno, medio, bajo, vacío)", "alacena", "P1", "S"],
        ["ALA-07", "Búsqueda de items en el inventario", "alacena", "P1", "S"],
        ["ALA-08", "Escaneo de código de barras para agregar", "alacena", "P2", "L"],
        ["ALA-09", "Sugerencias de items frecuentes", "alacena", "P3", "M"],
        ["ALA-10", "Vista grid con fotos de productos", "alacena", "P2", "M"],
        ["ALA-11", "Ordenar por fecha de vencimiento", "alacena", "P1", "S"],
        ["ALA-12", "Subir foto del producto", "alacena", "P2", "M"],
        ["ALA-13", "Gestionar ubicaciones físicas (estantes, cajones)", "alacena", "P2", "M"],
        ["ALA-14", "Asignar ubicación a cada item", "alacena", "P2", "S"],
        ["ALA-15", "Buscar items por ubicación", "alacena", "P2", "S"],
        ["ALA-16", "Generar QR por ubicación física", "alacena", "P3", "M"],
        ["ALA-17", "Crear y gestionar recetas", "alacena", "P2", "L"],
        ["ALA-18", "Ver si tengo ingredientes para una receta", "alacena", "P2", "M"],
        ["ALA-19", "Descontar ingredientes automáticamente al cocinar", "alacena", "P3", "M"],
        ["ALA-20", "Sugerir recetas según lo que tengo en stock", "alacena", "P3", "L"],
        ["ALA-21", "Compartir items con otros usuarios del hogar", "alacena", "P3", "M"],
        ["ALA-22", "Historial de consumo por persona", "alacena", "P3", "M"],
        ["ALA-23", "Alerta de vencimiento próximo (3 días antes)", "alacena", "P2", "M"],
        ["ALA-24", "Alerta automática de stock bajo", "alacena", "P2", "M"],
        ["ALA-25", "Predicción de cuándo se acabará un item", "alacena", "P3", "L"],
        ["ALA-26", "Generar lista de compras desde stock bajo", "alacena", "P2", "M"],
        ["ALA-27", "Manejo correcto de unidades (kg, lt, unidad)", "alacena", "P1", "M"],
        ["ALA-28", "Conversión automática de unidades", "alacena", "P2", "M"],
        ["ALA-29", "Ajuste manual de stock (sumar/restar)", "alacena", "P1", "S"],
        ["ALA-30", "Historial de cambios de stock por item", "alacena", "P2", "M"],
        ["ALA-31", "Diferenciar stock abierto vs cerrado", "alacena", "P2", "S"],
        ["ALA-32", "Marcar item como consumido/terminado", "alacena", "P1", "S"],
        ["ALA-33", "Registrar marca/fabricante del producto", "alacena", "P2", "S"],
        ["ALA-34", "SKU o código interno por item", "alacena", "P3", "S"],
        ["ALA-35", "País de origen del producto", "alacena", "P3", "S"],
        ["ALA-36", "Fecha de compra por item", "alacena", "P2", "S"],
        ["ALA-37", "Precio de compra por item", "alacena", "P2", "S"],
        ["ALA-38", "Precio por unidad/kg/litro calculado", "alacena", "P2", "S"],
        ["ALA-39", "Lugar de compra del producto", "alacena", "P2", "S"],
        ["ALA-40", "Notas libres por item", "alacena", "P2", "S"],
        ["ALA-41", "Galería de fotos por item", "alacena", "P2", "M"],
        ["ALA-42", "Zoom y vista detallada de foto", "alacena", "P3", "S"],
        ["ALA-43", "Foto por lote de producto", "alacena", "P3", "S"],
        ["ALA-44", "Foto del ticket de compra", "alacena", "P2", "M"],
        ["ALA-45", "OCR de tickets para precarga automática", "alacena", "P3", "L"],
        ["ALA-46", "Vista visual de heladera/freezer", "alacena", "P3", "L"],
        ["ALA-47", "Colores por estado de vencimiento", "alacena", "P2", "S"],
        ["ALA-48", "Múltiples lotes por item", "alacena", "P2", "M"],
        ["ALA-49", "Vencimiento diferenciado por lote", "alacena", "P2", "S"],
        ["ALA-50", "FIFO automático sugerido (consumir lo viejo primero)", "alacena", "P2", "M"],
        ["ALA-51", "Diferenciar congelado / heladera / ambiente", "alacena", "P2", "S"],
        ["ALA-52", "Fecha de elaboración por lote", "alacena", "P2", "S"],
        ["ALA-53", "Vida útil estimada por categoría", "alacena", "P3", "M"],
        ["ALA-54", "Estado sanitario del lote", "alacena", "P3", "S"],
        ["ALA-55", "Lote asociado a receta preparada", "alacena", "P3", "S"],
        ["ALA-56", "Jerarquía de ubicaciones (casa > cocina > estante)", "alacena", "P2", "M"],
        ["ALA-57", "Posición física exacta dentro de ubicación", "alacena", "P3", "S"],
        ["ALA-58", "Mapa visual del freezer", "alacena", "P3", "L"],
        ["ALA-59", "Mover items entre ubicaciones", "alacena", "P2", "S"],
        ["ALA-60", "Historial de ubicaciones de un item", "alacena", "P3", "M"],
        ["ALA-61", "QR por item individual", "alacena", "P2", "M"],
        ["ALA-62", "QR por lote", "alacena", "P3", "M"],
        ["ALA-63", "Cantidades exactas por ingrediente en receta", "alacena", "P2", "S"],
        ["ALA-64", "Ingredientes opcionales en receta", "alacena", "P3", "S"],
        ["ALA-65", "Sustituciones posibles de ingredientes", "alacena", "P3", "M"],
        ["ALA-66", "Recetas base y variantes", "alacena", "P3", "M"],
        ["ALA-67", "Cálculo automático de porciones", "alacena", "P2", "M"],
        ["ALA-68", "Escalar receta a más/menos comensales", "alacena", "P2", "M"],
        ["ALA-69", "Recetas favoritas", "alacena", "P2", "S"],
        ["ALA-70", "Tiempo estimado de preparación", "alacena", "P2", "S"],
        ["ALA-71", "Consumo promedio por item", "alacena", "P2", "M"],
        ["ALA-72", "Historial temporal de consumo", "alacena", "P3", "M"],
        ["ALA-73", "Predicción de quiebre de stock", "alacena", "P2", "M"],
        ["ALA-74", "Detección de sobrestock", "alacena", "P3", "M"],
        ["ALA-75", "Sugerencia de no recompra", "alacena", "P3", "S"],
        ["ALA-76", "Consumo real vs estimado", "alacena", "P3", "M"],
        ["ALA-77", "Items críticos recurrentes (nunca te quedes sin)", "alacena", "P2", "S"],
        ["ALA-78", "Lista de compras inteligente generada", "alacena", "P2", "M"],
        ["ALA-79", "Lista de compras por local/supermercado", "alacena", "P3", "M"],
        ["ALA-80", "Lista por urgencia de reposición", "alacena", "P2", "S"],
        ["ALA-81", "Integración con supermercados online", "alacena", "P3", "XL"],
        ["ALA-82", "Historial de precios por producto", "alacena", "P2", "M"],
        ["ALA-83", "Alertas de ofertas relevantes", "alacena", "P3", "L"],
        ["ALA-84", "Recomendación de cantidad óptima a comprar", "alacena", "P3", "M"],
        ["ALA-85", "Perfiles de consumo del hogar", "alacena", "P2", "M"],
        ["ALA-86", "Consumo por persona del hogar", "alacena", "P3", "M"],
        ["ALA-87", "Preferencias alimentarias por persona", "alacena", "P2", "M"],
        ["ALA-88", "Restricciones alimentarias (celíaco, diabético)", "alacena", "P2", "M"],
        ["ALA-89", "Notas compartidas del hogar", "alacena", "P3", "S"],
        ["ALA-90", "Modo invitado para ver inventario", "alacena", "P3", "S"],
        ["ALA-91", "Tipo de conservación por item", "alacena", "P2", "S"],
        ["ALA-92", "Equipamiento requerido para conservar", "alacena", "P3", "S"],
        ["ALA-93", "Regeneración sugerida (descongelar X con antelación)", "alacena", "P3", "M"],
        ["ALA-94", "Registro de recongelado (alerta de seguridad)", "alacena", "P2", "S"],
        ["ALA-95", "Alertas de uso incorrecto de conservación", "alacena", "P2", "M"],
        ["ALA-96", "Integración con balanza digital", "alacena", "P3", "XL"],
        ["ALA-97", "Control por voz del inventario", "alacena", "P3", "XL"],
        ["ALA-98", "Importar items desde fotos/WhatsApp", "alacena", "P3", "L"],
        ["ALA-99", "API pública de ALACENA", "alacena", "P2", "L"],
        ["ALA-100", "Export/backup completo del inventario", "alacena", "P2", "M"],
        // ══════════════ ECOSALUD (100) ══════════════
        ["ECO-01", "Registro manual de datos de salud", "ecosalud", "P1", "M"],
        ["ECO-02", "Histórico cronológico de registros", "ecosalud", "P1", "S"],
        ["ECO-03", "Tipos de registro (peso, presión, glucemia)", "ecosalud", "P1", "M"],
        ["ECO-04", "Registro rápido (1 tap / quick add)", "ecosalud", "P1", "S"],
        ["ECO-05", "Registro con fecha pasada", "ecosalud", "P1", "S"],
        ["ECO-06", "Edición de registros históricos", "ecosalud", "P1", "S"],
        ["ECO-07", "Eliminación con confirmación", "ecosalud", "P1", "S"],
        ["ECO-08", "Notas libres por registro", "ecosalud", "P2", "S"],
        ["ECO-09", "Adjuntar ubicación opcional", "ecosalud", "P3", "S"],
        ["ECO-10", "Tags personalizados por registro", "ecosalud", "P2", "S"],
        ["ECO-11", "Gráficos de evolución temporal", "ecosalud", "P2", "M"],
        ["ECO-12", "Filtros por rango de fechas", "ecosalud", "P2", "S"],
        ["ECO-13", "Vista comparativa por períodos", "ecosalud", "P2", "M"],
        ["ECO-14", "Comparar con metas", "ecosalud", "P2", "S"],
        ["ECO-15", "Alertas por valores anormales", "ecosalud", "P2", "M"],
        ["ECO-16", "Líneas de referencia (peso ideal, rango)", "ecosalud", "P2", "S"],
        ["ECO-17", "Vista 'foto del mes'", "ecosalud", "P2", "M"],
        ["ECO-18", "Promedios móviles", "ecosalud", "P3", "M"],
        ["ECO-19", "Exportar datos a PDF", "ecosalud", "P2", "M"],
        ["ECO-20", "Exportar datos a CSV", "ecosalud", "P2", "S"],
        ["ECO-21", "Definir metas (peso, pasos, presión)", "ecosalud", "P2", "M"],
        ["ECO-22", "Metas con fecha objetivo", "ecosalud", "P2", "S"],
        ["ECO-23", "Proyección de cumplimiento", "ecosalud", "P3", "M"],
        ["ECO-24", "Racha de registros consecutivos", "ecosalud", "P2", "S"],
        ["ECO-25", "Recordatorio diario configurable", "ecosalud", "P2", "S"],
        ["ECO-26", "Recordatorios por tipo de dato", "ecosalud", "P2", "M"],
        ["ECO-27", "Alertas por abandono de hábito", "ecosalud", "P3", "S"],
        ["ECO-28", "Logros simbólicos (badges)", "ecosalud", "P3", "M"],
        ["ECO-29", "Historial de metas cumplidas", "ecosalud", "P3", "S"],
        ["ECO-30", "Comparar metas pasadas vs actuales", "ecosalud", "P3", "M"],
        ["ECO-31", "Registro de medicamentos tomados", "ecosalud", "P2", "M"],
        ["ECO-32", "Registro de dosis y horarios", "ecosalud", "P2", "M"],
        ["ECO-33", "Recordatorio para tomar medicación", "ecosalud", "P2", "M"],
        ["ECO-34", "Medicación recurrente vs puntual", "ecosalud", "P2", "S"],
        ["ECO-35", "Alertas de dosis olvidada", "ecosalud", "P2", "S"],
        ["ECO-36", "Registro de efectos secundarios", "ecosalud", "P3", "M"],
        ["ECO-37", "Historial por medicamento", "ecosalud", "P2", "M"],
        ["ECO-38", "Adjuntar receta médica", "ecosalud", "P2", "M"],
        ["ECO-39", "Control de stock de medicación", "ecosalud", "P3", "M"],
        ["ECO-40", "Alertas por medicación próxima a terminar", "ecosalud", "P3", "S"],
        ["ECO-41", "Registro de estado de ánimo diario", "ecosalud", "P2", "M"],
        ["ECO-42", "Escala emocional configurable", "ecosalud", "P2", "S"],
        ["ECO-43", "Registro de estrés", "ecosalud", "P2", "S"],
        ["ECO-44", "Registro de ansiedad", "ecosalud", "P2", "M"],
        ["ECO-45", "Registro de calidad del sueño (manual)", "ecosalud", "P2", "M"],
        ["ECO-46", "Notas emocionales libres", "ecosalud", "P2", "S"],
        ["ECO-47", "Detección de patrones emocionales", "ecosalud", "P3", "M"],
        ["ECO-48", "Relación ánimo ↔ síntomas", "ecosalud", "P3", "M"],
        ["ECO-49", "Relación ánimo ↔ hábitos", "ecosalud", "P3", "M"],
        ["ECO-50", "Línea de tiempo emocional", "ecosalud", "P3", "M"],
        ["ECO-51", "Registro de síntomas", "ecosalud", "P2", "M"],
        ["ECO-52", "Intensidad del síntoma", "ecosalud", "P2", "S"],
        ["ECO-53", "Duración del síntoma", "ecosalud", "P2", "S"],
        ["ECO-54", "Síntomas recurrentes", "ecosalud", "P2", "M"],
        ["ECO-55", "Asociación síntoma ↔ medicamento", "ecosalud", "P3", "S"],
        ["ECO-56", "Asociación síntoma ↔ evento", "ecosalud", "P3", "S"],
        ["ECO-57", "Registro de crisis (migraña, pánico)", "ecosalud", "P2", "M"],
        ["ECO-58", "Línea de tiempo de síntomas", "ecosalud", "P2", "M"],
        ["ECO-59", "Adjuntar fotos (lesiones, erupciones)", "ecosalud", "P2", "M"],
        ["ECO-60", "Exportar síntomas para consulta médica", "ecosalud", "P2", "M"],
        ["ECO-61", "Subir fotos de estudios médicos", "ecosalud", "P2", "M"],
        ["ECO-62", "OCR de estudios (laboratorios)", "ecosalud", "P3", "L"],
        ["ECO-63", "Interpretación básica de valores", "ecosalud", "P3", "M"],
        ["ECO-64", "Alertas por valores fuera de rango", "ecosalud", "P2", "M"],
        ["ECO-65", "Histórico de estudios por tipo", "ecosalud", "P2", "M"],
        ["ECO-66", "Comparar estudios en el tiempo", "ecosalud", "P3", "M"],
        ["ECO-67", "Adjuntar órdenes médicas", "ecosalud", "P3", "S"],
        ["ECO-68", "Adjuntar informes médicos", "ecosalud", "P2", "M"],
        ["ECO-69", "Clasificación automática de estudios", "ecosalud", "P3", "M"],
        ["ECO-70", "Búsqueda por palabra clave en estudios", "ecosalud", "P2", "M"],
        ["ECO-71", "Importar desde Google Fit", "ecosalud", "P3", "L"],
        ["ECO-72", "Integración con Apple Health", "ecosalud", "P3", "L"],
        ["ECO-73", "Sincronización con báscula inteligente", "ecosalud", "P3", "L"],
        ["ECO-74", "Integración con smartwatch (pasos, FC)", "ecosalud", "P3", "L"],
        ["ECO-75", "Importar datos de sueño (API externa)", "ecosalud", "P3", "L"],
        ["ECO-76", "Integración con apps de running", "ecosalud", "P3", "L"],
        ["ECO-77", "Integración con apps de meditación", "ecosalud", "P3", "L"],
        ["ECO-78", "Importación automática diaria", "ecosalud", "P3", "M"],
        ["ECO-79", "Resolución de conflictos de datos", "ecosalud", "P3", "M"],
        ["ECO-80", "Log de sincronizaciones", "ecosalud", "P3", "S"],
        ["ECO-81", "Registro de médicos y especialistas", "ecosalud", "P2", "M"],
        ["ECO-82", "Registro de consultas médicas", "ecosalud", "P2", "M"],
        ["ECO-83", "Notas post-consulta", "ecosalud", "P2", "S"],
        ["ECO-84", "Próxima consulta programada", "ecosalud", "P2", "S"],
        ["ECO-85", "Recordatorios de turnos", "ecosalud", "P2", "S"],
        ["ECO-86", "Compartir histórico con médico (link temp.)", "ecosalud", "P3", "L"],
        ["ECO-87", "Acceso temporal con vencimiento", "ecosalud", "P3", "M"],
        ["ECO-88", "Modo 'consulta médica' (vista resumida)", "ecosalud", "P3", "M"],
        ["ECO-89", "Exportar pack médico completo", "ecosalud", "P2", "L"],
        ["ECO-90", "Historial de accesos externos", "ecosalud", "P3", "M"],
        ["ECO-91", "Detección de correlaciones automáticas", "ecosalud", "P3", "XL"],
        ["ECO-92", "Resumen semanal automático", "ecosalud", "P3", "M"],
        ["ECO-93", "Resumen mensual de salud", "ecosalud", "P3", "M"],
        ["ECO-94", "Insights accionables ('ojo con X')", "ecosalud", "P3", "L"],
        ["ECO-95", "Relación salud ↔ clima", "ecosalud", "P3", "M"],
        ["ECO-96", "Relación salud ↔ actividad física", "ecosalud", "P3", "M"],
        ["ECO-97", "Relación salud ↔ alimentación (ALACENA)", "ecosalud", "P3", "L"],
        ["ECO-98", "Relación salud ↔ sueño", "ecosalud", "P3", "M"],
        ["ECO-99", "Asistente de preguntas pre-consulta", "ecosalud", "P3", "L"],
        ["ECO-100", "Predicción de riesgos básicos", "ecosalud", "P3", "XL"],
        // ══════════════ LISTA DE COMPRAS (36) ══════════════
        ["LST-01", "CRUD manual de ítems de lista", "lista", "P1", "M"],
        ["LST-02", "Agregar ítems desde ALACENA", "lista", "P1", "S"],
        ["LST-03", "Marcar ítem como comprado", "lista", "P1", "S"],
        ["LST-04", "Vista por categorías", "lista", "P1", "S"],
        ["LST-05", "Sugerencias basadas en historial", "lista", "P1", "M"],
        ["LST-06", "Ordenar por supermercado", "lista", "P2", "M"],
        ["LST-07", "Estimar costo total", "lista", "P2", "M"],
        ["LST-08", "Agregar precio real al comprar", "lista", "P2", "S"],
        ["LST-09", "Comparar precios históricos", "lista", "P3", "M"],
        ["LST-10", "Sugerir supermercado más barato", "lista", "P3", "L"],
        ["LST-11", "Compartir lista con otros usuarios", "lista", "P2", "L"],
        ["LST-12", "Notificación push al agregar ítem urgente", "lista", "P3", "M"],
        ["LST-13", "Ver quién agregó cada ítem", "lista", "P3", "S"],
        ["LST-14", "Marcar ítem como 'yo lo compro'", "lista", "P2", "S"],
        ["LST-15", "Sincronizar con Notion", "lista", "P3", "L"],
        ["LST-16", "Enviar lista por WhatsApp", "lista", "P3", "M"],
        ["LST-17", "Comando de voz para agregar ítems", "lista", "P3", "XL"],
        ["LST-18", "Importar receta como lista de compras", "lista", "P2", "M"],
        ["LST-19", "Ver origen del ítem", "lista", "P2", "S"],
        ["LST-20", "Aceptar / rechazar sugerencias", "lista", "P2", "M"],
        ["LST-21", "Silenciar sugerencias por tipo", "lista", "P3", "M"],
        ["LST-22", "Sugerir por consumo acelerado", "lista", "P3", "L"],
        ["LST-23", "Ítems recurrentes automáticos", "lista", "P2", "M"],
        ["LST-24", "Prioridad del ítem (urgente/importante/opc.)", "lista", "P2", "S"],
        ["LST-25", "Agrupar por lugar de compra", "lista", "P2", "M"],
        ["LST-26", "Vista 'compra rápida'", "lista", "P2", "S"],
        ["LST-27", "Notas por ítem", "lista", "P3", "S"],
        ["LST-28", "Precio promedio histórico", "lista", "P3", "M"],
        ["LST-29", "Alertar aumentos atípicos", "lista", "P3", "L"],
        ["LST-30", "Asociar lista a presupuesto", "lista", "P3", "M"],
        ["LST-31", "Historial de acciones por ítem", "lista", "P3", "S"],
        ["LST-32", "Roles en la lista (editor / viewer)", "lista", "P3", "M"],
        ["LST-33", "Importar ticket por foto (OCR)", "lista", "P4", "XL"],
        ["LST-34", "Integración con Google Assistant / Alexa", "lista", "P4", "XL"],
        ["LST-35", "Integración con balanza inteligente", "lista", "P4", "XL"],
        ["LST-36", "Lista predictiva semanal", "lista", "P4", "XXL"],
        // ══════════════ HUESHA (100) ══════════════
        ["HUE-01", "Editor WYSIWYG base", "huesha", "P1", "L"],
        ["HUE-02", "Escritura rápida (modo minimal)", "huesha", "P1", "S"],
        ["HUE-03", "Referencias @ a personas", "huesha", "P1", "M"],
        ["HUE-04", "Referencias @ a lugares", "huesha", "P1", "M"],
        ["HUE-05", "Referencias @ a eventos", "huesha", "P2", "S"],
        ["HUE-06", "Referencias @ a entidades ECO transversales", "huesha", "P3", "M"],
        ["HUE-07", "Autocompletado inteligente con íconos", "huesha", "P2", "M"],
        ["HUE-08", "Backlinks por entidad", "huesha", "P2", "M"],
        ["HUE-09", "Guardado automático y drafts por día", "huesha", "P1", "M"],
        ["HUE-10", "Recuperación de texto perdido (crash-safe)", "huesha", "P1", "M"],
        ["HUE-11", "Grabar audio desde la app", "huesha", "P1", "L"],
        ["HUE-12", "Subir audio externo", "huesha", "P2", "L"],
        ["HUE-13", "Edición manual de transcripción", "huesha", "P1", "S"],
        ["HUE-14", "Vincular audio original a entrada", "huesha", "P3", "S"],
        ["HUE-15", "Marcas temporales internas (timestamps)", "huesha", "P3", "M"],
        ["HUE-16", "Transcripción parcial (solo fragmentos)", "huesha", "P3", "M"],
        ["HUE-17", "Entrada 'solo audio' (sin texto)", "huesha", "P2", "S"],
        ["HUE-18", "Búsqueda por palabras dichas (STT full-text)", "huesha", "P3", "M"],
        ["HUE-19", "Registrar película o serie", "huesha", "P1", "M"],
        ["HUE-20", "Registrar libro", "huesha", "P1", "M"],
        ["HUE-21", "Registrar música (álbum / canción)", "huesha", "P2", "M"],
        ["HUE-22", "Registrar podcast / charla", "huesha", "P2", "S"],
        ["HUE-23", "Registrar consumo cultural sin identificar obra", "huesha", "P2", "S"],
        ["HUE-24", "Rating opcional + nota personal", "huesha", "P2", "S"],
        ["HUE-25", "Wishlist cultural", "huesha", "P2", "M"],
        ["HUE-26", "Historial cultural con filtros", "huesha", "P2", "M"],
        ["HUE-27", "Estadísticas culturales anuales", "huesha", "P3", "M"],
        ["HUE-28", "Línea de tiempo cultural (por etapa)", "huesha", "P3", "L"],
        ["HUE-29", "Registrar evento genérico (base unificada)", "huesha", "P1", "L"],
        ["HUE-30", "Registrar viaje", "huesha", "P1", "M"],
        ["HUE-31", "Registrar hito vital", "huesha", "P1", "S"],
        ["HUE-32", "Registrar evento deportivo", "huesha", "P2", "S"],
        ["HUE-33", "Registrar experiencia social informal", "huesha", "P2", "S"],
        ["HUE-34", "Etiquetar evento con personas/lugares/emociones", "huesha", "P2", "M"],
        ["HUE-35", "Eventos recurrentes", "huesha", "P3", "M"],
        ["HUE-36", "Eventos no confirmados ('creo que fue ese día')", "huesha", "P3", "S"],
        ["HUE-37", "Línea narrativa del evento (crónica larga)", "huesha", "P2", "M"],
        ["HUE-38", "Evento como nodo central (media+chats+fotos)", "huesha", "P3", "L"],
        ["HUE-39", "Periodos de vivienda", "huesha", "P1", "M"],
        ["HUE-40", "Periodos laborales", "huesha", "P1", "M"],
        ["HUE-41", "Periodos de estudio", "huesha", "P1", "S"],
        ["HUE-42", "Periodos de relaciones sentimentales", "huesha", "P2", "S"],
        ["HUE-43", "Periodos de convivencia (roommates/pareja)", "huesha", "P2", "S"],
        ["HUE-44", "Periodos con mascotas", "huesha", "P2", "S"],
        ["HUE-45", "Periodos de vehículos", "huesha", "P3", "S"],
        ["HUE-46", "Periodos de salud relevantes", "huesha", "P3", "S"],
        ["HUE-47", "Parámetros personalizados por periodo", "huesha", "P3", "L"],
        ["HUE-48", "Superposición visual de periodos", "huesha", "P2", "L"],
        ["HUE-49", "Importar WhatsApp", "huesha", "P2", "L"],
        ["HUE-50", "Importar Instagram DMs", "huesha", "P3", "L"],
        ["HUE-51", "Importar Messenger", "huesha", "P3", "L"],
        ["HUE-52", "Importar emails (Gmail)", "huesha", "P3", "L"],
        ["HUE-53", "Vista cronológica unificada de chats", "huesha", "P1", "L"],
        ["HUE-54", "Búsqueda full-text global en comunicaciones", "huesha", "P1", "M"],
        ["HUE-55", "Vincular chat a entrada o evento", "huesha", "P3", "S"],
        ["HUE-56", "Marcar conversación como 'importante'", "huesha", "P3", "S"],
        ["HUE-57", "Conversaciones incompletas / fragmentadas", "huesha", "P3", "M"],
        ["HUE-58", "Google Photos (lectura por fecha)", "huesha", "P2", "L"],
        ["HUE-59", "Spotify (historial de escucha)", "huesha", "P2", "L"],
        ["HUE-60", "Letterboxd import", "huesha", "P2", "M"],
        ["HUE-61", "Clima automático diario", "huesha", "P2", "M"],
        ["HUE-62", "Geolocalización automática", "huesha", "P3", "S"],
        ["HUE-63", "Calendario externo (Google Calendar)", "huesha", "P3", "L"],
        ["HUE-64", "Eventos históricos externos (contexto mundial)", "huesha", "P3", "M"],
        ["HUE-65", "Integraciones como 'capas' activables", "huesha", "P2", "M"],
        ["HUE-66", "Vista día unificada (mega-dashboard)", "huesha", "P1", "XL"],
        ["HUE-67", "Días sin escritura (día implícito)", "huesha", "P1", "M"],
        ["HUE-68", "Vista semanal", "huesha", "P2", "M"],
        ["HUE-69", "Vista mensual con indicadores", "huesha", "P2", "M"],
        ["HUE-70", "Vista anual completa", "huesha", "P2", "L"],
        ["HUE-71", "Timeline biográfico vertical", "huesha", "P2", "L"],
        ["HUE-72", "Mapa vital de lugares", "huesha", "P3", "L"],
        ["HUE-73", "Filtros temporales avanzados", "huesha", "P2", "M"],
        ["HUE-74", "'Mi vida en el año X'", "huesha", "P2", "L"],
        ["HUE-75", "Capas de lectura (hechos/resumen/texto)", "huesha", "P3", "M"],
        ["HUE-76", "Resumen semanal automático", "huesha", "P2", "L"],
        ["HUE-77", "Resumen mensual", "huesha", "P2", "L"],
        ["HUE-78", "Resumen anual (Year in Review)", "huesha", "P2", "L"],
        ["HUE-79", "'Un día como hoy' — Recuerdos automáticos", "huesha", "P2", "M"],
        ["HUE-80", "Comparación hace 1/5/10 años", "huesha", "P3", "M"],
        ["HUE-81", "Detección de patrones emocionales", "huesha", "P3", "L"],
        ["HUE-82", "Detección de silencios prolongados", "huesha", "P2", "S"],
        ["HUE-83", "Sugerencias narrativas ('acá pasó algo')", "huesha", "P3", "L"],
        ["HUE-84", "Resúmenes por persona/lugar/periodo", "huesha", "P3", "L"],
        ["HUE-85", "Prompts guiados", "huesha", "P2", "M"],
        ["HUE-86", "Prompts contextuales automáticos", "huesha", "P3", "M"],
        ["HUE-87", "Registro de estado de ánimo", "huesha", "P2", "S"],
        ["HUE-88", "Emociones múltiples por día", "huesha", "P3", "S"],
        ["HUE-89", "Evolución emocional en el tiempo", "huesha", "P3", "M"],
        ["HUE-90", "Journaling no lineal (responder días después)", "huesha", "P2", "M"],
        ["HUE-91", "Modo descarga emocional (sin estructura)", "huesha", "P2", "S"],
        ["HUE-92", "Cierre diario opcional", "huesha", "P2", "S"],
        ["HUE-93", "Import masivo de periodos (CSV)", "huesha", "P1", "M"],
        ["HUE-94", "Templates guiados descargables", "huesha", "P1", "S"],
        ["HUE-95", "Import masivo de media", "huesha", "P2", "M"],
        ["HUE-96", "Exportar a PDF", "huesha", "P2", "M"],
        ["HUE-97", "Exportar a JSON", "huesha", "P2", "M"],
        ["HUE-98", "Exportar por rango temporal / persona", "huesha", "P3", "M"],
        ["HUE-99", "Entradas protegidas con PIN / privacidad", "huesha", "P3", "M"],
        ["HUE-100", "Modo legado (qué quedaría si no estás)", "huesha", "P3", "M"],
        // ══════════════ FINANCIA (100) ══════════════
        ["FIN-01", "CRUD de cuentas/billeteras", "financia", "P1", "M"],
        ["FIN-02", "Tipos de cuenta (banco, crédito, efectivo)", "financia", "P1", "S"],
        ["FIN-03", "Moneda por cuenta", "financia", "P1", "S"],
        ["FIN-04", "Fechas cierre/vencimiento tarjeta", "financia", "P1", "S"],
        ["FIN-05", "Cuenta activa/inactiva (archivar sin borrar)", "financia", "P2", "S"],
        ["FIN-06", "Cuenta compartida (hogar)", "financia", "P1", "L"],
        ["FIN-07", "Colores, íconos y orden visual", "financia", "P2", "S"],
        ["FIN-08", "Saldo inicial editable (con auditoría)", "financia", "P2", "S"],
        ["FIN-09", "Vista histórica de saldo por cuenta", "financia", "P2", "M"],
        ["FIN-10", "Permisos por usuario en cuentas compartidas", "financia", "P3", "M"],
        ["FIN-11", "Registrar gasto manual", "financia", "P1", "M"],
        ["FIN-12", "Registrar ingreso manual", "financia", "P1", "S"],
        ["FIN-13", "Transferencia entre cuentas", "financia", "P1", "M"],
        ["FIN-14", "Edición / eliminación con log", "financia", "P1", "M"],
        ["FIN-15", "Adjuntar comprobante", "financia", "P2", "M"],
        ["FIN-16", "Duplicar transacción", "financia", "P2", "S"],
        ["FIN-17", "Marcar transacción como 'pendiente'", "financia", "P2", "S"],
        ["FIN-18", "Marcar transacción como 'revisada'", "financia", "P3", "S"],
        ["FIN-19", "Búsqueda avanzada", "financia", "P1", "M"],
        ["FIN-20", "Filtros guardados", "financia", "P3", "S"],
        ["FIN-21", "Etiquetas libres (tags)", "financia", "P2", "S"],
        ["FIN-22", "Notas privadas por transacción", "financia", "P3", "S"],
        ["FIN-23", "CRUD de categorías", "financia", "P1", "M"],
        ["FIN-24", "Subcategorías", "financia", "P2", "M"],
        ["FIN-25", "Categorías sugeridas iniciales", "financia", "P2", "S"],
        ["FIN-26", "Categorías ocultables", "financia", "P3", "S"],
        ["FIN-27", "Reglas simples de auto-categorización", "financia", "P2", "M"],
        ["FIN-28", "Estadísticas por categoría", "financia", "P2", "M"],
        ["FIN-29", "Gastos recurrentes", "financia", "P1", "M"],
        ["FIN-30", "Ingresos recurrentes", "financia", "P2", "S"],
        ["FIN-31", "Pausar recurrente", "financia", "P2", "S"],
        ["FIN-32", "Gastos en cuotas", "financia", "P1", "M"],
        ["FIN-33", "Estado de cuota (pendiente/pagada)", "financia", "P1", "S"],
        ["FIN-34", "Adelantar cuotas", "financia", "P2", "S"],
        ["FIN-35", "Vista de compromisos futuros", "financia", "P1", "M"],
        ["FIN-36", "Importar CSV bancario", "financia", "P1", "L"],
        ["FIN-37", "Templates por banco", "financia", "P2", "L"],
        ["FIN-38", "Importar resumen tarjeta CSV", "financia", "P2", "L"],
        ["FIN-39", "Importar resumen tarjeta PDF", "financia", "P3", "XL"],
        ["FIN-40", "Detección de duplicados", "financia", "P2", "M"],
        ["FIN-41", "Vista previa antes de importar", "financia", "P2", "M"],
        ["FIN-42", "Reglas por banco/tarjeta", "financia", "P3", "M"],
        ["FIN-43", "Importación incremental", "financia", "P2", "M"],
        ["FIN-44", "Historial de imports", "financia", "P3", "S"],
        ["FIN-45", "Rollback de import", "financia", "P2", "M"],
        ["FIN-46", "Auto-categorización avanzada", "financia", "P2", "M"],
        ["FIN-47", "Reglas condicionales (monto + texto)", "financia", "P3", "M"],
        ["FIN-48", "Normalización de descripciones", "financia", "P2", "M"],
        ["FIN-49", "Unificación de comercios", "financia", "P2", "M"],
        ["FIN-50", "Lectura de emails bancarios", "financia", "P3", "XL"],
        ["FIN-51", "Confirmación automática de gastos chicos", "financia", "P3", "S"],
        ["FIN-52", "Alertas por gasto inusual", "financia", "P2", "M"],
        ["FIN-53", "Alertas por duplicado sospechoso", "financia", "P2", "S"],
        ["FIN-54", "Alertas por falta de datos", "financia", "P3", "S"],
        ["FIN-55", "Modo 'revisión semanal'", "financia", "P2", "M"],
        ["FIN-56", "Tipo de cambio oficial automático", "financia", "P1", "M"],
        ["FIN-57", "Tipo de cambio MEP", "financia", "P1", "M"],
        ["FIN-58", "Tipo de cambio CCL", "financia", "P2", "S"],
        ["FIN-59", "Tipo de cambio Blue", "financia", "P2", "S"],
        ["FIN-60", "Fuente configurable", "financia", "P3", "S"],
        ["FIN-61", "Historial de tipo de cambio", "financia", "P3", "M"],
        ["FIN-62", "Conversión manual histórica", "financia", "P2", "S"],
        ["FIN-63", "Alerta de variación brusca", "financia", "P3", "M"],
        ["FIN-64", "Patrimonio consolidado", "financia", "P1", "M"],
        ["FIN-65", "Vista en ARS o USD", "financia", "P1", "S"],
        ["FIN-66", "Compra de dólares", "financia", "P2", "M"],
        ["FIN-67", "Venta de dólares", "financia", "P2", "M"],
        ["FIN-68", "Ganancia/pérdida por tipo de cambio", "financia", "P3", "M"],
        ["FIN-69", "Línea temporal de patrimonio", "financia", "P2", "L"],
        ["FIN-70", "Foto patrimonial mensual", "financia", "P2", "M"],
        ["FIN-71", "Registrar deuda (debo)", "financia", "P1", "M"],
        ["FIN-72", "Registrar préstamo (me deben)", "financia", "P1", "S"],
        ["FIN-73", "Pagos parciales", "financia", "P2", "S"],
        ["FIN-74", "Split de gasto", "financia", "P2", "M"],
        ["FIN-75", "Balance entre personas", "financia", "P2", "M"],
        ["FIN-76", "Liquidación automática", "financia", "P2", "M"],
        ["FIN-77", "Historial de rendiciones", "financia", "P3", "S"],
        ["FIN-78", "Deudas recurrentes", "financia", "P3", "M"],
        ["FIN-79", "CRUD de promociones", "financia", "P2", "M"],
        ["FIN-80", "Campos completos de promo", "financia", "P2", "M"],
        ["FIN-81", "Calendario de promos", "financia", "P2", "M"],
        ["FIN-82", "Notificación por día de promo", "financia", "P2", "S"],
        ["FIN-83", "Sugerir mejor medio de pago", "financia", "P3", "M"],
        ["FIN-84", "Registrar promo aplicada", "financia", "P2", "S"],
        ["FIN-85", "Ahorro real vs potencial", "financia", "P3", "M"],
        ["FIN-86", "Gastos por categoría (torta/barras)", "financia", "P1", "M"],
        ["FIN-87", "Balance mensual (ingresos - gastos = ahorro)", "financia", "P1", "M"],
        ["FIN-88", "Tendencias mensuales", "financia", "P2", "M"],
        ["FIN-89", "Presupuesto vs real", "financia", "P2", "M"],
        ["FIN-90", "Estado de deudas", "financia", "P2", "M"],
        ["FIN-91", "Proyección 3/6/12 meses", "financia", "P2", "L"],
        ["FIN-92", "Comparación interanual", "financia", "P3", "M"],
        ["FIN-93", "Score financiero mensual", "financia", "P2", "M"],
        ["FIN-94", "Link con Lista de Compras", "financia", "P2", "M"],
        ["FIN-95", "Link con ALACENA (costo unitario histórico)", "financia", "P2", "L"],
        ["FIN-96", "Link con MANTIA", "financia", "P3", "S"],
        ["FIN-97", "Link con ECOSALUD", "financia", "P3", "S"],
        ["FIN-98", "Link con HUESHA (etapas de vida)", "financia", "P3", "M"],
        ["FIN-99", "Etiqueta emocional del gasto", "financia", "P3", "M"],
        ["FIN-100", "Simulación financiera ('¿qué pasa si…?')", "financia", "P3", "L"],
        // ══════════════ TRANSVERSALES (202) ══════════════
        // — API para IA (30) —
        ["API-01", "Schema GraphQL para MANTIA", "transversal", "P1", "L"],
        ["API-02", "Schema GraphQL para ALACENA", "transversal", "P1", "L"],
        ["API-03", "Schema GraphQL para Lista de Compras", "transversal", "P1", "M"],
        ["API-04", "Schema GraphQL para ECOSALUD", "transversal", "P1", "M"],
        ["API-05", "Subscriptions GraphQL real-time", "transversal", "P2", "L"],
        ["API-06", "Generar API Key por usuario", "transversal", "P1", "M"],
        ["API-07", "Rotar/Revocar API Keys", "transversal", "P2", "S"],
        ["API-08", "Rate limiting por API Key", "transversal", "P2", "M"],
        ["API-09", "Query 'getNextTasks' para voz", "transversal", "P1", "S"],
        ["API-10", "Query 'whatCanICookToday' para recetas", "transversal", "P2", "M"],
        ["API-11", "Query 'getHealthSummary' flexible", "transversal", "P2", "M"],
        ["API-12", "Mutation 'addItemByVoice' NL parsing", "transversal", "P2", "L"],
        ["API-13", "Webhook al completar tarea", "transversal", "P3", "M"],
        ["API-14", "Webhook al stock bajo", "transversal", "P3", "M"],
        ["API-15", "Playground GraphQL público autenticado", "transversal", "P2", "S"],
        ["API-16", "Versionado de API (v1/v2) + deprecación", "transversal", "P1", "M"],
        ["API-17", "Convención de errores (codes, messages)", "transversal", "P1", "S"],
        ["API-18", "Paginación estándar (cursor-based)", "transversal", "P1", "M"],
        ["API-19", "Filtros/sort estándar (DSL común)", "transversal", "P2", "M"],
        ["API-20", "Idempotencia en mutations", "transversal", "P2", "M"],
        ["API-21", "Observabilidad por request (trace)", "transversal", "P2", "M"],
        ["API-22", "Bulk mutations (alta/update masivo)", "transversal", "P2", "L"],
        ["API-23", "Export schema + SDK types autogenerados", "transversal", "P2", "M"],
        ["API-24", "Entitlements/scopes por API Key", "transversal", "P1", "L"],
        ["API-25", "Service tokens server-to-server", "transversal", "P2", "M"],
        ["API-26", "Sandbox environment (testing)", "transversal", "P3", "L"],
        ["API-27", "Rate limit granular (usuario+IP+token)", "transversal", "P2", "M"],
        ["API-28", "Persisted queries (seguridad+perf.)", "transversal", "P3", "L"],
        ["API-29", "Auditoría de llamadas API", "transversal", "P2", "M"],
        ["API-30", "Documentación viva (GraphQL docs)", "transversal", "P2", "M"],
        // — Agente Conversacional (30) —
        ["AGT-01", "Endpoint texto/voz → respuesta", "transversal", "P1", "L"],
        ["AGT-02", "Integración con Whisper API (STT)", "transversal", "P2", "M"],
        ["AGT-03", "Integración con TTS (respuestas habladas)", "transversal", "P3", "M"],
        ["AGT-04", "Context awareness (recordar conversación)", "transversal", "P2", "L"],
        ["AGT-05", "'¿Qué tareas tengo hoy?'", "transversal", "P1", "S"],
        ["AGT-06", "'Marca tarea X como completada'", "transversal", "P1", "S"],
        ["AGT-07", "'Cuándo tengo turno con peluquero'", "transversal", "P2", "M"],
        ["AGT-08", "'¿Qué pastas si somos 5?'", "transversal", "P2", "L"],
        ["AGT-09", "'¿Cuánta leche queda?'", "transversal", "P1", "S"],
        ["AGT-10", "'Agregar 2L de leche al inventario'", "transversal", "P2", "M"],
        ["AGT-11", "'¿Cómo dio mi último colesterol?'", "transversal", "P1", "S"],
        ["AGT-12", "'Registra que hoy peso 78kg'", "transversal", "P2", "S"],
        ["AGT-13", "Integración con Home Assistant (MQTT)", "transversal", "P3", "XL"],
        ["AGT-14", "Custom skill Google Assist./Alexa", "transversal", "P3", "XL"],
        ["AGT-15", "Detección de intención + entidades (NLU)", "transversal", "P1", "L"],
        ["AGT-16", "Confirmaciones seguras ('¿Confirmás X?')", "transversal", "P1", "M"],
        ["AGT-17", "Deshacer última acción por voz ('undo')", "transversal", "P2", "M"],
        ["AGT-18", "Modo dictado para HUESHA", "transversal", "P2", "M"],
        ["AGT-19", "'Daily Brief' por voz", "transversal", "P2", "L"],
        ["AGT-20", "Multi-turn: aclaraciones ('¿cuál leche?')", "transversal", "P2", "L"],
        ["AGT-21", "Memoria por sesión + resumen persistible", "transversal", "P2", "L"],
        ["AGT-22", "Comandos peligrosos requieren 2 pasos", "transversal", "P1", "M"],
        ["AGT-23", "Skill routing por módulo", "transversal", "P1", "M"],
        ["AGT-24", "Soporte bilingüe ES/EN (input mixto)", "transversal", "P3", "M"],
        ["AGT-25", "Perfil de voz (preferencias, apodos)", "transversal", "P3", "M"],
        ["AGT-26", "Respuestas con formato (cards/resúmenes)", "transversal", "P2", "M"],
        ["AGT-27", "Modo manos libres en mobile", "transversal", "P3", "L"],
        ["AGT-28", "Integración con calendario", "transversal", "P3", "L"],
        ["AGT-29", "'Explicame por qué' (trazabilidad)", "transversal", "P2", "M"],
        ["AGT-30", "Testing de skills (frases→asserts)", "transversal", "P2", "L"],
        // — Multi-usuario y Roles (20) —
        ["USR-01", "CRUD de usuarios (admin)", "transversal", "P1", "M"],
        ["USR-02", "Roles: Admin, Familia, Invitado", "transversal", "P1", "M"],
        ["USR-03", "Permisos por rol", "transversal", "P1", "L"],
        ["USR-04", "Invitar usuario por email", "transversal", "P2", "M"],
        ["USR-05", "Ver actividad de otros usuarios (feed)", "transversal", "P3", "M"],
        ["USR-06", "Asignar tareas/items a usuarios", "transversal", "P2", "S"],
        ["USR-07", "Notificar al asignar algo", "transversal", "P2", "S"],
        ["USR-08", "Filtrar por usuario", "transversal", "P2", "S"],
        ["USR-09", "CRUD de Household (múltiples hogares)", "transversal", "P3", "L"],
        ["USR-10", "Cambiar entre hogares con selector", "transversal", "P3", "M"],
        ["USR-11", "Invitación por link (expirable)", "transversal", "P2", "M"],
        ["USR-12", "Transferir ownership del household", "transversal", "P2", "M"],
        ["USR-13", "Roles custom por household", "transversal", "P3", "L"],
        ["USR-14", "Permisos por entidad/objeto (ACL granular)", "transversal", "P1", "L"],
        ["USR-15", "Compartir selectivo entre hogares", "transversal", "P3", "L"],
        ["USR-16", "'Guest mode' acceso temporal", "transversal", "P2", "M"],
        ["USR-17", "Revocar acceso + limpiar tokens", "transversal", "P2", "M"],
        ["USR-18", "Registro de actividad por household", "transversal", "P2", "M"],
        ["USR-19", "Asignaciones con estados", "transversal", "P3", "M"],
        ["USR-20", "Configurar privacidad por rol", "transversal", "P2", "L"],
        // — Notificaciones (20) —
        ["NOT-01", "Email de tarea vencida (MANTIA)", "transversal", "P2", "S"],
        ["NOT-02", "Email de stock bajo (ALACENA)", "transversal", "P2", "S"],
        ["NOT-03", "Email resumen semanal (ECOSALUD)", "transversal", "P3", "M"],
        ["NOT-04", "Push de tarea vencida", "transversal", "P2", "M"],
        ["NOT-05", "Push de item agregado a lista compartida", "transversal", "P2", "S"],
        ["NOT-06", "Push de valor anormal en ECOSALUD", "transversal", "P2", "S"],
        ["NOT-07", "SMS de alerta crítica (presión muy alta)", "transversal", "P3", "M"],
        ["NOT-08", "Preferencias de notificación por usuario", "transversal", "P2", "M"],
        ["NOT-09", "Horario de no molestar", "transversal", "P3", "S"],
        ["NOT-10", "Consolidar notificaciones (digest)", "transversal", "P3", "M"],
        ["NOT-11", "Motor de reintentos + backoff por canal", "transversal", "P1", "L"],
        ["NOT-12", "Dedup (evitar spam por eventos repetidos)", "transversal", "P1", "M"],
        ["NOT-13", "Priorización (crítica/alta/media/baja)", "transversal", "P2", "M"],
        ["NOT-14", "Plantillas con variables + vista previa", "transversal", "P2", "M"],
        ["NOT-15", "Tracking de entregabilidad", "transversal", "P2", "L"],
        ["NOT-16", "Fallback de canal (push→email→sms)", "transversal", "P2", "L"],
        ["NOT-17", "Centro de notificaciones in-app", "transversal", "P2", "M"],
        ["NOT-18", "'Acciones' desde notificación", "transversal", "P2", "L"],
        ["NOT-19", "Quiet hours avanzadas por día", "transversal", "P3", "M"],
        ["NOT-20", "Modo 'viaje' (cambia reglas)", "transversal", "P3", "M"],
        // — Backups y Exportación (18) —
        ["BKP-01", "Backup diario automático de BD", "transversal", "P1", "M"],
        ["BKP-02", "Retención de backups (30 días)", "transversal", "P2", "S"],
        ["BKP-03", "Restaurar desde backup específico", "transversal", "P2", "M"],
        ["BKP-04", "Exportar todos mis datos a JSON", "transversal", "P2", "M"],
        ["BKP-05", "Exportar ALACENA a Excel", "transversal", "P3", "S"],
        ["BKP-06", "Exportar ECOSALUD a PDF", "transversal", "P2", "M"],
        ["BKP-07", "Importar tareas desde CSV", "transversal", "P3", "M"],
        ["BKP-08", "Importar inventario desde plantilla Excel", "transversal", "P3", "M"],
        ["BKP-09", "Backups cifrados (KMS)", "transversal", "P1", "M"],
        ["BKP-10", "Prueba automática de restore (fire drill)", "transversal", "P1", "L"],
        ["BKP-11", "Backup por tenant/household (aislado)", "transversal", "P2", "M"],
        ["BKP-12", "Export incremental (desde fecha X)", "transversal", "P2", "M"],
        ["BKP-13", "Import con validación + reporte errores", "transversal", "P2", "L"],
        ["BKP-14", "Compat. versiones plantilla (migrations)", "transversal", "P2", "M"],
        ["BKP-15", "Snapshot de medios separado de BD", "transversal", "P3", "L"],
        ["BKP-16", "'Takeout' full (zip) estructura estándar", "transversal", "P2", "M"],
        ["BKP-17", "Política retención configurable", "transversal", "P3", "M"],
        ["BKP-18", "Borrado seguro (crypto-shred)", "transversal", "P2", "L"],
        // — Seguridad y Admin (20) —
        ["SEC-01", "2FA (autenticación de dos factores)", "transversal", "P3", "L"],
        ["SEC-02", "Historial de sesiones", "transversal", "P3", "M"],
        ["SEC-03", "Cerrar sesión remota", "transversal", "P3", "S"],
        ["SEC-04", "Cambio de contraseña", "transversal", "P2", "S"],
        ["SEC-05", "Log de acciones críticas (admin)", "transversal", "P2", "M"],
        ["SEC-06", "Alerta de login sospechoso", "transversal", "P3", "M"],
        ["SEC-07", "Eliminar cuenta y todos los datos", "transversal", "P2", "M"],
        ["SEC-08", "Descargar todos mis datos (GDPR)", "transversal", "P2", "M"],
        ["SEC-09", "Passkeys (WebAuthn)", "transversal", "P3", "L"],
        ["SEC-10", "OAuth/SSO (Google)", "transversal", "P2", "L"],
        ["SEC-11", "Password policy + fuerza + blacklist", "transversal", "P2", "M"],
        ["SEC-12", "Bloqueo por intentos fallidos + captcha", "transversal", "P2", "M"],
        ["SEC-13", "Cifrado en reposo (BD) + secretos en vault", "transversal", "P1", "L"],
        ["SEC-14", "Security headers (CSP, HSTS)", "transversal", "P2", "S"],
        ["SEC-15", "Permisos por scope para tokens", "transversal", "P1", "L"],
        ["SEC-16", "Alertas cambios sensibles", "transversal", "P2", "M"],
        ["SEC-17", "'Data access log' por usuario", "transversal", "P2", "L"],
        ["SEC-18", "Gestión de dispositivos confiables", "transversal", "P3", "M"],
        ["SEC-19", "WAF/rules básicas anti abuso", "transversal", "P3", "L"],
        ["SEC-20", "Clasificación de datos (PII) + controles", "transversal", "P2", "L"],
        // — UX y Onboarding (20) —
        ["UXO-01", "Tutorial interactivo al primer uso", "transversal", "P2", "L"],
        ["UXO-02", "Setup wizard (elegir módulos activos)", "transversal", "P2", "M"],
        ["UXO-03", "Tooltips contextuales", "transversal", "P3", "S"],
        ["UXO-04", "Temas claro/oscuro", "transversal", "P2", "M"],
        ["UXO-05", "Elegir color primario del sistema", "transversal", "P3", "S"],
        ["UXO-06", "Densidad de interfaz", "transversal", "P3", "M"],
        ["UXO-07", "Soporte de teclado completo (shortcuts)", "transversal", "P3", "L"],
        ["UXO-08", "Tamaño de fuente ajustable", "transversal", "P3", "S"],
        ["UXO-09", "Alto contraste para accesibilidad", "transversal", "P3", "M"],
        ["UXO-10", "Soporte screen readers (ARIA labels)", "transversal", "P3", "L"],
        ["UXO-11", "Estados vacíos por módulo (con CTA útil)", "transversal", "P2", "M"],
        ["UXO-12", "Manejo consistente de errores", "transversal", "P1", "M"],
        ["UXO-13", "Deshacer/rehacer (acciones críticas)", "transversal", "P2", "L"],
        ["UXO-14", "Bulk actions (seleccionar + operar lote)", "transversal", "P2", "M"],
        ["UXO-15", "Import wizard UX (CSV/Excel → mapping)", "transversal", "P2", "L"],
        ["UXO-16", "Centro de ayuda/FAQ interno", "transversal", "P3", "M"],
        ["UXO-17", "Búsqueda omnibox (Spotlight/Cmd-K)", "transversal", "P2", "L"],
        ["UXO-18", "Atajos configurables por usuario", "transversal", "P3", "L"],
        ["UXO-19", "'Focus mode' (solo hoy / urgentes)", "transversal", "P3", "M"],
        ["UXO-20", "Layout responsive pro (mobile-first)", "transversal", "P2", "L"],
        // — Infraestructura y DevOps (18) —
        ["INF-01", "Logs centralizados (Sentry/LogRocket)", "transversal", "P2", "M"],
        ["INF-02", "Monitoreo de performance (Lighthouse CI)", "transversal", "P3", "M"],
        ["INF-03", "Alertas de uptime", "transversal", "P2", "S"],
        ["INF-04", "Tests E2E automatizados (Playwright)", "transversal", "P2", "L"],
        ["INF-05", "Preview deployments por PR", "transversal", "P3", "M"],
        ["INF-06", "Rollback automático si tests fallan", "transversal", "P3", "M"],
        ["INF-07", "Cache de queries pesadas (Redis)", "transversal", "P3", "L"],
        ["INF-08", "CDN para assets estáticos", "transversal", "P3", "S"],
        ["INF-09", "Gestión de secretos por entorno (Vault)", "transversal", "P1", "M"],
        ["INF-10", "Migraciones DB en CI/CD con rollback", "transversal", "P1", "L"],
        ["INF-11", "Jobs/colas (background worker)", "transversal", "P1", "L"],
        ["INF-12", "Feature flags (activar/desactivar)", "transversal", "P2", "M"],
        ["INF-13", "Config central (remote config)", "transversal", "P3", "M"],
        ["INF-14", "Cost monitoring + alertas", "transversal", "P2", "M"],
        ["INF-15", "SLO/SLI (latencia, errores, uptime)", "transversal", "P2", "M"],
        ["INF-16", "Observabilidad de cron/jobs", "transversal", "P2", "M"],
        ["INF-17", "Load testing (k6) endpoints críticos", "transversal", "P3", "L"],
        ["INF-18", "Gestión de logs sensibles (redaction)", "transversal", "P2", "M"],
        // — Datos, Búsqueda y Conocimiento (10) —
        ["DAT-01", "Búsqueda global real (full-text + ranking)", "transversal", "P1", "L"],
        ["DAT-02", "Índice unificado de entidades", "transversal", "P2", "L"],
        ["DAT-03", "Timeline transversal (todos los módulos)", "transversal", "P1", "L"],
        ["DAT-04", "Dedupe/merge de entidades", "transversal", "P2", "L"],
        ["DAT-05", "Etiquetas globales (tags) reutilizables", "transversal", "P2", "M"],
        ["DAT-06", "Motor de relaciones (item↔receta↔compra)", "transversal", "P2", "L"],
        ["DAT-07", "Auditoría de cambios por entidad (diff)", "transversal", "P2", "M"],
        ["DAT-08", "'Snapshots' de estado (freezer tal día)", "transversal", "P3", "L"],
        ["DAT-09", "Motor de recomendaciones transversal", "transversal", "P3", "L"],
        ["DAT-10", "Export de grafo de conocimiento", "transversal", "P3", "M"],
        // — Integraciones Externas (10) —
        ["INT-01", "Conectar Google (OAuth) Gmail/Calendar", "transversal", "P2", "L"],
        ["INT-02", "Import eventos Calendar a timeline", "transversal", "P2", "M"],
        ["INT-03", "Import emails 'relevantes' a timeline", "transversal", "P3", "L"],
        ["INT-04", "Spotify: guardar discos y linkear a día", "transversal", "P3", "L"],
        ["INT-05", "Letterboxd: sync películas + ratings", "transversal", "P3", "L"],
        ["INT-06", "YouTube: registrar videos vistos", "transversal", "P4", "L"],
        ["INT-07", "WhatsApp: importar exports + mapear contactos", "transversal", "P2", "L"],
        ["INT-08", "Home Assistant: eventos sensores a timeline", "transversal", "P3", "XL"],
        ["INT-09", "Webhooks genéricos entrantes (IFTTT/Zapier)", "transversal", "P3", "L"],
        ["INT-10", "Conectores 'pluggable' (framework integ.)", "transversal", "P3", "XL"],
        // — Gobernanza y Cumplimiento (6) —
        ["GOV-01", "Centro de privacidad: qué se guarda y por qué", "transversal", "P2", "M"],
        ["GOV-02", "Consentimiento por integración (revocación)", "transversal", "P2", "M"],
        ["GOV-03", "Retención por tipo de dato (logs, audios)", "transversal", "P2", "L"],
        ["GOV-04", "Políticas de compartición (household/privado)", "transversal", "P2", "M"],
        ["GOV-05", "Export 'legible' (human-readable) + JSON", "transversal", "P3", "M"],
        ["GOV-06", "Modo 'máxima privacidad'", "transversal", "P3", "M"]
    ];

    // ── Build stories array ──
    const stories = RAW.map(function (r) {
        return {
            id: r[0],
            title: r[1],
            module: r[2],
            moduleName: MOD[r[2]],
            prio: r[3],
            est: r[4],
            fecha: fecha(r[3], r[0])
        };
    });

    // ── Wait for DOM ──
    document.addEventListener("DOMContentLoaded", init);

    // ── State ──
    var activeModule = "all";
    var activePrio = "all";
    var activeSize = "all";
    var searchText = "";

    function init() {
        var tbody = document.getElementById("historia-tbody");
        if (!tbody) return; // Not on the historias page

        renderTable(stories);
        bindFilters();
    }

    function renderTable(data) {
        var tbody = document.getElementById("historia-tbody");
        if (!tbody) return;
        var html = "";
        for (var i = 0; i < data.length; i++) {
            var s = data[i];
            var prioClass = s.prio.toLowerCase();
            html += '<tr data-module="' + s.module + '" data-priority="' + s.prio + '" data-size="' + s.est + '">' +
                '<td class="col-id"><code>' + s.id + '</code></td>' +
                '<td class="col-title">' + s.title + '</td>' +
                '<td class="col-module">' + s.moduleName + '</td>' +
                '<td class="col-prio"><span class="prio ' + prioClass + '">' + s.prio + '</span></td>' +
                '<td class="col-est">' + s.est + '</td>' +
                '<td class="col-date">' + s.fecha + '</td>' +
                '</tr>';
        }
        tbody.innerHTML = html;
    }

    function applyFilters() {
        var filtered = stories.filter(function (s) {
            if (activeModule !== "all" && s.module !== activeModule) return false;
            if (activePrio !== "all" && s.prio !== activePrio) return false;
            if (activeSize !== "all" && s.est !== activeSize) return false;
            if (searchText) {
                var q = searchText.toLowerCase();
                if (s.id.toLowerCase().indexOf(q) === -1 &&
                    s.title.toLowerCase().indexOf(q) === -1 &&
                    s.moduleName.toLowerCase().indexOf(q) === -1) {
                    return false;
                }
            }
            return true;
        });

        renderTable(filtered);

        var countEl = document.getElementById("filter-count");
        if (countEl) {
            countEl.innerHTML = "Mostrando <strong>" + filtered.length + "</strong> de 738 historias";
        }

        var noResults = document.getElementById("no-results");
        var tableContainer = document.getElementById("historia-table");
        if (noResults && tableContainer) {
            if (filtered.length === 0) {
                noResults.style.display = "block";
                tableContainer.style.display = "none";
            } else {
                noResults.style.display = "none";
                tableContainer.style.display = "";
            }
        }
    }

    function bindFilters() {
        // Module buttons
        bindFilterGroup("filter-module", function (val) {
            activeModule = val;
            applyFilters();
        });
        // Priority buttons
        bindFilterGroup("filter-priority", function (val) {
            activePrio = val;
            applyFilters();
        });
        // Size buttons
        bindFilterGroup("filter-size", function (val) {
            activeSize = val;
            applyFilters();
        });
        // Search
        var searchInput = document.getElementById("filter-search");
        if (searchInput) {
            searchInput.addEventListener("input", function () {
                searchText = this.value;
                applyFilters();
            });
        }
    }

    function bindFilterGroup(containerId, onChange) {
        var container = document.getElementById(containerId);
        if (!container) return;
        var buttons = container.querySelectorAll(".filter-btn");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function () {
                // Remove active from siblings
                var siblings = this.parentNode.querySelectorAll(".filter-btn");
                for (var j = 0; j < siblings.length; j++) {
                    siblings[j].classList.remove("active");
                }
                this.classList.add("active");
                onChange(this.getAttribute("data-filter"));
            });
        }
    }

    // ── Global reset ──
    window.resetFilters = function () {
        activeModule = "all";
        activePrio = "all";
        activeSize = "all";
        searchText = "";
        var searchInput = document.getElementById("filter-search");
        if (searchInput) searchInput.value = "";
        // Reset all button groups
        var groups = ["filter-module", "filter-priority", "filter-size"];
        for (var g = 0; g < groups.length; g++) {
            var container = document.getElementById(groups[g]);
            if (!container) continue;
            var btns = container.querySelectorAll(".filter-btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].classList.remove("active");
                if (btns[i].getAttribute("data-filter") === "all") {
                    btns[i].classList.add("active");
                }
            }
        }
        applyFilters();
    };

})();
