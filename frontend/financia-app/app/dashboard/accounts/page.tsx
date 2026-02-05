'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Account {
    id: string;
    code?: string;
    name: string;
    type: string;
    currentBalance: number;
    currency: string;
    icon?: string;
    color?: string;
    isActive: boolean;
}

const accountTypeLabels: Record<string, string> = {
    CASH: 'Efectivo',
    BANK: 'Banco',
    CREDIT_CARD: 'Tarjeta de Crédito',
    DEBIT_CARD: 'Tarjeta de Débito',
    DIGITAL: 'Billetera Digital',
    OTHER: 'Otro'
};

const accountTypeIcons: Record<string, string> = {
    CASH: '💵',
    BANK: '🏦',
    CREDIT_CARD: '💳',
    DEBIT_CARD: '💳',
    DIGITAL: '📱',
    OTHER: '💼'
};

export default function AccountsPage() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateForm, setShowCreateForm] = useState(false);

    const [newAccount, setNewAccount] = useState({
        name: '',
        type: 'CASH',
        initialBalance: 0,
        currency: 'ARS',
        notes: ''
    });

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        try {
            const response = await fetch('http://localhost:4000/api/financia/accounts', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            const data = await response.json();
            setAccounts(data.data || []);
        } catch (error) {
            console.error('Error fetching accounts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/financia/accounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(newAccount)
            });

            if (response.ok) {
                setShowCreateForm(false);
                setNewAccount({ name: '', type: 'CASH', initialBalance: 0, currency: 'ARS', notes: '' });
                fetchAccounts();
            }
        } catch (error) {
            console.error('Error creating account:', error);
        }
    };

    const totalBalance = accounts.reduce((sum, acc) => sum + Number(acc.currentBalance), 0);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl text-gray-600">Cargando cuentas...</div>
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
                        <h1 className="text-3xl font-bold text-gray-900">🏦 Cuentas</h1>
                        <p className="text-gray-600 mt-2">
                            Balance total: <span className="font-bold text-2xl text-blue-600">
                                ${totalBalance.toFixed(2)} ARS
                            </span>
                        </p>
                    </div>
                    <button
                        onClick={() => setShowCreateForm(!showCreateForm)}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow transition"
                    >
                        + Nueva Cuenta
                    </button>
                </div>

                {showCreateForm && (
                    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                        <h2 className="text-xl font-bold mb-4">Crear Nueva Cuenta</h2>
                        <form onSubmit={handleCreate} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Nombre</label>
                                    <input
                                        type="text"
                                        value={newAccount.name}
                                        onChange={(e) => setNewAccount({ ...newAccount, name: e.target.value })}
                                        className="w-full border rounded px-3 py-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Tipo</label>
                                    <select
                                        value={newAccount.type}
                                        onChange={(e) => setNewAccount({ ...newAccount, type: e.target.value })}
                                        className="w-full border rounded px-3 py-2"
                                    >
                                        {Object.entries(accountTypeLabels).map(([key, label]) => (
                                            <option key={key} value={key}>{label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Balance Inicial</label>
                                    <input
                                        type="number"
                                        step="0.01"
                                        value={newAccount.initialBalance}
                                        onChange={(e) => setNewAccount({ ...newAccount, initialBalance: parseFloat(e.target.value) })}
                                        className="w-full border rounded px-3 py-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Moneda</label>
                                    <select
                                        value={newAccount.currency}
                                        onChange={(e) => setNewAccount({ ...newAccount, currency: e.target.value })}
                                        className="w-full border rounded px-3 py-2"
                                    >
                                        <option value="ARS">ARS</option>
                                        <option value="USD">USD</option>
                                        <option value="EUR">EUR</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Notas</label>
                                <textarea
                                    value={newAccount.notes}
                                    onChange={(e) => setNewAccount({ ...newAccount, notes: e.target.value })}
                                    className="w-full border rounded px-3 py-2"
                                    rows={2}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
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
                    {accounts.map((account) => (
                        <div
                            key={account.id}
                            className={`bg-white rounded-lg shadow-md p-6 ${!account.isActive ? 'opacity-60' : ''}`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <span className="text-3xl">{accountTypeIcons[account.type]}</span>
                                    <div>
                                        <h3 className="font-bold text-lg">{account.name}</h3>
                                        <p className="text-sm text-gray-500">{accountTypeLabels[account.type]}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <p className="text-sm text-gray-600">Balance</p>
                                <p className={`text-2xl font-bold ${Number(account.currentBalance) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                    ${Number(account.currentBalance).toFixed(2)}
                                </p>
                                <p className="text-xs text-gray-500">{account.currency}</p>
                            </div>

                            {account.code && (
                                <p className="text-xs text-gray-500 mb-2">Código: {account.code}</p>
                            )}

                            <Link
                                href={`/dashboard/accounts/${account.id}`}
                                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                            >
                                Ver detalles →
                            </Link>
                        </div>
                    ))}
                </div>

                {accounts.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        <p className="text-xl mb-4">No hay cuentas registradas</p>
                        <p>Crea tu primera cuenta para comenzar</p>
                    </div>
                )}
            </div>
        </div>
    );
}
