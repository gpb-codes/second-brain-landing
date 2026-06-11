@echo off
title SECOND BRAIN PACE
color 0A
setlocal enabledelayedexpansion

set "CONFIG_FILE=%~dp0vault-config.txt"
set "VAULT_PATH=%~dp0"

if exist "%CONFIG_FILE%" (
    set /p VAULT_PATH=<"%CONFIG_FILE%"
)

:MENU
cls
echo.
echo  ============================================================
echo.
echo  ######            ##      ##  ######    ########
echo  ######            ##      ##  ######    ########
echo  ##      ##            ##  ##      ##    ##
echo  ##      ##            ##  ##      ##    ##
echo  ##########              ##        ##      ######
echo  ##########              ##        ##      ######
echo  ##      ##    ##      ##  ##      ##            ##
echo  ##      ##    ##      ##  ##      ##            ##
echo  ##      ##    ##    ##      ##  ######  ########
echo  ##      ##    ##    ##      ##  ######  ########
echo.
echo         S E C O N D   B R A I N   -   C O N T R O L
echo.
echo  ============================================================
echo.
echo  Ruta: %VAULT_PATH%
echo.
echo  [1] Panel de Control
echo  [2] OpenCode + Skill
echo  [3] Abrir Obsidian
echo  [4] Abrir Carpeta
echo  [5] Configurar Ruta
echo  [6] Ver Categorias PACE
echo  [7] Ruta por Defecto
echo  [8] Configurar Repositorio
echo.
echo  ========================================
echo.

set /p choice="  Selecciona: "

if "%choice%"=="" goto MENU
if "%choice%"=="1" goto OP1
if "%choice%"=="2" goto OP2
if "%choice%"=="3" goto OP3
if "%choice%"=="4" goto OP4
if "%choice%"=="5" goto OP5
if "%choice%"=="6" goto OP6
if "%choice%"=="7" goto OP7
if "%choice%"=="8" goto OP8
echo.
echo  Opcion invalida
pause
goto MENU

:OP1
    powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0scripts\second-brain.ps1" -VaultsPath "%VAULT_PATH%"
pause
goto MENU

:OP2
echo Abriendo OpenCode...
cd /d "%VAULT_PATH%"
opencode
pause
goto MENU

:OP3
start obsidian://open?vault=Second-Brain
goto MENU

:OP4
explorer "%VAULT_PATH%"
goto MENU

:OP5
call :CONFIGURE_PATH
goto MENU

:OP6
call :SHOW_PACE
goto MENU

:OP7
set "VAULT_PATH=%~dp0"
echo %VAULT_PATH%> "%CONFIG_FILE%"
echo Ruta restaurada: %VAULT_PATH%
pause
goto MENU

:OP8
powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0scripts\configure-repo.ps1" -RepoPath "%VAULT_PATH%"
pause
goto MENU

:: ============================================================
:CONFIGURE_PATH
cls
echo.
echo  ========================================
echo     CONFIGURAR RUTA DEL VAULT
echo  ========================================
echo.
echo  Actual: %VAULT_PATH%
echo.
echo  [1] Ingresar ruta manualmente
echo  [2] Seleccionar carpeta
echo  [3] Buscar vaults
echo  [4] Volver
echo.
set /p configChoice="  Selecciona: "

if "%configChoice%"=="" exit /b
if "%configChoice%"=="4" exit /b

if "%configChoice%"=="1" (
    set /p newRoute="  Ruta: "
    if exist "!newRoute!" (
        set "VAULT_PATH=!newRoute!"
        echo !VAULT_PATH!> "%CONFIG_FILE%"
        echo [OK] Configurado: !VAULT_PATH!
    ) else (
        echo [!] Ruta no existe
    )
    pause
    exit /b
)

if "%configChoice%"=="2" (
    for /f "delims=" %%i in ('powershell -Command "Add-Type -AssemblyName System.Windows.Forms; $f = New-Object System.Windows.Forms.FolderBrowserDialog; if($f.ShowDialog() -eq 'OK'){$f.SelectedPath}"') do (
        set "VAULT_PATH=%%i"
    )
    if defined VAULT_PATH (
        echo %VAULT_PATH%> "%CONFIG_FILE%"
        echo [OK] Configurado: %VAULT_PATH%
    )
    pause
    exit /b
)

if "%configChoice%"=="3" (
    call :AUTO_SEARCH
    exit /b
)
exit /b

:: ============================================================
:AUTO_SEARCH
cls
echo.
echo  Buscando vaults...
echo.

set "foundCount=0"
if exist "C:\Users\%USERNAME%\Documents\Vaults" (echo  [+] C:\Users\%USERNAME%\Documents\Vaults & set /a foundCount+=1)
if exist "C:\Users\%USERNAME%\OneDrive\Vaults" (echo  [+] C:\Users\%USERNAME%\OneDrive\Vaults & set /a foundCount+=1)
if exist "D:\Vaults" (echo  [+] D:\Vaults & set /a foundCount+=1)
if exist "D:\Obsidian" (echo  [+] D:\Obsidian & set /a foundCount+=1)
if exist "C:\Users\%USERNAME%\Desktop\Vaults" (echo  [+] C:\Users\%USERNAME%\Desktop\Vaults & set /a foundCount+=1)

echo.
if %foundCount%==0 (echo  Ninguno encontrado) else (echo  Encontrados: %foundCount%)
echo.
pause
exit /b

:: ============================================================
:SHOW_PACE
cls
echo.
echo  ========================================
echo     CATEGORIAS PACE
echo  ========================================
echo.

set "paceCount=0"
if exist "%VAULT_PATH%\00 Inbox" (echo  [00] Inbox & set /a paceCount+=1)
if exist "%VAULT_PATH%\01 Proyectos" (echo  [01] Proyectos & set /a paceCount+=1)
if exist "%VAULT_PATH%\02 Areas" (echo  [02] Areas & set /a paceCount+=1)
if exist "%VAULT_PATH%\03 Conexiones - MOCs" (echo  [03] Conexiones & set /a paceCount+=1)
if exist "%VAULT_PATH%\04 Extracciones AI" (echo  [04] Extracciones & set /a paceCount+=1)
if exist "%VAULT_PATH%\05 Archivo" (echo  [05] Archivo & set /a paceCount+=1)
if exist "%VAULT_PATH%\99 Sistema" (echo  [99] Sistema & set /a paceCount+=1)

echo.
if %paceCount%==0 (echo  Ninguna encontrada) else (echo  Total: %paceCount%)
echo.
pause
exit /b
