'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Transaction {
    id: string;
    type: string;
    amount: number;
    description?: string;
    transactionDate: string;
    fromAccount?: { name: string };
    toAccount?: { name: string };
    category?: { name: string; icon?: string; color?: string };
}

const transactionTypeLabels: Record<string, string> = {
    INCOME: 'Ingreso',
    EXPENSE: 'Gasto',
    TRANSFER: 'Transferencia'
};

const transactionTypeColors: Record<string, string> = {
    INCOME: 'text-green-600',
    EXPENSE: 'text-red-600',
    TRANSFER: 'text-blue-600'
};

export default function TransactionsPage() {
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({ income: 0, expense: 0, balance: 0 });

    useEffect(() => {
        fetchTransactions();
        fetchStats();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/financia/transactions?limit=50', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setTransactions(data.data || []);
        } catch (error) {
            console.error('Error fetching transactions:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/financia/transactions/stats', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setStats({
                income: data.income?.total || 0,
                expense: data.expense?.total || 0,
                balance: data.balance || 0
            });
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Cargando transacciones...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
                        ← Volver al inicio
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">💸 Transacciones</h1>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-sm text-gray-600 mb-1">Ingresos</p>
                        <p className="text-3xl font-bold text-green-600">
                            ${stats.income.toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-sm text-gray-600 mb-1">Gastos</p>
                        <p className="text-3xl font-bold text-red-600">
                            ${stats.expense.toFixed(2)}
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-sm text-gray-600 mb-1">Balance</p>
                        <p className={`text-3xl font-bold ${stats.balance >= 0 ? 'text-blue-600' : 'text-red-600'}`}>
                            ${stats.balance.toFixed(2)}
                        </p>
                    </div>
                </div>

                {/* Transactions List */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="p-6 border-b">
                        <h2 className="text-xl font-bold">Últimas Transacciones</h2>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Fecha</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Categoría</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cuenta</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Monto</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {transactions.map((tx) => (
                                    <tr key={tx.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {new Date(tx.transactionDate).toLocaleDateString('es-AR')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`text-sm font-medium ${transactionTypeColors[tx.type]}`}>
                                                {transactionTypeLabels[tx.type]}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-900">
                                            {tx.description || '-'}
                                        </td>
                                        <td className="px-6 py-4 text-sm">
                                            {tx.category ? (
                                                <span className="flex items-center gap-1">
                                                    {tx.category.icon && <span>{tx.category.icon}</span>}
                                                    <span>{tx.category.name}</span>
                                                </span>
                                            ) : (
                                                '-'
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-sm text-gray-600">
                                            {tx.type === 'EXPENSE' && tx.fromAccount?.name}
                                            {tx.type === 'INCOME' && tx.toAccount?.name}
                                            {tx.type === 'TRANSFER' && `${tx.fromAccount?.name} → ${tx.toAccount?.name}`}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right">
                                            <span className={`text-sm font-semibold ${transactionTypeColors[tx.type]}`}>
                                                {tx.type === 'EXPENSE' ? '-' : '+'}${Number(tx.amount).toFixed(2)}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {transactions.length === 0 && (
                        <div className="text-center py-12 text-gray-500">
                            <p className="text-xl mb-4">No hay transacciones registradas</p>
                            <p>Las transacciones aparecerán aquí</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
