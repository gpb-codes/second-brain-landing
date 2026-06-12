---
title: "Dark Theme"
description: Dark, modern, tech theme for Obsidian vaults
tags: [theme, dark]
accent_color: "#06b6d4"
---

# Dark Theme

## Color Palette

| Element | Color | Hex |
|---------|-------|-----|
| Primary | Cyan | `#06b6d4` |
| Secondary | Blue | `#3b82f6` |
| Accent 1 | Neon Green | `#22c55e` |
| Accent 2 | Magenta | `#d946ef` |
| Background | Dark | `#0f172a` |
| Surface | Dark Gray | `#1e293b` |
| Border | Slate | `#334155` |
| Text Primary | White | `#f1f5f9` |
| Text Secondary | Gray | `#94a3b8` |

## Callout Styles

```markdown
> [!info] Info
> Cyan info on dark background.

> [!tip] Tip
> Green tip with glow effect.

> [!note] Note
> Blue note styling.

> [!warning] Warning
> Magenta warning for attention.
```

## Table Style

```markdown
| Header 1 | Header 2 | Header 3 |
|----------|----------|----------|
| Cell 1   | Cell 2   | Cell 3   |
```

Borders: `#334155`
Header background: `#1e293b`
Header text: `#06b6d4`

## Code Block Style

```markdown
```language
code here
```
```

Background: `#1e293b`
Border: `#334155`
Border-left: `4px solid #06b6d4`

## Header Style

```markdown
# Header 1
## Header 2
### Header 3
```

Color: `#f1f5f9`
Border-bottom: `2px solid #06b6d4`

## CSS Variables (for Obsidian)

```css
:root {
  --accent-color: #06b6d4;
  --background-primary: #0f172a;
  --background-secondary: #1e293b;
  --background-modifier-border: #334155;
  --text-normal: #f1f5f9;
  --text-muted: #94a3b8;
  --text-accent: #06b6d4;
  --color-green: #22c55e;
  --color-magenta: #d946ef;
}
```

## Usage

```
theme: dark
accent_color: "#06b6d4"
```
