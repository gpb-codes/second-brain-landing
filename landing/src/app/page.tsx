"use client";

import { useState, useEffect } from "react";
import Chatbot from "../components/Chatbot";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVault, setActiveVault] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const vaults = [
    { name: "DevOps", desc: "Docker, CI/CD, Kubernetes", files: 8, color: "#8B5CF6" },
    { name: "Branding", desc: "Identidad, Plantillas", files: 10, color: "#6366F1" },
    { name: "Learning", desc: "Cursos, Tutoriales", files: 12, color: "#3B82F6" },
    { name: "Finanzas", desc: "Presupuestos, Inversiones", files: 8, color: "#06B6D4" },
    { name: "Salud", desc: "Fitness, Nutricion", files: 10, color: "#8B5CF6" },
  ];

  const features = [
    { title: "Hub Maestro", desc: "Un solo lugar para acceder a todos tus vaults. Navega entre proyectos sin perder el hilo.", icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" },
    { title: "Auto-Update", desc: "Dashboard se regenera automaticamente. GitHub Actions ejecuta scans diarios.", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
    { title: "Configurable", desc: "Ruta del vault configurable. Busca vaults automaticamente en ubicaciones comunes.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
    { title: "Busqueda", desc: "Encuentra cualquier nota en todos tus vaults con busqueda full-text.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
    { title: "Metricas", desc: "Dashboard con metricas en tiempo real: archivos, vaults, conexiones.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
    { title: "Git Sync", desc: "Sincronizacion automatica con GitHub. Tus vaults siempre actualizados.", icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" },
  ];

  return (
    <main className="min-h-screen bg-[#050510] notebook-lines">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-5xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500/80 to-indigo-500/80 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-semibold text-lg text-white tracking-tight">Second Brain</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm text-slate-400 hover:text-violet-300 transition-colors">Features</a>
              <a href="#vaults" className="text-sm text-slate-400 hover:text-violet-300 transition-colors">Vaults</a>
              <a href="#how-it-works" className="text-sm text-slate-400 hover:text-violet-300 transition-colors">Setup</a>
              <a href="#demo" className="text-sm text-slate-400 hover:text-violet-300 transition-colors">Demo</a>
              <a href="https://github.com/gpb-codes/second-brain-landing" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle background orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              OPEN SOURCE &middot; MIT LICENSE
            </div>
            
            <h1 className="text-5xl md:text-7xl font-light mb-6 text-white tracking-tight leading-tight">
              Tu{" "}
              <span className="font-medium gradient-text">Segundo Cerebro</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-slate-400 font-light leading-relaxed">
              Organiza tu conocimiento con la metodologia{" "}
              <span className="text-violet-300 font-normal">PACE</span>. 
              Un vault de Obsidian que funciona como centro de control para todos tus otros vaults.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-3 justify-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <a href="https://github.com/gpb-codes/second-brain-landing" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-sm font-medium rounded-lg bg-violet-600 hover:bg-violet-500 text-white transition-all duration-300 inline-flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Clone en GitHub
            </a>
            <a href="#demo" className="px-6 py-3 text-sm font-medium rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600 text-slate-300 hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2">
              Ver Demo
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {[
              { value: "5", label: "Vaults" },
              { value: "15", label: "Scripts" },
              { value: "Auto", label: "Sync" },
              { value: "Free", label: "MIT" },
            ].map((stat, i) => (
              <div key={i} className="py-4 text-center">
                <div className="text-2xl font-light text-white mb-0.5">{stat.value}</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Todo en <span className="font-medium gradient-text">un solo lugar</span>
            </h2>
            <p className="text-base text-slate-400 font-light max-w-xl mx-auto">
              Centraliza tus vaults de Obsidian con auto-actualizacion y sincronizacion con GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <div key={i} className="card-elegant p-6 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-sm font-medium text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Como <span className="font-medium gradient-text">funciona</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Clona", desc: "Descarga el repositorio con scripts y configuraciones listas." },
              { step: "02", title: "Configura", desc: "Ejecuta el wizard y conecta tu vault de Obsidian." },
              { step: "03", title: "Conecta", desc: "GitHub Actions sincroniza todo automaticamente." },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-light text-violet-500/40 mb-4">{item.step}</div>
                <h3 className="text-lg font-medium text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaults */}
      <section id="vaults" className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Vaults <span className="font-medium gradient-text">incluidos</span>
            </h2>
            <p className="text-base text-slate-400 font-light">
              Ejemplos de vaults que puedes conectar a tu Second Brain.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-3">
            {vaults.map((vault, i) => (
              <button
                key={i}
                onClick={() => setActiveVault(i)}
                className={`card-elegant p-5 rounded-xl text-left transition-all duration-300 ${
                  activeVault === i ? "border-violet-500/30 bg-violet-500/5" : ""
                }`}
              >
                <div className="w-8 h-8 rounded-md mb-3 flex items-center justify-center" style={{ backgroundColor: `${vault.color}15` }}>
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: vault.color }} />
                </div>
                <h3 className="text-sm font-medium text-white mb-1">{vault.name}</h3>
                <p className="text-xs text-slate-500 font-light">{vault.desc}</p>
                <div className="mt-3 text-xs text-slate-600">{vault.files} archivos</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Setup */}
      <section className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Setup en <span className="font-medium gradient-text">3 comandos</span>
            </h2>
          </div>

          <div className="space-y-3">
            {[
              { cmd: "git clone https://github.com/gpb-codes/second-brain-landing.git" },
              { cmd: ".\\install.bat" },
              { cmd: ".\\Second-Brain.bat" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <span className="text-xs text-slate-600 font-mono w-6">{i + 1}.</span>
                <code className="text-sm text-violet-300 font-mono">{item.cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section id="demo" className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-medium mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              EN DESARROLLO
            </div>
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Brain <span className="font-medium gradient-text">Interface</span>
            </h2>
            <p className="text-base text-slate-400 font-light max-w-xl mx-auto">
              Prototipo de la interfaz visual. Actualmente funciona via terminal, asi se veria en el futuro.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden border border-slate-800/50 bg-slate-900/30">
            <iframe
              src="https://www.youtube.com/embed/Gvlsvt-eGSM"
              width="100%"
              height="500"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full aspect-video"
              title="Second Brain Demo"
            />
          </div>
        </div>
      </section>

      {/* Scripts */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              <span className="font-medium gradient-text">Scripts</span> disponibles
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-3">
            {[
              { name: "Second-Brain.bat", desc: "Launcher principal" },
              { name: "PACE-Launcher.ps1", desc: "Menu principal" },
              { name: "second-brain.ps1", desc: "Panel de control" },
              { name: "gmail-imap.py", desc: "Client email IMAP" },
              { name: "dashboard-stats.ps1", desc: "Metricas del vault" },
              { name: "backup-vaults.ps1", desc: "Backups automaticos" },
              { name: "export-vault.ps1", desc: "Exportar a HTML" },
              { name: "search-vaults.ps1", desc: "Busqueda full-text" },
              { name: "update-index.ps1", desc: "Auto-actualizar indices" },
              { name: "configure-repo.ps1", desc: "Configurar repositorio" },
            ].map((script, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/30 border border-slate-800/30">
                <span className="text-violet-400/60 text-xs font-mono">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="text-sm text-white font-mono">{script.name}</span>
                  <span className="text-xs text-slate-500 ml-2">{script.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatible */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-4 text-white">
              Compatible con <span className="font-medium gradient-text">tus herramientas</span>
            </h2>
          </div>

          {/* AI Assistants */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-6 text-white text-center">Asistentes de IA</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#10A37F"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
                </div>
                <span className="text-xs text-slate-400">ChatGPT</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D97706"><path d="M4.709 15.955l4.72-2.716.08-.046 2.803-1.618a.206.206 0 0 0 0-.357l-2.956-1.706-4.716-2.712a.206.206 0 0 0-.309.178v9.794a.206.206 0 0 0 .309.178h.069zm7.582-4.337l2.818 1.627a.206.206 0 0 1 0 .357l-2.818 1.627-2.803-1.627a.206.206 0 0 1 0-.357l2.803-1.627zm-2.891-5.02l4.724 2.716.067.04v.003l2.803 1.618a.206.206 0 0 1 0 .357l-2.803 1.618-4.724 2.716a.206.206 0 0 1-.309-.178V6.776a.206.206 0 0 1 .309-.178z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Claude</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#4285F4"><path d="M12 24A14.304 14.304 0 0 0 0 12 14.304 14.304 0 0 0 12 0a14.304 14.304 0 0 0 0 24zm0-25.714A11.426 11.426 0 0 1 23.429 12 11.426 11.426 0 0 1 12 23.429 11.426 11.426 0 0 1 .571 12 11.426 11.426 0 0 1 12-1.714z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Gemini</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#00A4EF"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/><path d="M16.5 12c0-2.485-2.015-4.5-4.5-4.5S7.5 9.515 7.5 12s2.015 4.5 4.5 4.5 4.5-2.015 4.5-4.5z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Copilot</span>
              </div>
            </div>
          </div>

          {/* Compatible Apps */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-6 text-white text-center">Aplicaciones Compatibles</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#7C3AED"><path d="M11.999 1.426l-9.44 7.42 4.26 15.027L12 18.5l5.18 5.373 4.26-15.027-9.44-7.42z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Obsidian</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#e2e8f0"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                </div>
                <span className="text-xs text-slate-400">GitHub</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#007ACC"><path d="M17.583 1.078L9.518 9.145l-7.274-2.75L0 6.078l3.25-1.232V19.15L0 17.92l2.244.846 7.274-2.75 8.065 8.065 1.494-1.494V2.572L17.583 1.078zM3.25 3.228l11.692 4.426-3.25 2.457L3.25 3.228zm11.692 15.51l-11.692-4.426 8.442-2.031 3.25 6.457z"/></svg>
                </div>
                <span className="text-xs text-slate-400">VS Code</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#e2e8f0"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.2 2.16c-.42-.326-.98-.7-2.055-.607l-12.8.934c-.466.047-.56.28-.374.466zm.793 3.081v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.166V6.354c0-.606-.233-.933-.748-.886l-15.177.887c-.56.046-.747.326-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.515-1.635.515-.748 0-.935-.234-1.498-.933l-4.577-7.186v6.952l1.497.327s0 .84-1.168.84l-3.222.187c-.093-.187 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279V9.201l-1.264-.14c-.093-.515.28-.886.747-.933zM2.245 1.627l13.355-.981c1.635-.14 2.055-.047 3.082.7l4.25 2.936c.7.513.933.653.933 1.213v16.378c0 1.026-.373 1.632-1.68 1.726l-15.458.934c-.98.046-1.449-.093-1.963-.747l-3.129-4.06c-.56-.746-.793-1.306-.793-1.96V3.307c0-.84.373-1.54 1.402-1.68z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Notion</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4A154B"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Slack</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#5865F2"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Discord</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#0088CC"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.492-1.302.48-.428-.013-1.252-.242-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Telegram</span>
              </div>
              <div className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#F48120"><path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.293-.2275-.3017-.5957-.4756-1.0322-.4873-.1953-.0068-.375.0254-.5439.0898-.0762-.5264-.2412-.9951-.4863-1.3887-.3074-.4941-.7637-.8613-1.3252-1.0576-.5361-.1875-1.1094-.2031-1.6348-.0908-.0791-.5586-.2451-1.0615-.4834-1.4678-.3017-.5215-.751-1.0684-1.3887-1.2842-.5986-.2021-1.1172-.1484-1.5879.1729-.1455-.5068-.4336-.9473-.8271-1.2656-.4141-.3369-.9268-.5225-1.4717-.5225-.1045 0-.207.0078-.3086.0215C6.7432 7.7539 5.9434 7.125 4.9922 6.7881c-.8525-.3057-1.71-.3057-2.4053.0137-.1699.0791-.2744.1816-.3066.3008-.0244.0889-.0127.1865.042.2881l2.4834 4.6055c.0986.1826.1846.3662.2598.5527l.002.0049-.001.002c.0059.0176.0127.0342.02.0518l-.0068.0019c-.0566.2451-.0703.4863-.0391.7236.002.0156.0039.0293.0068.0439-.0303-.0049-.0596-.0117-.0908-.0156-.3887-.0625-.7969-.0332-1.1729.1143-.3467.1357-.6143.3682-.7646.665-.1367.2715-.1768.5811-.1035.8955l1.9766 6.6836c.0918.3232.1709.6504.2354.9785h13.3418c-.0762-.4619-.1973-.9053-.3584-1.3262l-1.0381-2.7441z"/></svg>
                </div>
                <span className="text-xs text-slate-400">Cloudflare</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800/50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500/80 to-indigo-500/80 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm text-slate-400">Second Brain</span>
            </div>
            <p className="text-xs text-slate-600">
              Hecho para organizar el conocimiento. MIT License.
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-500 font-body">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Sistema activo
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </main>
  );
}
