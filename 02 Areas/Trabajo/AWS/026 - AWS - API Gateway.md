---
title: "AWS - API Gateway"
aliases: [APIGW, API Gateway, Amazon API Gateway]
tags: [aws, api-gateway, serverless, api, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/api-gateway/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - API Gateway

> [!info] Descripcion
> Amazon API Gateway es un servicio gestionado que facilita crear, publicar, mantener, monitorear y asegurar APIs a cualquier escala, proporcionando un punto de entrada unificado para aplicaciones backend.

---

## Que es API Gateway

API Gateway es managed API service que:
- Crea y gestiona APIs REST, HTTP y WebSocket
- Escalado automatico
- Autenticacion y autorizacion
- Caching y throttling
- Monitoreo y logs

## Tipos de APIs

### REST API
- Full-featured API management
- Request/response transformations
- API keys y usage plans
- Caching
- WAF integration

### HTTP API
- Lambda functions as backend
- Lower cost
- JWT authorizers
- Simpler configuration
- Auto-deploy

### WebSocket API
- Real-time bidirectional
- Connections management
- Route selection
- Integrations

## Conceptos Clave

### Resources
- Endpoints (rutas)
- Method definitions
- Request/response models

### Stages
- Deployment environments
- Variables por stage
- Stage variables

### Methods
- HTTP methods (GET, POST, etc.)
- Integration type
- Authorization

### Integrations
- **Lambda**: Serverless backend
- **HTTP**: Any HTTP endpoint
- **AWS**: Other AWS services
- **Mock**: Test responses

## Configuration

### REST API Example
```yaml
openapi: "3.0.1"
paths:
  /users:
    get:
      x-amazon-apigateway-integration:
        type: aws_proxy
        httpMethod: POST
        uri: arn:aws:apigateway:us-east-1:lambda:path/2015-03-31/functions/arn:aws:lambda:us-east-1:123:function:MyFunction/invocations
```

### Stage Variables
```yaml
stageVariables:
  lambdaAlias: live
  backendUrl: https://api.example.com
```

## Features

### Caching
- In-memory cache
- TTL configurable
- Cache size: 0.5-237 GB
- Per-stage

### Usage Plans & API Keys
- Throttling per client
- Quotas per client
- API keys for identification
- Metering

### Request/Response Transformations
- Mapping templates
- Parameter transformations
- Header manipulation
- Body transformations

### Custom Domains
- Custom domain names
- ACM certificates
- Base path mappings
- Regional or edge-optimized

### Canary Deployments
- Traffic shifting
- Stage variables
- Gradual rollout

## Security

### Authorization
- IAM
- Cognito User Pools
- Lambda Authorizers
- API Keys

### WAF Integration
- Rate limiting
- IP blocking
- SQL injection protection
- XSS protection

### mTLS
- Mutual TLS
- Custom domain certificates
- Client certificate validation

### CORS
- Cross-origin resource sharing
- Preflight requests
- Origin configuration

## Monitoring

### CloudWatch Metrics
- Latency
- 5XX errors
- 4XX errors
- Count
- CacheHitCount

### Access Logging
- Custom log format
- CloudWatch Logs
- S3 integration

### X-Ray
- End-to-end tracing
- Latency analysis
- Error tracking

---

## Aplicacion

### Donde Usar
- REST APIs
- WebSocket applications
- Microservices gateway
- Mobile backends
- Web application backends
- Partner API integration

### Precauciones
- Configurar throttling
- Use custom domains en produccion
- Enable caching para performance
- Monitor latency y errors
- Use WAF para seguridad

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/apigateway/)
- [API Gateway Pricing](https://aws.amazon.com/api-gateway/pricing/)
- [API Gateway Best Practices](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-best-practices.html)
