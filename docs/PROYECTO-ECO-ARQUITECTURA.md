# Proyecto ECO - Arquitectura y Evolución

**Fecha de reestructuración**: 24 de enero de 2026  
**Estado**: En migración de Alacena → Eco

---

## 1. Evolución del Proyecto

### De Alacena a Eco

**Alacena** comenzó como una aplicación individual para gestión de despensa con:
- Control de frascos y stock de alimentos
- Sistema de ubicaciones (estanterías, heladera, freezer)
- Gestión de reservas y batch tracking
- Generación de QR codes para frascos
- Menú semanal con recetas

**Eco** es la evolución hacia una **plataforma paraguas** que integra 5 aplicaciones para gestión completa del hogar:

| App | Propósito | Estado |
|-----|-----------|--------|
| **Alacena** | Gestión de despensa y cocina | ✅ Producción (migrar) |
| **Mantia** | Inventario del hogar + tareas de mantenimiento | 🔨 En desarrollo |
| **Financia** | Finanzas personales y presupuesto | 📋 Planificado |
| **Salud** (nombre provisional) | Tracking de métricas de salud y bienestar | 📋 Planificado |
| **Huesha** | Narrativa de vida, historia personal | 📋 Planificado |

---

## 2. Arquitectura Técnica

### Stack Tecnológico

```
Frontend:
- Next.js 15.5.9
- React 18
- TypeScript
- Tailwind CSS
- NextAuth.js (autenticación)

Backend:
- Node.js 20
- Express
- Prisma 5.22.0 (ORM)
- PostgreSQL

Infraestructura:
- Vercel (frontend - ilimitado free tier)
- Fly.io (backend - 3 containers gratis)
- Supabase (PostgreSQL - 500MB gratis)
```

### Patrón Arquitectónico: Monolito Modular

**Decisión clave**: Un solo backend compartido con estructura modular

```
eco/
├── backend/                    # Backend único "eco-backend"
│   ├── src/
│   │   ├── modules/
│   │   │   ├── alacena/       # Módulo Alacena
│   │   │   │   ├── controllers/
│   │   │   │   ├── routes/
│   │   │   │   ├── services/
│   │   │   │   └── schemas/
│   │   │   └── mantia/        # Módulo Mantia
│   │   │       ├── controllers/
│   │   │       ├── routes/
│   │   │       ├── services/
│   │   │       └── schemas/
│   │   ├── shared/            # Código compartido
│   │   │   ├── auth/          # Autenticación
│   │   │   ├── qr/            # Generación QR
│   │   │   ├── media/         # Uploads
│   │   │   └── middleware/
│   │   ├── app.js             # Registro de módulos
│   │   └── server.js
│   └── prisma/
│       ├── schema.prisma      # Esquema único, tablas prefijadas
│       └── migrations/
│
└── frontend/
    ├── alacena-app/           # App Alacena (Next.js)
    ├── mantia-app/            # App Mantia (Next.js)
    ├── financia-app/          # App Financia (futuro)
    ├── salud-app/             # App Salud (futuro)
    └── huesha-app/            # App Huesha (futuro)
```

### Rutas de API

```
Backend único expone:
/api/alacena/*      → Módulo Alacena
/api/mantia/*       → Módulo Mantia
/api/financia/*     → Módulo Financia (futuro)
/api/shared/auth    → Autenticación compartida
/api/shared/qr      → QR codes
```

### Base de Datos

**Estrategia**: Una sola base de datos PostgreSQL en Supabase con prefijos por dominio

```prisma
// Alacena
model User { }
model Item { }
model Container { }
model Reserve { }
model Location { }
model Batch { }
model MenuItem { }

// Mantia (prefijado)
model Mantia_Location { }
model Mantia_Category { }
model Mantia_Item { }
model Mantia_Task { }
model Mantia_TaskType { }
model Mantia_MaintenanceRecord { }
model Mantia_CleaningRoutine { }
model Mantia_ClothingItem { }

// Financia (futuro)
model Financia_Account { }
model Financia_Transaction { }
// ...
```

**Ventajas**:
- ✅ Relaciones cross-app (ej: asociar gasto de Financia con item de Mantia)
- ✅ Autenticación centralizada (tabla `User` compartida)
- ✅ Queries unificadas para auditoría/timeline
- ✅ Un solo backup
- ✅ Cabe en free tier de Supabase (500MB)

---

## 3. Mantia - Inventario y Tareas del Hogar

### Concepto

Mantia separa claramente:

**INVENTARIO** (cosas físicas del hogar)
- Electrónicos, electrodomésticos, muebles, estructura, limpieza, ropa, plantas, mascotas

