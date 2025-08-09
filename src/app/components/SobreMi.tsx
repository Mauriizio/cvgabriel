// app/components/SobreMi.tsx
import Image from "next/image";

export default function SobreMi() {
  const especialidades = [
    {
      title: "Docente Experimentado",
      description:
        "Profesor independiente, Licenciado en Educación Mención Ciencias Físico Naturales (Universidad de los Andes, Venezuela) con amplia trayectoria en docencia de Formación Profesional, combinando teoría con aplicación práctica para un aprendizaje efectivo y significativo.",
      img: "/img/graduacion.jpg",
    },
    {
      title: "Especialista en PRL",
      description:
        "Máster Oficial Universitario en Prevención de Riesgos Laborales (CEDEU - URJC, España), con experiencia en formación de sistemas de gestión que garantizan ambientes de trabajo seguros y saludables.",
      img: "/img/pic (7).jpg",
    },
    {
      title: "Trabajo Social",
      description:
        "Experto en Trabajo Social (Universidad de la Habana, Cuba) con enfoque en impacto comunitario y desarrollo humano, promoviendo la inclusión y el bienestar en diversos contextos sociales y organizacionales.",
      img: "/img/pic (9).jpg",
    },
    {
      title: "Competencias Digitales",
      description:
        "Máster Oficial Universitario en Creación Intelectual e Infogobierno (UPTM, Venezuela). Facilitador en Competencias Digitales, adaptando la enseñanza a la era tecnológica y preparando a profesionales para enfrentar los retos del entorno digital.",
      img: "/img/pic (4).jpg",
    },
  ];

  return (
    <section
      id="sobre-mi"
      aria-labelledby="sobre-mi-title"
      className="relative bg-gray-50 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos + cuadriculado sutil (mantengo tu visual) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full opacity-6"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-pattern-2" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-2)" className="text-slate-400" />
        </svg>

        <div className="absolute -top-12 -left-12 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-20" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Contenedor interior — igual que Bienvenidos */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
          Acerca de mí
        </p>

        {/* Título principal */}
        <h2
          id="sobre-mi-title"
          className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
        >
          Sobre <span className="text-indigo-600">Gabriel Acacio Hernández Zambrano</span>
        </h2>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl">
          Experto en Formación Profesional, Prevención de Riesgos Laborales, Trabajo Social y Competencias Digitales.
        </p>

        {/* Grid de especialidades — ajuste de gap para igualar densidad */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {especialidades.map((area, idx) => (
            <article
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-200 flex flex-col h-full"
              aria-labelledby={`area-${idx}`}
            >
              {/* Imagen */}
              <div className="relative w-full h-48">
                <Image
                  src={area.img}
                  alt={area.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 id={`area-${idx}`} className="text-xl font-bold text-gray-900 mb-3 tracking-tight">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-sm flex-grow">{area.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
