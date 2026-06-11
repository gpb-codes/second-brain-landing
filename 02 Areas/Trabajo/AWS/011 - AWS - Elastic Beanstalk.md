---
title: "AWS - Elastic Beanstalk"
aliases: [Beanstalk, Elastic Beanstalk, PaaS AWS]
tags: [aws, elastic-beanstalk, paas, deployment, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/elasticbeanstalk/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Elastic Beanstalk

> [!info] Descripcion
> AWS Elastic Beanstalk es una plataforma como servicio (PaaS) que facilita el despliegue, escalado y gestion de aplicaciones web y de servicios sin preocuparse por la infraestructura.

---

## Que es Elastic Beanstalk

Beanstalk es PaaS que:
- Despliega y escala automaticamente
- Gestiona infraestructura subyacente
- Soporta multiples lenguajes
- Control total sobre recursos

## Lenguajes Soportados

### Web
- **Java**: Tomcat, Jetty
- **.NET**: IIS
- **Node.js**: Express, PM2
- **PHP**: Apache, Nginx
- **Python**: Gunicorn, uWSGI
- **Ruby**: Puma, Unicorn
- **Go**: Custom
- **Docker**: Multi-container

### Workers
- Background jobs
- Cron-like scheduling
- SQS integration

## Conceptos Clave

### Application
- Contenedor logico
- Agrupa versiones

### Environment
- Instancia de aplicacion
- **Web**: HTTP traffic
- **Worker**: Background jobs

### Version
- Codigo fuente empaquetado
- Desplegado a environment

### Configuration
- Settings guardadas
- Reutilizables entre environments

## Configuracion

### .ebextensions
```yaml
option_settings:
  aws:elasticbeanstalk:environment:
    EnvironmentType: LoadBalanced
  aws:autoscaling:asg:
    MinSize: 2
    MaxSize: 10
```

### Platform Branch
- Version del runtime
- Auto-actualizacion
- EOL (End of Life) warnings

### Environment Variables
- Key-value pairs
- En consola o via CLI
- Encriptadas en reposo

## Deployment Strategies

### All at Once
- Despliegue inmediato
- Sin downtime minimo
- Rollback manual

### Rolling
-批次 de instances
- Sin downtime
- Rollback manual

### Rolling with Additional Batch
- Nuevas instances primero
- Sin downtime
- Rollback automatico

### Immutable
- Nuevas instances en ASG separado
- Blue/Green deployment
- Rollback rapido

### Traffic Splitting
- Canary-like deployment
- Porcentaje de trafico
- Automatic rollback

## Monitoreo

### Health Dashboard
- Estado de environment
- Health checks
- Metrics

### CloudWatch Integration
- Metricas personalizadas
- Logs centralizados
- Alarms

---

## Aplicacion

### Donde Usar
- Aplicaciones web
- APIs REST
- Microservicios
- Prototipos rapidos
- Migraciones lift-and-shift

### Precauciones
- Learning curve para configuracion avanzada
- Menor control que ECS/EKS
- Puede ser mas costoso que soluciones manuales
- Monitorear health de environments
- Usar versioning para rollbacks

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/elasticbeanstalk/)
- [Elastic Beanstalk Pricing](https://aws.amazon.com/elasticbeanstalk/pricing/)
- [EB Getting Started](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/GettingStarted.html)
