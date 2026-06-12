---
title: "Progress Bar Component"
description: HTML/MD component for visual progress indicators
tags: [component, progress]
---

# Progress Bar Component

## Usage

Insert this component to show progress on goals, learning, or projects.

## Simple Markdown Version

```markdown
**Learning:** [#######-----] 70%
**Fitness:**  [#####-------] 50%
**Finance:**  [###---------] 30%
```

## HTML Version (Obsidian)

```html
<div style="margin: 16px 0;">
  <div style="margin-bottom: 12px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
      <span style="font-weight: 500;">{label-1}</span>
      <span style="color: var(--text-muted);">{percent-1}%</span>
    </div>
    <div style="background: var(--background-modifier-border); border-radius: 4px; height: 8px; overflow: hidden;">
      <div style="background: {accent-color}; width: {percent-1}%; height: 100%; border-radius: 4px; transition: width 0.3s;"></div>
    </div>
  </div>
  <div style="margin-bottom: 12px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
      <span style="font-weight: 500;">{label-2}</span>
      <span style="color: var(--text-muted);">{percent-2}%</span>
    </div>
    <div style="background: var(--background-modifier-border); border-radius: 4px; height: 8px; overflow: hidden;">
      <div style="background: {accent-color}; width: {percent-2}%; height: 100%; border-radius: 4px; transition: width 0.3s;"></div>
    </div>
  </div>
  <div style="margin-bottom: 12px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
      <span style="font-weight: 500;">{label-3}</span>
      <span style="color: var(--text-muted);">{percent-3}%</span>
    </div>
    <div style="background: var(--background-modifier-border); border-radius: 4px; height: 8px; overflow: hidden;">
      <div style="background: {accent-color}; width: {percent-3}%; height: 100%; border-radius: 4px; transition: width 0.3s;"></div>
    </div>
  </div>
</div>
```

## Checkbox Version (Obsidian native)

```markdown
- [x] Step 1: {description} (100%)
- [x] Step 2: {description} (100%)
- [ ] Step 3: {description} (0%)
- [ ] Step 4: {description} (0%)

**Progress:** 50%
```

## Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `{label}` | Progress item name | "Learning" |
| `{percent}` | Percentage (0-100) | "75" |
| `{accent-color}` | Bar color hex | "#7C3AED" |
