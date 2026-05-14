import { Fragment, useState } from 'react';
import { ACCENTS } from '../config/theme.js';
import { SITE } from '../content/site.js';

export function ThemePicker({ mode, accent, setMode, setAccent }) {
  const [open, setOpen] = useState(false);
  return (
    <Fragment>
      <button
        className="theme-fab"
        aria-label={SITE.themePicker.aria}
        onClick={() => setOpen(o => !o)}
      >
        <span className="ring" aria-hidden="true"></span>
      </button>

      <div className={"theme-panel" + (open ? " open" : "")} role="dialog" aria-label={SITE.themePicker.dialogAria}>
        <div className="head">
          <h4>{SITE.themePicker.title}</h4>
          <span className="cap">★ <strong>{SITE.themePicker.cap}</strong></span>
        </div>

        <span className="label">{SITE.themePicker.modeLabel}</span>
        <div className={"mode-row" + (mode === "dark" ? " dark-active" : "")}>
          <span className="ind" aria-hidden="true"></span>
          <button
            className={"opt" + (mode === "light" ? " active" : "")}
            onClick={() => setMode("light")}
          >{SITE.themePicker.modeLight}</button>
          <button
            className={"opt" + (mode === "dark" ? " active" : "")}
            onClick={() => setMode("dark")}
          >{SITE.themePicker.modeDark}</button>
        </div>

        <span className="label">{SITE.themePicker.paletteLabel}</span>
        <div className="swatch-grid">
          {ACCENTS.map(a => (
            <button
              key={a.id}
              className={"swatch" + (accent === a.id ? " active" : "")}
              aria-label={"Paleta " + a.label}
              onClick={() => setAccent(a.id)}
            >
              <span className="fill" style={{ background: a.color }}></span>
              <span className="name">{a.label}</span>
            </button>
          ))}
        </div>

        <p className="foot-note">
          {SITE.themePicker.footNote}
        </p>
      </div>
    </Fragment>
  );
}
