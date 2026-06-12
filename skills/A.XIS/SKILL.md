# Skill: PACE - Segundo Cerebro

# PACE - Segundo Cerebro Inteligente

Esta skill busca repositorios en GitHub sobre un tema, lee su contenido, extrae los mejores patrones, codigos y documentacion, **identifica automaticamente que tipo de contenido es**, pregunta al usuario donde guardarlo, y organiza todo en un **vault de Obsidian** estructurado con el metodo **PACE** (Proyectos, Areas, Conexiones, Extracciones).

---

## Nombre de la Skill y Vault

- **Skill:** `pace` (anteriormente `github-vault-builder`)
- **Vault:** `Boveda PACE [Tu Segundo Cerebro]`
- **Ruta predeterminada:** `D:\vaults\PACE\`

---

## Estructura PACE del Vault

```
Boveda PACE [Tu Segundo Cerebro]
|
|-- 00 Inbox (Bandeja de Entrada)
|   `-- Nota rapida del dia.md
|
|-- 01 Proyectos (P)
|   |-- Activos
|   |   `-- Proyecto X (Ej. Rediseño Web)
|   `-- En Pausa
|
|-- 02 Areas (A)
|   |-- Trabajo / Profesion
|   |-- Finanzas Personales
|   `-- Salud y Bienestar
|
|-- 03 Conexiones - MOCs (C)
|   |-- 030 INDICE GENERAL (Home).md
|   |-- MOC Desarrollo Personal.md
|   |-- MOC Tecnologia.md
|   `-- MOC Productividad.md
|
|-- 04 Extracciones AI (E)
|   |-- Logs Brutos (Historial automatico)
|   |   `-- 2026-06-11 - Chat sobre codigo CSS.md
|   `-- Destilados PACE (Solo lo valioso)
|       `-- Snippet CSS para Obsidian.md
|
|-- 05 Archivo (Historico)
|   `-- Proyectos Terminados 2025
|
`-- 99 Sistema (Configuracion oculta)
    |-- Plantillas (Templates)
    `-- Archivos Adjuntos (Imagenes/PDFs)
```

---

## Enrutamiento Inteligente de Contenido

### Como Funciona

Cuando se extrae contenido de repositorios GitHub, la skill:

1. **IDENTIFICA** automaticamente el tipo de contenido extraido
2. **PREGUNTA** al usuario donde quiere guardarlo
3. **RECOMIENDA** la carpeta PACE mas apropiada
4. **GUARDA** el archivo con un nombre descriptivo y correcto

### Tipos de Contenido Identificables

| Tipo de Contenido | Caracteristicas | Carpeta PACE Recomendada |
|-------------------|-----------------|--------------------------|
| **Snippet de codigo** | Funciones, clases, utilidades reutilizables | `04 Extracciones AI/Destilados PACE` |
| **Configuracion** | Archivos .env, docker-compose, settings | `04 Extracciones AI/Destilados PACE` |
| **Patron de arquitectura** | Estructura de proyecto, design patterns | `01 Proyectos/Activos/{Proyecto}` |
| **Guia/Tutorial** | Documentacion educativa, pasos a seguir | `02 Areas/{Area}` |
| **Herramienta/CLI** | Comandos, utilidades, software | `02 Areas/Trabajo` |
| **Dependencia/Libreria** | Paquetes, modulos, packages | `02 Areas/Trabajo` |
| **Idea/Concepto** | Conceptos abstractos, teoria | `03 Conexiones - MOCs` |
| **Proyecto ejemplo** | Repos completos como referencia | `01 Proyectos/Activos` |
| **Issue/Discusion** | Problemas, soluciones, debates | `04 Extracciones AI/Logs Brutos` |
| **Release/Changelog** | Versiones, historial de cambios | `05 Archivo` |
| **Config de tema** | Templates CSS, themes, estilos | `99 Sistema/Archivos Adjuntos` |
| **Plantilla** | Templates reutilizables | `99 Sistema/Plantillas` |

### Flujo de Enrutamiento

```
Contenido Extraido de GitHub
           |
           v
+---------------------------+
| 1. IDENTIFICAR TIPO       |
|    Analizar contenido     |
|    Clasificar automatico  |
+---------------------------+
           |
           v
+---------------------------+
| 2. PREGUNTAR AL USUARIO   |
|    "Encontre: [tipo]"     |
|    "Quieres guardarlo en?" |
|    [Opciones PACE]        |
+---------------------------+
           |
           v
+---------------------------+
| 3. RECOMIENDAR CARPETA    |
|    Basado en tipo         |
|    Mostrar ruta completa  |
+---------------------------+
           |
           v
+---------------------------+
| 4. GENERAR NOMBRE         |
|    Nombre descriptivo     |
|    Sin caracteres raros   |
|    Formato: {nombre}.md   |
+---------------------------+
           |
           v
+---------------------------+
| 5. GUARDAR ARCHIVO        |
|    Crear en ruta elegida  |
|    Aplicar template       |
|    Agregar frontmatter    |
+---------------------------+
```

