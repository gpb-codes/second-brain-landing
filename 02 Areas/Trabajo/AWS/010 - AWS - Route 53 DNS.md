---
title: "AWS - Route 53 DNS"
aliases: [Route 53, Amazon Route 53, DNS AWS]
tags: [aws, route53, dns, networking, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/route53/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Route 53 DNS

> [!info] Descripcion
> Amazon Route 53 es un servicio de DNS (Domain Name System) altamente disponible y escalable que puede utilizarse para dirigir a los usuarios a aplicaciones de Internet.

---

## Que es Route 53

Route 53 es DNS management que:
- Registra y administra dominios
- Route traffic a endpoints
- Health checking automatico
- DNS globales y regionales

## Conceptos Clave

### Hosted Zone
- Contenedor de records DNS
- Public o Private
- Asociado a VPC (private)

### Record Sets
- Reglas DNS individuales
- Tipos: A, AAAA, CNAME, MX, TXT, etc.

### Health Checks
- Monitoreo de endpoints
- Failover automatico
- Health checks de configuracion

## Record Types

### A Record
- Domain -> IPv4 address
- Ejemplo: `example.com -> 52.85.123.45`

### AAAA Record
- Domain -> IPv6 address
- Ejemplo: `example.com -> 2600:9000::1`

### CNAME Record
- Domain -> Domain
- Ejemplo: `www.example.com -> example.com`
- No funciona en root zone

### MX Record
- Mail exchange servers
- Prioridad y servidor

### TXT Record
- Texto arbitrario
- SPF, DKIM, verification

### Alias Record
-指向 AWS resources
- No cobra queries
- Auto-actualiza con IP del resource

## Routing Policies

### Simple
- Un record, un target
- Sin health checks
- Uso basico

### Weighted
- Distribucion por porcentaje
- Mismo nombre, diferentes valores
- Testing A/B

### Latency
- Routing por latencia
- Regiones AWS mas cercanas
- Mejor experiencia de usuario

### Failover
- Primario y secundario
- Health check automatico
- Disaster recovery

### Geolocation
- Por ubicacion geografica
- Pais, continente, region
- Contenido localizado

### Multi-Value Answer
- Multiples IPs en respuesta
- Load balancing simple
- Health check integration

### IP-based
- Routing basado en subnet del cliente
- On-premises routing

## DNSSEC

### Domain Name System Security Extensions
- Firma criptica de records
- Prevencion de spoofing
- Validacion de integridad

## Pricing

### Hosted Zones
- $0.50 por hosted zone por mes

### Health Checks
- $0.50-$1.00 por health check por mes

### Queries
- $0.40 por 1M queries (primeras 1B)

---

## Aplicacion

### Donde Usar
- Gestion de dominios
- Load balancing DNS
- Disaster recovery
- Multi-region architectures
- IPv4/IPv6 dual-stack
- Email routing

### Precauciones
- TTL afecta propagacion de cambios
- CNAME no funciona en root domain
- Usar Alias para recursos AWS
- Configurar health checks para failover
- Monitorear query logs

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/route53/)
- [Route 53 Pricing](https://aws.amazon.com/route53/pricing/)
- [Route 53 Developer Guide](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/Welcome.html)
