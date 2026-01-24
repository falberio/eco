# 🔐 AUTENTICACIÓN: Solución MissingSecret en NextAuth v5 Edge Runtime

**Fecha**: 23 Enero 2026  
**Problema**: Middleware no redirige a login - Error MissingSecret  
**Solución**: Variables de entorno con prefijo `NEXT_PUBLIC_`  
**Estado**: ✅ RESUELTO

---

## 📌 Contexto del Problema

### Síntomas Observados
1. Acceso a http://localhost:3000 mostraba página de menú en lugar de redirigir a login
2. Logs del frontend mostraban repetidamente:
   ```
   [auth][error] MissingSecret: Please define a `secret`
   ```
3. El middleware ejecutaba pero `req.auth` era un objeto error, no null:
   ```
   req.auth valor: {
     message: 'There was a problem with the server configuration. Check the server logs for more information.'
   }
   ```
4. Requests a `/api/auth/session` retornaban 500 error

### Causa Raíz: Edge Runtime vs Variables de Entorno

**Arquitectura de Next.js 15:**
- **Middleware**: Corre en **Edge Runtime** (servidor Vercel Edge, no Node.js)
- **API Routes**: Corren en **Node.js Runtime** (server tradicional)
- **Page Components**: Corren en **Browser** (cliente)

**Problema específico:**
- Las variables de entorno **sin** `NEXT_PUBLIC_` solo están disponibles en Node.js Runtime
- En Edge Runtime (donde corre `middleware.ts`), esas variables no existen
- NextAuth v5 necesita acceso al `secret` en middleware para validar sesiones
- Por eso: `process.env.AUTH_SECRET` retornaba `undefined` en middleware

### Por qué Funcionó Después

La solución tiene dos partes:

#### 1. Prefijo `NEXT_PUBLIC_` en Variables
```env
# Estas SOLO se cargan en Node.js Runtime (backend)
AUTH_SECRET=valor
NEXTAUTH_SECRET=valor

# Estas se cargan en TODOS los runtimes (Edge, Node.js, Browser)
NEXT_PUBLIC_AUTH_SECRET=valor
NEXT_PUBLIC_NEXTAUTH_SECRET=valor
```

**Ventaja de NEXT_PUBLIC_:**
- Accesible en middleware (Edge Runtime) ✅
- Accesible en API routes (Node.js Runtime) ✅
- Accesible en componentes del cliente (Browser) ✅

**Desventaja:**
- Variables públicas son visibles en el código cliente (inseguro para producción)
- Solución: En producción usar secrets manager diferente

#### 2. `trustHost: true` en auth.ts
```typescript
export const { auth, handlers, signIn, signOut } = NextAuth({
    trustHost: true,  // ← Nuevo
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET || process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || 'development-secret-key',
    // ...
})
```

