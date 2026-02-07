#!/usr/bin/env pwsh
# ============================================================
# 🖥️ ECO Platform - Setup para nueva computadora
# Ejecutar desde PowerShell como: .\scripts\setup-nueva-pc.ps1
# Fecha: 6 de febrero de 2026
# ============================================================

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ECO Platform - Setup Nueva PC" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# -----------------------------------------------------------
# PASO 0: Verificar prerequisitos
# -----------------------------------------------------------
Write-Host "📋 PASO 0: Verificando prerequisitos..." -ForegroundColor Yellow

$errors = @()

# Node.js
try {
    $nodeVersion = node --version 2>$null
    Write-Host "  ✅ Node.js: $nodeVersion" -ForegroundColor Green
}
catch {
    $errors += "Node.js"
    Write-Host "  ❌ Node.js NO instalado" -ForegroundColor Red
    Write-Host "     Descargar: https://nodejs.org (v20 LTS o superior)" -ForegroundColor Gray
}

# npm
try {
    $npmVersion = npm --version 2>$null
    Write-Host "  ✅ npm: $npmVersion" -ForegroundColor Green
}
catch {
    $errors += "npm"
    Write-Host "  ❌ npm NO instalado (viene con Node.js)" -ForegroundColor Red
}

# Git
try {
    $gitVersion = git --version 2>$null
    Write-Host "  ✅ Git: $gitVersion" -ForegroundColor Green
}
catch {
    $errors += "Git"
    Write-Host "  ❌ Git NO instalado" -ForegroundColor Red
    Write-Host "     Descargar: https://git-scm.com" -ForegroundColor Gray
}

# Python (opcional, para MkDocs)
try {
    $pythonVersion = python --version 2>$null
    Write-Host "  ✅ Python: $pythonVersion (para MkDocs)" -ForegroundColor Green
}
catch {
    Write-Host "  ⚠️  Python NO instalado (opcional, solo para docs)" -ForegroundColor DarkYellow
    Write-Host "     Descargar: https://python.org" -ForegroundColor Gray
}

# VS Code
try {
    $codeVersion = code --version 2>$null | Select-Object -First 1
    Write-Host "  ✅ VS Code: $codeVersion" -ForegroundColor Green
}
catch {
    Write-Host "  ⚠️  VS Code NO instalado o no en PATH" -ForegroundColor DarkYellow
    Write-Host "     Descargar: https://code.visualstudio.com" -ForegroundColor Gray
}

if ($errors.Count -gt 0) {
    Write-Host ""
    Write-Host "❌ Faltan prerequisitos esenciales: $($errors -join ', ')" -ForegroundColor Red
    Write-Host "   Instálalos y volvé a ejecutar este script." -ForegroundColor Red
    Write-Host ""
    exit 1
}

Write-Host ""
Write-Host "✅ Todos los prerequisitos OK" -ForegroundColor Green
Write-Host ""

# -----------------------------------------------------------
# PASO 1: Crear archivos .env del backend
# -----------------------------------------------------------
Write-Host "📋 PASO 1: Configurando backend/.env ..." -ForegroundColor Yellow

$backendEnvPath = Join-Path $PSScriptRoot "..\backend\.env"

if (Test-Path $backendEnvPath) {
    Write-Host "  ⚠️  backend/.env ya existe, no se sobreescribe" -ForegroundColor DarkYellow
}
else {
    $backendEnv = @"
# Prisma - PostgreSQL Supabase (Remoto)
DATABASE_URL="postgresql://postgres:DjDK6YNUopieqRGW@db.orqnbchxoqalghcaaajw.supabase.co:5432/postgres?schema=public"

# JWT Secret for authentication
JWT_SECRET="eco-jwt-secret-2026-development"

# Node Environment
NODE_ENV="development"

# Server Port
PORT=4000
"@
    Set-Content -Path $backendEnvPath -Value $backendEnv -Encoding UTF8
    Write-Host "  ✅ backend/.env creado" -ForegroundColor Green
}

# -----------------------------------------------------------
# PASO 2: Crear archivos .env del frontend
# -----------------------------------------------------------
Write-Host "📋 PASO 2: Configurando frontend/.env.local ..." -ForegroundColor Yellow

$frontendEnvPath = Join-Path $PSScriptRoot "..\frontend\alacena-app\.env.local"

