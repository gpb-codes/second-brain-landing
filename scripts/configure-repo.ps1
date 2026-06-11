<#
.SYNOPSIS
    Configura el repositorio de GitHub para Second Brain.
.DESCRIPTION
    Permite al usuario configurar la URL remota, rama, usuario git y probar la conexion.
.EXAMPLE
    .\configure-repo.ps1
#>

param(
    [string]$RepoPath = $PSScriptRoot
)

# Detectar ruta del repositorio
$HasGit = $true
if (-not (Test-Path "$RepoPath\.git")) {
    $parentPath = Split-Path $PSScriptRoot -Parent
    if (Test-Path "$parentPath\.git") {
        $RepoPath = $parentPath
    } else {
        $HasGit = $false
    }
}

function Show-Header {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  |        CONFIGURAR REPOSITORIO GITHUB                      |" -ForegroundColor Yellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    Write-Host "  Repositorio: $RepoPath" -ForegroundColor Gray
    Write-Host ""
}

function Get-GitConfig {
    Push-Location $RepoPath
    $config = @{}
    
    $config.IsRepo = (Test-Path ".git")
    $config.HasGit = $null -ne (Get-Command git -ErrorAction SilentlyContinue)
    
    if ($config.IsRepo -and $config.HasGit) {
        $config.Remote = (git remote get-url origin 2>$null) -replace '^.*@', ''
        $config.Branch = git branch --show-current 2>$null
        $config.UserName = git config user.name 2>$null
        $config.UserEmail = git config user.email 2>$null
        
        $remoteVerbose = git remote -v 2>$null
        if ($remoteVerbose) {
            $config.HasRemote = $true
        } else {
            $config.HasRemote = $false
        }
    } else {
        $config.Remote = ""
        $config.Branch = ""
        $config.UserName = ""
        $config.UserEmail = ""
        $config.HasRemote = $false
    }
    
    Pop-Location
    return $config
}

function Show-Config {
    param($Config)
    
    Write-Host "  +--- CONFIGURACION ACTUAL ----------------------------------+" -ForegroundColor DarkCyan
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  |  Repositorio Git:  " -ForegroundColor DarkCyan -NoNewline
    if ($Config.IsRepo) {
        Write-Host "[OK] Detectado" -ForegroundColor Green
    } else {
        Write-Host "[!] No es repositorio Git" -ForegroundColor Red
    }
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  |  Remoto:          " -ForegroundColor DarkCyan -NoNewline
    if ($Config.Remote) {
        Write-Host "$($Config.Remote)" -ForegroundColor White
    } else {
        Write-Host "No configurado" -ForegroundColor Yellow
    }
    Write-Host "  |  Rama:            " -ForegroundColor DarkCyan -NoNewline
    if ($Config.Branch) {
        Write-Host "$($Config.Branch)" -ForegroundColor White
    } else {
        Write-Host "No detectada" -ForegroundColor Yellow
    }
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  |  Usuario Git:     " -ForegroundColor DarkCyan -NoNewline
    if ($Config.UserName) {
        Write-Host "$($Config.UserName)" -ForegroundColor White
    } else {
        Write-Host "No configurado" -ForegroundColor Yellow
    }
    Write-Host "  |  Email Git:       " -ForegroundColor DarkCyan -NoNewline
    if ($Config.UserEmail) {
        Write-Host "$($Config.UserEmail)" -ForegroundColor White
    } else {
        Write-Host "No configurado" -ForegroundColor Yellow
    }
    Write-Host "  |                                                           |" -ForegroundColor DarkCyan
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkCyan
    Write-Host ""
}

