# Prompt maestro — Landing page de WASD

> Copia todo este documento y pégalo en Claude Code como primera instrucción del proyecto (o guárdalo como `CLAUDE.md` en la raíz del repositorio). Los textos entre `[CORCHETES]` son datos que el equipo debe completar.

---

## 1. Tu rol

Eres un desarrollador frontend senior y diseñador de producto. Vas a construir, de principio a fin, la landing page oficial de **WASD**, una startup peruana de desarrollo digital para PYMEs. Tu trabajo debe verse como el de una agencia seria y confiable: limpio, ordenado, rápido y fácil de leer. Antes de escribir código, lee este documento completo, propón un plan breve (estructura de carpetas, componentes y orden de trabajo) y luego ejecútalo sección por sección.

---

## 2. Contexto de WASD

**Qué es WASD:** una startup de Lima que ayuda a micro y pequeñas empresas (PYMEs) a conseguir, atender y fidelizar clientes por internet. Empezamos con landing pages y crecemos hacia aplicaciones web, apps móviles y automatización con inteligencia artificial.

**El problema que resolvemos:** la mayoría de PYMEs peruanas vende por Instagram, Facebook y WhatsApp, pero no tiene una web que convierta visitas en clientes. Cuando contratan una, suelen recibir una plantilla genérica, entregada y abandonada, sin saber nunca si les trajo clientes. Si además quieren un chatbot o un sistema de reservas, terminan pagando a tres proveedores distintos.

**Nuestra diferencia (esto es lo que la landing debe comunicar):**
1. **Te mostramos tu web antes de pagar.** Hacemos una demo personalizada del negocio, gratis.
2. **Todo en uno.** Web + atención por WhatsApp con IA + reservas, con un solo proveedor y una sola mensualidad.
3. **Resultados medidos.** Cada semana el cliente recibe por WhatsApp cuántas visitas, clics y reservas generó su web.
4. **Rápido.** Landing publicada en 48 horas.
5. **Pensado por sector.** Plantillas diseñadas para cafeterías, restaurantes, peluquerías/barberías y consultorios dentales.
6. **Sin barrera de entrada.** Opción de cero pago inicial con mensualidad.

**Propuesta de valor (frase principal):**
"Tu negocio atendiendo y vendiendo las 24 horas: web, WhatsApp con IA y reservas, listos en 48 horas y con resultados medidos cada semana."

**El nombre WASD:** son las teclas de movimiento de los videojuegos ("mueve tu negocio"). Cada tecla es una línea de servicio:
- **W — Web:** landing pages por sector.
- **A — Automatización con IA:** recepcionista IA en WhatsApp, reseñas automáticas.
- **S — Sistemas:** reservas, pedidos, adelantos con Yape/Plin, fidelización.
- **D — Desarrollo a medida:** aplicaciones web y móviles.

El guiño gamer debe ser **sutil y elegante** (por ejemplo, las cuatro tarjetas de servicio con una letra en forma de tecla discreta, o la idea de "subir de nivel"). Nunca debe volver la página infantil, oscura tipo "gaming" ni futurista.

**Público objetivo:** dueños de negocios locales en Lima, de 25 a 55 años, poco técnicos, que entran principalmente desde el celular, muchas veces desde un link de WhatsApp o Instagram. Necesitan entender en 5 segundos qué ofrecemos, cuánto cuesta y cómo hablar con nosotros.

---

## 3. Dirección de diseño (muy importante)

**Lo que buscamos:** un diseño estético, profesional y agradable a la vista, que transmita confianza. Que el cliente se sienta cómodo leyendo, sin cansarse. Inspiración de tono: sitios de empresas de software sobrias y bien hechas (orden, aire, tipografía clara), no portafolios experimentales.

**Lo que NO queremos:**
- Nada futurista: sin neones, sin fondos negros con brillos, sin glassmorphism, sin partículas, sin gradientes chillones, sin efectos 3D ni cursores personalizados.
- Sin animaciones exageradas ni parallax pesado. Sin carruseles automáticos.
- Sin bloques de texto densos ni letras pequeñas de bajo contraste.

