'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/courses', label: 'Courses' },
    { href: '/stories', label: 'Success Stories' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Skip to content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-primary text-primary-foreground font-semibold rounded-md shadow-lg outline-none"
      >
        Skip to main content
      </a>

      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-surface/90 backdrop-blur-md shadow-sm border-b border-border py-2.5'
            : 'bg-surface/70 backdrop-blur-sm border-b border-border/50 py-3.5'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0" aria-label="You Aspirant Home">
            <div className="relative h-10 sm:h-12 w-40 sm:w-48 transition-transform duration-200 group-hover:scale-[1.02] dark:bg-white/95 dark:px-2.5 dark:py-1 dark:rounded-xl dark:shadow-sm">
              <Image
                src="/logo.png"
                alt="You Aspirant Logo"
                fill
                priority
                className="object-contain object-left"
                sizes="(max-width: 640px) 160px, 192px"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wide text-muted-foreground hover:text-primary transition-colors relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right actions: ThemeToggle + CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-xs font-bold rounded-full text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95"
            >
              Book Free Session
            </Link>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/40"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-surface border-b border-border px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-semibold text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-border mt-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-lg text-xs font-bold text-primary-foreground bg-primary hover:bg-primary/90 shadow-sm"
              >
                Book Free Counselling Session
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
