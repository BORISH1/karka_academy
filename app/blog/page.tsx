import Link from "next/link";
import { blogPostsData } from "@/lib/data";

export const metadata = {
  title: "Career & Tech Insights Blog | You Aspirant",
  description: "Read practical guides on career guidance, ATS resume optimization, college admissions, and modern tech skills.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-white py-16 lg:py-20 border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100/70 px-3 py-1 rounded-full">
            Insights & Guides
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-neutral-900 tracking-tight">
            Actionable Career Advice &{" "}
            <span className="bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
              Industry Knowledge
            </span>
          </h1>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            Practical strategies written by our career counselors and engineering leads to help you navigate modern hiring.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-neutral-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                    <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-neutral-900 group-hover:text-blue-600 transition-colors mt-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-neutral-600 mt-3 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="p-6 pt-0 border-t border-neutral-100 mt-4 flex items-center justify-between text-xs text-neutral-500">
                  <div>
                    <span className="font-semibold text-neutral-800 block">{post.author.name}</span>
                    <span className="text-[11px] text-neutral-400">{post.publishedDate}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-blue-600 hover:text-blue-800"
                  >
                    Read article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
