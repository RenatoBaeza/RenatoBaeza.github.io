import * as React from "react"
import { Gauge } from "lucide-react"

import { Progress } from "@/components/ui/progress"
import { Panel, Reveal, SectionHeading, Section } from "@/components/hud"
import { stats } from "@/data/profile"

function barTone(value: number) {
  if (value >= 90) return "bg-tier-legendary"
  if (value >= 85) return "bg-tier-epic"
  return "bg-primary"
}

export function Stats() {
  const [armed, setArmed] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setArmed(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setArmed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.25 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Section id="attributes">
      <Reveal>
        <SectionHeading
          index="01 / ATTRIBUTES"
          title="Stat Sheet"
          subtitle="Where the points went. Self-assessed, evidenced by the campaign log."
          icon={Gauge}
        />
      </Reveal>

      <Reveal delay={80}>
        <Panel className="p-6 sm:p-8 clip-hud">
          <div ref={ref} className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="mb-2 flex items-baseline justify-between gap-4">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.12em] text-foreground">
                    {stat.label}
                  </span>
                  <span className="font-mono text-sm tabular-nums text-primary">
                    {armed ? stat.value : 0}
                  </span>
                </div>
                <Progress
                  value={armed ? stat.value : 0}
                  className="h-2"
                  indicatorClassName={barTone(stat.value)}
                  style={{ transitionDelay: `${i * 90}ms` }}
                />
                <p className="mt-2 text-xs text-muted-foreground">{stat.note}</p>
              </div>
            ))}
          </div>
        </Panel>
      </Reveal>
    </Section>
  )
}
