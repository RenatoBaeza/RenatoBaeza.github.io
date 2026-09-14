# renatobaeza.github.io

Personal career site for Renato Baeza, built as a game-style HUD: player card,
stat sheet, campaign log, loadout and trophy case. Content is transcribed from
`CV_Renato_Baeza_ENG.pdf`.

## Stack

- **React 19** + **TypeScript**
- **Vite** for build and dev server
- **Tailwind CSS v4** with a dark HUD palette and loot-rarity tiers
- **shadcn/ui** (new-york style) components in `src/components/ui`

## Local development

```bash
npm install
npm run dev      # dev server on :5173
npm run build    # type check, then production build into dist/
npm run preview  # serve the production build
```

## Editing the content

Everything on the page is driven by `src/data/profile.ts`: the player block,
attributes, campaign entries, shipped titles, skill groups, education,
achievements and side quests. Change the data there, no component edits needed.

Rarity tiers (`common` / `rare` / `epic` / `legendary`) drive the accent colour
on badges, panel borders and skill chips.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`.

One-time setup: in **Settings → Pages**, set **Source** to **GitHub Actions**.

## Structure

```
src/
  components/
    ui/         shadcn/ui primitives
    sections/   one file per page section
    hud.tsx     shared HUD primitives (panels, reveals, tier maps)
  data/
    profile.ts  all CV content
  index.css     Tailwind theme, HUD tokens, keyframes
public/
  assets/img/   bootcamp project screenshots
```
