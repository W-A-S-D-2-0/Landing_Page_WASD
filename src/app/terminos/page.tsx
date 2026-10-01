import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y condiciones | WASD",
  description: "Términos y condiciones de los servicios de WASD.",
  alternates: { canonical: "/terminos/" },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones" updated="[FECHA]">
      <p>[TÉRMINOS Y CONDICIONES — texto legal pendiente de redactar y revisar por el equipo/asesor legal.]</p>
      <p>Sugerencia de contenido: alcance de cada plan, plazos de entrega, mensualidades y permanencia, propiedad del contenido y del dominio, cambios incluidos, cancelación y medios de pago.</p>
    </LegalPage>
  );
}
