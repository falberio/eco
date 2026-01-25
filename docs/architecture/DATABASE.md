# 🗄️ Database Architecture - ECO Platform

> Documentación completa del schema de base de datos PostgreSQL

**Motor:** PostgreSQL 15  
**ORM:** Prisma 5.22.0  
**Última actualización:** 2026-01-25

---

## 📐 Estrategia General

### Single Database con Prefijos

ECO utiliza **una sola base de datos PostgreSQL** para todos los módulos:

```
eco_db (PostgreSQL)
├── User (compartido por todos)
├── Item, Location, Container, Batch, Reserve, MenuItem (Alacena)
├── Mantia_Account, Mantia_Transaction, Mantia_Budget (Mantia - futuro)
├── Salud_Measurement, Salud_Goal (Salud - futuro)
└── ...
```

**Ventajas:**
- ✅ Una sola conexión, mejor performance
- ✅ Relaciones cross-module (User → módulos)
- ✅ Migrations unificadas
- ✅ Queries cross-module para analytics
- ✅ Backup/restore simplificado

**Trade-offs:**
- ⚠️ Menos aislamiento que DBs separadas
- ⚠️ Necesita naming discipline estricta

---

## 👤 User Model (Compartido)

### Schema

```prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  password  String
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // Relaciones con módulos
  items     Item[]
  reserves  Reserve[]
  // mantiaAccounts  Mantia_Account[] (futuro)
  // saludMeasures   Salud_Measurement[] (futuro)
}
```

### Campos

| Campo | Tipo | Constraints | Descripción |
|-------|------|-------------|-------------|
| `id` | Int | PK, Auto | Identificador único |
| `email` | String | Unique, Required | Email para login |
| `password` | String | Required | Hash bcrypt (nunca plaintext) |
| `name` | String | Optional | Nombre del usuario |
| `createdAt` | DateTime | Auto | Fecha de registro |
| `updatedAt` | DateTime | Auto | Última actualización |

### Índices

```sql
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
```

### Seguridad

**Password Hashing:**
```javascript
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 10);
```

**Nunca exponer password en API:**
```javascript
// ❌ MAL
res.json(user)

// ✅ BIEN
const { password, ...userPublic } = user
res.json(userPublic)
```

---

## 🧺 Módulo Alacena

### Item - Ingredientes

```prisma
model Item {
  id           Int      @id @default(autoincrement())
  code         String   @unique
  name         String
  unit         String
  minStock     Float    @default(0)
  maxStock     Float    @default(0)
  currentStock Float    @default(0)
  userId       Int
  user         User     @relation(fields: [userId], references: [id])
  createdAt    DateTime @default(now())
  updatedAt    DateTime @updatedAt

  batches      Batch[]
  reserves     Reserve[]
  menuItems    MenuItemIngredient[]
}
```

**Campos clave:**
- `code`: Código único (ej: "ARR-001")
- `currentStock`: Calculado automáticamente desde batches
- `minStock/maxStock`: Alertas de reposición

**Cálculo de stock:**
```javascript
// Se recalcula al crear/actualizar batches
const totalStock = await prisma.batch.aggregate({
  where: { itemId, consumed: false },
  _sum: { quantity: true }
})
await prisma.item.update({
  where: { id: itemId },
  data: { currentStock: totalStock._sum.quantity || 0 }
})
```

---

### Location - Ubicaciones Físicas

```prisma
enum LocationType {
  JAR          // Frasco
  SHELF        // Estante
  DRAWER       // Cajón
  FRIDGE       // Heladera
  FREEZER      // Freezer
  OTHER        // Otro
}

model Location {
  id              Int          @id @default(autoincrement())
  code            String       @unique
  name            String
  type            LocationType
  capacity        Float?       // Capacidad en kg/L
  currentCapacity Float?       // Ocupación actual
  shelfCode       String?      // Ubicación física (ej: "EST-A-1")
  qrCode          String?      // URL del QR generado
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt

  batches         Batch[]
}
```

**Tipos de ubicación:**
- `JAR`: Frascos (mayoría de items secos)
- `SHELF`: Estantes sin contenedor
- `FRIDGE/FREEZER`: Refrigerados
- `OTHER`: Casos especiales

