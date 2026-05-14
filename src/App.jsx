import { Fragment, useState, useEffect } from 'react';
import { useHashRoute } from './hooks/useHashRoute.js';
import { useReveal } from './hooks/useReveal.js';
import { useTheme } from './hooks/useTheme.js';
import { WHATSAPP } from './config/links.js';
import { SITE } from './content/site.js';
import { Sidebar } from './components/Sidebar.jsx';
import { MobileHeader } from './components/MobileHeader.jsx';
import { IconWA } from './components/icons/IconWA.jsx';
import { PageHome } from './pages/PageHome.jsx';
import { PageSobre } from './pages/PageSobre.jsx';
import { PageTratamentos } from './pages/PageTratamentos.jsx';
import { PageResultados } from './pages/PageResultados.jsx';
import { PageColete3D } from './pages/PageColete3D.jsx';
import { PageFAQ } from './pages/PageFAQ.jsx';
import { PageContato } from './pages/PageContato.jsx';

export function App() {
  const [route] = useHashRoute();
  const [mobileOpen, setMobileOpen] = useState(false);
  useTheme();
  useReveal(route);

  useEffect(() => {
    setMobileOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setMobileOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  let Page = PageHome;
  switch (route) {
    case "sobre":       Page = PageSobre;       break;
    case "tratamentos": Page = PageTratamentos; break;
    case "resultados":  Page = PageResultados;  break;
    case "colete-3d":   Page = PageColete3D;    break;
    case "faq":         Page = PageFAQ;         break;
    case "contato":     Page = PageContato;     break;
    default:            Page = PageHome;
  }

  return (
    <Fragment>
      <Sidebar route={route} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className={"backdrop" + (mobileOpen ? " in" : "")} onClick={() => setMobileOpen(false)}></div>
      <main className="main">
        <MobileHeader onOpen={() => setMobileOpen(true)} />
        <Page key={route} />
      </main>
      <a className="cta-fab" href={WHATSAPP} target="_blank" rel="noopener" aria-label={SITE.ctaFab.aria}>
        <IconWA />
        <span>{SITE.ctaFab.label}</span>
      </a>
    </Fragment>
  );
}