**TAREAS** (acciones a realizar)
- Reparaciones, mantenimiento, pedidos, decisiones, aprendizaje, historial

### Categorías de Inventario (9)

| Código | Nombre | Descripción | Ejemplos |
|--------|--------|-------------|----------|
| `electronics` | Electrónicos | Dispositivos electrónicos | TV, notebook, celular, router |
| `appliances` | Electrodomésticos | Aparatos del hogar | Heladera, microondas, aspiradora |
| `furniture` | Muebles | Mobiliario | Sillón, mesa, cama, estantería |
| `structure` | Estructura | Partes del edificio | Ventanas, puertas, pintura, instalaciones |
| `cleaning` | Limpieza | Productos y herramientas | Escoba, balde, productos de limpieza |
| `clothing` | Ropa | Vestimenta (tracking especial) | Remeras, pantalones, calzado |
| `misc` | Varios | Otros objetos | Herramientas, decoración |
| `plants` | Plantas | Flora del hogar | Plantas de interior, macetas |
| `pet` | Mascotas | Relacionado a mascotas | Comederos, juguetes, accesorios |

### Tipos de Tareas (6)

| Código | Nombre | Descripción | Ejemplos |
|--------|--------|-------------|----------|
| `repair` | Reparación | Arreglar algo roto | Reparar heladera, cambiar bisagra |
| `maintenance` | Mantenimiento | Mantenimiento preventivo | Limpiar filtros, engrasar bisagras |
| `order` | Pedido/Compra | Adquisiciones pendientes | Comprar bombita, pedir técnico |
| `decision` | Decisión | Decisiones a tomar | Evaluar cambiar heladera, pintar pared |
| `learning` | Aprendizaje | Aprender a hacer algo | Aprender a usar cortadora, leer manual |
| `history` | Historial | Registro de eventos pasados | Registro de cuando se compró, reparaciones anteriores |

### Schema Prisma Mantia

