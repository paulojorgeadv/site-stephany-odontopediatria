import { site } from "./site";

const pillars = [
  {
    title: "Acolhimento antes da técnica",
    text: "A criança conhece o consultório, os instrumentos e cada passo antes de qualquer procedimento. Confiança primeiro, tratamento depois.",
  },
  {
    title: "Prevenção como prioridade",
    text: "O melhor tratamento é o que não precisa acontecer. Consultas de acompanhamento, orientação de higiene e dieta desde o nascimento.",
  },
  {
    title: "Família participativa",
    text: "Pais e responsáveis entendem o que está sendo feito, por que e como continuar o cuidado em casa. Nada é decidido sem explicação.",
  },
];

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-white/60 py-20 sm:py-28">
      <div className="container-x grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <div>
          <p className="eyebrow">Sobre a especialista</p>
          <h2 className="h2 mt-4 text-ink">
            Uma odontopediatria que começa
            <br className="hidden sm:block" /> pelo <span className="italic text-rose">vínculo</span>.
          </h2>
          <div className="rule mt-7" />
          <p className="lede mt-7">
            {site.doctor} é cirurgiã-dentista {site.specialty.toLowerCase()}, com
            pós-graduação em Odontopediatria pelo IOA, Instituto Orofacial das Américas,
            em Teresina. Atende crianças e adolescentes em {site.city}, {site.stateName},
            no {site.clinic}.
          </p>
          <p className="lede mt-5">
            Seu trabalho é construído sobre uma ideia simples: criança não é adulto
            pequeno. Cada consulta respeita o tempo, o medo e a curiosidade de quem está
            sentado na cadeira, e a primeira visita deixa de ser uma emergência para se
            tornar o começo de uma relação de confiança que dura anos.
          </p>

          <dl className="mt-10 grid gap-4 border-t border-black/[0.07] pt-8 sm:grid-cols-2">
            <div>
              <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                Formação
              </dt>
              <dd className="mt-2 font-display text-[1.35rem] leading-snug text-ink">
                Pós-graduação em Odontopediatria
              </dd>
              <dd className="mt-1 font-body text-[13px] leading-relaxed text-muted">
                IOA, Instituto Orofacial das Américas, Teresina - PI
              </dd>
            </div>
            <div>
              <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                Registro profissional
              </dt>
              <dd className="mt-2 font-display text-[1.35rem] leading-snug text-ink">
                {site.cro}
              </dd>
              <dd className="mt-1 font-body text-[13px] leading-relaxed text-muted">
                Conselho Regional de Odontologia do Piauí
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <figure className="mb-6 overflow-hidden rounded-[22px] border border-white/70 shadow-soft">
            <img
              src="/fotos/stephany-jaleco-princesas.webp"
              width={700}
              height={876}
              loading="lazy"
              decoding="async"
              alt="Dra. Stephany Carvalho de jaleco infantil, especialista em odontopediatria"
              className="h-full w-full object-cover"
            />
          </figure>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {pillars.map((p, i) => (
            <li key={p.title} className="card lg:flex lg:items-start lg:gap-6">
              <span aria-hidden="true" className="font-display text-3xl text-blush lg:text-4xl">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-3 lg:mt-0">
                <h3 className="font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-2 font-body text-[15px] leading-relaxed text-muted">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}
