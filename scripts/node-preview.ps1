<#
.SYNOPSIS
    Generador de vista previa de nodos personalizable.
.DESCRIPTION
    Crea visualizaciones personalizadas del grafo de conocimiento.
.EXAMPLE
    .\node-preview.ps1 -Style "minimal"
    .\node-preview.ps1 -Style "colorful" -Focus "Acceso-Remoto-PC"
    .\node-preview.ps1 -Style "dark" -Export
#>

param(
    [ValidateSet("minimal", "colorful", "dark", "professional", "neon")]
    [string]$Style = "minimal",
    [string]$VaultsPath = "D:\vaults\Second-Brain\Vaults",
    [string]$Focus,
    [switch]$Export,
    [int]$Depth = 2
)

$Date = Get-Date -Format "yyyy-MM-dd"

Write-Host "=== Node Preview Generator ===" -ForegroundColor Cyan
Write-Host "Estilo: $Style" -ForegroundColor Gray
Write-Host ""

# Colores por estilo
$themes = @{
    minimal = @{
        NodeColor = "#6b7280"
        LineColor = "#9ca3af"
        BgColor = "#ffffff"
        TextColor = "#111827"
        AccentColor = "#3b82f6"
    }
    colorful = @{
        NodeColor = "#8b5cf6"
        LineColor = "#a78bfa"
        BgColor = "#faf5ff"
        TextColor = "#1e1b4b"
        AccentColor = "#ec4899"
    }
    dark = @{
        NodeColor = "#06b6d4"
        LineColor = "#22d3ee"
        BgColor = "#0f172a"
        TextColor = "#f1f5f9"
        AccentColor = "#8b5cf6"
    }
    professional = @{
        NodeColor = "#1e3a5f"
        LineColor = "#4a6fa5"
        BgColor = "#ffffff"
        TextColor = "#0f172a"
        AccentColor = "#16a34a"
    }
    neon = @{
        NodeColor = "#22c55e"
        LineColor = "#4ade80"
        BgColor = "#000000"
        TextColor = "#ffffff"
        AccentColor = "#f97316"
    }
}

$theme = $themes[$Style]

# Obtener vaults
$vaultDirs = Get-ChildItem -Path $VaultsPath -Directory -ErrorAction SilentlyContinue

# Construir nodos
$nodes = @()
$edges = @()

foreach ($vault in $vaultDirs) {
    $vaultName = $vault.Name
    $mdFiles = Get-ChildItem -Path $vault.FullName -Recurse -Filter "*.md" -File |
        Where-Object { $_.FullName -notmatch '\\\.obsidian\\' }
    
    $nodes += [PSCustomObject]@{
        Id = $vaultName
        Label = $vaultName
        Size = $mdFiles.Count
        Type = "vault"
    }
    
    # Obtener carpetas como sub-nodos
    $subDirs = Get-ChildItem -Path $vault.FullName -Directory |
        Where-Object { $_.Name -notin @('.obsidian', '.git', 'node_modules') }
    
    foreach ($sub in $subDirs) {
        $subFiles = (Get-ChildItem -Path $sub.FullName -Filter "*.md" -File).Count
        $nodes += [PSCustomObject]@{
            Id = "$vaultName/$($sub.Name)"
            Label = $sub.Name
            Size = $subFiles
            Type = "folder"
            Parent = $vaultName
        }
        
        $edges += [PSCustomObject]@{
            From = $vaultName
            To = "$vaultName/$($sub.Name)"
        }
    }
}

# Generar Mermaid diagram
$mermaid = "graph TD`n"

# Estilos
$mermaid += "    classDef vault fill:$($theme.NodeColor),stroke:$($theme.LineColor),color:$($theme.TextColor)`n"
$mermaid += "    classDef folder fill:$($theme.AccentColor),stroke:$($theme.LineColor),color:white`n"
$mermaid += "`n"

foreach ($node in $nodes) {
    if ($node.Type -eq "vault") {
        $mermaid += "    $($node.Id)[\"$($node.Label)<br/>$($node.Size) archivos\"]:::vault`n"
    } else {
        $shortLabel = $node.Label
        if ($shortLabel.Length -gt 15) { $shortLabel = $shortLabel.Substring(0, 12) + "..." }
        $mermaid += "    $($node.Id -replace '/', '_')[\"$shortLabel<br/>$($node.Size) files\"]:::folder`n"
    }
}