```prisma
// Ubicaciones físicas (jerarquía espacial)
model Mantia_Location {
  id        String   @id @default(uuid())
  code      String   @unique  // "DEPTO", "LIVING", "COCINA-ALACENA", etc.
  name      String              // "Departamento", "Living", "Alacena de cocina"
  type      String              // "building", "room", "zone", "furniture"
  
  // Jerarquía: DEPTO > LIVING > MUEBLE_TV
  parentId  String?
  parent    Mantia_Location?  @relation("LocationHierarchy", fields: [parentId], references: [id], onDelete: Cascade)
  children  Mantia_Location[] @relation("LocationHierarchy")
  
  // Relaciones
  items           Mantia_Item[]
  cleaningRoutines Mantia_CleaningRoutine[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([parentId])
  @@index([type])
}

// Categorías de inventario
model Mantia_Category {
  id          String   @id @default(uuid())
  code        String   @unique  // "electronics", "appliances", "furniture", etc.
  name        String              // "Electrónicos", "Electrodomésticos", etc.
  description String?
  icon        String?             // Emoji o nombre de icono
  
  items Mantia_Item[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Items del inventario
model Mantia_Item {
  id          String   @id @default(uuid())
  name        String
  description String?
  
  // Categorización
  categoryId  String
  category    Mantia_Category @relation(fields: [categoryId], references: [id])
  
  // Ubicación física
  locationId  String?
  location    Mantia_Location? @relation(fields: [locationId], references: [id])
  
  // Items dentro de items (ej: control remoto dentro de cajón)
  isContainer      Boolean @default(false)
  containerItemId  String?
  containerItem    Mantia_Item?   @relation("ItemContainment", fields: [containerItemId], references: [id], onDelete: SetNull)
  containedItems   Mantia_Item[]  @relation("ItemContainment")
  
  // Datos técnicos
  brand       String?
  model       String?
  serialNumber String?
  purchaseDate DateTime?
  warrantyUntil DateTime?
  estimatedValue Float?
  
  // Dimensiones y specs
  dimensions  String?  // "50x30x20cm"
  weight      String?  // "2.5kg"
  power       String?  // "220V 1500W"
  capacity    String?  // "150L"
  
  // Estado y disponibilidad
  status      String @default("active")  // "active", "broken", "maintenance", "discarded"
  condition   String?  // "new", "good", "fair", "poor"
  notes       String?
  
  // Documentación
  manualUrl   String?
  photoUrl    String?
  purchaseProof String?  // URL del comprobante
  
  // Relaciones
  tasks              Mantia_Task[]
  maintenanceRecords Mantia_MaintenanceRecord[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([categoryId])
  @@index([locationId])
  @@index([containerItemId])
  @@index([status])
}

// Tipos de tareas
model Mantia_TaskType {
  id          String   @id @default(uuid())
  code        String   @unique  // "repair", "maintenance", "order", "decision", "learning", "history"
  name        String              // "Reparación", "Mantenimiento", etc.
  description String?
  color       String?             // Color para UI
  
  tasks Mantia_Task[]
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// Tareas accionables
model Mantia_Task {
  id          String   @id @default(uuid())
  title       String
  description String?
  
  // Tipo y prioridad
  typeId      String
  type        Mantia_TaskType @relation(fields: [typeId], references: [id])
  priority    String @default("medium")  // "low", "medium", "high", "urgent"
  
  // Asociación opcional a item
  itemId      String?
  item        Mantia_Item? @relation(fields: [itemId], references: [id], onDelete: SetNull)
  
  // Estado
  status      String @default("pending")  // "pending", "in_progress", "completed", "cancelled"
  completedAt DateTime?
  
  // Fechas
  dueDate     DateTime?
  scheduledFor DateTime?
  
  // Costos y proveedor
  estimatedCost Float?
  actualCost    Float?
  provider      String?
  
  // Recurrencia
  isRecurring   Boolean @default(false)
  recurrencePattern String?  // "weekly", "monthly", "yearly", "custom"
  nextOccurrence DateTime?
  
  notes       String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([typeId])
  @@index([itemId])
  @@index([status])
  @@index([dueDate])
}

// Historial de mantenimiento
model Mantia_MaintenanceRecord {
  id          String   @id @default(uuid())
  
  itemId      String
  item        Mantia_Item @relation(fields: [itemId], references: [id], onDelete: Cascade)
  
  type        String  // "repair", "maintenance", "inspection", "cleaning"
  description String
  performedAt DateTime @default(now())
  performedBy String?
  
  cost        Float?
  provider    String?
  invoiceUrl  String?
  
  notes       String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([itemId])
  @@index([performedAt])
}

// Rutinas de limpieza
model Mantia_CleaningRoutine {
  id          String   @id @default(uuid())
  name        String   // "Limpieza baño", "Aspirar living"
  description String?
  
  // Asociación a ubicación
  locationId  String?
  location    Mantia_Location? @relation(fields: [locationId], references: [id], onDelete: SetNull)
  
  // Frecuencia
  frequency   String   // "daily", "weekly", "monthly", "quarterly"
  dayOfWeek   Int?     // 0-6 para semanales
  dayOfMonth  Int?     // 1-31 para mensuales
  
  // Estado
  isActive    Boolean @default(true)
  lastDone    DateTime?
  nextDue     DateTime?
  
  estimatedDuration Int?  // minutos
  notes       String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([locationId])
  @@index([nextDue])
}

// Inventario de ropa (caso especial con tracking estacional)
model Mantia_ClothingItem {
  id          String   @id @default(uuid())
  name        String
  type        String   // "remera", "pantalon", "campera", etc.
  
  brand       String?
  size        String?
  color       String?
  material    String?
  
  season      String?  // "verano", "invierno", "entretiempo"
  usage       String?  // "casual", "formal", "deportivo", "trabajo"
  
  location    String?  // "placard", "cajon", "guardado"
  condition   String @default("good")  // "new", "good", "fair", "poor"
  
  lastWorn    DateTime?
  purchaseDate DateTime?
  
  notes       String?
  photoUrl    String?
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  @@index([season])
  @@index([usage])
}
```

### Ejemplos de Uso Mantia

**Jerarquía de Ubicaciones**:
```
DEPTO (Location type: "building")
├── LIVING (type: "room")
│   ├── MUEBLE-TV (type: "furniture")
│   └── MESA-CENTRO (type: "furniture")
├── COCINA (type: "room")
│   ├── ALACENA-SUPERIOR (type: "zone")
│   └── BAJO-MESADA (type: "zone")
└── BAÑO (type: "room")
```

**Items dentro de Items**:
```
Heladera (Item)
├── location: COCINA
├── containerItemId: null
└── containedItems:
    ├── Termómetro heladera (containerItemId: Heladera.id)
    └── Estante superior (containerItemId: Heladera.id)
```

**Tarea con Item asociado**:
```
Task: "Reparar bisagra de heladera"
├── type: repair
├── itemId: Heladera.id
├── status: pending
├── dueDate: 2026-01-30
└── estimatedCost: 5000
```

**Rutina de Limpieza**:
```
CleaningRoutine: "Limpiar baño completo"
├── locationId: BAÑO
├── frequency: "weekly"
├── dayOfWeek: 6 (sábado)
└── estimatedDuration: 45 (minutos)
```

---

## 4. Estado Actual de la Migración

### ✅ Completado

