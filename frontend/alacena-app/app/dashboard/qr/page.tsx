'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alacena-backend.fly.dev'

interface Container {
    id: string
    code: string
    type: {
        name: string
    }
    reserves: {
        item: {
            name: string
        }
    }[]
}

export default function QRCodesPage() {
    const { data: session } = useSession()
    const [containers, setContainers] = useState<Container[]>([])
    const [loading, setLoading] = useState(true)
    const [qrCodes, setQrCodes] = useState<Record<string, string>>({})
    const [menuQR, setMenuQR] = useState<string>('')

    useEffect(() => {
        fetchContainers()
        generateMenuQR()
    }, [])

    async function fetchContainers() {
        try {
            const token = (session as any)?.backendToken
            const headers: HeadersInit = { 'Content-Type': 'application/json' }
            if (token) headers['Authorization'] = `Bearer ${token}`

            const res = await fetch(`${API_URL}/api/containers?limit=100`, { headers })
            const data = await res.json()
            setContainers(data.data || [])
        } catch (error) {
            console.error('Error:', error)
        } finally {
            setLoading(false)
        }
    }

    async function generateQR(containerCode: string) {
        try {
            const res = await fetch(`${API_URL}/api/qr/container-by-code/${containerCode}`)
            const data = await res.json()

            if (data.qrCode) {
                setQrCodes(prev => ({ ...prev, [containerCode]: data.qrCode }))
            }
        } catch (error) {
            console.error('Error generating QR:', error)
        }
    }

    async function generateMenuQR() {
        try {
            const res = await fetch(`${API_URL}/api/qr/menu`)
            const data = await res.json()

            if (data.qrCode) {
                setMenuQR(data.qrCode)
            }
        } catch (error) {
            console.error('Error generating menu QR:', error)
        }
    }

    function downloadQR(dataUrl: string, filename: string) {
        const link = document.createElement('a')
        link.href = dataUrl
        link.download = `${filename}.png`
        link.click()
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        )
    }

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">📱 Códigos QR</h1>
                    <p className="text-gray-600">Genera códigos para acceso rápido desde móvil</p>
                </div>
            </div>

            {/* QR del Menú */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl shadow-lg p-8">
                <div className="flex items-center gap-6">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">🍽️ Menú Público</h2>
                        <p className="text-gray-600 mb-4">
                            Comparte este QR para que cualquiera vea el menú disponible
                        </p>
                        <div className="flex gap-3">
                            <button
                                onClick={() => window.open(`${API_URL.replace('alacena-backend.fly.dev', 'alacena-blush.vercel.app')}/guest/menu`, '_blank')}
                                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition"
                            >
                                Ver Menú
                            </button>
                            {menuQR && (
                                <button
                                    onClick={() => downloadQR(menuQR, 'menu-qr')}
                                    className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition"
                                >
                                    Descargar QR
                                </button>
                            )}
                        </div>
                    </div>
                    {menuQR && (
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <img src={menuQR} alt="Menu QR" className="w-48 h-48" />
                        </div>
                    )}
                </div>
            </div>

            {/* QR de Contenedores */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">📦 Contenedores / Frascos</h2>
                <p className="text-gray-600 mb-6">
                    Genera QR para cada frasco para actualizar su stock desde el móvil
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {containers.slice(0, 28).map((container) => {
                        const hasQR = qrCodes[container.code]
                        const currentItem = container.reserves?.[0]?.item?.name

                        return (
                            <div
                                key={container.id}
                                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div>
                                        <h3 className="font-mono font-bold text-lg text-gray-800">
                                            {container.code}
                                        </h3>
                                        {currentItem && (
                                            <p className="text-sm text-gray-600 mt-1">{currentItem}</p>
                                        )}
                                    </div>
                                    {hasQR ? (
                                        <div className="bg-white border-2 border-gray-300 rounded p-1">
                                            <img
                                                src={qrCodes[container.code]}
                                                alt={`QR ${container.code}`}
                                                className="w-20 h-20"
                                            />
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => generateQR(container.code)}
                                            className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition"
                                        >
                                            Generar QR
                                        </button>
                                    )}
                                </div>

                                {hasQR && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => downloadQR(qrCodes[container.code], `jar-${container.code}`)}
                                            className="flex-1 px-3 py-2 bg-green-600 text-white text-sm rounded hover:bg-green-700 transition"
                                        >
                                            💾 Descargar
                                        </button>
                                        <button
                                            onClick={() => window.print()}
                                            className="flex-1 px-3 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition"
                                        >
                                            🖨️ Imprimir
                                        </button>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => {
                            containers.slice(0, 28).forEach(c => {
                                if (!qrCodes[c.code]) {
                                    generateQR(c.code)
                                }
                            })
                        }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium"
                    >
                        Generar Todos los QR
                    </button>
                </div>
            </div>

            {/* Instrucciones */}
            <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-3">💡 Cómo usar los QR codes</h3>
                <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">1.</span>
                        <span>Descarga e imprime los códigos QR de cada frasco</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">2.</span>
                        <span>Pega cada QR en su frasco correspondiente</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">3.</span>
                        <span>Escanea con tu celular para actualizar el stock instantáneamente</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-blue-600 font-bold">4.</span>
                        <span>Comparte el QR del menú con quienes quieran ver qué hay disponible</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
