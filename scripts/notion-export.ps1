# Export vault to Notion-style markdown
# This creates compatible markdown for Notion import

$VaultPath = "D:\vaults\Second-Brain\Vaults"
$ExportPath = "D:\Exports\Notion"

if (-not (Test-Path $ExportPath)) {
    New-Item -ItemType Directory -Path $ExportPath -Force | Out-Null
}

$vaults = Get-ChildItem -Path $VaultPath -Directory
foreach ($vault in $vaults) {
    Write-Host "Exporting: $($vault.Name)" -ForegroundColor Cyan
    $dest = Join-Path $ExportPath $vault.Name
    Copy-Item -Path $vault.FullName -Destination $dest -Recurse -Force
}

Write-Host "Exportado a: $ExportPath" -ForegroundColor Green
