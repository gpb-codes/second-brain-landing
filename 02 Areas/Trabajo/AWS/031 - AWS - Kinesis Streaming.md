---
title: "AWS - Kinesis Streaming"
aliases: [Kinesis, Amazon Kinesis, Data Streaming]
tags: [aws, kinesis, streaming, data, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/kinesis/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Kinesis Streaming

> [!info] Descripcion
> Amazon Kinesis es una plataforma de streaming de datos que facilita cargar y analizar datos de streaming de forma simple y cost-efectiva a cualquier escala.

---

## Que es Kinesis

Kinesis es data streaming platform que:
- Ingesta de datos en tiempo real
- Procesamiento de streams
- Analitica en tiempo real
- Escalado automatico

## Componentes

### Kinesis Data Streams
- Captura y almacena datos
- Shard-based scaling
- Consumer applications
- Hasta 2 TB/shard

### Kinesis Data Firehose
- Load into data stores
- Near real-time (60s-90s)
- Auto-scaling
- Transformaciones

### Kinesis Data Analytics
- SQL queries en streaming
- Apache Flink applications
- Real-time analytics
- Machine learning

### Kinesis Video Streams
- Video streaming
- Playback y procesamiento
- Machine learning
- Storage

## Data Streams

### Shards
- 1 MB/s write, 2 MB/s read
- Hasta 5 read transactions
- Particion key based
- Auto-scaling

### Producers
- KPL (Kinesis Producer Library)
- AWS SDK
- Third-party libraries
- Batch y single put

### Consumers
- KCL (Kinesis Client Library)
- Lambda
- AWS SDK
- Third-party libraries

### Enhanced Fan-Out
- 2 MB/s per consumer
- Dedicated throughput
- Push delivery
- No polling

## Data Firehose

### Destinations
- S3
- Redshift
- Elasticsearch
- Splunk
- HTTP endpoints
- Datadog, MongoDB

### Transformations
- Lambda transforms
- Format conversion
- Compression
- Encryption

### Configuration
```yaml
DeliveryStreamType: DirectPut
S3DestinationConfiguration:
  BucketARN: arn:aws:s3:::my-bucket
  Prefix: data/
  BufferingHints:
    SizeInMBs: 5
    IntervalInSeconds: 300
```

## Data Analytics

### SQL Applications
- Queries en streaming
- Windows functions
- Join con datos estaticos
- Output a destinations

### Flink Applications
- Java/Scala/Python
- Full processing framework
- State management
- Complex event processing

## Pricing

### Data Streams
- $0.014/shard-hour
- $0.00 per PUT payload

### Data Firehose
- $0.029 per GB (ingested)
- $0.024 per GB (to S3)
- $0.038 per GB (to Redshift)

### Data Analytics
- $0.11 per AU-hour (SQL)
- $0.11 per PU-hour (Flink)

---

## Aplicacion

### Donde Usar
- Real-time analytics
- Log processing
- IoT data ingestion
- Social media streaming
- Gaming events
- Clickstream analysis
- Fraud detection

### Precauciones
- Shard capacity planning
- Monitor iterator age
- Use enhanced fan-out for multiple consumers
- Configure Firehose buffering
- Consider cost vs latency

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/kinesis/)
- [Kinesis Pricing](https://aws.amazon.com/kinesis/pricing/)
- [Kinesis Developer Guide](https://docs.aws.amazon.com/kinesis/latest/dev/)
