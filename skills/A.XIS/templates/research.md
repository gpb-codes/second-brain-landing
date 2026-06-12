---
title: "Research Vault Template"
type: research
description: Template for research-focused vaults (papers, notes, methodology, data)
tags: [template, research]
---

# Research Vault Template

## Folder Structure

```
{Topic}-Vault/
├── 00-Dashboard/
│   └── Dashboard.md
├── 01-Papers/
│   └── {paper-title}.md
│   └── Literature-Review.md
├── 02-Notes/
│   └── {topic}-Notes.md
│   └── Key-Concepts.md
├── 03-Methodology/
│   └── Methods.md
│   └── Tools.md
│   └── Data-Sources.md
├── 04-Data/
│   └── Datasets.md
│   └── Analysis.md
│   └── Visualizations.md
├── 05-References/
│   └── Bibliography.md
│   └── Citations.md
├── 06-Drafts/
│   └── {draft-name}.md
├── 07-Presentations/
│   └── {presentation}.md
└── 99-Resources/
    └── References.md
    └── Glossary.md
```

## Dashboard Template

```markdown
---
title: "{Topic} Research Dashboard"
aliases: [dashboard, overview, home]
tags: [{topic}, dashboard, research]
created: {date}
theme: {theme}
accent_color: {color}
---

# {Topic} Research Dashboard

> [!info] Research Hub
> Centro de investigacion para {topic}.

---

{STATS_CARD}

---

## Literature

> [!abstract] Papers y publicaciones
> Articulos clave revisados.

[[Literature-Review]] | {paper-count} papers

---

## Key Concepts

> [!tip] Conceptos principales
> Ideas fundamentales de la investigacion.

[[Key-Concepts]]

---

## Methodology

> [!note] Enfoque metodologico
> Metodos y herramientas utilizadas.

[[Methods]] | [[Tools]] | [[Data-Sources]]

---

## Data & Analysis

> [!example] Datos y resultados
> Datasets, analisis y visualizaciones.

[[Datasets]] | [[Analysis]] | [[Visualizations]]

---

## Drafts

> [!warning] Borradores
> Documentos en progreso.

| Draft | Status | Last Updated |
|-------|--------|--------------|
| {name} | {status} | {date} |

---

{TIMELINE}

---

## Referencias

- [[Bibliography]] - Bibliografia completa
- [[Glossary]] - Glosario de terminos
- [[References]] - Recursos adicionales
```

## Paper Analysis Template

```markdown
---
title: "{Paper Title}"
aliases: [{short-title}]
tags: [{topic}, paper, {author}]
created: {date}
source: {paper-url}
author: {author}
year: {year}
---

# {Paper Title}

> [!info] Paper
> {author} ({year})

**Source:** [{paper-url}]({paper-url})
**Year:** {year} | **Citations:** {citations}

---

## Summary

{summary-content}

---

## Key Findings

1. {finding-1}
2. {finding-2}
3. {finding-3}

---

## Methodology

{methodology-description}

---

## Key Quotes

> {quote-1}
> -- {author}

---

## Relevance

> [!tip] Por que importa
> {relevance-to-research}

---

## Notes

{personal-notes}

---

## References

- [{citation}]({citation-url})
- [[Other-Papers]]
```
