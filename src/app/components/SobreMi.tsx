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
      className="bg-white min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 relative overflow-hidden"
      aria-labelledby="sobre-mi-title"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-52 h-52 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Título */}
        <h2
          id="sobre-mi-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Sobre <span className="text-blue-700">Gabriel Acacio Hernández Zambrano</span>
        </h2>
        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
          Experto en Formación Profesional, Prevención de Riesgos Laborales, Trabajo Social y Competencias Digitales.
        </p>

        {/* Grid de especialidades */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {especialidades.map((area, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
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
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {area.title}
                </h3>
                <p className="text-gray-700 text-sm flex-grow">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
