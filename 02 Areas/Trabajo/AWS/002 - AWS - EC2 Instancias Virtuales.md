---
title: "AWS - EC2 Instancias Virtuales"
aliases: [EC2, Elastic Compute Cloud, Maquinas Virtuales AWS]
tags: [aws, ec2, compute, virtual-machines, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/ec2/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - EC2 Instancias Virtuales

> [!info] Descripcion
> Amazon EC2 (Elastic Compute Cloud) proporciona capacidad de computacion resizable en la nube, permitiendo lanzar y gestionar maquinas virtuales con diferentes configuraciones de CPU, memoria y red.

---

## Que es EC2

EC2 es el servicio de infraestructura como servicio (IaaS) de AWS que permite:
- Lanzar maquinas virtuales (instancias) en minutos
- Escalar horizontal o verticalmente
- Pagar solo por el tiempo de uso
- Controlar completamente el sistema operativo

## Tipos de Instancias

### Por Proposito
| Tipo | Uso | Ejemplo |
|------|-----|---------|
| General Purpose | Balance CPU/memoria | t3, m5 |
| Compute Optimized | CPU intensivo | c5, c6g |
| Memory Optimized | RAM intensivo | r5, x1e |
| Storage Optimized | Disco optimizado | i3, d2 |
| Accelerated Computing | GPU/FPGA | p4, g4 |

### Familias de Instancias
- **T-series**: Burstable performance (t2, t3, t4g)
- **M-series**: General purpose (m5, m6i)
- **C-series**: Compute optimized (c5, c6g)
- **R-series**: Memory optimized (r5, r6g)
- **P-series**: GPU computing (p3, p4)

## Conceptos Clave

### AMI (Amazon Machine Image)
- Imagen del sistema operativo
- Incluye software pre-instalado
- Snapshots para backups

### Key Pairs
- Acceso SSH a instancias Linux
- Acceso RDP a instancias Windows
- Almacenas en `~/.ssh/`

### Security Groups
- Firewall virtual
- Reglas de entrada/salida
- Stateless (cada conexion se evalua)

### Elastic IPs
- IP publica estatica
- Asociada a instancia
- Costo si no esta en uso

## Pricing

### Opciones de Pago
1. **On-Demand**: Pago por hora/segundo
2. **Reserved**: Descuento por 1-3 anos
3. **Spot**: Hasta 90% descuento (interrumpible)
4. **Dedicated**: Hardware exclusivo

### Ejemplo de Costos (aprox)
- t3.micro: ~$0.0104/hora
- m5.large: ~$0.096/hora
- c5.xlarge: ~$0.17/hora
- r5.large: ~$0.126/hora

## Monitoreo y Mantenimiento

### CloudWatch Metrics
- CPU Utilization
- Network In/Out
- Status Check Failed
- Disk Read/Write

### Mantenimiento
- AWS realiz actualizaciones de hardware
- Reboot para aplicar cambios
- Stop/Start para migrar hardware

---

## Aplicacion

### Donde Usar
- Servidores web y aplicaciones
- Bases de datos
- Entornos de desarrollo
- Procesamiento de datos
- Juegos multijugador
- Maquinas de aprendizaje

### Precauciones
- Revisar costos regularmente
- Usar IAM roles en vez de credenciales
- Configurar security groups correctamente
- Monitorear metricas de rendimiento
- Automatizar con Auto Scaling Groups

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/ec2/)
- [EC2 Pricing](https://aws.amazon.com/ec2/pricing/)
- [EC2 Instance Types](https://aws.amazon.com/ec2/instance-types/)
