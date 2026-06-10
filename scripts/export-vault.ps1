<#
.SYNOPSIS
    Exporta vaults a PDF o HTML.
.DESCRIPTION
    Convierte archivos markdown a PDF o HTML para compartir.
.EXAMPLE
    .\export-vault.ps1 -Vault "Acceso-Remoto-PC" -Format HTML
    .\export-vault.ps1 -Vault "LinkedIn Personal Brand" -Format PDF
    .\export-vault.ps1 -All -Format HTML
#>

param(
    [string]$Vault,
    [string]$VaultsPath = "D:\vaults\Second-Brain\Vaults",
    [string]$ExportPath = "D:\Exports\Second-Brain",
    [ValidateSet("HTML", "PDF")]
    [string]$Format = "HTML",
    [switch]$All,
    [switch]$Open
)

$Date = Get-Date -Format "yyyy-MM-dd"

Write-Host "=== Exportador Second Brain ===" -ForegroundColor Cyan
Write-Host "Formato: $Format" -ForegroundColor Gray
Write-Host ""

if (-not (Test-Path $ExportPath)) {
    New-Item -ItemType Directory -Path $ExportPath -Force | Out-Null
}

function Export-VaultToHTML {
    param([string]$VaultDir, [string]$OutputDir)
    
    $vaultName = Split-Path $VaultDir -Leaf
    $htmlDir = Join-Path $OutputDir "$vaultName$html"
    
    if (-not (Test-Path $htmlDir)) {
        New-Item -ItemType Directory -Path $htmlDir -Force | Out-Null
    }
    
    $mdFiles = Get-ChildItem -Path $VaultDir -Recurse -Filter "*.md" -File
    
    foreach ($file in $mdFiles) {
        $content = Get-Content $file.FullName -Raw -Encoding UTF8
        $htmlContent = @"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>$($file.BaseName)</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; line-height: 1.6; color: #e0e0e0; background: #0d1117; }
        h1 { color: #8B5CF6; border-bottom: 2px solid #8B5CF6; padding-bottom: 10px; }
        h2 { color: #3B82F6; }
        h3 { color: #F59E0B; }
        code { background: #1a1a2e; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
        pre { background: #1a1a2e; padding: 16px; border-radius: 8px; overflow-x: auto; border: 1px solid #3B82F6; }
        blockquote { border-left: 4px solid #8B5CF6; margin: 0; padding: 10px 20px; background: #16213e; }
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #3B82F6; padding: 8px 12px; text-align: left; }
        th { background: #1a1a2e; color: #8B5CF6; }
        a { color: #06B6D4; }
        .metadata { color: #9ca3af; font-size: 0.9em; margin-bottom: 20px; }
    </style>
</head>
<body>
    <div class="metadata">Vault: $vaultName | Exportado: $Date</div>
    <article>
        $($content -replace "`n", "<br/>")
    </article>
</body>
</html>
"@
        
        $htmlFile = Join-Path $htmlDir "$($file.BaseName).html"
        Set-Content -Path $htmlFile -Value $htmlContent -Encoding UTF8
    }
    
    return $htmlDir
}

$vaultsToExport = @()
if ($All) {
    $vaultsToExport = Get-ChildItem -Path $VaultsPath -Directory
} elseif ($Vault) {
    $vaultDir = Join-Path $VaultsPath $Vault
    if (Test-Path $vaultDir) {
        $vaultsToExport = @(Get-Item $vaultDir)
    } else {
        Write-Host "Vault no encontrado: $Vault" -ForegroundColor Red
        return
    }
} else {
    Write-Host "Especifica -Vault o -All" -ForegroundColor Yellow
    return
}

foreach ($vaultDir in $vaultsToExport) {
    Write-Host "Exportando: $($vaultDir.Name)" -ForegroundColor White
    
    if ($Format -eq "HTML") {
        $result = Export-VaultToHTML -VaultDir $vaultDir.FullName -OutputDir $ExportPath
        Write-Host "  Guardado: $result" -ForegroundColor Green
    }
}

Write-Host ""
Write-Host "=== Exportacion Completada ===" -ForegroundColor Green
Write-Host "Ubicacion: $ExportPath" -ForegroundColor Gray

if ($Open -and $Format -eq "HTML") {
    explorer $ExportPath
}
