import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { bookingUrl } from "@/lib/booking";

export function BookingActions() {
  const chat = bookingUrl();
  const href = chat ?? "#contact";
  const external = Boolean(chat);

  return (
    <>
      {/* Floating WhatsApp button (desktop + mobile) */}
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        aria-label={
          external
            ? "Book on WhatsApp (opens in a new tab)"
            : "Contact us; WhatsApp is not configured yet"
        }
        className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-4 z-40 flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-4 text-sm font-semibold text-black shadow-lg transition-colors hover:bg-[#1ebe5b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      >
        <MessageCircle className="h-5 w-5" aria-hidden="true" />
        <span>WhatsApp</span>
      </a>

      {/* Sticky mobile booking bar */}
      <nav
        aria-label="Mobile booking"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 backdrop-blur-md sm:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <Button asChild size="lg" className="w-full">
          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
          >
            <MessageCircle className="h-5 w-5" />
            Book on WhatsApp
          </a>
        </Button>
      </nav>
    </>
  );
}
