import { BookOpenText } from "lucide-react";
import Link from "next/link";
import { footer } from "@/data/content";
import { safeHref, site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";

const linkClass = "text-ink-muted transition-colors hover:text-ink";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-surface pb-28 pt-14 sm:pb-14">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[34ch] text-[0.9375rem] text-ink-muted">{footer.phrase}</p>
          </div>

          <nav aria-label="Pie de página">
            <h2 className="font-sans text-sm font-semibold text-ink">Navegación</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={linkClass}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-sm font-semibold text-ink">Contacto</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href={whatsappUrl({ type: "general" })}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-track="whatsapp_click"
                  data-track-label="footer"
                  className={linkClass}
                >
                  WhatsApp: {site.contact.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.contact.email}`} className={linkClass}>
                  {site.contact.email}
                </a>
              </li>
              <li className="text-ink-muted">{site.contact.city}</li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-[0.9375rem]">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={safeHref(s.href)} target="_blank" rel="noopener noreferrer" className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-sm font-semibold text-ink">Legal</h2>
            <ul className="mt-4 space-y-2.5 text-[0.9375rem]">
              <li>
                <a
                  href={safeHref(site.legal.complaintsBookUrl)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-ink hover:text-primary"
                >
                  <BookOpenText aria-hidden="true" className="h-4 w-4" />
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <Link href="/privacidad/" className={linkClass}>
                  Política de privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos/" className={linkClass}>
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/garantia/" className={linkClass}>
                  Condiciones de la garantía
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-sm text-ink-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {site.legal.businessName} · RUC {site.legal.ruc}
          </p>
          <p>Precios en soles, no incluyen IGV.</p>
        </div>
      </Container>
    </footer>
  );
}
