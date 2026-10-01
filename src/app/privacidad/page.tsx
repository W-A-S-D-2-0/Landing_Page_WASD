import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Política de privacidad | WASD",
  description: "Cómo WASD trata tus datos personales, conforme a la Ley N.º 29733.",
  alternates: { canonical: "/privacidad/" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad" updated="[FECHA]">
      <p>
        Esta política explica cómo {site.legal.businessName} (RUC {site.legal.ruc}), en adelante “WASD”, trata los
        datos personales que nos compartes, conforme a la Ley N.º 29733, Ley de Protección de Datos Personales, y su
        reglamento.
      </p>
      <h2>Texto pendiente</h2>
      <p>[POLÍTICA DE PRIVACIDAD — texto legal pendiente de redactar y revisar por el equipo/asesor legal.]</p>
      <p>Debe incluir como mínimo:</p>
      <ul>
        <li>Qué datos recopilamos (nombre, negocio, rubro, WhatsApp, link opcional).</li>
        <li>Para qué los usamos (contactarte sobre tu diagnóstico y demo).</li>
        <li>Banco de datos personales y su inscripción ante la ANPD.</li>
        <li>Cómo ejercer tus derechos ARCO y a quién escribir: {site.contact.email}.</li>
        <li>Plazo de conservación y transferencia a terceros (por ejemplo, WhatsApp/Meta, Google Analytics).</li>
      </ul>
    </LegalPage>
  );
}
