import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { EVENT, MAPS_URL } from "../../lib/event";

export default function VenueSection() {
  return (
    <section aria-labelledby="venue-heading" className="bg-warm-white px-6 py-24 md:py-36">
      <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-20">
        <div data-reveal className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-t-[999px] rounded-b-2xl md:max-w-none">
          <Image
            src="/engagement.jpg"
            alt="The couple walking toward a floral ceremony arch on a sandy beach aisle at sunset"
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 rounded-t-[999px] rounded-b-2xl ring-1 ring-inset ring-champagne/50" />
        </div>

        <div className="text-center md:text-left">
          <p data-reveal className="font-script text-lg leading-none text-muted-gold md:text-xl">The Venue</p>
          <h2 id="venue-heading" data-reveal className="mt-4 font-script text-5xl text-deep-sea md:text-6xl">
            {EVENT.venue}
          </h2>
          <p data-reveal className="mt-3 text-lg leading-relaxed text-muted-ink md:text-xl">
            {EVENT.venueArea}
          </p>
          <p data-reveal className="mt-6 font-script text-2xl leading-tight text-ink md:text-3xl">
            Sunday, 15 November 2026
          </p>
          <a
            data-reveal
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex min-h-[48px] items-center gap-2 border border-deep-sea px-8 font-script text-lg leading-none text-deep-sea transition-colors hover:bg-deep-sea hover:text-ivory md:text-xl"
          >
            Get Directions
            <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only">(opens Google Maps in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
