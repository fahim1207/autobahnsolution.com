# 01 · Master SEO Strategy

*Autobahn Solutions Ltd · `autobahnsolution.com` · consolidated 2026-06-02*

This document is the single source of truth for **what we are doing and why**. Every other document in this folder executes against the decisions made here.

---

## 1. Executive summary

Autobahn Solutions is Dhaka's specialist workshop for European and premium vehicles — BMW, Mercedes-Benz, Audi, Porsche, Land Rover/Range Rover, Jaguar and Volvo — plus premium Japanese and hybrid cars (Lexus, Toyota/Prius hybrid). Our differentiators are **OEM-grade diagnostics, ECU coding & programming, electrical fault solving, and hybrid battery work** — the exact things a generic Dhaka garage *cannot* do and *cannot* credibly claim online.

The SEO strategy follows directly from that reality:

- **We compete on specificity, not volume.** Owning "BMW ECU coding Dhaka" or "Range Rover air suspension repair Bangladesh" is worth far more to us than ranking #4 for "car repair Dhaka" against fifty undifferentiated garages.
- **We build topical authority brand-by-brand and service-by-service**, so Google (and AI search engines) see us as *the* European-car authority in Bangladesh.
- **We win local search** for Tejgaon (HQ) and the affluent catchment — Gulshan, Banani, Baridhara, Bashundhara, Dhanmondi, Uttara — where our customers actually live and drive.
- **We earn EEAT the hard way**: real technicians with real names and credentials, real Google reviews, real photos of real cars, and genuinely expert content. A premium specialist with fake-looking testimonials and thin content gets neither rankings nor customers.

**Realistic outcome horizon** (corrected from the source docs — see §6): meaningful local-pack visibility and first service-page rankings in **3–4 months**; category dominance for our specialist terms in **9–12 months**. The source documents' "200 visitors month 1 → 25,000 month 12" curve is aspirational marketing, not a forecast; we plan against leads, not vanity traffic.

---

## 2. Reconciliation of the three source documents

The `SEO Game Plan` folder contained three documents that **partially contradict each other and the current website.** Here is what we kept, fixed, and discarded.

### Source A — `AUTOBAHN_SEO_GAME_PLAN_FOR_CTO.md` (the simplified CTO plan)
- **Kept:** the phased "foundation → authority → expansion" shape; the discipline of titles/descriptions/schema/sitemap; the "never use bad shortcuts" guidance; week-by-week cadence.
- **Fixed:** it leads with Toyota/Honda/AC/battery "quick wins" and nested `/services/premium-brands/bmw/` URLs. We **re-order** to lead with European specialist pages and use **flat URLs**.
- **Discarded:** "5,000–8,000 word pillar pages because Google loves long pages" — length is not a ranking factor; *completeness and intent-match* are. We write to the query, not to a word count.

### Source B — `SEO Game Plan.docx` (the long strategy export)
- **Kept:** the tier structure (cornerstone / luxury / quick-win), the conversion-stage keyword→CTA mapping, the AI-search ("semantic/LSI") angle, the silo concept, the local-keyword breakdown.
- **Fixed:** silo URLs are nested here too → flattened. Predicted-results table → replaced with a lead-based, conservative model.
- **Discarded:** the implied positioning as a do-everything garage; specific fabricated search volumes treated as fact.

### Source C — `Autobahn_Solutions_Complete_SEO_Strategy.xlsx` (the keyword workbook)
- **Kept:** the master keyword list as a *starting* universe; the local-keyword sheet; the content-plan skeleton; the action-plan owners/columns.
- **Fixed:** "Premium Brands" and "Japanese Cars" nested silos → flat brand pages. Generic brand list expanded to match the live site (added Porsche, Jaguar, Land Rover, Volvo, Lexus).
- **Discarded / down-weighted:** rows that pull us toward price-shopper traffic and away from positioning — **"car AC gas refill", "car battery service", standalone Honda/Nissan/Mitsubishi volume pages, "spare parts"**. (The business already removed the spare-parts section from the site — see git history — so any spare-parts keyword targeting is obsolete.)

