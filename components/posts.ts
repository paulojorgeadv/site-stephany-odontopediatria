export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
  body: { h?: string; p: string }[];
};

export const posts: Post[] = [
  {
    slug: "primeira-visita-ao-dentista",
    title: "Quando levar o bebê ao dentista pela primeira vez",
    excerpt:
      "A primeira consulta odontológica não precisa esperar a primeira dor. Entenda o momento ideal e o que acontece nessa visita.",
    date: "2026-09-14",
    readingTime: "4 min",
    category: "Primeira consulta",
    body: [
      {
        p: "A recomendação mais aceita na odontopediatria é que a primeira visita aconteça por volta da erupção do primeiro dente ou, no máximo, até o primeiro ano de vida. Parece cedo, mas é justamente esse o objetivo: chegar antes do problema.",
      },
      {
        h: "Por que tão cedo?",
        p: "Nessa idade, a consulta é mais de orientação do que de tratamento. A família aprende a higienizar a boca do bebê, entende o papel da amamentação, da mamadeira e da chupeta, e recebe orientação sobre açúcar na dieta, que são os três fatores que mais influenciam o risco de cárie nos primeiros anos.",
      },
      {
        h: "O que acontece na consulta",
        p: "O bebê costuma ser examinado no colo do responsável, numa posição confortável para os dois. O exame é rápido, avalia os tecidos da boca, os dentes que já nasceram e o freio lingual. Não há procedimento invasivo em uma primeira visita de rotina.",
      },
      {
        h: "O ganho invisível",
        p: "A criança que conhece o consultório antes de sentir dor associa aquele lugar a algo tranquilo. Isso reduz drasticamente o medo em consultas futuras, e é o que permite tratar, anos depois, sem trauma.",
      },
    ],
  },
  {
    slug: "dente-de-leite-cariado",
    title: "Dente de leite cariado precisa ser tratado?",
    excerpt:
      "Ele vai cair de qualquer jeito, mas isso não significa que possa ser ignorado. O que está em jogo vai além do dente.",
    date: "2026-09-14",
    readingTime: "3 min",
    category: "Prevenção",
    body: [
      {
        p: "É uma das dúvidas mais comuns no consultório, e a resposta é direta: sim, precisa ser tratado. O dente de leite tem funções que não desaparecem só porque ele é temporário.",
      },
      {
        h: "O que o dente de leite faz",
        p: "Ele participa da mastigação, da fala e da estética do sorriso e, principalmente, guarda o espaço onde o dente permanente vai nascer. Um dente perdido cedo demais pode fazer os vizinhos se inclinarem, reduzindo esse espaço e causando apinhamento no futuro.",
      },
      {
        h: "O risco que não se vê",
        p: "Uma cárie profunda pode atingir a polpa e gerar infecção. Como o dente permanente está se formando logo abaixo, essa infecção pode afetar a formação do esmalte do sucessor, deixando manchas ou defeitos permanentes.",
      },
      {
        h: "E a dor",
        p: "Criança com dor de dente dorme mal, come mal e falta à escola. O tratamento precoce é quase sempre mais simples, mais rápido e mais barato do que a urgência que vem depois.",
      },
    ],
  },
  {
    slug: "atendimento-criancas-atipicas",
    title: "Como funciona o atendimento odontológico de crianças atípicas",
    excerpt:
      "Autismo, TDAH e outras condições exigem adaptação, não contenção. Veja o que muda na consulta.",
    date: "2026-09-14",
    readingTime: "4 min",
    category: "Acolhimento",
    body: [
      {
        p: "Crianças atípicas costumam chegar ao consultório odontológico depois de experiências difíceis em outros lugares. O ponto de partida aqui é outro: a consulta se adapta à criança, e não o contrário.",
      },
      {
        h: "Dessensibilização",
        p: "Antes de qualquer procedimento, são feitas consultas curtas e sem intervenção, apenas para a criança conhecer o ambiente, os sons, as luzes e os instrumentos. Cada visita avança um pouco mais, no ritmo dela.",
      },
      {
        h: "Previsibilidade",
        p: "A criança é informada do que vai acontecer a cada passo, com linguagem simples e, quando ajuda, apoio visual. Surpresa é o que mais gera reação. Previsibilidade é o que mais acalma.",
      },
      {
        h: "Ambiente e horário",
        p: "Quando necessário, o atendimento é marcado em horários de menor movimento, com redução de estímulo sonoro e visual e sem tempo de espera na recepção.",
      },
      {
        h: "A família junto",
        p: "Pais e responsáveis permanecem na sala e participam. Ninguém conhece os sinais da criança melhor do que eles, e essa informação orienta toda a conduta.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
