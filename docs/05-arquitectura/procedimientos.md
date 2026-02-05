# ⚙️ Procedimientos Operativos

**Última actualización:** 04 Febrero 2026

---

## 🎯 Propósito

Documentación de procesos operativos para deploy, backfill, migraciones y tareas recurrentes de ECO.

---

## 🚀 Deploy

### Frontend (Vercel)

**Deploy Automático:**
```bash
# Simplemente hacer push a main
git add .
git commit -m "feat: nueva funcionalidad"
git push origin main
```

Vercel detecta el push y deploy automáticamente.

**Deploy Manual (si es necesario):**
```bash
# Desde CLI de Vercel
vercel --prod
```

**Rollback:**
1. Ir a Vercel Dashboard
2. Deployments → Seleccionar deploy anterior
3. "Promote to Production"

---

### Backend (Fly.io)

**Pre-requisitos:**
- Tener flyctl instalado
- Estar autenticado: `fly auth login`

**Deploy Manual:**
```bash
cd backend
fly deploy
```

**Ver logs:**
```bash
fly logs
```

**Rollback:**
```bash
# Listar releases
fly releases

# Rollback a release anterior
fly releases rollback [release_number]
```

**Secrets (variables de entorno):**
```bash
# Setear secret
fly secrets set KEY=value

# Ver secrets
fly secrets list

# Eliminar secret
fly secrets unset KEY
```

---

### Base de Datos (Migraciones Prisma)

**Crear migración (desarrollo):**
```bash
cd backend
npx prisma migrate dev --name nombre_descriptivo
```

**Aplicar migraciones en producción:**
```bash
# Desde local con DATABASE_URL de prod
DATABASE_URL="postgresql://..." npx prisma migrate deploy

# O conectarse al backend y ejecutar
fly ssh console
npx prisma migrate deploy
```

**Verificar estado:**
```bash
npx prisma migrate status
```

**⚠️ Rollback de migración:**
```sql
-- Conectarse a la DB y ejecutar manualmente
-- NO hay comando automático en Prisma
```

---

## 📝 Backfill (Regularización)

### Propósito
Registrar decisiones o trabajos pasados sin frenar el avance.

### Procedimiento

1. **Detectar hecho pasado**
   - Deploy no documentado
   - Decisión técnica tomada
   - Configuración aplicada

2. **Decidir dónde vive:**
   - **Deploy/instalación** → [Inventario AS-IS](inventario-as-is.md)
   - **Decisión arquitectónica** → [ADRs](adrs.md)
   - **Trabajo futuro** → Issue en GitHub

3. **Registrar con fecha aproximada:**
   ```markdown
   **Fecha:** ~2025-11 o Noviembre 2025
   ```

4. **Si requiere acción:**
   - Crear issue en GitHub
   - Linkear desde documentación

5. **Si no requiere acción:**
   - Queda como histórico

### Plantilla de Backfill

```markdown
### Backfill: [Título]

**Fecha aproximada:** ~AAAA-MM
**Tipo:** [Deploy | Decisión | Configuración]
**Documentado en:** [Documento específico]

**Descripción:**
[Qué se hizo]

**Estado:**
- ✅ Registrado
- ⏳ Requiere documentación adicional
- 📋 Requiere issue

**Issue relacionado:** #XXX (si aplica)
```

---

## 🔄 Workflow de Desarrollo

### Crear Feature

1. **Crear branch:**
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

2. **Desarrollar:**
   - Escribir código
   - Actualizar documentación si cambia modelo/ADR
   - Probar localmente

3. **Commit con mensaje convencional:**
   ```bash
   feat: nueva funcionalidad
   fix: corrección de bug
   docs: actualización de documentación
   refactor: refactor de código
   test: agregar tests
   ```

4. **Push y crear PR:**
   ```bash
   git push origin feature/nombre-descriptivo
   ```

5. **Merge a main:**
   - Review (automática si sos solo vos)
   - Merge
   - Delete branch

---

## 📊 Sesiones de Trabajo

### Review Semanal (30 min)

**Cuándo:** Viernes tarde o Lunes temprano

**Agenda:**
1. Repasar lo completado en la semana
2. Verificar si el DF cambió (modelo, ADRs)
3. Actualizar [Libro de Sesiones](../03-libro-sesiones.md)
4. Actualizar estado en [Roadmap](../04-planificacion/roadmap.md)

**Output:**
- Minuta en Libro de Sesiones
- DF actualizado (si aplica)

---

### Planificación Semanal (30 min)

**Cuándo:** Lunes temprano

**Agenda:**
1. Revisar [Backlog](../04-planificacion/backlog.md)
2. Seleccionar 2-5 issues para la semana
3. Verificar capacidad realista
4. Actualizar estado de sprint

**Output:**
- Issues seleccionados y asignados
- Estimación de esfuerzo

---

### Retro Quincenal (20 min)

**Cuándo:** Cada dos viernes

**Agenda:**
1. ¿Qué funcionó bien?
2. ¿Qué podemos mejorar?
3. ¿Qué bloqueos encontramos?
4. Acciones concretas

