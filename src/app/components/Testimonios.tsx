// src/app/components/Testimonios.tsx
import Image from "next/image";
import { StarIcon as StarSolid } from "@heroicons/react/24/solid";
import { StarIcon as StarOutline } from "@heroicons/react/24/outline";

type Testimonio = {
  id: string;
  nombre: string;
  rol: string;
  texto: string;
  foto?: string;   // opcional
  rating?: 1 | 2 | 3 | 4 | 5;
};

const testimonios: Testimonio[] = [
  {
    id: "t1",
    nombre: "María Sánchez",
    rol: "Responsable de RR.HH. · Sector Logístico",
    texto:
      "La formación con Gabriel transformó mi perspectiva profesional. Sus métodos prácticos me permitieron aplicar inmediatamente lo aprendido en mi empresa, mejorando significativamente nuestros protocolos de seguridad.",
    foto: "/img/pic (7).jpg",
    rating: 5,
  },
  {
    id: "t2",
    nombre: "Carlos Martínez",
    rol: "Presidente Asociación Vecinal",
    texto:
      "El proyecto comunitario que desarrollamos con la guía de Gabriel ha cambiado radicalmente nuestra asociación vecinal. Ahora tenemos herramientas efectivas para gestionar nuestras iniciativas sociales con mayor impacto.",
    foto: "/img/pic (4).jpg",
    rating: 5,
  },
  {
    id: "t3",
    nombre: "Eneida Mora",
    rol: "Docente de Formación Profesional para el Empleo",
    texto:
      "El aprendizaje alcanzado sobre el uso de herramientas digitales y de Inteligencia Artificial me ha permitido potenciar y mejorar los resultados académicos con mis alumnos.",
    foto: "/img/pic (9).jpg",
    rating: 5,
  },
  {
    id: "t4",
    nombre: "Maurizio Caballero",
    rol: "Desarrollador de Software",
    texto:
      "Gracias a el profesor Gabriel Hernandez ahora todo mi equipo de trabajo logro estandarizar una metodologia de resolución de problemas que nos ha permitido ser más eficientes y productivos.",
    foto: "/img/maurizio.png",
    rating: 5,
  },
];

export default function Testimonios() {
  const ratingValues = testimonios.map((t) => t.rating ?? 5);
  const aggregateRating =
    ratingValues.reduce((a, b) => a + b, 0) / ratingValues.length;

  return (
    <section
      id="testimonios"
      aria-labelledby="testimonios-title"
      className="relative bg-gray-50 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos coherentes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-blue-50 rounded-3xl blur-3xl opacity-20"></div>
        <svg
          className="bg-grid-pattern absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-test" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-test)" className="text-slate-400" />
        </svg>
      </div>

      {/* Contenido */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="md:flex md:items-end md:justify-between gap-8">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              Lo que dicen de mi trabajo
            </p>
            <h2
              id="testimonios-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Testimonios <span className="text-indigo-600">verificados</span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Resultados reales en Formación Profesional, PRL y Competencias Digitales.
            </p>
          </div>

          {/* Sello de satisfacción */}
          <div className="mt-6 md:mt-0 flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-2 shadow-sm">
            <div className="text-2xl font-bold text-gray-900">
              {aggregateRating.toFixed(1)}★
            </div>
            <div className="text-xs text-gray-600">
              Satisfacción promedio<br />basada en {testimonios.length} opiniones
            </div>
          </div>
        </div>

        {/* Grid de testimonios: 1, luego 2 y 2 (escritorio) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {testimonios.map((t) => (
            <article
              key={t.id}
              className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-transform duration-300 transform hover:-translate-y-1 focus-within:shadow-xl"
              aria-label={`Testimonio de ${t.nombre}`}
            >
              <div className="flex items-start gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-1 ring-white/40 shadow-sm">
                  <Image
                    src={t.foto ?? "/img/perfil.png"}
                    alt={`Foto de ${t.nombre}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900 leading-tight">
                    {t.nombre}
                  </h3>
                  <p className="text-xs text-gray-600">{t.rol}</p>
                </div>
              </div>

              <blockquote className="mt-4 text-gray-700 text-sm leading-relaxed">
                “{t.texto}”
              </blockquote>

              {/* Estrellas */}
              <div
                className="mt-4 flex items-center gap-1"
                aria-label={`Calificación ${t.rating ?? 5} de 5`}
              >
                {Array.from({ length: 5 }).map((_, i) =>
                  i < (t.rating ?? 5) ? (
                    <StarSolid key={i} className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <StarOutline key={i} className="w-4 h-4 text-gray-300" />
                  )
                )}
                <span className="ml-2 text-xs text-gray-500">{(t.rating ?? 5).toFixed(1)}</span>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* JSON-LD mínimo para SEO de reseñas */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product", // o "Service"
            name: "Formación Profesional y PRL - Gabriel Acacio Hernández",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: aggregateRating.toFixed(1),
              reviewCount: testimonios.length,
            },
            review: testimonios.map((t) => ({
              "@type": "Review",
              reviewBody: t.texto,
              reviewRating: { "@type": "Rating", ratingValue: t.rating ?? 5, bestRating: 5 },
              author: { "@type": "Person", name: t.nombre },
            })),
          }),
        }}
      /> */}
    </section>
  );
}
