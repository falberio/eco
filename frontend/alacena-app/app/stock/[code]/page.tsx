'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://alacena-backend.fly.dev'

export default function StockUpdatePage() {
    const params = useParams()
    const containerCode = params?.code as string

    const [loading, setLoading] = useState(true)
    const [item, setItem] = useState<string>('')
    const [currentWeight, setCurrentWeight] = useState<number>(0)
    const [reserveId, setReserveId] = useState<string>('')
    const [newWeight, setNewWeight] = useState('')
    const [saving, setSaving] = useState(false)
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        if (!containerCode) return

        const loadData = async () => {
            try {
                setLoading(true)
                setError('')

                const [containersRes, reservesRes] = await Promise.all([
                    fetch(`${API_URL}/api/containers?limit=1000`),
                    fetch(`${API_URL}/api/reserves?limit=1000`)
                ])

                const containersData = await containersRes.json()
                const reservesData = await reservesRes.json()

                const container = containersData.data?.find((c: any) => c.code === containerCode)
                if (!container) {
                    setError('Contenedor no encontrado')
                    return
                }

                const reserve = reservesData.data?.find(
                    (r: any) => r.container?.code === containerCode && r.netWeight_g !== null
                )

                if (!reserve) {
                    setError('No hay stock activo en este contenedor')
                    return
                }

                setReserveId(reserve.id)
                setItem(reserve.item?.name || '')
                setCurrentWeight(reserve.netWeight_g || 0)
                setNewWeight(String(reserve.netWeight_g || 0))
            } catch (err) {
                console.error('Error:', err)
                setError('Error al cargar datos')
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [containerCode])

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!reserveId) return

        try {
            setSaving(true)
            setMessage('')
            setError('')

            const weight = parseInt(newWeight)
            if (isNaN(weight) || weight < 0) {
                setError('Peso inválido')
                setSaving(false)
                return
            }

            const res = await fetch(`${API_URL}/api/reserves/${reserveId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ netWeight_g: weight })
            })

            if (!res.ok) throw new Error('Error al actualizar')

            setCurrentWeight(weight)
            setMessage('✅ Stock actualizado correctamente')
        } catch (err) {
            console.error('Error:', err)
            setError('Error al actualizar stock')
        } finally {
            setSaving(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Cargando...</p>
                </div>
            </div>
        )
    }

    if (error && !item) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
                    <div className="text-center">
                        <div className="text-6xl mb-4">❌</div>
                        <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
                        <p className="text-gray-600">{error}</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="text-6xl mb-4">📦</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Actualizar Stock</h1>
                    <p className="text-gray-500 text-sm">Código: {containerCode}</p>
                </div>

                {/* Current Info */}
                <div className="bg-orange-50 rounded-xl p-6 mb-6">
                    <h2 className="font-semibold text-gray-700 mb-3">Contenido Actual</h2>
                    <div className="space-y-2">
                        <p className="text-2xl font-bold text-orange-600">{item}</p>
                        <p className="text-3xl font-bold text-gray-800">{currentWeight}g</p>
                    </div>
                </div>

                {/* Update Form */}
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Nuevo Peso (gramos)
                        </label>
                        <input
                            type="number"
                            value={newWeight}
                            onChange={(e) => setNewWeight(e.target.value)}
                            className="w-full px-4 py-3 text-2xl text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                            placeholder="0"
                            disabled={saving}
                            autoFocus
                        />
                    </div>

                    {/* Quick Buttons */}
                    <div className="grid grid-cols-3 gap-2">
                        <button
                            type="button"
                            onClick={() => setNewWeight('0')}
                            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition text-sm font-medium"
                            disabled={saving}
                        >
                            Vacío
                        </button>
                        <button
                            type="button"
                            onClick={() => setNewWeight(Math.round(currentWeight / 2).toString())}
                            className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-lg hover:bg-yellow-200 transition text-sm font-medium"
                            disabled={saving}
                        >
                            Mitad
                        </button>
                        <button
                            type="button"
                            onClick={() => setNewWeight(currentWeight.toString())}
                            className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition text-sm font-medium"
                            disabled={saving}
                        >
                            Lleno
                        </button>
                    </div>

                    {message && (
                        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                            {message}
                        </div>
                    )}

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={saving || newWeight === '' || parseInt(newWeight) === currentWeight}
                        className="w-full py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                    >
                        {saving ? 'Guardando...' : 'Actualizar Stock'}
                    </button>
                </form>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">Alacena - Sistema de Inventario</p>
                </div>
            </div>
        </div>
    )
}
