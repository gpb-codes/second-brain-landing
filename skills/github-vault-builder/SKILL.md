---
name: github-vault-builder
description: Use when the user wants to find GitHub repositories about a topic, analyze them, extract the best content (code, configs, documentation, patterns), and organize it into an Obsidian vault or second brain. Supports custom designs, themes, and layouts based on user preferences. Triggers on phrases like "search repos about", "find me repos for", "build me a vault about", "analyze repos for", "create second brain for", "busca repositorios sobre", "crea un vault sobre". Compatible with OpenCode and Claude.
---

# GitHub Vault Builder

This skill searches GitHub for repositories on a topic, reads their content, extracts the best patterns, code, and documentation, and organizes everything into a **customized** Obsidian vault.

## Assistant Detection

This skill automatically detects which assistant is running:

| Assistant | Detection Method | Command Style |
|-----------|------------------|---------------|
| **OpenCode** | Check for `opencode` command | `opencode --prompt "..."` |
| **Claude** | Check for `claude` command or Anthropic API | Direct API calls |

### Auto-Detection Logic

```bash
# Check which assistant is available
if command -v opencode &> /dev/null; then
    ASSISTANT="opencode"
    PROMPT_CMD="opencode --prompt"
elif command -v claude &> /dev/null; then
    ASSISTANT="claude"
    PROMPT_CMD="claude -p"
else
    echo "No compatible assistant found. Install OpenCode or Claude CLI."
    exit 1
fi
```

## Workflow

### Step 0: Gather User Preferences

Before starting, ask the user about their preferences. If not specified, use sensible defaults.

```
Que tipo de vault necesitas?
1. Developer (codigo, APIs, tools, arquitectura)
2. Research (papers, notas, metodologia, datos)
3. Business (proyectos, clientes, roadmap, reuniones)
4. Personal (diario, aprendizaje, metas, ideas)
5. Creative (proyectos, inspiracion, portfolio, assets)

Que estilo visual prefieres?
1. Minimal (limpio, poco color, elegante)
2. Professional (corporativo, serio, formal)
3. Colorful (vibrante, llamativo, dinamico)
4. Dark (oscuro, moderno, tech)
5. GitHub (estilo GitHub, familiar)

Que componentes quieres incluir?
- Stats cards (metricas del vault)
- Quick links (accesos rapidos)
- Progress bars (progreso de lectura/estudio)
- Timelines (historial de actualizaciones)
- Kanban boards (tablero de tareas)
- Dataview queries (para plugin Dataview)

Color de acento (hex): #7C3AED
```

**Defaults if not specified:**
- Vault type: `developer`
- Theme: `minimal`
- Components: `stats cards`, `quick links`
- Accent color: `#7C3AED`

### Step 1: Search GitHub Repositories

Use `websearch` to find relevant repositories:

```
websearch query: "site:github.com {topic} awesome {year}"
websearch query: "github {topic} best repositories stars"
websearch query: "github {topic} curated list"
```

Collect: repo name, URL, stars, description, key files.

### Step 2: Fetch and Analyze Repositories

For each promising repo, use `webfetch` to read:

1. **README.md** - Main documentation
2. **Package files** - package.json, requirements.txt, Cargo.toml, go.mod
3. **Config files** - .env.example, docker-compose.yml, config files
4. **Source structure** - Directory listing
5. **Key source files** - Main entry points, core modules

```bash
# OpenCode style
opencode --prompt "Analyze repository https://github.com/{owner}/{repo} and extract key patterns"

# Claude style
claude -p "Analyze repository https://github.com/{owner}/{repo} and extract key patterns"
```

### Step 3: Extract Best Content

Analyze and extract:

- **Architecture patterns** - How the project is structured
- **Code snippets** - Reusable functions, classes, utilities
- **Configuration examples** - Best practices configs
- **CLI commands** - Useful command-line tools
- **Dependencies** - Key libraries and tools
- **Documentation** - Tutorials, guides, explanations
- **Best practices** - Patterns worth following
- **Anti-patterns** - Things to avoid

### Step 4: Load Template Based on Vault Type

Load the appropriate template from `templates/` folder based on user's vault type selection.