**Principios:**
- Mucho espacio en blanco, jerarquía clara, una idea por sección.
- Contraste mínimo WCAG AA en todo el texto (4.5:1 cuerpo, 3:1 títulos grandes).
- Un solo color de acento usado con moderación (botones principales y detalles), el resto neutros.
- Esquinas redondeadas suaves (10–12 px), sombras muy ligeras o bordes finos en lugar de sombras fuertes.
- Animaciones discretas: aparición suave al hacer scroll (fade + 8–12 px de desplazamiento, 200–300 ms) y estados hover sutiles. Todo desactivado si el usuario tiene `prefers-reduced-motion`.

**Temas claro y oscuro:** la página debe verse igual de bien en ambos. Respeta `prefers-color-scheme` por defecto y agrega un interruptor de tema discreto en el header (que recuerde la elección del usuario). Define todos los colores como variables (tokens) y nunca uses colores fijos dentro de los componentes.

**Paleta propuesta (tokens):**

| Token | Claro | Oscuro | Uso |
| --- | --- | --- | --- |
| `--bg` | `#FAFAF7` (blanco cálido) | `#111418` | Fondo general |
| `--surface` | `#FFFFFF` | `#181C22` | Tarjetas, bloques |
| `--surface-alt` | `#F2F3EF` | `#1E232A` | Secciones alternas |
| `--border` | `#E4E5E0` | `#2A3038` | Bordes finos |
| `--text` | `#1C2128` | `#E8EAED` | Texto principal |
| `--text-muted` | `#5B6470` | `#A3ABB6` | Texto secundario |
| `--primary` | `#1F4E5F` (azul petróleo) | `#6FB3C4` | Botones, enlaces, acentos |
| `--primary-contrast` | `#FFFFFF` | `#0E1A1F` | Texto sobre botón primario |
| `--accent` | `#C98A3D` (ámbar suave) | `#E0A85E` | Detalles puntuales (badges, "más elegido") |
| `--success` | `#2E7D5B` | `#5CC197` | Checks, garantía |

Verifica el contraste de cada combinación y ajusta los tonos si alguno no cumple AA.

**Tipografía:** `Plus Jakarta Sans` para títulos (600–700) e `Inter` para el cuerpo (400–500), desde Google Fonts con `font-display: swap`. Escala sugerida: H1 40–56 px (escritorio) / 32–36 px (móvil), H2 32–40 / 26–28, cuerpo 17–18 px, interlineado 1.6. Ancho máximo de párrafo ~65 caracteres.

**Iconos:** Lucide, trazo fino, mismo tamaño en toda la página.

**Imágenes:** usa mockups limpios (una landing de ejemplo dentro de un celular y una laptop) construidos con HTML/CSS o imágenes placeholder claramente marcadas. No uses fotos de stock genéricas de gente sonriendo con laptops.

---

## 4. Estructura de la página (en este orden)

Escribe todos los textos en español neutro peruano, tuteando, frases cortas y concretas. Precios en soles (S/).

1. **Header fijo:** logo WASD (texto con un detalle de tecla, placeholder SVG simple), enlaces (Servicios, Cómo funciona, Precios, Preguntas), interruptor de tema y botón "Habla con nosotros" (abre WhatsApp). En móvil, menú hamburguesa accesible.

2. **Hero:** título con la propuesta de valor, subtítulo de una línea ("Webs, WhatsApp con IA y reservas para PYMEs en Lima, listos en 48 horas."), dos botones: **"Quiero mi demo gratis"** (primario, lleva al formulario) y **"Ver precios"** (secundario). Debajo, 3 microgarantías con check: "Demo gratis antes de pagar", "Publicada en 48 h", "Reporte semanal de resultados". A la derecha (abajo en móvil), un mockup de una landing de cafetería en un celular.

3. **El problema:** "¿Te pasa esto?" con 3 o 4 dolores en tarjetas simples: clientes que preguntan lo mismo por WhatsApp todo el día; no apareces en Google cuando te buscan; pagaste una web y nunca supiste si sirvió; reservas que no se presentan.

