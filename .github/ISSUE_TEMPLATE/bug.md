---
name: 🐛 Bug Report
about: Reportar un error o comportamiento inesperado
title: '[BUG] '
labels: 'type:bug'
assignees: ''
---

## 🐛 Descripción del Bug

[Descripción clara y concisa del problema]

---

## 🔄 Pasos para Reproducir

1. Ir a [URL o pantalla]
2. Hacer click en [elemento]
3. Ingresar [datos]
4. Ver error

---

## ✅ Comportamiento Esperado

[Qué debería pasar normalmente]

---

## ❌ Comportamiento Actual

[Qué está pasando en su lugar]

---

## 📸 Screenshots

[Si aplica, pegar imágenes del error]

<!-- Puedes arrastrar y soltar imágenes aquí -->

---

## 🌐 Entorno

**Browser:** [Chrome 120 / Safari 17 / Firefox 115]  
**Device:** [Desktop / Mobile]  
**OS:** [Windows 11 / macOS Sonoma / iOS 17]  
**URL afectada:** [https://alacena-blush.vercel.app/...]

---

## 📋 Logs / Mensajes de Error

**Console del navegador:**
```
[Pegar errores de la consola]
```

**Backend logs (si aplica):**
```
[Logs de Fly.io o servidor]
```

**Network tab (si aplica):**
```
Status: 500
Response: {"error": "..."}
```

---

## 🚨 Severidad

- [ ] 🔴 **Crítica** - Bloquea completamente el uso del sistema
- [ ] 🟡 **Alta** - Afecta funcionalidad principal pero hay workaround
- [ ] 🟢 **Media** - Afecta funcionalidad secundaria
- [ ] ⚪ **Baja** - Cosmético, typo, o edge case raro

---

## 🔍 Contexto Adicional

**¿Cuándo empezó a pasar?**
[Después de deploy X, siempre pasó, etc.]

**¿Pasa siempre o intermitentemente?**
[100% reproducible / A veces / Solo en ciertas condiciones]

**¿En qué módulo?**
- [ ] ALACENA
- [ ] MANTIA
- [ ] ECOSALUD
- [ ] Lista de Compras
- [ ] Auth / Login
- [ ] Otro: _____

---

## 💡 Posible Causa (Opcional)

[Si tenés una hipótesis de qué lo causa, ponerla acá]

---

## 🏷️ Labels Sugeridos

- `module:alacena` / `module:mantia` / etc.
- `severity:critical` / `severity:high` / `severity:medium` / `severity:low`
- `area:frontend` / `area:backend` / `area:database` / `area:auth`
