# 📖 Glosario de Términos

Definiciones de términos técnicos y conceptos usados en la documentación de ECO.

---

## A

### ADR (Architecture Decision Record)
Documento que registra una decisión arquitectural importante con su contexto, opciones evaluadas y consecuencias.

**Ejemplo:** [ADR-001: Monolito modular](05-arquitectura/adrs.md#adr-001-monolito-modular-no-microservicios)

**Propósito:** Mantener historial de por qué se tomaron decisiones técnicas.

---

### Admin
Rol de usuario con permisos completos dentro de un hogar (household). Puede:
- Crear/editar/eliminar items
- Invitar/remover miembros
- Configurar el hogar
- Acceder a todas las funcionalidades

**Contraste:** Miembro (permisos limitados)

---

### ALACENA
Módulo de ECO para **gestión de inventario doméstico**. Permite registrar items, movimientos (compras, consumos) y mantener control de stock.

**Etimología:** Armario o mueble donde se guardan alimentos.

**Estado:** ✅ Activo (Sprint 1)

---

### API (Application Programming Interface)
Conjunto de endpoints HTTP que permiten al frontend comunicarse con el backend.

**Ejemplo:**
```
GET /api/items          → Listar items
POST /api/items         → Crear item
PUT /api/items/:id      → Actualizar item
DELETE /api/items/:id   → Eliminar item
```

**Tecnología:** Node.js + Express

---

### AS-IS
Estado actual del sistema (inventario de infraestructura, endpoints, configuraciones).

**Ver:** [Inventario AS-IS](05-arquitectura/inventario-as-is.md)

**Contraste:** TO-BE (estado objetivo futuro)

---

## B

### Backend
Capa del servidor que maneja lógica de negocio, acceso a base de datos y autenticación.

**Stack:** Node.js + Express + Prisma ORM

**Deploy:** Fly.io

**URL:** https://alacena-backend.fly.dev

---

### Backlog
Lista priorizada de funcionalidades (user stories, épicas, tareas) pendientes de implementar.

**Ver:** [Backlog Maestro](04-planificacion/backlog.md)

**Estructura:** Épicas → User Stories → Tareas

---

### Backfill
Proceso de importar datos históricos al sistema (ej: inventario existente, tareas pasadas).

**Ejemplo:** Importar CSV con 200 items que ya tienes en casa.

**Estado:** 📋 Planificado Sprint 2

---

### Breadcrumb
Navegación que muestra la ruta actual en la jerarquía de páginas.

**Ejemplo:** `Inicio > Arquitectura > ADRs > ADR-001`

**Propósito:** Orientación y navegación rápida hacia atrás.

---

## C

### Cloudinary
Servicio en la nube para gestión de imágenes y media (upload, transformación, CDN).

**Uso en ECO:** Almacenar fotos de items, QR codes, etc.

**Ver:** [ADR-007](05-arquitectura/adrs.md#adr-007-cloudinary-para-media)

---

### Cantidad
Atributo numérico de un item o movimiento que indica cuánto hay/se movió.

**Relacionado:** Unidad (kg, L, unidades)

**Ejemplo:** `cantidad: 2.5`, `unidad: kg` → "2.5 kilogramos"

---

## D

### Database (DB)
Base de datos relacional PostgreSQL donde se almacenan todos los datos de ECO.

**Proveedor:** Supabase

**ORM:** Prisma

**Schema:** Ver [Modelo de Datos](05-arquitectura/modelo-datos.md)

---

### Deploy
Proceso de publicar código en producción (frontend a Vercel, backend a Fly.io).

**Ver:** [Procedimientos - Deploy](05-arquitectura/procedimientos.md#deploy-a-produccion)

---

### DoD (Definition of Done)
Checklist de criterios que deben cumplirse para considerar una user story completa.

**Ejemplo:**
- ✅ Código implementado y testeado
- ✅ PR aprobado y merged
- ✅ Desplegado en producción
- ✅ Documentación actualizada

**Ver:** [Sprints - DoD](04-planificacion/sprints.md#definition-of-done)

---

### DoR (Definition of Ready)
Checklist de criterios que debe cumplir una user story antes de entrar a sprint.

**Ejemplo:**
- ✅ Criterios de aceptación claros
- ✅ Estimación realizada
- ✅ Dependencias identificadas
- ✅ Diseño/mockup disponible (si aplica)

**Ver:** [Sprints - DoR](04-planificacion/sprints.md#definition-of-ready)

---

## E

### ECO
**Nombre del sistema completo** de gestión doméstica modular.

**Módulos:** ALACENA, MANTIA, ECOSALUD, HUESHA, FINANCIA

**Filosofía:** Descargar la mente, registro-first, historial completo.

---

### ECOSALUD
Módulo planificado de ECO para **registro de salud y bienestar personal**.

**Funcionalidades previstas:**
- Registro de síntomas
- Medicamentos y dosis
- Historial médico
- Métricas (peso, presión, etc.)

**Estado:** 📋 Planificado Q2 2026

---

### Endpoint
URL específica de la API que realiza una acción (GET, POST, PUT, DELETE).

**Ejemplo:** `POST /api/items` → Crear nuevo item

**Documentación:** TO-DO (OpenAPI/Swagger pendiente Sprint 2)

---

### Épica
Agrupación de user stories relacionadas que representan una funcionalidad grande.

**Ejemplo:** EP-01: Inventario Básico (agrupa stories de crear item, editar, eliminar, listar)

**Ver:** [Backlog - Épicas](04-planificacion/backlog.md#epicas)

---

## F

### FINANCIA
Módulo planificado de ECO para **gestión financiera doméstica**.

**Funcionalidades previstas:**
- Registro de gastos
- Presupuestos por categoría
- Historial de transacciones

**Estado:** 💭 Futuro (Q2+ 2026)

---

### Fly.io
Plataforma de hosting para el backend de ECO.

**Características:** Containers, auto-scaling, edge network

**App:** `alacena-backend`

**URL:** https://alacena-backend.fly.dev

---

### Frasco (Jar)
Contenedor físico dentro de un estante donde se almacenan items.

**Atributos:** Código (JAR-001), capacidad, ubicación

**Uso:** Organización granular del inventario

**Ver:** [Modelo de Datos - Jar](05-arquitectura/modelo-datos.md#jar)

---

### Frontend
Capa de interfaz de usuario (UI) que corre en el navegador.

**Stack:** Next.js 14 + React + TypeScript + Tailwind

**Deploy:** Vercel

**URL:** https://alacena-blush.vercel.app

---

## G

### GitHub Pages
Servicio de GitHub para publicar sitios web estáticos (usado para esta documentación).

**URL:** https://falberio.github.io/eco/

**Tecnología:** MkDocs Material

---

## H

### Historial
Registro cronológico de eventos (movimientos, ejecuciones de tareas, cambios).

**Principio ECO:** "Historial primero" → Todo debe ser trazable.

**Ejemplo:** Ver todos los movimientos de un item desde su creación.

---

### Hogar (Household)
Unidad de aislamiento de datos en ECO. Cada hogar tiene sus propios items, usuarios y configuraciones.

**Multi-tenancy:** Varios hogares pueden coexistir en la misma instancia (aislados).

**Ver:** [ADR-002](05-arquitectura/adrs.md#adr-002-aislamiento-por-hogar)

---

### HUESHA
Módulo planificado de ECO para **gestión de espacios físicos del hogar**.

**Funcionalidades previstas:**
- Habitaciones y sus items
- Planos/layouts
- Organización espacial

**Estado:** 💭 Futuro (Q2+ 2026)

**Nota:** Nombre tentativo (puede cambiar)

---

## I

### Item
Entidad principal de ALACENA que representa un producto/insumo del inventario.

**Atributos clave:** Nombre, categoría, cantidad, unidad, ubicación, fechas

**Ejemplo:** "Arroz integral, 2kg, en Frasco-003"

**Ver:** [Modelo de Datos - Item](05-arquitectura/modelo-datos.md#item)

---

## J

### JSON (JavaScript Object Notation)
Formato de intercambio de datos entre frontend y backend.

**Ejemplo:**
```json
{
  "name": "Arroz integral",
  "quantity": 2.5,
  "unit": "KG"
}
```

---

## L

### Lista de Compras
Funcionalidad **transversal** que centraliza items a comprar desde todos los módulos.

**Fuentes:**
- ALACENA (stock bajo)
- MANTIA (insumos para tareas)
- ECOSALUD (medicamentos)
- Agregar manual

**Ver:** [ADR-005](05-arquitectura/adrs.md#adr-005-lista-de-compras-transversal)

---

## M

### MANTIA
Módulo de ECO para **gestión de tareas y mantenimiento del hogar**.

**Funcionalidades:**
- Tareas con periodicidad
- Registro de ejecuciones
- Historial de mantenimiento
- Contextos (habitación, electrodoméstico)

**Estado:** 📋 Planificado Sprint 2

**Etimología:** Derivado de "mantenimiento"

---

### Markdown
Lenguaje de marcado ligero usado para escribir esta documentación.

**Ejemplo:**
```markdown
# Título
**Negrita**, *cursiva*, [link](url)
```

**Renderizado:** MkDocs Material

---

### Miembro
Rol de usuario con permisos de lectura/escritura pero sin privilegios de admin.

**Puede:**
- Ver items, tareas, etc.
- Crear/editar movimientos
- Registrar ejecuciones

**NO puede:**
- Invitar/remover usuarios
- Cambiar configuraciones del hogar
- Eliminar datos críticos

---

### MkDocs Material
Framework para generar sitios de documentación desde archivos Markdown.

**Características:** Temas, búsqueda, navegación, responsive

**Ver:** [mkdocs.yml](https://github.com/falberio/eco/blob/main/mkdocs.yml)

---

### Monolito Modular
Arquitectura de software donde todo el código está en un solo repositorio/despliegue pero organizado en módulos independientes.

**Ver:** [ADR-001](05-arquitectura/adrs.md#adr-001-monolito-modular-no-microservicios)

**Contraste:** Microservicios distribuidos

---

### Movimiento (Movement)
Registro de cambio en el stock de un item (compra, consumo, ajuste, vencimiento).

**Atributos:** Tipo, cantidad, fecha, usuario, item relacionado

**Ejemplo:** `tipo: CONSUMO, cantidad: -0.5, item: Arroz`

**Ver:** [Modelo de Datos - Movement](05-arquitectura/modelo-datos.md#movement)

---

### Multi-tenancy
Capacidad de un sistema de servir a múltiples "tenants" (hogares) de forma aislada.

**Implementación ECO:** Por hogar (household_id en cada tabla)

**Ver:** [ADR-002](05-arquitectura/adrs.md#adr-002-aislamiento-por-hogar)

---

### MVP (Minimum Viable Product)
Versión mínima del producto con funcionalidad suficiente para ser usable.

**MVP ECO:** ALACENA operable + Auth + Multi-tenancy (Sprint 1)

**Objetivo:** Validar valor antes de expandir funcionalidades.

---

## N

### Next.js
Framework de React para aplicaciones web con server-side rendering (SSR).

**Versión:** 14

**Uso en ECO:** Frontend

**Features usadas:** App Router, Server Components, API Routes

---

## O

### ORM (Object-Relational Mapping)
Capa de abstracción que permite interactuar con la base de datos usando objetos en lugar de SQL.

**ORM en ECO:** Prisma

**Ejemplo:**
```javascript
await prisma.item.create({ data: { name: "Arroz" } })
```

---

## P

### Periodicidad
Atributo de tareas en MANTIA que indica cada cuánto deben ejecutarse.

**Tipos:**
- **Declarativa:** "Cada 7 días desde última ejecución"
- **Métrica:** "Cada 100 usos de cafetera"

**Ver:** [ADR-004](05-arquitectura/adrs.md#adr-004-periodicidad-declarativa-en-mantia)

---

### PostgreSQL
Sistema de gestión de bases de datos relacionales (RDBMS) usado en ECO.

**Proveedor:** Supabase

**Acceso:** Via Prisma ORM

---

### Prisma
ORM moderno para Node.js/TypeScript que facilita acceso a bases de datos.

**Features:** Type-safe, migrations, schema visual

**Ver:** [backend/prisma/schema.prisma](https://github.com/falberio/eco/blob/main/backend/prisma/schema.prisma)

---

### PWA (Progressive Web App)
Aplicación web que puede instalarse en el home screen y funcionar parcialmente offline.

**ECO:** Web-first con capacidad de PWA (TO-DO Sprint 3)

---

## Q

### QR Code
Código bidimensional que puede escanearse para identificar items/ubicaciones rápidamente.

**Uso en ECO:** Etiquetar frascos (JAR-001, JAR-002) para escaneo rápido.

**Estado:** 📋 Planificado Sprint 2

---

## R

### Roadmap
Planificación de alto nivel que muestra sprints, objetivos y fechas.

**Ver:** [Roadmap Q1-Q2 2026](04-planificacion/roadmap.md)

**Horizonte:** Próximos 6 meses (ajustable)

---

## S

### Schema (Prisma Schema)
Archivo `schema.prisma` que define modelos de datos, relaciones y configuración de base de datos.

**Ubicación:** `backend/prisma/schema.prisma`

**Genera:** Tipos TypeScript + Prisma Client + Migrations SQL

---

### Seed
Proceso de poblar la base de datos con datos iniciales (usuarios de prueba, items de ejemplo).

**Script:** `backend/prisma/seed.js`

**Uso:**
```bash
npx prisma db seed
```

---

### Sprint
Iteración de trabajo de duración fija (generalmente 2 semanas) con objetivos claros.

**Estructura ECO:**
- Sprint 0: Documentación (01-09 Feb)
- Sprint 1: MVP (10-23 Feb)
- Sprint 2: MANTIA (24 Feb - 09 Mar)

**Ver:** [Sprints](04-planificacion/sprints.md)

---

### Stock
Cantidad actual disponible de un item en el inventario.

**Cálculo:** Suma de todos los movimientos (compras - consumos - vencimientos + ajustes)

**Ejemplo:** +2kg (compra) -0.5kg (consumo) = 1.5kg stock

---

### Supabase
Plataforma Backend-as-a-Service (BaaS) que provee PostgreSQL + Auth + Storage.

**Uso en ECO:**
- Database (PostgreSQL)
- Auth (email/password)
- Backups automáticos

**Plan:** Free tier (500MB, 2GB transferencia/mes)

**Ver:** [ADR-006](05-arquitectura/adrs.md#adr-006-supabase-para-db-y-auth)

---

## T

### Tara
Peso del contenedor vacío (frasco, bolsa) que se resta para obtener peso neto del contenido.

**Ejemplo:**
- Frasco vacío: 200g (tara)
- Frasco con arroz: 2200g
- Arroz neto: 2000g

**Uso:** Precisión en mediciones de stock.

---

### TO-BE
Estado objetivo futuro del sistema (opuesto a AS-IS).

**Ejemplo:** "TO-BE: Sistema con QR codes en todos los frascos"

---

### TypeScript
Superset de JavaScript con tipado estático.

**Uso en ECO:** Frontend (Next.js) y Backend (parcialmente)

**Beneficios:** Menos bugs, mejor autocomplete, documentación implícita

---

## U

### Unidad
Medida de cantidad de un item (KG, L, unidades, gramos, etc.).

**Ver:** [Modelo de Datos - Unit enum](05-arquitectura/modelo-datos.md#unit)

**Ejemplos:** KG, LITERS, UNITS, GRAMS, ML

---

### User Story
Descripción de funcionalidad desde perspectiva del usuario.

**Formato:** "Como [rol], quiero [acción] para [beneficio]"

**Ejemplo:** "Como usuario, quiero agregar un item al inventario para mantener registro de lo que tengo"

**Ver:** [Backlog - User Stories](04-planificacion/backlog.md#user-stories)

---

## V

### Vercel
Plataforma de hosting para aplicaciones Next.js (frontend de ECO).

**Features:** Deploy automático desde Git, edge network, preview deploys

**App:** `alacena-blush`

**URL:** https://alacena-blush.vercel.app

---

## W

### Warmup
Proceso de "despertar" servicios que están pausados por inactividad.

**Contexto:** Supabase free tier pausa DB después de 7 días inactividad.

**Tiempo:** 2-3 segundos primer request después de warmup.

---

## Símbolos

### 🏗️ (Emoji de Construcción)
Indica trabajo en progreso, features no completadas o secciones bajo desarrollo.

### ✅ (Check verde)
Indica completado, activo o implementado.

### 📋 (Portapapeles)
Indica planificado, en backlog o pendiente de implementar.

### 💭 (Nube de pensamiento)
Indica idea futura, no priorizada o muy tentativa.

---

## Siglas Rápidas

| Sigla | Significado | Ver |
|-------|-------------|-----|
| **ADR** | Architecture Decision Record | [ADRs](05-arquitectura/adrs.md) |
| **API** | Application Programming Interface | [Glosario](#api-application-programming-interface) |
| **BaaS** | Backend-as-a-Service | [Glosario](#supabase) |
| **DB** | Database | [Glosario](#database-db) |
| **DoD** | Definition of Done | [Sprints](04-planificacion/sprints.md#definition-of-done) |
| **DoR** | Definition of Ready | [Sprints](04-planificacion/sprints.md#definition-of-ready) |
| **MVP** | Minimum Viable Product | [Glosario](#mvp-minimum-viable-product) |
| **ORM** | Object-Relational Mapping | [Glosario](#orm-object-relational-mapping) |
| **PWA** | Progressive Web App | [Glosario](#pwa-progressive-web-app) |
| **UI** | User Interface | - |
| **UX** | User Experience | [UX & Navegación](06-ux-navegacion.md) |

---

## 🔍 Buscar Términos

**Atajo:** `Ctrl` + `K` (Windows/Linux) o `Cmd` + `K` (Mac)

Usa la búsqueda de MkDocs para encontrar términos en toda la documentación.

---

**¿Falta un término?** Propón agregarlos en [GitHub Issues](https://github.com/falberio/eco/issues).

**Última actualización:** 04 Febrero 2026
