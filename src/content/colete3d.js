// Conteúdo da página COLETE 3D.
// Campos com sufixo "Html" aceitam tags HTML simples (<strong>, <br/>, <span class="em-serif">, <span class="em">).
// `ill` aponta para o nome da ilustração — opções: IllAvaliacao, IllPlano, IllAcompanhamento, IllEmCasa, IllScan, IllPrint3D.

export const COLETE3D = {
  head: {
    title: "O colete que acompanha o seu corpo.",                   // Título principal (h1)
    lede: "Indicado para casos específicos de escoliose, o colete 3D é produzido sob medida a partir do escaneamento do seu corpo — mais preciso, mais leve e mais discreto do que os modelos convencionais.", // Subtítulo
  },

  // SEÇÃO A — "O que é o Colete 3D"
  sectionA: {
    photo: { src: "img/03-dra-com-colete-3d.jpg", alt: "Dra. Lorena Silva com o colete 3D" }, // Foto da seção
    titleHtml: "Feito para o seu corpo,<br />não para um molde genérico.", // Título
    p1: "O colete 3D não é um produto de prateleira. Ele é produzido por impressão tridimensional a partir de um escaneamento ou moldagem precisa do tronco — o que significa que ele se encaixa com exatidão nas curvas da sua coluna.", // Primeiro parágrafo
    p2: "Isso muda tudo: o ajuste é mais preciso, o uso é mais confortável, e a adesão ao tratamento aumenta — porque é muito mais fácil manter o uso de algo que foi feito exatamente para você.", // Segundo parágrafo
    feats: [
      ["Produção",    "Impressão 3D"],
      ["Ajuste",      "Sob medida"],
      ["Material",    "Leve e resistente"],
      ["Ventilação",  "Superior ao convencional"],
    ],
  },

  // SEÇÃO B — "Quando é indicado" (fundo escuro)
  sectionB: {
    photo: { src: "img/06-esqueletos.jpg", alt: "Raio-X de coluna com escoliose" },
    titleHtml: "Não é para todo mundo —<br />e isso é bom saber.",
    p1: "A indicação do colete depende de critérios clínicos bem definidos: principalmente o ângulo de Cobb — a medida da curvatura no raio-X —, a fase de crescimento do paciente e o histórico de progressão da curva.",
    p2: "Em geral, é indicado para curvas entre 20° e 45° em pacientes ainda em crescimento ativo. Fora dessa janela, outros recursos podem ser mais eficazes. A avaliação é o que define — sem atalhos, sem regras fixas.",
    feats: [
      ["Ângulo de Cobb", "20° a 45° (referência)"],
      ["Fase",            "Crescimento ativo"],
      ["Avaliação",       "Clínica e por imagem"],
      ["Decisão",         "Caso a caso"],
    ],
  },

  // SEÇÃO C — "Como funciona o processo" (4 etapas)
  process: {
    titleHtml: "Do primeiro contato<br />ao colete em uso.",        // Título da seção
    lede: "O processo começa bem antes da entrega do colete — e continua depois. Cada etapa foi pensada para que você entenda o que está acontecendo e se sinta seguro em todo o caminho.", // Parágrafo introdutório
    steps: [
      { ill: "IllAvaliacao",      when: "Etapa 01", h: "Avaliação clínica",            p: "Na consulta inicial, analisamos a curvatura, os exames de imagem e o histórico do paciente. É aqui que confirmamos — ou descartamos — a indicação do colete." },
      { ill: "IllScan",           when: "Etapa 02", h: "Escaneamento e medição",       p: "Fazemos a moldagem ou escaneamento preciso do tronco para capturar a forma exata do corpo. Esse dado é a base de toda a produção — nada é genérico aqui." },
      { ill: "IllPrint3D",        when: "Etapa 03", h: "Produção sob medida",          p: "Com os dados do escaneamento, o colete é fabricado por impressão 3D — uma peça única, pensada exclusivamente para o seu corpo e para a sua curva." },
      { ill: "IllAcompanhamento", when: "Etapa 04", h: "Adaptação e acompanhamento",   p: "A entrega do colete é o começo, não o fim. Acompanhamos de perto a adaptação, ajustamos o que precisar e integramos com a fisioterapia ativa ao longo do tratamento." },
    ],
  },

  // SEÇÃO D — "Vantagens em relação ao colete convencional" (6 cards)
  advantages: {
    titleHtml: "Por que o 3D<br />faz diferença.",
    lede: "O colete convencional funciona, mas tem limites. O 3D foi desenvolvido para resolver exatamente o que tornava o uso difícil — e o tratamento menos eficaz.",
    items: [
      { letter: "A", lab: "Leveza",     name: "Mais leve.",                    desc: "Produzido com materiais de alta performance, pesa menos que o modelo convencional — o que torna o uso diário mais fácil de manter." },
      { letter: "B", lab: "Ventilação", name: "Respira melhor.",               desc: "A estrutura aberta da impressão 3D permite circulação de ar muito superior à do colete tradicional." },
      { letter: "C", lab: "Discrição",  name: "Passa despercebido.",           desc: "Ajuste preciso ao corpo e menor volume: fica mais discreto sob a roupa — algo que importa muito no dia a dia, especialmente para adolescentes." },
      { letter: "D", lab: "Precisão",   name: "Feito para você.",              desc: "Cada colete é produzido a partir do escaneamento do corpo real do paciente — não de uma forma padronizada ou aproximada." },
      { letter: "E", lab: "Aderência",  name: "Mais fácil de usar.",           desc: "Quanto mais confortável, mais o paciente usa. Maior aderência ao protocolo significa resultado mais consistente ao longo do tempo." },
      { letter: "F", lab: "Evolução",   name: "Acompanha o crescimento.",      desc: "Reavaliações regulares permitem verificar e ajustar o colete conforme o corpo muda — o tratamento não fica parado enquanto a pessoa cresce." },
    ],
  },

  // BLOCO FINAL "Próximo passo · Quer saber se o colete 3D é indicado para você?"
  footCta: {
    eyebrow: "Próximo passo",
    titleHtml: 'Quer saber se o colete 3D<br />é indicado para <span class="em">você?</span>',
    lede: "Só uma avaliação clínica pode responder isso com segurança. Mande mensagem e marcamos um horário.",
    cta: "Quero saber se o colete 3D é indicado para mim",
    side: [
      { k: "WhatsApp", v: "(91) 98087-6011" },
      { k: "Endereço", v: "Ed. Empresarial Acrópole · Sala 1011 · Belém / PA" },
    ],
  },
};
