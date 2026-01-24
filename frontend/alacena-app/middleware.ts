import { auth } from './auth'

export const middleware = auth((req) => {
    console.log('🔍 MIDDLEWARE ejecutándose')
    console.log('📍 Ruta accedida:', req.nextUrl.pathname)
    console.log('👤 req.auth existe?:', req.auth ? 'SÍ' : 'NO')
    console.log('👤 req.auth valor:', req.auth)

    // Proteger dashboard
    if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
        console.log('❌ Acceso a /dashboard sin autenticación → Redirigiendo a /login')
        const newUrl = new URL('/login', req.nextUrl.origin)
        newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
        return Response.redirect(newUrl)
    }

    // Redirigir raíz a login si no hay sesión
    if (!req.auth && req.nextUrl.pathname === '/') {
        console.log('❌ Acceso a / sin autenticación → Redirigiendo a /login')
        return Response.redirect(new URL('/login', req.nextUrl.origin))
    }

    console.log('✅ Acceso permitido')
})

export const config = {
    matcher: ['/', '/dashboard/:path*'],
}
