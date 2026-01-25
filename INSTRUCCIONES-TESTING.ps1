# INSTRUCCIONES DE TESTING MANUAL
# ================================

Write-Host @"

╔════════════════════════════════════════════════════════╗
║                                                        ║
║     🧪 GUÍA DE TESTING MANUAL - MANTIA                ║
║                                                        ║
╚════════════════════════════════════════════════════════╝

"@ -ForegroundColor Cyan

Write-Host "📋 PASO 1: INICIAR BACKEND" -ForegroundColor Yellow
Write-Host @"
   
   En una terminal PowerShell, ejecutá:
   
   > cd C:\Users\Usuario\eco\backend
   > npm start
   
   ✅ Deberías ver: "🧺 Alacena backend corriendo en puerto 4000"

"@

Write-Host "📋 PASO 2: PROBAR ENDPOINTS (en otra terminal)" -ForegroundColor Yellow
Write-Host @"

   Abrí OTRA terminal PowerShell y ejecutá:
   
   > cd C:\Users\Usuario\eco
   > .\test-mantia.ps1
   
   Esto probará todos los endpoints automáticamente.

"@

Write-Host "📋 PASO 3: PROBAR FRONTEND" -ForegroundColor Yellow
Write-Host @"

   En OTRA terminal más, ejecutá:
   
   > cd C:\Users\Usuario\eco\frontend\mantia-app
   > npm run dev
   
   Luego abrí en navegador: http://localhost:3001

"@

Write-Host "═══════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""
Write-Host "❓ ¿Querés que ejecute los tests ahora?" -ForegroundColor Yellow
Write-Host "   Asegurate de tener el backend corriendo primero." -ForegroundColor Gray
Write-Host ""

$respuesta = Read-Host "¿Ejecutar tests? (s/n)"

if ($respuesta -eq 's' -or $respuesta -eq 'S') {
    Write-Host "`n🔍 Verificando que el backend esté corriendo..." -ForegroundColor Cyan
    
    try {
        $test = Invoke-WebRequest -Uri "http://localhost:4000/health" -UseBasicParsing -TimeoutSec 2
        Write-Host "✅ Backend detectado en puerto 4000" -ForegroundColor Green
        Write-Host ""
        
        # Ejecutar script de tests
        & ".\test-mantia.ps1"
        
    }
    catch {
        Write-Host "❌ Backend NO está corriendo en puerto 4000" -ForegroundColor Red
        Write-Host ""
        Write-Host "Por favor, iniciá el backend primero:" -ForegroundColor Yellow
        Write-Host "   cd C:\Users\Usuario\eco\backend" -ForegroundColor Gray
        Write-Host "   npm start" -ForegroundColor Gray
    }
}
else {
    Write-Host "`n👋 Ok, cuando quieras probarlo ejecutá: .\test-mantia.ps1" -ForegroundColor Cyan
}
