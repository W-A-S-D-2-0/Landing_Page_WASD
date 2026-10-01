# WASD · Landing page

Landing page oficial de **WASD**, startup de Lima que ayuda a PYMEs a conseguir, atender y fidelizar clientes por internet: web, WhatsApp con IA y reservas.

**Stack:** Next.js 16 (App Router) + TypeScript + Tailwind CSS 4. Se exporta como sitio estático. Íconos: Lucide. Animaciones solo con CSS y un `IntersectionObserver`, sin librerías.

---

## Cómo correr el proyecto

Requisitos: Node.js 20.9 o superior (recomendado 22, ver `.nvmrc`).

```bash
npm install
cp .env.example .env.local   # completa tus valores
npm run dev                  # http://localhost:3000
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en vivo |
| `npm run build` | Genera el sitio estático en `/out` |
| `npm run start` | Sirve `/out` localmente para revisar el build final |
| `npm run lint` | ESLint |
| `npm run typecheck` | Revisión de TypeScript |
| `npm run check` | Lint + TypeScript + build (correr antes de publicar) |

---

## Cómo editar textos y precios

Todo el contenido está en `src/data/`. **No hace falta tocar componentes.**

| Archivo | Qué contiene |
| --- | --- |
| `src/data/site.ts` | Marca, WhatsApp, email, redes, razón social, RUC, Libro de Reclamaciones, menú y SEO |
| `src/data/plans.ts` | **Planes y precios** (único lugar donde se definen) |
| `src/data/content.ts` | Textos de hero, problemas, servicios W·A·S·D, pasos, garantía, comparativa, proyectos, formulario, equipo y llamado final |
| `src/data/sectors.ts` | Pestañas por sector y contenido de los mockups |
| `src/data/faq.ts` | Preguntas frecuentes (también alimentan el JSON-LD `FAQPage`) |
| `src/data/testimonials.ts` | Testimonios (sección **oculta** hasta tener datos reales) |

### Precios
En `src/data/plans.ts`, cada plan tiene `prices.mensual` y, opcionalmente, `prices.unico`. El interruptor "Mensual / Pago único" solo cambia los planes que tienen `unico`. Los montos son números, por ejemplo `amount: 1800`, y se muestran como `S/ 1,800`.

### Mensajes de WhatsApp
Todos los links salen de `src/lib/whatsapp.ts`, que tiene un mensaje distinto para consulta general, demo, plan elegido y formulario.

### Formulario
`src/lib/lead.ts` contiene la validación y la función aislada `submitLead()`. Hoy abre WhatsApp con un mensaje ya armado con los datos del formulario. Para conectar un backend (API propia, Formspree, Google Sheets, CRM), reemplaza el cuerpo de `submitLead()`. Hay un ejemplo en el comentario de esa función.

### Activar testimonios
En `src/data/testimonials.ts`, agrega testimonios **reales** (con permiso del cliente) y cambia `enabled: true`.

### Colores y tipografía
Los tokens de color (tema claro y oscuro) están en `src/app/globals.css`. Las fuentes son Plus Jakarta Sans e Inter. Están alojadas en `src/fonts/` (licencia SIL OFL 1.1) y se cargan con `next/font/local` y `display: swap`, así que el build no depende de Google Fonts.

Ajustes de contraste respecto a la paleta original, para cumplir WCAG AA:
- `--success` en tema claro: de `#2E7D5B` a `#2A7353`, para lograr 4.5:1 sobre `--surface-alt`.
- `--accent` (ámbar) en tema claro: solo se usa como fondo, con texto oscuro. Para texto ámbar existe `--accent-ink` (`#8F5E1F`).

---

## Placeholders pendientes

