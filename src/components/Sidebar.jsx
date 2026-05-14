import { NAV } from '../config/nav.js';
import { WHATSAPP, INSTAGRAM } from '../config/links.js';
import { SITE } from '../content/site.js';
import { IconLogo } from './icons/IconLogo.jsx';
import { IconArrow } from './icons/IconArrow.jsx';
import { IconWA } from './icons/IconWA.jsx';
import { IconIG } from './icons/IconIG.jsx';

export function Sidebar({ route, mobileOpen, setMobileOpen }) {
  return (
    <aside className={"sidebar" + (mobileOpen ? " open" : "")}>
      <div className="brand">
        <div className="mark"><IconLogo /></div>
        <div>
          <div className="name">{SITE.brand.name}</div>
          <span className="tag">{SITE.brand.tag}</span>
        </div>
      </div>

      <div className="status-pill">
        <span className="dot"></span>
        {SITE.sidebar.statusPill}
      </div>

      <nav className="side-nav" aria-label="Principal">
        {NAV.map((n) => (
          <a key={n.id}
            href={"#/" + n.id}
            className={"nav-item" + (route === n.id ? " active" : "")}
            onClick={() => setMobileOpen(false)}>
            <span></span>
            <span>{n.label}</span>
            <span className="arrow"><IconArrow/></span>
          </a>
        ))}
      </nav>
      <div className="side-foot">
        <a className="side-cta btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
          {SITE.sidebar.cta}
          <span className="arrow"><IconArrow /></span>
        </a>
        <div className="side-socials">
          <a className="side-icon-btn" href={WHATSAPP} target="_blank" rel="noopener" aria-label={SITE.sidebar.ariaWhatsapp}><IconWA /></a>
          <a className="side-icon-btn" href={INSTAGRAM} target="_blank" rel="noopener" aria-label={SITE.sidebar.ariaInstagram}><IconIG /></a>
        </div>
        <div className="side-fig">
          <span>{SITE.sidebar.copyright}</span>
          <span>{SITE.sidebar.creditedBy}</span>
        </div>
      </div>
    </aside>
  );
}
