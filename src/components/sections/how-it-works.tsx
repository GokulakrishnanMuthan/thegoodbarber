"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/data";

export function HowItWorks() {
  return (
    <section id="process" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="How It Works"
          title={
            <>
              Book in <span className="text-gold-gradient">four easy steps</span>
            </>
          }
          description="A hassle-free appointment, start to finish — all from your phone."
        />

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-7"
              >
                <span
                  className="font-display text-5xl font-bold text-gold-400/20"
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400">
                  <Icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
