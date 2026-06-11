@echo off
title SECOND BRAIN - Neural Control Panel
color 0D

:: Archivo de configuracion para guardar la ruta del vault
set "CONFIG_FILE=%~dp0vault-config.txt"

:: Cargar ruta configurada si existe
set "VAULT_PATH=%~dp0"
if exist "%CONFIG_FILE%" (
    set /p VAULT_PATH=<"%CONFIG_FILE%"
)

:MENU
cls
echo.
echo   ============================================================
echo.
echo      ####  ####  #    ####  ####  #    #    #  ####
echo      #  #  #  #  #    #     #     #    #    #  #
echo      ####  ####  #    ###   ###   #    #    #  ####
echo      #     #  #  #    #     #     #    #    #      #
echo      #     #  #  #    ####  ####  ####  ####  ####
echo.
echo        S E C O N D   B R A I N   -   C O N T R O L
echo.
echo   ============================================================
echo.
echo   Ruta actual: %VAULT_PATH%
echo.
echo   [1] Panel de Control        [5] Configurar Ruta Vault
echo   [2] OpenCode + Skill        [6] Buscar Vaults
echo   [3] Abrir Obsidian          [7] Ruta por Defecto
echo   [4] Abrir Carpeta           [8] Configurar Repositorio
echo.
echo   ============================================================
echo.

set /p choice="  Selecciona: "

if "%choice%"=="1" (
    powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0scripts\second-brain.ps1" -VaultsPath "%VAULT_PATH%"
    goto MENU
) else if "%choice%"=="2" (
    echo.
    echo   Abriendo OpenCode con skill...
    echo.
    cd /d "%VAULT_PATH%"
    opencode
    goto MENU
) else if "%choice%"=="3" (
    start obsidian://open?vault=Second-Brain
    goto MENU
) else if "%choice%"=="4" (
    explorer "%VAULT_PATH%"
    goto MENU
) else if "%choice%"=="5" (
    call :CONFIGURE_PATH
    goto MENU
) else if "%choice%"=="6" (
    call :SEARCH_VAULTS
    goto MENU
) else if "%choice%"=="7" (
    set "VAULT_PATH=%~dp0"
    echo %VAULT_PATH%> "%CONFIG_FILE%"
    echo.
    echo   Ruta restaurada por defecto: %VAULT_PATH%
    timeout /t 2 >nul
    goto MENU
) else if "%choice%"=="8" (
    powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0scripts\configure-repo.ps1" -RepoPath "%VAULT_PATH%"
    goto MENU
) else (
    echo.
    echo   Opcion no valida.
    timeout /t 2 >nul
    goto MENU
)

:: ============================================================
:: FUNCION: Configurar ruta del vault
:: ============================================================
:CONFIGURE_PATH
cls
echo.
echo   ============================================================
echo     CONFIGURAR RUTA DEL VAULT MAESTRO
echo   ============================================================
echo.
echo   Ruta actual: %VAULT_PATH%
echo.
echo   [1] Ingresar nueva ruta manualmente
echo   [2] Seleccionar carpeta con dialogo
echo   [3] Buscar vaults automaticamente
echo   [4] Volver al menu principal
echo.
set /p configChoice="  Selecciona: "

if "%configChoice%"=="1" (
    echo.
    set /p newRoute="  Ingresa la nueva ruta del vault: "
    if defined newRoute (
        :: Verificar que la ruta existe
        if exist "!newRoute!" (
            set "VAULT_PATH=!newRoute!"
            echo !VAULT_PATH!> "%CONFIG_FILE%"
            echo.
            echo   [OK] Ruta configurada: !VAULT_PATH!
        ) else (
            echo.
            echo   [!] La ruta no existe: !newRoute!
        )
        timeout /t 2 >nul
    )
) else if "%configChoice%"=="2" (
    echo.
    echo   Selecciona la carpeta del vault maestro...
    :: Usar PowerShell para abrir dialogo de seleccion de carpeta
    for /f "delims=" %%i in ('powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; $f.Description = 'Selecciona tu Vault Maestro'; $f.ShowNewFolderButton = $false; if($f.ShowDialog() -eq 'OK'){$f.SelectedPath}"') do (
        set "VAULT_PATH=%%i"
    )
    if defined VAULT_PATH (
        echo %VAULT_PATH%> "%CONFIG_FILE%"
        echo.
        echo   [OK] Ruta configurada: %VAULT_PATH%
    ) else (
        echo.
        echo   Operacion cancelada.
    )
    timeout /t 2 >nul
) else if "%configChoice%"=="3" (
    call :AUTO_SEARCH
) else if "%configChoice%"=="4" (
    exit /b
)
exit /b

:: ============================================================
:: FUNCION: Buscar vaults automaticamente
:: ============================================================
:AUTO_SEARCH
cls
echo.
echo   ============================================================
echo     BUSQUEDA AUTOMATICA DE VAULTS
echo   ============================================================
echo.
echo   Buscando vaults en ubicaciones comunes...
echo.

:: Lista de rutas comunes donde buscar
set "SEARCH_PATHS=C:\Users\%USERNAME%\Documents\Vaults C:\Users\%USERNAME%\OneDrive\Vaults D:\Vaults D:\Obsidian C:\Users\%USERNAME%\Documents\Obsidian C:\Users\%USERNAME%\Desktop\Vaults"

set "foundCount=0"
for %%p in (%SEARCH_PATHS%) do (
    if exist "%%p" (
        echo   [+] Encontrado: %%p
        set /a foundCount+=1
    )
)

echo.
if %foundCount%==0 (
    echo   No se encontraron vaults en las rutas comunes.
    echo   Intenta ingresar la ruta manualmente.
) else (
    echo   Se encontraron %foundCount% posibles ubicaciones.
)
echo.
echo   Presiona Enter para volver...
pause >nul
exit /b

:: ============================================================
:: FUNCION: Buscar vaults disponibles
:: ============================================================
:SEARCH_VAULTS
cls
echo.
echo   ============================================================
echo     VAULTS DISPONIBLES EN: %VAULT_PATH%
echo   ============================================================
echo.

if not exist "%VAULT_PATH%\Vaults" (
    echo   [!] No se encontro la carpeta 'Vaults' en la ruta actual.
    echo   Verifica que la ruta sea correcta.
    echo.
    echo   Presiona Enter para volver...
    pause >nul
    exit /b
)

set "vaultCount=0"
for /d %%d in ("%VAULT_PATH%\Vaults\*") do (
    echo   [%%~nxd]
    set /a vaultCount+=1
)

if %vaultCount%==0 (
    echo   No se encontraron vaults.
) else (
    echo.
    echo   Total: %vaultCount% vaults encontrados.
)

echo.
echo   Presiona Enter para volver...
pause >nul
exit /b
