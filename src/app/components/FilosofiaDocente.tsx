// app/components/FilosofiaDocente.tsx
import { LightBulbIcon, AcademicCapIcon, DevicePhoneMobileIcon, HeartIcon } from "@heroicons/react/24/outline";

export default function FilosofiaDocente() {
  const principios = [
    {
      title: "Educación Práctica",
      description:
        "Desarrollo de formación contextualizada que conecta teoría con la realidad laboral, permitiendo aplicación inmediata de conocimientos en situaciones reales.",
      icon: AcademicCapIcon,
    },
    {
      title: "Pensamiento Crítico",
      description:
        "Fomento del análisis crítico, la responsabilidad social y la innovación digital como pilares fundamentales para profesionales adaptables y éticos.",
      icon: LightBulbIcon,
    },
    {
      title: "Adaptación Tecnológica",
      description:
        "Integración constante de nuevas tecnologías y metodologías educativas que preparan para los cambios del mercado laboral actual.",
      icon: DevicePhoneMobileIcon,
    },
    {
      title: "Enfoque Humanista",
      description:
        "Priorización del bienestar y desarrollo integral del estudiante, reconociendo las particularidades individuales en el proceso de aprendizaje.",
      icon: HeartIcon,
    },
  ];

  return (
    <section
      id="filosofia-docente"
      className="bg-gray-50 min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 relative overflow-hidden"
      aria-labelledby="filosofia-title"
    >
      {/* Fondos decorativos sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Título */}
        <h2
          id="filosofia-title"
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4"
        >
          Mi Filosofía Docente:{" "}
          <span className="text-blue-700">Aprender para Transformar</span>
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-10 text-base sm:text-lg">
          Un enfoque educativo integral que combina rigor académico, tecnología y compromiso humano.
        </p>

        {/* Grid de principios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {principios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col sm:flex-row items-start gap-4 hover:shadow-xl transition-shadow"
            >
              {/* Ícono */}
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
                <item.icon className="w-6 h-6" />
              </div>

              {/* Texto */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
