import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPostsData } from '@/lib/data';
import { Button } from '@/components/Button';
import { ReadingProgressBar } from '@/components/ReadingProgressBar';

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
  if (!post) return { title: 'Article Not Found' };
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
      <ReadingProgressBar />

      <article className="py-16 lg:py-24 bg-background transition-colors flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary font-semibold">{post.category}</span>
          </div>

          <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            {post.category} • {post.readTime}
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-tight tracking-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-y border-border py-4 text-xs text-muted-foreground">
            <div>
              <span className="font-bold text-foreground text-sm block">{post.author.name}</span>
              <span>
                {post.author.role} • {post.publishedDate}
              </span>
            </div>
          </div>

          {/* Body paragraphs */}
          <div className="mt-8 space-y-6 text-foreground/90 leading-relaxed text-base sm:text-lg">
            {post.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Lead conversion box inside article */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-border text-center shadow-lg">
            <h3 className="text-xl font-bold text-foreground">
              Want Personalized Guidance for Your Situation?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Our career strategists offer free 30-minute consultations to review your resume, degree options, and transition plan.
            </p>
            <div className="mt-6 flex justify-center">
              <Link href="/contact">
                <Button size="md" className="font-bold shadow-md">
                  Book Free 1-on-1 Session
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-border flex justify-between items-center text-xs">
            <Link href="/blog" className="font-bold text-primary hover:underline">
              ← Back to all articles
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
