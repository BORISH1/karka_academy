'use client';

import { useState } from 'react';
import Link from 'next/link';
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
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-24 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Testimonials & Reviews
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Trusted by Students, Parents &{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Academic Leaders
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Read honest feedback from the thousands of learners and guardians whose futures were shaped by our career roadmaps.
          </p>

          {/* Filter tabs */}
          <div className="mt-10 flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                {cat}s
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-neutral-50/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-amber-500 font-bold text-sm tracking-widest">
                      {"★".repeat(item.rating)}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                      {item.category}
                    </span>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-neutral-100 pt-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-800 font-bold flex items-center justify-center text-sm">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-900 text-sm">{item.name}</h4>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                    <p className="text-[11px] text-blue-600 font-medium">{item.affiliation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-16 bg-white border-t border-neutral-200 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900">Experience the Difference Firsthand</h2>
          <p className="mt-3 text-neutral-600 text-sm">Schedule your complimentary 30-minute career diagnostic call.</p>
          <div className="mt-6 flex justify-center">
            <Link href="/contact">
              <Button className="px-8 py-3 text-sm font-bold shadow-md">
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
