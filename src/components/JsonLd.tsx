import { faq } from "@/data/faq";
import { plans } from "@/data/plans";
import { site } from "@/data/site";

/** Datos estructurados: ProfessionalService (área Lima, Perú) y FAQPage. */
export function JsonLd() {
  const amounts = plans.flatMap((p) => Object.values(p.prices).map((price) => price?.amount ?? 0)).filter(Boolean);

  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: site.url,
    image: new URL(site.seo.ogImage, site.url).toString(),
    telephone: `+${site.contact.whatsappNumber}`,
    priceRange: `S/ ${Math.min(...amounts)} - S/ ${Math.max(...amounts).toLocaleString("en-US")}+`,
    currenciesAccepted: "PEN",
    address: { "@type": "PostalAddress", addressLocality: "Lima", addressRegion: "Lima", addressCountry: "PE" },
    areaServed: [
      { "@type": "City", name: "Lima" },
      { "@type": "Country", name: "Perú" },
    ],
    knowsLanguage: "es",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
