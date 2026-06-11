---
title: "Docker Fundamentals"
tags: [docker, containers, devops]
created: 2026-06-11
---

# Docker Fundamentals

> [!info] Guia basica de Docker
> Contenedores, imagenes y docker-compose.

---

## Conceptos Clave

| Concepto | Descripcion |
|----------|-------------|
| **Image** | Template para crear contenedores |
| **Container** | Instancia ejecutable de una imagen |
| **Dockerfile** | Archivo de configuracion para builds |
| **Compose** | Orquestacion de multi-container apps |

## Comandos Esenciales

```bash
# Construir imagen
docker build -t mi-app .

# Ejecutar contenedor
docker run -d -p 3000:3000 mi-app

# Ver contenedores activos
docker ps

# Detener contenedor
docker stop <container_id>
```

## Dockerfile Basico

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

## docker-compose.yml

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: myapp
```
