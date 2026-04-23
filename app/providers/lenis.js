'use client';

import { useEffect } from 'react';

export default function LenisInit() {
  useEffect(() => {
    let lenis;
    let rafId;

    const init = async () => {
      const Lenis = (await import('lenis')).default;

      lenis = new Lenis({
        wrapper: document.getElementById('lenis-wrapper'),
        content: document.getElementById('lenis-content'),
        smooth: true,
        duration: 1.1,
      });

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    };

    init();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis) lenis.destroy();
    };
  }, []);

  return null;
}
