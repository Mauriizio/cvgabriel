// app/components/FormacionProfesional.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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

  // Cambio automático cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="formacion-profesional"
      className="bg-white min-h-screen flex items-center px-4 sm:px-8 md:px-20 py-12 sm:py-16 relative overflow-hidden"
      aria-labelledby="formacion-profesional-title"
    >
      {/* Fondos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative z-10">
        {/* Texto */}
        <div className="space-y-6 order-last md:order-first">
          <h2
            id="formacion-profesional-title"
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
          >
            Formación Profesional:{" "}
            <span className="text-blue-700">Preparación para el Mundo Real</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Diseño programas formativos que responden directamente a las demandas
            actuales del mercado laboral, combinando habilidades técnicas específicas
            con competencias transversales esenciales para la empleabilidad.
          </p>

          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                ✓
              </span>
              Casos prácticos y simulaciones para enfrentar situaciones reales en entornos controlados.
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                ✓
              </span>
              Acompañamiento personalizado en el desarrollo de proyectos profesionales y personales.
            </li>
          </ul>

          <div>
            <a
              href="#contacto"
              className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-transform transform hover:scale-105 shadow"
            >
              Solicitar más información
            </a>
          </div>
        </div>

        {/* Carrusel de imágenes */}
        <figure className="relative w-full h-64 sm:h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg order-first md:order-last">
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
