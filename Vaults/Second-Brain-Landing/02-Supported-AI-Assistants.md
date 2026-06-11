---
title: "Supported AI Assistants"
aliases: ["IAs", "Asistentes IA"]
tags: [ai, assistants, opencode, claude, chatgpt, grok, gemini, copilot, notebooklm]
created: 2026-06-10
theme: minimal
accent_color: "#7C3AED"
---

# Supported AI Assistants

> [!info] Description
> Lista completa de asistentes de inteligencia artificial soportados en Second Brain.

---

## Overview

Second Brain soporta múltiples asistentes de IA que pueden trabajar:
- **Individual**: Una IA a la vez
- **Tandem**: 2 IAs trabajan juntas
- **Equipo**: Todas las IAs colaboran

---

## Supported Assistants

### 1. OpenCode
- **Command**: `opencode`
- **Args**: `--prompt`
- **Description**: Asistente de código OpenCode
- **Status**: ✅ Primary

```bash
opencode --prompt "Your prompt here"
```

### 2. Claude
- **Command**: `claude`
- **Args**: `-p`
- **Description**: Claude de Anthropic
- **Status**: ✅ Supported

```bash
claude -p "Your prompt here"
```

### 3. Grok
- **Command**: `grok`
- **Args**: `--ask`
- **Description**: Grok de xAI
- **Status**: 🔜 Planned

```bash
grok --ask "Your prompt here"
```

### 4. NotebookLM
- **Command**: `notebooklm`
- **Args**: []
- **Description**: Google NotebookLM
- **Status**: 🔜 Planned

### 5. ChatGPT
- **Command**: `chatgpt`
- **Args**: `--prompt`
- **Description**: OpenAI ChatGPT
- **Status**: 🔜 Planned

```bash
chatgpt --prompt "Your prompt here"
```

### 6. Copilot
- **Command**: `copilot`
- **Args**: `--ask`
- **Description**: GitHub Copilot
- **Status**: 🔜 Planned

```bash
copilot --ask "Your prompt here"
```

### 7. Gemini
- **Command**: `gemini`
- **Args**: `--prompt`
- **Description**: Google Gemini
- **Status**: 🔜 Planned

```bash
gemini --prompt "Your prompt here"
```

---

## Configuration

### From Panel Control (PowerShell)
1. Press `[Y]` - Configurar IAs
2. Select assistants with numbers 1-7
3. Choose work mode:
   - `[T]` Individual
   - `[U]` Tandem
   - `[E]` Team

### From Batch File
1. Press `[8]` - Configurar IAs
2. Follow menu options

### Configuration File
- Location: `ai-config.json`
- Contains: Assistant settings, work mode, preferences

---

## Work Modes

### Individual Mode
- One assistant processes at a time
- Fastest response
- Best for simple tasks

### Tandem Mode
- Two assistants work together
- More comprehensive analysis
- Good for complex tasks

### Team Mode
- All enabled assistants collaborate
- Most thorough analysis
- Best for research and planning

---

## Examples

### With OpenCode
```bash
opencode --prompt "Analyze GitHub repository https://github.com/facebook/react"
```

### With Claude
```bash
claude -p "Analyze GitHub repository https://github.com/facebook/react"
```

### In Tandem
```bash
# Both assistants analyze the same prompt
opencode --prompt "Analyze React patterns"
claude -p "Analyze React patterns"
```

---

## References

- [[Second Brain Landing|Main Project]]
- [[GitHub Repository|Source Code]]
- [[Panel de Control|Configuration]]

---

## Tags

#ai #assistants #opencode #claude #chatgpt #grok #gemini #copilot #notebooklm
