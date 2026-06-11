---
title: "AWS - DocumentDB"
aliases: [DocumentDB, Amazon DocumentDB, MongoDB AWS]
tags: [aws, documentdb, database, nosql, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/documentdb/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - DocumentDB

> [!info] Descripcion
> Amazon DocumentDB (con compatibilidad MongoDB) es una base de datos de documentos escalable, rapida y completamente gestionada que hace que sea facil configurar, operar y escalar bases de datos de documentos en la nube.

---

## Que es DocumentDB

DocumentDB es managed document database que:
- Compatible con MongoDB (3.6, 4.0)
- NoSQL document-based
- Escalado horizontal con replicas
- Storage auto-escalado

## MongoDB Compatibility

### Features Soportadas
- CRUD operations
- Aggregation pipeline
- Transactions
- Change streams
- Indexes

### Limitaciones
- No replica sets (usa clusters propios)
- WiredTiger storage engine
- Algunas APIs no implementadas

## Architecture

### Cluster
- 1 writer instance
- Hasta 15 read replicas
- Storage compartido

### Storage
- 6 copies en 3 AZs
- Auto-escalado
- Point-in-time restore
- Continuous backup

### Instances
- db.r5.large (2 vCPU, 16 GB)
- db.r5.4xlarge (16 vCPU, 128 GB)
- Hasta db.r5.16xlarge

## Features

### Change Streams
- Monitoreo de cambios
- Real-time events
- Integracion con Lambda

### Global Clusters
- Multi-region replication
- < 1 second lag
- Disaster recovery

### Backups
- Continuous backups
- Point-in-time restore (ultimos 35 dias)
- Snapshots manuales

### Encryption
- KMS encryption at rest
- TLS en transito
- AWS KMS managed keys

## Conectividad

### MongoDB Drivers
- Compatible con drivers MongoDB estandar
- Connection string:
```
mongodb://user:pass@cluster.xxxxx.docdb.amazonaws.com:27017/db?ssl=true
```

### Tools
- mongo shell
- MongoDB Compass
- Robo 3T

## Performance

### Indexes
- B-tree indexes
- Compound indexes
- Text indexes
- Geospatial indexes

### Caching
- Query result caching
- Read replicas
- In-memory

---

## Aplicacion

### Donde Usar
- Content management
- User profiles
- Catalogs de producto
- Session storage
- Mobile backends
- IoT data

### Precauciones
- Usar drivers MongoDB actualizados
- Monitorear storage usage
- Configurar read replicas
- Usar indexes efectivamente
- Considerar costos vs MongoDB Atlas

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/documentdb/)
- [DocumentDB Pricing](https://aws.amazon.com/documentdb/pricing/)
- [DocumentDB Developer Guide](https://docs.aws.amazon.com/documentdb/latest/developerguide/)
