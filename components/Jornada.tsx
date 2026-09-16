const steps = [
  { n: "01", t: "Contato pelo WhatsApp", d: "Você conta a idade da criança, o que está acontecendo e o melhor horário. O agendamento sai na mesma conversa, ou pessoalmente no consultório, se preferir." },
  { n: "02", t: "Conhecer o consultório", d: "A criança explora o ambiente, senta na cadeira e conhece os instrumentos. Nada acontece sem que ela entenda." },
  { n: "03", t: "Avaliação e plano", d: "Exame clínico completo e apresentação do que precisa ser feito, em ordem de prioridade, com tudo explicado à família." },
  { n: "04", t: "Tratamento e retorno", d: "Os procedimentos acontecem no ritmo da criança, seguidos de um plano de prevenção e retornos periódicos." },
];

export function Jornada() {
  return (
    <section id="primeira-consulta" className="py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Como funciona</p>
          <h2 className="h2 mt-4 text-ink">
            Da primeira mensagem ao <span className="italic text-rose">sorriso tranquilo</span>
          </h2>
          <div className="rule mt-7" />
        </div>

        <ol className="mt-14 grid gap-px overflow-hidden rounded-[24px] bg-black/[0.06] sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-cream p-8">
              <span className="font-display text-4xl text-blush">{s.n}</span>
              <h3 className="mt-5 font-display text-2xl leading-snug text-ink">{s.t}</h3>
              <p className="mt-3 font-body text-[14.5px] leading-relaxed text-muted">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
