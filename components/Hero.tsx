import { site, wa } from "./site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
  return (
    <section id="topo" className="grain relative overflow-hidden">
      <div className="container-x relative grid items-center gap-14 pb-14 pt-10 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-16 lg:pb-28 lg:pt-24">
        <div>
          <p className="eyebrow">
            {site.specialty} · {site.city} - {site.state} · {site.cro}
          </p>
          <h1 className="h1 mt-4 text-ink sm:mt-5">
            O primeiro sorriso
            <br />
            merece um cuidado
            <br />
            <span className="italic text-rose">delicado</span> e seguro.
          </h1>
          <p className="lede mt-5 max-w-xl sm:mt-7">
            Odontopediatria para bebês, crianças e adolescentes em {site.city} -{" "}
            {site.state}, com atendimento calmo, sem pressa e feito no ritmo de cada
            criança. Prevenção, tratamento e orientação para famílias que querem fazer
            diferente.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-9">
            <a
              href={wa()}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-rose px-7 py-4 font-body text-[13px] uppercase tracking-[0.18em] text-white shadow-soft transition-all hover:-translate-y-0.5 hover:bg-[#c8918c]"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#procedimentos"
              className="font-body text-[13px] uppercase tracking-[0.18em] text-muted underline decoration-gold/50 underline-offset-8 transition-colors hover:text-ink"
            >
              Ver procedimentos
            </a>
          </div>

          <dl className="mt-10 hidden max-w-lg grid-cols-3 gap-6 border-t border-black/[0.07] pt-7 sm:mt-12 sm:grid">
            {[
              ["Bebês a adolescentes", "Todas as idades"],
              ["Típicos e atípicos", "Atendimento inclusivo"],
              ["Sem correria", "Consulta no ritmo da criança"],
            ].map(([t, s]) => (
              <div key={t}>
                <dt className="font-display text-[1.05rem] leading-snug text-ink">{t}</dt>
                <dd className="mt-1 font-body text-[11px] uppercase tracking-[0.14em] text-muted">
                  {s}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-mint/70 blur-2xl" />
          <div className="absolute -bottom-8 -right-6 h-48 w-48 rounded-full bg-blush/60 blur-2xl" />
          <PortraitSlot />
        </div>
      </div>
    </section>
  );
}

function PortraitSlot() {
  return (
    <figure className="relative mx-auto w-full max-w-[420px]">
      <div className="overflow-hidden rounded-t-[210px] rounded-b-[32px] border border-white/70 shadow-soft">
        <img
          src="/fotos/stephany-consultorio.webp"
          width={700}
          height={1050}
          alt="Dra. Stephany Carvalho, odontopediatra em São Raimundo Nonato - PI, sorrindo sentada no consultório"
          fetchPriority="high"
          decoding="async"
          className="h-full w-full object-cover"
        />
      </div>
      <figcaption className="mt-5 text-center font-body text-[11px] uppercase tracking-[0.2em] text-muted">
        {site.doctor} · {site.cro}
      </figcaption>
    </figure>
  );
}
