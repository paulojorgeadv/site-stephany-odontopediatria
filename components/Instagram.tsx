import { site } from "./site";

const highlights = [
  {
    t: "Bastidores do consultório",
    d: "Como é o ambiente, os brinquedos e a rotina que deixa a criança à vontade.",
  },
  {
    t: "Dicas rápidas para pais",
    d: "Escovação, fio dental, chupeta e alimentação explicados em poucos segundos.",
  },
  {
    t: "Sorrisos atendidos",
    d: "Casos e conquistas do dia a dia, sempre com autorização das famílias.",
  },
];

export function Instagram() {
  return (
    <section id="instagram" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="grain relative overflow-hidden rounded-[32px] border border-white/70 bg-shell/50 px-6 py-12 shadow-soft sm:px-12 sm:py-16">
          <div className="relative grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow">Instagram</p>
              <h2 className="h2 mt-4 text-ink">
                Acompanhe o dia a dia
                <br className="hidden sm:block" /> da <span className="italic text-rose">Dra. Stephany</span>
              </h2>
              <div className="rule mt-7" />
              <p className="lede mt-7">
                É no Instagram que ela publica dicas, bastidores do consultório e
                orientações curtas para pais e mães. Toque para abrir o perfil e ver as
                publicações mais recentes.
              </p>

              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-9 inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-body text-[12px] uppercase tracking-[0.18em] text-cream transition-transform hover:-translate-y-0.5"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
                Seguir @{site.instagram}
              </a>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3">
              {highlights.map((h) => (
                <li key={h.t}>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col justify-between rounded-[22px] border border-white/80 bg-cream/80 p-6 transition-all hover:-translate-y-1 hover:border-rose/40"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blush/70 text-ink">
                      <InstagramIcon className="h-[18px] w-[18px]" />
                    </span>
                    <span className="mt-6 block font-display text-[1.45rem] leading-snug text-ink">
                      {h.t}
                    </span>
                    <span className="mt-2 block font-body text-[13.5px] leading-relaxed text-muted">
                      {h.d}
                    </span>
                    <span className="mt-5 block font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                      Ver no Instagram →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
