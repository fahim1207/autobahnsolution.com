# 02 · SEO Opportunity Matrix

*Every opportunity identified across the source docs + live audit, scored and ordered. 2026-06-02.*

Scoring: **Priority** P0 Critical → P3 Low · **Impact** = expected effect on qualified leads · **Effort** S/M/L · **Order** = recommended execution sequence (see [09-implementation-roadmap.md](09-implementation-roadmap.md) for phase grouping).

---

## A. Technical SEO

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| A1 | CloudFront sub-directory index rewrite (clean URLs work) | **P0** | Enables everything | S | AWS access | 1 |
| A2 | Build multi-page architecture (folders + index.html) | **P0** | Enables all rankings | L | A1 | 2 |
| A3 | Per-page title/meta/H1 system | **P0** | High | M | A2 | 3 |
| A4 | Per-page schema (Service, BreadcrumbList, FAQ) | **P1** | High | M | A2 | 4 |
| A5 | Conversion-event tracking in GA4 (WhatsApp/call/form) | **P0** | Measurement-critical | S | GA4 (exists) | 1 (do now) |
| A6 | Sitemap discipline (uncomment/add per page, real lastmod) | **P1** | Med | S | A2 | per-page |
| A7 | Internal-linking implementation | **P1** | High | M | A2 | ongoing |
| A8 | Replace fake testimonials → real reviews + review schema | **P1** | High (trust/EEAT) | M | Reviews (F-track) | 4 |
| A9 | Organization schema + priceRange fix + breadcrumb schema | **P2** | Med | S | A2 | 5 |
| A10 | Image SEO (filenames, alt, dimensions) | **P2** | Low-Med | M | A2 | ongoing |
| A11 | Core Web Vitals (self-host fonts, purge CSS, critical CSS) | **P2** | Med (competitive terms) | M | measure first | later |
| A12 | Privacy/Terms pages (replace href="#") | **P2** | Low (trust) | S | — | 5 |
| A13 | SSG adoption once >20 pages / blog active | **P2** | Maintainability | L | A2 | when triggered |
| A14 | hreflang (only if Bengali pages added) | **P3** | Low | S | BN content | conditional |
| A15 | /llms.txt for AI crawlers | **P3** | Low (future) | S | — | opportunistic |

## B. On-page / content pages (commercial)

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| B1 | Homepage refinement (already strong; tighten H1/CTAs/reviews) | **P1** | Med | S | — | 2 |
| B2 | BMW / Mercedes / Audi brand pillars | **P0** | Very High | M each | A2,A3 | 2–3 |
| B3 | Diagnostics + ECU coding service pillars | **P0** | Very High (moat) | M each | A2,A3 | 2–3 |
| B4 | Electrical + Hybrid battery service pillars | **P1** | High | M each | A2,A3 | 3 |
| B5 | Porsche / Land Rover / Toyota-hybrid brand pages | **P1** | High | M each | A2 | 3–4 |
| B6 | Pre-purchase inspection + scheduled maintenance pages | **P1** | High (high-intent) | M | A2 | 3 |
| B7 | Jaguar/Volvo/VW/Lexus + engine/transmission/suspension/brake/AC pages | **P2** | Med | M | A2 | 4–5 |
| B8 | Fleet maintenance B2B page | **P2** | Med (recurring) | M | A2 | 5 |
| B9 | Services hub page | **P1** | Med (IA/linking) | S | A2 | 2 |
| B10 | FAQ hub page (FAQPage schema) | **P1** | Med (AI + long-tail) | M | A2 | 3 |

## C. Local SEO

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| C1 | Google Business Profile full optimisation | **P0** | Very High | M | GBP access | 1 |
| C2 | Review acquisition engine (real, ongoing ≥4/mo) | **P0** | Very High | M (ongoing) | C1 | 1→ongoing |
| C3 | NAP-consistent citations (BD + global directories) | **P1** | High | M | locked NAP | 2 |
| C4 | Location pages (Tejgaon, Gulshan, Banani first) | **P1** | High | M | A2 | 3 |
| C5 | GBP Posts + Products + Q&A seeding | **P1** | Med | S (ongoing) | C1 | ongoing |
| C6 | Geo-tagged photos/video on GBP | **P2** | Med | S | C1 | ongoing |
| C7 | Bing Places + Apple Maps listing | **P2** | Low-Med | S | C1 | 2 |

## D. Content / authority (blog, EEAT)

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| D1 | Blog hub + cluster structure | **P1** | High (authority/AI) | M | A2 | 3 |
| D2 | Problem/symptom spokes (BMW/Merc/Audi/hybrid) | **P1** | High (AI-citable) | L (ongoing) | D1, pillars | 4→ongoing |
| D3 | Ownership/cost guides | **P2** | Med | M | D1 | 4→ongoing |
| D4 | About page with named team + credentials (EEAT) | **P1** | High (trust) | M | content | 3 |
| D5 | Author bylines + author entities | **P2** | Med (EEAT/AI) | S | D4 | 4 |
| D6 | Bengali/Banglish content layer | **P3** | Med (reach) | L | A14 | later |

## E. Links / authority off-site

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| E1 | Foundational citations/directories (NAP) | **P1** | Med | M | locked NAP | 2 |
| E2 | Brand-club / enthusiast community presence (BD BMW/Merc groups) | **P1** | High (relevance) | M (relationship) | — | 3→ongoing |
| E3 | Local PR / media (business + automotive press BD) | **P2** | Med-High | M | newsworthy hook | 4→ongoing |
| E4 | Partnerships (importers, detailers, insurers, car communities) | **P2** | Med | M | outreach | 4→ongoing |
| E5 | Digital PR / linkable assets (data, guides) | **P3** | Med | L | content depth | later |

## F. Conversion-rate optimisation

| # | Opportunity | Priority | Impact | Effort | Dependencies | Order |
|---|---|---|---|---|---|---|
| F1 | Sticky WhatsApp/Call CTA on every page (template) | **P0** | High | S | A2 | 2 |
| F2 | Lead-event instrumentation (= A5) | **P0** | Measurement | S | GA4 | 1 |
| F3 | Real reviews/trust blocks on commercial pages | **P1** | High | M | C2 | 3 |
| F4 | "What happens next" + diagnostic-booking flow | **P1** | Med-High | M | A2 | 3 |
| F5 | Web-to-WhatsApp prefilled messages per service | **P2** | Med | S | A2 | 3 |
| F6 | Simple booking/lead form + form-submit event | **P2** | Med | M | backend/Formspree | 4 |

---

## Top-10 "do these first" (cross-category, by ROI)

1. **C1** GBP full optimisation — fastest path to leads for a local specialist.
2. **A5/F2** Conversion tracking — so every later effort is measurable.
3. **A1** CloudFront rewrite — unblocks all pages.
4. **C2** Review engine — compounding local + trust advantage.
5. **B2/B3** BMW/Mercedes/Audi + Diagnostics/ECU pillars — core revenue + moat.
6. **A2/A3** Multi-page build + on-page system — the substrate.
7. **B10/A4** FAQ hub + schema — AI-citability + long-tail.
8. **C4** Tejgaon/Gulshan/Banani location pages — map-pack reinforcement.
9. **E1/C3** Citations — local authority foundation.
10. **D2** First problem/symptom spokes — funnel + AI citations.
