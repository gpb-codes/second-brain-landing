<#
.SYNOPSIS
    Busqueda full-text universal en todos los vaults.
.DESCRIPTION
    Busca contenido dentro de todos los archivos markdown del Second Brain.
.EXAMPLE
    .\search-vaults.ps1 -Query "Tailscale"
    .\search-vaults.ps1 -Query "API" -Vault "Recursos-Gratis"
    .\search-vaults.ps1 -Query "docker" -Context 2
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$Query,
    [string]$VaultsPath = "D:\vaults\Second-Brain\Vaults",
    [string]$Vault,
    [int]$Context = 0,
    [switch]$CaseSensitive,
    [switch]$ListOnly
)

Write-Host "=== Busqueda Full-Text ===" -ForegroundColor Cyan
Write-Host "Query: $Query" -ForegroundColor Gray
Write-Host ""

$regexOptions = [System.Text.RegularExpressions.RegexOptions]::IgnoreCase
if ($CaseSensitive) { $regexOptions = [System.Text.RegularExpressions.RegexOptions]::None }

$pattern = [regex]::Escape($Query)
$results = @()

$searchPath = $VaultsPath
if ($Vault) {
    $searchPath = Join-Path $VaultsPath $Vault
    if (-not (Test-Path $searchPath)) {
        Write-Host "Vault no encontrado: $Vault" -ForegroundColor Red
        return
    }
}

$mdFiles = Get-ChildItem -Path $searchPath -Recurse -Filter "*.md" -File |
    Where-Object { $_.FullName -notmatch '\\\.obsidian\\' }

foreach ($file in $mdFiles) {
    $lines = Get-Content $file.FullName -ErrorAction SilentlyContinue
    $lineNum = 0
    
    foreach ($line in $lines) {
        $lineNum++
        if ($line -match $pattern) {
            $relativePath = $file.FullName.Replace($VaultsPath, "").TrimStart("\")
            $vaultName = $relativePath.Split("\")[0]
            
            $results += [PSCustomObject]@{
                Vault = $vaultName
                File = $file.Name
                Line = $lineNum
                Content = $line.Trim()
                Path = $relativePath
            }
        }
    }
}

if ($results.Count -eq 0) {
    Write-Host "No se encontraron resultados para '$Query'" -ForegroundColor Yellow
    return
}

Write-Host "Resultados: $($results.Count)" -ForegroundColor Green
Write-Host ""

if ($ListOnly) {
    $results | Group-Object Vault | ForEach-Object {
        Write-Host "[$($_.Name)] $($_.Count) resultados" -ForegroundColor Cyan
        $_.Group | ForEach-Object {
            Write-Host "  $($_.File):$($_.Line) - $($_.Content)" -ForegroundColor Gray
        }
    }
} else {
    $results | ForEach-Object {
        Write-Host "[$($_.Vault)] $($_.File):$($_.Line)" -ForegroundColor Cyan
        Write-Host "  $($_.Content)" -ForegroundColor White
        Write-Host ""
    }
}

Write-Host "Total: $($results.Count) resultados en $(($results | Select-Object -Property File -Unique).Count) archivos" -ForegroundColor Green
