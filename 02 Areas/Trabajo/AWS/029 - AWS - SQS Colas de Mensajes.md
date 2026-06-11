---
title: "AWS - SQS Colas de Mensajes"
aliases: [SQS, Simple Queue Service, Colas AWS]
tags: [aws, sqs, messaging, queue, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/sqs/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - SQS Colas de Mensajes

> [!info] Descripcion
> Amazon SQS (Simple Queue Service) es un servicio de colas de mensajes completamente gestionado que le permite desacoplar y escalar microservicios, distribuidos y aplicaciones serverless.

---

## Que es SQS

SQS es message queue service que:
- Enviar, almacenar y recibir mensajes
- Desacoplamiento de componentes
- Escalado automatico
- Sin management de infraestructura
- Hasta 256 KB por mensaje

## Tipos de Colas

### Standard Queue
- Orden aproximada
- At-least-once delivery
- Multiple consumers
- Throughput ilimitado

### FIFO Queue
- Orden exacta (FIFO)
- Exactly-once processing
- Limited to 3,000 TPS
- Grouping de mensajes

## Conceptos Clave

### Message
- Payload (hasta 256 KB)
- Message ID
- Receipt handle
- Attributes

### Queue
- Contenedor de mensajes
- Nombre unico
- Configuracion de retencion

### Producer
- Envia mensajes a la cola
- SendMessage API
- Batch operations

### Consumer
- Recibe y procesa mensajes
- ReceiveMessage API
- DeleteMessage despues de procesar

## Features

### Dead Letter Queue (DLQ)
- Mensajes fallidos
- MaxReceiveCount
- Troubleshooting
- Redrive policy

### Message Retention
- 1 minuto a 14 dias
- Default: 4 dias
- Configurable

### Visibility Timeout
- Mensaje oculto despues de recibir
- 0 a 43,200 segundos (12 horas)
- Si no se borra, vuelve a estar disponible

### Delay Queue
- Retrasar disponibilidad
- Hasta 15 minutos (Standard)
- Exact delay (FIFO)

### Long Polling
- Reduce EmptyReceives
- 1 a 20 segundos
- Ahorra costos

## FIFO Features

### Message Grouping
- Group ID requerido
- Orden within group
- Paralelismo por group

### Deduplication
- Content-based deduplication
- Deduplication ID
- 5 minuto window

### Ordering
- Strict order within group
- No cross-group ordering
- Transactions

## Encryption

### At Rest
- SSE-SQS (default)
- SSE-KMS (custom keys)
- Custom encryption

### In Transit
- HTTPS endpoints
- TLS 1.2

## Pricing

### Standard Queue
- $0.40 por 1M requests (primeras 1M gratis)
- $0.00 por transferencia de datos

### FIFO Queue
- $0.50 por 1M requests
- $0.00 por transferencia

---

## Aplicacion

### Donde Usar
- Decoupling microservices
- Batch processing
- Order processing
- Log processing
- Notifications
- Fan-out patterns
- Buffer writes

### Precauciones
- Use DLQ para debugging
- Configure visibility timeout correctly
- Use long polling para reducir costos
- FIFO para orden estricto
- Monitor approximate metrics

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/sqs/)
- [SQS Pricing](https://aws.amazon.com/sqs/pricing/)
- [SQS Best Practices](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-best-practices.html)
