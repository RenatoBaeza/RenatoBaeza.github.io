import { Boxes } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  Panel,
  Reveal,
  Section,
  SectionHeading,
  tierRing,
  tierText,
} from "@/components/hud"
import { skillGroups, type Tier } from "@/data/profile"
import { cn } from "@/lib/utils"

const tierLabel: Record<Tier, string> = {
  common: "Common",
  rare: "Rare",
  epic: "Epic",
  legendary: "Legendary",
}

export function Loadout() {
  return (
    <Section id="loadout">
      <Reveal>
        <SectionHeading
          index="04 / INVENTORY"
          title="Loadout"
          subtitle="The kit, sorted by slot. Rarity reflects how deep the reps go, not how fashionable the tool is."
          icon={Boxes}
        />
      </Reveal>

      <Reveal delay={80}>
        <Tabs defaultValue={skillGroups[0].id}>
          <TabsList className="w-full flex-wrap sm:w-auto clip-notch">
            {skillGroups.map((group) => (
              <TabsTrigger key={group.id} value={group.id}>
                {group.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillGroups.map((group) => (
            <TabsContent key={group.id} value={group.id}>
              <Panel className="p-6 clip-hud sm:p-8">
                <p className="mb-6 text-sm text-muted-foreground">
                  {group.blurb}
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.skills.map((skill) => (
                    <li key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div
                            className={cn(
                              "flex cursor-default items-center justify-between gap-3 border bg-background/50 px-4 py-3 transition-all clip-notch",
                              "hover:-translate-y-0.5 hover:bg-background/80",
                              tierRing[skill.tier]
                            )}
                          >
                            <span className="font-display text-sm font-bold uppercase tracking-[0.06em] text-foreground">
                              {skill.name}
                            </span>
                            <span
                              aria-hidden
                              className={cn(
                                "size-2 rotate-45 border",
                                tierRing[skill.tier],
                                tierText[skill.tier],
                                "bg-current"
                              )}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span className={tierText[skill.tier]}>
                            {tierLabel[skill.tier]}
                          </span>{" "}
                          · {group.label}
                        </TooltipContent>
                      </Tooltip>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border/50 pt-5">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    Legend
                  </span>
                  {(["legendary", "epic", "rare"] as Tier[]).map((tier) => (
                    <Badge key={tier} variant={tier} className="clip-notch">
                      {tierLabel[tier]}
                    </Badge>
                  ))}
                </div>
              </Panel>
            </TabsContent>
          ))}
        </Tabs>
      </Reveal>
    </Section>
  )
}
