import { faq } from "@/data/faq";
import { Accordion } from "@/components/ui/Accordion";
import { Section } from "@/components/ui/Section";

export function Faq() {
  return (
    <Section id="preguntas" title="Preguntas frecuentes" intro="Si tienes otra duda, escríbenos por WhatsApp." centered alt>
      <div data-reveal className="mx-auto max-w-3xl">
        <Accordion items={faq} />
      </div>
    </Section>
  );
}
