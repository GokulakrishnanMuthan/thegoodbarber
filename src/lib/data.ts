import {
  Armchair,
  CalendarClock,
  Crown,
  Droplets,
  Hand,
  Home,
  ListChecks,
  MessageCircle,
  Palette,
  Scissors,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*  Services — grouped by category with transparent pricing                   */
/* -------------------------------------------------------------------------- */

export type ServiceItem = { name: string; price: string };

export type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  items: ServiceItem[];
};

export const serviceGroups: ServiceGroup[] = [
  {
    icon: Scissors,
    title: "Haircut & Beard",
    items: [
      { name: "Haircut", price: "₹300" },
      { name: "Shave", price: "₹200" },
      { name: "Beard Trim", price: "₹200" },
      { name: "Kids Haircut", price: "₹250" },
      { name: "Head Shave + Face Shave", price: "₹400" },
    ],
  },
  {
    icon: Palette,
    title: "Hair Colouring",
    items: [
      { name: "Hair Colour", price: "₹500" },
      { name: "Hair Colour (Ammonia Free)", price: "₹800" },
      { name: "Beard Colour", price: "₹350" },
      { name: "Beard Colour (Ammonia Free)", price: "₹400" },
      { name: "Moustache Colour", price: "₹200" },
    ],
  },
  {
    icon: Sparkles,
    title: "Facial, Cleanup & Skin Care",
    items: [
      { name: "Detan Face & Neck", price: "₹600" },
      { name: "Detan Face", price: "₹300" },
      { name: "Detan Neck", price: "₹300" },
      { name: "Full Arms Detan", price: "₹750" },
      { name: "Half Arms Detan", price: "₹600" },
      { name: "Face Cleanup", price: "₹800" },
      { name: "Advanced Face Cleanup", price: "₹1000" },
      { name: "Aroma Facial", price: "₹1000" },
      { name: "Gold Facial", price: "₹1500" },
      { name: "Bridal Glow Facial", price: "₹2500" },
    ],
  },
  {
    icon: Droplets,
    title: "Hair Spa & Treatment",
    items: [
      { name: "Head Massage", price: "₹500" },
      { name: "L'Oréal Hair Spa", price: "₹1200" },
      { name: "Anti-Dandruff Treatment", price: "₹1500" },
    ],
  },
  {
    icon: Hand,
    title: "Pedicure & Manicure",
    items: [
      { name: "Pedicure", price: "₹800" },
      { name: "Manicure", price: "₹400" },
      { name: "Manicure & Pedicure", price: "₹1100" },
      { name: "Nail Cut & File", price: "₹300" },
    ],
  },
  {
    icon: Crown,
    title: "Groom Makeup",
    items: [{ name: "Groom Makeup", price: "₹3500" }],
  },
];

/* -------------------------------------------------------------------------- */
/*  Combo packages                                                            */
/* -------------------------------------------------------------------------- */

export type Combo = {
  name: string;
  price: string;
  badge: string;
  features: string[];
  featured?: boolean;
};

export const combos: Combo[] = [
  {
    name: "Combo 999",
    price: "₹999",
    badge: "Popular",
    features: ["Haircut", "Shave or Beard Trim", "Head Massage", "Detan"],
  },
  {
    name: "Combo 1499",
    price: "₹1499",
    badge: "Best Value",
    features: ["Haircut", "Shave or Beard Trim", "Detan", "Face Cleanup"],
    featured: true,
  },
  {
    name: "Combo 1999",
    price: "₹1999",
    badge: "Premium",
    features: ["Haircut", "Shave", "Beard Trim", "Detan Face & Neck", "Gold Facial"],
  },
];

/* -------------------------------------------------------------------------- */
/*  How it works                                                              */
/* -------------------------------------------------------------------------- */

export type Step = { icon: LucideIcon; title: string; text: string };

export const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Book via WhatsApp",
    text: "Message us on WhatsApp to start your appointment request.",
  },
  {
    icon: ListChecks,
    title: "Choose Service",
    text: "Pick a haircut, beard, facial, spa or a combo package.",
  },
  {
    icon: CalendarClock,
    title: "Select Time",
    text: "Share your address and a time that suits your day.",
  },
  {
    icon: Armchair,
    title: "Relax at Home",
    text: "We arrive with professional kit and groom you at home.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Service benefits                                                          */
/* -------------------------------------------------------------------------- */

export type Benefit = { icon: LucideIcon; title: string; text: string };

export const benefits: Benefit[] = [
  { icon: Home, title: "No Travel Required", text: "Skip the queue — we come to your doorstep." },
  { icon: Sparkles, title: "Salon Experience at Home", text: "Premium, salon-quality grooming in your space." },
  { icon: CalendarClock, title: "Flexible Appointments", text: "Open 8 AM–9 PM, all week long." },
  { icon: Wrench, title: "Professional Equipment", text: "We bring our own professional tools and products." },
  { icon: ShieldCheck, title: "Hygienic Service", text: "Clean, sanitised equipment for every appointment." },
  { icon: Wallet, title: "Affordable Packages", text: "Transparent pricing and great-value combos." },
];

/* -------------------------------------------------------------------------- */
/*  Testimonials (supplied by the business)                                   */
/* -------------------------------------------------------------------------- */

export type Testimonial = { quote: string; author: string };

export const testimonials: Testimonial[] = [
  {
    quote: "Professional service, arrived on time and gave an excellent haircut.",
    author: "Home service customer, Coimbatore",
  },
  {
    quote: "Loved the convenience of getting a premium haircut at home.",
    author: "Home service customer, Coimbatore",
  },
  {
    quote: "Highly recommended — clean equipment and great grooming service.",
    author: "Home service customer, Coimbatore",
  },
];

/* -------------------------------------------------------------------------- */
/*  FAQ                                                                       */
/* -------------------------------------------------------------------------- */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Do you provide salon services at home?",
    answer:
      "Yes. The Good Barber is a fully mobile service — there is no physical salon. We bring professional, salon-quality men's grooming directly to your home anywhere in Coimbatore.",
  },
  {
    question: "Is there a minimum booking amount?",
    answer:
      "There is no strict minimum. You can book a single service such as a haircut, or choose one of our combo packages for the best value.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Simply message us on WhatsApp at +91 88387 42490. Tell us the service you want, your address and a preferred time, and we'll confirm your appointment.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We provide home visits across all areas of Coimbatore, Tamil Nadu.",
  },
  {
    question: "Do you bring your own equipment?",
    answer:
      "Yes. We arrive with our own professional, sanitised tools and grooming products for every appointment.",
  },
  {
    question: "Are services only for men?",
    answer:
      "Yes. The Good Barber is a men's grooming specialist and our services are designed for men only.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Hero highlights & navigation                                              */
/* -------------------------------------------------------------------------- */

export const heroBenefits = [
  "Home Service",
  "Professional Equipment",
  "Hygienic Service",
  "Flexible Scheduling",
  "Men's Grooming Specialist",
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "How It Works", href: "#process" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];
