'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'

const menuItems = [
  { href: '/dashboard', label: '📊 Dashboard', icon: '📊' },
  { href: '/dashboard/items', label: '📦 Items', icon: '📦' },
  { href: '/dashboard/locations', label: '📍 Ubicaciones', icon: '📍' },
  { href: '/dashboard/reserves', label: '📋 Reservas', icon: '📋' },
  { href: '/dashboard/menu', label: '🍽️ Menú', icon: '🍽️' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const { data: session } = useSession()
  const router = useRouter()

  const handleLogout = async () => {
    await signOut({ redirect: false })
    router.push('/login')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">🧺 Alacena</h1>
          <p className="text-sm text-gray-600 mt-1">Panel de Administración</p>
        </div>

        <nav className="mt-6 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block px-6 py-3 border-l-4 transition-colors ${isActive
                  ? 'border-blue-500 bg-blue-50 text-blue-600 font-semibold'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                  }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="p-6 border-t border-gray-200 space-y-3">
          <div className="text-xs text-gray-600">
            {session?.user?.email && (
              <p className="truncate">📧 {session.user.email}</p>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-sm text-red-600 hover:text-red-800 hover:bg-red-50 px-3 py-2 rounded transition"
          >
            🚪 Cerrar Sesión
          </button>
          <a
            href="/"
            className="block w-full text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-50 px-3 py-2 rounded transition text-center"
          >
            ← Volver al sitio
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
