import Link from "next/link";
import { successStoriesData } from "@/lib/data";
import { Button } from "@/components/Button";

export const metadata = {
  title: "Success Stories | You Aspirant",
  description: "Real career transformations from students, non-tech career switchers, and graduates who landed top roles.",
};

export default function StoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-24 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Real Results
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            From Career Confusion to{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              High-Impact Offers
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Discover how students from tier-3 colleges, professionals stuck in career stagnation, and non-tech graduates transformed their trajectories with You Aspirant.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {successStoriesData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">{story.name}</h3>
                      <div className="text-sm font-semibold text-blue-700 mt-0.5">
                        {story.currentRole} @ <span className="text-neutral-900">{story.company}</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 bg-green-50 text-green-700 border border-green-200/70 rounded-full whitespace-nowrap">
                      {story.salaryHike}
                    </span>
                  </div>

                  <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-100 mb-6 text-xs space-y-1.5">
                    <div>
                      <span className="text-neutral-400 font-semibold uppercase text-[10px]">PREVIOUS BACKGROUND:</span>
                      <p className="text-neutral-700 font-medium">{story.previousRole}</p>
                    </div>
                    <div className="pt-2 border-t border-neutral-200/60">
                      <span className="text-neutral-400 font-semibold uppercase text-[10px]">PROGRAM COMPLETED:</span>
                      <p className="text-blue-700 font-semibold">{story.program} ({story.year})</p>
                    </div>
                  </div>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">
                    &ldquo;{story.story}&rdquo;
                  </p>

                  <div className="border-t border-neutral-100 pt-4">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                      Key Highlights:
                    </h4>
                    <ul className="text-xs text-neutral-600 space-y-1.5">
                      {story.keyTakeaways.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-xs text-neutral-400 font-medium">Verified Alumnus • {story.company}</span>
                  <Link href="/contact" className="text-xs font-bold text-blue-600 hover:text-blue-800">
                    Apply like {story.name.split(" ")[0]} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="py-20 bg-neutral-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your Success Story Begins with One Decision</h2>
          <p className="mt-4 text-neutral-400 text-base">
            Don&apos;t let confusion or fear delay your potential. Schedule your free 1-on-1 counseling session with our experts today.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 shadow-lg">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
