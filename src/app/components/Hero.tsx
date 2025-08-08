import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-end justify-center overflow-hidden pb-16 lg:pb-24">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/perfil.png"
          alt="Gabriel A. Hernández - Experto en Formación Profesional"
          fill
          className="object-cover object-top"
          priority
          quality={100}
        />
        {/* Enhanced Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-2 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-8 my-[10vh]">
        
        {/* Professional Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-white/90">Disponible para consultas</span>
        </div>
        
        {/* Nombre Principal - Mejorado */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight w-full">
            <span className="block">Lic. Gabriel</span>
            <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Hernández
            </span>
          </h1>
        </div>

        {/* Profesión - Mejorada */}
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl md:text-3xl font-light text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Experto en Formación Profesional y Prevención de Riesgos Laborales
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Transformando organizaciones a través de la formación especializada
          </p>
        </div>

        {/* Stats - Nuevo */}
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto py-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold text-white">20+</div>
            <div className="text-xs text-white/80">Años</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-white/80">Formados</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-xs text-white/80">Satisfacción</div>
          </div>
        </div>

         {/* CTA Buttons - Mejorados */}
        <div className="pt-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 min-w-[220px] flex items-center justify-center gap-3 shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transform w-[200px] md:w-auto">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Consulta Gratuita
            </button>
            
            <button className="group border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-5 rounded-lg text-lg font-semibold transition-all duration-300 min-w-[220px] flex items-center justify-center gap-3 shadow-lg hover:shadow-white/20 hover:-translate-y-1 transform backdrop-blur-sm w-[200px] md:w-auto">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
              </svg>
              Ver Servicios
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Mejorado */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/70 text-sm font-medium">Descubre más</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
