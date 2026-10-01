"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { leadForm } from "@/data/content";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { emptyLead, submitLead, validateLead, type Lead, type LeadErrors } from "@/lib/lead";
import { Button, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

const fieldOrder: Array<keyof Lead> = ["name", "business", "businessType", "whatsapp", "link", "privacy"];

const inputClasses =
  "block min-h-12 w-full rounded-[10px] border border-line-strong bg-surface px-4 py-2.5 text-base text-ink placeholder:text-ink-muted/80 transition-colors hover:border-ink-muted focus:border-primary focus:outline-2 focus:outline-offset-0 focus:outline-primary aria-[invalid=true]:border-danger";

type FieldProps = {
  id: keyof Lead;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: (describedBy: string | undefined) => ReactNode;
};

function Field({ id, label, error, hint, optional, children }: FieldProps) {
  const hintId = hint ? `lead-${id}-hint` : undefined;
  const errorId = error ? `lead-${id}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(" ") || undefined;
  return (
    <div>
      <label htmlFor={`lead-${id}`} className="block text-[0.9375rem] font-medium text-ink">
        {label}
        {optional && <span className="font-normal text-ink-muted"> (opcional)</span>}
      </label>
      {hint && (
        <p id={hintId} className="mt-1 text-sm text-ink-muted">
          {hint}
        </p>
      )}
      <div className="mt-2">{children(describedBy)}</div>
      {error && (
        <p id={errorId} className="mt-1.5 text-sm font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

export function LeadForm() {
  const [lead, setLead] = useState<Lead>(emptyLead);
  const [errors, setErrors] = useState<LeadErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [resultUrl, setResultUrl] = useState("");
  const [submitError, setSubmitError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const submitted = useRef(false);

  function update(field: keyof Lead) {
    return (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const target = event.target;
      const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
      const next = { ...lead, [field]: value } as Lead;
      setLead(next);
      // Tras el primer intento, la validación se actualiza mientras escribes.
      if (submitted.current) setErrors(validateLead(next));
    };
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    submitted.current = true;
    const found = validateLead(lead);
    setErrors(found);

    const firstInvalid = fieldOrder.find((field) => found[field]);
    if (firstInvalid) {
      formRef.current?.querySelector<HTMLElement>(`#lead-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("sending");
    setSubmitError("");
    const result = await submitLead(lead);
    if (!result.ok) {
      setStatus("error");
      setSubmitError(result.error);
      return;
    }

    track("lead_submit", { business_type: lead.businessType });
    setResultUrl(result.whatsappUrl);
    setStatus("success");
    window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
    requestAnimationFrame(() => successRef.current?.focus());
  }

  const errorCount = Object.keys(errors).length;

  return (
    <section id="diagnostico" aria-labelledby="diagnostico-titulo" className="bg-surface-alt py-16 sm:py-20 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div data-reveal>
          <h2 id="diagnostico-titulo" className="heading-2 max-w-[20ch]">
            {leadForm.title}
          </h2>
          <p className="lead mt-4">{leadForm.intro}</p>
          <ul className="mt-8 space-y-3 text-ink">
            {["Sin costo y sin compromiso", "Te respondemos por WhatsApp", "Recibes tu demo personalizada"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 aria-hidden="true" className="h-5 w-5 text-success" strokeWidth={1.75} />
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        <div data-reveal className="rounded-card border border-line bg-surface p-6 sm:p-8">
          {status === "success" ? (
            <div ref={successRef} tabIndex={-1} role="status" className="py-6 text-center">
              <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-success" strokeWidth={1.5} />
              <h3 className="heading-3 mt-4 text-xl">{leadForm.success.title}</h3>
              <p className="mx-auto mt-2 max-w-[40ch] text-ink-muted">{leadForm.success.text}</p>
              <ButtonLink
                href={resultUrl}
                className="mt-6"
                track={{ event: "whatsapp_click", label: "formulario_respaldo" }}
              >
                <WhatsAppIcon />
                {leadForm.success.fallback}
              </ButtonLink>
            </div>
          ) : (
            <form ref={formRef} noValidate onSubmit={onSubmit} className="space-y-5">
              <p aria-live="polite" className={cn("text-sm font-medium text-danger", !errorCount && "sr-only")}>
                {errorCount > 0 &&
                  (errorCount === 1 ? "Revisa 1 campo del formulario." : `Revisa ${errorCount} campos del formulario.`)}
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Tu nombre" error={errors.name}>
                  {(describedBy) => (
                    <input
                      id="lead-name"
                      name="name"
                      autoComplete="given-name"
                      value={lead.name}
                      onChange={update("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={describedBy}
                      className={inputClasses}
                    />
                  )}
                </Field>
                <Field id="business" label="Nombre de tu negocio" error={errors.business}>
                  {(describedBy) => (
                    <input
                      id="lead-business"
                      name="business"
                      autoComplete="organization"
                      value={lead.business}
                      onChange={update("business")}
                      aria-invalid={Boolean(errors.business)}
                      aria-describedby={describedBy}
                      className={inputClasses}
                    />
                  )}
                </Field>
              </div>

              <Field id="businessType" label="Rubro" error={errors.businessType}>
                {(describedBy) => (
                  <select
                    id="lead-businessType"
                    name="businessType"
                    value={lead.businessType}
                    onChange={update("businessType")}
                    aria-invalid={Boolean(errors.businessType)}
                    aria-describedby={describedBy}
                    className={cn(inputClasses, "appearance-auto")}
                  >
                    <option value="">Elige una opción</option>
                    {leadForm.businessTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                )}
              </Field>

              <Field id="whatsapp" label="Tu WhatsApp" hint="Ejemplo: 987 654 321" error={errors.whatsapp}>
                {(describedBy) => (
                  <input
                    id="lead-whatsapp"
                    name="whatsapp"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={lead.whatsapp}
                    onChange={update("whatsapp")}
                    aria-invalid={Boolean(errors.whatsapp)}
                    aria-describedby={describedBy}
                    className={inputClasses}
                  />
                )}
              </Field>

              <Field
                id="link"
                label="Link de tu Instagram o Google Maps"
                optional
                hint="Nos ayuda a preparar mejor tu diagnóstico."
                error={errors.link}
              >
                {(describedBy) => (
                  <input
                    id="lead-link"
                    name="link"
                    type="url"
                    inputMode="url"
                    placeholder="instagram.com/tunegocio"
                    value={lead.link}
                    onChange={update("link")}
                    aria-invalid={Boolean(errors.link)}
                    aria-describedby={describedBy}
                    className={inputClasses}
                  />
                )}
              </Field>

              <div>
                <div className="flex items-start gap-3">
                  <input
                    id="lead-privacy"
                    name="privacy"
                    type="checkbox"
                    checked={lead.privacy}
                    onChange={update("privacy")}
                    aria-invalid={Boolean(errors.privacy)}
                    aria-describedby={errors.privacy ? "lead-privacy-error" : "lead-privacy-hint"}
                    className="mt-1 h-5 w-5 shrink-0 accent-[var(--primary)]"
                  />
                  <label htmlFor="lead-privacy" className="text-[0.9375rem] text-ink">
                    Acepto la{" "}
                    <Link href="/privacidad/" className="font-medium text-primary underline underline-offset-2">
                      política de privacidad
                    </Link>
                    .
                  </label>
                </div>
                <p id="lead-privacy-hint" className="mt-1.5 pl-8 text-sm text-ink-muted">
                  {leadForm.privacyNote}
                </p>
                {errors.privacy && (
                  <p id="lead-privacy-error" className="mt-1.5 pl-8 text-sm font-medium text-danger">
                    {errors.privacy}
                  </p>
                )}
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm font-medium text-danger">
                  {submitError}
                </p>
              )}

              <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
                {status === "sending" ? "Enviando…" : leadForm.submit}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
