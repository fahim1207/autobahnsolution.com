# 03 · Site Architecture

*How the site should be structured for crawlability, topical authority, and conversion. 2026-06-02.*

---

## 1. Design principles

1. **Flat, descriptive URLs.** `/services/bmw-repair-dhaka/` — not the nested `/services/premium-brands/bmw/` from the source workbook. On a small specialist site, flat URLs concentrate authority, are easier to link to, and read better in SERPs. (The flat scheme is also already drafted in your `sitemap.xml`.)
2. **One page = one intent = one primary keyword.** No page competes with another for the same query (no keyword cannibalisation).
3. **Hub-and-spoke topical clusters.** A pillar/hub page per topic, surrounded by spoke pages (problems, models, sub-services) that link up to it. Depth in a narrow topic is how a small site outranks large generic ones.
4. **Page = folder + `index.html`** (requires the CloudFront rewrite — audit T2). Trailing-slash canonical form.
5. **Every page is a conversion page.** Breadcrumb, H1, intent-matched body, trust block, sticky WhatsApp/Call CTA, related-links block, schema.

---

## 2. Full URL map

> Legend: **[P0]** build first · **[P1]** next · **[P2]** later · **[P3]** opportunistic. `★` = pillar/hub page.

```
/                                             [P0] ★ Home — brand + "European & premium car repair Dhaka"
│
├── /services/                                [P1] ★ Services hub (links to all service & brand pages)
│   │
│   ├── BRAND PAGES (commercial, high-value)
│   ├── /services/bmw-repair-dhaka/           [P0] ★ BMW service & repair
│   ├── /services/mercedes-benz-repair-dhaka/ [P0] ★ Mercedes-Benz service & repair
│   ├── /services/audi-repair-dhaka/          [P0] ★ Audi service & repair
│   ├── /services/porsche-repair-dhaka/       [P1] Porsche service & repair
│   ├── /services/land-rover-repair-dhaka/    [P1] Land Rover / Range Rover
│   ├── /services/jaguar-repair-dhaka/        [P2] Jaguar
│   ├── /services/volvo-repair-dhaka/         [P2] Volvo
│   ├── /services/volkswagen-repair-dhaka/    [P2] Volkswagen
│   ├── /services/lexus-repair-dhaka/         [P2] Lexus (premium Japanese)
│   ├── /services/toyota-hybrid-service-dhaka/[P1] Toyota/Prius hybrid (bridge segment)
│   │
│   ├── SPECIALIST SERVICE PAGES (the technical moat)
│   ├── /services/car-diagnostics-dhaka/      [P0] ★ OEM-grade diagnostics (pillar)
│   ├── /services/ecu-coding-programming-dhaka/ [P0] ★ ECU coding & programming (pillar)
│   ├── /services/auto-electrical-repair-dhaka/ [P1] ★ Electrical fault solving (pillar)
│   ├── /services/hybrid-battery-repair-dhaka/  [P1] ★ Hybrid battery repair/replacement (pillar)
│   ├── /services/key-programming-dhaka/        [P2] Key/immobiliser programming
│   │
│   ├── CORE MECHANICAL SERVICE PAGES
│   ├── /services/engine-repair-dhaka/        [P1] ★ Engine repair & overhaul
│   ├── /services/transmission-repair-dhaka/  [P2] Gearbox/transmission (incl. DSG/ZF)
│   ├── /services/suspension-repair-dhaka/    [P2] Suspension & air suspension
│   ├── /services/brake-repair-dhaka/         [P2] Brakes
│   ├── /services/car-ac-repair-dhaka/        [P2] AC repair (premium framing only)
│   ├── /services/scheduled-maintenance-dhaka/[P1] Servicing/maintenance plans
│   ├── /services/pre-purchase-inspection-dhaka/ [P1] Pre-purchase inspection (high-intent)
│   ├── /services/car-painting-bodywork-dhaka/[P3] Painting & bodywork
│   ├── /services/car-detailing-dhaka/        [P3] Detailing
│   └── /services/fleet-maintenance-dhaka/    [P2] B2B fleet (corporate/embassy)
│
├── LOCATION PAGES (local SEO)
│   ├── /locations/                           [P2] ★ Locations hub
│   ├── /locations/tejgaon/                   [P1] HQ — strongest local page
│   ├── /locations/gulshan/                   [P1] Affluent catchment
│   ├── /locations/banani/                    [P1] Affluent catchment
│   ├── /locations/baridhara/                 [P2] Diplomatic zone (embassies/NGOs)
│   ├── /locations/bashundhara/               [P2]
│   ├── /locations/dhanmondi/                 [P2]
│   └── /locations/uttara/                    [P2]
│
├── KNOWLEDGE / BLOG (topical clusters, EEAT, AI-citability)
│   ├── /blog/                                [P1] ★ Knowledge hub
│   ├── /blog/bmw/        ·  /blog/mercedes/  ·  /blog/audi/   (brand clusters)
│   ├── /blog/diagnostics/  ·  /blog/electrical/  ·  /blog/hybrid/  (service clusters)
│   ├── /blog/maintenance/  (care & seasonal: monsoon, Dhaka traffic, etc.)
│   └── /blog/guides/       (buying/ownership/cost guides)
│
├── TRUST / ENTITY PAGES
│   ├── /about/                               [P1] Company, team, credentials (EEAT)
│   ├── /reviews/                             [P2] Aggregated real reviews + schema
│   ├── /contact/                             [P1] Contact + map + form
│   ├── /privacy/                             [P2] Privacy policy (replace href="#")
│   └── /terms/                               [P2] Terms (replace href="#")
│
└── FAQ
    └── /faq/                                 [P1] ★ Master FAQ (FAQPage schema)
```

