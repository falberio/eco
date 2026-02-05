# ECO – 01 Contexto General

**Propósito:** Orientar rápidamente sobre qué es ECO, cómo está organizado y cuáles son sus límites.

## 1. Visión y Objetivo

### Visión
Construir un sistema personal/modular para gestionar vida doméstica con foco en registro, historial y simplicidad operativa.

### Principios
- **Descargar la mente:** Nada crítico reside solo en memoria
- **Registro antes que automatización:** Capturar primero, automatizar después
- **Historial primero:** Todo evento queda registrado
- **Asistencia progresiva:** El sistema ayuda más a medida que se usa
- **Modularidad clara:** Cada módulo tiene responsabilidad definida

## 2. Alcance y No-Objetivos (v1)

### Alcance v1
- Operación con un solo backend/API
- Modelo de datos único
- Foco mobile-first

### No-Objetivos (extracto)

**ALACENA:**
- ❌ Sin escaneo de códigos de barras
- ❌ Sin recetas/menú semanal
- ❌ Sin sincronización con comercios

**MANTIA:**
- ❌ Sin recordatorios push
- ❌ Sin integraciones de calendario
- ❌ Sin dependencias entre tareas

**ECOSALUD:**
- ❌ Sin correlaciones avanzadas
- ❌ Sin dashboards complejos

**Lista de Compras:**
- ❌ Sin múltiples listas por hogar
- ❌ Sin compartir listas fuera del sistema

**Plataforma:**
- ❌ Sin multilenguaje
- ❌ Sin multi-hogar colaborativo avanzado

## 3. Módulos y Transversales

### Módulos funcionales
- **ALACENA:** Gestión de despensa y cocina
- **MANTIA:** Inventario del hogar + tareas de mantenimiento
- **ECOSALUD:** Tracking de salud y bienestar
- **HUESHA:** Narrativa de vida, historia personal
- **FINANCIA:** Finanzas personales y presupuesto

### Transversales
- Lista de Compras
- Historial global

### Capa de soporte
- Usuarios, hogares, permisos (aislamiento por hogar)

## 4. Arquitectura (resumen ejecutivo)

- **Monolito modular** con una sola API y repositorio unificado (ADR-001)
- **Aislamiento por hogar** (ADR-002)
- **Autenticación básica** (ADR-003)
- **Periodicidad declarativa** en MANTIA (ADR-004)
- **Lista de Compras** como entidad transversal (ADR-005)

## 5. Estado del Proyecto

- **Sprint 0:** Extendido hasta 09/Feb/2026 con objetivos de marco del producto
- **Sprint 1 (10–23 Feb/2026):** MVP operable centrado en ALACENA, MANTIA, ECOSALUD (registro mínimo) y Lista

## 6. Dónde profundizar

- **ECO – 02:** Documentación Funcional y de Arquitectura (v1.0) → verdad funcional/técnica, modelo, ADRs, backlog
- **ECO – 03:** Libro de Sesiones → decisiones, acuerdos, pendientes

---

**Notas de uso:**
- Esta página cambia muy poco
- Si cambia la visión o límites, actualizar y referenciar el DF
- Toda definición concreta (entidades, historias, reglas) vive en ECO-02
