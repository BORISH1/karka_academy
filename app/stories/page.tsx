import Link from 'next/link';
import { successStoriesData } from '@/lib/data';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Success Stories | You Aspirant',
  description:
    'Real career transformations from students, non-tech career switchers, and graduates who landed top roles.',
};

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border py-16 lg:py-24 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Real Results
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            From Career Confusion to{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              High-Impact Offers
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Discover how students from tier-3 colleges, professionals stuck in career stagnation, and non-tech graduates transformed their trajectories with You Aspirant.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {successStoriesData.map((story) => (
              <div
                key={story.id}
                className="bg-card rounded-3xl border border-border shadow-sm p-8 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{story.name}</h3>
                      <div className="text-sm font-semibold text-primary mt-0.5">
                        {story.currentRole} @ <span className="text-foreground">{story.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full whitespace-nowrap">
                      {story.salaryHike}
                    </span>
                  </div>

                  <div className="bg-muted/40 p-4 rounded-2xl border border-border/60 mb-6 text-xs space-y-1.5">
                    <div>
                      <span className="text-muted-foreground font-bold uppercase text-[10px]">PREVIOUS BACKGROUND:</span>
                      <p className="text-foreground font-medium">{story.previousRole}</p>
                    </div>
                    <div className="pt-2 border-t border-border/60">
                      <span className="text-muted-foreground font-bold uppercase text-[10px]">PROGRAM COMPLETED:</span>
                      <p className="text-primary font-bold">{story.program} ({story.year})</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="border-t border-border pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="text-xs text-foreground/85 space-y-1.5">
                      {story.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium">Verified Alumnus • {story.company}</span>
                  <Link href="/contact" className="text-xs font-bold text-primary hover:underline">
                    Apply like {story.name.split(' ')[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Your Success Story Begins with One Decision</h2>
          <p className="mt-4 text-white/90 text-sm sm:text-base">
            Don&apos;t let confusion or fear delay your potential. Schedule your free 1-on-1 counseling session with our experts today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="white" size="lg" className="shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Book Free Consultation →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
