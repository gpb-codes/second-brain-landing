---
title: "AWS - ECR Registro de Contenedores"
aliases: [ECR, Elastic Container Registry, Docker Registry]
tags: [aws, ecr, containers, docker, registry, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/ecr/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - ECR Registro de Contenedores

> [!info] Descripcion
> Amazon ECR (Elastic Container Registry) es un registro de contenedores Docker gestionado que facilita almacenar, gestionar y desplegar imagenes de contenedores Docker y OCI.

---

## Que es ECR

ECR es container registry que:
- Almacena imagenes Docker/OCI
- Integra con ECS, EKS, Fargate
- Escaneo de seguridad automatico
- Cross-region replication
- Acceso via IAM

## Conceptos Clave

### Repositories
- Contenedor de imagenes
- Por aplicacion/servicio
- Configuracion de lifecycle

### Images
- Tags o digests
- Capas (layers)
- Manifest

### Registries
- Public o Private
- Multi-account access
- Cross-account sharing

## ECR Public

### Features
- Acceso publico
- Free storage (500 MB)
- CDN integration
- Pull anonymously

### Login
```bash
aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws
```

### Pull
```bash
docker pull public.ecr.aws/nginx/nginx:latest
```

## ECR Private

### Features
- Acceso privado
- IAM integration
- Image scanning
- Lifecycle policies

### Login
```bash
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com
```

### Push
```bash
docker tag myapp:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:latest
```

## Image Scanning

### Basic Scanning
- Vulnerabilities conocidas
- Gratis para ECR
- On-push automatico

### Enhanced Scanning
- Inspector integration
- OS y language packages
- Custom baselines
- Costo adicional

### Vulnerability Levels
- CRITICAL
- HIGH
- MEDIUM
- LOW
- INFORMATIONAL

## Lifecycle Policies

### Ejemplo
```json
{
  "rules": [
    {
      "rulePriority": 1,
      "description": "Keep last 10 images",
      "selection": {
        "tagStatus": "any",
        "countType": "imageCountMoreThan",
        "countNumber": 10
      },
      "action": {
        "type": "expire"
      }
    }
  ]
}
```

### Filter Types
- tagStatus: tagged/untagged/any
- tagPrefixList: por prefijo
- imageCountMoreThan: por cantidad
- sinceImagePushed: por fecha

## Cross-Region Replication

### Configuration
- Source y destination regions
- IAM roles
- Encryption
- Real-time replication

### Use Cases
- Disaster recovery
- Multi-region deployment
- Performance optimization

## Integration

### ECS
- Task Definition usa ECR images
- Automatic pull on launch
- IAM permissions

### EKS
- Container runtime pulls images
- ImagePullSecrets
- IAM Roles for Service Accounts

### CodePipeline
- Source -> Build -> Push to ECR
- Automated deployment
- Blue/Green deployments

---

## Aplicacion

### Donde Usar
- Almacenar imagenes Docker
- CI/CD pipelines
- Multi-region deployments
- Microservices architectures
- ML model containers
- Custom runtimes

### Precauciones
- Usar image scanning
- Configurar lifecycle policies
- Usar digests para reproducibilidad
- Cross-account access via IAM
- Monitorear storage costs

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/ecr/)
- [ECR Pricing](https://aws.amazon.com/ecr/pricing/)
- [ECR User Guide](https://docs.aws.amazon.com/AmazonECR/latest/userguide/)
