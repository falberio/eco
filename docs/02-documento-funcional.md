# ECO – 02 Documento Funcional y de Arquitectura (v1.0)

**Última actualización:** 04 Febrero 2026  
**Estado:** ✅ Alineado con sistema deployado  
**Repo:** [falberio/eco](https://github.com/falberio/eco) _(nombre pendiente de actualización)_

---

> **Fuente de verdad del proyecto ECO.** Alineado con el estado actual del proyecto ya deployado, con repo activo en GitHub y base de datos existente. Este documento guía su evolución, priorizando claridad, trazabilidad, ritmo sostenido y decisiones conscientes.

---

## 📋 1. Propósito del Documento

Este Documento Funcional y de Arquitectura (DF) define:

- ✅ Qué es ECO y qué no es (No-Objetivos)
- ✅ Cómo se estructura funcionalmente
- ✅ Cómo se organiza su arquitectura
- ✅ Qué decisiones ya fueron tomadas (ADRs)
- ✅ Cómo se planifica el trabajo (ceremonias, sesiones, ritmo)
- ✅ Cómo se traduce el MVP operativo al backlog y la ejecución

**El DF acompaña al repositorio existente, no lo reemplaza.**  
Cualquier diferencia entre código y documento debe resolverse **actualizando el DF**.

---

## 🎯 2. Principios Rectores

### 2.1 Principios Funcionales

| Principio | Descripción |
|-----------|-------------|
| **Descargar la mente** | Nada crítico reside solo en memoria |
| **Registro antes que automatización** | Capturar primero, asistir después |
| **Historial primero** | Todo evento debe ser trazable |
| **Asistencia progresiva** | El sistema aprende de lo registrado |
| **Modularidad clara** | Separación de responsabilidades |

### 2.2 Principios Técnicos

| Principio | Implementación |
|-----------|----------------|
| **Un solo backend** | Confirmado por repo actual |
| **Modelo de datos único** | Extensible por módulos |
| **Mobile-first real** | PWA antes que apps nativas |
| **Decisiones reversibles** | ADRs documentados, cambios conscientes |
| **Infraestructura simple** | Servicios gestionados, sin DevOps complejo |

### 2.3 No-Objetivos (límites de diseño v1)

Los No-Objetivos evitan que ECO se expanda sin control. No son descartes permanentes: **solo límites conscientes para ahora**.

#### ALACENA
- ❌ No escaneo de códigos de barras
- ❌ No recetas, no menú semanal
- ❌ No sincronización con comercios

#### MANTIA
- ❌ No recordatorios push
- ❌ No integración con calendarios externos
- ❌ No tareas dependientes ni automatizadas

#### ECOSALUD
- ❌ No correlaciones avanzadas
- ❌ No dashboards complejos

#### Lista de Compras
- ❌ No múltiples listas por hogar
- ❌ No compartir listas fuera del sistema

#### Plataforma
- ❌ No multilenguaje
- ❌ No modelo multi-hogar colaborativo avanzado

---

## 🏗️ 3. Arquitectura General de ECO

ECO está construido alrededor de:

1. **Módulos funcionales:** ALACENA, MANTIA, ECOSALUD, HUESHA, FINANCIA
2. **Elementos transversales:** Lista de Compras, Historial global
3. **Capa de soporte:** Usuarios, hogares, permisos

**Confirmado:** Una sola API, un repositorio unificado.

### Diagrama Conceptual

```
┌─────────────────────────────────────────────────┐
│              FRONTEND (Next.js)                 │
│   ALACENA | MANTIA | ECOSALUD | Lista | Config  │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│           BACKEND API (Node/Express)            │
│  ┌──────────────────────────────────────────┐   │
│  │  Módulos: ALACENA | MANTIA | ECOSALUD    │   │
│  ├──────────────────────────────────────────┤   │
│  │  Transversal: Lista | Historial          │   │
│  ├──────────────────────────────────────────┤   │
│  │  Soporte: Auth | Hogares | Permisos      │   │
│  └──────────────────────────────────────────┘   │
└────────────────────┬────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────┐
│       DATABASE (PostgreSQL / Supabase)          │
└─────────────────────────────────────────────────┘
```

---

## 🗄️ 4. Modelo de Datos (alineado al repo actual)

> **IMPORTANTE:** Este modelo se actualiza en base a la DB existente. Las entidades listadas reflejan lo que ECO ya implementa y las extensiones necesarias para Sprint 1.

### 4.1 Capa de Soporte

#### Usuario
```prisma
model User {
  id            String
  email         String    @unique
  password_hash String
  created_at    DateTime
  updated_at    DateTime
}
```

#### Hogar
```prisma
model Household {
  id         String
  nombre     String
  created_at DateTime
}
```

#### UsuarioHogar
```prisma
model UserHousehold {
  user_id      String
  household_id String
  role         String  // "owner" | "member"
}
```

### 4.2 ALACENA

#### ItemAlacena
```prisma
model PantryItem {
  id           String
  household_id String
  nombre       String
  categoria    String?
  stock_actual Float
  unidad       String
  notas        String?
  created_at   DateTime
  updated_at   DateTime
}
```

#### MovimientoAlacena
```prisma
model PantryMovement {
  id         String
  item_id    String
  tipo       String   // "ingreso" | "consumo" | "ajuste"
  cantidad   Float
  fecha      DateTime
  user_id    String
  notas      String?
}
```

### 4.3 MANTIA

#### Tarea
```prisma
model Task {
  id              String
  household_id    String
  titulo          String
  descripcion     String?
  categoria       String?
  periodicidad    String?   // "diaria" | "semanal" | "mensual" | null
  estado          String    // "activa" | "pausada" | "completada"
  proxima_sugerida DateTime?
  created_at      DateTime
  updated_at      DateTime
}
```

#### Ejecución
```prisma
model TaskExecution {
  id       String
  task_id  String
  fecha    DateTime
  user_id  String
  notas    String?
}
```

### 4.4 Lista de Compras

#### ListaItem
```prisma
model ShoppingListItem {
  id            String
  household_id  String
  nombre        String
  cantidad      Float?
  unidad        String?
  origen        String    // "manual" | "alacena" | "mantia"
  origen_ref_id String?   // ID del item de origen
  estado        String    // "pendiente" | "comprado"
  created_at    DateTime
}
```

### 4.5 ECOSALUD (modelo mínimo v1)

#### RegistroSalud
```prisma
model HealthRecord {
  id           String
  household_id String
  user_id      String
  tipo         String    // "peso" | "presion" | "glucosa" | "nota"
  valor        String    // JSON flexible
  fecha        DateTime
  notas        String?
}
```

---

## 📜 5. ADRs – Decisiones de Arquitectura (v1)

> Registros livianos de decisiones estructurales. Ver detalles completos en [ADRs](05-arquitectura/adrs.md)

### ADR-001 – Un solo backend monolítico modular
- **Estado:** ✅ Aceptada
- **Decisión:** Monolito modular en lugar de microservicios
- **Razón:** Simplicidad operativa, menor overhead, proyecto personal

### ADR-002 – Aislamiento por hogar
- **Estado:** ✅ Aceptada
- **Decisión:** Multi-tenancy básico a nivel de hogar
- **Razón:** Soportar uso familiar sin complejidad empresarial

### ADR-003 – Autenticación básica
- **Estado:** ✅ Aceptada
- **Decisión:** Email/password con Supabase Auth
- **Razón:** Suficiente para v1, escalable si se necesita

### ADR-004 – Periodicidad declarativa en MANTIA
- **Estado:** ✅ Aceptada
- **Decisión:** Tareas con atributo `periodicidad` sin cron jobs
- **Razón:** Simplicidad, cálculo on-demand de próximas fechas

### ADR-005 – Lista de Compras como entidad transversal
- **Estado:** ✅ Aceptada
- **Decisión:** Una lista por hogar, poblada desde múltiples módulos
- **Razón:** Centralizar necesidades, evitar duplicación

---

## ⚙️ 6. Módulos Funcionales (v1)

### 🏺 ALACENA – Gestión de Inventario

**Objetivo:** Registrar y controlar stock de alimentos/productos del hogar

**Funcionalidades v1:**
- ✅ Alta/edición/baja de items
- ✅ Registro de movimientos (ingreso/consumo/ajuste)
- ✅ Vista de stock actual
- ✅ Categorización básica
- ⏳ Sistema de taras para frascos (implementado)

**Funcionalidades futuras:**
- 📋 Control de vencimientos
- 📊 Reportes de consumo
- 🔔 Alertas de stock mínimo

### 📋 MANTIA – Tareas y Mantenimiento

**Objetivo:** Gestionar tareas del hogar con historial de ejecuciones

**Funcionalidades v1:**
- ✅ Alta/edición de tareas
- ✅ Marcar como hecha (registra ejecución)
- ✅ Vista de pendientes y vencidas
- ✅ Periodicidad declarativa
- ⏳ Cálculo de próxima fecha sugerida

**Funcionalidades futuras:**
- 📊 Estadísticas de cumplimiento
- 👥 Asignación de responsables
- 📅 Vista de calendario

### 💊 ECOSALUD – Registro de Salud

**Objetivo:** Registro mínimo de datos de salud y bienestar

**Funcionalidades v1:**
- ⏳ Registro manual básico (peso, presión, notas)
- ⏳ Histórico cronológico

**Funcionalidades futuras:**
- 📊 Gráficos de tendencias
- 🔔 Recordatorios de medicación
- 📋 Registro de síntomas

### 🛒 Lista de Compras (Transversal)

**Objetivo:** Centralizar necesidades de compra de todos los módulos

**Funcionalidades v1:**
- ⏳ Alta manual de items
- ⏳ Alta desde ALACENA (stock bajo)
- ⏳ Marcar como comprado
- ⏳ Vista por categorías

---

## 🔄 7. Estrategia Ágil y Pautas de Trabajo

ECO es un proyecto personal **pero tratado como un producto profesional**. Las ceremonias se adaptan a un "equipo de uno", manteniendo disciplina.

### 7.1 Ritmo de Trabajo

- 📅 **Sesión semanal fija** (review + planificación de 30 min)
- 💻 **Sesión técnica opcional** dos veces por semana
- 📝 **Registro continuo** de avances en GitHub
- 🔄 **Retro quincenal**: qué funcionó / qué ajustar

### 7.2 Ceremonias

#### Review Semanal
- Repasar lo que se hizo
- Confirmar si el DF cambia
- Actualizar estado en [Libro de Sesiones](03-libro-sesiones.md)

#### Planificación Semanal
- Elegir 2-5 issues para avanzar
- Verificar capacidad real
- Actualizar [Roadmap](04-planificacion/roadmap.md)

#### Retro Quincenal
- Ajustar hábitos, flujo y decisiones
- Identificar bloqueos
- Actualizar ADRs si es necesario

#### Sesiones Temáticas (a demanda)
- 🗄️ Modelo de datos
- 🎨 UI/UX
- 🏗️ Arquitectura
- 🧹 Limpieza de issues

### 7.3 Rutina Semanal Detallada

| Día | Actividad | Duración |
|-----|-----------|----------|
| **Lunes** | Revisión del DF + planificación de issues de la semana | 30 min |
| **Miércoles** | Sesión técnica breve (bloqueos o definiciones) | 30 min |
| **Viernes** | Mini-review + registro de aprendizajes | 20 min |

---

## 📅 8. Sprint 0 – Estado Final (29 Ene → 09 Feb 2026)

**Objetivo:** Dejar el marco del producto sólido para Sprint 1

**Fecha de cierre:** 09/Feb/2026

### Entregables Confirmados
- ✅ Definición funcional de módulos
- ✅ Modelo de datos revisado según repo
- ✅ ADRs v1
- ⏳ Backlog maestro preparado
- ✅ Repositorio deployado y operativo
- ⏳ Documentación consolidada en Markdown
- ⏳ MkDocs configurado para docs web

### Sesiones Sprint 0
- **04/Feb** (200 min): Estructura documental ← **AHORA**
- **05/Feb** (200 min): Consolidación técnica
- **06/Feb** (200 min): Plan de proyecto final

---

## 🚀 9. Sprint 1 – MVP Operable (10 Feb → 23 Feb 2026)

### 9.1 Objetivo

Que ECO pueda ser usado **por vos mismo** de forma real y diaria.

### 9.2 Alcance Funcional

#### ALACENA
- ✅ Alta, edición, baja de items
- ✅ Consumo manual
- ✅ Vista de stock
- ✅ Sistema de taras (ya implementado)

#### MANTIA
- ⏳ Alta, edición de tareas
- ⏳ Marcar hecha
- ⏳ Registrar ejecución
- ⏳ Vista pendientes y vencidas

#### ECOSALUD
- ⏳ Registro manual mínimo

#### Lista de Compras
- ⏳ Alta manual
- ⏳ Alta desde ALACENA
- ⏳ Marcar comprado

### 9.3 Alcance Técnico

- ✅ API unificada (existente)
- ⏳ DB extendida según tareas
- ⏳ Logs estructurados simples
- ⏳ Estados vacíos
- ⏳ Validaciones básicas

### 9.4 Criterio de Éxito del Sprint

- 📊 ≥ 20 registros reales en la semana
- ✅ No romper flujo de uso
- 📅 Usarlo 7 días consecutivos

---

## 📚 10. Backlog de Sprint 1 (versión resumida)

> Ver detalles completos en [Backlog Maestro](04-planificacion/backlog.md)

### EP-01: Base ECO
- Hogar y usuarios base
- Autenticación básica
- Navegación principal

### EP-02: ALACENA MVP
- CRUD items
- Movimientos
- Vista stock
- ✅ Sistema de taras (completado)

### EP-03: MANTIA MVP
- CRUD tareas
- Ejecuciones
- Vista pendientes

### EP-04: Lista de Compras
- CRUD items lista
- Integración con ALACENA
- Marcar comprado

---

## ✅ 11. Definition of Ready & Definition of Done

### 11.1 Definition of Ready (DoR)

Una historia está lista si:

- ✅ Tiene objetivo claro
- ✅ Criterios de aceptación testables
- ✅ Impacto en datos definido
- ✅ Flujo feliz escrito

### 11.2 Definition of Done (DoD)

Está hecha si:

- ✅ Mergeado a main
- ✅ Migraciones aplicadas (si hay cambios en DB)
- ✅ Log básico funcionando
- ✅ Probado desde móvil
- ✅ Deployado a producción

---

## 📖 12. Glosario

| Término | Definición |
|---------|------------|
| **Hogar** | Ámbito aislado de datos (multi-tenancy básico) |
| **Tarea** | Unidad persistente de MANTIA |
| **Ejecución** | Evento histórico de realización de tarea |
| **Item de Alacena** | Recurso del hogar (alimento/producto) |
| **Lista Item** | Elemento comprable en Lista de Compras |
| **DF** | Documento Funcional (este documento) |
| **ADR** | Architecture Decision Record |

---

## 🔗 13. Enlaces de Referencia

- [Contexto General](01-contexto-general.md)
- [Libro de Sesiones](03-libro-sesiones.md)
- [Backlog Maestro](04-planificacion/backlog.md)
- [Roadmap](04-planificacion/roadmap.md)
- [ADRs Técnicos](05-arquitectura/adrs.md)
- [Modelo de Datos](05-arquitectura/modelo-datos.md)
- [UX & Navegación](06-ux-navegacion.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Post Sprint 1 (24 Feb 2026)

> Este documento evoluciona con cada sprint y **refleja siempre la verdad del código**.
