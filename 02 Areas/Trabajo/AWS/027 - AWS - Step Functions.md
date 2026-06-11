---
title: "AWS - Step Functions"
aliases: [Step Functions, AWS Step Functions, Orquestacion]
tags: [aws, step-functions, serverless, orchestration, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/step-functions/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - Step Functions

> [!info] Descripcion
> AWS Step Functions es un servicio de orquestacion serverless que le permite combinar multiples servicios AWS en aplicaciones complejas y workflows de maquina de estados.

---

## Que es Step Functions

Step Functions es workflow orchestration que:
- Define workflows como maquinas de estados
- Coordina multiples servicios AWS
- Escalado automatico
- Visibilidad y logging
- Error handling integrado

## Tipos de State Machines

### Standard Workflows
- Hasta 25,000 state transitions
- Precios por state transition
- Historial de 90 dias
- Para workloads largos

### Express Workflows
- Hasta 100,000 transitions/segundo
- Precios por request y duracion
- Logging a CloudWatch
- Para workloads altamente paralelos

## State Types

### Task
- Ejecuta trabajo
- Lambda, ECS, SQS, etc.
- Async o sync

### Choice
- branching logico
- Comparaciones
- Variable routing

### Wait
- Delay fijo o timestamp
- Espera controlada

### Pass
- Pasa datos al siguiente state
- Payload processing
- Testing

### Succeed
- Termina exitosamente
- Output opcional

### Fail
- Termina con error
- Error y cause

### Parallel
- Ejecucion paralela
- Branches multiples
- Merge results

### Map
- Iterate sobre collection
- Dynamic parallelism
- Fan-out pattern

## ASL (Amazon States Language)

### Ejemplo
```json
{
  "StartAt": "ProcessOrder",
  "States": {
    "ProcessOrder": {
      "Type": "Task",
      "Resource": "arn:aws:lambda:us-east-1:123:function:ProcessOrder",
      "Next": "CheckInventory"
    },
    "CheckInventory": {
      "Type": "Choice",
      "Choices": [
        {
          "Variable": "$.inventory",
          "NumericEquals": 0,
          "Next": "OutOfStock"
        }
      ],
      "Default": "ShipOrder"
    },
    "ShipOrder": {
      "Type": "Task",
      "Resource": "arn:aws:states:::sqs:sendMessage",
      "Parameters": {
        "QueueUrl": "https://sqs.us-east-1.amazonaws.com/123/ShippingQueue",
        "MessageBody.$": "$"
      },
      "End": true
    },
    "OutOfStock": {
      "Type": "Fail",
      "Error": "OutOfStock",
      "Cause": "No inventory available"
    }
  }
}
```

## Integrations

### AWS Services
- Lambda
- ECS/Fargate
- DynamoDB
- SQS/SNS
- API Gateway
- Step Functions (nested)

### Third Party
- HTTP tasks
- Activity tasks
- Custom connectors

## Error Handling

### Retry
```json
{
  "Retry": [
    {
      "ErrorEquals": ["States.ALL"],
      "IntervalSeconds": 3,
      "MaxAttempts": 3,
      "BackoffRate": 2
    }
  ]
}
```

### Catch
```json
{
  "Catch": [
    {
      "ErrorEquals": ["States.ALL"],
      "Next": "ErrorHandler",
      "ResultPath": "$.error"
    }
  ]
}
```

## Monitoring

### CloudWatch
- Execution metrics
- State transition metrics
- Lambda metrics

### X-Ray
- End-to-end tracing
- Latency analysis
- Service map

### CloudWatch Logs
- Execution history
- Input/Output
- Error details

---

## Aplicacion

### Donde Usar
- Order processing
- Data pipelines
- ETL workflows
- Approval processes
- Machine learning pipelines
- Microservices orchestration

### Precauciones
- Choose Standard vs Express wisely
- Design state machines carefully
- Handle errors explicitly
- Use Step Functions lens for optimization
- Monitor execution history

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/step-functions/)
- [Step Functions Pricing](https://aws.amazon.com/step-functions/pricing/)
- [ASL Reference](https://states-language.net/spec.html)
