<#
.SYNOPSIS
    Template avanzado para crear nuevos vaults.
.DESCRIPTION
    Genera la estructura completa de un vault nuevo con templates.
.EXAMPLE
    .\create-vault.ps1 -Name "MiVault" -Type developer
    .\create-vault.ps1 -Name "Proyecto" -Type business -Theme colorful
#>

param(
    [Parameter(Mandatory=$true)]
    [string]$Name,
    [ValidateSet("developer", "research", "business", "personal", "creative")]
    [string]$Type = "developer",
    [ValidateSet("minimal", "professional", "colorful", "dark", "github")]
    [string]$Theme = "minimal",
    [string]$OutputPath = "D:\vaults",
    [switch]$GitInit
)

$Date = Get-Date -Format "yyyy-MM-dd"
$VaultPath = Join-Path $OutputPath $Name

Write-Host "=== Creando Vault: $Name ===" -ForegroundColor Cyan
Write-Host "Tipo: $Type | Tema: $Theme" -ForegroundColor Gray
Write-Host ""

# Estructura base segun tipo
$structures = @{
    developer = @(
        "00-Dashboard",
        "01-Architecture",
        "02-APIs",
        "03-Code-Snippets",
        "04-Tools",
        "05-Configuration",
        "06-Repositories",
        "07-Guides",
        "08-Notes",
        "99-Resources"
    )
    research = @(
        "00-Dashboard",
        "01-Papers",
        "02-Notes",
        "03-Methodology",
        "04-Data",
        "05-References",
        "06-Drafts",
        "07-Presentations",
        "99-Resources"
    )
    business = @(
        "00-Dashboard",
        "01-Projects",
        "02-Clients",
        "03-Roadmap",
        "04-Meetings",
        "05-Templates",
        "06-Metrics",
        "07-Team",
        "99-Resources"
    )
    personal = @(
        "00-Dashboard",
        "01-Journal",
        "02-Learning",
        "03-Goals",
        "04-Ideas",
        "05-Projects",
        "06-Health",
        "07-Finance",
        "99-Resources"
    )
    creative = @(
        "00-Dashboard",
        "01-Projects",
        "02-Inspiration",
        "03-Assets",
        "04-Techniques",
        "05-Portfolio",
        "06-Tools",
        "07-Notes",
        "99-Resources"
    )
}

# Crear estructura
$dirs = $structures[$Type]
foreach ($dir in $dirs) {
    $dirPath = Join-Path $VaultPath $dir
    New-Item -ItemType Directory -Path $dirPath -Force | Out-Null
    Write-Host "  Creado: $dir/" -ForegroundColor Green
}

# Crear Dashboard principal
$dashboard = @"
---
title: "$Name Dashboard"
tags: [dashboard, $Type]
created: $Date
theme: $Theme
---

# $Name Dashboard

> [!info] Vault Type
> **$Type** | Tema: **$Theme** | Creado: $Date

---

## Bienvenido a $Name

Este vault fue creado automaticamente con el template **$Type**.

### Estructura

$(($dirs | ForEach-Object { "- [[${_}]]" }) -join "`n")

---

## Proximos Pasos

1. Personalizar el dashboard
2. Agregar contenido a cada seccion
3. Configurar plugins de Obsidian
4. Conectar con GitHub si se desea

---

> [!tip] Template
> Creado con create-vault.ps1
"@

Set-Content -Path (Join-Path $VaultPath "00-Dashboard\Dashboard.md") -Value $dashboard -Encoding UTF8

# Crear .obsidian config basico
$obsidianConfig = Join-Path $VaultPath ".obsidian"
New-Item -ItemType Directory -Path $obsidianConfig -Force | Out-Null

$obsidianSettings = @"
{
  "strictLineBreaks": false,
  "showFrontmatter": true,
  "livePreview": true,
  "readableLineLength": true
}
"@

Set-Content -Path (Join-Path $obsidianConfig "app.json") -Value $obsidianSettings -Encoding UTF8

# Git init si se solicita
if ($GitInit) {
    Push-Location $VaultPath
    git init
    git add -A
    git commit -m "init: vault $Name created with $Type template"
    Pop-Location
    Write-Host ""
    Write-Host "Git inicializado" -ForegroundColor Green
}

Write-Host ""
Write-Host "=== Vault Creado Exitosamente ===" -ForegroundColor Green
Write-Host "Ubicacion: $VaultPath" -ForegroundColor Gray
Write-Host "Archivos creados: $($dirs.Count + 2)" -ForegroundColor Gray
