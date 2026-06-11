---
title: "AWS - ECS Contenedores"
aliases: [ECS, Elastic Container Service, Docker AWS]
tags: [aws, ecs, containers, docker, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/ecs/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - ECS Contenedores

> [!info] Descripcion
> Amazon ECS (Elastic Container Service) es un servicio de contenedores altamente escalable y de alto rendimiento que admite contenedores Docker y le permite ejecutar aplicaciones de forma facil en un cluster gestionado.

---

## Que es ECS

ECS es container orchestration que:
- Ejecuta contenedores Docker
- Integra con Fargate y EC2
- Service discovery
- Load balancing
- Auto-scaling

## Launch Types

### Fargate
- Serverless containers
- Sin management de infraestructura
- Pago por CPU/memory usada
- Ideal para la mayoria de workloads

### EC2
- Control total sobre instances
- Customize AMI y instance type
- Costo predecible
- Para workloads especializados

## Conceptos Clave

### Cluster
- Grupo logico de servicios
- ECS o Fargate
- Recursos compartidos

### Task Definition
- Blueprint para containers
- CPU, memory, network
- Environment variables
- Volumes

### Service
- Mantener desired count
- Rolling updates
- Load balancing
- Auto-scaling

### Container Agent
- Corre en cada instance
- Registra containers con ECS
- Maneja lifecycle

## Task Definition

### Ejemplo
```json
{
  "family": "my-app",
  "networkMode": "awsvpc",
  "requiresCompatibilities": ["FARGATE"],
  "cpu": "256",
  "memory": "512",
  "containerDefinitions": [
    {
      "name": "web",
      "image": "nginx:latest",
      "portMappings": [
        {"containerPort": 80, "protocol": "tcp"}
      ]
    }
  ]
}
```

### Network Modes
- **awsvpc**: VPC level (Fargate recommended)
- **bridge**: Docker bridge
- **host**: Host networking
- **none**: Sin networking

## Service Configuration

### Deployment Types
- **Rolling**:批次 actualizaciones
- **Blue/Green**: Deploy con CodeDeploy
- **ECS Anywhere**: On-premises

### Health Checks
- Container health
- ALB health checks
- Replacement automatico

### Auto Scaling
- Target tracking
- Step scaling
- Scheduled scaling

## Networking

### Service Discovery
- Cloud Map integration
- DNS-based discovery
- Automatic registration

### Service Connect
- Service-to-service communication
- Retries, timeouts
- Load balancing

### Load Balancing
- ALB integration
- Dynamic port mapping
- Multiple containers

## Monitoring

### CloudWatch
- Task metrics
- Service metrics
- Cluster metrics

### Container Insights
- CPU, memory, disk, network
- Per-task metrics
- Aggregated views

---

## Aplicacion

### Donde Usar
- Microservices architectures
- APIs REST
- Background workers
- Batch processing
- ML inference
- Web applications

### Precauciones
- Task sizing es critico
- Network mode afecta features
- Use Fargate para simplicidad
- Monitor service health
- Configure auto-scaling

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/ecs/)
- [ECS Pricing](https://aws.amazon.com/ecs/pricing/)
- [ECS Best Practices](https://docs.aws.amazon.com/ecs/latest/bestpracticesguide/)
