# 🌱 ECO Platform - Documento Fundacional

> **Plataforma modular para gestión integral de vida cotidiana**

**Versión:** 1.0  
**Fecha:** 25 de enero de 2026  
**Estado:** MVP en producción (Alacena), expansión en curso

---

## 📜 Visión

**ECO es una plataforma que unifica la gestión de diferentes aspectos de la vida cotidiana en un ecosistema integrado y personalizado.**

En lugar de tener múltiples aplicaciones desconectadas para finanzas, salud, alacena, etc., ECO ofrece:
- **Módulos especializados** para cada área de vida
- **Código compartido** para funcionalidades comunes
- **Diseño coherente** con identidad visual por módulo
- **Datos integrados** que permiten insights cross-domain

---

## 🎯 Misión

Crear herramientas digitales que:
1. **Simplifiquen** tareas complejas de gestión personal
2. **Conecten** datos de diferentes áreas para mejor toma de decisiones
3. **Escalen** con las necesidades del usuario sin multiplicar complejidad
4. **Eduquen** en buenas prácticas de organización y planificación

---

## 🧩 Módulos de la Plataforma

### 🧺 Alacena - Gestión de Despensa
**Estado:** ✅ Producción (v0.3.0)  
**URL:** https://alacena-frontend.vercel.app

**Problema que resuelve:**
- ❌ No saber qué ingredientes tengo en casa
- ❌ Comprar de más o de menos
- ❌ Vencimientos y desperdicios
- ❌ Falta de visibilidad del stock

**Solución:**
- ✅ Control de stock en tiempo real
- ✅ Ubicaciones físicas con códigos QR
- ✅ Sistema de taras para pesos netos
- ✅ Reservas para planificación de comidas
- ✅ Menú de viandas con ingredientes

**Usuarios objetivo:**
- Personas que cocinan en casa regularmente
- Familias que necesitan optimizar compras
- Meal preppers y planificadores

**Funcionalidades clave:**
1. **Items:** CRUD de ingredientes con stock min/max
2. **Ubicaciones:** Frascos, estantes, códigos QR
3. **Batches:** Control de lotes con vencimientos
4. **Reservas:** Pre-asignar ingredientes a recetas
5. **Menú:** Planificación de viandas semanales

**Métricas de éxito:**
- 129+ items catalogados
- 45+ ubicaciones mapeadas
- 0 desperdicios por olvido de vencimientos
- Tiempo de planificación reducido 50%

---

### 💰 Mantia - Gestión Financiera
**Estado:** 🏗️ En desarrollo (Sprint 2026-01-W04)  
**Lanzamiento estimado:** Febrero 2026

**Problema que resuelve:**
- ❌ Descontrol de gastos mensuales
- ❌ No saber a dónde va el dinero
- ❌ Falta de presupuestos claros
- ❌ Múltiples cuentas sin visión consolidada

**Solución:**
- ✅ Tracking de transacciones por categoría
- ✅ Presupuestos mensuales con alertas
- ✅ Múltiples cuentas en un solo lugar
- ✅ Reportes y visualizaciones
- ✅ Integración con bancos (futuro)

**Usuarios objetivo:**
- Personas que quieren control financiero
- Freelancers con ingresos variables
- Parejas que comparten gastos

**Funcionalidades planificadas:**
1. **Cuentas:** Banco, efectivo, tarjetas
2. **Transacciones:** Ingresos, gastos, transferencias
3. **Presupuestos:** Límites por categoría
4. **Categorías:** Personalizables por usuario
5. **Reportes:** Gastos por mes, categoría, tendencias

**Diferenciador vs apps existentes:**
- 🔗 Integración con otros módulos ECO (ej: gastos de supermercado ↔ stock alacena)
- 🎨 Personalización completa
- 🔐 Datos propios, no vendor lock-in

---

### 🏥 Salud - Tracking de Bienestar
**Estado:** ❄️ Planificado (Q2 2026)

