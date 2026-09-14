import * as React from "react"

import { cn } from "@/lib/utils"
import type { Tier } from "@/data/profile"

export const tierRing: Record<Tier, string> = {
  common: "border-tier-common/35",
  rare: "border-tier-rare/45",
  epic: "border-tier-epic/45",
  legendary: "border-tier-legendary/55",
}

export const tierText: Record<Tier, string> = {
  common: "text-tier-common",
  rare: "text-tier-rare",
  epic: "text-tier-epic",
  legendary: "text-tier-legendary",
}

/* Written out in full so Tailwind's scanner can see each class. */
export const tierGlow: Record<Tier, string> = {
  common: "hover:shadow-[0_0_28px_-12px_var(--color-tier-common)]",
  rare: "hover:shadow-[0_0_28px_-12px_var(--color-tier-rare)]",
  epic: "hover:shadow-[0_0_30px_-10px_var(--color-tier-epic)]",
  legendary: "hover:shadow-[0_0_36px_-8px_var(--color-tier-legendary)]",
}

export const tierBg: Record<Tier, string> = {
  common: "bg-tier-common/10",
  rare: "bg-tier-rare/10",
  epic: "bg-tier-epic/10",
  legendary: "bg-tier-legendary/10",
}

/** Four corner ticks, the cheapest way to make a box read as a HUD panel. */
export function Corners({ className }: { className?: string }) {
  const base =
    "pointer-events-none absolute size-2.5 border-primary/50 transition-colors"
  return (
    <div aria-hidden className={cn("absolute inset-0", className)}>
      <span className={cn(base, "left-0 top-0 border-l border-t")} />
      <span className={cn(base, "right-0 top-0 border-r border-t")} />
      <span className={cn(base, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(base, "bottom-0 right-0 border-b border-r")} />
    </div>
  )
}

export function Panel({
  className,
  children,
  corners = true,
  ...props
}: React.ComponentProps<"div"> & { corners?: boolean }) {
  return (
    <div
      className={cn(
        "group relative border border-border/70 bg-card/70 backdrop-blur-sm",
        "transition-colors duration-300 hover:border-primary/45",
        className
      )}
      {...props}
    >
      {corners && <Corners />}
      {children}
    </div>
  )
}

export function SectionHeading({
  index,
  title,
  subtitle,
  icon: Icon,
}: {
  index: string
  title: string
  subtitle: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <header className="mb-8 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs tracking-[0.3em] text-primary/70">
          {index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      <div className="flex items-start gap-3">
        <span className="mt-1 flex size-9 shrink-0 items-center justify-center border border-primary/40 bg-primary/10 text-primary clip-notch">
          <Icon className="size-4" />
        </span>
        <div>
          <h2 className="font-display text-2xl font-black uppercase tracking-[0.08em] text-foreground sm:text-3xl">
            {title}
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        </div>
      </div>
    </header>
  )
}

export function Section({
  id,
  className,
  children,
}: {
  id: string
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20",
        className
      )}
    >
      {children}
    </section>
  )
}

/** Reveals children once they scroll into view. No-ops without IntersectionObserver. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        shown ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: shown ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  )
}

/** Counts up to `to` when mounted. Used for the headline numbers. */
export function Counter({
  to,
  suffix = "",
  duration = 1200,
}: {
  to: number
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = React.useState(0)

  React.useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setValue(to)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(to * eased * 10) / 10)
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [to, duration])

  return (
    <>
      {Number.isInteger(to) ? Math.round(value) : value.toFixed(1)}
      {suffix}
    </>
  )
}
