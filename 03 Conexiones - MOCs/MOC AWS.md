---
title: "MOC AWS - Amazon Web Services"
aliases: [moc-aws, amazon-web-services, cloud-computing]
tags: [moc, aws, cloud, amazon, infraestructura, devops]
created: 2026-06-11
updated: 2026-06-11
---

# MOC AWS - Amazon Web Services

> [!info] Mapa de Conocimiento
> Conexiones entre servicios de AWS, arquitectura cloud y mejores practicas.

---

## Servicios Core

### Compute
| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| EC2 | [[002 - AWS - EC2 Instancias Virtuales]] | Servidores virtuales en la nube |
| Lambda | [[004 - AWS - Lambda Funciones Serverless]] | Codigo sin servidores |
| Elastic Beanstalk | [[011 - AWS - Elastic Beanstalk]] | Despliegue de aplicaciones |

### Storage
| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| S3 | [[003 - AWS - S3 Almacenamiento de Objetos]] | Almacenamiento de objetos |
| S3 Classes | [[012 - AWS - S3 Classes de Almacenamiento]] | Tipos de almacenamiento |
| EBS | [[013 - AWS - EBS Volumes]] | Volumes block storage |
| EFS | [[014 - AWS - EFS Sistema de Archivos]] | Sistema de archivos elástico |
| Glacier | [[015 - AWS - Glacier Almacenamiento Largo Plazo]] | Archivo a largo plazo |

### Databases
| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| RDS | [[005 - AWS - RDS Bases de Datos Relacionales]] | Bases de datos gestionadas |
| Aurora | [[016 - AWS - Aurora Base de Datos]] | Base de datos nativa cloud |
| DynamoDB | [[006 - AWS - DynamoDB NoSQL]] | NoSQL de alto rendimiento |
| ElastiCache | [[017 - AWS - ElastiCache]] | Cache en memoria |
| Redshift | [[018 - AWS - Redshift Analitica]] | Data warehouse |
| Neptune | [[019 - AWS - Neptune Grafos]] | Bases de datos de grafos |
| DocumentDB | [[020 - AWS - DocumentDB]] | MongoDB compatible |
| Timestream | [[021 - AWS - Timestream Series Temporales]] | Series temporales |

### Networking
| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| VPC | [[007 - AWS - VPC Red Privada Virtual]] | Red privada virtual |
| CloudFront | [[009 - AWS - CloudFront CDN]] | CDN global |
| Route 53 | [[010 - AWS - Route 53 DNS]] | DNS y routing |

### Security
| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| IAM | [[008 - AWS - IAM Gestion de Identidad y Acceso]] | Identidad y acceso |
| KMS | *(Pendiente)* | Gestion de llaves |
| WAF | *(Pendiente)* | Firewall web |
| Shield | *(Pendiente)* | Proteccion DDoS |

---

## Containers

| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| ECS | [[022 - AWS - ECS Contenedores]] | Orquestacion nativa AWS |
| EKS | [[023 - AWS - EKS Kubernetes]] | Kubernetes gestionado |
| Fargate | [[024 - AWS - Fargate Serverless Containers]] | Containers serverless |
| ECR | [[025 - AWS - ECR Registro de Contenedores]] | Registro de imagenes |

---

## Serverless

| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| API Gateway | [[026 - AWS - API Gateway]] | APIs REST y HTTP |
| Step Functions | [[027 - AWS - Step Functions]] | Orquestacion de workflows |
| EventBridge | [[028 - AWS - EventBridge]] | Event bus serverless |
| SQS | [[029 - AWS - SQS Colas de Mensajes]] | Colas de mensajes |
| SNS | [[030 - AWS - SNS Notificaciones]] | Notificaciones pub/sub |
| Kinesis | [[031 - AWS - Kinesis Streaming]] | Streaming de datos |

---

## Monitoreo y DevOps

| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| CloudWatch | *(Pendiente)* | Monitoreo y alertas |
| X-Ray | *(Pendiente)* | Trazabilidad |
| CloudTrail | *(Pendiente)* | Auditoria |
| CloudFormation | *(Pendiente)* | Infraestructura como codigo |
| CodePipeline | *(Pendiente)* | CI/CD |
| CodeBuild | *(Pendiente)* | Build gestionado |
| CodeDeploy | *(Pendiente)* | Despliegue automatizado |

---

## AI / ML

| Servicio | Archivo | Descripcion |
|----------|---------|-------------|
| SageMaker | *(Pendiente)* | Machine Learning |
| Rekognition | *(Pendiente)* | Vision artificial |
| Comprehend | *(Pendiente)* | NLP |
| Lex | *(Pendiente)* | Chatbots |
| Polly | *(Pendiente)* | Text to Speech |

---

## Conexiones con Otras Areas

| Desde | Hacia | Conexion |
|-------|-------|----------|
| AWS | LinkedIn Brand | Contenido tecnico para posts |
| AWS | Productividad | Automatizacion con serverless |
| AWS | Desarrollo Personal | Aprendizaje continuo cloud |

---

## Notas Relacionadas

- [[MOC Tecnologia]] - Tecnologia general
- [[MOC Productividad]] - Herramientas y metodos
- [[Guia - Amazon Web Services]] - Guia completa

---

## Arquitectura de Referencia

```
                    ┌─────────────────┐
                    │   Route 53      │
                    │   (DNS)         │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  CloudFront     │
                    │  (CDN)          │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼───────┐ ┌───▼────────┐ ┌───▼────────┐
     │  API Gateway   │ │    S3      │ │   EC2      │
     │  (REST/HTTP)   │ │ (Static)   │ │ (Servers)  │
     └────────┬───────┘ └────────────┘ └────────────┘
              │
     ┌────────▼───────┐
     │    Lambda      │
     │  (Serverless)  │
     └────────┬───────┘
              │
     ┌────────▼───────┐
     │   DynamoDB     │
     │   (NoSQL)      │
     └────────────────┘
```

---

## Referencias

- [[030 ÍNDICE GENERAL (Home)]] - Volver al inicio
- [[Guia - Amazon Web Services]] - Guia completa
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWS Well-Architected Framework](https://aws.amazon.com/architecture/well-architected/)
