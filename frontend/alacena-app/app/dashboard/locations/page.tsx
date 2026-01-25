'use client'

import { useState, useEffect } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

interface Location {
    id: string
    code?: string
    name: string
    kind: 'AREA' | 'SECTION' | 'SLOT'
    parentId?: string
    sortIndex: number
    notes?: string
    createdAt: string
    updatedAt: string
}

export default function LocationsPage() {
    const [locations, setLocations] = useState<Location[]>([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [editingId, setEditingId] = useState<string | null>(null)
    const [generalError, setGeneralError] = useState<string>('')
    const [submitLoading, setSubmitLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [totalItems, setTotalItems] = useState(0)
    const ITEMS_PER_PAGE = 50
    const [formData, setFormData] = useState<Partial<Location>>({
        name: '',
        kind: 'AREA',
        code: '',
        sortIndex: 0,
        notes: '',
    })

    // Cargar ubicaciones
    useEffect(() => {
        fetchLocations()
    }, [currentPage])

    async function fetchLocations() {
        try {
            setLoading(true)
            const skip = currentPage * ITEMS_PER_PAGE
            const res = await fetch(`${API_URL}/api/alacena/locations?limit=${ITEMS_PER_PAGE}&skip=${skip}`)
            const data = await res.json()
            setLocations(data.data || [])
            setTotalItems(data.pagination?.total || 0)
        } catch (error) {
            console.error('Error fetching locations:', error)
        } finally {
            setLoading(false)
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setGeneralError('')

        try {
            setSubmitLoading(true)
            const url = editingId ? `${API_URL}/api/alacena/locations/${editingId}` : `${API_URL}/api/alacena/locations`
            const method = editingId ? 'PUT' : 'POST'

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            const responseData = await res.json()

            if (!res.ok) {
                throw new Error(responseData.error || responseData.message || 'Error al guardar')
            }

            await fetchLocations()
            setFormData({ name: '', kind: 'AREA', code: '', sortIndex: 0, notes: '' })
            setShowForm(false)
            setEditingId(null)
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Error desconocido'
            console.error('Error:', error)
            setGeneralError(`❌ ${errorMsg}`)
        } finally {
            setSubmitLoading(false)
        }
    }

    function handleEdit(location: Location) {
        setFormData(location)
        setEditingId(location.id)
        setShowForm(true)
    }

    async function handleDelete(id: string) {
        if (confirm('¿Estás seguro?')) {
            try {
                setGeneralError('')
                const res = await fetch(`${API_URL}/api/alacena/locations/${id}`, { method: 'DELETE' })
                const responseData = await res.json()

                if (!res.ok) throw new Error(responseData.error || 'Error al eliminar')
                await fetchLocations()
            } catch (error) {
                const errorMsg = error instanceof Error ? error.message : 'Error desconocido'
                console.error('Error:', error)
                setGeneralError(`❌ ${errorMsg}`)
            }
        }
    }

    const kindLabels = { AREA: 'Área', SECTION: 'Sección', SLOT: 'Posición' }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold text-gray-800">📍 Ubicaciones</h1>
                <button
                    onClick={() => {
                        setShowForm(!showForm)
                        setEditingId(null)
                        setFormData({ name: '', kind: 'AREA', code: '', sortIndex: 0, notes: '' })
                        setGeneralError('')
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    {showForm ? 'Cancelar' : '+ Nueva Ubicación'}
                </button>
            </div>

            {generalError && (
                <div className="bg-red-50 border border-red-200 p-4 rounded text-red-800">
                    {generalError}
                </div>
            )}

            {showForm && (
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Nombre *"
                            value={formData.name || ''}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Código"
                            value={formData.code || ''}
                            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            value={formData.kind || 'AREA'}
                            onChange={(e) => setFormData({ ...formData, kind: e.target.value as 'AREA' | 'SECTION' | 'SLOT' })}
                            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="AREA">Área</option>
                            <option value="SECTION">Sección</option>
                            <option value="SLOT">Posición</option>
                        </select>
                        <input
                            type="number"
                            placeholder="Índice de orden"
                            value={formData.sortIndex || 0}
                            onChange={(e) => setFormData({ ...formData, sortIndex: parseInt(e.target.value) })}
                            className="border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <textarea
                        placeholder="Notas"
                        value={formData.notes || ''}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                    />

                    <div className="flex gap-2">
                        <button
                            type="submit"
                            disabled={submitLoading}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitLoading ? 'Guardando...' : (editingId ? 'Actualizar' : 'Crear')} Ubicación
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setShowForm(false)
                                setEditingId(null)
                                setFormData({ name: '', kind: 'AREA', code: '', sortIndex: 0, notes: '' })
                                setGeneralError('')
                            }}
                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500 transition"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            )}

            {loading ? (
                <p className="text-gray-600">Cargando...</p>
            ) : locations.length === 0 ? (
                <div className="bg-gray-50 p-6 rounded text-center text-gray-600">
                    No hay ubicaciones. Crea una para comenzar.
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-100 border-b">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Nombre</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Código</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Tipo</th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Orden</th>
                                <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locations.map((location) => (
                                <tr key={location.id} className="border-b hover:bg-gray-50">
                                    <td className="px-6 py-3 text-gray-800">{location.name}</td>
                                    <td className="px-6 py-3 text-gray-600">{location.code || '-'}</td>
                                    <td className="px-6 py-3">
                                        <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800">
                                            {kindLabels[location.kind]}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3 text-gray-600">{location.sortIndex}</td>
                                    <td className="px-6 py-3 text-right space-x-2">
                                        <button
                                            onClick={() => handleEdit(location)}
                                            className="text-blue-600 hover:text-blue-800 text-sm"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            onClick={() => handleDelete(location.id)}
                                            className="text-red-600 hover:text-red-800 text-sm"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                
                {/* Paginación */}
            <div className="mt-6 flex items-center justify-between px-6">
                <div className="text-sm text-gray-600">
                    Mostrando {locations.length > 0 ? (currentPage * ITEMS_PER_PAGE) + 1 : 0} - {Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalItems)} de {totalItems} ubicaciones
                </div>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage(p => Math.max(0, p - 1))}
                        disabled={currentPage === 0}
                        className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={() => setCurrentPage(p => p + 1)}
                        disabled={(currentPage + 1) * ITEMS_PER_PAGE >= totalItems}
                        className="px-4 py-2 text-sm bg-white border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Siguiente →
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}
