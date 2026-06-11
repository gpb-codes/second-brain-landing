@echo off
title Second Brain - Instalador
color 0A
setlocal enabledelayedexpansion

echo.
echo  ============================================================
echo.
echo       ____   _____
echo      ^|  _ \ ^| ____^|
echo      ^| ^|_) ^|^|  _^|
echo      ^|  __/ ^| ^|___
echo      ^|_^|    ^|_____[
echo.
echo  ============================================================
echo.
echo       INSTALADOR SECOND BRAIN - PACE
echo.
echo  ============================================================
echo.

:: ============================================================
:: Verificar prerrequisitos
:: ============================================================
echo  [1/6] Verificando prerrequisitos...
echo.

:: Verificar Git
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo  [X] Git no encontrado. Instala Git desde https://git-scm.com
    echo.
    pause
    exit /b 1
)
echo  [OK] Git encontrado

:: Verificar Python
where python >nul 2>&1
if %errorlevel% neq 0 (
    echo  [!] Python no encontrado (opcional para emails y QR)
) else (
    echo  [OK] Python encontrado
)

:: Verificar PowerShell
where powershell >nul 2>&1
if %errorlevel% neq 0 (
    echo  [X] PowerShell no encontrado
    pause
    exit /b 1
)
echo  [OK] PowerShell encontrado

echo.
echo  ============================================================
echo.

:: ============================================================
:: Seleccionar destino
:: ============================================================
echo  [2/6] Seleccionando destino...
echo.

set "INSTALL_PATH=%USERPROFILE%\Documents\Second-Brain"
echo  Destino predeterminado: %INSTALL_PATH%
echo.
set /p customPath="  Cambiar ruta? (Enter para mantener): "

if not "%customPath%"=="" (
    if exist "%customPath%" (
        set "INSTALL_PATH=%customPath%"
    ) else (
        echo  [!] Ruta no existe, usando predeterminada
    )
)

echo  [OK] Destino: %INSTALL_PATH%
echo.
echo  ============================================================
echo.

:: ============================================================
:: Clonar repositorio
:: ============================================================
echo  [3/6] Clonando repositorio...
echo.

if exist "%INSTALL_PATH%" (
    echo  [!] La carpeta ya existe
    set /p overwrite="  Sobrescribir? (s/n): "
    if /i "!overwrite!"=="s" (
        rmdir /s /q "%INSTALL_PATH%"
    ) else (
        echo  [X] Instalacion cancelada
        pause
        exit /b 1
    )
)

git clone https://github.com/gpb-codes/second-brain-landing.git "%INSTALL_PATH%"
if %errorlevel% neq 0 (
    echo  [X] Error al clonar el repositorio
    pause
    exit /b 1
)
echo  [OK] Repositorio clonado
echo.
echo  ============================================================
echo.

:: ============================================================
:: Eliminar carpeta landing (no necesaria para el usuario)
:: ============================================================
echo  [4/6] Limpiando archivos innecesarios...
echo.

if exist "%INSTALL_PATH%\landing" (
    rmdir /s /q "%INSTALL_PATH%\landing"
    echo  [OK] Carpeta landing/ eliminada
)

if exist "%INSTALL_PATH%\.github" (
    rmdir /s /q "%INSTALL_PATH%\.github"
    echo  [OK] Carpeta .github/ eliminada
)

echo.
echo  ============================================================
echo.

:: ============================================================
:: Configurar vault
:: ============================================================
echo  [5/6] Configurando vault...
echo.

:: Guardar ruta en vault-config.txt
echo %INSTALL_PATH%> "%INSTALL_PATH%\vault-config.txt"
echo  [OK] Ruta configurada en vault-config.txt

:: Verificar si Obsidian esta instalado
where obsidian >nul 2>&1
if %errorlevel% equ 0 (
    echo  [OK] Obsidian detectado
) else (
    if exist "%LOCALAPPDATA%\Programs\obsidian\Obsidian.exe" (
        echo  [OK] Obsidian detectado
    ) else (
        echo  [!] Obsidian no encontrado - instala desde https://obsidian.md
    )
)

echo.
echo  ============================================================
echo.

:: ============================================================
:: Instalar dependencias de Python (opcional)
:: ============================================================
echo  [6/6] Verificando dependencias Python...
echo.

where python >nul 2>&1
if %errorlevel% equ 0 (
    echo  Instalando dependencias para emails...
    pip install --quiet 2>nul
    echo  [OK] Dependencias verificadas
) else (
    echo  [!] Python no disponible - saltando dependencias
)

echo.
echo  ============================================================
echo.
echo  ========================================
echo     INSTALACION COMPLETADA
echo  ========================================
echo.
echo  Ruta: %INSTALL_PATH%
echo.
echo  Siguientes pasos:
echo.
echo    1. Abre Obsidian y selecciona la carpeta
echo       "%INSTALL_PATH%"
echo.
echo    2. Ejecuta Second-Brain.bat para abrir
echo       el panel de control
echo.
echo    3. Explora los 5 vaults de demo:
echo       - DevOps-Vault
echo       - Branding-Vault
echo       - Learning-Vault
echo       - Finanzas-Vault
echo       - Salud-Vault
echo.
echo  ========================================
echo.

:: Abrir Obsidian si esta instalado
set /p openObsidian="  Abrir Obsidian ahora? (s/n): "
if /i "%openObsidian%"=="s" (
    start obsidian://open?vault=Second-Brain
)

:: Abrir carpeta
explorer "%INSTALL_PATH%"

echo.
echo  ¡Disfruta tu segundo cerebro!
echo.
pause
