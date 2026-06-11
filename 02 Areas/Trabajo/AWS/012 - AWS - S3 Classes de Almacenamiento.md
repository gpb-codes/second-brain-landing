---
title: "AWS - S3 Classes de Almacenamiento"
aliases: [S3 Storage Classes, Clases S3, Almacenamiento S3]
tags: [aws, s3, storage, classes, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/s3/storage-classes/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - S3 Classes de Almacenamiento

> [!info] Descripcion
> Amazon S3 ofrece multiples clases de almacenamiento disenadas para diferentes casos de uso, desde datos de acceso frecuente hasta archivos de largo plazo, optimizando costos y rendimiento.

---

## Classes Disponibles

### S3 Standard
- **Durabilidad**: 99.999999999% (11 nines)
- **Disponibilidad**: 99.99%
- **Uso**: Datos accesados frecuentemente
- **Retrieval**: Instantaneo
- **Minimo**: Sin

### S3 Intelligent-Tiering
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.9%
- **Uso**: Patrones de acceso impredecibles
- **Retrieval**: Instantaneo
- **Costo extra**: $0.0025/1000 objects

### S3 Standard-IA (Infrequent Access)
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.9%
- **Uso**: Datos accesados menos frecuentemente
- **Retrieval**: Instantaneo
- **Minimo**: 30 dias
- **Retrieval fee**: Si

### S3 One Zone-IA
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.5%
- **Uso**: Datos reconstruibles
- **Retrieval**: Instantaneo
- **Minimo**: 30 dias
- **Costo**: 20% menos que Standard-IA

### S3 Glacier Instant Retrieval
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.9%
- **Uso**: Archivos que necesitan acceso rapido
- **Retrieval**: Milisegundos
- **Minimo**: 90 dias

### S3 Glacier Flexible Retrieval
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.99%
- **Uso**: Archivo, backup
- **Retrieval**: Minutos a horas
- **Minimo**: 90 dias
- **Free bulk retrieval**

### S3 Glacier Deep Archive
- **Durabilidad**: 99.999999999%
- **Disponibilidad**: 99.99%
- **Uso**: Retencion regulatoria, largo plazo
- **Retrieval**: 12-48 horas
- **Minimo**: 180 dias
- **Costo mas bajo**

## Lifecycle Policies

### Ejemplo: Transicion Automatica
```json
{
  "Rules": [
    {
      "ID": "MoveToIA",
      "Status": "Enabled",
      "Transitions": [
        {
          "Days": 30,
          "StorageClass": "STANDARD_IA"
        },
        {
          "Days": 90,
          "StorageClass": "GLACIER"
        }
      ],
      "Expiration": {
        "Days": 365
      }
    }
  ]
}
```

## Comparativa de Costos (aprox)

| Clase | Storage/mes | Retrieval | Minimo |
|-------|-------------|-----------|--------|
| Standard | $0.023/GB | Gratis | Sin |
| Intelligent | $0.023/GB | Gratis | Sin |
| Standard-IA | $0.0125/GB | $0.01/GB | 30 dias |
| One Zone-IA | $0.01/GB | $0.01/GB | 30 dias |
| Glacier Instant | $0.004/GB | $0.03/GB | 90 dias |
| Glacier Flexible | $0.0036/GB | $0.01/GB | 90 dias |
| Glacier Deep | $0.00099/GB | $0.02/GB | 180 dias |

---

## Aplicacion

### Donde Usar
- **Standard**: Sitios web, apps, big data
- **Intelligent**: Datos con patron impredecible
- **Standard-IA**: Backups, datos menos usados
- **One Zone-IA**: Reconstruible, temporales
- **Glacier**: Archivo, compliance
- **Glacier Deep**: Retencion regulatoria, 7+ anos

### Precauciones
- Verificar minimos de almacenamiento
- Calcular costos de retrieval
- Usar lifecycle policies para automatizar
- Monitorear con S3 Storage Lens
- Considerar objets multiples de 128KB

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/s3/)
- [S3 Storage Classes](https://aws.amazon.com/s3/storage-classes/)
- [S3 Pricing](https://aws.amazon.com/s3/pricing/)