if (Test-Path $frontendEnvPath) {
    Write-Host "  ⚠️  frontend/alacena-app/.env.local ya existe, no se sobreescribe" -ForegroundColor DarkYellow
}
else {
    $frontendEnv = @"
# Backend API - Local para desarrollo
NEXT_PUBLIC_API_URL=http://localhost:4000

# NextAuth Configuration - Local Development
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=vfD04LjH7l1tUM9QBbFrqs2aeRwhO5XYgGZ3AICJKxdmyEoNzkTV8uSWPipc6n

# Production URL (para referencia)
# NEXTAUTH_URL=https://eco-app.vercel.app
"@
    Set-Content -Path $frontendEnvPath -Value $frontendEnv -Encoding UTF8
    Write-Host "  ✅ frontend/alacena-app/.env.local creado" -ForegroundColor Green
}

# -----------------------------------------------------------
# PASO 3: Instalar dependencias del backend
# -----------------------------------------------------------
Write-Host "📋 PASO 3: Instalando dependencias del backend..." -ForegroundColor Yellow

$backendDir = Join-Path $PSScriptRoot "..\backend"
Push-Location $backendDir
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ Backend: npm install OK" -ForegroundColor Green
    npx prisma generate
    Write-Host "  ✅ Backend: prisma generate OK" -ForegroundColor Green
}
else {
    Write-Host "  ❌ Backend: npm install falló" -ForegroundColor Red
}
Pop-Location

# -----------------------------------------------------------
# PASO 4: Instalar dependencias del frontend
# -----------------------------------------------------------
Write-Host "📋 PASO 4: Instalando dependencias del frontend..." -ForegroundColor Yellow

$frontendDir = Join-Path $PSScriptRoot "..\frontend"
Push-Location $frontendDir
npm install
if ($LASTEXITCODE -eq 0) {
    Write-Host "  ✅ Frontend: npm install OK" -ForegroundColor Green
}
else {
    Write-Host "  ❌ Frontend: npm install falló" -ForegroundColor Red
}
Pop-Location

# -----------------------------------------------------------
# PASO 5: MkDocs (opcional)
# -----------------------------------------------------------
Write-Host "📋 PASO 5: Configurando MkDocs (documentación)..." -ForegroundColor Yellow

try {
    $pythonCheck = python --version 2>$null
    pip install mkdocs-material 2>$null
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ mkdocs-material instalado" -ForegroundColor Green
    }
    else {
        Write-Host "  ⚠️  mkdocs-material no se pudo instalar" -ForegroundColor DarkYellow
    }
}
catch {
    Write-Host "  ⚠️  Python no disponible, saltando MkDocs" -ForegroundColor DarkYellow
}

# -----------------------------------------------------------
# PASO 6: Extensiones de VS Code recomendadas
# -----------------------------------------------------------
Write-Host "📋 PASO 6: Instalando extensiones de VS Code..." -ForegroundColor Yellow

$extensions = @(
    "Prisma.prisma",
    "bradlc.vscode-tailwindcss",
    "dbaeumer.vscode-eslint",
    "GitHub.copilot",
    "GitHub.copilot-chat"
)

foreach ($ext in $extensions) {
    try {
        code --install-extension $ext 2>$null
        Write-Host "  ✅ $ext" -ForegroundColor Green
    }
    catch {
        Write-Host "  ⚠️  No se pudo instalar $ext" -ForegroundColor DarkYellow
    }
}

# -----------------------------------------------------------
# RESUMEN FINAL
# -----------------------------------------------------------
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  ✅ SETUP COMPLETADO" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para arrancar a desarrollar:" -ForegroundColor White
Write-Host ""
Write-Host "  Backend:  cd backend; npm run dev" -ForegroundColor Gray
Write-Host "  Frontend: cd frontend/alacena-app; npm run dev" -ForegroundColor Gray
Write-Host "  Docs:     mkdocs serve  (desde la raiz)" -ForegroundColor Gray
Write-Host ""
Write-Host "URLs locales:" -ForegroundColor White
Write-Host "  Frontend: http://localhost:3000" -ForegroundColor Gray
Write-Host "  Backend:  http://localhost:4000" -ForegroundColor Gray
Write-Host "  Docs:     http://localhost:8000" -ForegroundColor Gray
Write-Host ""
Write-Host "Credenciales de prueba:" -ForegroundColor White
Write-Host "  Email:    admin@alacena.com" -ForegroundColor Gray
Write-Host "  Password: admin123" -ForegroundColor Gray
Write-Host ""
Write-Host "URLs produccion:" -ForegroundColor White
Write-Host "  Frontend: https://eco-app.vercel.app" -ForegroundColor Gray
Write-Host "  Backend:  https://eco-backend.fly.dev" -ForegroundColor Gray
Write-Host ""
