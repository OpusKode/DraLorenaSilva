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
      "Av. Gov. José Malcher, 1077",                              // Linha 1 do endereço
      "Ed. Empresarial Acrópole · Sala 1011",                                 // Linha 2 do endereço
    ],
    small: "Nazaré · Belém / PA · CEP 66055-260",                 // Texto pequeno final do cartão
  },

  // Botões de contato (abaixo do cartão de endereço)
  contatos: {
    whatsapp: { lab: "WhatsApp",  v: "(91) 98087-6011" },           // Botão WhatsApp
    instagram: { lab: "Instagram", v: "@lorenafisioterapeuta_" },   // Botão Instagram
  },

  // Legenda do mapa (canto superior direito do quadro do mapa)
  mapCap: {
    left: "Mapa · Nazaré",                                        // Texto à esquerda
    rightHtml: "<strong>★ Endereço</strong>",                         // Texto à direita
  },

  // Configuração do mapa Leaflet
  map: {
    lat: -1.44998,                                                   // Latitude do consultório
    lng: -48.48379,                                                  // Longitude do consultório
    initialZoom: 13,                                                // Zoom inicial (antes do fly-to)
    finalZoom: 16,                                                  // Zoom final após o fly-to
    flyDelayMs: 400,                                                // Tempo (ms) antes do fly-to começar
    googleMapsUrl: "https://maps.app.goo.gl/Mz39GFVqTp4MzeLh7", // Link "Abrir no Google Maps"
    popup: {
      tag: "Fisioterapia · Escoliose",                              // Etiqueta no topo do popup
      name: "Dra. Lorena Silva",                                    // Nome no popup
      addrHtml: "Av. Gov. José Malcher, 1077<br>Ed. Empresarial Acrópole · Sala 1011<br>Nazaré · Belém / PA", // Endereço no popup (use <br> para quebrar linhas)
      btn: "Abrir no Google Maps →",                                // Texto do botão do popup
    },
  },
};