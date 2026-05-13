# Project Nimdeɛ

A responsive multi-page educational website for Hannah Terkper's STEM education initiative, Project Nimdeɛ — rooted in the Twi word for knowledge and wisdom.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm --filter @workspace/project-nimdee run dev` — run the website locally
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, shadcn/ui, framer-motion, wouter
- Fonts: Fraunces (serif headings) + Plus Jakarta Sans (body)
- API: Express 5 (minimal, health check only)
- No database — this is a static frontend-only site

## Where things live

- `artifacts/project-nimdee/` — main website
- `artifacts/project-nimdee/src/pages/` — Home, About, Resources, Support, Services, Contact
- `artifacts/project-nimdee/src/components/Layout.tsx` — shared Navbar + Footer
- `artifacts/project-nimdee/src/index.css` — theme variables (Fraunces/Plus Jakarta Sans fonts, amber+teal palette)

## Architecture decisions

- Presentation-first React app — no backend API calls needed; contact form is client-only
- All CSS custom properties are properly set with a warm amber/teal educational palette (no placeholder red values remain)
- framer-motion used for scroll-triggered staggered animations on all section cards
- wouter used for client-side routing across 6 pages

## Product

Six-page educational website:
- **Home** — Hero section, 4 feature cards, "Explore Learning Areas" section
- **About** — Hannah's bio, credentials cards, The Vision section
- **Resources** — Filterable resource cards by subject (Math, Science, CS, Robotics)
- **Support the Mission** — Vision statement, future goals cards, support notice
- **Additional Services** — Tutoring, STEM support, study coaching, piano lessons, consulting
- **Contact** — Full form with react-hook-form + zod validation, 7 subject categories

## User preferences

- Website for Project Nimdeɛ — Hannah Terkper's STEM education initiative
- Warm, modern, professional, welcoming, education-focused aesthetic
- Amber and deep teal color palette
- Fraunces serif for headings, Plus Jakarta Sans for body text
- Fully mobile responsive with smooth animations

## Gotchas

- Google Fonts @import must stay as the VERY FIRST line of index.css
- When adding framer-motion ease values in Variants, use `"easeOut" as const` to satisfy TypeScript
- No backend/database needed — contact form is UI-only for now

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
