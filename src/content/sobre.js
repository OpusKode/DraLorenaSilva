// Conteúdo da página SOBRE.
// Campos com sufixo "Html" aceitam tags HTML simples (<strong>, <em>, <br/>).

export const SOBRE = {
  head: {
    title: "Prazer, Dra. Lorena Silva.",                            // Título principal (h1)
    lede: "Desde que me formei em fisioterapia, meu objetivo sempre foi trazer o melhor tratamento para pessoas com escoliose.", // Subtítulo
  },

  // 3 parágrafos da história / trajetória
  paragraphsHtml: [
    "Sou fisioterapeuta formada em 2020 e minha trajetória com o <strong>tratamento da escoliose</strong> começou ainda durante a graduação. Entre 2017 e 2019, atuei como monitora nos primeiros cursos do <strong>Método S4D – Brasil</strong>, realizados em Belém (PA), o que me proporcionou contato precoce com <strong>abordagens específicas</strong> para o tratamento da escoliose.",
    "Em 2022, realizei minha capacitação na <strong>abordagem SEAS</strong> (Scientific Exercise Approach to Scoliosis), método desenvolvido na Itália e <strong>reconhecido internacionalmente</strong> no <strong>tratamento conservador da escoliose.</strong>",
    "Desde então, venho acompanhando pacientes com escoliose utilizando <strong>exercícios específicos baseados em evidências científicas</strong>, com foco no <strong>controle da progressão da curva</strong> e na <strong>melhora da qualidade de vida</strong>. Meu objetivo é ajudar pacientes e famílias a compreender melhor a escoliose e enfrentar o tratamento com mais <strong>segurança e orientação</strong>.",
  ],

  photo: {
    src: "img/02-dra-evento-escoliose.jpg",                         // Foto da Dra. em evento
    alt: "Dra. Lorena em evento",                                   // Alt da foto
  },

  // 4 cards com formação, método, experiência e atendimento
  creds: [
    { letter: "A", lab: "Formação",     name: "SEAS · Itália",  desc: "Scientific Exercise Approach to Scoliosis — abordagem ativa, baseada em evidências." },
    { letter: "B", lab: "Método",       name: "S4D · Brasil",   desc: "Sistema integrado de avaliação postural e tratamento da escoliose." },
    { letter: "C", lab: "Experiência",  name: "6+ anos",        desc: "Atendimento focado em escoliose — adolescentes, crianças e adultos." },
    { letter: "D", lab: "Atendimento",  name: "Belém / PA",     desc: "Presencial · Edifício Síntese 21, sala 1902 — Cremação." },
  ],

  // BLOCO FINAL "Próximo passo · Quer entender o seu caso?"
  footCta: {
    eyebrow: "Próximo passo",                                       // Etiqueta acima do título
    titleHtml: 'Quer entender<br />o seu <span class="em">caso?</span>', // Título
    lede: "A avaliação é particular e leva cerca de 60 minutos. Marque pelo WhatsApp.", // Parágrafo
    cta: "Agendar avaliação",                                       // Texto do botão (WhatsApp)
    side: [
      { k: "WhatsApp", v: "(91) 98087-6011" },
      { k: "Cidade",   v: "Belém / Pará" },
    ],
  },
};
