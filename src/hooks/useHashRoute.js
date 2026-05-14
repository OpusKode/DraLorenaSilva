import { useState, useEffect } from 'react';

export function useHashRoute() {
  const get = () => (window.location.hash.replace("#/", "").replace("#", "") || "home").split("?")[0];
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const onHash = () => {
      setRoute(get());
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  return [route, (id) => { window.location.hash = "/" + id; }];
}
