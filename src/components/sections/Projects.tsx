import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/content";
import { mockFor } from "@/data/sectors";
import { revealDelay } from "@/lib/cn";
import { ButtonLink } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { BrowserFrame } from "@/components/mockups/Devices";
import { MockSite } from "@/components/mockups/MockSite";

export function Projects() {
  return (
    <Section id="proyectos" title={projects.title} intro={projects.intro}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project, index) => (
          <li key={project.label} data-reveal style={revealDelay(index * 60)}>
            <Link
              href={`/demo/${project.slug}/`}
              className="lift group block h-full rounded-card border border-line bg-surface p-4 hover:border-line-strong"
            >
              <BrowserFrame>
                <MockSite theme={project.sector} content={mockFor(project.sector)} layout="wide" />
              </BrowserFrame>
              <div className="px-1 pb-1 pt-5">
                <h3 className="heading-3">
                  <span className="mr-2 inline-block rounded-md bg-accent-soft px-2 py-0.5 align-[0.1em] text-xs font-semibold uppercase tracking-wide text-accent-ink">
                    Demo
                  </span>
                  {project.label.replace(/^Demo · /, "")}
                </h3>
                <p className="mt-2 text-[0.9375rem] text-ink-muted">{project.text}</p>
                <p className="mt-4 inline-flex items-center gap-1 text-[0.9375rem] font-semibold text-primary">
                  {projects.openDemo}
                  <ArrowUpRight
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div data-reveal className="mt-10 flex justify-center">
        <ButtonLink href="#diagnostico" variant="secondary" size="lg" track={{ event: "demo_cta_click", label: "proyectos" }}>
          {projects.cta}
        </ButtonLink>
      </div>
    </Section>
  );
}
