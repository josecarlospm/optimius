# Optimius visual language — design handoff (provisional)

Observed from live production at https://www.optimius.eu/ (Next.js App Router, locales `pt` / `en` / `es`). Source repo was not available for this write-up; treat as a north-star brief for Design Architect / `Design.md` local-shop presets — not a pixel-perfect token dump.

## Product frame

- **Category**: AI site factory for **local shops / small businesses** (not a learning platform).
- **Geography target (owner decision)**: Iberia — Portugal + Spain. Live copy still says “Portuguese businesses” / “European Portuguese” even on `/en` and `/es` — Iberia messaging is a follow-up once source is in hand.
- **Brand**: **Optimius** is the hero-level signal on the first viewport (wordmark + product name dominate; headline supports, does not overpower).

## Surfaces & structure

- Dark marketing shell with deep zinc/neutral backgrounds and soft vignette / atmospheric depth (not flat single-color).
- Full-bleed / edge-dominant first viewport: brand, one headline, one supporting line, CTA pair, and a live demo composition (business-name → generated site).
- Vine / organic motif used as identity ornament (keep; do not redesign unless owner asks).
- Sections are single-job: How it works → Demo → Features → Results.
- Cards appear mainly where the user interacts (demo form / claim flow), not as generic content tiles in the hero.

## Typography

- Primary: **Geist Sans** (variable).
- Mono accents: **Geist Mono**.
- Display treatment: large, tight tracking on the hero line; supporting copy stays short.

## Color direction (from compiled CSS theme hooks)

Live CSS exposes semantic tokens including `--background`, `--foreground`, `--primary`, plus brand-adjacent `--amber`, `--copper`, `--forge-orange`. Practical palette read from the shipped UI:

- Near-black / zinc-950 shell
- Emerald / mint accents for success and “online” states (`#00bb7f`-family)
- Soft white/10 borders and glass-like panels
- Avoid purple SaaS gradients and cream + terracotta plant defaults (those are PlantCare / anti-slop rules, not Optimius)

## Motion

- Intentional micro-motion on demo / generation steps (progress, checkmarks, site “coming online”).
- Long ambient animation hook present (`aurora`-style) — use sparingly as atmosphere, not noise.

## Stack notes (for factory mapping)

- Next.js (App Router) + `next-intl`-style locale routing (`/` → `pt`, `/en`, `/es`).
- Integrates Stripe + Supabase (CSP on live responses).
- Subdomain demo pattern: `{shop}.optimius.eu`.

## Alias hygiene (ops, not design)

| URL | Role today |
| :--- | :--- |
| https://www.optimius.eu/ | Canonical Optimius (HTTP 200) |
| https://siteforge.vercel.app | **Same Optimius deployment** (etag match) — must not remain the SiteForge factory URL |
| https://siteforge-chi-nine.vercel.app | Canonical SiteForge factory |

## Handoff ask for Design Architect

Fold this into a SiteForge `Design.md` **local-shop / Iberia** preset after the dedicated Optimius repo lands: vine motif, dark zinc shell, Geist, emerald/copper accents, brand-first hero, interactive-demo first viewport.
