'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  motionPaused: boolean;
  toggleMotionPaused: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [motionPaused, setMotionPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = (localStorage.getItem('theme') as Theme) || 'system';
    const savedMotion = localStorage.getItem('motionPaused') === 'true';

    setThemeState(savedTheme);
    setMotionPaused(savedMotion);

    if (savedMotion) {
      document.body.classList.add('motion-paused');
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      const isDark =
        theme === 'dark' || (theme === 'system' && mediaQuery.matches);

      const root = document.documentElement;
      if (isDark) {
        root.classList.add('dark');
        setResolvedTheme('dark');
      } else {
        root.classList.remove('dark');
        setResolvedTheme('light');
      }
    };

    updateTheme();
    localStorage.setItem('theme', theme);

    const listener = () => {
      if (theme === 'system') updateTheme();
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleMotionPaused = () => {
    const nextState = !motionPaused;
    setMotionPaused(nextState);
    localStorage.setItem('motionPaused', String(nextState));
    if (nextState) {
      document.body.classList.add('motion-paused');
    } else {
      document.body.classList.remove('motion-paused');
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        resolvedTheme,
        setTheme,
        motionPaused,
        toggleMotionPaused,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