| Vault Type | Template File | Focus |
|------------|---------------|-------|
| developer | `templates/developer.md` | Code, APIs, Architecture, Tools |
| research | `templates/research.md` | Papers, Notes, Methodology, Data |
| business | `templates/business.md` | Projects, Clients, Roadmap, Meetings |
| personal | `templates/personal.md` | Journal, Learning, Goals, Ideas |
| creative | `templates/creative.md` | Projects, Inspiration, Portfolio |

### Step 5: Apply Theme

Load the appropriate theme from `themes/` folder and apply to all generated files.

| Theme | Style | Colors |
|-------|-------|--------|
| minimal | Clean, minimal color, elegant | Gray scale, subtle borders |
| professional | Corporate, serious, formal | Navy, dark blue, white |
| colorful | Vibrant, eye-catching, dynamic | Rainbow palette, bold colors |
| dark | Dark, modern, tech | Dark backgrounds, neon accents |
| github | GitHub-style, familiar | GitHub colors, octicons |

Each theme defines:
- Callout color schemes
- Table styling
- Code block appearance
- Header styles
- Border and spacing

### Step 6: Insert Components

Add requested components to the vault files. Each component is defined in the `components/` folder.

| Component | File | Description |
|-----------|------|-------------|
| Stats Card | `components/stats-card.md` | HTML/MD block with vault metrics |
| Quick Links | `components/quick-links.md` | Grid of clickable links |
| Progress Bar | `components/progress-bar.md` | Visual progress indicator |
| Timeline | `components/timeline.md` | Chronological event list |
| Kanban | `components/kanban.md` | Trello-style board |

### Step 7: Create Obsidian Vault

Generate a structured vault at the path specified by the user (default: `D:\vaults\`).

### Step 8: Write Files

Use `write` tool to create each markdown file with:

- YAML Frontmatter (with theme and custom color)
- Obsidian callouts (themed colors)
- Wikilinks `[[Internal Links]]`
- Code blocks with syntax highlighting
- Tables (styled per theme)
- Checklists
- Mermaid diagrams where appropriate
- Requested components (HTML/MD)

## Assistant-Specific Commands

### For OpenCode Users

```bash
# Initialize vault
opencode --prompt "Create a new Obsidian vault called '{name}' at {path} with {theme} theme"

# Analyze repos
opencode --prompt "Analyze GitHub repository {url} and extract architecture patterns, code snippets, and best practices"

# Generate documentation
opencode --prompt "Generate comprehensive documentation for vault {name} including README, architecture overview, and code examples"

# Connect ideas
opencode --prompt "Analyze connections between notes in vault {path} and suggest new knowledge links"
```

### For Claude Users

```bash
# Initialize vault
claude -p "Create a new Obsidian vault called '{name}' at {path} with {theme} theme"

# Analyze repos
claude -p "Analyze GitHub repository {url} and extract architecture patterns, code snippets, and best practices"

# Generate documentation
claude -p "Generate comprehensive documentation for vault {name} including README, architecture overview, and code examples"

# Connect ideas
claude -p "Analyze connections between notes in vault {path} and suggest new knowledge links"
```

## Vault Template Pattern

Each file should follow this pattern:

```markdown
---
title: "{Title}"
aliases: [alternative names]
tags: [{topic}, {category}]
created: {date}
source: {repo-url}
theme: {selected-theme}
accent_color: {selected-color}
---

# {Title}

> [!info] Description
> Brief description of what this covers.

---

{COMPONENTS_HERE}

## Section 1

Content here...

---

## References

- [[Other-Note]]
- [External Link](url)
```

## Output

After creating all files, report:
- Number of repos analyzed
- Number of files created
- Vault location
- Theme applied
- Components included
- Key highlights extracted
- Assistant used (OpenCode or Claude)

## Tips

- Prioritize repos with high stars (>100)
- Focus on recently updated repos (last 6 months)
- Extract actual code snippets, not just descriptions
- Add your own annotations and connections
- Match the theme consistently across all files
- Use components to enhance readability
- Update the vault as you find new repos
- Use the detected assistant for all AI operations
