import { finalCta } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-final-titulo" className="py-16 sm:py-20">
      <Container>
        <div data-reveal className="rounded-card bg-surface-alt px-6 py-12 text-center sm:px-10 sm:py-16">
          <h2 id="cta-final-titulo" className="heading-2 mx-auto max-w-[22ch]">
            {finalCta.title}
          </h2>
          <p className="lead mx-auto mt-4">{finalCta.text}</p>
          <ButtonLink
            href={whatsappUrl({ type: "demo" })}
            size="lg"
            className="mt-8"
            track={{ event: "whatsapp_click", label: "cta_final" }}
          >
            <WhatsAppIcon />
            {finalCta.button}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