4. **Servicios W · A · S · D:** cuatro tarjetas, cada una con su letra en forma de tecla discreta, nombre, descripción de una línea y 3 beneficios. Frase de cierre: "Empiezas con tu web y subes de nivel cuando lo necesites."

5. **Cómo funciona:** 4 pasos numerados en línea horizontal (vertical en móvil):
   1. Nos cuentas de tu negocio (2 minutos).
   2. Te enviamos tu demo personalizada, gratis.
   3. La ajustamos contigo y la publicamos en 48 horas.
   4. Cada semana recibes por WhatsApp tus resultados.

6. **Soluciones por sector:** pestañas accesibles (Cafeterías y restaurantes · Peluquerías y barberías · Consultorios dentales · Otros negocios). Cada pestaña muestra qué incluye su landing (por ejemplo: carta digital y reservas; agenda y galería de trabajos; tratamientos y primera cita) y un mockup.

7. **Precios:** cuatro planes en tarjetas, con el Nivel 2 destacado como "Más elegido". Interruptor "Pago único / Mensual" donde aplique. Todos los precios deben salir de un único archivo de datos editable (`/data/plans.ts` o similar), porque son precios de lanzamiento y van a cambiar.

   | Plan | Incluye | Precio |
   | --- | --- | --- |
   | Nivel 1 · Presencia (W) | Landing por sector, botón de WhatsApp, Google Maps, dominio y hosting 1 año, reporte semanal | S/ 590 pago único, o S/ 0 inicial + S/ 99/mes (12 meses) |
   | Nivel 2 · Recepcionista IA (W + A) | Todo lo anterior + agente de WhatsApp con IA (horarios, precios, carta, derivación) + reseñas automáticas | S/ 990 instalación + S/ 249/mes |
   | Nivel 3 · Reservas y pedidos (W + A + S) | Todo lo anterior + reservas o pedidos, recordatorios, adelantos con Yape/Plin, tarjeta de fidelización | S/ 1,800 instalación + S/ 349/mes |
   | A medida (D) | Aplicaciones web, apps móviles, automatizaciones internas | Desde S/ 3,500 · cotización |

   Nota visible: "Precios en soles, no incluyen IGV."

8. **Garantía:** bloque destacado y sobrio: "Si en 60 días tu web no genera el mínimo de contactos que acordamos, el siguiente mes es gratis." Con un enlace a "Ver condiciones" (texto placeholder `[CONDICIONES DE LA GARANTÍA]`).

9. **Comparativa:** tabla simple de 3 columnas — "Hacerlo tú mismo" / "Agencia tradicional" / "WASD" — con filas: quién lo construye, tiempo de entrega, IA y WhatsApp incluidos, medición de resultados, soporte continuo, pago inicial. Marca las ventajas de WASD con checks, sin desacreditar a nadie por nombre.

10. **Proyectos:** grilla de 3 a 4 tarjetas de proyectos. **Mientras no tengamos clientes reales, deben estar rotuladas claramente como "Demo"** (ejemplo: "Demo · Cafetería en Barranco"). No inventes nombres de clientes, testimonios, reseñas, logos de empresas ni cifras de resultados. Deja la sección de testimonios preparada pero oculta, lista para activarse con datos reales.

11. **Diagnóstico digital gratis (formulario principal):** título "¿Cómo está tu negocio en internet? Te lo decimos gratis." Campos: nombre, nombre del negocio, rubro (select), WhatsApp, link de Instagram o Google Maps (opcional), casilla de aceptación de la política de privacidad. Botón "Quiero mi diagnóstico y demo gratis". Validación clara en español, mensajes de error accesibles y estado de éxito. Implementación: por ahora, al enviar se abre WhatsApp con un mensaje pre-armado con los datos; deja preparada una función `submitLead()` aislada para conectar luego un backend o servicio de formularios.

12. **Equipo:** "Quiénes somos" — texto breve sobre WASD como equipo joven de Lima, con 3 a 4 tarjetas de fundadores con placeholders `[NOMBRE]`, `[ROL]`, `[FOTO]`.

