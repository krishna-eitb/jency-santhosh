// "use client";

// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import HeroVideo from "./HeroVideo";
// import { EVENT } from "../../lib/event";

// export default function Hero() {
//   const root = useRef(null);

//   useEffect(() => {
//     const mm = gsap.matchMedia();
//     const ctx = gsap.context(() => {
//       mm.add("(prefers-reduced-motion: no-preference)", () => {
//         gsap
//           .timeline({ defaults: { ease: "power2.out", duration: 1.1 }, delay: 0.2 })
//           .from("[data-h='eyebrow']", { autoAlpha: 0, y: 14 })
//           .from("[data-h='title']", { autoAlpha: 0, y: 18, duration: 1.4 }, "-=0.6")
//           .from("[data-h='copy']", { autoAlpha: 0, y: 14 }, "-=0.7")
//           .from("[data-h='details']", { autoAlpha: 0, y: 12, stagger: 0.15 }, "-=0.6")
//           .from("[data-h='cue']", { autoAlpha: 0 }, "-=0.4");
//       });
//     }, root);
//     return () => {
//       ctx.revert();
//       mm.revert();
//     };
//   }, []);

//   return (
//     <section
//       ref={root}
//       aria-label="Invitation"
//       className="relative flex min-h-[100svh] items-end justify-center overflow-hidden text-ivory"
//     >
//       <HeroVideo />

//       {/* Warm gradient keeps text readable over pale sunset footage; arch + sun stay clear */}
//       <div
//         aria-hidden="true"
//         className="absolute inset-0 bg-[linear-gradient(to_top,rgba(48,36,30,0.82)_0%,rgba(48,36,30,0.5)_30%,rgba(48,36,30,0.08)_58%,rgba(48,36,30,0)_70%)]"
//       />

//       <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-16 text-center md:pb-20">
//         <p data-h="eyebrow" className="text-[0.7rem] uppercase tracking-[0.35em] text-sand">
//           A Celebration of Love
//         </p>
//         <h1
//           data-h="title"
//           className="mt-2 font-script text-[clamp(3rem,14vw,6.5rem)] leading-[1.1] [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
//         >
//           {EVENT.couple}
//         </h1>
//         <p data-h="copy" className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ivory/90 md:text-base">
//           Together with our families, we invite you to celebrate our engagement.
//         </p>
//         <p data-h="details" className="mt-6 text-xs uppercase tracking-[0.3em]">
//           Sunday · 15 November 2026
//         </p>
//         <p data-h="details" className="mt-2 text-xs uppercase tracking-[0.3em] text-sand">
//           SRK Hall · Arasur Bypass
//         </p>
//         <a
//           data-h="cue"
//           href="#invitation"
//           className="mt-8 inline-flex min-h-[44px] items-center text-[0.65rem] uppercase tracking-[0.35em] text-ivory/85 underline-offset-8 hover:underline"
//         >
//           Scroll to explore
//         </a>
//       </div>
//     </section>
//   );
// }
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import HeroVideo from "./HeroVideo";
import { EVENT } from "../../lib/event";

/**
 * Hero sequence:
 *   1. Video plays to the end (text hidden, scene is clean)
 *   2. "Santhosh & Jency" is typed letter by letter (font unchanged: Great Vibes via `font-script`)
 *   3. Remaining details fade in ONE BY ONE (eyebrow -> copy -> date -> venue -> cue)
 *
 * Fallbacks so content is never lost: reduced motion, autoplay blocked, video error/slow load
 * (9s safety timer) and no-JS (see <noscript>) all reveal everything.
 */
const SAFETY_MS = 9000;
const TYPE_STEP = 0.11; // seconds per character

