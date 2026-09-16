import { wa } from "./site";

const items = [
  {
    t: "Primeira consulta e acompanhamento",
    d: "Odontopediatria desde o nascimento do bebê, com retornos periódicos para acompanhar a erupção dos dentes e o crescimento.",
    m: "Olá, Dra. Stephany! Gostaria de agendar a primeira consulta odontológica da minha criança.",
  },
  {
    t: "Prevenção",
    d: "Limpeza e profilaxia, aplicação de flúor e selantes, o cuidado que evita a cárie antes que ela apareça.",
    m: "Olá, Dra. Stephany! Tenho interesse em consulta de prevenção (limpeza, flúor e selante).",
  },
  {
    t: "Restaurações",
    d: "Tratamento de cáries e recuperação da forma e função dos dentes de leite e permanentes, com materiais adequados à idade.",
    m: "Olá, Dra. Stephany! Gostaria de avaliar uma restauração para minha criança.",
  },
  {
    t: "Tratamento de canal infantil",
    d: "Pulpotomia e pulpectomia realizadas com técnica específica para dentes de leite, preservando o dente até a troca natural.",
    m: "Olá, Dra. Stephany! Gostaria de informações sobre tratamento de canal infantil.",
  },
  {
    t: "Extrações",
    d: "Remoção de dentes de leite quando necessária, feita com segurança, anestesia adequada e preparo emocional da criança.",
    m: "Olá, Dra. Stephany! Preciso de uma avaliação sobre extração de dente de leite.",
  },
  {
    t: "Urgência e trauma dental",
    d: "Dor, quedas, dentes fraturados ou deslocados: avaliação e conduta rápida para proteger o dente e aliviar o desconforto.",
    m: "Olá, Dra. Stephany! É uma urgência odontológica infantil. Pode me orientar?",
  },
  {
    t: "Orientação de amamentação, mamadeira e chupeta",
    d: "Conduta individualizada sobre uso de mamadeira e chupeta e seus efeitos no desenvolvimento da boca e da mordida.",
    m: "Olá, Dra. Stephany! Gostaria de orientação sobre mamadeira e chupeta.",
  },
  {
    t: "Hábitos e dieta",
    d: "Controle de hábitos deletérios (sucção de dedo, roer unhas, respiração bucal) e orientação alimentar para reduzir o risco de cárie.",
    m: "Olá, Dra. Stephany! Quero orientação sobre hábitos e dieta da minha criança.",
  },
];

export function Procedimentos() {
  return (
    <section id="procedimentos" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Procedimentos</p>
          <h2 className="h2 mt-4 text-ink">
            O que é feito no <span className="italic text-rose">consultório</span>
          </h2>
          <div className="rule mt-7" />
          <p className="lede mt-7">
            Toda conduta é apresentada e explicada à família antes de começar. Clique no
            procedimento para falar diretamente no WhatsApp sobre ele.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <li key={it.t}>
              <a
                href={wa(it.m)}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[22px] border border-black/[0.06] bg-white/70 p-7 shadow-soft transition-all hover:-translate-y-1 hover:border-rose/40"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint/70 text-ink transition-colors group-hover:bg-blush/80">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4">
                    <path d="M12 20c-2.2 0-2.6-7-5.2-7C4.6 13 3.5 10.4 3.5 7.6 3.5 5 5.4 3.2 7.8 3.2c1.2 0 2 .6 2.6.6.6 0 1.4-.6 2.6-.6h.2c2.4 0 4.3 1.8 4.3 4.4 0 2.8-1.1 5.4-3.3 5.4-2.6 0-3 7-4.2 7z" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="font-display text-[1.6rem] leading-snug text-ink">{it.t}</h3>
                <p className="mt-3 font-body text-[14.5px] leading-relaxed text-muted">{it.d}</p>
                <span className="mt-6 font-body text-[11px] uppercase tracking-[0.18em] text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Falar sobre isso →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
