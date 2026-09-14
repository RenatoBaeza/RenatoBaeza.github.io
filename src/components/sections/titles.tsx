import { Gamepad2, Trophy } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Panel, Reveal, Section, SectionHeading } from "@/components/hud"
import { shippedTitles } from "@/data/profile"

export function Titles() {
  return (
    <Section id="titles">
      <Reveal>
        <SectionHeading
          index="03 / TROPHY CASE"
          title="Titles Shipped"
          subtitle="Licensed games whose content roadmap ran through my desk at Globant."
          icon={Trophy}
        />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shippedTitles.map((title, i) => (
          <Reveal key={title.title} delay={i * 70}>
            <Panel className="h-full overflow-hidden p-0 clip-hud">
              <div className="relative flex h-28 items-center justify-center border-b border-border/60 bg-gradient-to-br from-primary/15 via-tier-epic/10 to-transparent">
                <Gamepad2 className="size-9 text-primary/80" />
                <span className="absolute right-3 top-3 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-black uppercase leading-tight tracking-[0.04em] text-foreground">
                  {title.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {title.studio}
                </p>
                <Badge variant="epic" className="mt-3 clip-notch">
                  {title.tag}
                </Badge>
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
