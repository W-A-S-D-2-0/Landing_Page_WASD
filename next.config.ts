import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sitio estático: `npm run build` genera la carpeta /out.
  output: "export",
  devIndicators: false,
  // /privacidad/ → /privacidad/index.html (funciona en cualquier hosting estático).
  trailingSlash: true,
  images: {
    // La exportación estática no incluye el optimizador de imágenes:
    // sube imágenes ya optimizadas (WebP/AVIF) a /public.
    unoptimized: true,
  },
};

export default nextConfig;
