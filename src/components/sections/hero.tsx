import { Github, Linkedin, Mail, MapPin, Terminal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Counter, Panel, Reveal } from "@/components/hud"
import { player, quests, shippedTitles, stats } from "@/data/profile"

const level = new Date().getFullYear() - player.careerStart

const vitals = [
  { label: "Years in field", value: player.yearsInField, suffix: "+" },
  { label: "Titles shipped", value: shippedTitles.length, suffix: "" },
  { label: "Campaigns", value: quests.length, suffix: "" },
]

export function Hero() {
  const power = Math.round(
    stats.reduce((sum, s) => sum + s.value, 0) / stats.length
  )

  return (
    <section
      id="top"
      className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36"
    >
      <Reveal>
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <Badge variant="legendary" className="px-3">
            <Terminal /> Player Card
          </Badge>
          <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
            STATUS: OPEN TO NEW CAMPAIGNS
          </span>
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
        {/* --- Identity --- */}
        <Reveal delay={80}>
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.32em] text-primary">
              {player.classLabel}
            </p>
            <h1 className="mt-3 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              <span className="block">Renato</span>
              <span className="block text-primary text-glow">Baeza</span>
            </h1>

            <p className="mt-4 font-display text-base font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-lg">
              {player.title}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {player.bio}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild className="clip-notch">
                <a href={`mailto:${player.email}`}>
                  <Mail /> Send a message
                </a>
              </Button>
              <Button asChild variant="outline" className="clip-notch">
                <a href={player.github} target="_blank" rel="noreferrer">
                  <Github /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline" className="clip-notch">
                <a href={player.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin /> LinkedIn
                </a>
              </Button>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary/70" />
              {player.location}
            </div>
          </div>
        </Reveal>

        {/* --- Level readout --- */}
        <Reveal delay={160}>
          <Panel className="flex h-full flex-col p-6 clip-hud">
            <div className="flex items-baseline justify-between">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                Level
              </span>
              <span className="font-display text-5xl font-black leading-none text-primary text-glow">
                <Counter to={level} />
              </span>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                <span>Power rating</span>
                <span className="text-tier-legendary">{power} / 100</span>
              </div>
              <Progress
                value={power}
                className="h-2.5"
                indicatorClassName="bg-gradient-to-r from-primary via-tier-epic to-tier-legendary"
              />
            </div>

            <dl className="mt-6 space-y-4 border-t border-border/60 pt-5">
              {vitals.map((v) => (
                <div key={v.label} className="flex items-center justify-between">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {v.label}
                  </dt>
                  <dd className="font-display text-2xl font-black text-foreground">
                    <Counter to={v.value} suffix={v.suffix} />
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-auto border-t border-border/60 pt-4 font-mono text-[0.65rem] leading-relaxed text-muted-foreground/80">
              Level counts years since {player.careerStart}. Power rating is the
              mean of the self-assessed attributes below.
            </p>
          </Panel>
        </Reveal>
      </div>
    </section>
  )
}
