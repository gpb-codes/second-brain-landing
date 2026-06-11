---
title: "Template para Nuevo Vault"
aliases: [template, plantilla, new-vault]
tags: [second-brain, template]
created: 2026-06-09
---

# Template para Nuevo Vault

> [!info] Plantilla estándar
> Usa esta plantilla al crear un nuevo vault. Copiar y personalizar.

---

## Estructura Mínima

```
📁 {Nombre-Vault}
├── 00-Dashboard/
│   └── Dashboard.md
├── 01-Overview/
│   └── Overview.md
├── 02-{Categoria}/
│   └── {Topico}.md
├── 99-Resources/
│   └── References.md
└── README.md
```

---

## Frontmatter Mínimo

```yaml
---
title: "{Título}"
aliases: [nombre-alternativo]
tags: [categoria, subcategoria]
created: YYYY-MM-DD
---
```

---

## Archivo Obligatorio: Dashboard.md

```markdown
---
title: "Dashboard - {Vault Name}"
aliases: [dashboard]
tags: [{vault-tag}, dashboard]
created: YYYY-MM-DD
---

# Dashboard - {Vault Name}

> [!info] Descripción breve
> Qué cubre este vault.

---

## Navegación

- [[Overview]] - Introducción
- [[Topico-1]] - Tema principal
- [[Topico-2]] - Tema secundario
```

---

## Checklist al Crear Vault

- [ ] Crear carpeta en `D:\vaults\`
- [ ] Crear `00-Dashboard/Dashboard.md` con frontmatter
- [ ] Agregar mínimo 3 archivos .md
- [ ] Usar wikilinks `[[nombre]]` para conectar notas
- [ ] Ejecutar `.\scripts\update-index.ps1` para actualizar Second Brain
- [ ] Push a GitHub

---

## Después de Crear

1. Ejecutar update script:
   ```powershell
   cd D:\vaults\Second-Brain
   .\scripts\update-index.ps1
   ```

2. Verificar que el vault aparece en [[Dashboard]]

3. Crear cross-links en [[Cross-Links]]

---

## Referencias

- [[Dashboard]] - Panel del Second Brain
- [[Index]] - Índice de vaults
