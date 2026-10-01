/**
 * Textos de las secciones de la landing. Edita aquí sin tocar componentes.
 * Regla: no inventar clientes, testimonios, reseñas ni cifras de resultados.
 */
import {
  BarChart3,
  CalendarX2,
  MessagesSquare,
  SearchX,
  type LucideIcon,
} from "lucide-react";

export const hero = {
  title: "Tu negocio atendiendo y vendiendo las 24 horas",
  subtitle:
    "Webs, WhatsApp con IA y reservas para PYMEs en Lima, listos en 48 horas.",
  primaryCta: "Quiero mi demo gratis",
  secondaryCta: "Ver precios",
  guarantees: [
    "Demo gratis antes de pagar",
    "Publicada en 48 h",
    "Reporte semanal de resultados",
  ],
  mockupLabel:
    "Ejemplo de una landing para cafetería vista en un celular, con carta, botón de reservas y WhatsApp",
};

export const problem: {
  title: string;
  intro: string;
  items: Array<{ icon: LucideIcon; title: string; text: string }>;
} = {
  title: "¿Te pasa esto?",
  intro: "Si vendes por Instagram y WhatsApp, seguro reconoces alguno.",
  items: [
    {
      icon: MessagesSquare,
      title: "Respondes lo mismo todo el día",
      text: "Horarios, precios, ubicación… las mismas preguntas por WhatsApp, una y otra vez.",
    },
    {
      icon: SearchX,
      title: "No apareces en Google",
      text: "Te buscan cerca y encuentran a tu competencia, no a ti.",
    },
    {
      icon: BarChart3,
      title: "Pagaste una web y no sabes si sirvió",
      text: "Te la entregaron y nunca más supiste cuántos clientes te trajo.",
    },
    {
      icon: CalendarX2,
      title: "Reservas que no llegan",
      text: "Te separan la mesa o la cita y no se presentan ni avisan.",
    },
  ],
};

export type Service = {
  key: "W" | "A" | "S" | "D";
  name: string;
  description: string;
  benefits: string[];
};

export const services: {
  title: string;
  intro: string;
  items: Service[];
  closing: string;
} = {
  title: "Todo lo que necesitas, con un solo equipo",
  intro:
    "WASD son las teclas para moverse en un videojuego. Cada una es una forma de mover tu negocio.",
  items: [
    {
      key: "W",
      name: "Web",
      description: "Landing pages pensadas para tu sector y para el celular.",
      benefits: [
        "Publicada en 48 horas",
        "Lista para aparecer en Google",
        "Botón directo a tu WhatsApp",
      ],
    },
    {
      key: "A",
      name: "Automatización con IA",
      description: "Una recepcionista con IA que responde tu WhatsApp.",
      benefits: [
        "Responde horarios, precios y carta",
        "Te pasa las consultas importantes",
        "Pide reseñas a tus clientes",
      ],
    },
    {
      key: "S",
      name: "Sistemas",
      description: "Reservas, pedidos y pagos que se ordenan solos.",
      benefits: [
        "Reservas y pedidos en línea",
        "Adelantos con Yape o Plin",
        "Tarjeta de fidelización",
      ],
    },
    {
      key: "D",
      name: "Desarrollo a medida",
      description: "Aplicaciones web y móviles cuando las necesites.",
      benefits: [
        "Apps web y móviles",
        "Automatizaciones internas",
        "Conexión con tus herramientas",
      ],
    },
  ],
  closing: "Empiezas con tu web y subes de nivel cuando lo necesites.",
};

export const howItWorks = {
  title: "Cómo funciona",
  intro: "Cuatro pasos, sin reuniones largas ni términos técnicos.",
  steps: [
    {
      title: "Nos cuentas de tu negocio",
      text: "Llenas un formulario corto o nos escribes. Te toma 2 minutos.",
    },
    {
      title: "Te enviamos tu demo gratis",
      text: "Diseñamos una demo personalizada de tu web, sin costo.",
    },
    {
      title: "La ajustamos y la publicamos",
      text: "Hacemos los cambios contigo y la publicamos en 48 horas.",
    },
    {
      title: "Recibes tus resultados",
      text: "Cada semana te llegan por WhatsApp tus visitas, clics y reservas.",
    },
  ],
};

