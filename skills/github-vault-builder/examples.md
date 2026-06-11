# GitHub Vault Builder - Examples
# This file shows how to use the skill with different assistants

## With OpenCode

### Search and analyze repos
```bash
opencode --prompt "Search GitHub for repositories about 'machine learning Python' and create an Obsidian vault with the best patterns and code examples"
```

### Create a developer vault
```bash
opencode --prompt "Build me a vault about React best practices using GitHub repos. Use dark theme with stats cards and quick links components"
```

### Analyze a specific repo
```bash
opencode --prompt "Analyze https://github.com/facebook/react and extract architecture patterns, code snippets, and best practices into my vault"
```

## With Claude

### Search and analyze repos
```bash
claude -p "Search GitHub for repositories about 'machine learning Python' and create an Obsidian vault with the best patterns and code examples"
```

### Create a developer vault
```bash
claude -p "Build me a vault about React best practices using GitHub repos. Use dark theme with stats cards and quick links components"
```

### Analyze a specific repo
```bash
claude -p "Analyze https://github.com/facebook/react and extract architecture patterns, code snippets, and best practices into my vault"
```

## Combined Workflow

### Step 1: Search with websearch
```
websearch query: "site:github.com react best practices awesome 2024"
```

### Step 2: Analyze with your preferred assistant
```bash
# OpenCode
opencode --prompt "Analyze the top 5 React repos from the search results and create a comprehensive vault"

# Claude
claude -p "Analyze the top 5 React repos from the search results and create a comprehensive vault"
```

### Step 3: Generate documentation
```bash
# OpenCode
opencode --prompt "Generate a README.md for my vault explaining the structure and key findings"

# Claude
claude -p "Generate a README.md for my vault explaining the structure and key findings"
```

## Theme Examples

### Minimal Theme
```bash
opencode --prompt "Create a vault with minimal theme - clean, gray scale, subtle borders"
```

### Dark Theme
```bash
claude -p "Create a vault with dark theme - dark backgrounds, neon accents, modern look"
```

### GitHub Theme
```bash
opencode --prompt "Create a vault with GitHub theme - familiar colors, octicons, code blocks styled like GitHub"
```

## Component Examples

### Stats Card
```bash
opencode --prompt "Add a stats card component showing vault metrics: total files, repos analyzed, last updated"
```

### Quick Links
```bash
claude -p "Add quick links component with buttons to: Dashboard, Search, Settings, Export"
```

### Progress Bar
```bash
opencode --prompt "Add progress bar component showing reading progress for each note"
```

## Advanced Usage

### Custom Accent Color
```bash
opencode --prompt "Create a vault with accent color #FF6B6B (coral red)"
```

### Multiple Vault Types
```bash
claude -p "Create 3 vaults: one developer vault for React, one research vault for AI papers, and one personal vault for learning notes"
```

### Batch Processing
```bash
opencode --prompt "Analyze all repos in my GitHub stars and create categorized vaults for each topic"
```

## Integration with Second Brain

### From Second Brain Panel
```powershell
# In Second Brain PowerShell panel
[Y] Configurar IAs -> Select OpenCode or Claude
[C] OpenCode + Skill -> Opens with current assistant
[A] Asistente IA -> Uses configured assistant for AI tasks
```

### From Batch File
```batch
# In Second-Brain.bat
[2] OpenCode + Skill -> Opens OpenCode
[8] Configurar IAs -> Configure which assistant to use
```

## Tips

1. **Use specific prompts** - The more detailed your prompt, the better the vault
2. **Specify theme early** - Mention the theme in your first prompt
3. **Include components** - Tell the assistant which components you want
4. **Provide examples** - Share example repos or patterns you like
5. **Iterate** - Refine the vault with follow-up prompts
6. **Export regularly** - Back up your vault to GitHub
7. **Connect notes** - Use the assistant to find connections between notes
