# ⚛️ Frontend Architecture - ECO Platform

> Documentación completa de la arquitectura frontend (Next.js + React)

**Framework:** Next.js 15.5.9 (App Router)  
**UI Library:** React 18  
**Styling:** TailwindCSS 3  
**TypeScript:** 5.x  
**Última actualización:** 2026-01-25

---

## 🏗️ Estructura General

```
frontend/
├── shared/                    # @eco/shared package
│   ├── components/
│   │   ├── layout/
│   │   │   └── DashboardLayout.tsx
│   │   ├── data/
│   │   │   └── PaginationControls.tsx
│   │   └── ui/                # Futuros componentes base
│   │
│   ├── hooks/
│   │   ├── usePagination.ts
│   │   ├── useAuth.ts
│   │   └── useFetch.ts        # Futuro
│   │
│   ├── lib/
│   │   ├── api-client.ts
│   │   ├── validations.ts
│   │   └── utils.ts
│   │
│   ├── styles/
│   │   ├── theme.base.ts
│   │   ├── theme.ts
│   │   └── tailwind.preset.js
│   │
│   ├── types/
│   │   ├── common.ts
│   │   ├── prisma.generated.ts  # Auto-generado
│   │   └── index.ts
│   │
│   ├── auth/
│   │   ├── config.ts
│   │   └── hooks.ts
│   │
│   └── package.json           # Configuración de workspace
│
├── alacena-app/               # App independiente
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── login/
│   │   └── dashboard/
│   │       ├── layout.tsx
│   │       ├── page.tsx
│   │       ├── items/
│   │       ├── locations/
│   │       ├── reserves/
│   │       └── menu/
│   │
│   ├── public/
│   ├── theme.ts               # alacenaTheme (verde)
│   ├── auth.ts                # NextAuth config
│   ├── middleware.ts          # Route protection
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   ├── .env.local
│   └── package.json
│
├── mantia-app/                # App independiente (futuro)
│   ├── app/
│   ├── theme.ts               # mantiaTheme (azul)
│   └── ...
│
└── package.json               # Root workspace config
```

---

## 🎨 Sistema de Theming

### Arquitectura de Themes

```
baseTheme (neutral)
    ↓ extend
alacenaTheme (verde) ← usado en alacena-app
    ↓ extend
mantiaTheme (azul) ← usado en mantia-app
```

### Base Theme

**Archivo:** `frontend/shared/styles/theme.base.ts`

```typescript
export const baseTheme = {
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
  },
  
  colors: {
    // Colores neutros (comunes a todas las apps)
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#e5e5e5',
      300: '#d4d4d4',
      400: '#a3a3a3',
      500: '#737373',
      600: '#525252',
      700: '#404040',
      800: '#262626',
      900: '#171717',
    },
    
    // Success, error, warning (comunes)
    success: {
      500: '#22c55e',
      600: '#16a34a',
    },
    error: {
      500: '#ef4444',
      600: '#dc2626',
    },
    warning: {
      500: '#f59e0b',
      600: '#d97706',
    },
    
    // primary/secondary NO definidos (cada app los define)
  },
  
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
}

export type BaseTheme = typeof baseTheme
```

---

### App-Specific Theme

**Archivo:** `frontend/alacena-app/theme.ts`

```typescript
import { defaultTheme } from '@eco/shared/styles'
import type { AppTheme } from '@eco/shared/styles'

export const alacenaTheme: AppTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    
    // Verde natural para Alacena
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#22c55e',  // Main
      600: '#16a34a',
      700: '#15803d',
      800: '#166534',
      900: '#14532d',
    },
    
    // Amarillo/dorado como secundario
    secondary: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#eab308',  // Main
      600: '#ca8a04',
      700: '#a16207',
      800: '#854d0e',
      900: '#713f12',
    },
  },
  
  app: {
    name: 'Alacena',
    logo: '/logo-alacena.svg',
    primaryColor: '#22c55e',
  },
}
```

