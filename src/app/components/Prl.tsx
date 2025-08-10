// src/components/Prl.tsx
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  UsersIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

export default function Prl() {
  const cards = [
    {
      id: "normativas",
      title: "Normativas y Prácticas",
      desc:
        "Formación especializada en normativas vigentes y mejores prácticas internacionales para asegurar cumplimiento y minimizar riesgos.",
      icon: ShieldCheckIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: "gestion",
      title: "Gestión de Riesgos",
      desc:
        "Estrategias para identificar, evaluar y controlar riesgos, con metodologías aplicables a industrias y servicios diversos.",
      icon: ExclamationTriangleIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: "cultura",
      title: "Cultura Preventiva",
      desc:
        "Impulsamos una cultura organizacional que reduce accidentes y mejora el bienestar y productividad mediante participación activa.",
      icon: UsersIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section
      id="prl"
      aria-labelledby="prl-title"
      className="relative bg-gray-50 py-12 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondo decorativo + cuadrícula */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -left-10 w-52 h-52 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-16 -right-12 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-20"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="p-prl" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#p-prl)" className="text-slate-400" />
        </svg>
      </div>

      {/* Contenedor */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Columna izquierda */}
          <div className="md:col-span-1">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              Prevención de Riesgos Laborales
            </p>

            <h2
              id="prl-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Normativas, Gestión y <span className="text-indigo-600">Cultura Preventiva</span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
              Diseñamos formación aplicada que integra normativa, gestión y cultura preventiva para hacer tu organización más segura, resiliente y productiva.
            </p>

            {/* Botones alineados como en el resto */}
            <div className="mt-6 text-center sm:text-left">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transform transition duration-200 hover:-translate-y-0.5"
              >
                Solicitar asesoría
                <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden />
              </a>
              <br />
              <a
                href="#programa-prl"
                className="inline-block mt-3 text-indigo-600 hover:underline font-medium"
              >
                Ver programa
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <article
                  key={c.id}
                  id={`prl-card-${c.id}`}
                  role="article"
                  tabIndex={0}
                  aria-labelledby={`prl-card-title-${c.id}`}
                  className="relative group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 focus-within:shadow-xl focus-within:-translate-y-2"
                >
                  {/* Número */}
                  <div className="absolute -top-3 -left-3 text-xs text-white font-semibold px-3 py-1 rounded-full bg-indigo-600/90 z-20">
                    {idx + 1}
                  </div>

                  {/* Icono */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-4 bg-gradient-to-tr ${c.accent} text-white ring-1 ring-white/20`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3
                    id={`prl-card-title-${c.id}`}
                    className="text-lg font-semibold text-gray-900 mb-2"
                  >
                    {c.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{c.desc}</p>

                  <div className="mt-auto flex items-center gap-3">
                    <a
                      href={`#${c.id}`}
                      className="text-sm font-medium text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-2"
                    >
                      Más info
                      <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    </a>
                    <span className="ml-auto text-xs text-gray-400">
                      Formación presencial / online
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
