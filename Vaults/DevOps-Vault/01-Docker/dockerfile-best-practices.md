# Docker - Best Practices

## Multi-stage Builds

```dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Production stage
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .
CMD ["node", "server.js"]
```

## Optimizaciones

1. **Usar .dockerignore** - Excluir node_modules, .git, docs
2. **Layer caching** - Copiar package.json primero
3. **Imágenes mínimas** - Usar alpine o distroless
4. **No correr como root** - Crear usuario dedicado
5. **Health checks** - Incluir HEALTHCHECK en Dockerfile

## Comandos Útiles

```bash
# Construir imagen
docker build -t myapp:latest .

# Ejecutar con puertos
docker run -d -p 3000:3000 --name myapp myapp:latest

# Ver logs
docker logs -f myapp

# Limpiar imágenes no usadas
docker system prune -a
```

---

*Tags: #docker #containers #devops*
