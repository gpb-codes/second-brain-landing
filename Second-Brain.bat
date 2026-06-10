@echo off
title SECOND BRAIN - Neural Control Panel
color 0D

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
echo   [1] Panel de Control        [3] Abrir Obsidian
echo   [2] OpenCode + Skill        [4] Abrir Carpeta
echo.
echo   ============================================================
echo.

set /p choice="  Selecciona: "

if "%choice%"=="1" (
    powershell -ExecutionPolicy Bypass -NoProfile -File "%~dp0scripts\second-brain.ps1" -VaultsPath %~dp0
) else if "%choice%"=="2" (
    echo.
    echo   Abriendo OpenCode con skill...
    echo.
    cd /d "%~dp0"
    opencode
) else if "%choice%"=="3" (
    start obsidian://open?vault=Second-Brain
) else if "%choice%"=="4" (
    explorer "%~dp0"
) else (
    echo.
    echo   Opcion no valida.
    pause
)
