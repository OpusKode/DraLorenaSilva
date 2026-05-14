# Dra. Lorena Silva — site institucional

Site institucional da Dra. Lorena Silva, fisioterapeuta especializada em escoliose (Belém / PA).

Para o cliente que faz manutenção de conteúdo, ver **[COMO-EDITAR.md](./COMO-EDITAR.md)**.

## Stack

- **Vite** + **React 18** (sem TypeScript)
- **Leaflet** (mapa na página de contato, carregado via CDN no `index.html`)
- Hospedagem: **Netlify** (deploy automático via Git, configurado em `netlify.toml`)
- Roteamento por hash (`#/sobre`, `#/contato`, etc.) — não precisa de redirect SPA no Netlify

## Estrutura

```
public/img/         ← imagens (servidas estaticamente)
src/
  main.jsx          ← entry point
  App.jsx           ← roteador por hash + chrome do site
  styles.css        ← estilos globais (não tocar a menos que necessário)
  config/           ← links, menu, paletas de cor
  content/          ← textos de cada página (editáveis pelo cliente)
  hooks/            ← useHashRoute, useReveal, useTheme
  components/
    icons/          ← ícones SVG
    illustrations/  ← ilustrações dos cards de processo
    *.jsx           ← Sidebar, MobileHeader, PageHead, ThemePicker, BeforeAfterSlider
  pages/            ← uma página por arquivo
```

O cliente edita exclusivamente `src/config/`, `src/content/` e `public/img/`. Tudo o mais é estrutura.

## Scripts

```bash
npm install     # instalar dependências
npm run dev     # servidor de desenvolvimento em http://localhost:5173
npm run build   # build de produção em dist/
npm run preview # preview da build de produção
```

## Setup inicial (primeira configuração)

Em máquinas **Mac/Linux**, depois de clonar o repositório, dê permissão de execução ao script de publicação do cliente:

```bash
chmod +x PUBLICAR.sh
```

(No Windows, o `PUBLICAR.bat` já roda com dois cliques — não precisa de configuração.)

## Deploy

O Netlify está conectado ao branch `main`. Cada push aciona uma nova build automaticamente, usando:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

O cliente publica via `PUBLICAR.bat` / `PUBLICAR.sh` (commit + push automatizado).
