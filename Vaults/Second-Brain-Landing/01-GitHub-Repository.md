---
title: "GitHub Repository"
aliases: ["Repo", "Código Fuente"]
tags: [github, repository, code, development]
created: 2026-06-10
theme: minimal
accent_color: "#7C3AED"
---

# GitHub Repository

> [!info] Description
> Repositorio oficial del proyecto Second Brain Landing en GitHub.

---

## Repository Info

- **URL**: https://github.com/gpb-codes/second-brain-landing
- **Branch**: main
- **Status**: Active development

---

## Structure

```
second-brain-landing/
├── .gitignore
├── README.md
├── Second-Brain.bat
├── ai-config.json
├── vault-config.txt
├── 00-Master-Dashboard/
├── landing/
├── scripts/
├── skills/
└── Vaults/
```

---

## Key Files

### Configuration Files
- `Second-Brain.bat` - Panel de control principal
- `vault-config.txt` - Configuración de ruta del vault
- `ai-config.json` - Configuración de IAs

### Scripts
- `scripts/second-brain.ps1` - Panel PowerShell principal
- `scripts/backup-vaults.ps1` - Backup de vaults
- `scripts/create-vault.ps1` - Crear nuevos vaults
- `scripts/search-vaults.ps1` - Buscar en vaults

### Landing Page
- `landing/` - Next.js application
- `landing/src/` - Source code
- `landing/package.json` - Dependencies

### Skills
- `skills/github-vault-builder/` - Skill para crear vaults
- `skills/github-vault-builder/SKILL.md` - Documentación principal

---

## Usage

### Clone Repository
```bash
git clone https://github.com/gpb-codes/second-brain-landing.git
```

### Install Dependencies
```bash
cd landing
npm install
```

### Run Landing Page
```bash
npm run dev
```

### Run Panel Control
```batch
Second-Brain.bat
```

---

## References

- [[Second Brain Landing|Main Project]]
- [[Landing Page|Next.js App]]
- [[Panel de Control|PowerShell Scripts]]

---

## Tags

#github #repository #code #development #second-brain
