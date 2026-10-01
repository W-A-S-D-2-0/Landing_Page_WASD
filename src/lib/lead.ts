import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Formulario de diagnóstico: tipos, validación y envío.
 */

export type Lead = {
  name: string;
  business: string;
  businessType: string;
  whatsapp: string;
  link: string;
  privacy: boolean;
};

export type LeadErrors = Partial<Record<keyof Lead, string>>;

export const emptyLead: Lead = {
  name: "",
  business: "",
  businessType: "",
  whatsapp: "",
  link: "",
  privacy: false,
};

/** Normaliza un celular peruano a 9 dígitos (acepta +51, espacios y guiones). */
export function normalizePeruPhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  return digits.length === 11 && digits.startsWith("51") ? digits.slice(2) : digits;
}

export function validateLead(lead: Lead): LeadErrors {
  const errors: LeadErrors = {};

  if (lead.name.trim().length < 2) {
    errors.name = "Escribe tu nombre.";
  }
  if (lead.business.trim().length < 2) {
    errors.business = "Escribe el nombre de tu negocio.";
  }
  if (!lead.businessType) {
    errors.businessType = "Elige el rubro de tu negocio.";
  }

  const phone = normalizePeruPhone(lead.whatsapp);
  if (!phone) {
    errors.whatsapp = "Escribe tu número de WhatsApp.";
  } else if (!/^9\d{8}$/.test(phone)) {
    errors.whatsapp = "Revisa tu número: debe tener 9 dígitos y empezar con 9.";
  }

  const link = lead.link.trim();
  if (link && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+(\/\S*)?$/i.test(link)) {
    errors.link = "Revisa el link. Ejemplo: instagram.com/tunegocio";
  }

  if (!lead.privacy) {
    errors.privacy = "Necesitamos que aceptes la política de privacidad.";
  }

  return errors;
}

function leadMessage(lead: Lead): string {
  const lines = [
    "Hola WASD, quiero mi diagnóstico y demo gratis.",
    "",
    `• Nombre: ${lead.name.trim()}`,
    `• Negocio: ${lead.business.trim()}`,
    `• Rubro: ${lead.businessType}`,
    `• WhatsApp: ${normalizePeruPhone(lead.whatsapp)}`,
  ];
  if (lead.link.trim()) lines.push(`• Instagram / Google Maps: ${lead.link.trim()}`);
  return lines.join("\n");
}

export type SubmitLeadResult = { ok: true; whatsappUrl: string } | { ok: false; error: string };

/**
 * Envía el lead. Punto ÚNICO para conectar un backend más adelante
 * (API propia, Formspree, Google Sheets, CRM, etc.).
 *
 * Hoy: no envía nada a un servidor; arma el link de WhatsApp con un mensaje
 * pre-armado y el formulario lo abre.
 *
 * Para conectar un backend, reemplaza el cuerpo por algo como:
 *   const res = await fetch("/api/leads", { method: "POST", body: JSON.stringify(lead) });
 *   if (!res.ok) return { ok: false, error: "No pudimos enviar tus datos." };
 * y conserva el retorno de whatsappUrl si quieres seguir abriendo WhatsApp.
 */
export async function submitLead(lead: Lead): Promise<SubmitLeadResult> {
  return {
    ok: true,
    whatsappUrl: whatsappUrl({ type: "lead", message: leadMessage(lead) }),
  };
}
