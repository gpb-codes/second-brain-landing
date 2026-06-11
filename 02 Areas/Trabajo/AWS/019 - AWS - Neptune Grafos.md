---
title: "AWS - Neptune Grafos"
aliases: [Neptune, Amazon Neptune, Graph Database]
tags: [aws, neptune, database, graph, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/neptune/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Neptune Grafos

> [!info] Descripcion
> Amazon Neptune es un servicio de base de datos de grafos rapido, fiable y completamente gestionado que ayuda a construir y ejecutar aplicaciones que trabajan con conjuntos de datos de grafos altamente conectados.

---

## Que es Neptune

Neptune es graph database que:
- Almacena relaciones y conexiones
- Apache TinkerPop (Gremlin)
- W3C RDF (SPARQL)
- Replicacion Multi-AZ
- Hasta 15 Read Replicas

## Tipos de Grafos

### Property Graph
- Vertices y edges
- Propiedades en ambos
- Gremlin query language

### RDF (Resource Description Framework)
- Triples (sujeto, predicado, objeto)
- SPARQL query language
- Linked data

## Query Languages

### Gremlin (Property Graph)
```gremlin
g.V().has('name','Juan').out('knows').values('name')
```

### SPARQL (RDF)
```sparql
SELECT ?name WHERE {
  ?person :knows ?friend .
  ?friend :name ?name .
}
```

## Architecture

### Primary Instance
- Writes
- Failover target

### Read Replicas
- Scale reads
- Up to 15 replicas
- Cross-region

### Storage
- Auto-replicated
- 6 copies across 3 AZs
- Point-in-time recovery

## Performance

### Caching
- Query result caching
- Auto-scaled
- In-memory

### Indexing
- Automatic indexing
- Graph-aware queries
- Full-text search

### Query Optimization
- Query plan caching
- Parallel query execution
- Statistics

## Neptune ML

### Machine Learning
- GNN (Graph Neural Networks)
- Node classification
- Link prediction
- Custom models

### Use Cases
- Fraud detection
- Recommendation engines
- Knowledge graphs

## Neptune Analytics

### Graph Algorithms
- Centrality measures
- Community detection
- Path finding
- Similarity

### Vector Search
- Semantic search
- RAG (Retrieval-Augmented Generation)
- Embeddings

---

## Aplicacion

### Donde Usar
- Social networks
- Fraud detection
- Knowledge graphs
- Recommendation engines
- Identity graphs
- Network/IT operations
- Life sciences

### Precauciones
- Modelado del grafo es critico
- Indexar propiedades usadas en queries
- Monitorear query performance
- Usar bulk loader para datos iniciales
- Configurar Neptune ML para predicciones

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/neptune/)
- [Neptune Pricing](https://aws.amazon.com/neptune/pricing/)
- [Neptune Developer Guide](https://docs.aws.amazon.com/neptune/latest/userguide/)
