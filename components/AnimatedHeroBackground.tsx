'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from '@/components/ThemeProvider';

export function AnimatedHeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { resolvedTheme, motionPaused } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion || motionPaused) {
      return;
    }

    // Detect low-power device
    const isLowPower =
      (typeof navigator !== 'undefined' &&
        navigator.hardwareConcurrency &&
        navigator.hardwareConcurrency <= 4) ||
      false;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle setup
    const particleCount = isLowPower ? 16 : 40;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        baseAlpha: Math.random() * 0.4 + 0.2,
      });
    }

    // Gentle mouse influence
    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;
    let isVisible = true;

    // Visibility change listener (pause when tab hidden)
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // IntersectionObserver to pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting && !document.hidden;
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const isDark = resolvedTheme === 'dark';
    const primaryColor = isDark ? '59, 130, 246' : '37, 99, 235';
    const accentColor = isDark ? '251, 191, 36' : '245, 158, 11';

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Render glowing drifting mesh orbs
      const time = Date.now() * 0.0005;
      const orb1X = width * 0.25 + Math.sin(time) * 60;
      const orb1Y = height * 0.3 + Math.cos(time * 0.8) * 40;
      const orb2X = width * 0.75 + Math.cos(time * 0.9) * 70;
      const orb2Y = height * 0.4 + Math.sin(time * 0.7) * 50;

      const gradient1 = ctx.createRadialGradient(
        orb1X,
        orb1Y,
        10,
        orb1X,
        orb1Y,
        Math.min(width, height) * 0.45
      );
      gradient1.addColorStop(
        0,
        isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(37, 99, 235, 0.10)'
      );
      gradient1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient1;
      ctx.fillRect(0, 0, width, height);

      const gradient2 = ctx.createRadialGradient(
        orb2X,
        orb2Y,
        10,
        orb2X,
        orb2Y,
        Math.min(width, height) * 0.4
      );
      gradient2.addColorStop(
        0,
        isDark ? 'rgba(251, 191, 36, 0.08)' : 'rgba(245, 158, 11, 0.08)'
      );
      gradient2.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      // Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around borders
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Subtle mouse repulsion
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.x -= (dx / dist) * 0.8;
          p.y -= (dy / dist) * 0.8;
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${primaryColor}, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles with subtle lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distNodes = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (distNodes < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${primaryColor}, ${
              (1 - distNodes / 110) * 0.15
            })`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      observer.disconnect();
    };
  }, [resolvedTheme, motionPaused]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden select-none -z-10"
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="w-full h-full block opacity-90" />
      {/* Subtle dotted overlay grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgb(var(--foreground)/0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
    </div>
  );
}