**Formato:**
```markdown
### Retro [Fecha]

**Qué funcionó:**
- [Item 1]

**Qué mejorar:**
- [Item 1]

**Bloqueos:**
- [Bloqueo 1]

**Acciones:**
- [Acción 1]: [Responsable]
```

**Output:**
- Minuta agregada a [Libro de Sesiones](../03-libro-sesiones.md)
- Ajustes en procesos/ADRs si es necesario

---

### Sesiones Temáticas (variable)

#### Sesión de Modelo de Datos
**Frecuencia:** A demanda (cuando hay cambios significativos)
**Objetivo:** Revisar y validar cambios en el modelo

#### Sesión de UI/UX
**Frecuencia:** Mensual
**Objetivo:** Ajustes de navegación, estados vacíos, coherencia visual

#### Sesión de Arquitectura
**Frecuencia:** Quincenal
**Objetivo:** Revisar ADRs, dependencias, infraestructura

#### Sesión de Limpieza
**Frecuencia:** Quincenal
**Objetivo:** Refactor, cierre de issues, grooming de backlog

---

## 🧹 Mantenimiento

### Limpieza de Issues (Quincenal)

1. **Revisar issues abiertas:**
   - Cerrar completadas
   - Mover a backlog las que no son prioritarias
   - Actualizar prioridades

2. **Consolidar duplicados:**
   - Marcar como duplicado
   - Cerrar y linkear al original

3. **Limpiar stale:**
   - Issues sin actividad > 30 días
   - Decidir: cerrar o reactivar

---

### Actualización de Documentación (Continua)

**Triggers de actualización:**
- ✅ Cambio en modelo de datos → [Modelo de Datos](modelo-datos.md)
- ✅ Nueva ADR → [ADRs](adrs.md)
- ✅ Cambio de infraestructura → [Inventario AS-IS](inventario-as-is.md)
- ✅ Nueva feature deployada → [DF](../02-documento-funcional.md)
- ✅ Sesión completada → [Libro de Sesiones](../03-libro-sesiones.md)

**Checklist antes de mergear:**
- [ ] Modelo de datos actualizado (si aplica)
- [ ] ADR creado/actualizado (si aplica)
- [ ] DF actualizado (si cambia alcance funcional)
- [ ] Fecha de última modificación actualizada

---

## 🔍 Troubleshooting

### Frontend no se conecta al backend

**Síntomas:** Errores CORS, 404 en API calls

**Diagnóstico:**
```bash
# Verificar variable de entorno
echo $NEXT_PUBLIC_API_URL

# Verificar que backend esté up
curl https://alacena-backend.fly.dev/api/health
```

**Solución:**
1. Verificar `NEXT_PUBLIC_API_URL` en Vercel
2. Redeploy frontend si cambió

---

### Migraciones Prisma no se aplican

**Síntomas:** "Database is X migrations behind"

**Diagnóstico:**
```bash
npx prisma migrate status
```

**Solución:**
```bash
# Aplicar migraciones pendientes
npx prisma migrate deploy
```

---

### Deploy de Backend falla

**Síntomas:** Error en `fly deploy`

**Diagnóstico:**
```bash
fly logs
```

**Soluciones comunes:**
1. **OpenSSL error:** Verificar que base image sea Debian (no Alpine)
2. **DATABASE_URL error:** Verificar secrets
3. **Build error:** Verificar package.json y dependencias

---

## 📋 Checklists

### Checklist de Deploy Completo

- [ ] **Código:**
  - [ ] Tests pasando (cuando haya tests)
  - [ ] No errores de linting
  - [ ] Código reviewed

- [ ] **Base de Datos:**
  - [ ] Migraciones creadas
  - [ ] Migraciones aplicadas en prod
  - [ ] Data seeds si es necesario

- [ ] **Backend:**
  - [ ] Código mergeado a main
  - [ ] Secrets configurados
  - [ ] Deploy ejecutado
  - [ ] Health check OK

- [ ] **Frontend:**
  - [ ] Código mergeado a main
  - [ ] Variables de entorno configuradas
  - [ ] Deploy automático completado
  - [ ] Prueba en producción OK

- [ ] **Documentación:**
  - [ ] DF actualizado
  - [ ] ADRs actualizados
  - [ ] Minuta de sesión

---

### Checklist de Nueva Feature

- [ ] **Planificación:**
  - [ ] Historia de usuario clara
  - [ ] Criterios de aceptación definidos
  - [ ] Modelo de datos definido (si aplica)

- [ ] **Desarrollo:**
  - [ ] Código implementado
  - [ ] Estados vacíos considerados
  - [ ] Validaciones básicas
  - [ ] Probado en móvil

- [ ] **Deploy:**
  - [ ] Migraciones aplicadas
  - [ ] Backend deployado
  - [ ] Frontend deployado
  - [ ] Pruebas en producción

- [ ] **Documentación:**
  - [ ] DF actualizado
  - [ ] Modelo actualizado (si cambió)
  - [ ] Issue cerrado

---

## 🔗 Enlaces

- [Inventario AS-IS](inventario-as-is.md)
- [ADRs](adrs.md)
- [Modelo de Datos](modelo-datos.md)
- [Libro de Sesiones](../03-libro-sesiones.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Continua (agregar según necesidad)
