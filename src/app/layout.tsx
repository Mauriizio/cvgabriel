// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

/**
 * ⚙️ IMPORTANTE:
 * - Cambia `https://tudominio.com` por tu dominio final (sin slash).
 * - Reemplaza las URLs de sameAs/og/twitter por las reales.
 * - Opcional: añade un /site.webmanifest si lo tienes.
 */
const SITE_URL = "https://tudominio.com"; // TODO

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Gabriel Hernández — Formación y PRL",
  title: {
    default:
      "Gabriel Hernández — Formación Profesional, PRL, Trabajo Social y Competencias Digitales",
    template: "%s | Gabriel Hernández",
  },
  description:
    "Formación Profesional, Prevención de Riesgos Laborales (PRL), Trabajo Social y Competencias Digitales. Programas, talleres y asesorías para personas y organizaciones.",
  keywords: [
    "Formación Profesional",
    "Prevención de Riesgos Laborales",
    "PRL",
    "Trabajo Social",
    "Competencias Digitales",
    "Capacitación",
    "Cursos",
    "Talleres",
    "Asesoría",
  ],
  authors: [{ name: "Gabriel Hernández" }],
  creator: "Gabriel Hernández",
  publisher: "Gabriel Hernández",
  category: "education",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Gabriel Hernández",
    title:
      "Gabriel Hernández — Formación Profesional, PRL, Trabajo Social y Competencias Digitales",
    description:
      "Resultados reales en FP, PRL y Competencias Digitales. Programas certificados, talleres y soluciones a medida.",
    locale: "es_ES",
    images: [
      {
        url: "/public/logo.jpg", // TODO: crea una imagen 1200x630
        width: 1200,
        height: 630,
        alt: "Gabriel Hernández — Formación y PRL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Gabriel Hernández — Formación Profesional, PRL, Trabajo Social y Competencias Digitales",
    description:
      "Programas, talleres y asesorías en FP, PRL y Competencias Digitales.",
    images: ["/img/og-hero.jpg"], // TODO
    creator: "@tu_usuario", // TODO opcional
  },
  icons: {
    icon: [
      { url: "/logo.jpg" },
      { url: "/logo.jpg", sizes: "32x32", type: "image/jpg" },
      { url: "/logo.jpg", sizes: "192x192", type: "image/jpg" },
      { url: "/logo.jpg", sizes: "512x512", type: "image/jpg" },
    ],
    shortcut: ["/logo.jpg"],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Si tendrás un manifest:
  // manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  verification: {
    // Añade estos cuando los tengas:
    // google: "TU_TOKEN_DE_VERIFICACION",
    // other: { bing: "TU_TOKEN_BING" }
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "light dark",
};

/**
 * JSON-LD de Organization + WebSite
 * Colocado en layout para toda la app. Reemplaza sameAs con tus redes reales.
 */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gabriel Hernández",
  url: SITE_URL,
  logo: `${SITE_URL}/img/logo2.png`,
  sameAs: [
    "https://www.linkedin.com/in/tu-perfil", // TODO
    "https://wa.me/XXXXXXXXXXX", // TODO
    "https://www.instagram.com/tu-perfil", // TODO
  ],
};
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gabriel Hernández",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" dir="ltr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900`}
      >
        <Navigation />
       <main>{children}</main>

        {/* JSON-LD: puedes moverlo a un /app/head.tsx si prefieres */}
       <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
/>
<Footer />
      </body>
    </html>
  );
}
