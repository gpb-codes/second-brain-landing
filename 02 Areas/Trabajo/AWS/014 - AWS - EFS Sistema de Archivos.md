---
title: "AWS - EFS Sistema de Archivos"
aliases: [EFS, Elastic File System, Sistema Archivos AWS]
tags: [aws, efs, storage, filesystem, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/efs/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - EFS Sistema de Archivos

> [!info] Descripcion
> Amazon EFS (Elastic File System) proporciona un sistema de archivos elástico y duradero que puede montarse en multiples instancias EC2 en paralelo.

---

## Que es EFS

EFS es un file system NFS que:
- Escalado automatico
- Acceso concurrente desde multiples AZ
- Protocolo NFS v4.0 y v4.1
- Compatible con Linux y Windows (NFS)

## Tipos de Storage

### General Purpose (standard)
- Acceso frecuente
- Uso general
- Costo estandar

### Infrequent Access (IA)
- Datos accedidos menos frecuentemente
- Lifecycle policy automatica
- Menor costo de almacenamiento

### ElastiMax
- Hasta 128 TB
- Para workloads que necesitan mas

## Conceptos Clave

### Mount Targets
- Puntos de conexion por AZ
- ENI en subnet
- Multi-AZ access

### Access Points
- Puntos de entrada
- Politicas de seguridad
- Path restrictions

### Performance Modes
- **General Purpose**: Default, bajo costo
- **Max I/O**: Alto IOPS, alto costo

### Throughput Modes
- **Bursting**: Basado en tamanio
- **Provisioned**: Throughput fijo
- **Elastic**: Auto-escalado

## Configuracion

### Mount en Linux
```bash
sudo mount -t efs fs-xxxxx:/ /mnt/efs
```

### Mount con Access Point
```bash
sudo mount -t efs -o accesspoint=fsap-xxxxx fs-xxxxx:/ /mnt/efs
```

### /etc/fstab
```
fs-xxxxx:/ /mnt/efs efs _netdev,tls 0 0
```

### Security
- Security groups para mount targets
- IAM para access points
- TLS en transito (recommended)
- Encryption en reposo

## Lifecycle Policies

### EFS Lifecycle Management
- Mueve datos a IA automaticamente
- Configurable por days (7-95)
- Sin impacto en aplicaciones
- Retrieval fee cuando accedes

## Performance

### Throughput
- Hasta 3 GB/s
- Escalado con tamanio
- Bursting para archivos pequenos

### IOPS
- Hasta 35,000+ IOPS
- General Purpose: 1 IOPS por GB
- Max I/O: Escalado con tamanio

### Latencia
- Microsegundos
- NFS v4.1 parallel I/O

## Pricing

### Storage
- General Purpose: $0.30/GB-mes
- IA: $0.016/GB-mes

### Throughput
- Provisioned: $0.006/GB-mes

### Requests
- No charges adicionales

---

## Aplicacion

### Donde Usar
- Content management systems
- Web serving
- Container storage
- Home directories
- Big data analytics
- Machine learning training

### Precauciones
- Performance basado en tamanio
- Lifecycle policies para costos
- Multi-AZ access requiere mount targets
- Encryption en transito recomendado
- Monitorear bursting credits

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/efs/)
- [EFS Pricing](https://aws.amazon.com/efs/pricing/)
- [EFS Performance](https://docs.aws.amazon.com/efs/latest/ug/performance.html)
