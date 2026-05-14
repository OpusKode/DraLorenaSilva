// Conteúdo da página FAQ.
// Para adicionar/remover perguntas, edite o array FAQ_ITEMS.
// O número exibido em cada item segue a ordem natural do array (1, 2, 3, ...).

export const FAQ = {
  head: {
    title: "Perguntas frequentes.",                                 // Título principal (h1)
  },

  // Cartão pequeno acima da lista de perguntas
  foot: {
    title: "Ficou com alguma dúvida que não está aqui?",            // Título do cartão
    lede: "Mande uma mensagem direto pelo WhatsApp — respondemos pessoalmente.", // Texto do cartão
    cta: "Mande mensagem",                                          // Texto do botão (vai pro WhatsApp)
  },
};

// Lista de perguntas e respostas
export const FAQ_ITEMS = [
  { pergunta: "Atende online?",                       resposta: "Atualmente o atendimento é presencial em Belém. Em casos específicos, entre em contato pra conversarmos." },
  { pergunta: "Em quanto tempo vejo resultado?",      resposta: "Depende do tipo de curva, idade e adesão ao plano. Em geral, mudanças posturais aparecem nos primeiros 2 a 3 meses." },
  { pergunta: "Preciso ter exame antes de marcar?",   resposta: "Não é obrigatório, mas raio-x recente facilita muito a avaliação inicial. Posso orientar caso ainda não tenha feito." },
  { pergunta: "Atende crianças?",                     resposta: "Sim. A escoliose pode aparecer cedo, e tratar na fase de crescimento faz toda a diferença." },
  { pergunta: "Funciona para adultos?",               resposta: "Sim. Em adultos, o foco é estabilização da curva, alívio de dor e ganho de função." },
  { pergunta: "O colete 3D é sempre necessário?",     resposta: "Não. A indicação depende da gravidade da curva e da fase de crescimento. É decidido caso a caso." },
  { pergunta: "Os planos cobrem o atendimento?",      resposta: "O atendimento é particular. Posso emitir nota fiscal e recibo para reembolso, conforme o seu plano." },
];
