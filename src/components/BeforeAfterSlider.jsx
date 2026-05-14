import { useState, useEffect, useRef } from 'react';
import { IconSliderArrows } from './icons/IconSliderArrows.jsx';

export function BeforeAfterSlider({ antes, depois }) {
  const [pos, setPos] = useState(50);
  const [active, setActive] = useState(false);
  const wrapRef = useRef(null);

  const updatePos = (clientX) => {
    if (!wrapRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    setPos(Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100)));
  };

  useEffect(() => {
    if (!active) return;
    const onMove = (e) => {
      if (!wrapRef.current) return;
      const rect = wrapRef.current.getBoundingClientRect();
      setPos(Math.max(2, Math.min(98, ((e.clientX - rect.left) / rect.width) * 100)));
    };
    const onUp = () => setActive(false);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [active]);

  return (
    <div
      ref={wrapRef}
      className="bas-wrap"
      onMouseDown={(e) => { e.preventDefault(); setActive(true); updatePos(e.clientX); }}
      onTouchStart={(e) => { setActive(true); updatePos(e.touches[0].clientX); }}
      onTouchMove={(e) => updatePos(e.touches[0].clientX)}
      onTouchEnd={() => setActive(false)}
    >
      <img className="bas-img" src={depois} alt="Depois" draggable="false" />
      <img
        className="bas-img"
        src={antes}
        alt="Antes"
        draggable="false"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      <div className="bas-line" style={{ left: `${pos}%` }}>
        <div className="bas-handle" aria-hidden="true">
          <IconSliderArrows />
        </div>
      </div>
      <span className="bas-label bas-l">Antes</span>
      <span className="bas-label bas-r">Depois</span>
    </div>
  );
}
