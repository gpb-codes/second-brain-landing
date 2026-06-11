---
title: "Guia - Amazon Web Services (AWS)"
aliases: ["AWS", "Amazon Web Services", "Nube de Amazon"]
tags: [cloud, aws, amazon, infraestructura, devops, pace-areas]
created: 2026-06-11
source: https://www.tecnoloblog.com/que-es-aws-amazon-web-services/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# Guia - Amazon Web Services (AWS)

> [!info] Descripcion
> Guia completa sobre AWS: que es, servicios principales, beneficios, casos de uso y como empezar.

---

## Que es AWS?

**Amazon Web Services (AWS)** es la plataforma de servicios en la nube de Amazon. Nacio en 2006 como forma de aprovechar su infraestructura tecnologica interna para ofrecer soluciones a otras empresas. Actualmente ofrece mas de **200 servicios completamente integrados**.

### Datos Clave

| Aspecto | Detalle |
|---------|---------|
| Lanzamiento | 2006 |
| Servicios | +200 |
| Paises | +190 |
| Modelo | Pago por uso |
| Capa gratuita | 12 meses |

---

## Principales Servicios

### Computacion

| Servicio | Descripcion |
|----------|-------------|
| **EC2** | Servidores virtuales configurables (instancias) |
| **Lambda** | Codigo sin servidores (serverless), ejecucion por eventos |

### Almacenamiento

| Servicio | Descripcion |
|----------|-------------|
| **S3** | Almacenamiento por objetos, seguro y duradero |
| **Glacier** | Almacenamiento a largo plazo, bajo costo (backups) |

### Bases de Datos

| Servicio | Descripcion |
|----------|-------------|
| **RDS** | Bases de datos relacionales (MySQL, PostgreSQL, Oracle) |
| **DynamoDB** | NoSQL escalable, baja latencia |

### Redes

| Servicio | Descripcion |
|----------|-------------|
| **VPC** | Red virtual privada dentro de AWS |

### Analisis y Big Data

| Servicio | Descripcion |
|----------|-------------|
| **Redshift** | Almacen de datos para analisis a gran escala |
| **EMR** | Procesamiento distribuido de datos masivos |
| **Athena** | Consultas SQL sobre datos en S3 |
| **QuickSight** | Visualizacion y analisis empresarial |

### Inteligencia Artificial

| Servicio | Descripcion |
|----------|-------------|
| **SageMaker** | Construir, entrenar y desplegar modelos ML |

---

## Ventajas de AWS

### 1. Escalabilidad y Elasticidad
Escala vertical u horizontalmente segun necesidad. Desde startups hasta multinacionales.

### 2. Bajo Coste y Modelo Flexible
Sin grandes inversiones iniciales. Solo pagas por lo que usas.

### 3. Seguridad de Nivel Empresarial
Cumple ISO 27001, PCI DSS, SOC 1, 2, 3. Incluye IAM, cifrado y proteccion DDoS.

### 4. Alta Disponibilidad
99.99999% de tiempo en linea. Replicacion entre zonas de disponibilidad.

---

## Regiones Globales

AWS cuenta con mas de **20 regiones** y multiples zonas de disponibilidad:

- Norteamerica
- Europa (España, Irlanda, Alemania, Francia)
- Asia-Pacifico
- America del Sur
- China
- **AWS GovCloud** (gobierno)

---

## Casos de Uso Reales

| Empresa | Uso de AWS |
|---------|------------|
| **Netflix** | Streaming elastico a millones de usuarios |
| **Airbnb** | Reservas, pagos y comunicaciones globales |
| **Slack** | Plataforma de comunicacion con alta disponibilidad |

### Industrias

- **Sanidad:** Datos medicos, sistemas hospitalarios
- **Finanzas:** Transacciones tiempo real, prevencion fraude
- **Educacion:** Plataformas online, entornos de aprendizaje
- **Gobierno:** Portales ciudadanos, big data

---

## Capa Gratuita AWS

### Siempre Gratis
- 25 GB en DynamoDB
- 1 millon de llamadas Lambda/mes

### 12 Meses
- EC2, S3, RDS con limites de uso mensual

### Pruebas Corto Plazo
- Caracteristicas premium limitadas por servicio

---

## Como Empezar

1. Ir a [aws.amazon.com/es/](https://aws.amazon.com/es/)
2. Click en "Crear cuenta gratuita"
3. Elegir cuenta personal o empresarial
4. Agregar email, contraseña y datos
5. Verificar identidad (telefono + tarjeta)
6. Elegir plan de soporte (basico es gratuito)

---

## Modelo de Precios

- **Calculadora oficial:** [calculator.aws.amazon.com](https://calculator.aws.amazon.com/)
- **Instancias reservadas:** Descuentos por anticipacion
- **Autoescalado:** Optimizacion automatica
- **Explorador de costes:** Monitorizacion en tiempo real
- **Tagging:** Etiquetar recursos por presupuesto

---

## Certificaciones

| Certificacion | Nivel |
|---------------|-------|
| AWS Certified Cloud Practitioner | Basico |
| AWS Certified Developer | Desarrollador |
| AWS Certified Solutions Architect | Arquitecto |
| AWS Certified SysOps Administrator | Administrador |

---

## Aplicacion

### Donde Usar

- Migrar infraestructura on-premise a la nube
- Desarrollar aplicaciones escalables
- Almacenar y analizar grandes volumenes de datos
- Implementar soluciones de IA/ML
- Crear backends serverless

### Precauciones

- Controlar costes con alertas y presupuestos
- Usar la calculadora antes de contratar
- Revisar la capa gratuita para evitar sorpresas
- Configurar IAM correctamente (principio de menor privilegio)

---

## Referencias

- [[MOC Cloud Computing]]
- [[Guia - Azure]]
- [[Guia - Google Cloud Platform]]
- [AWS Official Site](https://aws.amazon.com/)
- [AWS Documentation](https://docs.aws.amazon.com/)
