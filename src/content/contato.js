// Conteúdo da página CONTATO.
// Para mudar o endereço, atualize tanto os campos `lines/small` quanto as coordenadas `map.lat/lng`
// e o texto do popup do mapa.

export const CONTATO = {
  head: {
    title: "Vamos conversar.",                                      // Título principal (h1)
    lede: "Atendimento presencial em Belém / PA. Marque sua avaliação direto pelo WhatsApp.", // Subtítulo
  },

  // Cartão de endereço (esquerda)
  endereco: {
    capStrong: "Endereço",                                          // Etiqueta em negrito do topo do cartão
    capRight: "★ Belém / PA",                                       // Texto à direita do cartão
    linhas: [
      "Av. Conselheiro Furtado, 2865",                              // Linha 1 do endereço
      "Ed. Síntese 21 · Sala 1902",                                 // Linha 2 do endereço
    ],
    small: "Cremação · Belém / PA · CEP 66063-060",                 // Texto pequeno final do cartão
  },

  // Botões de contato (abaixo do cartão de endereço)
  contatos: {
    whatsapp: { lab: "WhatsApp",  v: "(91) 98087-6011" },           // Botão WhatsApp
    instagram: { lab: "Instagram", v: "@lorenafisioterapeuta_" },   // Botão Instagram
  },

  // Legenda do mapa (canto superior direito do quadro do mapa)
  mapCap: {
    left: "Mapa · Cremação",                                        // Texto à esquerda
    rightHtml: "<strong>★ FIG. C</strong>",                         // Texto à direita
  },

  // Configuração do mapa Leaflet
  map: {
    lat: -1.4558,                                                   // Latitude do consultório
    lng: -48.4902,                                                  // Longitude do consultório
    initialZoom: 13,                                                // Zoom inicial (antes do fly-to)
    finalZoom: 16,                                                  // Zoom final após o fly-to
    flyDelayMs: 400,                                                // Tempo (ms) antes do fly-to começar
    googleMapsUrl: "https://maps.google.com/?q=Av.+Conselheiro+Furtado,+2865,+Bel%C3%A9m+PA", // Link "Abrir no Google Maps"
    popup: {
      tag: "Fisioterapia · Escoliose",                              // Etiqueta no topo do popup
      name: "Dra. Lorena Silva",                                    // Nome no popup
      addrHtml: "Av. Conselheiro Furtado, 2865<br>Ed. Síntese 21 · Sala 1902<br>Cremação · Belém / PA", // Endereço no popup (use <br> para quebrar linhas)
      btn: "Abrir no Google Maps →",                                // Texto do botão do popup
    },
  },
};