13. **Preguntas frecuentes:** acordeón accesible con 7–8 preguntas: ¿Qué pasa si no me gusta la demo? ¿Necesito saber de tecnología? ¿La web es mía? ¿Qué pasa si dejo de pagar la mensualidad? ¿Cómo funciona la IA en WhatsApp? ¿Puedo cambiar textos y fotos? ¿Emiten factura? ¿Trabajan fuera de Lima?

14. **Llamado final:** bloque con fondo `--surface-alt`: "Tu demo está a un mensaje de distancia." y botón a WhatsApp.

15. **Footer:** logo, frase corta, enlaces, contacto (`[WHATSAPP]`, `[EMAIL]`), redes, `[RAZÓN SOCIAL]` y `[RUC]`, enlace a **Libro de Reclamaciones** (obligatorio en Perú, `[URL LIBRO DE RECLAMACIONES]`), Política de privacidad (Ley N.º 29733) y Términos.

16. **Botón flotante de WhatsApp** en la esquina inferior derecha, discreto, que no tape contenido en móvil.

---

## 5. Requisitos técnicos

- **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS, exportado como sitio estático. Componentes pequeños y reutilizables (`Section`, `Button`, `Card`, `PlanCard`, `Accordion`, `Tabs`, `ThemeToggle`). Usa este stack salvo que encuentres una razón fuerte para otro; si la hay, explícala antes de empezar.
- **Contenido separado del diseño:** todos los textos, planes, preguntas frecuentes y datos de contacto en archivos de datos (`/data`), para que el equipo los edite sin tocar componentes.
- **Mobile first:** diseña primero para 360–414 px; revisa también 768 px y 1280 px. Sin scroll horizontal. Botones con área táctil mínima de 44 px.
- **Rendimiento:** objetivo Lighthouse ≥ 95 en Performance, Accessibility, Best Practices y SEO. Imágenes optimizadas (`next/image`, WebP/AVIF), fuentes con `display: swap`, sin librerías pesadas de animación (usa CSS o una librería ligera).
- **Accesibilidad:** HTML semántico, un solo H1, orden lógico de encabezados, foco visible, navegación completa con teclado, `aria` correcto en acordeón, pestañas y menú, textos alternativos.
- **SEO local:** title y meta description en español orientados a "páginas web para negocios en Lima", Open Graph y Twitter Card, `sitemap.xml`, `robots.txt`, datos estructurados JSON-LD (`ProfessionalService` con área de servicio Lima, Perú, y `FAQPage`).
- **Medición:** deja preparados (sin IDs reales) Google Analytics 4 y Meta Pixel mediante variables de entorno, y dispara eventos en: clic a WhatsApp, clic en "Quiero mi demo gratis", envío del formulario y clic en cada plan.
- **WhatsApp:** un solo helper que arme los links `https://wa.me/[NUMERO]?text=...` con mensajes pre-escritos distintos según el botón (demo, plan elegido, consulta general).
- **Calidad:** código limpio, sin errores de lint ni de TypeScript, y `npm run build` funcionando.

---

## 6. Forma de trabajo

1. Lee todo y presenta un plan corto: árbol de carpetas, lista de componentes y orden de construcción. Espera mi visto bueno solo si encuentras algo ambiguo o contradictorio; si no, continúa.
2. Configura el proyecto, los tokens de color (claro/oscuro), la tipografía y los componentes base.
3. Construye las secciones en el orden de la estructura. Al terminar cada bloque grande, revisa cómo se ve en móvil y en escritorio, en tema claro y oscuro.
4. Al final, revisa contraste, accesibilidad con teclado, que no haya textos inventados (testimonios, cifras, clientes) y que todos los placeholders `[ ]` estén listados.
5. Entrega un `README.md` con: cómo correr el proyecto, cómo editar textos y precios, la lista de placeholders pendientes y cómo desplegar en Vercel.

---

## 7. Criterio de éxito

Un dueño de cafetería que entra desde su celular debe, en menos de 10 segundos, entender qué hace WASD, ver que es profesional y confiable, saber cuánto cuesta empezar y tener a un toque el botón para pedir su demo gratis. Si algo de la página no ayuda a eso, simplifícalo.
