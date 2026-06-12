export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuickAction {
  label: string;
  message: string;
  icon: string;
}

export interface ChatResponse {
  keywords: string[];
  response: string;
  category: string;
}

export const chatResponses: ChatResponse[] = [
  // QUE ES PACE
  {
    keywords: ["que es", "pace", "metodologia", "significa", "definicion"],
    response:
      "**PACE** es una metodologia de organizacion de conocimiento:\n\n**P** - **Proyectos**: Iniciativas con deadline y objetivos claros\n**A** - **Areas**: Responsabilidades continuas del dia a dia\n**C** - **Conexiones**: Mapas de conocimiento (MOCs) que enlazan todo\n**E** - **Extracciones**: Logs de sesiones AI y destilados de informacion\n\nCada vault se organiza siguiendo esta estructura para eliminar la friccion y mantener todo conectado.",
    category: "concepto",
  },
  {
    keywords: ["moc", "mapa de conocimiento", "conexiones", "enlazar"],
    response:
      "**MOCs (Maps of Content)** son el corazon de PACE:\n\n- Son archivos que actuan como **hub central** de un tema\n- Conectan notas relacionadas entre si\n- Se auto-actualizan con GitHub Actions\n- Eliminan la necesidad de carpetas profundas\n\nEjemplo: `MOC DevOps.md` conecta Docker, CI/CD, Kubernetes y mas.",
    category: "concepto",
  },

  // INSTALACION
  {
    keywords: ["instalar", "instalo", "instalacion", "como empiezo", "empezar", "comenzar", "setup", "configurar"],
    response:
      "**Instalacion en 3 pasos:**\n\n**1.** Clona el repositorio:\n```\ngit clone https://github.com/gpb-codes/second-brain-landing.git\n```\n\n**2.** Ejecuta el instalador:\n```\ninstall.bat\n```\n\n**3.** Abre Obsidian y selecciona la carpeta del vault\n\nEl instalador verifica Git, Python y PowerShell automaticamente.",
    category: "instalacion",
  },
  {
    keywords: ["windows", "mac", "linux", "sistema operativo", "compatibilidad"],
    response:
      "**Compatibilidad:**\n\n- **Windows**: Soporte completo (PowerShell 5.1+)\n- **macOS**: Funciona con PowerShell Core\n- **Linux**: Funciona con PowerShell Core\n\nLos scripts estan escritos en PowerShell y Python, que son multiplataforma.",
    category: "instalacion",
  },
  {
    keywords: ["obsidian", "vault", "carpeta", "donde instalo", "donde pongo"],
    response:
      "**Ubicacion del vault:**\n\nPuedes poner el vault en cualquier lugar:\n- `D:\\vaults\\` (recomendado)\n- `C:\\Users\\TuUsuario\\Documents\\`\n- Cualquier ruta personalizada\n\nEl script `configure-repo.ps1` te permite configurar la ruta.",
    category: "instalacion",
  },

  // SCRIPTS
  {
    keywords: ["scripts", "herramientas", "comandos", "que hay", "funciones"],
    response:
      "**15 scripts disponibles:**\n\n- `Second-Brain.bat` - Launcher principal\n- `PACE-Launcher.ps1` - Menu con Unicode\n- `second-brain.ps1` - Panel de control\n- `gmail-imap.py` - Client email IMAP\n- `dashboard-stats.ps1` - Metricas del vault\n- `backup-vaults.ps1` - Backups automaticos\n- `export-vault.ps1` - Exportar a HTML\n- `search-vaults.ps1` - Busqueda full-text\n- `update-index.ps1` - Auto-actualizar indices\n- `configure-repo.ps1` - Configurar repositorio\n- `qr-mobile-sync.py` - QR codes para movil\n- `setup-wizard.ps1` - Asistente de configuracion",
    category: "scripts",
  },
  {
    keywords: ["panel de control", "menu", "segundo brain", "bat"],
    response:
      "**Panel de Control** es tu hub central:\n\n- Git Pull/Push con un click\n- Sincronizar email IMAP\n- Ver metricas del vault\n- Buscar en todos los vaults\n- Hacer backups\n- Configurar el sistema\n\nEjecuta `Second-Brain.bat` para abrirlo.",
    category: "scripts",
  },
  {
    keywords: ["backup", "respaldo", "copiar", "seguridad"],
    response:
      "**Sistema de Backups:**\n\n- `backup-vaults.ps1` crea copias con timestamp\n- Respalda todos tus vaults automaticamente\n- Puedes configurar backup programado\n- Los backups se guardan en una carpeta separada\n\nEjecuta: `powershell -File scripts\\backup-vaults.ps1`",
    category: "scripts",
  },
  {
    keywords: ["buscar", "busqueda", "encontrar", "nota", "search"],
    response:
      "**Busqueda Universal:**\n\n- `search-vaults.ps1` busca en todos tus vaults\n- Soporta busqueda full-text\n- Filtra por archivo, carpeta o contenido\n- Resultados rapidos con resaltado\n\nEjecuta: `powershell -File scripts\\search-vaults.ps1 -Query \"tu busqueda\"`",
    category: "scripts",
  },

  // INTEGRACIONES
  {
    keywords: ["integraciones", "git", "email", "conectar", "sincronizar", "sync"],
    response:
      "**Integraciones disponibles:**\n\n- **Git/GitHub** - Push/Pull desde el menu\n- **Email IMAP** - Sincronizar Gmail al vault\n- **Obsidian** - Vault nativo con plugins\n- **OpenCode** - Asistente AI integrado\n- **Mobile Sync** - Sincronizar con movil via QR\n\nTodas se gestionan desde el panel de control.",
    category: "integraciones",
  },
  {
    keywords: ["gmail", "email", "correo", "imap", "sincronizar email"],
    response:
      "**Email IMAP Integration:**\n\n- Conecta tu Gmail con IMAP\n- Guarda emails como notas en Obsidian\n- Sincroniza automaticamente\n- Configura una vez, funciona siempre\n\nRequiere: App Password de Gmail (no tu password normal).",
    category: "integraciones",
  },
  {
    keywords: ["github", "git", "push", "pull", "repositorio", "code"],
    response:
      "**GitHub Integration:**\n\n- Push/Pull con un click desde el menu\n- Sincronizacion automatica con GitHub Actions\n- Tus vaults siempre estan actualizados en la nube\n- Historial completo de cambios\n\nConfigura tu repo en `configure-repo.ps1`.",
    category: "integraciones",
  },
  {
    keywords: ["movil", "mobile", "telefono", "qr", "sincronizar movil"],
    response:
      "**Mobile Sync:**\n\n- Genera QR codes para acceso rapido\n- Sincroniza notas entre desktop y movil\n- Usa `qr-mobile-sync.py` para crear los QRs\n- Funciona con cualquier lector de QR\n\nEjecuta: `python scripts\\qr-mobile-sync.py`",
    category: "integraciones",
  },

  // REQUISITOS
  {
    keywords: ["python", "dependencias", "requisitos", "prerequisitos", "necesito"],
    response:
      "**Requisitos del sistema:**\n\n- **Git** - Obligatorio para version control\n- **PowerShell 5.1+** - Obligatorio para scripts\n- **Python 3.x** - Solo para emails IMAP y QR codes\n- **Obsidian** - Para abrir y usar el vault\n\nEl instalador `install.bat` verifica todo automaticamente.",
    category: "requisitos",
  },
  {
    keywords: ["plugin", "obsidian plugin", "templater", "dataview"],
    response:
      "**Plugins recomendados para Obsidian:**\n\n- **Templater** - Templates dinamicos con JavaScript\n- **Dataview** - Queries SQL para tus notas\n- **Git** - Sync directo desde Obsidian\n- **Calendar** - Vista de calendario para diario\n- **Periodic Notes** - Notas diarias/semanales\n- **Excalidraw** - Diagramas y sketchnotes\n\nEstos plugins maximizan el potencial de tu vault.",
    category: "requisitos",
  },

  // PRECIO
  {
    keywords: ["gratis", "free", "costo", "precio", "pago", "cuanto cuesta", "licencia"],
    response:
      "**Second Brain es completamente GRATIS y Open Source**\n\n- Licencia MIT - Usa, modifica y distribuye libremente\n- Sin costos ocultos\n- Sin suscripciones\n- Sin limitaciones\n\nSolo necesitas una cuenta de GitHub (gratis) para sincronizar.",
    category: "precio",
  },

  // ESTRUCTURA
  {
    keywords: ["vault", "carpeta", "estructura", "organizar", "organizacion", "carpetas"],
    response:
      "**Estructura PACE de cada vault:**\n\n```\n00 Inbox/\n   Notas rapidas sin procesar\n01 Proyectos/\n   Iniciativas con deadline\n02 Areas/\n   Responsabilidades continuas\n03 Conexiones - MOCs/\n   Mapas de conocimiento\n04 Extracciones AI/\n   Logs y destilados\n07 Sistema/\n   Config y metadata\n```\n\nIncluimos 5 vaults de demo listos para usar.",
    category: "estructura",
  },
  {
    keywords: ["demo", "ejemplo", "prueba", "vaults demo"],
    response:
      "**5 vaults de demo incluidos:**\n\n- **DevOps-Vault** - Docker, CI/CD, Kubernetes\n- **Branding-Vault** - Identidad, Plantillas, Contenido\n- **Learning-Vault** - Cursos, Tutoriales, Recursos\n- **Finanzas-Vault** - Presupuestos, Inversiones\n- **Salud-Vault** - Fitness, Nutricion, Bienestar\n\nCada uno tiene estructura PACE completa con MOCs.",
    category: "estructura",
  },

  // CHATBOT
  {
    keywords: ["chatbot", "bot", "asistente", "ai", "ayuda", "help"],
    response:
      "**Soy el chatbot de Second Brain!**\n\nPuedo ayudarte con:\n\n- Explicar que es PACE\n- Guiarte con la instalacion\n- Listar scripts y herramientas\n- Explicar integraciones\n- Responder preguntas frecuentes\n\n**Escribe tu pregunta** o usa los botones de abajo!",
    category: "ayuda",
  },
  {
    keywords: ["hola", "buenos dias", "buenas", "saludo"],
    response:
      "**Hola! Bienvenido a Second Brain**\n\nSoy tu asistente virtual. Puedo ayudarte a:\n\n- Entender la metodologia PACE\n- Instalar y configurar Second Brain\n- Conocer todas las herramientas\n\n**En que puedo ayudarte hoy?**",
    category: "ayuda",
  },
  {
    keywords: ["gracias", "thank", "genial", "perfecto", "bien"],
    response:
      "**De nada!** Me alegra poder ayudarte.\n\nSi tienes mas preguntas, no dudes en preguntar. Estoy aqui para ayudarte a sacar el maximo provecho de Second Brain.",
    category: "ayuda",
  },
  {
    keywords: ["github actions", "actions", "ci cd", "automatizar", "automatico", "auto update"],
    response:
      "**GitHub Actions Integration:**\n\n- Auto-update diario del dashboard\n- Sync automatico de cambios\n- Deploy a Cloudflare Pages\n- Scan de estructura PACE\n\nCada push a `main` ejecuta el workflow automaticamente.",
    category: "integraciones",
  },
  {
    keywords: ["cloudflare", "deploy", "hosting", "pagina web", "web"],
    response:
      "**Cloudflare Pages:**\n\n- Deploy automatico via GitHub Actions\n- URL: `second-brain-9ft.pages.dev`\n- SSL gratuito incluido\n- CDN global para carga rapida\n\nCada commit se despliega automaticamente.",
    category: "integraciones",
  },
  {
    keywords: ["problema", "error", "no funciona", "fallo", "issue"],
    response:
      "**Solucion de problemas:**\n\n1. Verifica que tienes Git instalado\n2. PowerShell debe ser 5.1 o superior\n3. Python 3.x solo para features avanzadas\n4. Revisa que Obsidian pueda abrir la carpeta\n\nSi persiste, abre un issue en GitHub.",
    category: "ayuda",
  },
];

