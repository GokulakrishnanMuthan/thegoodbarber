"use client";

import { motion } from "framer-motion";
import { Check, MessageCircle, Sparkles } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/booking";
import { combos } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Packages() {
  return (
    <section id="packages" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeading
          eyebrow="Combo Packages"
          title={
            <>
              Bundle up and <span className="text-gold-gradient">save more</span>
            </>
          }
          description="Curated grooming combos that bring together our most-loved services at the best value."
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3">
          {combos.map((combo, i) => {
            const chat = bookingUrl(`${combo.name} (${combo.price})`);
            return (
              <motion.article
                key={combo.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative flex flex-col rounded-[1.75rem] border bg-card p-8 transition-all duration-300",
                  combo.featured
                    ? "border-gold-400/50 shadow-gold lg:-translate-y-4 lg:scale-[1.03]"
                    : "border-border hover:-translate-y-1.5 hover:border-gold-400/40 hover:shadow-gold"
                )}
              >
                <div className="flex items-center justify-between">
                  <Badge variant={combo.featured ? "solid" : "default"}>
                    {combo.badge}
                  </Badge>
                  {combo.featured && (
                    <Sparkles className="h-5 w-5 text-gold-400" aria-hidden="true" />
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold">{combo.name}</h3>
                <p className="mt-2 font-display text-4xl font-bold text-gold-gradient">
                  {combo.price}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {combo.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" aria-hidden="true" />
                      <span className="text-foreground/85">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  size="lg"
                  variant={combo.featured ? "default" : "outline"}
                  className="mt-8 w-full"
                >
                  <a
                    href={chat ?? "#contact"}
                    target={chat ? "_blank" : undefined}
                    rel={chat ? "noopener noreferrer" : undefined}
                    aria-label={`Book ${combo.name} on WhatsApp`}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Book {combo.name}
                  </a>
                </Button>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