### Preguntas al Usuario

Cuando se identifica contenido, preguntar:

```
He encontrado contenido tipo: {tipo_identificado}
Descripcion: {breve_descripcion}

Donde quieres guardarlo?

1. [Recomendado] {carpeta_recomendada}
2. 00 Inbox (procesar despues)
3. 01 Proyectos/Activos/{proyecto_actual}
4. 02 Areas/{area}
5. 03 Conexiones - MOCs
6. 04 Extracciones AI/Destilados PACE
7. 04 Extracciones AI/Logs Brutos
8. 05 Archivo
9. 99 Sistema/{subcarpeta}

O escribe la ruta personalizada:
```

### Generacion de Nombres

La skill genera nombres automaticamente:

| Tipo de Contenido | Formato de Nombre | Ejemplo |
|-------------------|-------------------|---------|
| Snippet de codigo | `{lenguaje} - {descripcion}.md` | `JavaScript - Funcion de debounce.md` |
| Configuracion | `{herramienta} - {tipo_config}.md` | `Docker - Configuracion multi-stage.md` |
| Patron | `Patron - {nombre_patron}.md` | `Patron - Repository Pattern.md` |
| Guia | `Guia - {tema}.md` | `Guia - Testing en React.md` |
| Herramienta | `Tool - {nombre}.md` | `Tool - GitHub CLI.md` |
| Libreria | `Lib - {nombre}.md` | `Lib - Zod.md` |
| Idea | `Idea - {tema}.md` | `Idea - Micro Frontends.md` |
| Proyecto | `Proyecto - {nombre}.md` | `Proyecto - Boilerplate Next.js.md` |

---

## Deteccion de Asistente

| Asistente | Metodo de Deteccion | Estilo de Comando |
|-----------|---------------------|-------------------|
| **OpenCode** | Verificar comando `opencode` | `opencode --prompt "..."` |
| **Claude** | Verificar comando `claude` o API de Anthropic | Llamadas directas a API |

---

## Flujo de Trabajo

### Paso 0: Recopilar Preferencias del Usuario

Antes de comenzar, preguntar al usuario sobre sus preferencias.

```
Que tipo de vault necesitas?
1. Developer (codigo, APIs, tools, arquitectura)
2. Research (papers, notas, metodologia, datos)
3. Business (proyectos, clientes, roadmap, reuniones)
4. Personal (diario, aprendizaje, metas, ideas)
5. Creative (proyectos, inspiracion, portfolio, assets)

Que estilo visual prefieres?
1. Sage (verde suave, natural, organico) [Recomendado]
2. Ocean (azul profundo, calmo, concentracion)
3. Dark (oscuro, moderno, tech)
4. Minimal (limpio, poco color, elegante)
5. Professional (corporativo, serio, formal)

Color de acento (hex): #5B8A72
```

**Valores predeterminados:**
- Tipo de vault: `developer`
- Tema: `sage`
- Color de acento: `#5B8A72`

---

### Paso 1: Buscar Repositorios en GitHub

Usar `websearch` para encontrar repositorios relevantes:

```
websearch query: "site:github.com {tema} awesome {anio}"
websearch query: "github {tema} mejores repositorios estrellas"
websearch query: "github {tema} lista curada"
```

---

### Paso 2: Obtener y Analizar Repositorios

Para cada repositorio, usar `webfetch` para leer:

1. **README.md** - Documentacion principal
2. **Archivos de paquete** - package.json, requirements.txt, Cargo.toml
3. **Archivos de configuracion** - .env.example, docker-compose.yml
4. **Estructura del fuente** - Listado de directorios
5. **Archivos fuente clave** - Puntos de entrada, modulos core

---

### Paso 3: Extraer y IDENTIFICAR Contenido

Analizar y extraer contenido, **identificando automaticamente el tipo**:

- **Patrones de arquitectura** -> Tipo: Patron
- **Fragmentos de codigo** -> Tipo: Snippet
- **Ejemplos de configuracion** -> Tipo: Configuracion
- **Comandos CLI** -> Tipo: Herramienta
- **Dependencias** -> Tipo: Libreria
- **Documentacion** -> Tipo: Guia
- **Ideas/Conceptos** -> Tipo: Idea
- **Proyectos completos** -> Tipo: Proyecto

---

### Paso 4: PREGUNTAR AL USUARIO DONDE GUARDAR

**IMPORTANTE:** Para cada pieza de contenido extraida:

1. Mostrar que se encontro
2. Identificar el tipo
3. Recomendar la carpeta PACE
4. Preguntar al usuario donde quiere guardarlo
5. Generar nombre descriptivo
6. Guardar en la ubicacion elegida

```
CONTENIDO ENCONTRADO:
---------------------
Tipo: Snippet de codigo (JavaScript)
Descripcion: Funcion de debounce para manejar eventos de resize
Codigo:
```javascript
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
```

DONDE GUARDAR?
--------------
1. [Recomendado] 04 Extracciones AI/Destilados PACE
2. 00 Inbox
3. 01 Proyectos/Activos/{proyecto}
4. 02 Areas/Trabajo
5. 99 Sistema/Archivos Adjuntos

Tu respuesta (1-5 o ruta personalizada):
```

