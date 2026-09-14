import { player } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} {player.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/70">
          React · Tailwind CSS · shadcn/ui
        </p>
      </div>
    </footer>
  )
}
