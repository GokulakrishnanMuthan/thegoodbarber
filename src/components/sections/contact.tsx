"use client";

import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { bookingUrl } from "@/lib/booking";
import { siteConfig } from "@/lib/site";

export function Contact() {
  const { address } = siteConfig;
  const chat = bookingUrl();
  const mapsQuery = encodeURIComponent(`${address.city}, ${address.region}, ${address.country}`);

  const details = [
    {
      icon: MapPin,
      label: "Service area",
      value: address.serviceArea,
      href: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`,
      external: true,
    },
    {
      icon: Phone,
      label: "Call / WhatsApp",
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
      external: false,
    },
    {
      icon: Clock,
      label: "Available",
      value: siteConfig.hours[0].time,
      href: undefined,
      external: false,
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Book your appointment <span className="text-gold-gradient">today</span>
            </>
          }
          description={`Message ${siteConfig.barber} on WhatsApp to arrange a home visit anywhere in ${address.city}.`}
        />

        <div className="mt-10 grid items-stretch gap-6 lg:grid-cols-[1fr_1.1fr]">
          {/* Details */}
          <Reveal className="grid content-start gap-3">
            {details.map((detail) => {
              const Icon = detail.icon;
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 transition-colors group-hover:bg-gold-gradient group-hover:text-black">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 break-words">
                    <p className="text-sm text-muted-foreground">{detail.label}</p>
                    <p className="mt-0.5 font-medium">{detail.value}</p>
                  </div>
                </>
              );
              const className =
                "group flex items-center gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:border-gold-400/40 hover:shadow-gold";
              return detail.href ? (
                <a
                  key={detail.label}
                  href={detail.href}
                  target={detail.external ? "_blank" : undefined}
                  rel={detail.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {inner}
                </a>
              ) : (
                <div key={detail.label} className={className}>
                  {inner}
                </div>
              );
            })}

            <div className="rounded-2xl border border-gold-400/30 bg-gold-400/5 p-5">
              <p className="font-display text-lg font-semibold">
                Home visit service across {address.city}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                No salon visit needed — we bring professional grooming to you.
              </p>
              <Button asChild size="lg" className="mt-5 w-full">
                <a
                  href={chat ?? siteConfig.phoneHref}
                  target={chat ? "_blank" : undefined}
                  rel={chat ? "noopener noreferrer" : undefined}
                >
                  <MessageCircle className="h-5 w-5" />
                  Book on WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <div className="h-full overflow-hidden rounded-2xl border border-border bg-card shadow-glass">
              <iframe
                title={`Map of ${siteConfig.name} service area in ${address.city}`}
                src={`https://www.google.com/maps?q=${mapsQuery}&z=12&output=embed`}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[360px] w-full grayscale-[0.3] contrast-[1.1]"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
