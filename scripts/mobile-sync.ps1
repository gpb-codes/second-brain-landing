<#
.SYNOPSIS
    Configuracion de mobile sync para Second Brain.
.DESCRIPTION
    Configura sincronizacion con moviles via Obsidian Sync o Git.
.EXAMPLE
    .\mobile-sync.ps1 -Method obsidian-sync
    .\mobile-sync.ps1 -Method git -Remote origin
#>

param(
    [ValidateSet("obsidian-sync", "git", "syncthing")]
    [string]$Method = "git",
    [string]$VaultsPath = "D:\vaults\Second-Brain",
    [string]$Remote = "origin"
)

Write-Host "=== Mobile Sync Setup ===" -ForegroundColor Cyan
Write-Host "Metodo: $Method" -ForegroundColor Gray
Write-Host ""

switch ($Method) {
    "obsidian-sync" {
        Write-Host "Configurando Obsidian Sync..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Pasos:" -ForegroundColor White
        Write-Host "  1. Abrir Obsidian en el movil" -ForegroundColor Gray
        Write-Host "  2. Ir a Settings > Sync" -ForegroundColor Gray
        Write-Host "  3. Activar Obsidian Sync" -ForegroundColor Gray
        Write-Host "  4. Iniciar sesion con tu cuenta" -ForegroundColor Gray
        Write-Host "  5. Seleccionar vault: Second-Brain" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Nota: Obsidian Sync es de pago ($4/mes)" -ForegroundColor Yellow
        Write-Host "Alternativa gratis: usar el metodo git" -ForegroundColor Cyan
    }
    
    "git" {
        Write-Host "Configurando Git Sync para movil..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "App recomendada: Working Copy (iOS) o MGit (Android)" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Pasos:" -ForegroundColor White
        Write-Host "  1. Instalar Working Copy (iOS) o Mgit (Android)" -ForegroundColor Gray
        Write-Host "  2. Clonar repo: https://github.com/gpb-codes/second-brain.git" -ForegroundColor Gray
        Write-Host "  3. Configurar credenciales GitHub" -ForegroundColor Gray
        Write-Host "  4. Abrir carpeta Second-Brain en Obsidian movil" -ForegroundColor Gray
        Write-Host ""
        
        # Crear script de sync movil
        $mobileSyncScript = @"
# Sync movil - ejecutar desde el PC
# Hace push de cambios para que el movil los descargue

`$Date = Get-Date -Format "yyyy-MM-dd HH:mm"
Write-Host "Sync movil: `$Date" -ForegroundColor Cyan

Set-Location "$VaultsPath"
git add -A
`$changes = git status --porcelain

if (`$changes) {
    git commit -m "sync: mobile update `$Date"
    git push $Remote main
    Write-Host "Cambios subidos para movil" -ForegroundColor Green
} else {
    Write-Host "No hay cambios pendientes" -ForegroundColor Yellow
}
"@
        
        Set-Content -Path (Join-Path $VaultsPath "scripts\mobile-push.ps1") -Value $mobileSyncScript -Encoding UTF8
        Write-Host "Script creado: scripts\mobile-push.ps1" -ForegroundColor Green
        Write-Host "Ejecuta este script despues de hacer cambios en el PC" -ForegroundColor Gray
    }
    
    "syncthing" {
        Write-Host "Configurando Syncthing..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Syncthing es una alternativa gratuita y open source" -ForegroundColor Cyan
        Write-Host ""
        Write-Host "Pasos:" -ForegroundColor White
        Write-Host "  1. Instalar Syncthing en PC: https://syncthing.net" -ForegroundColor Gray
        Write-Host "  2. Instalar Syncthing en movil (F-Droid o Play Store)" -ForegroundColor Gray
        Write-Host "  3. Abrir Syncthing en PC > Copiar ID" -ForegroundColor Gray
        Write-Host "  4. En movil: Add Device > Pegar ID" -ForegroundColor Gray
        Write-Host "  5. En PC: Share folder > Seleccionar Second-Brain" -ForegroundColor Gray
        Write-Host "  6. En movil: Accept folder" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Ventajas:" -ForegroundColor Green
        Write-Host "  - Gratuito y open source" -ForegroundColor Gray
        Write-Host "  - Sin limites de tamano" -ForegroundColor Gray
        Write-Host "  - Sync peer-to-peer (sin nube)" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== Configuracion Completada ===" -ForegroundColor Green