### The core conflict, resolved

> **Conflict:** Source docs optimise for *high-volume generic* terms ("car service Bangladesh", "car AC repair", "Toyota/Honda repair"). The live site and the founder's actions optimise for *European/premium specialist* positioning.
>
> **Resolution:** Positioning wins. We pursue generic head terms **only** through a single broad "European & premium car service in Dhaka" hub and the homepage — never by creating cheap-service pages that dilute the brand. Volume keywords are treated as *top-of-funnel context*, not conversion targets.

### Other conflicts removed
- **URL structure:** nested (docx/xlsx) vs flat (the commented plan already in `sitemap.xml`). → **Flat wins.**
- **Search-volume numbers** differ between docx and xlsx for the same keyword. → All volumes flagged as *estimates to validate*; we rank by intent + margin + winnability, not by the spreadsheet number.
- **Testimonials:** the live site shows generic, unverifiable testimonials ("Ahmed Rahman", "Sarah Khan") with no review schema. → Replace with **real Google reviews** + `Review`/`aggregateRating` schema. This is an EEAT liability, not an asset.

---

## 3. Positioning & target segments

| Segment | Who | Search behaviour | Why we win | Priority |
|---|---|---|---|---|
| **European luxury** | BMW, Mercedes, Audi, Porsche owners in Gulshan/Banani/Baridhara | Brand + problem + "Dhaka/near me"; high research intent | Only specialists can fix these correctly; dealers are expensive/slow | **P0** |
| **Premium British/SUV** | Land Rover/Range Rover, Jaguar, Volvo owners | "air suspension", "fault code", "specialist" | Notoriously fault-prone; owners desperate for a competent shop | **P0** |
| **Specialist services** | Any premium owner needing ECU coding, electrical diagnosis, hybrid battery | High-intent, problem-led, low competition | Genuine technical moat | **P0** |
| **Premium Japanese / hybrid** | Lexus, Toyota Prius/hybrid owners | "hybrid battery", "Prius service Dhaka" | Bridges volume and premium; hybrid battery is high-margin | **P1** |
| **B2B / fleet** | Corporates, embassies, NGOs with premium fleets | "fleet maintenance", relationship-led | Recurring revenue; few competitors target this online | **P2** |

We **do not** target: budget AC refills, generic battery swaps, rickshaw/CNG/commercial-vehicle repair, or spare-parts retail.

---

## 4. The five strategic pillars

1. **Topical authority by brand & service.** One strong, intent-matched page per brand (`/services/bmw-repair-dhaka/`) and per high-margin service (`/services/ecu-coding-programming-dhaka/`), each supported by a cluster of problem/symptom articles that link up to it. This is how a small site out-ranks big generic ones — *depth in a narrow topic*.
2. **Local dominance.** Google Business Profile fully optimised, a steady flow of real reviews, consistent citations (NAP), and location pages for the affluent catchment. For a single-location specialist, the **map pack is the highest-ROI surface**.
3. **EEAT as a moat.** Named technicians with credentials, real before/after work, an authored knowledge base, transparent process, and warranty. Premium buyers and Google both reward demonstrable expertise.
4. **AI-search readiness.** Clean schema, FAQ/Q&A content, clear entity definitions, and citable problem-solution articles so ChatGPT/Gemini/Perplexity name Autobahn when asked "who fixes BMWs in Dhaka?". (AI bots are already allowed in `robots.txt`.)
5. **Conversion-first pages.** Every page has WhatsApp + call CTAs above the fold, a clear "what happens next", and trust signals. Traffic without booked jobs is worthless.

---

## 5. Competitive advantage plan (how we out-rank everyone in BD)

