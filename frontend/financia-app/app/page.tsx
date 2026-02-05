import Link from 'next/link';

export default function Home() {
    return (
        <main className="min-h-screen p-8 bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="max-w-6xl mx-auto">
                <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4">
                        💼 Financia
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                        Gestión Financiera y Presupuestaria
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link
                            href="/dashboard/accounts"
                            className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg shadow transition-all hover:shadow-lg"
                        >
                            <div className="text-3xl mb-2">🏦</div>
                            <h2 className="text-lg font-semibold">Cuentas</h2>
                            <p className="text-sm opacity-90">Gestión de cuentas</p>
                        </Link>

                        <Link
                            href="/dashboard/transactions"
                            className="bg-indigo-500 hover:bg-indigo-600 text-white p-6 rounded-lg shadow transition-all hover:shadow-lg"
                        >
                            <div className="text-3xl mb-2">💸</div>
                            <h2 className="text-lg font-semibold">Transacciones</h2>
                            <p className="text-sm opacity-90">Ingresos y gastos</p>
                        </Link>

                        <Link
                            href="/dashboard/categories"
                            className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-lg shadow transition-all hover:shadow-lg"
                        >
                            <div className="text-3xl mb-2">📁</div>
                            <h2 className="text-lg font-semibold">Categorías</h2>
                            <p className="text-sm opacity-90">Organización</p>
                        </Link>

                        <Link
                            href="/dashboard/budgets"
                            className="bg-pink-500 hover:bg-pink-600 text-white p-6 rounded-lg shadow transition-all hover:shadow-lg"
                        >
                            <div className="text-3xl mb-2">📊</div>
                            <h2 className="text-lg font-semibold">Presupuestos</h2>
                            <p className="text-sm opacity-90">Control financiero</p>
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                        Funcionalidades
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-semibold text-blue-700 mb-2">✅ Implementado</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li>• Gestión de cuentas (efectivo, banco, tarjetas, digital)</li>
                                <li>• Registro de transacciones (ingresos, gastos, transferencias)</li>
                                <li>• Sistema de categorías jerárquicas</li>
                                <li>• Presupuestos por categoría y período</li>
                                <li>• Cálculo automático de balances</li>
                                <li>• Estadísticas y reportes</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-semibold text-purple-700 mb-2">🚀 Próximamente</h3>
                            <ul className="space-y-1 text-gray-600">
                                <li>• Gráficos y visualizaciones</li>
                                <li>• Transacciones recurrentes</li>
                                <li>• Exportación de datos</li>
                                <li>• Alertas de presupuesto</li>
                                <li>• Metas de ahorro</li>
                                <li>• Multi-moneda</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
