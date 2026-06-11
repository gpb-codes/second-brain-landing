---
title: "AWS - RDS Bases de Datos Relacionales"
aliases: [RDS, Amazon RDS, Relational Database Service]
tags: [aws, rds, database, relational, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/rds/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - RDS Bases de Datos Relacionales

> [!info] Descripcion
> Amazon RDS (Relational Database Service) es un servicio de bases de datos relacionales gestionadas que facilita configurar, operar y escalar bases de datos en la nube.

---

## Que es RDS

RDS es bases de datos gestionadas que:
- Soporta multiples motores de base de datos
- Backups automaticos
- Parches automaticos del sistema
- Replicacion de alta disponibilidad
- Escalado automatico

## Motores Soportados

### MySQL
- Versiones: 5.7, 8.0
- Engine: InnoDB
- Uso: Web applications, e-commerce

### PostgreSQL
- Versiones: 12-15
- Engine: PostgreSQL
- Uso: Enterprise apps, GIS

### MariaDB
- Versiones: 10.x
- Engine: XtraDB
- Uso: MySQL compatible

### Oracle
- Standard y Enterprise Edition
- Uso: Enterprise applications

### SQL Server
- Express, Web, Standard, Enterprise
- Uso: .NET applications

### Amazon Aurora
- MySQL y PostgreSQL compatible
- 5x rendimiento que MySQL
- 3x rendimiento que PostgreSQL

## Configuracion

### Instance Classes
- **db.t3.micro**: 2 vCPU, 1 GB RAM
- **db.t3.medium**: 2 vCPU, 4 GB RAM
- **db.r5.large**: 2 vCPU, 16 GB RAM
- **db.r5.4xlarge**: 16 vCPU, 128 GB RAM

### Storage
- **General Purpose (SSD)**: 100 GB - 64 TB
- **Provisioned IOPS**: Hasta 64,000 IOPS
- **Magnetic**: Legacy, no recomendado

### Multi-AZ
- Alta disponibilidad
- Sincrono standby
- Failover automatico

### Read Replicas
- Asincrono
- Escalado de lectura
- Hasta 15 replicas

## Seguridad

### Encryption
- Encriptacion en reposo con KMS
- Encriptacion en transito (SSL/TLS)
- Encriptacion de backups

### Network
- VPC isolation
- Security Groups
- Private subnets

### IAM
- IAM database authentication
- Roles para RDS

## Backup y Restore

### Automated Backups
- Retencion: 1-35 dias
- Point-in-time restore
- Snapshots manuales

### Snapshots
- Backup manual
- Retencion indefinida
- Cross-region copy

## Monitoring

### CloudWatch Metrics
- CPU Utilization
- Freeable Memory
- Read/Write IOPS
- Database Connections
- Replication Lag

### Enhanced Monitoring
- Metricas a nivel de SO
- 1-60 segundos de intervalo
- Proceso a proceso

---

## Aplicacion

### Donde Usar
- Aplicaciones web y moviles
- E-commerce platforms
- Sistemas ERP/CRM
- Data warehouses
- Microservicios con SQL

### Precauciones
- Configurar Multi-AZ para produccion
- Monitorear IOPS y almacenamiento
- Revisar costos de provisioned IOPS
- Configurar automated backups
- Usar parameter groups para tuning

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/rds/)
- [RDS Pricing](https://aws.amazon.com/rds/pricing/)
- [RDS Best Practices](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_BestPractices.html)