foreach ($edge in $edges) {
    $fromId = $edge.From -replace '/', '_'
    $toId = $edge.To -replace '/', '_'
    $mermaid += "    $fromId --> $toId`n"
}

# Generar HTML personalizado
$html = @"
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Second Brain - Node Preview ($Style)</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: $($theme.BgColor);
            color: $($theme.TextColor);
            margin: 0;
            padding: 20px;
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .header h1 {
            color: $($theme.NodeColor);
            margin-bottom: 10px;
        }
        .controls {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
            flex-wrap: wrap;
        }
        .controls button {
            padding: 8px 16px;
            border: 2px solid $($theme.NodeColor);
            background: transparent;
            color: $($theme.NodeColor);
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            transition: all 0.3s;
        }
        .controls button:hover, .controls button.active {
            background: $($theme.NodeColor);
            color: white;
        }
        .graph-container {
            background: $($theme.BgColor);
            border: 2px solid $($theme.LineColor);
            border-radius: 16px;
            padding: 20px;
            margin: 0 auto;
            max-width: 1200px;
        }
        .stats {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .stat {
            background: $($theme.NodeColor);
            color: white;
            padding: 12px 24px;
            border-radius: 12px;
            text-align: center;
        }
        .stat-value {
            font-size: 24px;
            font-weight: bold;
        }
        .stat-label {
            font-size: 12px;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Second Brain - Node Preview</h1>
        <p>Estilo: <strong>$Style</strong> | Generado: $Date</p>
    </div>
    
    <div class="controls">
        <button onclick="changeStyle('minimal')" $(if($Style -eq 'minimal'){'class="active"'})>Minimal</button>
        <button onclick="changeStyle('colorful')" $(if($Style -eq 'colorful'){'class="active"'})>Colorful</button>
        <button onclick="changeStyle('dark')" $(if($Style -eq 'dark'){'class="active"'})>Dark</button>
        <button onclick="changeStyle('professional')" $(if($Style -eq 'professional'){'class="active"'})>Professional</button>
        <button onclick="changeStyle('neon')" $(if($Style -eq 'neon'){'class="active"'})>Neon</button>
    </div>
    
    <div class="graph-container">
        <div class="mermaid">
$mermaid
        </div>
    </div>
    
    <div class="stats">
        <div class="stat">
            <div class="stat-value">$($vaultDirs.Count)</div>
            <div class="stat-label">Vaults</div>
        </div>
        <div class="stat">
            <div class="stat-value">$($nodes.Count)</div>
            <div class="stat-label">Nodos</div>
        </div>
        <div class="stat">
            <div class="stat-value">$($edges.Count)</div>
            <div class="stat-label">Conexiones</div>
        </div>
    </div>
    
    <script>
        mermaid.initialize({ 
            startOnLoad: true,
            theme: 'default',
            flowchart: { useMaxWidth: true }
        });
        
        function changeStyle(style) {
            window.location.href = '?style=' + style;
        }
    </script>
</body>
</html>
"@

# Guardar
$outputDir = Join-Path (Split-Path $VaultsPath -Parent) "04-Cross-Links"
if (-not (Test-Path $outputDir)) {
    New-Item -ItemType Directory -Path $outputDir -Force | Out-Null
}

$htmlFile = Join-Path $outputDir "Node-Preview-$Style.html"
Set-Content -Path $htmlFile -Value $html -Encoding UTF8

Write-Host "Vista previa generada:" -ForegroundColor Green
Write-Host "  Estilo: $Style" -ForegroundColor White
Write-Host "  Nodos: $($nodes.Count)" -ForegroundColor White
Write-Host "  Conexiones: $($edges.Count)" -ForegroundColor White
Write-Host "  Archivo: $htmlFile" -ForegroundColor Gray

# Exportar Mermaid si se solicita
if ($Export) {
    $mermaidFile = Join-Path $outputDir "Node-Preview-$Style.mmd"
    Set-Content -Path $mermaidFile -Value $mermaid -Encoding UTF8
    Write-Host "  Mermaid: $mermaidFile" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=== Generacion Completada ===" -ForegroundColor Green
