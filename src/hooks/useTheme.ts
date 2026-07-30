import { useState, useEffect } from 'react';
import { ThemeMode } from '../types';

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('isaiah_foss_theme');
    if (saved === 'dark' || saved === 'light' || saved === 'system') {
      return saved;
    }
    return 'system';
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('isaiah_foss_theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    localStorage.setItem('isaiah_foss_theme', theme);

    let activeDark = false;
    if (theme === 'dark') {
      activeDark = true;
    } else if (theme === 'light') {
      activeDark = false;
    } else {
      activeDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    setIsDark(activeDark);

    if (activeDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, setTheme, isDark, toggleTheme };
}
