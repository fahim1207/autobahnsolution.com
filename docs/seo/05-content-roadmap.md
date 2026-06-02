# 05 · Content Roadmap

*What to publish, in what order, to what spec. Realigned to European-specialist positioning. 2026-06-02.*

Guiding rule (correcting the source docs): **write to the query and the customer, not to a word count.** A BMW owner with a fault wants a confident, specific answer fast. "Best result for this query in Bangladesh, or don't ship it." Word ranges below are *typical*, not targets.

---

## 1. Content inventory & order

### Wave 1 — Commercial foundation (Months 1–2)
*These earn money. Ship before any blog content.*

| Page | Type | Primary keyword | Typical length | Notes |
|---|---|---|---|---|
| `/` (refine) | Home | European car repair Dhaka | — | Tighten H1/CTAs, swap in real reviews |
| `/services/` | Hub | European & premium car service Dhaka | 600–900 | Links to all service/brand pages |
| `/services/bmw-repair-dhaka/` | Brand pillar | BMW repair Dhaka | 900–1,400 | Faults, services, models, FAQ, reviews |
| `/services/mercedes-benz-repair-dhaka/` | Brand pillar | Mercedes-Benz repair Dhaka | 900–1,400 | " |
| `/services/audi-repair-dhaka/` | Brand pillar | Audi repair Dhaka | 900–1,400 | " |
| `/services/car-diagnostics-dhaka/` | Service pillar | car diagnostics Dhaka | 800–1,200 | Equipment, process, brands |
| `/services/ecu-coding-programming-dhaka/` | Service pillar | ECU coding & programming Dhaka | 800–1,200 | The moat page |
| `/faq/` | FAQ hub | (long-tail Q&A) | 1,000–1,800 | 20–40 real questions, FAQPage schema |
| `/about/` | Trust/EEAT | Autobahn Solutions (brand) | 700–1,100 | Named team, credentials, equipment, warranty |
| `/contact/` | Trust | contact / book service Dhaka | 300–500 | Map, NAP, form, hours |

### Wave 2 — Expand commercial + first local (Months 2–4)

| Page | Type | Primary keyword |
|---|---|---|
| `/services/auto-electrical-repair-dhaka/` | Service pillar | auto electrical repair Dhaka |
| `/services/hybrid-battery-repair-dhaka/` | Service pillar | hybrid battery repair Dhaka |
| `/services/porsche-repair-dhaka/` | Brand | Porsche repair Dhaka |
| `/services/land-rover-repair-dhaka/` | Brand | Land Rover repair Dhaka |
| `/services/toyota-hybrid-service-dhaka/` | Brand/bridge | Toyota hybrid service Dhaka |
| `/services/pre-purchase-inspection-dhaka/` | Service | pre-purchase inspection Dhaka |
| `/services/scheduled-maintenance-dhaka/` | Service | car servicing Dhaka |
| `/locations/tejgaon/` | Location | car repair Tejgaon |
| `/locations/gulshan/` | Location | luxury car repair Gulshan |
| `/locations/banani/` | Location | premium car repair Banani |
| `/blog/` | Hub | (knowledge hub) |

### Wave 3 — Topical clusters + remaining commercial (Months 4–8)

- Remaining brand pages: Jaguar, Volvo, Volkswagen, Lexus.
- Remaining service pages: engine, transmission, suspension, brakes, AC (premium framing), key programming, fleet, painting, detailing.
- Remaining location pages: Baridhara, Dhanmondi, Bashundhara, Uttara.
- **Blog spokes begin in earnest** (see §2), ~4–6/month, each linking up to a pillar.

