// src/app/components/Bienvenidos.tsx
import Image from "next/image";

export default function Bienvenidos() {
  const especializaciones = [
    { title: "Formación Profesional", icon: "📚" },
    { title: "Prevención de Riesgos", icon: "🦺" },
    { title: "Trabajo Social", icon: "🤝" },
    { title: "Competencias Digitales", icon: "💻" },
  ];

  return (
    <section
      id="bienvenidos"
      className="relative bg-gray-50 py-12 sm:py-16 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
      aria-labelledby="bienvenidos-title"
    >
      {/* Decor: blobs + patrón sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-12 w-44 h-44 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-blue-50 rounded-3xl blur-3xl opacity-20"></div>

        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="p" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Columna izquierda: badge + título + intro + CTA */}
          <div className="md:col-span-1">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              GAHZ
            </p>

            <h2
              id="bienvenidos-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Bienvenido a <span className="text-indigo-600">Mi Espacio Profesional</span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              Soy <strong>Gabriel Acacio Hernández</strong>, formador y docente con trayectoria en Educación,
              Prevención de Riesgos, Trabajo Social y Competencias Digitales. Mi enfoque combina
              <span className="font-semibold text-gray-900"> rigor académico</span> con metodologías prácticas que generan
              resultados medibles en entornos laborales y comunitarios.
            </p>

            <div className="mt-6 text-center md:text-left">
              <a
                href="#contacto"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow"
              >
                Agenda una consulta
              </a>
              <br />
              <a
                href="#programas"
                className="inline-block mt-3 text-indigo-600 hover:underline font-medium"
              >
                Ver programas y talleres
              </a>
            </div>
          </div>

          {/* Columna derecha: imagen (ocupa 2 columnas) */}
          <figure className="md:col-span-2 relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-sm group">
            {/* overlay sutil para contraste */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-black/24 to-transparent"></div>
            </div>

            <Image
              src="/img/alumnos.jpg"
              alt="Gabriel Acacio Hernández con alumnos practicantes"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
              quality={85}
            />

            {/* Badges (opcionales) */}
            <div className="absolute left-4 top-4 flex flex-col gap-2 z-20">
              <span className="bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">20+ años</span>
              <span className="bg-white/90 text-slate-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">Máster PRL</span>
            </div>

            {/* Pie de foto con mejor contraste (claro) */}
            <figcaption className="absolute left-4 right-4 bottom-4 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-sm rounded-md px-3 py-2 shadow-sm">
              Foto: Gabriel con alumnos practicantes de grado — actividad práctica en aula.
            </figcaption>
          </figure>
        </div>

        {/* Mini-grid de especializaciones (estilo Filosofia: tarjetas con hover/translate) */}
        <div className="mt-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {especializaciones.map((item, idx) => (
              <article
                key={idx}
                aria-labelledby={`esp-${idx}`}
                className="relative group bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 focus-within:shadow-xl"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 id={`esp-${idx}`} className="text-sm font-semibold text-gray-900 text-center">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
