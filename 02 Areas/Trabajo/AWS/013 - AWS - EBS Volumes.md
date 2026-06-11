---
title: "AWS - EBS Volumes"
aliases: [EBS, Elastic Block Store, Volúmenes EBS]
tags: [aws, ebs, storage, volumes, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/ebs/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - EBS Volumes

> [!info] Descripcion
> Amazon EBS (Elastic Block Store) proporciona almacenamiento de bloques duradero y de alto rendimiento que puede utilizarse con Amazon EC2 para datos persistentes.

---

## Que es EBS

EBS es almacenamiento de bloques que:
- Se adjunta a instancias EC2
- Persiste despues de detener la instancia
- Se replica dentro de AZ
- Snapshots en S3

## Tipos de Volumes

### General Purpose (gp2, gp3)
- **Uso**: Workloads generales
- **Rendimiento**: 3-16,000 IOPS
- **Throughput**: Hasta 1,000 MB/s
- **gp3**: Mas economico, configurable

### Provisioned IOPS (io1, io2)
- **Uso**: Bases de datos criticas
- **Rendimiento**: Hasta 64,000 IOPS
- **Throughput**: Hasta 1,000 MB/s
- **io2**: 99.999% durability

### Throughput Optimized (st1)
- **Uso**: Big data, data warehouses
- **Rendimiento**: Hasta 500 MB/s
- **Throughput**: Hasta 500 MB/s
- **No suitable for boot**

### Cold HDD (sc1)
- **Uso**: Archivos, datos fríos
- **Rendimiento**: Hasta 250 MB/s
- **Costo**: Mas bajo

## Conceptos Clave

### Snapshots
- Backup point-in-time
- Incrementales
- Almacenados en S3
- Cross-region copy

### Encryption
- Encriptacion en reposo
- KMS keys
- Sin costo adicional

### Multi-Attach
- io1/io2 multiples instances
- Mismo AZ
- Cluster applications

### Fast Snapshot Restore
- Inicializacion instantanea
- Sin penalty de rendimiento
- Costo adicional

## Performance

### IOPS
- Input/Output Operations Per Second
- 16 KB por I/O
- Configurable en io1/io2

### Throughput
- MB/s de lectura/escritura
- Limitado por instance type
- gp3: configurable independiente

### Burst
- Credits para gp2
- Baseline para st1/sc1
- Sin burst para io1/io2

## Gestion

### Attach/Detach
- 1 volume por instance (mayoria)
- io1/io2 multi-attach
- Hot attach/detach

### Resize
- Aumentar tamanio online
- No se puede reducir
- Reboot para algunos cambios

### Modify
- Cambiar tipo (gp2 -> io1)
- Cambiar IOPS
- Cambiar throughput

---

## Aplicacion

### Donde Usar
- Boot volumes
- Bases de datos transaccionales
- Workloads con alto IOPS
- Data warehouses
- Big data analytics
- File systems

### Precauciones
- Snapshots no son instantaneos
- Multi-attach solo para io1/io2
- Revisar IOPS y throughput
- Monitorear burst credits
- Usar gp3 para mejor costo

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/ebs/)
- [EBS Pricing](https://aws.amazon.com/ebs/pricing/)
- [EBS Performance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSPerformance.html)
