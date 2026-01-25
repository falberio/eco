# Script de Testing Manual para FINANCIA
# Ejecutar: .\test-FINANCIA-v2.ps1

Write-Host "`n=== FINANCIA - TESTS MANUALES ===`n" -ForegroundColor Cyan

$baseUrl = "http://localhost:4000"
$testsPassed = 0
$testsFailed = 0

# Helper function
function Test-Endpoint {
    param(
        [string]$Name,
        [string]$Method,
        [string]$Url,
        [hashtable]$Body = $null
    )
    
    Write-Host "Testing $Name..." -NoNewline
    
    try {
        if ($Method -eq "GET") {
            $response = Invoke-WebRequest -Uri $Url -Method GET -UseBasicParsing -TimeoutSec 5
        } else {
            $jsonBody = $Body | ConvertTo-Json
            $response = Invoke-WebRequest -Uri $Url -Method $Method -Body $jsonBody -ContentType "application/json" -UseBasicParsing -TimeoutSec 5
        }
        
        if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 300) {
            Write-Host " PASS" -ForegroundColor Green
            $script:testsPassed++
            return $response
        } else {
            Write-Host " FAIL (Status: $($response.StatusCode))" -ForegroundColor Red
            $script:testsFailed++
            return $null
        }
    } catch {
        Write-Host " FAIL" -ForegroundColor Red
        Write-Host "  Error: $_" -ForegroundColor DarkRed
        $script:testsFailed++
        return $null
    }
}

# TESTS
Write-Host "`nHEALTH CHECKS" -ForegroundColor Yellow
Test-Endpoint -Name "Health Check" -Method "GET" -Url "$baseUrl/health"

Write-Host "`nCUENTAS (Accounts)" -ForegroundColor Yellow
$accountsRes = Test-Endpoint -Name "GET /api/financia/accounts" -Method "GET" -Url "$baseUrl/api/financia/accounts"

if ($accountsRes) {
    $json = $accountsRes.Content | ConvertFrom-Json
    if ($json.data -and $json.data.Count -gt 0) {
        $firstAccount = $json.data[0]
        Write-Host "  Primera cuenta: $($firstAccount.name)" -ForegroundColor Gray
        
        Test-Endpoint -Name "GET account by ID" -Method "GET" -Url "$baseUrl/api/financia/accounts/$($firstAccount.id)"
        Test-Endpoint -Name "GET account balance" -Method "GET" -Url "$baseUrl/api/financia/accounts/$($firstAccount.id)/balance"
    }
}

# Test CREATE Account
$newAccount = @{
    name = "Test Account $(Get-Date -Format 'HHmmss')"
    type = "CASH"
    initialBalance = 1000
    currency = "ARS"
}

$createRes = Test-Endpoint -Name "POST /api/financia/accounts" -Method "POST" -Url "$baseUrl/api/financia/accounts" -Body $newAccount

if ($createRes) {
    $created = $createRes.Content | ConvertFrom-Json
    Write-Host "  Creada: $($created.name)" -ForegroundColor Gray
}

Write-Host "`nTRANSACCIONES (Transactions)" -ForegroundColor Yellow
Test-Endpoint -Name "GET /api/financia/transactions" -Method "GET" -Url "$baseUrl/api/financia/transactions"
Test-Endpoint -Name "GET /api/financia/transactions/stats" -Method "GET" -Url "$baseUrl/api/financia/transactions/stats"

Write-Host "`nCATEGORIAS (Categories)" -ForegroundColor Yellow
Test-Endpoint -Name "GET /api/financia/categories" -Method "GET" -Url "$baseUrl/api/financia/categories"
Test-Endpoint -Name "GET /api/financia/categories/tree" -Method "GET" -Url "$baseUrl/api/financia/categories/tree"

Write-Host "`nPRESUPUESTOS (Budgets)" -ForegroundColor Yellow
Test-Endpoint -Name "GET /api/financia/budgets" -Method "GET" -Url "$baseUrl/api/financia/budgets"

# RESUMEN
Write-Host "`n=== RESUMEN ===`n" -ForegroundColor Cyan

$total = $testsPassed + $testsFailed
$percentage = if ($total -gt 0) { [math]::Round(($testsPassed / $total) * 100, 1) } else { 0 }

Write-Host "Total Tests:  $total" -ForegroundColor White
Write-Host "Passed:       $testsPassed" -ForegroundColor Green
Write-Host "Failed:       $testsFailed" -ForegroundColor Red
Write-Host "Success Rate: $percentage%`n" -ForegroundColor $(if ($percentage -ge 80) { "Green" } elseif ($percentage -ge 50) { "Yellow" } else { "Red" })

if ($testsFailed -eq 0) {
    Write-Host "Todos los tests pasaron!" -ForegroundColor Green
} else {
    Write-Host "Algunos tests fallaron. Revisa el backend.`n" -ForegroundColor Yellow
}
