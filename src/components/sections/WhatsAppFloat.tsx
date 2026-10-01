import { whatsappUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

/** Botón flotante discreto. El footer deja espacio abajo para que no tape contenido. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl({ type: "general" })}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      data-track="whatsapp_click"
      data-track-label="flotante"
      className="fixed bottom-4 right-4 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-colors duration-200 hover:bg-primary-hover sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
