---
title: "AWS - Fargate Serverless Containers"
aliases: [Fargate, AWS Fargate, Serverless Containers]
tags: [aws, fargate, serverless, containers, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/fargate/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Fargate Serverless Containers

> [!info] Descripcion
> AWS Fargate es un motor de computacion serverless para contenedores que funciona con Amazon ECS y Amazon EKS, eliminando la necesidad de provisionar, configurar o agrupar clusters de servidores virtuales.

---

## Que es Fargate

Fargate es serverless containers que:
- Sin management de infraestructura
- Pago por CPU/memory por segundo
- Aislamiento de seguridad por defecto
- Compatible con ECS y EKS

## Conceptos Clave

### Task
- Unidad de despliegue
- Un o mas containers
- CPU y memory definidos
- Networking asignado

### Platform Versions
- Linux/ARM64
- Windows (limited)
- Actualizaciones automaticas

### Task Sizes
- **CPU**: 0.25 vCPU increments
- **Memory**: 512 MB increments
- Rango: 0.25-16 vCPU, 512MB-120GB

## ECS + Fargate

### Task Definition
```json
{
  "family": "my-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "512",
  "memory": "1024",
  "containerDefinitions": [
    {
      "name": "app",
      "image": "myapp:latest",
      "essential": true
    }
  ]
}
```

### Service
- Desired count
- Deployment type
- Health check grace period
- Load balancer integration

## EKS + Fargate

### Fargate Profiles
```yaml
apiVersion: eks.amazonaws.com/v1
kind: FargateProfile
metadata:
  name: my-profile
spec:
  selectors:
    - namespace: my-namespace
      labels:
        app: my-app
  subnets:
    - subnet-xxxxx
```

### Pod Scheduling
- Namespace-based
- Label-based
- Automatic provisioning

## Networking

### awsvpc Mode
- ENI por task
- IP address propia
- Security groups por task
- DNS propio

### Networking Stack
- VPC CNI (EKS)
- Task ENI
- Service discovery
- Load balancing

## Security

### IAM Roles
- Task execution role
- Task role
- IRSA (EKS)
- Least privilege

### Runtime Protection
- Aislamiento por task
- Non-root execution
- Read-only root filesystem
- Seccomp profiles

### Secrets
- Secrets Manager integration
- Parameter Store
- Environment variables
- Mount points

## Pricing

### Per Second Billing
- $0.04048/vCPU-hour
- $0.004445/GB-hour
- Sin minimo de cobro
- Free tier included

### Ejemplo
- 1 vCPU, 2GB: ~$0.05/hora
- 2 vCPU, 4GB: ~$0.10/hora
- 4 vCPU, 8GB: ~$0.20/hora

---

## Aplicacion

### Donde Usar
- Microservices
- Batch processing
- Event-driven apps
- API backends
- Data processing
- CI/CD workloads

### Precauciones
- Cold starts para tasks nuevos
- Network mode limitado a awsvpc
- Windows support limitado
- Storage limitado a ephemeral
- Costos pueden ser mayores que EC2

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/fargate/)
- [Fargate Pricing](https://aws.amazon.com/fargate/pricing/)
- [Fargate Best Practices](https://docs.aws.amazon.com/AmazonECS/latest/bestpracticesguide/fargate.html)
