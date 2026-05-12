/* global React, ReactDOM */
const { useState, useEffect } = React;

const WHATSAPP = "https://wa.me/5591980876011";
const INSTAGRAM = "https://instagram.com/lorenafisioterapeuta_";

const NAV = [
  { id: "home", label: "Início", num: "I" },
  { id: "sobre", label: "Sobre", num: "II" },
  { id: "tratamentos", label: "Tratamentos", num: "III" },
  { id: "resultados", label: "Resultados", num: "IV" },
  { id: "colete-3d", label: "Colete 3D", num: "V" },
  { id: "faq", label: "FAQ", num: "VI" },
  { id: "contato", label: "Contato", num: "VII" },
];

const ACCENTS = [
  { id: "bordo", label: "Bordô", color: "#6E1F2A" },
  { id: "vinho", label: "Vinho", color: "#4A1018" },
  { id: "cobre", label: "Cobre", color: "#9C4A28" },
  { id: "musgo", label: "Musgo", color: "#3D5740" },
  { id: "tinta", label: "Tinta", color: "#1F2845" },
  { id: "caramelo", label: "Caramelo", color: "#A36F1A" },
  { id: "rose", label: "Rosé", color: "#B05B6A" },
  { id: "azeitona", label: "Azeitona", color: "#5A5A2D" },
];

/* ============================================================
   HOOKS
============================================================ */
function useHashRoute() {
  const get = () => (window.location.hash.replace("#/", "").replace("#", "") || "home").split("?")[0];
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onHash = () => {
      setRoute(get());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (id) => { window.location.hash = "/" + id; }];
}

function useReveal(route) {
  useEffect(() => {
    const reveal = () => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh - 20 && r.bottom > 0) el.classList.add("in");
      });
    };
    const raf = requestAnimationFrame(() => { reveal(); setTimeout(reveal, 120); });
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      requestAnimationFrame(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
      });
    }
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, [route]);
}

function useTheme() {
  const [mode, setModeState] = useState(() => {
    try { return localStorage.getItem("v96-mode") || "light"; } catch (e) { return "light"; }
  });
  const [accent, setAccentState] = useState(() => {
    try { return localStorage.getItem("v96-accent") || "bordo"; } catch (e) { return "coral"; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem("v96-mode", mode); } catch (e) { }
  }, [mode]);
  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    try { localStorage.setItem("v96-accent", accent); } catch (e) { }
  }, [accent]);
  return { mode, accent, setMode: setModeState, setAccent: setAccentState };
}

/* ============================================================
   ICONS
============================================================ */
const IconWA = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.05 4.91A10 10 0 0 0 4.07 18.27L3 22l3.84-1.01A10 10 0 1 0 19.05 4.91Zm-7.04 15.4a8.4 8.4 0 0 1-4.27-1.17l-.3-.18-2.28.6.6-2.22-.2-.32a8.36 8.36 0 1 1 6.45 3.29Zm4.6-6.3c-.25-.13-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.13-.17.25-.66.81-.8.97-.15.17-.3.19-.55.06-.25-.13-1.06-.39-2.02-1.24-.74-.66-1.25-1.48-1.4-1.73-.15-.25-.02-.39.11-.51.11-.11.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.55-1.34-.76-1.84-.2-.49-.41-.42-.56-.42l-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.6.19 1.15.16 1.58.1.48-.07 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" />
  </svg>
);
const IconIG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="3.5" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);
const IconClose = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
    <path d="M6 6l12 12M6 18L18 6" />
  </svg>
);
const IconArrow = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);
const IconArrowLg = () => (
  <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 14h18M16 7l7 7-7 7" />
  </svg>
);

/* logo: an arch + spine within */
const IconLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <path d="M5 19 V 12 A 7 7 0 0 1 19 12 V 19" />
    <path d="M12 6 C 10.5 9, 13.5 11, 11 14 C 8.5 17, 13 18, 12 19" strokeWidth="1.4" />
    <circle cx="11.6" cy="8" r=".9" fill="currentColor" stroke="none" />
    <circle cx="13" cy="11" r=".9" fill="currentColor" stroke="none" />
    <circle cx="11.4" cy="14" r=".9" fill="currentColor" stroke="none" />
    <circle cx="12.4" cy="17" r=".9" fill="currentColor" stroke="none" />
  </svg>
);

/* process card illustrations — simple poster-style icons */
const IllAvaliacao = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18 H 50 V 54 A 2 2 0 0 1 48 56 H 16 A 2 2 0 0 1 14 54 Z" />
    <path d="M22 14 H 42 V 22 H 22 Z" fill="currentColor" stroke="none" opacity=".15" />
    <path d="M22 14 H 42 V 22 H 22 Z" />
    <line x1="22" y1="32" x2="42" y2="32" />
    <line x1="22" y1="40" x2="38" y2="40" />
    <path d="M22 48 L 26 52 L 34 44" strokeWidth="2" />
  </svg>
);
const IllPlano = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="14" width="44" height="40" rx="3" />
    <line x1="10" y1="24" x2="54" y2="24" />
    <line x1="20" y1="10" x2="20" y2="18" />
    <line x1="44" y1="10" x2="44" y2="18" />
    <circle cx="32" cy="38" r="8" fill="currentColor" stroke="none" opacity=".15" />
    <circle cx="32" cy="38" r="8" strokeWidth="2" />
  </svg>
);
const IllAcompanhamento = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 32 12 A 20 20 0 1 1 12 32" strokeWidth="2" />
    <path d="M 12 36 L 9 32 M 12 36 L 16 33" strokeWidth="2" />
    <circle cx="48" cy="20" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="52" cy="32" r="2.6" fill="currentColor" stroke="none" />
    <circle cx="48" cy="44" r="2.6" fill="currentColor" stroke="none" />
  </svg>
);
const IllEmCasa = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M 10 32 L 32 12 L 54 32 V 54 H 10 Z" />
    <path d="M 10 32 L 32 12 L 54 32" fill="currentColor" stroke="none" opacity=".12" />
    <path d="M 32 30 C 30 33, 34 35, 31 38 C 28 41, 34 42, 32 45 C 30 48, 32 50, 32 50" />
    <circle cx="31.5" cy="32" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="33" cy="35" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="31" cy="38" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="33" cy="42" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="32" cy="46" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

