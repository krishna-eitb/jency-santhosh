// "use client";

// import { useEffect, useState } from "react";
// import { EVENT } from "../../lib/event";

// const start = new Date(EVENT.startsAt).getTime();
// const end = new Date(EVENT.endsAt).getTime();

// function parts(ms) {
//   const s = Math.floor(ms / 1000);
//   return {
//     days: Math.floor(s / 86400),
//     hours: Math.floor((s % 86400) / 3600),
//     minutes: Math.floor((s % 3600) / 60),
//     seconds: s % 60,
//   };
// }

// export default function Countdown() {
//   // null on server + first client render => identical markup, no hydration mismatch
//   const [now, setNow] = useState(null);

//   useEffect(() => {
//     setNow(Date.now());
//     const id = setInterval(() => setNow(Date.now()), 1000);
//     return () => clearInterval(id);
//   }, []);

//   if (now !== null && now >= end) {
//     return <p className="font-serif text-2xl italic text-deep-sea md:text-3xl">A beautiful day to remember</p>;
//   }
//   if (now !== null && now >= start) {
//     return <p className="font-serif text-2xl italic text-deep-sea md:text-3xl">Today is the day</p>;
//   }

//   const t = now === null ? null : parts(start - now);
//   const items = [
//     ["Days", t?.days],
//     ["Hours", t?.hours],
//     ["Minutes", t?.minutes],
//     ["Seconds", t?.seconds],
//   ];

//   return (
//     <div role="timer" aria-live="off" aria-label={`Countdown to ${EVENT.dateLong}`} className="grid grid-cols-4 gap-2 md:gap-6">
//       {items.map(([label, value]) => (
//         <div key={label} className="text-center">
//           <div className="font-serif text-4xl tabular-nums text-ink md:text-6xl">
//             {value === undefined || value === null ? "--" : String(value).padStart(2, "0")}
//           </div>
//           <div className="mt-1 text-[0.6rem] uppercase tracking-[0.3em] text-muted-ink md:text-xs">{label}</div>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { EVENT } from "../../lib/event";

const start = new Date(EVENT.startsAt).getTime();
const end = new Date(EVENT.endsAt).getTime();

function parts(ms) {
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
  };
}

export default function Countdown() {
  // null on server + first client render => identical markup, no hydration mismatch
  const [now, setNow] = useState(null);

  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now !== null && now >= end) {
    return <p className="text-center font-script text-2xl leading-tight text-deep-sea md:text-3xl">A beautiful day to remember</p>;
  }
  if (now !== null && now >= start) {
    return <p className="text-center font-script text-2xl leading-tight text-deep-sea md:text-3xl">Today is the day</p>;
  }

  const t = now === null ? null : parts(start - now);
  const items = [
    ["Days", t?.days],
    ["Hours", t?.hours],
    ["Minutes", t?.minutes],
    ["Seconds", t?.seconds],
  ];

  return (
    <div role="timer" aria-live="off" aria-label={`Countdown to ${EVENT.dateLong}`} className="text-center">
      <p className="font-script text-5xl leading-none text-muted-gold md:text-6xl">Only</p>
      <div className="mt-5 flex items-start justify-center divide-x divide-champagne/60">
        {items.map(([label, value]) => (
          <div key={label} className="px-4 text-center md:px-9">
            <div className="font-script text-4xl lining-nums tabular-nums leading-none text-ink md:text-6xl">
              {value === undefined || value === null ? "--" : String(value).padStart(2, "0")}
            </div>
            <div className="mt-2 font-script text-base leading-none text-muted-ink md:text-lg">{label}</div>
          </div>
        ))}
      </div>
      <p className="mt-6 font-script text-lg leading-none text-ink md:text-xl">Until our big day</p>
    </div>
  );
}