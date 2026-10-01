"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappBubble } from "@/data/content";
import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const SEEN_KEY = "wasd-bubble-seen";

/**
 * Botón flotante discreto. El footer deja espacio abajo para que no tape contenido.
 * Muestra un globito una sola vez por visita, después de unos segundos.
 */
export function WhatsAppFloat() {
  const [bubble, setBubble] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {
      // Sin almacenamiento disponible: se muestra igual, una vez por carga.
    }
    const timer = window.setTimeout(() => {
      setBubble(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {}
    }, whatsappBubble.delayMs);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-end gap-2 sm:bottom-6 sm:right-6">
      {bubble && (
        <div className="anim-fade-up relative mb-1 hidden max-w-[15rem] rounded-card rounded-br-sm border border-line bg-surface py-2.5 pl-3.5 pr-9 text-sm font-medium text-ink shadow-soft sm:block">
          <a
            href={whatsappUrl({ type: "general" })}
            target="_blank"
            rel="noopener noreferrer"
            data-track="whatsapp_click"
            data-track-label="globito"
            className="hover:text-primary"
          >
            {whatsappBubble.text}
          </a>
          <button
            type="button"
            onClick={() => setBubble(false)}
            aria-label={whatsappBubble.close}
            className="absolute right-0.5 top-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full text-ink-muted hover:text-ink"
          >
            <X aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      )}
      <a
        href={whatsappUrl({ type: "general" })}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Escríbenos por WhatsApp"
        data-track="whatsapp_click"
        data-track-label="flotante"
        className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-colors duration-200 hover:bg-primary-hover"
      >
        <WhatsAppIcon className="h-6 w-6" />
      </a>
    </div>
  );
}
