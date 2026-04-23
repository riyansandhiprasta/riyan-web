'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SalInit() {
  const pathname = usePathname();

  useEffect(() => {
    let sal;

    const init = async () => {
      const mod = await import('sal.js');
      sal = mod.default;

      sal({
        threshold: 0.1,
        duration: 600,
        easing: 'ease',
        once: true,
      });
    };

    init();
  }, [pathname]);

  return null;
}
