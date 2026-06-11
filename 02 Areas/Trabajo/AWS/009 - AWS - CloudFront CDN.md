---
title: "AWS - CloudFront CDN"
aliases: [CloudFront, Amazon CloudFront, CDN AWS]
tags: [aws, cloudfront, cdn, networking, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/cloudfront/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - CloudFront CDN

> [!info] Descripcion
> Amazon CloudFront es un servicio de red de entrega de contenido (CDN) que entrega datos, videos, aplicaciones e APIs a clientes de todo el mundo con baja latencia y altas velocidades de transferencia.

---

## Que es CloudFront

CloudFront es CDN global que:
- Entrega contenido desde bordes cercanos al usuario
- Reduce latencia y bandwidth
- Integra con S3, EC2, Lambda
- Proteccion contra ataques DDoS

## Conceptos Clave

### Distribution
- Configuracion de CDN
- Origen del contenido
- Reglas de cache

### Edge Locations
- Mas de 400 puntos de presencia
- Cachear contenido estatico
- Reduccion de latencia

### Origin
- Fuente del contenido
- S3 bucket
- EC2 instance
- Application Load Balancer
- Any HTTP server

### Behavior
- Reglas de cache por path pattern
- Politicas de cache
- Restrictions

## Configuracion

### Tipos de Distribution
- **Web**: Contenido estatico y dinamico
- **RTMP**: Streaming de video

### Cache Policies
- **Managed**: Policies predefinidas
- **Custom**: Definir TTL headers, query strings
- **CachingOptimized**: Maximo cache

### Origin Groups
- Failover automatico
- Origen primario y secundario
- Health checks

## Seguridad

### SSL/TLS
- Certificados SSL propios
- Certificados ACM (gratuitos)
- HTTP/2 y HTTP/3 soportados

### WAF Integration
- Proteccion contra SQL injection
- Proteccion contra XSS
- Rate limiting

### Signed URLs y Signed Cookies
- Acceso restringido a contenido
- Expiracion temporal
- Distribucion segura

## Performance

### Compression
- Gzip y Brotli
- Auto-compression
- Reduccion de bandwidth

### HTTP/2
- Multiplexing
- Header compression
- Server push

### Lambda@Edge
- Ejecutar codigo en edge locations
- Personalizar respuestas
- Transformar requests

## Pricing

### Free Tier
- 1 TB de transferencia por mes
- 10M requests HTTP/HTTPS por mes
- 12 meses del FREE tier

### Costos
- $0.085 por GB (primeros 10 TB)
- $0.060 por GB (siguientes 40 TB)
- $0.040 por GB (siguientes 100 TB)

---

## Aplicacion

### Donde Usar
- Sitios web estaticos
- Streaming de video
- API acceleration
- Software distribution
- Game updates
- Mobile app backends

### Precauciones
- Configurar cache policies correctamente
- Monitorear metrics de cache hit ratio
- Usar WAF para proteccion
- Configurar Origin Access Identity
- Revisar costos de transferencia

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/cloudfront/)
- [CloudFront Pricing](https://aws.amazon.com/cloudfront/pricing/)
- [CloudFront Best Practices](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/BestPractices.html)