**QR Code:**
```javascript
const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${code}&size=200x200`
```

---

### Batch - Lotes de Ingredientes

```prisma
model Batch {
  id          Int       @id @default(autoincrement())
  itemId      Int
  item        Item      @relation(fields: [itemId], references: [id])
  locationId  Int?
  location    Location? @relation(fields: [locationId], references: [id])
  quantity    Float     // Cantidad disponible
  expiryDate  DateTime?
  grossWeight Float?    // Peso bruto (con envase)
  tare        Float?    // Peso del envase
  netWeight   Float?    // Peso neto calculado
  consumed    Boolean   @default(false)
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}
```

**Sistema de Taras:**
```javascript
// Cálculo automático
netWeight = grossWeight - tare

// Si no hay tara especificada, usar tara del contenedor
if (!batch.tare && location.defaultTare) {
  netWeight = grossWeight - location.defaultTare
}
```

**Flujo de entrada:**
1. Usuario escanea QR de ubicación
2. Ingresa item + peso bruto
3. Sistema obtiene tara del frasco
4. Calcula peso neto automáticamente
5. Actualiza `currentStock` del item

**Consumo:**
```javascript
// Marcar lote como consumido
await prisma.batch.update({
  where: { id },
  data: { consumed: true, quantity: 0 }
})
// Recalcular stock del item
```

---

### Reserve - Reservas de Ingredientes

```prisma
enum ReserveStatus {
  ACTIVE
  COMPLETED
  CANCELLED
}

model Reserve {
  id        Int           @id @default(autoincrement())
  itemId    Int
  item      Item          @relation(fields: [itemId], references: [id])
  userId    Int
  user      User          @relation(fields: [userId], references: [id])
  quantity  Float
  reason    String?       // "Paella del sábado"
  status    ReserveStatus @default(ACTIVE)
  createdAt DateTime      @default(now())
  completedAt DateTime?
}
```

**Workflow:**
```
1. Usuario planifica receta
2. Crea reserva: item + cantidad + razón
3. Stock queda "bloqueado" (no disponible para otras reservas)
4. Al cocinar, marca reserva como COMPLETED
5. Se descuenta del stock real
```

**Validación:**
```javascript
// Verificar stock disponible
const availableStock = item.currentStock - activeReservesTotal
if (newReserve.quantity > availableStock) {
  throw new Error('Stock insuficiente')
}
```

---

### MenuItem - Platos del Menú

```prisma
enum MenuCategory {
  VIANDA
  BEBIDA
  TRAGO
  POSTRE
  SNACK
}

model MenuItem {
  id          Int      @id @default(autoincrement())
  name        String
  category    MenuCategory
  description String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  ingredients MenuItemIngredient[]
}

model MenuItemIngredient {
  id         Int      @id @default(autoincrement())
  menuItemId Int
  menuItem   MenuItem @relation(fields: [menuItemId], references: [id])
  itemId     Int
  item       Item     @relation(fields: [itemId], references: [id])
  quantity   Float    // Cantidad del item necesaria

  @@unique([menuItemId, itemId])
}
```

**Ejemplo:**
```javascript
// "Ensalada de Quinoa" requiere:
// - 0.3 kg de Quinoa
// - 0.2 kg de Tomate
// - 0.1 L de Aceite de oliva

await prisma.menuItem.create({
  data: {
    name: "Ensalada de Quinoa",
    category: "VIANDA",
    ingredients: {
      create: [
        { itemId: quinoaId, quantity: 0.3 },
        { itemId: tomateId, quantity: 0.2 },
        { itemId: aceiteId, quantity: 0.1 }
      ]
    }
  }
})
```

---

## 💰 Módulo Mantia (Planificado)

### Mantia_Account - Cuentas Financieras

```prisma
enum Mantia_AccountType {
  BANK          // Cuenta bancaria
  CASH          // Efectivo
  CREDIT_CARD   // Tarjeta de crédito
  DEBIT_CARD    // Tarjeta de débito
  INVESTMENT    // Inversión
  OTHER
}

