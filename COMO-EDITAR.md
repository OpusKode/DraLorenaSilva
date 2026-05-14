# Como editar o site da Dra. Lorena Silva

## 👋 Bem-vindo!

Este site foi organizado de um jeito especial para que você possa fazer as edições mais comuns sozinha — trocar um texto, atualizar o telefone, adicionar uma pergunta no FAQ, colocar uma nova foto — sem precisar saber programar.

Todo o conteúdo do site (textos, links, fotos, perguntas) está separado em arquivos próprios, dentro das pastas `src/content/` e `src/config/`. **As edições devem ser feitas apenas nesses arquivos.** Outros arquivos do projeto controlam *como* o site funciona — se forem alterados sem cuidado, o site pode parar de funcionar.

Sempre que tiver dúvida, abra este guia e procure a seção que mais combina com o que você quer mudar. Se ainda assim ficar em dúvida, peça ajuda ao seu desenvolvedor antes de salvar a alteração.

---

## 📂 Onde ficam os arquivos para editar

| O que você quer mudar                  | Arquivo para abrir            |
| -------------------------------------- | ----------------------------- |
| Textos da página inicial               | `src/content/home.js`         |
| Textos da página Sobre                 | `src/content/sobre.js`        |
| Textos da página Tratamentos           | `src/content/tratamentos.js`  |
| Fotos do antes/depois (Resultados)     | `src/content/resultados.js`   |
| Textos da página Colete 3D             | `src/content/colete3d.js`     |
| Perguntas e respostas do FAQ           | `src/content/faq.js`          |
| Endereço, telefone e localização       | `src/content/contato.js`      |
| Textos do menu lateral e botões fixos  | `src/content/site.js`         |
| Link do WhatsApp e Instagram           | `src/config/links.js`         |
| Itens do menu de navegação             | `src/config/nav.js`           |
| Cores do tema                          | `src/config/theme.js`         |
| Imagens e fotos                        | pasta `public/img/`           |

---

## ✏️ Como editar cada tipo de conteúdo

Antes de começar, abra o arquivo no programa **VS Code**, **Notepad++** ou qualquer editor de texto simples (evite o Word — ele estraga o arquivo).

### 📝 3.1 Trocar um texto

Os textos ficam sempre **entre aspas duplas** (`"..."`). Você só pode mudar o que está dentro das aspas — nunca apague as aspas, as vírgulas, as chaves `{ }` nem os colchetes `[ ]`.

Exemplo em `src/content/home.js`:

```js
hero: {
  ctaPrimary: "Quero agendar uma avaliação",   // ← mude aqui
  ctaIgSup: "Siga no",                          // ← mude aqui
  ctaIgHandle: "@lorenafisioterapeuta_",        // ← mude aqui
},
```

Para trocar o texto do botão principal, basta mudar `"Quero agendar uma avaliação"` para o novo texto, mantendo as aspas:

```js
ctaPrimary: "Agendar minha consulta",          // ← novo texto
```

⚠️ **Atenção:**
- Não apague a vírgula no final da linha.
- Não apague as aspas.
- Se o seu texto tiver aspas dentro, troque por aspas simples: `"frase com 'destaque' aqui"`.

---

### 📞 3.2 Trocar o número do WhatsApp

Abra `src/config/links.js`:

```js
export const WHATSAPP = "https://wa.me/5591980876011";    // ← número aqui
export const INSTAGRAM = "https://instagram.com/lorenafisioterapeuta_";
```

O número do WhatsApp segue este formato:

```
https://wa.me/  55   91   98087-6011
                │    │         │
                │    │         └─ número (sem traço nem espaço)
                │    └────────── DDD da cidade
                └─────────────── DDI do Brasil (sempre 55)
```

Tudo grudado, sem traços, sem espaços, sem parênteses.

**Exemplo de troca:** se o novo número for (11) 99876-5432, fica:

```js
export const WHATSAPP = "https://wa.me/5511998765432";    // ← novo número
```

Para o Instagram, basta trocar o `lorenafisioterapeuta_` pelo novo nome de usuário (sem o `@`):

```js
export const INSTAGRAM = "https://instagram.com/novonome";
```

---

### ❓ 3.3 Adicionar uma nova pergunta ao FAQ

Abra `src/content/faq.js`. Você vai ver uma lista assim:

