import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      role="banner"
      aria-label="Hero - Gabriel Hernández"
      className="relative min-h-screen max-h-screen flex items-start lg:items-end justify-center overflow-hidden bg-gradient-radial from-gray-800 via-gray-900 to-black"



    >
      {/* Fondo + overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fondito cuadriculado suave */}
        <div className="absolute inset-0 bg-[url('/img/grid.svg')] opacity-15" />
        <Image
          src="/img/perfil.png"
          alt="Gabriel A. Hernández - Experto en Formación Profesional"
          fill
          className="object-cover lg:object-contain object-top"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/85" />
      </div>

      {/* Contenido */}
      <div
        className="
          relative z-10 text-center text-white px-4 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-8
          pt-[20vh] lg:pt-0 lg:pb-24
        "
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden />
          <span className="text-sm font-medium text-white/90">Disponible para consultas</span>
        </div>

        {/* Nombre */}
        <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4">
          <span className="block">Lic. Gabriel</span>
          <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Hernández
          </span>
        </h1>

        {/* Subtítulos */}
        <div className="space-y-2 mb-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Experto en Formación Profesional, Prevención de Riesgos Laborales, Trabajo Social y Competencias Digitales
          </p>
         
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-6 mb-1">
          {[{ n: "20+", label: "Años" }, { n: "500+", label: "Formados" }, { n: "100%", label: "Satisfacción" }].map((s) => (
            <div
              key={s.label}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 flex flex-col items-center"
            >
              <div className="text-2xl font-bold">{s.n}</div>
              <div className="text-xs text-white/80">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Botones */}
        <div className="pt-2 flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contacto"
            className="group inline-flex items-center justify-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-lg text-lg font-semibold transition-transform duration-200 shadow-2xl hover:shadow-white/20 transform hover:-translate-y-1"
          >
            Consulta Gratuita
          </a>
          <a
            href="#servicios"
            className="group inline-flex items-center justify-center gap-3 border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-lg text-lg font-semibold transition-transform duration-200 shadow-lg hover:shadow-white/20 transform hover:-translate-y-1"
          >
            Ver Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
