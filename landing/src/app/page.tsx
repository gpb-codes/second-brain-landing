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
              {[
                { name: "ChatGPT", url: "https://simpleicons.org/icons/openai.svg", color: "#10A37F" },
                { name: "Claude", url: "https://simpleicons.org/icons/anthropic.svg", color: "#D97706" },
                { name: "Gemini", url: "https://simpleicons.org/icons/googlegemini.svg", color: "#4285F4" },
                { name: "Copilot", url: "https://simpleicons.org/icons/githubcopilot.svg", color: "#00A4EF" },
              ].map((ai, i) => (
                <div key={i} className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                    <img src={ai.url} alt={ai.name} className="w-5 h-5" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>
                  <span className="text-xs text-slate-400">{ai.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Compatible Apps */}
          <div className="mb-12">
            <h3 className="text-lg font-medium mb-6 text-white text-center">Aplicaciones Compatibles</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { name: "Obsidian", desc: "Vault Manager", url: "https://simpleicons.org/icons/obsidian.svg", color: "#7C3AED" },
                { name: "GitHub", desc: "Version Control", url: "https://simpleicons.org/icons/github.svg", color: "#e2e8f0" },
                { name: "VS Code", desc: "Editor", url: "https://simpleicons.org/icons/visualstudio.svg", color: "#3B82F6" },
                { name: "Notion", desc: "Export", url: "https://simpleicons.org/icons/notion.svg", color: "#e2e8f0" },
                { name: "Slack", desc: "Notificaciones", url: "https://simpleicons.org/icons/slack.svg", color: "#4A154B" },
                { name: "Discord", desc: "Alertas", url: "https://simpleicons.org/icons/discord.svg", color: "#5865F2" },
                { name: "Telegram", desc: "Push Alerts", url: "https://simpleicons.org/icons/telegram.svg", color: "#0088CC" },
                { name: "Cloudflare", desc: "Deploy", url: "https://simpleicons.org/icons/cloudflare.svg", color: "#F48120" },
              ].map((app, i) => (
                <div key={i} className="p-4 rounded-lg bg-slate-900/30 border border-slate-800/30 text-center group hover:border-slate-700/50 transition-colors">
                  <div className="w-8 h-8 rounded-md mx-auto mb-2 flex items-center justify-center bg-slate-800/50 group-hover:bg-slate-700/50 transition-colors">
                    <img src={app.url} alt={app.name} className="w-4 h-4" style={{ filter: "brightness(0) invert(1)" }} />
                  </div>
                  <span className="text-xs text-slate-400">{app.name}</span>
                </div>
              ))}
            </div>
          </div>

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
