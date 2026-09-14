import { Swords, Target } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Panel,
  Reveal,
  Section,
  SectionHeading,
  tierGlow,
  tierRing,
  tierText,
} from "@/components/hud"
import { quests } from "@/data/profile"
import { cn } from "@/lib/utils"

export function Campaign() {
  return (
    <Section id="campaign">
      <Reveal>
        <SectionHeading
          index="02 / CAMPAIGN LOG"
          title="Experience"
          subtitle="Ten years of runs, newest first. Each entry lists the objectives that were actually on the board."
          icon={Swords}
        />
      </Reveal>

      <ol className="relative space-y-5 sm:pl-10">
        <span
          aria-hidden
          className="absolute left-[calc(1.25rem-0.5px)] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-primary/50 via-border to-transparent sm:block"
        />

        {quests.map((quest, i) => (
          <li key={`${quest.org}-${quest.role}`} className="relative">
            <span
              aria-hidden
              className={cn(
                "absolute -left-[1.625rem] top-7 hidden size-3 rotate-45 border-2 bg-background sm:block",
                tierRing[quest.tier]
              )}
            />
            <Reveal delay={i * 70}>
              <Panel
                className={cn(
                  "p-6 clip-hud sm:p-7",
                  tierRing[quest.tier],
                  tierGlow[quest.tier]
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-display text-xl font-black uppercase tracking-[0.06em] text-foreground sm:text-2xl">
                        {quest.org}
                      </h3>
                      <Badge variant={quest.tier} className="clip-notch">
                        {quest.tier}
                      </Badge>
                      {i === 0 && (
                        <Badge variant="outline" className="clip-notch">
                          Most recent
                        </Badge>
                      )}
                    </div>
                    <p
                      className={cn(
                        "mt-1.5 font-display text-sm font-bold uppercase tracking-[0.14em]",
                        tierText[quest.tier]
                      )}
                    >
                      {quest.role}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="font-mono text-sm text-foreground">
                      {quest.period}
                    </p>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {quest.duration}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {quest.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {quest.objectives.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-2.5 text-sm text-foreground/85"
                    >
                      <Target className="mt-0.5 size-3.5 shrink-0 text-primary/70" />
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-border/50 pt-4">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Loot
                  </span>
                  {quest.loot.map((item) => (
                    <Badge key={item} variant="secondary" className="clip-notch">
                      {item}
                    </Badge>
                  ))}
                </div>
              </Panel>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