const IllScan = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="32" cy="16" r="5" />
    <path d="M 24 54 L 26 38 L 32 44 L 38 38 L 40 54" />
    <path d="M 26 29 C 25 31 25 34 26 37 L 24 39" />
    <path d="M 38 29 C 39 31 39 34 38 37 L 40 39" />
    <path d="M 10 22 L 10 14 L 18 14" />
    <path d="M 54 22 L 54 14 L 46 14" />
    <path d="M 10 42 L 10 50 L 18 50" />
    <path d="M 54 42 L 54 50 L 46 50" />
    <line x1="10" y1="32" x2="54" y2="32" strokeWidth="2" strokeDasharray="4 2" opacity="0.55" />
  </svg>
);
const IllPrint3D = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="12" y="50" width="40" height="6" rx="1" />
    <rect x="20" y="40" width="24" height="8" rx="1" fill="currentColor" stroke="none" opacity=".12" />
    <rect x="20" y="40" width="24" height="8" rx="1" />
    <rect x="23" y="32" width="18" height="7" rx="1" fill="currentColor" stroke="none" opacity=".12" />
    <rect x="23" y="32" width="18" height="7" rx="1" />
    <rect x="26" y="25" width="12" height="6" rx="1" fill="currentColor" stroke="none" opacity=".12" />
    <rect x="26" y="25" width="12" height="6" rx="1" />
    <line x1="32" y1="16" x2="32" y2="25" />
    <path d="M 28 12 L 36 12 L 34 16 L 30 16 Z" fill="currentColor" stroke="none" opacity=".2" />
    <path d="M 28 12 L 36 12 L 34 16 L 30 16 Z" />
    <line x1="14" y1="12" x2="24" y2="12" />
    <line x1="40" y1="12" x2="50" y2="12" />
    <circle cx="32" cy="26.5" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

/* ============================================================
   SIDEBAR
============================================================ */
function Sidebar({ route, mobileOpen, setMobileOpen }) {
  return (
    <aside className={"sidebar" + (mobileOpen ? " open" : "")}>
      <div className="brand">
        <div className="mark"><IconLogo /></div>
        <div>
          <div className="name">Dra. Lorena Silva</div>
          <span className="tag">Fisioterapia · Escoliose</span>
        </div>
      </div>

      <div className="status-pill">
        <span className="dot"></span>
        Atendendo · Belém
      </div>

      <nav className="side-nav" aria-label="Principal">
        {NAV.map((n) => (
          <a key={n.id}
            href={"#/" + n.id}
            className={"nav-item" + (route === n.id ? " active" : "")}
            onClick={() => setMobileOpen(false)}>
            <span className="num">{n.num}</span>
            <span>{n.label}</span>
            <span className="arrow"><IconArrow /></span>
          </a>
        ))}
      </nav>
      <div className="side-foot">
        <a className="side-cta btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
          Agendar avaliação
          <span className="arrow"><IconArrow /></span>
        </a>
        <div className="side-socials">
          <a className="side-icon-btn" href={WHATSAPP} target="_blank" rel="noopener" aria-label="WhatsApp"><IconWA /></a>
          <a className="side-icon-btn" href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram"><IconIG /></a>
        </div>
        <div className="side-fig">
          <span>© 2026</span>
          <span>Forjex</span>
        </div>
      </div>
    </aside>
  );
}

/* ============================================================
   MOBILE HEADER
============================================================ */
function MobileHeader({ onOpen }) {
  return (
    <div className="mobile-header">
      <div className="ml">
        <div className="mark"><IconLogo /></div>
        <div className="name">Dra. Lorena Silva</div>
      </div>
      <button className="hamb" aria-label="Abrir menu" onClick={onOpen}>
        <span className="lines"></span>
        Menu
      </button>
    </div>
  );
}

/* ============================================================
   PAGE HEAD (used by inner pages)
============================================================ */
function PageHead({ eyebrow, title, lede, code, location }) {
  return (
    <header className="page-head reveal">
      <div className="l">
        <h1>{title}</h1>
        {lede ? <p className="lede">{lede}</p> : null}
      </div>
    </header>
  );
}


