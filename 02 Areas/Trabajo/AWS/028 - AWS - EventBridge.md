---
title: "AWS - EventBridge"
aliases: [EventBridge, Amazon EventBridge, Event Bus]
tags: [aws, eventbridge, serverless, events, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/eventbridge/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - EventBridge

> [!info] Descripcion
> Amazon EventBridge es un servicio de bus de eventos serverless que facilita conectar aplicaciones juntas usando datos de sus propias aplicaciones, SaaS y servicios AWS, sin gestionar infraestructura.

---

## Que es EventBridge

EventBridge es event bus service que:
- Route events between AWS services
- Integra con aplicaciones SaaS
- Serverless event routing
- Archive y replay
- Schema discovery

## Conceptos Clave

### Event Bus
- Canal de eventos
- Default bus (AWS events)
- Custom buses
- Partner buses

### Rules
- Event pattern matching
- Targets selection
- Multiple targets por rule

### Targets
- Lambda functions
- SQS queues
- SNS topics
- Step Functions
- EC2 instances
- ECS tasks
- Kinesis streams
- API Gateway

### Events
- JSON payloads
- Up to 256 KB
- Timestamp included
- Source information

## Event Pattern

### Ejemplo
```json
{
  "source": ["aws.ec2"],
  "detail-type": ["EC2 Instance State-change Notification"],
  "detail": {
    "state": ["stopped", "terminated"]
  }
}
```

### Content Filtering
- Prefix matching
- Anything-but matching
- Numeric matching
- IP address matching
- Existence matching

## Features

### Schemas
- Auto-discovery
- Schema registry
- Code generation
- OpenAPI compatible

### Archives
- Store events
- Retention indefinida
- Replay events
- Cross-region

### Replays
- Replay archived events
- Date range selection
- Event pattern filter
- Multiple targets

### Pipes
- Source to Target
- Enrichment steps
- Filtering
- Batch support

## Event Sources

### AWS Services
- EC2, RDS, S3
- CloudTrail
- GuardDuty
- Security Hub
- Over 25 services

### SaaS Partners
- Zendesk, Shopify
- Datadog, PagerDuty
- Auth0, Okta
- Over 50 partners

### Custom Events
- PutEvents API
- Cross-account
- Partner event buses

## API Destinations

### HTTP Endpoints
- Event-driven HTTP
- Auth support
- Retry policy
- Connection limits

### Integration
- Webhooks
- REST APIs
- Third-party services

## Rule Targets

### Lambda
- Direct invocation
- Async execution
- Error handling

### SQS
- Queue messages
- FIFO support
- Dead letter queues

### Step Functions
- State machine execution
- Sync/async

### Input Transformers
- Custom event formats
- Path expressions
- JSON template

---

## Aplicacion

### Donde Usar
- Event-driven architectures
- SaaS integrations
- Workflow automation
- Log processing
- Compliance monitoring
- Real-time analytics

### Precauciones
- Design event schemas carefully
- Use content filtering for efficiency
- Monitor event delivery
- Use archives for debugging
- Consider event size limits

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/eventbridge/)
- [EventBridge Pricing](https://aws.amazon.com/eventbridge/pricing/)
- [EventBridge User Guide](https://docs.aws.amazon.com/eventbridge/latest/userguide/)
