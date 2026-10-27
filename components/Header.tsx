// components/Header.tsx
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';

export const Header = () => (
  <header className="bg-primary text-white py-4 shadow-md">
    <nav className="container mx-auto flex justify-between items-center">
      <div className="text-2xl font-display">You Aspirant</div>
      <NavigationMenu.Root className="flex space-x-4">
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/" className="hover:underline">Home</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/about" className="hover:underline">About</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/services" className="hover:underline">Services</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/courses" className="hover:underline">Courses</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/stories" className="hover:underline">Success Stories</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/testimonials" className="hover:underline">Testimonials</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/blog" className="hover:underline">Blog</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link asChild>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.Root>
    </nav>
  </header>
);
