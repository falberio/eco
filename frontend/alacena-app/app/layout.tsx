import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ALACENA - Mi Cocina Inteligente',
  description: 'Sistema de gestión de cocina con QR y control de inventario',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
