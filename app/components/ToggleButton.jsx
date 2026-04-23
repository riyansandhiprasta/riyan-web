'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import lightIcon from '../../public/icons/light.svg';
import darkIcon from '../../public/icons/dark.svg';

export default function ThemeToggle({ }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [rotating, setRotating] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setRotating(true);
    setTheme(theme === 'dark' ? 'light' : 'dark');

    // reset rotation state after animation
    setTimeout(() => setRotating(false), 300);
  };

  return (
    <button onClick={toggleTheme} className="ml-4">
      <span
        className={`inline-block transition-transform duration-200 ease-out
          ${rotating ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}
        `}
      >
        <Image
          src={theme === 'dark' ? lightIcon : darkIcon}
          alt="theme icon"
        />
      </span>
    </button>
  );
}