model Mantia_Account {
  id        Int                 @id @default(autoincrement())
  userId    Int
  user      User                @relation(fields: [userId], references: [id])
  name      String              // "Banco Santander - Cuenta Sueldo"
  type      Mantia_AccountType
  currency  String              @default("ARS")
  balance   Float               @default(0)
  createdAt DateTime            @default(now())
  updatedAt DateTime            @updatedAt

  transactions Mantia_Transaction[]
}
```

---

### Mantia_Transaction - Transacciones

```prisma
enum Mantia_TransactionType {
  INCOME      // Ingreso
  EXPENSE     // Gasto
  TRANSFER    // Transferencia entre cuentas
}

model Mantia_Transaction {
  id          Int                     @id @default(autoincrement())
  accountId   Int
  account     Mantia_Account          @relation(fields: [accountId], references: [id])
  type        Mantia_TransactionType
  amount      Float
  categoryId  Int?
  category    Mantia_Category?        @relation(fields: [categoryId], references: [id])
  description String?
  date        DateTime                @default(now())
  createdAt   DateTime                @default(now())
}
```

**Lógica de balance:**
```javascript
// Al crear transacción, actualizar balance de cuenta
if (type === 'INCOME') {
  account.balance += amount
} else if (type === 'EXPENSE') {
  account.balance -= amount
}
```

---

### Mantia_Budget - Presupuestos

```prisma
model Mantia_Budget {
  id         Int             @id @default(autoincrement())
  userId     Int
  user       User            @relation(fields: [userId], references: [id])
  categoryId Int
  category   Mantia_Category @relation(fields: [categoryId], references: [id])
  amount     Float           // Límite mensual
  month      DateTime        // Mes del presupuesto
  createdAt  DateTime        @default(now())

  @@unique([userId, categoryId, month])
}
```

**Control de presupuesto:**
```javascript
// Al registrar gasto, verificar presupuesto
const spent = await prisma.mantia_Transaction.aggregate({
  where: { 
    categoryId, 
    date: { gte: startOfMonth, lte: endOfMonth }
  },
  _sum: { amount: true }
})

if (spent._sum.amount >= budget.amount) {
  // Enviar alerta: "¡Presupuesto de Comida superado!"
}
```

---

### Mantia_Category - Categorías

```prisma
model Mantia_Category {
  id           Int      @id @default(autoincrement())
  name         String   // "Supermercado", "Transporte", "Salud"
  color        String?  // Para visualización
  icon         String?
  userId       Int?     // null = categoría global
  user         User?    @relation(fields: [userId], references: [id])

  transactions Mantia_Transaction[]
  budgets      Mantia_Budget[]
}
```

---

## 🏥 Módulo Salud (Planificado)

```prisma
enum Salud_MeasurementType {
  WEIGHT
  HEIGHT
  BLOOD_PRESSURE
  HEART_RATE
  GLUCOSE
  TEMPERATURE
  OTHER
}

model Salud_Measurement {
  id        Int                   @id @default(autoincrement())
  userId    Int
  user      User                  @relation(fields: [userId], references: [id])
  type      Salud_MeasurementType
  value     Float
  unit      String                // "kg", "cm", "mmHg", "bpm"
  notes     String?
  date      DateTime              @default(now())
  createdAt DateTime              @default(now())
}

model Salud_Goal {
  id          Int      @id @default(autoincrement())
  userId      Int
  user        User     @relation(fields: [userId], references: [id])
  type        String   // "weight_loss", "exercise", "water_intake"
  target      Float
  unit        String
  deadline    DateTime?
  achieved    Boolean  @default(false)
  createdAt   DateTime @default(now())
}
```

---

## 🔗 Relaciones Cross-Module

### User → Múltiples Módulos

```
User
├── items (Alacena)
├── reserves (Alacena)
├── mantiaAccounts (Mantia)
├── mantiaBudgets (Mantia)
├── saludMeasurements (Salud)
└── saludGoals (Salud)
```

### Queries Cross-Module

```javascript
// Obtener usuario con todos sus datos
const userWithAll = await prisma.user.findUnique({
  where: { id },
  include: {
    items: true,
    reserves: true,
    mantiaAccounts: {
      include: { transactions: true }
    },
    saludMeasurements: {
      where: { type: 'WEIGHT' },
      orderBy: { date: 'desc' },
      take: 30
    }
  }
})