export const guarantee = {
  title: "Nuestra garantía",
  text: "Si en 60 días tu web no genera el mínimo de contactos que acordamos, el siguiente mes es gratis.",
  linkLabel: "Ver condiciones",
  href: "/garantia/",
};

export type ComparisonValue = { text: string; good?: boolean };

export const comparison: {
  title: string;
  intro: string;
  columns: [string, string, string];
  rows: Array<{ label: string; values: [ComparisonValue, ComparisonValue, ComparisonValue] }>;
} = {
  title: "¿Por qué WASD?",
  intro: "Una comparación honesta de las opciones que tienes.",
  columns: ["Hacerlo tú mismo", "Agencia tradicional", "WASD"],
  rows: [
    {
      label: "Quién lo construye",
      values: [
        { text: "Tú, en tu tiempo libre" },
        { text: "Un equipo externo" },
        { text: "Nuestro equipo, contigo", good: true },
      ],
    },
    {
      label: "Tiempo de entrega",
      values: [
        { text: "Depende de tu tiempo" },
        { text: "Varias semanas" },
        { text: "48 horas", good: true },
      ],
    },
    {
      label: "IA y WhatsApp incluidos",
      values: [
        { text: "No" },
        { text: "Por separado" },
        { text: "Incluidos", good: true },
      ],
    },
    {
      label: "Medición de resultados",
      values: [
        { text: "Por tu cuenta" },
        { text: "No siempre" },
        { text: "Reporte semanal", good: true },
      ],
    },
    {
      label: "Soporte continuo",
      values: [
        { text: "No" },
        { text: "Según contrato" },
        { text: "Incluido", good: true },
      ],
    },
    {
      label: "Pago inicial",
      values: [
        { text: "Bajo, pero cuesta tu tiempo" },
        { text: "Alto" },
        { text: "Desde S/ 0", good: true },
      ],
    },
  ],
};

/**
 * Proyectos. Mientras no haya clientes reales, TODOS deben ir rotulados como
 * "Demo". No inventar nombres de clientes ni resultados.
 */
export const projects = {
  title: "Proyectos",
  intro:
    "Así se ven nuestras landings por sector. Son demos de ejemplo: pronto mostraremos proyectos de clientes reales.",
  items: [
    {
      label: "Demo · Cafetería en Barranco",
      sector: "cafe" as const,
      text: "Carta digital, reservas de mesa y botón de WhatsApp.",
    },
    {
      label: "Demo · Barbería en Miraflores",
      sector: "salon" as const,
      text: "Agenda de citas por barbero y galería de cortes.",
    },
    {
      label: "Demo · Consultorio dental en San Borja",
      sector: "dental" as const,
      text: "Tratamientos explicados en simple y reserva de primera cita.",
    },
  ],
  cta: "Quiero una demo para mi negocio",
};

export const leadForm = {
  title: "¿Cómo está tu negocio en internet? Te lo decimos gratis.",
  intro:
    "Déjanos tus datos y te enviamos por WhatsApp un diagnóstico de tu presencia digital y una demo de tu web, sin compromiso.",
  submit: "Quiero mi diagnóstico y demo gratis",
  businessTypes: [
    "Cafetería",
    "Restaurante",
    "Peluquería o barbería",
    "Consultorio dental",
    "Otro negocio",
  ],
  success: {
    title: "¡Listo! Ya casi está.",
    text: "Abrimos WhatsApp con tu mensaje listo. Solo envíalo y te respondemos pronto.",
    fallback: "¿No se abrió WhatsApp? Toca aquí",
  },
  privacyNote: "Usamos tus datos solo para contactarte sobre tu diagnóstico.",
};

export const team = {
  title: "Quiénes somos",
  text: "Somos un equipo joven de Lima que cree que cualquier negocio, por pequeño que sea, merece una web que de verdad le traiga clientes. Trabajamos cerca de ti, por WhatsApp y sin tecnicismos.",
  members: [
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
  ],
};

export const finalCta = {
  title: "Tu demo está a un mensaje de distancia.",
  text: "Escríbenos por WhatsApp y te mostramos cómo se vería la web de tu negocio. Gratis.",
  button: "Pedir mi demo por WhatsApp",
};

export const footer = {
  phrase: "Webs, WhatsApp con IA y reservas para PYMEs. Mueve tu negocio.",
};
