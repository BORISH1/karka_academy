import Link from 'next/link';
import Image from 'next/image';
import { AnimationControl } from '@/components/AnimationControl';

export const Footer = () => (
  <footer className="bg-surface border-t border-border mt-20 pt-16 pb-12 transition-colors">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Link href="/" className="inline-block group" aria-label="You Aspirant Home">
            <div className="relative h-16 sm:h-20 w-52 sm:w-64 transition-transform duration-200 group-hover:scale-[1.03] dark:bg-white/95 dark:px-3.5 dark:py-2 dark:rounded-2xl dark:shadow-sm">
              <Image
                src="/logo.png"
                alt="You Aspirant Logo"
                fill
                className="object-contain object-left"
                sizes="(max-width: 640px) 208px, 256px"
              />
            </div>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Empowering students, school leavers, and ambitious professionals with scientific career profiling, hands-on bootcamps, and 1-on-1 industry mentorship.
          </p>
          <div className="pt-2">
            <AnimationControl />
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
            Navigation
          </h4>
          <ul className="text-xs space-y-2.5 text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Our Mission
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-primary transition-colors">
                Career Guidance Services
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-primary transition-colors">
                Industry Bootcamps
              </Link>
            </li>
            <li>
              <Link href="/stories" className="hover:text-primary transition-colors">
                Student Success Stories
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="hover:text-primary transition-colors">
                Testimonials & Reviews
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Career Insights & Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
            Direct Connect
          </h4>
          <ul className="text-xs space-y-2.5 text-muted-foreground">
            <li>
              Phone:{' '}
              <a href="tel:+919876543210" className="text-foreground hover:text-primary font-medium">
                +91 98765 43210
              </a>
            </li>
            <li>
              WhatsApp:{' '}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
              >
                +91 98765 43210
              </a>
            </li>
            <li>
              Email:{' '}
              <a href="mailto:contact@youaspirant.com" className="text-foreground hover:text-primary">
                contact@youaspirant.com
              </a>
            </li>
            <li>Locations: Chennai & Bangalore</li>
            <li>Hours: Mon–Sat, 9:00 AM – 7:30 PM IST</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-foreground mb-4">
            Legal & Trust
          </h4>
          <ul className="text-xs space-y-2.5 text-muted-foreground">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/refund" className="hover:text-primary transition-colors">
                7-Day Refund Policy
              </Link>
            </li>
            <li className="pt-2 text-[11px] text-muted-foreground/80">
              Verified Partner Network • ISO 9001:2015 Educational Delivery Framework
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between text-xs text-muted-foreground gap-4">
        <p>© {new Date().getFullYear()} You Aspirant. All rights reserved.</p>
        <p className="text-[11px]">
          Designed with accessibility (WCAG AA), smooth 60fps animations & dark theme support.
        </p>
      </div>
    </div>
  </footer>
);