**Who we're really competing with**
- *Authorised dealers / distributors* (e.g. brand-importer service centres): high authority, but expensive, slow, generic web presence, no problem-level content.
- *Generic multi-brand garages*: rank for head terms but have zero credible European-specialist depth.
- *Facebook-only workshops*: huge in BD, but invisible in Google organic and structured search — they own social, not search.

**Our edges and how we convert each into rankings**

| Our real-world edge | SEO move that monetises it |
|---|---|
| Genuine OEM-grade diagnostics & ECU coding | Own every "[brand] ECU coding / fault code / coding Dhaka" query — content no generalist can write |
| Electrical-fault specialism | Symptom cluster: "[brand] won't start / electrical fault / CAN-bus" problem pages |
| Hybrid battery capability | Own "hybrid battery replacement/repair Dhaka", "Prius battery Bangladesh" |
| Tejgaon location (automotive hub) + affluent catchment | Map-pack dominance + location pages for Gulshan/Banani/Baridhara |
| Premium, English-fluent clientele | High-quality English content + schema → also wins AI-search citations |
| Real workshop, real cars, real warranty | Photo/video EEAT + reviews that Facebook-only shops can't structure for search |

**The winning formula:** *Specialist depth + local trust + real EEAT + AI-citability* — a combination no current BD competitor has assembled. We don't beat the dealers on authority; we beat them on **relevance, problem-level content, reviews, and responsiveness**, and we beat the generic garages on **credibility for premium marques**.

---

## 6. Realistic targets (replaces the source docs' optimistic table)

Plan against **leads and qualified calls**, not raw traffic. Volumes for our niche are small; *conversion quality* is the whole game.

| Horizon | Primary objective | Leading indicators | Lagging indicator (the one that pays) |
|---|---|---|---|
| **Month 1–2** | Foundation + GBP + first 6 pages live | GBP verified & optimised, 10+ new reviews, pages indexed | 3–8 qualified WhatsApp/calls from search |
| **Month 3–4** | Brand pages + local pages ranking; review velocity | Local-pack appearances for Tejgaon/Gulshan; brand pages on p1–2 | 10–20 qualified leads/mo from organic+maps |
| **Month 5–8** | Topical clusters + links compounding | Map-pack top-3 for core local terms; 30+ keywords ranking | 25–40 qualified leads/mo |
| **Month 9–12** | Category authority | "[brand] repair Dhaka" top-3 organic; AI engines cite us | 40–70+ qualified leads/mo; measurable from premium segments |

> Numbers are directional and assume consistent execution (content + reviews + links every month). Treat the lead figures as *targets to instrument and verify in GA4 + call tracking*, not guarantees.

---

## 7. Measurement

Track monthly (see [10-backlog-and-todos.md](10-backlog-and-todos.md) for the ongoing checklist):
- **GBP insights:** discovery vs direct searches, map views, calls, direction requests, website clicks.
- **Search Console:** impressions/clicks/position per query and per page; index coverage.
- **GA4:** organic sessions, key events (WhatsApp click, `tel:` click, form submit), traffic by landing page.
- **Reviews:** count + average rating + velocity (target ≥4 new/month).
- **Rankings:** a tracked set of ~40 priority keywords (brand × service × location).
- **The number that matters:** **qualified leads attributable to organic + maps** (instrument WhatsApp and call clicks as conversions — see technical audit §Conversion tracking).

---

## 8. Guardrails (non-negotiable)

- No bought links, PBNs, fake reviews, hidden text, keyword stuffing, or AI-spun thin pages. A premium brand cannot afford a penalty or a credibility hit.
- NAP **identical** everywhere (use the locked block in [README.md](README.md)).
- Never publish a brand/service page that's thinner or worse than what a dealer or competitor already has — quality bar is "best result for this query in Bangladesh," or don't ship it.
- Bengali-language content is an opportunity (see content roadmap) but English leads, because our premium audience searches in English and AI engines favour our English depth.
