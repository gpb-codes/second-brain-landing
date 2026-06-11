# Assistant Detection Script
# This script detects which AI assistant is available

# Check for OpenCode
$opencodePath = Get-Command opencode -ErrorAction SilentlyContinue
if ($opencodePath) {
    Write-Host "[OK] OpenCode detected: $($opencodePath.Source)" -ForegroundColor Green
    $script:AssistanteName = "opencode"
    $script:PromptCommand = "opencode --prompt"
}

# Check for Claude CLI
$claudePath = Get-Command claude -ErrorAction SilentlyContinue
if ($claudePath) {
    Write-Host "[OK] Claude CLI detected: $($claudePath.Source)" -ForegroundColor Green
    if (-not $script:AssistanteName) {
        $script:AssistanteName = "claude"
        $script:PromptCommand = "claude -p"
    }
}

# Check for Claude API key (Anthropic)
$anthropicKey = $env:ANTHROPIC_API_KEY
if ($anthropicKey) {
    Write-Host "[OK] Anthropic API key detected" -ForegroundColor Green
    if (-not $script:AssistanteName) {
        $script:AssistanteName = "claude"
        $script:PromptCommand = "claude -p"
    }
}

# Check for OpenAI API key (for ChatGPT)
$openaiKey = $env:OPENAI_API_KEY
if ($openaiKey) {
    Write-Host "[OK] OpenAI API key detected" -ForegroundColor Green
}

# Check for Google API key (for Gemini)
$googleKey = $env:GOOGLE_API_KEY
if ($googleKey) {
    Write-Host "[OK] Google API key detected" -ForegroundColor Green
}

# Summary
if ($script:AssistanteName) {
    Write-Host ""
    Write-Host "Primary assistant: $($script:AssistanteName.ToUpper())" -ForegroundColor Cyan
    Write-Host "Prompt command: $($script:PromptCommand)" -ForegroundColor Gray
} else {
    Write-Host ""
    Write-Host "[WARNING] No compatible assistant detected" -ForegroundColor Yellow
    Write-Host "Install OpenCode or Claude CLI for full functionality" -ForegroundColor Yellow
}

# Export for use by other scripts
$script:AssistanteName
