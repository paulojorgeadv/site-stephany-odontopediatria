import { site, fullAddress, hoursSchema, serviceAreaPI, serviceAreaBA } from "./site";
import { faqs } from "./Faq";

export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${site.url}/#consultorio`,
  name: `${site.doctor} | Odontopediatria`,
  alternateName: site.shortName,
  description: `Odontopediatria em ${site.city} - ${site.state}. Prevenção, restaurações, tratamento de canal infantil, urgência e atendimento de crianças típicas e atípicas.`,
  url: site.url,
  telephone: `+${site.phoneRaw}`,
  medicalSpecialty: "PediatricDentistry",
  priceRange: "$$",
  currenciesAccepted: "BRL",
  image: [
    `${site.url}/fotos/stephany-consultorio.webp`,
    `${site.url}/fotos/stephany-jaleco-azul.webp`,
    `${site.url}/fotos/stephany-jaleco-princesas.webp`,
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.state,
    postalCode: site.zip,
    addressCountry: "BR",
  },
  openingHoursSpecification: hoursSchema.map((h) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: h.days.map((d) => `https://schema.org/${d}`),
    opens: h.opens,
    closes: h.closes,
  })),
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.mapsUrl,
  areaServed: [
    ...serviceAreaPI.map((c) => ({ "@type": "City", name: `${c} - PI` })),
    ...serviceAreaBA.map((c) => ({ "@type": "City", name: `${c} - BA` })),
    { "@type": "AdministrativeArea", name: "Região da Serra da Capivara" },
  ],
  sameAs: [site.instagramUrl],
  employee: { "@id": `${site.url}/#stephany` },
  availableService: [
    "Primeira consulta odontológica infantil",
    "Prevenção: profilaxia, flúor e selante",
    "Restaurações em dentes de leite e permanentes",
    "Tratamento de canal infantil (pulpotomia e pulpectomia)",
    "Extrações de dentes de leite",
    "Urgência e trauma dental",
    "Orientação de amamentação, mamadeira e chupeta",
    "Controle de hábitos e orientação de dieta",
    "Atendimento de crianças atípicas e pacientes com necessidades especiais",
  ].map((s) => ({ "@type": "MedicalProcedure", name: s })),
};

export const dentistPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${site.url}/#stephany`,
  name: site.doctor,
  jobTitle: site.specialty,
  description: `${site.specialty}. ${site.education}. ${site.cro}.`,
  url: site.url,
  telephone: `+${site.phoneRaw}`,
  image: `${site.url}/fotos/stephany-consultorio.webp`,
  medicalSpecialty: "PediatricDentistry",
  knowsAbout: [
    "Odontopediatria",
    "Odontologia para bebês",
    "Atendimento odontológico de crianças autistas",
    "Prevenção de cárie na infância",
    "Traumatismo dental infantil",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "IOA, Instituto Orofacial das Américas",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Teresina",
      addressRegion: "PI",
      addressCountry: "BR",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Pós-graduação",
    educationalLevel: "Especialização em Odontopediatria",
    recognizedBy: { "@type": "Organization", name: "IOA, Instituto Orofacial das Américas" },
  },
  identifier: site.cro,
  worksFor: { "@id": `${site.url}/#consultorio` },
  areaServed: site.city,
  workLocation: { "@type": "Place", name: site.clinic, address: fullAddress },
  sameAs: [site.instagramUrl],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${site.url}/#faq`,
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.shortName,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#consultorio` },
};

export function breadcrumb(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
