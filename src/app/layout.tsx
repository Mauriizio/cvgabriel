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

const SITE_URL = "https://ghformacion.com"; 

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
        url: "/og-image.png",
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
    images: ["/og-image.png"], 
    creator: "Maurizio Caballero", 
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/favicon-180x180.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
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

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  verification: {
    // google: "TOKEN_GOOGLE", 
    // other: { bing: "TOKEN_BING" },
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "light dark",
};

/** ========= JSON-LD ========= */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Gabriel Hernández",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.jpg`,
  sameAs: [
    "https://www.linkedin.com/in/gabriel-hern%C3%A1ndez-zambrano",
    "https://wa.me/34643747521",
    "https://www.instagram.com/gh.formacion",
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gabriel Hernández",
  url: SITE_URL,
  jobTitle: "Docente y Consultor en Formación Profesional y PRL",
  sameAs: [
    "https://www.linkedin.com/in/gabriel-hern%C3%A1ndez-zambrano",
    "https://wa.me/34643747521",
    "https://www.instagram.com/gh.formacion",
  ],
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

        {/* JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />

        <Footer />
      </body>
    </html>
  );
}
