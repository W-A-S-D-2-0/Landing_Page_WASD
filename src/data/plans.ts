/**
 * Planes y precios (precios de lanzamiento: cambian seguido).
 * Este es el ÚNICO lugar donde se definen los precios de la landing.
 * Montos en soles, sin IGV.
 */

export type BillingMode = "mensual" | "unico";

export type PlanPrice = {
  /** Monto principal. null = "a cotizar". */
  amount: number | null;
  /** Prefijo opcional, ej.: "Desde". */
  prefix?: string;
  /** Texto junto al monto, ej.: "/mes" o "pago único". */
  period?: string;
  /** Línea secundaria bajo el precio. */
  note: string;
};

export type Plan = {
  id: string;
  level: string;
  name: string;
  /** Teclas / líneas de servicio incluidas. */
  keys: Array<"W" | "A" | "S" | "D">;
  summary: string;
  features: string[];
  /** Si incluye "Todo lo anterior", se muestra como primera línea. */
  includesPrevious?: boolean;
  highlighted?: boolean;
  /** Precio por modo de pago. Si falta "unico", se usa "mensual" en ambos. */
  prices: { mensual: PlanPrice; unico?: PlanPrice };
  cta: string;
};

export const billingOptions: Array<{ value: BillingMode; label: string }> = [
  { value: "mensual", label: "Mensual" },
  { value: "unico", label: "Pago único" },
];

export const defaultBilling: BillingMode = "mensual";

export const plans: Plan[] = [
  {
    id: "nivel-1",
    level: "Nivel 1",
    name: "Presencia",
    keys: ["W"],
    summary: "Tu negocio en internet, bien hecho y fácil de encontrar.",
    features: [
      "Landing diseñada para tu sector",
      "Botón directo a WhatsApp",
      "Ubicación con Google Maps",
      "Dominio y hosting por 1 año",
      "Reporte semanal de resultados",
    ],
    prices: {
      mensual: {
        amount: 99,
        period: "/mes",
        note: "S/ 0 inicial · durante 12 meses",
      },
      unico: {
        amount: 590,
        period: "pago único",
        note: "Dominio y hosting del primer año incluidos",
      },
    },
    cta: "Elegir este plan",
  },
  {
    id: "nivel-2",
    level: "Nivel 2",
    name: "Recepcionista IA",
    keys: ["W", "A"],
    summary: "Tu WhatsApp responde solo, incluso cuando estás atendiendo.",
    includesPrevious: true,
    features: [
      "Agente de WhatsApp con IA: horarios, precios y carta",
      "Te deriva las consultas que necesitan a una persona",
      "Pedido automático de reseñas en Google",
    ],
    highlighted: true,
    prices: {
      mensual: {
        amount: 249,
        period: "/mes",
        note: "+ S/ 990 de instalación",
      },
    },
    cta: "Elegir este plan",
  },
  {
    id: "nivel-3",
    level: "Nivel 3",
    name: "Reservas y pedidos",
    keys: ["W", "A", "S"],
    summary: "Reservas, pedidos y adelantos ordenados en un solo lugar.",
    includesPrevious: true,
    features: [
      "Reservas o pedidos desde la web",
      "Recordatorios automáticos por WhatsApp",
      "Adelantos con Yape o Plin",
      "Tarjeta de fidelización digital",
    ],
    prices: {
      mensual: {
        amount: 349,
        period: "/mes",
        note: "+ S/ 1,800 de instalación",
      },
    },
    cta: "Elegir este plan",
  },
  {
    id: "a-medida",
    level: "A medida",
    name: "Desarrollo",
    keys: ["D"],
    summary: "Cuando tu negocio necesita algo hecho especialmente para él.",
    features: [
      "Aplicaciones web",
      "Apps móviles",
      "Automatizaciones internas",
    ],
    prices: {
      mensual: {
        amount: 3500,
        prefix: "Desde",
        note: "Cotización según tu proyecto",
      },
    },
    cta: "Pedir cotización",
  },
];

export const pricingNote = "Precios en soles, no incluyen IGV.";

/** Formatea un monto como "S/ 1,800". */
export function formatSoles(amount: number): string {
  return `S/ ${amount.toLocaleString("en-US")}`;
}

/** Precio a mostrar según el modo elegido (con respaldo a "mensual"). */
export function priceFor(plan: Plan, mode: BillingMode): PlanPrice {
  return plan.prices[mode] ?? plan.prices.mensual;
}

/** true si el plan cambia de precio con el interruptor. */
export function hasBillingOptions(plan: Plan): boolean {
  return Boolean(plan.prices.unico);
}
