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
    "Ejemplo ilustrativo: un cliente escribe por WhatsApp desde la web de una cafetería, la recepcionista con IA le responde y su reserva queda confirmada",
  /**
   * Conversación de ejemplo que se anima dentro del celular del hero.
   * Es ilustrativa: no representa a un cliente real.
   */
  chat: {
    agentName: "Tu cafetería",
    agentStatus: "Recepcionista IA · en línea",
    messages: [
      { from: "customer", text: "Hola, ¿tienen mesa para 4 hoy a las 8 p. m.?" },
      { from: "agent", text: "¡Hola! Sí, tenemos mesa para 4 a las 8 p. m. ¿A nombre de quién la separo?" },
      { from: "customer", text: "A nombre de Lucía, gracias" },
      { from: "agent", text: "Listo, Lucía. Te enviamos un recordatorio una hora antes." },
    ] as Array<{ from: "customer" | "agent"; text: string }>,
    confirmation: "Reserva confirmada · Hoy, 8 p. m.",
    replay: "Ver de nuevo",
    reportTitle: "Tu reporte semanal",
    reportRows: ["Visitas", "Clics a WhatsApp", "Reservas"],
    reportNote: "Ejemplo ilustrativo",
  },
};

export const problem: {
  title: string;
  intro: string;
  chat: { title: string; status: string; messages: Array<{ text: string; time: string }>; pending: string };
  items: Array<{ icon: LucideIcon; title: string; text: string }>;
} = {
  title: "¿Te pasa esto?",
  intro: "Si vendes por Instagram y WhatsApp, seguro reconoces alguno.",
  /** Chat ilustrativo: las mismas preguntas, una y otra vez. */
  chat: {
    title: "Tu WhatsApp, un día cualquiera",
    status: "12 chats sin responder",
    messages: [
      { text: "Hola, ¿hasta qué hora atienden?", time: "9:12" },
      { text: "¿Cuánto cuesta el menú?", time: "9:40" },
      { text: "¿Dónde quedan exactamente?", time: "11:05" },
      { text: "Hola, ¿hasta qué hora atienden hoy?", time: "12:31" },
      { text: "¿Tienen delivery?", time: "13:18" },
      { text: "¿Hasta qué hora atienden?", time: "15:47" },
    ],
    pending: "Y tú, atendiendo el local.",
  },
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
  /** Mini vista de ejemplo que se muestra al elegir la tecla. */
  preview: { title: string; lines: string[] };
};

export const services: {
  title: string;
  intro: string;
  hint: string;
  keyboardHint: string;
  keyLabel: string;
  tablistLabel: string;
  items: Service[];
  closing: string;
} = {
  title: "Todo lo que necesitas, con un solo equipo",
  intro:
    "WASD son las teclas para moverse en un videojuego. Cada una es una forma de mover tu negocio.",
  hint: "Toca una tecla para ver cada servicio.",
  /** Se muestra solo en pantallas grandes, donde suele haber teclado físico. */
  keyboardHint: "También puedes presionar W, A, S o D en tu teclado.",
  keyLabel: "Tecla",
  tablistLabel: "Servicios de WASD",
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
      preview: {
        title: "Tu web en Google",
        lines: ["cafetería cerca de mí", "Tu negocio · Barranco, Lima", "Abierto ahora · Cierra 9 p. m.", "Ver carta · Reservar · WhatsApp"],
      },
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
      preview: {
        title: "WhatsApp, 11:48 p. m.",
        lines: ["¿Atienden mañana domingo?", "Sí, de 9 a. m. a 6 p. m. ¿Te separo una mesa?"],
      },
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
      preview: {
        title: "Agenda de hoy",
        lines: ["1:00 p. m. · Mesa para 2 · Adelanto recibido", "4:30 p. m. · Pedido para recoger", "8:00 p. m. · Mesa para 4 · Recordatorio enviado"],
      },
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
      preview: {
        title: "Lo que tu negocio necesite",
        lines: ["App para tus clientes", "Panel de ventas e inventario", "Conexión con tu sistema actual"],
      },
    },
  ],
  closing: "Empiezas con tu web y subes de nivel cuando lo necesites.",
};

