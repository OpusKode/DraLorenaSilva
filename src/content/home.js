// Conteúdo da página INÍCIO (home).
// Campos com sufixo "Html" aceitam tags HTML simples (<strong>, <em>, <br/>, <span class="em-serif">).
// Use a tag <span class="em-serif">palavra</span> para destacar uma palavra com a fonte editorial em itálico.

export const HOME = {
  hero: {
    overlineStrong: "Fisioterapia · Escoliose",                     // Texto em negrito antes do "Belém / PA"
    overlineRest: " · Belém / PA",                                  // Texto restante da chamada de localização
    h1Html: 'Fisioterapia<br />especializada em <span class="em-serif">escoliose.</span>', // Título principal do hero
    subHtml: 'Descobriu a escoliose em você ou em alguém da sua família? Você está no <strong>lugar certo!</strong> Avaliação detalhada, tratamento fisioterapêutico, colete 3D quando indicado e acompanhamento contínuo.', // Subtítulo do hero
    ctaPrimary: "Quero agendar uma avaliação",                      // Texto do botão principal (vai pro WhatsApp)
    ctaIgSup: "Siga no",                                            // Texto pequeno acima do @ no botão do Instagram
    ctaIgHandle: "@lorenafisioterapeuta_",                          // Handle do Instagram (exibição)
    ctaIgAria: "Instagram da Dra. Lorena Silva",                    // aria-label do botão do Instagram (acessibilidade)
    photoSrc: "img/01-hero-blazer-vinho.jpg",                       // Foto principal do hero
    photoAlt: "Dra. Lorena Silva",                                  // Alt da foto do hero
    photoCap: "Foto · Belém / PA",                                  // Legenda abaixo da foto
  },

  // BLOCO "Antes & Depois · Casos reais" (mostra 2 sliders na home)
  baShowcase: {
    eyebrow: "Antes & Depois · Casos reais",                        // Etiqueta acima do título
    titleHtml: 'Cada coluna,<br />uma <span class="em-serif">história.</span>', // Título da seção
    lede: "Pacientes que confiaram no processo e seguiram o plano. Histórias compartilhadas com autorização — para que você veja, antes de conversar com a gente, o que é possível.", // Parágrafo introdutório
    noteHtml: "<strong>★</strong> Cada coluna pede um plano próprio. Os resultados acima refletem dedicação ao tratamento e acompanhamento contínuo — não promessas universais.", // Rodapé da seção
    ctaLink: "Ver arquivo completo",                                // Texto do link para /resultados
  },

  // BLOCO "Apresentação · Prazer, Dra. Lorena Silva"
  intro: {
    photoSrc: "img/02-dra-evento-escoliose.jpg",                    // Foto da apresentação
    photoAlt: "Dra. Lorena Silva",                                  // Alt da foto
    photoCap: "Foto · Belém / PA",                                  // Legenda da foto
    eyebrow: "Apresentação",                                        // Etiqueta acima do título
    titleHtml: 'Prazer,<br />Dra. <span class="em-serif">Lorena Silva.</span>', // Título
    paragraphsHtml: [                                               // Parágrafos da apresentação
      "Desde que me formei em fisioterapia, meu objetivo sempre foi trazer o melhor tratamento para pessoas com escoliose.",
      "Minha vivência com pacientes com escoliose me faz buscar sempre estar atualizada para trazer o melhor resultado e <strong>frear essa doença tão silenciosa</strong>.",
      "Sempre trabalhei exclusivamente com pessoas com escoliose há mais de 6 anos — então você está no lugar certo.",
    ],
    ctaLink: "Conhecer a Dra.",                                     // Texto do link para /sobre
  },

  // FAIXA DE NÚMEROS (4 cards)
  stats: [
    { numHtml: "<em>SEAS</em>",        lab: "Itália",                          desc: "Scientific Exercise Approach to Scoliosis." },
    { numHtml: "<em>S4D</em>",         lab: "Brasil",                          desc: "Sistema integrado de avaliação postural." },
    { numHtml: "<em>6+</em> anos",     lab: "Exclusivamente em escoliose",     desc: "Crianças, adolescentes e adultos." },
    { numHtml: "Belém",                lab: "Atendimento",                     desc: "Presencial · Cremação · Síntese 21." },
  ],

  // BLOCO "Como funciona o tratamento · Cuidado em quatro tempos"
  process: {
    eyebrow: "Como funciona o tratamento",                          // Etiqueta acima do título
    titleHtml: "Cuidado<br />em quatro tempos.",                    // Título da seção
    ledeHtml: "O tratamento conservador da escoliose envolve técnicas específicas com exercícios fisioterapêuticos individualizados. O objetivo é <strong>estabilizar a progressão da curva</strong>, aliviar os sintomas associados e ajudar a manter a melhor postura possível.", // Parágrafo introdutório
    steps: [                                                        // 4 etapas — cada uma com sua ilustração
      { ill: "IllAvaliacao",      when: "Etapa 01", h: "Avaliação detalhada",       p: "Na primeira sessão coleto todos os dados possíveis: histórico, sintomas, postura, mobilidade e exames de imagem. É a base de todo o plano de tratamento." },
      { ill: "IllPlano",          when: "Etapa 02", h: "Plano individualizado",     p: "O plano é construído a partir do que mais precisa ser corrigido nos achados da avaliação. Sem receita pronta — um caminho desenhado para o seu caso." },
      { ill: "IllAcompanhamento", when: "Etapa 03", h: "Exercícios específicos",    p: "Exercícios destinados a cada tipo de curva, focando nas assimetrias para trazer o melhor alinhamento possível da coluna e, consequentemente, da estética corporal." },
      { ill: "IllEmCasa",         when: "Etapa 04", h: "Acompanhamento contínuo",   p: "Acompanhamento regular com seu compromisso em manter os exercícios em casa — avisando o cérebro que a nova maneira de se corrigir está acontecendo." },
    ],
  },

  // BLOCO "Colete 3D · Recurso terapêutico"
  brace: {
    photoSrc: "img/03-dra-com-colete-3d.jpg",                       // Foto da seção do colete
    photoAlt: "Dra. Lorena Silva com o colete 3D",                  // Alt da foto
    eyebrow: "Recurso terapêutico",                                 // Etiqueta acima do título
    titleHtml: 'O colete <span class="em-serif">3D.</span>',        // Título da seção
    lede: "Quando indicado, o colete é produzido sob medida por impressão 3D — mais leve, mais discreto e mais eficaz que os modelos convencionais. A indicação depende de critérios clínicos precisos, avaliados caso a caso.", // Parágrafo introdutório
    items: [
      { n: "01", lab: "Sob medida",            p: "Confeccionado em 3D, totalmente personalizado para a curva do seu corpo." },
      { n: "02", lab: "Indicação caso a caso", p: "Avaliação clínica completa decide se o colete faz sentido para o seu tipo de curva." },
    ],
    cta: "Quero saber se preciso do colete",                        // Texto do botão (vai pro WhatsApp)
    link: "Ver página completa",                                    // Texto do link para /colete-3d
  },

  // FAIXA DE NÚMEROS COLORIDA (4 cards no fundo accent)
  accentStats: [
    { num: "+200",    lab: "pacientes atendidos" },
    { num: "+6 anos", lab: "exclusivamente em escoliose" },
    { num: "3",       lab: "abordagens de tratamento" },
    { num: "Belém",   lab: "única especialista na região" },
  ],

  // BLOCO FINAL — "Próximo passo · Quero agendar uma avaliação"
  footCta: {
    eyebrow: "Próximo passo",                                       // Etiqueta acima do título
    titleHtml: 'Quero agendar<br />uma <span class="em">avaliação.</span>', // Título
    lede: "A avaliação detalhada é o ponto de partida. Mande mensagem pelo WhatsApp e marcamos um horário que cabe na sua semana.", // Parágrafo
    cta: "Agendar avaliação",                                       // Texto do botão
    side: [
      { k: "Endereço",  v: "Av. Conselheiro Furtado, 2865 · Síntese 21 · Sala 1902" },
      { k: "WhatsApp",  v: "(91) 98087-6011" },
      { k: "Cidade",    v: "Belém / Pará · Brasil" },
    ],
  },
};
