import { site } from "./site";

export function Footer() {
  return (
    <footer className="border-t border-black/[0.06] bg-cream py-12">
      <div className="container-x flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-display text-xl text-ink">{site.doctor}</p>
          <p className="mt-1 font-body text-[11px] uppercase tracking-[0.24em] text-gold">
            {site.role} · {site.cro}
          </p>
        </div>
        <div className="font-body text-[12px] leading-relaxed text-muted">
          <p>
            {site.city} - {site.state} · {site.phoneDisplay}
          </p>
          <p className="mt-1">
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              @{site.instagram}
            </a>
          </p>
        </div>
      </div>
      <div className="container-x mt-8 border-t border-black/[0.05] pt-6">
        <p className="font-body text-[11px] leading-relaxed text-muted/80">
          © {new Date().getFullYear()} {site.doctor}. Conteúdo informativo, sem promessa de
          resultado. Cada caso exige avaliação clínica individual.
        </p>
      </div>
    </footer>
  );
}
