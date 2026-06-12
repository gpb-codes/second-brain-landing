---
title: "Quick Links Component"
description: HTML/MD component for navigation links
tags: [component, links]
---

# Quick Links Component

## Usage

Insert this component for快速 navigation between sections.

## Grid Version (Markdown)

```markdown
## Quick Links

| Section | Description |
|---------|-------------|
| [[Dashboard]] | Panel principal |
| [[Architecture]] | Arquitectura del proyecto |
| [[Code-Snippets]] | Codigo reutilizable |
| [[Tools]] | Herramientas y dependencias |
| [[Guides]] | Guias y tutoriales |
```

## HTML Grid Version (Obsidian)

```html
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin: 16px 0;">
  <a href="#dashboard" style="display: block; background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-decoration: none; color: var(--text-normal); transition: all 0.2s;">
    <div style="font-weight: bold; margin-bottom: 4px;">Dashboard</div>
    <div style="color: var(--text-muted); font-size: 0.85em;">Panel principal</div>
  </a>
  <a href="#architecture" style="display: block; background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-decoration: none; color: var(--text-normal); transition: all 0.2s;">
    <div style="font-weight: bold; margin-bottom: 4px;">Architecture</div>
    <div style="color: var(--text-muted); font-size: 0.85em;">Arquitectura del proyecto</div>
  </a>
  <a href="#code" style="display: block; background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-decoration: none; color: var(--text-normal); transition: all 0.2s;">
    <div style="font-weight: bold; margin-bottom: 4px;">Code Snippets</div>
    <div style="color: var(--text-muted); font-size: 0.85em;">Codigo reutilizable</div>
  </a>
  <a href="#tools" style="display: block; background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 16px; text-decoration: none; color: var(--text-normal); transition: all 0.2s;">
    <div style="font-weight: bold; margin-bottom: 4px;">Tools</div>
    <div style="color: var(--text-muted); font-size: 0.85em;">Herramientas y dependencias</div>
  </a>
</div>
```

## List Version

```markdown
## Quick Links

- [[Dashboard]] - Panel principal
- [[Architecture]] - Arquitectura del proyecto
- [[Code-Snippets]] - Codigo reutilizable
- [[Tools]] - Herramientas y dependencias
- [[Guides]] - Guias y tutoriales
```

## Customization

Adjust grid columns by changing `minmax(200px, 1fr)`:
- `minmax(150px, 1fr)` = 4+ columns
- `minmax(200px, 1fr)` = 3 columns
- `minmax(300px, 1fr)` = 2 columns
