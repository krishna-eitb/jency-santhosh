// import Countdown from "./Countdown";

// export default function DateSection() {
//   return (
//     <section aria-labelledby="date-heading" className="bg-ivory px-6 py-24 md:py-36">
//       <div className="mx-auto grid max-w-5xl items-center gap-14 md:grid-cols-[1.1fr_1fr] md:gap-20">
//         <div className="text-center md:text-left">
//           <h2 id="date-heading" data-reveal className="text-xs uppercase tracking-[0.4em] text-muted-gold">
//             Save the Date
//           </h2>
//           <time dateTime="2026-11-15" data-reveal className="mt-4 block">
//             <span className="block font-serif text-[clamp(6rem,24vw,12rem)] font-normal leading-[0.85] text-deep-sea">
//               15
//             </span>
//             <span className="mt-3 block text-sm uppercase tracking-[0.4em] text-ink md:text-base">
//               November 2026
//             </span>
//           </time>
//           <p data-reveal className="mt-3 font-script text-4xl text-muted-gold md:text-5xl">
//             Sunday
//           </p>
//         </div>

//         <div data-reveal className="mx-auto w-full max-w-md">
//           <dl className="grid grid-cols-3 border-y border-champagne/50 py-5 text-center">
//             <div className="border-r border-champagne/50 px-2">
//               <dt className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink">Day</dt>
//               <dd className="mt-1 font-serif text-xl text-ink">Sunday</dd>
//             </div>
//             <div className="border-r border-champagne/50 px-2">
//               <dt className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink">Date</dt>
//               <dd className="mt-1 font-serif text-xl text-ink">15 · 11</dd>
//             </div>
//             <div className="px-2">
//               <dt className="text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink">Year</dt>
//               <dd className="mt-1 font-serif text-xl text-ink">2026</dd>
//             </div>
//           </dl>
//           <div className="mt-10">
//             <Countdown />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";
import Countdown from "./Countdown";
import WaxSeal from "./WaxSeal";
import CallaLilies from "./CallaLilies";

/**
 * Date section — scrapbook / paper-note composition.
 * Mobile: stacked collage. Desktop (md+): wider collage, then paper note + date badge side by side.
 * Wrapper divs carry [data-reveal] (GSAP); inner divs carry the rotation, so the two never fight over transform.
 */
export default function DateSection() {
  return (
    <section aria-labelledby="date-heading" className="paper relative overflow-hidden px-6 py-24 md:py-36">
      <div className="mx-auto max-w-5xl">
        {/* ── Collage: photo + sketch + love-quote card ───────────────── */}
        <div className="relative mx-auto h-[31rem] w-full max-w-[22rem] md:h-[25rem] md:max-w-4xl">
          {/* polaroid photo */}
          <div data-reveal className="absolute left-0 top-[11%] z-10 w-[56%] md:left-[3%] md:top-[9%] md:w-[29%]">
            <div className="-rotate-[7deg] bg-white p-2 pb-8 shadow-[0_10px_28px_rgba(60,45,25,0.18)] md:p-3 md:pb-11">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/polaroid.webp"
                  alt="The couple holding hands beneath a floral ceremony arch at sunset"
                  fill
                  sizes="(min-width: 768px) 260px, 200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* sketch card */}
          <div data-reveal className="absolute right-0 top-[55%] z-10 w-[54%] md:right-[2%] md:top-[16%] md:w-[29%]">
            <div className="rotate-[4deg] bg-[#FFFDF9] p-3 shadow-[0_10px_28px_rgba(60,45,25,0.16)] md:p-4">
              <div className="relative aspect-[1/1]">
                <Image
                  src="/images/sketch.webp"
                  alt=""
                  fill
                  sizes="(min-width: 768px) 260px, 190px"
                  className="object-cover opacity-80 mix-blend-multiply"
                />
              </div>
            </div>
          </div>

          {/* love quote card (replaces the reference's dress-code card) */}
          <div data-reveal className="absolute right-[2%] top-0 z-20 w-[63%] md:left-[34%] md:right-auto md:top-0 md:w-[32%]">
            <figure className="rotate-[1.5deg] bg-deep-sea p-3 shadow-[0_14px_34px_rgba(30,45,45,0.35)] md:p-4">
              <div className="border border-champagne/50 px-4 py-6 text-center text-ivory md:px-6 md:py-9">
                <figcaption className="font-script text-2xl leading-none text-champagne md:text-3xl">
                  Words of Love
                </figcaption>
                <span aria-hidden="true" className="mx-auto mt-4 block h-px w-8 bg-champagne/70" />
                <blockquote className="mt-4 font-script text-2xl leading-tight text-ivory md:text-3xl">
                  Whatever our souls are made of, his and mine are the same.
                </blockquote>
                <p className="mt-4 font-script text-lg leading-none text-sand md:text-xl">Emily Brontë</p>
              </div>
            </figure>
          </div>
        </div>

        {/* ── Statement ──────────────────────────────────────────────── */}
        <p
          data-reveal
          className="mx-auto mt-8 max-w-xs text-center font-script text-base leading-relaxed text-ink md:mt-16 md:max-w-xl md:text-lg"
        >
          We found each other, we chose each other, and today we invite you to share our happiness.
        </p>

        {/* ── Paper note + date badge ────────────────────────────────── */}
        <div className="relative mx-auto mt-20 flex max-w-[22rem] flex-col items-center md:mt-28 md:max-w-4xl md:flex-row md:items-center md:justify-center">
          <div data-reveal className="relative z-10 w-full md:w-[58%]">
            <div className="-rotate-[1.5deg] border border-champagne/30 bg-[#FFFEFB] px-7 pb-10 pt-14 shadow-[0_12px_32px_rgba(60,45,25,0.14)] md:py-16 md:pl-10 md:pr-24">
              <WaxSeal className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
              <blockquote className="text-center font-script text-2xl leading-tight text-ink md:text-3xl">
                  Grow old along with me! The best is yet to be.
                </blockquote>
              <p className="mt-5 text-center font-script text-lg leading-none text-muted-ink md:text-xl">
                  Robert Browning
                </p>
            </div>
          </div>

          <div data-reveal className="relative z-20 -mt-10 self-end md:mt-0 md:-ml-14 md:self-auto">
            {/* <CallaLilies className="absolute -left-16 bottom-0 z-0 h-32 w-32 md:left-auto md:-right-32 md:h-48 md:w-48 md:scale-x-[-1]" /> */}
            <time
              dateTime="2026-11-15"
              className="relative z-10 flex h-[12rem] w-[12rem] flex-col items-center justify-center rounded-full bg-deep-sea text-center text-ivory shadow-[0_14px_34px_rgba(30,45,45,0.35)] md:h-[15rem] md:w-[15rem]"
            >
              <span aria-hidden="true" className="absolute inset-2 rounded-full border border-champagne/40" />
              <h2 id="date-heading" className="font-script text-xl leading-none text-sand md:text-2xl">
                Save the Date
              </h2>
              <span className="mt-2 font-script text-[3.9rem] leading-[0.9] md:text-[5.2rem]">15</span>
              <span className="mt-3 font-script text-xl leading-none md:text-2xl">November 2026</span>
              <span className="mt-1 font-script text-3xl leading-none text-champagne md:text-4xl">Sunday</span>
            </time>
          </div>
        </div>

        {/* ── Countdown ──────────────────────────────────────────────── */}
        <div data-reveal className="mt-24 md:mt-32">
          <Countdown />
        </div>
      </div>
    </section>
  );
}