import { useEffect } from 'react';

export function useReveal(route) {
  useEffect(() => {
    const reveal = () => {
      const els = document.querySelectorAll(".reveal:not(.in)");
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.top < vh - 20 && r.bottom > 0) el.classList.add("in");
      });
    };
    const raf = requestAnimationFrame(() => { reveal(); setTimeout(reveal, 120); });
    let io = null;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      requestAnimationFrame(() => {
        document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
      });
    }
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal);
    return () => {
      cancelAnimationFrame(raf);
      if (io) io.disconnect();
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, [route]);
}
