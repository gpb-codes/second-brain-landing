---
tags:
  - github
  - documentacion
  - proyectos
  - guia
tipo: guia
plataforma: github
estado: completo
---

# Documentación de Proyectos en GitHub

## Estructura recomendada para cada proyecto

```
proyecto/
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug-report.md
│   │   └── feature-request.md
│   └── pull_request_template.md
├── src/
│   └── main.py (o index.js)
├── tests/
│   └── test_main.py
├── docs/
│   ├── index.md
│   ├── instalacion.md
│   └── uso.md
├── examples/
│   └── example.py
├── README.md
├── CONTRIBUTING.md
├── LICENSE
├── .gitignore
├── requirements.txt (o package.json)
└── CHANGELOG.md
```

---

## Tipos de documentación

### README.md — La puerta de entrada

Debe responder en <30 segundos:
- ¿Qué hace este proyecto?
- ¿Por qué existe?
- ¿Cómo empiezo a usarlo?
- ¿Cómo contribuyo?

### docs/ — Documentación detallada

Para proyectos medianos/grandes:
- Guía de instalación
- Guía de uso
- Referencia de API
- Ejemplos avanzados
- FAQ

### CHANGELOG.md — Historial de cambios

```
# Changelog

## [1.0.1] - 2026-01-15
### Fixed
- Bug en X cuando Y

## [1.0.0] - 2026-01-01
### Added
- Funcionalidad principal
- Tests unitarios
- Documentación inicial
```

---

## Documentación del código

### Estilo de docstrings (Python)

```python
def procesar_texto(texto: str, idioma: str = "es") -> dict:
    """
    Procesa un texto y devuelve métricas de análisis.

    Args:
        texto: Texto a procesar
        idioma: Código de idioma (por defecto "es")

    Returns:
        dict con métricas: tokens, sentimientos, temas

    Raises:
        ValueError: Si el texto está vacío
    """
    pass
```

### Comentarios de código

```python
# ❌ MAL: Comenta lo obvio
x = x + 1  # Incrementa x en 1

# ✅ BIEN: Explica el por qué
# Normalizamos con log para evitar skew por outliers
x = np.log(x + 1)
```

---

## Wiki de GitHub

Para proyectos que lo requieran, usar GitHub Wiki:

- **Home** — Visión general
- **Getting Started** — Primeros pasos
- **Architecture** — Decisiones técnicas
- **API Reference** — Endpoints y funciones
- **FAQ** — Preguntas frecuentes
- **Troubleshooting** — Problemas comunes

---

## Ejemplos vivos

Siempre incluir un `examples/` con:

1. **Ejemplo mínimo** — Que funcione copiando y pegando
2. **Ejemplo avanzado** — Caso de uso real
3. **Ejemplo con datos** — Datos de muestra incluidos

---

## Estándares de documentación

| Elemento | Estándar |
|----------|----------|
| README | Plantilla del proyecto |
| Docstrings | Google style (Python) / JSDoc (JS) |
| Commits | Conventional Commits |
| Issues | Templates predefinidos |
| PRs | Template con checklist |
| Versiones | Semantic Versioning |

---

## Automatización de documentación

| Herramienta | Para qué |
|-------------|----------|
| **GitHub Actions** | CI/CD, tests automáticos |
| **Sphinx** | Documentación Python |
| **Typedoc** | Documentación TypeScript |
| **Docusaurus** | Sitio de documentación |
| **MkDocs** | Documentación estática |
| **pre-commit** | Formateo automático |

---

## Conexiones con el vault

- [[GitHub/plantillas-repositorio]] — Plantillas de repositorio
- [[GitHub/guia-open-source]] — Guía de contribuciones
- [[Proyectos/proyectos-personales]] — Proyectos para documentar
- [[Proyectos/casos-de-estudio]] — Casos documentados
