'use client'

import { DashboardLayout as SharedDashboardLayout, MenuItem } from '@eco/shared/components/layout'
import { ThemeProvider } from '@eco/shared/styles'
import { alacenaTheme } from '../../theme'
import React from 'react'

const menuItems: MenuItem[] = [
  { href: '/dashboard', label: '📊 Dashboard', icon: '📊' },
  { href: '/dashboard/items', label: '📦 Items', icon: '📦' },
  { href: '/dashboard/locations', label: '📍 Ubicaciones', icon: '📍' },
  { href: '/dashboard/reserves', label: '📋 Reservas', icon: '📋' },
  { href: '/dashboard/menu', label: '🍽️ Menú', icon: '🍽️' },
  { href: '/dashboard/qr', label: '📱 Códigos QR', icon: '📱' },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={alacenaTheme}>
      <SharedDashboardLayout
        menuItems={menuItems}
        appName="🧺 Alacena"
      >
        {children}
      </SharedDashboardLayout>
    </ThemeProvider>
  )
}
