---
title: "Personal Vault Template"
type: personal
description: Template for personal vaults (journal, learning, goals, ideas)
tags: [template, personal]
---

# Personal Vault Template

## Folder Structure

```
{Topic}-Vault/
├── 00-Dashboard/
│   └── Dashboard.md
├── 01-Journal/
│   └── {date}.md
│   └── Weekly-Review.md
├── 02-Learning/
│   └── {topic}.md
│   └── Courses.md
│   └── Books.md
├── 03-Goals/
│   └── 2026-Goals.md
│   └── Habits.md
│   └── Progress.md
├── 04-Ideas/
│   └── {idea-name}.md
│   └── Idea-Inbox.md
├── 05-Projects/
│   └── {project-name}.md
│   └── Active-Projects.md
├── 06-Health/
│   └── Fitness.md
│   └── Nutrition.md
│   └── Mental-Health.md
├── 07-Finance/
│   └── Budget.md
│   └── Investments.md
└── 99-Resources/
    └── References.md
    └── Bookmarks.md
```

## Dashboard Template

```markdown
---
title: "{Topic} Personal Dashboard"
aliases: [dashboard, overview, home]
tags: [{topic}, dashboard, personal]
created: {date}
theme: {theme}
accent_color: {color}
---

# {Topic} Personal Dashboard

> [!info] Personal Hub
> Mi centro personal de conocimiento y productividad.

---

{STATS_CARD}

---

## Today's Focus

> [!tip] Enfoque del dia
> Lo mas importante para hoy.

- [ ] {task-1}
- [ ] {task-2}
- [ ] {task-3}

---

## Goals Progress

> [!abstract] Metas del ano
> Progreso hacia mis objetivos 2026.

[[2026-Goals]] | [[Progress]]

{PROGRESS_BAR: "Learning" 75}
{PROGRESS_BAR: "Fitness" 60}
{PROGRESS_BAR: "Finance" 45}

---

## Recent Journal

> [!note] Ultimas entradas
> Reflexiones y aprendizajes recientes.

| Date | Entry | Mood |
|------|-------|------|
| {date} | {entry} | {mood} |

---

## Learning

> [!example] Aprendizaje activo
> Lo que estoy estudiando ahora.

[[Courses]] | [[Books]]

---

## Ideas

> [!warning] Idea inbox
> Ideas por explorar.

[[Idea-Inbox]] | {idea-count} ideas pendientes

---

## Active Projects

> [!info] Proyectos personales
> Proyectos en los que estoy trabajando.

[[Active-Projects]]

---

{TIMELINE}

---

## Referencias

- [[Bookmarks]] - Links guardados
- [[References]] - Recursos
```

## Journal Entry Template

```markdown
---
title: "{date}"
aliases: [{date}]
tags: [journal, {date}]
created: {date}
mood: {mood}
energy: {energy}
---

# {date}

> [!info] Daily Journal
> **Mood:** {mood} | **Energy:** {energy}

---

## Morning Reflection

{morning-thoughts}

---

## Today's Wins

1. {win-1}
2. {win-2}
3. {win-3}

---

## Challenges

{challenges-faced}

---

## Lessons Learned

> [!tip] Aprendizaje
> {lessons}

---

## Tomorrow's Priorities

- [ ] {priority-1}
- [ ] {priority-2}
- [ ] {priority-3}

---

## Gratitude

1. {gratitude-1}
2. {gratitude-2}
3. {gratitude-3}
```