**Archivo:** `frontend/mantia-app/theme.ts` (futuro)

```typescript
export const mantiaTheme: AppTheme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    
    // Azul profesional para Mantia
    primary: {
      500: '#3b82f6',  // Main
      // ... otros tonos
    },
    
    secondary: {
      500: '#8b5cf6',  // Púrpura
      // ...
    },
  },
  
  app: {
    name: 'Mantia',
    logo: '/logo-mantia.svg',
    primaryColor: '#3b82f6',
  },
}
```

---

### Theme Provider

**Archivo:** `frontend/shared/styles/theme.ts`

```typescript
'use client'

import React, { createContext, useContext } from 'react'
import type { AppTheme } from './theme.base'

const ThemeContext = createContext<AppTheme | null>(null)

export function ThemeProvider({ 
  theme, 
  children 
}: { 
  theme: AppTheme
  children: React.ReactNode 
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): AppTheme {
  const theme = useContext(ThemeContext)
  if (!theme) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return theme
}
```

**Uso en app:**

```tsx
// frontend/alacena-app/app/dashboard/layout.tsx
import { ThemeProvider } from '@eco/shared/styles'
import { alacenaTheme } from '../../theme'

export default function DashboardLayout({ children }) {
  return (
    <ThemeProvider theme={alacenaTheme}>
      <SharedDashboardLayout menuItems={menuItems}>
        {children}
      </SharedDashboardLayout>
    </ThemeProvider>
  )
}
```

---

## 🧩 Componentes Compartidos

### DashboardLayout

**Archivo:** `frontend/shared/components/layout/DashboardLayout.tsx`

```tsx
'use client'

import { useTheme } from '@eco/shared/styles'
import { useAuth } from '@eco/shared/auth'

interface MenuItem {
  label: string
  href: string
  icon?: React.ReactNode
}

interface DashboardLayoutProps {
  children: React.ReactNode
  menuItems: MenuItem[]
  appName?: string
  appLogo?: string
}

export function DashboardLayout({ 
  children, 
  menuItems,
  appName,
  appLogo 
}: DashboardLayoutProps) {
  const theme = useTheme()
  const { user, logout } = useAuth()
  
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside 
        className="w-64 shadow-lg"
        style={{ backgroundColor: theme.colors.primary[700] }}
      >
        {/* Logo */}
        <div className="p-4 border-b border-white/10">
          <h1 className="text-2xl font-bold text-white">
            {appName || theme.app.name}
          </h1>
        </div>
        
        {/* Menu */}
        <nav className="p-4">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 rounded-lg text-white/90 hover:bg-white/10 transition"
            >
              {item.icon && <span className="mr-2">{item.icon}</span>}
              {item.label}
            </a>
          ))}
        </nav>
        
        {/* User */}
        <div className="absolute bottom-0 w-64 p-4 border-t border-white/10">
          <p className="text-white/70 text-sm">{user?.email}</p>
          <button
            onClick={logout}
            className="text-white/90 text-sm hover:underline"
          >
            Cerrar sesión
          </button>
        </div>
      </aside>
      
      {/* Main content */}
      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
```

**Características:**
- ✅ Acepta `menuItems` dinámico (cada app define su menú)
- ✅ Usa `useTheme()` para colores
- ✅ Usa `useAuth()` para usuario y logout
- ✅ Responsive (mobile: collapse sidebar)
- ✅ Reutilizable en todas las apps

---

### PaginationControls

**Archivo:** `frontend/shared/components/data/PaginationControls.tsx`

