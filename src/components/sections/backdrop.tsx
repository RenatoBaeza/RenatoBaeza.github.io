/** Ambient layer: grid floor, drifting scanline, vignette. Purely decorative. */
export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="grid-floor absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_78%)]" />
      <div className="absolute -left-40 top-[-10rem] size-[32rem] rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 top-[35%] size-[30rem] rounded-full bg-tier-epic/10 blur-[130px]" />
      <div className="absolute bottom-[-12rem] left-1/3 size-[28rem] rounded-full bg-tier-legendary/[0.07] blur-[130px]" />
      <div className="absolute inset-x-0 top-0 h-24 animate-scan bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,var(--background)_100%)]" />
    </div>
  )
}
