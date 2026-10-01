import { sectors, sectorsSection } from "@/data/sectors";
import { CheckItem } from "@/components/ui/CheckItem";
import { Section } from "@/components/ui/Section";
import { Tabs } from "@/components/ui/Tabs";
import { LaptopFrame, PhoneFrame } from "@/components/mockups/Devices";
import { MockSite } from "@/components/mockups/MockSite";

export function Sectors() {
  return (
    <Section id="sectores" title={sectorsSection.title} intro={sectorsSection.intro}>
      <div data-reveal>
        <Tabs
          label="Soluciones por sector"
          tabs={sectors.map((sector) => ({
            id: sector.id,
            label: sector.tab,
            content: (
              <div className="grid items-center gap-10 rounded-card border border-line bg-surface p-6 sm:p-8 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:p-10">
                <div>
                  <h3 className="heading-3 text-xl sm:text-2xl">{sector.title}</h3>
                  <p className="mt-2 text-ink-muted">{sector.description}</p>
                  <p className="mt-6 text-sm font-semibold text-ink">Tu landing incluye:</p>
                  <ul className="mt-3 space-y-2.5">
                    {sector.includes.map((item) => (
                      <CheckItem key={item}>{item}</CheckItem>
                    ))}
                  </ul>
                </div>
                <div className="lg:hidden">
                  <PhoneFrame label={`Ejemplo de landing para ${sector.tab.toLowerCase()} vista en un celular`}>
                    <MockSite theme={sector.theme} content={sector.mock} />
                  </PhoneFrame>
                </div>
                <div className="hidden lg:block">
                  <LaptopFrame label={`Ejemplo de landing para ${sector.tab.toLowerCase()} vista en una laptop`}>
                    <MockSite theme={sector.theme} content={sector.mock} layout="wide" />
                  </LaptopFrame>
                </div>
              </div>
            ),
          }))}
        />
      </div>
    </Section>
  );
}
