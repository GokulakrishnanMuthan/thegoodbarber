"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  BadgeIndianRupee,
  CalendarClock,
  Home,
  MessageCircle,
  ShieldCheck,
  Star,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { bookingUrl } from "@/lib/booking";
import { siteConfig } from "@/lib/site";

const features = [
  { icon: Home, title: "Home Visit Service", text: "Grooming delivered to your doorstep." },
  { icon: Star, title: "Experienced Professional", text: "Skilled, friendly and reliable barber." },
  { icon: ShieldCheck, title: "Safe & Hygienic Tools", text: "Clean, sanitised equipment every time." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", text: "Transparent rates with no surprises." },
  { icon: MessageCircle, title: "Easy WhatsApp Booking", text: "Book in seconds, right from your phone." },
  { icon: CalendarClock, title: "Convenient Scheduling", text: "Flexible slots, open 8 AM to 9 PM daily." },
];

export function About() {
  const chat = bookingUrl();

  return (
    <section id="about" className="section-padding bg-secondary/40">
      <div className="container grid items-center gap-14 lg:grid-cols-2">
        {/* Imagery */}
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-glass">
            <Image
              src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=900&q=80"
              alt="Professional barber trimming a client's hair"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="glass-dark absolute -right-4 bottom-8 max-w-[210px] rounded-2xl p-5 shadow-glass sm:-right-8">
            <p className="font-display text-2xl font-bold text-gold-gradient">At your doorstep</p>
            <p className="mt-1 text-sm text-white/75">
              Salon-quality grooming, no salon visit needed
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <Badge>Why Choose The Good Barber?</Badge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Salon-quality grooming,{" "}
              <span className="text-gold-gradient">right at home</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              The Good Barber brings professional men&apos;s grooming directly to
              your doorstep in {siteConfig.address.city}. From haircuts and beard
              grooming to facials and premium treatments, enjoy expert care without
              ever stepping out of your home.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex gap-3 rounded-xl border border-border bg-card/60 p-4"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-400/10 text-gold-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold">{feature.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {feature.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <Button asChild size="lg" className="mt-8">
              <a
                href={chat ?? "#contact"}
                target={chat ? "_blank" : undefined}
                rel={chat ? "noopener noreferrer" : undefined}
              >
                <MessageCircle className="h-5 w-5" />
                Book on WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
