/**
 * Soluciones por sector (pestañas) y contenido de los mockups de ejemplo.
 * Los mockups son webs de ejemplo: no representan clientes reales.
 */

export type SectorTheme = "cafe" | "salon" | "dental" | "other";

export type MockSiteContent = {
  /** Nombre genérico (no inventar marcas de clientes). */
  brand: string;
  headline: string;
  subline: string;
  primaryAction: string;
  listTitle: string;
  list: Array<{ name: string; detail: string }>;
};

export type Sector = {
  id: string;
  tab: string;
  title: string;
  description: string;
  includes: string[];
  theme: SectorTheme;
  mock: MockSiteContent;
};

export const sectorsSection = {
  title: "Soluciones por sector",
  intro: "Cada rubro tiene sus necesidades. Partimos de una plantilla pensada para el tuyo.",
};

export const sectors: Sector[] = [
  {
    id: "cafeterias",
    tab: "Cafeterías y restaurantes",
    title: "Para cafeterías y restaurantes",
    description: "Que tus clientes vean tu carta, reserven y te escriban sin esperar.",
    includes: [
      "Carta digital con fotos y precios",
      "Reservas de mesa desde la web",
      "Pedidos para recoger por WhatsApp",
      "Horarios y ubicación en Google Maps",
    ],
    theme: "cafe",
    mock: {
      brand: "Tu cafetería",
      headline: "Café de especialidad y postres de la casa",
      subline: "Abierto todos los días · 8 a. m. a 9 p. m.",
      primaryAction: "Reservar mesa",
      listTitle: "Carta",
      list: [
        { name: "Capuchino", detail: "S/ 12" },
        { name: "Cheesecake de maracuyá", detail: "S/ 14" },
        { name: "Sándwich de pollo", detail: "S/ 18" },
      ],
    },
  },
  {
    id: "peluquerias",
    tab: "Peluquerías y barberías",
    title: "Para peluquerías y barberías",
    description: "Que reserven su cita en segundos y vean tu trabajo antes de llegar.",
    includes: [
      "Agenda de citas por servicio y profesional",
      "Galería de trabajos",
      "Servicios y precios claros",
      "Recordatorios de cita por WhatsApp",
    ],
    theme: "salon",
    mock: {
      brand: "Tu barbería",
      headline: "Cortes y barba con cita, sin esperas",
      subline: "Martes a domingo · 10 a. m. a 8 p. m.",
      primaryAction: "Reservar cita",
      listTitle: "Servicios",
      list: [
        { name: "Corte clásico", detail: "S/ 35" },
        { name: "Corte + barba", detail: "S/ 50" },
        { name: "Perfilado de barba", detail: "S/ 20" },
      ],
    },
  },
  {
    id: "dentales",
    tab: "Consultorios dentales",
    title: "Para consultorios dentales",
    description: "Que tus pacientes entiendan tus tratamientos y agenden su primera cita.",
    includes: [
      "Tratamientos explicados en simple",
      "Reserva de primera cita en línea",
      "Horarios, ubicación y cómo llegar",
      "Respuestas a las dudas más comunes",
    ],
    theme: "dental",
    mock: {
      brand: "Tu consultorio",
      headline: "Tu sonrisa en buenas manos",
      subline: "Lunes a sábado · Atención con cita previa",
      primaryAction: "Agendar primera cita",
      listTitle: "Tratamientos",
      list: [
        { name: "Limpieza dental", detail: "Ver más" },
        { name: "Blanqueamiento", detail: "Ver más" },
        { name: "Ortodoncia", detail: "Ver más" },
      ],
    },
  },
  {
    id: "otros",
    tab: "Otros negocios",
    title: "Para otros negocios",
    description: "Adaptamos la web a lo que vendes y a cómo te contactan tus clientes.",
    includes: [
      "Diseño adaptado a tu rubro",
      "Catálogo o lista de servicios",
      "Formulario de cotización",
      "Botón directo a WhatsApp",
    ],
    theme: "other",
    mock: {
      brand: "Tu negocio",
      headline: "Lo que ofreces, claro y a un toque",
      subline: "Atención por WhatsApp · Lima",
      primaryAction: "Pedir cotización",
      listTitle: "Servicios",
      list: [
        { name: "Servicio principal", detail: "Ver más" },
        { name: "Paquetes", detail: "Ver más" },
        { name: "Preguntas frecuentes", detail: "Ver más" },
      ],
    },
  },
];

/** Contenido de mockup por tema (lo usan Hero y Proyectos). */
export function mockFor(theme: SectorTheme): MockSiteContent {
  return (sectors.find((s) => s.theme === theme) ?? sectors[0]).mock;
}
