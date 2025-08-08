// app/components/PerfilProfesional.tsx
import Image from "next/image";

export default function PerfilProfesional() {
  return (
    <section
      id="perfil"
      className="bg-gray-50 py-12 sm:py-16 px-4 sm:px-8 md:px-20 relative overflow-hidden"
      aria-labelledby="perfil-title"
    >
      {/* Fondos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* FOTO — mobile arriba, desktop a la izquierda */}
        <figure className="relative w-full h-72 sm:h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg order-first md:order-first">
          <Image
            src="/img/gabriel-perfil.jpg" // Aquí la foto formal de Gabriel
            alt="Gabriel Acacio Hernández en conferencia"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
            quality={90}
          />
          <figcaption className="absolute left-0 right-0 bottom-0 text-xs sm:text-sm text-white/90 bg-black/30 backdrop-blur-sm py-2 px-4">
            Gabriel Acacio — Sesión formativa en congreso internacional.
          </figcaption>
        </figure>

        {/* TEXTO */}
        <article className="space-y-5 order-last md:order-last text-center md:text-left">
          <h2
            id="perfil-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight"
          >
            <span className="text-blue-700">Gabriel Acacio Hernández Zambrano</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Experto en{" "}
            <strong>Formación Profesional</strong>,{" "}
            <strong>Prevención de Riesgos Laborales</strong>,{" "}
            <strong>Trabajo Social</strong> y{" "}
            <strong>Competencias Digitales</strong>.  
            Con más de 20 años de trayectoria académica y profesional, fusiona rigor científico con experiencia práctica para formar profesionales preparados para los retos de la era digital.
          </p>

          {/* Mini-grid de especializaciones */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {[
              { title: "Formación Profesional", icon: "📚" },
              { title: "Prevención de Riesgos", icon: "🦺" },
              { title: "Trabajo Social", icon: "🤝" },
              { title: "Competencias Digitales", icon: "💻" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-sm p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mb-2">{item.icon}</span>
                <p className="text-sm font-medium text-gray-800 text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}
