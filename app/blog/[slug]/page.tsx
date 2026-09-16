import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Fab } from "@/components/Fab";
import { posts, getPost, formatDate } from "@/components/posts";
import { site, wa } from "@/components/site";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb } from "@/components/schema";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Artigo não encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${site.url}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.doctor],
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${site.url}/blog/${post.slug}#article`,
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
    inLanguage: "pt-BR",
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
    author: { "@id": `${site.url}/#stephany` },
    publisher: { "@id": `${site.url}/#consultorio` },
    about: { "@type": "MedicalSpecialty", name: "Odontopediatria" },
    articleBody: post.body.map((b) => [b.h, b.p].filter(Boolean).join(" ")).join(" "),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumb([
          { name: "Início", url: site.url },
          { name: "Blog", url: `${site.url}/blog` },
          { name: post.title, url: `${site.url}/blog/${post.slug}` },
        ])}
      />
      <Nav />
      <main id="conteudo" className="grain relative">
        <article className="container-x relative max-w-3xl pb-20 pt-16 sm:pt-20">
          <Link
            href="/blog"
            className="font-body text-[11px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
          >
            ← Voltar ao blog
          </Link>

          <p className="eyebrow mt-8">{post.category}</p>
          <h1 className="h1 mt-4 text-[2.2rem] leading-tight text-ink sm:text-[3rem]">
            {post.title}
          </h1>
          <p className="mt-5 font-body text-[12px] uppercase tracking-[0.16em] text-muted">
            {formatDate(post.date)} · {post.readingTime} de leitura
          </p>
          <div className="rule mt-8" />

          <div className="mt-10 space-y-7">
            {post.body.map((block, i) => (
              <div key={i}>
                {block.h && (
                  <h2 className="mb-3 font-display text-[1.8rem] leading-snug text-ink">
                    {block.h}
                  </h2>
                )}
                <p className="font-body text-[16.5px] leading-[1.85] text-ink/80">{block.p}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-[24px] border border-white/70 bg-shell/60 p-8 text-center shadow-soft">
            <p className="font-display text-2xl text-ink">
              Ficou com dúvida sobre o caso da sua criança?
            </p>
            <p className="lede mx-auto mt-3 max-w-md text-[15px]">
              Cada situação exige avaliação individual. Fale diretamente com a{" "}
              {site.doctor}.
            </p>
            <a
              href={wa(`Olá, Dra. Stephany! Li o artigo "${post.title}" no site e fiquei com uma dúvida.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-rose px-7 py-3.5 font-body text-[12px] uppercase tracking-[0.18em] text-white transition-transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </article>
      </main>
      <Footer />
      <Fab />
    </>
  );
}
