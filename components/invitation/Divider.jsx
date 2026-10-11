/** Hairline divider with a small sprig, decorative only */
export default function Divider({ className = "" }) {
  return (
    <div aria-hidden="true" className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-16 bg-champagne/60 md:w-24" />
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="#AA895D" strokeWidth="1" strokeLinecap="round">
        <path d="M14 25V10" />
        <path d="M14 18c-4 0-6-2.5-6-6 4 0 6 2.5 6 6Z" />
        <path d="M14 14c4 0 6-2.5 6-6-4 0-6 2.5-6 6Z" />
        <circle cx="14" cy="5" r="1.6" />
      </svg>
      <span className="h-px w-16 bg-champagne/60 md:w-24" />
    </div>
  );
}
