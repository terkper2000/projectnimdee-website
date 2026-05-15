# Project Nimdeɛ

A responsive multi-page educational website for Hannah Terkper's STEM education initiative, Project Nimdeɛ — rooted in the Twi word for knowledge and wisdom.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm --filter @workspace/project-nimdee run dev` — run the website locally
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, shadcn/ui, framer-motion, wouter
- Auth: Clerk (`@clerk/react` v6) — requires `VITE_CLERK_PUBLISHABLE_KEY` env var
- API: Express 5 + Clerk middleware (`@clerk/express`)
- Database: PostgreSQL via Drizzle ORM (`lib/db`)
- Fonts: Fraunces (serif headings) + Plus Jakarta Sans (body)

## Where things live

- `artifacts/project-nimdee/` — main website
- `artifacts/project-nimdee/src/pages/` — all page components
- `artifacts/project-nimdee/src/pages/Dashboard.tsx` — full learning dashboard (8 tabs)
- `artifacts/project-nimdee/src/pages/Privacy.tsx` — privacy notice
- `artifacts/project-nimdee/src/components/Layout.tsx` — shared Navbar (with auth state) + Footer
- `artifacts/project-nimdee/src/lib/api.ts` — all API fetch helpers
- `artifacts/project-nimdee/src/index.css` — theme variables + Clerk CSS layer
- `artifacts/api-server/src/routes/` — users.ts, progress.ts, learning.ts
- `lib/db/src/schema/` — users, progress, saved_resources, reflections, mistakes, confidence, badges, study_plans

## Architecture decisions

- Clerk auth wraps the entire app via `ClerkProvider` with a placeholder key fallback (so the site renders without a key configured)
- Clerk hooks (`useUser`, `useClerk`) are used directly — no `Show` component in Layout; conditional rendering via `isSignedIn`
- All learning data stored in PostgreSQL — no localStorage
- `requireAuth` middleware on all API routes uses Clerk `getAuth(req)`
- `@layer theme, base, clerk, components, utilities` in index.css for Clerk CSS scoping
- framer-motion for scroll-triggered staggered animations
- wouter for client-side routing
- TanStack Query v5 for API data fetching (no `onSuccess` callback — use `useEffect` instead)

## Product

Eight-page + dashboard educational website:
- **Home** — Hero, feature cards, learning areas
- **About** — Hannah's bio, credentials, vision
- **Resources** — All curriculum subjects (Math 9, Science 10, Biology 20/30, AI, Life Skills)
- **Support the Mission** — Vision, future goals
- **Services** ("Work With Hannah") — Tutoring, STEM support, study coaching, piano, consulting — full redesign with split card layout, process section, Hannah quote
- **Contact** — Full form with react-hook-form + zod validation
- **Privacy** — Full privacy notice for student users
- **Dashboard** (auth-gated) — 8 tabs: Overview, Progress tracker, Saved resources, Study plan generator, Learning reflections, Mistake tracker, Confidence tracker, Achievement badges

## Auth setup (Clerk)

1. Click the lock icon (Auth pane) in the Replit editor to activate Clerk
2. Keys auto-populate as `VITE_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY`
3. The site is already fully wired — sign-in/sign-up routes, navbar auth state, dashboard guard all work immediately once keys are live

## User preferences

- Website for Project Nimdeɛ — Hannah Terkper's STEM education initiative
- Warm, modern, professional, welcoming, education-focused aesthetic
- Amber and deep teal color palette
- Fraunces serif for headings, Plus Jakarta Sans for body text
- Fully mobile responsive with smooth animations

## Gotchas

- Google Fonts @import must stay as the VERY FIRST line of index.css (line 0, before `@layer`)
- When adding framer-motion ease values in Variants, use `"easeOut" as const` to satisfy TypeScript
- TanStack Query v5: no `onSuccess` option on `useQuery` — use `useEffect` watching the data instead
- Clerk React v6: use `Show` component (not `SignedIn`/`SignedOut`), `useUser`, `useClerk` hooks — no `publishableKeyFromHost`
- Clerk hooks require `ClerkProvider` in the tree — always wrap before using hooks

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
