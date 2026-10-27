import Link from "next/link";
import { notFound } from "next/navigation";
import { coursesData, Course } from "@/lib/data";
import { Button } from "@/components/Button";

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
  if (!course) return { title: "Course Not Found" };
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
      <section className="bg-neutral-900 text-white py-14 lg:py-20 border-b border-neutral-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-white">Courses</Link>
            <span>/</span>
            <span className="text-blue-400">{course.category}</span>
          </div>

          <div className="max-w-3xl">
            {course.badge && (
              <span className="inline-block text-xs font-semibold px-3 py-1 bg-blue-600 text-white rounded-full mb-4">
                {course.badge}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              {course.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-neutral-300 leading-relaxed">
              {course.tagline}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-neutral-300">
              <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                ★ {course.rating} <span className="text-neutral-400 font-normal">({course.reviewCount} ratings)</span>
              </span>
              <span>•</span>
              <span>{course.studentsCount}+ graduates</span>
              <span>•</span>
              <span>Mode: <strong>{course.mode}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16 bg-neutral-50/70 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">Course Overview</h2>
                <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">
                  {course.overview}
                </p>

                <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-neutral-100 pt-6 text-center">
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-xs text-neutral-400 font-semibold">DURATION</span>
                    <span className="text-sm font-bold text-neutral-800">{course.duration}</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-xs text-neutral-400 font-semibold">LIVE HOURS</span>
                    <span className="text-sm font-bold text-neutral-800">{course.hours}</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-xs text-neutral-400 font-semibold">LEVEL</span>
                    <span className="text-sm font-bold text-neutral-800">{course.level}</span>
                  </div>
                  <div className="bg-neutral-50 p-3 rounded-lg">
                    <span className="block text-xs text-neutral-400 font-semibold">PLACEMENT</span>
                    <span className="text-sm font-bold text-green-700">100% Support</span>
                  </div>
                </div>
              </div>

              {/* Tools Covered */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Tools & Technologies You Will Master</h2>
                <div className="flex flex-wrap gap-2.5">
                  {course.toolsCovered.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3.5 py-1.5 rounded-lg bg-blue-50/80 border border-blue-200/60 text-blue-800 text-xs font-semibold font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-neutral-900">Curriculum & Modules</h2>
                    <p className="text-xs text-neutral-500 mt-1">Structured week-by-week progressive learning path</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-green-100 text-green-800 rounded-full">
                    {course.curriculum.length} Core Modules
                  </span>
                </div>

                <div className="space-y-6">
                  {course.curriculum.map((mod, idx) => (
                    <div key={idx} className="border border-neutral-200/80 rounded-xl p-6 bg-neutral-50/40">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-extrabold text-blue-700 uppercase tracking-wider">
                          {mod.week}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-neutral-900 mb-3">{mod.topic}</h3>
                      <div className="mb-4">
                        <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider block mb-2">
                          Key Skills Acquired:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {mod.skills.map((skill, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-xs px-2.5 py-1 rounded bg-white border border-neutral-200 text-neutral-700"
                            >
                              • {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-neutral-200/60 flex items-start gap-2 text-xs text-neutral-700">
                        <span className="font-bold text-blue-700">Hands-on Capstone:</span>
                        <span className="font-medium text-neutral-800">{mod.project}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Roles */}
              <div className="bg-white p-8 rounded-2xl border border-neutral-200/90 shadow-sm">
                <h2 className="text-xl font-bold text-neutral-900 mb-4">Target Job Profiles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.careerRoles.map((role, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-neutral-50 border border-neutral-200/70 text-sm font-semibold text-neutral-800">
                      <span className="text-green-600 font-bold">✓</span>
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sticky Sidebar (4 Cols) */}
            <div className="lg:col-span-4 sticky top-24 space-y-6">
              <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-lg p-6 sm:p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-black text-neutral-900">{course.price}</span>
                  <span className="text-sm text-neutral-400 line-through">{course.originalPrice}</span>
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                    Save 45%
                  </span>
                </div>
                <p className="text-xs text-neutral-500 mb-6">Inclusive of all live sessions, code reviews, and certification.</p>

                <div className="space-y-3 mb-6">
                  <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
                    <Button className="w-full py-3.5 text-center font-bold text-base shadow-md">
                      Enroll in Next Cohort
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 text-center text-xs font-bold text-neutral-700 bg-neutral-100 rounded-md hover:bg-neutral-200 transition-colors"
                  >
                    💬 Ask Questions on WhatsApp
                  </a>
                </div>

                <div className="border-t border-neutral-100 pt-6 space-y-3 text-xs text-neutral-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Flexible No-Cost EMI starting from ₹2,500/mo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>100% Live Weekend Interactive Classes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Dedicated Mentor Code Reviews & Feedback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Resume Optimization & Mock Interview Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Lifetime Access to Class Recordings & Notes</span>
                  </div>
                </div>
              </div>

              {/* Need counselling box */}
              <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-6 text-center">
                <h4 className="font-bold text-blue-900 text-sm mb-1">Unsure if this track matches you?</h4>
                <p className="text-xs text-blue-700 mb-4">Book a free 15-minute diagnostic call with our counselor.</p>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-blue-700 underline hover:text-blue-900"
                >
                  Schedule Free Diagnostic Call →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
