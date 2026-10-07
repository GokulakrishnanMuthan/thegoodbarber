"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { benefits } from "@/lib/data";

export function Benefits() {
  return (
    <section
      id="benefits"
      className="section-padding bg-[#0a0a0a] bg-hero-radial text-white"
    >
      <div className="container">
        <SectionHeading
          eyebrow="Service Benefits"
          title={
            <>
              The doorstep <span className="text-gold-gradient">advantage</span>
            </>
          }
          description="Why customers across Coimbatore choose The Good Barber over a trip to the salon."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-gold-gradient text-black">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{benefit.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
