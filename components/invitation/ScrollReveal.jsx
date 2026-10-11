"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * One GSAP context reveals every [data-reveal] element (fade + short rise) as it enters the viewport.
 * Skipped entirely for prefers-reduced-motion. Content is visible by default if JS never runs.
 */
export default function ScrollReveal() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray("[data-reveal]").forEach((el) => {
          gsap.from(el, {
            autoAlpha: 0,
            y: 18,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          });
        });
      });
    });
    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return null;
}
