import { CASOS, RESULTADOS } from '../content/resultados.js';
import { WHATSAPP } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';

export function PageResultados() {
  const { head, footCta } = RESULTADOS;

  return (
    <div className="page" data-screen-label="Resultados">
      <div className="wrap">
        <PageHead title={head.title} lede={head.lede} />

        <div className="slider-grid reveal">
          {CASOS.map((c) => (
            <div className="slider-card" key={c.id}>
              <BeforeAfterSlider antes={c.antes} depois={c.depois} />
            </div>
          ))}
        </div>
      </div>

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
