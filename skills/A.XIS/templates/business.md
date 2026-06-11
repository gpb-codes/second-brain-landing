---
title: "Business Vault Template"
type: business
description: Template for business-focused vaults (projects, clients, roadmap, meetings)
tags: [template, business]
---

# Business Vault Template

## Folder Structure

```
{Topic}-Vault/
├── 00-Dashboard/
│   └── Dashboard.md
├── 01-Projects/
│   └── {project-name}.md
│   └── Active-Projects.md
├── 02-Clients/
│   └── {client-name}.md
│   └── Client-Overview.md
├── 03-Roadmap/
│   └── Quarterly-Plan.md
│   └── Milestones.md
├── 04-Meetings/
│   └── {date}-{topic}.md
│   └── Meeting-Templates.md
├── 05-Templates/
│   └── Proposal.md
│   └── Contract.md
│   └── Invoice.md
├── 06-Metrics/
│   └── KPIs.md
│   └── Reports.md
├── 07-Team/
│   └── Members.md
│   └── Responsibilities.md
└── 99-Resources/
    └── References.md
    └── Glossary.md
```

## Dashboard Template

```markdown
---
title: "{Topic} Business Dashboard"
aliases: [dashboard, overview, home]
tags: [{topic}, dashboard, business]
created: {date}
theme: {theme}
accent_color: {color}
---

# {Topic} Business Dashboard

> [!info] Business Hub
> Centro de control para proyectos y operaciones de {topic}.

---

{STATS_CARD}

---

## Active Projects

> [!tip] Proyectos en curso
> Lista de proyectos activos y su estado.

[[Active-Projects]]

| Project | Client | Status | Deadline |
|---------|--------|--------|----------|
| {name} | {client} | {status} | {date} |

---

## Roadmap

> [!note] Planificacion
> Hitos y objetivos trimestrales.

[[Quarterly-Plan]] | [[Milestones]]

---

## Upcoming Meetings

> [!example] Proximas reuniones
> Agenda de reuniones programadas.

| Date | Topic | Client | Attendees |
|------|-------|--------|-----------|
| {date} | {topic} | {client} | {attendees} |

---

## KPIs

> [!warning] Metricas clave
> Indicadores de rendimiento principales.

[[KPIs]]

---

## Team

> [!abstract] Equipo
> Miembros y responsabilidades.

[[Members]] | [[Responsibilities]]

---

{KANBAN}

---

## Referencias

- [[Glossary]] - Glosario de negocios
- [[References]] - Recursos y plantillas
```

## Project Template

```markdown
---
title: "{Project Name}"
aliases: [{project-name}]
tags: [{topic}, project, {status}]
created: {date}
client: {client-name}
status: {status}
deadline: {deadline}
---

# {Project Name}

> [!info] Project
> {project-description}

**Client:** {client-name}
**Status:** {status}
**Deadline:** {deadline}
**Budget:** {budget}

---

## Objectives

1. {objective-1}
2. {objective-2}
3. {objective-3}

---

## Timeline

{TIMELINE}

---

## Tasks

{KANBAN}

| Task | Assignee | Status | Due |
|------|----------|--------|-----|
| {task} | {person} | {status} | {date} |

---

## Deliverables

- [ ] {deliverable-1}
- [ ] {deliverable-2}
- [ ] {deliverable-3}

---

## Meeting Notes

{meeting-notes-summary}

---

## Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| {risk} | {impact} | {mitigation} |

---

## References

- [[Client-Overview]]
- [[Meeting-Notes]]
```
