import Image from "next/image";
import { EVENT } from "../../lib/event";

const FAMILIES = [
  ["John Britto Arokiya Raj", "Josephin Chitra"],
  ["Lakshmanan", "Sasikala"],
];

export default function ClosingSection() {
  return (
    <section
      aria-labelledby="closing-heading"
      className="relative flex min-h-[90svh] items-center justify-center overflow-hidden px-6 py-28 text-center text-ivory"
    >
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-sand">
        <Image
          src="/closing.png"
          alt=""
          fill
          sizes="100vw"
          className="drift object-cover object-[50%_40%]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(48,36,30,0.72)_0%,rgba(48,36,30,0.55)_55%,rgba(48,36,30,0.62)_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2
          id="closing-heading"
          data-reveal
          className="font-script text-3xl tracking-widest leading-tight text-sand md:text-3xl"
        >
          We can&rsquo;t wait to celebrate with you
        </h2>
        <p data-reveal className="mt-6 font-script text-[clamp(3rem,13vw,6rem)] leading-[1.1] [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]">
          {EVENT.couple}
        </p>
        <p data-reveal className="mt-4 font-script text-2xl leading-tight md:text-3xl">
          15 · 11 · 2026
        </p>
        <p data-reveal className="mt-6 font-script text-2xl leading-tight text-ivory/90 md:text-3xl">With love, always.</p>

        <div data-reveal className="mx-auto mt-12 max-w-md">
          <span aria-hidden="true" className="mx-auto block h-px w-14 bg-champagne" />
          <p className="mt-6 font-script text-2xl tracking-widest leading-none text-sand md:text-xl">With the blessings of our families</p>
          <ul className="mt-5 space-y-3 font-script text-3xl leading-tight tracking-widest text-ivory [text-shadow:0_1px_14px_rgba(0,0,0,0.45)] md:text-3xl">
            {FAMILIES.map(([a, b]) => (
              <li key={a}>
                {a} <span className="italic text-sand">&amp;</span> {b}
              </li>
            ))}
          </ul>
        </div>
        <a
          data-reveal
          href="#top"
          className="mt-14 inline-flex min-h-[44px] items-center font-script text-lg leading-none text-ivory/85 underline-offset-8 hover:underline md:text-xl"
        >
          Back to top
        </a>
      </div>
    </section>
  );
}