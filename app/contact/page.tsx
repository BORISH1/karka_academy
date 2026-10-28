import { MultiStepLeadForm } from '@/components/MultiStepLeadForm';

export const metadata = {
  title: 'Book a Counselling Session | You Aspirant',
  description:
    'Schedule your free 1-on-1 career counselling consultation with You Aspirant mentors. Available online and at Chennai & Bangalore centers.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border pt-8 pb-12 sm:pt-10 sm:pb-16 lg:pt-12 lg:pb-16 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Free 30-Minute Discovery Session
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Take Control of Your Career Path Today
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Speak directly with an experienced career strategist. No generic advice, zero commercial pressure—just honest data-driven direction.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-20 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Multi-step form (7 cols) */}
            <div className="lg:col-span-7">
              <MultiStepLeadForm />
            </div>

            {/* Direct Contact & Locations (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-card border border-border p-8 rounded-3xl shadow-sm">
                <h3 className="text-xl font-bold text-card-foreground mb-6">Need Immediate Assistance?</h3>

                <div className="space-y-6 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 border border-emerald-500/20">
                      💬
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Instant WhatsApp</span>
                      <a
                        href="https://wa.me/919876543210"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-600 dark:text-emerald-400 hover:underline text-base"
                      >
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-muted-foreground mt-0.5">Average reply time: under 15 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-lg shrink-0 border border-primary/20">
                      📞
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Admissions Helpline</span>
                      <a href="tel:+919876543210" className="font-bold text-foreground hover:text-primary text-base">
                        +91 98765 43210
                      </a>
                      <p className="text-xs text-muted-foreground mt-0.5">Mon–Sat, 9:00 AM – 7:30 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center text-lg shrink-0 border border-accent/20">
                      ✉️
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Official Email</span>
                      <a href="mailto:contact@youaspirant.com" className="font-bold text-foreground hover:text-primary text-base">
                        contact@youaspirant.com
                      </a>
                      <p className="text-xs text-muted-foreground mt-0.5">Response guaranteed within 24 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-xl bg-muted text-muted-foreground flex items-center justify-center text-lg shrink-0 border border-border">
                      📍
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-bold uppercase block">Our Campus Centers</span>
                      <p className="font-bold text-foreground text-sm mt-0.5">Chennai & Bangalore Hubs</p>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        • Guindy Industrial Estate, Chennai, Tamil Nadu 600032<br />
                        • Sector 6, HSR Layout, Bengaluru, Karnataka 560102
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response-time promise */}
              <div className="bg-gradient-to-tr from-primary to-blue-700 text-white p-7 rounded-3xl shadow-lg">
                <h4 className="text-base font-bold mb-2">Our Response Promise</h4>
                <p className="text-xs text-white/90 leading-relaxed">
                  Every submission is reviewed by a qualified educator, not a telemarketer. We respect your schedule and privacy at every stage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
