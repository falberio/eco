# 🌍 ECO - Ecosistema de Aplicaciones

## 📋 Módulos del Ecosistema

- 🥘 **ALACENA** - Sistema de gestión alimentaria ✅ EN PRODUCCIÓN
- 💰 **FINANCIA** - Economía personal (gastos/ingresos/presupuestos) ✅ LOCAL
- 🏠 **MANTIA** - Inventario del hogar + mantenimiento 📝 PLANEADO
- 📖 **HUESHA** - Registro vital/personal 📝 PLANEADO  
- 🏥 **SALUD** - Bienestar y hábitos corporales 📝 PLANEADO

👉 **Ver detalles:** [ECO-MODULOS.md](ECO-MODULOS.md)

---

## ⚡ EMPEZÁ AQUÍ

### 📌 Primero que nada
Abre esto en **CADA nueva sesión**:
```
ECO-MODULOS.md          ← Arquitectura completa de ECO
docs/sesiones/INDEX.md  ← Qué se hizo antes
GETTING_STARTED.md      ← Cómo usar el sistema
QUICK_REFERENCE.md      ← Acceso rápido
```

### 🔗 URLs Importantes

#### ALACENA (Producción)
```
Frontend:  https://alacena-frontend.vercel.app
Login:     https://alacena-frontend.vercel.app/login
Backend:   https://alacena-backend.fly.dev
```

#### FINANCIA (Local)
```
Backend:   http://localhost:4000
Frontend:  http://localhost:3001
```

### 🔑 Login de Prueba (ALACENA)
```
Email:     admin@alacena.com
Password:  admin123
```

### ✅ Checklist para Nueva Sesión

- [ ] Abrí [ECO-MODULOS.md](./ECO-MODULOS.md) - Entender estructura
- [ ] Abrí [GETTING_STARTED.md](./GETTING_STARTED.md)
- [ ] Verificá ALACENA: `curl https://alacena-backend.fly.dev/health`
- [ ] Ahora estoy listo para trabajar

### 🚀 Hacer Deploy Rápido

```bash
cd c:\Users\Usuario\eco

# Hice cambios, ahora debo guardar:
git add -A
git commit -m "feat: Descripción de qué cambié"
git push

# ¡Listo! Vercel + Fly.io se actualizan solos (2-5 min)
```

### 📊 Status Actual

| Módulo | Status | Backend | Frontend | Última actualización |
|--------|--------|---------|----------|---------------------|
| ALACENA | ✅ Producción | Fly.io | Vercel | 24-01-2026 |
| FINANCIA | ✅ Local | localhost:4000 | localhost:3001 | 25-01-2026 |
| MANTIA | 📝 Planeado | - | - | - |
| Backend | ✅ Online | 24-01-2026 |
| Base de datos | ✅ Conectada | 24-01-2026 |
| Autenticación | ✅ Funcional | 24-01-2026 |
| Sistema de Taras | ✅ Implementado | 24-01-2026 |
| Control Stock Masivo | ✅ Funcional | 24-01-2026 |
| Códigos QR | ✅ Disponible | 24-01-2026 |

### 🎯 Nuevas Funcionalidades (24 Enero 2026)

**🏺 Sistema de Taras Automáticas**
- Usuario pesa frasco completo → App calcula peso neto automáticamente
- 4 tipos de frascos con taras: 637g, 692g, 746g, 929g
- Cálculo en tiempo real visible al usuario

**📋 Control de Stock Masivo**
- Recorre 33 frascos en secuencia automática
- Tecla Enter para avance rápido
- Botón "OK sin cambios" para frascos sin modificación
- Barra de progreso visual

**📱 Códigos QR**
- Genera QR imprimible para control masivo
- Función de copiar URL e imprimir
- Acceso desde botones flotantes en menú

### 🆘 Algo no funciona?

1. **Revisar logs del backend:**
   - https://fly.io/dashboard → alacena-backend → Logs

2. **Frontend lento?**
   - Limpiar cache: Ctrl+Shift+Delete
   - Recargar: Ctrl+F5

3. **Error de login?**
   - Verificar email exacto: `admin@alacena.com`
   - Verificar password exacta: `admin123`

4. **API no responde?**
   - Verificar: `curl https://alacena-backend.fly.dev/health`
   - Si no responde, revisar logs de Fly.io

### 🗂️ Estructura Importante

```
alacena/
├── frontend/alacena-app/    ← Cambios aquí = Vercel redeploy
├── backend/                 ← Cambios aquí = Fly.io redeploy
├── docs/
│   ├── sesiones/            ← Historial de trabajo
│   └── MAPA_VISUAL.md       ← Todas las funciones disponibles
├── GETTING_STARTED.md       ← Lee esto primero
├── QUICK_REFERENCE.md       ← Comandos + URLs + Modelos
├── STATUS.md                ← Qué está hecho
└── README.md                ← Este archivo (¡que estás leyendo!)
```

### 💡 Recordar

- **Siempre commit antes de cambiar ramas**
- **Siempre push después de cambios**
- **Los deploys son automáticos con git push**
- **La documentación está en `/docs/sesiones/`**

### 🎯 Próximos Pasos Típicos

**Opción A: Crear nueva feature**
1. Lee MAPA_VISUAL.md para ver qué es posible
2. Crea rama: `git checkout -b feature/mi-feature`
3. Haz cambios
4. Commit + push
5. Verifica en producción

**Opción B: Arreglar bug**
1. Reproduce el error en producción
2. Revisa logs (Fly.io o Vercel)
3. Haz fix local
4. Commit + push
5. Verifica que funcionó

**Opción C: Revisar qué se hizo antes**
1. Abre `/docs/sesiones/INDEX.md`
2. Abre la última sesión completada
3. Lee qué se hizo, problemas, decisiones

---

**Última actualización:** 24-01-2026  
**Versión:** v1.1 - Sistema de Taras y Control Masivo  
**Próxima acción:** Abre [GETTING_STARTED.md](./GETTING_STARTED.md)
