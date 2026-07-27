export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Avenix AI logo">
      <defs>
        <linearGradient id="avenix-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="55%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="12" fill="url(#avenix-logo-grad)" />
      <path
        d="M12 28.5 20 11.5l8 17"
        fill="none"
        stroke="white"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16.2 23.2h7.6" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
