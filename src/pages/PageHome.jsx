import { HOME } from '../content/home.js';
import { CASOS } from '../content/resultados.js';
import { WHATSAPP, INSTAGRAM } from '../config/links.js';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';
import { IconIG } from '../components/icons/IconIG.jsx';
import { ILLUSTRATIONS } from '../components/illustrations/index.js';

export function PageHome() {
  const { hero, baShowcase, intro, stats, process, brace, accentStats, footCta } = HOME;

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
                <span className="cap"><strong>{hero.overlineStrong}</strong>{hero.overlineRest}</span>
              </div>

              <h1 className="hero-h1" dangerouslySetInnerHTML={{ __html: hero.h1Html }} />

              <p className="hero-sub" dangerouslySetInnerHTML={{ __html: hero.subHtml }} />

              <div className="hero-cta-row">
                <a className="btn btn-ink btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                  {hero.ctaPrimary} <span className="arrow"><IconArrow /></span>
                </a>
                <a className="hero-ig-btn" href={INSTAGRAM} target="_blank" rel="noopener" aria-label={hero.ctaIgAria}>
                  <span className="ico"><IconIG /></span>
                  <span className="label">
                    <span className="sup">{hero.ctaIgSup}</span>
                    <span className="handle">{hero.ctaIgHandle}</span>
                  </span>
                  <span className="arr"><IconArrow /></span>
                </a>
              </div>
            </div>

            <div className="hero-photo-wrap">
              <div className="hero-photo">
                <img src={hero.photoSrc} alt={hero.photoAlt} />
              </div>
              <div className="hero-photo-cap">
                <span>{hero.photoCap}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER SHOWCASE */}
      <section className="ba-showcase">
        <div className="wrap">
          <div className="ba-head reveal">
            <div className="l">
              <span className="eyebrow">{baShowcase.eyebrow}</span>
              <h2 dangerouslySetInnerHTML={{ __html: baShowcase.titleHtml }} />
            </div>
            <p className="r">{baShowcase.lede}</p>
          </div>

          <div className="slider-grid reveal">
            {CASOS.slice(0, 2).map((c) => (
              <div className="slider-card" key={c.id}>
                <BeforeAfterSlider antes={c.antes} depois={c.depois} />
              </div>
            ))}
          </div>

          <div className="ba-foot reveal">
            <p className="note" dangerouslySetInnerHTML={{ __html: baShowcase.noteHtml }} />
            <a className="btn-link" href="#/resultados">{baShowcase.ctaLink} <IconArrow /></a>
          </div>
        </div>
      </section>

      {/* APRESENTAÇÃO */}
      <section className="section">
        <div className="wrap">
          <div className="intro-grid reveal">
            <div className="intro-photo-wrap">
              <div className="intro-photo">
                <img src={intro.photoSrc} alt={intro.photoAlt} />
              </div>
              <div className="intro-photo-cap">
                <span>{intro.photoCap}</span>
              </div>
            </div>
            <div className="intro-text">
              <span className="eyebrow">{intro.eyebrow}</span>
              <h2 dangerouslySetInnerHTML={{ __html: intro.titleHtml }} />
              {intro.paragraphsHtml.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
              <a className="btn-link" href="#/sobre">{intro.ctaLink} <IconArrow /></a>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="wrap">
        <div className="stats-band reveal">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num" dangerouslySetInnerHTML={{ __html: s.numHtml }} />
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
              <span className="eyebrow">{process.eyebrow}</span>
              <h2 dangerouslySetInnerHTML={{ __html: process.titleHtml }} />
            </div>
            <div className="r" dangerouslySetInnerHTML={{ __html: process.ledeHtml }} />
          </div>
          <div className="process-grid reveal">
            {process.steps.map((s, i) => {
              const I = ILLUSTRATIONS[s.ill];
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

      {/* COLETE 3D */}
      <section className="brace-hl">
        <div className="wrap">
          <div className="brace-grid reveal">
            <div className="brace-photo-wrap">
              <div className="brace-photo">
                <img src={brace.photoSrc} alt={brace.photoAlt} />
              </div>
            </div>
            <div className="brace-content">
              <span className="brace-eyebrow">{brace.eyebrow}</span>
              <h2 className="brace-title" dangerouslySetInnerHTML={{ __html: brace.titleHtml }} />
              <p className="brace-lede">{brace.lede}</p>
              <ul className="brace-list">
                {brace.items.map((item) => (
                  <li key={item.n}>
                    <span className="brace-n">{item.n}</span>
                    <div>
                      <span className="brace-lab">{item.lab}</span>
                      <p>{item.p}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="brace-actions">
                <a className="brace-cta btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                  {brace.cta} <span className="arrow"><IconArrow /></span>
                </a>
                <a className="brace-link" href="#/colete-3d">
                  {brace.link} <IconArrow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NÚMEROS */}
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
              <span className="eyebrow">{footCta.eyebrow}</span>
              <h3 dangerouslySetInnerHTML={{ __html: footCta.titleHtml }} />
              <p>{footCta.lede}</p>
              <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                {footCta.cta} <span className="arrow"><IconArrow /></span>
              </a>
            </div>
            <div className="cta-side">
              {footCta.side.map((info) => (
                <div className="info" key={info.k}>
                  <span className="k">{info.k}</span>
                  <span className="v">{info.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
