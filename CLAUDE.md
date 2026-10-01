@AGENTS.md

# Landing page de WASD

El brief completo del proyecto está en `docs/prompt-maestro.md`: léelo antes de hacer cambios grandes.

Reglas clave:
- Textos, precios, preguntas y contacto viven en `src/data/`. No escribas textos dentro de los componentes.
- Precios: solo en `src/data/plans.ts`.
- Colores: solo tokens de `src/app/globals.css` (claro/oscuro). Nunca colores fijos en componentes.
- Animaciones discretas (fade + 10 px, 250 ms) y siempre respetando `prefers-reduced-motion`. En el hero, el título, el texto y los botones no se animan (afecta el LCP): solo el celular de demostración (`HeroDemo`), y recién después de la carga.
- Las animaciones deben mostrar el producto funcionando (chat, reserva, reporte), no decorar. Nada de degradados difusos, efecto vidrio, partículas ni títulos con efecto de escritura.
- Fotos y video: solo reales del equipo y de negocios con permiso. Nunca personas o lugares generados con IA ni fotos de stock.
- No inventar clientes, testimonios, reseñas, logos ni cifras de resultados. Los proyectos van rotulados como "Demo".
- Antes de entregar: `npm run check` (lint + TypeScript + build).
