import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id?: string;
  title?: ReactNode;
  intro?: ReactNode;
  /** Fondo alterno (--surface-alt). */
  alt?: boolean;
  /** Centra el encabezado. */
  centered?: boolean;
  className?: string;
  children: ReactNode;
};

/** Sección con encabezado H2 opcional y espaciado vertical consistente. */
export function Section({ id, title, intro, alt, centered, className, children }: SectionProps) {
  const headingId = id ? `${id}-titulo` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={cn("py-16 sm:py-20 lg:py-24", alt && "bg-surface-alt", className)}
    >
      <Container>
        {(title || intro) && (
          <header
            data-reveal
            className={cn("mb-10 max-w-2xl sm:mb-12", centered && "mx-auto text-center")}
          >
            {title && (
              <h2 id={headingId} className="heading-2">
                {title}
              </h2>
            )}
            {intro && <p className={cn("lead mt-4", centered && "mx-auto")}>{intro}</p>}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
