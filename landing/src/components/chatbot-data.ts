export interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface QuickAction {
  label: string;
  message: string;
}

export interface ChatResponse {
  keywords: string[];
  response: string;
}

export const chatResponses: ChatResponse[] = [
  {
    keywords: ["que es", "pace", "metodologia", "significa"],
    response:
      "PACE es una metodologia de organizacion de conocimiento:\n\n**P** - Proyectos: Iniciativas con deadline\n**A** - Areas: Responsabilidades continuas\n**C** - Conexiones: Mapas de conocimiento (MOCs)\n**E** - Extracciones: Logs de sesiones AI y destilados\n\nCada vault se organiza siguiendo esta estructura para eliminar la friccion y mantener todo conectado.",
  },
  {
    keywords: ["instalar", "instalo", "instalacion", "como empiezo", "empezar", "comenzar"],
    response:
      "Para instalar Second Brain:\n\n1. Clona el repo:\n`git clone https://github.com/gpb-codes/second-brain-landing.git`\n\n2. Ejecuta el instalador:\n`install.bat`\n\n3. Abre Obsidian y selecciona la carpeta\n\nEl instalador verifica Git, Python y PowerShell automaticamente.",
  },
  {
    keywords: ["scripts", "herramientas", "comandos", "que hay"],
    response:
      "Second Brain incluye 15 scripts:\n\n- **second-brain.ps1** - Panel de control\n- **gmail-imap.py** - Client email IMAP\n- **dashboard-stats.ps1** - Metricas\n- **backup-vaults.ps1** - Backups\n- **export-vault.ps1** - Exportar HTML\n- **search-vaults.ps1** - Busqueda\n- **update-index.ps1** - Auto-update\n- **configure-repo.ps1** - Config Git\n- **qr-mobile-sync.py** - QR codes\n- Y 6 mas para sync, notificaciones e integraciones",
  },
  {
    keywords: ["integraciones", "git", "email", "obsidian", "conectar"],
    response:
      "Integraciones disponibles:\n\n- **Git/GitHub** - Push/Pull desde el menu\n- **Email IMAP** - Sincronizar Gmail al vault\n- **Obsidian** - Vault nativo con plugins\n- **OpenCode** - Asistente AI integrado\n- **Mobile Sync** - Sincronizar con movil\n\nTodas se gestionan desde el panel de control.",
  },
  {
    keywords: ["gratis", "free", "costo", "precio", "pago"],
    response:
      "Si, Second Brain es completamente gratuito y open source bajo licencia MIT.\n\nPuedes usarlo, modificarlo y distribuirlo libremente.",
  },
  {
    keywords: ["python", "dependencias", "requisitos", "prerequisitos"],
    response:
      "Requisitos:\n\n- **Git** - Obligatorio\n- **PowerShell 5.1+** - Obligatorio\n- **Python 3.x** - Solo para emails IMAP y QR codes\n- **Obsidian** - Para abrir el vault\n\nEl instalador verifica todo automaticamente.",
  },
  {
    keywords: ["vault", "carpeta", "estructura", "organizar"],
    response:
      "Cada vault sigue la estructura PACE:\n\n```\n00 Inbox/\n01 Proyectos/\n02 Areas/\n03 Conexiones - MOCs/\n04 Extracciones AI/\n07 Sistema/\n```\n\nIncluimos 5 vaults de demo: DevOps, Branding, Learning, Finanzas y Salud.",
  },
  {
    keywords: ["chatbot", "bot", "asistente", "ai"],
    response:
      "Soy el chatbot de Second Brain! Puedo ayudarte a:\n\n- Explicar que es PACE\n- Guiarte con la instalacion\n- Listar scripts y herramientas\n- Explicar integraciones\n\nPreguntame lo que quieras!",
  },
];

export const quickActions: QuickAction[] = [
  { label: "Que es PACE?", message: "Que es PACE?" },
  { label: "Como instalo?", message: "Como instalo Second Brain?" },
  { label: "Scripts disponibles", message: "Que scripts hay?" },
  { label: "Integraciones", message: "Que integraciones tiene?" },
  { label: "Es gratuito?", message: "Es gratuito?" },
];

export function findResponse(input: string): string {
  const lowerInput = input.toLowerCase();

  for (const item of chatResponses) {
    for (const keyword of item.keywords) {
      if (lowerInput.includes(keyword)) {
        return item.response;
      }
    }
  }

  return "No estoy seguro de entender tu pregunta. Puedo ayudarte con:\n\n- Que es PACE\n- Como instalar Second Brain\n- Scripts disponibles\n- Integraciones\n- Requisitos\n\nIntenta preguntar de otra forma!";
}
