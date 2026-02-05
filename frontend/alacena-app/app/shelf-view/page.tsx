'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Reserve {
    id: string;
    item?: {
        id: string;
        name: string;
        category?: string;
    };
    qty_g?: number;
    container?: {
        id: string;
        code: string;
        type?: {
            tareWeight_g?: number;
            nominalVolume_ml?: number;
        };
    };
}

interface Slot {
    id: string;
    code: string;
    name: string;
    sortIndex: number;
    notes?: string;
    isBlocked: boolean;
    reserve?: Reserve;
}

interface Shelf {
    id: string;
    code: string;
    name: string;
    sortIndex: number;
    slots: Slot[];
}

// Obtener textura y color del producto según su nombre - estilo ilustrado
function getProductVisual(productName: string): { color: string; pattern: string; particleSize: string } {
    const name = productName.toLowerCase();

    // Azúcar impalpable / Azúcar común (blanco fino)
    if (name.includes('azúcar impalpable') || name.includes('azucar impalpable')) {
        return { color: '#fafaf8', pattern: 'powdery', particleSize: 'tiny' };
    }
    if (name.includes('azúcar') || name.includes('azucar')) {
        return { color: '#f5f3e8', pattern: 'crystal', particleSize: 'small' };
    }

    // Nueces (formas grandes marrones)
    if (name.includes('nuez') || name.includes('nueces')) {
        return { color: '#b8956f', pattern: 'nuts', particleSize: 'large' };
    }

    // Sal rosa (cristales rosas)
    if (name.includes('sal') && name.includes('rosa')) {
        return { color: '#f4c8c0', pattern: 'crystal', particleSize: 'medium' };
    }
    if (name.includes('sal')) {
        return { color: '#fafaf6', pattern: 'crystal', particleSize: 'small' };
    }

    // Maíz pisingallo (amarillo grande)
    if (name.includes('maíz') || name.includes('maiz') || name.includes('pisingallo')) {
        return { color: '#f4d03f', pattern: 'corn', particleSize: 'medium' };
    }

    // Lentejas (redondas)
    if (name.includes('lenteja') && name.includes('colorada')) {
        return { color: '#d85a3f', pattern: 'lentils', particleSize: 'small' };
    }
    if (name.includes('lenteja')) {
        return { color: '#8b7355', pattern: 'lentils', particleSize: 'small' };
    }

    // Piñones (pequeños beige)
    if (name.includes('piñón') || name.includes('piñon')) {
        return { color: '#e8d5b0', pattern: 'pine-nuts', particleSize: 'small' };
    }

    // Fideos colada (morado oscuro)
    if (name.includes('fideo') && name.includes('colada')) {
        return { color: '#3d2817', pattern: 'pasta', particleSize: 'medium' };
    }

    // Duraznos/damascos secos (naranja grande)
    if (name.includes('durazno') || name.includes('damasco')) {
        return { color: '#e67e22', pattern: 'dried-fruit', particleSize: 'large' };
    }

    // Polenta (amarillo granulado)
    if (name.includes('polenta')) {
        return { color: '#f4d858', pattern: 'granular', particleSize: 'tiny' };
    }

    // Fideos de soja (blanco)
    if (name.includes('fideo') && name.includes('soja')) {
        return { color: '#f5f0e0', pattern: 'noodles', particleSize: 'medium' };
    }

    // Pasas de uva (muy oscuras)
    if (name.includes('pasa')) {
        return { color: '#2d1810', pattern: 'raisins', particleSize: 'small' };
    }

    // Avena (copos beige)
    if (name.includes('avena')) {
        return { color: '#e8dcc0', pattern: 'oats', particleSize: 'medium' };
    }

    // Arroz (blanco alargado)
    if (name.includes('arroz')) {
        return { color: '#faf8f0', pattern: 'rice', particleSize: 'small' };
    }

    // Leche en polvo (polvo blanco)
    if (name.includes('leche')) {
        return { color: '#fff8e8', pattern: 'powdery', particleSize: 'tiny' };
    }

    // Porotos
    if (name.includes('poroto') && name.includes('blanco')) {
        return { color: '#faf0e0', pattern: 'beans', particleSize: 'medium' };
    }
    if (name.includes('poroto') && name.includes('colorado')) {
        return { color: '#8b1a1a', pattern: 'beans', particleSize: 'medium' };
    }

    // Default
    return { color: '#d4a574', pattern: 'granular', particleSize: 'small' };
}

