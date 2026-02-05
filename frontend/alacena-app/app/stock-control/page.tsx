'use client'

import { useState, useEffect } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export default function StockControlPage() {
    const [containers, setContainers] = useState<any[]>([])
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [totalWeight, setTotalWeight] = useState('')
    const [message, setMessage] = useState('')
    const [completed, setCompleted] = useState<Set<string>>(new Set())

    useEffect(() => {
        loadContainers()
    }, [])

    const loadContainers = async () => {
        try {
            setLoading(true)
            const [containersRes, reservesRes] = await Promise.all([
                fetch(`${API_URL}/api/alacena/containers?limit=1000`),
                fetch(`${API_URL}/api/alacena/reserves?limit=1000`)
            ])

            const containersData = await containersRes.json()
            const reservesData = await reservesRes.json()

            // Filtrar solo frascos (JAR-) y ordenar
            const jars = containersData.data
                ?.filter((c: any) => c.code.startsWith('JAR-'))
                .sort((a: any, b: any) => a.code.localeCompare(b.code))
                .map((c: any) => {
                    const reserve = reservesData.data?.find(
                        (r: any) => r.container?.code === c.code && r.netWeight_g !== null
                    )
                    return {
                        ...c,
                        reserve,
                        item: reserve?.item?.name || 'Sin producto',
                        netWeight: reserve?.netWeight_g || 0,
                        reserveId: reserve?.id || null
                    }
                }) || []

            setContainers(jars)
            if (jars.length > 0) {
                setTotalWeight(String((jars[0].netWeight || 0) + (jars[0].type?.tareWeight_g || 0)))
            }
        } catch (err) {
            console.error('Error:', err)
        } finally {
            setLoading(false)
        }
    }

    const currentContainer = containers[currentIndex]
    const tare = currentContainer?.type?.tareWeight_g || 0
    const netWeight = totalWeight ? Math.max(0, parseInt(totalWeight) - tare) : 0
    const progress = containers.length > 0 ? Math.round(((currentIndex + 1) / containers.length) * 100) : 0

    const handleNext = async (skipUpdate = false) => {
        if (!currentContainer) return

        setSaving(true)
        setMessage('')

        try {
            if (!skipUpdate && currentContainer.reserveId) {
                const total = parseInt(totalWeight)
                if (!isNaN(total) && total >= 0) {
                    const net = Math.max(0, total - tare)

                    await fetch(`${API_URL}/api/alacena/reserves/${currentContainer.reserveId}`, {
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ netWeight_g: net })
                    })

                    setCompleted(prev => new Set([...prev, currentContainer.code]))
                }
            } else {
                setCompleted(prev => new Set([...prev, currentContainer.code]))
            }

            // Avanzar al siguiente
            if (currentIndex < containers.length - 1) {
                const nextIndex = currentIndex + 1
                const nextContainer = containers[nextIndex]
                setCurrentIndex(nextIndex)
                setTotalWeight(String((nextContainer.netWeight || 0) + (nextContainer.type?.tareWeight_g || 0)))
                setMessage('')
            } else {
                setMessage('✅ ¡Control de stock completado!')
            }
        } catch (err) {
            console.error('Error:', err)
            setMessage('❌ Error al actualizar')
        } finally {
            setSaving(false)
        }
    }

    const handlePrevious = () => {
        if (currentIndex > 0) {
            const prevIndex = currentIndex - 1
            const prevContainer = containers[prevIndex]
            setCurrentIndex(prevIndex)
            setTotalWeight(String((prevContainer.netWeight || 0) + (prevContainer.type?.tareWeight_g || 0)))
            setMessage('')
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-400 mx-auto mb-4"></div>
                    <p className="text-white text-lg">Cargando frascos...</p>
                </div>
            </div>
        )
    }

    if (currentIndex >= containers.length) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-green-900 to-green-800 flex items-center justify-center p-4">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">¡Completado!</h1>
                    <p className="text-gray-600 mb-6">
                        Control de stock finalizado para {completed.size} frascos
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                    >
                        Reiniciar Control
                    </button>
                </div>
            </div>
        )
    }

    if (!currentContainer) return null

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4">
            {/* Progress Bar */}
            <div className="max-w-4xl mx-auto mb-4">
                <div className="bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-amber-500 h-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-slate-300">
                    <span>Frasco {currentIndex + 1} de {containers.length}</span>
                    <span>{completed.size} completados</span>
                </div>
            </div>

            {/* Main Card */}
            <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="text-6xl mb-3">🏺</div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Control de Stock</h1>
                    <p className="text-3xl font-bold text-amber-600">{currentContainer.code}</p>
                </div>

                {/* Current Info */}
                <div className="bg-slate-50 rounded-xl p-6 mb-6">
                    <div className="space-y-2">
                        <p className="text-xl font-bold text-slate-800">{currentContainer.item}</p>
                        <div className="flex items-baseline gap-2">
                            <p className="text-2xl font-bold text-slate-600">{currentContainer.netWeight}g</p>
                            <p className="text-sm text-slate-400">neto actual</p>
                        </div>
                        <p className="text-xs text-slate-400">Tara: {tare}g</p>
                    </div>
                </div>

                {/* Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Peso Total del Frasco (gramos)
                    </label>
                    <input
                        type="number"
                        value={totalWeight}
                        onChange={(e) => setTotalWeight(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault()
                                handleNext(false)
                            }
                        }}
                        className="w-full px-4 py-4 text-3xl text-center border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        placeholder="0"
                        disabled={saving}
                        autoFocus
                    />
                    {totalWeight && (
                        <div className="mt-2 text-center">
                            <p className="text-sm text-gray-600">
                                Peso neto: <span className="font-bold text-amber-600">{netWeight}g</span>
                            </p>
                            <p className="text-xs text-gray-400">
                                ({totalWeight}g total - {tare}g tara)
                            </p>
                        </div>
                    )}
                </div>

                {message && (
                    <div className={`mb-4 p-3 rounded-lg text-center ${message.includes('✅') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                        {message}
                    </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => handleNext(true)}
                        disabled={saving}
                        className="py-3 bg-gray-500 text-white rounded-lg font-semibold hover:bg-gray-600 transition disabled:opacity-50"
                    >
                        OK sin cambios
                    </button>
                    <button
                        onClick={() => handleNext(false)}
                        disabled={saving || !totalWeight}
                        className="py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition disabled:opacity-50"
                    >
                        {saving ? 'Guardando...' : 'Actualizar →'}
                    </button>
                </div>

                {/* Navigation */}
                {currentIndex > 0 && (
                    <button
                        onClick={handlePrevious}
                        disabled={saving}
                        className="w-full mt-3 py-2 text-slate-600 hover:text-slate-800 transition text-sm"
                    >
                        ← Volver al anterior
                    </button>
                )}
            </div>
        </div>
    )
}
