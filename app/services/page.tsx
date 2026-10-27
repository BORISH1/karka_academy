import Link from "next/link";
import { servicesData, faqsData } from "@/lib/data";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Career Services | You Aspirant",
  description: "Explore our personalized career counselling, skill bootcamps, resume revamps, and higher education guidance.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-24 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Our Offerings
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Comprehensive Career Guidance &{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Training Solutions
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From your very first career choice in school to executive career switches, our specialized services provide data-driven direction and practical skills.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="space-y-16">
            {servicesData.map((service, index) => (
              <div
                key={service.id}
                id={service.slug}
                className={`p-8 lg:p-12 rounded-2xl border border-neutral-200/90 shadow-sm flex flex-col lg:flex-row gap-10 items-start ${
                  index % 2 === 1 ? "bg-neutral-50/60" : "bg-white"
                }`}
              >
                <div className="lg:w-7/12">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">{service.title}</h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">{service.fullDesc}</p>

                  <div className="mb-6">
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-2">Who is this for:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.audience.map((aud, i) => (
                        <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-700">
                          {aud}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs uppercase font-bold text-neutral-400 tracking-wider mb-3">Key Inclusions & Highlights:</h4>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      {service.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:w-5/12 w-full bg-neutral-100/70 p-6 rounded-xl border border-neutral-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-1">Engagement Duration</div>
                    <div className="text-lg font-bold text-neutral-900 mb-6">{service.duration}</div>

                    <div className="text-xs text-neutral-500 font-medium uppercase tracking-wider mb-2">Key Deliverables</div>
                    <ul className="text-xs text-neutral-700 space-y-1.5 mb-8">
                      {service.deliverables.map((del, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                    <Button className="w-full text-center py-3 font-semibold shadow-sm">
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
      <section className="py-20 bg-neutral-50 border-t border-neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-widest text-blue-600 font-bold">FAQ</h2>
            <h3 className="mt-2 text-3xl font-bold text-neutral-900">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            {faqsData.map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-neutral-200/90 shadow-sm">
                <h4 className="text-base font-bold text-neutral-900 mb-2">{faq.question}</h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-extrabold">Need Help Deciding Which Service Fits You?</h2>
          <p className="mt-4 text-blue-100">Talk to our admissions and counseling team for a personalized 15-minute guidance session.</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-white text-blue-700 hover:bg-neutral-100 font-bold px-8 py-3.5">
                Book Free Consultation Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
