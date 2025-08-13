// src/app/components/FormacionProfesional.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function FormacionProfesional() {
  const slides = [
    {
      src: "/img/pic (5).jpg",
      caption: "Gabriel impartiendo teoría en aula a sus alumnos.",
    },
    {
      src: "/img/pic (6).jpg",
      caption:
        "Alumnos en el patio recibiendo instrucciones de Gabriel antes de la práctica.",
    },
    {
      src: "/img/pic (1).jpg",
      caption:
        "Clase práctica en patio: uso de grúa para carga de palets como ejercicio demostrativo.",
    },
    {
      src: "/img/pic (8).jpg",
      caption: "Estudiante operando la grúa por primera vez bajo supervisión.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="formacion-profesional"
      aria-labelledby="formacion-profesional-title"
      className="relative bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos + rejilla sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-50 rounded-3xl blur-3xl opacity-20"></div>
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-formacion" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-formacion)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Texto */}
        <div className="order-last md:order-first">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
            Preparación profesional de Calidad
          </p>

          <h2
            id="formacion-profesional-title"
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            Formación Profesional:{" "}
            <span className="text-indigo-600">Preparación para el Mundo Real</span>
          </h2>

          <p className="mt-4 text-gray-700 max-w-3xl leading-relaxed">
            Diseño programas formativos que responden directamente a las demandas
            actuales del mercado laboral, combinando habilidades técnicas específicas
            con competencias transversales esenciales para la empleabilidad.
          </p>

          <ul className="mt-6 space-y-4 max-w-3xl">
            {[
              "Casos prácticos y simulaciones para enfrentar situaciones reales en entornos controlados.",
              "Acompañamiento personalizado en el desarrollo de proyectos profesionales y personales.",
            ].map((txt, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-600 to-indigo-400 text-white flex items-center justify-center ring-1 ring-white/20"
                  aria-hidden
                >
                  <CheckCircleIcon className="w-6 h-6" />
                </span>
                <span className="text-gray-700">{txt}</span>
              </li>
            ))}
          </ul>

          {/* Botón centrado en mobile, alineado a la izquierda en desktop */}
          <div className="mt-6 text-center sm:text-left">
            <Link
  href="/contacto"
  className="inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-3 rounded-lg font-semibold shadow-lg transform transition duration-200 hover:-translate-y-0.5"
>
  Solicitar mas información
  <ArrowTopRightOnSquareIcon className="w-4 h-4" aria-hidden />
</Link>
          </div>
        </div>

        {/* Carrusel */}
        <figure className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-lg order-first md:order-last">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.caption}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                quality={90}
                priority={index === 0}
              />
              <figcaption className="absolute left-0 right-0 bottom-0 text-xs sm:text-sm text-white/90 bg-black/40 backdrop-blur-sm py-2 px-4">
                {slide.caption}
              </figcaption>
            </div>
          ))}
        </figure>
      </div>
    </section>
  );
}