export const quickActions: QuickAction[] = [
  { label: "Que es PACE?", message: "Que es PACE?", icon: "?" },
  { label: "Como instalo?", message: "Como instalo Second Brain?", icon: "↓" },
  { label: "Scripts", message: "Que scripts hay?", icon: ">" },
  { label: "Integraciones", message: "Que integraciones tiene?", icon: "@" },
  { label: "Gratis?", message: "Es gratuito?", icon: "$" },
  { label: "Requisitos", message: "Que requisitos necesito?", icon: "!" },
  { label: "Plugins", message: "Que plugins de Obsidian recomiendan?", icon: "+" },
  { label: "Estructura", message: "Como se organiza el vault?", icon: "#" },
];

export function findResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  // Score each response by counting keyword matches
  let bestScore = 0;
  let bestResponse = "";

  for (const item of chatResponses) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lowerInput.includes(keyword)) {
        score += keyword.length; // Longer matches score higher
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestResponse = item.response;
    }
  }

  if (bestScore > 0) {
    return bestResponse;
  }

  return "No estoy seguro de entender tu pregunta. Puedo ayudarte con:\n\n- **Que es PACE** - Metodologia de organizacion\n- **Instalacion** - Como empezar\n- **Scripts** - Herramientas disponibles\n- **Integraciones** - Git, Email, Obsidian\n- **Requisitos** - Que necesitas\n- **Precio** - Costos y licencia\n\nIntenta preguntar de otra forma!";
}
