# 📝 Sesión: [Título Descriptivo]

> **Fecha:** YYYY-MM-DD  
> **Hora Inicio:** HH:MM  
> **Hora Fin:** HH:MM  
> **Duración:** X horas  
> **Sprint:** [YYYY-MM-WNN o "Sin sprint asignado"]

---

## 🎯 Objetivos de la Sesión

1. [Objetivo específico 1]
2. [Objetivo específico 2]
3. [Objetivo específico 3]

---

## 📋 Tareas Abordadas

### Completadas ✅
- [x] **[MUST-XXX]** Título de tarea
  - Archivos modificados: `path/file.ts`, `path/file2.tsx`
  - Tiempo: XX minutos
  - Notas: [Detalles importantes]

- [x] **[SHOULD-YYY]** Otra tarea
  - ...

### En Progreso 🏃
- [ ] **[MUST-ZZZ]** Tarea iniciada pero no terminada
  - Progreso: 60%
  - Bloqueado por: [Razón]
  - Siguiente paso: [Acción a tomar]

### No Abordadas ⏸️
- [ ] **[COULD-AAA]** Tarea planificada pero pospuesta
  - Razón: [Por qué no se hizo]

---

## 🔧 Cambios Realizados

### Backend

#### Archivos Modificados
- `backend/src/path/file.js`
  - **Cambio:** [Descripción del cambio]
  - **Razón:** [Por qué se hizo]
  
- `backend/package.json`
  - **Cambio:** Agregado script `generate:types`
  - **Razón:** Automatizar generación de tipos

#### Archivos Creados
- `backend/prisma/generate-types.js`
  - **Propósito:** [Para qué sirve]

### Frontend

#### Archivos Modificados
- `frontend/alacena-app/app/page.tsx`
  - **Cambio:** [Descripción]
  - **Razón:** [Por qué]

#### Archivos Creados
- `frontend/shared/hooks/usePagination.ts`
  - **Propósito:** Hook para manejo de estado de paginación

### Documentación

- `docs/CHANGELOG.md` - Actualizado con versión vX.X.X
- `docs/BACKLOG.md` - Marcadas tareas completadas
- `docs/sprints/YYYY-MM-WNN.md` - Actualizado progreso

---

## 💻 Comandos Ejecutados

```bash
# Backend
cd backend
npm install --save-dev @types/node typescript
npm run generate:types

# Frontend
cd frontend/alacena-app
rm -rf .next
npm run dev

# Git
git add -A
git commit -m "feat: descripción del cambio"
git push origin main
```

---

## 🐛 Errores Encontrados

### [BUG-XXX] Título del Bug
- **Descripción:** [Qué pasó]
- **Reproducción:** [Pasos para reproducir]
- **Causa:** [Razón del error]
- **Solución:** [Cómo se resolvió]
- **Archivos afectados:** `path/file.ts`
- **Estado:** ✅ Resuelto / 🏃 En investigación / 🚫 Bloqueado

### [BUG-YYY] Otro Error
...

---

## 🧪 Tests Realizados

### Manuales
- [ ] Login con usuario de prueba → ✅ OK
- [ ] Crear nuevo item → ✅ OK
- [ ] Paginación en items → ✅ OK
- [ ] Deploy a producción → ⏸️ Pendiente

### Automáticos
- [ ] Tests unitarios → N/A (no implementados aún)
- [ ] Tests E2E → N/A

---

## 📦 Deployments

### Backend
- **Servicio:** Fly.io
- **URL:** https://[app].fly.dev
- **Commit:** [hash]
- **Estado:** ✅ Deployed / ⏸️ No deployed
- **Notas:** [Detalles]

### Frontend
- **Servicio:** Vercel
- **URL:** https://[app].vercel.app
- **Commit:** [hash]
- **Estado:** ✅ Deployed / ⏸️ No deployed
- **Notas:** [Detalles]

---

## 📚 Decisiones Técnicas

### Decisión 1: [Título]
- **Contexto:** [Por qué surgió la necesidad]
- **Opciones consideradas:**
  - Opción A: [Pros y contras]
  - Opción B: [Pros y contras]
- **Decisión final:** Opción B
- **Razón:** [Por qué se eligió]
- **Impacto:** [Qué afecta esta decisión]

### Decisión 2: ...

---

## 💡 Aprendizajes

### Técnicos
1. [Aprendizaje técnico importante]
2. [Otro insight]

### Metodológicos
1. [Algo sobre el proceso de trabajo]
2. [Mejora identificada]

---

## 📌 Pendientes para Próxima Sesión

### Críticos (Must)
1. **[MUST-XXX]** [Descripción]
   - Context: [Por qué es importante]
   - Blocker: [Si hay algo que bloquea]

### Importantes (Should)
1. **[SHOULD-YYY]** [Descripción]

### Opcionales (Could)
1. **[COULD-ZZZ]** [Descripción]

---

## 🔗 Links Relevantes

- [Issue relacionado](https://github.com/user/repo/issues/123)
- [PR creado](https://github.com/user/repo/pull/456)
- [Documentación externa](https://example.com)

---

## 📊 Métricas de la Sesión

- **Tareas completadas:** X
- **Archivos modificados:** XX
- **Líneas de código:** +XXX / -YYY
- **Commits:** Z
- **Bugs resueltos:** N
- **Productividad:** Alta / Media / Baja
- **Energía:** Alta / Media / Baja

---

## 💬 Notas Adicionales

[Cualquier observación, idea o comentario importante que no encaje en otras secciones]

---

*Sesión creada: YYYY-MM-DD HH:MM*  
*Guardada automáticamente al cierre de sesión*
