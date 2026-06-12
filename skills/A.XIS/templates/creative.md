---
title: "Creative Vault Template"
type: creative
description: Template for creative vaults (projects, inspiration, portfolio, assets)
tags: [template, creative]
---

# Creative Vault Template

## Folder Structure

```
{Topic}-Vault/
├── 00-Dashboard/
│   └── Dashboard.md
├── 01-Projects/
│   └── {project-name}.md
│   └── Active-Projects.md
├── 02-Inspiration/
│   └── {inspiration-source}.md
│   └── Mood-Board.md
│   └── Color-Palettes.md
├── 03-Assets/
│   └── Images/
│   └── Fonts/
│   └── Templates/
│   └── Icons/
├── 04-Techniques/
│   └── {technique}.md
│   └── Tutorials.md
├── 05-Portfolio/
│   └── {project-name}.md
│   └── Case-Studies.md
├── 06-Tools/
│   └── Software.md
│   └── Plugins.md
│   └── Shortcuts.md
├── 07-Notes/
│   └── Ideas.md
│   └── Experimentos.md
└── 99-Resources/
    └── References.md
    └── Inspiration-Links.md
```

## Dashboard Template

```markdown
---
title: "{Topic} Creative Dashboard"
aliases: [dashboard, overview, home]
tags: [{topic}, dashboard, creative]
created: {date}
theme: {theme}
accent_color: {color}
---

# {Topic} Creative Dashboard

> [!info] Creative Hub
> Centro creativo para {topic}.

---

{STATS_CARD}

---

## Active Projects

> [!tip] Proyectos en curso
> Proyectos creativos activos.

[[Active-Projects]]

| Project | Type | Status | Deadline |
|---------|------|--------|----------|
| {name} | {type} | {status} | {date} |

---

## Inspiration

> [!abstract] Fuentes de inspiracion
> Lo que me inspira ahora.

[[Mood-Board]] | [[Color-Palettes]]

---

## Techniques

> [!note] Tecnicas y tutoriales
> Habilidades que estoy desarrollando.

[[Tutorials]]

---

## Portfolio

> [!example] Portfolio
> Trabajos destacados.

[[Case-Studies]]

---

## Tools

> [!warning] Herramientas
> Software y plugins que uso.

[[Software]] | [[Plugins]]

---

## Ideas

> [!info] Idea inbox
> Ideas por explorar y experimentar.

[[Ideas]] | [[Experimentos]]

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Primary | {color-1} | {usage-1} |
| Secondary | {color-2} | {usage-2} |
| Accent | {color-3} | {usage-3} |
| Background | {color-4} | {usage-4} |
| Text | {color-5} | {usage-5} |

---

## Typography

| Font | Weight | Usage |
|------|--------|-------|
| {font-1} | {weight} | {usage} |
| {font-2} | {weight} | {usage} |

---

{TIMELINE}

---

## Referencias

- [[Inspiration-Links]] - Links de inspiracion
- [[References]] - Recursos y herramientas
```

## Project Template

```markdown
---
title: "{Project Name}"
aliases: [{project-name}]
tags: [{topic}, project, {type}]
created: {date}
type: {type}
status: {status}
---

# {Project Name}

> [!info] Creative Project
> {project-description}

**Type:** {type}
**Status:** {status}
**Tools:** {tools-used}

---

## Brief

{project-brief}

---

## Mood Board

> [!abstract] Referencias visuales
> Imagenes y referencias para el proyecto.

{image-references}

---

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| {color-1} | {hex-1} | {usage-1} |
| {color-2} | {hex-2} | {usage-2} |

---

## Typography

| Font | Weight | Usage |
|------|--------|-------|
| {font} | {weight} | {usage} |

---

## Process

{TIMELINE}

---

## Iterations

### V1 - {date}
{iteration-1-notes}

### V2 - {date}
{iteration-2-notes}

---

## Final Result

{final-result-description}

---

## Lessons Learned

> [!tip] Aprendizaje
> {lessons-from-project}

---

## References

- [[Mood-Board]]
- [[Color-Palettes]]
```
