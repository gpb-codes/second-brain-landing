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
  followUp?: string[];
}

export const chatResponses: ChatResponse[] = [
  // QUE ES PACE
  {
    keywords: ["que es", "pace", "metodologia", "significa", "definicion"],
    response:
      "**PACE** es una metodologia de organizacion de conocimiento:\n\n**P** - **Proyectos**: Iniciativas con deadline y objetivos claros\n**A** - **Areas**: Responsabilidades continuas del dia a dia\n**C** - **Conexiones**: Mapas de conocimiento (MOCs) que enlazan todo\n**E** - **Extracciones**: Logs de sesiones AI y destilados de informacion\n\nCada vault se organiza siguiendo esta estructura para eliminar la friccion y mantener todo conectado.",
    category: "concepto",
    followUp: ["Como se organizan los MOCs?", "Que son las extracciones AI?"],
  },
  {
    keywords: ["moc", "mapa de conocimiento", "conexiones", "enlazar"],
    response:
      "**MOCs (Maps of Content)** son el corazon de PACE:\n\n- Son archivos que actuan como **hub central** de un tema\n- Conectan notas relacionadas entre si\n- Se auto-actualizan con GitHub Actions\n- Eliminan la necesidad de carpetas profundas\n\nEjemplo: `MOC DevOps.md` conecta Docker, CI/CD, Kubernetes y mas.",
    category: "concepto",
    followUp: ["Como creo un MOC?", "Que es un MOC de ejemplo?"],
  },
  {
    keywords: ["extraccion", "destilado", "log", "ai", "openai", "claude", "gemini"],
    response:
      "**Extracciones AI** son notas generadas automaticamente:\n\n- Resumenes de conversaciones con AI\n- Destilados de informacion relevante\n- Logs de sesiones de trabajo\n- Sintesis de documentos largos\n\nSe guardan en `04 Extracciones AI/` y se conectan via MOCs.",
    category: "concepto",
    followUp: ["Como genero extracciones?", "Que formatos soporta?"],
  },

  // INSTALACION
  {
    keywords: ["instalar", "instalo", "instalacion", "como empiezo", "empezar", "comenzar", "setup", "configurar"],
    response:
      "**Instalacion en 3 pasos:**\n\n**1.** Clona el repositorio:\n```\ngit clone https://github.com/gpb-codes/second-brain-landing.git\n```\n\n**2.** Ejecuta el instalador:\n```\ninstall.bat\n```\n\n**3.** Abre Obsidian y selecciona la carpeta del vault\n\nEl instalador verifica Git, Python y PowerShell automaticamente.",
    category: "instalacion",
    followUp: ["Que pasa si no tengo Git?", "Donde pongo los vaults?"],
  },
  {
    keywords: ["windows", "mac", "linux", "sistema operativo", "compatibilidad"],
    response:
      "**Compatibilidad:**\n\n- **Windows**: Soporte completo (PowerShell 5.1+)\n- **macOS**: Funciona con PowerShell Core\n- **Linux**: Funciona con PowerShell Core\n\nLos scripts estan escritos en PowerShell y Python, que son multiplataforma.",
    category: "instalacion",
    followUp: ["Como instalo en Mac?", "Que version de PowerShell necesito?"],
  },
  {
    keywords: ["obsidian", "vault", "carpeta", "donde instalo", "donde pongo"],
    response:
      "**Ubicacion del vault:**\n\nPuedes poner el vault en cualquier lugar:\n- `D:\\vaults\\` (recomendado)\n- `C:\\Users\\TuUsuario\\Documents\\`\n- Cualquier ruta personalizada\n\nEl script `configure-repo.ps1` te permite configurar la ruta.",
    category: "instalacion",
    followUp: ["Como cambio la ruta?", "Puedo tener varios vaults?"],
  },

  // SCRIPTS
  {
    keywords: ["scripts", "herramientas", "comandos", "que hay", "funciones"],
    response:
      "**15 scripts disponibles:**\n\n- `Second-Brain.bat` - Launcher principal\n- `PACE-Launcher.ps1` - Menu con Unicode\n- `second-brain.ps1` - Panel de control\n- `gmail-imap.py` - Client email IMAP\n- `dashboard-stats.ps1` - Metricas del vault\n- `backup-vaults.ps1` - Backups automaticos\n- `export-vault.ps1` - Exportar a HTML\n- `search-vaults.ps1` - Busqueda full-text\n- `update-index.ps1` - Auto-actualizar indices\n- `configure-repo.ps1` - Configurar repositorio\n- `qr-mobile-sync.py` - QR codes para movil\n- `setup-wizard.ps1` - Asistente de configuracion",
    category: "scripts",
    followUp: ["Cual es el mas importante?", "Como ejecuto un script?"],
  },
  {
    keywords: ["panel de control", "menu", "segundo brain", "bat"],
    response:
      "**Panel de Control** es tu hub central:\n\n- Git Pull/Push con un click\n- Sincronizar email IMAP\n- Ver metricas del vault\n- Buscar en todos los vaults\n- Hacer backups\n- Configurar el sistema\n\nEjecuta `Second-Brain.bat` para abrirlo.",
    category: "scripts",
    followUp: ["Que opciones hay en el menu?", "Como personalizo el panel?"],
  },
  {
    keywords: ["backup", "respaldo", "copiar", "seguridad"],
    response:
      "**Sistema de Backups:**\n\n- `backup-vaults.ps1` crea copias con timestamp\n- Respalda todos tus vaults automaticamente\n- Puedes configurar backup programado\n- Los backups se guardan en una carpeta separada\n\nEjecuta: `powershell -File scripts\\backup-vaults.ps1`",
    category: "scripts",
    followUp: ["Cada cuanto hago backup?", "Donde se guardan los backups?"],
  },
  {
    keywords: ["buscar", "busqueda", "encontrar", "nota", "search"],
    response:
      "**Busqueda Universal:**\n\n- `search-vaults.ps1` busca en todos tus vaults\n- Soporta busqueda full-text\n- Filtra por archivo, carpeta o contenido\n- Resultados rapidos con resaltado\n\nEjecuta: `powershell -File scripts\\search-vaults.ps1 -Query \"tu busqueda\"`",
    category: "scripts",
    followUp: ["Como busco por autor?", "Busca en PDFs?"],
  },
  {
    keywords: ["dashboard", "estadisticas", "metricas", "stats"],
    response:
      "**Dashboard de Metricas:**\n\n- Total de notas por vault\n- Notas modificadas recientemente\n- Top autores (si usas Git)\n- Distribucion por categorias\n- Crecimiento en el tiempo\n\nEjecuta: `powershell -File scripts\\dashboard-stats.ps1`",
    category: "scripts",
    followUp: ["Puedo exportar las metricas?", "Actualiza automaticamente?"],
  },

  // INTEGRACIONES
  {
    keywords: ["integraciones", "git", "email", "conectar", "sincronizar", "sync"],
    response:
      "**Integraciones disponibles:**\n\n- **Git/GitHub** - Push/Pull desde el menu\n- **Email IMAP** - Sincronizar Gmail al vault\n- **Obsidian** - Vault nativo con plugins\n- **OpenCode** - Asistente AI integrado\n- **Mobile Sync** - Sincronizar con movil via QR\n\nTodas se gestionan desde el panel de control.",
    category: "integraciones",
    followUp: ["Como configuro Git?", "Que es OpenCode?"],
  },
  {
    keywords: ["gmail", "email", "correo", "imap", "sincronizar email"],
    response:
      "**Email IMAP Integration:**\n\n- Conecta tu Gmail con IMAP\n- Guarda emails como notas en Obsidian\n- Sincroniza automaticamente\n- Configura una vez, funciona siempre\n\nRequiere: App Password de Gmail (no tu password normal).",
    category: "integraciones",
    followUp: ["Como genero App Password?", "Que emails sincroniza?"],
  },
  {
    keywords: ["github", "git", "push", "pull", "repositorio", "code"],
    response:
      "**GitHub Integration:**\n\n- Push/Pull con un click desde el menu\n- Sincronizacion automatica con GitHub Actions\n- Tus vaults siempre estan actualizados en la nube\n- Historial completo de cambios\n\nConfigura tu repo en `configure-repo.ps1`.",
    category: "integraciones",
    followUp: ["Como configuro el repo?", "Que son los GitHub Actions?"],
  },
  {
    keywords: ["movil", "mobile", "telefono", "qr", "sincronizar movil"],
    response:
      "**Mobile Sync:**\n\n- Genera QR codes para acceso rapido\n- Sincroniza notas entre desktop y movil\n- Usa `qr-mobile-sync.py` para crear los QRs\n- Funciona con cualquier lector de QR\n\nEjecuta: `python scripts\\qr-mobile-sync.py`",
    category: "integraciones",
    followUp: ["Que app uso en movil?", "Sincroniza automaticamente?"],
  },
  {
    keywords: ["cloudflare", "deploy", "hosting", "pagina web", "web"],
    response:
      "**Cloudflare Pages:**\n\n- Deploy automatico via GitHub Actions\n- URL: `second-brain-9ft.pages.dev`\n- SSL gratuito incluido\n- CDN global para carga rapida\n\nCada commit se despliega automaticamente.",
    category: "integraciones",
    followUp: ["Como configuro Cloudflare?", "Puedo usar mi dominio?"],
  },
  {
    keywords: ["github actions", "actions", "ci cd", "automatizar", "automatico", "auto update"],
    response:
      "**GitHub Actions Integration:**\n\n- Auto-update diario del dashboard\n- Sync automatico de cambios\n- Deploy a Cloudflare Pages\n- Scan de estructura PACE\n\nCada push a `main` ejecuta el workflow automaticamente.",
    category: "integraciones",
    followUp: ["Que workflows hay?", "Como personalizo los workflows?"],
  },

  // REQUISITOS
  {
    keywords: ["python", "dependencias", "requisitos", "prerequisitos", "necesito"],
    response:
      "**Requisitos del sistema:**\n\n- **Git** - Obligatorio para version control\n- **PowerShell 5.1+** - Obligatorio para scripts\n- **Python 3.x** - Solo para emails IMAP y QR codes\n- **Obsidian** - Para abrir y usar el vault\n\nEl instalador `install.bat` verifica todo automaticamente.",
    category: "requisitos",
    followUp: ["Donde descargo Git?", "Como actualizo PowerShell?"],
  },
  {
    keywords: ["plugin", "obsidian plugin", "templater", "dataview"],
    response:
      "**Plugins recomendados para Obsidian:**\n\n- **Templater** - Templates dinamicos con JavaScript\n- **Dataview** - Queries SQL para tus notas\n- **Git** - Sync directo desde Obsidian\n- **Calendar** - Vista de calendario para diario\n- **Periodic Notes** - Notas diarias/semanales\n- **Excalidraw** - Diagramas y sketchnotes\n\nEstos plugins maximizan el potencial de tu vault.",
    category: "requisitos",
    followUp: ["Como instalo plugins?", "Cual es el mas importante?"],
  },
  {
    keywords: ["git", "descargar git", "instalar git"],
    response:
      "**Instalacion de Git:**\n\n1. Ve a https://git-scm.com/downloads\n2. Descarga para tu sistema operativo\n3. Ejecuta el instalador\n4. Usa las opciones por defecto\n\nVerifica con: `git --version` en tu terminal.",
    category: "requisitos",
    followUp: ["Que version necesito?", "Configuro algo despues?"],
  },

  // PRECIO
  {
    keywords: ["gratis", "free", "costo", "precio", "pago", "cuanto cuesta", "licencia"],
    response:
      "**Second Brain es completamente GRATIS y Open Source**\n\n- Licencia MIT - Usa, modifica y distribuye libremente\n- Sin costos ocultos\n- Sin suscripciones\n- Sin limitaciones\n\nSolo necesitas una cuenta de GitHub (gratis) para sincronizar.",
    category: "precio",
    followUp: ["Que es la licencia MIT?", "Puedo vender versiones?"],
  },

  // ESTRUCTURA
  {
    keywords: ["vault", "carpeta", "estructura", "organizar", "organizacion", "carpetas"],
    response:
      "**Estructura PACE de cada vault:**\n\n```\n00 Inbox/\n   Notas rapidas sin procesar\n01 Proyectos/\n   Iniciativas con deadline\n02 Areas/\n   Responsabilidades continuas\n03 Conexiones - MOCs/\n   Mapas de conocimiento\n04 Extracciones AI/\n   Logs y destilados\n07 Sistema/\n   Config y metadata\n```\n\nIncluimos 5 vaults de demo listos para usar.",
    category: "estructura",
    followUp: ["Que va en cada carpeta?", "Como creo un vault nuevo?"],
  },
  {
    keywords: ["demo", "ejemplo", "prueba", "vaults demo"],
    response:
      "**5 vaults de demo incluidos:**\n\n- **DevOps-Vault** - Docker, CI/CD, Kubernetes\n- **Branding-Vault** - Identidad, Plantillas, Contenido\n- **Learning-Vault** - Cursos, Tutoriales, Recursos\n- **Finanzas-Vault** - Presupuestos, Inversiones\n- **Salud-Vault** - Fitness, Nutricion, Bienestar\n\nCada uno tiene estructura PACE completa con MOCs.",
    category: "estructura",
    followUp: ["Como pruebo un vault?", "Puedo borrar los demos?"],
  },
  {
    keywords: ["inbox", "procesar", "organizar notas", "clasificar"],
    response:
      "**Procesando el Inbox:**\n\n1. Revisa cada nota en `00 Inbox`\n2. Decide a que proyecto/area pertenece\n3. Mueve la nota a la carpeta correcta\n4. Actualiza el MOC correspondiente\n\nEl script `update-index.ps1` ayuda a mantener todo sincronizado.",
    category: "estructura",
    followUp: ["Cada cuanto proceso el inbox?", "Que pasa con notas viejas?"],
  },

  // CHATBOT
  {
    keywords: ["chatbot", "bot", "asistente", "ayuda", "help"],
    response:
      "**Soy el chatbot de Second Brain!**\n\nPuedo ayudarte con:\n\n- Explicar que es PACE\n- Guiarte con la instalacion\n- Listar scripts y herramientas\n- Explicar integraciones\n- Responder preguntas frecuentes\n\n**Escribe tu pregunta** o usa los botones de abajo!",
    category: "ayuda",
    followUp: ["Que temas cubres?", "Ejemplos de preguntas?"],
  },
  {
    keywords: ["hola", "buenos dias", "buenas", "saludo"],
    response:
      "**Hola! Bienvenido a Second Brain**\n\nSoy tu asistente virtual. Puedo ayudarte a:\n\n- Entender la metodologia PACE\n- Instalar y configurar Second Brain\n- Conocer todas las herramientas\n\n**En que puedo ayudarte hoy?**",
    category: "ayuda",
    followUp: ["Cuentame sobre PACE", "Quiero instalar"],
  },
  {
    keywords: ["gracias", "thank", "genial", "perfecto", "bien"],
    response:
      "**De nada!** Me alegra poder ayudarte.\n\nSi tienes mas preguntas, no dudes en preguntar. Estoy aqui para ayudarte a sacar el maximo provecho de Second Brain.",
    category: "ayuda",
    followUp: ["Tengo otra pregunta", "Algo mas?"],
  },
  {
    keywords: ["problema", "error", "no funciona", "fallo", "issue"],
    response:
      "**Solucion de problemas:**\n\n1. Verifica que tienes Git instalado\n2. PowerShell debe ser 5.1 o superior\n3. Python 3.x solo para features avanzadas\n4. Revisa que Obsidian pueda abrir la carpeta\n\nSi persiste, abre un issue en GitHub.",
    category: "ayuda",
    followUp: ["Que error tengo?", "Donde reporto?"],
  },
  {
    keywords: ["como se usa", "guia", "tutorial", "paso a paso"],
    response:
      "**Guia rapida de uso:**\n\n**1.** Instala con `install.bat`\n**2.** Abre Obsidian y carga el vault\n**3.** Explora la estructura PACE\n**4.** Crea tu primera nota en Inbox\n**5.** Procesa y organiza con MOCs\n**6.** Sincroniza con GitHub\n\nCada paso tiene documentacion detallada.",
    category: "ayuda",
    followUp: ["Primeros pasos?", "Donde hay mas documentacion?"],
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

export function findResponse(input: string): { text: string; followUp?: string[] } {
  const lowerInput = input.toLowerCase();

  // Score each response by counting keyword matches
  let bestScore = 0;
  let bestResponse = "";
  let bestFollowUp: string[] | undefined;

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
      bestFollowUp = item.followUp;
    }
  }

  if (bestScore > 0) {
    return { text: bestResponse, followUp: bestFollowUp };
  }

  return {
    text: "No estoy seguro de entender tu pregunta. Puedo ayudarte con:\n\n- **Que es PACE** - Metodologia de organizacion\n- **Instalacion** - Como empezar\n- **Scripts** - Herramientas disponibles\n- **Integraciones** - Git, Email, Obsidian\n- **Requisitos** - Que necesitas\n- **Precio** - Costos y licencia\n\nIntenta preguntar de otra forma!",
    followUp: ["Que es PACE?", "Como instalo?"],
  };
}
