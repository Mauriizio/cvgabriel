// src/app/components/SobreMi.tsx
import Image from "next/image";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  UsersIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

export default function SobreMi() {
  const especialidades = [
    {
      title: "Docente Experimentado",
      description:
        "Profesor independiente, Licenciado en Educación Mención Ciencias Físico Naturales (Universidad de los Andes, Venezuela) con amplia trayectoria en docencia de Formación Profesional, combinando teoría con aplicación práctica para un aprendizaje efectivo y significativo.",
      img: "/img/graduacion.jpg",
      icon: AcademicCapIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Especialista en PRL",
      description:
        "Máster Oficial Universitario en Prevención de Riesgos Laborales (CEDEU - URJC, España), con experiencia en formación de sistemas de gestión que garantizan ambientes de trabajo seguros y saludables.",
      img: "/img/pic (7).jpg",
      icon: ShieldCheckIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Trabajo Social",
      description:
        "Experto en Trabajo Social (Universidad de la Habana, Cuba) con enfoque en impacto comunitario y desarrollo humano, promoviendo la inclusión y el bienestar en diversos contextos sociales y organizacionales.",
      img: "/img/pic (9).jpg",
      icon: UsersIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
    {
      title: "Competencias Digitales",
      description:
        "Máster Oficial Universitario en Creación Intelectual e Infogobierno (UPTM, Venezuela). Facilitador en Competencias Digitales, adaptando la enseñanza a la era tecnológica y preparando a profesionales para enfrentar los retos del entorno digital.",
      img: "/img/pic (4).jpg",
      icon: ComputerDesktopIcon,
      accent: "from-indigo-600 to-indigo-400",
    },
  ];

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="relative bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos + rejilla */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-6"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-sobre-mi" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-sobre-mi)" className="text-slate-400" />
        </svg>

        <div className="absolute -top-12 -left-12 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
          Acerca de mí
        </p>

        <h2
          id="sobre-mi-title"
          className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
        >
          Sobre <span className="text-indigo-600">Gabriel Acacio Hernández Zambrano</span>
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          Experto en Formación Profesional, Prevención de Riesgos Laborales, Trabajo Social y Competencias Digitales.
        </p>

        {/* Grid de especialidades */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {especialidades.map((area, idx) => {
            const Icon = area.icon;
            return (
              <article
                key={idx}
                className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-transform transform hover:-translate-y-2 duration-300 flex flex-col h-full overflow-hidden"
                aria-labelledby={`area-${idx}`}
              >
                {/* Imagen */}
                <div className="relative w-full h-48">
                  <Image
                    src={area.img}
                    alt={`${area.title} - ${area.description.substring(0, 60)}...`}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover"
                  />
                  {/* Icono flotante */}
                  <div
                    className={`absolute -bottom-6 left-1/2 -translate-x-1/2 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-tr ${area.accent} text-white z-10 ring-1 ring-white/20 shadow-lg`}
                  >
                    <Icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-6 pt-10 flex flex-col flex-grow">
                  <h3 id={`area-${idx}`} className="text-lg font-semibold text-gray-900 mb-2 tracking-tight text-center">
                    {area.title}
                  </h3>
                  <p className="text-gray-700 text-sm flex-grow text-center">{area.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
