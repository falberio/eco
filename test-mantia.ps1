# Script de Testing Manual para Mantia
# Ejecutar: .\test-mantia.ps1

Write-Host "`n╔═══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   🧪 MANTIA - TESTS MANUALES       ║" -ForegroundColor Cyan  
Write-Host "╚═══════════════════════════════════════╝`n" -ForegroundColor Cyan

$baseUrl = "http://localhost:4000"
$testsPassed = 0
$testsFailed = 0

# Helper function
function Test-Endpoint {
    param([string]$Name, [string]$Method, [string]$Url, [hashtable]$Body = $null)
    
    Write-Host "📝 $Name..." -NoNewline
    
    try {
        if ($Method -eq "GET") {
            $response = Invoke-WebRequest -Uri $Url -Method GET -UseBasicParsing -TimeoutSec 5
        }
        else {
            $jsonBody = $Body | ConvertTo-Json
            $response = Invoke-WebRequest -Uri $Url -Method $Method -Body $jsonBody -ContentType "application/json" -UseBasicParsing -TimeoutSec 5
        }
        
        if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 300) {
            Write-Host " ✅ PASS" -ForegroundColor Green
            $script:testsPassed++
            return $response
        }
        else {
            Write-Host " ❌ FAIL (Status: $($response.StatusCode))" -ForegroundColor Red
            $script:testsFailed++
            return $null
        }
    }
    catch {
        Write-Host " ❌ FAIL ($_)" -ForegroundColor Red
        $script:testsFailed++
        return $null
    }
}

# ============================================
# TESTS
# ============================================

Write-Host "🏥 HEALTH CHECKS`n" -ForegroundColor Yellow

Test-Endpoint -Name "Health Check" -Method GET -Url "$baseUrl/health"
Test-Endpoint -Name "Test Endpoint" -Method GET -Url "$baseUrl/test"

Write-Host "`n💼 CUENTAS (Accounts)`n" -ForegroundColor Yellow

$accountsRes = Test-Endpoint -Name "GET /api/mantia/accounts" -Method GET -Url "$baseUrl/api/mantia/accounts"

if ($accountsRes) {
    $accounts = ($accountsRes.Content | ConvertFrom-Json).data
    Write-Host "   → Total cuentas encontradas" -ForegroundColor Gray
    
    if ($accounts -and $accounts.Count -gt 0) {
        $firstAccount = $accounts[0]
        Write-Host "   → Primera cuenta: $($firstAccount.name) ($($firstAccount.type))" -ForegroundColor Gray
        
        # Test GET by ID
        Test-Endpoint -Name "GET /api/mantia/accounts/:id" -Method GET -Url "$baseUrl/api/mantia/accounts/$($firstAccount.id)"
        Test-Endpoint -Name "GET /api/mantia/accounts/:id/balance" -Method GET -Url "$baseUrl/api/mantia/accounts/$($firstAccount.id)/balance"
    }
}

# Test CREATE
$newAccount = @{
    name           = "Test Account $(Get-Date -Format 'HHmmss')"
    type           = "CASH"
    initialBalance = 1000
    currency       = "ARS"
}

$createRes = Test-Endpoint -Name "POST /api/mantia/accounts (crear)" -Method POST -Url "$baseUrl/api/mantia/accounts" -Body $newAccount

if ($createRes) {
    $created = ($createRes.Content | ConvertFrom-Json)
    Write-Host "   → Creada: $($created.name) con $$$($created.currentBalance)" -ForegroundColor Gray
}

Write-Host "`n💸 TRANSACCIONES (Transactions)`n" -ForegroundColor Yellow

Test-Endpoint -Name "GET /api/mantia/transactions" -Method GET -Url "$baseUrl/api/mantia/transactions"
Test-Endpoint -Name "GET /api/mantia/transactions/stats" -Method GET -Url "$baseUrl/api/mantia/transactions/stats"

Write-Host "`n📁 CATEGORÍAS (Categories)`n" -ForegroundColor Yellow

Test-Endpoint -Name "GET /api/mantia/categories" -Method GET -Url "$baseUrl/api/mantia/categories"
Test-Endpoint -Name "GET /api/mantia/categories/tree" -Method GET -Url "$baseUrl/api/mantia/categories/tree"

Write-Host "`n📊 PRESUPUESTOS (Budgets)`n" -ForegroundColor Yellow

Test-Endpoint -Name "GET /api/mantia/budgets" -Method GET -Url "$baseUrl/api/mantia/budgets"

# ============================================
# RESUMEN
# ============================================

Write-Host "`n╔═══════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║          📊 RESUMEN                 ║" -ForegroundColor Cyan
Write-Host "╚═══════════════════════════════════════╝`n" -ForegroundColor Cyan

$total = $testsPassed + $testsFailed
$percentage = if ($total -gt 0) { [math]::Round(($testsPassed / $total) * 100, 1) } else { 0 }

Write-Host "Total Tests:  $total" -ForegroundColor White
Write-Host "✅ Passed:    $testsPassed" -ForegroundColor Green
Write-Host "❌ Failed:    $testsFailed" -ForegroundColor Red
Write-Host "📈 Success:   $percentage%`n" -ForegroundColor $(if ($percentage -ge 80) { "Green" } elseif ($percentage -ge 50) { "Yellow" } else { "Red" })

if ($testsFailed -eq 0) {
    Write-Host "🎉 ¡Todos los tests pasaron!" -ForegroundColor Green -BackgroundColor Black
}
else {
    Write-Host "⚠️  Algunos tests fallaron. Revisa el backend." -ForegroundColor Yellow
}

Write-Host ""
