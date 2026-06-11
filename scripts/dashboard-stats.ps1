<#
.SYNOPSIS
    Dashboard de metricas del Second Brain PACE.
.DESCRIPTION
    Muestra estadisticas detalladas de todas las areas PACE.
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

Write-Host "=== Second Brain PACE Dashboard ===" -ForegroundColor Green
Write-Host "Fecha: $Date" -ForegroundColor Gray
Write-Host ""

# Estadisticas PACE
$paceCategories = @(
    @{ Name = "00 Inbox"; Path = "00 Inbox" },
    @{ Name = "01 Proyectos"; Path = "01 Proyectos" },
    @{ Name = "02 Áreas"; Path = "02 Áreas" },
    @{ Name = "03 Conexiones - MOCs"; Path = "03 Conexiones - MOCs" },
    @{ Name = "04 Extracciones AI"; Path = "04 Extracciones AI" },
    @{ Name = "05 Archivo"; Path = "05 Archivo" }
)

$totalFiles = 0
$totalSize = 0
$paceStats = @()
$awsCount = 0

foreach ($cat in $paceCategories) {
    $fullPath = Join-Path $VaultsPath $cat.Path
    if (Test-Path $fullPath) {
        $mdFiles = Get-ChildItem -Path $fullPath -Recurse -Filter "*.md" -File |
            Where-Object { $_.FullName -notmatch '\\\.obsidian\\' }
        
        $fileCount = $mdFiles.Count
        $fileSize = ($mdFiles | Measure-Object -Property Length -Sum).Sum
        $totalFiles += $fileCount
        $totalSize += $fileSize
        
        $subDirs = Get-ChildItem -Path $fullPath -Directory |
            Where-Object { $_.Name -notin @('.obsidian', '.git', 'node_modules') }
        
        $paceStats += [PSCustomObject]@{
            Name = $cat.Name
            Files = $fileCount
            Size = [math]::Round($fileSize / 1KB, 2)
            SubDirs = $subDirs.Count
            LastModified = if ($mdFiles) { ($mdFiles | Sort-Object LastWriteTime -Descending | Select-Object -First 1).LastWriteTime } else { $null }
        }
    }
}

# Count AWS files specifically
$awsPath = Join-Path $VaultsPath "02 Areas\Trabajo\AWS"
if (Test-Path $awsPath) {
    $awsCount = (Get-ChildItem -Path $awsPath -Recurse -Filter "*.md" -File).Count
}
$awsGuidePath = Join-Path $VaultsPath "02 Areas\Trabajo\Guia - Amazon Web Services.md"
if (Test-Path $awsGuidePath) {
    $awsCount++
}

# Count LinkedIn files specifically
$linkedinPath = Join-Path $VaultsPath "05 Personal\LinkedIn Personal Brand"
$linkedinCount = 0
if (Test-Path $linkedinPath) {
    $linkedinCount = (Get-ChildItem -Path $linkedinPath -Recurse -Filter "*.md" -File).Count
}

# Mostrar resumen
Write-Host "RESUMEN PACE" -ForegroundColor Green
Write-Host "=============" -ForegroundColor Green
Write-Host "  Categorias PACE:    $($paceCategories.Count)" -ForegroundColor White
Write-Host "  Archivos .md:       $totalFiles" -ForegroundColor White
Write-Host "  Tamano total:       $([math]::Round($totalSize / 1MB, 2)) MB" -ForegroundColor White
Write-Host "  LinkedIn archivos:  $linkedinCount" -ForegroundColor White
Write-Host "  AWS archivos:       $awsCount" -ForegroundColor White
Write-Host ""

# Mostrar por categoria
Write-Host "DETALLE POR CATEGORIA PACE" -ForegroundColor Green
Write-Host "===========================" -ForegroundColor Green

$maxLength = ($paceStats | ForEach-Object { $_.Name.Length } | Measure-Object -Maximum).Maximum

foreach ($v in ($paceStats | Sort-Object Files -Descending)) {
    $padding = " " * ($maxLength - $v.Name.Length + 2)
    
    Write-Host "  $($v.Name)$padding" -NoNewline -ForegroundColor White
    Write-Host "$($v.Files) archivos" -NoNewline -ForegroundColor Cyan
    Write-Host " ($($v.Size) KB)" -ForegroundColor Gray
    
    if ($Detailed -and $v.SubDirs -gt 0) {
        Write-Host "    Sub-carpetas: $($v.SubDirs)" -ForegroundColor DarkGray
    }
}

Write-Host ""

# Top categorias
Write-Host "TOP 3 CATEGORIAS POR TAMANO" -ForegroundColor Green
Write-Host "=============================" -ForegroundColor Green
$paceStats | Sort-Object Size -Descending | Select-Object -First 3 | ForEach-Object {
    Write-Host "  $($_.Name): $($_.Size) KB" -ForegroundColor Yellow
}

Write-Host ""

# Archivos recientes
Write-Host "ULTIMOS 5 ARCHIVOS MODIFICADOS" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Get-ChildItem -Path $VaultsPath -Recurse -Filter "*.md" -File |
    Where-Object { $_.FullName -notmatch '\\\.obsidian\\' -and $_.FullName -notmatch '\\\.git\\' -and $_.FullName -notmatch '\\99 Sistema\\' } |
    Sort-Object LastWriteTime -Descending |
    Select-Object -First 5 |
    ForEach-Object {
        $relativePath = $_.FullName.Replace("$VaultsPath\", "")
        Write-Host "  $($_.LastWriteTime.ToString('HH:mm')) - $relativePath" -ForegroundColor Gray
    }

Write-Host ""
Write-Host "=== Dashboard Completado ===" -ForegroundColor Green

# Exportar a markdown si se solicita
if ($Export) {
    $exportFile = Join-Path $VaultsPath "99 Sistema\Stats-$Date.md"
    $statsMd = @"
---
title: "Estadisticas PACE - $Date"
tags: [stats, dashboard, pace]
---

# Estadisticas del Second Brain PACE

Fecha: $Date

## Resumen

| Metrica | Valor |
|---------|-------|
| Categorias PACE | $($paceCategories.Count) |
| Archivos .md | $totalFiles |
| Tamano total | $([math]::Round($totalSize / 1MB, 2)) MB |

## Detalle por Categoria

| Categoria | Archivos | Tamano (KB) | Sub-carpetas |
|-----------|----------|-------------|--------------|
$($paceStats | ForEach-Object { "| $($_.Name) | $($_.Files) | $($_.Size) | $($_.SubDirs) |" } | Out-String)

## Top 3 por Tamano

$($paceStats | Sort-Object Size -Descending | Select-Object -First 3 | ForEach-Object { "- **$($_.Name)**: $($_.Size) KB" } | Out-String)
"@
    
    Set-Content -Path $exportFile -Value $statsMd -Encoding UTF8
    Write-Host "Estadisticas exportadas a: $exportFile" -ForegroundColor Green
}
