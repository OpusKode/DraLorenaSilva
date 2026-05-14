// Conteúdo da página TRATAMENTOS.
// `photoShape` aceita "arched" (arco na parte de cima) ou "arched-bottom" (arco na parte de baixo).
// `imgFit` aceita "contain" (a foto aparece inteira) ou pode ser omitido (a foto preenche o quadro).
// `dark` = true inverte as cores da seção (fundo escuro).
// `flip` = true coloca a foto à direita e o texto à esquerda.

export const TRATAMENTOS = {
  head: {
    eyebrow: "Tratamentos",                          // Etiqueta acima do título (não exibida no head atual)
    title: "Três caminhos de cuidado.",                             // Título principal (h1)
    lede: "Avaliação detalhada, fisioterapia especializada e — quando indicado — colete 3D. O tratamento é sempre individualizado, de acordo com a gravidade da curva.", // Subtítulo
    code: "III / VII",                                              // Código do capítulo (não exibido no head atual)
    location: "Belém / PA",                                         // Localização (não exibida no head atual)
  },

  // 3 seções alternando claro/escuro
  sections: [
    {
      id: "avaliacao",                                              // ID interno da seção
      h: "Avaliação completa.",                                     // Título da seção
      img: "img/04-atendimento-paciente.jpg",                       // Foto
      flip: false,                                                  // Foto à esquerda
      photoShape: "arched",                                         // Foto com arco superior
      p1: "O tratamento começa com uma avaliação detalhada, onde coleto todos os dados possíveis do paciente — histórico, sintomas, exame postural e análise de mobilidade.", // Primeiro parágrafo
      p2: "É nessa primeira sessão que me baseio para construir o plano de tratamento. Quanto mais completa a avaliação, mais precisa fica a próxima etapa.", // Segundo parágrafo
      feats: [                                                      // 4 destaques (rótulo + valor)
        ["Duração",    "60 minutos"],
        ["Avaliação",  "Postural · funcional"],
        ["Exames",     "Análise de imagem"],
        ["Resultado",  "Plano personalizado"],
      ],
      dark: false,                                                  // Fundo claro
    },
    {
      id: "fisio",
      h: "Fisioterapia especializada.",
      img: "img/05-paciente-com-progressao.jpg",
      flip: true,                                                   // Foto à direita
      photoShape: "arched-bottom",                                  // Arco inferior
      imgFit: "contain",                                            // Mostra a foto inteira (sem cortar)
      p1: "O plano de tratamento é desenvolvido de acordo com o que mais você precisa corrigir nos achados da avaliação. Combinamos os métodos SEAS (Itália) e S4D (Brasil).",
      p2: "Os exercícios específicos são destinados a cada tipo de curva, com foco nas assimetrias — trazendo o melhor alinhamento possível dessa coluna e, consequentemente, da estética corporal.",
      feats: [
        ["Métodos",     "SEAS · S4D"],
        ["Frequência",  "Semanal · quinzenal"],
        ["Para quem",   "Crianças · adolescentes · adultos"],
        ["Sessões",     "60 minutos"],
      ],
      dark: true,                                                   // Fundo escuro
    },
    {
      id: "colete",
      h: "O colete 3D, quando faz sentido.",
      img: "img/03-dra-com-colete-3d.jpg",
      flip: false,
      photoShape: "arched",
      p1: "A utilização do colete, quando indicado, é essencial para auxiliar na correção da curva — principalmente em pacientes com curvas moderadas a graves no estirão do crescimento.",
      p2: "É confeccionado sob medida em 3D, com adaptação acompanhada de perto, e sempre combinado com a fisioterapia ativa. Em casos graves, a intervenção cirúrgica pode se fazer necessária.",
      feats: [
        ["Indicação",   "Avaliação clínica"],
        ["Adaptação",   "Acompanhada de perto"],
        ["Combinação",  "Sempre com fisioterapia"],
        ["Sob medida",  "Confeccionado em 3D"],
      ],
      dark: false,
    },
  ],

  // BLOCO FINAL "Próximo passo · Vamos conversar sobre o seu caso?"
  footCta: {
    eyebrow: "Próximo passo",
    titleHtml: 'Vamos conversar<br />sobre o seu <span class="em">caso?</span>',
    lede: "Cada coluna pede um plano. A avaliação é o primeiro passo — sem pressa, sem promessas vazias.",
    cta: "Agendar avaliação",
    side: [
      { k: "WhatsApp", v: "(91) 98087-6011" },
      { k: "Endereço", v: "Síntese 21 · Sala 1902 · Belém / PA" },
    ],
  },
};