// Analytics cross-module
// "¿Cuánto gasté en supermercado vs cuántos items compré?"
const supermarketExpenses = await prisma.mantia_Transaction.aggregate({
  where: { 
    category: { name: 'Supermercado' },
    date: { gte: startOfMonth }
  },
  _sum: { amount: true }
})

const newItems = await prisma.batch.count({
  where: { createdAt: { gte: startOfMonth } }
})

console.log(`Gastaste $${supermarketExpenses._sum.amount} y compraste ${newItems} lotes`)
```

---

## 📊 Migrations

### Crear Migration

```bash
cd backend
npx prisma migrate dev --name add_mantia_models
```

### Aplicar en Producción

```bash
# Con túnel a DB de producción
npx prisma migrate deploy
```

### Historial

```bash
npx prisma migrate status
```

---

## 🔍 Índices y Performance

### Índices Recomendados

```prisma
model Item {
  // ...
  @@index([userId])
  @@index([code])
}

model Batch {
  // ...
  @@index([itemId, consumed])
  @@index([locationId])
  @@index([expiryDate])
}

model Mantia_Transaction {
  // ...
  @@index([accountId, date])
  @@index([categoryId, date])
}
```

### Queries Optimizadas

**❌ N+1 Problem:**
```javascript
// MAL - 1 query para items + N queries para batches
const items = await prisma.item.findMany()
for (const item of items) {
  item.batches = await prisma.batch.findMany({ where: { itemId: item.id } })
}
```

**✅ Include/Select:**
```javascript
// BIEN - 1 query con JOIN
const items = await prisma.item.findMany({
  include: { batches: true }
})
```

---

## 🔐 Seguridad

### Row Level Security (RLS)

Aunque PostgreSQL soporta RLS nativo, con Prisma usamos filters a nivel aplicación:

```javascript
// Middleware global
prisma.$use(async (params, next) => {
  if (params.model === 'Item' && params.action === 'findMany') {
    params.args.where = { ...params.args.where, userId: currentUser.id }
  }
  return next(params)
})
```

### Sanitización

```javascript
// Evitar SQL injection (Prisma lo maneja automáticamente)
// ✅ SEGURO
const item = await prisma.item.findUnique({ where: { code: userInput } })

// ❌ NUNCA usar raw SQL sin sanitizar
// await prisma.$queryRaw(`SELECT * FROM Item WHERE code = '${userInput}'`)
```

---

## 📦 Backup y Restore

### Backup Completo

```bash
# Con túnel a DB de producción
pg_dump -h localhost -U postgres -d eco_db -F c -f backup-$(date +%Y%m%d).dump
```

### Backup Solo Data

```bash
pg_dump -h localhost -U postgres -d eco_db --data-only -F c -f data-backup.dump
```

### Restore

```bash
pg_restore -h localhost -U postgres -d eco_db_restore backup-20260125.dump
```

---

## 🧪 Seeding

### Seed de Desarrollo

```javascript
// backend/prisma/seed.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  // Crear usuario de prueba
  const user = await prisma.user.upsert({
    where: { email: 'admin@alacena.com' },
    update: {},
    create: {
      email: 'admin@alacena.com',
      password: await bcrypt.hash('admin123', 10),
      name: 'Admin User'
    }
  })

  // Crear items de ejemplo
  await prisma.item.createMany({
    data: [
      { code: 'ARR-001', name: 'Arroz Integral', unit: 'kg', userId: user.id },
      { code: 'LEN-001', name: 'Lentejas', unit: 'kg', userId: user.id }
    ]
  })
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
```

**Ejecutar:**
```bash
npm run prisma:seed
```

---

## 📚 Recursos

- **Prisma Docs:** https://www.prisma.io/docs
- **PostgreSQL Docs:** https://www.postgresql.org/docs/
- **Schema File:** `backend/prisma/schema.prisma`

---

*Database documentation creada: 2026-01-25*
