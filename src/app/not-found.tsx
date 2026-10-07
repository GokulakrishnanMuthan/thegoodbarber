import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-hero-radial px-6 text-center">
      <p className="font-display text-8xl font-bold text-gold-gradient">404</p>
      <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
        This page took a day off.
      </h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to the chair.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </main>
  );
}
