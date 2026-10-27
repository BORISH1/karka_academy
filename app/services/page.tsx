import Link from 'next/link';
import { servicesData, faqsData } from '@/lib/data';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'Career Services | You Aspirant',
  description:
    'Explore our personalized career counselling, skill bootcamps, resume revamps, and higher education guidance.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border py-16 lg:py-24 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Our Offerings
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Comprehensive Career Guidance &{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              Training Solutions
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            From your very first career choice in school to executive career switches, our specialized services provide data-driven direction and practical skills.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`p-8 lg:p-12 rounded-3xl border border-border shadow-sm flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 === 1 ? 'bg-surface/80' : 'bg-card'
                }`}
              >
                <div className="lg:w-7/12">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-6">
                    {service.fullDesc}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-2">
                      Who is this for:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.audience.map((aud, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                        >
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-3">
                      Key Inclusions & Highlights:
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-foreground/80">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-5/12 w-full bg-muted/40 p-6 sm:p-8 rounded-2xl border border-border flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">
                      Engagement Duration
                    </div>
                    <div className="text-lg font-black text-foreground mb-6">
                      {service.duration}
                    </div>

                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    <ul className="text-xs text-foreground/90 space-y-2 mb-8">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                    <Button size="lg" className="w-full text-center font-bold shadow-md">
                      {service.ctaText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-surface border-t border-border transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
              Common Inquiries
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqsData.map((faq, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-2xl border border-border shadow-sm"
              >
                <h3 className="text-base font-bold text-card-foreground mb-2">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-black">Need Help Deciding Which Service Fits You?</h2>
          <p className="mt-4 text-white/90 text-sm sm:text-base">
            Talk to our admissions and counseling team for a personalized 15-minute diagnostic session.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="white" size="lg" className="shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Book Free Consultation Call →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
