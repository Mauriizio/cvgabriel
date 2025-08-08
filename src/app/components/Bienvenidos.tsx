// app/components/Bienvenidos.tsx
import Image from "next/image";

export default function Bienvenidos() {
  return (
    <section
      id="bienvenidos"
      className="bg-white py-12 sm:py-16 px-4 sm:px-8 md:px-20 text-gray-800 relative overflow-hidden"
      aria-labelledby="bienvenidos-title"
    >
      {/* Decor: blobs + SVG pattern (sutil) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 -left-12 w-44 h-44 bg-blue-100 rounded-full blur-3xl opacity-28"></div>
        <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>

        <svg
          className="absolute inset-0 w-full h-full opacity-4"
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* --- TEXTO (aparece primero en móvil) --- */}
        <article
          className="order-first animate-fadeIn md:animate-none"
          aria-labelledby="bienvenidos-title"
        >
          <h2
            id="bienvenidos-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center md:text-left"
          >
            Bienvenido a <span className="text-blue-700">Mi Espacio Profesional</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed text-center md:text-left">
            Soy <strong>Gabriel Acacio Hernández</strong>, formador y docente con amplia trayectoria en Educación,
            Prevención de Riesgos, Trabajo Social y Competencias Digitales. Mi enfoque combina
            <span className="font-semibold text-gray-900"> rigor académico</span> con metodologías prácticas que generan
            resultados medibles en entornos laborales y comunitarios.
          </p>

          {/* Tarjeta destacada (mejor contraste, masculino y profesional) */}
          <div className="mt-5 mx-auto md:mx-0 max-w-xl bg-gradient-to-r from-slate-50 to-white border-l-4 border-blue-700 p-4 rounded-lg shadow-md">
            <h3 className="text-sm font-semibold text-slate-900 mb-2">Programas, talleres y asesorías</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Ofrezco <span className="font-medium">programas, talleres y asesorías</span> diseñadas para desarrollar competencias útiles y transferibles —
              desde <span className="font-medium">alfabetización digital e IA aplicada</span> hasta
              <span className="font-medium"> gestión de seguridad laboral</span>. Modalidades: presencial, virtual y blended.
            </p>
          </div>

          {/* Beneficios / bullets */}
          <ul className="mt-5 space-y-3 text-gray-700 max-w-xl mx-auto md:mx-0">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              Asesorías y mentoría profesional personalizada
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              Talleres prácticos: IA, Competencias Digitales y PRL
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">✓</span>
              Diseño de programas formativos y proyectos con impacto social
            </li>
          </ul>

          {/* CTA centrado en móvil, alineado a la izquierda en escritorio */}
          <div className="mt-6 text-center md:text-left">
            <a
              href="#contacto"
              role="button"
              aria-label="Agenda una consulta con Gabriel"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow"
            >
              Agenda una consulta
            </a>
          </div>
        </article>

        {/* --- IMAGEN (aparece después del texto en móvil; a la derecha en desktop) --- */}
        <figure className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-xl overflow-hidden shadow-xl order-last">
          {/* overlay sutil para contraste */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-t from-black/24 to-transparent"></div>
          </div>

          <Image
            src="/img/alumnos.jpg" // reemplaza por tu imagen real en /public/img/
            alt="Gabriel Acacio Hernández con alumnos practicantes"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
            priority
            quality={85}
          />

          {/* Badges (opcionales) */}
          <div className="absolute left-4 top-4 flex flex-col gap-2 z-20">
            <span className="bg-blue-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">20+ años</span>
            <span className="bg-white/90 text-slate-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">Máster PRL</span>
          </div>

          {/* Pie de foto con mejor contraste (claro) */}
          <figcaption className="absolute left-4 right-4 bottom-4 text-xs sm:text-sm text-slate-800 bg-white/85 backdrop-blur-sm rounded-md px-3 py-2 shadow-sm">
            Foto: Gabriel con alumnos practicantes de grado — actividad práctica en aula.
          </figcaption>
     
        </figure>
        
      </div>
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
    </section>
  );
}
