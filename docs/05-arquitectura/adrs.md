# 📜 ADRs – Architecture Decision Records

**Última actualización:** 04 Febrero 2026

---

## 🎯 Propósito

Registro de decisiones arquitectónicas del proyecto ECO. Cada ADR documenta una decisión técnica significativa, su contexto, alternativas consideradas y consecuencias.

---

## 📋 Índice de ADRs

| ID | Título | Estado | Fecha |
|----|--------|--------|-------|
| [ADR-001](#adr-001-monolito-modular) | Monolito modular (no microservicios) | ✅ Aceptada | Nov 2025 |
| [ADR-002](#adr-002-aislamiento-por-hogar) | Aislamiento por hogar | ✅ Aceptada | Nov 2025 |
| [ADR-003](#adr-003-autenticacion-basica) | Autenticación básica | ✅ Aceptada | Nov 2025 |
| [ADR-004](#adr-004-periodicidad-declarativa) | Periodicidad declarativa en MANTIA | ✅ Aceptada | Dic 2025 |
| [ADR-005](#adr-005-lista-transversal) | Lista de Compras transversal | ✅ Aceptada | Dic 2025 |
| [ADR-006](#adr-006-supabase-db-auth) | Supabase para DB + Auth | ✅ Aceptada | Nov 2025 |
| [ADR-007](#adr-007-cloudinary-media) | Cloudinary para media | ✅ Aceptada | Nov 2025 |
| [ADR-008](#adr-008-web-before-mobile) | Web antes que mobile nativo | ✅ Aceptada | Dic 2025 |

---

## ADR-001: Monolito Modular

**Estado:** ✅ Aceptada  
**Fecha:** Noviembre 2025  
**Autores:** Fran Alberio

### Contexto

ECO necesita una arquitectura que permita:
- Desarrollo rápido con una sola persona
- Despliegue simple sin complejidad de DevOps
- Separación clara de responsabilidades (módulos)
- Posibilidad de extraer microservicios a futuro

### Decisión

**Construir un monolito modular** con una sola API y repositorio, organizado internamente por módulos funcionales (ALACENA, MANTIA, etc.).

**Stack:**
- Backend: Node.js + Express
- ORM: Prisma
- DB: PostgreSQL (Supabase)

**Organización:**
```
backend/
  src/
    modules/
      alacena/
      mantia/
      ecosalud/
    shared/
    app.js
```

### Consecuencias

**Positivas:**
- ✅ Despliegue simple (un solo servicio)
- ✅ Desarrollo rápido sin overhead de comunicación entre servicios
- ✅ Base de datos compartida (transacciones ACID)
- ✅ Menor costo de infraestructura
- ✅ Un solo repositorio (monorepo)

**Negativas:**
- ⚠️ Acoplamiento potencial entre módulos (requiere disciplina)
- ⚠️ Escala vertical limitada (no crítico para uso personal)
- ⚠️ Deploy all-or-nothing (no deploy independiente por módulo)

### Alternativas Consideradas

**1. Microservicios desde el inicio**
- ❌ Descartado: Overhead operativo muy alto para MVP
- ❌ Complejidad de comunicación entre servicios
- ❌ Costos de infraestructura multiplicados

**2. Serverless (funciones separadas)**
- ❌ Descartado: Cold starts problemáticos
- ❌ Mayor complejidad de estados compartidos
- ❌ Lock-in con proveedor cloud

### Notas de Implementación

- Mantener módulos con **dependencias claras y unidireccionales**
- Usar **eventos internos** para comunicación entre módulos
- Preparar código para **posible extracción futura** (interfaces bien definidas)

---

## ADR-002: Aislamiento por Hogar

**Estado:** ✅ Aceptada  
**Fecha:** Noviembre 2025  
**Autores:** Fran Alberio

### Contexto

ECO necesita soportar uso familiar con **datos completamente aislados por hogar**. Cada hogar debe ser independiente y no ver datos de otros hogares.

### Decisión

Implementar **multi-tenancy a nivel de hogar** con:
- Tabla `Household` (hogar)
- Tabla `UserHousehold` (relación usuario-hogar)
- **Filtro automático** en todas las queries por `household_id`

**Esquema:**
```prisma
model Household {
  id   String @id
  name String
}

model UserHousehold {
  user_id      String
  household_id String
  role         String  // "owner" | "member"
}
```

Todas las entidades de módulos tienen `household_id` obligatorio.

### Consecuencias

**Positivas:**
- ✅ Aislamiento total de datos por hogar
- ✅ Soporte para uso familiar sin complejidad
- ✅ Base de datos compartida (eficiencia)
- ✅ Escalabilidad horizontal simple (sharding futuro por hogar)

**Negativas:**
- ⚠️ Requiere disciplina en queries (siempre filtrar por household_id)
- ⚠️ Riesgo de **data leakage** si se olvida el filtro
- ⚠️ Migraciones más complejas (todas las tablas tienen household_id)

### Alternativas Consideradas

**1. Base de datos separada por hogar**
- ❌ Overhead operativo enorme
- ❌ Costos multiplicados
- ❌ Migraciones complejas

**2. Un solo usuario por instancia**
- ❌ Limita uso familiar
- ❌ No permite compartir datos en el futuro

### Mitigación de Riesgos

- **Middleware automático** que inyecta `household_id` en contexto
- **Tests de aislamiento** con dos hogares de prueba
- **Revisión de code** antes de merge (checklist: ¿filtra por household?)

---

## ADR-003: Autenticación Básica

**Estado:** ✅ Aceptada  
**Fecha:** Noviembre 2025  
**Autores:** Fran Alberio

### Contexto

ECO necesita autenticación simple para:
- Identificar usuarios
- Asociarlos a hogares
- Proteger datos

No requiere (v1):
- OAuth/Social login
- 2FA
- Gestión compleja de permisos

### Decisión

Usar **Supabase Auth** con:
- Email + password
- JWT tokens
- Sesiones gestionadas por Supabase

**Implementación:**
- Frontend: NextAuth.js integrado con Supabase
- Backend: Validación de JWT en middleware

### Consecuencias

**Positivas:**
- ✅ Implementación rápida (servicios gestionados)
- ✅ Sin gestión de passwords (hashing, salt, etc.)
- ✅ Escalable a OAuth si se necesita
- ✅ Gratis hasta tier generoso

**Negativas:**
- ⚠️ Dependencia de Supabase (mitigable con alternativas)
- ⚠️ No 2FA (no crítico para MVP)

### Alternativas Consideradas

**1. Auth propio (Passport.js)**
- ❌ Overhead de mantener seguridad
- ❌ Responsabilidad de bugs de seguridad

**2. Auth0 / Clerk**
- ❌ Costos más altos
- ❌ Más features de las necesarias (overkill)

---

## ADR-004: Periodicidad Declarativa

**Estado:** ✅ Aceptada  
**Fecha:** Diciembre 2025  
**Autores:** Fran Alberio

### Contexto

MANTIA necesita soportar tareas periódicas (diarias, semanales, mensuales) sin:
- Cron jobs complejos
- Generación automática de instancias
- Overhead operativo

### Decisión

**Periodicidad declarativa** con cálculo on-demand:
- Campo `periodicidad` en `Task` (diaria|semanal|mensual|null)
- Campo `proxima_sugerida` calculado tras cada ejecución
- **No generación automática** de tareas futuras

**Flujo:**
1. Usuario marca tarea como hecha
2. Sistema registra ejecución
3. Sistema calcula `proxima_sugerida` basado en `periodicidad`
4. Vista "Pendientes" muestra tareas con `proxima_sugerida` pasada

### Consecuencias

**Positivas:**
- ✅ Simplicidad: sin cron jobs ni workers
- ✅ Flexibilidad: usuario puede saltearse ejecuciones
- ✅ Historial real (solo se registra lo ejecutado)

**Negativas:**
- ⚠️ No recordatorios automáticos (feature futura)
- ⚠️ Requiere que usuario abra la app para ver pendientes

### Alternativas Consideradas

**1. Cron jobs que generan instancias**
- ❌ Complejidad operativa
- ❌ Genera ruido (tareas no ejecutadas)

**2. Recordatorios push**
- ❌ Fuera de alcance v1 (No-Objetivo declarado)

---

## ADR-005: Lista Transversal

**Estado:** ✅ Aceptada  
**Fecha:** Diciembre 2025  
**Autores:** Fran Alberio

### Contexto

Múltiples módulos necesitan agregar items a una lista de compras:
- ALACENA (stock bajo)
- MANTIA (insumos para tarea)
- Manual por usuario

### Decisión

**Lista de Compras como entidad transversal** con:
- Una sola lista por hogar
- Campo `origen` (manual|alacena|mantia)
- Campo `origen_ref_id` (referencia al item original)

**Modelo:**
```prisma
model ShoppingListItem {
  id            String
  household_id  String
  nombre        String
  cantidad      Float?
  unidad        String?
  origen        String
  origen_ref_id String?
  estado        String  // pendiente|comprado
}
```

### Consecuencias

**Positivas:**
- ✅ Centralización de necesidades
- ✅ Trazabilidad de origen
- ✅ Simplicidad (una sola lista)

**Negativas:**
- ⚠️ No múltiples listas (limitación v1 consciente)
- ⚠️ No compartir fuera del hogar (limitación v1)

### Alternativas Consideradas

**1. Listas múltiples por hogar**
- ❌ Complejidad innecesaria para MVP
- ❌ UX más confusa

**2. Listas separadas por módulo**
- ❌ Usuario debe consultar múltiples lugares
- ❌ Duplicación de items

---

## ADR-006: Supabase para DB + Auth

**Estado:** ✅ Aceptada  
**Fecha:** Noviembre 2025  
**Autores:** Fran Alberio

### Contexto

ECO necesita base de datos PostgreSQL y autenticación sin gestión de infraestructura.

### Decisión

Usar **Supabase** para:
- PostgreSQL gestionado
- Autenticación (ver ADR-003)
- Backups automáticos
- UI de admin

### Consecuencias

**Positivas:**
- ✅ Gratis hasta tier generoso
- ✅ Postgresql completo (no limitaciones)
- ✅ Backups automáticos
- ✅ Migraciones con Prisma funcionan perfectamente

**Negativas:**
- ⚠️ Vendor lock-in mitigable (Postgres estándar)

---

## ADR-007: Cloudinary para Media

**Estado:** ✅ Aceptada  
**Fecha:** Noviembre 2025

### Decisión

Usar **Cloudinary** para almacenamiento de imágenes (items de ALACENA).

### Consecuencias

**Positivas:**
- ✅ Gratis hasta tier generoso
- ✅ Optimización automática de imágenes
- ✅ CDN incluido

---

## ADR-008: Web antes que Mobile Nativo

**Estado:** ✅ Aceptada  
**Fecha:** Diciembre 2025

### Decisión

Priorizar **PWA web mobile-first** antes que app nativa.

### Consecuencias

**Positivas:**
- ✅ Un solo codebase
- ✅ Deploy instantáneo (sin stores)
- ✅ Menor complejidad

**Negativas:**
- ⚠️ Limitaciones de PWA vs nativo (notificaciones, offline)

---

## 📝 Plantilla para Nuevas ADRs

```markdown
## ADR-XXX: [Título]

**Estado:** 📋 Propuesta | ✅ Aceptada | ❌ Rechazada | 🗄️ Obsoleta
**Fecha:** [Mes AAAA]
**Autores:** [Nombre]

### Contexto
[Situación que motiva la decisión]

### Decisión
[Qué se decidió hacer]

### Consecuencias

**Positivas:**
- ✅ [Pro 1]
- ✅ [Pro 2]

**Negativas:**
- ⚠️ [Contra 1]
- ⚠️ [Contra 2]

### Alternativas Consideradas

**1. [Alternativa 1]**
- ❌ [Por qué se descartó]

**2. [Alternativa 2]**
- ❌ [Por qué se descartó]

### Notas de Implementación
[Detalles técnicos relevantes]
```

---

## 🔗 Enlaces

- [Documento Funcional](../02-documento-funcional.md)
- [Inventario AS-IS](inventario-as-is.md)
- [Modelo de Datos](modelo-datos.md)
- [Libro de Sesiones](../03-libro-sesiones.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Quincenal (próxima: 18 Feb 2026)
