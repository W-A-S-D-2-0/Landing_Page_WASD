"use client";

import { BarChart3, CalendarCheck, ChevronLeft, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { hero } from "@/data/content";
import { mockFor } from "@/data/sectors";
import { cn } from "@/lib/cn";
import { PhoneFrame } from "@/components/mockups/Devices";
import { MockSite } from "@/components/mockups/MockSite";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const { chat } = hero;

type Frame = {
  /** Se ve el chat encima de la web. */
  sheet: boolean;
  /** Cuántos mensajes se ven. */
  shown: number;
  /** "Escribiendo…" de la recepcionista. */
  typing: boolean;
  confirmed: boolean;
};

const START: Frame = { sheet: false, shown: 0, typing: false, confirmed: false };
const END: Frame = { sheet: true, shown: chat.messages.length, typing: false, confirmed: true };

/** Guion de la animación: [ms desde el inicio, estado]. */
function buildScript(): Array<[number, Frame]> {
  const script: Array<[number, Frame]> = [];
  let t = 2200; // primero se ve la web; luego se abre el chat
  script.push([t, { ...START, sheet: true }]);
  t += 700;
  chat.messages.forEach((message, index) => {
    if (message.from === "agent") {
      script.push([t, { ...START, sheet: true, shown: index, typing: true }]);
      t += 1300;
    }
    script.push([t, { ...START, sheet: true, shown: index + 1 }]);
    t += message.from === "agent" ? 1500 : 1100;
  });
  script.push([t, END]);
  return script;
}

const accent = { "--mock-accent": "var(--mock-cafe)", "--mock-soft": "var(--mock-cafe-soft)" } as CSSProperties;

/**
 * Celular del hero: la web de una cafetería y, encima, una conversación de
 * WhatsApp que se anima sola (ejemplo ilustrativo). El texto del hero no se
 * anima; esto arranca después de la carga para no afectar el LCP.
 * Con prefers-reduced-motion se muestra directamente el estado final.
 */
export function HeroDemo() {
  const [frame, setFrame] = useState<Frame>(START);
  const [run, setRun] = useState(0);
  const [done, setDone] = useState(false);
  const timers = useRef<number[]>([]);

  const play = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current.length = 0;
    setDone(false);
    setFrame(START);
    setRun((r) => r + 1);
    for (const [at, next] of buildScript()) {
      timers.current.push(
        window.setTimeout(() => {
          setFrame(next);
          if (next === END) setDone(true);
        }, at),
      );
    }
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    if (reduced) {
      frameId = requestAnimationFrame(() => setFrame(END));
    } else {
      frameId = requestAnimationFrame(play);
    }
    const pending = timers.current;
    return () => {
      cancelAnimationFrame(frameId);
      pending.forEach(clearTimeout);
    };
  }, [play]);

  return (
    <div className="relative mx-auto">
      <div className="absolute inset-x-[-12%] inset-y-[8%] -z-10 rounded-[2rem] bg-surface-alt" aria-hidden="true" />

      <PhoneFrame label={hero.mockupLabel}>
        <div className="relative h-full" style={accent} aria-hidden="true">
          <MockSite theme="cafe" content={mockFor("cafe")} />

          {/* Aviso visual de que el cliente toca el botón de WhatsApp de la web. */}
          {!frame.sheet && run > 0 && (
            <span key={run} className="anim-ring absolute bottom-3 right-3 h-8 w-8 rounded-full [animation-delay:1100ms]" />
          )}

          {frame.sheet && <ChatSheet frame={frame} />}
        </div>
      </PhoneFrame>

      {/* Tarjeta del reporte semanal (sin cifras inventadas). */}
      <div
        aria-hidden="true"
        className="absolute -left-10 top-20 hidden w-48 rounded-card border border-line bg-surface p-3.5 shadow-soft sm:block lg:-left-16"
      >
        <p className="flex items-center gap-1.5 text-xs font-semibold text-ink">
          <BarChart3 className="h-3.5 w-3.5 text-primary" />
          {chat.reportTitle}
        </p>
        <div className="mt-2.5 space-y-2">
          {chat.reportRows.map((label, index) => (
            <div key={label}>
              <p className="text-[10.5px] text-ink-muted">{label}</p>
              <div className="mt-1 h-1.5 rounded-full bg-surface-alt">
                {frame.confirmed && (
                  <div
                    key={run}
                    className={cn("anim-grow h-1.5 rounded-full bg-primary", ["w-4/5", "w-3/5", "w-2/5"][index])}
                    style={{ "--grow-delay": `${index * 180}ms` } as CSSProperties}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-2.5 text-[10px] text-ink-muted">{chat.reportNote}</p>
      </div>

      {done && (
        <button
          type="button"
          onClick={play}
          className="anim-fade-up absolute -bottom-12 left-1/2 inline-flex min-h-11 -translate-x-1/2 items-center gap-1.5 rounded-full px-3 text-sm font-medium text-ink-muted transition-colors hover:text-primary"
        >
          <RotateCcw aria-hidden="true" className="h-3.5 w-3.5" />
          {chat.replay}
          <span className="sr-only"> la conversación de ejemplo</span>
        </button>
      )}
    </div>
  );
}

function ChatSheet({ frame }: { frame: Frame }) {
  return (
    <div className="anim-sheet-up absolute inset-0 flex flex-col bg-mock-chat text-mock-text">
      <div className="flex items-center gap-2 bg-[var(--mock-accent)] px-2.5 py-2 text-mock-on">
        <ChevronLeft className="h-3.5 w-3.5 opacity-80" />
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-mock-on/20">
          <WhatsAppIcon className="h-3.5 w-3.5" />
        </span>
        <span className="leading-tight">
          <span className="block text-[11px] font-bold">{chat.agentName}</span>
          <span className="block text-[9px] opacity-85">{chat.agentStatus}</span>
        </span>
      </div>

      <div className="flex flex-1 flex-col justify-end gap-1.5 px-2.5 pb-3">
        {chat.messages.slice(0, frame.shown).map((message, index) => (
          <p
            key={index}
            className={cn(
              "anim-fade-up max-w-[82%] rounded-xl px-2.5 py-1.5 text-[10.5px] leading-snug shadow-sm",
              message.from === "customer"
                ? "self-end rounded-br-sm bg-[var(--mock-soft)]"
                : "self-start rounded-bl-sm bg-mock-bg",
            )}
          >
            {message.text}
          </p>
        ))}

        {frame.typing && (
          <span className="anim-fade-up anim-typing inline-flex gap-1 self-start rounded-xl rounded-bl-sm bg-mock-bg px-3 py-2.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-mock-muted" />
            <span className="h-1.5 w-1.5 rounded-full bg-mock-muted" />
            <span className="h-1.5 w-1.5 rounded-full bg-mock-muted" />
          </span>
        )}

        {frame.confirmed && (
          <p className="anim-fade-up mt-1 flex items-center gap-1.5 self-center rounded-full border border-mock-line bg-mock-bg px-2.5 py-1 text-[9.5px] font-semibold">
            <CalendarCheck className="h-3 w-3 text-[var(--mock-accent)]" />
            {chat.confirmation}
          </p>
        )}
      </div>
    </div>
  );
}
