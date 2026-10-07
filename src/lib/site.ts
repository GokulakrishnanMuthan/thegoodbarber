/**
 * Central site configuration — single source of truth for business details
 * used across the UI, metadata and JSON-LD structured data.
 *
 * The Good Barber is a freelance, at-home men's grooming service. There is no
 * physical salon: the barber travels to the customer's location in Coimbatore.
 */
export const siteConfig = {
  name: "The Good Barber",
  barber: "Sathish",
  tagline: "No Salon Visit Needed. We Come To You.",
  description:
    "Professional home barber and men's grooming services across Coimbatore — haircuts, beard styling, facials, hair spa and grooming packages delivered at your doorstep.",
  url: "https://thegoodbarber.in",
  ogImage: "/opengraph-image",
  phone: "+91 88387 42490",
  phoneHref: "tel:+918838742490",
  // Digits-only international number powering the WhatsApp booking flow.
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "918838742490",
  email: "hello@thegoodbarber.in",
  emailHref: "mailto:hello@thegoodbarber.in",
  // Mobile service — city/region only, no street premises.
  address: {
    city: "Coimbatore",
    region: "Tamil Nadu",
    country: "India",
    serviceArea: "Serving all areas across Coimbatore",
  },
  hours: [{ day: "Monday – Sunday", time: "8:00 AM – 9:00 PM" }],
  // Coimbatore city centre, used for the map and structured data.
  geo: { latitude: 11.0168, longitude: 76.9558 },
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
