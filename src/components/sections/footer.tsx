import Link from "next/link";
import { Facebook, Instagram, MapPin, MessageCircle, Phone, Scissors, Youtube } from "lucide-react";

import { bookingUrl } from "@/lib/booking";
import { siteConfig } from "@/lib/site";

const socials = [
  { icon: Instagram, href: siteConfig.socials.instagram, label: "Instagram" },
  { icon: Facebook, href: siteConfig.socials.facebook, label: "Facebook" },
  { icon: Youtube, href: siteConfig.socials.youtube, label: "YouTube" },
];

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const chat = bookingUrl();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-12">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-black">
                <Scissors className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold">
                The Good<span className="text-gold-gradient"> Barber</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Professional barber services at home. Premium men&apos;s grooming
              delivered to your doorstep across {siteConfig.address.city}.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground/70 transition-all hover:border-gold-400/50 hover:bg-gold-400/10 hover:text-gold-400"
                  >
                    <Icon className="h-[18px] w-[18px]" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={chat ?? siteConfig.phoneHref}
                  target={chat ? "_blank" : undefined}
                  rel={chat ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted-foreground transition-colors hover:text-gold-400"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Service Area
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{siteConfig.address.serviceArea}</span>
              </li>
              <li>
                <span className="text-foreground/85">{siteConfig.hours[0].day}</span>
                <br />
                {siteConfig.hours[0].time}
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-gold-400">
              Get in Touch
            </h4>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <Link href={siteConfig.phoneHref} className="transition-colors hover:text-gold-400">
                  {siteConfig.phone}
                </Link>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-gold-400" />
                <a
                  href={chat ?? siteConfig.phoneHref}
                  target={chat ? "_blank" : undefined}
                  rel={chat ? "noopener noreferrer" : undefined}
                  className="transition-colors hover:text-gold-400"
                >
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 {siteConfig.name}. All rights reserved.</p>
          <p>Professional barber services at home · {siteConfig.address.city}</p>
        </div>
      </div>
    </footer>
  );
}
