import { site, hours, serviceAreaPI, serviceAreaBA, wa } from "./site";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Local() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.shortName
  )}&ftid=${site.mapsFtid}&hl=pt-BR&z=16&output=embed`;

  return (
    <section id="contato" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Onde atende</p>
          <h2 className="h2 mt-4 text-ink">
            {site.city}, <span className="italic text-rose">{site.stateName}</span>
          </h2>
          <div className="rule mt-7" />
          <p className="lede mt-7">
            O atendimento acontece no {site.clinic}, no bairro {site.district}. O
            agendamento pode ser feito pessoalmente no consultório ou pelo WhatsApp,
            pelo WhatsApp é mais rápido, e você não precisa se deslocar.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="card flex flex-col justify-between gap-8 p-8 sm:p-10">
            <div>
              <h3 className="font-display text-[1.8rem] leading-snug text-ink">
                {site.clinic}
              </h3>
              <address className="mt-4 not-italic font-body text-[15px] leading-relaxed text-muted">
                {site.street}
                <br />
                Bairro {site.district}, {site.city} - {site.state}
                <br />
                CEP {site.zip}
              </address>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 font-body text-[12px] uppercase tracking-[0.16em] text-rose transition-colors hover:text-ink"
              >
                Ver perfil no Google
                <span aria-hidden="true">→</span>
              </a>

              <dl className="mt-8 space-y-3 border-t border-black/[0.07] pt-6">
                <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                  Horário de atendimento
                </dt>
                {hours.map((h) => (
                  <dd key={h.label} className="flex justify-between gap-4 font-body text-[15px] text-ink">
                    <span>{h.label}</span>
                    <span className="text-right text-muted">{h.ranges.join(" · ")}</span>
                  </dd>
                ))}
              </dl>

              <dl className="mt-6 space-y-4 border-t border-black/[0.07] pt-6">
                <div>
                  <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                    Agendamento
                  </dt>
                  <dd className="mt-1 font-body text-[15px] text-ink">
                    WhatsApp {site.phoneDisplay} ou presencialmente no consultório
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-[10px] uppercase tracking-[0.2em] text-gold">
                    Profissional
                  </dt>
                  <dd className="mt-1 font-body text-[15px] text-ink">
                    {site.doctor} · {site.cro}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={wa()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 font-body text-[12px] uppercase tracking-[0.18em] text-cream transition-transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Agendar consulta
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-ink/15 px-6 py-4 font-body text-[12px] uppercase tracking-[0.18em] text-ink transition-colors hover:bg-ink hover:text-cream"
              >
                Como chegar
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[22px] border border-black/[0.06] shadow-soft">
            <iframe
              src={mapSrc}
              title={`Mapa do ${site.clinic}, ${site.street}, ${site.city} - ${site.state}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[340px] w-full lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-black/[0.06] bg-mint/40 p-6 sm:p-8">
          <p className="font-body text-[15px] leading-relaxed text-ink">
            Foi atendido pela Dra. Stephany? Sua avaliação ajuda outras famílias a
            encontrar o consultório.
          </p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-6 py-3.5 font-body text-[12px] uppercase tracking-[0.18em] text-cream transition-transform hover:-translate-y-0.5"
          >
            Avalie nosso atendimento no Google
          </a>
        </div>

        <div className="mt-8 rounded-[24px] border border-black/[0.06] bg-white/60 p-8 sm:p-10">
          <h3 className="font-display text-[1.7rem] leading-snug text-ink">
            Famílias de toda a região da Serra da Capivara
          </h3>
          <p className="mt-3 max-w-3xl font-body text-[15px] leading-relaxed text-muted">
            Recebemos crianças vindas de {site.city} e das cidades vizinhas do sul do
            Piauí e do norte da Bahia. Se você mora fora da cidade, avise no WhatsApp: o
            atendimento é organizado para resolver o máximo possível em cada viagem.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {[...serviceAreaPI.map((c) => `${c} - PI`), ...serviceAreaBA.map((c) => `${c} - BA`)].map(
              (c) => (
                <li
                  key={c}
                  className="rounded-full border border-black/[0.07] bg-cream px-4 py-1.5 font-body text-[12px] text-muted"
                >
                  {c}
                </li>
              )
            )}
          </ul>
        </div>

        <p className="mt-10 text-center font-body text-[12px] uppercase tracking-[0.2em] text-muted">
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-ink"
          >
            Instagram @{site.instagram}
          </a>
        </p>
      </div>
    </section>
  );
}
