# The Good Barber — Home Barber Service in Coimbatore

Marketing website for **The Good Barber**, a freelance, **at-home** men's
grooming service by Sathish serving Coimbatore, Tamil Nadu. There is **no
physical salon** — customers book on WhatsApp and the barber travels to their
home. Built with a luxury **black · gold** aesthetic, glassmorphism, smooth
Framer Motion animations, full SEO, dark mode and mobile-first responsive design.

> **Tagline:** _No Salon Visit Needed. We Come To You._

## Tech Stack

| Concern    | Choice                                    |
| ---------- | ----------------------------------------- |
| Framework  | **Next.js 15** (App Router, RSC)          |
| Language   | **TypeScript**                            |
| Styling    | **Tailwind CSS** + CSS variables          |
| Components | **shadcn/ui**-style primitives (Radix UI) |
| Animation  | **Framer Motion**                         |
| Icons      | **Lucide React**                          |
| Theming    | **next-themes** (dark mode default)       |

## Sections

1. **Hero** — dark, with the "No Salon Visit Needed. We Come To You." USP, benefit chips and dual CTAs.
2. **About** — "Why Choose The Good Barber?" with six trust features.
3. **Services** — six categorised cards (Haircut & Beard, Hair Colouring, Facial & Skin Care, Hair Spa, Pedicure & Manicure, Groom Makeup) with transparent ₹ pricing.
4. **Combo Packages** — three highlighted pricing cards (₹999 / ₹1499 / ₹1999) with a featured "Best Value" plan.
5. **How It Works** — four steps: Book via WhatsApp → Choose Service → Select Time → Relax at Home.
6. **Service Benefits** — six icon cards on a dark band.
7. **Testimonials** — owner-supplied customer feedback.
8. **FAQ** — accordion, mirrored as `FAQPage` JSON-LD.
9. **Contact** — service area, call/WhatsApp, hours and an embedded Coimbatore map.
10. **Footer** — brand, quick links, service area and WhatsApp CTA.

Plus: sticky scroll-spy **navbar**, **scroll progress** bar, **scroll-to-top** button, a floating **WhatsApp** button and a safe-area-aware mobile booking bar.

## Features

- **WhatsApp-first booking** — every CTA deep-links to `wa.me/918838742490` with a pre-filled, service-aware message.
- **SEO** — localised title/meta/keywords, canonical, Open Graph (dynamic OG image), Twitter cards, JSON-LD `HairSalon` (mobile `areaServed`) + `FAQPage`, `robots.ts`, `sitemap.ts`, `manifest.ts`.
- **Accessibility** — semantic landmarks, ARIA labels, focus-visible rings, keyboard support and `prefers-reduced-motion` handling.
- **Core Web Vitals** — `next/image` with AVIF/WebP, font `display: swap`, priority hero image, security headers.

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
src/
├─ app/
│  ├─ layout.tsx           # Root layout, fonts, SEO metadata, providers
│  ├─ page.tsx             # Homepage — composes all sections
│  ├─ globals.css          # Tailwind layers + design tokens (light/dark)
│  ├─ opengraph-image.tsx  # Dynamic OG image (next/og)
│  ├─ robots.ts | sitemap.ts | manifest.ts
│  └─ not-found.tsx
├─ components/
│  ├─ ui/                  # Button, Card, Input, Select, Label, Badge, Accordion, …
│  ├─ sections/            # Hero, About, Services, Packages, HowItWorks, Benefits, Testimonials, Faq, Contact, Footer
│  ├─ navbar.tsx
│  ├─ booking-actions.tsx  # Floating WhatsApp + mobile booking bar
│  ├─ theme-provider.tsx | theme-toggle.tsx
│  ├─ reveal.tsx | section-heading.tsx | scroll-utilities.tsx
│  └─ structured-data.tsx
└─ lib/
   ├─ site.ts              # Brand config (business details, hours, socials)
   ├─ data.ts              # Services, combos, steps, benefits, testimonials, FAQ, nav
   ├─ booking.ts           # WhatsApp URL / booking-message helpers
   └─ utils.ts             # cn() helper
```

## Customization

- **Brand / contact info:** edit [`src/lib/site.ts`](src/lib/site.ts).
- **Services, pricing, packages, FAQ, testimonials:** edit [`src/lib/data.ts`](src/lib/data.ts).
- **Colors & theme:** tweak the CSS variables in [`src/app/globals.css`](src/app/globals.css) and the palette in [`tailwind.config.ts`](tailwind.config.ts).
- **WhatsApp number:** defaults to `918838742490` in `src/lib/site.ts`. Override per-environment by setting `NEXT_PUBLIC_WHATSAPP_NUMBER` (international, digits-only) in `.env.local`, then rebuild. Blank/invalid numbers disable WhatsApp links and fall back to the Contact section. Sending a WhatsApp message is a request — the appointment is confirmed only once the barber replies.

## Validation

- `npm run typecheck` — TypeScript validation.
- `npm test` — Node regression tests for WhatsApp URL/number validation and booking-message building.
- `npm run lint` — ESLint.
- `npm run build` — production compile, lint, types and static rendering.

## Notes

- Hero and About photography is loaded from Unsplash for the demo (hosts configured in `next.config.mjs`). Swap the URLs in `src/components/sections/*` with owned, optimized assets before launch.
- Prices are indicative; the UI states that the final price is confirmed on WhatsApp before each appointment.
- Replace the placeholder social links in `src/lib/site.ts` and confirm the production domain (`https://thegoodbarber.in`) so canonical/OG/sitemap links resolve correctly.

## Deploy

Optimized for [Vercel](https://vercel.com). Push to a Git repo and import — no
extra configuration required.
