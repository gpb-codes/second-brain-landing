"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#020617" }}>
      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50">
        <div 
          className="mx-auto max-w-6xl px-6 py-4 rounded-2xl"
          style={{ 
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: "'Poppins', sans-serif", color: "#F8FAFC" }}>Second Brain</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="hover:text-white transition-colors duration-200 cursor-pointer" style={{ color: "#94A3B8" }}>Features</a>
              <a href="#vaults" className="hover:text-white transition-colors duration-200 cursor-pointer" style={{ color: "#94A3B8" }}>Vaults</a>
              <a href="#setup" className="hover:text-white transition-colors duration-200 cursor-pointer" style={{ color: "#94A3B8" }}>Setup</a>
              <a href="https://github.com/gpb-codes/second-brain" target="_blank" rel="noopener noreferrer" className="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#F8FAFC" }}>
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
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(139, 92, 246, 0.2)", animation: "float 6s ease-in-out infinite" }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)", animation: "float 6s ease-in-out 2s infinite" }}
          />
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.1)", animation: "pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#F8FAFC" }}>Tu </span>
              <span style={{ background: "linear-gradient(to right, #8B5CF6, #3B82F6, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Segundo Cerebro</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto" style={{ color: "#94A3B8" }}>
              Un vault de Obsidian que funciona como <span style={{ color: "#F8FAFC", fontWeight: 500 }}>centro de control</span> para todos tus otros vaults. Auto-update con GitHub Actions.
            </p>
          </div>

          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <a href="https://github.com/gpb-codes/second-brain" target="_blank" rel="noopener noreferrer" className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#F8FAFC", boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              Clone en GitHub
            </a>
            <a href="#features" className="px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 cursor-pointer inline-flex items-center justify-center gap-2" style={{ backgroundColor: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", color: "#F8FAFC", boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)" }}>
              Explorar Features
            </a>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            {[
              { value: "6+", label: "Vaults Conectados", color: "#8B5CF6" },
              { value: "32", label: "Archivos Index", color: "#3B82F6" },
              { value: "Auto", label: "GitHub Sync", color: "#22C55E" },
            ].map((stat, i) => (
              <div 
                key={i}
                className="p-6 text-center rounded-2xl"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="text-3xl font-bold mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: stat.color }}>{stat.value}</div>
                <div className="text-sm" style={{ color: "#94A3B8" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#F8FAFC" }}>Todo lo que necesitas en </span>
              <span style={{ background: "linear-gradient(to right, #8B5CF6, #3B82F6, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>un solo lugar</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Second Brain centraliza todos tus vaults de Obsidian con auto-actualizacion y sincronizacion con GitHub.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z", title: "Hub Maestro", desc: "Un solo lugar para acceder a todos tus vaults de Obsidian. Navega entre proyectos sin perder el hilo.", color: "#8B5CF6" },
              { icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", title: "Auto-Update", desc: "Dashboard se regenera automaticamente al agregar nuevos vaults. GitHub Actions ejecuta scans diarios.", color: "#3B82F6" },
              { icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Configurable", desc: "Ruta del vault configurable. Busca vaults automaticamente en ubicaciones comunes de tu sistema.", color: "#22C55E" },
              { icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z", title: "Busqueda Universal", desc: "Encuentra cualquier nota en todos tus vaults con busqueda full-text y filtros avanzados.", color: "#8B5CF6" },
              { icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z", title: "Metricas y Stats", desc: "Dashboard con metricas en tiempo real: archivos, vaults, conexiones y actividad reciente.", color: "#3B82F6" },
              { icon: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1", title: "Git Sync", desc: "Sincronizacion automatica con GitHub. Tus vaults siempre estan actualizados en la nube.", color: "#22C55E" },
            ].map((feature, i) => (
              <div 
                key={i}
                className="p-8 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}20` }}
                >
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke={feature.color}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Poppins', sans-serif", color: "#F8FAFC" }}>{feature.title}</h3>
                <p className="leading-relaxed" style={{ color: "#94A3B8" }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaults Section */}
      <section id="vaults" className="py-32 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#F8FAFC" }}>Vaults </span>
              <span style={{ background: "linear-gradient(to right, #8B5CF6, #3B82F6, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Conectados</span>
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: "#94A3B8" }}>
              Ejemplos de vaults que puedes conectar a tu Second Brain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "DevOps-Vault", desc: "Docker, CI/CD, Kubernetes", files: 8, color: "#8B5CF6" },
              { name: "Branding-Vault", desc: "Identidad, Plantillas, Contenido", files: 10, color: "#3B82F6" },
              { name: "Learning-Vault", desc: "Cursos, Tutoriales, Recursos", files: 12, color: "#22C55E" },
              { name: "Finanzas-Vault", desc: "Presupuestos, Inversiones", files: 8, color: "#8B5CF6" },
              { name: "Salud-Vault", desc: "Fitness, Nutrición, Bienestar", files: 10, color: "#3B82F6" },
              { name: "Productividad-Vault", desc: "GTD, Herramientas, System", files: 12, color: "#22C55E" },
            ].map((vault, i) => (
              <div 
                key={i}
                className="p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div className="w-full h-1 rounded-full mb-4" style={{ backgroundColor: vault.color }} />
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#F8FAFC" }}>{vault.name}</h3>
                <p className="text-sm mb-3" style={{ color: "#94A3B8" }}>{vault.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: `${vault.color}20`, color: vault.color }}>
                    {vault.files} archivos
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span style={{ color: "#F8FAFC" }}>Setup en </span>
              <span style={{ background: "linear-gradient(to right, #8B5CF6, #3B82F6, #22C55E)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>3 pasos</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Clona el repositorio", cmd: "git clone https://github.com/gpb-codes/second-brain.git" },
              { step: "02", title: "Ejecuta el panel de control", cmd: ".\\Second-Brain.bat" },
              { step: "03", title: "Configura tu vault", cmd: ".\\scripts\\configure-repo.ps1" },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-6 flex items-center gap-6 rounded-2xl"
                style={{ 
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)"
                }}
              >
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
                >
                  <span className="text-2xl font-bold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.step}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Poppins', sans-serif", color: "#F8FAFC" }}>{item.title}</h3>
                  <code className="text-sm px-3 py-1.5 rounded-lg" style={{ color: "#94A3B8", backgroundColor: "rgba(30, 41, 59, 0.5)" }}>
                    {item.cmd}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #3B82F6)" }}
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="font-bold" style={{ fontFamily: "'Poppins', sans-serif", color: "#F8FAFC" }}>Second Brain</span>
            </div>
            <p className="text-sm" style={{ color: "#94A3B8" }}>
              Hecho para organizar el conocimiento. MIT License.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
