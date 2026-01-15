'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-alacena-600 to-alacena-900 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8 text-white fade-in">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold">🫙 ALACENA</h1>
          <p className="text-2xl text-alacena-100">Mi Cocina Inteligente</p>
          <p className="text-lg text-alacena-200">
            Sistema de gestión de inventario con QR y menú dinámico
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Dashboard Admin */}
          <Link href="/dashboard">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl hover:bg-opacity-20 transition cursor-pointer">
              <div className="text-4xl mb-4">📊</div>
              <h2 className="text-2xl font-bold mb-2">Dashboard</h2>
              <p className="text-alacena-100">Gestiona tu inventario, reservas y menú</p>
            </div>
          </Link>

          {/* Menú Público */}
          <Link href="/guest/menu">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl hover:bg-opacity-20 transition cursor-pointer">
              <div className="text-4xl mb-4">🍽️</div>
              <h2 className="text-2xl font-bold mb-2">Menú Público</h2>
              <p className="text-alacena-100">Acceso por QR para ver disponibilidad</p>
            </div>
          </Link>
        </div>

        <div className="text-center text-sm text-alacena-200 pt-8">
          <p>Un proyecto personal para aprender a programar y mejorar el día a día</p>
        </div>
      </div>
    </main>
  )
}
