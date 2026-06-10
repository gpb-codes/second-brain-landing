---
title: "Comandos Git Utiles"
tags: [git, comandos, documentacion]
created: 2026-06-10
---

# Comandos Git Utiles

## Branches
```bash
git checkout -b feature/nueva-funcionalidad
git branch -d feature/antigua
git branch -a
```

## Stash
```bash
git stash push -m "cambios pendientes"
git stash list
git stash pop
```

## Log
```bash
git log --oneline --graph
git log --author="Juan"
```
