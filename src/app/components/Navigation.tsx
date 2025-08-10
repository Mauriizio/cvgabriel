'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' }
  ]

  return (
    <nav className="overflow-hidden bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100 sticky top-0 z-50 max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image
                src="/img/logo.png"
                alt="Logo Gabriel Hernández"
                fill
                className="object-cover rounded-full h-10 w-10"
                priority
              />
            </div>
            <div>
              <h1 className="text-gray-900 text-lg font-semibold leading-tight">Gabriel Hernández</h1>
              <p className="text-blue-700 text-xs sm:text-sm font-medium">Experto en Formación Profesional</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-800 px-3 py-2 text-sm font-medium transition-colors duration-200 border-b-2 border-transparent hover:border-blue-800"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Consulta Gratuita
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
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-blue-800 hover:bg-blue-50 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contacto"
                  className="block w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 text-center"
                >
                  Consulta Gratuita
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
