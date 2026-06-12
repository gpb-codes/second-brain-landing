---
title: "Minimal Theme"
description: Clean, minimal color theme for Obsidian vaults
tags: [theme, minimal]
accent_color: "#6b7280"
---

# Minimal Theme

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Gray | `#6b7280` |
| Secondary | Light Gray | `#9ca3af` |
| Background | White | `#ffffff` |
| Surface | Off-white | `#f9fafb` |
| Border | Light Gray | `#e5e7eb` |
| Text Primary | Dark Gray | `#111827` |
| Text Secondary | Gray | `#6b7280` |

## Callout Styles

```markdown
> [!info] Info
> Clean, minimal info callout.

> [!tip] Tip
> Clean, minimal tip callout.

> [!note] Note
> Clean, minimal note callout.

> [!warning] Warning
> Clean, minimal warning callout.
```

## Table Style

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
```

Borders: Subtle gray `#e5e7eb`
Header background: `#f9fafb`

## Code Block Style

```markdown
```language
code here
```
```

Background: `#f9fafb`
Border: `#e5e7eb`

## Header Style

```markdown
# Header 1
## Header 2
### Header 3
```

Color: `#111827`
Border-bottom: `1px solid #e5e7eb`

## CSS Variables (for Obsidian)

```css
:root {
  --accent-color: #6b7280;
  --background-primary: #ffffff;
  --background-secondary: #f9fafb;
  --background-modifier-border: #e5e7eb;
  --text-normal: #111827;
  --text-muted: #6b7280;
  --text-accent: #6b7280;
}
```

## Usage

```
theme: minimal
accent_color: "#6b7280"
```
