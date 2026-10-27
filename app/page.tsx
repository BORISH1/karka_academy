import Link from 'next/link';
import { Button } from '@/components/Button';
import { HeroVideoBackground } from '@/components/HeroVideoBackground';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { ProcessJourney } from '@/components/ProcessJourney';
import { TestimonialCarousel } from '@/components/TestimonialCarousel';
import { FaqAccordion } from '@/components/FaqAccordion';
import { servicesData, coursesData, successStoriesData } from '@/lib/data';

export default function Home() {
  const featuredCourses = coursesData.slice(0, 3);
  const featuredStories = successStoriesData.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Front Hero Section with Ambient Video Background */}
      <section className="relative overflow-hidden min-h-[85vh] lg:min-h-[88vh] flex items-center justify-center pt-24 pb-24 lg:pt-32 lg:pb-32 border-b border-border/60">
        <HeroVideoBackground />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Animated Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              <span>Admissions Open for 2025 Placement Cohorts</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.1] mb-6">
              Discover Your Potential.{' '}
              <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                Build an Unstoppable Career.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10">
              Transforming ambiguity into career clarity. Scientific 1-on-1 career counselling, live software engineering bootcamps, and guaranteed mock interview coaching.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto shadow-xl">
                  Book Free Career Counselling Session
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto backdrop-blur-md bg-surface/80 hover:bg-surface border border-border shadow-md">
                  Explore Courses & Fees →
                </Button>
              </Link>
            </div>

            {/* Quick Proof Badges */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface/75 dark:bg-surface-elevated/75 backdrop-blur-md border border-border/80 shadow-sm">
                <span className="text-emerald-500 font-bold">✓</span> 100% Free Initial Diagnostic Call
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface/75 dark:bg-surface-elevated/75 backdrop-blur-md border border-border/80 shadow-sm">
                <span className="text-emerald-500 font-bold">✓</span> 1-on-1 Senior Industry Mentors
              </span>
              <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-surface/75 dark:bg-surface-elevated/75 backdrop-blur-md border border-border/80 shadow-sm">
                <span className="text-emerald-500 font-bold">✓</span> Placement Referral Network
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar with Viewport Animated Counters */}
      <section className="bg-surface border-b border-border py-12 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-primary">
                <AnimatedCounter end={10000} suffix="+" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1.5">
                Students Guided
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-primary">
                <AnimatedCounter end={94} suffix="%" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1.5">
                Placement Success Rate
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-primary">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1.5">
                Active Tech Mentors
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-black text-primary">
                <AnimatedCounter end={120} suffix="+" />
              </span>
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mt-1.5">
                Hiring Partner Firms
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
              Tailored Guidance
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Services Designed for Every Career Crossroad
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Whether you are a school leaver choosing a stream, a college graduate aiming for placements, or a professional planning a domain switch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicesData.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="text-4xl mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-border">
                  <Link
                    href={`/services#${item.slug}`}
                    className="text-xs font-bold text-primary group-hover:text-primary/80 flex items-center gap-1.5"
                  >
                    <span>Learn details & deliverables</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services">
              <Button variant="secondary" size="md">
                View All Guidance Services →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Training Programs */}
      <section className="py-24 bg-surface border-y border-border transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-accent bg-accent/10 text-accent px-3.5 py-1 rounded-full">
              Live Cohorts
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Featured Job-Ready Bootcamps
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Practical curricula taught live by senior engineers with capstone code reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-card border border-border rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-muted-foreground">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    <Link href={`/courses/${course.slug}`} className="hover:text-primary transition-colors">
                      {course.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-muted-foreground line-clamp-2 mb-6">
                    {course.tagline}
                  </p>

                  <div className="bg-muted/50 p-3 rounded-xl border border-border/60 text-xs mb-6">
                    <span className="text-[10px] text-muted-foreground font-bold uppercase block mb-1">
                      Tools Learned:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {course.toolsCovered.slice(0, 4).map((tool, i) => (
                        <span key={i} className="text-[11px] font-mono text-foreground font-semibold">
                          {tool}{i < 3 ? ' •' : ''}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground line-through mr-1.5">
                      {course.originalPrice}
                    </span>
                    <span className="text-lg font-black text-foreground">{course.price}</span>
                  </div>
                  <Link href={`/courses/${course.slug}`}>
                    <Button size="sm">View Syllabus</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/courses">
              <Button variant="secondary">Browse All 6 Training Tracks →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Journey ("How it Works") */}
      <ProcessJourney />

      {/* Featured Student Outcomes */}
      <section className="py-24 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3.5 py-1 rounded-full">
              Real Impact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              Recent Breakthrough Transitions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <div
                key={story.id}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-foreground text-lg">{story.name}</h3>
                      <div className="text-xs font-semibold text-primary">{story.currentRole}</div>
                      <div className="text-[11px] text-muted-foreground font-bold">{story.company}</div>
                    </div>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                      {story.salaryHike}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed italic mb-4">
                    &ldquo;{story.story.slice(0, 150)}...&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex justify-between items-center text-xs">
                  <span className="text-muted-foreground font-medium">{story.program.split(' ')[0]} Track</span>
                  <Link href="/stories" className="font-bold text-primary hover:underline">
                    Read story →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/stories">
              <Button variant="secondary">View All Verified Alumni Stories →</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <TestimonialCarousel />

      {/* High-Converting Lead Banner with Animated Gradient Border */}
      <section className="py-20 bg-background transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="relative p-1 rounded-3xl bg-gradient-to-r from-primary via-accent to-primary shadow-2xl">
            <div className="bg-surface rounded-[22px] p-8 sm:p-14 text-center">
              <h2 className="text-3xl sm:text-4xl font-black text-foreground tracking-tight">
                Ready to Take the Next Leap in Your Career?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
                Schedule a confidential, complimentary 30-minute career diagnostic call with our senior strategist. Zero pressure, pure actionable clarity.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <Button size="lg" className="w-full sm:w-auto shadow-xl">
                    Book Free 1-on-1 Counselling
                  </Button>
                </Link>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-foreground border border-border rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2"
                >
                  <span>💬 Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
