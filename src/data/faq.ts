/**
 * Preguntas frecuentes. Se usan en el acordeón y en los datos
 * estructurados FAQPage (SEO), así que escribe respuestas completas.
 */

export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "¿Qué pasa si no me gusta la demo?",
    answer:
      "No pagas nada. La demo es gratis y sin compromiso. Si quieres, la ajustamos con tus comentarios; si no te convence, quedamos como amigos.",
  },
  {
    question: "¿Necesito saber de tecnología?",
    answer:
      "No. Nosotros nos encargamos de todo: diseño, dominio, publicación y ajustes. Tú solo nos cuentas de tu negocio y revisas la demo desde tu celular.",
  },
  {
    question: "¿La web es mía?",
    answer:
      "Sí. El contenido, las fotos y el dominio son de tu negocio. Si algún día decides irte, te entregamos tus textos, imágenes y el dominio.",
  },
  {
    question: "¿Qué pasa si dejo de pagar la mensualidad?",
    answer:
      "Te avisamos con anticipación. Si no se regulariza, los servicios mensuales (IA, reservas, reportes y hosting) se pausan. Puedes reactivarlos cuando quieras o pedirnos tus archivos.",
  },
  {
    question: "¿Cómo funciona la IA en WhatsApp?",
    answer:
      "Configuramos un asistente con la información de tu negocio: horarios, precios, carta o servicios. Responde las preguntas frecuentes al instante y, cuando algo necesita a una persona, te pasa la conversación.",
  },
  {
    question: "¿Puedo cambiar textos y fotos?",
    answer:
      "Sí. Nos escribes por WhatsApp lo que quieres cambiar y lo actualizamos. Los cambios pequeños están incluidos en tu plan.",
  },
  {
    question: "¿Emiten factura?",
    answer:
      "Sí, emitimos boleta o factura electrónica. Los precios publicados no incluyen IGV.",
  },
  {
    question: "¿Trabajan fuera de Lima?",
    answer:
      "Sí. Todo el proceso es por WhatsApp y videollamada, así que podemos trabajar con negocios de cualquier ciudad del Perú.",
  },
];