// Renderizar patrón específico del producto
function renderProductPattern(productVisual: { color: string; pattern: string }, reserveId: string) {
    const baseColor = productVisual.color;

    // Calculamos colores más oscuros y claros
    const patterns = {
        'nuts': ( // Nueces
            <div className="absolute inset-0">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: `${8 + Math.random() * 6}px`,
                            height: `${10 + Math.random() * 8}px`,
                            backgroundColor: i % 3 === 0 ? '#9e7b54' : i % 3 === 1 ? '#b8956f' : '#8b6f47',
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90}%`,
                            border: '0.5px solid #6b5638',
                            transform: `rotate(${Math.random() * 360}deg)`
                        }}
                    />
                ))}
            </div>
        ),
        'lentils': ( // Lentejas
            <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 35%, ${baseColor} 3px, transparent 3px),
                                  radial-gradient(circle at 75% 75%, ${baseColor} 3px, transparent 3px),
                                  radial-gradient(circle at 50% 10%, ${baseColor} 2.5px, transparent 2.5px)`,
                backgroundSize: '12px 12px, 14px 14px, 10px 10px',
                backgroundPosition: '0 0, 6px 6px, 3px 3px'
            }} />
        ),
        'corn': ( // Maíz
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: `${5 + Math.random() * 4}px`,
                            height: `${6 + Math.random() * 5}px`,
                            backgroundColor: i % 2 === 0 ? '#f4d03f' : '#e8c030',
                            left: `${Math.random() * 95}%`,
                            top: `${Math.random() * 95}%`,
                            borderRadius: '30%',
                            border: '0.5px solid #d4a828'
                        }}
                    />
                ))}
            </div>
        ),
        'rice': ( // Arroz
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(45deg, transparent 40%, ${baseColor} 40%, ${baseColor} 60%, transparent 60%),
                                  linear-gradient(-45deg, transparent 40%, #f5f3e8 40%, #f5f3e8 60%, transparent 60%)`,
                backgroundSize: '5px 8px, 6px 9px',
                backgroundPosition: '0 0, 3px 4px'
            }} />
        ),
        'beans': ( // Porotos
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute"
                        style={{
                            width: `${8 + Math.random() * 5}px`,
                            height: `${10 + Math.random() * 6}px`,
                            backgroundColor: baseColor,
                            left: `${Math.random() * 90}%`,
                            top: `${Math.random() * 90}%`,
                            borderRadius: '40%',
                            border: '0.5px solid rgba(0,0,0,0.3)',
                            transform: `rotate(${Math.random() * 180}deg)`
                        }}
                    />
                ))}
            </div>
        ),
        'raisins': ( // Pasas
            <div className="absolute inset-0">
                {[...Array(18)].map((_, i) => (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            width: `${3 + Math.random() * 3}px`,
                            height: `${4 + Math.random() * 4}px`,
                            backgroundColor: i % 3 === 0 ? '#2d1810' : '#1a0f0a',
                            left: `${Math.random() * 95}%`,
                            top: `${Math.random() * 95}%`,
                            borderRadius: '50%'
                        }}
                    />
                ))}
            </div>
        ),
        'default': ( // Polvo/granulado
            <div className="absolute inset-0 opacity-40" style={{
                backgroundImage: `radial-gradient(circle at 25% 35%, rgba(255,255,255,0.5) 1px, transparent 1px),
                                  radial-gradient(circle at 75% 75%, rgba(0,0,0,0.2) 0.8px, transparent 0.8px),
                                  radial-gradient(circle at 50% 10%, rgba(255,255,255,0.3) 1.2px, transparent 1.2px)`,
                backgroundSize: '6px 6px, 8px 8px, 5px 5px'
            }} />
        )
    };

    return patterns[productVisual.pattern as keyof typeof patterns] || patterns.default;
}

