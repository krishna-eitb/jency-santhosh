import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center bg-ivory px-6 text-center">
      <p className="font-script text-5xl text-muted-gold">Santhosh &amp; Jency</p>
      <p className="mt-4 font-script text-2xl leading-tight text-ink md:text-3xl">This page could not be found.</p>
      <Link href="/" className="mt-8 font-script text-lg leading-none text-deep-sea underline underline-offset-8 md:text-xl">
        Back to the invitation
      </Link>
    </main>
  );
}
