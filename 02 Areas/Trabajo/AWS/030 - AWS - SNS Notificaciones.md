---
title: "AWS - SNS Notificaciones"
aliases: [SNS, Simple Notification Service, Notificaciones AWS]
tags: [aws, sns, messaging, notifications, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/sns/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - SNS Notificaciones

> [!info] Descripcion
> Amazon SNS (Simple Notification Service) es un servicio web que facilita configurar, operar y enviar notificaciones desde la nube, entregando mensajes a sus suscriptores a traves de multiples protocolos.

---

## Que es SNS

SNS es pub/sub messaging service que:
- Publicar y suscribir mensajes
- Múltiples protocolos de entrega
- Fan-out patterns
- Mobile push notifications
- Email y SMS

## Conceptos Clave

### Topics
- Canal de comunicacion
- Nombre unico
- Acceso via policy

### Publishers
- Envian mensajes a topics
- AWS SDK
- HTTP(S)

### Subscribers
- Reciben mensajes de topics
- Multiples protocolos
- Filtros por attribute

### Messages
- Hasta 256 KB (texto)
- Payload generico
- Metadata incluida

## Protocolos

### SQS
- Integra con colas
- Fan-out patterns
- Asincrono

### Lambda
- Invocacion directa
- Event processing
- Serverless

### Email
- SMTP delivery
- JSON o texto plano
- Suscripcion confirmada

### SMS
- Mensajes de texto
- Global coverage
- Marketing o transaccional

### HTTP/HTTPS
- Webhooks
- Endpoints propios
- Custom delivery

### Application
- Mobile push
- APNs, FCM
- Kindle Fire

## Features

### Message Filtering
- Attribute-based filtering
- Subscription filter policies
- Complex expressions

### Fan-Out Pattern
```
SNS Topic
  ├── SQS Queue 1
  ├── SQS Queue 2
  ├── Lambda Function
  └── HTTP Endpoint
```

### Message Archiving
- S3 integration
- CloudWatch Logs
- Redrive policy

### FIFO Topics
- Ordered delivery
- Exactly-once
- Deduplication
- Message groups

## Mobile Push

### Supported Platforms
- Apple Push Notification Service (APNs)
- Firebase Cloud Messaging (FCM)
- Amazon Device Messaging (ADM)
- Microsoft Push Notification Service (MPNS)
- Baidu Cloud Push

### Platform Applications
- Configuracion por plataforma
- Credentials y certificates
- Multiple endpoints

## Security

### IAM Policies
- Publish permissions
- Subscribe permissions
- Topic management

### Encryption
- KMS at rest
- HTTPS in transit
- Client-side encryption

### Access Policy
- Topic-based access
- Source restrictions
- Cross-account

## Pricing

### Free Tier
- 1M publishes
- 100K HTTP deliveries
- 1K email deliveries
- 100 SMS (domestic)

### Post Free Tier
- $0.50 por 1M requests
- $0.06 por 100K notifications
- SMS por pais

---

## Aplicacion

### Donde Usar
- Alertas y monitoreo
- Event notifications
- Application-to-application messaging
- Mobile push notifications
- Email/SMS campaigns
- Fan-out processing

### Precauciones
- Use filter policies para eficiencia
- Configure DLQ para fallos
- Monitorear delivery metrics
- Use FIFO topics para orden
- Considera costos de SMS

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/sns/)
- [SNS Pricing](https://aws.amazon.com/sns/pricing/)
- [SNS Best Practices](https://docs.aws.amazon.com/sns/latest/dg/best-practices.html)