export default function Hero() {
  const root = useRef(null);
  const [go, setGo] = useState(false);

  const start = useCallback(() => setGo(true), []);

  // Safety net: never leave the hero blank if the video stalls
  useEffect(() => {
    const id = setTimeout(start, SAFETY_MS);
    return () => clearTimeout(id);
  }, [start]);

  useEffect(() => {
    if (!go) return;
    const root_ = root.current;
    if (!root_) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      gsap.set(root_.querySelectorAll("[data-char], [data-detail]"), { autoAlpha: 1 });
      gsap.set(root_.querySelector("[data-shade]"), { opacity: 1 });
      return () => gsap.killTweensOf(root_.querySelectorAll("[data-char], [data-detail], [data-shade]"));
    }

    let cancelled = false;
    let ctx;

    // Measure letter positions only once the script font is ready (keeps the caret accurate)
    (document.fonts?.ready ?? Promise.resolve()).then(() => {
      if (cancelled) return;
      ctx = gsap.context(() => {
        const chars = gsap.utils.toArray("[data-char]");
        const details = gsap.utils.toArray("[data-detail]"); // DOM order: eyebrow, copy, date, venue, cue
        const caret = root_.querySelector("[data-caret]");
        const title = root_.querySelector("[data-title]");
        const base = title.getBoundingClientRect();

        const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
        tl.to("[data-shade]", { opacity: 1, duration: 1.2 }, 0);

        chars.forEach((c, i) => {
          const r = c.getBoundingClientRect();
          const t = 0.5 + i * TYPE_STEP;
          tl.set(c, { autoAlpha: 1 }, t);
          tl.set(
            caret,
            {
              autoAlpha: 1,
              x: r.right - base.left,
              y: r.top - base.top + r.height * 0.14,
              height: r.height * 0.72,
            },
            t
          );
        });

        // caret lingers briefly, then fades
        tl.to(caret, { autoAlpha: 0, duration: 0.5 }, `>+0.5`);

        // everything else, one by one
        tl.fromTo(
          details,
          { autoAlpha: 0, y: 14 },
          { autoAlpha: 1, y: 0, duration: 0.9, stagger: 0.45 },
          `>-0.2`
        );
      }, root_);
    });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [go]);

  const words = EVENT.couple.split(" "); // ["Santhosh", "&", "Jency"]

  return (
    <section
      ref={root}
      aria-label="Invitation"
      className="relative flex min-h-[100svh] items-end justify-center overflow-hidden text-ivory"
    >
      <HeroVideo onEnd={start} onSkip={start} />

      {/* Warm gradient keeps text readable over pale sunset footage; fades in as the text begins */}
      <div
        data-shade
        aria-hidden="true"
        className="absolute inset-0 opacity-0 bg-[linear-gradient(to_top,rgba(48,36,30,0.82)_0%,rgba(48,36,30,0.5)_30%,rgba(48,36,30,0.08)_58%,rgba(48,36,30,0)_70%)]"
      />

      <div className="relative z-10 mx-auto w-full max-w-2xl px-6 pb-16 text-center md:pb-20">
        <p data-detail className="invisible font-script text-lg leading-none text-sand md:text-xl">
          A Celebration of Love
        </p>

        {/* Typed title: real text for screen readers via aria-label; visible letters are aria-hidden */}
        <h1
          data-title
          aria-label={EVENT.couple}
          className="relative mt-2 font-script text-[clamp(3rem,14vw,6.5rem)] leading-[1] [text-shadow:0_2px_28px_rgba(0,0,0,0.4)]"
        >
          <span aria-hidden="true">
            {words.map((word, wi) => (
              <span key={wi} className={word === "&" ? "block text-[0.6em] leading-[0.9]" : "block"}>
                {[...word].map((ch, ci) => (
                  <span key={ci} data-char className="invisible">
                    {ch}
                  </span>
                ))}
              </span>
            ))}
          </span>
          <span
            data-caret
            aria-hidden="true"
            className="invisible pointer-events-none absolute left-0 top-0 w-[2px] bg-ivory/90"
          />
        </h1>

        <p data-detail className="invisible mx-auto mt-2 max-w-md text-lg leading-relaxed text-ivory/90 md:text-xl">
          Together with our families, we invite you to celebrate our engagement.
        </p>
        <p data-detail className="invisible mt-6 font-script text-2xl leading-tight md:text-3xl">
          Sunday · 15 November 2026
        </p>
        <p data-detail className="invisible mt-2 text-lg leading-relaxed text-sand md:text-xl">
          SRK Hall · Arasur Bypass
        </p>
        <a
          data-detail
          href="#invitation"
          className="invisible mt-8 inline-flex min-h-[44px] items-center text-[0.65rem] uppercase tracking-[0.35em] text-ivory/85 underline-offset-8 hover:underline"
        >
          Scroll to explore
        </a>
      </div>

      {/* No-JS: show everything immediately */}
      <noscript>
        <style>{`[data-char],[data-detail]{visibility:visible!important}[data-shade]{opacity:1!important}`}</style>
      </noscript>
    </section>
  );
}