'use client';

import { useTheme } from '@/components/ThemeProvider';

export function AnimationControl() {
  const { motionPaused, toggleMotionPaused } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleMotionPaused}
      aria-pressed={motionPaused}
      aria-label={motionPaused ? 'Resume website animations' : 'Pause all website animations'}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground bg-muted border border-border transition-colors focus:outline-none focus:ring-2 focus:ring-primary/40"
    >
      <span
        className={`w-2 h-2 rounded-full ${
          motionPaused ? 'bg-amber-500' : 'bg-emerald-500 animate-pulse'
        }`}
      />
      <span>{motionPaused ? 'Animations: Paused' : 'Animations: Active'}</span>
    </button>
  );
}
