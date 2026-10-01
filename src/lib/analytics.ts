/**
 * Medición: Google Analytics 4 y Meta Pixel.
 * Los scripts solo se cargan si existen las variables de entorno
 * NEXT_PUBLIC_GA_ID y NEXT_PUBLIC_META_PIXEL_ID (ver components/Analytics.tsx).
 */

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export type AnalyticsEvent =
  | "whatsapp_click"
  | "demo_cta_click"
  | "lead_submit"
  | "plan_click";

type Params = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

/** Equivalencias con eventos estándar de Meta. */
const metaStandardEvents: Partial<Record<AnalyticsEvent, string>> = {
  whatsapp_click: "Contact",
  lead_submit: "Lead",
};

export function track(event: AnalyticsEvent, params: Params = {}): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", event, params);

  const standard = metaStandardEvents[event];
  if (standard) {
    window.fbq?.("track", standard, params);
  } else {
    window.fbq?.("trackCustom", event, params);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, params);
  }
}
