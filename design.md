# Santhosh & Jency — Engagement Invitation Website

## Project brief

Build a polished, romantic, single-page engagement invitation website for **Santhosh & Jency**, taking place on **Sunday, 15 November 2026**, at **SRK HALL, Arasur Bypass**.

The website should feel like a luxury destination-wedding film translated into an interactive web experience: dreamy beach sunset, white flowers, ivory curtains moving in the sea breeze, warm candlelight, soft ocean waves, fine calligraphy, and calm cinematic transitions.

This document is the design and implementation source of truth. Do not create a generic event template or a dashboard-like UI. Prioritize romance, typography, photography, smooth motion, accessibility, and mobile performance.

---

# Part 1 — `design.md`

## 1. Experience principles

1. **Romantic, not kitschy:** refined, intimate, editorial, and timeless.
2. **Photographic realism:** use high-quality, photorealistic beach-wedding imagery. Avoid cartoon art, glossy 3D graphics, oversaturated colors, and obviously artificial effects.
3. **Content first:** names, date, and venue must be legible immediately.
4. **Motion with restraint:** every animation should feel graceful and intentional. Avoid excessive parallax, bouncing, rapid transitions, and scroll hijacking.
5. **Mobile-first:** design for narrow screens first, then expand elegantly for tablet and desktop.
6. **Accessible by default:** keyboard-friendly controls, visible focus states, sufficient contrast, semantic markup, reduced-motion support, and no autoplaying audio.
7. **Fast and stable:** optimize images, avoid layout shifts, lazy-load below-the-fold imagery, and keep animation work lightweight.

## 2. Technical stack

- Next.js App Router
- React with **JSX only**; do not introduce TypeScript or `.tsx` files
- Tailwind CSS
- GSAP + ScrollTrigger for the hero timeline and scroll-based reveals
- Framer Motion (`motion/react` or the installed compatible package) for small UI transitions
- Lucide React icons if already installed; otherwise use inline SVGs or text symbols
- Next/Image for local or remote images where appropriate
- Plain CSS for complex overlays, texture, and graceful fallbacks

Before changing dependencies, inspect `package.json` and the existing project. Reuse the installed Tailwind version and existing project conventions. Do not overwrite a working configuration unnecessarily.

## 3. Visual identity

### Art direction

A cinematic beach ceremony at golden hour. The opening image should feature:
- A white floral ceremony arch with soft ivory drapes
- An aisle in pale sand leading toward the sea
- Warm sunset light reflecting on the ocean
- White flowers, subtle greenery, candles in glass holders
- A restrained, romantic palette with a little sea-glass teal
- Plenty of clean space for the invitation typography

Use a strong full-bleed hero photograph as the visual anchor. If no assets exist in the repository, create an `assets` or `public/images` plan and use clearly documented, replaceable image paths. Do not fabricate local image files or leave broken image URLs. If using remote images, configure Next.js image handling correctly or use a CSS background with a valid URL. Prefer downloaded/licensed assets or user-supplied images for production.

### Color tokens

Use these as design tokens, with Tailwind utilities or CSS variables:

- `--color-ivory: #FFF9F1`
- `--color-warm-white: #F8F3EC`
- `--color-sand: #E8D7C0`
- `--color-champagne: #C6A777`
- `--color-muted-gold: #AA895D`
- `--color-sea-glass: #8EB7B1`
- `--color-deep-sea: #304B4B`
- `--color-ink: #34302D`
- `--color-muted-ink: #756B63`

Use deep ink for essential text on light surfaces. Champagne gold is an accent, not a text color for long paragraphs. On photos, add a soft dark or warm gradient behind text as needed.

### Typography

Use a refined pairing:
- **Names / display:** elegant calligraphic script similar to *Great Vibes*, *Allura*, or *Parisienne*
- **Section headings:** editorial serif similar to *Cormorant Garamond* or *Playfair Display*
- **Body / details:** clean sans serif similar to *DM Sans* or *Lato*
- **Eyebrows / labels:** small uppercase sans serif with generous letter spacing

Load fonts with `next/font/google` if the build environment supports it; otherwise use a reliable CSS fallback stack. Script lettering must remain readable and not overlap on small screens. Do not imitate the exact lettering from a supplied font-reference image unless that asset is available in the project; choose a close elegant script.

