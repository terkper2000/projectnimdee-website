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
- Auth: Supabase Auth — email/password + Google OAuth, JWT-based
- API: Express 5 + Supabase JWT verification middleware
- Database: PostgreSQL via Drizzle ORM (`lib/db`)
- Fonts: Fraunces (serif headings) + Plus Jakarta Sans (body)

## Where things live

- `artifacts/project-nimdee/` — main website
- `artifacts/project-nimdee/src/pages/` — all page components
- `artifacts/project-nimdee/src/pages/SignIn.tsx` — custom sign-in page (email + Google)
- `artifacts/project-nimdee/src/pages/SignUp.tsx` — custom sign-up page (email + Google)
- `artifacts/project-nimdee/src/pages/ForgotPassword.tsx` — password reset page
- `artifacts/project-nimdee/src/pages/Dashboard.tsx` — full learning dashboard (8 tabs)
- `artifacts/project-nimdee/src/pages/Privacy.tsx` — privacy notice
- `artifacts/project-nimdee/src/components/Layout.tsx` — shared Navbar (with auth state) + Footer
- `artifacts/project-nimdee/src/contexts/AuthContext.tsx` — AuthProvider + useAuth() hook
- `artifacts/project-nimdee/src/lib/supabase.ts` — Supabase client (uses VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY)
- `artifacts/project-nimdee/src/lib/api.ts` — all API fetch helpers (auto-attaches Bearer token)
- `artifacts/project-nimdee/src/index.css` — theme variables
- `artifacts/api-server/src/routes/` — users.ts, progress.ts, learning.ts
- `artifacts/api-server/src/middlewares/requireAuth.ts` — Supabase JWT verification
- `lib/db/src/schema/` — users, progress, saved_resources, reflections, mistakes, confidence, badges, study_plans

## Architecture decisions

- Supabase Auth handles email/password + Google OAuth on the frontend
- Frontend sends `Authorization: Bearer <supabase-jwt>` with every API request
- API server verifies the JWT using `SUPABASE_JWT_SECRET` via jsonwebtoken
- User ID from Supabase JWT `sub` claim maps to `users.id` in PostgreSQL
- User profile (firstName, lastName) stored in our DB, linked by Supabase user ID
- `useAuth()` from `AuthContext` provides `{ user, session, isLoading, signOut }`
- `AuthUser` type: `{ id, email, firstName, lastName, avatarUrl }` (all nullable except id)
- Google OAuth redirects back to `/dashboard` after sign-in
- Password reset emails redirect to `/reset-password`
- All learning data stored in PostgreSQL — no localStorage
- `@layer theme, base, components, utilities` in index.css
- framer-motion for scroll-triggered staggered animations
- wouter for client-side routing
- TanStack Query v5 for API data fetching (no `onSuccess` callback — use `useEffect` instead)

## Environment Variables Required

### Replit Secrets (set in Replit Secrets panel):
- `VITE_SUPABASE_URL` — your Supabase project URL (e.g. https://xyz.supabase.co)
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key
- `SUPABASE_JWT_SECRET` — JWT secret from Supabase dashboard > Settings > API > JWT Settings

### For production deployment (Netlify/Vercel):
Same three env vars above, plus your existing `DATABASE_URL`.

## Product

Eight-page + dashboard educational website:
- **Home** — Hero, feature cards, learning areas
- **About** — Hannah's bio, credentials, vision
- **Resources** — All curriculum subjects (Math 9, Science 10, Biology 20/30, AI, Life Skills)
- **Support the Mission** — Vision, future goals
- **Services** ("Work With Hannah") — Tutoring, STEM support, study coaching, piano, consulting
- **Contact** — Full form with react-hook-form + zod validation
- **Privacy** — Full privacy notice for student users
- **Dashboard** (auth-gated) — 8 tabs: Overview, Progress tracker, Saved resources, Study plan generator, Learning reflections, Mistake tracker, Confidence tracker, Achievement badges
- **Sign In** — Email/password + Google OAuth, custom branded page
- **Sign Up** — Email/password + Google OAuth, email confirmation flow
- **Forgot Password** — Supabase password reset email flow

## Supabase Setup (one-time)

1. Create project at supabase.com
2. Go to Settings > API — copy URL, anon key, JWT secret
3. Go to Authentication > Providers — enable Google (needs Google OAuth app)
4. Go to Authentication > URL Configuration — add your domain to Redirect URLs
5. Add the 3 env vars to Replit Secrets and your deployment platform

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
- `@supabase/supabase-js` is in devDependencies (static Vite app — all deps go in devDeps)
- Supabase JWT secret must match the project — do not use anon key for JWT verification
- Google OAuth redirect URLs must be whitelisted in Supabase dashboard

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
