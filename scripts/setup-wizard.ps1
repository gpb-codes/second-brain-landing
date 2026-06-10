<#
.SYNOPSIS
    Wizard de instalacion interactiva para Second Brain.
.DESCRIPTION
    Guia al usuario paso a paso para configurar su Second Brain.
.EXAMPLE
    .\setup-wizard.ps1
#>

param(
    [string]$DefaultVaultsPath = "D:\vaults",
    [switch]$SkipGit
)

function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ====================================" -ForegroundColor Magenta
    Write-Host "     SECOND BRAIN - SETUP WIZARD" -ForegroundColor Magenta
    Write-Host "  ====================================" -ForegroundColor Magenta
    Write-Host ""
}

function Show-Step {
    param([int]$Step, [int]$Total, [string]$Title)
    Write-Host ""
    Write-Host "  Paso ${Step}/${Total}: $Title" -ForegroundColor Cyan
    Write-Host "  -----------------------------------" -ForegroundColor DarkGray
}

# Header
Show-Header
Write-Host "  Bienvenido al asistente de configuracion." -ForegroundColor White
Write-Host "  Este wizard te guiará para configurar tu Second Brain." -ForegroundColor Gray
Write-Host ""
Write-Host "  Presiona Enter para continuar..." -ForegroundColor DarkGray
Read-Host

$totalSteps = 6

# Paso 1: Verificar prerequisitos
Show-Step -Step 1 -Total $totalSteps -Title "Verificar Prerequisitos"

$prereqs = @(
    @{ Name = "Git"; Command = "git"; Installed = $false },
    @{ Name = "PowerShell 5.1+"; Command = "pwsh"; Installed = $false },
    @{ Name = "Obsidian"; Command = "obsidian"; Installed = $false }
)

foreach ($prereq in $prereqs) {
    $installed = Get-Command $prereq.Command -ErrorAction SilentlyContinue
    if ($installed) {
        Write-Host "  [OK] $($prereq.Name)" -ForegroundColor Green
        $prereq.Installed = $true
    } else {
        Write-Host "  [--] $($prereq.Name) (no detectado)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "  Presiona Enter para continuar..." -ForegroundColor DarkGray
Read-Host

# Paso 2: Seleccionar ubicacion
Show-Step -Step 2 -Total $totalSteps -Title "Ubicacion del Vault"

Write-Host "  Ubicacion actual: $DefaultVaultsPath" -ForegroundColor Gray
Write-Host ""
Write-Host "  [1] Usar ubicacion por defecto ($DefaultVaultsPath)" -ForegroundColor White
Write-Host "  [2] Especificar otra ubicacion" -ForegroundColor White
Write-Host ""

$locationChoice = Read-Host "  Selecciona (1-2)"

if ($locationChoice -eq "2") {
    $customPath = Read-Host "  Ingresa la ruta completa"
    if (Test-Path $customPath) {
        $DefaultVaultsPath = $customPath
        Write-Host "  Ubicacion actualizada: $DefaultVaultPath" -ForegroundColor Green
    } else {
        Write-Host "  Ruta no valida, usando defecto" -ForegroundColor Yellow
    }
}

# Paso 3: Clonar repositorio
Show-Step -Step 3 -Total $totalSteps -Title "Clonar Second Brain"

$secondBrainPath = Join-Path $DefaultVaultsPath "Second-Brain"

if (Test-Path $secondBrainPath) {
    Write-Host "  Second Brain ya existe en: $secondBrainPath" -ForegroundColor Yellow
} else {
    Write-Host "  Clonando repositorio..." -ForegroundColor Cyan
    git clone https://github.com/gpb-codes/second-brain.git $secondBrainPath 2>&1
    Write-Host "  Repositorio clonado" -ForegroundColor Green
}

Write-Host ""
Write-Host "  Presiona Enter para continuar..." -ForegroundColor DarkGray
Read-Host

# Paso 4: Configurar vaults
Show-Step -Step 4 -Total $totalSteps -Title "Configurar Vaults"

Write-Host "  Los vaults se encuentran en: $DefaultVaultsPath" -ForegroundColor Gray
Write-Host ""

$vaultDirs = Get-ChildItem -Path $DefaultVaultsPath -Directory -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -ne "Second-Brain" -and $_.Name -notmatch '^\.' }

if ($vaultDirs.Count -gt 0) {
    Write-Host "  Vaults detectados:" -ForegroundColor White
    foreach ($vault in $vaultDirs) {
        Write-Host "    - $($vault.Name)" -ForegroundColor Green
    }
} else {
    Write-Host "  No se encontraron vaults adicionales" -ForegroundColor Yellow
    Write-Host "  Puedes crear uno con: .\scripts\create-vault.ps1 -Name 'MiVault'" -ForegroundColor Gray
}

Write-Host ""
Write-Host "  Presiona Enter para continuar..." -ForegroundColor DarkGray
Read-Host

# Paso 5: Ejecutar update inicial
Show-Step -Step 5 -Total $totalSteps -Title "Update Inicial"

$updateScript = Join-Path $secondBrainPath "scripts\update-index.ps1"
if (Test-Path $updateScript) {
    Write-Host "  Ejecutando update-index.ps1..." -ForegroundColor Cyan
    & $updateScript
    Write-Host "  Index actualizado" -ForegroundColor Green
} else {
    Write-Host "  Script update-index.ps1 no encontrado" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "  Presiona Enter para continuar..." -ForegroundColor DarkGray
Read-Host

# Paso 6: Resumen
Show-Step -Step 6 -Total $totalSteps -Title "Completado"

Write-Host ""
Write-Host "  ====================================" -ForegroundColor Green
Write-Host "     SETUP COMPLETADO!" -ForegroundColor Green
Write-Host "  ====================================" -ForegroundColor Green
Write-Host ""
Write-Host "  Tu Second Brain esta listo:" -ForegroundColor White
Write-Host "    Ubicacion: $secondBrainPath" -ForegroundColor Gray
Write-Host ""
Write-Host "  Proximos pasos:" -ForegroundColor White
Write-Host "    1. Abrir Obsidian > File > Open Vault" -ForegroundColor Gray
Write-Host "    2. Seleccionar: $secondBrainPath" -ForegroundColor Gray
Write-Host "    3. Instalar plugins recomendados" -ForegroundColor Gray
Write-Host "    4. Ejecutar .\scripts\notify.ps1 para verificar" -ForegroundColor Gray
Write-Host ""
Write-Host "  Comandos utiles:" -ForegroundColor White
Write-Host "    .\scripts\update-index.ps1     # Actualizar vault" -ForegroundColor Gray
Write-Host "    .\scripts\search-vaults.ps1 -Query 'termino'" -ForegroundColor Gray
Write-Host "    .\scripts\dashboard-stats.ps1  # Ver estadisticas" -ForegroundColor Gray
Write-Host "    .\scripts\backup-vaults.ps1    # Crear backup" -ForegroundColor Gray
Write-Host ""
