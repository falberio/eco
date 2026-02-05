# 🎯 Cheatsheet Operativo – Comandos Rápidos

**Última actualización:** 04 Febrero 2026

---

## 📋 Propósito

Hoja rápida con comandos listos para usar con Copilot. Acelera el trabajo, estandariza pedidos y evita ambigüedades.

---

## 🔄 Comandos de Contexto

### Retomar Trabajo

```
Retomemos donde quedamos
```

Copilot cargará automáticamente:
- Contexto General
- Documento Funcional
- Última sesión del Libro de Sesiones
- Estado actual del Backlog

### Estado del Proyecto

```
¿Cuál es el estado actual del proyecto ECO?
```

### Revisar Sprint Actual

```
Muéstrame el estado del Sprint actual
```

---

## 📝 Backlog & Épicas

### Crear Épica

```
Creá la épica EP-XX: <Nombre> con objetivo, alcance y criterios de éxito
```

**Ejemplo:**
```
Creá la épica EP-06: Reportes ALACENA con objetivo, alcance y criterios de éxito
```

### Crear Historia de Usuario

```
Agregá la historia <MÓDULO-##>: <Título> con criterios de aceptación: <...>
```

**Ejemplo:**
```
Agregá la historia ALACENA-12: Ver historial de movimientos con criterios: 1) filtrar por fecha, 2) exportar CSV
```

### Editar Historia

```
Actualizá <ID-HISTORIA> cambiando <CAMPO> por: <VALOR>
```

**Ejemplo:**
```
Actualizá MANTIA-03 cambiando criterios por: 1) mostrar solo pendientes, 2) ordenar por fecha
```

---

## 🚀 Sprints

### Crear Sprint

```
Creá Sprint N – DD/MM → DD/MM con estas historias: <lista>
```

**Ejemplo:**
```
Creá Sprint 2 – 24/02 → 09/03 con estas historias: MANTIA-01, MANTIA-02, LISTA-01
```

### Actualizar Sprint

```
Ajustá Sprint N moviendo <histórias> y actualizá Roadmap
```

---

## 🗺️ Roadmap

### Mover Hito

```
Mové el hito <Nombre> a QX 2026 y revisá riesgos/dependencias
```

### Agregar Hito

```
Agregá el hito <Nombre> con objetivos/entregables <...>
```

---

## 📖 Libro de Sesiones

### Crear Sesión

```
Agregá Sesión N – AAAAMMDD – <Tema> con D-###, A-###, TO-### y próximos pasos
```

**Ejemplo:**
```
Agregá Sesión 7 – 20260205 – Backlog Sprint 1 con decisiones, acuerdos y próximos pasos
```

---

## 🏗️ ADRs

### Crear ADR

```
Creá ADR-00X – <Título> con contexto, decisión y consecuencias
```

**Ejemplo:**
```
Creá ADR-006 – Uso de Redis para cache con contexto, decisión y consecuencias
```

### Ubicación de ADRs

- **Funcional/arquitectónico** → [02-documento-funcional.md](02-documento-funcional.md)
- **Técnico operativo** → [05-arquitectura/adrs.md](05-arquitectura/adrs.md)

---

## 🎨 UX & Navegación

### Actualizar Navegación

```
Actualizá navegación para <MÓDULO> agregando <FEATURE>
```

**Ejemplo:**
```
Actualizá navegación para MANTIA agregando búsqueda local
```

### Proponer Estado Vacío

```
Proponé estado vacío para <MÓDULO> cuando <CONDICIÓN>
```

**Ejemplo:**
```
Proponé estado vacío para ALACENA cuando no existan items
```

---

## 🚀 Deploys & Backfill

### Registrar Deploy

```
Registrá deploy <COMPONENTE> – AAAA-MM-DD: <descripción>
```

**Ejemplo:**
```
Registrá deploy Backend – 2026-02-04: migración de taras automáticas
```

### Backfill (Regularización)

```
Añadí Backfill: <hecho pasado> y registralo según plantilla
```

**Ejemplo:**
```
Añadí Backfill: deploy inicial de ALACENA en Noviembre 2025
```

---

## 📊 Actualización de Documentos

### Actualizar Fecha

```
Actualizá última actualización de <DOCUMENTO>
```

### Mantener Coherencia

```
Registrá impactos cruzados en DF, Backlog, Roadmap y Sesiones
```

---

## 🔧 Desarrollo

### Revisar Errores

```
Revisá errores en <ARCHIVO>
```

### Crear Componente

```
Creá componente <NOMBRE> para <FUNCIONALIDAD> con <PROPS>
```

### Agregar Endpoint

```
Agregá endpoint GET /api/<RECURSO> con <PARÁMETROS>
```

---

## 📁 Archivos & Estructura

### Listar Archivos

```
Mostrá archivos en <CARPETA>
```

### Buscar en Código

```
Buscá <TÉRMINO> en el proyecto
```

### Leer Archivo

```
Mostrá <ARCHIVO> líneas <N> a <M>
```

---

## 🎯 Plantillas Rápidas

### Historia de Usuario

```
Como [ROL]
Quiero [ACCIÓN]
Para [BENEFICIO]

Criterios de Aceptación:
1. [CRITERIO 1]
2. [CRITERIO 2]
3. [CRITERIO 3]
```

### ADR

```
# ADR-XXX – [Título]

**Estado:** Propuesta | Aceptada | Rechazada | Obsoleta
**Fecha:** AAAA-MM-DD
**Autor:** [Nombre]

## Contexto
[Situación que motiva la decisión]

## Decisión
[Qué se decidió hacer]

## Consecuencias
**Positivas:**
- [Pro 1]
- [Pro 2]

**Negativas:**
- [Contra 1]
- [Contra 2]

## Alternativas Consideradas
- [Alternativa 1]: [Por qué se descartó]
- [Alternativa 2]: [Por qué se descartó]
```

### Minuta de Sesión

```
### Sesión N – AAAA-MM-DD – [Tema]

- **Objetivo:** [Qué se buscaba lograr]
- **Decisiones (D-###):** [Lista de decisiones]
- **Acuerdos (A-###):** [Lista de acuerdos]
- **Temas abiertos (TO-###):** [Pendientes]
- **Impacto en DF:** [Cambios funcionales]
- **Impacto en Arquitectura:** [Cambios técnicos]
- **Impacto en Backlog:** [Nuevas historias]
- **Acciones:** [Quién hace qué]
- **Próximos pasos:** [Qué sigue]
```

---

## 🔗 Enlaces Rápidos

- [Contexto General](01-contexto-general.md)
- [Documento Funcional](02-documento-funcional.md)
- [Libro de Sesiones](03-libro-sesiones.md)
- [Backlog](04-planificacion/backlog.md)
- [Roadmap](04-planificacion/roadmap.md)
- [ADRs](05-arquitectura/adrs.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Agregar comandos según necesidad