### Design details

- Soft grain or paper texture at very low opacity, only if it does not reduce legibility.
- Fine champagne borders and hairline dividers.
- Large rounded corners only on select image/card elements; avoid turning every section into a card.
- Gentle light leaks are acceptable only as subtle gradients, not as moving fake lens flares.
- Use floral motifs sparingly in corners or section separators.
- Maintain generous spacing and asymmetry while keeping the hero composition balanced.

## 4. Single-page layout

### Section A — Hero / opening invitation

**Purpose:** immediate emotional impact and instant clarity.

- Full viewport-height, ideally `min-height: 100svh`.
- Full-bleed beach ceremony image, centered and cropped responsively.
- Overlay: warm sunset gradient with enough contrast for text.
- Small eyebrow: `A CELEBRATION OF LOVE`
- Main title: `Santhosh & Jency`
- Supporting copy: `Together with our families, we invite you to celebrate our engagement.`
- Date line: `SUNDAY · 15 NOVEMBER 2026`
- Venue line: `SRK HALL · ARASUR BYPASS`
- A small down cue: `SCROLL TO EXPLORE`
- Keep hero text within a centered max-width and avoid covering the main floral arch or sunset focal point.
- Intro animation: gentle fade and 12–20px rise, script title revealed after the eyebrow, details last. Avoid character-by-character animation if it causes layout shifts or accessibility issues.
- Add a discreet sound toggle in a corner, visually integrated with the design. Initial state is muted/off.

### Section B — Invitation note

An ivory or warm-white section with editorial typography and generous negative space.

Suggested copy:
> With love and the blessings of our families,  
> we invite you to join us as we begin a beautiful new chapter together.

Use a small decorative divider or floral line motif. Animate the paragraph with a short fade-up as it enters view.

### Section C — The date

- A visually elegant date composition, not a generic dashboard widget.
- Label: `SAVE THE DATE`
- Main: `15` with `NOVEMBER 2026`
- Day: `SUNDAY`
- Optional three-part date breakdown separated by fine rules.
- Live countdown to the event, with days/hours/minutes/seconds.
- Countdown must be calculated against the event's local time. Since no start time or timezone was provided, make the event time configurable in a single clearly marked constant and avoid inventing a start time. If time remains unspecified, show a date-based countdown or count to the start of the event date in the configured local timezone.
- Handle the event having passed: show a graceful message such as `Today is the day` or `A beautiful day to remember`, not negative values.
- Avoid hydration mismatch: calculate initial countdown consistently and start the live timer only after mount.
- Reduced-motion users must not receive unnecessary number-flipping animations.

### Section D — Venue

- Warm-toned image or elegant location composition.
- Venue name: `SRK HALL`
- Location: `Arasur Bypass`
- A clear `GET DIRECTIONS` link/button opening Google Maps search for `SRK HALL, Arasur Bypass`.
- Use a real Google Maps search URL, not a fabricated place ID.
- Open external links safely in a new tab with `rel="noreferrer"` where appropriate.
- Do not claim a map pin or exact address has been verified.
- If a suitable venue photograph is unavailable, use the main photo with a crop or a tasteful solid surface rather than a broken image.

### Section E — Closing invitation

- Full-width sunset photo or a soft ivory panel with floral details.
- Text:
  - `WE CAN'T WAIT TO CELEBRATE WITH YOU`
  - `Santhosh & Jency`
  - `15 · 11 · 2026`
  - `With love, always.`
- Add a final subtle fade and gentle background movement only if performance remains good.
- Include a `BACK TO TOP` text link.

### Footer

Minimal:
- `SANThOSH & JENCY` with correct capitalization: `SANTHOSH & JENCY`
- `15 NOVEMBER 2026`
- No unrelated links or invented contact details.

## 5. Music experience

- Include a small floating or fixed **play/pause music control**.
- Do **not** autoplay music. Browsers generally block autoplay and unrequested audio is disruptive.
- Use a local file path such as `/audio/romantic-instrumental.mp3`, with instructions to add a properly licensed or owned instrumental track there.
- If the file is missing or cannot be played, the control should fail gracefully and remain usable; never throw an uncaught error.
- Provide accessible labels: `Play romantic background music` / `Pause romantic background music`.
- Display a clear playing/paused state and an icon.
- Set audio volume to a gentle level, approximately `0.25`–`0.35`.
- Honor the user's preference after explicit interaction only; do not persist or resume playback without a clear user choice.
- The toggle must work on desktop and mobile. Avoid requiring audio for any essential information.

