import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { guarantee } from "@/data/content";

export const metadata: Metadata = {
  title: "Condiciones de la garantía | WASD",
  description: "Condiciones de la garantía de resultados de WASD.",
  alternates: { canonical: "/garantia/" },
};

export default function GarantiaPage() {
  return (
    <LegalPage title="Condiciones de la garantía" updated="[FECHA]">
      <p className="!text-ink">{guarantee.text}</p>
      <p>[CONDICIONES DE LA GARANTÍA]</p>
    </LegalPage>
  );
}
