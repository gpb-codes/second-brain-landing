---
title: "Colorful Theme"
description: Vibrant, eye-catching, dynamic theme for Obsidian vaults
tags: [theme, colorful]
accent_color: "#8b5cf6"
---

# Colorful Theme

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Violet | `#8b5cf6` |
| Secondary | Blue | `#3b82f6` |
| Accent 1 | Pink | `#ec4899` |
| Accent 2 | Teal | `#14b8a6` |
| Accent 3 | Orange | `#f97316` |
| Background | White | `#ffffff` |
| Surface | Light Violet | `#faf5ff` |
| Border | Light Purple | `#e9d5ff` |
| Text Primary | Dark Purple | `#1e1b4b` |
| Text Secondary | Purple | `#6b21a8` |

## Callout Styles

```markdown
> [!info] Info
> Vibrant blue info callout.

> [!tip] Tip
> Teal tip with gradient feel.

> [!note] Note
> Purple note styling.

> [!warning] Warning
> Orange warning for attention.
```

## Table Style

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
```

Borders: `#e9d5ff`
Header background: Gradient `#8b5cf6` to `#3b82f6`
Header text: `#ffffff`

## Code Block Style

```markdown
```language
code here
```
```

Background: `#faf5ff`
Border: `#e9d5ff`
Border-left: `4px solid #8b5cf6`

## Header Style

```markdown
# Header 1
## Header 2
### Header 3
```

Color: `#1e1b4b`
Border-bottom: `3px solid` gradient

## CSS Variables (for Obsidian)

```css
:root {
  --accent-color: #8b5cf6;
  --background-primary: #ffffff;
  --background-secondary: #faf5ff;
  --background-modifier-border: #e9d5ff;
  --text-normal: #1e1b4b;
  --text-muted: #6b21a8;
  --text-accent: #8b5cf6;
  --color-blue: #3b82f6;
  --color-pink: #ec4899;
  --color-teal: #14b8a6;
  --color-orange: #f97316;
}
```

## Usage

```
theme: colorful
accent_color: "#8b5cf6"
```
