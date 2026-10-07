"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Scissors, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { bookingUrl } from "@/lib/booking";
import { navLinks } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState("#home");
  const chat = bookingUrl();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for active nav highlighting.
  React.useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll when the mobile menu is open.
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/10 bg-background/70 py-3 backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent py-5"
      )}
    >
      <nav className="container flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-gradient text-black shadow-gold transition-transform group-hover:scale-105">
            <Scissors className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold tracking-tight">
            The Good<span className="text-gold-gradient"> Barber</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-active={active === link.href}
                className="link-underline text-sm font-medium text-foreground/80 transition-colors hover:text-gold-400 data-[active=true]:text-gold-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a
              href={chat ?? "#contact"}
              target={chat ? "_blank" : undefined}
              rel={chat ? "noopener noreferrer" : undefined}
            >
              Book on WhatsApp
            </a>
          </Button>

          {/* Mobile toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container flex flex-col gap-1 py-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-gold-400/10 hover:text-gold-400"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2 px-2">
                <Button asChild className="w-full" size="lg">
                  <a
                    href={chat ?? "#contact"}
                    target={chat ? "_blank" : undefined}
                    rel={chat ? "noopener noreferrer" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    Book on WhatsApp
                  </a>
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
