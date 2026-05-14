import { useEffect } from 'react';
import { CONTATO } from '../content/contato.js';
import { WHATSAPP, INSTAGRAM } from '../config/links.js';
import { PageHead } from '../components/PageHead.jsx';
import { IconArrow } from '../components/icons/IconArrow.jsx';
import { IconWA } from '../components/icons/IconWA.jsx';
import { IconIG } from '../components/icons/IconIG.jsx';

export function PageContato() {
  useEffect(function () {
    var L = window.L;
    if (!L) return;
    var el = document.getElementById("lorena-map");
    if (!el || el._leaflet_id) return;

    var LAT = CONTATO.map.lat;
    var LNG = CONTATO.map.lng;

    var map = L.map("lorena-map", {
      center: [LAT, LNG],
      zoom: CONTATO.map.initialZoom,
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
      "<span class='map-popup-tag'>", CONTATO.map.popup.tag, "</span>",
      "<div class='map-popup-name'>", CONTATO.map.popup.name, "</div>",
      "<div class='map-popup-addr'>",
      CONTATO.map.popup.addrHtml,
      "</div>",
      "<a class='map-popup-btn'",
      " href='", CONTATO.map.googleMapsUrl, "'",
      " target='_blank' rel='noopener'>",
      CONTATO.map.popup.btn,
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
      map.flyTo([LAT, LNG], CONTATO.map.finalZoom, { duration: 2.2, easeLinearity: 0.28 });
    }, CONTATO.map.flyDelayMs);

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
        <PageHead title={CONTATO.head.title} lede={CONTATO.head.lede} />

        <div className="contact-grid reveal">
          <div className="contact-info-col">
            <div className="addr-card">
              <div className="cap">
                <span><strong>{CONTATO.endereco.capStrong}</strong></span>
                <span>{CONTATO.endereco.capRight}</span>
              </div>
              <div className="lines">
                {CONTATO.endereco.linhas.map((linha, i) => (
                  <span key={i}>
                    {linha}
                    {i < CONTATO.endereco.linhas.length - 1 ? <br /> : null}
                  </span>
                ))}
                <span className="small">{CONTATO.endereco.small}</span>
              </div>
            </div>
            <div className="contact-btns">
              <a className="contact-btn btn-cta-animate" href={WHATSAPP} target="_blank" rel="noopener">
                <span className="ico"><IconWA /></span>
                <span>
                  <div className="lab">{CONTATO.contatos.whatsapp.lab}</div>
                  <div className="v">{CONTATO.contatos.whatsapp.v}</div>
                </span>
                <span className="arrow"><IconArrow /></span>
              </a>
              <a className="contact-btn" href={INSTAGRAM} target="_blank" rel="noopener">
                <span className="ico"><IconIG /></span>
                <span>
                  <div className="lab">{CONTATO.contatos.instagram.lab}</div>
                  <div className="v">{CONTATO.contatos.instagram.v}</div>
                </span>
                <span className="arrow"><IconArrow /></span>
              </a>
            </div>
          </div>
          <div className="contact-map-col">
            <div id="lorena-map" className="map-wrap"></div>
            <div className="map-cap">
              <span>{CONTATO.mapCap.left}</span>
              <span dangerouslySetInnerHTML={{ __html: CONTATO.mapCap.rightHtml }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
