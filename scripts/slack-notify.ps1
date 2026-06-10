# Slack notification for Second Brain
# Requires: SLACK_WEBHOOK_URL environment variable

param(
    [Parameter(Mandatory=$true)]
    [string]$Message,
    [string]$Channel = "#second-brain"
)

$webhookUrl = $env:SLACK_WEBHOOK_URL

if (-not $webhookUrl) {
    Write-Host "Error: SLACK_WEBHOOK_URL no configurado" -ForegroundColor Red
    return
}

$body = @{
    channel = $Channel
    text = $Message
    username = "Second Brain Bot"
    icon_emoji = ":brain:"
} | ConvertTo-Json

Invoke-RestMethod -Uri $webhookUrl -Method Post -Body $body -ContentType "application/json"
Write-Host "Notificacion enviada a Slack" -ForegroundColor Green
