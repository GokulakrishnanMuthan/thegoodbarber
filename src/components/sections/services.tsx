"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/booking";
import { serviceGroups } from "@/lib/data";

export function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Premium men&apos;s grooming,{" "}
              <span className="text-gold-gradient">priced upfront</span>
            </>
          }
          description="From quick trims to premium facials and spa treatments — every service delivered at your home in Coimbatore."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceGroups.map((group, i) => {
            const Icon = group.icon;
            const chat = bookingUrl(group.title);
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-gold"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gold-400/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-all duration-300 group-hover:bg-gold-gradient group-hover:text-black">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                </div>

                <ul className="flex-1 divide-y divide-border/70">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center justify-between gap-4 py-2.5 text-sm"
                    >
                      <span className="text-foreground/85">{item.name}</span>
                      <span className="shrink-0 font-semibold text-gold-400">{item.price}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild size="sm" variant="outline" className="mt-6 w-full">
                  <a
                    href={chat ?? "#contact"}
                    target={chat ? "_blank" : undefined}
                    rel={chat ? "noopener noreferrer" : undefined}
                    aria-label={`Book ${group.title} on WhatsApp`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Book this service
                  </a>
                </Button>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Prices are indicative and may vary with hair length, service add-ons and
          product choice. Final price is confirmed on WhatsApp before your appointment.
        </p>
      </div>
    </section>
  );
}
