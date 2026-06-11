---
title: "Plugins Obsidian Recomendados"
tags: [plugins, obsidian, setup]
created: 2026-06-10
---

# Plugins Obsidian Recomendados

## Esenciales

### Dataview
**Uso:** Consultas dinamicas de datos
```dataview
TABLE status, priority, created
FROM #project
SORT created DESC
```

### Templater
**Uso:** Crear notas desde templates con variables
```
<% tp.date.now("YYYY-MM-DD") %>
<% tp.file.title %>
```

### Calendar
**Uso:** Vista calendario para notas diarias
- Click en un dia para crear/abrir nota
- Integra con Daily Notes

### Quick Switcher++
**Uso:** Buscar y navegar rapido entre notas
- `Ctrl+O` para abrir
- Soporta busqueda fuzzy

### Excalidraw
**Uso:** Diagramas y dibujos dentro de Obsidian
- Pizarra virtual
- Wireframes
- Diagramas de arquitectura

## Productividad

### Kanban
**Uso:** Tableros tipo Trello
```markdown
## To Do
- [ ] Tarea 1
- [ ] Tarea 2

## In Progress
- [ ] Tarea 3

## Done
- [x] Tarea 4
```

### Tasks
**Uso:** Gestion de tareas avanzada
- Fechas de vencimiento
- Prioridades
- Filtros automaticos

### Habit Tracker
**Uso:** Seguimiento de habitos diarios
- Graficos de progreso
- Recordatorios

### Pomodoro Timer
**Uso:** Tecnica Pomodoro integrada
- Temporizador 25/5
- Estadisticas de sesiones

## Conocimiento

### Graph Analysis
**Uso:** Analisis de conexiones entre notas
- Nodos centrales
- Cluster de conocimiento

### Tag Wrangler
**Uso:** Gestionar y renombrar tags masivamente
- Renombrar en lote
- Fusionar tags

### Starred Files
**Uso:** Archivos favoritos rapido
- Acceso rapido
- Organizacion por frecuencia

## Desarrollo

### Code Block Shortcuts
**Uso:** Atajos para bloques de codigo
- Auto-complete
- Syntax highlighting

### Obsidian Git
**Uso:** Sync con GitHub automatico
- Auto-commit
- Auto-push
- Backup programado

### Execute Code
**Uso:** Ejecutar codigo dentro de Obsidian
- Python, JavaScript, Shell
- Output inline

## Instalacion

1. Abrir Obsidian
2. Ir a Settings > Community plugins
3. Desactivar "Safe mode"
4. Buscar e instalar cada plugin
5. Configurar segun necesidad

## Configuracion Recomendada

```json
{
  "dataview": {
    "renderNullAs": "-",
    "taskCompletionTracking": true
  },
  "templater": {
    "templates_folder": "05-Templates",
    "trigger_on_file_creation": true
  },
  "obsidian-git": {
    "autoSaveInterval": 5,
    "autoPushInterval": 15,
    "autoPull": true
  }
}
```
