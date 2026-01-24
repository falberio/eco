'use client'

import { useEffect, useRef, useState } from 'react'
import QRCode from 'qrcode'

export default function QRCodesPage() {
    const stockControlRef = useRef<HTMLCanvasElement>(null)
    const [copied, setCopied] = useState<string | null>(null)
    const [qrCodes, setQrCodes] = useState<any[]>([])

    useEffect(() => {
        // Configurar URLs una vez que estamos en el cliente
        const codes = [
            {
                id: 'stock-control',
                label: 'Control de Stock Masivo',
                url: `${window.location.origin}/stock-control`,
                description: 'Actualizar todos los frascos en secuencia',
                icon: '📋',
                color: 'from-amber-600 to-orange-600'
            }
        ]
        setQrCodes(codes)

        // Generar QR codes después de un pequeño delay para asegurar que el DOM está listo
        setTimeout(() => {
            codes.forEach(qr => {
                const canvas = document.getElementById(qr.id) as HTMLCanvasElement
                if (canvas) {
                    QRCode.toCanvas(canvas, qr.url, {
                        width: 280,
                        margin: 2,
                        color: {
                            dark: '#1f2937',
                            light: '#ffffff'
                        }
                    })
                }
            })
        }, 100)
    }, [])

    const copyUrl = (url: string, id: string) => {
        navigator.clipboard.writeText(url)
        setCopied(id)
        setTimeout(() => setCopied(null), 2000)
    }

    const printQR = (id: string) => {
        const canvas = document.getElementById(id) as HTMLCanvasElement
        const qr = qrCodes.find(q => q.id === id)
        if (!canvas || !qr) return

        const printWindow = window.open('', '_blank')
        if (!printWindow) return

        printWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>${qr.label}</title>
                <style>
                    body {
                        font-family: system-ui, -apple-system, sans-serif;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        text-align: center;
                        border: 3px solid #1f2937;
                        border-radius: 16px;
                        padding: 32px;
                        max-width: 400px;
                    }
                    .icon { font-size: 48px; margin-bottom: 16px; }
                    h1 { font-size: 24px; margin-bottom: 8px; color: #1f2937; }
                    p { font-size: 14px; color: #6b7280; margin-bottom: 24px; }
                    img { width: 280px; height: 280px; }
                    .url { font-size: 12px; color: #9ca3af; margin-top: 16px; word-break: break-all; }
                    @media print {
                        body { padding: 0; }
                        .container { border: 2px solid #1f2937; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="icon">${qr.icon}</div>
                    <h1>${qr.label}</h1>
                    <p>${qr.description}</p>
                    <img src="${canvas.toDataURL()}" alt="QR Code" />
                    <div class="url">${qr.url}</div>
                </div>
                <script>
                    window.onload = () => {
                        setTimeout(() => {
                            window.print()
                            window.onafterprint = () => window.close()
                        }, 250)
                    }
                </script>
            </body>
            </html>
        `)
        printWindow.document.close()
    }

    if (qrCodes.length === 0) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-amber-400 mx-auto mb-4"></div>
                    <p className="text-white text-lg">Generando códigos QR...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-white mb-3">Códigos QR de Acceso</h1>
                    <p className="text-slate-300">Escanea o imprime estos códigos para acceso rápido</p>
                </div>

                {/* QR Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {qrCodes.map(qr => (
                        <div key={qr.id} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className={`bg-gradient-to-r ${qr.color} p-6 text-center`}>
                                <div className="text-6xl mb-2">{qr.icon}</div>
                                <h2 className="text-2xl font-bold text-white">{qr.label}</h2>
                            </div>

                            <div className="p-6">
                                <p className="text-gray-600 text-center mb-6">{qr.description}</p>

                                <div className="flex justify-center mb-6">
                                    <canvas id={qr.id} className="border-4 border-gray-100 rounded-lg"></canvas>
                                </div>

                                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                                    <p className="text-xs text-gray-500 break-all">{qr.url}</p>
                                </div>

                                <div className="grid grid-cols-2 gap-3">
                                    <button
                                        onClick={() => copyUrl(qr.url, qr.id)}
                                        className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition text-sm font-medium"
                                    >
                                        {copied === qr.id ? '✓ Copiado' : 'Copiar URL'}
                                    </button>
                                    <button
                                        onClick={() => printQR(qr.id)}
                                        className="px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition text-sm font-medium"
                                    >
                                        🖨️ Imprimir
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Instructions */}
                <div className="mt-12 bg-white rounded-2xl shadow-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">📱 Cómo usar</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">Escanear con el móvil:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                                <li>Abre la cámara de tu teléfono</li>
                                <li>Apunta al código QR</li>
                                <li>Toca la notificación que aparece</li>
                                <li>Se abrirá directamente la función</li>
                            </ol>
                        </div>
                        <div>
                            <h4 className="font-bold text-gray-700 mb-2">Imprimir y pegar:</h4>
                            <ol className="list-decimal list-inside space-y-1 text-gray-600">
                                <li>Haz clic en "Imprimir"</li>
                                <li>Guarda como PDF o imprime</li>
                                <li>Recorta y pega en la estantería</li>
                                <li>Escanea cuando necesites</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
