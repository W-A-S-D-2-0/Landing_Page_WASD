import { finalCta } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Franja de color primario: el único bloque de color fuerte de la página, para cerrar con fuerza. */
export function FinalCta() {
  return (
    <section aria-labelledby="cta-final-titulo" className="py-16 sm:py-20">
      <Container>
        <div
          data-reveal
          className="relative overflow-hidden rounded-card bg-primary px-6 [&_:focus-visible]:outline-on-primary py-14 text-center text-on-primary sm:px-10 sm:py-20"
        >
          {/* Detalle discreto: las cuatro teclas del logo, en línea fina. */}
          <svg
            aria-hidden="true"
            viewBox="0 0 32 24"
            fill="none"
            className="pointer-events-none absolute -right-8 -top-6 h-48 w-64 opacity-15 sm:h-64 sm:w-80"
          >
            <rect x="11.25" y="1.25" width="9.5" height="9.5" rx="2.25" stroke="currentColor" strokeWidth="0.5" />
            <rect x="0.75" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="currentColor" strokeWidth="0.5" />
            <rect x="11.25" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="currentColor" strokeWidth="0.5" />
            <rect x="21.75" y="13.75" width="9.5" height="9.5" rx="2.25" stroke="currentColor" strokeWidth="0.5" />
          </svg>

          <h2 id="cta-final-titulo" className="heading-2 relative mx-auto max-w-[22ch] text-on-primary">
            {finalCta.title}
          </h2>
          <p className="relative mx-auto mt-4 max-w-[52ch] text-lg opacity-90">{finalCta.text}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
            <ButtonLink
              href={whatsappUrl({ type: "demo" })}
              size="lg"
              variant="inverse"
              track={{ event: "whatsapp_click", label: "cta_final" }}
            >
              <WhatsAppIcon />
              {finalCta.button}
            </ButtonLink>
            <a
              href="#diagnostico"
              className="inline-flex min-h-11 items-center font-semibold underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              {finalCta.secondary}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
