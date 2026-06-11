<#
.SYNOPSIS
    Second Brain - Panel de Control Maestro
.DESCRIPTION
    Menu interactivo para gestionar todos los complementos del vault.
.EXAMPLE
    .\second-brain.ps1
#>

param(
    [string]$VaultsPath = "D:\vaults\Second-Brain",
    [string]$ScriptsPath = "D:\vaults\Second-Brain\scripts"
)

# Configuracion visual
$Host.UI.RawUI.WindowTitle = "SECOND BRAIN - Neural Control Panel"

# Limpiar rutas
$VaultsPath = $VaultsPath.Trim('"').TrimEnd('\')
$ScriptsPath = $ScriptsPath.Trim('"').TrimEnd('\')

function Get-VaultStats {
    $vaults = Get-ChildItem -Path "$VaultsPath\Vaults" -Directory -ErrorAction SilentlyContinue
    $totalFiles = 0
    foreach ($v in $vaults) {
        $totalFiles += (Get-ChildItem -Path $v.FullName -Filter "*.md" -Recurse -ErrorAction SilentlyContinue).Count
    }
    return @{ Vaults = $vaults.Count; Files = $totalFiles; LastSync = (Get-Date -Format "HH:mm") }
}

function Show-Header {
    $stats = Get-VaultStats
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  ######            ##      ##  ######    ########" -ForegroundColor Green
    Write-Host "  ######            ##      ##  ######    ########" -ForegroundColor Green
    Write-Host "  ##      ##            ##  ##      ##    ##" -ForegroundColor Green
    Write-Host "  ##      ##            ##  ##      ##    ##" -ForegroundColor Green
    Write-Host "  ##########              ##        ##      ######" -ForegroundColor Green
    Write-Host "  ##########              ##        ##      ######" -ForegroundColor Green
    Write-Host "  ##      ##    ##      ##  ##      ##            ##" -ForegroundColor Green
    Write-Host "  ##      ##    ##      ##  ##      ##            ##" -ForegroundColor Green
    Write-Host "  ##      ##    ##    ##      ##  ######  ########" -ForegroundColor Green
    Write-Host "  ##      ##    ##    ##      ##  ######  ########" -ForegroundColor Green
    Write-Host ""
    Write-Host "        S E C O N D   B R A I N   -   C O N T R O L" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  +----------------------------------------------------------+" -ForegroundColor DarkGray
    Write-Host "  |  Vaults: $($stats.Vaults)    |    Archivos: $($stats.Files)    |    Sync: $($stats.LastSync)    |" -ForegroundColor Gray
    Write-Host "  +----------------------------------------------------------+" -ForegroundColor DarkGray
    Write-Host ""
}

function Show-Menu {
    Write-Host "  +--- GESTION ----------------------------------------------+" -ForegroundColor DarkGreen
    Write-Host "  |                                                           |" -ForegroundColor DarkGreen
    Write-Host "  |  [1]  Actualizar Dashboard          [5]  Crear Vault     |" -ForegroundColor White
    Write-Host "  |  [2]  Buscar Contenido              [6]  Crear Backup    |" -ForegroundColor White
    Write-Host "  |  [3]  Ver Estadisticas              [7]  Exportar HTML    |" -ForegroundColor White
    Write-Host "  |  [4]  Setup Wizard                  [8]  Mobile Sync     |" -ForegroundColor White
    Write-Host "  |                                                           |" -ForegroundColor DarkGreen
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  +--- INTELIGENCIA -----------------------------------------+" -ForegroundColor DarkCyan
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  |  [C]  OpenCode + Skill       [A]  Asistente IA           |" -ForegroundColor Cyan
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkCyan
    Write-Host ""
    Write-Host "  +--- INTEGRACIONES ----------------------------------------+" -ForegroundColor DarkYellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  |  [G]  Git Push a GitHub             [P]  Git Pull        |" -ForegroundColor Yellow
    Write-Host "  |  [I]  Integraciones                 [N]  Notificaciones |" -ForegroundColor Yellow
    Write-Host "  |  [E]  Configurar Repositorio       [L]  Plugins         |" -ForegroundColor Yellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkYellow
    Write-Host ""
    Write-Host "  +--- ACCESO RAPIDO ----------------------------------------+" -ForegroundColor DarkGreen
    Write-Host "  |                                                           |" -ForegroundColor DarkGreen
    Write-Host "  |  [O]  Abrir en Obsidian             [V]  Ver Vaults      |" -ForegroundColor Green
    Write-Host "  |  [R]  Abrir Carpeta Raiz            [L]  Log Actividad   |" -ForegroundColor Green
    Write-Host "  |                                                           |" -ForegroundColor DarkGreen
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  [X]  Salir" -ForegroundColor Red
    Write-Host ""
}

function Show-Vaults {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkCyan
    Write-Host "    VAULTS DISPONIBLES" -ForegroundColor Cyan
    Write-Host "  ============================================================" -ForegroundColor DarkCyan
    Write-Host ""
    
    $vaults = Get-ChildItem -Path "$VaultsPath\Vaults" -Directory -ErrorAction SilentlyContinue
    $i = 1
    foreach ($vault in $vaults) {
        $fileCount = (Get-ChildItem -Path $vault.FullName -Filter "*.md" -Recurse -ErrorAction SilentlyContinue).Count
        $size = [math]::Round((Get-ChildItem -Path $vault.FullName -Recurse -File -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1KB, 1)
        Write-Host "  [$i]  " -ForegroundColor Magenta -NoNewline
        Write-Host "$($vault.Name)" -ForegroundColor White -NoNewline
        Write-Host "  ($fileCount archivos, ${size}KB)" -ForegroundColor Gray
        $i++
    }
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Show-ActivityLog {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    LOG DE ACTIVIDAD" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    $logFile = Join-Path $VaultsPath ".activity.log"
    if (Test-Path -LiteralPath $logFile) {
        $logs = Get-Content -LiteralPath $logFile -Tail 20
        foreach ($log in $logs) {
            Write-Host "  $log" -ForegroundColor Gray
        }
    } else {
        Write-Host "  No hay actividad registrada." -ForegroundColor DarkGray
    }
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Write-Activity {
    param([string]$Message)
    $logFile = Join-Path $VaultsPath ".activity.log"
    $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm"
    "$timestamp - $Message" | Out-File -Append -LiteralPath $logFile -Encoding UTF8
}

function Run-Script {
    param([string]$ScriptName, [string]$Description)
    
    $scriptPath = Join-Path $ScriptsPath $ScriptName
    if (Test-Path -LiteralPath $scriptPath) {
        Write-Activity "Ejecutando: $Description"
        & $scriptPath
    } else {
        Write-Host ""
        Write-Host "  [!] Script no encontrado: $ScriptName" -ForegroundColor Red
    }
}

function Start-OpenCodeWithSkill {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host "    OPENCODE + SKILL" -ForegroundColor Green
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  Iniciando OpenCode con skill de Second Brain..." -ForegroundColor Cyan
    Write-Host ""
    
    # Verificar que opencode esta instalado
    $opencodePath = Get-Command opencode -ErrorAction SilentlyContinue
    if (-not $opencodePath) {
        Write-Host "  [!] OpenCode no encontrado en PATH." -ForegroundColor Red
        Write-Host "  Instala con: npm install -g opencode" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
        Read-Host
        return
    }
    
    # Verificar skill
    $skillPath = Join-Path $VaultsPath "skills\github-vault-builder\SKILL.md"
    if (-not (Test-Path -LiteralPath $skillPath)) {
        $skillPath = Join-Path $env:USERPROFILE ".agents\skills\github-vault-builder\SKILL.md"
    }
    
    if (Test-Path -LiteralPath $skillPath) {
        Write-Host "  [OK] Skill encontrada: github-vault-builder" -ForegroundColor Green
    } else {
        Write-Host "  [!] Skill no encontrada, continuando sin ella..." -ForegroundColor Yellow
    }
    
    Write-Host ""
    Write-Host "  Abriendo OpenCode en: $VaultsPath" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Activity "Abriendo OpenCode con skill"
    
    # Lanzar opencode
    Push-Location $VaultsPath
    & opencode
    Pop-Location
}

function Start-AsistenteIA {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host "    ASISTENTE IA" -ForegroundColor Green
    Write-Host "  ============================================================" -ForegroundColor DarkGreen
    Write-Host ""
    Write-Host "  Selecciona una accion:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "  [1]  Crear vault nuevo con IA" -ForegroundColor White
    Write-Host "  [2]  Analizar vault existente" -ForegroundColor White
    Write-Host "  [3]  Generar documentacion" -ForegroundColor White
    Write-Host "  [4]  Buscar y conectar ideas" -ForegroundColor White
    Write-Host ""
    
    $aiChoice = Read-Host "  Selecciona"
    
    switch ($aiChoice) {
        "1" {
            $name = Read-Host "  Nombre del vault"
            if ($name) {
                Write-Host ""
                Write-Host "  Creando vault con IA..." -ForegroundColor Cyan
                & opencode --prompt "Crea un vault de Obsidian profesional llamado '$name' con estructura completa: Dashboard, Overview, Architecture, Code-Snippets, Tools, Configuration, Repositories, Guides, Notes, Resources. Incluye templates y frontmatter."
            }
        }
        "2" {
            Write-Host ""
            Write-Host "  Analizando vaults..." -ForegroundColor Cyan
            & opencode --prompt "Analiza todos los vaults en D:\vaults\Second-Brain\Vaults y dame un reporte de: estructura, archivos huérfanos, conexiones faltantes, y sugerencias de mejora."
        }
        "3" {
            $vault = Read-Host "  Vault (vacio = todos)"
            if ($vault) {
                & opencode --prompt "Genera documentacion completa para el vault: $vault"
            } else {
                & opencode --prompt "Genera documentacion README para cada vault en D:\vaults\Second-Brain\Vaults"
            }
        }
        "4" {
            & opencode --prompt "Analiza las conexiones entre vaults en D:\vaults\Second-Brain y sugiere nuevas conexiones de conocimiento."
        }
    }
}

# Loop principal
do {
    Show-Header
    Show-Menu
    $choice = Read-Host "  Selecciona una opcion"
    
    switch ($choice.ToUpper()) {
        "1" {
            Run-Script "update-index.ps1" "Actualizar Dashboard"
        }
        "2" {
            $query = Read-Host "  Buscar termino"
            if ($query) {
                Run-Script "search-vaults.ps1" "Busqueda: $query"
            }
        }
        "3" {
            Run-Script "dashboard-stats.ps1" "Estadisticas"
        }
        "4" {
            Run-Script "setup-wizard.ps1" "Setup Wizard"
        }
        "5" {
            $name = Read-Host "  Nombre del vault"
            if ($name) {
                & (Join-Path $ScriptsPath "create-vault.ps1") -Name $name
                Write-Activity "Vault creado: $name"
            }
        }
        "6" {
            Run-Script "backup-vaults.ps1" "Crear Backup"
        }
        "7" {
            $vault = Read-Host "  Nombre del vault (vacio = todos)"
            if ($vault) {
                & (Join-Path $ScriptsPath "export-vault.ps1") -Vault $vault -Format HTML
            } else {
                & (Join-Path $ScriptsPath "export-vault.ps1") -All -Format HTML
            }
        }
        "8" {
            Run-Script "mobile-sync.ps1" "Mobile Sync"
        }
        "C" {
            Start-OpenCodeWithSkill
        }
        "E" {
            Run-Script "configure-repo.ps1" "Configurar Repositorio"
        }
        "A" {
            Start-AsistenteIA
        }
        "G" {
            Write-Host ""
            Write-Host "  Sincronizando con GitHub..." -ForegroundColor Cyan
            Push-Location $VaultsPath
            git add -A
            $msg = Read-Host "  Mensaje del commit"
            if (-not $msg) { $msg = "update: Second Brain $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }
            git commit -m $msg 2>&1
            git push origin main 2>&1
            Pop-Location
            Write-Activity "Git push: $msg"
            Write-Host ""
            Write-Host "  [OK] Cambios subidos a GitHub" -ForegroundColor Green
        }
        "P" {
            Write-Host ""
            Write-Host "  Obteniendo cambios de GitHub..." -ForegroundColor Cyan
            Push-Location $VaultsPath
            git pull origin main 2>&1
            Pop-Location
            Write-Activity "Git pull"
            Write-Host ""
            Write-Host "  [OK] Cambios actualizados" -ForegroundColor Green
        }
        "I" {
            Clear-Host
            Write-Host ""
            Write-Host "  ============================================================" -ForegroundColor DarkYellow
            Write-Host "    INTEGRACIONES" -ForegroundColor Yellow
            Write-Host "  ============================================================" -ForegroundColor DarkYellow
            Write-Host ""
            Write-Host "  [1] GitHub Issues     [3] Notion Export" -ForegroundColor White
            Write-Host "  [2] Calendar Sync     [4] Slack Notify" -ForegroundColor White
            Write-Host ""
            $intChoice = Read-Host "  Selecciona"
            switch ($intChoice) {
                "1" { & (Join-Path $ScriptsPath "integrations.ps1") -Action github-issues }
                "2" { & (Join-Path $ScriptsPath "integrations.ps1") -Action calendar-sync }
                "3" { & (Join-Path $ScriptsPath "integrations.ps1") -Action notion-export }
                "4" { & (Join-Path $ScriptsPath "integrations.ps1") -Action slack-notify }
            }
        }
        "N" {
            Run-Script "notify.ps1" "Notificaciones"
        }
        "P" {
            $pluginsFile = Join-Path $VaultsPath "05-Templates\Plugins-Recomendados.md"
            if (Test-Path $pluginsFile) {
                Clear-Host
                Get-Content $pluginsFile | Write-Host
            } else {
                Write-Host "  Archivo no encontrado" -ForegroundColor Red
            }
        }
        "O" {
            Start-Process "obsidian://open?vault=Second-Brain"
            Write-Host "  Abriendo Obsidian..." -ForegroundColor Green
            Start-Sleep -Seconds 1
        }
        "V" {
            Show-Vaults
        }
        "R" {
            Start-Process explorer.exe $VaultsPath
            Write-Host "  Abriendo carpeta..." -ForegroundColor Green
            Start-Sleep -Seconds 1
        }
        "L" {
            Show-ActivityLog
        }
        "X" {
            Write-Host ""
            Write-Host "  ============================================================" -ForegroundColor DarkGreen
            Write-Host "  |                                                           |" -ForegroundColor DarkGreen
            Write-Host "  |       Hasta luego. El conocimiento es poder.              |" -ForegroundColor Green
            Write-Host "  |                                                           |" -ForegroundColor DarkGreen
            Write-Host "  ============================================================" -ForegroundColor DarkGreen
            Write-Host ""
        }
        default {
            Write-Host "  Opcion no valida: $choice" -ForegroundColor Yellow
            Start-Sleep -Seconds 1
        }
    }
} while ($choice.ToUpper() -ne "X")
