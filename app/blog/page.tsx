import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Fab } from "@/components/Fab";
import { posts, formatDate } from "@/components/posts";
import { site } from "@/components/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/components/schema";

export const metadata: Metadata = {
  title: "Blog de saúde bucal infantil",
  description:
    "Artigos de odontopediatria escritos em linguagem simples: primeira consulta do bebê, prevenção de cárie, dente de leite cariado e atendimento de crianças atípicas.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${site.url}/blog`,
    title: `Blog de saúde bucal infantil | ${site.doctor}`,
    description:
      "Orientações de odontopediatria para pais, mães e responsáveis, por uma especialista em São Raimundo Nonato - PI.",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${site.url}/blog#blog`,
  name: `Blog | ${site.doctor}`,
  description:
    "Artigos de odontopediatria para pais, mães e responsáveis.",
  url: `${site.url}/blog`,
  inLanguage: "pt-BR",
  publisher: { "@id": `${site.url}/#consultorio` },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    url: `${site.url}/blog/${p.slug}`,
    author: { "@id": `${site.url}/#stephany` },
  })),
};

export default function BlogIndex() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd
        data={breadcrumb([
          { name: "Início", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
        ])}
      />
      <Nav />
      <main id="conteudo" className="grain relative">
        <div className="container-x relative pb-8 pt-16 sm:pt-20">
          <p className="eyebrow">Blog</p>
          <h1 className="h1 mt-5 max-w-3xl text-ink">
            Saúde bucal infantil,
            <br />
            explicada <span className="italic text-rose">sem jargão</span>.
          </h1>
          <p className="lede mt-7 max-w-xl">
            Textos curtos sobre o que mais aparece no consultório, para você decidir com
            informação, não com achismo.
          </p>
        </div>

        <div className="container-x pb-24 pt-10">
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-[22px] border border-black/[0.06] bg-white/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-rose/40"
                >
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                    {p.category}
                  </span>
                  <h2 className="mt-4 font-display text-[1.7rem] leading-snug text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-3 flex-1 font-body text-[14.5px] leading-relaxed text-muted">
                    {p.excerpt}
                  </p>
                  <span className="mt-6 font-body text-[11px] uppercase tracking-[0.14em] text-muted/80">
                    {formatDate(p.date)} · {p.readingTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
