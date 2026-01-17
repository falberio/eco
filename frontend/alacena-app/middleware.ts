import { auth } from './auth'

export const middleware = auth((req) => {
    if (!req.auth && req.nextUrl.pathname.startsWith('/dashboard')) {
        const newUrl = new URL('/login', req.nextUrl.origin)
        newUrl.searchParams.set('callbackUrl', req.nextUrl.pathname)
        return Response.redirect(newUrl)
    }
})

export const config = {
    matcher: ['/dashboard/:path*'],
}
