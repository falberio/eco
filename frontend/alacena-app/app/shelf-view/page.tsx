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

// Componente de frasco reutilizable
function JarComponent({ reserve, isDragging = false }: { reserve: Reserve; isDragging?: boolean }) {
  const fillPercentage = getFillPercentage(reserve);
  const fillColor = getFillColor(fillPercentage);
  
  return (
    <div className={`relative w-full h-full ${isDragging ? 'opacity-50' : ''}`}>
      {/* Jar container */}
      <div className="absolute inset-0 flex flex-col">
        {/* Lid with clasp */}
        <div className="relative h-[15%] flex items-end justify-center">
          {/* Metal clasp */}
          <div className="absolute top-0 w-[60%] h-[80%] bg-gradient-to-b from-slate-400 via-slate-500 to-slate-600 rounded-t-md border-2 border-slate-700 shadow-lg z-10">
            <div className="absolute inset-x-0 top-1/3 h-[2px] bg-slate-300"></div>
          </div>
          {/* Lid base */}
          <div className="w-[75%] h-[60%] bg-gradient-to-b from-amber-100 via-amber-200 to-amber-300 rounded-t-lg border-2 border-amber-400 shadow-md"></div>
        </div>

        {/* Glass jar body */}
        <div className="relative flex-1 mx-1">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/20 rounded-lg border-4 border-slate-300/50 shadow-2xl backdrop-blur-[1px] overflow-hidden">
            {/* Glass reflection */}
            <div className="absolute inset-y-0 left-0 w-[20%] bg-gradient-to-r from-white/60 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white/40 to-transparent"></div>
            
            {/* Content fill */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden rounded-b-lg">
              <div
                className={`${fillColor} transition-all duration-500 relative`}
                style={{ height: `${fillPercentage}%` }}
              >
                {/* Texture pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px)`,
                  backgroundSize: '8px 8px'
                }}></div>
                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-2 bg-white/40"></div>
              </div>
            </div>

            {/* Label */}
            <div className="absolute inset-x-0 top-[25%] flex justify-center px-2 z-10">
              <div className="bg-gradient-to-br from-amber-50 to-white border-2 border-amber-900/30 rounded-sm px-2 py-1.5 shadow-lg max-w-[85%]">
                <p className="text-[9px] font-bold text-slate-900 leading-tight text-center uppercase tracking-wide">
                  {reserve.container?.code || 'N/A'}
                </p>
                <p className="text-[8px] text-slate-700 leading-tight text-center mt-0.5 line-clamp-2 font-medium">
                  {reserve.item?.name || 'Vacío'}
                </p>
              </div>
            </div>

            {/* Weight badge */}
            {reserve.qty_g !== undefined && reserve.qty_g > 0 && (
              <div className="absolute bottom-2 right-2 bg-slate-900/90 text-white text-[9px] px-2 py-1 rounded-full font-bold shadow-lg border border-slate-700">
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
  
  const nominalVolume = reserve.container?.type?.nominalVolume_ml || 750;
  const maxCapacity = nominalVolume;
  const fillPercentage = Math.min(100, (reserve.qty_g / maxCapacity) * 100);
  
  return fillPercentage;
}

function getFillColor(percentage: number) {
  if (percentage >= 75) return 'bg-gradient-to-t from-green-600 via-green-500 to-green-400';
  if (percentage >= 40) return 'bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400';
  if (percentage >= 15) return 'bg-gradient-to-t from-orange-600 via-orange-500 to-orange-400';
  return 'bg-gradient-to-t from-red-600 via-red-500 to-red-400';
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
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';
      const token = localStorage.getItem('token');

      const shelvesData: Shelf[] = [];
      
      for (let shelfNum = 1; shelfNum <= 5; shelfNum++) {
        const shelfCode = `SHELF-${shelfNum}`;
        
        const slotsResponse = await fetch(`${API_URL}/api/locations?parentCode=${shelfCode}&includeChildren=true&includeReserves=true`, {
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

      const response = await fetch(`${API_URL}/api/reserves/${reserveId}/move`, {
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

        {/* Shelf visualization */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
          <div className="space-y-6">
            {shelves.map((shelf) => (
              <div key={shelf.id} className="relative">
                {/* Shelf label */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                    {shelf.name}
                  </span>
                </div>

                {/* Shelf board */}
                <div className="relative">
                  {/* Wood texture */}
                  <div className="bg-gradient-to-b from-amber-600 via-amber-700 to-amber-800 rounded-lg shadow-2xl p-4 border-4 border-amber-900"
                    style={{
                      backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                      backgroundSize: '20px 100%'
                    }}
                  >
                    <div className="grid grid-cols-6 gap-4">
                      {shelf.slots.map((slot) => (
                        <div key={slot.id} onClick={() => handleSlotClick(slot)}>
                          <DroppableSlot 
                            slot={slot} 
                            onDrop={(e) => handleDrop(slot, e)}
                          >
                            {!slot.isBlocked && slot.reserve && (
                              <div
                                draggable={!moving}
                                onDragStart={(e) => handleDragStart(slot, e)}
                                onDragEnd={() => setDraggedReserve(null)}
                                className="w-full h-full cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-200"
                                style={{ touchAction: 'none' }}
                              >
                                <JarComponent 
                                  reserve={slot.reserve} 
                                  isDragging={draggedReserve?.slotId === slot.id}
                                />
                              </div>
                            )}
                          </DroppableSlot>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Shelf supports */}
                  <div className="flex justify-between px-4 mt-1">
                    <div className="w-10 h-5 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-lg shadow-md border-x-2 border-slate-900"></div>
                    <div className="w-10 h-5 bg-gradient-to-b from-slate-600 to-slate-800 rounded-b-lg shadow-md border-x-2 border-slate-900"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
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
        </div>

        {/* Back button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => router.push('/guest/menu')}
            className="px-8 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-800 transition-colors shadow-lg font-medium"
          >
            ← Volver al Menú
          </button>
        </div>
      </div>
    </div>
  );
}
