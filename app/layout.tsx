import type { Metadata } from "next";
import { site } from "@/components/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Odontopediatra em ${site.city} - ${site.state} | ${site.doctor}`,
    template: `%s | ${site.doctor} | Odontopediatria`,
  },
  description: `${site.doctor}, ${site.specialty.toLowerCase()} em ${site.city} - ${site.state}. Prevenção, restaurações, tratamento de canal infantil, urgência e atendimento de crianças típicas e atípicas. Agende pelo WhatsApp. ${site.cro}.`,
  applicationName: site.shortName,
  authors: [{ name: site.doctor }],
  creator: site.doctor,
  publisher: site.shortName,
  category: "Odontopediatria",
  keywords: [
    `odontopediatra ${site.city}`,
    `dentista infantil ${site.city}`,
    "odontopediatra Piauí",
    "dentista de criança São Raimundo Nonato",
    "odontopediatria para bebês",
    "atendimento odontológico criança autista",
    "dentista para criança atípica Piauí",
    "tratamento de canal em dente de leite",
    "urgência odontológica infantil São Raimundo Nonato",
    "Stephany Carvalho odontopediatra",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.shortName,
    title: `Odontopediatra em ${site.city} - ${site.state} | ${site.doctor}`,
    description: `Cuidado odontológico infantil humanizado em ${site.city}. Crianças típicas e atípicas, com acolhimento em cada etapa.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.doctor} | Odontopediatria em ${site.city}`,
    description: `${site.specialty}. Agendamento pelo WhatsApp.`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/icon.svg" },
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="geo.region" content="BR-PI" />
        <meta name="geo.placename" content={`${site.city}, ${site.stateName}`} />
        <meta name="geo.position" content={`${site.geo.lat};${site.geo.lng}`} />
        <meta name="ICBM" content={`${site.geo.lat}, ${site.geo.lng}`} />
        <meta name="theme-color" content="#FBF8F4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
        >
          Ir para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
