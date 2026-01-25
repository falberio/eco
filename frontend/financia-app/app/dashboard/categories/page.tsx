'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Category {
    id: string;
    code?: string;
    name: string;
    icon?: string;
    color?: string;
    parent?: { id: string; name: string };
    children?: Array<{ id: string; name: string; icon?: string; color?: string }>;
    _count?: {
        transactions: number;
        budgets: number;
    };
}

export default function CategoriesPage() {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const [newCategory, setNewCategory] = useState({
        name: '',
        icon: '',
        color: '#3b82f6',
        notes: ''
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/financia/categories', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setCategories(data.data || []);
        } catch (error) {
            console.error('Error fetching categories:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/financia/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newCategory)
            });

            if (response.ok) {
                setShowCreateForm(false);
                setNewCategory({ name: '', icon: '', color: '#3b82f6', notes: '' });
                fetchCategories();
            }
        } catch (error) {
            console.error('Error creating category:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Cargando categorías...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
                            ← Volver al inicio
                        </Link>
                        <h1 className="text-3xl font-bold text-gray-900">📁 Categorías</h1>
                        <p className="text-gray-600 mt-2">{categories.length} categorías registradas</p>
                    </div>
                    <button
                        onClick={() => setShowCreateForm(!showCreateForm)}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg shadow transition"
                    >
                        + Nueva Categoría
                    </button>
                </div>

                {showCreateForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">Crear Nueva Categoría</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        value={newCategory.name}
                                        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Icono (emoji)</label>
                                    <input
                                        type="text"
                                        value={newCategory.icon}
                                        onChange={(e) => setNewCategory({ ...newCategory, icon: e.target.value })}
                                        className="w-full border rounded px-3 py-2"
                                        placeholder="🍔 🚗 💊 ..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Color</label>
                                    <input
                                        type="color"
                                        value={newCategory.color}
                                        onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                                        className="w-full border rounded px-3 py-2 h-10"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Notas</label>
                                <textarea
                                    value={newCategory.notes}
                                    onChange={(e) => setNewCategory({ ...newCategory, notes: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    rows={2}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                                    Crear
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCreateForm(false)}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            style={{ borderLeft: `4px solid ${category.color || '#3b82f6'}` }}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    {category.icon && <span className="text-2xl">{category.icon}</span>}
                                    <div>
                                        <h3 className="font-bold text-lg">{category.name}</h3>
                                        {category.parent && (
                                            <p className="text-sm text-gray-500">Subcategoría de: {category.parent.name}</p>
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {category._count && (
                                    <>
                                        <p className="text-sm text-gray-600">
                                            📊 {category._count.transactions} transacciones
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            💰 {category._count.budgets} presupuestos
                                        </p>
                                    </>
                                )}

                                {category.children && category.children.length > 0 && (
                                    <div className="mt-3 pt-3 border-t">
                                        <p className="text-xs text-gray-500 mb-1">Subcategorías:</p>
                                        <div className="flex flex-wrap gap-1">
                                            {category.children.map((child) => (
                                                <span
                                                    key={child.id}
                                                    className="text-xs bg-gray-100 px-2 py-1 rounded"
                                                >
                                                    {child.icon} {child.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {category.code && (
                                <p className="text-xs text-gray-400 mt-3">Código: {category.code}</p>
                            )}
                        </div>
                    ))}
                </div>

                {categories.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-xl mb-4">No hay categorías registradas</p>
                        <p>Crea categorías para organizar tus transacciones</p>
                    </div>
                )}
            </div>
        </div>
    );
}
