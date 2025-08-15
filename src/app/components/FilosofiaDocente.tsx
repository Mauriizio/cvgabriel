// src/app/components/FilosofiaDocente.tsx
import {
  LightBulbIcon,
  AcademicCapIcon,
  DevicePhoneMobileIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


export default function FilosofiaDocente() {
  const principios = [
    {
      id: "practica",
      title: "Educación Práctica",
      description:
        "Formación contextualizada que conecta teoría con la realidad laboral, permitiendo aplicación inmediata en situaciones reales.",
      icon: AcademicCapIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: "critico",
      title: "Pensamiento Crítico",
      description:
        "Fomento del análisis crítico, responsabilidad social e innovación digital como pilares para profesionales adaptables y éticos.",
      icon: LightBulbIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: "adaptacion",
      title: "Adaptación Tecnológica",
      description:
        "Integración constante de nuevas tecnologías y metodologías educativas que preparan a los estudiantes para el mercado laboral actual.",
      icon: DevicePhoneMobileIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      id: "humanista",
      title: "Enfoque Humanista",
      description:
        "Priorización del bienestar y desarrollo integral del estudiante, reconociendo las particularidades individuales en el aprendizaje.",
      icon: HeartIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section
      id="filosofia-docente"
      aria-labelledby="filosofia-title"
      className="relative bg-gray-200 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos + rejilla sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-12 w-44 h-44 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-blue-50 rounded-3xl blur-3xl opacity-20"></div>

        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-filo" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-filo)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 items-start">
          {/* Columna izquierda: título + intro + CTA */}
          <div className="md:col-span-1">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              Filosofía Docente
            </p>

            <h2
              id="filosofia-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Mi Filosofía: <span className="text-indigo-600">Aprender, hacer, trascender</span>
            </h2>

            <p className="mt-4 text-gray-700 leading-relaxed">
              El aprendizaje no es un fin en sí mismo, sino el punto de partida para la acción y la transformación personal, organizacional y social. “Aprender, hacer, trascender” también corresponde a la necesidad de aportar a las metodologías ágiles; instrumento estos principios en tres pasos esenciales: 
              a. Aprender: adquirir conocimiento sólido y relevante, con metodologías activas y actualizadas.
 
b. Hacer: aplicar lo aprendido en contextos reales, desarrollando competencias prácticas y resolviendo problemas concretos, en definitiva, aprender haciendo.
 
c. Trascender: ir más allá de la ejecución, generando impacto positivo, innovando y dejando huella en la comunidad y en el sector profesional, formación para la vida.
 
Este enfoque se inspira en la visión de Simón Rodríguez, el Robinson de América, quien defendía una educación útil, ética y para la vida.
También conecta con el espíritu del método japonés Shuhari, donde el aprendizaje verdadero culmina en la superación y la creación de algo nuevo.
 
Enseñamos para que cada persona no solo aprenda, sino que actúe y trascienda.
Porque el conocimiento cobra valor cuando se convierte en acción que transforma realidades.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <Link
  href="/contacto"
  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transform transition duration-200 hover:-translate-y-0.5"
>
    Consultar propuesta
  <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden />
</Link>
            </div>
          </div>

          {/* Columna derecha: tarjetas de principios */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {principios.map((p, idx) => {
              const Icon = p.icon;
              return (
                <article
                  key={p.id}
                  id={`principio-${p.id}`}
                  role="article"
                  tabIndex={0}
                  aria-labelledby={`principio-title-${p.id}`}
                  className="relative group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-2 focus-within:shadow-xl focus-within:-translate-y-2 ring-0 focus:outline-none overflow-visible"
                >
                  {/* badge numerado */}
                  <div className="absolute -top-3 -left-3 text-xs text-white font-semibold px-3 py-1 rounded-full bg-indigo-600/90 z-20">
                    {idx + 1}
                  </div>

                  {/* icono con gradiente (consistente con Servicios/Bienvenidos) */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 bg-gradient-to-tr ${p.accent} text-white z-10 ring-1 ring-white/20`}
                    aria-hidden
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <h3 id={`principio-title-${p.id}`} className="text-lg font-semibold text-gray-900 mb-2">
                    {p.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{p.description}</p>

                  <div className="mt-auto flex items-center gap-2">
                    <span className="text-xs text-gray-400 items-center">Formación aplicada</span>
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
