# ECO – Documento Funcional (Parte 1): Fundamentos

> **Fuente de verdad del proyecto ECO.** Alineado con el estado actual del proyecto ya deployado, con repo activo en GitHub y base de datos existente. Este documento guía su evolución, priorizando claridad, trazabilidad, ritmo sostenido y decisiones conscientes.

---

## 1. Propósito del Documento

Este Documento Funcional y de Arquitectura (DF) define:

- **Qué es ECO y qué no es** (No-Objetivos)
- **Cómo se estructura funcionalmente**
- **Cómo se organiza su arquitectura**
- **Qué decisiones ya fueron tomadas** (ADRs)
- **Cómo se planifica el trabajo** (ceremonias, sesiones, ritmo)
- **Cómo se traduce el MVP operativo** al backlog y la ejecución

**Nota importante:** El DF acompaña al repositorio existente, no lo reemplaza. Cualquier diferencia entre código y documento debe resolverse actualizando el DF.

---

## 2. Principios Rectores

### 2.1 Principios funcionales

- **Descargar la mente:** Nada crítico reside solo en memoria
- **Registro antes que automatización:** Capturar primero, automatizar después
- **Historial primero:** Todo evento queda registrado
- **Asistencia progresiva:** El sistema ayuda más a medida que se usa
- **Modularidad clara:** Cada módulo tiene responsabilidad definida

### 2.2 Principios técnicos

- **Un solo backend** (confirmado por repo actual)
- **Modelo de datos único, extensible**
- **Mobile-first real**
- **Decisiones reversibles**
- **Infraestructura simple, controlada**

---

## 3. No-Objetivos (Límites de Diseño v1)

Los **No-Objetivos** evitan que ECO se expanda sin control. No son descartes permanentes: solo límites conscientes para v1.

### ALACENA
- ❌ Sin escaneo de códigos de barras
- ❌ Sin recetas, sin menú semanal
- ❌ Sin sincronización con comercios

### MANTIA
- ❌ Sin recordatorios push
- ❌ Sin integración con calendarios externos
- ❌ Sin tareas dependientes ni automatizadas

### ECOSALUD
- ❌ Sin correlaciones avanzadas
- ❌ Sin dashboards complejos

### Lista de Compras
- ❌ Sin múltiples listas por hogar
- ❌ Sin compartir listas fuera del sistema

### Plataforma
- ❌ Sin multilenguaje
- ❌ Sin modelo multi-hogar colaborativo avanzado

---

## Enlaces relacionados

- **[Parte 2: Arquitectura y Modelo de Datos](parte-2-arquitectura-modelo.md)** (siguiente)
- **[Parte 3: Ejecución y Sprints](parte-3-ejecucion.md)**
- **[Contexto General](../01-vision/contexto-general.md)**

---

**Última actualización:** 2026-02-04