---

### Paso 5: Guardar Archivo

Una vez que el usuario elija la ubicacion:

1. Generar nombre descriptivo
2. Crear la ruta si no existe
3. Aplicar template de la seccion PACE
4. Escribir el archivo con frontmatter completo
5. Confirmar guardado

---

### Paso 6: Aplicar Tema

Cargar el tema desde `themes/` y aplicar a todos los archivos.

| Tema | Estilo |
|------|--------|
| sage | Verde suave, natural, organico |
| ocean | Azul profundo, calmo |
| dark | Oscuro, moderno, tech |
| minimal | Limpio, elegante |
| professional | Corporativo, formal |

---

### Paso 7: Crear Vault y Reportar

Generar vault estructurado y reportar:

- Numero de repositorios analizados
- Numero de archivos creados
- **Ubicacion de cada archivo guardado**
- Tema aplicado
- Puntos clave extraidos

---

## Patron de Plantilla PACE

Cada archivo debe seguir este patron:

```markdown
---
title: "{Titulo}"
aliases: [nombres alternativos]
tags: [{tema}, {categoria}, pace-{seccion}]
created: {fecha}
source: {url-repo}
theme: {tema-seleccionado}
accent_color: {color-seleccionado}
pace_section: {00-inbox|01-proyectos|02-areas|03-conexiones|04-extracciones|05-archivo}
content_type: {snippet|config|patron|guia|herramienta|libreria|idea|proyecto}
---

# {Titulo}

> [!info] Descripcion
> Breve descripcion de que trata este contenido.

---

## Contenido

{CONTENIDO_AQUI}

---

## Aplicacion

### Donde Usar

{casos_de_uso}

### Precauciones

{precauciones}

---

## Referencias

- [[Otra-Nota]]
- [Enlace Externo](url)
```

---

## Comandos Especificos por Asistente

### Para OpenCode

```bash
# Analizar repo con enrutamiento inteligente
opencode --prompt "Analizar repositorio {url}, extraer contenido, IDENTIFICAR tipo de cada pieza, preguntar al usuario donde guardar en la estructura PACE, y guardar con nombre descriptivo"

# Buscar y enrutar contenido
opencode --prompt "Buscar repos de {tema} en GitHub, extraer snippets de codigo, IDENTIFICAR tipo, PREGUNTAR donde guardar en PACE, GUARDAR en carpeta elegida"
```

### Para Claude

```bash
# Analizar repo con enrutamiento inteligente
claude -p "Analizar repositorio {url}, extraer contenido, IDENTIFICAR tipo de cada pieza, preguntar al usuario donde guardar en la estructura PACE, y guardar con nombre descriptivo"

# Buscar y enrutar contenido
claude -p "Buscar repos de {tema} en GitHub, extraer snippets de codigo, IDENTIFICAR tipo, PREGUNTAR donde guardar en PACE, GUARDAR en carpeta elegida"
```

---

## Ejemplo de Enrutamiento

### Ejemplo 1: Snippet de Codigo

```
ANALIZANDO: https://github.com/facebook/react

CONTENIDO ENCONTRADO:
- Tipo: Snippet de codigo
- Lenguaje: JavaScript
- Descripcion: Hook personalizado para infinite scroll

DONDE GUARDAR?
1. [Recomendado] 04 Extracciones AI/Destilados PACE/JavaScript - Hook infinite scroll.md
2. 00 Inbox
3. 02 Areas/Trabajo
4. Otro

> Usuario selecciona: 1

GUARDADO: 04 Extracciones AI/Destilados PACE/JavaScript - Hook infinite scroll.md
```

### Ejemplo 2: Patron de Arquitectura

```
ANALIZANDO: https://github.com/vercel/next.js

CONTENIDO ENCONTRADO:
- Tipo: Patron de arquitectura
- Descripcion: App Router con layouts anidados

DONDE GUARDAR?
1. 01 Proyectos/Activos/{Proyecto Actual}/Patron - App Router layouts.md
2. [Recomendado] 03 Conexiones - MOCs/MOC Next.js.md
3. 00 Inbox
4. Otro

> Usuario selecciona: 2

GUARDADO: 03 Conexiones - MOCs/MOC Next.js.md (actualizado con nuevo patron)
```

---

## Consejos

- Siempre IDENTIFICAR el tipo de contenido antes de preguntar
- Siempre RECOMENDAR la carpeta mas apropiada
- Generar nombres descriptivos y consistentes
- Preguntar al usuario para confirmar antes de guardar
- Mantener el Inbox limpio moviendo contenido procesado
- Actualizar MOCs cuando se agreguen nuevas notas
- Destilar Logs AI periodicamente

---

Directorio base para esta skill: file:///C:/Users/gpedr/.agents/skills/pace
Las rutas relativas en esta skill son relativas a este directorio base.
