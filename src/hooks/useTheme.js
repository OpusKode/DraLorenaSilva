import { useState, useEffect } from 'react';

export function useTheme() {
  const [mode, setModeState] = useState(() => {
    try { return localStorage.getItem("v96-mode") || "light"; } catch (e) { return "light"; }
  });
  const [accent, setAccentState] = useState(() => {
    try { return localStorage.getItem("v96-accent") || "bordo"; } catch (e) { return "coral"; }
  });
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try { localStorage.setItem("v96-mode", mode); } catch (e) { }
  }, [mode]);
  useEffect(() => {
    document.documentElement.setAttribute("data-accent", accent);
    try { localStorage.setItem("v96-accent", accent); } catch (e) { }
  }, [accent]);
  return { mode, accent, setMode: setModeState, setAccent: setAccentState };
}
