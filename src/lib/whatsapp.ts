import { site } from "@/data/site";

/**
 * Único helper para armar links de WhatsApp (https://wa.me/NUMERO?text=...).
 * Cada intención tiene su propio mensaje pre-escrito.
 */

export type WhatsAppIntent =
  | { type: "general" }
  | { type: "demo" }
  | { type: "plan"; planName: string }
  | { type: "demoPage"; demoName: string }
  | { type: "lead"; message: string };

const messages = {
  general: "Hola WASD, quiero información sobre una web para mi negocio.",
  demo: "Hola WASD, quiero mi demo gratis. Les cuento de mi negocio:",
  plan: (planName: string) =>
    `Hola WASD, me interesa el plan ${planName}. ¿Me cuentan cómo empezamos?`,
  demoPage: (demoName: string) =>
    `Hola WASD, vi la demo de ${demoName} y quiero una web así para mi negocio.`,
} as const;

export function whatsappMessage(intent: WhatsAppIntent): string {
  switch (intent.type) {
    case "general":
      return messages.general;
    case "demo":
      return messages.demo;
    case "plan":
      return messages.plan(intent.planName);
    case "demoPage":
      return messages.demoPage(intent.demoName);
    case "lead":
      return intent.message;
  }
}

export function whatsappUrl(intent: WhatsAppIntent = { type: "general" }): string {
  const number = site.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(whatsappMessage(intent));
  return `https://wa.me/${number}?text=${text}`;
}
