import { UserRound } from "lucide-react";
import Image from "next/image";
import { team } from "@/data/content";
import { isPlaceholder } from "@/data/site";
import { revealDelay } from "@/lib/cn";
import { Section } from "@/components/ui/Section";
import { FounderVideo } from "./FounderVideo";

export function Team() {
  return (
    <Section id="equipo" title={team.title} intro={team.text}>
      <FounderVideo />
      <ul className="grid gap-4 sm:grid-cols-3 lg:gap-5">
        {team.members.map((member, index) => (
          <li
            key={member.name}
            data-reveal
            style={revealDelay(index * 60)}
            className="rounded-card border border-line bg-surface p-5 text-center sm:p-6"
          >
            {isPlaceholder(member.photo) ? (
              <div
                role="img"
                aria-label={`Foto de ${member.name}`}
                className="mx-auto flex aspect-square w-full max-w-36 items-center justify-center rounded-full bg-surface-alt text-ink-muted"
              >
                <UserRound aria-hidden="true" className="h-10 w-10" strokeWidth={1.25} />
              </div>
            ) : (
              <Image
                src={member.photo}
                alt={`Foto de ${member.name}`}
                width={288}
                height={288}
                sizes="144px"
                className="mx-auto aspect-square w-full max-w-36 rounded-full object-cover"
              />
            )}
            <h3 className="heading-3 mt-4 text-base sm:text-lg">{member.name}</h3>
            <p className="mt-0.5 text-sm text-ink-muted">{member.role}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
