import Link from 'next/link';

export const Footer = () => (
  <footer className="bg-neutral-900 text-neutral-300 py-12 mt-16 border-t border-neutral-800">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="text-white text-lg font-bold mb-3">You Aspirant</h3>
        <p className="text-sm text-neutral-400 leading-relaxed mb-4">
          Guiding students and working professionals to make informed career decisions and achieve industry-ready skills.
        </p>
        <p className="text-xs text-neutral-500">Transforming aspirations into achievements.</p>
      </div>

      <div>
        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
        <ul className="text-sm space-y-2">
          <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
          <li><Link href="/services" className="hover:text-blue-400 transition-colors">Career Services</Link></li>
          <li><Link href="/courses" className="hover:text-blue-400 transition-colors">Training Courses</Link></li>
          <li><Link href="/stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Contact Us</h4>
        <ul className="text-sm space-y-2 text-neutral-400">
          <li>Email: <a href="mailto:contact@youaspirant.com" className="hover:text-blue-400 transition-colors">contact@youaspirant.com</a></li>
          <li>Phone: <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">+91 98765 43210</a></li>
          <li>WhatsApp: <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">+91 98765 43210</a></li>
          <li>Location: Chennai & Bangalore, India</li>
        </ul>
      </div>

      <div>
        <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Legal</h4>
        <ul className="text-sm space-y-2">
          <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
          <li><Link href="/refund" className="hover:text-blue-400 transition-colors">Refund Policy</Link></li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto px-4 mt-8 pt-8 border-t border-neutral-800 text-center text-xs text-neutral-500">
      © {new Date().getFullYear()} You Aspirant. All rights reserved.
    </div>
  </footer>
);
