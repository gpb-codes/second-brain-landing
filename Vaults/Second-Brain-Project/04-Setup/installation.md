# Setup - Instalacion

## Requisitos Previos

- **Windows 10/11**
- **Git** instalado ([git-scm.com](https://git-scm.com))
- **PowerShell 5.1+** (viene con Windows)
- **Obsidian** instalado ([obsidian.md](https://obsidian.md))
- **GitHub Account** (para backup y sync)

## Paso 1: Clonar el Repositorio

```powershell
git clone https://github.com/gpb-codes/second-brain-landing.git
cd second-brain-landing
```

## Paso 2: Ejecutar el Panel de Control

```powershell
.\Second-Brain.bat
```

Esto abre el menu principal con todas las opciones.

## Paso 3: Configurar tu Vault

### Opcion A: Usar el Wizard

```powershell
.\scripts\configure-repo.ps1
```

El wizard te guia paso a paso para:
1. Seleccionar tu vault de Obsidian
2. Configurar el repositorio GitHub
3. Generar el dashboard automaticamente

### Opcion B: Configuracion Manual

1. Abre `vault-config.txt` en la raiz del proyecto
2. Edita la ruta de tu vault:
```
VAULT_PATH=D:\vaults\Mi-Vault
```
3. Guarda y ejecuta el update:
```powershell
.\scripts\update-index.ps1
```

## Paso 4: Configurar GitHub Actions

1. Ve a tu repositorio en GitHub
2. Pestaña **Actions**
3. Habilita los workflows
4. El auto-update ejecutara diariamente a medianoche

## Paso 5: Instalar Plugins de Obsidian

### Plugins Esenciales

| Plugin | Para que sirve | Como instalar |
|--------|----------------|---------------|
| Templater | Templates dinamicos | Settings > Community Plugins > Templater |
| Dataview | Queries SQL | Settings > Community Plugins > Dataview |
| Git | Sync con GitHub | Settings > Community Plugins > Git |
| Calendar | Vista calendario | Settings > Community Plugins > Calendar |

### Configurar Git Plugin

1. Settings > Git > Configure
2. Auto pull interval: 5 minutos
3. Auto backup interval: 10 minutos
4. Commit message: "auto: sync vault"

## Estructura Final

```
second-brain-landing/
├── .github/workflows/    → GitHub Actions
├── 00-Master-Dashboard/  → Dashboard principal
├── 01-Vaults-Index/      → Indice de vaults
├── 02-Unified-Search/    → Busqueda unificada
├── 03-Cross-Links/       → Conexiones
├── 04-Meta-Analysis/     → Analisis
├── 05-Templates/         → Plantillas
├── scripts/              → Automatizaciones
├── Vaults/               → Tus vaults conectados
└── Second-Brain.bat      → Panel de control
```

## Comandos Utiles

| Comando | Funcion |
|---------|---------|
| `.\Second-Brain.bat` | Abrir panel de control |
| `.\scripts\update-index.ps1` | Actualizar dashboard |
| `.\scripts\configure-repo.ps1` | Configurar vault |
| `.\scripts\search-vaults.ps1` | Buscar en todos los vaults |
| `.\scripts\backup-vaults.ps1` | Backup manual |

## Solucion de Problemas

### "No se encuentra el vault"
- Verifica que la ruta en `vault-config.txt` sea correcta
- Usa rutas absolutas: `D:\vaults\Mi-Vault`

### "GitHub Actions no ejecuta"
- Verifica que el workflow este habilitado en GitHub
- Revisa la pestaña Actions > Workflows

### "Obsidian no muestra los cambios"
- Reinicia Obsidian
- Verifica que el vault este bien configurado

---

*Tags: #setup #installation #guide*
