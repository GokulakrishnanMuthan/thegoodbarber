import { siteConfig } from "@/lib/site";

/**
 * Build a wa.me deep link for the configured WhatsApp number with a
 * pre-filled message, or return null when no valid number is configured.
 */
export function whatsappUrl(message: string) {
  const number = siteConfig.whatsapp.trim();
  if (!/^[1-9]\d{7,14}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Pre-filled booking message, optionally naming a specific service. */
export function bookingMessage(service?: string) {
  const base = `Hi ${siteConfig.name}, I'd like to book a home grooming appointment in ${siteConfig.address.city}.`;
  const line = service ? ` Service: ${service}.` : "";
  return `${base}${line} Please share your availability.`;
}

/** Convenience helper: a ready-to-use WhatsApp booking link. */
export function bookingUrl(service?: string) {
  return whatsappUrl(bookingMessage(service));
}