/* ============================================================
   HOME
============================================================ */
function PageHome() {
  const stats = [
    { num: <em>SEAS</em>, lab: "Itália", desc: "Scientific Exercise Approach to Scoliosis." },
    { num: <em>S4D</em>, lab: "Brasil", desc: "Sistema integrado de avaliação postural." },
    { num: <><em>6+</em> anos</>, lab: "Exclusivamente em escoliose", desc: "Crianças, adolescentes e adultos." },
    { num: "Belém", lab: "Atendimento", desc: "Presencial · Cremação · Síntese 21." },
  ];

  const process = [
    {
      Ill: IllAvaliacao,
      when: "Etapa 01",
      h: "Avaliação detalhada",
      p: "Na primeira sessão coleto todos os dados possíveis: histórico, sintomas, postura, mobilidade e exames de imagem. É a base de todo o plano de tratamento."
    },
    {
      Ill: IllPlano,
      when: "Etapa 02",
      h: "Plano individualizado",
      p: "O plano é construído a partir do que mais precisa ser corrigido nos achados da avaliação. Sem receita pronta — um caminho desenhado para o seu caso."
    },
    {
      Ill: IllAcompanhamento,
      when: "Etapa 03",
      h: "Exercícios específicos",
      p: "Exercícios destinados a cada tipo de curva, focando nas assimetrias para trazer o melhor alinhamento possível da coluna e, consequentemente, da estética corporal."
    },
    {
      Ill: IllEmCasa,
      when: "Etapa 04",
      h: "Acompanhamento contínuo",
      p: "Acompanhamento regular com seu compromisso em manter os exercícios em casa — avisando o cérebro que a nova maneira de se corrigir está acontecendo."
    },
  ];

  const accentStats = [
    { num: "+200", lab: "pacientes atendidos" },
    { num: "+6 anos", lab: "exclusivamente em escoliose" },
    { num: "3", lab: "abordagens de tratamento" },
    { num: "Belém", lab: "única especialista na região" },
  ];

  const homeThumbs = [
    {
      img: "img/05-antes-depois-1.jpg", num: "01", name: "Helena", time: "6 meses",
      method: "SEAS",
      obs: "Curva torácica direita estabilizada após seis meses de fisioterapia ativa."
    },
    {
      img: "img/06-antes-depois-2.jpg", num: "02", name: "Luísa", time: "8 meses",
      method: "SEAS · S4D",
      obs: "Redução visível da gibosidade lombar com plano combinado."
    },
    {
      img: "img/07-antes-depois-3.jpg", num: "03", name: "Maria", time: "12 meses",
      method: "Plano combinado",
      obs: "Tratamento integrado com colete 3D e acompanhamento contínuo."
    },
  ];

  return (
    <div className="page" data-screen-label="Home">
      {/* HERO */}
      <section className="wrap">
        <div className="hero reveal">
          <span className="hero-arch tl"></span>
          <span className="hero-arch br"></span>

          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-overline">
                <span className="dot"></span>
                <span className="cap"><strong>Fisioterapia · Escoliose</strong> · Belém / PA</span>
              </div>

              <h1 className="hero-h1">
                Fisioterapia<br />
                especializada em <span className="em-serif">escoliose.</span>
              </h1>

              <p className="hero-sub">
                Descobriu a escoliose em você ou em alguém da sua família?
                Você está no <strong>lugar certo!</strong> Avaliação detalhada,
                tratamento fisioterapêutico, colete 3D quando indicado e acompanhamento contínuo.
              </p>

              <div className="hero-cta-row">
                <a className="btn btn-ink btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                  Quero agendar uma avaliação <span className="arrow"><IconArrow /></span>
                </a>
                <a className="hero-ig-btn" href={INSTAGRAM} target="_blank" rel="noopener" aria-label="Instagram da Dra. Lorena Silva">
                  <span className="ico"><IconIG /></span>
                  <span className="label">
                    <span className="sup">Siga no</span>
                    <span className="handle">@lorenafisioterapeuta_</span>
                  </span>
                  <span className="arr"><IconArrow /></span>
                </a>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <img src="img/01-hero-blazer-vinho.jpg" alt="Dra. Lorena Silva" />
              </div>
              <div className="hero-photo-cap">
                <span>Foto · Belém / PA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SHOWCASE — featured at top */}
      <section className="ba-showcase">
        <div className="wrap">
          <div className="ba-head reveal">
            <div className="l">
              <span className="eyebrow">Antes & Depois · Casos reais</span>
              <h2>Cada coluna,<br />uma <span className="em-serif">história.</span></h2>
            </div>
            <p className="r">
              Pacientes que confiaram no processo e seguiram o plano.
              Histórias compartilhadas com autorização — para que você veja, antes de conversar com a gente, o que é possível.
            </p>
          </div>

          <div className="ba-grid reveal">
            {homeThumbs.map((t, i) => (
              <a key={i} className="ba-card" href="#/resultados">
                <div className="ba-photo">
                  <img src={t.img} alt={t.name} />
                  <span className="ba-tag">Antes / Depois</span>
                  <span className="ba-method-pill">{t.method}</span>
                  <span className="ba-num">{t.num}</span>
                </div>
                <div className="ba-meta">
                  <span className="ba-name">{t.name}</span>
                  <span className="ba-time">{t.time}</span>
                </div>
                <p className="ba-obs">
                  <span className="lab">Observação</span>
                  {t.obs}
                </p>
              </a>
            ))}
          </div>

          <div className="ba-foot reveal">
            <p className="note">
              <strong>★</strong> Cada coluna pede um plano próprio. Os resultados acima refletem dedicação ao tratamento e acompanhamento contínuo — não promessas universais.
            </p>
            <a className="btn-link" href="#/resultados">Ver arquivo completo <IconArrow /></a>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO — Prazer, Dra. Lorena Silva */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid reveal">
            <div className="intro-photo-wrap">
              <div className="intro-photo">
                <img src="img/02-dra-evento-escoliose.jpg" alt="Dra. Lorena Silva" />
              </div>
              <div className="intro-photo-cap">
                <span>Foto · Belém / PA</span>
              </div>
            </div>
            <div className="intro-text">
              <span className="eyebrow">Apresentação</span>
              <h2>Prazer,<br />Dra. <span className="em-serif">Lorena Silva.</span></h2>
              <p>
                Desde que me formei em fisioterapia, meu objetivo sempre foi trazer
                o melhor tratamento para pessoas com escoliose.
              </p>
              <p>
                Minha vivência com pacientes com escoliose me faz buscar sempre estar
                atualizada para trazer o melhor resultado e <strong>frear essa doença tão silenciosa</strong>.
              </p>
              <p>
                Sempre trabalhei exclusivamente com pessoas com escoliose há mais de 6 anos —
                então você está no lugar certo.
              </p>
              <a className="btn-link" href="#/sobre">Conhecer a Dra. <IconArrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="wrap">
        <div className="stats-band reveal">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">{s.num}</div>
              <div className="lab">{s.lab}</div>
              <div className="desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="l">
              <span className="eyebrow">Como funciona o tratamento</span>
              <h2>Cuidado<br />em quatro tempos.</h2>
            </div>
            <div className="r">
              O tratamento conservador da escoliose envolve técnicas específicas com exercícios
              fisioterapêuticos individualizados. O objetivo é <strong>estabilizar a progressão da curva</strong>,
              aliviar os sintomas associados e ajudar a manter a melhor postura possível.
            </div>
          </div>
          <div className="process-grid reveal">
            {process.map((s, i) => {
              const I = s.Ill;
              return (
                <div className="process-card" key={i}>
                  <div className="ill-wrap">
                    <div className="ill"><I /></div>
                    <span className="when-pill">{s.when}</span>
                  </div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* COLETE 3D — teaser para a página dedicada */}
      <section className="brace-hl">
        <div className="wrap">
          <div className="brace-grid reveal">
            <div className="brace-photo-wrap">
              <div className="brace-photo">
                <img src="img/03-dra-com-colete-3d.jpg" alt="Dra. Lorena Silva com o colete 3D" />
              </div>
            </div>
            <div className="brace-content">
              <span className="brace-eyebrow">Recurso terapêutico</span>
              <h2 className="brace-title">
                O colete <span className="em-serif">3D.</span>
              </h2>
              <p className="brace-lede">
                Quando indicado, o colete é produzido sob medida por impressão 3D — mais leve, mais discreto e mais eficaz que os modelos convencionais. A indicação depende de critérios clínicos precisos, avaliados caso a caso.
              </p>
              <ul className="brace-list">
                <li>
                  <span className="brace-n">01</span>
                  <div>
                    <span className="brace-lab">Sob medida</span>
                    <p>Confeccionado em 3D, totalmente personalizado para a curva do seu corpo.</p>
                  </div>
                </li>
                <li>
                  <span className="brace-n">02</span>
                  <div>
                    <span className="brace-lab">Indicação caso a caso</span>
                    <p>Avaliação clínica completa decide se o colete faz sentido para o seu tipo de curva.</p>
                  </div>
                </li>
              </ul>
              <div className="brace-actions">
                <a className="brace-cta btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                  Quero saber se preciso do colete <span className="arrow"><IconArrow /></span>
                </a>
                <a className="brace-link" href="#/colete-3d">
                  Ver página completa <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS — credibilidade e autoridade */}
      <section className="stats-accent">
        <div className="wrap">
          <div className="stats-accent-grid reveal">
            {accentStats.map((s, i) => (
              <div className="stats-accent-card" key={i}>
                <div className="num">{s.num}</div>
                <div className="lab">{s.lab}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOT CTA */}
      <section className="foot-cta">
        <span className="bg-arch"></span>
        <div className="wrap">
          <div className="grid reveal">
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h3>Quero agendar<br />uma <span className="em">avaliação.</span></h3>
              <p>A avaliação detalhada é o ponto de partida. Mande mensagem pelo WhatsApp e marcamos um horário que cabe na sua semana.</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                Agendar avaliação <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              <div className="info">
                <span className="k">Endereço</span>
                <span className="v">Av. Conselheiro Furtado, 2865 · Síntese 21 · Sala 1902</span>
              </div>
              <div className="info">
                <span className="k">WhatsApp</span>
                <span className="v">(91) 98087-6011</span>
              </div>
              <div className="info">
                <span className="k">Cidade</span>
                <span className="v">Belém / Pará · Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   SOBRE
============================================================ */
function PageSobre() {
  const creds = [
    { letter: "A", lab: "Formação", name: "SEAS · Itália", desc: "Scientific Exercise Approach to Scoliosis — abordagem ativa, baseada em evidências." },
    { letter: "B", lab: "Método", name: "S4D · Brasil", desc: "Sistema integrado de avaliação postural e tratamento da escoliose." },
    { letter: "C", lab: "Experiência", name: "6+ anos", desc: "Atendimento focado em escoliose — adolescentes, crianças e adultos." },
    { letter: "D", lab: "Atendimento", name: "Belém / PA", desc: "Presencial · Edifício Síntese 21, sala 1902 — Cremação." },
  ];
  return (
    <div className="page" data-screen-label="Sobre">
      <div className="wrap">
        <PageHead
          eyebrow="Sobre · Capítulo II"
          title="Prazer, Dra. Lorena Silva."
          lede="Desde que me formei em fisioterapia, meu objetivo sempre foi trazer o melhor tratamento para pessoas com escoliose."
          code="II / VII"
          location="Belém / PA"
        />

        <div className="sobre-grid reveal">
          <div className="sobre-text">
            <p>
              Sou fisioterapeuta formada em 2020 e minha trajetória com o <strong>tratamento
              da escoliose</strong> começou ainda durante a graduação. Entre 2017 e 2019, atuei como monitora nos primeiros cursos do <strong>Método
              S4D – Brasil</strong>, realizados em Belém (PA), o que me proporcionou contato
              precoce com <strong>abordagens específicas</strong> para o tratamento da escoliose.
            </p>
            <p>
              Em 2022, realizei minha capacitação na <strong>abordagem SEAS</strong> (Scientific
              Exercise Approach to Scoliosis), método desenvolvido na Itália e
              <strong>reconhecido internacionalmente</strong> no <strong>tratamento conservador da escoliose.</strong>
            </p>
            <p>
              Desde então, venho acompanhando pacientes com escoliose utilizando <strong>exercícios específicos baseados em evidências científicas</strong>, com foco no
              <strong>controle da progressão da curva</strong> e na <strong>melhora da qualidade de vida</strong>.
              Meu objetivo é ajudar pacientes e famílias a compreender melhor a
              escoliose e enfrentar o tratamento com mais <strong>segurança e orientação</strong>.
            </p>
          </div>
          <div className="sobre-photos">
            <div className="sobre-photo arched">
              <img src="img/02-dra-evento-escoliose.jpg" alt="Dra. Lorena em evento" />
            </div>
          </div>
        </div>

        <div className="cred-grid reveal">
          {creds.map((c) => (
            <div className="cred-card" key={c.letter}>
              <div className="lab">
                <span>{c.lab}</span>
                <span className="letter">{c.letter}</span>
              </div>
              <div className="name">{c.name}</div>
              <div className="desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOT CTA */}
      <section className="foot-cta" style={{ marginTop: 80 }}>
        <span className="bg-arch"></span>
        <div className="wrap">
          <div className="grid reveal">
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h3>Quer entender<br />o seu <span className="em">caso?</span></h3>
              <p>A avaliação é particular e leva cerca de 60 minutos. Marque pelo WhatsApp.</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                Agendar avaliação <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              <div className="info">
                <span className="k">WhatsApp</span>
                <span className="v">(91) 98087-6011</span>
              </div>
              <div className="info">
                <span className="k">Cidade</span>
                <span className="v">Belém / Pará</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   TRATAMENTOS · stacked sections, alternating dark/light
============================================================ */
function PageTratamentos() {
  const sections = [
    {
      id: "avaliacao",
      h: "Avaliação completa.",
      img: "img/04-atendimento-paciente.jpg",
      flip: false,
      photoShape: "arched",
      p1: "O tratamento começa com uma avaliação detalhada, onde coleto todos os dados possíveis do paciente — histórico, sintomas, exame postural e análise de mobilidade.",
      p2: "É nessa primeira sessão que me baseio para construir o plano de tratamento. Quanto mais completa a avaliação, mais precisa fica a próxima etapa.",
      feats: [
        ["Duração", "60 minutos"],
        ["Avaliação", "Postural · funcional"],
        ["Exames", "Análise de imagem"],
        ["Resultado", "Plano personalizado"],
      ],
      dark: false,
    },
    {
      id: "fisio",
      h: "Fisioterapia especializada.",
      img: "img/02-dra-evento-escoliose.jpg",
      flip: true,
      photoShape: "arched-bottom",
      p1: "O plano de tratamento é desenvolvido de acordo com o que mais você precisa corrigir nos achados da avaliação. Combinamos os métodos SEAS (Itália) e S4D (Brasil).",
      p2: "Os exercícios específicos são destinados a cada tipo de curva, com foco nas assimetrias — trazendo o melhor alinhamento possível dessa coluna e, consequentemente, da estética corporal.",
      feats: [
        ["Métodos", "SEAS · S4D"],
        ["Frequência", "Semanal · quinzenal"],
        ["Para quem", "Crianças · adolescentes · adultos"],
        ["Sessões", "60 minutos"],
      ],
      dark: true,
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
        ["Indicação", "Avaliação clínica"],
        ["Adaptação", "Acompanhada de perto"],
        ["Combinação", "Sempre com fisioterapia"],
        ["Sob medida", "Confeccionado em 3D"],
      ],
      dark: false,
    },
  ];

  return (
    <div className="page" data-screen-label="Tratamentos">
      <div className="wrap">
        <PageHead
          eyebrow="Tratamentos · Capítulo III"
          title="Três caminhos de cuidado."
          lede="Avaliação detalhada, fisioterapia especializada e — quando indicado — colete 3D. O tratamento é sempre individualizado, de acordo com a gravidade da curva."
          code="III / VII"
          location="Belém / PA"
        />
      </div>

      {sections.map((s, i) => (
        <section key={s.id} className={"tx-section" + (s.dark ? " dark" : "")}>
          <div className="wrap">
            <div className={"tx-grid reveal" + (s.flip ? " flip" : "")}>
              <div className={"tx-photo " + s.photoShape}>
                <img src={s.img} alt={s.h} />
              </div>
              <div className="tx-content">
                <span className="eyebrow">{s.eyebrow}</span>
                <h2>{s.h}</h2>
                <p>{s.p1}</p>
                <p>{s.p2}</p>
                <div className="feat-grid">
                  {s.feats.map(([l, v]) => (
                    <div className="item" key={l}>
                      <span className="lab">{l}</span>
                      <span className="v">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="foot-cta">
        <span className="bg-arch"></span>
        <div className="wrap">
          <div className="grid reveal">
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h3>Vamos conversar<br />sobre o seu <span className="em">caso?</span></h3>
              <p>Cada coluna pede um plano. A avaliação é o primeiro passo — sem pressa, sem promessas vazias.</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                Agendar avaliação <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              <div className="info">
                <span className="k">WhatsApp</span>
                <span className="v">(91) 98087-6011</span>
              </div>
              <div className="info">
                <span className="k">Endereço</span>
                <span className="v">Síntese 21 · Sala 1902 · Belém / PA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   RESULTADOS
============================================================ */
function PageResultados() {
  const cases = [
    {
      code: "A", img: "img/05-antes-depois-1.jpg", title: "Helena", subtitle: "14 anos · Adolescente",
      rows: [["Tempo", "6 meses"], ["Método", "SEAS"], ["Foco", "Curva torácica direita"], ["Observação", "Curva estabilizada com SEAS."]]
    },
    {
      code: "B", img: "img/06-antes-depois-2.jpg", title: "Luísa", subtitle: "13 anos · Adolescente",
      rows: [["Tempo", "8 meses"], ["Método", "SEAS · S4D"], ["Foco", "Curva lombar"], ["Observação", "Redução visível da gibosidade."]]
    },
    {
      code: "C", img: "img/07-antes-depois-3.jpg", title: "Maria", subtitle: "15 anos · Adolescente",
      rows: [["Tempo", "12 meses"], ["Método", "Plano combinado"], ["Foco", "Curva em duplo arco"], ["Observação", "Tratamento integrado com colete 3D."]]
    },
    {
      code: "D", img: "img/08-costas-com-raiox.jpg", title: "Acompanhamento", subtitle: "Imagem comparativa",
      rows: [["Recurso", "Raio-X comparativo"], ["Foco", "Estabilização"], ["Plano", "Reavaliação trimestral"], ["Observação", "Documentação contínua do progresso."]]
    },
  ];

  return (
    <div className="page" data-screen-label="Resultados">
      <div className="wrap">
        <PageHead
          eyebrow="Resultados · Capítulo IV"
          title="Pacientes reais."
          lede="Cada coluna é única. Aqui ficam alguns casos acompanhados ao longo do tempo, sempre com autorização."
          code="IV / VII"
          location="Arquivo · Belém"
        />

        <div className="res-grid reveal">
          {cases.map((c) => (
            <div className="res-card" key={c.code}>
              <div className="ph">
                <img src={c.img} alt={c.title} />
              </div>
              <div className="body">
                <div className="head-row">
                  <div className="title">{c.title}</div>
                  <div className="subtitle">{c.subtitle}</div>
                </div>
                {c.rows.map(([l, v]) => (
                  <div className="row" key={l}>
                    <span className="lab">{l}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="foot-cta">
        <span className="bg-arch"></span>
        <div className="wrap">
          <div className="grid reveal">
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h3>Quer entender<br />o seu <span className="em">caso?</span></h3>
              <p>Cada coluna pede um plano. A avaliação é o primeiro passo.</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                Agendar avaliação <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              <div className="info">
                <span className="k">WhatsApp</span>
                <span className="v">(91) 98087-6011</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   COLETE 3D
============================================================ */
function PageColete3D() {
  const steps = [
    {
      Ill: IllAvaliacao,
      when: "Etapa 01",
      h: "Avaliação clínica",
      p: "Na consulta inicial, analisamos a curvatura, os exames de imagem e o histórico do paciente. É aqui que confirmamos — ou descartamos — a indicação do colete."
    },
    {
      Ill: IllScan,
      when: "Etapa 02",
      h: "Escaneamento e medição",
      p: "Fazemos a moldagem ou escaneamento preciso do tronco para capturar a forma exata do corpo. Esse dado é a base de toda a produção — nada é genérico aqui."
    },
    {
      Ill: IllPrint3D,
      when: "Etapa 03",
      h: "Produção sob medida",
      p: "Com os dados do escaneamento, o colete é fabricado por impressão 3D — uma peça única, pensada exclusivamente para o seu corpo e para a sua curva."
    },
    {
      Ill: IllAcompanhamento,
      when: "Etapa 04",
      h: "Adaptação e acompanhamento",
      p: "A entrega do colete é o começo, não o fim. Acompanhamos de perto a adaptação, ajustamos o que precisar e integramos com a fisioterapia ativa ao longo do tratamento."
    },
  ];

  const advantages = [
    { letter: "A", lab: "Leveza", name: "Mais leve.", desc: "Produzido com materiais de alta performance, pesa menos que o modelo convencional — o que torna o uso diário mais fácil de manter." },
    { letter: "B", lab: "Ventilação", name: "Respira melhor.", desc: "A estrutura aberta da impressão 3D permite circulação de ar muito superior à do colete tradicional." },
    { letter: "C", lab: "Discrição", name: "Passa despercebido.", desc: "Ajuste preciso ao corpo e menor volume: fica mais discreto sob a roupa — algo que importa muito no dia a dia, especialmente para adolescentes." },
    { letter: "D", lab: "Precisão", name: "Feito para você.", desc: "Cada colete é produzido a partir do escaneamento do corpo real do paciente — não de uma forma padronizada ou aproximada." },
    { letter: "E", lab: "Aderência", name: "Mais fácil de usar.", desc: "Quanto mais confortável, mais o paciente usa. Maior aderência ao protocolo significa resultado mais consistente ao longo do tempo." },
    { letter: "F", lab: "Evolução", name: "Acompanha o crescimento.", desc: "Reavaliações regulares permitem verificar e ajustar o colete conforme o corpo muda — o tratamento não fica parado enquanto a pessoa cresce." },
  ];

  return (
    <div className="page" data-screen-label="Colete 3D">
      <div className="wrap">
        <PageHead
          eyebrow="Colete 3D · Capítulo V"
          title="O colete que acompanha o seu corpo."
          lede="Indicado para casos específicos de escoliose, o colete 3D é produzido sob medida a partir do escaneamento do seu corpo — mais preciso, mais leve e mais discreto do que os modelos convencionais."
          code="V / VII"
          location="Inovação · Belém"
        />
      </div>

      {/* SEÇÃO A — O que é o Colete 3D */}
      <section className="tx-section">
        <div className="wrap">
          <div className="tx-grid reveal">
            <div className="tx-photo arched">
              <img src="img/03-dra-com-colete-3d.jpg" alt="Dra. Lorena Silva com o colete 3D" />
            </div>
            <div className="tx-content">
              <h2>Feito para o seu corpo,<br />não para um molde genérico.</h2>
              <p>O colete 3D não é um produto de prateleira. Ele é produzido por impressão tridimensional a partir de um escaneamento ou moldagem precisa do tronco — o que significa que ele se encaixa com exatidão nas curvas da sua coluna.</p>
              <p>Isso muda tudo: o ajuste é mais preciso, o uso é mais confortável, e a adesão ao tratamento aumenta — porque é muito mais fácil manter o uso de algo que foi feito exatamente para você.</p>
              <div className="feat-grid">
                {[
                  ["Produção", "Impressão 3D"],
                  ["Ajuste", "Sob medida"],
                  ["Material", "Leve e resistente"],
                  ["Ventilação", "Superior ao convencional"],
                ].map(([l, v]) => (
                  <div className="item" key={l}>
                    <span className="lab">{l}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO B — Quando é indicado */}
      <section className="tx-section dark">
        <div className="wrap">
          <div className="tx-grid flip reveal">
            <div className="tx-photo arched-bottom">
              <img src="img/08-costas-com-raiox.jpg" alt="Raio-X de coluna com escoliose" />
            </div>
            <div className="tx-content">
              <h2>Não é para todo mundo —<br />e isso é bom saber.</h2>
              <p>A indicação do colete depende de critérios clínicos bem definidos: principalmente o ângulo de Cobb — a medida da curvatura no raio-X —, a fase de crescimento do paciente e o histórico de progressão da curva.</p>
              <p>Em geral, é indicado para curvas entre 20° e 45° em pacientes ainda em crescimento ativo. Fora dessa janela, outros recursos podem ser mais eficazes. A avaliação é o que define — sem atalhos, sem regras fixas.</p>
              <div className="feat-grid">
                {[
                  ["Ângulo de Cobb", "20° a 45° (referência)"],
                  ["Fase", "Crescimento ativo"],
                  ["Avaliação", "Clínica e por imagem"],
                  ["Decisão", "Caso a caso"],
                ].map(([l, v]) => (
                  <div className="item" key={l}>
                    <span className="lab">{l}</span>
                    <span className="v">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO C — Como funciona o processo */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="l">
              <h2>Do primeiro contato<br />ao colete em uso.</h2>
            </div>
            <div className="r">
              O processo começa bem antes da entrega do colete — e continua depois. Cada etapa foi pensada para que você entenda o que está acontecendo e se sinta seguro em todo o caminho.
            </div>
          </div>
          <div className="process-grid reveal">
            {steps.map((s, i) => {
              const I = s.Ill;
              return (
                <div className="process-card" key={i}>
                  <div className="ill-wrap">
                    <div className="ill"><I /></div>
                    <span className="when-pill">{s.when}</span>
                  </div>
                  <h3>{s.h}</h3>
                  <p>{s.p}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO D — Vantagens em relação ao colete convencional */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="l">
              <h2>Por que o 3D<br />faz diferença.</h2>
            </div>
            <div className="r">
              O colete convencional funciona, mas tem limites. O 3D foi desenvolvido para resolver exatamente o que tornava o uso difícil — e o tratamento menos eficaz.
            </div>
          </div>
          <div className="cred-grid reveal">
            {advantages.map(a => (
              <div className="cred-card" key={a.letter}>
                <div className="lab">
                  <span>{a.lab}</span>
                  <span className="letter">{a.letter}</span>
                </div>
                <div className="name">{a.name}</div>
                <div className="desc">{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="foot-cta">
        <span className="bg-arch"></span>
        <div className="wrap">
          <div className="grid reveal">
            <div>
              <span className="eyebrow">Próximo passo</span>
              <h3>Quer saber se o colete 3D<br />é indicado para <span className="em">você?</span></h3>
              <p>Só uma avaliação clínica pode responder isso com segurança. Mande mensagem e marcamos um horário.</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                Quero saber se o colete 3D é indicado para mim <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              <div className="info">
                <span className="k">WhatsApp</span>
                <span className="v">(91) 98087-6011</span>
              </div>
              <div className="info">
                <span className="k">Endereço</span>
                <span className="v">Síntese 21 · Sala 1902 · Belém / PA</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ============================================================
   FAQ
============================================================ */
function PageFAQ() {
  const items = [
    ["Atende online?", "Atualmente o atendimento é presencial em Belém. Em casos específicos, entre em contato pra conversarmos."],
    ["Em quanto tempo vejo resultado?", "Depende do tipo de curva, idade e adesão ao plano. Em geral, mudanças posturais aparecem nos primeiros 2 a 3 meses."],
    ["Preciso ter exame antes de marcar?", "Não é obrigatório, mas raio-x recente facilita muito a avaliação inicial. Posso orientar caso ainda não tenha feito."],
    ["Atende crianças?", "Sim. A escoliose pode aparecer cedo, e tratar na fase de crescimento faz toda a diferença."],
    ["Funciona para adultos?", "Sim. Em adultos, o foco é estabilização da curva, alívio de dor e ganho de função."],
    ["O colete 3D é sempre necessário?", "Não. A indicação depende da gravidade da curva e da fase de crescimento. É decidido caso a caso."],
    ["Os planos cobrem o atendimento?", "O atendimento é particular. Posso emitir nota fiscal e recibo para reembolso, conforme o seu plano."],
  ];
  const codes = ["A", "B", "C", "D", "E", "F", "G"];
  const [open, setOpen] = useState(0);
  return (
    <div className="page" data-screen-label="FAQ">
      <div className="wrap">
        <PageHead
          eyebrow="FAQ · Capítulo VI"
          title="Perguntas frequentes."
          code="VI / VII"
          location="Dúvidas · comuns"
        />

        <div className="faq-foot">
          <div>
            <h4>Ficou com alguma dúvida que não está aqui?</h4>
            <p>Mande uma mensagem direto pelo WhatsApp — respondemos pessoalmente.</p>
          </div>
          <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
            Mande mensagem <span className="arrow"><IconArrow /></span>
          </a>
        </div>

        <div className="faq-list reveal">
          {items.map(([q, a], i) => (
            <div key={q} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="letter">{codes[i]}</span>
                <span className="text">{q}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div className="a">
                <div className="a-inner"><p>{a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   CONTATO
============================================================ */
function PageContato() {
  useEffect(function () {
    var L = window.L;
    if (!L) return;
    var el = document.getElementById("lorena-map");
    if (!el || el._leaflet_id) return;

    var LAT = -1.4558;
    var LNG = -48.4902;

    var map = L.map("lorena-map", {
      center: [LAT, LNG],
      zoom: 13,
      scrollWheelZoom: false,
      zoomControl: false,
    });

    L.control.zoom({ position: "bottomright" }).addTo(map);
    setTimeout(function () { map.invalidateSize(); }, 50);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
      attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> © <a href='https://carto.com/attributions'>CARTO</a>",
      subdomains: "abcd",
      maxZoom: 20,
    }).addTo(map);

    var pinHtml = [
      "<div class='map-pin-wrap'>",
      "<div class='map-ripple r1'></div>",
      "<div class='map-ripple r2'></div>",
      "<div class='map-pin'>",
      "<svg viewBox='0 0 32 40' fill='none' xmlns='http://www.w3.org/2000/svg'>",
      "<path d='M16 2C9.373 2 4 7.373 4 14c0 8.5 12 24 12 24s12-15.5 12-24c0-6.627-5.373-12-12-12z'",
      " fill='var(--accent)' stroke='rgba(255,255,255,0.5)' stroke-width='1.5'/>",
      "<circle cx='16' cy='14' r='5' fill='white' opacity='0.92'/>",
      "</svg>",
      "</div></div>",
    ].join("");

    var icon = L.divIcon({
      html: pinHtml,
      className: "map-marker-icon",
      iconSize: [40, 50],
      iconAnchor: [20, 50],
      popupAnchor: [0, -54],
    });

    var popupHtml = [
      "<div class='map-popup-card'>",
      "<span class='map-popup-tag'>Fisioterapia · Escoliose</span>",
      "<div class='map-popup-name'>Dra. Lorena Silva</div>",
      "<div class='map-popup-addr'>",
      "Av. Conselheiro Furtado, 2865<br>",
      "Ed. Síntese 21 · Sala 1902<br>",
      "Cremação · Belém / PA",
      "</div>",
      "<a class='map-popup-btn'",
      " href='https://maps.google.com/?q=Av.+Conselheiro+Furtado,+2865,+Bel%C3%A9m+PA'",
      " target='_blank' rel='noopener'>",
      "Abrir no Google Maps →",
      "</a></div>",
    ].join("");

    var marker = L.marker([LAT, LNG], { icon: icon }).addTo(map);
    marker.bindPopup(popupHtml, {
      closeButton: false,
      className: "map-popup-pane",
      maxWidth: 260,
      minWidth: 220,
    });

    var flyTimer = setTimeout(function () {
      map.flyTo([LAT, LNG], 16, { duration: 2.2, easeLinearity: 0.28 });
    }, 400);

    map.on("click", function () { map.scrollWheelZoom.enable(); });

    var cont = map.getContainer();
    function onLeave() { map.scrollWheelZoom.disable(); }
    cont.addEventListener("mouseleave", onLeave);

    return function () {
      clearTimeout(flyTimer);
      cont.removeEventListener("mouseleave", onLeave);
      map.remove();
    };
  }, []);

  return (
    <div className="page" data-screen-label="Contato">
      <div className="wrap">
        <PageHead
          eyebrow="Contato · Capítulo VII"
          title="Vamos conversar."
          lede="Atendimento presencial em Belém / PA. Marque sua avaliação direto pelo WhatsApp."
          code="VII / VII"
          location="Último capítulo"
        />

        <div className="contact-grid reveal">
          <div className="contact-info-col">
            <div className="addr-card">
              <div className="cap">
                <span><strong>Endereço</strong></span>
                <span>★ Belém / PA</span>
              </div>
              <div className="lines">
                Av. Conselheiro Furtado, 2865<br />
                Ed. Síntese 21 · Sala 1902
                <span className="small">Cremação · Belém / PA · CEP 66063-060</span>
              </div>
            </div>
            <div className="contact-btns">
              <a className="contact-btn btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                <span className="ico"><IconWA /></span>
                <span>
                  <div className="lab">WhatsApp</div>
                  <div className="v">(91) 98087-6011</div>
                </span>
                <span className="arrow"><IconArrow /></span>
              </a>
              <a className="contact-btn" href={INSTAGRAM} target="_blank" rel="noopener">
                <span className="ico"><IconIG /></span>
                <span>
                  <div className="lab">Instagram</div>
                  <div className="v">@lorenafisioterapeuta_</div>
                </span>
                <span className="arrow"><IconArrow /></span>
              </a>
            </div>
          </div>
          <div className="contact-map-col">
            <div id="lorena-map" className="map-wrap"></div>
            <div className="map-cap">
              <span>Mapa · Cremação</span>
              <span><strong>★ FIG. C</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   THEME PICKER
============================================================ */
function ThemePicker({ mode, accent, setMode, setAccent }) {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <button
        className="theme-fab"
        aria-label="Personalizar tema"
        onClick={() => setOpen(o => !o)}
      >
        <span className="ring" aria-hidden="true"></span>
      </button>

      <div className={"theme-panel" + (open ? " open" : "")} role="dialog" aria-label="Personalizar tema">
        <div className="head">
          <h4>Tema</h4>
          <span className="cap">★ <strong>θ Config</strong></span>
        </div>

        <span className="label">Modo</span>
        <div className={"mode-row" + (mode === "dark" ? " dark-active" : "")}>
          <span className="ind" aria-hidden="true"></span>
          <button
            className={"opt" + (mode === "light" ? " active" : "")}
            onClick={() => setMode("light")}
          >Claro</button>
          <button
            className={"opt" + (mode === "dark" ? " active" : "")}
            onClick={() => setMode("dark")}
          >Escuro</button>
        </div>

        <span className="label">Paleta editorial</span>
        <div className="swatch-grid">
          {ACCENTS.map(a => (
            <button
              key={a.id}
              className={"swatch" + (accent === a.id ? " active" : "")}
              aria-label={"Paleta " + a.label}
              onClick={() => setAccent(a.id)}
            >
              <span className="fill" style={{ background: a.color }}></span>
              <span className="name">{a.label}</span>
            </button>
          ))}
        </div>

        <p className="foot-note">
          Ajuste o tema · 8 paletas editoriais. Sua escolha fica salva no navegador.
        </p>
      </div>
    </React.Fragment>
  );
}

/* ============================================================
   APP
============================================================ */
function App() {
  const [route] = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  useTheme();
  useReveal(route);

  // close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  // lock scroll when mobile sidebar open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  // ESC closes mobile sidebar
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  let Page = PageHome;
  switch (route) {
    case "sobre": Page = PageSobre; break;
    case "tratamentos": Page = PageTratamentos; break;
    case "resultados": Page = PageResultados; break;
    case "colete-3d": Page = PageColete3D; break;
    case "faq": Page = PageFAQ; break;
    case "contato": Page = PageContato; break;
    default: Page = PageHome;
  }

  return (
    <React.Fragment>
      <Sidebar route={route} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className={"backdrop" + (mobileOpen ? " in" : "")} onClick={() => setMobileOpen(false)}></div>
      <main className="main">
        <MobileHeader onOpen={() => setMobileOpen(true)} />
        <Page key={route} />
      </main>
      <a className="cta-fab" href={WHATSAPP} target="_blank" rel="noopener" aria-label="Agendar avaliação">
        <IconWA />
        <span>Agendar avaliação</span>
      </a>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
