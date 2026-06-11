---
title: "Kanban Board Component"
description: HTML/MD component for task management boards
tags: [component, kanban]
---

# Kanban Board Component

## Usage

Insert this component for task management and project tracking.

## Markdown Checklist Version

```markdown
## To Do
- [ ] {task-1}
- [ ] {task-2}
- [ ] {task-3}

## In Progress
- [ ] {task-4}
- [ ] {task-5}

## Done
- [x] {task-6}
- [x] {task-7}
```

## Table Version

```markdown
## Kanban Board

| To Do | In Progress | Done |
|-------|-------------|------|
| {task-1} | {task-4} | {task-6} |
| {task-2} | {task-5} | {task-7} |
| {task-3} | | |
```

## HTML Version (Obsidian)

```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0;">
  <!-- To Do Column -->
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 12px;">
    <div style="font-weight: bold; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #ef4444;">To Do</div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-1}
    </div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-2}
    </div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-3}
    </div>
  </div>
  
  <!-- In Progress Column -->
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 12px;">
    <div style="font-weight: bold; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #f59e0b;">In Progress</div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-4}
    </div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-5}
    </div>
  </div>
  
  <!-- Done Column -->
  <div style="background: var(--background-secondary); border: 1px solid var(--background-modifier-border); border-radius: 8px; padding: 12px;">
    <div style="font-weight: bold; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #22c55e;">Done</div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-6}
    </div>
    <div style="background: var(--background-primary); border: 1px solid var(--background-modifier-border); border-radius: 6px; padding: 8px; margin-bottom: 8px; font-size: 0.9em;">
      {task-7}
    </div>
  </div>
</div>
```

## Dataview Version (requires Dataview plugin)

```dataview
TASK
FROM #task
GROUP BY status
```

## Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `{task}` | Task description | "Create documentation" |
| Column colors | Visual indicators | Red (todo), Yellow (progress), Green (done) |
