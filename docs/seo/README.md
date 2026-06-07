# Autobahn Solutions — SEO Execution System

**Owner:** Autobahn Solutions Ltd · `autobahnsolution.com`
**Goal:** Become the dominant European & premium-vehicle service brand in Bangladesh search (Google, Bing, and AI search — ChatGPT/Gemini/Perplexity).
**Built:** 2026-06-02 · Consolidated from the `SEO Game Plan` source folder (CTO game plan `.md`, strategy `.docx`, keyword workbook `.xlsx`) + a live audit of the production site.

> **Note on these docs:** They live in `/docs` and are **excluded from the S3/CloudFront deploy** (the GitHub Action skips `*.md`). They are internal working documents — safe to keep in the repo without publishing them.

---

## How to use this system

1. **Read [01-master-strategy.md](01-master-strategy.md) first.** It explains the single most important decision in this whole plan — *positioning* — and reconciles the conflicts between the three source documents.
2. **Then read [08-technical-seo-audit.md](08-technical-seo-audit.md).** It is grounded in the actual `index.html`, `sitemap.xml`, `robots.txt`, schema, and AWS deploy pipeline you have today — not generic advice.
3. **Work the [10-backlog-and-todos.md](10-backlog-and-todos.md).** That is the day-to-day execution file: master backlog, phased checklists, and a single prioritized execution queue. Everything else is reference for *why* a task exists.

## Document index

| # | Document | What it answers | Primary audience |
|---|----------|-----------------|------------------|
| 01 | [Master Strategy](01-master-strategy.md) | Positioning, source-doc reconciliation, competitive-advantage plan, EEAT | Founder / CTO |
| 02 | [Opportunity Matrix](02-opportunity-matrix.md) | Every opportunity scored by priority, impact, dependency, order | Founder / SEO lead |
| 03 | [Site Architecture](03-site-architecture.md) | URL structure, page tree, internal linking, silos | Dev + SEO |
| 04 | [Keyword Strategy](04-keyword-strategy.md) | All keyword tiers, clusters, and keyword→page map | Content + SEO |
| 05 | [Content Roadmap](05-content-roadmap.md) | What to write, in what order, with briefs | Content team |
| 06 | [Local SEO Roadmap](06-local-seo-roadmap.md) | GBP, reviews, citations, maps, local authority | Marketing / ops |
| 07 | [Link-Building Roadmap](07-link-building-roadmap.md) | Backlinks, partnerships, PR, BD-specific targets | Marketing |
| 08 | [Technical SEO Audit](08-technical-seo-audit.md) | Concrete issues in the current site + fixes | Dev / CTO |
| 09 | [Implementation Roadmap](09-implementation-roadmap.md) | Phased plan: objectives, tasks, deliverables, deps, success criteria | Everyone |
| 10 | [Backlog & Todos & Queue](10-backlog-and-todos.md) | Master backlog + phased `[ ]` checklists + execution queue | Everyone |
| 11 | [Page Briefs & Templates](11-page-briefs.md) | Per-page specs, on-page templates, schema snippets | Dev + Content |
| 17 | [Japanese Car SEO Expansion](17-japanese-car-seo-expansion.md) | Toyota/Honda/Mazda/hybrid pages, intent, internal linking, guardrails | Dev + Content |

## The one-paragraph strategy

Autobahn is a **specialist**, not a volume garage. We win by owning every search where a BMW / Mercedes / Audi / Porsche / Land Rover / Jaguar / Volvo / Lexus / hybrid owner in Dhaka is looking for someone who *actually understands their car* — diagnostics, ECU coding, electrical faults, hybrid batteries. These are low-volume but high-value, high-margin, low-competition queries that generic garages cannot credibly rank for. We build a tight topical cluster per brand + per high-margin service, dominate the local map for Tejgaon and the affluent neighbourhoods (Gulshan/Banani/Baridhara/Dhanmondi), earn real reviews and real authorship (EEAT), and feed the funnel with problem/symptom content that AI assistants will cite. We deliberately **down-weight** the generic "cheap car AC refill / battery / Toyota-Honda volume" keywords from the original spreadsheet because they attract price-shoppers who erode the premium brand and pull us into a fight we don't need to win.

## Locked facts (use these verbatim everywhere — NAP consistency is an SEO ranking factor)

```
Business name : Autobahn Solutions Ltd
Address       : 22 Tejgaon I/A, Kuni para, Happy Homes, Dhaka 1208, Bangladesh
Phone         : +880 1734-205682   (E.164: +8801734205682)
Email         : fahim@autobahnsolution.com
Hours         : Sunday–Thursday, 9:00 AM – 6:00 PM (closed Fri–Sat)
Geo           : 23.766631, 90.405704
Google CID    : 18414568033373560881
GA4           : G-CF829CH9FW
Facebook      : facebook.com/autobahnsolutions
Instagram     : instagram.com/autobahnsolutionsltd
YouTube       : youtube.com/@asl_garage
LinkedIn      : linkedin.com/company/autobahn-solutions-limited
```

## Conventions used in this system

- **URL scheme:** flat, kebab-case, location-suffixed — `/services/bmw-repair-dhaka/`. (See architecture doc for why flat beats the nested `/services/premium-brands/bmw/` from the source workbook.)
- **Page = folder + `index.html`** (e.g. `services/bmw-repair-dhaka/index.html`). Requires a CloudFront sub-directory index rewrite — see the technical audit.
- **Search volumes** quoted from the source workbook are **unvalidated estimates and almost certainly inflated for Bangladesh.** Treat them as *relative priority signals*, not forecasts. Validate in Google Keyword Planner / Search Console before reporting them to anyone.
- Priority labels: **P0 Critical · P1 High · P2 Medium · P3 Low.**
