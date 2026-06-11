---
title: "AWS - VPC Red Privada Virtual"
aliases: [VPC, Virtual Private Cloud, Red Privada AWS]
tags: [aws, vpc, networking, security, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/vpc/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - VPC Red Privada Virtual

> [!info] Descripcion
> Amazon VPC (Virtual Private Cloud) le permite provisionar una seccion aislada de la nube AWS donde puede lanzar recursos de AWS en una red virtual que usted define.

---

## Que es VPC

VPC es su red privada en la nube que:
- Aislamiento de otros clientes
- Control total sobre configuracion de red
- Subnets publicas y privadas
- Seguridad con Security Groups y NACLs

## Conceptos Clave

### CIDR Block
- Rango de IP addresses
- Ejemplo: 10.0.0.0/16
- Maximo 5 IPs por VPC

### Subnets
- Segmentos de red dentro de VPC
- **Public**: Acceso a internet via IGW
- **Private**: Sin acceso directo a internet
- **Database**: Subnets aisladas para DBs

### Route Tables
- Definen donde van los paquetes
- Tabla de rutas por subnet
- Target: IGW, NAT, instances

## Componentes de Red

### Internet Gateway (IGW)
- Conecta VPC a internet
- Redundante y escalable
- Un IGW por VPC

### NAT Gateway
- Permite instancias privadas acceder a internet
- No permite conexiones entrantes
- Un NAT por AZ para HA

### Elastic Network Interface (ENI)
- Interfaz de red virtual
- IP address privada
- Puede moverse entre instances

### VPC Peering
- Conexion entre dos VPCs
- Networking no transitivo
- Misma o cross-region

### Transit Gateway
- Hub central para multiples VPCs
- Conecta on-premises via VPN/Direct Connect
- Escalable

## Seguridad

### Security Groups
- Firewall basado en instancia
- Stateless (reglas separadas in/out)
- Solo allow rules
- Referencia a SGs o CIDRs

### Network ACLs
- Firewall a nivel de subnet
- Stateless (reglas in/out)
- Allow y Deny rules
- Numeradas (1-32766)

### Flow Logs
- Capturan trafico de red
- CloudWatch Logs o S3
- Troubleshooting y compliance

## Subnets de AWS

### Reservadas
- `x.x.x.0`: Network address
- `x.x.x.1`: VPC router
- `x.x.x.2`: DNS server
- `x.x.x.3`: Reserved for future
- `x.x.x.255`: Broadcast

## Configuracion Tipica

### Three-Tier Architecture
```
Public Subnet (Web)
  ↓
Private Subnet (Application)
  ↓
Private Subnet (Database)
```

### Multi-AZ
```
AZ-1: Public + Private + DB
  ↕ (VPC Peering/TGW)
AZ-2: Public + Private + DB
```

---

## Aplicacion

### Donde Usar
- Aislar workloads en la nube
- Conectar on-premises a AWS
- Multi-tier architectures
- Entornos de desarrollo/testing
- Compliance y seguridad

### Precauciones
- Planificar CIDR blocks cuidadosamente
- No usar 10.0.0.0/8 si planea VPN
- Configurar NACLs para defense-in-depth
- Monitorear flow logs
- Usar VPC endpoints para servicios AWS

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/vpc/)
- [VPC Pricing](https://aws.amazon.com/vpc/pricing/)
- [VPC Best Practices](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-best-practices.html)
