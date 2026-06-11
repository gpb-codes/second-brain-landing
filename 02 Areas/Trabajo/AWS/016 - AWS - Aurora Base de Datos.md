---
title: "AWS - Aurora Base de Datos"
aliases: [Aurora, Amazon Aurora, Aurora MySQL, Aurora PostgreSQL]
tags: [aws, aurora, database, relational, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/rds/aurora/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Aurora Base de Datos

> [!info] Descripcion
> Amazon Aurora es una base de datos relacional en la nube disenada para compatibilidad con MySQL y PostgreSQL, ofreciendo rendimiento de bases de datos comerciales a una fraccion del costo.

---

## Que es Aurora

Aurora es base de datos gestionada que:
- Compatible con MySQL 5.7/8.0 y PostgreSQL 12-15
- 5x rendimiento que MySQL standard
- 3x rendimiento que PostgreSQL standard
- Storage auto-escalado hasta 128 TB
- 6 copias de datos en 3 AZs

## Caracteristicas Principales

### Storage
- Auto-escalable
- 6 replicas por defecto
- 3 AZs automatico
- No necesita provisionar IOPS

### Performance
- Read replicas para escalar lectura
- Aurora Serverless para workloads impredecibles
- Cloning para development

### High Availability
- Failover automatico
- Multi-AZ por defecto
- 15 read replicas

## Aurora Serverless

### v2 (Recomendado)
- Auto-scaling de capacidad
- Sin management de instances
- Pago por ACU usadas
- Ideal para desarrollo y test

### v1 (Legacy)
- Auto-pause/resume
- Menor costo para uso intermitente
- Sin escalado granular

## Aurora Global Database

### Cross-Region Replication
- Replicacion en menos de 1 segundo
- Hasta 5 regiones secundarias
- Disaster recovery global

### Use Cases
- Global applications
- Disaster recovery
- Read local, write global

## Aurora Cloning

### Feature
- Copia rapida de base de datos
- Copy-on-write storage
- Misma performance que original
- Ideal para development/testing

## Backups y Restore

### Automated Backups
- Retencion: 1-35 dias
- Point-in-time restore
- Sin impacto en performance

### Snapshots
- Backup manual
- Retencion indefinida
- Cross-region copy

### Restores
- Point-in-time restore
- Restore to specific time
- Volume erasure recovery

## Monitoring

### Performance Insights
- Dashboard de rendimiento
- Top SQL queries
- Wait events
- Baseline automatico

### CloudWatch Metrics
- CPU, memory, connections
- Read/write IOPS
- Replication lag

---

## Aplicacion

### Donde Usar
- Applications MySQL/PostgreSQL existentes
- Workloads de alto rendimiento
- Global applications
- Development/testing con clones
- Sistemas criticos

### Precauciones
- Aurora Serverless v2 para development
- Monitorear storage usage
- Usar Performance Insights
- Configurar automatic backups
- Planificar cross-region para DR

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/aurora/)
- [Aurora Pricing](https://aws.amazon.com/rds/aurora/pricing/)
- [Aurora Best Practices](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.BestPractices.html)
