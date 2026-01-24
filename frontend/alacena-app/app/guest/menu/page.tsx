'use client'

import { useState, useEffect, useRef } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alacena-backend.fly.dev'

interface MenuItem {
  id: string
  name: string
  section: string | null
  isActive: boolean
  notes: string | null
  item: {
    id: string
    name: string
    kind: string
    category: string | null
  }
}

type DietFilter = 'Todos' | 'Vegano' | 'Vegetariano' | 'Omnívoro' | 'Apto Celíaco'

const SECTION_ORDER = [
  'Desayunos',
  'Carnes',
  'Hamburguesas',
  'Pastas',
  'Tartas',
  'Platos Vegetarianos',
  'Cafetería',
  'Bar - Tragos Clásicos',
  'Bar - Vodka',
  'Bar - Aperitivos',
  'Bar - Destilados',
  'Bar - Tropicales',
  'Bar - Cafés Especiales',
  'Vinos'
];

export default function GuestMenu() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([])
  const [loading, setLoading] = useState(true)
  const [activeFilter, setActiveFilter] = useState<DietFilter>('Todos')
  const [activeSection, setActiveSection] = useState<string>('')
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    fetchMenu()
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5, rootMargin: '-100px 0px -50% 0px' }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [menuItems])

  async function fetchMenu() {
    try {
      setLoading(true)
      const res = await fetch(`${API_URL}/api/menu-items?limit=100`)
      const data = await res.json()
      const active = (data.data || []).filter((item: MenuItem) => item.isActive)
      setMenuItems(active)
    } catch (error) {
      console.error('Error loading menu:', error)
    } finally {
      setLoading(false)
    }
  }

  function filterByDiet(item: MenuItem): boolean {
    if (activeFilter === 'Todos') return true
    const notes = item.notes?.toLowerCase() || ''
    return notes.includes(activeFilter.toLowerCase())
  }

  const filteredItems = menuItems.filter(filterByDiet)

  const groupedMenu = filteredItems.reduce((acc, item) => {
    const section = item.section || 'Otros'
    if (!acc[section]) acc[section] = []
    acc[section].push(item)
    return acc
  }, {} as Record<string, MenuItem[]>)

  const orderedSections = SECTION_ORDER.filter(section => groupedMenu[section])

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const offset = 180
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const sectionEmojis: Record<string, string> = {
    'Desayunos': '🥐',
    'Carnes': '🥩',
    'Hamburguesas': '🍔',
    'Pastas': '🍝',
    'Tartas': '🥧',
    'Platos Vegetarianos': '🥗',
    'Cafetería': '☕',
    'Bar - Tragos Clásicos': '🍸',
    'Bar - Vodka': '🧊',
    'Bar - Aperitivos': '🥃',
    'Bar - Destilados': '🍾',
    'Bar - Tropicales': '🥥',
    'Bar - Cafés Especiales': '☕',
    'Vinos': '🍷'
  }

  const dietFilters: DietFilter[] = ['Todos', 'Vegano', 'Vegetariano', 'Omnívoro', 'Apto Celíaco']

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
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-6xl mb-4">🍽️</div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2 tracking-wide">
            La Alacena
          </h1>
          <p className="text-lg md:text-xl text-amber-50 font-light">
            Menú del Día
          </p>
        </div>
      </div>

      {/* Navegación Horizontal Sticky */}
      <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-amber-500/30 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-2 px-4 py-3 min-w-max">
              {orderedSections.map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all duration-200 ${
                    activeSection === section
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg scale-105'
                      : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/70 hover:text-white'
                  }`}
                >
                  <span className="mr-2">{sectionEmojis[section] || '📋'}</span>
                  {section.replace('Bar - ', '')}
                </button>
              ))}
            </div>
          </div>

          {/* Filtros de dieta */}
          <div className="border-t border-slate-700/50 px-4 py-2">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
              <span className="text-xs text-slate-400 whitespace-nowrap mr-2">Filtro:</span>
              {dietFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                    activeFilter === filter
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                  }`}
                >
                  {filter === 'Todos' && '🍽️'}
                  {filter === 'Vegano' && '🌱'}
                  {filter === 'Vegetariano' && '🥬'}
                  {filter === 'Omnívoro' && '🥩'}
                  {filter === 'Apto Celíaco' && '🌾'}
                  {' '}{filter}
                </button>
              ))}
              {activeFilter !== 'Todos' && (
                <span className="text-xs text-amber-400 ml-2">
                  {filteredItems.length} plato{filteredItems.length !== 1 ? 's' : ''}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {orderedSections.length === 0 ? (
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-12 text-center">
            <div className="text-6xl mb-4">📋</div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">
              {activeFilter === 'Todos' ? 'Menú en preparación' : `No hay opciones ${activeFilter.toLowerCase()}`}
            </h2>
            <p className="text-slate-600">
              {activeFilter === 'Todos' 
                ? 'Estamos actualizando nuestra carta.'
                : 'Intenta con otro filtro.'}
            </p>
          </div>
        ) : (
          <div className="space-y-16">
            {orderedSections.map((section) => (
              <div
                key={section}
                id={section}
                ref={(el) => { sectionRefs.current[section] = el }}
                className="scroll-mt-40"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{sectionEmojis[section] || '📋'}</span>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">
                        {section.replace('Bar - ', '')}
                      </h2>
                      <div className="h-1 bg-gradient-to-r from-amber-500 to-transparent w-32 mt-2"></div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedMenu[section].map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/95 backdrop-blur rounded-xl shadow-lg overflow-hidden hover:shadow-amber-500/20 hover:scale-105 transition-all duration-300"
                    >
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-slate-800 mb-2">
                          {item.name}
                        </h3>
                        {item.notes && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.notes.split(',').map((note, idx) => (
                              <span
                                key={idx}
                                className="text-xs px-2 py-1 rounded-full bg-amber-100 text-amber-700"
                              >
                                {note.trim()}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-16 pb-8">
          <div className="inline-block bg-white/90 backdrop-blur rounded-full px-8 py-3 shadow-lg">
            <p className="text-slate-600 font-medium">
              ✨ Todos los platos preparados con amor ✨
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}
