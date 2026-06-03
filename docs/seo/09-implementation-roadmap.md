# 09 · Phased Implementation Roadmap

*Correct execution order with objectives, tasks, deliverables, dependencies, and success criteria per phase. 2026-06-02.*

Phases are **dependency-ordered**, not calendar-locked — but indicative timing is given. Owners: **Dev**, **Content**, **Marketing/Local**, **SEO** (can be one person wearing hats). Detailed `[ ]` checklists for every phase are in [10-backlog-and-todos.md](10-backlog-and-todos.md).

---

## PHASE 0 — Foundation & measurement (Week 1)
**Objective:** instrument everything and claim local assets *before* building, so all later work is measurable and the local engine starts compounding immediately.

**Tasks**
- Verify/claim Google Business Profile; begin optimisation (categories, hours, services, photos).
- Confirm GA4 working; add **conversion events** for WhatsApp click, `tel:` click, (future) form submit; mark as key events.
- Confirm Google Search Console + Bing Webmaster Tools verified; submit current sitemap.
- Set up a rank-tracking sheet (~40 priority keywords) + citation tracker + review-link/QR.
- Decide final URL slugs (lock them) and confirm AWS access for the CloudFront change.

**Deliverables:** GBP claimed; GA4 lead events live; GSC/Bing verified; tracking sheets; locked slug list.
**Dependencies:** GBP access, GA4 access, AWS access.
**Success criteria:** a lead from search is measurable end-to-end; GBP owner-verified; baseline metrics recorded.

---

## PHASE 1 — Technical substrate (Weeks 1–2)
**Objective:** make clean multi-page URLs work and establish the page template system.

**Tasks**
- Implement **CloudFront sub-directory index rewrite** (audit T2); test with a throwaway `/test-page/`.
- Build the **shared page template** (header, breadcrumb, footer, sticky CTA, schema scaffolding) and the title/meta/H1 pattern (audit T3/T5/T7).
- Build base schema partials: `Service`, `BreadcrumbList`, `FAQPage`, `Organization` (audit T4/T9/T10/T14).
- Establish sitemap-maintenance process (audit T6).

**Deliverables:** working clean-URL pipeline; reusable page template + schema partials; sitemap process.
**Dependencies:** Phase 0 (slugs, AWS).
**Success criteria:** `https://autobahnsolution.com/test-page/` returns 200; a sample page validates in Rich Results Test; sitemap updates on publish.

---

## PHASE 2 — Commercial core (Weeks 2–6)
**Objective:** publish the pages that earn money and establish the specialist moat.

**Tasks**
- Refine homepage (H1/CTAs; swap fake testimonials for real reviews + schema once available).
- Build `/services/` hub.
- Build **P0 pillars:** BMW, Mercedes, Audi brand pages; Diagnostics + ECU coding service pages.
- Build `/faq/`, `/about/` (named team/credentials — EEAT), `/contact/`.
- Add each page to sitemap; wire internal links (hub⇄spoke⇄cross) and repoint homepage/footer anchors to real URLs.

**Deliverables:** 8–10 live, indexed, schema-valid commercial pages with conversion CTAs.
**Dependencies:** Phase 1; review acquisition started (Phase 0/ongoing).
**Success criteria:** all pages indexed in GSC; brand/service pages impression-positive within 4–6 weeks; ≥1 qualified lead attributable to a new page.

---

## PHASE 3 — Local expansion + trust (Weeks 4–10)
**Objective:** convert local intent and lock in the map pack and trust signals.

**Tasks**
- Build location pages: Tejgaon → Gulshan → Banani (then Baridhara/Dhanmondi/Bashundhara/Uttara).
- Add `/services/auto-electrical-repair-dhaka/`, `/hybrid-battery-repair-dhaka/`, `/porsche-`, `/land-rover-`, `/toyota-hybrid-`, `/pre-purchase-inspection-`, `/scheduled-maintenance-`.
- Complete foundational **citations** (Bing/Apple Maps, BD directories) with consistent NAP.
- Drive **reviews** to ≥4/month; respond to all; surface on commercial pages.
- Launch `/blog/` hub + first 4–6 problem/symptom spokes linking up to pillars.

**Deliverables:** 3+ location pages; 7+ more service/brand pages; citation profile; review velocity; blog live with first spokes.
**Dependencies:** Phase 2 pillars (spokes link up to them); locked NAP.
**Success criteria:** map-pack appearances for Tejgaon/Gulshan core terms; review count climbing; first blog spokes indexed and getting impressions.

---

## PHASE 4 — Topical authority & links (Months 3–8)
**Objective:** become *the* recognised European-car authority — for Google and AI engines.

**Tasks**
- Complete remaining brand pages (Jaguar, Volvo, VW, Lexus) and service pages (engine, transmission, suspension, brakes, AC, key programming, fleet, painting, detailing).
- Sustain blog clusters (4–6 posts/month) + ownership/cost guides + 1 linkable asset.
- Begin relevance/PR link building (communities, partners, BD auto/business media).
- Add author entities/bylines; case studies (with consent).
- Quarterly keyword + content-gap + technical review; refresh top pages.

**Deliverables:** full architecture live; mature blog; first earned editorial/partner links; linkable asset published.
**Dependencies:** Phases 2–3; content engine running.
**Success criteria:** brand pillars ranking p1–2 for "[brand] repair Dhaka"; AI engines (ChatGPT/Gemini/Perplexity) cite Autobahn for "European/BMW car repair Dhaka"; links growing.

---

## PHASE 5 — Dominate & compound (Months 9–12+)
**Objective:** category leadership and durable lead growth.

**Tasks**
- Refresh/expand winners; prune/merge underperformers; deepen clusters where data shows demand.
- Scale reviews + GBP activity; expand partnerships and B2B/fleet.
- Consider Bengali/Banglish content layer (+ hreflang) and SSG migration if page count warrants (audit T13/T16).
- CWV optimisation pass if competitive terms need it.

**Deliverables:** market-leading footprint; B2B pipeline; (optional) BN layer + SSG.
**Dependencies:** all prior phases.
**Success criteria:** top-3 organic for most core specialist terms; durable map-pack lead in catchment; 40–70+ qualified leads/month from organic + maps; defensible authority.

---

## Critical path (what blocks what)

```
Phase 0 (GBP + tracking + slugs + AWS)
        │
        ├──► Phase 1 (CloudFront rewrite + templates + schema)  ──► Phase 2 (commercial pages)
        │                                                              │
   (reviews + citations run in parallel from Phase 0/3) ───────────────┤
        │                                                              ▼
        └──────────────────────────────────────────────► Phase 3 (local + blog spokes)
                                                                       │
                                                                       ▼
                                                            Phase 4 (clusters + links)
                                                                       │
                                                                       ▼
                                                            Phase 5 (dominate)
```

**Hard blockers:** CloudFront rewrite (P1.T2) blocks all pages; brand/service pillars block their blog spokes; locked NAP blocks citations; review acquisition should start in Phase 0 because it's the slowest-compounding asset.
