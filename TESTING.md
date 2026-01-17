# Instrucciones para Probar los Cambios

## ✅ Lo Que Cambió

Se optimizaron dos problemas críticos reportados:

### 1. Error "Error al guardar item de menú"
- Ahora muestra errores específicos del servidor
- Icono ❌ para mejor visibilidad
- Estados de carga ("Guardando...") más claros

### 2. "Carga muy lentamente"
- Reducida carga de datos de 100 a 50 items
- Mejor performance en todos los dashboards
- Especialmente noticeable en conexiones lentas

---

## 🧪 Cómo Probar

### Opción 1: Probar en Producción
1. Abre https://alacena-frontend.vercel.app/login
2. Login con:
   - Email: `admin@alacena.com`
   - Password: `admin123`
3. Ve a `/dashboard/menu`
4. Click en "+ Nuevo Item de Menú"

### Opción 2: Probar Localmente
```bash
# Backend
cd backend
npm install
npm start
# Debe correr en http://localhost:3001

# Frontend (en otra terminal)
cd frontend/alacena-app
npm install
npm run dev
# Accede a http://localhost:3000
```

---

## 📊 Qué Verificar

### Performance
- [ ] Página carga en < 3 segundos
- [ ] DevTools > Network: Las APIs responden en < 1 segundo
- [ ] Sin errores rojos en Console (F12)

### Error Handling
- [ ] Crea un menu item sin nombre → Debe mostrar "Nombre e item son requeridos ❌"
- [ ] Crea un menu item sin seleccionar item → Mismo error
- [ ] Si falla en servidor → Muestra error específico (no genérico)

### UI/UX
- [ ] Botón muestra "Guardando..." durante operación
- [ ] Botón "Cancelar" está disponible en el formulario
- [ ] Los errores desaparecen cuando cierras el formulario

---

## 📋 Cambios Técnicos Realizados

```
Git Commit: 3b574cd
Mensaje: "perf: Optimize dashboard performance by reducing API limits from 100 to 50 items"

Archivos Modificados:
✅ app/dashboard/items/page.tsx
✅ app/dashboard/menu/page.tsx (mejoras importantes)
✅ app/dashboard/locations/page.tsx
✅ app/dashboard/reserves/page.tsx
✅ .env.local.example (nuevo)

Git Commit: c81a67f
Mensaje: "docs: Add troubleshooting guide and optimization summary"

Archivos Agregados:
✅ TROUBLESHOOTING.md - Guía de solución de problemas
✅ OPTIMIZATIONS.md - Resumen de cambios técnicos
```

---

## ⚠️ Si Algo No Funciona

### Problema: No veo los cambios
- [ ] Abre en incógnito (Ctrl+Shift+N) para forzar cache limpio
- [ ] O limpia cache: DevTools (F12) → Application → Clear site data
- [ ] Espera 2-3 minutos a que Vercel termine el deploy

### Problema: Sigue cargando lentamente
- [ ] Revisa NetworkTab (F12) → Selecciona una API call
- [ ] Si tarda > 2s, el problema está en el backend
- [ ] Si tarda < 1s, el problema es otra cosa (Redux, render, etc)

### Problema: Error sigue siendo genérico
- [ ] Revisa la consola (F12 → Console)
- [ ] Copia el error completo y búscalo en QUICK_REFERENCE.md
- [ ] Verifica que el backend está activo: https://alacena-backend.fly.dev/health

---

## 📞 Soporte

Archivos de referencia disponibles:
- `GETTING_STARTED.md` - Flujo completo para nuevas sesiones
- `QUICK_REFERENCE.md` - Endpoints API y troubleshooting
- `TROUBLESHOOTING.md` - Soluciones rápidas
- `OPTIMIZATIONS.md` - Cambios técnicos detallados
- `docs/MAPA_VISUAL.md` - Arquitectura completa del sistema
- `docs/sesiones/2026-01-17--dashboard-y-auth.md` - Historial de la sesión

---

## 🚀 Próximos Pasos

Una vez verificado que funciona:

1. **Agregar Paginación** (si sigue siendo lento)
   - Implementar "Siguiente" / "Anterior" botones
   - O infinite scroll con lazy loading

2. **Caché Local** (opcional)
   - Guardar items en localStorage
   - Actualizar silenciosamente en background

3. **Validaciones en Backend** (ya hecho, mejorar si es necesario)
   - Campos requeridos
   - Formatos válidos
   - Unicidad donde sea necesario

4. **Rate Limiting** (seguridad)
   - Limitar intentos fallidos de login
   - Proteger endpoints de CRUD

---

**Desplegado en**: https://alacena-frontend.vercel.app
**Backend corriendo en**: https://alacena-backend.fly.dev
**Estado**: ✅ En Vivo

Última actualización: 17 Enero 2026 - 05:35 UTC
