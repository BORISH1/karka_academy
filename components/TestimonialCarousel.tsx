'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';
import { useTheme } from '@/components/ThemeProvider';

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const { motionPaused } = useTheme();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = testimonialsData.slice(0, 6);
  const total = testimonials.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  // Auto-slide effect (every 4.5 seconds)
  useEffect(() => {
    if (isPaused || motionPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, motionPaused, handleNext]);

  // Mobile Touch Swipe Handling
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section
      className="py-20 sm:py-24 bg-background transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="Student and Parent Testimonials"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Social Proof & Trust
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Loved by Students, Parents & Recruiters
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Swipe or use arrow keys to navigate • Auto-slides every few seconds
          </p>
        </div>

        {/* Carousel Outer Card with Overflow Hidden for smooth sliding */}
        <div
          className="relative bg-card border border-border rounded-3xl shadow-xl overflow-hidden group"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Subtle top ambient indicator bar */}
          <div className="h-1 w-full bg-border/40 overflow-hidden relative">
            <div
              key={currentIndex}
              className={`h-full bg-primary/80 transition-all duration-[4500ms] ease-linear ${
                isPaused || motionPaused ? 'opacity-40 animate-none' : 'w-full'
              }`}
              style={{
                width: isPaused ? '100%' : undefined,
                animation: !isPaused && !motionPaused ? 'progress 4.5s linear' : 'none',
              }}
            />
          </div>

          {/* Sliding Flex Track Container */}
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((item, idx) => (
              <div
                key={item.id || idx}
                className="w-full shrink-0 p-8 sm:p-12 flex flex-col justify-between"
                aria-hidden={currentIndex !== idx}
              >
                <div>
                  {/* Rating & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1.5">
                      <span className="text-amber-500 font-bold text-lg tracking-widest">
                        {'★'.repeat(item.rating)}
                      </span>
                      <span className="text-xs font-bold text-muted-foreground ml-1">
                        5.0
                      </span>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.category}
                    </span>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base sm:text-xl text-foreground/90 font-medium leading-relaxed italic mb-8 min-h-[5rem] sm:min-h-[4.5rem]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                {/* Author Info & Slide Controls */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-primary/30 shadow-md shrink-0 bg-muted">
                      {item.avatarUrl ? (
                        <Image
                          src={item.avatarUrl}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-tr from-primary to-accent text-white font-extrabold flex items-center justify-center text-sm">
                          {item.avatarText}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-base sm:text-lg">{item.name}</h4>
                      <p className="text-xs text-muted-foreground">{item.role}</p>
                      <p className="text-[11px] text-primary font-medium">{item.affiliation}</p>
                    </div>
                  </div>

                  {/* Navigation Arrow Controls */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={handlePrev}
                      aria-label="Previous testimonial"
                      className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-muted active:scale-95 text-foreground flex items-center justify-center text-sm transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none cursor-pointer shadow-sm hover:shadow"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={handleNext}
                      aria-label="Next testimonial"
                      className="w-10 h-10 rounded-full border border-border bg-surface hover:bg-muted active:scale-95 text-foreground flex items-center justify-center text-sm transition-all focus:ring-2 focus:ring-primary/40 focus:outline-none cursor-pointer shadow-sm hover:shadow"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicator Dots & Auto-slide Status */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? 'w-8 bg-primary shadow-sm shadow-primary/50'
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
