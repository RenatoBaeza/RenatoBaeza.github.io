import { Award, GraduationCap, ScrollText } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Panel,
  Reveal,
  Section,
  SectionHeading,
  tierBg,
  tierRing,
  tierText,
} from "@/components/hud"
import { achievements, education } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Records() {
  return (
    <Section id="records">
      <Reveal>
        <SectionHeading
          index="05 / RECORDS"
          title="Training & Achievements"
          subtitle="Where the skill points were earned, and the badges that came with them."
          icon={ScrollText}
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-2">
        {/* --- Education --- */}
        <Reveal delay={60}>
          <Panel className="h-full p-6 clip-hud sm:p-7">
            <div className="mb-6 flex items-center gap-2.5">
              <GraduationCap className="size-4 text-primary" />
              <h3 className="font-display text-sm font-black uppercase tracking-[0.2em] text-foreground">
                Training
              </h3>
            </div>

            <ol className="space-y-5">
              {education.map((entry) => (
                <li
                  key={entry.program}
                  className="border-l-2 border-primary/40 pl-4"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-display text-base font-bold uppercase tracking-[0.05em] text-foreground">
                      {entry.program}
                    </h4>
                    <Badge
                      variant={
                        entry.status === "Candidate" ? "default" : "outline"
                      }
                      className="clip-notch"
                    >
                      {entry.status}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-primary/90">
                    {entry.school}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {entry.focus}
                  </p>
                  <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground/80">
                    {entry.period}
                  </p>
                </li>
              ))}
            </ol>
          </Panel>
        </Reveal>

        {/* --- Achievements --- */}
        <Reveal delay={120}>
          <Panel className="h-full p-6 clip-hud sm:p-7">
            <div className="mb-6 flex items-center gap-2.5">
              <Award className="size-4 text-tier-legendary" />
              <h3 className="font-display text-sm font-black uppercase tracking-[0.2em] text-foreground">
                Achievements Unlocked
              </h3>
            </div>

            <ul className="space-y-3">
              {achievements.map((a) => (
                <li
                  key={a.name}
                  className={cn(
                    "flex items-start gap-4 border bg-background/40 p-4 transition-transform clip-notch hover:-translate-y-0.5",
                    tierRing[a.tier]
                  )}
                >
                  <span
                    className={cn(
                      "flex size-9 shrink-0 items-center justify-center border clip-notch",
                      tierRing[a.tier],
                      tierBg[a.tier],
                      tierText[a.tier]
                    )}
                  >
                    <Award className="size-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                      <h4 className="font-display text-sm font-bold uppercase tracking-[0.06em] text-foreground">
                        {a.name}
                      </h4>
                      <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {a.year}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {a.detail}
                    </p>
                    <p
                      className={cn(
                        "mt-1 font-mono text-[0.65rem] uppercase tracking-[0.18em]",
                        tierText[a.tier]
                      )}
                    >
                      {a.source}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </Reveal>
      </div>
    </Section>
  )
}
