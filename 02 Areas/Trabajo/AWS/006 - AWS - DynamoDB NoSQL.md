---
title: "AWS - DynamoDB NoSQL"
aliases: [DynamoDB, Amazon DynamoDB, Base de Datos NoSQL]
tags: [aws, dynamodb, nosql, database, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/dynamodb/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - DynamoDB NoSQL

> [!info] Descripcion
> Amazon DynamoDB es una base de datos NoSQL completamente gestionada que ofrece rendimiento de un digito de milisegundo a cualquier escala.

---

## Que es DynamoDB

DynamoDB es NoSQL key-value y document database que:
- Rendimiento constante a cualquier escala
- Escalado automatico de capacidad
- Replicacion multi-region
- Encriptacion en reposo y en transito

## Conceptos Clave

### Tables
- Coleccion de items
- Esquematico pero flexible

### Items
- Registro individual (similar a fila)
- Tamanio maximo: 400 KB

### Attributes
- Campo de dato (similar a columna)
- Tipos: String, Number, Binary, Boolean, List, Map

### Primary Key
- **Simple**: Partition key unica
- **Composite**: Partition key + Sort key

## Capacity Modes

### On-Demand
- Paga por request
- Sin provisioning
- Ideal para cargas impredecibles

### Provisioned
- Define read/write capacity
- Auto Scaling disponible
- Mas economico para cargas predecibles

## Indices

### Global Secondary Index (GSI)
- Partition key diferente
- Puede tener sort key
- Hasta 20 por tabla

### Local Secondary Index (LSI)
- Misma partition key
- Sort key diferente
- Hasta 5 por tabla

## Features Principales

### DAX (DynamoDB Accelerator)
- Cache en memoria
- Microsegundos de latencia
- Compatible con DynamoDB API

### Streams
- Captura de cambios
- 24 horas de retencion
- Integracion con Lambda

### Time to Live (TTL)
- Expiracion automatica de items
- Reduce almacenamiento
- Ideal para sesiones y tokens

### Global Tables
- Multi-region, multi-active
- Replicacion automatica
- Baja latencia global

## Acceso

### AWS SDK
```python
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('Users')

# Put Item
table.put_item(Item={'id': '123', 'name': 'Juan'})

# Get Item
response = table.get_item(Key={'id': '123'})

# Query
response = table.query(
    KeyConditionExpression=Key('id').eq('123')
)
```

### DynamoDB Query Language (PartiQL)
```sql
SELECT * FROM Users WHERE id = '123'
INSERT INTO Users VALUES {'id': '124', 'name': 'Maria'}
UPDATE Users SET name = 'Juan Carlos' WHERE id = '123'
```

## Pricing

### On-Demand
- $1.25 por 1M writes
- $0.25 por 1M reads

### Provisioned
- ~$0.00065 por WCU/hora
- ~$0.00013 por RCU/hora

### Storage
- $0.25 por GB/mes

---

## Aplicacion

### Donde Usar
- Gaming leaderboards
- IoT data
- Sesiones de usuario
- Shopping carts
- Social networks
- Real-time bidding

### Precauciones
- Diseñar esquema para access patterns
- Usar composite keys cuando sea posible
- Evitar hot keys
- Monitorear throttled requests
- Usar DAX para caching

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/dynamodb/)
- [DynamoDB Pricing](https://aws.amazon.com/dynamodb/pricing/)
- [DynamoDB Best Practices](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/BestPractices.html)
