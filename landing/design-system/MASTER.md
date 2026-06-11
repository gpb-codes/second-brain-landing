# Second Brain - Design System

## Overview

This document defines the design system for the Second Brain landing page, generated using ui-ux-pro-max skill.

## Design Tokens

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--color-background` | `#020617` | Main background (slate-950) |
| `--color-foreground` | `#F8FAFC` | Main text (slate-50) |
| `--color-primary` | `#8B5CF6` | Primary actions (violet-500) |
| `--color-secondary` | `#3B82F6` | Secondary actions (blue-500) |
| `--color-accent` | `#22C55E` | Success/positive (green-500) |
| `--color-muted` | `#1E293B` | Muted backgrounds (slate-800) |
| `--color-border` | `rgba(255, 255, 255, 0.1)` | Subtle borders |
| `--color-glass` | `rgba(255, 255, 255, 0.05)` | Glass backgrounds |

### Typography

| Font | Weight | Usage |
|------|--------|-------|
| **Poppins** | 400, 500, 600, 700 | Headings |
| **Open Sans** | 300, 400, 500, 600, 700 | Body text |

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700&display=swap');
```

### Effects

| Effect | Value | Usage |
|--------|-------|-------|
| **Glass Blur** | `backdrop-filter: blur(16px)` | Cards, navigation |
| **Border** | `1px solid rgba(255, 255, 255, 0.1)` | Glass cards |
| **Shadow** | `0 8px 32px rgba(0, 0, 0, 0.3)` | Card depth |
| **Glow Primary** | `0 0 20px rgba(139, 92, 246, 0.4)` | Primary CTA hover |
| **Glow Secondary** | `0 0 20px rgba(59, 130, 246, 0.4)` | Secondary CTA hover |
| **Glow Accent** | `0 0 20px rgba(34, 197, 94, 0.4)` | Success states |

### Animations

| Animation | Duration | Easing |
|-----------|----------|--------|
| **Float** | 6s | ease-in-out infinite |
| **Pulse Slow** | 4s | cubic-bezier(0.4, 0, 0.6, 1) |
| **Hover Transform** | 300ms | ease-out |
| **Color Transitions** | 200ms | ease-in-out |

## Component Patterns

### Glass Card

```tsx
<div className="bg-glass backdrop-blur-xl border border-glass-border rounded-2xl shadow-lg">
  {/* Content */}
</div>
```

### Glass Card with Hover

```tsx
<div className="glass-card-hover p-8">
  {/* Content */}
</div>
```

### Gradient Text

```tsx
<h1 className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
  Text
</h1>
```

### Floating Navbar

```tsx
<nav className="fixed top-4 left-4 right-4 z-50">
  <div className="glass-card mx-auto max-w-6xl px-6 py-4">
    {/* Nav content */}
  </div>
</nav>
```

## Anti-Patterns to Avoid

1. **No emoji icons** - Use SVG icons (Heroicons, Lucide)
2. **No scale transforms on hover** - Use translateY or color changes
3. **No linear animations** - Use ease-out for entering, ease-in for exiting
4. **No animations > 500ms** - Keep micro-interactions snappy
5. **No bg-white/10 in dark mode** - Too transparent, use bg-glass

## Accessibility

- [ ] All clickable elements have `cursor-pointer`
- [ ] Hover states provide visual feedback
- [ ] Transitions are smooth (150-300ms)
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Text contrast 4.5:1 minimum

## Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| Mobile | 375px |
| Tablet | 768px |
| Desktop | 1024px |
| Large | 1440px |
