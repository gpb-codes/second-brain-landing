<#
.SYNOPSIS
    Auto-update script for Second Brain PACE vault.
    Scans PACE structure and regenerates Home stats.

.DESCRIPTION
    This script scans all PACE categories, extracts metadata,
    and updates the Home file with current statistics.

.EXAMPLE
    .\update-index.ps1
    .\update-index.ps1 -SecondBrainPath "D:\vaults\Second-Brain" -Verbose
#>

param(
    [string]$SecondBrainPath = "D:\vaults\Second-Brain",
    [switch]$Verbose
)

# --- Configuration ---
$Date = Get-Date -Format "yyyy-MM-dd HH:mm"
$ExcludeDirs = @('.obsidian', '.git', 'node_modules', '.github', '99 Sistema')

# --- Helper Functions ---
function Get-PACEStats {
    param([string]$BasePath)
    
    $categories = @{}
    
    # Scan each PACE folder
    $paceFolders = @(
        @{ Name = "00 Inbox"; Path = "00 Inbox" },
        @{ Name = "01 Proyectos"; Path = "01 Proyectos" },
        @{ Name = "02 Areas"; Path = "02 Areas" },
        @{ Name = "03 Conexiones - MOCs"; Path = "03 Conexiones - MOCs" },
        @{ Name = "04 Extracciones AI"; Path = "04 Extracciones AI" },
        @{ Name = "05 Archivo"; Path = "05 Archivo" }
    )
    
    foreach ($folder in $paceFolders) {
        $fullPath = Join-Path $BasePath $folder.Path
        if (Test-Path $fullPath) {
            $mdFiles = Get-ChildItem -Path $fullPath -Recurse -Filter "*.md" -File | 
                Where-Object { $_.FullName -notmatch '\\\.obsidian\\' -and $_.FullName -notmatch '\\\.git\\' }
            
            $subDirs = Get-ChildItem -Path $fullPath -Directory | 
                Where-Object { $_.Name -notin $ExcludeDirs } |
                Select-Object -ExpandProperty Name
            
            $categories[$folder.Name] = @{
                FileCount = $mdFiles.Count
                SubDirs = $subDirs
                Files = $mdFiles | Select-Object -First 5 -ExpandProperty Name
            }
        }
    }
    
    # Count LinkedIn files specifically
    $linkedinPath = Join-Path $BasePath "05 Personal\LinkedIn Personal Brand"
    $linkedinCount = 0
    if (Test-Path $linkedinPath) {
        $linkedinCount = (Get-ChildItem -Path $linkedinPath -Recurse -Filter "*.md" -File).Count
    }
    
    # Count AWS files specifically
    $awsPath = Join-Path $BasePath "02 Areas\Trabajo\AWS"
    $awsCount = 0
    if (Test-Path $awsPath) {
        $awsCount = (Get-ChildItem -Path $awsPath -Recurse -Filter "*.md" -File).Count
    }
    # Add AWS guide from Trabajo folder
    $awsGuidePath = Join-Path $BasePath "02 Areas\Trabajo\Guia - Amazon Web Services.md"
    if (Test-Path $awsGuidePath) {
        $awsCount++
    }
    
    # Total files
    $totalFiles = 0
    foreach ($cat in $categories.Values) {
        $totalFiles += $cat.FileCount
    }
    
    return @{
        Categories = $categories
        TotalFiles = $totalFiles
        LinkedInFiles = $linkedinCount
        AWSFiles = $awsCount
    }
}