```tsx
interface PaginationControlsProps {
  currentPage: number
  totalItems: number
  itemsPerPage: number
  onPrevious: () => void
  onNext: () => void
  hasNext: boolean
  hasPrevious: boolean
}

export function PaginationControls({
  currentPage,
  totalItems,
  itemsPerPage,
  onPrevious,
  onNext,
  hasNext,
  hasPrevious,
}: PaginationControlsProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  
  return (
    <div className="flex items-center justify-between mt-6">
      <p className="text-sm text-gray-600">
        Página {currentPage} de {totalPages} ({totalItems} items)
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Anterior
        </button>
        
        <button
          onClick={onNext}
          disabled={!hasNext}
          className="px-4 py-2 border rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
        >
          Siguiente
        </button>
      </div>
    </div>
  )
}
```

**Uso:**

```tsx
const pagination = usePagination(100)

<PaginationControls
  currentPage={pagination.currentPage}
  totalItems={pagination.totalItems}
  itemsPerPage={100}
  onPrevious={pagination.previousPage}
  onNext={pagination.nextPage}
  hasNext={pagination.hasNext}
  hasPrevious={pagination.hasPrevious}
/>
```

---

## 🪝 Hooks Compartidos

### usePagination

**Archivo:** `frontend/shared/hooks/usePagination.ts`

```typescript
import { useState, useCallback } from 'react'

interface UsePaginationReturn {
  currentPage: number
  totalItems: number
  skip: number
  hasNext: boolean
  hasPrevious: boolean
  nextPage: () => void
  previousPage: () => void
  setTotalItems: (total: number) => void
  getPaginationParams: () => { skip: number; take: number }
}

export function usePagination(itemsPerPage: number = 50): UsePaginationReturn {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  
  const skip = (currentPage - 1) * itemsPerPage
  const hasNext = skip + itemsPerPage < totalItems
  const hasPrevious = currentPage > 1
  
  const nextPage = useCallback(() => {
    if (hasNext) setCurrentPage(p => p + 1)
  }, [hasNext])
  
  const previousPage = useCallback(() => {
    if (hasPrevious) setCurrentPage(p => p - 1)
  }, [hasPrevious])
  
  const getPaginationParams = useCallback(() => ({
    skip,
    take: itemsPerPage,
  }), [skip, itemsPerPage])
  
  return {
    currentPage,
    totalItems,
    skip,
    hasNext,
    hasPrevious,
    nextPage,
    previousPage,
    setTotalItems,
    getPaginationParams,
  }
}
```

---

### useAuth

**Archivo:** `frontend/shared/auth/hooks.ts`

```typescript
'use client'

import { useSession } from 'next-auth/react'

export function useAuth() {
  const { data: session, status } = useSession()
  
  return {
    user: session?.user ?? null,
    backendToken: session?.backendToken ?? null,
    isLoading: status === 'loading',
    isAuthenticated: status === 'authenticated',
    logout: async () => {
      await fetch('/api/auth/signout', { method: 'POST' })
      window.location.href = '/login'
    },
  }
}
```

**Uso:**

```tsx
const { user, backendToken, isLoading } = useAuth()

if (isLoading) return <Spinner />
if (!user) redirect('/login')

// Usar backendToken en headers
const response = await fetch(`${API_URL}/items`, {
  headers: {
    Authorization: `Bearer ${backendToken}`,
  },
})
```

---

## 🌐 API Client

**Archivo:** `frontend/shared/lib/api-client.ts`

```typescript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

interface ApiResponse<T> {
  data: T
  pagination?: {
    total: number
    limit: number
    offset: number
    hasNext: boolean
    hasPrevious: boolean
  }
}

class ApiError extends Error {
  constructor(public status: number, message: string, public data?: any) {
    super(message)
  }
}

export async function apiClient<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  const url = `${API_URL}${endpoint}`
  
  const response = await fetch(url, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  
  const data = await response.json()
  
  if (!response.ok) {
    throw new ApiError(response.status, data.error || 'API Error', data)
  }
  
  return data
}

// Helpers
export const api = {
  get: <T>(endpoint: string, token?: string) =>
    apiClient<T>(endpoint, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
    
  post: <T>(endpoint: string, body: any, token?: string) =>
    apiClient<T>(endpoint, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
    
  put: <T>(endpoint: string, body: any, token?: string) =>
    apiClient<T>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
    
  delete: <T>(endpoint: string, token?: string) =>
    apiClient<T>(endpoint, {
      method: 'DELETE',
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    }),
}
```

