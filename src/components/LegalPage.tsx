import type { ReactNode } from "react";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Container } from "@/components/ui/Container";

/** Plantilla para páginas legales (privacidad, términos, garantía). */
export function LegalPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenido" className="py-14 sm:py-20">
        <Container className="max-w-3xl">
          <h1 className="heading-2">{title}</h1>
          <p className="mt-2 text-sm text-ink-muted">Última actualización: {updated}</p>
          <div className="mt-8 space-y-5 text-ink [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_li]:ml-5 [&_li]:list-disc [&_p]:max-w-[65ch] [&_p]:text-ink-muted">
            {children}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