1. **Carpeta eco/ creada**: Copiado todo desde alacena/
2. **Estructura modular creada**:
   - `backend/src/modules/alacena/`
   - `backend/src/modules/mantia/`
   - `backend/src/shared/`

### 🔨 En Progreso

1. **Mover código existente de Alacena** a `modules/alacena/`
2. **Extraer shared** (auth, qr, media)
3. **Actualizar imports** en app.js y rutas

### 📋 Pendiente

1. **Implementar Mantia**:
   - Agregar schema a `prisma/schema.prisma`
   - Crear seeds (categorías, task types)
   - Crear controllers y routes
   - Ejecutar migración

2. **Frontend Mantia**:
   - Clonar `alacena-app` → `mantia-app`
   - Crear vistas (inventario, tareas, cleaning)
   - Integrar con API

3. **Deploy**:
   - Renombrar `alacena-backend` → `eco-backend` en Fly.io
   - Deploy ambos frontends a Vercel
   - Verificar funcionamiento

---

## 5. Apps Futuras (Planificadas)

### Financia
- Gestión de gastos e ingresos
- Presupuestos
- Objetivos de ahorro
- Categorización de transacciones
- **Integración con Mantia**: Asociar compras de items del inventario

### Salud (nombre provisional)
- Tracking de peso, ejercicio, sueño
- Registro de medicamentos
- Citas médicas
- Métricas de bienestar

### Huesha
- Narrativa de vida
- Timeline personal
- Eventos importantes
- Reflexiones
- **Integración cross-app**: Puede referenciar eventos de todas las apps

---

## 6. Decisiones de Arquitectura Clave

### ¿Por qué un backend único?

**Ventajas**:
- ✅ Autenticación centralizada (un solo User model)
- ✅ Queries cross-app (ej: timeline unificado)
- ✅ Menos infraestructura (1 container vs 5)
- ✅ Código compartido (auth, qr, media)
- ✅ Cabe en free tier de Fly.io (3 containers)

**Desventajas manejables**:
- ⚠️ Escalabilidad (separar más adelante si crece)
- ⚠️ Despliegues atómicos (un bug afecta todo)

### ¿Por qué una DB única?

**Ventajas**:
- ✅ Relaciones cross-app posibles
- ✅ Un solo backup
- ✅ Queries unificadas
- ✅ Cabe en 500MB de Supabase free

**Manejo de riesgo**:
- ✅ Prefijos por dominio (`Mantia_`, `Financia_`)
- ✅ Schemas modulares en Prisma
- ✅ Posibilidad de separar DBs más adelante si es necesario

### ¿Por qué frontends separados?

**Ventajas**:
- ✅ Identidades visuales distintas
- ✅ Deploy independiente
- ✅ Dominios personalizados posibles
- ✅ Código no se mezcla
- ✅ Vercel permite ilimitados proyectos gratis

---

## 7. Próximos Pasos

### Hoy (Sesión 1)
1. ✅ Crear carpeta eco/
2. ✅ Crear estructura modular
3. 🔨 Mover código Alacena a modules/
4. 🔨 Actualizar imports
5. ✅ Verificar que Alacena siga funcionando

### Mañana (Sesión 2)
1. Agregar schema Mantia a Prisma
2. Crear seeds de categorías y task types
3. Implementar controllers y routes de Mantia
4. Ejecutar migración
5. Testear API Mantia

### Próxima Sesión (Sesión 3)
1. Clonar alacena-app → mantia-app
2. Crear vistas básicas de Mantia
3. Integrar con backend
4. Deploy a Vercel

### Futuro
1. Implementar Financia
2. Implementar Salud
3. Implementar Huesha
4. Timeline unificado cross-app
5. OCR para tickets y comprobantes

---

## 8. Validación Free Tier

| Servicio | Límite Free | Uso Eco (5 apps) | ✅/❌ |
|----------|-------------|------------------|------|
| Vercel | Ilimitados proyectos | 5 frontends | ✅ |
| Fly.io | 3 containers | 1 backend | ✅ |
| Supabase | 500 MB DB | ~100-150 MB | ✅ |
| Supabase | 2 proyectos | 1 proyecto | ✅ |

**Conclusión**: Eco completo cabe perfectamente en los free tiers sin pagar nada.

---

## 9. Contactos y Referencias

- **Documentación técnica**: `docs/`
- **Sesiones anteriores**: `docs/sesiones/`
- **Arquitectura original Alacena**: `docs/arquitectura.md`
- **Guía completa Alacena**: `GUIA_COMPLETA_ALACENA.md`

---

**Última actualización**: 24 de enero de 2026  
**Siguiente sesión**: Continuar migración modular + implementar Mantia backend
