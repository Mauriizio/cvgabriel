"use client";

import { useRef, useMemo } from "react";
import {
  AcademicCapIcon,
  ShieldCheckIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CubeIcon,
  ClipboardDocumentListIcon,
  UsersIcon,
  TruckIcon,
  Cog6ToothIcon,
  ArchiveBoxIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/solid";
import { ChevronsLeft, ChevronsRight } from "lucide-react";

type Item = {
  title: string;
  icon?: React.ReactNode;
};

export default function CarouselAcademico() {
  const trackRef = useRef<HTMLDivElement>(null);

  const items: Item[] = useMemo(
    () => [
      { title: "Formación Profesional", icon: <AcademicCapIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Prevención de Riesgos Laborales", icon: <ShieldCheckIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Competencias Digitales", icon: <ComputerDesktopIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Inteligencia Artificial", icon: <CpuChipIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Logística", icon: <CubeIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Gestión y Organización de Almacenes", icon: <ArchiveBoxIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Trabajo Social", icon: <UsersIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Operaciones Auxiliares Adm. y Generales", icon: <ClipboardDocumentListIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Transporte de mercancías por carretera", icon: <TruckIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Tacógrafo digital inteligente", icon: <Cog6ToothIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
      { title: "Carga y estiba", icon: <RectangleStackIcon className="w-16 h-16 text-indigo-600 mx-auto mb-4" /> },
    ],
    []
  );

  const scrollByCards = (dir: "prev" | "next") => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLDivElement>("[data-card]");
    const gap = 16;
    const width = card ? card.getBoundingClientRect().width : el.clientWidth * 0.8;
    el.scrollBy({ left: (width + gap) * (dir === "next" ? 1 : -1), behavior: "smooth" });
  };

  return (
    <section aria-labelledby="carousel-title" className="relative py-2 bg-gray-200">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 md:px-8">
        <header className="mb-4">
          <h2 id="carousel-title" className="text-2xl sm:text-3xl font-bold text-gray-900">
          </h2>
          <p className="text-sm text-gray-900/70 ">Desliza para explorar</p>
        </header>

        <div
          ref={trackRef}
          className="
            relative
            snap-x snap-mandatory
            overflow-x-auto overflow-y-visible
            scrollbar-none
            -mx-8 px-8
          "
          role="region"
          aria-roledescription="carrusel"
        >
          <div className="flex gap-4 pb-2">
            {items.map((it, idx) => (
              <article
                key={idx}
                data-card
                className="
                  snap-start
                  min-w-[260px] sm:min-w-[300px] md:min-w-[340px]
                  bg-white/5
                  border border-indigo-600/30
                  rounded-2xl p-6
                  text-center
                  backdrop-blur-sm
                  flex flex-col items-center justify-center
                  hover:border-indigo-600/60 transition
                "
              >
                {it.icon}
                <h3 className="mt-1 text-xl sm:text-2xl font-bold text-indigo-600">
                  {it.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        {/* Flechas overlay */}
        <button
          type="button"
          onClick={() => scrollByCards("prev")}
          aria-label="Anterior"
          className="
            hidden sm:flex
            absolute left-0 top-1/2 -translate-y-1/2
            z-20 p-2 rounded-xl
            border border-indigo-600/60
            bg-black/20 backdrop-blur-sm
            text-indigo-600 hover:bg-indigo-600/10
          "
        >
          <ChevronsLeft className="w-8 h-8" />
        </button>

        <button
          type="button"
          onClick={() => scrollByCards("next")}
          aria-label="Siguiente"
          className="
            hidden sm:flex
            absolute right-0 top-1/2 -translate-y-1/2
            z-20 p-2 rounded-xl
            border border-indigo-600/60
            bg-black/20 backdrop-blur-sm
            text-indigo-600 hover:bg-indigo-600/10
          "
        >
          <ChevronsRight className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
