import { COLETE3D } from '../content/colete3d.js';
import { WHATSAPP } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';
import { ILLUSTRATIONS } from '../components/illustrations/index.js';

export function PageColete3D() {
  const { head, sectionA, sectionB, process, advantages, footCta } = COLETE3D;

  return (
    <div className="page" data-screen-label="Colete 3D">
      <div className="wrap">
        <PageHead title={head.title} lede={head.lede} />
      </div>

      {/* SEÇÃO A — O que é o Colete 3D */}
      <section className="tx-section">
        <div className="wrap">
          <div className="tx-grid reveal">
            <div className="tx-photo arched">
              <img src={sectionA.photo.src} alt={sectionA.photo.alt} />
            </div>
            <div className="tx-content">
              <h2 dangerouslySetInnerHTML={{ __html: sectionA.titleHtml }} />
              <p>{sectionA.p1}</p>
              <p>{sectionA.p2}</p>
              <div className="feat-grid">
                {sectionA.feats.map(([l, v]) => (
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
              <img src={sectionB.photo.src} alt={sectionB.photo.alt} />
            </div>
            <div className="tx-content">
              <h2 dangerouslySetInnerHTML={{ __html: sectionB.titleHtml }} />
              <p>{sectionB.p1}</p>
              <p>{sectionB.p2}</p>
              <div className="feat-grid">
                {sectionB.feats.map(([l, v]) => (
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
              <h2 dangerouslySetInnerHTML={{ __html: process.titleHtml }} />
            </div>
            <div className="r">{process.lede}</div>
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

      {/* SEÇÃO D — Vantagens */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <div className="l">
              <h2 dangerouslySetInnerHTML={{ __html: advantages.titleHtml }} />
            </div>
            <div className="r">{advantages.lede}</div>
          </div>
          <div className="cred-grid reveal">
            {advantages.items.map((a) => (
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
