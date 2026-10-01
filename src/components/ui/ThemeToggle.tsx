"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";

export const THEME_STORAGE_KEY = "wasd-theme";

type Theme = "light" | "dark";

const darkQuery = "(prefers-color-scheme: dark)";

function currentTheme(): Theme {
  const attr = document.documentElement.dataset.theme;
  if (attr === "light" || attr === "dark") return attr;
  return window.matchMedia(darkQuery).matches ? "dark" : "light";
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia(darkQuery);
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  media.addEventListener("change", onChange);
  return () => {
    observer.disconnect();
    media.removeEventListener("change", onChange);
  };
}

/** Interruptor claro/oscuro. Recuerda la elección en localStorage. */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme | null>(subscribe, currentTheme, () => null);
  const next: Theme = theme === "dark" ? "light" : "dark";

  function toggle() {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Sin almacenamiento (modo privado): el tema aplica solo a esta visita.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={next === "dark" ? "Activar tema oscuro" : "Activar tema claro"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-ink-muted transition-colors hover:bg-surface-alt hover:text-ink"
    >
      {/* Antes de hidratar no se conoce el tema: se reserva el espacio del ícono. */}
      {theme === null ? (
        <span aria-hidden="true" className="h-5 w-5" />
      ) : theme === "dark" ? (
        <Sun aria-hidden="true" className="h-5 w-5" />
      ) : (
        <Moon aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}

/**
 * Script que corre antes de pintar la página: aplica el tema guardado
 * (evita parpadeo) y marca <html class="js"> para las animaciones.
 */
export const themeInitScript = `(function(){try{var d=document.documentElement;d.classList.add('js');var t=localStorage.getItem('${THEME_STORAGE_KEY}');if(t==='light'||t==='dark'){d.dataset.theme=t;}}catch(e){}})();`;
