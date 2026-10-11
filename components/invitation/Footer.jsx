import { EVENT } from "../../lib/event";

export default function Footer() {
  return (
    <footer className="bg-ivory px-6 py-10 text-center">
      <p className="font-script text-lg leading-none text-ink md:text-xl">{EVENT.coupleUpper}</p>
      <p className="mt-2 font-script text-base leading-none text-muted-ink md:text-lg">15 November 2026</p>
    </footer>
  );
}
