---
title: "Second Brain Landing"
aliases: ["Second Brain", "Landing Page"]
tags: [second-brain, landing, project, obsidian]
created: 2026-06-10
theme: minimal
accent_color: "#7C3AED"
---

# Second Brain Landing

> [!info] Description
> Proyecto de landing page y panel de control para Second Brain - Sistema de gestión de conocimiento personal con soporte para múltiples IAs.

---

## Overview

Second Brain Landing es un sistema completo para crear y gestionar un "segundo cerebro" digital. Incluye:

- **Landing page** moderna con Next.js
- **Panel de control** interactivo con PowerShell
- **Skills** para OpenCode y Claude
- **Soporte múltiples IAs** (OpenCode, Claude, Grok, ChatGPT, Copilot, Gemini, NotebookLM)

---

## Components

### Stats Card
- Vault: Second-Brain-Landing
- Archivos: En desarrollo
- Última actualización: 2026-06-10

### Quick Links
- [[GitHub Repository]]
- [[Landing Page]]
- [[Panel de Control]]
- [[Skills]]

---

## Structure

```
Second-Brain-Landing/
├── landing/              # Next.js landing page
│   ├── src/             # Código fuente
│   ├── public/          # Assets estáticos
│   └── package.json     # Dependencias
├── scripts/             # Scripts de PowerShell
│   ├── second-brain.ps1 # Panel principal
│   └── ...              # Otros scripts
├── skills/              # Skills para IAs
│   └── github-vault-builder/
│       ├── SKILL.md     # Skill principal
│       └── ...          # Otros archivos
├── Vaults/              # Vaults de Obsidian
│   └── Second-Brain-Landing/ # Este vault
└── Second-Brain.bat     # Archivo principal
```

---

## Features

### Landing Page
- Framework: Next.js 14
- Estilo: Moderno, responsive
- Componentes: Hero, Features, CTA

### Panel de Control
- Opciones: Dashboard, Búsqueda, Estadísticas
- IAs: Soporte para 7 asistentes
- Configuración: Rutas, IAs, Temas

### Skills
- **github-vault-builder**: Crea vaults desde repos de GitHub
- Compatible con: OpenCode y Claude
- Detección automática de asistente

### Multi-AI Support
1. OpenCode
2. Claude
3. Grok
4. NotebookLM
5. ChatGPT
6. Copilot
7. Gemini

Modos de trabajo:
- Individual: Una IA a la vez
- Tandem: 2 IAs trabajan juntas
- Equipo: Todas las IAs colaboran

---

## Configuration

### Ruta del Vault
- Configurar con `[5]` en el menú batch
- O con `[S]` en el panel PowerShell
- Se guarda en `vault-config.txt`

### IAs
- Configurar con `[8]` en el menú batch
- O con `[Y]` en el panel PowerShell
- Se guarda en `ai-config.json`

---

## Development

### Requisitos
- Node.js 18+
- PowerShell 5.1+
- Git

### Instalación
```bash
git clone https://github.com/gpb-codes/second-brain-landing.git
cd second-brain-landing
npm install
```

### Uso
```batch
# Ejecutar panel de control
Second-Brain.bat

# Ejecutar landing page
cd landing
npm run dev
```

---

## References

- [[GitHub Repository|GitHub]]
- [[Landing Page|Next.js App]]
- [[Panel de Control|PowerShell Scripts]]
- [[Skills|AI Skills]]

---

## Tags

#second-brain #landing #project #obsidian #nextjs #powershell #ai #opencode #claude
