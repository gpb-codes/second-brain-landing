---
title: "Professional Theme"
description: Corporate, serious, formal theme for Obsidian vaults
tags: [theme, professional]
accent_color: "#1e3a5f"
---

# Professional Theme

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Navy Blue | `#1e3a5f` |
| Secondary | Steel Blue | `#4a6fa5` |
| Background | White | `#ffffff` |
| Surface | Light Blue | `#f0f4f8` |
| Border | Blue Gray | `#cbd5e1` |
| Text Primary | Dark Navy | `#0f172a` |
| Text Secondary | Slate | `#475569` |
| Success | Green | `#16a34a` |
| Warning | Amber | `#d97706` |
| Error | Red | `#dc2626` |

## Callout Styles

```markdown
> [!info] Info
> Corporate blue info callout.

> [!tip] Tip
> Professional tip with green accent.

> [!note] Note
> Formal note styling.

> [!warning] Warning
> Amber warning for attention.
```

## Table Style

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
```

Borders: `#cbd5e1`
Header background: `#1e3a5f`
Header text: `#ffffff`

## Code Block Style

```markdown
```language
code here
```
```

Background: `#f0f4f8`
Border: `#cbd5e1`
Border-left: `4px solid #1e3a5f`

## Header Style

```markdown
# Header 1
## Header 2
### Header 3
```

Color: `#0f172a`
Border-bottom: `2px solid #1e3a5f`

## CSS Variables (for Obsidian)

```css
:root {
  --accent-color: #1e3a5f;
  --background-primary: #ffffff;
  --background-secondary: #f0f4f8;
  --background-modifier-border: #cbd5e1;
  --text-normal: #0f172a;
  --text-muted: #475569;
  --text-accent: #1e3a5f;
  --color-success: #16a34a;
  --color-warning: #d97706;
  --color-error: #dc2626;
}
```

## Usage

```
theme: professional
accent_color: "#1e3a5f"
```
