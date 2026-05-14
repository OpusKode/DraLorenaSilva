import { TRATAMENTOS } from '../content/tratamentos.js';
import { WHATSAPP } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';

export function PageTratamentos() {
  const { head, sections, footCta } = TRATAMENTOS;

  return (
    <div className="page" data-screen-label="Tratamentos">
      <div className="wrap">
        <PageHead title={head.title} lede={head.lede} />
      </div>

      {sections.map((s) => (
        <section key={s.id} className={"tx-section" + (s.dark ? " dark" : "")}>
          <div className="wrap">
            <div className={"tx-grid reveal" + (s.flip ? " flip" : "")}>
              <div className={"tx-photo " + s.photoShape + (s.imgFit ? " tx-photo--" + s.imgFit : "")}>
                <img src={s.img} alt={s.h} />
              </div>
              <div className="tx-content">
                {s.eyebrow ? <span className="eyebrow">{s.eyebrow}</span> : null}
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
