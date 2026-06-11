# GitHub Actions - Workflows

## Workflow Básico

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
          node-version: '20'
      - run: npm ci
      - run: npm test
      - run: npm run build
```

## Best Practices

1. **Cache dependencies** - Usar actions/cache para node_modules
2. **Matrix builds** - Probar en múltiples OS/versions
3. **Secrets management** - Nunca hardcodear tokens
4. **Reusable workflows** - Crear templates para proyectos similares
5. **Status badges** - Agregar badges al README

## Templates Comunes

### Deploy a Cloudflare Pages
```yaml
- name: Deploy to Cloudflare
  uses: cloudflare/wrangler-action@v3
  with:
    apiToken: ${{ secrets.CF_API_TOKEN }}
    command: pages deploy out --project-name my-project
```

### Notificaciones
```yaml
- name: Notify Discord
  if: success()
  uses: Ilshidur/discord-notify@master
  with:
    webhook: ${{ secrets.DISCORD_WEBHOOK }}
    message: 'Deploy completado!'
```

---

*Tags: #github-actions #ci-cd #automation*
