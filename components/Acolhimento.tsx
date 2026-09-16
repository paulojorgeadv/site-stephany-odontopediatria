import { wa } from "./site";

const adapt = [
  "Consulta de dessensibilização antes de qualquer procedimento",
  "Ambiente com menos estímulo sonoro e visual quando necessário",
  "Comunicação previsível: a criança sabe o que vem a seguir",
  "Horários pensados para evitar espera e agitação",
  "Família dentro da sala, participando do atendimento",
  "Ritmo respeitado, quantas consultas forem necessárias",
];

export function Acolhimento() {
  return (
    <section id="acolhimento" className="relative overflow-hidden bg-gradient-to-b from-mint/50 via-cream to-shell/60 py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="eyebrow">Atendimento inclusivo</p>
          <h2 className="h2 mt-4 text-ink">
            Crianças típicas e <span className="italic text-rose">atípicas</span>,
            no mesmo lugar.
          </h2>
          <div className="rule mt-7" />
          <p className="lede mt-7">
            Crianças autistas, com TDAH, com atraso no desenvolvimento ou com
            deficiência encontram aqui um atendimento pensado para elas, sem contenção
            desnecessária, sem pressa e sem julgamento. A consulta se adapta à criança,
            e não o contrário.
          </p>
          <p className="lede mt-5">
            Pacientes com necessidades especiais de qualquer idade também são atendidos,
            com planejamento individual construído junto à família.
          </p>
          <a
            href={wa("Olá, Dra. Stephany! Minha criança é atípica e gostaria de saber como funciona o atendimento.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3.5 font-body text-[12px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream"
          >
            Conversar sobre o caso da minha criança
          </a>
        </div>

        <div>
          <figure className="mb-5 overflow-hidden rounded-[22px] border border-white/70 shadow-soft">
            <img
              src="/fotos/stephany-jaleco-azul.webp"
              width={700}
              height={876}
              loading="lazy"
              decoding="async"
              alt="Dra. Stephany Carvalho segurando um bichinho de pelúcia usado para acolher crianças na consulta"
              className="h-full w-full object-cover"
            />
          </figure>
        <ul className="grid gap-3">
          {adapt.map((a) => (
            <li
              key={a}
              className="flex items-start gap-4 rounded-2xl border border-white/80 bg-white/70 px-6 py-5 shadow-soft"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              <span className="font-body text-[15px] leading-relaxed text-ink/85">{a}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
