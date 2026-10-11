/** Champagne wax seal with the couple's monogram, decorative */
export default function WaxSeal({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full shadow-[0_6px_14px_rgba(60,45,25,0.28),inset_0_-3px_6px_rgba(120,90,45,0.35),inset_0_3px_5px_rgba(255,244,214,0.7)] [background:radial-gradient(circle_at_35%_28%,#F0E2C2_0%,#D9BE8A_45%,#B8955E_100%)] ${className}`}
    >
      <div className="flex h-[3.2rem] w-[3.2rem] items-center justify-center rounded-full border border-white/45 shadow-[inset_0_1px_3px_rgba(120,90,45,0.35)]">
        <span className="font-script text-[1.35rem] leading-none text-white/95 [text-shadow:0_1px_2px_rgba(120,90,45,0.6)]">
          S&amp;J
        </span>
      </div>
    </div>
  );
}
