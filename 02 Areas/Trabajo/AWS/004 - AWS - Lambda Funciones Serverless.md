---
title: "AWS - Lambda Funciones Serverless"
aliases: [Lambda, AWS Lambda, Serverless Functions]
tags: [aws, lambda, serverless, functions, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/lambda/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Lambda Funciones Serverless

> [!info] Descripcion
> AWS Lambda ejecuta codigo sin provisionar ni gestionar servidores, pagando solo por el tiempo de ejecucion del codigo con precision de milisegundos.

---

## Que es Lambda

Lambda es computacion serverless que:
- Ejecuta codigo en respuesta a eventos
- Escala automaticamente
- Paga por invocacion y duracion
- Soporta multiples lenguajes

## Lenguajes Soportados

### Nativos
- **Node.js**: JavaScript/TypeScript
- **Python**: Python 3.8+
- **Java**: Java 11/17
- **C#/.NET**: .NET 6
- **Go**: Go 1.x
- **Ruby**: Ruby 2.7+

### Via Custom Runtime
- C++
- Rust
- Cualquier lenguaje via custom runtime

## Conceptos Clave

### Handler
```javascript
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!')
    };
    return response;
};
```

### Event Sources
- API Gateway
- S3
- DynamoDB
- SQS/SNS
- CloudWatch Events
- IoT
- Kinesis

### Execution Environment
- 128 MB a 10 GB de memoria
- CPU proporcional a memoria
- 15 minutos maximo de ejecucion
- 512 MB de almacenamiento temporal

## Configuracion

### Variables de Entorno
```json
{
  "Variables": {
    "DB_HOST": "endpoint",
    "DB_NAME": "mydb"
  }
}
```

### Layers
- Compartir codigo entre funciones
- Librerias grandes
- Dependencias custom

### Dead Letter Config
- SQS o SNS como destino de fallos
- Retry automatico

## Pricing

### Nivel Gratuito
- 1M invocaciones/mes
- 400,000 GB-segundos/mes
- 12 meses del FREE tier

### Costo Post Gratuito
- $0.20 por 1M invocaciones
- $0.0000166667 por GB-segundo

## Patrones Comunes

### API Backend
```
API Gateway -> Lambda -> DynamoDB
```

### File Processing
```
S3 Upload -> Lambda -> Process -> S3 Output
```

### Data Transformation
```
Kinesis -> Lambda -> Transform -> Firehose
```

### Scheduled Tasks
```
CloudWatch Events -> Lambda -> Execute
```

---

## Aplicacion

### Donde Usar
- Backends de API
- Procesamiento de archivos
- Transformacion de datos
- Tareas programadas
- Webhooks
- Chatbots
- IoT backend

### Precauciones
- Cold starts en Java/.NET
- Limitaciones de 15 minutos
- Tamanio maximo de deployment (50MB zipped)
- Dependencias de red
- Monitoreo con CloudWatch Logs

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/lambda/)
- [Lambda Pricing](https://aws.amazon.com/lambda/pricing/)
- [Lambda Best Practices](https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)
