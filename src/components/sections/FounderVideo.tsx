"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { team } from "@/data/content";

/**
 * Video del equipo. No descarga nada hasta que el usuario toca "play"
 * (preload="none" + portada), así no afecta la velocidad de la página.
 * Si team.video.src está vacío, no se muestra.
 */
export function FounderVideo() {
  const { video } = team;
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  if (!video.src) return null;

  function play() {
    setPlaying(true);
    void ref.current?.play();
  }

  return (
    <div data-reveal className="mb-12 grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
      <div className="relative overflow-hidden rounded-card border border-line bg-surface-alt">
        <video
          ref={ref}
          src={video.src}
          poster={video.poster || undefined}
          preload="none"
          playsInline
          controls={playing}
          className="aspect-video w-full object-cover"
        />
        {!playing && (
          <button
            type="button"
            onClick={play}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-on-primary shadow-soft transition-transform duration-200 group-hover:scale-105">
              <Play aria-hidden="true" className="ml-1 h-7 w-7" fill="currentColor" />
            </span>
            <span className="sr-only">{video.playLabel}</span>
            <span className="absolute bottom-3 right-3 rounded-full bg-surface px-2.5 py-1 text-xs font-semibold text-ink">
              {video.duration}
            </span>
          </button>
        )}
      </div>
      <div>
        <h3 className="heading-2 text-2xl sm:text-3xl">{video.title}</h3>
        <p className="lead mt-3">{video.text}</p>
      </div>
    </div>
  );
}
