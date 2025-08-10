// src/app/components/Contacto.tsx
"use client";

import { useState } from "react";
import {
  ChatBubbleLeftRightIcon,
  LinkIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

export default function Contacto() {
  // ⚠️ Pega tu ID real de Formspree: https://formspree.io/f/<TU_ID>
  const FORMSPREE_ID = "TU_ID_AQUI"; // ej: "abcdwxyz"

  // Opcional: enlaces directos
  const WHATSAPP_NUMBER = "56912345678"; // sin + ni espacios
  const LINKEDIN_URL = "https://www.linkedin.com/in/tu-perfil/";

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const waText = encodeURIComponent(
    "Hola Gabriel, me interesa una consulta para diseñar mi plan de formación / proyecto social."
  );
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot (Formspree sugiere _gotcha)
    if ((data.get("_gotcha") as string) !== "") return;

    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="relative bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-20 text-gray-800 overflow-hidden"
    >
      {/* Fondos decorativos + grid sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 -left-10 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-12 -right-10 w-72 h-72 bg-blue-50 rounded-3xl blur-3xl opacity-20" />
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06]"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M40 0 L0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-contact)" className="text-slate-400" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-indigo-700 bg-indigo-50">
            Hablemos
          </p>
          <h2
            id="contacto-title"
            className="mt-4 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight"
          >
            Agenda una <span className="text-indigo-600">consulta sin compromiso</span>
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            <strong>Servicios Disponibles</strong><br />
            Asesorías personalizadas para profesionales y organizaciones · Talleres prácticos de
            capacitación en todas las áreas de especialización · Cursos completos adaptados a
            necesidades específicas · Modalidades presencial, virtual y blended learning.
          </p>
          <p className="mt-2 text-gray-700 leading-relaxed">
            Agenda una consulta para diseñar tu plan de formación o proyecto social personalizado.
            Conecta conmigo y da el siguiente paso hacia tu crecimiento profesional y personal.
          </p>
        </div>

        {/* Layout: CTA + formulario */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* CTA rápida */}
          <aside className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900">Conexiones directas</h3>
            <p className="mt-2 text-sm text-gray-600">¿Prefieres un mensaje rápido?</p>

            <div className="mt-4 flex flex-col gap-3 text-center sm:text-left">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-0.5"
              >
                <ChatBubbleLeftRightIcon className="w-5 h-5" aria-hidden />
                WhatsApp
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-5 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-0.5"
              >
                <LinkIcon className="w-5 h-5" aria-hidden />
                LinkedIn
              </a>

              {/* Info de contacto clásica (opcional) */}
              <div className="mt-4 space-y-2 text-sm text-gray-700">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <EnvelopeIcon className="w-5 h-5 text-indigo-600" />
                  <a href="mailto:correo@dominio.com" className="hover:underline">
                    correo@dominio.com
                  </a>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <PhoneIcon className="w-5 h-5 text-indigo-600" />
                  <a href="tel:+34600111222" className="hover:underline">
                    +34 600 111 222
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-500">
              Respondo usualmente en 24–48 h laborales.
            </div>
          </aside>

          {/* Formulario (Formspree) */}
          <div className="lg:col-span-2">
            <form
              onSubmit={onSubmit}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              aria-describedby="contacto-ayuda"
            >
              {/* Honeypot */}
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              {/* Opcionales de Formspree */}
              <input type="hidden" name="_subject" value="Nueva consulta desde el sitio web" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="tucorreo@dominio.com"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                    Asunto
                  </label>
                  <input
                    id="asunto"
                    name="asunto"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Ej: Consulta sobre taller PRL / programa de competencias"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    required
                    className="mt-1 block w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    placeholder="Cuéntame un poco sobre tus necesidades…"
                  />
                </div>
              </div>

              <p id="contacto-ayuda" className="mt-2 text-xs text-gray-500">
                Tus datos se usan solo para responder tu consulta.
              </p>

              {/* CTA: centrado en mobile, izquierda desde sm */}
              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <button
                  type="submit"
                  disabled={status === "loading" || FORMSPREE_ID === "TU_ID_AQUI"}
                  className="inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform hover:-translate-y-0.5 disabled:opacity-60"
                >
                  {status === "loading" ? "Enviando…" : "Enviar mensaje"}
                </button>

                {status === "success" && (
                  <span className="text-sm text-emerald-600">
                    ¡Mensaje enviado! Te responderé pronto.
                  </span>
                )}
                {status === "error" && (
                  <span className="text-sm text-rose-600">
                    Hubo un problema. Intenta nuevamente en unos minutos.
                  </span>
                )}
                {FORMSPREE_ID === "TU_ID_AQUI" && (
                  <span className="text-xs text-amber-600">
                    Reemplazar <strong>FORMSPREE_ID</strong> por  real.
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* JSON-LD: ContactPoint básico */}
      {/* <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Gabriel Acacio Hernández",
            url: "https://tudominio.com",
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "correo@dominio.com",
                telephone: "+34-600-111-222",
                areaServed: "ES",
                availableLanguage: ["es", "en"],
              },
            ],
          }),
        }}
      /> */}
    </section>
  );
}
