# ❓ Preguntas Frecuentes (FAQ)

Respuestas rápidas a las preguntas más comunes sobre ECO.

---

## 🎯 General / Visión

### ¿Qué es ECO?

ECO es un **sistema personal de gestión doméstica modular** diseñado para:

- **Descargar tu mente:** Nada crítico solo en memoria
- **Mantener historial:** Todo evento doméstico trazable
- **Asistir progresivamente:** El sistema aprende de tu uso

!!! tip "No es..."
    - ❌ Un ERP empresarial complejo
    - ❌ Un asistente IA completo (sin procesamiento lenguaje natural avanzado)
    - ❌ Una app de productividad genérica

### ¿Por qué "ECO"?

**ECO** representa:
- **Ecosistema doméstico** integrado
- **Ecológico** en términos de simplicidad y sostenibilidad
- Acrónimo de los módulos: **E**COSALUD, **C**asa (HUESHA), **O**rganización (MANTIA)

### ¿Es un proyecto open source?

**No actualmente**. Es un proyecto **personal documentado profesionalmente** para:
- Continuidad en caso de pausas
- Onboarding de colaboradores futuros si se requiere
- Referencia para otros proyectos similares

---

## 🧩 Módulos y Funcionalidad

### ¿Cuántos módulos tiene ECO?

**5 módulos planificados:**

| Módulo | Estado | Descripción |
|--------|--------|-------------|
| **ALACENA** | ✅ Activo | Inventario doméstico, stock y movimientos |
| **MANTIA** | 📋 Planificado | Tareas y mantenimiento del hogar |
| **ECOSALUD** | 📋 Planificado | Registro de salud y bienestar |
| **HUESHA** | 💭 Futuro | Gestión de espacios físicos |
| **FINANCIA** | 💭 Futuro | Gestión financiera doméstica |

**Transversal:** Lista de Compras (alimentada por todos los módulos)

### ¿Qué hace ALACENA exactamente?

**ALACENA** gestiona tu inventario doméstico:

- ✅ **Registro de items:** Alimentos, productos, insumos
- ✅ **Control de stock:** Cantidades, unidades, ubicaciones (estantes, frascos)
- ✅ **Movimientos:** Compras, consumos, ajustes, vencimientos
- ✅ **Historial completo:** Quién, qué, cuándo, cuánto
- ✅ **Categorización:** Por tipo, ubicación, fecha de vencimiento

**Ejemplo de uso:**
> "Compré 2kg de arroz → lo guardé en Frasco-003 → consumí 500g para una receta → sé que me quedan 1.5kg y cuándo lo compré"

### ¿MANTIA es como Todoist?

**No exactamente.** MANTIA se enfoca en **tareas del hogar con periodicidad y historial**:

| MANTIA | Todoist/Apps genéricas |
|--------|------------------------|
| ✅ Tareas con **historial de ejecuciones** | Marcar como hecho y olvidar |
| ✅ **Periodicidad inteligente** (cada X días desde última ejecución) | Repetición por fecha fija |
| ✅ Asociado a **contextos** (habitación, electrodoméstico) | Listas genéricas |
| ✅ **Métricas de mantenimiento** (frecuencia real vs planificada) | Sin análisis |

**Ejemplo:**
> "Cambiar filtro de cafetera cada 100 usos → registro cada vez que lo cambio → veo historial de cuándo y quién lo hizo → el sistema me avisa cuando se acerca"

### ¿Cómo funciona la Lista de Compras transversal?

La **Lista de Compras** se alimenta automáticamente desde otros módulos:

- **Desde ALACENA:** "Stock bajo de café" → Agrega a lista
- **Desde MANTIA:** "Necesito detergente para limpiar horno" → Agrega a lista
- **Desde ECOSALUD:** "Se acabaron las vitaminas" → Agrega a lista
- **Manual:** También puedes agregar items directamente

**Ventaja:** Una sola lista centralizada, no dispersa en cada módulo.

---

## 🏗️ Arquitectura y Tecnología

### ¿Qué stack tecnológico usa ECO?

**Frontend:**
- Next.js 14 + React + TypeScript
- Tailwind CSS + shadcn/ui
- Desplegado en **Vercel**

**Backend:**
- Node.js + Express + Prisma ORM
- PostgreSQL (Supabase)
- Desplegado en **Fly.io**

