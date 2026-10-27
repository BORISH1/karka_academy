'use client';

export function ProcessJourney() {
  const steps = [
    {
      step: '01',
      title: 'Assess',
      tagline: 'Scientific Evaluation',
      desc: 'Psychometric personality profiling, cognitive reasoning diagnostics, and identifying your innate strengths.',
      icon: '🧠',
    },
    {
      step: '02',
      title: 'Plan',
      tagline: 'Personalized Roadmap',
      desc: '1-on-1 strategic counselling to map degrees, certifications, college tiers, or job switch milestones.',
      icon: '🗺️',
    },
    {
      step: '03',
      title: 'Train',
      tagline: 'Production-Grade Coding',
      desc: 'Practical, live cohorts led by active engineering leads. Real Git PR reviews, zero fluff or toy projects.',
      icon: '⚡',
    },
    {
      step: '04',
      title: 'Place',
      tagline: 'Career Breakthrough',
      desc: 'ATS resume revamp, aggressive mock interview drilling, and direct referrals across 120+ hiring partner firms.',
      icon: '🚀',
    },
  ];

  return (
    <section className="py-24 bg-surface border-y border-border transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            The Aspirant Pathway
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            How We Turn Confusion into Certainty
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
            Our proven 4-stage methodology moves you from uncertainty to an industry-ready professional offer.
          </p>
        </div>

        {/* Process nodes & animated path */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div
            className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 -translate-y-1/2 bg-gradient-to-r from-primary/30 via-accent/40 to-primary/30 -z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {item.icon}
                    </span>
                    <span className="text-xs font-black tracking-widest text-muted-foreground/60">
                      STEP {item.step}
                    </span>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-accent block mb-1">
                    {item.tagline}
                  </span>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center gap-1.5 text-xs text-primary font-semibold">
                  <span>Explore Stage {item.step}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
