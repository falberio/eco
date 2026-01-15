'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface MenuItem {
  id: string
  name: string
  section?: string
  isActive: boolean
  item: {
    name: string
    kind: string
  }
}

export default function GuestMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({ section: '', isActive: true })

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const query = new URLSearchParams({
          isActive: filters.isActive.toString(),
          limit: '100',
        })
        if (filters.section) query.append('section', filters.section)

        const res = await fetch(`${apiUrl}/api/menu-items?${query}`)
        const data = await res.json()
        setMenuItems(data.data || [])
      } catch (error) {
        console.error('Error fetching menu:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [filters])

  const sections = [...new Set(menuItems.map(item => item.section || 'Sin sección'))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-alacena-50 to-alacena-100">
      {/* Header */}
      <header className="bg-alacena-900 text-white p-6 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">🍽️ Menú Disponible</h1>
            <p className="text-alacena-200">En ALACENA</p>
          </div>
          <Link href="/" className="text-alacena-200 hover:text-white">
            ← Volver
          </Link>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white shadow">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex flex-wrap gap-4">
            <select
              value={filters.section}
              onChange={(e) => setFilters({ ...filters, section: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-alacena-600"
            >
              <option value="">Todas las secciones</option>
              {sections.map(section => (
                <option key={section} value={section}>
                  {section}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <main className="max-w-6xl mx-auto p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-gray-500">Cargando menú...</p>
          </div>
        ) : menuItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay items disponibles</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map(item => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition fade-in"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    item.isActive
                      ? 'bg-green-100 text-green-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {item.isActive ? '✅ Disponible' : '❌ No disponible'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">
                  Base: <strong>{item.item.name}</strong>
                </p>
                {item.section && (
                  <p className="text-gray-500 text-xs">
                    Sección: {item.section}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-alacena-900 text-white text-center p-6 mt-12">
        <p className="text-alacena-200">🫙 ALACENA - Tu cocina inteligente</p>
      </footer>
    </div>
  )
}
