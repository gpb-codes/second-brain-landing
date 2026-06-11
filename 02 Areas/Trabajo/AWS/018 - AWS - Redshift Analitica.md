---
title: "AWS - Redshift Analitica"
aliases: [Redshift, Amazon Redshift, Data Warehouse AWS]
tags: [aws, redshift, analytics, data-warehouse, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/redshift/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Redshift Analitica

> [!info] Descripcion
> Amazon Redshift es un servicio de data warehouse en la nube que permite analizar petabytes de datos usando SQL y herramientas de inteligencia de negocios existentes.

---

## Que es Redshift

Redshift es data warehouse que:
- Columnar storage
- Compresion automatica
- Parallel processing (MPP)
- SQL-based analytics
- Conecta con S3, RDS, EMR

## Conceptos Clave

### Cluster
- Conjunto de nodes
- Leader node + Compute nodes
- Endpoint unico

### Node Types
- **RA3**: Con managed storage
- **DC2**: Dense compute
- Hasta 128 nodes

### Schemas
- Tablas y relaciones
- Distinct keys
- Sort keys

### Workgroups
- Configuracion compartida
- Resource monitoring
- Query groups

## Architecture

### Leader Node
- SQL parsing
- Query planning
- Distribucion de trabajo

### Compute Nodes
- Parallel processing
- Local storage
- Ejecucion de queries

### Managed Storage
- Storage elastic
- S3-backed
- Auto-scale sin limites

## Performance

### Columnar Storage
- Solo lee columnas necesarias
- Compresion por columna
- Reduccion de I/O

### Compression
- Automatic encoding
- LZ0, ZSTD, AZ64
- Ahorra 2-4x de storage

### Dist Keys
- Distribucion de datos
- Even distribution
- Co-located joins

### Sort Keys
- Orden de datos
- Range elimination
- Mejora de filtros

## Redshift Spectrum

### Query S3 Directamente
- Sin cargar datos
- Petabytes in S3
- Mismo SQL que Redshift

### External Tables
- Mapeo de datos en S3
- Hive-compatible format
- JSON, Parquet, ORC

### Integration
- Data lake queries
- Cross-service analytics
- Costo por query

## Redshift Serverless

### No Clusters
- Sin management de nodes
- Auto-scaling de capacidad
- Pago por RPU-hours

### Use Cases
- Development/testing
- Workloads impredecibles
- Analisis ad-hoc

## Conectividad

### JDBC/ODBC
- Clientes SQL estandar
- Tableau, PowerBI, etc.

### Python/Node.js
- psycopg2, pyodbc
- Redshift Data API

### Integration
- Glue, Athena
- QuickSight
- Data Pipeline

---

## Aplicacion

### Donde Usar
- Business intelligence
- Analisis de ventas
- Log analysis
- Data warehousing
- Machine learning pipelines
- Reporting

### Precauciones
- Designar dist keys y sort keys
- Monitorear query performance
- Usar compression encoding
- Configurar VPC connectivity
- Considerar Redshift Spectrum

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/redshift/)
- [Redshift Pricing](https://aws.amazon.com/redshift/pricing/)
- [Redshift Best Practices](https://docs.aws.amazon.com/redshift/latest/best-practices/)
