# 🎨 UX & Navegación

**Última actualización:** 04 Febrero 2026  
**Sprint:** Sprint 0

---

## 🎯 Propósito

Diseñar navegación clara, estados vacíos útiles y patrones UI consistentes, priorizando **mobile-first**. ADRs y alcance funcional en [Documento Funcional](02-documento-funcional.md).

---

## 📱 Principios UX

### 1. Mobile-First Real
- Diseño primero para móvil, luego desktop
- Touch targets ≥ 44x44px
- Navegación con pulgares en mente
- Sin hover dependencies

### 2. Estados Vacíos que Enseñan
- Cada módulo con estado inicial educativo
- CTAs claros ("Crear tu primer...")
- Ilustraciones simples y amigables
- Onboarding implícito

### 3. Consistencia Entre Módulos
- Mismos patrones de navegación
- Colores y tipografía unificados
- Botones de acción en mismos lugares
- Terminología consistente

### 4. Simplicidad de Captura
- Formularios mínimos
- Defaults inteligentes
- Validación en tiempo real
- Guardar rápido (enter to submit)

---

## 🗺️ Mapa de Navegación

### Estructura General

```
┌─────────────────────────────────────┐
│          Header / Nav               │
│  [Logo] [ALACENA][MANTIA][+][👤]    │
└─────────────────────────────────────┘
│                                     │
│         Contenido Principal         │
│                                     │
│                                     │
└─────────────────────────────────────┘
│         Bottom Nav (Mobile)         │
│  [🏺][📋][➕][🛒][👤]                 │
└─────────────────────────────────────┘
```

---

## 📍 Flujos por Módulo

### 🏺 ALACENA

#### Flujo Principal
```
Inicio (Lista de Items)
  ├─> [+ Nuevo Item] → Formulario Alta → Item Creado
  ├─> [Item Card] → Detalle Item
  │     ├─> [Editar] → Formulario Edición
  │     ├─> [+ Movimiento] → Registro Ingreso/Consumo
  │     ├─> [Agregar a Lista] → Item en Lista de Compras
  │     └─> [Historial] → Lista de Movimientos
  └─> [🔍 Buscar] → Filtrar items
```

#### Navegación
- **Bottom Nav:** 🏺 ALACENA (icono de frasco)
- **Acciones primarias:**
  - ➕ Crear item (FAB bottom-right)
  - 🔍 Buscar (header)
  - 🏷️ Filtrar por categoría

#### Estados Vacíos

**Sin items:**
```
       [Ilustración: Estantería vacía]
    
    No hay items en tu alacena
    
    Comenzá agregando tu primer item
    para empezar a registrar tu stock
    
         [+ Crear Primer Item]
```

**Sin movimientos:**
```
    No hay movimientos registrados
    
    Cuando agregues o consumas este item,
    verás el historial aquí
```

---

### 📋 MANTIA

#### Flujo Principal
```
Inicio (Tareas Pendientes)
  ├─> [+ Nueva Tarea] → Formulario Alta → Tarea Creada
  ├─> [Tarea Card] → Detalle Tarea
  │     ├─> [Editar] → Formulario Edición
  │     ├─> [✓ Marcar Hecha] → Registro Ejecución
  │     └─> [Historial] → Lista de Ejecuciones
  ├─> [Tabs: Pendientes | Todas | Completadas]
  └─> [🔍 Buscar] → Filtrar tareas
```

#### Navegación
- **Bottom Nav:** 📋 MANTIA (icono de checklist)
- **Tabs:**
  - 🔔 Pendientes (default)
  - 📋 Todas
  - ✅ Completadas
- **Acciones primarias:**
  - ➕ Crear tarea (FAB)
  - ✓ Marcar hecha (quick action)

#### Estados Vacíos

**Sin tareas:**
```
       [Ilustración: Lista vacía]
    
    No hay tareas creadas
    
    Creá tu primera tarea para mantener
    tu hogar organizado
    
         [+ Crear Primera Tarea]
```

**Sin pendientes:**
```
       [Ilustración: Checklist completo]
    
    ¡Todo al día! 🎉
    
    No hay tareas pendientes por ahora
```

---

### 🛒 Lista de Compras

#### Flujo Principal
```
Lista de Compras
  ├─> [+ Agregar Item] → Input Rápido → Item Agregado
  ├─> [+ Desde Alacena] → Seleccionar Items → Items Agregados
  ├─> [Item Card]
  │     ├─> [✓ Marcar Comprado] → Item Marcado
  │     ├─> [✏️ Editar] → Editar cantidad/unidad
  │     └─> [🗑️ Eliminar]
  ├─> [Mostrar: Pendientes | Todos]
  └─> [🗑️ Limpiar Comprados] → Confirmar → Lista Limpia
```

#### Navegación
- **Bottom Nav:** 🛒 Lista (icono de carrito)
- **Acciones primarias:**
  - ➕ Agregar manual (input siempre visible)
  - 🏺 Desde ALACENA (botón secundario)
  - ✓ Marcar comprado (swipe o tap)

#### Estados Vacíos

**Sin items:**
```
       [Ilustración: Carrito vacío]
    
    Tu lista está vacía
    
    Agregá items manualmente o desde ALACENA
    
    [+ Agregar Item]  [🏺 Desde Alacena]
```

---

### 💊 ECOSALUD (Básico)

