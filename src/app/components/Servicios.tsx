// src/app/components/Servicios.tsx
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  BriefcaseIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

export default function Servicios() {
  const oferta = [
    { id: "comp-digitales", label: "Competencias digitales", icon: ComputerDesktopIcon },
    { id: "gestion-admin", label: "Gestión administrativa", icon: ClipboardDocumentListIcon },
    { id: "atencion-cliente", label: "Atención al cliente", icon: UserGroupIcon },
    { id: "prl", label: "Prevención de Riesgos Laborales", icon: AcademicCapIcon },
  ];

  const modalidades = [
    { id: "presencial", label: "Talleres presenciales" },
    { id: "online", label: "Formación online interactiva" },
    { id: "personalizados", label: "Programas personalizados" },
  ];

  const certificaciones = [
    { id: "sepe", label: "Avalados por el SEPE" },
    { id: "incual", label: "Instituto Nacional de Cualificaciones" },
  ];

  const destinatarios = [
    {
      id: "trabajadores",
      title: "Trabajadores Activos",
      icon: BriefcaseIcon,
      desc:
        "Profesionales que buscan promocionar en su empresa o actualizar habilidades para adaptarse a los cambios del sector.",
    },
    {
      id: "busqueda-activa",
      title: "Personas en Búsqueda Activa",
      icon: UserGroupIcon,
      desc:
        "Quienes necesitan adquirir nuevas competencias para mejorar su empleabilidad y reinsertarse en el mercado laboral.",
    },
    {
      id: "empresas",
      title: "Empresas",
      icon: BuildingOffice2Icon,
      desc:
        "Organizaciones que desean reciclar conocimientos o especializar equipos para aumentar productividad y competitividad.",
    },
  ];

  return (
    <section
  id="servicios"
  aria-labelledby="servicios-title"
  className="relative bg-gray-50 py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
>
      {/* Fondos decorativos */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-12 -left-12 w-52 h-52 bg-indigo-50 rounded-full blur-3xl opacity-30" />
    <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-blue-50 rounded-3xl blur-3xl opacity-20" />

    {/* Patrón de cuadrícula */}
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.06]"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <pattern id="grid-servicios" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-servicios)" className="text-slate-400" />
    </svg>
  </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Cabecera */}
        <div className="md:flex md:items-end md:justify-between gap-8">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
              Oferta de Gabriel Hernández
            </p>
            <h2
              id="servicios-title"
              className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
            >
              Servicios y <span className="text-indigo-600">Programas Formativos</span>
            </h2>
            <p className="mt-4 text-gray-700 max-w-2xl">
              Cursos certificados, talleres y programas a medida para potenciar capacidades
              profesionales y mejorar resultados en personas y organizaciones.
            </p>
          </div>

          {/* Sello de certificaciones */}
          <div className="mt-6 md:mt-0 flex items-center gap-3 rounded-xl border border-gray-200 bg-white/80 backdrop-blur px-4 py-2 shadow-sm">
            <CheckBadgeIcon className="w-6 h-6 text-indigo-600" aria-hidden />
            <div className="text-xs text-gray-700">
              Certificaciones Oficiales<br />
              SEPE · INCUAL
            </div>
          </div>
        </div>

        {/* Oferta formativa */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Oferta Formativa</h3>
            <p className="mt-2 text-sm text-gray-600">
              Cursos certificados y contenidos ajustados a necesidades reales.
            </p>

            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {oferta.map((o) => {
                const Icon = o.icon;
                return (
                  <li
                    key={o.id}
                    className="flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 shadow-sm hover:shadow-md transition"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white ring-1 ring-white/20">
                      <Icon className="w-5 h-5" aria-hidden />
                    </span>
                    <span className="text-sm font-medium text-gray-900">{o.label}</span>
                  </li>
                );
              })}
            </ul>

            {/* Modalidades */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-900">Modalidades Flexibles</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {modalidades.map((m) => (
                  <span
                    key={m.id}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100"
                  >
                    {m.label}
                  </span>
                ))}
              </div>

              {/* Certificaciones */}
              <div className="mt-4 flex flex-wrap gap-2">
                {certificaciones.map((c) => (
                  <span
                    key={c.id}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100"
                  >
                    {c.label}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-0.5"
              >
                Solicitar propuesta
              </a>
            </div>
          </article>

          {/* Destinatarios */}
          <aside className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">¿A quién va dirigido?</h3>
            <ul className="mt-4 grid grid-cols-1 gap-4">
              {destinatarios.map((d) => {
                const Icon = d.icon;
                return (
                  <li
                    key={d.id}
                    className="group rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white ring-1 ring-white/20">
                        <Icon className="w-5 h-5" aria-hidden />
                      </span>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">{d.title}</h4>
                        <p className="mt-1 text-xs text-gray-600">{d.desc}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg text-sm font-semibold transition-transform hover:-translate-y-0.5"
              >
                Agendar consulta
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
