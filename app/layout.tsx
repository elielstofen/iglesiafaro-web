import type { Metadata, Viewport } from "next";
import "@fontsource/albert-sans/300.css";
import "@fontsource/albert-sans/400.css";
import "@fontsource/albert-sans/500.css";
import "@fontsource/cormorant-garamond/300-italic.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Iglesia Faro - Tu familia en Madrid",
    template: "%s - Iglesia Faro",
  },
  description: site.description,
  openGraph: {
    title: "Iglesia Faro - Tu familia en Madrid",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/img/adoracion-cruz.webp", width: 496, height: 674, alt: "La comunidad de Faro adorando un domingo" }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#f2ede4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: site.legalName,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Virgilio, 4",
      postalCode: "28223",
      addressLocality: "Pozuelo de Alarcón",
      addressRegion: "Madrid",
      addressCountry: "ES",
    },
    sameAs: [site.social.instagram, site.social.facebook, site.social.spotify],
    event: {
      "@type": "Event",
      name: "Reunión de domingo",
      eventSchedule: { "@type": "Schedule", byDay: "https://schema.org/Sunday", startTime: "11:00", scheduleTimezone: "Europe/Madrid" },
    },
  };

  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
