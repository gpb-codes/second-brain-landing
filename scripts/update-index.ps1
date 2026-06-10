<#
.SYNOPSIS
    Auto-update script for Second Brain vault.
    Scans D:\vaults and regenerates index files.

.DESCRIPTION
    This script scans all vaults in D:\vaults, extracts metadata,
    and updates the Second Brain index files automatically.

.EXAMPLE
    .\update-index.ps1
    .\update-index.ps1 -VaultsPath "D:\vaults" -Verbose
#>

param(
    [string]$VaultsPath = "D:\vaults",
    [string]$SecondBrainPath = "D:\vaults\Second-Brain",
    [switch]$Verbose
)

# --- Configuration ---
$Date = Get-Date -Format "yyyy-MM-dd HH:mm"
$ExcludeDirs = @('.obsidian', '.git', 'node_modules', '.github')

# --- Helper Functions ---
function Get-VaultInfo {
    param([string]$VaultPath)
    
    $name = Split-Path $VaultPath -Leaf
    $mdFiles = Get-ChildItem -Path $VaultPath -Recurse -Filter "*.md" -File | 
        Where-Object { $_.FullName -notmatch '\\\.obsidian\\' -and $_.FullName -notmatch '\\\.git\\' }
    
    $categories = Get-ChildItem -Path $VaultPath -Directory | 
        Where-Object { $_.Name -notin $ExcludeDirs } |
        Select-Object -ExpandProperty Name
    
    $tags = @()
    foreach ($file in $mdFiles) {
        $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
        if ($content -match 'tags:\s*\[(.+)\]') {
            $tagMatches = [regex]::Matches($matches[1], '([^,\s]+)')
            foreach ($m in $tagMatches) { $tags += $m.Value }
        }
    }
    $uniqueTags = $tags | Sort-Object -Unique
    
    return @{
        Name = $name
        Path = $VaultPath
        FileCount = $mdFiles.Count
        Categories = $categories
        Tags = $uniqueTags
        Files = $mdFiles | Select-Object -First 10 -ExpandProperty FullName
    }
}

function Sync-VaultsToGitHub {
    param(
        [string]$SourcePath,
        [string]$DestPath
    )
    
    $vaultsFolder = Join-Path $DestPath "Vaults"
    if (-not (Test-Path $vaultsFolder)) {
        New-Item -ItemType Directory -Path $vaultsFolder -Force | Out-Null
    }
    
    $vaultDirs = Get-ChildItem -Path $SourcePath -Directory | 
        Where-Object { $_.Name -ne "Second-Brain" -and $_.Name -notmatch '^\.' }
    
    Write-Host "Sincronizando vaults a GitHub..." -ForegroundColor Cyan
    
    foreach ($vault in $vaultDirs) {
        $destVault = Join-Path $vaultsFolder $vault.Name
        Write-Host "  - $($vault.Name)" -ForegroundColor White
        
        if (Test-Path $destVault) {
            Remove-Item -Path $destVault -Recurse -Force
        }
        
        New-Item -ItemType Directory -Path $destVault -Force | Out-Null
        
        $items = Get-ChildItem -Path $vault.FullName -Exclude '.obsidian', '.git', 'node_modules', '.github'
        foreach ($item in $items) {
            $destItem = Join-Path $destVault $item.Name
            if ($item.PSIsContainer) {
                Copy-Item -Path $item.FullName -Destination $destItem -Recurse -Force -Exclude '.obsidian', '.git', 'node_modules'
            } else {
                Copy-Item -Path $item.FullName -Destination $destItem -Force
            }
        }
    }
    
    Write-Host "Vaults sincronizados en Vaults/" -ForegroundColor Green
}