```js
export const FAQ_ITEMS = [
  { pergunta: "Atende online?",                       resposta: "Atualmente o atendimento é presencial em Belém..." },
  { pergunta: "Em quanto tempo vejo resultado?",      resposta: "Depende do tipo de curva, idade e adesão ao plano..." },
  { pergunta: "Preciso ter exame antes de marcar?",   resposta: "Não é obrigatório, mas raio-x recente facilita..." },
  // ... outras perguntas ...
  { pergunta: "Os planos cobrem o atendimento?",      resposta: "O atendimento é particular. Posso emitir nota fiscal..." },
];
```

Cada pergunta é um **bloco** que começa com `{` e termina com `}`, separado dos outros por vírgula.

**Para adicionar uma nova pergunta**, copie um bloco existente e cole logo antes do `]` final, lembrando da vírgula:

```js
export const FAQ_ITEMS = [
  { pergunta: "Atende online?",                       resposta: "Atualmente o atendimento é presencial em Belém..." },
  // ... outras perguntas ...
  { pergunta: "Os planos cobrem o atendimento?",      resposta: "O atendimento é particular. Posso emitir nota fiscal..." },
  { pergunta: "Qual a duração da sessão?",            resposta: "Cada sessão dura 60 minutos." },  // ← nova pergunta
];
```

**Para remover uma pergunta**, apague a linha inteira (do `{` até a vírgula no final).

---

### 🖼️ 3.4 Trocar uma imagem

Todas as imagens ficam na pasta **`public/img/`**.

Para trocar uma foto (por exemplo, a foto principal do hero):

1. Abra a pasta `public/img/` e veja o nome do arquivo atual — por exemplo `01-hero-blazer-vinho.jpg`.
2. Prepare a nova foto no seu computador.
3. **Renomeie a nova foto com o mesmo nome do arquivo antigo** — exatamente igual, inclusive maiúsculas, minúsculas e o `.jpg` no final.
4. Arraste a nova foto para dentro da pasta `public/img/`, substituindo a antiga.

✅ **Vantagem:** se o nome ficar igual, você não precisa mexer em nenhum outro arquivo.

⚠️ **Atenção:**
- O nome precisa ser **exatamente** o mesmo (`01-hero-blazer-vinho.jpg` é diferente de `01-Hero-Blazer-Vinho.jpg`).
- O formato precisa ser o mesmo (`.jpg`, `.png`). Se o original é `.jpg`, a nova também precisa ser `.jpg`.
- Recomendo manter a proporção parecida com a foto original para não estragar o layout.

Se preferir usar um nome diferente, você terá que **abrir o arquivo de conteúdo** correspondente e atualizar o caminho. Por exemplo, em `src/content/home.js`:

```js
hero: {
  photoSrc: "img/01-hero-blazer-vinho.jpg",   // ← caminho da foto do hero
  // ...
}
```

Troque para o novo nome:

```js
photoSrc: "img/minha-nova-foto.jpg",          // ← caminho atualizado
```

---

### 🏥 3.5 Adicionar uma nova foto no antes/depois (Resultados)

Abra `src/content/resultados.js`:

```js
export const CASOS = [
  { id: 1, antes: "img/resultados/caso1-antes.jpg", depois: "img/resultados/caso1-depois.jpg" },
  { id: 2, antes: "img/resultados/caso2-antes.jpg", depois: "img/resultados/caso2-depois.jpg" },
  { id: 3, antes: "img/resultados/caso3-antes.jpg", depois: "img/resultados/caso3-depois.jpg" },
  { id: 4, antes: "img/resultados/caso4-antes.jpg", depois: "img/resultados/caso4-depois.jpg" },
];
```

**Passo a passo para adicionar um novo caso:**

1. Tenha as duas fotos prontas: uma "antes" e uma "depois" do mesmo paciente.
2. Renomeie os arquivos seguindo o padrão: `caso5-antes.jpg` e `caso5-depois.jpg` (use o próximo número da sequência).
3. Coloque as duas fotos dentro da pasta `public/img/resultados/`.
4. No arquivo `src/content/resultados.js`, copie o último bloco e adicione com o novo número:

```js
export const CASOS = [
  { id: 1, antes: "img/resultados/caso1-antes.jpg", depois: "img/resultados/caso1-depois.jpg" },
  { id: 2, antes: "img/resultados/caso2-antes.jpg", depois: "img/resultados/caso2-depois.jpg" },
  { id: 3, antes: "img/resultados/caso3-antes.jpg", depois: "img/resultados/caso3-depois.jpg" },
  { id: 4, antes: "img/resultados/caso4-antes.jpg", depois: "img/resultados/caso4-depois.jpg" },
  { id: 5, antes: "img/resultados/caso5-antes.jpg", depois: "img/resultados/caso5-depois.jpg" },  // ← novo caso
];
```

**Para remover um caso**, apague a linha inteira correspondente.

