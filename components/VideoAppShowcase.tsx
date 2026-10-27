'use client';

import { useState, useRef, useEffect } from 'react';

export function VideoAppShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Auto-play on mount
    video.play().catch(() => {
      // Browsers might block autoplay if not muted
      setIsPlaying(false);
    });

    const handleTimeUpdate = () => {
      if (video.duration) {
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
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

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-14 sm:mt-18 px-2 sm:px-4">
      {/* Ambient Radial Backlight Glow */}
      <div 
        aria-hidden="true" 
        className="absolute -inset-4 sm:-inset-8 bg-gradient-to-tr from-primary/30 via-blue-500/20 to-accent/25 rounded-[2.5rem] blur-2xl sm:blur-3xl opacity-75 dark:opacity-60 -z-10 transition-opacity" 
      />

      {/* Floating Feature Pill Badges */}
      <div className="hidden lg:flex items-center gap-2 absolute -top-5 -left-6 z-20 bg-surface/90 dark:bg-surface-elevated/90 backdrop-blur-md border border-border px-4 py-2 rounded-2xl shadow-xl animate-float">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs font-bold text-foreground">Interactive Live Cohort</span>
        <span className="text-[10px] text-muted-foreground ml-1">v2.4</span>
      </div>

      <div className="hidden lg:flex items-center gap-2 absolute -bottom-5 -right-6 z-20 bg-surface/90 dark:bg-surface-elevated/90 backdrop-blur-md border border-border px-4 py-2.5 rounded-2xl shadow-xl">
        <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-xs font-black">
          ✓
        </div>
        <div>
          <p className="text-xs font-bold text-foreground">94% Placement Success</p>
          <p className="text-[10px] text-muted-foreground">Top Tier-1 Tech Partners</p>
        </div>
      </div>

      {/* Premium Desktop App Window Frame */}
      <div
        ref={containerRef}
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
        className="relative bg-surface dark:bg-surface-elevated rounded-2xl sm:rounded-3xl border border-border/80 shadow-2xl overflow-hidden transition-all duration-300 group"
      >
        {/* App Titlebar Header (macOS style) */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 bg-muted/60 dark:bg-muted/40 border-b border-border/80 backdrop-blur-md">
          {/* Traffic light window dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-sm" />
          </div>

          {/* Centered App Address Pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 border border-border text-[11px] sm:text-xs font-medium text-muted-foreground shadow-inner">
            <svg className="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="font-semibold text-foreground">youaspirant.app</span>
            <span className="text-muted-foreground/60 hidden sm:inline">• Live Career Lab</span>
          </div>

          {/* Live indicator tag */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              HD 1080p
            </span>
          </div>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          <video
            ref={videoRef}
            playsInline
            muted
            autoPlay
            loop
            preload="metadata"
            className="w-full h-full object-cover cursor-pointer"
            onClick={togglePlay}
          >
            <source src="/vedio.mp4" type="video/mp4" />
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Big Center Play/Pause button on hover or when paused */}
          {(!isPlaying || showControls) && (
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl z-20"
            >
              {isPlaying ? (
                <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          )}

          {/* Bottom Floating Control Bar */}
          <div
            className={`absolute bottom-0 inset-x-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 flex flex-col gap-2 z-20 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Scrubber track */}
            <div
              onClick={handleSeek}
              className="w-full h-1.5 hover:h-2.5 bg-white/30 hover:bg-white/40 rounded-full cursor-pointer transition-all overflow-hidden"
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Actions row */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="hover:text-primary transition-colors p-1"
                >
                  {isPlaying ? '⏸ Pause' : '▶ Play'}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="hover:text-primary transition-colors p-1 flex items-center gap-1.5"
                >
                  {isMuted ? '🔇 Unmute' : '🔊 Muted'}
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] text-white/70 font-mono hidden sm:inline">
                  Interactive Demo
                </span>
                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  className="hover:text-primary transition-colors p-1"
                >
                  ⛶ Fullscreen
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom App Footer Bar */}
        <div className="px-4 sm:px-6 py-3 bg-surface dark:bg-surface-elevated flex items-center justify-between text-xs text-muted-foreground border-t border-border/80">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-semibold text-foreground">You Aspirant Career Experience</span>
          </div>
          <span className="text-[11px]">Click anywhere to play/pause</span>
        </div>
      </div>
    </div>
  );
}
