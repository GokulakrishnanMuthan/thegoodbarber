"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MapPin, MessageCircle, Scissors } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/booking";
import { heroBenefits } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const chat = bookingUrl();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0a0a0a] bg-hero-radial pt-28 pb-16 text-white"
    >
      {/* Ambient background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-gold-700/10 blur-3xl" />
      </div>

      <div className="container grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm"
          >
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold-400" aria-hidden="true" />
            <span className="text-white/80">
              At-home grooming across {siteConfig.address.city}, {siteConfig.address.region}
            </span>
          </motion.div>

          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            The Good
            <br />
            <span className="text-gold-gradient">Barber</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="max-w-xl text-lg text-white/70"
          >
            Professional barber services at your doorstep in {siteConfig.address.city}.
            Skip the salon queue and enjoy premium grooming from an experienced
            barber in the comfort of your home.
          </motion.p>

          {/* USP callout */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="glass-dark rounded-2xl border-gold-400/30 px-5 py-4"
          >
            <p className="font-display text-lg font-bold text-gold-300 sm:text-xl">
              No Salon Visit Needed. We Come To You.
            </p>
            <p className="mt-1 text-sm text-white/70">
              Professional men&apos;s grooming services anywhere in {siteConfig.address.city}.
            </p>
          </motion.div>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild size="lg">
              <a
                href={chat ?? "#contact"}
                target={chat ? "_blank" : undefined}
                rel={chat ? "noopener noreferrer" : undefined}
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#services">
                <Scissors className="h-4 w-4" />
                View Services
              </Link>
            </Button>
          </motion.div>

          {/* Benefit chips */}
          <motion.ul
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-2 flex flex-wrap gap-x-5 gap-y-2"
          >
            {heroBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-1.5 text-sm text-white/80">
                <Check className="h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-glass">
            <Image
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80"
              alt="Barber giving a precision men's haircut"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* Floating home-service card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="glass-dark absolute -bottom-6 -left-4 flex items-center gap-3 rounded-2xl p-4 shadow-glass sm:-left-8"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-gradient text-black">
              <Scissors className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-bold leading-tight text-white">Grooming at home</p>
              <p className="text-xs text-white/70">8 AM – 9 PM · All week</p>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="glass-dark absolute -right-4 top-8 rounded-2xl px-4 py-3 shadow-glass sm:-right-6"
          >
            <p className="text-xs uppercase tracking-wider text-gold-300">By Sathish</p>
            <p className="text-sm font-semibold text-white">Men&apos;s grooming specialist</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
