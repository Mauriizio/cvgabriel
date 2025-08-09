// src/app/components/CompetenciasDigitales.tsx
import Image from "next/image";
import {
  ComputerDesktopIcon,
  LockClosedIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

export default function CompetenciasDigitales() {
  const items = [
    {
      id: 1,
      title: "Alfabetización Digital",
      desc:
        "Formación en alfabetización digital e Inteligencia Artificial para docentes y profesionales, facilitando la comprensión y uso efectivo de las nuevas tecnologías en diversos contextos.",
      icon: ComputerDesktopIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: 2,
      title: "Uso Ético y Seguro",
      desc:
        "Desarrollo de competencias para el uso ético, seguro y eficiente de las tecnologías de la información, protegiendo datos personales y organizacionales en entornos digitales.",
      icon: LockClosedIcon,
      accent: "from-amber-500 to-amber-400",
    },
    {
      id: 3,
      title: "Herramientas Colaborativas",
      desc:
        "Incorporación efectiva de herramientas digitales para la enseñanza y el trabajo colaborativo, maximizando la productividad y facilitando la comunicación en equipos presenciales y remotos.",
      icon: UserGroupIcon,
      accent: "from-sky-500 to-cyan-400",
    },
    {
      id: 4,
      title: "Preparación 4.0",
      desc:
        "Capacitación especializada para los retos de la Industria 4.0 y el trabajo remoto post-pandemia, adaptando competencias profesionales a las nuevas demandas laborales.",
      icon: Cog6ToothIcon,
      accent: "from-rose-500 to-pink-400",
    },
  ];

  return (
    <section
      id="competencias-digitales"
      aria-labelledby="competencias-digitales-title"
      className="relative bg-gray-50 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos coherentes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-6 -left-8 w-44 h-44 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-8 -right-6 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-20"></div>

        {/* patrón cuadriculado (marca con .bg-grid-pattern si usas la regla mobile específica) */}
        <svg
          className="bg-grid-pattern absolute inset-0 w-full h-full opacity-6 pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-comp" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-comp)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: badge + título + descripción + lista */}
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              Competencias Digitales
            </p>

            <h2
              id="competencias-digitales-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Competencias Digitales{" "}
              <span className="text-indigo-600">para la Era Tecnológica</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl">
              Programas formativos diseñados para integrar tecnología, ética y colaboración en la práctica profesional. Desde alfabetización digital hasta preparación para los desafíos de la Industria 4.0.
            </p>

            <ul className="space-y-5" role="list" aria-label="Lista de competencias digitales">
              {items.map((it) => {
                const Icon = it.icon;
                return (
                  <li key={it.id} className="flex gap-4 items-start">
                    <div
                      className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-0 bg-gradient-to-tr ${it.accent} text-white z-10 ring-1 ring-white/20`}
                      aria-hidden="true"
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                          {it.title}
                        </h3>
                      </div>
                      <p className="mt-1 text-sm text-gray-600 leading-relaxed">{it.desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 text-center md:text-left">
              <a
                href="#contacto"
                className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow"
              >
                Consultar cursos y capacitaciones
              </a>
            </div>
          </div>

          {/* Columna derecha: imagen ilustrativa */}
          <figure className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/img/pic (5).jpg"
              alt="Ilustración sobre competencias digitales"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              quality={90}
              priority
            />
            <figcaption className="absolute left-0 right-0 bottom-0 text-xs sm:text-sm text-white/90 bg-black/30 backdrop-blur-sm py-2 px-4">
              Capacitación práctica y ética en herramientas digitales.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