// Componente de frasco estilo ilustrado
function JarComponent({ reserve, isDragging = false }: { reserve: Reserve; isDragging?: boolean }) {
    const fillPercentage = getFillPercentage(reserve);
    const productVisual = getProductVisual(reserve.item?.name || '');

    return (
        <div className={`relative w-full h-full ${isDragging ? 'opacity-50' : ''}`}>
            {/* Jar container - estilo ilustrado */}
            <div className="absolute inset-0 flex flex-col">
                {/* Tapa metálica con broche */}
                <div className="relative h-[15%] flex items-end justify-center">
                    {/* Broche metálico */}
                    <div className="absolute top-0 w-[55%] h-[75%] rounded-t-lg z-10" style={{
                        background: 'linear-gradient(180deg, #9ca3af 0%, #6b7280 50%, #4b5563 100%)',
                        border: '2px solid #374151',
                        boxShadow: 'inset 0 1px 2px rgba(255,255,255,0.3), 0 2px 4px rgba(0,0,0,0.3)'
                    }}>
                        <div className="absolute inset-x-0 top-[40%] h-[2px] bg-slate-400"></div>
                    </div>
                    {/* Tapa de madera/corcho */}
                    <div className="w-[70%] h-[55%] rounded-t-lg" style={{
                        background: 'linear-gradient(180deg, #fef3c7 0%, #fde68a 100%)',
                        border: '2px solid #d97706',
                        boxShadow: '0 2px 3px rgba(0,0,0,0.2)'
                    }}></div>
                </div>

                {/* Cuerpo del frasco de vidrio */}
                <div className="relative flex-1 mx-1">
                    <div className="absolute inset-0 rounded-lg overflow-hidden" style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.3) 100%)',
                        border: '3px solid rgba(200,200,200,0.6)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset -2px 0 4px rgba(255,255,255,0.5)'
                    }}>
                        {/* Reflejo del vidrio - izquierda */}
                        <div className="absolute inset-y-0 left-0 w-[18%] pointer-events-none z-30" style={{
                            background: 'linear-gradient(90deg, rgba(255,255,255,0.7) 0%, transparent 100%)'
                        }}></div>

                        {/* Contenido del frasco */}
                        <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-lg z-10">
                            <div
                                className="transition-all duration-500 relative"
                                style={{
                                    height: `${fillPercentage}%`,
                                    backgroundColor: productVisual.color,
                                    minHeight: fillPercentage > 0 ? '20%' : '0'
                                }}
                            >
                                {/* Patrón del producto */}
                                {renderProductPattern(productVisual, reserve.id)}
                                {/* Sombra superior del contenido */}
                                <div className="absolute inset-x-0 top-0 h-2 pointer-events-none z-20" style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 100%)'
                                }}></div>
                            </div>
                        </div>

                        {/* Etiqueta del frasco */}
                        <div className="absolute inset-x-0 top-[22%] flex justify-center px-2 z-25">
                            <div className="bg-white rounded-sm px-2 py-1.5 shadow-md max-w-[85%]" style={{
                                border: '1.5px solid #333',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                            }}>
                                <p className="text-[9px] font-bold text-black leading-tight text-center uppercase tracking-wide" style={{
                                    fontFamily: 'system-ui, -apple-system, sans-serif',
                                    letterSpacing: '0.5px'
                                }}>
                                    {reserve.item?.name || 'VACÍO'}
                                </p>
                            </div>
                        </div>

                        {/* Badge de peso */}
                        {reserve.qty_g !== undefined && reserve.qty_g > 0 && (
                            <div className="absolute bottom-2 right-2 bg-black text-white text-[8px] px-2 py-1 rounded-full font-bold shadow-md z-25" style={{
                                border: '1px solid #666'
                            }}>
                                {reserve.qty_g}g
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function getFillPercentage(reserve?: Reserve) {
    if (!reserve || !reserve.qty_g) return 0;

    // Para visualización: todos los frascos entre 60% y 85% llenos
    const qty = reserve.qty_g || 0;
    if (qty > 500) return 85;
    if (qty > 300) return 75;
    if (qty > 150) return 65;
    return 60; // Mínimo visible
}

// Componente droppable (espacio)
function DroppableSlot({ slot, children, onDrop }: { slot: Slot; children: React.ReactNode; onDrop: (e: React.DragEvent) => void }) {
    const [isOver, setIsOver] = useState(false);

    return (
        <div
            className={`
        relative aspect-[3/4] rounded-lg transition-all duration-200
        ${slot.isBlocked
                    ? 'bg-gradient-to-br from-slate-400 to-slate-500 cursor-not-allowed opacity-60'
                    : slot.reserve
                        ? 'bg-gradient-to-b from-amber-100/30 to-amber-200/30'
                        : 'bg-gradient-to-br from-amber-50/50 to-slate-50/50 border-2 border-dashed border-amber-300 hover:border-amber-500 hover:bg-amber-50/30'
                }
        ${isOver && !slot.isBlocked ? 'ring-4 ring-blue-500 scale-105' : ''}
      `}
            onDragOver={(e) => {
                if (!slot.isBlocked) {
                    e.preventDefault();
                    setIsOver(true);
                }
            }}
            onDragLeave={() => setIsOver(false)}
            onDrop={(e) => {
                setIsOver(false);
                if (!slot.isBlocked) {
                    onDrop(e);
                }
            }}
        >
            {slot.isBlocked && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-3xl">⛔</span>
                </div>
            )}
            {!slot.isBlocked && !slot.reserve && (
                <div className="absolute inset-0 flex items-center justify-center text-amber-600/50 text-xs font-semibold pointer-events-none">
                    Vacío
                </div>
            )}
            {children}
        </div>
    );
}

export default function ShelfViewPage() {
    const router = useRouter();
    const [shelves, setShelves] = useState<Shelf[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [draggedReserve, setDraggedReserve] = useState<{ reserve: Reserve; slotId: string } | null>(null);
    const [moving, setMoving] = useState(false);

    useEffect(() => {
        loadShelfData();
    }, []);

    const loadShelfData = async () => {
        try {
            setLoading(true);

            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';
            console.log('🔍 API_URL:', API_URL);
            const token = localStorage.getItem('token');

            const shelvesData: Shelf[] = [];

            for (let shelfNum = 1; shelfNum <= 5; shelfNum++) {
                const shelfCode = `SHELF-${shelfNum}`;

                const slotsResponse = await fetch(`${API_URL}/api/alacena/locations?parentCode=${shelfCode}&includeChildren=true&includeReserves=true`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!slotsResponse.ok) continue;

                const slotsData = await slotsResponse.json();

                const slots: Slot[] = [];
                for (let pos = 1; pos <= 6; pos++) {
                    const slotCode = `SHELF-${shelfNum}-${pos}`;
                    const slotLocation = slotsData.data?.find((l: any) => l.code === slotCode);

                    if (slotLocation) {
                        const isBlocked = slotLocation.notes?.includes('BLOQUEADO') || false;
                        const activeReserve = slotLocation.reserves?.find((r: any) => r.status === 'ACTIVE');

                        slots.push({
                            id: slotLocation.id,
                            code: slotLocation.code,
                            name: slotLocation.name,
                            sortIndex: slotLocation.sortIndex,
                            notes: slotLocation.notes,
                            isBlocked,
                            reserve: activeReserve ? {
                                id: activeReserve.id,
                                item: activeReserve.item,
                                qty_g: activeReserve.qty_g,
                                container: activeReserve.container
                            } : undefined
                        });
                    }
                }

                shelvesData.push({
                    id: `shelf-${shelfNum}`,
                    code: shelfCode,
                    name: `Estante ${shelfNum}`,
                    sortIndex: shelfNum,
                    slots: slots.sort((a, b) => a.sortIndex - b.sortIndex)
                });
            }

            setShelves(shelvesData);
            setLoading(false);
        } catch (err: any) {
            setError(err.message || 'Error al cargar datos');
            setLoading(false);
        }
    };

    const handleDragStart = (slot: Slot, e: React.DragEvent) => {
        if (slot.reserve) {
            setDraggedReserve({ reserve: slot.reserve, slotId: slot.id });
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', slot.id);
        }
    };

    const handleDrop = async (targetSlot: Slot, e: React.DragEvent) => {
        e.preventDefault();

        if (!draggedReserve || targetSlot.isBlocked || targetSlot.id === draggedReserve.slotId) {
            setDraggedReserve(null);
            return;
        }

        // Mover el frasco
        await moveJar(draggedReserve.reserve.id, targetSlot.id);
        setDraggedReserve(null);
    };

    const moveJar = async (reserveId: string, targetLocationId: string) => {
        try {
            setMoving(true);

            const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
            const token = localStorage.getItem('token');

            const response = await fetch(`${API_URL}/api/alacena/reserves/${reserveId}/move`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ locationId: targetLocationId })
            });

            if (!response.ok) {
                throw new Error('Error al mover frasco');
            }

            // Recargar datos
            await loadShelfData();
        } catch (err: any) {
            alert(`❌ ${err.message || 'Error al mover frasco'}`);
        } finally {
            setMoving(false);
        }
    };

    const handleSlotClick = (slot: Slot) => {
        if (slot.isBlocked || moving) return;

        if (slot.reserve?.container?.code) {
            router.push(`/stock/${slot.reserve.container.code}`);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-amber-600 mx-auto mb-4"></div>
                    <p className="text-slate-600">Cargando estantería...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 flex items-center justify-center">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
                    <p className="text-red-800 font-medium">❌ {error}</p>
                    <button
                        onClick={() => loadShelfData()}
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                    >
                        Reintentar
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-slate-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-8 text-center">
                    <h1 className="text-4xl font-bold text-slate-800 mb-2">🏺 Estantería de Frascos</h1>
                    <p className="text-slate-600">
                        Click para actualizar stock • Arrastra para mover
                        {moving && <span className="ml-2 text-amber-600 font-semibold">⏳ Moviendo...</span>}
                    </p>
                </div>

                {/* Shelf visualization - Usando imagen de referencia como fondo */}
                <div className="bg-white rounded-2xl shadow-xl p-4 border border-slate-200">
                    {/* Imagen de estantería */}
                    <img
                        src="/images/estanteria-referencia.jpg"
                        alt="Estantería de frascos"
                        className="w-full h-auto rounded-lg"
                    />

                    {/* Overlay interactivo (comentado por ahora para ver la imagen primero)
                    <div 
                        className="relative -mt-[800px]"
                        style={{ height: '800px' }}
                    >
                        {/* Overlay para hacer los frascos interactivos */}
                    {/*
                        <div className="absolute inset-0">
                            {shelves.map((shelf, shelfIndex) => (
                                <div 
                                    key={shelf.id} 
                                    className="absolute left-0 right-0 grid grid-cols-6 gap-2 px-8"
                                    style={{
                                        top: `${shelfIndex * 20}%`, // Distribuir verticalmente
                                        height: '18%'
                                    }}
                                >
                                    {shelf.slots.map((slot) => (
                                        <div 
                                            key={slot.id} 
                                            onClick={() => handleSlotClick(slot)}
                                            className="relative group cursor-pointer"
                                        >
                                            {/* Área interactiva transparente sobre cada frasco */}
                    <DroppableSlot
                        slot={slot}
                        onDrop={(e) => handleDrop(slot, e)}
                    >
                        {!slot.isBlocked && slot.reserve && (
                            <div
                                draggable={!moving}
                                onDragStart={(e) => handleDragStart(slot, e)}
                                onDragEnd={() => setDraggedReserve(null)}
                                className="absolute inset-0 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors rounded-lg"
                            >
                                {/* Tooltip con info del frasco */}
                                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-white text-xs px-2 py-1 rounded absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap z-50">
                                    {slot.reserve.container?.code}: {slot.reserve.item?.name} ({slot.reserve.qty_g}g)
                                </div>
                            </div>
                        )}
                    </DroppableSlot>
                </div>
                                    ))}
            </div>
                            ))}
        </div>
        */}
                    </div >
                </div >

    {/* Stats */ }
    < div className = "mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto" >
                    <div className="bg-white rounded-lg shadow p-4 text-center border border-amber-200">
                        <p className="text-3xl font-bold text-amber-600">
                            {shelves.reduce((acc, s) => acc + s.slots.filter(sl => sl.reserve).length, 0)}
                        </p>
                        <p className="text-sm text-slate-600 font-medium">Frascos</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center border border-green-200">
                        <p className="text-3xl font-bold text-green-600">
                            {shelves.reduce((acc, s) => acc + s.slots.filter(sl => !sl.isBlocked && !sl.reserve).length, 0)}
                        </p>
                        <p className="text-sm text-slate-600 font-medium">Espacios libres</p>
                    </div>
                    <div className="bg-white rounded-lg shadow p-4 text-center border border-slate-200">
                        <p className="text-3xl font-bold text-slate-600">2</p>
                        <p className="text-sm text-slate-600 font-medium">Bloqueados</p>
                    </div>
                </div >

    {/* Back button */ }
    < div className = "mt-8 text-center" >
        <button
            onClick={() => router.push('/guest/menu')}
            className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg font-medium"
        >
            ← Volver al Menú
        </button>
                </div >
            </div >
        </div >
    );
}
