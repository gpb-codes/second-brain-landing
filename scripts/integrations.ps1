<#
.SYNOPSIS
    Integraciones externas para Second Brain.
.DESCRIPTION
    Conecta con GitHub Issues, Calendar, y otras herramientas.
.EXAMPLE
    .\integrations.ps1 -Action github-issues
    .\integrations.ps1 -Action calendar-sync
#>

param(
    [ValidateSet("github-issues", "calendar-sync", "notion-export", "slack-notify")]
    [string]$Action,
    [string]$Repo = "gpb-codes/second-brain",
    [string]$VaultsPath = "D:\vaults\Second-Brain"
)

Write-Host "=== Second Brain Integraciones ===" -ForegroundColor Cyan
Write-Host ""

switch ($Action) {
    "github-issues" {
        Write-Host "Sincronizando GitHub Issues..." -ForegroundColor Yellow
        
        # Obtener issues abiertas
        $issues = gh issue list --repo $Repo --state open --json number,title,labels,createdAt 2>&1
        
        if ($issues) {
            $issues = $issues | ConvertFrom-Json
            
            $issuesMd = @"
---
title: "GitHub Issues"
tags: [github, issues]
created: $(Get-Date -Format "yyyy-MM-dd")
---

# GitHub Issues

## Issues Abiertas

| # | Titulo | Labels | Creada |
|---|--------|--------|--------|
$($issues | ForEach-Object { "| $($_.number) | $($_.title) | $(($_.labels | ForEach-Object { $_.name }) -join ', ') | $($_.createdAt.ToString('yyyy-MM-dd')) |" } | Out-String)

Total: $($issues.Count) issues abiertas
"@
            
            $issuesFile = Join-Path $VaultsPath "02-Unified-Search\GitHub-Issues.md"
            Set-Content -Path $issuesFile -Value $issuesMd -Encoding UTF8
            Write-Host "  Issues sincronizadas: $($issues.Count)" -ForegroundColor Green
            Write-Host "  Guardado: $issuesFile" -ForegroundColor Gray
        }
    }
    
    "calendar-sync" {
        Write-Host "Exportando calendario..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Para sync con calendario:" -ForegroundColor White
        Write-Host "  1. Instalar plugin 'Full Calendar' en Obsidian" -ForegroundColor Gray
        Write-Host "  2. Configurar con tu Google Calendar" -ForegroundColor Gray
        Write-Host "  3. Las notas diarias apareceran en el calendario" -ForegroundColor Gray
        Write-Host ""
        Write-Host "Alternativa: usar Daily Notes con fechas" -ForegroundColor Cyan
    }
    
    "notion-export" {
        Write-Host "Exportando a Notion..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Para exportar a Notion:" -ForegroundColor White
        Write-Host "  1. Usar plugin Obsidian TO Notion" -ForegroundColor Gray
        Write-Host "  2. Configurar API key de Notion" -ForegroundColor Gray
        Write-Host "  3. Seleccionar vault a exportar" -ForegroundColor Gray
        Write-Host ""
        
        # Crear script de exportacion basica
        $notionScript = @"
# Export vault to Notion-style markdown
# This creates compatible markdown for Notion import

`$VaultPath = "$VaultsPath\Vaults"
`$ExportPath = "D:\Exports\Notion"

if (-not (Test-Path `$ExportPath)) {
    New-Item -ItemType Directory -Path `$ExportPath -Force | Out-Null
}

`$vaults = Get-ChildItem -Path `$VaultPath -Directory
foreach (`$vault in `$vaults) {
    Write-Host "Exporting: `$(`$vault.Name)" -ForegroundColor Cyan
    `$dest = Join-Path `$ExportPath `$vault.Name
    Copy-Item -Path `$vault.FullName -Destination `$dest -Recurse -Force
}

Write-Host "Exportado a: `$ExportPath" -ForegroundColor Green
"@
        Set-Content -Path (Join-Path $VaultsPath "scripts\notion-export.ps1") -Value $notionScript -Encoding UTF8
        Write-Host "Script creado: scripts\notion-export.ps1" -ForegroundColor Green
    }
    
    "slack-notify" {
        Write-Host "Configurando notificaciones Slack..." -ForegroundColor Yellow
        Write-Host ""
        Write-Host "Para notificaciones Slack:" -ForegroundColor White
        Write-Host "  1. Crear Slack Incoming Webhook" -ForegroundColor Gray
        Write-Host "  2. Guardar URL en variable de entorno" -ForegroundColor Gray
        Write-Host "  3. Usar este script para enviar notificaciones" -ForegroundColor Gray
        Write-Host ""
        
        $slackScript = @"
# Slack notification for Second Brain
# Requires: SLACK_WEBHOOK_URL environment variable

param(
    [Parameter(Mandatory=`$true)]
    [string]`$Message,
    [string]`$Channel = "#second-brain"
)

`$webhookUrl = `$env:SLACK_WEBHOOK_URL

if (-not `$webhookUrl) {
    Write-Host "Error: SLACK_WEBHOOK_URL no configurado" -ForegroundColor Red
    return
}

`$body = @{
    channel = `$Channel
    text = `$Message
    username = "Second Brain Bot"
    icon_emoji = ":brain:"
} | ConvertTo-Json

Invoke-RestMethod -Uri `$webhookUrl -Method Post -Body `$body -ContentType "application/json"
Write-Host "Notificacion enviada a Slack" -ForegroundColor Green
"@
        Set-Content -Path (Join-Path $VaultsPath "scripts\slack-notify.ps1") -Value $slackScript -Encoding UTF8
        Write-Host "Script creado: scripts\slack-notify.ps1" -ForegroundColor Green
    }
    
    default {
        Write-Host "Acciones disponibles:" -ForegroundColor White
        Write-Host "  github-issues  - Sincronizar issues de GitHub" -ForegroundColor Gray
        Write-Host "  calendar-sync  - Configurar sync con calendario" -ForegroundColor Gray
        Write-Host "  notion-export  - Exportar a Notion" -ForegroundColor Gray
        Write-Host "  slack-notify   - Configurar notificaciones Slack" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "=== Integracion Completada ===" -ForegroundColor Green
