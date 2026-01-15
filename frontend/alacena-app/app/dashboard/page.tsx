'use client'

import { useState, useEffect } from 'react'

interface Stats {
  reserves: number
  items: number
  locations: number
  menuItems: number
}

export default function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL
        const [reserves, items, locations, menuItems] = await Promise.all([
          fetch(`${apiUrl}/api/reserves?limit=1`).then(r => r.json()),
          fetch(`${apiUrl}/api/items?limit=1`).then(r => r.json()),
          fetch(`${apiUrl}/api/locations?limit=1`).then(r => r.json()),
          fetch(`${apiUrl}/api/menu-items?limit=1`).then(r => r.json()),
        ])

        setStats({
          reserves: reserves.pagination?.total || 0,
          items: items.pagination?.total || 0,
          locations: locations.pagination?.total || 0,
          menuItems: menuItems.pagination?.total || 0,
        })
      } catch (error) {
        console.error('Error fetching stats:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

      {loading ? (
        <div className="flex items-center justify-center h-64">
          <p className="text-gray-500">Cargando datos...</p>
        </div>
      ) : stats ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat Cards */}
          <StatCard
            icon="📦"
            label="Reservas"
            value={stats.reserves}
            color="bg-blue-100 text-blue-900"
          />
          <StatCard
            icon="🥘"
            label="Items"
            value={stats.items}
            color="bg-green-100 text-green-900"
          />
          <StatCard
            icon="📍"
            label="Ubicaciones"
            value={stats.locations}
            color="bg-purple-100 text-purple-900"
          />
          <StatCard
            icon="🍽️"
            label="Items de Menú"
            value={stats.menuItems}
            color="bg-orange-100 text-orange-900"
          />
        </div>
      ) : (
        <p className="text-red-500">Error al cargar los datos</p>
      )}

      <div className="mt-12 bg-white rounded-lg p-8 shadow">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a ALACENA</h2>
        <p className="text-gray-600 mb-4">
          Este es tu panel de control para gestionar el inventario, reservas y menú de tu cocina.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>📦 <strong>Reservas:</strong> Registra el stock de cada item</li>
          <li>🥘 <strong>Items:</strong> Define ingredientes y recetas</li>
          <li>📍 <strong>Ubicaciones:</strong> Organiza tu freezer por espacios</li>
          <li>🍽️ <strong>Menú:</strong> Crea el menú público dinámico</li>
        </ul>
      </div>
    </div>
  )
}

interface StatCardProps {
  icon: string
  label: string
  value: number
  color: string
}

function StatCard({ icon, label, value, color }: StatCardProps) {
  return (
    <div className={`${color} rounded-lg p-6 shadow fade-in`}>
      <div className="text-3xl mb-2">{icon}</div>
      <p className="text-sm font-medium opacity-75">{label}</p>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  )
}