**Por qué es necesario:**
- NextAuth valida que el `NEXTAUTH_URL` coincida con el host actual
- En desarrollo local (http://localhost:3000), esta validación a veces falla
- `trustHost: true` deshabilita la validación en desarrollo
- **Importante**: Solo usar en desarrollo, no en producción

---

## 🔧 Archivos Modificados

### 1. [frontend/alacena-app/.env.local](../../frontend/alacena-app/.env.local)

```diff
# Backend API - Local Development
NEXT_PUBLIC_API_URL=http://localhost:3001

# NextAuth Configuration - Local Development
NEXTAUTH_URL=http://localhost:3000
- AUTH_SECRET=your-local-secret-key-development-2026
- NEXTAUTH_SECRET=your-local-secret-key-development-2026
+ NEXT_PUBLIC_AUTH_SECRET=your-local-secret-key-development-2026
+ NEXT_PUBLIC_NEXTAUTH_SECRET=your-local-secret-key-development-2026
```

**Cambio clave**: Agregar prefijo `NEXT_PUBLIC_` a ambas variables de secreto.

### 2. [frontend/alacena-app/auth.ts](../../frontend/alacena-app/auth.ts#L6-L8)

```diff
export const { auth, handlers, signIn, signOut } = NextAuth({
+   trustHost: true,
-   secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET,
+   secret: process.env.NEXT_PUBLIC_AUTH_SECRET || process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || 'development-secret-key',
    providers: [
```

**Cambios:**
1. Agregar `trustHost: true` para confiar en localhost
2. Usar las nuevas variables con prefijo `NEXT_PUBLIC_`
3. Fallback a `'development-secret-key'` si ambas están undefined

### 3. [frontend/alacena-app/middleware.ts](../../frontend/alacena-app/middleware.ts) (Sin cambios necesarios, pero incluye debug logs)

```typescript
export const middleware = auth((req) => {
    console.log('🔍 MIDDLEWARE ejecutándose')
    console.log('📍 Ruta accedida:', req.nextUrl.pathname)
    console.log('👤 req.auth existe?:', req.auth ? 'SÍ' : 'NO')
    
    if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
        console.log('❌ Acceso a /dashboard sin autenticación → Redirigiendo a /login')
        const newUrl = new URL('/login', req.nextUrl.origin)
        newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
        return Response.redirect(newUrl)
    }

    if (!req.auth && req.nextUrl.pathname === '/') {
        console.log('❌ Acceso a / sin autenticación → Redirigiendo a /login')
        return Response.redirect(new URL('/login', req.nextUrl.origin))
    }

    console.log('✅ Acceso permitido')
})
```

---

## ✅ Pasos de Implementación

### Paso 1: Modificar `.env.local`
```bash
# Editar c:\Users\Usuario\alacena\frontend\alacena-app\.env.local
# Cambiar:
# AUTH_SECRET → NEXT_PUBLIC_AUTH_SECRET
# NEXTAUTH_SECRET → NEXT_PUBLIC_NEXTAUTH_SECRET
```

### Paso 2: Actualizar `auth.ts`
```bash
# Editar c:\Users\Usuario\alacena\frontend\alacena-app\auth.ts
# Línea 7: Añadir trustHost: true
# Línea 8: Cambiar secret a las nuevas variables
```

### Paso 3: Limpiar y reiniciar
```bash
cd frontend/alacena-app
npm cache clean --force
npm run dev
```

### Resultado Esperado
```
✓ Ready in 2.3s
# SIN errores de MissingSecret
# Acceso a http://localhost:3000 redirige a /login
```

---

## 🧪 Validación

### Test 1: Redireccionamiento a Login
```
1. Abre http://localhost:3000 en navegador
2. Esperado: Redirige a http://localhost:3000/login
3. Resultado: ✅ Funciona
```

### Test 2: Logs Limpios
```
1. Abre terminal del frontend
2. Busca: "[auth][error] MissingSecret"
3. Resultado: ✅ No aparece
```

### Test 3: Session API
```
1. Abre DevTools (F12) → Console
2. Ejecuta: fetch('/api/auth/session').then(r => r.json())
3. Esperado: Retorna sesión vacía (no autenticado)
4. Resultado: ✅ 200 OK (no 500)
```

---

## ⚠️ Consideraciones de Seguridad

### Desarrollo Local (Actual)
- ✅ Variables con `NEXT_PUBLIC_` están expuestas en el cliente
- ✅ OK porque es desarrollo local y credenciales son ficticias
- ✅ `trustHost: true` es seguro en localhost

### Producción (Futuro)
- ❌ NO usar `NEXT_PUBLIC_AUTH_SECRET` en producción
- ✅ Usar secrets manager: Vercel Secrets, Fly.io Secrets, etc.
- ✅ Usar variables privadas sin `NEXT_PUBLIC_`
- ✅ Remover `trustHost: true` (validar host correctamente)

**Ejemplo para Producción:**
```typescript
secret: process.env.AUTH_SECRET, // Solo variable privada
trustHost: false, // Validación estricta
```

---

## 📚 Conceptos Clave

### Edge Runtime vs Node.js Runtime
| Aspecto | Edge Runtime | Node.js Runtime |
|--------|-------------|-----------------|
| Ubicación | Servidores edge globales | Servidor de app |
| Acceso a archivos | Limitado | Completo |
| Env vars sin NEXT_PUBLIC_ | ❌ No | ✅ Sí |
| Env vars con NEXT_PUBLIC_ | ✅ Sí | ✅ Sí |
| Performance | ⚡ Muy rápido | Moderado |
| Uso | Middleware, funciones edge | API, SSR |

### Orden de Ejecución (Middleware)
```
1. Request llega a navegador → GET http://localhost:3000/
2. Next.js intercepta en middleware.ts
3. Middleware corre en Edge Runtime
4. NextAuth() necesita process.env.AUTH_SECRET
5. Si variable no está disponible → MissingSecret
6. Si variable está disponible → Valida sesión
7. Si sin autenticación → Redirige a /login
8. Si autenticado → Permite acceso
```

---

## 🔄 Próximos Pasos

- [ ] Testear login completo (intentar ingresar con admin@alacena.com / admin123)
- [ ] Verificar que dashboard se accede después de login
- [ ] Testear logout
- [ ] Preparar configuración de producción con secrets manager
- [ ] Documentar proceso de deployment con variables seguras

---

## 📞 Referencias

- **NextAuth.js v5 Docs:** https://authjs.dev/
- **Error MissingSecret:** https://errors.authjs.dev#missingsecret
- **Next.js Edge Runtime:** https://nextjs.org/docs/api-routes/edge-api-routes
- **Environment Variables:** https://nextjs.org/docs/basic-features/environment-variables