**Problema que resuelve:**
- ❌ No registrar peso, medidas, ejercicio
- ❌ Olvidar medicamentos
- ❌ No ver progreso hacia objetivos

**Solución:**
- ✅ Registro de mediciones (peso, presión, etc.)
- ✅ Tracking de hábitos (ejercicio, agua, sueño)
- ✅ Recordatorios de medicamentos
- ✅ Objetivos con seguimiento

**Integración con ECO:**
- Relación entre gastos de gimnasio (Mantia) y asistencias
- Relación entre compras de alimentos (Alacena) y peso/salud

---

### 📊 Financia - Inversiones y Patrimonio
**Estado:** ❄️ Planificado (Q3 2026)

**Problema que resuelve:**
- ❌ No tener visión de patrimonio neto
- ❌ Inversiones dispersas sin seguimiento
- ❌ No planificar a largo plazo

**Solución:**
- ✅ Tracking de inversiones (acciones, crypto, fondos)
- ✅ Cálculo de patrimonio neto
- ✅ Proyecciones financieras
- ✅ Objetivos de ahorro

**Diferencia con Mantia:**
- **Mantia:** Día a día, flujo de caja, presupuestos
- **Financia:** Largo plazo, patrimonio, inversiones

---

### 🎯 Huesha - [Por Definir]
**Estado:** ❄️ Concepto inicial

Ideas:
- Gestión de proyectos personales
- Tracking de objetivos de vida
- Gestión del tiempo / productividad
- Otro dominio identificado por usuario

---

## 🏗️ Arquitectura Técnica

### Principios Fundacionales

1. **Modularidad con Compartición Inteligente**
   - Cada módulo es independiente en features
   - Código común (auth, UI, types) se comparte
   - Refactoring fácil entre shared ↔ module

2. **Single Source of Truth**
   - Una base de datos PostgreSQL
   - Types generados automáticamente desde Prisma
   - Validaciones Zod compartidas backend ↔ frontend

3. **Developer Experience Primero**
   - Hot reload en shared code
   - Type safety end-to-end
   - Documentación como código
   - Metodología ágil con sprints

4. **Deploy Simplificado**
   - Backend: Monolito modular en Fly.io
   - Frontend: Apps separadas en Vercel
   - Una DB, un backend, múltiples frontends

### Stack Tecnológico

**Frontend:**
- Next.js 15.5.9 (App Router)
- React 18
- TailwindCSS
- TypeScript
- npm Workspaces

**Backend:**
- Node.js 20
- Express
- Prisma ORM 5.22.0
- Zod validations
- JWT auth

**Database:**
- PostgreSQL 15
- Prefijos por módulo (Mantia_, Salud_)

**Hosting:**
- Frontend: Vercel (auto-deploy)
- Backend: Fly.io (Docker)
- DB: Fly.io Postgres

---

## 🎨 Diseño e Identidad

### Sistema de Theming

Cada módulo tiene:
- **Color primario** distintivo
- **Logo/icono** único
- **Nombre** memorable

