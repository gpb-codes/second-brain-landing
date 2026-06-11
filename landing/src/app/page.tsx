"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeVault, setActiveVault] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const vaults = [
    { name: "DevOps-Vault", desc: "Docker, CI/CD, Kubernetes, Monitoring", files: 8, color: "#8B5CF6", icon: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" },
    { name: "Branding-Vault", desc: "Identidad, Plantillas, Contenido Visual", files: 10, color: "#3B82F6", icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" },
    { name: "Learning-Vault", desc: "Cursos, Tutoriales, Recursos Educativos", files: 12, color: "#22C55E", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { name: "Finanzas-Vault", desc: "Presupuestos, Inversiones, Ahorro", files: 8, color: "#F59E0B", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Salud-Vault", desc: "Fitness, Nutricion, Bienestar", files: 10, color: "#EC4899", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
    { name: "Productividad-Vault", desc: "GTD, Herramientas, Sistemas", files: 12, color: "#06B6D4", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
  ];

  const features = [
    { icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", title: "Hub Maestro", desc: "Un solo lugar para acceder a todos tus vaults de Obsidian. Navega entre proyectos sin perder el hilo.", color: "#8B5CF6" },
    { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Auto-Update", desc: "Dashboard se regenera automaticamente al agregar nuevos vaults. GitHub Actions ejecuta scans diarios.", color: "#3B82F6" },
    { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Configurable", desc: "Ruta del vault configurable. Busca vaults automaticamente en ubicaciones comunes de tu sistema.", color: "#22C55E" },
    { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Busqueda Universal", desc: "Encuentra cualquier nota en todos tus vaults con busqueda full-text y filtros avanzados.", color: "#F59E0B" },
    { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Metricas y Stats", desc: "Dashboard con metricas en tiempo real: archivos, vaults, conexiones y actividad reciente.", color: "#EC4899" },
    { icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1", title: "Git Sync", desc: "Sincronizacion automatica con GitHub. Tus vaults siempre estan actualizados en la nube.", color: "#06B6D4" },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A]">
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div className="mx-auto max-w-6xl px-6 py-4 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 shadow-2xl shadow-black/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold text-xl text-white font-heading">Second Brain</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer font-body">Features</a>
              <a href="#vaults" className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer font-body">Vaults</a>
              <a href="#how-it-works" className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer font-body">Como Funciona</a>
              <a href="#setup" className="text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer font-body">Setup</a>
              <a href="https://github.com/gpb-codes/second-brain-landing" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white transition-all duration-200 cursor-pointer inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-3xl" />
          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI2dyaWQpIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIi8+PC9zdmc+')] opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
              Open Source &amp; Gratuito
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading">
              <span className="text-white">Tu </span>
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Segundo Cerebro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-400 font-body">
              Un vault de Obsidian que funciona como{" "}
              <span className="text-white font-medium">centro de control</span>{" "}
              para todos tus otros vaults. Auto-update con GitHub Actions.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <a href="https://github.com/gpb-codes/second-brain-landing" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-semibold rounded-xl bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 text-white transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Clone en GitHub
            </a>
            <a href="#features" className="px-8 py-4 text-lg font-semibold rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2">
              Explorar Features
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { value: "6+", label: "Vaults Conectados", color: "text-violet-400" },
              { value: "32", label: "Archivos Index", color: "text-blue-400" },
              { value: "Auto", label: "GitHub Sync", color: "text-emerald-400" },
            ].map((stat, i) => (
              <div key={i} className="p-6 text-center rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
                <div className={`text-3xl font-bold mb-1 font-heading ${stat.color}`}>{stat.value}</div>
                <div className="text-sm text-slate-400 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              <span className="text-white">Todo lo que necesitas en </span>
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">un solo lugar</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-400 font-body">
              Second Brain centraliza todos tus vaults de Obsidian con auto-actualizacion y sincronizacion con GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="group p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-black/20">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br from-${feature.color}/20 to-transparent`}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={feature.color}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-heading">{feature.title}</h3>
                <p className="leading-relaxed text-slate-400 font-body">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-32 relative bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              <span className="text-white">Como </span>
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Funciona</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-400 font-body">
              Tres simples pasos para tener tu segundo cerebro funcionando.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Clona", desc: "Descarga el repositorio con todos los scripts y configuraciones listas para usar.", color: "from-violet-500 to-violet-600" },
              { step: "02", title: "Configura", desc: "Ejecuta el wizard de setup y conecta tu vault de Obsidian en segundos.", color: "from-blue-500 to-blue-600" },
              { step: "03", title: "Conecta", desc: "Agrega tus vaults y deja que GitHub Actions sincronice todo automaticamente.", color: "from-emerald-500 to-emerald-600" },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="p-8 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <span className="text-2xl font-bold text-white font-heading">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white font-heading">{item.title}</h3>
                  <p className="leading-relaxed text-slate-400 font-body">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaults Section */}
      <section id="vaults" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              <span className="text-white">Vaults </span>
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">Conectados</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto text-slate-400 font-body">
              Ejemplos de vaults que puedes conectar a tu Second Brain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaults.map((vault, i) => (
              <div 
                key={i} 
                className={`group p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                  activeVault === i 
                    ? "bg-slate-800 border-2" 
                    : "bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-slate-600/50"
                }`}
                style={activeVault === i ? { borderColor: vault.color } : {}}
                onMouseEnter={() => setActiveVault(i)}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${vault.color}20` }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke={vault.color}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={vault.icon} />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-white font-heading">{vault.name}</h3>
                    <p className="text-sm text-slate-400 font-body">{vault.desc}</p>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ backgroundColor: `${vault.color}20`, color: vault.color }}>
                    {vault.files} archivos
                  </span>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-slate-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-32 relative bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading">
              <span className="text-white">Setup en </span>
              <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent">3 comandos</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Clona el repositorio", cmd: "git clone https://github.com/gpb-codes/second-brain-landing.git" },
              { step: "02", title: "Ejecuta el panel de control", cmd: ".\\Second-Brain.bat" },
              { step: "03", title: "Configura tu vault", cmd: ".\\scripts\\configure-repo.ps1" },
            ].map((item, i) => (
              <div key={i} className="p-6 flex items-center gap-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold text-white font-heading">{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2 text-white font-heading">{item.title}</h3>
                  <code className="text-sm px-4 py-2 rounded-lg bg-slate-900/80 text-emerald-400 font-mono inline-block">
                    {item.cmd}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold text-white font-heading">Second Brain</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://github.com/gpb-codes/second-brain-landing" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-slate-500 font-body">
              Hecho para organizar el conocimiento. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
