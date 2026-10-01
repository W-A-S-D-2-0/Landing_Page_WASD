/**
 * Testimonios — sección preparada pero OCULTA.
 *
 * Para activarla:
 * 1. Agrega testimonios REALES (con permiso del cliente) al arreglo `items`.
 * 2. Cambia `enabled` a true.
 *
 * Nunca publiques testimonios, reseñas o cifras inventadas.
 */

export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  /** Ruta opcional a la foto en /public (WebP recomendado). */
  photo?: string;
};

export const testimonials: {
  enabled: boolean;
  title: string;
  items: Testimonial[];
} = {
  enabled: false,
  title: "Lo que dicen nuestros clientes",
  items: [],
};
