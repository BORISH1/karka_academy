import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPostsData } from "@/lib/data";
import { Button } from "@/components/Button";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPostsData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);
  if (!post) return { title: "Article Not Found" };
  return {
    title: `${post.title} | You Aspirant Blog`,
    description: post.summary,
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = blogPostsData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <article className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-neutral-400 mb-6">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-neutral-600">{post.category}</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {post.category} • {post.readTime}
          </span>

          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-y border-neutral-100 py-4 text-xs text-neutral-500">
            <div>
              <span className="font-bold text-neutral-800 text-sm block">{post.author.name}</span>
              <span>{post.author.role} • {post.publishedDate}</span>
            </div>
          </div>

          {/* Body paragraphs */}
          <div className="mt-8 space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Lead conversion box inside article */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-center">
            <h3 className="text-xl font-bold text-neutral-900">Want Personalized Guidance for Your Situation?</h3>
            <p className="mt-2 text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
              Our career strategists offer free 30-minute consultations to review your resume, degree options, and transition plan.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <Button className="font-bold px-6 py-2.5 text-sm shadow-md">
                  Book Free 1-on-1 Session
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-neutral-200 flex justify-between items-center text-xs">
            <Link href="/blog" className="font-semibold text-blue-600 hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
