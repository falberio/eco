# 🧪 Guía Completa de Testing - ECO Platform

> Cómo probar y validar funcionalidades del proyecto

**Última actualización:** 2026-01-25

---

## 📋 Índice

1. [¿Qué es Testing?](#qué-es-testing)
2. [Estado Actual del Proyecto](#estado-actual)
3. [Tipos de Testing](#tipos-de-testing)
4. [Testing Manual](#testing-manual)
5. [Testing Automatizado](#testing-automatizado)
6. [Plan de Implementación](#plan-de-implementación)
7. [Ejemplos Prácticos](#ejemplos-prácticos)

---

## 🎯 ¿Qué es Testing?

El **testing** (pruebas) es el proceso de verificar que tu código funciona correctamente. Es como revisar que una receta funcione antes de servir la comida a tus clientes.

### ¿Por qué es importante?

✅ **Detecta bugs antes** de que lleguen a producción  
✅ **Documenta** cómo debe funcionar el código  
✅ **Facilita cambios** - sabes si algo se rompió  
✅ **Aumenta confianza** al hacer deploy  
✅ **Ahorra tiempo** a largo plazo  

---

## 📊 Estado Actual

### ❌ Sin Tests Automatizados

Actualmente ECO Platform **NO tiene tests automáticos**. Todo se prueba manualmente:

```bash
# Iniciar backend
cd backend && npm start

# Abrir navegador
# → Hacer click manualmente
# → Verificar que funciona
```

**Problemas:**
- ⏱️ Lento - cada cambio requiere probar todo manualmente
- 🐛 Propenso a errores - podemos olvidar probar algo
- 😰 Miedo a romper cosas - no hay red de seguridad
- 📉 No escalable - con más features, más tiempo de testing manual

### ✅ Qué Tenemos

- ✅ Scripts de seeding (`seed-mantia.js`) - datos de prueba
- ✅ Endpoints HTTP funcionales
- ✅ Validación con Zod en backend
- ✅ TypeScript en frontend (detecta errores de tipos)

---

## 🔬 Tipos de Testing

### 1. **Testing Manual** (Lo que hacemos ahora)

**Definición:** Tú abres la app y pruebas con tus manos.

**Ejemplo:**
```
1. Abrir http://localhost:3001
2. Click en "Nueva Cuenta"
3. Llenar formulario
4. Click en "Crear"
5. Verificar que aparece en la lista
```

**Pros:** ✅ Fácil de empezar, no requiere código  
**Contras:** ❌ Lento, aburrido, propenso a errores, no repetible automáticamente

---

### 2. **Unit Tests** (Tests Unitarios)

**Definición:** Probar funciones individuales en aislamiento.

**Ejemplo:**
```javascript
// Función a probar
function calcularBalance(transacciones) {
  return transacciones.reduce((sum, t) => sum + t.amount, 0);
}

// Test
test('calcularBalance suma correctamente', () => {
  const txs = [
    { amount: 100 },
    { amount: 50 },
    { amount: -30 }
  ];
  expect(calcularBalance(txs)).toBe(120);
});
```

**Cuándo usar:** Para lógica de negocio, cálculos, transformaciones de datos.

**Pros:** ✅ Rápido, fácil de escribir, encuentra bugs específicos  
**Contras:** ❌ No prueba integración entre componentes

---

### 3. **Integration Tests** (Tests de Integración)

**Definición:** Probar que varios componentes funcionan juntos.

**Ejemplo Backend:**
```javascript
test('POST /api/mantia/transactions crea transacción y actualiza balance', async () => {
  // 1. Crear cuenta
  const cuenta = await createAccount({ name: 'Test', initialBalance: 1000 });
  
  // 2. Crear transacción
  const tx = await request(app)
    .post('/api/mantia/transactions')
    .send({
      type: 'EXPENSE',
      fromAccountId: cuenta.id,
      amount: 100
    });
  
  // 3. Verificar que el balance se actualizó
  const updatedAccount = await getAccount(cuenta.id);
  expect(updatedAccount.currentBalance).toBe(900);
});
```

**Cuándo usar:** Para probar flujos completos (controlador → base de datos → respuesta).

**Pros:** ✅ Detecta problemas de integración real  
**Contras:** ❌ Más lentos que unit tests, más complejos de configurar

---

### 4. **E2E Tests** (End-to-End)

**Definición:** Probar la app completa como lo haría un usuario real.

**Ejemplo con Playwright:**
```javascript
test('flujo completo Mantia: crear cuenta → crear transacción → ver balance', async ({ page }) => {
  // 1. Ir a Mantia
  await page.goto('http://localhost:3001');
  
  // 2. Crear cuenta
  await page.click('text=Nueva Cuenta');
  await page.fill('input[name="name"]', 'Mi Cuenta Test');
  await page.selectOption('select[name="type"]', 'CASH');
  await page.fill('input[name="initialBalance"]', '10000');
  await page.click('button:has-text("Crear")');
  
  // 3. Verificar que aparece
  await expect(page.locator('text=Mi Cuenta Test')).toBeVisible();
  
  // 4. Ver balance
  await expect(page.locator('text=$10000.00')).toBeVisible();
});
```

**Cuándo usar:** Para flujos críticos de usuario (login, compra, crear orden).

**Pros:** ✅ Prueba la app real, detecta problemas de UX  
**Contras:** ❌ Lentos, frágiles (cambian si cambia la UI), difíciles de mantener

---

### 5. **Smoke Tests** (Tests de Humo)

**Definición:** Pruebas rápidas para verificar que "no hay fuego".

**Ejemplo:**
```bash
# ¿El backend arranca?
curl http://localhost:4000/health

# ¿El frontend carga?
curl http://localhost:3001

# ¿Las rutas principales responden?
curl http://localhost:4000/api/mantia/accounts
curl http://localhost:4000/api/mantia/transactions
```

**Cuándo usar:** Después de cada deploy, antes de ejecutar tests largos.

**Pros:** ✅ Muy rápidos, detectan problemas obvios  
**Contras:** ❌ No profundizan, solo verifican que "algo funciona"

---

## 🛠️ Testing Manual

### Guía Paso a Paso para Probar Mantia

#### **Test 1: Backend Health Check**

```powershell
# 1. Iniciar backend
cd C:\Users\Usuario\eco\backend
npm start

# 2. Probar health
curl http://localhost:4000/health

# Resultado esperado:
# { "status": "ok", "modules": ["alacena", "mantia"], "timestamp": "..." }
```

#### **Test 2: Listar Cuentas**

```powershell
curl http://localhost:4000/api/mantia/accounts

# Resultado esperado:
# {
#   "data": [...],
#   "pagination": { "total": 4, "page": 1, ... }
# }
```

#### **Test 3: Crear Cuenta**

```powershell
curl -X POST http://localhost:4000/api/mantia/accounts `
  -H "Content-Type: application/json" `
  -d '{"name":"Test Account","type":"CASH","initialBalance":5000}'

# Resultado esperado:
# { "id": "...", "name": "Test Account", "currentBalance": 5000, ... }
```

#### **Test 4: Frontend - Abrir App**

```bash
cd C:\Users\Usuario\eco\frontend\mantia-app
npm run dev

# Abrir navegador: http://localhost:3001
```

**Checklist Manual:**
- [ ] ¿Carga la página principal?
- [ ] ¿Se ven las 4 tarjetas (Cuentas, Transacciones, etc)?
- [ ] Click en "Cuentas" → ¿Carga la lista?
- [ ] Click en "Nueva Cuenta" → ¿Aparece el formulario?
- [ ] Llenar formulario → ¿Se crea correctamente?
- [ ] ¿Aparece en la lista con el balance correcto?

#### **Test 5: Flujo Completo**

1. **Crear Cuenta** "Billetera" con $10,000
2. **Crear Categoría** "Comida" 🍔
3. **Crear Transacción** Gasto de $2,000 en "Comida"
4. **Verificar Balance** → Debe mostrar $8,000
5. **Ver Estadísticas** → Debe mostrar $2,000 en gastos

---

## 🤖 Testing Automatizado

### Herramientas Recomendadas

#### **Backend**

**Jest** - Framework de testing para Node.js
```bash
npm install --save-dev jest supertest
```

**Supertest** - Para probar endpoints HTTP
```javascript
const request = require('supertest');
const app = require('../src/app');

test('GET /api/mantia/accounts returns accounts', async () => {
  const response = await request(app).get('/api/mantia/accounts');
  expect(response.status).toBe(200);
  expect(response.body.data).toBeInstanceOf(Array);
});
```

#### **Frontend**

**React Testing Library** - Para componentes React
```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom
```

```javascript
import { render, screen } from '@testing-library/react';
import AccountsPage from './accounts/page';

test('renders accounts page', () => {
  render(<AccountsPage />);
  expect(screen.getByText('Cuentas')).toBeInTheDocument();
});
```

#### **E2E**

**Playwright** - Para tests end-to-end
```bash
npm install --save-dev @playwright/test
```

```javascript
import { test, expect } from '@playwright/test';

test('crear cuenta funciona', async ({ page }) => {
  await page.goto('http://localhost:3001/dashboard/accounts');
  await page.click('text=Nueva Cuenta');
  // ... continuar interacción
});
```

---

## 📝 Plan de Implementación

### Fase 1: Smoke Tests (1-2 horas)

```javascript
// backend/tests/smoke.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Smoke Tests', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/mantia/accounts returns 200', async () => {
    const res = await request(app).get('/api/mantia/accounts');
    expect(res.status).toBe(200);
  });

  test('GET /api/alacena/items returns 200', async () => {
    const res = await request(app).get('/api/alacena/items');
    expect(res.status).toBe(200);
  });
});
```

**Ejecutar:**
```bash
npm test
```

### Fase 2: Unit Tests para Lógica (2-4 horas)

```javascript
// backend/src/controllers/__tests__/AccountController.test.js
const AccountController = require('../AccountController');

describe('AccountController', () => {
  test('debe crear una cuenta válida', async () => {
    const req = {
      body: {
        name: 'Test',
        type: 'CASH',
        initialBalance: 1000
      }
    };
    const res = {
      status: jest.fn(() => res),
      json: jest.fn()
    };

    await AccountController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'Test',
        currentBalance: 1000
      })
    );
  });
});
```

### Fase 3: Integration Tests (4-6 horas)

```javascript
// backend/tests/integration/mantia.test.js
describe('Mantia Integration Tests', () => {
  beforeAll(async () => {
    // Limpiar base de datos de test
    await prisma.mantia_Transaction.deleteMany();
    await prisma.mantia_Account.deleteMany();
  });

  test('flujo completo: crear cuenta → transacción → balance actualizado', async () => {
    // 1. Crear cuenta
    const accountRes = await request(app)
      .post('/api/mantia/accounts')
      .send({ name: 'Test', type: 'CASH', initialBalance: 1000 });
    
    const accountId = accountRes.body.id;

    // 2. Crear gasto
    await request(app)
      .post('/api/mantia/transactions')
      .send({
        type: 'EXPENSE',
        fromAccountId: accountId,
        amount: 300
      });

    // 3. Verificar balance
    const balanceRes = await request(app)
      .get(`/api/mantia/accounts/${accountId}/balance`);
    
    expect(balanceRes.body.currentBalance).toBe(700);
  });
});
```

### Fase 4: E2E Tests Críticos (6-8 horas)

```javascript
// tests/e2e/mantia-critical-flows.spec.js
import { test, expect } from '@playwright/test';

test.describe('Mantia Critical Flows', () => {
  test('crear cuenta → ver en lista → crear transacción → ver balance actualizado', async ({ page }) => {
    // Ir a Mantia
    await page.goto('http://localhost:3001');
    
    // Navegar a Cuentas
    await page.click('text=Cuentas');
    
    // Crear cuenta
    await page.click('text=Nueva Cuenta');
    await page.fill('input[name="name"]', 'E2E Test Account');
    await page.selectOption('select[name="type"]', 'CASH');
    await page.fill('input[name="initialBalance"]', '5000');
    await page.click('button:has-text("Crear")');
    
    // Verificar que aparece
    await expect(page.locator('text=E2E Test Account')).toBeVisible();
    await expect(page.locator('text=$5000.00')).toBeVisible();
    
    // TODO: Continuar con transacción
  });
});
```

---

## 💡 Ejemplos Prácticos

### Test de Validación

```javascript
test('no permite crear cuenta sin nombre', async () => {
  const response = await request(app)
    .post('/api/mantia/accounts')
    .send({ type: 'CASH' }); // Sin nombre

  expect(response.status).toBe(400);
  expect(response.body.error).toContain('Validation error');
});
```

### Test de Balance

```javascript
test('balance se actualiza correctamente con múltiples transacciones', async () => {
  const account = await createAccount({ initialBalance: 1000 });

  // Ingreso +500
  await createTransaction({
    type: 'INCOME',
    toAccountId: account.id,
    amount: 500
  });

  // Gasto -200
  await createTransaction({
    type: 'EXPENSE',
    fromAccountId: account.id,
    amount: 200
  });

  const updated = await getAccount(account.id);
  expect(updated.currentBalance).toBe(1300); // 1000 + 500 - 200
});
```

### Test de Presupuesto

```javascript
test('presupuesto detecta cuando se excede el límite', async () => {
  const category = await createCategory({ name: 'Comida' });
  const budget = await createBudget({
    categoryId: category.id,
    amount: 1000,
    period: 'MONTHLY',
    startDate: new Date('2026-01-01')
  });

  // Gastar $1200 (excede $1000)
  await createTransaction({
    categoryId: category.id,
    type: 'EXPENSE',
    amount: 1200
  });

  const updated = await getBudget(budget.id);
  expect(updated.isOverBudget).toBe(true);
  expect(updated.percentage).toBeGreaterThan(100);
});
```

---

## 📚 Recursos

### Tutoriales

- **Jest:** https://jestjs.io/docs/getting-started
- **React Testing Library:** https://testing-library.com/docs/react-testing-library/intro
- **Playwright:** https://playwright.dev/docs/intro
- **Supertest:** https://github.com/visionmedia/supertest

### Best Practices

1. **AAA Pattern** - Arrange, Act, Assert
   ```javascript
   test('ejemplo', () => {
     // Arrange - preparar datos
     const data = { name: 'Test' };
     
     // Act - ejecutar acción
     const result = processData(data);
     
     // Assert - verificar resultado
     expect(result).toBe('processed');
   });
   ```

2. **Tests aislados** - Cada test debe poder correr independientemente
3. **Nombres descriptivos** - `test('crea cuenta con balance inicial')` mejor que `test('test1')`
4. **Cleanup** - Limpiar datos después de cada test
5. **Mocks** - Usar mocks para dependencias externas (APIs, DB)

---

## ✅ Checklist de Testing

### Para cada Feature Nueva

- [ ] ¿Hay unit tests para la lógica?
- [ ] ¿Hay integration test para el flujo completo?
- [ ] ¿Se probó manualmente en navegador?
- [ ] ¿Funciona con datos reales?
- [ ] ¿Funciona con datos vacíos?
- [ ] ¿Maneja errores correctamente?
- [ ] ¿Los mensajes de error son claros?

### Antes de Deploy

- [ ] Todos los tests pasan (`npm test`)
- [ ] Smoke tests OK
- [ ] Probado en localhost
- [ ] Revisado en staging (si existe)
- [ ] Rollback plan definido

---

## 🚀 Próximos Pasos

### Corto Plazo (Esta semana)

1. ✅ Crear guía de testing (este documento)
2. ⏳ Instalar Jest y configurar
3. ⏳ Escribir primeros smoke tests
4. ⏳ Documentar proceso de testing manual

### Mediano Plazo (Próximas 2 semanas)

1. ⏳ Unit tests para controllers críticos
2. ⏳ Integration tests para flujos de Mantia
3. ⏳ CI/CD con GitHub Actions (tests automáticos en cada push)

### Largo Plazo (Próximo mes)

1. ⏳ E2E tests con Playwright
2. ⏳ Coverage mínimo 70%
3. ⏳ Tests de performance
4. ⏳ Tests de seguridad

---

**Recuerda:** Testing es una inversión. Al principio parece lento, pero a largo plazo ahorra MUCHO tiempo y dolores de cabeza. 

**Empieza pequeño:** No necesitas 100% coverage desde día 1. Empieza con smoke tests, luego agrega tests para features críticas.
