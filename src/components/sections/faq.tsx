import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { faqs } from "@/lib/data";

export function Faq() {
  return (
    <section id="faq" className="section-padding bg-secondary/40">
      <div className="container">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Questions, <span className="text-gold-gradient">answered</span>
            </>
          }
          description="Everything you need to know before booking your home grooming appointment."
        />

        <Reveal className="mx-auto mt-10 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
