import { ArrowUpRight, Compass } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Panel,
  Reveal,
  Section,
  SectionHeading,
  tierRing,
} from "@/components/hud"
import { sideQuests } from "@/data/profile"
import { cn } from "@/lib/utils"

export function SideQuests() {
  const [featured, ...rest] = sideQuests

  return (
    <Section id="side-quests">
      <Reveal>
        <SectionHeading
          index="06 / SIDE QUESTS"
          title="Things I Built"
          subtitle="Shipped on my own time, outside the day job."
          icon={Compass}
        />
      </Reveal>

      <Reveal delay={60}>
        <Panel
          className={cn("overflow-hidden p-0 clip-hud", tierRing[featured.tier])}
        >
          <div className="grid gap-0 md:grid-cols-[1fr_auto]">
            <div className="p-6 sm:p-8">
              <Badge variant={featured.tier} className="clip-notch">
                Featured
              </Badge>
              <h3 className="mt-4 font-display text-2xl font-black uppercase tracking-[0.04em] text-foreground sm:text-3xl">
                {featured.name}
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {featured.blurb}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {featured.stack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="clip-notch">
                    {tech}
                  </Badge>
                ))}
              </div>
              {featured.href && (
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-bold uppercase tracking-[0.14em] text-tier-legendary transition-colors hover:text-foreground"
                >
                  Launch <ArrowUpRight className="size-4" />
                </a>
              )}
            </div>
            <div
              aria-hidden
              className="hidden w-56 items-center justify-center border-l border-border/60 bg-gradient-to-br from-tier-legendary/15 to-transparent md:flex"
            >
              <span className="animate-float font-display text-6xl font-black text-tier-legendary/50">
                ÷
              </span>
            </div>
          </div>
        </Panel>
      </Reveal>

      {rest.length > 0 && (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((quest, i) => (
            <Reveal key={quest.name} delay={i * 60}>
              <Panel className="h-full p-5 clip-hud">
                <h3 className="font-display text-sm font-black uppercase tracking-[0.06em] text-foreground">
                  {quest.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {quest.blurb}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {quest.stack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="clip-notch">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Panel>
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  )
}
