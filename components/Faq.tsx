export const faqs = [
  {
    q: "Com que idade devo levar meu filho ao dentista pela primeira vez?",
    a: "O ideal é a primeira visita acontecer por volta do nascimento do primeiro dentinho ou até o primeiro ano de vida. Quanto mais cedo, mais natural a criança entende o consultório como um lugar seguro.",
  },
  {
    q: "Dente de leite cariado precisa mesmo ser tratado?",
    a: "Sim. O dente de leite guarda o espaço do dente permanente, participa da mastigação e da fala. Uma cárie não tratada pode causar dor, infecção e prejudicar o dente que está se formando embaixo.",
  },
  {
    q: "E se a criança não deixar examinar?",
    a: "Isso é comum e esperado. Nesses casos são feitas consultas de adaptação, sem procedimento, até que ela se sinta confortável. Nenhuma criança é forçada.",
  },
  {
    q: "Vocês atendem crianças autistas ou com outras condições?",
    a: "Sim. O atendimento é adaptado no ambiente, na comunicação, no horário e no número de sessões para crianças típicas e atípicas, além de pacientes com necessidades especiais.",
  },
  {
    q: "Os pais podem ficar na sala durante o atendimento?",
    a: "Podem, e na maioria dos casos isso ajuda. A conduta é combinada com a família antes de cada consulta.",
  },
  {
    q: "Como faço para agendar?",
    a: "Pelo WhatsApp, no botão em qualquer parte desta página. O agendamento é feito direto na conversa, com horário confirmado.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="bg-white/60 py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="eyebrow">Dúvidas frequentes</p>
          <h2 className="h2 mt-4 text-ink">
            Perguntas que as
            <br className="hidden sm:block" /> famílias sempre fazem
          </h2>
          <div className="rule mt-7" />
        </div>

        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                <span className="font-display text-[1.45rem] leading-snug text-ink">{f.q}</span>
                <span className="mt-1.5 shrink-0 font-body text-xl text-gold transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
