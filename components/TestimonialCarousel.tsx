'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';
import { useTheme } from '@/components/ThemeProvider';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { motionPaused } = useTheme();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = testimonialsData.slice(0, 5);

  useEffect(() => {
    if (isPaused || motionPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, motionPaused, testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      className="py-24 bg-background transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Student and Parent Testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Social Proof & Trust
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Loved by Students, Parents & Recruiters
          </h2>
        </div>

        {/* Active card */}
        <div className="relative bg-card border border-border rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-amber-500 font-bold text-lg tracking-widest">
              {'★'.repeat(current.rating)}
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
              {current.category}
            </span>
          </div>

          <p className="text-base sm:text-xl text-foreground/90 font-medium leading-relaxed italic mb-8">
            &ldquo;{current.quote}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border">
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md shrink-0 bg-muted">
                {current.avatarUrl ? (
                  <Image
                    src={current.avatarUrl}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-tr from-primary to-accent text-white font-extrabold flex items-center justify-center text-sm">
                    {current.avatarText}
                  </div>
                )}
              </div>
              <div>
                <h4 className="font-bold text-foreground text-base sm:text-lg">{current.name}</h4>
                <p className="text-xs text-muted-foreground">{current.role}</p>
                <p className="text-[11px] text-primary font-medium">{current.affiliation}</p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 self-end sm:self-center">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-muted text-foreground flex items-center justify-center text-sm transition-colors focus:ring-2 focus:ring-primary/40 focus:outline-none"
              >
                ←
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-muted text-foreground flex items-center justify-center text-sm transition-colors focus:ring-2 focus:ring-primary/40 focus:outline-none"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
