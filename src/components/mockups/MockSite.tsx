import { CalendarCheck, MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import type { MockSiteContent, SectorTheme } from "@/data/sectors";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const themeVars: Record<SectorTheme, CSSProperties> = {
  cafe: { "--mock-accent": "var(--mock-cafe)", "--mock-soft": "var(--mock-cafe-soft)" } as CSSProperties,
  salon: { "--mock-accent": "var(--mock-salon)", "--mock-soft": "var(--mock-salon-soft)" } as CSSProperties,
  dental: { "--mock-accent": "var(--mock-dental)", "--mock-soft": "var(--mock-dental-soft)" } as CSSProperties,
  other: { "--mock-accent": "var(--mock-other)", "--mock-soft": "var(--mock-other-soft)" } as CSSProperties,
};

type MockSiteProps = {
  theme: SectorTheme;
  content: MockSiteContent;
  /** "compact" para celular; "wide" para laptop/navegador (dos columnas). */
  layout?: "compact" | "wide";
  className?: string;
};

/** Mini web de ejemplo dibujada con HTML/CSS. Es decorativa (aria-hidden). */
export function MockSite({ theme, content, layout = "compact", className }: MockSiteProps) {
  const wide = layout === "wide";
  return (
    <div
      aria-hidden="true"
      style={themeVars[theme]}
      className={cn("relative h-full w-full overflow-hidden bg-mock-bg text-mock-text", className)}
    >
      {/* Barra de navegación */}
      <div className="flex items-center justify-between border-b border-mock-line px-3.5 py-2.5">
        <span className="flex items-center gap-1.5 text-[11px] font-bold">
          <span className="h-3.5 w-3.5 rounded-[4px] bg-[var(--mock-accent)]" />
          {content.brand}
        </span>
        <span className="flex gap-2.5 text-[9px] text-mock-muted">
          {wide && <span>Inicio</span>}
          <span>{content.listTitle}</span>
          <span>Contacto</span>
        </span>
      </div>

      <div className={cn(wide && "grid grid-cols-[1.15fr_1fr] gap-3 p-3")}>
        {/* Portada */}
        <div className={cn("bg-[var(--mock-soft)] px-3.5 py-4", wide ? "rounded-lg py-5" : "")}>
          <p className={cn("font-display font-bold leading-tight", wide ? "text-[15px]" : "text-[14px]")}>
            {content.headline}
          </p>
          <p className="mt-1.5 text-[9.5px] text-mock-muted">{content.subline}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center gap-1 rounded-md bg-[var(--mock-accent)] px-2.5 py-1.5 text-[9.5px] font-semibold text-mock-on">
              <CalendarCheck className="h-3 w-3" />
              {content.primaryAction}
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-mock-line bg-mock-bg px-2.5 py-1.5 text-[9.5px] font-semibold">
              <MapPin className="h-3 w-3" />
              Cómo llegar
            </span>
          </div>
        </div>

        {/* Lista: carta / servicios / tratamientos */}
        <div className={cn(wide ? "py-1" : "px-3.5 py-3.5")}>
          <p className="text-[10px] font-bold uppercase tracking-wide text-mock-muted">{content.listTitle}</p>
          <ul className="mt-2 space-y-1.5">
            {content.list.map((item) => (
              <li
                key={item.name}
                className="flex items-center justify-between rounded-md border border-mock-line px-2.5 py-2 text-[10px]"
              >
                <span className="font-medium">{item.name}</span>
                <span className="font-semibold text-mock-muted">{item.detail}</span>
              </li>
            ))}
          </ul>
          {!wide && (
            <div className="mt-3 grid grid-cols-3 gap-1.5">
              <span className="aspect-square rounded-md bg-[var(--mock-soft)]" />
              <span className="aspect-square rounded-md bg-[var(--mock-soft)]" />
              <span className="aspect-square rounded-md bg-[var(--mock-soft)]" />
            </div>
          )}
        </div>
      </div>

      {wide && (
        <div className="grid grid-cols-4 gap-2 px-3 pb-3">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="aspect-[4/3] rounded-md bg-[var(--mock-soft)]" />
          ))}
        </div>
      )}

      {/* Botón de WhatsApp de la web de ejemplo */}
      <span className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[var(--mock-accent)] text-mock-on shadow-sm">
        <WhatsAppIcon className="h-4 w-4" />
      </span>
    </div>
  );
}
