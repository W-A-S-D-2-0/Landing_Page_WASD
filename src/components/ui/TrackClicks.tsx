"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/**
 * Escucha clics en cualquier elemento con data-track="evento" y
 * data-track-label="etiqueta", y los envía a GA4 / Meta Pixel.
 * Así las secciones pueden seguir siendo componentes de servidor.
 */
export function TrackClicks() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!target) return;
      track(target.dataset.track as AnalyticsEvent, {
        label: target.dataset.trackLabel,
      });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
