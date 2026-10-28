import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coursesData } from '@/lib/data';
import { Button } from '@/components/Button';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const course = coursesData.find((c) => c.slug === params.slug);
  if (!course) return { title: 'Course Not Found' };
  return {
    title: `${course.title} | You Aspirant`,
    description: course.overview,
  };
}

export default function CourseDetailPage({ params }: PageProps) {
  const course = coursesData.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Banner */}
      <section className="bg-surface border-b border-border pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-14 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary transition-colors">
              Courses
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{course.category}</span>
          </div>

          <div className="max-w-3xl">
            {course.badge && (
              <span className="inline-block text-xs font-bold px-3 py-1 bg-accent/15 text-accent border border-accent/20 rounded-full mb-4">
                {course.badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-foreground leading-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-sm sm:text-lg text-muted-foreground leading-relaxed">
              {course.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5 text-amber-500 font-bold">
                ★ {course.rating} <span className="text-muted-foreground font-normal">({course.reviewCount} ratings)</span>
              </span>
              <span>•</span>
              <span>{course.studentsCount}+ alumni</span>
              <span>•</span>
              <span>Mode: <strong className="text-foreground">{course.mode}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sticky Sidebar */}
      <section className="py-16 bg-background flex-1 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-10">
              {/* Overview */}
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <h2 className="text-2xl font-bold text-card-foreground mb-4">Program Overview</h2>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {course.overview}
                </p>

                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-6 text-center">
                  <div className="bg-muted/40 p-3 rounded-xl border border-border/50">
                    <span className="block text-xs text-muted-foreground font-bold">DURATION</span>
                    <span className="text-sm font-bold text-foreground">{course.duration}</span>
                  </div>
                  <div className="bg-muted/40 p-3 rounded-xl border border-border/50">
                    <span className="block text-xs text-muted-foreground font-bold">LIVE HOURS</span>
                    <span className="text-sm font-bold text-foreground">{course.hours}</span>
                  </div>
                  <div className="bg-muted/40 p-3 rounded-xl border border-border/50">
                    <span className="block text-xs text-muted-foreground font-bold">LEVEL</span>
                    <span className="text-sm font-bold text-foreground">{course.level}</span>
                  </div>
                  <div className="bg-muted/40 p-3 rounded-xl border border-border/50">
                    <span className="block text-xs text-muted-foreground font-bold">PLACEMENT</span>
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">100% Support</span>
                  </div>
                </div>
              </div>

              {/* Technologies */}
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <h2 className="text-xl font-bold text-card-foreground mb-4">
                  Technologies & Frameworks Mastered
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {course.toolsCovered.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-xl bg-muted border border-border text-foreground text-xs font-bold font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Curriculum Modules */}
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Syllabus & Capstones</h2>
                    <p className="text-xs text-muted-foreground mt-1">Progressive, production-oriented weekly modules</p>
                  </div>
                  <span className="text-xs font-bold px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {course.curriculum.length} Modules
                  </span>
                </div>

                <div className="space-y-6">
                  {course.curriculum.map((mod, idx) => (
                    <div key={idx} className="border border-border rounded-2xl p-6 bg-surface/50">
                      <span className="text-xs font-black text-primary uppercase tracking-widest block mb-1">
                        {mod.week}
                      </span>
                      <h3 className="text-lg font-bold text-foreground mb-3">{mod.topic}</h3>

                      <div className="mb-4">
                        <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                          Core Concepts:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {mod.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs px-2.5 py-1 rounded-lg bg-card border border-border text-foreground/80 font-medium"
                            >
                              • {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-border flex items-start gap-2 text-xs">
                        <span className="font-bold text-primary shrink-0">Live Capstone:</span>
                        <span className="font-semibold text-foreground">{mod.project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Job Roles */}
              <div className="bg-card p-8 rounded-3xl border border-border shadow-sm">
                <h2 className="text-xl font-bold text-card-foreground mb-4">Eligible Career Roles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerRoles.map((role, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-surface border border-border text-xs sm:text-sm font-semibold text-foreground"
                    >
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-card rounded-3xl border border-border shadow-xl p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-foreground">{course.price}</span>
                  <span className="text-sm text-muted-foreground line-through font-medium">
                    {course.originalPrice}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                    Save 45%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mb-6">
                  Inclusive of live mentorship, code reviews, and mock interviews.
                </p>

                <div className="space-y-3 mb-6">
                  <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
                    <Button size="lg" className="w-full text-center font-bold shadow-md">
                      Enroll in Next Cohort
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center text-xs font-bold text-foreground bg-muted hover:bg-muted/80 rounded-xl transition-colors border border-border"
                  >
                    💬 Ask Questions on WhatsApp
                  </a>
                </div>

                <div className="border-t border-border pt-6 space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>No-Cost EMI options available</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>100% Live Interactive Weekend Classes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>Dedicated Senior Mentor Code Reviews</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    <span>7-Day Money-Back Guarantee</span>
                  </div>
                </div>
              </div>

              {/* Counselling Box */}
              <div className="bg-primary/10 border border-primary/20 rounded-3xl p-6 text-center">
                <h4 className="font-bold text-foreground text-sm mb-1">
                  Unsure if this track matches you?
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  Schedule a free 15-minute diagnostic call with our counselor.
                </p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-primary underline hover:text-primary/80"
                >
                  Schedule Diagnostic Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
