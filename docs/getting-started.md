# 🚀 Getting Started - Guía de Inicio

¡Bienvenido a ECO! Esta guía te ayudará a entender y usar el sistema según tu rol.

---

## ⏱️ Tu Primera Sesión (5 minutos)

**Objetivo:** Entender qué es ECO y qué puede hacer por ti.

1. **Lee el [Contexto General](01-contexto-general.md)** (2 min)
   - Visión: Sistema modular para gestión doméstica
   - Principios: Registro > Automatización, Historial primero
   - Límites: No es ERP, no es asistente IA completo

2. **Revisa los [Módulos en el Index](index.md#-modulos-funcionales)** (2 min)
   - ALACENA: Inventario doméstico
   - MANTIA: Tareas del hogar
   - ECOSALUD: Registro de salud
   - Lista de Compras: Transversal

3. **Explora el [Roadmap](04-planificacion/roadmap.md)** (1 min)
   - Sprint 0 (actual): Documentación
   - Sprint 1: MVP operable
   - Q1-Q2 2026: Expansión

---

## 👥 Guías por Rol

Selecciona tu rol para una guía personalizada:

=== "🏢 Product Manager / Stakeholder"

    ### Objetivo
    Entender visión, alcance, planificación y tomar decisiones estratégicas.

    ### Ruta Recomendada (30 minutos)

    **Paso 1: Contexto y Visión** (10 min)
    
    - ✅ [Contexto General](01-contexto-general.md) → Visión, principios, límites
    - ✅ [Documento Funcional - Sección 1](02-documento-funcional.md#principios-rectores) → Principios detallados
    
    !!! tip "Key Takeaway"
        ECO es **registro-first**. No competimos con apps sofisticadas, sino con **notas dispersas y memoria volátil**.

    **Paso 2: Planificación y Alcance** (12 min)
    
    - 📋 [Backlog Maestro](04-planificacion/backlog.md) → 5 épicas, 23 user stories
    - 🗓️ [Roadmap Q1-Q2 2026](04-planificacion/roadmap.md) → Sprints 0-3
    - 🎯 [Sprints - DoR/DoD](04-planificacion/sprints.md) → Definiciones de completitud
    
    !!! question "¿Qué revisar?"
        - ¿El alcance del Sprint 1 es realista?
        - ¿Las épicas están priorizadas correctamente?
        - ¿Faltan user stories críticas?

    **Paso 3: Decisiones Arquitecturales** (8 min)
    
    - 🏛️ [ADRs](05-arquitectura/adrs.md) → 8 decisiones clave (monolito, multi-tenancy, auth, etc.)
    - 📊 [Modelo de Datos](05-arquitectura/modelo-datos.md) → Entidades y relaciones
    
    !!! warning "ADR Críticas a Validar"
        - **ADR-001:** ¿Monolito modular es sostenible?
        - **ADR-002:** ¿Multi-tenancy por hogar es suficiente?
        - **ADR-006:** ¿Supabase free tier aguanta MVP?

    **Paso 4: Seguimiento** (continuo)
    
    - 📝 [Libro de Sesiones](03-libro-sesiones.md) → Minutas y decisiones de cada sesión
    - 📈 [Index - Estado del Proyecto](index.md#-estado-del-proyecto) → Sprint actual y progreso

    ---

    ### Preguntas Frecuentes (PM)

    ??? question "¿Cuándo estará listo el MVP?"
        **Sprint 1 cierra 23 Feb 2026**. Incluye ALACENA operable + autenticación + deploy.

    ??? question "¿Cuál es el ROI de este proyecto?"
        **Ahorro de tiempo**: 15-30 min/día en búsquedas, listas de compras, recordatorios.  
        **Valor psicológico**: Descarga mental, historial completo, toma de decisiones informada.

    ??? question "¿Cómo se prioriza el backlog?"
        **Criterios**:  
        1. Valor para usuario (descargar mente > automatizar)  
        2. Simplicidad implementación  
        3. Dependencias técnicas

=== "💻 Developer / Ingeniero"

    ### Objetivo
    Configurar entorno, entender arquitectura y hacer tu primer cambio.

    ### Ruta Recomendada (45 minutos)

    **Paso 1: Arquitectura y Stack** (15 min)
    
    - 🏗️ [Documento Funcional - Arquitectura](02-documento-funcional.md#arquitectura-general) → Stack y diagramas
    - 🏛️ [ADRs](05-arquitectura/adrs.md) → Decisiones técnicas (monolito, ORM, auth)
    - 📊 [Modelo de Datos](05-arquitectura/modelo-datos.md) → Schema Prisma + Mermaid ER
    - 🔧 [Inventario AS-IS](05-arquitectura/inventario-as-is.md) → URLs, secretos, endpoints
    
    !!! info "Stack Rápido"
        **Frontend:** Next.js 14 + React + Tailwind (Vercel)  
        **Backend:** Node.js + Express + Prisma (Fly.io)  
        **DB:** PostgreSQL (Supabase)  
        **Auth:** Supabase Auth  
        **Media:** Cloudinary

    **Paso 2: Setup Local** (15 min)
    
    ```bash
    # Clone repo
    git clone https://github.com/falberio/eco.git
    cd eco

    # Backend setup
    cd backend
    npm install
    cp .env.example .env
    # Edita .env con DATABASE_URL de Supabase
    npx prisma migrate dev
    npx prisma db seed
    npm run dev

    # Frontend setup (otra terminal)
    cd ../frontend/alacena-app
    npm install
    cp .env.local.example .env.local
    # Edita .env.local con NEXT_PUBLIC_API_URL
    npm run dev
    ```

    Ver detalles en [Procedimientos - Setup](05-arquitectura/procedimientos.md#setup-local).

    **Paso 3: Tu Primer Cambio** (15 min)
    
    1. **Lee el [Cheatsheet](07-cheatsheet.md)** → Comandos frecuentes
    2. **Escoge una tarea del [Backlog Sprint 1](04-planificacion/backlog.md#sprint-1)**
    3. **Crea branch:** `git checkout -b feature/ALACENA-XX-descripcion`
    4. **Implementa siguiendo [Procedimientos](05-arquitectura/procedimientos.md#workflow-desarrollo)**
    5. **Commit semántico:** `feat(alacena): descripción del cambio`

    !!! tip "Convenciones"
        - **Commits:** Conventional Commits (`feat:`, `fix:`, `docs:`)
        - **Branches:** `feature/`, `bugfix/`, `docs/`
        - **PRs:** Title = commit message, descripción = contexto + screenshots

    ---

    ### Preguntas Frecuentes (Dev)

    ??? question "¿Cómo debuggear el backend en Fly.io?"
        ```bash
        fly logs -a alacena-backend
        fly ssh console -a alacena-backend
        ```

    ??? question "¿Dónde está la documentación de la API?"
        **TO-DO:** Falta OpenAPI/Swagger. Por ahora revisa:  
        - `backend/src/routes/` → Express routes  
        - `backend/src/controllers/` → Controladores  
        - `backend/prisma/schema.prisma` → Modelo de datos

    ??? question "¿Cómo correr tests?"
        ```bash
        # Backend
        cd backend
        npm test

        # Frontend
        cd frontend/alacena-app
        npm test
        ```
        
        **Nota:** Suite de tests en construcción (Sprint 1).

=== "🎨 UX/UI Designer"

    ### Objetivo
    Entender flujos, patrones UX y sistema de diseño.

    ### Ruta Recomendada (30 minutos)

    **Paso 1: Visión y Principios** (10 min)
    
    - 📖 [Contexto General](01-contexto-general.md) → Entender visión de producto
    - 🧩 [Documento Funcional - Módulos](02-documento-funcional.md#modulos-funcionales) → ALACENA, MANTIA, ECOSALUD
    
    !!! info "Filosofía UX"
        1. **Mobile-first** pero web-ready (ADR-008)
        2. **Registro rápido** > Automatización compleja
        3. **Historial visible** > Dashboard sofisticado
        4. **Estados vacíos** informativos (guían al usuario)

    **Paso 2: Flujos y Patrones** (15 min)
    
    - 🎨 [UX & Navegación](06-ux-navegacion.md) → Flujos completos de cada módulo
    - 📱 Ver secciones:
        - Flujo ALACENA (captura rápida, movimientos, stock)
        - Flujo MANTIA (crear tarea, registrar ejecución, periodicidad)
        - Flujo Lista de Compras (agregar desde módulos, marcar comprado)
        - Estados vacíos y casos edge
    
    !!! example "Patrón Clave: Captura Rápida"
        Botón flotante (+) → Modal de captura → 3 campos mínimos → Guardar → Confirmación visual

    **Paso 3: Sistema de Diseño** (5 min)
    
    **Colores:**  
    - Primary: Amber (#FFA726) → Calidez, hogar  
    - Secondary: Green (#66BB6A) → Eco, sostenibilidad  
    - Accent: Blue (#42A5F5) → Acción, confianza  

    **Tipografía:** Inter (web), System fonts (mobile)  

    **Componentes:** Tailwind UI + shadcn/ui (Next.js)

    **Ver en producción:** [Frontend Demo](https://alacena-blush.vercel.app)

    ---

    ### Preguntas Frecuentes (UX)

    ??? question "¿Hay Figma/Sketch con mockups?"
        **No aún**. Prototipado directo en código (Tailwind + shadcn).  
        **Sprint 2:** Crear Figma con sistema de diseño documentado.

    ??? question "¿Cómo propongo cambios UX?"
        1. Abre issue en GitHub con mockup/wireframe  
        2. Discute en sesión (ver [Libro de Sesiones](03-libro-sesiones.md))  
        3. Implementa PR con cambios aprobados

    ??? question "¿Qué no debemos hacer (límites UX)?"
        - ❌ Gamificación intrusiva (puntos, badges)  
        - ❌ Notificaciones push agresivas  
        - ❌ Complejidad innecesaria (muchos pasos)  
        - ❌ Dark patterns (ocultar opciones importantes)

=== "🧪 QA / Tester"

    ### Objetivo
    Entender casos de uso, criterios de aceptación y plan de testing.

    ### Ruta Recomendada (35 minutos)

    **Paso 1: Casos de Uso** (15 min)
    
    - 📋 [Backlog Maestro](04-planificacion/backlog.md) → User stories con criterios de aceptación
    - 📘 [Documento Funcional - Módulos](02-documento-funcional.md#modulos-funcionales) → Flujos detallados
    
    !!! tip "Cada User Story tiene:"
        - **Criterios de Aceptación** → Checkboxes claros  
        - **DoD (Definition of Done)** → Ver [Sprints](04-planificacion/sprints.md#definition-of-done)

    **Paso 2: Configurar Ambiente de Testing** (10 min)
    
    ```bash
    # Frontend
    cd frontend/alacena-app
    npm install
    npm run dev
    # Abre http://localhost:3000

    # Backend API
    cd backend
    npm run dev
    # Endpoints: http://localhost:3001/api/
    ```

    **Credenciales de prueba:**  
    - Admin: `admin@alacena.com` / `admin123`  
    - User: `user@alacena.com` / `user123`

    **Paso 3: Plan de Testing** (10 min)
    
    Ver [Testing.md pendiente - TO-DO Sprint 1]
    
    !!! warning "Prioridades Testing Sprint 1"
        1. **Smoke tests:** Login, crear item, movimiento básico  
        2. **Regresión:** Autenticación, permisos por hogar  
        3. **Edge cases:** Stock negativo, fechas inválidas  
        4. **Mobile:** Responsive en Chrome DevTools

    ---

    ### Preguntas Frecuentes (QA)

    ??? question "¿Hay suite de tests automatizados?"
        **Parcial**. Backend tiene tests con Jest.  
        Frontend: TO-DO (Vitest + Testing Library).

    ??? question "¿Cómo reporto bugs?"
        GitHub Issues con template:  
        - **Título:** `[BUG] Descripción corta`  
        - **Pasos:** Reproducir paso a paso  
        - **Esperado vs Actual**  
        - **Screenshots** si aplica

    ??? question "¿Qué navegadores soportamos?"
        **Desktop:** Chrome, Firefox, Safari (últimas 2 versiones)  
        **Mobile:** Safari iOS 15+, Chrome Android 90+

---

## 📚 Recursos Adicionales

### Por Área de Interés

| Si quieres... | Lee esto |
|---------------|----------|
| Entender la visión | [Contexto General](01-contexto-general.md) |
| Ver la planificación | [Roadmap](04-planificacion/roadmap.md) |
| Configurar el proyecto | [Procedimientos](05-arquitectura/procedimientos.md) |
| Entender decisiones técnicas | [ADRs](05-arquitectura/adrs.md) |
| Ver el modelo de datos | [Modelo de Datos](05-arquitectura/modelo-datos.md) |
| Comandos rápidos | [Cheatsheet](07-cheatsheet.md) |

### Glosario de Términos

Si encuentras términos desconocidos, consulta el [Glosario](glosario.md).

---

## 🆘 ¿Necesitas Ayuda?

1. **Revisa el [FAQ](faq.md)** → Preguntas frecuentes
2. **Busca en la documentación** (Ctrl/Cmd + K)
3. **Abre un issue** en [GitHub](https://github.com/falberio/eco/issues)
4. **Consulta el [Libro de Sesiones](03-libro-sesiones.md)** → Decisiones pasadas

---

**🎯 Próximo paso:** Según tu rol, sigue la guía correspondiente arriba ☝️

**Última actualización:** 04 Febrero 2026
