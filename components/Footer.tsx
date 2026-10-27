// components/Footer.tsx
import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-neutral-800 text-neutral-200 py-8 mt-12">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      <div>
        <h3 className="font-display text-lg mb-2">You Aspirant</h3>
        <p className="text-sm">[Insert tagline]</p>
      </div>
      <div>
        <h3 className="font-display text-lg mb-2">Contact</h3>
        <ul className="text-sm space-y-1">
          <li>Phone: [Insert]</li>
          <li>WhatsApp: [Insert number]</li>
          <li>Email: <a href="mailto:[Insert]" className="underline hover:text-accent">[Insert]</a></li>
          <li>Address: [Insert]</li>
        </ul>
      </div>
      <div>
        <h3 className="font-display text-lg mb-2">Legal</h3>
        <ul className="text-sm space-y-1">
          <li><Link href="/privacy" className="underline hover:text-accent">Privacy Policy</Link></li>
          <li><Link href="/terms" className="underline hover:text-accent">Terms of Use</Link></li>
          <li><Link href="/refund" className="underline hover:text-accent">Refund Policy</Link></li>
          <li><Link href="/cookies" className="underline hover:text-accent">Cookie Notice</Link></li>
        </ul>
      </div>
    </div>
    <div className="mt-4 text-center text-xs">
      © {new Date().getFullYear()} You Aspirant. All rights reserved.
    </div>
  </footer>
);
