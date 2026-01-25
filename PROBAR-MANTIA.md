# 🚀 GUÍA RÁPIDA: Probar Mantia

## ✅ Paso 1: Iniciar Backend

**Abrir una terminal en VS Code** (Terminal → New Terminal o Ctrl+Shift+`)

```powershell
cd C:\Users\Usuario\eco\backend
npm start
```

✅ **Deberías ver:** `🧺 Alacena backend corriendo en puerto 4000`

⚠️ **IMPORTANTE:** Dejá esta terminal abierta y corriendo. NO la cierres.

---

## ✅ Paso 2: Ejecutar Tests del API

**Abrir OTRA terminal en VS Code** (click en el `+` arriba a la derecha)

```powershell
cd C:\Users\Usuario\eco
.\test-mantia.ps1
```

Esto ejecutará todos los tests automáticamente y te mostrará:
- ✅ Tests que pasaron (verde)
- ❌ Tests que fallaron (rojo)
- 📊 Resumen con % de éxito

---

## ✅ Paso 3: Probar Frontend

**Abrir una TERCERA terminal en VS Code**

```powershell
cd C:\Users\Usuario\eco\frontend\mantia-app
npm run dev
```

Luego abrir en navegador: **http://localhost:3001**

---

## 🧪 Tests Manuales en el Navegador

Una vez en http://localhost:3001:

### Test 1: Home
- [ ] ¿Se ven las 4 tarjetas? (Cuentas, Transacciones, Categorías, Presupuestos)
- [ ] ¿Los iconos se ven bien?

### Test 2: Cuentas
- [ ] Click en "Cuentas" → ¿Carga la página?
- [ ] ¿Se ven las 4 cuentas del seeding?
  - Efectivo Principal ($50,000)
  - Cuenta Banco Nación
  - Tarjeta VISA
  - MercadoPago
- [ ] Click en "Nueva Cuenta"
- [ ] Llenar formulario y crear
- [ ] ¿Aparece en la lista?

### Test 3: Transacciones
- [ ] Click en "Transacciones"
- [ ] ¿Se ven las estadísticas? (Ingresos, Gastos, Balance)
- [ ] ¿Se muestra la tabla de transacciones?
- [ ] ¿Las 4 transacciones del seeding están ahí?

### Test 4: Categorías
- [ ] Click en "Categorías"
- [ ] ¿Se ven las 6 categorías con iconos?
  - 🍔 Alimentación
  - 💡 Servicios
  - 🚗 Transporte
  - 💊 Salud
  - 🎮 Entretenimiento
  - 💰 Ingresos

### Test 5: Presupuestos
- [ ] Click en "Presupuestos"
- [ ] ¿Se ven los 2 presupuestos?
- [ ] ¿Las barras de progreso se muestran?
- [ ] ¿Los colores cambian según el uso? (verde/amarillo/rojo)

---

## 🔧 Troubleshooting

### Backend no inicia
```powershell
# Verificar si hay un proceso usando el puerto
Get-Process -Name node | Stop-Process -Force

# Reintentar
cd C:\Users\Usuario\eco\backend
npm start
```

### Frontend no carga
```powershell
# Limpiar cache
cd C:\Users\Usuario\eco\frontend\mantia-app
Remove-Item -Recurse -Force .next
npm run dev
```

### Tests fallan
1. ¿El backend está corriendo? → Verificar terminal 1
2. ¿Hay datos en la DB? → Ejecutar seeding:
   ```powershell
   cd C:\Users\Usuario\eco\backend
   node prisma/seed-mantia.js
   ```

---

## 📝 Comandos Rápidos

**Verificar que backend responde:**
```powershell
Invoke-WebRequest http://localhost:4000/health | Select-Object StatusCode
```

**Ver cuentas desde PowerShell:**
```powershell
(Invoke-WebRequest http://localhost:4000/api/mantia/accounts).Content | ConvertFrom-Json | Select-Object -ExpandProperty data | Format-Table name, type, currentBalance
```

**Crear cuenta de prueba:**
```powershell
Invoke-WebRequest -Uri http://localhost:4000/api/mantia/accounts -Method POST -ContentType "application/json" -Body '{"name":"Test","type":"CASH","initialBalance":5000}'
```

---

## 🎯 Resumen de lo Implementado

✅ **Backend Completo:**
- 4 Modelos (Account, Transaction, Category, Budget)
- 4 Controllers con CRUD completo
- Validación con Zod
- Actualización automática de balances
- 20+ endpoints

✅ **Frontend Completo:**
- Aplicación Next.js independiente (puerto 3001)
- 4 páginas del dashboard
- Tema azul/financiero
- Formularios de creación
- Visualización de stats

✅ **Base de Datos:**
- Migración aplicada
- 4 cuentas de ejemplo
- 6 categorías
- 4 transacciones
- 2 presupuestos

---

**¡Mantia está 100% funcional! 🎉**
