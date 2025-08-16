'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa' // 👈 icono de WhatsApp

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Ajusta tu número y el texto inicial del mensaje
  const WHATSAPP_NUMBER = '34643747521' // sin + ni espacios
  const waText = encodeURIComponent('¡Hola Gabriel! Me interesa una consulta gratuita.')
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`

  const navItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Mí', href: '/sobre-mi' },
    { name: 'Servicios', href: '/#servicios' }, // seccion en la home con id="servicios"
    { name: 'Testimonios', href: '/testimonios' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <nav className="overflow-hidden bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/logo.jpg"
                alt="Logo Gabriel Hernández"
                fill
                className="object-contain rounded-full h-10 w-10"
                priority
              />
            </div>
            <div>
              <h1 className="text-gray-900 text-lg font-semibold leading-tight">Gabriel Hernández</h1>
              <p className="text-blue-700 text-xs sm:text-sm font-medium">Experto en Formación Profesional <br/><span className=" text-xs font-semibold text-blue-700">  &quot;Aprender, hacer, trascender&quot;</span> </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-800"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA WhatsApp (icono redondo) */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-sm transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-green-500/50"
              title="Contactar por WhatsApp"
            >
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-800 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-gray-200 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                {/* CTA WhatsApp móvil (botón ancho con icono + texto) */}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
