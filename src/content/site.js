// Textos que aparecem em vários lugares do site (chrome do site).

export const SITE = {
  // Cabeçalho da sidebar (e mobile header)
  brand: {
    name: "Dra. Lorena Silva",                                      // Nome em destaque
    tag: "Fisioterapia · Escoliose",                                // Tag abaixo do nome
  },

  sidebar: {
    statusPill: "Atendendo · Belém",                                // Pílula de status no topo
    cta: "Agendar avaliação",                                       // Botão CTA do rodapé da sidebar (vai pro WhatsApp)
    ariaWhatsapp: "WhatsApp",                                       // aria-label do ícone de WhatsApp
    ariaInstagram: "Instagram",                                     // aria-label do ícone de Instagram
    copyright: "© 2026",                                            // Copyright à esquerda
    creditedBy: "FORJARIS",                                           // Credito à direita
  },

  mobileHeader: {
    menu: "Menu",                                                   // Rótulo do botão de menu mobile
    menuAria: "Abrir menu",                                         // aria-label do botão de menu mobile
  },

  // Botão flutuante (canto inferior direito em mobile, ou similar)
  ctaFab: {
    label: "Agendar avaliação",                                     // Texto do botão flutuante
    aria: "Agendar avaliação",                                      // aria-label do botão flutuante
  },

  // Painel de personalização de tema (canto inferior direito)
  themePicker: {
    aria: "Personalizar tema",                                      // aria-label do botão de abrir o painel
    dialogAria: "Personalizar tema",                                // aria-label do painel
    title: "Tema",                                                  // Título do painel
    cap: "θ Config",                                                // Caption pequeno do topo do painel (vai junto com ★)
    modeLabel: "Modo",                                              // Rótulo "Modo"
    modeLight: "Claro",                                             // Opção modo claro
    modeDark: "Escuro",                                             // Opção modo escuro
    paletteLabel: "Paleta editorial",                               // Rótulo da seção de paletas
    footNote: "Ajuste o tema · 8 paletas editoriais. Sua escolha fica salva no navegador.", // Texto no rodapé do painel
  },
};
