---
title: "AWS - S3 Almacenamiento de Objetos"
aliases: [S3, Simple Storage Service, Almacenamiento S3]
tags: [aws, s3, storage, objects, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/s3/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - S3 Almacenamiento de Objetos

> [!info] Descripcion
> Amazon S3 (Simple Storage Service) es un servicio de almacenamiento de objetos que ofrece escalabilidad, disponibilidad y seguridad para almacenar y recuperar datos desde cualquier lugar.

---

## Que es S3

S3 es almacenamiento de objetos con:
- **Escalabilidad**: Almacena cualquier cantidad de datos
- **Durabilidad**: 99.999999999% (11 nines)
- **Disponibilidad**: 99.99% (estandar)
- **Seguridad**: Encriptacion y control de acceso

## Conceptos Clave

### Buckets
- Contenedores de objetos
- Nombre unico globalmente
- Region especifica

### Objects
- Archivos almacenados
- Metadata incluida
- Tamanio maximo: 5 TB

### Keys
- Nombre unico del objeto en el bucket
- Ejemplo: `fotos/imagen.jpg`

## Classes de Almacenamiento

| Clase | Durabilidad | Disponibilidad | Uso Ideal |
|-------|-------------|----------------|-----------|
| S3 Standard | 11 nines | 99.99% | Datos frecuentes |
| S3 Intelligent | 11 nines | 99.9% | Datos impredecibles |
| S3 Standard-IA | 11 nines | 99.9% | Datos infrecuentes |
| S3 One Zone-IA | 11 nines | 99.5% | Reconstruible |
| S3 Glacier | 11 nines | 99.99% | Archivo |
| S3 Glacier Deep | 11 nines | 99.99% | Archivo largo plazo |

## Caracteristicas Principales

### Versioning
- Mantiene multiples versiones de un objeto
- Proteccion contra borrado accidental
- Habilitado por bucket

### Lifecycle Policies
- Transicion automatica entre clases
- Expiracion de objetos
- Eliminacion de versiones antiguas

### Replication
- **CRR**: Cross-Region Replication
- **SRR**: Same-Region Replication
- Replicacion en tiempo real

### Encriptacion
- **SSE-S3**: Claves gestionadas por AWS
- **SSE-KMS**: Claves gestionadas por cliente
- **SSE-C**: Claves proporcionadas por cliente
- **Client-Side**: Encriptacion del lado del cliente

## Acceso a S3

### IAM Policies
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::bucket/*"
    }
  ]
}
```

### Bucket Policies
- Politicas a nivel de bucket
- Control de acceso publico
- Restrictir IPs o VPCs

### ACLs (Access Control Lists)
- Control a nivel de objeto
- Legacy approach
- Menos recomendado

## S3 Static Website Hosting

### Configuracion
1. Habilitar hosting estatico en el bucket
2. Configurar index.html y error.html
3. Configurar politica de bucket para acceso publico
4. Usar endpoint de S3 website

### Endpoints
```
http://bucket-name.s3-website-region.amazonaws.com
```

## S3 API Basics

### Operaciones Principales
- `PUT Object`: Subir objeto
- `GET Object`: Descargar objeto
- `DELETE Object`: Borrar objeto
- `HEAD Object`: Obtener metadata
- `LIST Objects`: Listar objetos

---

## Aplicacion

### Donde Usar
- Almacenamiento de imagenes y videos
- Backups y disaster recovery
- Data lakes y analitica
- Hosting de sitios estaticos
- Archivos de aplicaciones
- Distribution de software

### Precauciones
- Revisar costos de transferencia
- Configurar lifecycle para optimizar costos
- Usar encriptacion para datos sensibles
- Configurar versioning para proteccion
- Monitorear con S3 Storage Lens

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/s3/)
- [S3 Pricing](https://aws.amazon.com/s3/pricing/)
- [S3 Best Practices](https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html)