> **Note:** the homepage already references some services as `#services` anchors. As each real page ships, repoint the relevant homepage/footer link from the anchor to the new URL.

### Reconciling with the existing sitemap
Your `sitemap.xml` already drafts: `/services/bmw-repair-dhaka`, `/services/mercedes-service-dhaka`, `/services/audi-repair-dhaka`, `/services/ecu-diagnostics`, `/services/electrical-fault-diagnosis`, `/services/hybrid-battery-repair`, `/locations/gulshan|banani|uttara|dhanmondi|baridhara`, `/about`, `/contact`, `/blog/`.
- **Keep** these slugs where possible. **Minor harmonisations** for consistency: use `mercedes-benz-repair-dhaka` (full brand), `car-diagnostics-dhaka` + `ecu-coding-programming-dhaka` (split diagnostics from coding), `auto-electrical-repair-dhaka`. Pick the final slug **once**, before launch, and never change a live URL without a 301.

---

## 3. Page-type templates (what each type must contain)

| Page type | Must include | Primary schema |
|---|---|---|
| **Home** ★ | Brand H1, segment grid (brands + specialist services), trust strip, real reviews, map, CTAs | `AutoRepair` + `WebSite` + `Organization` |
| **Brand page** ★ | "[Brand] repair Dhaka" H1, common faults *for that brand*, services offered, why-specialist, models list, FAQ, reviews, CTA | `Service` + `BreadcrumbList` + `FAQPage` |
| **Specialist service** ★ | What it is, when you need it, our equipment/process, brands covered, FAQ, CTA | `Service` + `BreadcrumbList` + `FAQPage` |
| **Mechanical service** | Symptom→solution, process, parts policy, FAQ, CTA | `Service` + `BreadcrumbList` |
| **Location page** | "[Service] in [Area]" H1, area-specific intro, directions/drive-time, services, local reviews, map | `AutoRepair` (areaServed) + `BreadcrumbList` |
| **Blog/knowledge** | Problem-led H1, expert author byline, body, internal links up to pillar, FAQ, soft CTA | `Article` + `BreadcrumbList` (+`FAQPage` if Q&A) |
| **FAQ hub** | Grouped Q&A (booking, brands, diagnostics, pricing, location) | `FAQPage` |
| **About** | Story, team with names/credentials, equipment, warranty, photos | `AboutPage` + `Organization` |

