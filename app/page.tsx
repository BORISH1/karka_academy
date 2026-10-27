import Link from "next/link";
import { Button } from "@/components/Button";

export default function Home() {
  const stats = [
    { label: "Students Guided", value: "10,000+" },
    { label: "Career Mentors", value: "50+" },
    { label: "Placement Rate", value: "94%" },
    { label: "Partner Companies", value: "120+" },
  ];

  const services = [
    {
      title: "1-on-1 Career Counselling",
      desc: "Personalized psychometric evaluation and guidance from seasoned industry professionals to find your true career path.",
      icon: "🎯",
      href: "/services",
    },
    {
      title: "Job-Ready Skill Bootcamps",
      desc: "Intensive, hands-on training programs in Full Stack Development, Data Analytics, Cloud Computing, and Digital Marketing.",
      icon: "💻",
      href: "/courses",
    },
    {
      title: "Interview Prep & Resume Crafting",
      desc: "Mock interviews, portfolio reviews, and ATS-optimized resume building to ensure you stand out to top recruiters.",
      icon: "📄",
      href: "/services",
    },
    {
      title: "College & Higher Ed Advisory",
      desc: "Strategic guidance on selecting colleges, stream specialization, entrance exams, and study abroad pathways.",
      icon: "🎓",
      href: "/services",
    },
  ];

  const popularCourses = [
    {
      title: "Full Stack Web Development",
      duration: "16 Weeks",
      level: "Beginner to Advanced",
      tag: "Most Popular",
      desc: "Master Next.js, React, Node.js, and Cloud deployment with real-world capstone projects and mentor code reviews.",
    },
    {
      title: "Data Science & AI Essentials",
      duration: "12 Weeks",
      level: "Intermediate",
      tag: "High Demand",
      desc: "Learn Python, SQL, Machine Learning pipelines, and Generative AI fundamentals to land data-driven roles.",
    },
    {
      title: "Corporate Career Accelerator",
      duration: "6 Weeks",
      level: "All Levels",
      tag: "Career Switch",
      desc: "Soft skills, business communication, agile workflows, and executive leadership mentoring for professionals.",
    },
  ];

  const testimonials = [
    {
      quote:
        "You Aspirant changed my entire perspective. I was confused between MBA and tech. Their 1-on-1 mentor guided me to Data Analytics, and I landed an offer within 3 months!",
      name: "Priya Sharma",
      role: "Associate Analyst @ Deloitte",
      batch: "Class of 2024",
    },
    {
      quote:
        "The curriculum is 100% practical. No boring theory. The mock interviews were tougher than the actual company interviews, which made the real thing a breeze.",
      name: "Arun Kumar",
      role: "Full Stack Developer @ Zoho",
      batch: "Class of 2024",
    },
    {
      quote:
        "As a parent, I was stressed about my son's engineering choices. You Aspirant's career roadmap gave us clarity and total peace of mind.",
      name: "Meenakshi Sundaram",
      role: "Parent of B.Tech Aspirant",
      batch: "Advisory 2023",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100/80 text-blue-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Transforming Careers Across India
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.15]">
              Discover Your Potential.{" "}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                Build an Unstoppable Career.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              We provide expert 1-on-1 career guidance, industry-certified tech bootcamps, and personalized mentoring to help students and professionals succeed.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <Button className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold shadow-lg shadow-blue-600/20">
                  Book Free Counselling Session
                </Button>
              </Link>
              <Link href="/courses">
                <Button variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-base font-semibold">
                  Explore Courses & Fees
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-xs text-neutral-500">
              <span className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">✓</span> 100% Free Initial Consultation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">✓</span> Certified Career Mentors
              </span>
              <span className="flex items-center gap-1.5">
                <span className="text-green-600 font-bold">✓</span> Placement Support
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">{stat.value}</span>
                <span className="text-sm font-medium text-blue-100 mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Our Services</h2>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Tailored Guidance for Every Stage of Your Career
            </h3>
            <p className="mt-4 text-neutral-600">
              Whether you are in school, finishing college, or looking to switch industries, we have structured paths for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200/80 hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl mb-4">{item.icon}</div>
                  <h4 className="text-xl font-semibold text-neutral-900 mb-2">{item.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100">
                  <Link href={item.href} className="text-sm font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1">
                    Learn more <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Featured Programs</h2>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight">
              Industry-Aligned Training Bootcamps
            </h3>
            <p className="mt-4 text-neutral-600">
              Built in partnership with hiring managers to teach in-demand skills through practical, portfolio-worthy projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 bg-blue-50 text-blue-700 rounded-full">
                      {course.tag}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">{course.duration}</span>
                  </div>
                  <h4 className="text-xl font-bold text-neutral-900 mb-2">{course.title}</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">{course.desc}</p>
                </div>

                <div>
                  <div className="text-xs text-neutral-500 mb-4 flex items-center justify-between border-t border-neutral-100 pt-4">
                    <span>Level: <strong>{course.level}</strong></span>
                    <span>Live Mentorship</span>
                  </div>
                  <Link href="/courses">
                    <Button variant="secondary" className="w-full text-sm">
                      View Syllabus & Enroll
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-400 font-bold">Student Success</h2>
            <h3 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
              Real Aspirants. Real Breakthroughs.
            </h3>
            <p className="mt-4 text-neutral-400">
              Hear from candidates who trusted us with their careers and landed dream roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-neutral-800/80 border border-neutral-700/80 rounded-2xl p-6 flex flex-col justify-between"
              >
                <p className="text-neutral-300 italic text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="border-t border-neutral-700/50 pt-4">
                  <div className="font-semibold text-white text-base">{t.name}</div>
                  <div className="text-xs text-blue-400">{t.role}</div>
                  <div className="text-[11px] text-neutral-500 mt-0.5">{t.batch}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Lead Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Take the Next Step in Your Career?
          </h2>
          <p className="mt-4 text-blue-100 text-base sm:text-lg">
            Schedule a confidential 30-minute consultation with an experienced career strategist today. Free of cost.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-neutral-100 px-8 py-3.5 text-base font-bold shadow-lg">
                Book Your Free Session Now
              </Button>
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold border border-white/30 rounded-md hover:bg-white/10 transition-colors"
            >
              💬 WhatsApp Us Directly
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
