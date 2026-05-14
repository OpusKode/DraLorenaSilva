// Conteúdo da página RESULTADOS (antes/depois).
// Para adicionar fotos reais, coloque os arquivos em public/img/resultados/
// seguindo o padrão casoN-antes.jpg / casoN-depois.jpg e atualize os caminhos abaixo.
// Cada caso vira um slider antes/depois.

export const CASOS = [
  { id: 1, antes: "img/resultados/caso1-antes.jpg", depois: "img/resultados/caso1-depois.jpg" }, // Caso 1
  { id: 2, antes: "img/resultados/caso2-antes.jpg", depois: "img/resultados/caso2-depois.jpg" }, // Caso 2
  { id: 3, antes: "img/resultados/caso3-antes.jpg", depois: "img/resultados/caso3-depois.jpg" }, // Caso 3
  { id: 4, antes: "img/resultados/caso4-antes.jpg", depois: "img/resultados/caso4-depois.jpg" }, // Caso 4
];

// Textos da página de resultados
export const RESULTADOS = {
  head: {
    title: "Pacientes reais.",                                      // Título principal (h1)
    lede: "Cada coluna é única. Aqui ficam alguns casos acompanhados ao longo do tempo, sempre com autorização.", // Subtítulo
  },

  // BLOCO FINAL "Próximo passo · Quer entender o seu caso?"
  footCta: {
    eyebrow: "Próximo passo",
    titleHtml: 'Quer entender<br />o seu <span class="em">caso?</span>',
    lede: "Cada coluna pede um plano. A avaliação é o primeiro passo.",
    cta: "Agendar avaliação",
    side: [
      { k: "WhatsApp", v: "(91) 98087-6011" },
    ],
  },
};
