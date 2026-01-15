# ALACENA - Instrucciones de Deploy a Vercel

## Paso 1: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `alacena` (o el que prefieras)
3. Descripción: "Sistema de gestión de cocina inteligente con QR y control de inventario"
4. Elige **público** (para poder deployar en Vercel free)
5. Click en "Create repository"

## Paso 2: Conectar Local a GitHub

Después de crear el repo en GitHub, verás instrucciones. Ejecuta en tu terminal:

```bash
cd C:\Users\Usuario\alacena
git remote add origin https://github.com/TU_USUARIO/alacena.git
git branch -M main
git push -u origin main
```

Reemplaza `TU_USUARIO` con tu usuario de GitHub.

## Paso 3: Deploy Backend en Vercel

1. Ve a https://vercel.com/new
2. Importa tu repo GitHub (conecta GitHub si es necesario)
3. Selecciona la carpeta `backend/`
4. En "Environment Variables", agrega:
   - Nombre: `DATABASE_URL`
   - Valor: Tu conexión PostgreSQL de Supabase (la URL completa con credenciales)
5. Click en "Deploy"

**URL resultante:** `https://alacena-backend.vercel.app`

## Paso 4: Deploy Frontend en Vercel

1. Ve a https://vercel.com/new nuevamente
2. Importa el mismo repo
3. Selecciona la carpeta `frontend/alacena-app/`
4. En "Environment Variables", agrega:
   - Nombre: `NEXT_PUBLIC_API_URL`
   - Valor: `https://alacena-backend.vercel.app` (la URL del backend que obtuviste en Paso 3)
5. Click en "Deploy"

**URL resultante:** `https://alacena-app.vercel.app` (o similar)

## Paso 5: Configurar CORS en Backend

Una vez que tengas ambas URLs, actualiza `backend/src/app.js`:

```javascript
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['http://localhost:3000', 'https://alacena-app.vercel.app']
}));
```

Luego haz:
```bash
git add -A
git commit -m "chore: Actualizar CORS para Vercel URLs"
git push
```

Vercel re-deployará automáticamente.

## ✅ Listo!

Tu ALACENA estará disponible en:
- **Frontend:** https://alacena-app.vercel.app
- **API:** https://alacena-backend.vercel.app
- **Menú Público:** https://alacena-app.vercel.app/guest/menu

## Troubleshooting

Si algo falla:
1. Revisa los logs en Vercel dashboard
2. Verifica que DATABASE_URL sea correcta
3. Asegúrate que NEXT_PUBLIC_API_URL no tenga trailing slash

¡Éxito! 🚀
