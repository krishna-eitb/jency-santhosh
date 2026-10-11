// "use client";

// import { useEffect, useRef, useState } from "react";

// /**
//  * Responsive hero background.
//  * - Mounts ONE <video> (>= 768px desktop clip, otherwise mobile clip) so phones never download the desktop file.
//  * - Clips are silent, play once, and HOLD their final frame (couple at the arch). No loop = no visible cut.
//  * - Posters paint instantly and remain if autoplay is blocked, data-saver is on, or reduced motion is requested.
//  */
// const DESKTOP = { mp4: "/videos/hero-desktop.mp4", webm: "/videos/hero-desktop.webm" };
// const MOBILE = { mp4: "/videos/hero-mobile.mp4", webm: "/videos/hero-mobile.webm" };

// export default function HeroVideo() {
//   const [files, setFiles] = useState(null); // null until mounted -> no hydration mismatch
//   const [ready, setReady] = useState(false);
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
//     if (reduce.matches || navigator.connection?.saveData) return; // poster only

//     const wide = window.matchMedia("(min-width: 768px)");
//     const pick = () => {
//       setReady(false);
//       setFiles(wide.matches ? DESKTOP : MOBILE);
//     };
//     pick();
//     wide.addEventListener("change", pick);
//     return () => wide.removeEventListener("change", pick);
//   }, []);

//   useEffect(() => {
//     const v = videoRef.current;
//     if (!v) return;
//     v.muted = true;
//     v.play().catch(() => {}); // autoplay blocked (e.g. iOS Low Power Mode) -> poster stays
//   }, [files]);

//   return (
//     <div className="absolute inset-0 overflow-hidden bg-sand" aria-hidden="true">
//       <picture>
//         <source media="(min-width: 768px)" srcSet="/images/hero-desktop-poster.webp" />
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           src="/images/hero-mobile-poster.webp"
//           alt=""
//           className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
//           fetchPriority="high"
//         />
//       </picture>

//       {files && (
//         <video
//           key={files.mp4}
//           ref={videoRef}
//           className={`absolute inset-0 h-full w-full object-cover object-[50%_45%] transition-opacity duration-700 ${
//             ready ? "opacity-100" : "opacity-0"
//           }`}
//           autoPlay
//           muted
//           playsInline
//           preload="auto"
//           disablePictureInPicture
//           onPlaying={() => setReady(true)}
//           onError={() => setReady(false)}
//         >
//           <source src={files.webm} type="video/webm" />
//           <source src={files.mp4} type="video/mp4" />
//         </video>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Responsive hero background.
 * - Mounts ONE <video> (>= 768px desktop clip, otherwise mobile clip) so phones never download the desktop file.
 * - Clips are silent, play once, and HOLD their final frame (couple at the arch). No loop.
 * - Posters paint instantly and remain if autoplay is blocked, data-saver is on, or reduced motion is requested.
 *
 * Callbacks (used by <Hero /> to sequence the text):
 *   onEnd  -> the clip finished playing
 *   onSkip -> the clip will NOT play (reduced motion, data-saver, autoplay blocked, load error)
 */
const DESKTOP = { mp4: "/videos/hero-desktop.mp4", webm: "/videos/hero-desktop.webm" };
const MOBILE = { mp4: "/videos/hero-mobile.mp4", webm: "/videos/hero-mobile.webm" };

export default function HeroVideo({ onEnd, onSkip }) {
  const [files, setFiles] = useState(null); // null until mounted -> no hydration mismatch
  const [ready, setReady] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches || navigator.connection?.saveData) {
      onSkip?.(); // poster only
      return;
    }

    const wide = window.matchMedia("(min-width: 768px)");
    const pick = () => {
      setReady(false);
      setFiles(wide.matches ? DESKTOP : MOBILE);
    };
    pick();
    wide.addEventListener("change", pick);
    return () => wide.removeEventListener("change", pick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => onSkip?.()); // autoplay blocked (e.g. iOS Low Power Mode) -> poster stays
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [files]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-sand" aria-hidden="true">
      <picture>
        <source media="(min-width: 768px)" srcSet="/images/hero-desktop-poster.webp" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-mobile-poster.webp"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[50%_45%]"
          fetchPriority="high"
        />
      </picture>

      {files && (
        <video
          key={files.mp4}
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-[50%_45%] transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          onPlaying={() => setReady(true)}
          onEnded={() => onEnd?.()}
          onError={() => {
            setReady(false);
            onSkip?.();
          }}
        >
          <source src={files.webm} type="video/webm" />
          <source src={files.mp4} type="video/mp4" />
        </video>
      )}
    </div>
  );
}