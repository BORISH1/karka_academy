'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { testimonialsData } from '@/lib/data';
import { Button } from '@/components/Button';

export default function TestimonialsPage() {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Student', 'Parent', 'Career Switcher', 'College Partner'];

  const filtered = testimonialsData.filter(
    (t) => filter === 'All' || t.category === filter
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border py-16 lg:py-24 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Testimonials & Reviews
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Trusted by Students, Parents &{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              Academic Leaders
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Read honest feedback from the thousands of learners and guardians whose futures were shaped by our career roadmaps.
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground shadow-sm scale-105'
                    : 'bg-card text-muted-foreground border border-border hover:bg-muted hover:text-foreground'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-card rounded-3xl border border-border shadow-sm p-7 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-500 font-bold text-sm tracking-widest">
                      {'★'.repeat(item.rating)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-border pt-4 flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm shrink-0 bg-muted">
                    {item.avatarUrl ? (
                      <Image
                        src={item.avatarUrl}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-tr from-primary to-accent text-white font-extrabold flex items-center justify-center text-xs">
                        {item.avatarText}
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-sm">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                    <p className="text-[11px] text-primary font-medium">{item.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-20 bg-surface border-t border-border text-center transition-colors">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">Experience the Difference Firsthand</h2>
          <p className="mt-3 text-muted-foreground text-xs sm:text-sm">Schedule your complimentary 30-minute career diagnostic call.</p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <Button size="lg" className="font-bold shadow-md">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
