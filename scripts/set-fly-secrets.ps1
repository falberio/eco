# Script to set Fly.io secrets for Alacena backend
# Requiere: flyctl CLI instalado

# Nota: Debes estar autenticado en Fly.io primero:
# flyctl auth login

# Luego ejecuta estos comandos:

# 1. Set DATABASE_URL
# flyctl secrets set DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable" -a alacena-backend

# 2. Set JWT_SECRET  
# flyctl secrets set JWT_SECRET="your-super-secret-jwt-key-change-in-production" -a alacena-backend

# 3. View all secrets
# flyctl secrets list -a alacena-backend

# 4. Deploy
# git push (o si usas Fly.io deploy automático con GitHub)

Write-Host "Fly.io Secrets Configuration"
Write-Host "============================="
Write-Host ""
Write-Host "Execute these commands in PowerShell:"
Write-Host ""
Write-Host 'flyctl secrets set DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@[2600:1f18:2e13:9d1c:faba:208:6f00:de21]:5432/postgres?schema=public&sslmode=disable" -a alacena-backend'
Write-Host ""
Write-Host 'flyctl secrets set JWT_SECRET="your-super-secret-jwt-key-change-in-production" -a alacena-backend'
Write-Host ""
Write-Host "Then verify with:"
Write-Host ""
Write-Host "flyctl secrets list -a alacena-backend"
