# 17 — Japanese Car SEO Expansion (Toyota · Honda · Mazda · Hybrid)

**Added:** 2026-06-07
**Status:** Phase 1 shipped (4 static pages live).
**Owner:** Dev + Content

---

## Why this exists

The original strategy (see [01-master-strategy.md](01-master-strategy.md)) deliberately **down-weighted** generic high-volume Japanese keywords because they attract price-shoppers and dilute the premium-specialist positioning.

This expansion does **not** reverse that decision — it applies the *same specialist lens* to Japanese vehicles. The commercial wedge for Toyota/Honda/Mazda in Dhaka is **hybrids and electronics**: Prius/Aqua/Harrier hybrid batteries, Honda i-DCD hybrids, SkyActiv/i-stop diagnostics, hybrid AC, and electrical fault-solving — exactly the high-skill, low-competition work generic garages can't do well. We chase *specialist Japanese repair + hybrid* intent, not "cheap Toyota servicing".

This keeps us consistent with the premium, technical, trustworthy, Dhaka-focused brand voice while opening a large, underserved hybrid-owner audience.

## Target search intent (Bangladesh)

Hybrid service · Prius service · Aqua service · Harrier service · Corolla service · Axio service · Fielder service · Vezel service · Civic service · Grace service · CX-5 service · Mazda 3 service · engine diagnostics · hybrid battery diagnostics · AC repair · suspension work · transmission service · electrical troubleshooting.

## Pages shipped (Phase 1)

All follow the existing European brand-hub pattern (`services/bmw-repair-dhaka/`): single `<h1>`, logical H2/H3, brand overview, models serviced, common problems, diagnostics + electrical, hybrid coverage, AC/suspension/transmission/engine, why-choose, CTA, FAQ accordion, breadcrumbs, sidebar CTAs (WhatsApp / Call / Directions) and a real Google review. Schema on each page mirrors the European pages: `Service` + `BreadcrumbList` + `FAQPage` (no self-serving review schema — not permitted for LocalBusiness).

| URL | Primary focus |
|-----|---------------|
| `/services/toyota-service-dhaka/` | Toyota + Toyota hybrids — Prius, Aqua, Harrier, Corolla, Axio, Fielder, C-HR, Noah/Voxy, Land Cruiser |
| `/services/honda-service-dhaka/` | Honda + i-DCD hybrids — Vezel, Grace, Civic, Fit, City, Accord, CR-V; CVT/dual-clutch |
| `/services/mazda-service-dhaka/` | Mazda — CX-5, Mazda 3 (Axela), Mazda 6 (Atenza), Demio, CX-3; SkyActiv, i-stop |
| `/services/hybrid-car-service-dhaka/` | Cross-brand hybrid hub — battery diagnostics, inverter/cooling, hybrid AC, system scans |

## Internal linking implemented

- **Hub → spokes:** `services/index.html` gained a "Japanese & hybrid specialists" card section, a "Japanese & hybrid" column in *Specific services in detail*, and 4 new entries in its `ItemList` schema.
- **Homepage footer:** added Toyota / Honda / Hybrid Car Service links.
- **Cross-links between new pages:** each Japanese page links to the others, to the hybrid hub, and to existing `/hybrid-battery-repair-dhaka/`, `/prius-hybrid-battery-repair-dhaka/`, `/car-ac-repair-dhaka/` and `/services/car-diagnostics-dhaka/`.
- **Reciprocal links:** the existing hybrid spokes (`hybrid-battery-repair-dhaka`, `prius-hybrid-battery-repair-dhaka`) now link out to the new hubs.
- **Discovery:** all 4 URLs added to `sitemap.xml` (priority 0.9) and `llms.txt` (AI-search index).

## Notes / guardrails

- These are **static frontend pages only** — no backend, no forms, no API, no scraping. Reviews used are the existing real Google reviews.
- The European pages were **not rewritten** — only internal links were added/improved.
- Keep the tone premium and technical. Do **not** add "cheapest in Dhaka" / price-war language.

## Future (Phase 2 — backlog, not yet built)

- High-intent spokes mirroring the European set, e.g. `/toyota-hybrid-battery-replacement-dhaka/`, `/honda-vezel-hybrid-repair-dhaka/`, `/mazda-skyactiv-diagnostics-dhaka/`.
- A Nissan/Lexus hub if demand validates.
- A hybrid-battery case study (real workflow) to strengthen EEAT, like the existing Prius P0AA6 study.
- Validate the keyword list in Search Console / Keyword Planner before scaling.
