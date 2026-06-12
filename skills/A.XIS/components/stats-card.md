---
title: "Stats Card Component"
description: HTML/MD component for displaying vault metrics
tags: [component, stats]
---

# Stats Card Component

## Usage

Insert this component in dashboards to show key metrics.

## Basic Version (Markdown)

```markdown
> [!abstract] Stats
> **Vaults:** {vault-count} | **Files:** {file-count} | **Last Update:** {date}
```

## HTML Version (Obsidian)

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin: 16px 0;">
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-align: center;">
    <div style="font-size: 2em; font-weight: bold; color: var(--text-accent);">{vault-count}</div>
    <div style="color: var(--text-muted); font-size: 0.9em;">Vaults</div>
  </div>
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-align: center;">
    <div style="font-size: 2em; font-weight: bold; color: var(--text-accent);">{file-count}</div>
    <div style="color: var(--text-muted); font-size: 0.9em;">Files</div>
  </div>
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-align: center;">
    <div style="font-size: 2em; font-weight: bold; color: var(--text-accent);">{repo-count}</div>
    <div style="color: var(--text-muted); font-size: 0.9em;">Repos</div>
  </div>
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-align: center;">
    <div style="font-size: 2em; font-weight: bold; color: var(--text-accent);">{date}</div>
    <div style="color: var(--text-muted); font-size: 0.9em;">Last Update</div>
  </div>
</div>
```

## Table Version

```markdown
| Metric | Value |
|--------|-------|
| Vaults | {vault-count} |
| Files | {file-count} |
| Repos Analyzed | {repo-count} |
| Last Update | {date} |
```

## Custom Colors

Replace `{color}` with theme accent color:

```html
<div style="color: {color}; font-weight: bold;">{value}</div>
```
