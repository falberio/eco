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

  // Agrupar por sección
  const groupedMenu = menuItems.reduce((acc, item) => {
    const section = item.section || 'Otros'
    if (!acc[section]) acc[section] = []
    acc[section].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Cargando menú...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-12 px-4 shadow-xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-5xl font-bold mb-2">Menú Alacena</h1>
          <p className="text-emerald-100 text-lg">Disponible para preparar ahora</p>
        </div>
      </div>

      {/* Menu Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {Object.keys(groupedMenu).length === 0 ? (
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Menú en preparación</h2>
            <p className="text-gray-600">
              Estamos actualizando nuestra carta. Vuelve pronto.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {Object.entries(groupedMenu).map(([section, items]) => (
              <div key={section} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Section Header */}
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white">{section}</h2>
                </div>

                {/* Items */}
                <div className="divide-y divide-gray-100">
                  {items.map((menuItem) => (
                    <div
                      key={menuItem.id}
                      className="px-6 py-5 hover:bg-emerald-50 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">
                            {menuItem.name}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${menuItem.item.kind === 'RECIPE'
                                ? 'bg-purple-100 text-purple-700'
                                : 'bg-blue-100 text-blue-700'
                              }`}>
                              {menuItem.item.kind === 'RECIPE' ? '🍲 Receta' : '🥗 Producto'}
                            </span>
                            {menuItem.item.category && (
                              <span className="text-sm text-gray-500">
                                {menuItem.item.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="text-4xl ml-4">
                          {getEmojiForCategory(menuItem.item.category || menuItem.section || '')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 inline-block">
            <p className="text-gray-600 mb-2">¿Tienes alguna preferencia o alergia?</p>
            <p className="text-sm text-gray-500">Háznoslo saber antes de preparar</p>
          </div>
        </div>
      </div>

      {/* Decorative Footer */}
      <div className="mt-16 py-8 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-lg font-medium">Alacena - Sistema de Gestión de Cocina</p>
          <p className="text-emerald-100 text-sm mt-2">Preparado con ❤️</p>
        </div>
      </div>
    </div>
  )
}

function getEmojiForCategory(category: string): string {
  const lower = category.toLowerCase()
  if (lower.includes('pasta')) return '🍝'
  if (lower.includes('postre') || lower.includes('dulce')) return '🍰'
  if (lower.includes('bebida') || lower.includes('trago')) return '🍹'
  if (lower.includes('ensalada')) return '🥗'
  if (lower.includes('sopa')) return '🍲'
  if (lower.includes('carne')) return '🥩'
  if (lower.includes('pescado')) return '🐟'
  if (lower.includes('veggie') || lower.includes('verdura')) return '🥦'
  if (lower.includes('desayuno')) return '🥐'
  return '🍽️'
}
                  </p >
                )}
              </div >
            ))}
          </div >
        )}
      </main >

  {/* Footer */ }
  < footer className = "bg-alacena-900 text-white text-center p-6 mt-12" >
    <p className="text-alacena-200">🫙 ALACENA - Tu cocina inteligente</p>
      </footer >
    </div >
  )
}