function Set-RemoteUrl {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    CONFIGURAR URL REMOTA" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    $config = Get-GitConfig
    if ($config.Remote) {
        Write-Host "  URL actual: $($config.Remote)" -ForegroundColor Gray
        Write-Host ""
    }
    
    Write-Host "  Formato: https://github.com/USUARIO/REPOSITORIO.git" -ForegroundColor Gray
    Write-Host "  O:       git@github.com:USUARIO/REPOSITORIO.git" -ForegroundColor Gray
    Write-Host ""
    
    $newUrl = Read-Host "  Nueva URL (Enter para cancelar)"
    
    if (-not $newUrl) {
        Write-Host "  Cancelado." -ForegroundColor Yellow
        return
    }
    
    # Validar formato basico
    if ($newUrl -notmatch 'github\.com' -and $newUrl -notmatch 'git@') {
        Write-Host "  [!] URL no parece ser de GitHub" -ForegroundColor Yellow
        $confirm = Read-Host "  Continuar de todos modos? (s/n)"
        if ($confirm -ne 's' -and $confirm -ne 'S') { return }
    }
    
    Push-Location $RepoPath
    
    # Verificar si es repositorio Git, si no, inicializarlo
    if (-not (Test-Path ".git")) {
        Write-Host ""
        Write-Host "  Inicializando repositorio Git..." -ForegroundColor Cyan
        git init 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Host "  [!] Error al inicializar Git" -ForegroundColor Red
            Pop-Location
            return
        }
        Write-Host "  [OK] Repositorio inicializado" -ForegroundColor Green
        
        # Crear .gitignore basico si no existe
        if (-not (Test-Path ".gitignore")) {
            @"
# Obsidian
.obsidian/
.obsidian workspace.json

# System
Thumbs.db
Desktop.ini
.DS_Store
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
            Write-Host "  [OK] .gitignore creado" -ForegroundColor Green
        }
    }
    
    # Verificar si ya existe un remote
    $existingRemote = git remote get-url origin 2>$null
    if ($existingRemote) {
        Write-Host ""
        Write-Host "  Actualizando remote existente..." -ForegroundColor Cyan
        git remote set-url origin $newUrl 2>&1
    } else {
        Write-Host ""
        Write-Host "  Agregando remote origin..." -ForegroundColor Cyan
        git remote add origin $newUrl 2>&1
    }
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  [OK] Remote configurado: $newUrl" -ForegroundColor Green
    } else {
        Write-Host "  [!] Error al configurar remote" -ForegroundColor Red
    }
    
    Pop-Location
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Set-DefaultBranch {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    CAMBIAR RAMA POR DEFECTO" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    Push-Location $RepoPath
    
    $currentBranch = git branch --show-current 2>$null
    Write-Host "  Rama actual: $currentBranch" -ForegroundColor White
    Write-Host ""
    
    # Listar ramas disponibles
    $branches = git branch 2>$null | ForEach-Object { $_ -replace '^\*?\s*', '' }
    Write-Host "  Ramas disponibles:" -ForegroundColor Cyan
    foreach ($b in $branches) {
        $marker = if ($b -eq $currentBranch) { " *" } else { "  " }
        Write-Host "    $marker $b" -ForegroundColor White
    }
    Write-Host ""
    
    $newBranch = Read-Host "  Nombre de la rama (Enter para cancelar)"
    
    if (-not $newBranch) {
        Write-Host "  Cancelado." -ForegroundColor Yellow
        Pop-Location
        return
    }
    
    # Verificar si la rama existe
    $branchExists = git branch --list $newBranch 2>$null
    if (-not $branchExists) {
        Write-Host ""
        Write-Host "  La rama '$newBranch' no existe." -ForegroundColor Yellow
        $create = Read-Host "  Crearla? (s/n)"
        if ($create -eq 's' -or $create -eq 'S') {
            git checkout -b $newBranch 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "  [OK] Rama creada y cambiada a: $newBranch" -ForegroundColor Green
            } else {
                Write-Host "  [!] Error al crear rama" -ForegroundColor Red
            }
        }
    } else {
        git checkout $newBranch 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "  [OK] Cambiado a rama: $newBranch" -ForegroundColor Green
        } else {
            Write-Host "  [!] Error al cambiar rama" -ForegroundColor Red
        }
    }
    
    Pop-Location
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Set-GitUser {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    CONFIGURAR USUARIO GIT" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    Push-Location $RepoPath
    
    $currentUser = git config user.name 2>$null
    $currentEmail = git config user.email 2>$null
    
    Write-Host "  Configuracion actual:" -ForegroundColor Cyan
    Write-Host "    Nombre:  $(if ($currentUser) { $currentUser } else { 'No configurado' })" -ForegroundColor White
    Write-Host "    Email:   $(if ($currentEmail) { $currentEmail } else { 'No configurado' })" -ForegroundColor White
    Write-Host ""
    
    Write-Host "  [1] Configurar solo para este repositorio" -ForegroundColor White
    Write-Host "  [2] Configurar globalmente (todos los repos)" -ForegroundColor White
    Write-Host "  [3] Volver" -ForegroundColor White
    Write-Host ""
    
    $scope = Read-Host "  Selecciona"
    
    if ($scope -eq "3") {
        Pop-Location
        return
    }
    
    $name = Read-Host "  Nombre de usuario (Enter para mantener: $currentUser)"
    if (-not $name -and $currentUser) { $name = $currentUser }
    
    $email = Read-Host "  Email (Enter para mantener: $currentEmail)"
    if (-not $email -and $currentEmail) { $email = $currentEmail }
    
    if ($scope -eq "1") {
        git config user.name $name 2>&1
        git config user.email $email 2>&1
        Write-Host ""
        Write-Host "  [OK] Configuracion local actualizada" -ForegroundColor Green
    } elseif ($scope -eq "2") {
        git config --global user.name $name 2>&1
        git config --global user.email $email 2>&1
        Write-Host ""
        Write-Host "  [OK] Configuracion global actualizada" -ForegroundColor Green
    }
    
    Pop-Location
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Test-GitHubConnection {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    PROBAR CONEXION CON GITHUB" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    Push-Location $RepoPath
    
    # 1. Verificar git
    Write-Host "  1. Verificando Git..." -ForegroundColor Cyan
    $gitVersion = git --version 2>$null
    if ($gitVersion) {
        Write-Host "     [OK] $gitVersion" -ForegroundColor Green
    } else {
        Write-Host "     [!] Git no instalado" -ForegroundColor Red
        Pop-Location
        return
    }
    
    # 2. Verificar remote
    Write-Host ""
    Write-Host "  2. Verificando remote..." -ForegroundColor Cyan
    $remoteUrl = git remote get-url origin 2>$null
    if ($remoteUrl) {
        Write-Host "     [OK] Remote: $remoteUrl" -ForegroundColor Green
    } else {
        Write-Host "     [!] No hay remote configurado" -ForegroundColor Red
        Pop-Location
        return
    }
    
    # 3. Verificar conexion
    Write-Host ""
    Write-Host "  3. Probando conexion..." -ForegroundColor Cyan
    $output = git ls-remote --heads origin 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "     [OK] Conexion exitosa con GitHub" -ForegroundColor Green
    } else {
        Write-Host "     [!] Error de conexion" -ForegroundColor Red
        Write-Host "     Posibles causas:" -ForegroundColor Yellow
        Write-Host "       - Credenciales no configuradas" -ForegroundColor Gray
        Write-Host "       - Sin acceso a Internet" -ForegroundColor Gray
        Write-Host "       - URL remota incorrecta" -ForegroundColor Gray
    }
    
    # 4. Verificar credenciales
    Write-Host ""
    Write-Host "  4. Verificando credenciales..." -ForegroundColor Cyan
    $credential = git config --get credential.helper 2>$null
    if ($credential) {
        Write-Host "     [OK] Credential helper: $credential" -ForegroundColor Green
    } else {
        Write-Host "     [--] No hay credential helper configurado" -ForegroundColor Yellow
        Write-Host "     Git usara el almacenamiento del sistema." -ForegroundColor Gray
    }
    
    # 5. Verificar GitHub CLI (opcional)
    Write-Host ""
    Write-Host "  5. Verificando GitHub CLI (opcional)..." -ForegroundColor Cyan
    $ghVersion = gh --version 2>$null
    if ($ghVersion) {
        Write-Host "     [OK] GitHub CLI instalado" -ForegroundColor Green
        $ghAuth = gh auth status 2>$null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "     [OK] Autenticado" -ForegroundColor Green
        } else {
            Write-Host "     [--] No autenticado (ejecuta: gh auth login)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "     [--] GitHub CLI no instalado (opcional)" -ForegroundColor Yellow
    }
    
    Pop-Location
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Init-GitRepo {
    Clear-Host
    Write-Host ""
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host "    INICIALIZAR REPOSITORIO GIT" -ForegroundColor Yellow
    Write-Host "  ============================================================" -ForegroundColor DarkYellow
    Write-Host ""
    
    Push-Location $RepoPath
    
    if (Test-Path ".git") {
        Write-Host "  [!] Este directorio ya es un repositorio Git" -ForegroundColor Yellow
        Write-Host ""
        Pop-Location
        Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
        Read-Host
        return
    }
    
    Write-Host "  Este proceso inicializara un repositorio Git aqui:" -ForegroundColor White
    Write-Host "  $RepoPath" -ForegroundColor Gray
    Write-Host ""
    
    $confirm = Read-Host "  Continuar? (s/n)"
    
    if ($confirm -ne 's' -and $confirm -ne 'S') {
        Write-Host "  Cancelado." -ForegroundColor Yellow
        Pop-Location
        return
    }
    
    git init 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host ""
        Write-Host "  [OK] Repositorio inicializado" -ForegroundColor Green
        Write-Host ""
        
        # Crear .gitignore si no existe
        if (-not (Test-Path ".gitignore")) {
            $gitignore = @"
# Obsidian
.obsidian/
.obsidian workspace.json
.obsidian/workspace-mobile.json

# System
Thumbs.db
Desktop.ini
.DS_Store

# Temp
*.tmp
*.temp
*.log
"@ | Out-File -FilePath ".gitignore" -Encoding UTF8
            Write-Host "  [OK] .gitignore creado" -ForegroundColor Green
        }
        
        # Preguntar por remote
        Write-Host ""
        $addRemote = Read-Host "  Agregar remote de GitHub? (s/n)"
        if ($addRemote -eq 's' -or $addRemote -eq 'S') {
            $url = Read-Host "  URL del repositorio (https://github.com/USUARIO/REPO.git)"
            if ($url) {
                git remote add origin $url 2>&1
                Write-Host "  [OK] Remote agregado" -ForegroundColor Green
            }
        }
    } else {
        Write-Host "  [!] Error al inicializar repositorio" -ForegroundColor Red
    }
    
    Pop-Location
    Write-Host ""
    Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
    Read-Host
}