## 6. Motion specification

### GSAP
Use GSAP for:
- A one-time hero entrance timeline
- ScrollTrigger-based reveal of invitation, date, and venue sections
- Optional very subtle image scale from `1.03` to `1` while a section enters, only if it does not cause performance issues
- Proper cleanup of timelines and ScrollTriggers on unmount
- `gsap.matchMedia()` or equivalent to disable/reduce animation for `prefers-reduced-motion`

Use `useGSAP` only if the package exists or is intentionally added. Otherwise use `useEffect` and clean up all GSAP contexts/timelines.

### Framer Motion
Use Framer Motion for:
- Music control hover/tap states
- Small decorative UI transitions
- Optional fade-in of small icons or dividers

Do not animate the same element simultaneously with GSAP and Framer Motion. Assign each element to one animation system.

### Ambient effects
- Slow, barely noticeable ocean-image drift is optional.
- Avoid heavy particle systems. If petals are included, use at most a few lightweight CSS-animated petals, mark them `aria-hidden="true"`, and disable them for reduced-motion users.
- Avoid scroll-jacking, fake cursor effects, flashing, excessive parallax, and continuously moving text.

## 7. Responsive behavior

### Mobile (320–767px)
- Hero typography scales with `clamp()` and wraps naturally.
- Names should not clip or overlap.
- Hero uses a carefully chosen mobile crop / `object-position`.
- Sound toggle remains reachable but does not overlap the invitation details.
- Date layout may stack vertically.
- Venue CTA should have a comfortable touch target (at least 44px).
- No horizontal scrolling.

### Tablet (768–1023px)
- Maintain a strong centered composition.
- Increase whitespace and typography gradually.
- Keep imagery focal point visible.

### Desktop (1024px+)
- Use full-bleed imagery and refined editorial spacing.
- Set sensible text max-widths.
- Avoid over-expanding body copy.
- Subtle asymmetric layouts are welcome in the date and venue sections.

## 8. Accessibility and quality

- Use semantic `main`, `section`, `h1`, headings, `time`, `button`, and `footer`.
- Exactly one primary `h1`.
- Decorative imagery should use empty alt text; meaningful images need descriptive alt text.
- Controls must work by keyboard and show focus rings.
- Music button must have accessible text, not only an icon.
- Ensure text contrast over the hero image.
- Respect `prefers-reduced-motion`.
- Keep animations from hiding content when JavaScript is disabled or fails.
- No autoplay audio.
- Do not rely on color alone to communicate control state.
- Use reduced-motion-safe smooth scrolling.
- Check console for warnings and runtime errors.

## 9. Suggested file structure

Adapt this to the current repository rather than blindly overwriting it:

```text
app/
  layout.jsx
  page.jsx
  globals.css
components/
  invitation/
    Hero.jsx
    InvitationNote.jsx
    DateSection.jsx
    VenueSection.jsx
    ClosingSection.jsx
    MusicToggle.jsx
    Countdown.jsx
public/
  images/
    beach-engagement-hero.webp
    beach-engagement-closing.webp
  audio/
    romantic-instrumental.mp3
design.md
```

Use a single-page architecture with small, focused components. Do not over-engineer the site or add a CMS/backend/database.

## 10. SEO and metadata

Set:
- Title: `Santhosh & Jency | Engagement Invitation`
- Description: `Join Santhosh & Jency to celebrate their engagement on Sunday, 15 November 2026 at SRK Hall, Arasur Bypass.`
- Theme color based on warm ivory.
- A graceful Open Graph title/description. Use a valid image path only if an image asset exists.
- Add an appropriate favicon only if a suitable asset exists.

## 11. Acceptance criteria

