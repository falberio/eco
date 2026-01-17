# Instrucciones de Deployment para Alacena Backend en Fly.io

## 1. Prerequisitos
- Tener `flyctl` CLI instalado: https://fly.io/docs/hands-on/install-flyctl/
- Estar autenticado: `flyctl auth login`

## 2. Setear las variables de entorno (Secrets)

Ejecuta estos comandos en la terminal:

```bash
flyctl secrets set DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable" -a alacena-backend

flyctl secrets set JWT_SECRET="your-super-secret-jwt-key-change-in-production" -a alacena-backend
```

## 3. Verificar que los secrets se hayan seteado correctamente

```bash
flyctl secrets list -a alacena-backend
```

Deberías ver:
- DATABASE_URL
- JWT_SECRET

## 4. Deployar

Si está configurado el GitHub Actions automático (recomendado):
```bash
git push
```

O manualmente con:
```bash
flyctl deploy -a alacena-backend
```

## 5. Ver logs de deployment

```bash
flyctl logs -a alacena-backend
```

## 6. Testear que funciona

```bash
curl https://alacena-backend.fly.dev/health
```

Debería retornar:
```json
{"status":"ok","app":"alacena","timestamp":"..."}
```

## 7. Testear autenticación

```bash
curl -X POST https://alacena-backend.fly.dev/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@alacena.com","password":"admin123"}'
```

Debería retornar un token JWT y datos del usuario.
