'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Budget {
    id: string;
    name: string;
    amount: number;
    period: string;
    startDate: string;
    endDate?: string;
    alertThreshold?: number;
    isActive: boolean;
    category?: {
        name: string;
        icon?: string;
        color?: string;
    };
    spent?: number;
    percentage?: number;
    remaining?: number;
    isOverBudget?: boolean;
    isNearLimit?: boolean;
}

const periodLabels: Record<string, string> = {
    WEEKLY: 'Semanal',
    MONTHLY: 'Mensual',
    QUARTERLY: 'Trimestral',
    YEARLY: 'Anual',
    CUSTOM: 'Personalizado'
};

export default function BudgetsPage() {
    const [budgets, setBudgets] = useState<Budget[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBudgets();
    }, []);

    const fetchBudgets = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/financia/budgets', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setBudgets(data.data || []);
        } catch (error) {
            console.error('Error fetching budgets:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Cargando presupuestos...</div>
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
                        <h1 className="text-3xl font-bold text-gray-900">📊 Presupuestos</h1>
                        <p className="text-gray-600 mt-2">{budgets.length} presupuestos activos</p>
                    </div>
                    <button
                        className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg shadow transition"
                    >
                        + Nuevo Presupuesto
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {budgets.map((budget) => {
                        const percentage = budget.percentage || 0;
                        const spent = budget.spent || 0;
                        const remaining = budget.remaining || budget.amount;

                        let progressColor = 'bg-green-500';
                        if (budget.isOverBudget) {
                            progressColor = 'bg-red-500';
                        } else if (budget.isNearLimit) {
                            progressColor = 'bg-yellow-500';
                        }

                        return (
                            <div
                                key={budget.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-2">
                                        {budget.category?.icon && (
                                            <span className="text-2xl">{budget.category.icon}</span>
                                        )}
                                        <div>
                                            <h3 className="font-bold text-lg">{budget.name}</h3>
                                            {budget.category && (
                                                <p className="text-sm text-gray-500">{budget.category.name}</p>
                                            )}
                                            <p className="text-xs text-gray-400">{periodLabels[budget.period]}</p>
                                        </div>
                                    </div>
                                    {budget.isOverBudget && (
                                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">
                                            ⚠️ Excedido
                                        </span>
                                    )}
                                    {budget.isNearLimit && !budget.isOverBudget && (
                                        <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">
                                            ⚡ Cerca del límite
                                        </span>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <div className="flex justify-between text-sm mb-1">
                                        <span className="text-gray-600">Gastado</span>
                                        <span className="font-semibold">${spent.toFixed(2)} / ${budget.amount.toFixed(2)}</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                        <div
                                            className={`h-full ${progressColor} transition-all duration-300`}
                                            style={{ width: `${Math.min(percentage, 100)}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between text-xs mt-1">
                                        <span className="text-gray-500">{percentage.toFixed(1)}%</span>
                                        <span className={remaining >= 0 ? 'text-green-600' : 'text-red-600'}>
                                            {remaining >= 0 ? `Quedan $${remaining.toFixed(2)}` : `Exceso $${Math.abs(remaining).toFixed(2)}`}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-xs text-gray-500 space-y-1">
                                    <p>Desde: {new Date(budget.startDate).toLocaleDateString('es-AR')}</p>
                                    {budget.endDate && (
                                        <p>Hasta: {new Date(budget.endDate).toLocaleDateString('es-AR')}</p>
                                    )}
                                    {budget.alertThreshold && (
                                        <p>Alerta al: {(budget.alertThreshold * 100).toFixed(0)}%</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {budgets.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-xl mb-4">No hay presupuestos configurados</p>
                        <p>Crea presupuestos para controlar tus gastos</p>
                    </div>
                )}
            </div>
        </div>
    );
}
