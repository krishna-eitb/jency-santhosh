import Image from "next/image";

export default function InvitationNote() {
  return (
    <section
      id="invitation"
      aria-labelledby="invitation-heading"
      className="relative overflow-hidden bg-warm-white"
    >
      {/* soft sheer-light glow, decorative */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_45%_at_15%_0%,rgba(255,249,241,0.95),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col px-6 pt-20">
        <div>
          <p data-reveal className="flex items-center gap-3 font-script text-lg leading-none text-muted-gold md:text-xl">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-champagne" />
            With love
          </p>

          <h2
            id="invitation-heading"
            data-reveal
            className="mt-6 font-script text-[clamp(3rem,12vw,4.75rem)] font-normal leading-[1.05] text-ink md:text-6xl lg:text-[4.75rem]"
          >
            Our
            <br />
            Invitation
          </h2>

          <span aria-hidden="true" data-reveal className="mt-6 block h-px w-14 bg-champagne" />

          <p data-reveal className="mt-6 max-w-sm font-script text-base leading-relaxed text-muted-ink md:text-lg">
            With love and the blessings of our families, we invite you to join us as we begin a beautiful new
            chapter together.
          </p>

          <div data-reveal className="mt-10 -rotate-3 text-muted-gold md:mt-12">
            <p className="font-script text-2xl leading-tight md:text-3xl">
              Love is our most
              <br />
              beautiful adventure
            </p>
            <svg
              aria-hidden="true"
              viewBox="0 0 260 28"
              className="mt-1 h-7 w-60"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            >
              <path d="M2 19C60 8 135 7 232 16" />
              <path
                d="M246 11.5c-1.6-3.2-6.4-2.1-5.3 1.8.9 2.7 5.3 4.9 5.3 4.9s4.4-2.2 5.3-4.9c1.1-3.9-3.7-5-5.3-1.8z"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Photo: full-width block below the text at every breakpoint */}
      <div
        data-reveal
        className="fade-photo relative z-0 -mt-12 h-[26rem] w-full sm:h-[32rem]"
      >
        <Image
          src="/invitation.webp"
          alt="A couple embracing at sunset above a lakeside town, with mountains in the distance"
          fill
          sizes="100vw"
          className="object-cover object-[38%_55%]"
        />
      </div>
    </section>
  );
}