⚠️ **Atenção:** sempre dê autorização do(a) paciente antes de publicar fotos antes/depois.

---

### 🎨 3.6 Trocar a cor de destaque do site

O site vem com **8 paletas prontas** definidas em `src/config/theme.js`:

```js
export const ACCENTS = [
  { id: "bordo",    label: "Bordô",    color: "#6E1F2A" },  // ← cor atual padrão
  { id: "vinho",    label: "Vinho",    color: "#4A1018" },
  { id: "cobre",    label: "Cobre",    color: "#9C4A28" },
  { id: "musgo",    label: "Musgo",    color: "#3D5740" },
  { id: "tinta",    label: "Tinta",    color: "#1F2845" },
  { id: "caramelo", label: "Caramelo", color: "#A36F1A" },
  { id: "rose",     label: "Rosé",     color: "#B05B6A" },
  { id: "azeitona", label: "Azeitona", color: "#5A5A2D" },
];
```

A **cor padrão** do site (aquela que aparece quando alguém abre o site pela primeira vez) está definida no arquivo `index.html` na raiz do projeto, na linha:

```html
<html lang="pt-BR" data-theme="light" data-accent="bordo">
                                                    ↑
                                              cor padrão aqui
```

**Para trocar a cor padrão**, mude `bordo` para o `id` de qualquer outra paleta da lista — por exemplo, `musgo`:

```html
<html lang="pt-BR" data-theme="light" data-accent="musgo">
```

**Para adicionar uma cor nova** à lista, copie um bloco existente e adicione na lista, com:
- `id`: nome curto, só letras minúsculas e sem espaços (será usado pelo sistema)
- `label`: nome bonito que aparece no seletor
- `color`: o código hexadecimal da cor (começa com `#`)

```js
export const ACCENTS = [
  { id: "bordo",    label: "Bordô",    color: "#6E1F2A" },
  // ... outras cores ...
  { id: "azeitona", label: "Azeitona", color: "#5A5A2D" },
  { id: "oceano",   label: "Oceano",   color: "#1B5E7E" },  // ← cor nova
];
```

⚠️ **Importante:** apenas as 8 cores originais foram testadas com cuidado. Cores muito claras podem ficar pouco legíveis em alguns botões. Se for adicionar uma cor nova, peça para o desenvolvedor revisar antes.

---

## 🚫 O que NÃO mexer

Os arquivos e pastas abaixo controlam **como o site funciona** (a "engrenagem" por trás). Editar qualquer um deles por acidente pode tirar o site do ar.

**Não abrir nem editar:**

- ❌ Qualquer arquivo dentro de `src/components/`
- ❌ Qualquer arquivo dentro de `src/hooks/`
- ❌ Qualquer arquivo dentro de `src/pages/`
- ❌ O arquivo `src/App.jsx`
- ❌ O arquivo `src/main.jsx`
- ❌ O arquivo `src/styles.css`
- ❌ O arquivo `index.html` (exceto a linha do `data-accent` explicada acima)
- ❌ Os arquivos `vite.config.js`, `netlify.toml`, `package.json`, `package-lock.json`
- ❌ A pasta `node_modules/` (nunca!)
- ❌ A pasta `dist/` (é gerada automaticamente)

Resumindo: **só mexa nas pastas `src/content/`, `src/config/` e `public/img/`.** Tudo o que precisa do seu carinho está lá.

---

## 🚀 Como publicar as alterações

Após salvar os arquivos editados:

1. Procure o arquivo **`PUBLICAR.bat`** na pasta do site
2. Dê **dois cliques** nele
3. Uma janela preta vai abrir e mostrar o progresso
4. Quando aparecer **"Pronto! O site será atualizado em alguns minutos"**, pode fechar
5. Aguarde 1-2 minutos e acesse o site para conferir

> **Mac:** use o arquivo `PUBLICAR.sh` no lugar do `PUBLICAR.bat`

> ⚠️ **Atenção:** o computador precisa estar conectado à internet para publicar.

---

## 💡 Dicas finais

- 📋 **Sempre faça uma cópia de segurança** antes de alterar um arquivo. Basta copiar o arquivo e colar com `-backup` no final do nome.
- 🔍 **Use Ctrl+F** dentro do editor para encontrar rapidamente o texto que você quer mudar.
- 👀 **Confira no site** depois de cada publicação — abra o site no navegador e veja se ficou como você esperava.
- 🆘 **Em caso de dúvida**, pare e pergunte. É muito mais rápido confirmar com o desenvolvedor antes de salvar do que arrumar o site depois.

Boa edição! 💪
