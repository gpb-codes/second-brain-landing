---
title: "GitHub Actions"
tags: [github, actions, ci-cd, devops]
created: 2026-06-11
---

# GitHub Actions

> [!info] CI/CD automatizado
> Pipelines de integracion y despliegue continuo.

---

## Estructura Basica

```yaml
name: CI Pipeline
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
```

## Templates Comunes

| Template | Uso |
|----------|-----|
| `actions/checkout@v4` | Clonar repo |
| `actions/setup-node@v4` | Configurar Node.js |
| `actions/setup-python@v5` | Configurar Python |
| `docker/build-push-action` | Build y push Docker |

## Ejemplo: Deploy a Vercel

```yaml
- name: Deploy to Vercel
  uses: amondnet/vercel-action@v25
  with:
    vercel-token: ${{ secrets.VERCEL_TOKEN }}
    vercel-org-id: ${{ secrets.ORG_ID }}
```