function Update-HomeFile {
    param(
        [string]$HomePath,
        $Stats
    )
    
    if (-not (Test-Path $HomePath)) {
        Write-Host "Home file not found: $HomePath" -ForegroundColor Yellow
        return
    }
    
    $content = Get-Content $HomePath -Raw -Encoding UTF8
    
    # Update the last updated timestamp
    $content = $content -replace 'updated: \d{4}-\d{2}-\d{2} \d{2}:\d{2}', "updated: $Date"
    
    # Update LinkedIn file count
    $content = $content -replace '(\| \[\[LinkedIn Personal Brand\]\] \| )\d+', "`$1$($Stats.LinkedInFiles)"
    
    # Update AWS file count
    $content = $content -replace '(\| \[\[Guia - Amazon Web Services\|AWS\]\] \| )\d+', "`$1$($Stats.AWSFiles)"
    
    Set-Content -Path $HomePath -Value $content -Encoding UTF8 -NoNewline
    Write-Host "  Home file updated" -ForegroundColor Green
}

function Sync-GitChanges {
    param([string]$RepoPath)
    
    Push-Location $RepoPath
    git add -A | Out-Null
    $changes = git status --porcelain
    
    if (-not $changes) {
        Write-Host ""
        Write-Host "No hay cambios para subir." -ForegroundColor Yellow
        Pop-Location
        return
    }
    
    Write-Host ""
    Write-Host "=== Cambios detectados ===" -ForegroundColor Cyan
    $changes | ForEach-Object { Write-Host "  $_" -ForegroundColor Gray }
    Write-Host ""
    
    $confirm = Read-Host "Subir cambios a GitHub? (s/n)"
    if ($confirm -ne 's' -and $confirm -ne 'S') {
        Write-Host "Cancelado." -ForegroundColor Yellow
        Pop-Location
        return
    }
    
    $msg = Read-Host "Mensaje del commit (Enter para usar uno por defecto)"
    if (-not $msg) {
        $msg = "Update Second Brain PACE - $Date"
    }
    
    Write-Host ""
    Write-Host "Haciendo commit..." -ForegroundColor Cyan
    git commit -m $msg | Out-Null
    
    Write-Host "Subiendo a GitHub..." -ForegroundColor Cyan
    $pullResult = git pull origin main --rebase 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Conflictos detectados, usando force push..." -ForegroundColor Yellow
        git rebase --abort 2>&1 | Out-Null
    }
    
    git push origin main 2>&1 | Out-Null
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Cambios subidos exitosamente!" -ForegroundColor Green
    } else {
        Write-Host "Intentando force push..." -ForegroundColor Yellow
        git push origin main --force 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "Cambios subidos exitosamente!" -ForegroundColor Green
        } else {
            Write-Host "Error al subir cambios." -ForegroundColor Red
        }
    }
    
    Pop-Location
}

# --- Main Execution ---
Write-Host "=== Second Brain PACE Auto-Update ===" -ForegroundColor Green
Write-Host "Scan time: $Date" -ForegroundColor Gray
Write-Host "Vault path: $SecondBrainPath" -ForegroundColor Gray
Write-Host ""

# Collect PACE stats
Write-Host "Escaneando estructura PACE..." -ForegroundColor Cyan
$stats = Get-PACEStats -BasePath $SecondBrainPath

Write-Host ""
Write-Host "=== Estadisticas PACE ===" -ForegroundColor Green
Write-Host "Total archivos .md: $($stats.TotalFiles)" -ForegroundColor White
Write-Host "LinkedIn archivos: $($stats.LinkedInFiles)" -ForegroundColor White
Write-Host "AWS archivos: $($stats.AWSFiles)" -ForegroundColor White

foreach ($cat in $stats.Categories.GetEnumerator()) {
    Write-Host "  $($cat.Key): $($cat.Value.FileCount) archivos" -ForegroundColor Gray
}

# Update Home file
Write-Host ""
Write-Host "Actualizando Home PACE..." -ForegroundColor Cyan
$homePath = Join-Path $SecondBrainPath "03 Conexiones - MOCs"
$homeFile = Get-ChildItem -Path $homePath -Filter "*NDICE GENERAL*" -File | Select-Object -First 1
if ($homeFile) {
    Update-HomeFile -HomePath $homeFile.FullName -Stats $stats
} else {
    Write-Host "Home file not found in $homePath" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Update Complete ===" -ForegroundColor Green

Sync-GitChanges -RepoPath $SecondBrainPath
