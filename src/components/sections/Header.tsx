"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/cn";
import { whatsappUrl } from "@/lib/whatsapp";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const contactUrl = whatsappUrl({ type: "general" });

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b bg-bg transition-colors duration-200",
        scrolled || open ? "border-line" : "border-transparent",
      )}
    >
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-[10px] focus:bg-surface focus:px-4 focus:py-2 focus:text-ink"
      >
        Saltar al contenido
      </a>
      <Container className="flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label="WASD, ir al inicio" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-[10px] px-3 py-2 text-[0.9375rem] font-medium text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <span className="hidden sm:block">
            <ButtonLink href={contactUrl} size="md" track={{ event: "whatsapp_click", label: "header" }}>
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Habla con nosotros
            </ButtonLink>
          </span>
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-ink transition-colors hover:bg-surface-alt lg:hidden"
          >
            {open ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      <div id="menu-movil" hidden={!open} className="border-t border-line bg-bg lg:hidden">
        <Container className="py-4">
          <nav aria-label="Menú móvil">
            <ul className="flex flex-col">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center rounded-[10px] px-2 text-lg font-medium text-ink hover:bg-surface-alt"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink
            href={contactUrl}
            size="lg"
            className="mt-4 w-full"
            track={{ event: "whatsapp_click", label: "menu_movil" }}
          >
            <WhatsAppIcon />
            Habla con nosotros
          </ButtonLink>
        </Container>
      </div>
    </header>
  );
}
