// src/app/components/Footer.tsx
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-labelledby="footer-title"
      className="relative bg-gray-50 text-gray-800 overflow-hidden border-t border-gray-200"
    >
      <h2 id="footer-title" className="sr-only">
        Información de pie de página
      </h2>

      {/* Logo watermark (sutil en mobile) */}
      <div className="absolute inset-0 opacity-[0.04] sm:opacity-10 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo.jpg"
          alt=""
          width={500}
          height={500}
          className="object-contain scale-110 md:scale-125"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {/* Logo arriba SOLO en mobile */}
        <div className="block lg:hidden text-center mb-2">
          <Image
            src="/logo.jpg"
            alt="Logo Gabriel Hernández"
            width={160}
            height={160}
            className="mx-auto mb-2"
            loading="lazy"
          />
        </div>

        {/* Contacto */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-center lg:justify-start items-center gap-2">
              <EnvelopeIcon className="w-5 h-5 text-indigo-600" />
              <a href="mailto:contacto@ghformacion.com" className="hover:underline">
                contacto@ghformacion.com
              </a>
            </li>
            <li className="flex justify-center lg:justify-start items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-indigo-600" />
              <a href="tel:+34643747521" className="hover:underline">
                +34643747521
              </a>
            </li>
            <li className="flex justify-center lg:justify-start items-center gap-2">
              <MapPinIcon className="w-5 h-5 text-indigo-600" />
              <span>Madrid, España</span>
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <nav className="text-center lg:text-left" aria-label="Enlaces rápidos">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Enlaces rápidos</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:underline">Inicio</a></li>
            <li><a href="#sobre-mi" className="hover:underline">Sobre mí</a></li>
            <li><a href="#servicios" className="hover:underline">Servicios</a></li>
            <li><a href="#testimonios" className="hover:underline">Testimonios</a></li>
            <li><a href="#contacto" className="hover:underline">Contacto</a></li>
            {/* Legal */}
            <li className="pt-2"><a href="/privacidad" className="hover:underline">Política de privacidad</a></li>
            <li><a href="/terminos" className="hover:underline">Términos y condiciones</a></li>
            <li><a href="/aviso-legal" className="hover:underline">Aviso legal</a></li>
            <li><a href="/cookies" className="hover:underline">Política de cookies</a></li>
          </ul>
        </nav>

        {/* Redes sociales */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-semibold mb-2 text-gray-900">Sígueme</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.linkedin.com/in/gabriel-hern%C3%A1ndez-zambrano/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/34643747521" target="_blank" rel="noopener noreferrer" className="hover:underline">
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tu-perfil" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Logo + descripción SOLO en desktop */}
        <div className="hidden lg:block">
          <Image
            src="/logo.jpg"
            alt="Logo Gabriel Hernández"
            width={140}
            height={140}
            className="mb-4"
            loading="lazy"
          />
          <p className="text-sm text-gray-600">
            Formación profesional y prevención de riesgos laborales con experiencia y compromiso.
          </p>
        </div>
      </div>

      {/* Créditos */}
      <div className="border-t border-gray-200 mt-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 text-center sm:text-left">
          <span>© {new Date().getFullYear()} Gabriel Hernández. Todos los derechos reservados.</span>
          <span className="mt-2 sm:mt-0">
            Hecho con cariño por <span className="text-indigo-600">Maurizio Caballero</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
