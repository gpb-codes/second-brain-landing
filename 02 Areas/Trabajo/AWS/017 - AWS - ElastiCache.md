---
title: "AWS - ElastiCache"
aliases: [ElastiCache, Amazon ElastiCache, Cache AWS]
tags: [aws, elasticache, cache, database, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/elasticache/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - ElastiCache

> [!info] Descripcion
> Amazon ElastiCache es un servicio web que facilita configurar, operar y escalar caches en la nube, mejorando el rendimiento de aplicaciones al recuperar datos desde memoria.

---

## Que es ElastiCache

ElastiCache es managed caching que:
- Reduce latencia de lectura
- Offload de bases de datos
- Session management
- Real-time analytics

## Engines Soportados

### Redis
- Estructuras de datos ricas
- Persistencia opcional
- Pub/Sub messaging
- Lua scripting
- Clustering

### Memcached
- Simple key-value
- Multithreaded
- Sin persistencia
- Stateless

## Conceptos Clave

### Node
- Instance individual
- Unico endpoint

### Cluster
- Grupo de nodes
- Shard/Replica
- Auto-failover (Redis)

### Parameter Group
- Configuracion del engine
- Tuning de memoria
- Connection limits

### Subnet Group
- Red para el cluster
- Private subnets
- Security groups

## Redis Features

### Clustering
- Hasta 500 nodes
- Automatic sharding
- Multi-AZ replicas

### Persistence
- RDB snapshots
- AOF (Append Only File)
- Sin persistence

### Replication
- Multi-AZ automatico
- Read replicas
- Cross-region replication

### Data Structures
- Strings, Lists, Sets, Hashes
- Sorted Sets, Bitmaps
- HyperLogLogs, Streams

## Memcached Features

### Multi-threaded
- Paralelismo nativo
- Sin overhead de replicas
- Simplicidad

### Auto-discovery
- Client-side discovery
- Endpoint unico
- Multi-AZ

## Performance

### Redis
- < 1ms latency
- Hasta 350K reads/s
- Hasta 200K writes/s

### Memcached
- < 1ms latency
- Multithreaded scaling
- Horizontal scaling

## Monitoring

### CloudWatch Metrics
- Cache Hit Rate
- CPU Utilization
- Database Memory Usage
- Current Connections
- Evictions

### Events
- Failover events
- Configuration changes
- Scaling events

---

## Aplicacion

### Donde Usar
- Session storage
- Database caching
- Game leaderboards
- Geospatial data
- Real-time analytics
- Message queues (Redis)

### Precauciones
- Redis: monitorear memoria
- Memcached: sin persistencia
- Configurar automatic failover
- Usar encryption en transito
- Planificar capacity

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/elasticache/)
- [ElastiCache Pricing](https://aws.amazon.com/elasticache/pricing/)
- [ElastiCache Best Practices](https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/BestPractices.html)
