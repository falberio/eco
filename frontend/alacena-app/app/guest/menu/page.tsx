'use client'

import { useState, useEffect } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alacena-backend.fly.dev'

interface MenuItem {
  id: string
  name: string
  section: string | null
  isActive: boolean
  item: {
    id: string
    name: string
    kind: string
    category: string | null
  }
}

// Orden de secciones para el menú
const SECTION_ORDER = [
  'Desayuno',
  'Cafetería',
  'Tés',
  'Platos Principales',
  'Tartas',
  'Pastas',
  'Salsas y Acompañamientos',
  'De la Alacena',
  'Tragos Clásicos',
  'Vodka',
  'Aperitivos',
  'Clásicos Argentinos',
  'Whiskies',
  'Destilados',
  'Tropicales',
  'Cafés Especiales',
  'Vinos',
  'Bebidas'
];

export default function GuestMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMenu()
  }, [])

  async function fetchMenu() {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/api/menu-items?limit=100`)
      const data = await res.json()

      // Filtrar solo items activos
      const active = (data.data || []).filter((item: MenuItem) => item.isActive)
      setMenuItems(active)
    } catch (error) {
      console.error('Error loading menu:', error)
    } finally {
      setLoading(false)
    }
  }

  // Agrupar por sección y ordenar según SECTION_ORDER
  const groupedMenu = menuItems.reduce((acc, item) => {
    const section = item.section || 'Otros'
    if (!acc[section]) acc[section] = []
    acc[section].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  const orderedSections = SECTION_ORDER.filter(section => groupedMenu[section])

  // Emojis por sección
  const sectionEmojis: Record<string, string> = {
    'Desayuno': '🥐',
    'Cafetería': '☕',
    'Tés': '🍵',
    'Platos Principales': '🍽️',
    'Tartas': '🥧',
    'Pastas': '🍝',
    'Salsas y Acompañamientos': '🥣',
    'De la Alacena': '🏺',
    'Tragos Clásicos': '🍸',
    'Vodka': '🧊',
    'Aperitivos': '🥃',
    'Clásicos Argentinos': '🇦🇷',
    'Whiskies': '🥃',
    'Destilados': '🍾',
    'Tropicales': '🥥',
    'Cafés Especiales': '☕',
    'Vinos': '🍷',
    'Bebidas': '🥤'
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-400 mx-auto mb-4"></div>
          <p className="text-amber-100 text-lg">Cargando menú...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header Elegante */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-7xl mb-6">🍽️</div>
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide">
            La Alacena
          </h1>
          <div className="w-24 h-1 bg-white mx-auto mb-4"></div>
          <p className="text-xl md:text-2xl text-amber-50 font-light">
            Menú del Día
          </p>
        </div>
      </div>

      {/* Contenido del Menú */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {orderedSections.length === 0 ? (
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Menú en preparación</h2>
            <p className="text-slate-600">
              Estamos actualizando nuestra carta. Vuelve pronto.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {orderedSections.map((section) => (
              <div 
                key={section} 
                className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl overflow-hidden hover:shadow-amber-500/20 transition-all duration-300"
              >
                {/* Header de Sección */}
                <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{sectionEmojis[section] || '📋'}</span>
                    <h2 className="text-2xl font-serif font-bold">
                      {section}
                    </h2>
                  </div>
                </div>

                {/* Items de la Sección */}
                <div className="p-6 space-y-3">
                  {groupedMenu[section].map((item, idx) => (
                    <div 
                      key={item.id}
                      className="group relative"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-amber-600 font-bold mt-1 text-sm">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-slate-800 group-hover:text-amber-600 transition-colors">
                            {item.name}
                          </h3>
                        </div>
                      </div>
                      {/* Línea decorativa */}
                      {idx < groupedMenu[section].length - 1 && (
                        <div className="mt-3 border-b border-slate-200"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-16 pb-8">
          <div className="inline-block bg-white/90 backdrop-blur rounded-full px-8 py-3 shadow-lg">
            <p className="text-slate-600 font-medium">
              ✨ Todos los platos preparados con amor ✨
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