function Generate-Dashboard {
    param($VaultInfos)
    
    $vaultCount = $VaultInfos.Count
    $totalFiles = 0
    foreach ($v in $VaultInfos) { $totalFiles += $v.FileCount }
    
    $dashboard = @"
---
title: "Second Brain - Dashboard Maestro"
aliases: [dashboard, master, hub, inicio]
tags: [second-brain, dashboard, master]
created: 2026-06-09
updated: $Date
---

# Second Brain - Hub Maestro

> [!info] Centro de control universal
> Este vault conecta y indexa todos tus vaults de Obsidian. Se actualiza automaticamente cuando se crea un vault nuevo.

---

## Estado del Sistema

| Metrica | Valor |
|---------|-------|
| Vaults totales | **$vaultCount** |
| Total archivos .md | **$totalFiles** |
| Ultimo scan | $Date |
| Auto-update | Activo |
| GitHub | gpb-codes/Second-Brain |

---

## Vaults Indexados

"@

    foreach ($vault in $VaultInfos) {
        $catList = ($vault.Categories -join ", ")
        $tagList = ($vault.Tags | Select-Object -First 5 | ForEach-Object { "`$_" }) -join ", "
        
        $dashboard += @"

### $($vault.Name)
> [!tip] $($vault.Categories[0])
> Vault con $($vault.FileCount) archivos en $(($vault.Categories).Count) categorias.

| Metrica | Valor |
|---------|-------|
| Archivos | $($vault.FileCount) |
| Carpetas | $(($vault.Categories).Count) |
| Tags | $tagList |

**Ruta:** ``$($vault.Path)``

"@
    }

    $dashboard += @"

---

## Navegacion Rapida

### Por Tema

``````mermaid
mindmap
  root((Second Brain))
"@

    foreach ($vault in $VaultInfos) {
        $dashboard += @"
    $($vault.Name)
"@
        foreach ($cat in $vault.Categories | Select-Object -First 3) {
            $dashboard += @"
      $cat
"@
        }
    }

    $dashboard += @"
``````

---

## Auto-Update

> [!info] Script de sincronizacion
> El script ``scripts/update-index.ps1`` escanea ``D:\vaults`` y actualiza este dashboard automaticamente.

``````powershell
# Ejecutar manualmente
.\scripts\update-index.ps1
``````

---

## Ultima Actualizacion

> [!warning] Auto-sync
> Este archivo se regenera automaticamente el $Date

---

## Referencias

- [[Index]] - Indice detallado de cada vault
- [[Cross-Links]] - Conexiones entre vaults
- [[Meta-Analysis]] - Analisis cruzado
- [[Glossary-Universal]] - Glosario unificado
"@

    return $dashboard
}

function Generate-Index {
    param($VaultInfos)
    
    $index = @"
---
title: "Indice Universal de Vaults"
aliases: [index, indice, vaults]
tags: [second-brain, index, vaults]
created: 2026-06-09
updated: $Date
---

# Indice Universal de Vaults

> [!info] Catalogo completo
> Indice detallado de todos los vaults, sus archivos y contenido.

---

"@

    foreach ($vault in $VaultInfos) {
        $index += "## $($vault.Name)`n`n"
        $index += "**Ruta:** ``$($vault.Path)```n`n"
        
        $index += "| Carpeta | Archivos |`n|---------|----------|`n"
        foreach ($cat in $vault.Categories) {
            $catPath = Join-Path $vault.Path $cat
            $catFiles = (Get-ChildItem -Path $catPath -Filter "*.md" -File -ErrorAction SilentlyContinue).Count
            $index += "| ``$cat/`` | $catFiles archivos |`n"
        }
        $index += "`n---`n`n"
    }
    
    $index += @"

## Estadisticas Globales

| Vault | Archivos MD | Categorias | Tags |
|-------|-------------|------------|------|
"@

    foreach ($vault in $VaultInfos) {
        $index += "| $($vault.Name) | $($vault.FileCount) | $(($vault.Categories).Count) | $(($vault.Tags).Count) |`n"
    }
    
    $totalFiles = 0
    foreach ($v in $VaultInfos) { $totalFiles += $v.FileCount }
    $index += "| **Total** | **$totalFiles** | | |`n"
    
    $index += @"

---

## Referencias

- [[Dashboard]] - Panel principal
- [[Cross-Links]] - Conexiones entre vaults
- [[Meta-Analysis]] - Analisis cruzado
"@

    return $index
}

