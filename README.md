# Santhosh & Jency — Engagement Invitation

Single-page invitation site. Next.js 15 (App Router, JSX only) · Tailwind CSS 3 · GSAP + ScrollTrigger · Motion (Framer Motion) · lucide-react · self-hosted fonts via Fontsource.

## Run
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production
```
Node 18.18+ (20+ recommended).

## Configure
- `lib/event.js` — names, date, venue, countdown target. **No start time/timezone was provided**, so the countdown targets the start of 15 Nov 2026 at `+05:30` (placeholder). Edit `startsAt` / `endsAt` when confirmed.
- `.env.example` → copy to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to your real domain (Open Graph / canonical).

## Assets
| Path | Purpose |
|---|---|
| `public/videos/hero-desktop.{mp4,webm}` | Hero video ≥768px (silent, plays once, holds last frame) |
| `public/videos/hero-mobile.{mp4,webm}` | Hero video <768px |
| `public/images/hero-*-poster.webp` | Instant poster / reduced-motion / data-saver fallback |
| `public/images/venue.webp`, `closing.webp` | Venue and closing sections (frames from the supplied clips) |
| `public/og.jpg` | Social share image |
| `public/audio/romantic-instrumental.mp3` | **You must add** a licensed/owned track. Until then the music button shows "Music unavailable". |

The supplied clips had the couple's names baked into their final seconds and a small generator sparkle in a corner; the hero clips were trimmed to the clean section.

## Behaviour notes
- Music never autoplays; the file is only requested after the first click.
- Respects `prefers-reduced-motion` (no video, no GSAP animation, no drift) and data-saver.
- Countdown renders `--` on server/first paint, then ticks after mount (no hydration mismatch); shows "Today is the day" / "A beautiful day to remember" at/after the date.
- Deploy anywhere that runs Next.js (Vercel: import repo, no config needed).
