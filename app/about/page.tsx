import Link from "next/link";
import { teamMembersData, statsData } from "@/lib/data";
import { Button } from "@/components/Button";

export const metadata = {
  title: "About Us | You Aspirant",
  description: "Learn about the mission, vision, leadership team, and student-first philosophy driving You Aspirant.",
};

export default function AboutPage() {
  const companyMilestones = [
    { year: "2020", title: "Founded with a Mission", desc: "Started by industry veterans to bridge the massive gap between academic curricula and market requirements." },
    { year: "2021", title: "First 1,000 Students Guided", desc: "Achieved 91% placement and advisory satisfaction across initial career counselling cohorts." },
    { year: "2023", title: "Institutional Campus Network", desc: "Partnered with 25+ degree and engineering colleges across South India for employability bootcamps." },
    { year: "2024", title: "10,000+ Success Milestone", desc: "Over 10,000 aspirants trained, with alumni thriving at Fortune 500 tech firms and unicorn startups." },
  ];

  const values = [
    {
      title: "Radical Transparency",
      desc: "We never make unrealistic promises or fake guarantees. We offer honest assessments backed by actual industry data and student capabilities.",
      icon: "🔍",
    },
    {
      title: "Practitioner-Led Education",
      desc: "Our instructors and mentors are active tech leads, hiring managers, and career strategists who know exactly what recruiters test for today.",
      icon: "💼",
    },
    {
      title: "Outcome-Driven Mentorship",
      desc: "We don't measure success by certificates issued; we measure it by interviews cracked, salary hikes achieved, and long-term career fulfillment.",
      icon: "📈",
    },
    {
      title: "Empathetic Guidance",
      desc: "We recognize that career confusion causes severe mental anxiety for students and parents alike. Our counselors listen without judgment.",
      icon: "🤝",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-24 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Our Mission & Story
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Empowering Every Aspirant to Find Their{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              True North
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            At You Aspirant, we believe every individual possesses distinct talents. Our goal is to transform ambiguity into clarity through scientific evaluation, industry training, and compassionate mentoring.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">What Guides Us</h2>
            <h3 className="mt-2 text-3xl font-bold text-neutral-900">Our Guiding Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-xl border border-neutral-200/80 bg-neutral-50/50 hover:bg-white hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{val.icon}</div>
                <h4 className="text-lg font-bold text-neutral-900 mb-2">{val.title}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Journey */}
      <section className="py-20 bg-neutral-50 border-y border-neutral-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Our Journey</h2>
            <h3 className="mt-2 text-3xl font-bold text-neutral-900">From an Idea to 10,000+ Success Stories</h3>
          </div>

          <div className="space-y-8">
            {companyMilestones.map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row items-start gap-6 bg-white p-6 rounded-xl border border-neutral-200/80 shadow-sm">
                <div className="text-2xl font-black text-blue-600 min-w-[70px]">{item.year}</div>
                <div>
                  <h4 className="text-lg font-bold text-neutral-900">{item.title}</h4>
                  <p className="text-sm text-neutral-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">Meet the Leadership</h2>
            <h3 className="mt-2 text-3xl font-bold text-neutral-900">Built by Industry Practitioners</h3>
            <p className="mt-4 text-neutral-600">Seasoned leaders bringing Fortune 500 and top-tier academic expertise directly to your career journey.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembersData.map((member, idx) => (
              <div key={idx} className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xl mb-4">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h4 className="text-lg font-bold text-neutral-900">{member.name}</h4>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-neutral-500 mt-1 font-medium">{member.credentials}</div>
                  <p className="text-xs text-neutral-600 mt-3 leading-relaxed">{member.bio}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-100 text-[11px] font-semibold text-neutral-500">
                  {member.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold">Have Questions About Your Career Path?</h2>
          <p className="mt-3 text-blue-100">Schedule a 30-minute introductory call with our senior counselors today.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-neutral-100 font-bold px-8 py-3">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
