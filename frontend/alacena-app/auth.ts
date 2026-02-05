import NextAuth from 'next-auth'
import { createAuthConfig } from '@eco/shared/auth'

/**
 * NextAuth configurado con la config compartida
 * Customizado para Alacena
 */
export const { auth, handlers, signIn, signOut } = NextAuth(
    createAuthConfig({
        devUser: {
            email: 'admin@alacena.com',
            password: 'admin123',
            name: 'Admin Alacena (Dev)',
        },
    })
)
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
