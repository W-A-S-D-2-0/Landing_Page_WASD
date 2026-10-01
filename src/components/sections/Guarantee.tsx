import { ShieldCheck } from "lucide-react";
import Link from "next/link";
import { guarantee } from "@/data/content";
import { Container } from "@/components/ui/Container";

export function Guarantee() {
  return (
    <section aria-labelledby="garantia-titulo" className="py-16 sm:py-20">
      <Container>
        <div
          data-reveal
          className="mx-auto flex max-w-4xl flex-col gap-5 rounded-card border border-line border-l-4 border-l-success bg-surface p-6 sm:flex-row sm:items-start sm:gap-6 sm:p-10"
        >
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
            <ShieldCheck aria-hidden="true" className="h-6 w-6" strokeWidth={1.75} />
          </span>
          <div>
            <h2 id="garantia-titulo" className="heading-3 text-xl sm:text-2xl">
              {guarantee.title}
            </h2>
            <p className="mt-3 max-w-[60ch] text-lg text-ink">{guarantee.text}</p>
            <Link
              href={guarantee.href}
              className="mt-4 inline-flex min-h-11 items-center font-semibold text-primary underline decoration-1 underline-offset-4 hover:decoration-2"
            >
              {guarantee.linkLabel}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
