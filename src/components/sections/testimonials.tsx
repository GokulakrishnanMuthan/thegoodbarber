"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Loved by customers in{" "}
              <span className="text-gold-gradient">Coimbatore</span>
            </>
          }
          description="Real feedback from clients who booked a home grooming appointment."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <motion.figure
              key={testimonial.quote}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-8 w-8 text-gold-400/50" aria-hidden="true" />
              <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, star) => (
                  <Star key={star} className="h-4 w-4 fill-gold-400 text-gold-400" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4 text-sm font-medium text-muted-foreground">
                {testimonial.author}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
