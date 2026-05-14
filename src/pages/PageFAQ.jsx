import { useState } from 'react';
import { FAQ, FAQ_ITEMS } from '../content/faq.js';
import { WHATSAPP } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';

export function PageFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <div className="page" data-screen-label="FAQ">
      <div className="wrap">
        <PageHead title={FAQ.head.title} />

        <div className="faq-foot">
          <div>
            <h4>{FAQ.foot.title}</h4>
            <p>{FAQ.foot.lede}</p>
          </div>
          <a className="btn btn-primary btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
            {FAQ.foot.cta} <span className="arrow"><IconArrow /></span>
          </a>
        </div>

        <div className="faq-list reveal">
          {FAQ_ITEMS.map(({ pergunta, resposta }, i) => (
            <div key={pergunta} className={"faq-item" + (open === i ? " open" : "")}>
              <button className="q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span className="letter">{i + 1}</span>
                <span className="text">{pergunta}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div className="a">
                <div className="a-inner"><p>{resposta}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