**Colores actuales:**
- 🧺 **Alacena:** Verde (#22c55e) - Natural, frescura
- 💰 **Mantia:** Azul (#3b82f6) - Confianza, profesional
- 🏥 **Salud:** Rojo (#ef4444) - Vitalidad, energía (tentativo)

### Componentes Compartidos

UI consistente a través de:
- `DashboardLayout` con sidebar y header
- `PaginationControls` estándar
- Buttons, inputs, modals (futuro design system)
- Tipografía y spacing del `baseTheme`

---

## 👥 Usuarios y Casos de Uso

### Persona 1: María, 32 años, Freelancer
**Módulos que usa:** Alacena, Mantia

**Flujo de uso:**
1. **Domingo:** Planifica menú semanal en Alacena, crea lista de compras
2. **Lunes:** Hace compras, registra gastos en Mantia
3. **Martes:** Ingresa ingredientes en Alacena con ubicaciones
4. **Miércoles:** Verifica presupuesto en Mantia, ajusta gastos
5. **Viernes:** Reserva ingredientes para cena especial
6. **Fin de mes:** Revisa gastos totales, ve cuánto gastó en comida

**Beneficio:** Control financiero + sin desperdicios = ahorro 20-30%

---

### Persona 2: Juan, 28 años, Fitness Enthusiast
**Módulos que usa:** Salud, Financia (futuro)

**Flujo de uso:**
1. Registra peso diario, medidas semanales
2. Trackea entrenamientos y consumo de agua
3. Ve inversión en gimnasio vs asistencias reales
4. Planifica objetivos de peso para 6 meses

**Beneficio:** Datos centralizados, progreso visible, accountability

---

### Persona 3: Familia González (4 personas)
**Módulos que usa:** Alacena, Mantia, Salud

**Flujo de uso:**
1. **Padres:** Gestionan stock de alacena, planifican comidas familiares
2. **Todos:** Registran gastos en cuenta compartida
3. **Hijos:** Tracking de tareas y objetivos (Huesha futuro)

**Beneficio:** Organización familiar, transparencia financiera, menos caos

---

## 📈 Roadmap

### Q1 2026 (Enero - Marzo)
- [x] Alacena v1.0 en producción
- [x] Sistema de documentación profesional
- [ ] Mantia MVP (cuentas, transacciones, presupuestos)
- [ ] API Reference completa
- [ ] Tests unitarios en shared code

### Q2 2026 (Abril - Junio)
- [ ] Módulo Salud MVP
- [ ] Integración Mantia ↔ Alacena (gastos supermercado)
- [ ] Mobile app (React Native / PWA)
- [ ] Export de datos (CSV, JSON)

### Q3 2026 (Julio - Septiembre)
- [ ] Módulo Financia MVP
- [ ] Dashboard consolidado (vista de todos los módulos)
- [ ] Integraciones bancarias (Mantia)
- [ ] Notificaciones push

### Q4 2026 (Octubre - Diciembre)
- [ ] Módulo Huesha (por definir alcance)
- [ ] Machine learning para insights (gastos, vencimientos)
- [ ] Beta pública (usuarios externos)
- [ ] Documentación para developers externos

---

## 💡 Innovaciones Clave

### 1. Cross-Module Insights
**Ejemplo:**
```
Gastaste $15,000 en supermercado (Mantia)
↓
Compraste 50kg de ingredientes (Alacena)
↓
Cocinaste 60 viandas (Alacena)
↓
Costo por vianda: $250
↓
Ahorro vs delivery: 60% ($9,000/mes)
```

### 2. Type Generation Automática
Backend → Prisma → Frontend types en un comando:
```bash
cd backend && npm run generate:types
```

Sincronización backend ↔ frontend sin esfuerzo manual.

### 3. Metodología Ágil Built-in
Documentación y gestión de proyecto como parte del código:
- Sprints semanales
- Backlog priorizado (MoSCoW)
- Sesiones auto-documentadas
- CHANGELOG automático

### 4. Onboarding de 1 Día
Nuevo developer puede:
- Día 1: Setup completo, primer commit
- Día 2-3: Entender arquitectura
- Día 4-5: Completar primera feature

---

## 🎓 Aprendizajes y Filosofía

### Principios de Desarrollo

1. **Documentar como si mañana sumaras a alguien**
   - ONBOARDING.md detallado
   - API Reference completa
   - Arquitectura clara

2. **Automatizar lo repetitivo**
   - Type generation
   - Deploy automático
   - Cierre de sesión con docs

3. **Priorizar con criterio**
   - MoSCoW (Must/Should/Could/Won't)
   - Story points realistas
   - Sprints con Definition of Done

4. **Iterar rápido, validar temprano**
   - MVP primero, pulir después
   - Feedback de usuarios reales
   - Mejora continua

### Lecciones del Camino (v0.1 → v0.3)

**✅ Qué funcionó bien:**
- Shared code desde el inicio (evitó duplicación)
- Paginación implementada temprano (escalabilidad)
- Type generation (sincronización backend/frontend)
- Sistema de theming (fácil agregar módulos)

**❌ Qué mejorar:**
- Tests automatizados (solo manuales por ahora)
- Error monitoring (Sentry o similar)
- Performance optimization (N+1 queries, caching)
- Mobile experience (responsive ok, app nativa mejor)

---

## 🤝 Contribuir a ECO

### Para Developers

1. Lee [docs/ONBOARDING.md](./docs/ONBOARDING.md)
2. Toma issue del [BACKLOG.md](./docs/BACKLOG.md)
3. Sigue [PROJECT_MANAGEMENT.md](./docs/PROJECT_MANAGEMENT.md)
4. Haz PR siguiendo convenciones

### Para Usuarios

1. Reporta bugs en GitHub Issues
2. Sugiere features (serán priorizadas)
3. Comparte feedback de uso real
4. Beta testing de nuevos módulos

---

## 📊 Métricas de Éxito (2026)

**Técnicas:**
- [ ] 5 módulos en producción
- [ ] 95%+ test coverage
- [ ] < 100ms response time (p95)
- [ ] 99.9% uptime

**Producto:**
- [ ] 100+ usuarios activos
- [ ] 10,000+ transacciones registradas (Mantia)
- [ ] 1,000+ items catalogados (Alacena)
- [ ] 4.5+ rating de usuarios

**Equipo:**
- [ ] 2-3 developers contribuyendo
- [ ] 1 sprint/semana sostenible
- [ ] Documentación al día
- [ ] Onboarding < 1 día para nuevos

---

## 🔮 Visión a 3 Años (2029)

**ECO Platform como:**

1. **Suite Completa de Vida**
   - 8+ módulos integrados
   - Mobile app nativa
   - Desktop apps (Electron)
   - Integraciones con servicios externos

2. **Comunidad de Desarrolladores**
   - Módulos creados por terceros
   - Marketplace de plugins
   - API pública documentada
   - SDK para integraciones

3. **Negocio Sostenible**
   - Freemium model (básico gratis, premium pago)
   - Self-hosted option para privacy
   - Enterprise edition para familias/equipos
   - Ingresos recurrentes

4. **Impacto Social**
   - Reducción de desperdicios (Alacena)
   - Educación financiera (Mantia)
   - Mejora de salud (Salud)
   - Código abierto para aprender

---

## 📞 Contacto

**Proyecto:** ECO Platform  
**Fundador:** [Tu Nombre]  
**Email:** [email@ejemplo.com]  
**GitHub:** https://github.com/usuario/eco  
**Website:** https://alacena-frontend.vercel.app (Alacena MVP)

---

## 📄 Licencia

[Por definir - Opciones:]
- MIT (open source total)
- Dual license (open core + premium)
- Proprietary (cerrado)

---

## 🙏 Agradecimientos

- **Copilot AI:** Pair programming en cada sesión
- **Comunidad Next.js:** Framework increíble
- **Prisma Team:** ORM que hace desarrollo un placer
- **Fly.io & Vercel:** Hosting simple y potente

---

## 📚 Apéndice: Referencias

### Documentación Técnica
- [architecture/OVERVIEW.md](./docs/architecture/OVERVIEW.md)
- [API_REFERENCE.md](./docs/API_REFERENCE.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)

### Gestión
- [PROJECT_MANAGEMENT.md](./docs/PROJECT_MANAGEMENT.md)
- [BACKLOG.md](./docs/BACKLOG.md)
- [CHANGELOG.md](./docs/CHANGELOG.md)

### Histórico
- [sessions/](./docs/sesiones/) - Todas las sesiones de trabajo
- [sprints/](./docs/sprints/) - Planificación de sprints

---

**Versión 1.0 del Documento Fundacional**  
*Creado: 25 de enero de 2026*  
*Próxima revisión: Q2 2026 (post-lanzamiento Mantia)*

---

> "ECO no es solo una app, es un ecosistema para vivir mejor organizado."

🌱
