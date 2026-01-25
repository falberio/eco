'use client'

import { useState, useEffect } from 'react'

const API_URL = 'https://alacena-backend.fly.dev'

export default function TestQRPage() {
    const [step, setStep] = useState(1)
    const [containers, setContainers] = useState<any>(null)
    const [reserves, setReserves] = useState<any>(null)
    const [error, setError] = useState('')

    async function testStep1() {
        try {
            setError('')
            console.log('Step 1: Fetching containers...')
            const res = await fetch(`${API_URL}/api/alacena/containers?limit=1000`)
            const data = await res.json()
            console.log('Containers response:', data)
            setContainers(data)
            setStep(2)
        } catch (err: any) {
            console.error('Step 1 error:', err)
            setError(`Step 1 error: ${err.message}`)
        }
    }

    async function testStep2() {
        try {
            setError('')
            console.log('Step 2: Fetching reserves...')
            const res = await fetch(`${API_URL}/api/alacena/reserves?limit=1000`)
            const data = await res.json()
            console.log('Reserves response:', data)
            setReserves(data)
            setStep(3)
        } catch (err: any) {
            console.error('Step 2 error:', err)
            setError(`Step 2 error: ${err.message}`)
        }
    }

    const jar003Container = containers?.data?.find((c: any) => c.code === 'JAR-003')
    const jar003Reserve = reserves?.data?.find((r: any) => r.container?.code === 'JAR-003')

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-3xl font-bold mb-8">🔍 QR Debug Test - JAR-003</h1>

            {error && (
                <div className="bg-red-600 text-white p-4 rounded mb-4">
                    ❌ {error}
                </div>
            )}

            <div className="space-y-4">
                <div className="bg-gray-800 p-6 rounded">
                    <h2 className="text-xl font-bold mb-4">Step 1: Fetch Containers</h2>
                    <button
                        onClick={testStep1}
                        className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Test Step 1
                    </button>
                    {containers && (
                        <div className="mt-4">
                            <p>✅ Total containers: {containers.data?.length || 0}</p>
                            {jar003Container ? (
                                <div className="bg-green-900 p-3 rounded mt-2">
                                    <p>✅ JAR-003 FOUND!</p>
                                    <pre className="text-xs mt-2">{JSON.stringify(jar003Container, null, 2)}</pre>
                                </div>
                            ) : (
                                <p className="text-red-400 mt-2">❌ JAR-003 NOT FOUND</p>
                            )}
                        </div>
                    )}
                </div>

                {step >= 2 && (
                    <div className="bg-gray-800 p-6 rounded">
                        <h2 className="text-xl font-bold mb-4">Step 2: Fetch Reserves</h2>
                        <button
                            onClick={testStep2}
                            className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Test Step 2
                        </button>
                        {reserves && (
                            <div className="mt-4">
                                <p>✅ Total reserves: {reserves.data?.length || 0}</p>
                                {jar003Reserve ? (
                                    <div className="bg-green-900 p-3 rounded mt-2">
                                        <p>✅ JAR-003 RESERVE FOUND!</p>
                                        <p className="mt-2">Item: {jar003Reserve.item?.name}</p>
                                        <p>Weight: {jar003Reserve.netWeight_g}g</p>
                                        <pre className="text-xs mt-2">{JSON.stringify(jar003Reserve, null, 2)}</pre>
                                    </div>
                                ) : (
                                    <p className="text-red-400 mt-2">❌ JAR-003 RESERVE NOT FOUND</p>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="mt-8 bg-yellow-900 p-4 rounded">
                <h3 className="font-bold mb-2">Console Log</h3>
                <p className="text-sm">Abrí la consola del navegador (F12) para ver los logs detallados</p>
            </div>
        </div>
    )
}