The implementation is ready when:
- It runs using the existing repository's package manager and conventions.
- All five page sections render correctly and responsively.
- Exact names, date, and venue are correct everywhere.
- Countdown is stable, local-time aware, and handles the event date gracefully.
- Music is user-initiated and play/pause works.
- Google Maps directions link is valid and based on the supplied venue text.
- GSAP timelines and ScrollTriggers are cleaned up.
- Reduced-motion preferences are respected.
- No broken images, missing audio errors, horizontal overflow, or console errors.
- Production build completes successfully.
- The visual result feels like a premium romantic invitation, not a generic template.

---

# Part 2 — OpenCode implementation prompt

Copy the prompt below into OpenCode after placing this `design.md` file in the project root.

## OpenCode prompt

You are a senior creative frontend engineer and visual designer. Implement a complete, production-quality, single-page engagement invitation website for Santhosh & Jency using the requirements in `design.md`.

### First: inspect before editing

1. Inspect the existing repository, `package.json`, app structure, Tailwind setup, installed animation libraries, and available images/audio.
2. Determine whether the project uses the Next.js App Router and identify its Tailwind version.
3. Reuse existing dependencies and patterns. Do not replace configurations or upgrade packages unnecessarily.
4. Use JSX only. Do not create TypeScript files.
5. If a dependency is truly missing, add only what is needed and use the existing package manager.

### Implement the complete experience

Create or update the page and focused components to deliver the design described in `design.md`. The required event details are:

- Couple: `Santhosh & Jency`
- Date: `Sunday, 15 November 2026`
- Venue: `SRK HALL, Arasur Bypass`

Build the five sections: cinematic hero, invitation note, date/countdown, venue/directions, and closing invitation. Add a minimal footer and a working, user-controlled music play/pause toggle.

### Visual quality bar

The first viewport must be exceptional. Use a high-quality photorealistic beach engagement image featuring an ivory-draped floral arch, white flowers, sunset, and ocean. The image must be a real available asset, not a guessed local path. If the repository contains no appropriate asset, set up a clearly documented replaceable asset path and provide a visually graceful fallback. Never leave a broken image URL. Keep overlays tasteful and text readable.

Use the design tokens, typography pairing, whitespace, and responsive rules in `design.md`. The couple's names should be the visual focal point. Do not add a conventional navbar, pricing cards, generic gradients, or unrelated sections.

### Animation implementation

- Use GSAP for the hero entrance and scroll reveals.
- Use Framer Motion for small interactive controls and micro-interactions.
- Do not make both libraries animate the same DOM element.
- Use proper refs and effect cleanup.
- Honor reduced-motion preferences.
- Keep animations subtle, cinematic, and performant.
- Never hide essential content permanently if animation setup fails.

### Music implementation

Create an accessible play/pause button backed by an HTML audio element and the path `/audio/romantic-instrumental.mp3`. Do not autoplay. If the file does not exist yet, explain in a README comment or asset note that the owner must add a licensed MP3. Handle playback rejection and missing media gracefully. Use a soft volume level and accessible state labels.

### Countdown and event details

Implement a stable countdown to 15 November 2026. No event start time has been provided, so do not invent one. Make the event timezone/time configuration explicit in one place and use a date-based fallback if necessary. Avoid hydration mismatches and negative countdown values. If the date has passed, show a graceful post-event state. Verify all date and venue text for consistency.

### Venue directions

Use a Google Maps search URL for `SRK HALL, Arasur Bypass`. Do not invent a precise address or place ID. Ensure the directions link works, is keyboard accessible, and opens safely.

### Code quality

- Use semantic and accessible HTML.
- Use reusable, small components with clear names.
- Use Next.js metadata in the appropriate App Router file.
- Use Next/Image or a correctly configured image approach.
- Optimize for mobile and avoid layout shift.
- Add no backend, database, authentication, or CMS.
- Avoid unnecessary dependencies.
- Include sensible loading/fallback states for media.

### Verify the implementation

After coding:

1. Run the available lint and production build commands from `package.json`.
2. Fix issues introduced by your changes.
3. Check all import paths and ensure the app starts.
4. Confirm that no TypeScript files were added.
5. Check responsiveness at 320px, 375px, tablet, and desktop widths if browser tooling is available.
6. Confirm reduced-motion behavior and keyboard accessibility.
7. Summarize the files created/changed, commands run, and any assets the owner must supply.

Do not stop after writing a plan. Inspect the project and implement the working website end-to-end.
