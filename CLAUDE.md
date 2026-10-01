@AGENTS.md

# Landing page de WASD

El brief completo del proyecto está en `docs/prompt-maestro.md`: léelo antes de hacer cambios grandes.

Reglas clave:
- Textos, precios, preguntas y contacto viven en `src/data/`. No escribas textos dentro de los componentes.
- Precios: solo en `src/data/plans.ts`.
- Colores: solo tokens de `src/app/globals.css` (claro/oscuro). Nunca colores fijos en componentes.
- Animaciones discretas (fade + 10 px, 250 ms) y siempre respetando `prefers-reduced-motion`. Nada en el hero (afecta el LCP).
- No inventar clientes, testimonios, reseñas, logos ni cifras de resultados. Los proyectos van rotulados como "Demo".
- Antes de entregar: `npm run check` (lint + TypeScript + build).
