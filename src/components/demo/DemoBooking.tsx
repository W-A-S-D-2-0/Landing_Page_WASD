"use client";

import { CheckCircle2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import type { Demo } from "@/data/demos";

/** Formulario de reserva de la demo: no envía nada, solo explica qué pasaría en la web real. */
export function DemoBooking({ booking }: { booking: Demo["booking"] }) {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl border border-mock-line bg-mock-bg p-5 sm:p-6">
      <h2 className="font-display text-xl font-bold">{booking.title}</h2>
      <p className="mt-1 text-sm text-mock-muted">{booking.text}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {booking.fields.map((field) => (
          <label key={field} className="text-sm font-medium">
            {field}
            <input
              type="text"
              className="mt-1 block min-h-11 w-full rounded-lg border border-mock-line bg-mock-bg px-3 text-mock-text"
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--mock-accent)] px-5 font-semibold text-mock-on transition-opacity hover:opacity-90"
      >
        {booking.button}
      </button>
      {sent && (
        <p role="status" className="anim-fade-up mt-4 flex items-start gap-2 rounded-lg bg-[var(--mock-soft)] p-3 text-sm">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--mock-accent)]" />
          {booking.success}
        </p>
      )}
    </form>
  );
}
