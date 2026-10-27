import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { AiCareerAssistant } from '@/components/AiCareerAssistant';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://youaspirant.com'),
  title: 'You Aspirant | Career Guidance, Mentorship & Job-Ready Bootcamps',
  description:
    'Guiding students, school leavers, and working professionals to make confident career choices with 1-on-1 counseling, psychometric profiling, and practical tech bootcamps.',
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'You Aspirant | Career Guidance, Mentorship & Job-Ready Bootcamps',
    description:
      'Guiding students, school leavers, and working professionals to make confident career choices.',
    images: [{ url: '/logo.png', width: 1710, height: 649, alt: 'You Aspirant Logo' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full`} suppressHydrationWarning>
      <head>
        {/* Anti-flash inline script - defaults to dark mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                var stored = localStorage.getItem('theme');
                if (stored === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            })();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-foreground transition-colors duration-400">
        <ThemeProvider>
          <Header />
          <main id="main-content" className="flex-1 focus:outline-none">
            {children}
          </main>
          <Footer />
          <AiCareerAssistant />
        </ThemeProvider>
      </body>
    </html>
  );
}