### Wave 4 — Authority & ongoing (Month 8+)
- Ownership/cost guides, comparison pieces, seasonal content.
- Case studies (with customer consent) — real cars, real fixes.
- Refresh/expand top performers; add FAQ items from real questions.
- Cadence: **2–4 quality posts/month** (sustained beats bursty; the source docs' "2 posts/week forever" is unrealistic for one specialist shop and invites thin content).

---

## 2. Blog / knowledge cluster plan

Organised under pillars (see [04-keyword-strategy.md](04-keyword-strategy.md) §3). Priority order = the brands/services that make the most money + the symptoms customers actually search.

**BMW cluster** (`/blog/bmw/`)
- BMW common faults in Dhaka (and what they cost to fix)
- BMW won't start / electrical gremlins — causes & fixes
- What BMW ECU coding is and when you need it
- BMW service cost in Bangladesh — honest guide
- Which BMW models we service (E/F/G chassis)

**Mercedes cluster** (`/blog/mercedes/`)
- Mercedes limp/ECO mode — why it happens
- Common Mercedes faults we see in Dhaka
- AdBlue / SCR / DEF problems explained
- Mercedes service cost in Bangladesh

**Audi cluster** (`/blog/audi/`)
- Audi EPC light — what it means
- DSG / S-tronic / mechatronic problems
- Audi service cost in Bangladesh

**Diagnostics cluster** (`/blog/diagnostics/`)
- What a proper diagnostic scan reveals (and why cheap scanners miss faults)
- Check engine light in Dhaka — read before you panic
- DPF / particulate filter warnings on European cars

**Electrical cluster** (`/blog/electrical/`)
- CAN-bus faults in European cars
- Parasitic battery drain — finding the culprit

**Hybrid cluster** (`/blog/hybrid/`)
- Prius "red triangle of death" — what to do
- How long do hybrid batteries last in Dhaka's heat?
- Repair vs replace a hybrid battery in Bangladesh

**Guides** (`/blog/guides/`)
- Cost of owning a BMW / Mercedes / Audi in Bangladesh
- European vs Japanese cars for Dhaka traffic
- Pre-purchase inspection: what to check on a used import
- Monsoon car care in Dhaka

Each post: expert author byline, 1–3 internal links **up** to its pillar + 1–2 sibling links, a relevant FAQ block, and a soft WhatsApp CTA. Add `Article` + (where applicable) `FAQPage` schema.

---

## 3. FAQ content (Wave 1 — high value, AI-citable)

Build `/faq/` with grouped, **real** questions. Seed groups:
- **Brands:** "Do you repair BMW / Mercedes / Audi / Porsche / Land Rover in Dhaka?" · "Can you code/program a [brand] ECU?"
- **Diagnostics:** "What diagnostic equipment do you use?" · "My check-engine light is on — what now?"
- **Hybrid:** "Do you replace Prius hybrid batteries?" · "Repair or replace my hybrid battery?"
- **Process & trust:** "Do you use genuine/OEM parts?" · "Do you offer a warranty?" · "How long will my repair take?"
- **Booking & location:** "How do I book?" · "Where are you / which areas do you serve?" · "Are you open Friday?"
- **Pricing:** "How much does a diagnostic / ECU coding / service cost?" (honest ranges, framed as "depends — here's how we quote").

Mirror the highest-value Q&As into the relevant brand/service pages' on-page FAQ blocks (each with `FAQPage` schema).

> The source docs called for "100+ FAQs" in week 1. **Don't.** Ship 20–40 genuinely useful, distinct questions, then grow from real customer/GBP questions. 100 padded FAQs is thin content that can hurt.

---

## 4. Content production standards (EEAT)

- **Authorship:** real technician/founder bylines with a short credential line and link to `/about/`. Premium buyers and AI engines both reward identifiable expertise.
- **Specificity:** name real models, real fault codes, real symptoms, the actual equipment used. Generic content loses to dealers; specific content beats them.
- **Honesty on price:** never publish fake fixed prices; explain how a quote is built and give *ranges*. Builds trust, avoids policy issues.
- **Media:** real photos/short videos of the actual work (also fuels GBP + YouTube @asl_garage + social). Descriptive filenames/alt.
- **Localisation:** reference Dhaka conditions (heat, dust, traffic, fuel quality, import/reconditioned market) — this is unique, citable, and what national/global content can't replicate.
- **No AI-spun filler.** Use AI to draft scaffolding, but every published page must be reviewed and elevated by someone who actually knows the cars.

---

## 5. Content calendar shape (sustainable)

| Cadence | Commercial pages | Blog spokes | Reviews/GBP |
|---|---|---|---|
| Month 1 | 6–8 pages (Wave 1) | 0 | GBP live + 8–10 reviews |
| Month 2 | 4–6 pages | 2–3 | ≥4 reviews + 4 GBP posts |
| Month 3–4 | 3–4 pages + locations | 3–4/mo | ≥4 reviews/mo + posts |
| Month 5–8 | remaining pages | 4–6/mo | ≥4 reviews/mo |
| Month 9+ | refreshes + guides | 2–4/mo | ≥4 reviews/mo |

Detailed per-page briefs (titles, headings, schema) are in [11-page-briefs.md](11-page-briefs.md). Phased checklists are in [10-backlog-and-todos.md](10-backlog-and-todos.md).