**Uso:**

```tsx
import { api } from '@eco/shared/lib'
import { useAuth } from '@eco/shared/auth'

const { backendToken } = useAuth()

// GET
const { data, pagination } = await api.get<Item[]>(
  '/api/alacena/items?skip=0&take=100',
  backendToken
)

// POST
const newItem = await api.post<Item>(
  '/api/alacena/items',
  { code: 'ARR-001', name: 'Arroz', unit: 'kg' },
  backendToken
)

// Error handling
try {
  await api.delete(`/api/alacena/items/${id}`, backendToken)
} catch (error) {
  if (error instanceof ApiError) {
    if (error.status === 404) {
      alert('Item no encontrado')
    } else if (error.status === 401) {
      redirect('/login')
    }
  }
}
```

---

## 📦 Type Generation

### Flujo Automático

```
1. Backend: prisma/schema.prisma
   ↓
2. npm run generate:types
   ↓
3. Genera: frontend/shared/types/prisma.generated.ts
   ↓
4. Apps importan: import { Item, User } from '@eco/shared/types'
```

**Archivo generado:** `frontend/shared/types/prisma.generated.ts`

```typescript
// Auto-generated from Prisma schema
// DO NOT EDIT MANUALLY

export type { 
  User, 
  Item, 
  Location, 
  Container, 
  Batch, 
  Reserve, 
  MenuItem 
} from '@prisma/client'

export type {
  LocationType,
  ReserveStatus,
  MenuCategory,
} from '@prisma/client'

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    total: number
    limit: number
    offset: number
    hasNext: boolean
    hasPrevious: boolean
  }
}

export interface PaginationParams {
  skip: number
  take: number
}

// User sin password para uso en frontend
export type UserPublic = Omit<User, 'password'>
```

**Comando:**
```bash
cd backend && npm run generate:types
```

---

## 🔐 Autenticación (NextAuth)

### Configuración Compartida

**Archivo:** `frontend/shared/auth/config.ts`

```typescript
import type { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export function createAuthConfig(options?: {
  devUserOverride?: boolean
}): AuthOptions {
  return {
    providers: [
      CredentialsProvider({
        name: 'Credentials',
        credentials: {
          email: { label: 'Email', type: 'email' },
          password: { label: 'Password', type: 'password' },
        },
        async authorize(credentials) {
          // Dev mode: auto-login
          if (options?.devUserOverride && process.env.NODE_ENV === 'development') {
            return {
              id: '1',
              email: 'admin@alacena.com',
              name: 'Admin Dev',
              backendToken: 'dev-token',
            }
          }
          
          // Production: call backend
          const res = await fetch(`${API_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          })
          
          const data = await res.json()
          
          if (!res.ok) {
            throw new Error(data.error || 'Login failed')
          }
          
          return {
            id: data.user.id,
            email: data.user.email,
            name: data.user.name,
            backendToken: data.token,
          }
        },
      }),
    ],
    
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.backendToken = user.backendToken
        }
        return token
      },
      
      async session({ session, token }) {
        session.backendToken = token.backendToken
        return session
      },
    },
    
    session: {
      strategy: 'jwt',
    },
    
    pages: {
      signIn: '/login',
    },
  }
}
```

**Uso en app:**

```typescript
// frontend/alacena-app/auth.ts
import { createAuthConfig } from '@eco/shared/auth'

export const authOptions = createAuthConfig({
  devUserOverride: false, // true para dev rápido
})
```

---

### Middleware de Protección

**Archivo:** `frontend/alacena-app/middleware.ts`

```typescript
export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/dashboard/:path*'],
}
```

---

## 🎯 Patrones de Uso

### Página con Paginación

```tsx
'use client'