| Placeholder | Dónde se cambia |
| --- | --- |
| `[WHATSAPP]` (número para los links) | `.env.local` → `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| `[WHATSAPP]` (cómo se muestra en el footer) | `src/data/site.ts` → `contact.whatsappDisplay` |
| `[EMAIL]` | `src/data/site.ts` → `contact.email` |
| `[DOMINIO]` | `.env.local` → `NEXT_PUBLIC_SITE_URL` |
| `[URL INSTAGRAM]`, `[URL FACEBOOK]`, `[URL TIKTOK]`, `[URL LINKEDIN]` | `src/data/site.ts` → `social` (quita las redes que no uses) |
| `[RAZÓN SOCIAL]`, `[RUC]` | `src/data/site.ts` → `legal` |
| `[URL LIBRO DE RECLAMACIONES]` | `src/data/site.ts` → `legal.complaintsBookUrl` (obligatorio en Perú) |
| `[NOMBRE]`, `[ROL]`, `[FOTO]` (×4 fundadores) | `src/data/content.ts` → `team.members`; fotos en `/public` (WebP) y reemplazar el placeholder en `src/components/sections/Team.tsx` por `<Image>` |
| `[CONDICIONES DE LA GARANTÍA]` | `src/app/garantia/page.tsx` |
| Texto de la política de privacidad (Ley N.º 29733) | `src/app/privacidad/page.tsx` |
| Términos y condiciones | `src/app/terminos/page.tsx` |
| `[FECHA]` (última actualización de páginas legales) | Las 3 páginas legales |
| IDs de Google Analytics 4 y Meta Pixel | `.env.local` → `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_META_PIXEL_ID` |
| Logo definitivo (hoy es un SVG simple de 4 teclas) | `src/components/ui/Logo.tsx` y `src/app/icon.svg` |

**Revisar con el equipo:** respuestas de las preguntas frecuentes (`src/data/faq.ts`), que describen políticas como factura, propiedad del dominio o cambios incluidos. También los textos de la comparativa (`src/data/content.ts`).

**Qué no se inventó:** la página no tiene clientes, testimonios, reseñas, logos ni cifras de resultados. Los proyectos están rotulados como **"Demo"** y la tarjeta del reporte semanal del hero dice "Ejemplo ilustrativo", sin números.

---

## Medición

Con `NEXT_PUBLIC_GA_ID` y/o `NEXT_PUBLIC_META_PIXEL_ID` definidos, se cargan GA4 y Meta Pixel. Si no están definidos, no se carga nada.

Eventos que se envían:

| Evento | Cuándo | Meta Pixel |
| --- | --- | --- |
| `whatsapp_click` | Cualquier botón o link a WhatsApp (`label` indica cuál) | `Contact` |
| `demo_cta_click` | Botones "Quiero mi demo gratis" | personalizado |
| `lead_submit` | Envío válido del formulario | `Lead` |
| `plan_click` | Botón de cada plan (`label` = id del plan) | personalizado |

Para medir un botón nuevo, agrégale `data-track="evento"` y `data-track-label="etiqueta"`, o usa la prop `track` de `ButtonLink`.

---

## Desplegar en Vercel

1. Importa el repositorio en [vercel.com/new](https://vercel.com/new). Vercel detecta Next.js solo.
2. En **Settings → Environment Variables**, agrega las variables de `.env.example`: `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_WHATSAPP_NUMBER` y, si los tienes, `NEXT_PUBLIC_GA_ID` y `NEXT_PUBLIC_META_PIXEL_ID`.
3. Haz deploy. Cada push a la rama principal publica automáticamente.
4. En **Settings → Domains**, conecta tu dominio `.pe` y actualiza `NEXT_PUBLIC_SITE_URL`.

Como el sitio es estático (`/out`), también funciona en Netlify, Cloudflare Pages o cualquier hosting de archivos.

---

## Cómo colaborar

Trabajamos con ramas y pull requests hacia `main`. Las convenciones de ramas, commits, nombres y estructura están en [CONTRIBUTING.md](CONTRIBUTING.md). Cada pull request pasa por CI (lint, TypeScript y build).

---

## Estructura

```
src/
├── app/                  # layout, página, páginas legales, sitemap, robots, ícono
├── components/
│   ├── sections/         # una sección por archivo (Header, Hero, Pricing, LeadForm…)
│   ├── ui/               # Button, Card, Section, Accordion, Tabs, ThemeToggle, KeyCap…
│   ├── mockups/          # celular, laptop y navegador hechos con HTML/CSS
│   ├── Analytics.tsx     # GA4 + Meta Pixel
│   └── JsonLd.tsx        # ProfessionalService + FAQPage
├── data/                 # TODO el contenido editable
├── fonts/                # Inter y Plus Jakarta Sans (woff2) + licencias
└── lib/                  # whatsapp, analytics, lead (submitLead), utilidades
```

## Calidad (último build)

Lighthouse en móvil: Performance 96 · Accessibility 100 · Best Practices 100 · SEO 100. Medido sobre el build estático servido con compresión.

Se probó también lo siguiente:
- Navegación completa con teclado: pestañas con flechas, Inicio y Fin; acordeón; menú móvil con Escape.
- Validación del formulario con mensajes de error accesibles.
- Un solo H1.
- Sin scroll horizontal a 375, 390, 768 y 1280 px.
- Temas claro y oscuro, con la elección del usuario guardada.
- `prefers-reduced-motion` desactiva todas las animaciones.
