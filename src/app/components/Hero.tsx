// src/app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      role="banner"
      aria-label="Hero - Gabriel Hernández"
      className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 lg:pb-24"
    >
      {/* Fondo + overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/perfil.png"
          alt="Gabriel A. Hernández - Experto en Formación Profesional"
          fill
          className="object-cover object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85" />
        <div className="absolute -top-16 -left-20 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-20 pointer-events-none" />
        <div className="absolute -bottom-20 -right-12 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-18 pointer-events-none" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-8 my-[10vh]">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden />
          <span className="text-sm font-medium text-white/90">Disponible para consultas</span>
        </div>

        {/* Nombre */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight w-full">
            <span className="block">Lic. Gabriel</span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Hernández
            </span>
          </h1>
        </div>

        {/* Subtítulos */}
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Experto en Formación Profesional y Prevención de Riesgos Laborales
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Transformando organizaciones a través de formación aplicada y cultura preventiva
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-6">
          {[
            { n: "20+", label: "Años" },
            { n: "500+", label: "Formados" },
            { n: "100%", label: "Satisfacción" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center justify-center"
            >
              <div className="text-2xl font-bold text-white">{s.n}</div>
              <div className="text-xs text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs (enlaces, sin JS) */}
        <div className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#contacto"
              className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-transform duration-200 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300 min-w-[200px]"
              aria-label="Solicitar consulta gratuita"
            >
              <svg
                className="w-5 h-5 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consulta Gratuita
            </a>

            <a
              href="#servicios"
              className="group inline-flex items-center justify-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold transition-transform duration-200 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-200 min-w-[200px]"
              aria-label="Ver servicios y programas"
            >
              Ver Servicios
              <svg className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h6v6M21 3l-9 9" />
              </svg>
            </a>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-sm font-medium">Descubre más</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
