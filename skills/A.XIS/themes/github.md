---
title: "GitHub Theme"
description: GitHub-style theme for Obsidian vaults
tags: [theme, github]
accent_color: "#0969da"
---

# GitHub Theme

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | GitHub Blue | `#0969da` |
| Secondary | GitHub Purple | `#8250df` |
| Success | Green | `#1a7f37` |
| Warning | Orange | `#9a6700` |
| Danger | Red | `#cf222e` |
| Background | White | `#ffffff` |
| Surface | Gray | `#f6f8fa` |
| Border | Gray | `#d0d7de` |
| Text Primary | Black | `#1f2328` |
| Text Secondary | Gray | `#656d76` |
| Link | Blue | `#0969da` |

## Callout Styles (GitHub-flavored)

```markdown
> [!INFO]
> GitHub-style info callout (blue).

> [!TIP]
> GitHub-style tip callout (green).

> [!NOTE]
> GitHub-style note callout (purple).

> [!WARNING]
> GitHub-style warning callout (orange).

> [!CAUTION]
> GitHub-style caution callout (red).
```

## Table Style

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
```

Borders: `#d0d7de`
Header background: `#f6f8fa`
Header text: `#1f2328`

## Code Block Style

```markdown
```language
code here
```
```

Background: `#f6f8fa`
Border: `#d0d7de`
Border-radius: `6px`

## Header Style

```markdown
# Header 1
## Header 2
### Header 3
```

Color: `#1f2328`
Border-bottom: `1px solid #d0d7de`

## Badge Style

```markdown
![Stars](https://img.shields.io/badge/stars-{count}-yellow?style=flat-square)
![Language](https://img.shields.io/badge/language-{lang}-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-{status}-green?style=flat-square)
```

## CSS Variables (for Obsidian)

```css
:root {
  --accent-color: #0969da;
  --background-primary: #ffffff;
  --background-secondary: #f6f8fa;
  --background-modifier-border: #d0d7de;
  --text-normal: #1f2328;
  --text-muted: #656d76;
  --text-accent: #0969da;
  --color-success: #1a7f37;
  --color-warning: #9a6700;
  --color-danger: #cf222e;
  --color-purple: #8250df;
}
```

## Usage

```
theme: github
accent_color: "#0969da"
```
