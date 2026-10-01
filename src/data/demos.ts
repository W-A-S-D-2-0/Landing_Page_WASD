/**
 * Demos navegables (/demo/[slug]/). Son webs de EJEMPLO para mostrar cómo
 * se vería la landing de cada sector: no representan clientes reales.
 * No inventar marcas, reseñas ni cifras.
 */
import type { SectorTheme } from "@/data/sectors";

export type Demo = {
  slug: string;
  theme: SectorTheme;
  /** Cómo se nombra la demo en la barra superior y en el título de la pestaña. */
  label: string;
  brand: string;
  headline: string;
  subline: string;
  primaryAction: string;
  about: { title: string; text: string };
  list: { title: string; items: Array<{ name: string; detail: string; text: string }> };
  gallery: { title: string; items: string[] };
  hours: { title: string; rows: Array<[string, string]> };
  location: { title: string; text: string; map: string };
  booking: { title: string; text: string; fields: string[]; button: string; success: string };
};

/** Textos de la barra que avisa que es una demo. */
export const demoBar = {
  badge: "Demo",
  text: "Así podría verse la web de tu negocio.",
  cta: "Quiero una así",
  back: "Volver a WASD",
  whatsappLabel: "Escribir por WhatsApp",
  menuLabel: "Menú de",
};

export const demos: Demo[] = [
  {
    slug: "cafeteria",
    theme: "cafe",
    label: "Cafetería en Barranco",
    brand: "Tu cafetería",
    headline: "Café de especialidad y postres de la casa",
    subline: "Abierto todos los días · 8 a. m. a 9 p. m. · Barranco, Lima",
    primaryAction: "Reservar mesa",
    about: {
      title: "Un rincón tranquilo en Barranco",
      text: "Tostamos nuestro café cada semana y horneamos los postres todas las mañanas. Ven a trabajar, a conversar o a llevarte algo rico.",
    },
    list: {
      title: "Carta",
      items: [
        { name: "Capuchino", detail: "S/ 12", text: "Espresso doble con leche vaporizada." },
        { name: "Cold brew", detail: "S/ 13", text: "Infusionado en frío por 18 horas." },
        { name: "Cheesecake de maracuyá", detail: "S/ 14", text: "Base de galleta y coulis de la casa." },
        { name: "Sándwich de pollo", detail: "S/ 18", text: "Pan de masa madre, palta y lechuga." },
        { name: "Tostada con palta", detail: "S/ 16", text: "Con huevo pochado y semillas." },
        { name: "Alfajor de la casa", detail: "S/ 6", text: "Relleno de manjar blanco." },
      ],
    },
    gallery: { title: "El local", items: ["Foto del salón", "Foto de la barra", "Foto de los postres", "Foto de la terraza"] },
    hours: {
      title: "Horarios",
      rows: [
        ["Lunes a viernes", "8 a. m. – 9 p. m."],
        ["Sábados", "9 a. m. – 10 p. m."],
        ["Domingos y feriados", "9 a. m. – 6 p. m."],
      ],
    },
    location: { title: "Cómo llegar", text: "A dos cuadras del parque municipal de Barranco.", map: "Aquí va tu mapa de Google Maps" },
    booking: {
      title: "Reserva tu mesa",
      text: "Elige día y hora. Te confirmamos por WhatsApp.",
      fields: ["Tu nombre", "Fecha", "Hora", "Personas"],
      button: "Reservar mesa",
      success: "En la web real, esta reserva te llega por WhatsApp y el cliente recibe su confirmación al instante.",
    },
  },
  {
    slug: "barberia",
    theme: "salon",
    label: "Barbería en Miraflores",
    brand: "Tu barbería",
    headline: "Cortes y barba con cita, sin esperas",
    subline: "Martes a domingo · 10 a. m. a 8 p. m. · Miraflores, Lima",
    primaryAction: "Reservar cita",
    about: {
      title: "Llegas, te sientas y te atendemos",
      text: "Trabajamos solo con cita para que no esperes. Elige a tu barbero, el servicio y la hora que te acomode.",
    },
    list: {
      title: "Servicios",
      items: [
        { name: "Corte clásico", detail: "S/ 35", text: "Lavado, corte y peinado. 40 min." },
        { name: "Corte + barba", detail: "S/ 50", text: "El combo completo. 60 min." },
        { name: "Perfilado de barba", detail: "S/ 20", text: "Navaja y toalla caliente. 20 min." },
        { name: "Corte para niños", detail: "S/ 25", text: "Hasta 12 años. 30 min." },
      ],
    },
    gallery: { title: "Trabajos", items: ["Foto de un fade", "Foto de un corte clásico", "Foto de una barba", "Foto del local"] },
    hours: {
      title: "Horarios",
      rows: [
        ["Martes a sábado", "10 a. m. – 8 p. m."],
        ["Domingos", "10 a. m. – 3 p. m."],
        ["Lunes", "Cerrado"],
      ],
    },
    location: { title: "Cómo llegar", text: "A media cuadra de la avenida principal de Miraflores.", map: "Aquí va tu mapa de Google Maps" },
    booking: {
      title: "Reserva tu cita",
      text: "Elige servicio, barbero y hora. Te recordamos un día antes.",
      fields: ["Tu nombre", "Servicio", "Barbero", "Fecha y hora"],
      button: "Reservar cita",
      success: "En la web real, la cita entra a tu agenda y el cliente recibe un recordatorio por WhatsApp.",
    },
  },
  {
    slug: "consultorio-dental",
    theme: "dental",
    label: "Consultorio dental en San Borja",
    brand: "Tu consultorio",
    headline: "Tu sonrisa en buenas manos",
    subline: "Lunes a sábado · Atención con cita previa · San Borja, Lima",
    primaryAction: "Agendar primera cita",
    about: {
      title: "Te explicamos todo antes de empezar",
      text: "En tu primera cita revisamos tu caso, te explicamos las opciones en palabras simples y te damos un presupuesto claro.",
    },
    list: {
      title: "Tratamientos",
      items: [
        { name: "Limpieza dental", detail: "Ver más", text: "Elimina el sarro y previene caries y encías inflamadas." },
        { name: "Blanqueamiento", detail: "Ver más", text: "Aclara el tono de tus dientes de forma segura." },
        { name: "Ortodoncia", detail: "Ver más", text: "Brackets o alineadores para ordenar tus dientes." },
        { name: "Curaciones", detail: "Ver más", text: "Tratamos las caries con resinas del color del diente." },
      ],
    },
    gallery: { title: "El consultorio", items: ["Foto de la recepción", "Foto del consultorio", "Foto del equipo", "Foto de la fachada"] },
    hours: {
      title: "Horarios",
      rows: [
        ["Lunes a viernes", "9 a. m. – 7 p. m."],
        ["Sábados", "9 a. m. – 1 p. m."],
        ["Domingos", "Cerrado"],
      ],
    },
    location: { title: "Cómo llegar", text: "Cerca de la avenida principal de San Borja, con estacionamiento.", map: "Aquí va tu mapa de Google Maps" },
    booking: {
      title: "Agenda tu primera cita",
      text: "Déjanos tus datos y te escribimos para coordinar el horario.",
      fields: ["Tu nombre", "Tu WhatsApp", "Tratamiento", "Fecha preferida"],
      button: "Agendar cita",
      success: "En la web real, la solicitud te llega por WhatsApp y el paciente recibe la confirmación de su cita.",
    },
  },
];

export function demoBySlug(slug: string): Demo | undefined {
  return demos.find((demo) => demo.slug === slug);
}