#### Flujo Principal
```
Inicio (Histórico)
  ├─> [+ Nuevo Registro] → Formulario Alta → Registro Creado
  │     ├─> Tipo: Peso / Presión / Glucosa / Nota
  │     ├─> Valor
  │     └─> Notas (opcional)
  ├─> [Registro Card] → Detalle
  └─> [Filtros: Tipo | Fecha]
```

#### Navegación
- **Bottom Nav:** 💊 Salud (icono de corazón/pulso)
- **Acciones primarias:**
  - ➕ Nuevo registro (FAB)
  - 📊 Ver histórico (default)

#### Estados Vacíos

**Sin registros:**
```
       [Ilustración: Calendario vacío]
    
    No hay registros de salud
    
    Comenzá a registrar tus datos
    para llevar un seguimiento
    
         [+ Primer Registro]
```

---

## 🎨 Componentes y Patrones UI

### Cards de Items

**Card de ALACENA:**
```
┌─────────────────────────────────┐
│ [Img] Arroz Integral            │
│       Granos | 1.5kg             │
│       Stock: 500g                │
│                         [•••]    │
└─────────────────────────────────┘
```

**Card de MANTIA:**
```
┌─────────────────────────────────┐
│ [✓] Cambiar filtro de agua      │
│     Mantenimiento | Mensual      │
│     Próxima: 15 Feb              │
│                         [•••]    │
└─────────────────────────────────┘
```

**Card de Lista:**
```
┌─────────────────────────────────┐
│ [ ] Leche                        │
│     2 litros | Desde ALACENA     │
│                         [✓][X]   │
└─────────────────────────────────┘
```

---

### Formularios

**Principios:**
- Labels siempre visibles
- Placeholders como ejemplos
- Validación inline
- Botón de acción fijo en bottom (mobile)

**Ejemplo:**
```
┌─────────────────────────────────┐
│ Nombre *                        │
│ [...........................]   │
│                                 │
│ Categoría                       │
│ [▼ Seleccionar...............]  │
│                                 │
│ Stock Actual *                  │
│ [........] [▼ kg............]   │
│                                 │
│ Notas                           │
│ [...........................]   │
│                                 │
│                                 │
│        [Guardar Item]           │
└─────────────────────────────────┘
```

---

### Botones de Acción

**FAB (Floating Action Button):**
- Posición: Bottom-right
- Tamaño: 56x56px
- Color: Primary (amber)
- Acción principal del módulo

**Botones Rápidos:**
- En cards: Iconos pequeños (•••, ✓, X)
- Acciones secundarias en menu contextual

**Swipe Actions:**
- Swipe right: ✓ Completar/Marcar
- Swipe left: 🗑️ Eliminar

---

### Navegación

**Top Header (Desktop):**
```
[Logo ECO] [ALACENA] [MANTIA] [ECOSALUD] [Lista]     [👤]
```

**Bottom Nav (Mobile):**
```
[🏺]  [📋]  [➕]  [🛒]  [👤]
```

**Tabs Internas (dentro de módulo):**
```
[Pendientes] [Todas] [Completadas]
```

---

### Filtros y Búsqueda

**Buscador:**
```
┌─────────────────────────────────┐
│ 🔍 [Buscar items...........]    │
└─────────────────────────────────┘
```

**Filtros por Categoría:**
```
[Todas] [Granos] [Lácteos] [Enlatados] [+]
```

**Filtros por Estado (MANTIA):**
```
[Pendientes] [Vencidas] [Completadas]
```

---

## 🎨 Paleta de Colores

### Colores Primarios
- **Primary:** Amber (#F59E0B) - Cálido, acogedor
- **Secondary:** Slate (#64748B) - Neutral, profesional

### Colores de Estado
- **Success:** Green (#10B981) - Completado, OK
- **Warning:** Orange (#F97316) - Atención, stock bajo
- **Error:** Red (#EF4444) - Error, crítico
- **Info:** Blue (#3B82F6) - Información

### Fondos
- **Background:** White (#FFFFFF)
- **Surface:** Gray-50 (#F9FAFB)
- **Border:** Gray-200 (#E5E7EB)

---

## 📏 Espaciado y Tipografía

### Espaciado (Tailwind)
- **xs:** 4px
- **sm:** 8px
- **md:** 16px (default para cards)
- **lg:** 24px
- **xl:** 32px

### Tipografía
- **Headings:** Aptos Display (sans-serif)
- **Body:** Aptos (sans-serif)
- **Mono:** Monospace (para códigos)

### Tamaños
- **H1:** 24px (mobile) / 32px (desktop)
- **H2:** 20px / 24px
- **H3:** 18px / 20px
- **Body:** 16px
- **Small:** 14px

---

## ♿ Accesibilidad

### Principios
- ✅ Contraste mínimo 4.5:1 para texto
- ✅ Touch targets ≥ 44x44px
- ✅ Navegación por teclado funcional
- ✅ Labels en todos los inputs
- ✅ Estados de foco visibles

### ARIA
- Usar roles semánticos
- Labels descriptivos
- Estados de loading anunciados

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
base: 0-639px      /* Móvil */
sm: 640px-767px    /* Móvil grande */
md: 768px-1023px   /* Tablet */
lg: 1024px-1279px  /* Desktop */
xl: 1280px+        /* Desktop grande */
```

---

## 🔗 Enlaces

- [Documento Funcional](02-documento-funcional.md)
- [Backlog](04-planificacion/backlog.md)
- [ADRs](05-arquitectura/adrs.md)

---

**Última actualización:** 04 Febrero 2026  
**Próxima revisión:** Mensual (próxima: 04 Mar 2026)
