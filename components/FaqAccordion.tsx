'use client';

import { useState } from 'react';
import { faqsData } from '@/lib/data';

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-surface border-t border-border transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqsData.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-6 font-bold text-base sm:text-lg text-foreground flex items-center justify-between gap-4 focus:outline-none focus:bg-muted/50"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`w-8 h-8 rounded-full bg-muted flex items-center justify-center text-sm font-black transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180 text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    ↓
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border/40 mt-1 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
