import { ArrowLeft, CalendarCheck, Clock, ImageIcon, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { demoBar, demoBySlug, demos } from "@/data/demos";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { DemoBooking } from "@/components/demo/DemoBooking";
import { themeVars } from "@/components/mockups/MockSite";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

// Sitio estático: solo existen las demos definidas en src/data/demos.ts.
export const dynamicParams = false;

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: PageProps<"/demo/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const demo = demoBySlug(slug);
  if (!demo) return {};
  return {
    title: `${demoBar.badge} · ${demo.label} | ${site.name}`,
    description: `${demo.headline}. ${demoBar.text}`,
    // Son ejemplos: no deben competir en Google con la landing.
    robots: { index: false, follow: true },
    alternates: { canonical: `/demo/${demo.slug}/` },
  };
}

/**
 * Demo navegable de una web por sector. Usa los colores "mock" del sector
 * para que se vea como la web del negocio, no como la de WASD.
 */
export default async function DemoPage({ params }: PageProps<"/demo/[slug]">) {
  const { slug } = await params;
  const demo = demoBySlug(slug);
  if (!demo) notFound();

  const ctaUrl = whatsappUrl({ type: "demoPage", demoName: demo.label.toLowerCase() });

  return (
    <div style={themeVars[demo.theme]} className="min-h-screen bg-mock-bg text-mock-text">
      {/* Barra de WASD: deja claro que es una demo. */}
      <div className="sticky top-0 z-40 border-b border-line bg-surface text-ink">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
          <Link href="/#proyectos" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-ink-muted hover:text-primary">
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span className="hidden sm:inline">{demoBar.back}</span>
            <span className="sm:hidden">{site.name}</span>
          </Link>
          <p className="hidden items-center gap-2 text-sm md:flex">
            <span className="rounded-md bg-accent-soft px-2 py-0.5 text-xs font-semibold uppercase tracking-wide text-accent-ink">
              {demoBar.badge}
            </span>
            {demoBar.text}
          </p>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-track="demo_cta_click"
            data-track-label={`demo_${demo.slug}`}
            className="inline-flex min-h-10 items-center rounded-[10px] bg-primary px-4 text-sm font-semibold text-on-primary hover:bg-primary-hover"
          >
            {demoBar.cta}
          </a>
        </div>
      </div>

      {/* Desde aquí: la web de ejemplo del negocio. */}
      <header className="border-b border-mock-line">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <span className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="h-5 w-5 rounded-md bg-[var(--mock-accent)]" aria-hidden="true" />
            {demo.brand}
          </span>
          <nav aria-label={`${demoBar.menuLabel} ${demo.brand}`} className="hidden gap-6 text-sm text-mock-muted sm:flex">
            <a href="#carta" className="hover:text-mock-text">{demo.list.title}</a>
            <a href="#horarios" className="hover:text-mock-text">{demo.hours.title}</a>
            <a href="#reservar" className="hover:text-mock-text">{demo.primaryAction}</a>
          </nav>
        </div>
      </header>

      <main id="contenido">
        <section className="bg-[var(--mock-soft)]">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[1.2fr_1fr]">
            <div>
              <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{demo.headline}</h1>
              <p className="mt-4 text-lg text-mock-muted">{demo.subline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#reservar"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--mock-accent)] px-5 font-semibold text-mock-on hover:opacity-90"
                >
                  <CalendarCheck aria-hidden="true" className="h-4 w-4" />
                  {demo.primaryAction}
                </a>
                <a
                  href="#horarios"
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-mock-line bg-mock-bg px-5 font-semibold"
                >
                  <MapPin aria-hidden="true" className="h-4 w-4" />
                  {demo.location.title}
                </a>
              </div>
            </div>
            <PhotoSlot label={demo.gallery.items[0]} className="aspect-[4/3]" />
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{demo.about.title}</h2>
          <p className="mt-3 max-w-[60ch] text-lg text-mock-muted">{demo.about.text}</p>
        </section>

        <section id="carta" className="mx-auto max-w-5xl scroll-mt-20 px-4 pb-14 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{demo.list.title}</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {demo.list.items.map((item) => (
              <li key={item.name} className="rounded-xl border border-mock-line p-4">
                <p className="flex items-baseline justify-between gap-3 font-semibold">
                  {item.name}
                  <span className="shrink-0 text-mock-muted">{item.detail}</span>
                </p>
                <p className="mt-1 text-sm text-mock-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-5xl px-4 pb-14 sm:px-6">
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{demo.gallery.title}</h2>
          <ul className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {demo.gallery.items.map((item) => (
              <li key={item}>
                <PhotoSlot label={item} className="aspect-square" />
              </li>
            ))}
          </ul>
        </section>

        <section id="horarios" className="scroll-mt-20 bg-[var(--mock-soft)]">
          <div className="mx-auto grid max-w-5xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
                <Clock aria-hidden="true" className="h-5 w-5 text-[var(--mock-accent)]" />
                {demo.hours.title}
              </h2>
              <dl className="mt-5 divide-y divide-mock-line rounded-xl border border-mock-line bg-mock-bg">
                {demo.hours.rows.map(([day, time]) => (
                  <div key={day} className="flex justify-between gap-4 px-4 py-3 text-sm">
                    <dt className="font-medium">{day}</dt>
                    <dd className="text-mock-muted">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h2 className="flex items-center gap-2 font-display text-2xl font-bold">
                <MapPin aria-hidden="true" className="h-5 w-5 text-[var(--mock-accent)]" />
                {demo.location.title}
              </h2>
              <p className="mt-2 text-mock-muted">{demo.location.text}</p>
              <div className="mt-4 flex aspect-[16/9] items-center justify-center rounded-xl border border-dashed border-mock-line bg-mock-bg text-sm text-mock-muted">
                {demo.location.map}
              </div>
            </div>
          </div>
        </section>

        <section id="reservar" className="mx-auto max-w-2xl scroll-mt-20 px-4 py-14 sm:px-6">
          <DemoBooking booking={demo.booking} />
        </section>
      </main>

      <footer className="border-t border-mock-line py-8 pb-24 text-center text-sm text-mock-muted">
        {demo.brand} · {demoBar.badge} {site.name}
      </footer>

      {/* Botón de WhatsApp de la web de ejemplo: lleva a WASD. */}
      <a
        href={ctaUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={demoBar.whatsappLabel}
        data-track="whatsapp_click"
        data-track-label={`demo_${demo.slug}`}
        className="fixed bottom-4 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--mock-accent)] text-mock-on shadow-soft sm:bottom-6 sm:right-6"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}

/** Espacio para una foto real del negocio (en la demo, un recuadro rotulado). */
function PhotoSlot({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border border-mock-line bg-mock-bg text-center text-xs text-mock-muted ${className ?? ""}`}
    >
      <ImageIcon aria-hidden="true" className="h-6 w-6 text-[var(--mock-accent)] opacity-70" strokeWidth={1.5} />
      {label}
    </div>
  );
}
