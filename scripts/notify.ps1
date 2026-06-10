<#
.SYNOPSIS
    Sistema de notificaciones para Second Brain.
.DESCRIPTION
    Alerta sobre updates pendientes, conflictos y vaults desactualizados.
.EXAMPLE
    .\notify.ps1
    .\notify.ps1 -CheckAll -Sound
#>

param(
    [string]$VaultsPath = "D:\vaults\Second-Brain",
    [switch]$CheckAll,
    [switch]$Sound,
    [switch]$Desktop
)

$Date = Get-Date -Format "yyyy-MM-dd HH:mm"
$alerts = @()

Write-Host "=== Second Brain Notificaciones ===" -ForegroundColor Cyan
Write-Host "Fecha: $Date" -ForegroundColor Gray
Write-Host ""

# 1. Verificar actualizaciones pendientes de Git
Write-Host "Verificando Git..." -ForegroundColor Yellow
Set-Location $VaultsPath
$gitStatus = git status --porcelain 2>&1

if ($gitStatus) {
    $alerts += [PSCustomObject]@{
        Type = "WARNING"
        Message = "Hay cambios sin sincronizar en el repo"
        Detail = "$($gitStatus.Count) archivos modificados"
    }
}

# 2. Verificar si hay pull pendiente
$local = git rev-parse HEAD
$remote = git rev-parse @{u} 2>&1

if ($local -ne $remote -and $LASTEXITCODE -eq 0) {
    $alerts += [PSCustomObject]@{
        Type = "INFO"
        Message = "Hay actualizaciones en GitHub"
        Detail = "Ejecuta git pull para sincronizar"
    }
}

# 3. Verificar vaults desactualizados
Write-Host "Verificando vaults..." -ForegroundColor Yellow
$vaultDirs = Get-ChildItem -Path "$VaultsPath\Vaults" -Directory -ErrorAction SilentlyContinue

foreach ($vault in $vaultDirs) {
    $lastMod = Get-ChildItem -Path $vault.FullName -Recurse -Filter "*.md" -File |
        Where-Object { $_.FullName -notmatch '\\\.obsidian\\' } |
        Sort-Object LastWriteTime -Descending |
        Select-Object -First 1
    
    if ($lastMod) {
        $daysSince = ((Get-Date) - $lastMod.LastWriteTime).Days
        if ($daysSince -gt 30) {
            $alerts += [PSCustomObject]@{
                Type = "WARNING"
                Message = "Vault desactualizado: $($vault.Name)"
                Detail = "Ultima modificacion hace $daysSince dias"
            }
        }
    }
}

# 4. Verificar espacio en disco
$drive = Get-PSDrive -Name D -ErrorAction SilentlyContinue
if ($drive) {
    $freeGB = [math]::Round($drive.Free / 1GB, 2)
    if ($freeGB -lt 5) {
        $alerts += [PSCustomObject]@{
            Type = "ERROR"
            Message = "Poco espacio en disco"
            Detail = "Solo quedan $freeGB GB libres"
        }
    }
}

# 5. Verificar estructura de carpetas
$requiredDirs = @("00-Master-Dashboard", "01-Vaults-Index", "Vaults", "scripts")
foreach ($dir in $requiredDirs) {
    if (-not (Test-Path (Join-Path $VaultsPath $dir))) {
        $alerts += [PSCustomObject]@{
            Type = "ERROR"
            Message = "Carpeta faltante: $dir"
            Detail = "Ejecuta update-index.ps1 para recrearla"
        }
    }
}

# Mostrar resultados
if ($alerts.Count -eq 0) {
    Write-Host ""
    Write-Host "Todo esta en orden. No hay alertas." -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "ALERTAS ENCONTRADAS: $($alerts.Count)" -ForegroundColor Red
    Write-Host ""
    
    foreach ($alert in $alerts) {
        switch ($alert.Type) {
            "ERROR" { $color = "Red" }
            "WARNING" { $color = "Yellow" }
            "INFO" { $color = "Cyan" }
        }
        
        Write-Host "  [$($alert.Type)] $($alert.Message)" -ForegroundColor $color
        Write-Host "    $($alert.Detail)" -ForegroundColor Gray
        Write-Host ""
    }
    
    # Notificacion de escritorio
    if ($Desktop) {
        Add-Type -AssemblyName System.Windows.Forms
        $notify = New-Object System.Windows.Forms.NotifyIcon
        $notify.Icon = [System.Drawing.SystemIcons]::Warning
        $notify.Visible = $true
        $notify.ShowBalloonTip(5000, "Second Brain", "$($alerts.Count) alertas encontradas", [System.Windows.Forms.ToolTipIcon]::Warning)
    }
    
    # Sonido
    if ($Sound) {
        [console]::beep(800, 200)
        [console]::beep(600, 200)
    }
}

Write-Host "=== Verificacion Completada ===" -ForegroundColor Green
