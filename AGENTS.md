# AGENTS.md

## Stack

TanStack Start (file-based routing) + React 19 + Vite 8 + Tailwind CSS 4 + Nitro server adapter. TypeScript strict mode.

## Package manager

Use **pnpm** (`pnpm-lock.yaml` + `pnpm-workspace.yaml` are the source of truth), even though `package-lock.json` and `.cta.json` reference npm. Don't run `npm install`, it will create a stale/conflicting lockfile.

## Commands

- `pnpm dev` — dev server on port 3000
- `pnpm build` — production build (Nitro output)
- `pnpm generate-routes` — regenerate `src/routeTree.gen.ts` (`tsr generate`); do this after adding/removing files in `src/routes/`. This file is git-ignored and auto-generated — never hand-edit it.
- `pnpm lint` — eslint
- `pnpm format` — `prettier --write .` then `eslint --fix`
- `pnpm check` — `prettier --check .` (no separate typecheck script; use `npx tsc --noEmit`)
- No test suite exists in this repo.

## Routing

File-based routes live in `src/routes/`. `src/routes/_sidebar_layout.tsx` is a pathless layout route wrapping pages like `about.tsx` and `projects.tsx` under `_sidebar_layout/`. Adding/removing route files requires regenerating `routeTree.gen.ts` (see above) — the dev server does this automatically, but a manual `pnpm generate-routes` may be needed if it looks stale.

## Env

`GITHUB_TOKEN` (used in `src/lib/github.ts` via Octokit) must be set in `.env` (git-ignored, not committed). Without it, GitHub API calls used by project/user-detail components will fail or rate-limit.

## Deploy (Netlify)

`pnpm build` with no preset set produces the default `node-server` Nitro preset, outputting to `.output/` — this does NOT match what Netlify expects and fails with "Deploy directory 'dist/client' does not exist". `netlify.toml` forces `NITRO_PRESET=netlify`, which makes Nitro output static assets to `dist/` and the function to `.netlify/functions-internal/` (the layout Netlify's Frameworks API auto-detects). If deploy settings ever get reset/overridden in the Netlify UI, publish dir must stay `dist` and `NITRO_PRESET=netlify` must stay set — don't let Netlify's zero-config auto-detection override this.

## Conventions

- Path alias `@/*` maps to `./src/*` (see `tsconfig.json` and `package.json#imports`).
- ESLint config extends `@tanstack/eslint-config` with local overrides: `import/no-cycle` off, `@typescript-eslint/array-type` off (so `Array<T>` is preferred over `T[]`), `import/order`/`sort-imports` are warnings only.
- Prettier: semicolons on, single quotes, trailing commas everywhere, printWidth 100.
- JSON imports are typed (`resolveJsonModule: true`) — e.g. `src/data/projects.json` is imported directly and cast to a typed shape in the route file rather than fetched at runtime.
