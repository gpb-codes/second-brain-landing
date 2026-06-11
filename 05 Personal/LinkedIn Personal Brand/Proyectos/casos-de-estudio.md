---
tags:
  - proyectos
  - casos-de-estudio
  - portafolio
  - resultados
tipo: casos-de-estudio
categoria: proyectos
estado: completo
---

# Casos de Estudio

## Caso 1: Automatización de Documentación de Reuniones

**Cliente/Contexto:** Proyecto personal → Drakkar Labs
**Problema:** Pérdida de tiempo documentando reuniones técnicas. ~4h/semana en tareas administrativas post-reunión.
**Solución:** Pipeline automatizado con IA que transcribe, resume y documenta.

**Stack técnico:**
- Whisper (transcripción local)
- GPT-4 (procesamiento y resumen)
- Python (orquestación)
- Notion API (documentación)
- GitHub API (creación de issues)

**Resultados:**
| Métrica | Antes | Después |
|---------|-------|---------|
| Tiempo semanal | 4 horas | 15 minutos |
| Precisión | ~70% manual | ~90% automatizado |
| Cobertura | 40% reuniones | 100% reuniones |
| Tareas perdidas | ~3/semana | ~0.3/semana |

**Lecciones:**
- La transcripción local (Whisper) es más privada y económica
- El prompt de resumen define la calidad del output
- La integración con herramientas existentes reduce fricción

---

## Caso 2: Sistema de Gestión de Conocimiento Personal

**Cliente/Contexto:** Uso personal
**Problema:** Conocimiento fragmentado en múltiples herramientas (Google Drive, bookmarks, notas sueltas).
**Solución:** Sistema centralizado en Obsidian con automatización y enlaces bidireccionales.

**Stack:**
- Obsidian + Plugins (Dataview, Kanban, Git)
- Python scripts para automatización
- Claude API para categorización

**Resultados:**
| Métrica | Antes | Después |
|---------|-------|---------|
| Notas totales | Dispersas | 1,200+ interconectadas |
| Tiempo búsqueda | 5-10 min | <30 segundos |
| Conexiones entre ideas | 0 | 3,000+ enlaces |
| Tasa de reutilización | Baja | Alta (linked references) |

---

## Caso 3: Asistente IA Local con Ollama

**Cliente/Contexto:** Proyecto experimental — Drakkar Labs
**Problema:** Dependencia de APIs externas para procesamiento de datos sensibles.
**Solución:** Despliegue de modelos locales (Llama 3, Mistral) con Ollama para procesamiento privado.

**Stack:**
- Ollama
- Python + LangChain
- Modelos: Llama 3, Mistral, Phi-3
- Interfaz: API REST + CLI

**Resultados:**
| Aspecto | API Cloud | Local |
|---------|-----------|-------|
| Privacidad | Datos enviados a terceros | 100% local |
| Costo | Por token | Solo electricidad |
| Latencia | 1-3s | 2-8s (sin GPU) |
| Control | Limitado | Total |

---

## Caso 4: Framework de Productividad para Devs

**Cliente/Contexto:** Uso personal y comunidad
**Problema:** Falta de métricas objetivas sobre productividad en desarrollo de software.
**Solución:** Dashboard personal con métricas de tiempo, commits, PRs, y estados de ánimo.

**Stack:**
- React + Chart.js
- Node.js + Express
- GitHub API
- Datos locales en JSON

---

## Caso 5: Automatización de Flujo de Contenido

**Cliente/Contexto:** Marca personal / LinkedIn
**Problema:** Tiempo excesivo creando y programando contenido.
**Solución:** Pipeline IA que genera ideas, redacta borradores y programa publicaciones.

---

---

## Conexiones con el vault

- [[Publicaciones/post-06]] — Versión resumida del Caso 1
- [[Proyectos/drakkar-labs]] — Laboratorio de proyectos
- [[Proyectos/proyectos-personales]] — Otros proyectos
- [[Recursos/ideas-publicaciones]] — Más ideas para documentar

---

## Casos futuros documentables

1. Migración de arquitectura monolítica a microservicios
2. Integración de IA en app web existente
3. Optimización de base de datos (rendimiento)
4. Implementación de CI/CD pipeline
5. Desarrollo de API pública desde cero
