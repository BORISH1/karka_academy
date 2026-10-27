'use client';

import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { motionPaused } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (motionPaused) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }
  }, [motionPaused]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Video & Ambient Overlays (Layered behind hero content) */}
      <div className="absolute inset-0 -z-10">
        {/* Ambient Video with high clarity */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover scale-105 opacity-50 dark:opacity-75 transition-opacity duration-700"
        >
          <source src="/vedio.mp4" type="video/mp4" />
          <source src="/video.mp4" type="video/mp4" />
        </video>

        {/* Light Mode Contrast Scrims: Soft translucent gradients preserving video movement while ensuring text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/60 to-background dark:hidden pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgb(var(--background))_80%)] dark:hidden pointer-events-none" />

        {/* Dark Mode Cosmic Scrims: Deep cinematic vignette */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background pointer-events-none" />
        <div className="hidden dark:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_25%,_rgb(var(--background))_85%)] pointer-events-none" />

        {/* Subtle Tech Dot Matrix Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgb(var(--foreground)/0.06)_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />

        {/* Central Atmospheric Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-primary/20 dark:bg-primary/25 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Ambient Video Control Badge (Interactive at bottom right) */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 pointer-events-auto flex items-center gap-2">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/85 dark:bg-surface-elevated/85 backdrop-blur-md border border-border text-xs font-medium text-foreground hover:bg-surface-elevated transition-all shadow-lg hover:shadow-xl group"
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-muted-foreground'
            }`}
          />
          <span className="text-[11px] text-muted-foreground group-hover:text-foreground">
            {isPlaying ? 'Live Background' : 'Video Paused'}
          </span>
          {isPlaying ? (
            <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        <button
          type="button"
          onClick={toggleMute}
          aria-label={isMuted ? 'Unmute background video' : 'Mute background video'}
          className="p-1.5 rounded-full bg-surface/85 dark:bg-surface-elevated/85 backdrop-blur-md border border-border text-muted-foreground hover:text-foreground hover:bg-surface-elevated transition-all shadow-lg hover:shadow-xl"
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
