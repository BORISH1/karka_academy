'use client';

export function FloatingWhatsApp() {
  const phoneNumber = '919876543210';
  const defaultMessage = encodeURIComponent(
    'Hello You Aspirant, I would like to enquire about career counselling and courses.'
  );

  return (
    <aside
      aria-label="Direct WhatsApp Contact"
      className="fixed bottom-6 right-6 z-40 flex items-center group select-none"
    >
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Career Counselor on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Breathing pulse rings */}
        <span
          className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-30 pointer-events-none"
          aria-hidden="true"
        />
        <span
          className="absolute -inset-1 rounded-full border border-emerald-400 opacity-60 pointer-events-none"
          aria-hidden="true"
        />

        {/* WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.841-.427-1.393-.575-2.28-1.996-2.35-2.09-.07-.093-.563-.75-.563-1.428 0-.678.354-1.013.48-1.15.126-.138.274-.173.365-.173.091 0 .183.001.263.006.085.004.198-.033.308.234.114.275.39 1.013.424 1.082.035.07.058.152.011.246-.046.093-.07.151-.139.232-.07.081-.146.182-.209.245-.07.07-.143.147-.061.288.082.141.364.6.782.973.538.48 1.002.628 1.144.698.141.07.225.059.309-.038.084-.097.359-.422.455-.566.096-.144.191-.12.32-.072.129.048.818.386.958.456.14.07.234.105.269.164.035.058.035.337-.109.742z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.527 3.66 1.443 5.176L2 22l4.981-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.064a8.037 8.037 0 01-4.095-1.121l-.294-.175-3.045.798.813-2.969-.191-.305A8.04 8.04 0 1112 20.064z" />
        </svg>

        {/* Tooltip on hover */}
        <span className="absolute right-16 px-3 py-1.5 rounded-lg bg-surface-elevated text-foreground text-xs font-semibold shadow-lg border border-border whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Quick WhatsApp Guidance
        </span>
      </a>
    </aside>
  );
}