function Update-Readme {
    param(
        [string]$ReadmePath,
        $VaultInfos
    )
    
    if (-not (Test-Path $ReadmePath)) {
        Write-Host "README.md not found, skipping..." -ForegroundColor Yellow
        return
    }
    
    $content = Get-Content $ReadmePath -Raw -Encoding UTF8
    
    $tableRegex = '(## Vaults Conectados\s*\n\s*\| Vault \| Tema \| Archivos \|\s*\n\s*\|-------\|------\|----------\|\s*\n)(.*?)(\n\s*\n)'
    $match = [regex]::Match($content, $tableRegex, [System.Text.RegularExpressions.RegexOptions]::Singleline)
    
    if (-not $match.Success) {
        Write-Host "README table format not recognized, skipping..." -ForegroundColor Yellow
        return
    }
    
    $existingRows = $match.Groups[2].Value
    $existingVaults = @{}
    foreach ($line in $existingRows.Split("`n")) {
        if ($line -match '\|\s*(.+?)\s*\|\s*(.+?)\s*\|\s*(\d+|~\d+|\d+\+)\s*\|') {
            $existingVaults[$matches[1].Trim()] = @{
                Tema = $matches[2].Trim()
                Archivos = $matches[3].Trim()
            }
        }
    }
    
    $newRows = ""
    foreach ($vault in $VaultInfos) {
        if ($existingVaults.ContainsKey($vault.Name)) {
            $tema = $existingVaults[$vault.Name].Tema
            $newRows += "| $($vault.Name) | $tema | $($vault.FileCount) |`n"
        } else {
            $categories = ($vault.Categories | Select-Object -First 2) -join ", "
            if (-not $categories) { $categories = "General" }
            $newRows += "| $($vault.Name) | $categories | $($vault.FileCount) |`n"
            Write-Host "  NEW vault added to README: $($vault.Name)" -ForegroundColor Green
        }
    }
    
    $newTable = "$($match.Groups[1].Value)$newRows$($match.Groups[3].Value)"
    $newContent = $content.Substring(0, $match.Index) + $newTable + $content.Substring($match.Index + $match.Length)
    
    Set-Content -Path $ReadmePath -Value $newContent -Encoding UTF8 -NoNewline
    Write-Host "README.md updated" -ForegroundColor Green
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
        $msg = "Update Second Brain - $Date"
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
Write-Host "=== Second Brain Auto-Update ===" -ForegroundColor Cyan
Write-Host "Scan time: $Date" -ForegroundColor Gray
Write-Host "Vaults path: $VaultsPath" -ForegroundColor Gray
Write-Host ""

# Get all vaults (exclude Second-Brain itself)
$vaultDirs = Get-ChildItem -Path $VaultsPath -Directory | 
    Where-Object { $_.Name -ne "Second-Brain" -and $_.Name -notmatch '^\.' }

if ($vaultDirs.Count -eq 0) {
    Write-Host "No vaults found in $VaultsPath" -ForegroundColor Yellow
    exit 1
}

Write-Host "Found $($vaultDirs.Count) vault(s):" -ForegroundColor Green

# Collect vault info
$vaultInfos = @()
foreach ($vault in $vaultDirs) {
    Write-Host "  - $($vault.Name)" -ForegroundColor White
    $info = Get-VaultInfo -VaultPath $vault.FullName
    $vaultInfos += $info
    
    if ($Verbose) {
        Write-Host "    Files: $($info.FileCount), Categories: $($info.Categories.Count), Tags: $($info.Tags.Count)" -ForegroundColor Gray
    }
}

# Sync vaults to Second-Brain folder
Write-Host ""
Sync-VaultsToGitHub -SourcePath $VaultsPath -DestPath $SecondBrainPath

# Generate files
Write-Host ""
Write-Host "Generating Dashboard..." -ForegroundColor Cyan
$dashboard = Generate-Dashboard -VaultInfos $vaultInfos
$dashboardPath = Join-Path $SecondBrainPath "00-Master-Dashboard\Dashboard.md"
Set-Content -Path $dashboardPath -Value $dashboard -Encoding UTF8
Write-Host "  -> $dashboardPath" -ForegroundColor Gray

Write-Host "Generating Index..." -ForegroundColor Cyan
$index = Generate-Index -VaultInfos $vaultInfos
$indexPath = Join-Path $SecondBrainPath "01-Vaults-Index\Index.md"
Set-Content -Path $indexPath -Value $index -Encoding UTF8
Write-Host "  -> $indexPath" -ForegroundColor Gray

Write-Host ""
Write-Host "Updating README..." -ForegroundColor Cyan
$readmePath = Join-Path $SecondBrainPath "README.md"
Update-Readme -ReadmePath $readmePath -VaultInfos $vaultInfos

Write-Host ""
Write-Host "=== Update Complete ===" -ForegroundColor Green
Write-Host "Vaults indexed: $($vaultInfos.Count)" -ForegroundColor White
$totalFiles = 0
foreach ($v in $vaultInfos) { $totalFiles += $v.FileCount }
Write-Host "Total files: $totalFiles" -ForegroundColor White

Sync-GitChanges -RepoPath $SecondBrainPath
