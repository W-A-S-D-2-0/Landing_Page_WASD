import { UserRound } from "lucide-react";
import { team } from "@/data/content";
import { revealDelay } from "@/lib/cn";
import { Section } from "@/components/ui/Section";

export function Team() {
  return (
    <Section id="equipo" title={team.title} intro={team.text}>
      <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {team.members.map((member, index) => (
          <li
            key={index}
            data-reveal
            style={revealDelay(index * 60)}
            className="rounded-card border border-line bg-surface p-5 text-center sm:p-6"
          >
            {/* Reemplazar por <Image> con la foto real ([FOTO]). */}
            <div
              role="img"
              aria-label={`Foto de ${member.name}`}
              className="mx-auto flex aspect-square w-full max-w-36 items-center justify-center rounded-full bg-surface-alt text-ink-muted"
            >
              <UserRound aria-hidden="true" className="h-10 w-10" strokeWidth={1.25} />
            </div>
            <h3 className="heading-3 mt-4 text-base sm:text-lg">{member.name}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