function Show-Menu {
    Write-Host "  +--- OPCIONES ---------------------------------------------+" -ForegroundColor DarkYellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  |  [1]  Ver configuracion actual                           |" -ForegroundColor Yellow
    Write-Host "  |  [2]  Cambiar URL remota de GitHub                       |" -ForegroundColor Yellow
    Write-Host "  |  [3]  Cambiar rama por defecto                           |" -ForegroundColor Yellow
    Write-Host "  |  [4]  Configurar usuario Git                             |" -ForegroundColor Yellow
    Write-Host "  |  [5]  Probar conexion con GitHub                        |" -ForegroundColor Yellow
    Write-Host "  |  [6]  Inicializar repositorio Git                        |" -ForegroundColor Yellow
    Write-Host "  |                                                           |" -ForegroundColor DarkYellow
    Write-Host "  +-----------------------------------------------------------+" -ForegroundColor DarkYellow
    Write-Host ""
    Write-Host "  [X]  Volver al panel principal" -ForegroundColor Red
    Write-Host ""
}

# Loop principal
$choice = ""
$isInteractive = $null -ne $Host.UI.RawUI

do {
    Show-Header
    $config = Get-GitConfig
    Show-Config -Config $config
    Show-Menu
    
    if ($isInteractive) {
        $choice = Read-Host "  Selecciona una opcion"
    } else {
        Write-Host "  [!] Este script requiere modo interactivo" -ForegroundColor Yellow
        break
    }
    
    switch ($choice.ToUpper()) {
        "1" {
            Show-Header
            $config = Get-GitConfig
            Show-Config -Config $config
            Write-Host "  Presiona Enter para volver..." -ForegroundColor DarkGray
            Read-Host
        }
        "2" { Set-RemoteUrl }
        "3" { Set-DefaultBranch }
        "4" { Set-GitUser }
        "5" { Test-GitHubConnection }
        "6" { Init-GitRepo }
        "X" { }
        default {
            Write-Host "  Opcion no valida: $choice" -ForegroundColor Yellow
            Start-Sleep -Seconds 1
        }
    }
} while ($choice.ToUpper() -ne "X")
