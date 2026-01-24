import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alacena-backend.fly.dev'

export const { auth, handlers, signIn, signOut } = NextAuth({
    trustHost: true,
    secret: process.env.AUTH_SECRET || process.env.NEXT_PUBLIC_AUTH_SECRET || process.env.NEXTAUTH_SECRET || process.env.NEXT_PUBLIC_NEXTAUTH_SECRET || 'development-secret-key',
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'tu@email.com' },
                password: { label: 'Contraseña', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                // 🚧 DESARROLLO: Usuario hardcodeado para testing sin backend
                const DEV_MODE = process.env.NODE_ENV === 'development'
                if (DEV_MODE && credentials.email === 'admin@alacena.com' && credentials.password === 'admin123') {
                    console.log('✅ Login de desarrollo exitoso')
                    return {
                        id: 'dev-user-1',
                        email: 'admin@alacena.com',
                        name: 'Admin (Desarrollo)',
                        token: 'dev-token-12345',
                    }
                }

                try {
                    // Llamar al endpoint de login del backend
                    const res = await fetch(`${API_URL}/api/auth/login`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password,
                        }),
                    })

                    if (!res.ok) {
                        return null
                    }

                    const data = await res.json()

                    // Retornar usuario con el token JWT del backend
                    return {
                        id: data.user.id,
                        email: data.user.email,
                        name: data.user.name,
                        token: data.token,
                    }
                } catch (error) {
                    console.error('Auth error:', error)
                    return null
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
                token.email = user.email
                token.name = user.name
                token.backendToken = (user as any).token
            }
            return token
        },
        async session({ session, token }) {
            if (session.user) {
                session.user.id = token.id as string
                session.user.email = token.email as string
                session.user.name = token.name as string
                (session as any).backendToken = token.backendToken
            }
            return session
        },
    },
})
