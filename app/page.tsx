import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Sobre } from "@/components/Sobre";
import { Procedimentos } from "@/components/Procedimentos";
import { Acolhimento } from "@/components/Acolhimento";
import { Jornada } from "@/components/Jornada";
import { Faq } from "@/components/Faq";
import { BlogTeaser } from "@/components/BlogTeaser";
import { Instagram } from "@/components/Instagram";
import { Local } from "@/components/Local";
import { Footer } from "@/components/Footer";
import { Fab } from "@/components/Fab";
import { JsonLd } from "@/components/JsonLd";
import {
  dentistSchema,
  dentistPersonSchema,
  faqSchema,
  websiteSchema,
} from "@/components/schema";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Page() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={dentistSchema} />
      <JsonLd data={dentistPersonSchema} />
      <JsonLd data={faqSchema} />
      <Nav />
      <main id="conteudo">
        <Hero />
        <Sobre />
        <Procedimentos />
        <Acolhimento />
        <Jornada />
        <Faq />
        <BlogTeaser />
        <Instagram />
        <Local />
      </main>
      <Footer />
      <Fab />
    </>
  );
}
