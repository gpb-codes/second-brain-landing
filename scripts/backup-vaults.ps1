<#
.SYNOPSIS
    Sistema de backups automaticos para Second Brain.
.DESCRIPTION
    Crea backups de todos los vaults antes de cada sincronizacion.
    Soporta backup local y a nube (OneDrive, Google Drive, USB).
.EXAMPLE
    .\backup-vaults.ps1
    .\backup-vaults.ps1 -Destination "E:\Backups" -Compress
#>

param(
    [string]$VaultsPath = "D:\vaults",
    [string]$BackupRoot = "D:\Backups\Second-Brain",
    [switch]$Compress,
    [switch]$CloudSync,
    [int]$KeepDays = 30
)

$Date = Get-Date -Format "yyyy-MM-dd_HHmm"
$BackupPath = Join-Path $BackupRoot "backup_$Date"

Write-Host "=== Second Brain Backup ===" -ForegroundColor Cyan
Write-Host "Fecha: $Date" -ForegroundColor Gray
Write-Host "Origen: $VaultsPath" -ForegroundColor Gray
Write-Host "Destino: $BackupPath" -ForegroundColor Gray
Write-Host ""

# Crear carpeta de backup
if (-not (Test-Path $BackupPath)) {
    New-Item -ItemType Directory -Path $BackupPath -Force | Out-Null
}

# Obtener todos los vaults
$vaultDirs = Get-ChildItem -Path $VaultsPath -Directory | 
    Where-Object { $_.Name -ne "Second-Brain" -and $_.Name -notmatch '^\.' }

$totalFiles = 0
$totalSize = 0

foreach ($vault in $vaultDirs) {
    Write-Host "  Copiando: $($vault.Name)" -ForegroundColor White
    
    $destVault = Join-Path $BackupPath $vault.Name
    Copy-Item -Path $vault.FullName -Destination $destVault -Recurse -Force -Exclude '.obsidian', '.git', 'node_modules'
    
    $files = Get-ChildItem -Path $destVault -Recurse -File
    $totalFiles += $files.Count
    $totalSize += ($files | Measure-Object -Property Length -Sum).Sum
}

Write-Host ""
Write-Host "Backup completado:" -ForegroundColor Green
Write-Host "  Vaults: $($vaultDirs.Count)" -ForegroundColor White
Write-Host "  Archivos: $totalFiles" -ForegroundColor White
Write-Host "  Tamano: $([math]::Round($totalSize/1MB, 2)) MB" -ForegroundColor White

# Comprimir si se solicita
if ($Compress) {
    $zipPath = "$BackupPath.zip"
    Write-Host ""
    Write-Host "Comprimiendo..." -ForegroundColor Cyan
    Compress-Archive -Path $BackupPath -DestinationPath $zipPath -Force
    Remove-Item -Path $BackupPath -Recurse -Force
    Write-Host "  Guardado: $zipPath" -ForegroundColor Green
}

# Limpiar backups antiguos
Write-Host ""
Write-Host "Limpiando backups antiguos (>$KeepDays dias)..." -ForegroundColor Cyan
$oldBackups = Get-ChildItem -Path $BackupRoot -Directory | 
    Where-Object { $_.CreationTime -lt (Get-Date).AddDays(-$KeepDays) }

foreach ($old in $oldBackups) {
    Remove-Item -Path $old.FullName -Recurse -Force
    Write-Host "  Eliminado: $($old.Name)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Backup Finalizado ===" -ForegroundColor Green
