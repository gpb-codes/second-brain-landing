---
title: "AWS - EKS Kubernetes"
aliases: [EKS, Elastic Kubernetes Service, K8s AWS]
tags: [aws, eks, kubernetes, containers, pace-areas]
created: 2026-06-11
source: https://aws.amazon.com/eks/
theme: sage
accent_color: #5B8A72
pace_section: 02-areas
content_type: guia
---

# AWS - EKS Kubernetes

> [!info] Descripcion
> Amazon EKS (Elastic Kubernetes Service) es un servicio gestionado que facilita ejecutar Kubernetes en AWS sin necesidad de ser experto en gestionar el control plane de Kubernetes.

---

## Que es EKS

EKS es managed Kubernetes que:
- Kubernetes upstream compatible
- Control plane gestionado por AWS
- Integra con servicios AWS
- Multi-AZ automatico
- Fargate para pods

## Componentes

### Control Plane
- API server
- etcd
- Scheduler
- Controller manager
- Managed by AWS

### Data Plane
- Worker nodes (EC2 o Fargate)
- Kubelet
- Container runtime
- Networking

## Launch Types

### Managed Node Groups
- EC2 instances gestionadas
- Auto-scaling group
- AMI optimizada por AWS
- Actualizaciones automaticas

### Self-Managed Nodes
- EC2 instances propias
- AMI personalizada
- Control total
- Mayoria de configuraciones

### Fargate
- Serverless pods
- Sin management de nodes
- Pago por pod
- Ideal para workloads estandar

## EKS Anywhere

### On-Premises
- Kubernetes en data center
- Mismo EKS experience
- Connected o disconnected
- Hardware requirements

### EKS on Outposts
- AWS hardware on-premises
- Low latency
- Data residency

## EKS Auto Mode

### Auto Scaling
- Pod-level scaling
- Node-level scaling
- Cluster autoscaler
- Karpenter

### Configuration
```yaml
apiVersion: eks.amazonaws.com/v1
kind: NodeConfig
spec:
  instanceTypes:
    - m5.large
    - m5.xlarge
  availabilityZones:
    - us-east-1a
    - us-east-1b
```

## Add-ons

### Core Add-ons
- **CoreDNS**: DNS for services
- **kube-proxy**: Network rules
- **VPC CNI**: Networking
- **EBS CSI**: Storage
- **EFS CSI**: File storage

### Community Add-ons
- **Metrics Server**: HPA
- **Prometheus**: Monitoring
- **ArgoCD**: GitOps
- **Istio**: Service mesh
- **Cert Manager**: TLS

## Networking

### VPC CNI
- Pod networking
- ENI per pod
- Security groups per pod
- IPv4/IPv6

### Service Mesh
- App Mesh integration
- Istio support
- Traffic management
- Observability

### Load Balancing
- ALB Ingress Controller
- NLB integration
- Target type: IP o Instance

## Storage

### EBS CSI Driver
- Persistent volumes
- Dynamic provisioning
- Snapshots
- Encryption

### EFS CSI Driver
- Shared storage
- Multi-AZ access
- Read-write-many

### FSx CSI Driver
- Lustre filesystem
- High performance computing

---

## Aplicacion

### Donde Usar
- Microservices architectures
- Multi-cloud deployments
- Hybrid cloud
- Machine learning platforms
- CI/CD pipelines
- Enterprise applications

### Precauciones
- Kubernetes learning curve
- Network policy management
- Storage class configuration
- Add-on management
- Version upgrades

---

## Referencias
- [[MOC AWS]]
- [AWS Documentation](https://docs.aws.amazon.com/eks/)
- [EKS Pricing](https://aws.amazon.com/eks/pricing/)
- [EKS Best Practices](https://aws.github.io/aws-eks-best-practices/)
