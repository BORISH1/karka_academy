import Link from 'next/link';
import { teamMembersData, statsData } from '@/lib/data';
import { Button } from '@/components/Button';

export const metadata = {
  title: 'About Us | You Aspirant',
  description:
    'Learn about the mission, vision, leadership team, and student-first philosophy driving You Aspirant.',
};

export default function AboutPage() {
  const companyMilestones = [
    {
      year: '2020',
      title: 'Founded with a Mission',
      desc: 'Started by industry veterans to bridge the massive gap between academic curricula and market requirements.',
    },
    {
      year: '2021',
      title: 'First 1,000 Students Guided',
      desc: 'Achieved 91% placement and advisory satisfaction across initial career counselling cohorts.',
    },
    {
      year: '2023',
      title: 'Institutional Campus Network',
      desc: 'Partnered with 25+ degree and engineering colleges across South India for employability bootcamps.',
    },
    {
      year: '2024',
      title: '10,000+ Success Milestone',
      desc: 'Over 10,000 aspirants trained, with alumni thriving at Fortune 500 tech firms and unicorn startups.',
    },
  ];

  const values = [
    {
      title: 'Radical Transparency',
      desc: 'We never make unrealistic promises or fake guarantees. We offer honest assessments backed by actual industry data and student capabilities.',
      icon: '🔍',
    },
    {
      title: 'Practitioner-Led Education',
      desc: 'Our instructors and mentors are active tech leads, hiring managers, and career strategists who know exactly what recruiters test for today.',
      icon: '💼',
    },
    {
      title: 'Outcome-Driven Mentorship',
      desc: 'We do not measure success by certificates issued; we measure it by interviews cracked, salary hikes achieved, and long-term career fulfillment.',
      icon: '📈',
    },
    {
      title: 'Empathetic Guidance',
      desc: 'We recognize that career confusion causes severe mental anxiety for students and parents alike. Our counselors listen without judgment.',
      icon: '🤝',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border py-16 lg:py-24 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Our Mission & Story
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Empowering Every Aspirant to Find Their{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              True North
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            At You Aspirant, we believe every individual possesses distinct talents. Our goal is to transform ambiguity into clarity through scientific evaluation, industry training, and compassionate mentoring.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
              What Guides Us
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground">Our Guiding Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{val.icon}</div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">{val.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="py-20 bg-surface border-y border-border transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 px-3.5 py-1 rounded-full">
              Growth Milestones
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground">
              From an Idea to 10,000+ Success Stories
            </h2>
          </div>

          <div className="space-y-6">
            {companyMilestones.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start gap-6 bg-card p-6 rounded-2xl border border-border shadow-sm"
              >
                <div className="text-2xl font-black text-primary min-w-[70px]">{item.year}</div>
                <div>
                  <h3 className="text-lg font-bold text-card-foreground">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
              Our Mentors
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-foreground">
              Built by Industry Practitioners
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground">
              Seasoned leaders bringing Fortune 500 and top-tier academic expertise directly to your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembersData.map((member, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-accent text-white flex items-center justify-center font-black text-lg mb-4 shadow-md">
                    {member.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <h3 className="text-base font-bold text-card-foreground">{member.name}</h3>
                  <div className="text-xs font-semibold text-primary mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-muted-foreground mt-1 font-medium">{member.credentials}</div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{member.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border text-[11px] font-semibold text-muted-foreground">
                  {member.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-black">Have Questions About Your Career Path?</h2>
          <p className="mt-3 text-white/90 text-sm">
            Schedule a 30-minute introductory call with our senior counselors today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button variant="white" size="lg" className="shadow-2xl hover:scale-105 active:scale-95 transition-all">
                Book a Free Consultation →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
