---
title: "AWS - Timestream Series Temporales"
aliases: [Timestream, Amazon Timestream, Time Series Database]
tags: [aws, timestream, database, time-series, iot, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/timestream/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Timestream Series Temporales

> [!info] Descripcion
> Amazon Timestream es una base de datos de series temporales rapida, escalable y serverless disenada para recopilar, almacenar y consultar datos de series temporales a un costo hasta 1000x menor que las bases de datos relacionales.

---

## Que es Timestream

Timestream es time series database que:
- Optimizado para datos timestamped
- Serverless y auto-escalable
- Query language basado en SQL
- Built-in time series functions
- Tiered storage automatico

## Conceptos Clave

### Databases
- Contenedor de tablas
- Maximo 255 databases por account
- Maximo 250 tablas por database

### Tables
- Coleccion de datos
- Primary key (measure name)
- Timestamp como parte de la clave

### Measures
- Datos metricos
- Numerico, string, bigint, boolean
- Multiples units

### Dimensions
- Metadata de series
- Multi-valued dimensions
- Para filtrar y agrupar

## Time Stores

### In-Memory Store
- Datos recientes (horas/dias)
- Alta frecuencia de query
- Configurable (hasta 13 meses)

### Magnetic Store
- Datos historicos
- Storage duradero
- Retencion indefinida
- Costo reducido

## Query Language

### Basic Query
```sql
SELECT measure_name, measure_value
FROM "mydb"."mytable"
WHERE time > ago(1h)
```

### Time Series Functions
```sql
SELECT 
  time,
  ROUND(AVG(measure_value), 2)
FROM "mydb"."mytable"
WHERE measure_name = 'cpu'
GROUP BY BINS(time, 1h)
```

### Approximate Functions
```sql
SELECT APPROX_PERCENTILE(measure_value, 0.99)
FROM "mydb"."mytable"
WHERE time > ago(24h)
```

## Features

### Scheduled Queries
- Transformacion de datos
- Materialized views
- Downsampling
- Rollups

### Scheduled Queries SQL
```sql
SELECT 
  BIN(time, 1h) as binned_timestamp,
  AVG(measure_value) as avg_value
FROM "raw"."metrics"
GROUP BY BIN(time, 1h)
```

### Data Ingestion
- AWS SDK
- Telegraf
- Fluentd
- MQTT

### Synapse Integration
- Query en S3
- Federated queries
- Cross-service analytics

## Monitoring

### CloudWatch Metrics
- IngestedRecords
- MemoryStoreSize
- MagneticStoreSize
- QueryResultRows

### Timestream Console
- Query editor
- Table metrics
- Ingestion metrics

---

## Aplicacion

### Donde Usar
- IoT telemetry
- DevOps metrics
- Application monitoring
- Industrial IoT
- Smart home
- Connected vehicles
- Financial market data

### Precauciones
- Disenar schema para queries comunes
- Usar scheduled queries para downsampling
- Monitorear magnetic store usage
- Configurar TTL para magnetic store
- Usar dimensions efectivamente

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/timestream/)
- [Timestream Pricing](https://aws.amazon.com/timestream/pricing/)
- [Timestream Developer Guide](https://docs.aws.amazon.com/timestream/latest/developerguide/)
