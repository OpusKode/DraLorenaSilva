import { SOBRE } from '../content/sobre.js';
import { WHATSAPP } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';

export function PageSobre() {
  const { head, paragraphsHtml, photo, creds, footCta } = SOBRE;

  return (
    <div className="page" data-screen-label="Sobre">
      <div className="wrap">
        <PageHead title={head.title} lede={head.lede} />

        <div className="sobre-grid reveal">
          <div className="sobre-text">
            {paragraphsHtml.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>
          <div className="sobre-photos">
            <div className="sobre-photo arched">
              <img src={photo.src} alt={photo.alt} />
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
