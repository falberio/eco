# 💼 Mantia - Gestión Financiera

Módulo de gestión financiera y presupuestaria de la plataforma ECO.

## 🎯 Descripción

Mantia permite llevar un control completo de finanzas personales o del negocio, con gestión de cuentas, transacciones, categorías y presupuestos.

## 🚀 Características

### ✅ Implementadas

- **Cuentas**: Gestión de múltiples tipos de cuentas
  - Efectivo, banco, tarjetas de crédito/débito, billeteras digitales
  - Control de balances automático
  - Soporte multi-moneda (ARS, USD, EUR)

- **Transacciones**: Registro completo de movimientos
  - Ingresos, gastos y transferencias entre cuentas
  - Categorización
  - Comprobantes y recibos
  - Etiquetas personalizadas

- **Categorías**: Organización jerárquica
  - Categorías padre e hijas (árbol)
  - Iconos y colores personalizables
  - Estadísticas de uso

- **Presupuestos**: Control de gastos
  - Por categoría y período (semanal, mensual, trimestral, anual)
  - Alertas configurables
  - Visualización de progreso
  - Indicadores de exceso

### 🚧 Próximamente

- Gráficos y visualizaciones avanzadas
- Transacciones recurrentes automáticas
- Exportación de datos (CSV, Excel, PDF)
- Metas de ahorro
- Proyecciones financieras
- Reportes personalizados

## 📦 Instalación

### Backend

```bash
cd backend

# Migración de base de datos (ya ejecutada)
npx prisma migrate dev --name add_mantia_models

# Seeding de datos iniciales
node prisma/seed-mantia.js

# Generar tipos TypeScript
npm run generate:types
```

### Frontend

```bash
cd frontend/mantia-app

# Instalar dependencias
npm install

# Desarrollo
npm run dev

# La app estará en http://localhost:3001
```

## 🗄️ Estructura de Base de Datos

### Modelos

- `Mantia_Account`: Cuentas financieras
- `Mantia_Transaction`: Transacciones (ingresos/gastos/transferencias)
- `Mantia_Category`: Categorías organizativas
- `Mantia_Budget`: Presupuestos por período

### Enums

- `AccountType`: CASH, BANK, CREDIT_CARD, DEBIT_CARD, DIGITAL, OTHER
- `TransactionType`: INCOME, EXPENSE, TRANSFER
- `BudgetPeriod`: WEEKLY, MONTHLY, QUARTERLY, YEARLY, CUSTOM

## 🔌 API Endpoints

### Cuentas

```
GET    /api/mantia/accounts          - Listar cuentas
GET    /api/mantia/accounts/:id      - Obtener cuenta
GET    /api/mantia/accounts/:id/balance - Balance de cuenta
POST   /api/mantia/accounts          - Crear cuenta
PUT    /api/mantia/accounts/:id      - Actualizar cuenta
DELETE /api/mantia/accounts/:id      - Eliminar cuenta
```

### Transacciones

```
GET    /api/mantia/transactions       - Listar transacciones
GET    /api/mantia/transactions/stats - Estadísticas
GET    /api/mantia/transactions/:id   - Obtener transacción
POST   /api/mantia/transactions       - Crear transacción
PUT    /api/mantia/transactions/:id   - Actualizar transacción
DELETE /api/mantia/transactions/:id   - Eliminar transacción
```

### Categorías

```
GET    /api/mantia/categories         - Listar categorías
GET    /api/mantia/categories/tree    - Árbol de categorías
GET    /api/mantia/categories/:id     - Obtener categoría
POST   /api/mantia/categories         - Crear categoría
PUT    /api/mantia/categories/:id     - Actualizar categoría
DELETE /api/mantia/categories/:id     - Eliminar categoría
```

### Presupuestos

```
GET    /api/mantia/budgets            - Listar presupuestos
GET    /api/mantia/budgets/:id        - Obtener presupuesto
POST   /api/mantia/budgets            - Crear presupuesto
PUT    /api/mantia/budgets/:id        - Actualizar presupuesto
DELETE /api/mantia/budgets/:id        - Eliminar presupuesto
```

## 💻 Uso

### Crear una cuenta

```typescript
const nuevaCuenta = {
  name: "Banco Macro",
  type: "BANK",
  initialBalance: 100000,
  currency: "ARS"
};

const response = await fetch('/api/mantia/accounts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(nuevaCuenta)
});
```

### Registrar un gasto

```typescript
const gasto = {
  type: "EXPENSE",
  fromAccountId: "cuenta-id",
  amount: 5000,
  categoryId: "categoria-id",
  description: "Compra supermercado",
  transactionDate: new Date().toISOString()
};

await fetch('/api/mantia/transactions', {
  method: 'POST',
  body: JSON.stringify(gasto)
});
```

### Crear un presupuesto

```typescript
const presupuesto = {
  name: "Presupuesto Alimentación",
  categoryId: "categoria-id",
  amount: 40000,
  period: "MONTHLY",
  startDate: "2026-02-01T00:00:00Z",
  alertThreshold: 0.8 // 80%
};

await fetch('/api/mantia/budgets', {
  method: 'POST',
  body: JSON.stringify(presupuesto)
});
```

## 🎨 Tema Visual

Mantia utiliza una paleta de colores azul/financiera:

- Primary: `#3b82f6` (blue-500)
- Accents: Indigo, purple, pink
- Success: Green (ingresos)
- Danger: Red (gastos, excesos)
- Warning: Yellow (alertas)

## 📊 Datos de Ejemplo

El script de seeding crea:

- 4 cuentas (efectivo, banco, tarjeta, digital)
- 6 categorías (alimentación, servicios, transporte, salud, entretenimiento, ingresos)
- 4 transacciones de ejemplo
- 2 presupuestos

## 🔒 Seguridad

Todos los endpoints requieren autenticación con JWT:

```typescript
headers: {
  'Authorization': `Bearer ${token}`
}
```

## 🤝 Integración con otros módulos

- Comparte sistema de autenticación con Alacena
- Usa la misma base de datos PostgreSQL
- Tipos TypeScript generados automáticamente

## 📝 Notas Técnicas

- **Actualización de balances**: Se realiza automáticamente en transacciones DB
- **Eliminación de cuentas**: Requiere que no tenga transacciones asociadas
- **Categorías**: Soportan jerarquía de hasta 3 niveles
- **Presupuestos**: Calculan gasto actual dinámicamente

## 🐛 Troubleshooting

### La app no carga

```bash
# Verificar que el backend esté corriendo
curl http://localhost:4000/health

# Verificar que los tipos estén generados
cd backend && npm run generate:types

# Reinstalar dependencias
cd frontend/mantia-app && npm install
```

### No se actualizan los balances

Los balances se actualizan automáticamente al crear/eliminar transacciones. Si hay inconsistencias, se puede recalcular manualmente sumando todas las transacciones de cada cuenta.

---

**Desarrollado como parte de la plataforma ECO** 🌱
