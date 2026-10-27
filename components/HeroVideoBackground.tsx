'use client';

import { useRef, useEffect, useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { motionPaused } = useTheme();
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Automatic seamless replay loop fallback
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('ended', handleEnded);

    if (motionPaused) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play().then(() => setIsPlaying(true)).catch(() => {
        setIsPlaying(false);
      });
    }

    return () => {
      video.removeEventListener('ended', handleEnded);
    };
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

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none" aria-hidden="true">
      {/* Base deep blue canvas */}
      <div className="absolute inset-0 bg-[#0d1d3b]" />

      {/* The Academic Motion Video - Autoplays, Loops, Always Muted, Automatically Replays */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onEnded={() => {
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play().catch(() => {});
          }
        }}
        className="absolute inset-0 w-full h-full object-cover scale-100 opacity-95 brightness-105"
      >
        <source src="/vedio.mp4" type="video/mp4" />
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Top/bottom soft gradient transition to preserve text clarity while keeping the center open */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#060c1d]/50 via-transparent to-[#060c1d]/85 pointer-events-none" />

      {/* Ambient Live Video Controller Badge (Pause/Play toggle only - no sound button) */}
      <div className="absolute bottom-5 right-5 sm:bottom-8 sm:right-8 z-30 pointer-events-auto">
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white transition-all shadow-xl group cursor-pointer"
        >
          <span
            className={`w-2 h-2 rounded-full transition-colors ${
              isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'
            }`}
          />
          <span className="text-[11px] text-slate-200 group-hover:text-white">
            {isPlaying ? 'Live Video' : 'Paused'}
          </span>
          {isPlaying ? (
            <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
