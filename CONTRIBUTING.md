# Cómo trabajamos en la landing de WASD

## Ramas

- `main` es la versión estable: lo que está en `main` es lo que se publica.
- **Nadie trabaja directo en `main`.** Cada cambio va en su propia rama y entra con un pull request.
- Nombra las ramas con un prefijo y una descripción corta en minúsculas, separada por guiones:

| Prefijo | Para qué | Ejemplo |
| --- | --- | --- |
| `feature/` | Nueva sección, componente o funcionalidad | `feature/seccion-testimonios` |
| `content/` | Textos, precios, FAQ, datos de contacto | `content/precios-octubre` |
| `fix/` | Corrección de un error | `fix/menu-movil-escape` |
| `style/` | Ajustes visuales sin cambiar contenido | `style/espaciado-precios` |
| `chore/` | Configuración, dependencias, CI, SEO | `chore/actualizar-next` |

## Flujo

```bash
git checkout main
git pull
git checkout -b content/precios-octubre
# … cambios …
npm run check
git add .
git commit -m "content: actualiza precios del Nivel 2"
git push -u origin content/precios-octubre
```

Luego abre un pull request hacia `main`, completa la plantilla y espera que el CI pase en verde.

## Mensajes de commit

Formato: `tipo: descripción en presente y en minúsculas`, con el mismo tipo que el prefijo de la rama.

```
feature: agrega sección de testimonios
content: actualiza respuestas de preguntas frecuentes
fix: corrige foco del menú móvil al cerrar
style: reduce espaciado entre tarjetas de precios
chore: actualiza dependencias
```

## Estructura y nombres

```
src/
├── app/                  # rutas de Next.js (page.tsx, layout.tsx, sitemap.ts…)
├── components/
│   ├── sections/         # una sección de la landing por archivo
│   ├── ui/               # piezas reutilizables (Button, Card, Tabs…)
│   └── mockups/          # mockups hechos con HTML/CSS
├── data/                 # TODO el contenido editable
├── fonts/                # archivos de fuentes (woff2) y sus licencias
└── lib/                  # lógica sin interfaz (whatsapp, analytics, lead)
```

| Qué | Convención | Ejemplo |
| --- | --- | --- |
| Componentes | `PascalCase.tsx`, un componente principal por archivo, exportación con nombre | `PlanCard`, `export function Pricing()` |
| Secciones nuevas | En `components/sections/` y agregadas en orden en `src/app/page.tsx` | `Testimonials.tsx` |
| Datos | En `src/data/`, archivos en minúscula, exportaciones en `camelCase` | `plans.ts` → `export const plans` |
| Helpers | En `src/lib/`, archivos en minúscula | `whatsapp.ts` |
| Rutas | Carpetas en español y minúsculas | `app/privacidad/page.tsx` |
| Ids de secciones (anclas) | En español, minúsculas y con guiones | `#como-funciona` |

## Reglas que no se rompen

1. **Textos y precios solo en `src/data/`.** Los precios viven únicamente en `src/data/plans.ts`.
2. **Colores solo con tokens** de `src/app/globals.css` (`bg-surface`, `text-ink`, `text-primary`…). Nada de colores fijos en componentes.
3. **Animaciones discretas:** usa `data-reveal` (fade + 10 px) o las clases `anim-*` de `globals.css`, siempre dentro de `prefers-reduced-motion: no-preference`. En el hero no se animan el título, el texto ni los botones; solo el celular de demostración, después de la carga. Las animaciones muestran el producto funcionando, no decoran.
4. **Nada inventado:** ni clientes, ni testimonios, ni reseñas, ni logos, ni cifras de resultados. Los ejemplos van rotulados como "Demo".
5. **Accesibilidad:** HTML semántico, un solo H1, todo usable con teclado, áreas táctiles de al menos 44 px.
6. **Antes de cada PR:** `npm run check` sin errores.
