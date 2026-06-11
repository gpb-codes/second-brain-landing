---
title: "AWS - Glacier Almacenamiento Largo Plazo"
aliases: [Glacier, Amazon Glacier, Almacenamiento Archivo]
tags: [aws, glacier, storage, archive, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/glacier/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Glacier Almacenamiento Largo Plazo

> [!info] Descripcion
> Amazon S3 Glacier es una clase de almacenamiento de bajo costo disenada para archivado de datos y retencion a largo plazo, con opciones de retrieval desde milisegundos hasta horas.

---

## Que es Glacier

Glacier es almacenamiento de archivo que:
- Costo extremadamente bajo
- Retencion a largo plazo
- Multiples opciones de retrieval
- Compliance y auditoria

## Tipos de Glacier

### S3 Glacier Instant Retrieval
- Acceso inmediato (milisegundos)
- Minimo 90 dias
- Para archivos accedidos occasionalmente

### S3 Glacier Flexible Retrieval
- Retrieval en minutos a horas
- Minimo 90 dias
- Free bulk retrieval

### S3 Glacier Deep Archive
- Retrieval en 12-48 horas
- Minimo 180 dias
- Costo mas bajo

## Conceptos Clave

### Vaults
- Contenedores de archives
- Sin limite de tamanio
- Encryption automatica

### Archives
- Datos individuales
- Hasta 40 TB cada uno
- Metadata incluida

### Jobs
- Operaciones de retrieval
- Tardan tiempo segun tipo
- Initiated via API/console

### Inventory
- Lista de archives en vault
- Catalogo periodico
- Gratis

## Retrieval Options

### Expedited (1-5 minutes)
- Costo: $0.03/GB + $10/1000 requests
- Maximo 250 GB por request
- Para necesidades urgentes

### Standard (3-5 hours)
- Costo: $0.01/GB + $0.05/1000 requests
- Para uso regular
- Sin limite de tamanio

### Bulk (5-12 hours)
- Costo: $0.0025/GB + $0.025/1000 requests
- Para grandes volumenes
- Free para Flexible Retrieval

## Lifecycle Policies

### Ejemplo: Transicion a Glacier
```json
{
  "Rules": [
    {
      "ID": "ArchiveRule",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "GLACIER"
        }
      ]
    }
  ]
}
```

### Vault Lock
- Policy inmutables
- WORM (Write Once Read Many)
- Compliance regulatoria

## Pricing

### Storage (aprox)
- Glacier Instant: $0.004/GB
- Glacier Flexible: $0.0036/GB
- Glacier Deep: $0.00099/GB

### Retrieval
- Segun tipo seleccionado
- Sin costo para inventory

---

## Aplicacion

### Donde Usar
- Backup a largo plazo
- Retencion regulatoria (7+ anos)
- Archivo de datos historicos
- Disaster recovery
- Compliance medico/financiero
- Preservacion digital

### Precauciones
- Retrieval toma tiempo
- Vault Lock es permanente
- Minimo de almacenamiento
- Planificar retrieval antes de necesitar
- Usar lifecycle policies para automatizar

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/glacier/)
- [Glacier Pricing](https://aws.amazon.com/s3/pricing/)
- [Glacier Developer Guide](https://docs.aws.amazon.com/amazonglacier/latest/dev/)
