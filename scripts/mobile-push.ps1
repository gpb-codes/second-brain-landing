# Sync movil - ejecutar desde el PC
# Hace push de cambios para que el movil los descargue

$Date = Get-Date -Format "yyyy-MM-dd HH:mm"
Write-Host "Sync movil: $Date" -ForegroundColor Cyan

Set-Location "D:\vaults\Second-Brain"
git add -A
$changes = git status --porcelain

if ($changes) {
    git commit -m "sync: mobile update $Date"
    git push origin main
    Write-Host "Cambios subidos para movil" -ForegroundColor Green
} else {
    Write-Host "No hay cambios pendientes" -ForegroundColor Yellow
}
