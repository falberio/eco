# Procedimientos de Trabajo

## 🔄 Gestión de Issues y Historias de Usuario

### Workflow completo: Docs → GitHub → Desarrollo

#### 1. Definir historia en backlog.md

**Ubicación:** `docs/04-planificacion/backlog.md`

1. Agregar historia dentro de su épica correspondiente
2. Incluir **Definition of Ready (DoR):**
   - Historia de usuario (Como... Quiero... Para...)
   - Criterios de aceptación (mínimo 3)
   - Notas técnicas (endpoints, schemas, dependencias)
   - Estimación (S, M, L, XL)
   - Prioridad (P1, P2, P3)
   - Definition of Done (DoD)

#### 2. Crear issue en GitHub

**Opción A - Manual:**
1. Ir a https://github.com/falberio/eco/issues/new/choose
2. Seleccionar template (Feature / Bug / Tech / Docs)
3. Copiar contenido desde backlog.md
4. Asignar labels, milestone, estimación
5. Copiar número de issue generado

**Opción B - Script automatizado:**
```powershell
# Configurar token (una vez)
$env:GITHUB_TOKEN = "tu_token_aqui"

# Ejecutar script
cd .temp-issues
.\create-issues.ps1
```

#### 3. Linkear bidireccional

**En backlog.md:**
```markdown
#### MAN-01: CRUD de tareas
**Issue:** [#18](https://github.com/falberio/eco/issues/18)
```

**En issue GitHub:**
```markdown
**Backlog:** [docs/04-planificacion/backlog.md#man-01-crud-de-tareas](...)
```

#### 4. Trabajar en la historia

1. Crear branch: `git checkout -b feature/MAN-01-crud-tareas`
2. Desarrollar siguiendo DoD
3. Commit con referencia: `git commit -m "feat(mantia): CRUD tareas #18"`
4. Push y crear PR

#### 5. Cerrar issue

**Al completar:**
1. En PR description: `Closes #18` (cierra automáticamente al merge)
2. Actualizar backlog.md: cambiar estado a ✅ Completado
3. Documentar en libro-sesiones.md si es relevante

**Comandos Git especiales:**
```bash
# Cerrar issue desde commit
git commit -m "fix: resolver bug crítico

Closes #25"

# Referenciar sin cerrar
git commit -m "feat: avance parcial MAN-01

Related to #18"
```

---

## ✅ Checklist de cierre de issue

- [ ] Código mergeado a `main`
- [ ] Tests pasando (si aplica)
- [ ] Migraciones aplicadas en dev y prod (si aplica)
- [ ] Deployado a producción
- [ ] Probado en móvil (si es UI)
- [ ] Backlog.md actualizado (estado ✅)
- [ ] Issue cerrado en GitHub
- [ ] Documentación actualizada (si aplica)

---

## 📝 Convenciones de commits

**Formato:**
```
<tipo>(<scope>): <descripción corta>

<cuerpo opcional>

<footer opcional: Closes #X, Related to #Y>
```

**Tipos:**
- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Solo documentación
- `refactor`: Refactorización sin cambio funcional
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

**Scopes:**
- `mantia`, `lista`, `ecosalud`, `alacena`
- `prisma`, `api`, `frontend`
- `docs`, `deploy`

**Ejemplos:**
```bash
git commit -m "feat(mantia): implementar CRUD de tareas #18"
git commit -m "fix(lista): corregir toggle comprado #27"
git commit -m "docs(backlog): actualizar estado MAN-01"
```

---

## 🔧 Solución de problemas comunes

### Caracteres especiales en issues

**Problema:** Tildes y ñ se ven mal en GitHub (ej: "Ejecución" → "Ejecucioon")

**Causa:** Encoding UTF-8 en API de GitHub

**Solución:**
1. Los archivos `.md` en `.temp-issues/` ya están en UTF-8
2. Script PowerShell usa `charset=utf-8` en Content-Type
3. Si ves caracteres raros, edita manualmente el issue en GitHub web

**Para archivos nuevos:**
```powershell
# Guardar en UTF-8 sin BOM
[IO.File]::WriteAllText($path, $content, [Text.Encoding]::UTF8)
```

### Issue no se cierra automáticamente

**Problema:** PR mergeado pero issue sigue abierto

**Solución:**
1. Verificar que PR description incluye `Closes #X`
2. Probar con `Fixes #X` o `Resolves #X`
3. Cerrar manualmente si es necesario

### Labels no aplicados

**Problema:** Issue creado sin labels

**Solución:**
1. Editar issue en GitHub
2. Asignar labels: `type:feature`, `module:mantia`, `priority:P1`, `sprint:1`

---

**Última actualización:** 04 Febrero 2026  
**Mantenedor:** Fran (@falberio)
