// src/app/components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      role="banner"
      aria-labelledby="hero-title"
      className="
        relative min-h-[100dvh] lg:h-[100dvh]
        overflow-hidden overflow-x-clip
        bg-gradient-to-b from-slate-900 via-slate-950 to-black
      "
    >
     <svg
  className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
  preserveAspectRatio="none"
  aria-hidden
>
  <defs>
    <pattern id="grid-hero" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grid-hero)" className="text-slate-400" />
</svg>


      {/* Fondo con foto en mobile (no empuja layout) */}
      <div className="absolute inset-0 lg:hidden" aria-hidden>
        <Image
          src="/img/perfil.png"
          alt=""
          fill
          sizes="100vw"
          className="
            object-cover
            /* cara libre arriba, piernas hacia abajo */
            object-[50%_12%]
            opacity-90 pointer-events-none select-none
          "
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      {/* Contenedor general */}
      <div
        className="
          relative z-10 h-full max-w-7xl mx-auto
          px-5 sm:px-6 md:px-8
        "
      >
        {/* ------- MOBILE / TABLET: texto apilado y bajo ------- */}
        <div
          className="
            lg:hidden
            flex h-full flex-col justify-end
            /* reserva visual para la cara sin crear scroll */
            pt-[18vh] sm:pt-[16vh] md:pt-[14vh]
            pb-6
          "
        >
          <HeroText />
        </div>

        {/* ------- DESKTOP: split ------- */}
        <div
          className="
            hidden lg:grid h-full
            grid-cols-12 gap-10 xl:gap-16 content-center
          "
        >
          {/* Foto a la izquierda, pegada abajo */}
          <div className="relative col-span-5 h-[76vh] xl:h-[80vh] self-end">
            <Image
              src="/img/perfil.png"
              alt="Gabriel A. Hernández — Experto en Formación Profesional"
              fill
              sizes="(max-width:1280px) 45vw, 40vw"
              className="object-contain object-left-bottom pointer-events-none select-none"
              priority
              quality={90}
            />
          </div>

          {/* Texto a la derecha */}
          <div className="col-span-7 self-center">
            <HeroText align="left" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------ Bloque de texto reutilizable ------------------ */
function HeroText({ align = "center" }: { align?: "center" | "left" }) {
  const textAlign =
    align === "left" ? "text-left lg:pr-2" : "text-center mx-auto";

  return (
    <div className={`text-white ${textAlign} max-w-[700px]`}>
      {/* Badge */}
      <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" aria-hidden />
        <span className="text-sm font-medium text-white/90">Disponible para consultas</span>
      </div>

      {/* Título con clamp por altura/anchura */}
      <h1
        id="hero-title"
        className="
          font-extrabold leading-tight tracking-tight
          /* clamp para que no tape la cara ni cree scroll en pantallas bajitas */
          text-[clamp(2rem,6vw,4.5rem)]
          lg:text-[clamp(2.75rem,3.5vw,4.5rem)]
        "
      >
        <span className="block">Lic. Gabriel</span>
        <span className="block bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          Hernández
        </span>
      </h1>

      {/* Subtítulo con ancho controlado */}
      <p
        className="
          mt-3
          text-[clamp(1rem,2.4vw,1.35rem)]
          font-light text-blue-100 leading-relaxed
          max-w-[680px]
          mx-auto lg:mx-0
        "
      >
        Experto en Formación Profesional, Prevención de Riesgos Laborales, Trabajo Social y Competencias Digitales
      </p>

      {/* Stats compactas (no empujar hacia abajo) */}
      <dl
        className="
          grid grid-cols-3 gap-3 sm:gap-4
          max-w-[680px] mx-auto lg:mx-0
          py-4 md:py-5
        "
      >
        {[
          { n: "20+", label: "Años" },
          { n: "500+", label: "Formados" },
          { n: "100%", label: "Satisfacción" },
        ].map((s) => (
          <div
            key={s.label}
            className="
              bg-white/10 backdrop-blur-sm rounded-lg
              p-2.5 sm:p-3 border border-white/20
              flex flex-col items-center
            "
          >
            <dt className="sr-only">{s.label}</dt>
            <dd
              className="
                font-bold
                text-[clamp(1rem,2.8vw,1.5rem)]
              "
              aria-label={`${s.label}: ${s.n}`}
            >
              {s.n}
            </dd>
            <span className="text-[11px] sm:text-xs text-white/80">{s.label}</span>
          </div>
        ))}
      </dl>

      {/* CTAs */}
      <div
        className="
          mt-1
          flex flex-col sm:flex-row gap-4
          justify-center lg:justify-start items-center
        "
      >
        <a
          href="#contacto"
          className="
            inline-flex items-center justify-center gap-2
            bg-indigo-600 hover:bg-indigo-700
            text-white px-6 py-3 rounded-lg font-semibold
            transition-transform hover:-translate-y-0.5
          "
        >
          Consulta gratuita
        </a>
        <a
          href="#servicios"
          className="
            inline-flex items-center justify-center gap-2
            border-2 border-indigo-700 text-indigo-700
            hover:bg-indigo-700 hover:text-white
            px-6 py-3 rounded-lg font-semibold
            transition-transform hover:-translate-y-0.5
          "
        >
          Ver servicios
        </a>
      </div>
    </div>
  );
}
