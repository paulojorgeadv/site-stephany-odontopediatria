import Link from "next/link";
import { posts, formatDate } from "./posts";

export function BlogTeaser() {
  return (
    <section id="blog" className="bg-white/60 py-20 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Blog</p>
            <h2 className="h2 mt-4 text-ink">
              Conteúdo para quem <span className="italic text-rose">cuida</span>
            </h2>
            <div className="rule mt-7" />
            <p className="lede mt-7">
              Orientações sobre saúde bucal infantil, escritas em linguagem simples para
              pais, mães e responsáveis.
            </p>
          </div>
          <Link
            href="/blog"
            className="font-body text-[12px] uppercase tracking-[0.18em] text-muted underline decoration-gold/50 underline-offset-8 transition-colors hover:text-ink"
          >
            Ver todos os artigos
          </Link>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <li key={p.slug}>
              <Link
                href={`/blog/${p.slug}`}
                className="group flex h-full flex-col rounded-[22px] border border-black/[0.06] bg-cream p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-rose/40"
              >
                <span className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                  {p.category}
                </span>
                <h3 className="mt-4 font-display text-[1.7rem] leading-snug text-ink">{p.title}</h3>
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
    </section>
  );
}
