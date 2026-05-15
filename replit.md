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
- Auth: Replit Auth (OpenID Connect / PKCE) — no keys needed, works automatically
- API: Express 5 + Replit Auth session middleware
- Database: PostgreSQL via Drizzle ORM (`lib/db`)
- Fonts: Fraunces (serif headings) + Plus Jakarta Sans (body)

## Where things live

- `artifacts/project-nimdee/` — main website
- `artifacts/project-nimdee/src/pages/` — all page components
- `artifacts/project-nimdee/src/pages/Dashboard.tsx` — full learning dashboard (8 tabs)
- `artifacts/project-nimdee/src/pages/Privacy.tsx` — privacy notice
- `artifacts/project-nimdee/src/components/Layout.tsx` — shared Navbar (with auth state) + Footer
- `artifacts/project-nimdee/src/lib/api.ts` — all API fetch helpers
- `artifacts/project-nimdee/src/index.css` — theme variables
- `lib/replit-auth-web/` — shared `useAuth()` hook (user, isAuthenticated, login, logout)
- `artifacts/api-server/src/routes/` — auth.ts, users.ts, progress.ts, learning.ts
- `lib/db/src/schema/` — users, progress, saved_resources, reflections, mistakes, confidence, badges, study_plans

## Architecture decisions

- Replit Auth via OIDC/PKCE — clicking Sign in redirects to `/api/login`, Replit handles the login UI, callback sets a session cookie, then redirects back
- `useAuth()` from `@workspace/replit-auth-web` used in Layout and Dashboard — provides `user`, `isAuthenticated`, `isLoading`, `login()`, `logout()`
- Session stored in PostgreSQL `sessions` table; user upserted on every login
- `authMiddleware` runs on every API request and loads session from cookie or Bearer token
- `requireAuth` middleware on all API routes uses `req.isAuthenticated()` type guard
- `req.user.id` used throughout routes — no Clerk IDs
- All learning data stored in PostgreSQL — no localStorage
- `@layer theme, base, components, utilities` in index.css
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

## Auth setup (Replit Auth)

No setup needed — Replit Auth works automatically using `REPL_ID` from the environment.

- **Sign in**: clicking "Sign in" in the navbar calls `GET /api/login` → Replit OIDC → `GET /api/callback` → session cookie → redirect back
- **Dashboard guard**: `DashboardRoute` in App.tsx calls `login()` if not authenticated (full-page redirect — no modal)
- **Sign out**: calls `GET /api/logout` → clears session → Replit OIDC end-session → redirect to homepage
- **Dev vs prod**: Replit Auth uses separate user stores for development and production

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
- `lib/replit-auth-web` is a composite lib — its tsconfig.json must have `composite: true`
- `import.meta.env` is NOT available in composite libs — use `window.location` instead
- Do not re-export `usersTable` or `User` from `lib/db/src/schema/auth.ts` — they live in `users.ts`
- `openid-client` v6 uses functional API — no `new Issuer()` (that's v5)

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