Full per-page briefs (titles, H1s, headings, word targets, schema snippets) are in [11-page-briefs.md](11-page-briefs.md).

---

## 4. Internal linking model

Internal links are how authority and topical relevance flow. Rules:

1. **Hub ⇄ spoke (bidirectional).**
   - Pillar `/services/bmw-repair-dhaka/` links **down** to every BMW blog spoke (`/blog/bmw/bmw-not-starting-electrical-fault/`, model pages, etc.).
   - Every BMW spoke links **up** to the BMW pillar with descriptive anchor text ("BMW repair in Dhaka").
2. **Sibling links within a cluster** (BMW fault article → BMW service-cost article) — but always also link up to the hub.
3. **Service ⇄ brand cross-links.** `/services/ecu-coding-programming-dhaka/` links to each brand page ("ECU coding for BMW / Mercedes / Audi"), and each brand page links to the ECU, diagnostics, electrical, and hybrid service pages it's relevant to.
4. **Location ⇄ service.** Each location page links to the top services; each service page links to the locations served.
5. **Homepage** links to the services hub, all P0 brand/service pages, the FAQ, About, and the blog hub (so they're ≤2 clicks from home).
6. **Breadcrumbs everywhere** (`Home › Services › BMW Repair Dhaka`) with `BreadcrumbList` schema.
7. **Anchor text:** descriptive and varied, never "click here"; include the target's primary keyword naturally; don't over-optimise (no exact-match every time).
8. **Crawl depth:** keep every important page within **3 clicks** of the homepage. The services hub and blog hub exist primarily to keep depth shallow.

### Topical cluster example (BMW)
```
                 ┌───────────────────────────────────────────┐
 Home  ──────►   │  /services/bmw-repair-dhaka/  (PILLAR)     │ ◄──── /services/ (hub)
                 └───────────────────────────────────────────┘
                    ▲        ▲          ▲           ▲       ▲
                    │        │          │           │       │
   /blog/bmw/bmw-   │  /blog/bmw/  │ /services/ecu- │  /services/   │ /locations/
   common-faults/   │  ecu-coding/ │ coding-...    │  car-         │ gulshan/
                    │              │ (service)     │  diagnostics/ │ (local)
   (spoke)            (spoke)        (cross-link)     (cross-link)    (cross-link)
```
Replicate this pattern for Mercedes, Audi, Land Rover, and for each specialist service (diagnostics, ECU, electrical, hybrid).

---

## 5. Navigation & UX structure

- **Primary nav:** Home · Services (dropdown: brands | specialist services | mechanical) · Locations · Knowledge/Blog · About · Contact. (Today's nav is Home/About/Services/Contact anchors — expand it as pages ship.)
- **Mega-footer:** columns for Brands, Services, Locations, Company — real links, not `#` anchors. This is also a site-wide internal-linking surface.
- **Sticky mobile CTA:** keep the existing WhatsApp/Call FAB on every page (it's good — just ensure it's in the shared template).
- **Breadcrumb bar** under the nav on every non-home page.

---

## 6. Scaling note (build approach)

The site is hand-written static HTML deployed to S3/CloudFront. At ~6–15 pages that's fine with a shared header/footer partial copied per page. **Beyond ~20 pages, or once the blog is active, adopt a static-site generator** (Eleventy or Astro) so header/footer/schema are templated and the sitemap is generated — committing built HTML (or building in CI before the S3 sync, per audit T3). This avoids the maintenance trap of duplicated markup across dozens of `index.html` files. Decide this *before* you pass ~20 pages, not after.