import { useState, useEffect } from 'react'
import { usePagination } from '@eco/shared/hooks'
import { PaginationControls } from '@eco/shared/components'
import { api } from '@eco/shared/lib'
import { useAuth } from '@eco/shared/auth'
import type { Item } from '@eco/shared/types'

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([])
  const pagination = usePagination(100)
  const { backendToken } = useAuth()
  
  useEffect(() => {
    async function loadItems() {
      const params = pagination.getPaginationParams()
      const response = await api.get<Item[]>(
        `/api/alacena/items?skip=${params.skip}&take=${params.take}`,
        backendToken
      )
      setItems(response.data)
      pagination.setTotalItems(response.pagination?.total || 0)
    }
    
    loadItems()
  }, [pagination.currentPage])
  
  return (
    <div>
      <h1>Items</h1>
      
      <table>
        {items.map(item => (
          <tr key={item.id}>
            <td>{item.code}</td>
            <td>{item.name}</td>
            <td>{item.currentStock} {item.unit}</td>
          </tr>
        ))}
      </table>
      
      <PaginationControls {...pagination} itemsPerPage={100} />
    </div>
  )
}
```

---

### Formulario con Validación

```tsx
'use client'

import { useState } from 'react'
import { z } from 'zod'
import { api } from '@eco/shared/lib'
import { useAuth } from '@eco/shared/auth'

const itemSchema = z.object({
  code: z.string().min(1, 'Código requerido'),
  name: z.string().min(1, 'Nombre requerido'),
  unit: z.enum(['kg', 'L', 'u']),
  minStock: z.number().min(0),
  maxStock: z.number().min(0),
})

export function ItemForm() {
  const [formData, setFormData] = useState({
    code: '',
    name: '',
    unit: 'kg',
    minStock: 0,
    maxStock: 0,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { backendToken } = useAuth()
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar
    const result = itemSchema.safeParse(formData)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      setErrors(Object.fromEntries(
        Object.entries(fieldErrors).map(([k, v]) => [k, v[0]])
      ))
      return
    }
    
    // Enviar
    try {
      await api.post('/api/alacena/items', formData, backendToken)
      alert('Item creado!')
      // Reset form...
    } catch (error) {
      alert('Error al crear item')
    }
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={formData.code}
        onChange={e => setFormData({ ...formData, code: e.target.value })}
        placeholder="Código"
      />
      {errors.code && <span className="text-red-500">{errors.code}</span>}
      
      {/* ...otros campos */}
      
      <button type="submit">Guardar</button>
    </form>
  )
}
```

---

## 🚀 Build y Deploy

### Development

```bash
cd frontend/alacena-app
npm run dev
# → http://localhost:3000
```

### Production Build

```bash
npm run build
npm start
```

### Variables de Entorno

**`.env.local`:**
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXTAUTH_SECRET=tu_secreto_nextauth
NEXTAUTH_URL=http://localhost:3000
```

**Producción (Vercel):**
- `NEXT_PUBLIC_API_URL=https://alacena-backend.fly.dev`
- `NEXTAUTH_URL=https://alacena-frontend.vercel.app`

---

## 📊 Performance

### Code Splitting

Next.js hace code splitting automático:
- Cada ruta = bundle separado
- Componentes dinámicos = lazy load

```tsx
import dynamic from 'next/dynamic'

const HeavyChart = dynamic(() => import('./HeavyChart'), {
  loading: () => <Spinner />,
  ssr: false, // No renderizar en servidor
})
```

### Image Optimization

```tsx
import Image from 'next/image'

<Image
  src="/logo.png"
  alt="Logo"
  width={200}
  height={100}
  priority // Para above-the-fold
/>
```

---

## 📚 Recursos

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **TailwindCSS:** https://tailwindcss.com/docs
- **NextAuth:** https://next-auth.js.org

---

*Frontend documentation creada: 2026-01-25*
