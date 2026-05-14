import { SITE } from '../content/site.js';
import { IconLogo } from './icons/IconLogo.jsx';

export function MobileHeader({ onOpen }) {
  return (
    <div className="mobile-header">
      <div className="ml">
        <div className="mark"><IconLogo /></div>
        <div className="name">{SITE.brand.name}</div>
      </div>
      <button className="hamb" aria-label={SITE.mobileHeader.menuAria} onClick={onOpen}>
        <span className="lines"></span>
        {SITE.mobileHeader.menu}
      </button>
    </div>
  );
}
