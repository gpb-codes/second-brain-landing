<#
.SYNOPSIS
    Dashboard de metricas del Second Brain.
.DESCRIPTION
    Muestra estadisticas detalladas de todos los vaults.
.EXAMPLE
    .\dashboard-stats.ps1
    .\dashboard-stats.ps1 -Detailed
#>

param(
    [string]$VaultsPath = "D:\vaults\Second-Brain",
    [switch]$Detailed,
    [switch]$Export
)

$Date = Get-Date -Format "yyyy-MM-dd HH:mm"

Write-Host "=== Second Brain Dashboard ===" -ForegroundColor Cyan
Write-Host "Fecha: $Date" -ForegroundColor Gray
Write-Host ""

# Estadisticas generales
$vaultDirs = Get-ChildItem -Path "$VaultsPath\Vaults" -Directory -ErrorAction SilentlyContinue
$totalFiles = 0
$totalSize = 0
$vaultStats = @()

foreach ($vault in $vaultDirs) {
    $mdFiles = Get-ChildItem -Path $vault.FullName -Recurse -Filter "*.md" -File |
        Where-Object { $_.FullName -notmatch '\\\.obsidian\\' }
    
    $fileCount = $mdFiles.Count
    $fileSize = ($mdFiles | Measure-Object -Property Length -Sum).Sum
    $totalFiles += $fileCount
    $totalSize += $fileSize
    
    $categories = Get-ChildItem -Path $vault.FullName -Directory |
        Where-Object { $_.Name -notin @('.obsidian', '.git', 'node_modules') }
    
    $vaultStats += [PSCustomObject]@{
        Name = $vault.Name
        Files = $fileCount
        Size = [math]::Round($fileSize / 1KB, 2)
        Categories = $categories.Count
        LastModified = ($mdFiles | Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime
    }
}

# Mostrar resumen
Write-Host "RESUMEN GENERAL" -ForegroundColor Magenta
Write-Host "================" -ForegroundColor Magenta
Write-Host "  Vaults totales:      $($vaultDirs.Count)" -ForegroundColor White
Write-Host "  Archivos .md:        $totalFiles" -ForegroundColor White
Write-Host "  Tamano total:        $([math]::Round($totalSize / 1MB, 2)) MB" -ForegroundColor White
Write-Host ""

# Mostrar por vault
Write-Host "DETALLE POR VAULT" -ForegroundColor Magenta
Write-Host "==================" -ForegroundColor Magenta

$maxLength = ($vaultStats | ForEach-Object { $_.Name.Length } | Measure-Object -Maximum).Maximum

foreach ($v in ($vaultStats | Sort-Object Files -Descending)) {
    $bar = "#" * [math]::Min($v.Files, 50)
    $padding = " " * ($maxLength - $v.Name.Length + 2)
    
    Write-Host "  $($v.Name)$padding" -NoNewline -ForegroundColor White
    Write-Host "$($v.Files) archivos" -NoNewline -ForegroundColor Cyan
    Write-Host " ($($v.Size) KB)" -ForegroundColor Gray
    
    if ($Detailed) {
        Write-Host "    Categorias: $($v.Categories) | Ultima modificacion: $($v.LastModified)" -ForegroundColor DarkGray
    }
}

Write-Host ""

# Top vaults
Write-Host "TOP 3 VAULTS POR TAMANO" -ForegroundColor Magenta
Write-Host "========================" -ForegroundColor Magenta
$vaultStats | Sort-Object Size -Descending | Select-Object -First 3 | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Size) KB" -ForegroundColor Yellow
}

Write-Host ""

# Archivos recientes
Write-Host "ULTIMOS 5 ARCHIVOS MODIFICADOS" -ForegroundColor Magenta
Write-Host "================================" -ForegroundColor Magenta
Get-ChildItem -Path "$VaultsPath\Vaults" -Recurse -Filter "*.md" -File |
    Where-Object { $_.FullName -notmatch '\\\.obsidian\\' } |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 5 |
    ForEach-Object {
        $relativePath = $_.FullName.Replace("$VaultsPath\Vaults\", "")
        Write-Host "  $($_.LastWriteTime.ToString('HH:mm')) - $relativePath" -ForegroundColor Gray
    }

Write-Host ""
Write-Host "=== Dashboard Completado ===" -ForegroundColor Green

# Exportar a markdown si se solicita
if ($Export) {
    $exportFile = Join-Path $VaultsPath "00-Master-Dashboard\Stats-$Date.md"
    $statsMd = @"
---
title: "Estadisticas - $Date"
tags: [stats, dashboard]
---

# Estadisticas del Second Brain

Fecha: $Date

## Resumen

| Metrica | Valor |
|---------|-------|
| Vaults totales | $($vaultDirs.Count) |
| Archivos .md | $totalFiles |
| Tamano total | $([math]::Round($totalSize / 1MB, 2)) MB |

## Detalle por Vault

| Vault | Archivos | Tamano (KB) | Categorias |
|-------|----------|-------------|------------|
$($vaultStats | ForEach-Object { "| $($_.Name) | $($_.Files) | $($_.Size) | $($_.Categories) |" } | Out-String)

## Top 3 por Tamano

$($vaultStats | Sort-Object Size -Descending | Select-Object -First 3 | ForEach-Object { "- **$($_.Name)**: $($_.Size) KB" } | Out-String)
"@
    
    Set-Content -Path $exportFile -Value $statsMd -Encoding UTF8
    Write-Host "Estadisticas exportadas a: $exportFile" -ForegroundColor Green
}
