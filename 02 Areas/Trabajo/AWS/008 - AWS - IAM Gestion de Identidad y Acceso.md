---
title: "AWS - IAM Gestion de Identidad y Acceso"
aliases: [IAM, Identity and Access Management, Gestion Identidad]
tags: [aws, iam, security, identity, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/iam/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - IAM Gestion de Identidad y Acceso

> [!info] Descripcion
> AWS IAM (Identity and Access Management) le permite gestionar de forma segura el acceso a los servicios y recursos de AWS, manteniendo un control centralizado.

---

## Que es IAM

IAM es el servicio de seguridad que:
- Controla acceso a servicios y recursos
- Autentica usuarios y servicios
- Autoriza acciones con permisos
- Integra con Active Directory

## Componentes Principales

### Users
- Identidad para personas
- Credenciales de acceso
- Acceso a consola y programatico

### Groups
- Coleccion de users
- Permisos compartidos
- Hasta 10 groups por user

### Roles
- Identidad temporal
- Asume por usuarios, servicios o cuentas
- No tiene credenciales permanentes

### Policies
- Documentos JSON
- Definen permisos
- **Managed**: Predefinidas por AWS
- **Customer**: Creadas por usted
- **Inline**: Asociadas directamente

## Policy Document

### Estructura basica
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

### Elementos clave
- **Effect**: Allow o Deny
- **Action**: Servicio y accion
- **Resource**: ARN del recurso
- **Condition**: Condiciones opcionales

## IAM Roles

### Tipos de Roles
- **Service**: Para servicios AWS (Lambda, EC2)
- **Cross-account**: Entre cuentas AWS
- **Identity**: Federacion con identidades

### Ejemplo: Rol para Lambda
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "lambda.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
```

## Best Practices

### Seguridad
- Root account: Solo para tareas iniciales
- MFA habilitado para todos los usuarios
- Usar roles en vez de access keys
- Rotacion regular de credenciales
- Least privilege principle

### Organizacion
- Un user por persona
- Un user por servicio
- Usar groups para permisos
- Policies descriptivas y versionadas

## IAM Identity Center

### Single Sign-On
- Un login para multiples cuentas
- Integracion con Active Directory
- Acceso a aplicaciones SAML

### Permission Sets
- Coleccion de permisos
- Asignados a accounts
- Sincronizados con AD

---

## Aplicacion

### Donde Usar
- Control de acceso a consola AWS
- Permisos para servicios
- Federacion con identidad corporativa
- Cross-account access
- Acceso a aplicaciones SAML

### Precauciones
- Nunca compartir credenciales
- Habilitar MFA siempre
- Revisar permisos regularmente
- Usar IAM Access Analyzer
- Evitar policies con *

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/iam/)
- [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [IAM Policies](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies.html)
