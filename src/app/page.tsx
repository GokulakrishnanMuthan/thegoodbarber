import { Navbar } from "@/components/navbar";
import { ScrollProgress, ScrollToTop } from "@/components/scroll-utilities";
import { BookingActions } from "@/components/booking-actions";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Packages } from "@/components/sections/packages";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <BookingActions />
    </>
  );
}
