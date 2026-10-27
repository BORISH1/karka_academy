import Link from 'next/link';
import { blogPostsData } from '@/lib/data';

export const metadata = {
  title: 'Career & Tech Insights Blog | You Aspirant',
  description:
    'Read practical guides on career guidance, ATS resume optimization, college admissions, and modern tech skills.',
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="bg-surface border-b border-border py-16 lg:py-20 transition-colors">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full">
            Insights & Guides
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-foreground tracking-tight">
            Actionable Career Advice &{' '}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
              Industry Knowledge
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Practical strategies written by our career counselors and engineering leads to help you navigate modern hiring.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostsData.map((post) => (
              <article
                key={post.id}
                className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-7">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span className="font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors mt-2 leading-snug">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>

                <div className="p-7 pt-0 border-t border-border mt-4 flex items-center justify-between text-xs text-muted-foreground">
                  <div>
                    <span className="font-bold text-foreground block">{post.author.name}</span>
                    <span className="text-[11px] text-muted-foreground">{post.publishedDate}</span>
                  </div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-primary hover:underline"
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