export const howItWorks = {
  title: "Cómo funciona",
  intro: "Cuatro pasos, sin reuniones largas ni términos técnicos.",
  /** `artifact`: la pieza real que ve el cliente en cada paso (se dibuja en HowItWorks). */
  steps: [
    {
      title: "Nos cuentas de tu negocio",
      text: "Llenas un formulario corto o nos escribes. Te toma 2 minutos.",
      artifact: { kind: "form", lines: ["Nombre del negocio", "Rubro", "Tu WhatsApp"] },
    },
    {
      title: "Te enviamos tu demo gratis",
      text: "Diseñamos una demo personalizada de tu web, sin costo.",
      artifact: { kind: "message", lines: ["Hola, aquí está la demo de tu web. Revísala con calma y nos cuentas qué cambiarías."] },
    },
    {
      title: "La ajustamos y la publicamos",
      text: "Hacemos los cambios contigo y la publicamos en 48 horas.",
      artifact: { kind: "site", lines: ["tunegocio.pe", "Publicada"] },
    },
    {
      title: "Recibes tus resultados",
      text: "Cada semana te llegan por WhatsApp tus visitas, clics y reservas.",
      artifact: { kind: "report", lines: ["Reporte del lunes", "Visitas", "Clics a WhatsApp", "Reservas"] },
    },
  ] as Array<{
    title: string;
    text: string;
    artifact: { kind: "form" | "message" | "site" | "report"; lines: string[] };
  }>,
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
    "Así se ven nuestras landings por sector. Son demos de ejemplo que puedes recorrer: pronto mostraremos proyectos de clientes reales.",
  /** `slug` = ruta de la demo navegable (/demo/slug/), definida en src/data/demos.ts. */
  items: [
    {
      label: "Demo · Cafetería en Barranco",
      sector: "cafe" as const,
      slug: "cafeteria",
      text: "Carta digital, reservas de mesa y botón de WhatsApp.",
    },
    {
      label: "Demo · Barbería en Miraflores",
      sector: "salon" as const,
      slug: "barberia",
      text: "Agenda de citas por barbero y galería de cortes.",
    },
    {
      label: "Demo · Consultorio dental en San Borja",
      sector: "dental" as const,
      slug: "consultorio-dental",
      text: "Tratamientos explicados en simple y reserva de primera cita.",
    },
  ],
  openDemo: "Ver demo",
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
  /**
   * `photo`: ruta en /public (por ejemplo "/equipo/nombre.webp", cuadrada,
   * 600×600, WebP). Mientras sea "[FOTO]" se muestra un placeholder.
   * Usar fotos reales, nunca generadas con IA.
   */
  members: [
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
    { name: "[NOMBRE]", role: "[ROL]", photo: "[FOTO]" },
  ],
  /**
   * Video corto de un fundador (30–60 s). Sube el MP4 y su portada a
   * /public/video/. Mientras `src` esté vacío, el bloque no se muestra.
   */
  video: {
    src: "",
    poster: "",
    title: "Te contamos cómo trabajamos",
    text: "Un minuto con el equipo, sin guion de vendedor.",
    playLabel: "Reproducir video",
    duration: "1 min",
  },
};

export const finalCta = {
  title: "Tu demo está a un mensaje de distancia.",
  text: "Escríbenos por WhatsApp y te mostramos cómo se vería la web de tu negocio. Gratis.",
  button: "Pedir mi demo por WhatsApp",
  secondary: "Prefiero llenar el formulario",
};

/** Globito del botón flotante de WhatsApp (aparece una sola vez por visita). */
export const whatsappBubble = {
  text: "¿Te ayudamos con la web de tu negocio?",
  close: "Cerrar mensaje",
  delayMs: 12000,
};

export const footer = {
  phrase: "Webs, WhatsApp con IA y reservas para PYMEs. Mueve tu negocio.",
};
