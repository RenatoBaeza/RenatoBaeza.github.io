import { Github, Linkedin, Mail, MapPin, Phone, Radio } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Panel, Reveal, Section, SectionHeading } from "@/components/hud"
import { player } from "@/data/profile"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: player.email,
    href: `mailto:${player.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: player.phone,
    href: `tel:${player.phone.replace(/[^\d+]/g, "")}`,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "RenatoBaeza",
    href: player.github,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/renatobaeza",
    href: player.linkedin,
  },
]

export function Contact() {
  return (
    <Section id="contact" className="pb-8">
      <Reveal>
        <SectionHeading
          index="07 / COMMS"
          title="Open Channel"
          subtitle="Looking for a product and analytics lead, or want to compare notes on AI tooling? Ping me."
          icon={Radio}
        />
      </Reveal>

      <Reveal delay={60}>
        <Panel className="p-6 clip-hud sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer" : undefined}
                className="group/ch flex items-start gap-3 border border-border/60 bg-background/40 p-4 transition-all clip-notch hover:-translate-y-0.5 hover:border-primary/50"
              >
                <span className="flex size-9 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary clip-notch">
                  <channel.icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm font-semibold text-foreground group-hover/ch:text-primary">
                    {channel.value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <Separator className="my-7" />

          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary/70" />
              Based in {player.location}
            </div>
            <Button asChild size="lg" className="w-full clip-notch sm:w-auto">
              <a href={`mailto:${player.email}`}>
                <Mail /> Start a conversation
              </a>
            </Button>
          </div>
        </Panel>
      </Reveal>
    </Section>
  )
}
