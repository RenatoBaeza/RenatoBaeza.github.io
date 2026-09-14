import * as React from "react"

import { TooltipProvider } from "@/components/ui/tooltip"
import { Backdrop } from "@/components/sections/backdrop"
import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Stats } from "@/components/sections/stats"
import { Campaign } from "@/components/sections/campaign"
import { Titles } from "@/components/sections/titles"
import { Loadout } from "@/components/sections/loadout"
import { Records } from "@/components/sections/records"
import { SideQuests } from "@/components/sections/side-quests"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function App() {
  // The browser resolves the URL hash before React has rendered anything, so a
  // shared deep link (/#loadout) would otherwise land at the top of the page.
  React.useEffect(() => {
    const hash = window.location.hash
    if (hash.length < 2) return
    requestAnimationFrame(() => {
      try {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "instant" as ScrollBehavior })
      } catch {
        /* malformed hash, nothing to scroll to */
      }
    })
  }, [])

  return (
    <TooltipProvider>
      <Backdrop />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Campaign />
        <Titles />
        <Loadout />
        <Records />
        <SideQuests />
        <Contact />
      </main>
      <Footer />
    </TooltipProvider>
  )
}