**Infraestructura:**
- **Auth:** Supabase Auth
- **Media:** Cloudinary
- **Docs:** MkDocs Material (GitHub Pages)

Ver detalles en [Inventario AS-IS](05-arquitectura/inventario-as-is.md).

### ¿Por qué no usar microservicios?

**ADR-001:** Monolito modular es suficiente para un proyecto personal/familiar.

**Razones:**
- ✅ Simplicidad de deploy y debug
- ✅ Menos overhead operacional
- ✅ Código modular pero en un solo repo
- ✅ Performance: menos latencia entre módulos

**Cuándo reconsiderar:** Si se escala a múltiples hogares con alta concurrencia (no es el objetivo).

### ¿Supabase free tier es suficiente?

**Para MVP y uso personal: SÍ.**

**Límites free tier Supabase:**
- 500 MB storage
- 2 GB transferencia/mes
- Pausa después de 7 días inactividad

**Mitigación:**
- Media (fotos) en Cloudinary (no en DB)
- Backend hace warmup automático
- Upgrade a Pro ($25/mes) si escala

Ver [ADR-006](05-arquitectura/adrs.md#adr-006-supabase-para-db-y-auth).

### ¿Hay app móvil nativa?

**No.** ECO es **web-first** con responsive mobile (ADR-008).

**Razones:**
- ✅ Desarrollo más rápido (un código para web + mobile)
- ✅ Sin dependencia de App Store/Play Store
- ✅ Actualizaciones instantáneas
- ✅ PWA permite instalación en home screen

**Cuándo reconsiderar:** Si se requieren features nativas (notificaciones push, cámara avanzada).

---

## 📅 Planificación y Roadmap

### ¿Cuándo estará listo el MVP?

**Sprint 1 cierra: 23 Febrero 2026**

**Alcance MVP:**
- ✅ ALACENA operable (crear items, movimientos, ver stock)
- ✅ Autenticación básica (email/password)
- ✅ Multi-tenancy por hogar
- ✅ Deploy en producción (Vercel + Fly.io)
- ✅ Documentación básica

Ver [Roadmap Sprint 1](04-planificacion/roadmap.md#sprint-1-mvp-operable).

### ¿Qué viene después del MVP?

**Q1 2026 (Post-Sprint 1):**
- Sprint 2: MANTIA básico (tareas con periodicidad)
- Sprint 3: Lista de Compras transversal

**Q2 2026:**
- ECOSALUD básico (registro de salud)
- Mejoras UX (búsqueda, filtros, gráficos)
- Testing end-to-end

Ver [Roadmap completo](04-planificacion/roadmap.md).

### ¿Cómo se priorizan las funcionalidades?

**Criterios de priorización:**

1. **Valor para usuario:** Descargar mente > Automatizar
2. **Simplicidad de implementación:** Quick wins primero
3. **Dependencias técnicas:** No bloquear sprints futuros
4. **Feedback de uso:** Ajustar según patrones reales

Ver [Backlog Maestro](04-planificacion/backlog.md#criterios-de-priorizacion).

---

## 🔧 Uso y Configuración

### ¿Cómo empiezo a usar ECO?

**Opción 1: Usar producción (más fácil)**

1. Abre [alacena-blush.vercel.app](https://alacena-blush.vercel.app)
2. Regístrate con email/password
3. Crea tu primer item en ALACENA
4. Registra un movimiento (compra, consumo)

**Opción 2: Setup local (desarrollo)**

Ver [Getting Started - Developer](getting-started.md#-developer-ingeniero).

### ¿Puedo usarlo con mi familia?

**SÍ.** ECO tiene **multi-tenancy por hogar**.

**Cómo:**
1. Un miembro crea el hogar (household)
2. Invita a otros miembros por email _(Sprint 2)_
3. Todos ven el mismo inventario/tareas
4. Cada acción registra quién la hizo

**Permisos:** Admin (dueño) vs. Miembro (lectura/escritura pero sin admin)

### ¿Cómo migro mis datos actuales?

**Sprint 1 (MVP):** No hay importación automática.

**Opciones:**
- ✅ **Manual:** Registra items uno por uno (recomendado para empezar)
- 📋 **Backfill script:** Script Python para importar CSV _(Sprint 2)_
- 📋 **API endpoint:** POST /bulk-import _(Sprint 3)_

**Consejo:** Empieza con items críticos (no es necesario migrar TODO desde día 1).

### ¿Puedo exportar mis datos?

**Sprint 1:** No implementado aún.

**Roadmap:**
- Sprint 2: Export a CSV/JSON (por módulo)
- Sprint 3: Backup completo (DB dump)

**Mientras tanto:** Todos los datos están en PostgreSQL (Supabase), acceso con `pg_dump`.

---

## 🔒 Privacidad y Seguridad

### ¿Mis datos están seguros?

**SÍ.** Medidas de seguridad:

- ✅ **Auth:** Supabase Auth (bcrypt hashing)
- ✅ **HTTPS:** Tráfico encriptado (Vercel + Fly.io)
- ✅ **Aislamiento:** Multi-tenancy (cada hogar ve solo sus datos)
- ✅ **Backups:** PostgreSQL backups automáticos (Supabase)

**NO hay:**
- ❌ Tracking de terceros (Google Analytics, Facebook Pixel)
- ❌ Venta de datos
- ❌ Acceso sin autenticación

### ¿Quién tiene acceso a mis datos?

**Solo tú y tu hogar.**

- **Admin del hogar:** Acceso completo
- **Miembros del hogar:** Acceso según permisos
- **Maintainer (Fran):** Solo para debug con consentimiento

**No hay acceso externo** (no compartimos con terceros).

### ¿Qué pasa si dejan el proyecto?

**Tranquilidad:**
- ✅ **Código:** GitHub repositorio privado (puedes hacer fork)
- ✅ **Datos:** Export a CSV/JSON (cuando esté implementado)
- ✅ **DB:** Puedes migrar PostgreSQL a otro host
- ✅ **Docs:** Esta documentación te permite continuar

**Objetivo:** No crear dependencia absoluta, eres dueño de tus datos.

---

## 🐛 Problemas y Troubleshooting

### El backend no responde (500 error)

**Causa común:** Supabase pausó la DB por inactividad (free tier).

**Solución:**
1. Abre [Supabase Dashboard](https://supabase.com/dashboard)
2. Restaura el proyecto (botón "Restore")
3. Espera 2-3 minutos
4. Vuelve a intentar

Ver [Troubleshooting](05-arquitectura/procedimientos.md#troubleshooting).

### No puedo hacer login

**Checklist:**
1. ✅ ¿Email y password correctos?
2. ✅ ¿Verificaste el email? (check spam)
3. ✅ ¿El backend está activo? (ver arriba)
4. ✅ ¿Console del navegador muestra errores?

**Si persiste:** Abre issue en [GitHub](https://github.com/falberio/eco/issues).

### La app está lenta

**Posibles causas:**
- **Supabase free tier:** Warmup después de inactividad (2-3 segundos primer request)
- **Fly.io:** Shared CPU puede ser lento en picos
- **Cloudinary:** Imágenes grandes sin optimizar

**Mitigación:**
- Sprint 2: Implementar cache (Redis)
- Sprint 3: Upgrade a Supabase Pro si escala

### ¿Cómo reporto un bug?

**GitHub Issues:**
1. Abre [nuevo issue](https://github.com/falberio/eco/issues/new)
2. Usa template `[BUG]`
3. Incluye:
   - Pasos para reproducir
   - Comportamiento esperado vs. actual
   - Screenshots si aplica
   - Browser/Device

**Respuesta:** Dentro de 48-72 horas.

---

## 📚 Documentación y Aprendizaje

### ¿Dónde está la documentación técnica?

**Diferentes niveles:**

| Nivel | Documento |
|-------|-----------|
| **Visión y contexto** | [Contexto General](01-contexto-general.md) |
| **Funcional y técnico** | [Documento Funcional](02-documento-funcional.md) |
| **Arquitectura** | [ADRs](05-arquitectura/adrs.md), [Modelo de Datos](05-arquitectura/modelo-datos.md) |
| **Planificación** | [Backlog](04-planificacion/backlog.md), [Roadmap](04-planificacion/roadmap.md) |
| **Procedimientos** | [Procedimientos](05-arquitectura/procedimientos.md) |
| **Quick reference** | [Cheatsheet](07-cheatsheet.md) |

### ¿Hay tutoriales en video?

**No aún.** Roadmap:
- Sprint 2: Video demo de ALACENA (5 min)
- Sprint 3: Walkthrough completo (15 min)

### ¿Cómo busco en la documentación?

**Atajo:** `Ctrl` + `K` (Windows/Linux) o `Cmd` + `K` (Mac)

Abre la búsqueda rápida de MkDocs.

---

## 🤝 Contribución y Comunidad

### ¿Puedo contribuir al proyecto?

**Por ahora: No activamente** (proyecto personal).

**Pero puedes:**
- ✅ Reportar bugs (GitHub Issues)
- ✅ Sugerir features (GitHub Discussions)
- ✅ Compartir feedback de uso

**Futuro:** Si el proyecto crece, se abrirá a contribuciones externas.

### ¿Hay roadmap público?

**SÍ:** [Roadmap Q1-Q2 2026](04-planificacion/roadmap.md)

Se actualiza cada sprint con decisiones tomadas.

### ¿Cómo me entero de novedades?

**Canales:**
- 📢 **Announcement bar** en esta documentación (arriba)
- 📝 **Libro de Sesiones:** [Minutas](03-libro-sesiones.md)
- 🐙 **GitHub Releases:** (cuando se implemente versioning)

---

## 💡 Casos de Uso y Mejores Prácticas

### ¿Para quién es ECO?

**Ideal para:**
- 🏠 **Individuos/familias** que quieren organizar su hogar
- 🧠 **Personas que olvidan cosas** (dónde guardé X, cuándo compré Y)
- 📊 **Data-driven people** que quieren historial y métricas
- 🌱 **Minimalistas** que prefieren simplicidad sobre muchas features

**NO ideal para:**
- 🏢 Negocios (no es ERP)
- 👥 Comunidades grandes (multi-tenancy limitado)
- 🤖 Personas que quieren IA avanzada desde día 1

### ¿Cuánto tiempo lleva configurar ECO inicialmente?

**Primera sesión:** 10-15 minutos
- Registro (2 min)
- Crear hogar (1 min)
- Agregar primeros 5-10 items (7-12 min)

**Uso continuo:** 2-5 minutos/día
- Registrar movimientos (consumos, compras)
- Revisar lista de compras
- Marcar tareas completadas _(cuando MANTIA esté activo)_

### ¿Qué estrategia recomiendan para empezar?

**Enfoque:** **Incremental, no big bang**

1. **Semana 1:** Solo ALACENA
   - Registra items críticos (café, arroz, detergente)
   - Anota movimientos según uses
   
2. **Semana 2:** Expande inventario
   - Agrega más items según los vas usando
   - Prueba categorías y ubicaciones
   
3. **Semana 3+:** Optimiza
   - Revisa qué funciona y qué no
   - Ajusta proceso según tu rutina

**NO intentes:** Migrar todo tu inventario desde día 1 (abrumador).

---

## 🔮 Futuro y Visión

### ¿Habrá versión móvil nativa?

**No en roadmap Q1-Q2 2026.**

**Razón:** Web responsive es suficiente para MVP.

**Reconsiderar:** Solo si se requieren features nativas específicas (ej: escaneo de códigos de barras avanzado, notificaciones push críticas).

### ¿Agregarán integración con X servicio?

**Evaluamos caso por caso.**

**Integraciones potenciales:**
- 📧 Email (notificaciones programadas)
- 📱 WhatsApp (alertas de stock bajo)
- 🛒 Supermercados online (importar compras)

**Criterio:** Debe agregar valor real sin complicar la UX.

### ¿El nombre "ALACENA" se mantendrá?

**Posiblemente cambie.**

- **ALACENA:** Módulo de inventario (definitivo)
- **ECO:** Sistema completo (definitivo)
- **Subdominio actual:** `alacena-blush.vercel.app` → Podría ser `eco.app` o `eco-home.app` en futuro

---

## ❓ Más Preguntas

**¿Tu pregunta no está aquí?**

1. Busca en la documentación (`Ctrl/Cmd + K`)
2. Revisa el [Glosario](glosario.md) (términos técnicos)
3. Consulta [Libro de Sesiones](03-libro-sesiones.md) (decisiones pasadas)
4. Abre un [issue en GitHub](https://github.com/falberio/eco/issues)

---

**Última actualización:** 04 Febrero 2026  
**Contribuciones:** ¿Falta una pregunta importante? Propónla en GitHub Issues.
