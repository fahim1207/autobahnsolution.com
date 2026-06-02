# 06 · Local SEO Roadmap

*For a single-location specialist, local search (the map pack + "near me") is the single highest-ROI surface. This is where leads come from fastest. 2026-06-02.*

Use the locked NAP block from [README.md](README.md) **verbatim** everywhere. NAP consistency is a direct local-ranking factor.

---

## 1. Google Business Profile (GBP) — the priority asset

A GBP already exists (CID `18414568033373560881` is referenced in the site schema). Treat the profile as your most important page.

### 1.1 Complete & optimise (Week 1)
- [ ] **Claim/verify ownership** of the existing profile (do not create a duplicate).
- [ ] **Primary category:** `Auto repair shop`. **Secondary categories:** `Car repair and maintenance`, `Auto electrical service`, `Car detailing service`, `Brake shop`, `Tuning automobile`, plus brand-relevant ones if available. Categories are a top local-ranking factor — choose the most specific that fit.
- [ ] **Name:** exactly "Autobahn Solutions Ltd" (no keyword stuffing — against guidelines).
- [ ] **Address + map pin** accurate (22 Tejgaon I/A, Kuni para, Happy Homes, Dhaka 1208); verify pin sits on the actual workshop.
- [ ] **Service area:** add Gulshan, Banani, Baridhara, Bashundhara, Dhanmondi, Uttara, Tejgaon, Dhaka.
- [ ] **Hours:** Sun–Thu 09:00–18:00; mark Fri–Sat closed; set holiday hours.
- [ ] **Phone:** +880 1734-205682 (matches site). **Website:** homepage (later, deep-link relevant services).
- [ ] **Description:** specialist European/premium positioning + key services + areas (no stuffing).
- [ ] **Attributes:** "Identifies as…", appointments, on-site services, payment types, accessibility, etc.
- [ ] **Opening date** set (reinforces entity age/trust).

### 1.2 Services & Products (Week 1–2)
- [ ] Add **Services** mirroring site pages: BMW repair, Mercedes repair, Audi repair, Porsche, Land Rover, ECU coding & programming, car diagnostics, auto electrical repair, hybrid battery repair, scheduled maintenance, pre-purchase inspection, etc. — each with a short description and (if known) price range.
- [ ] Add **Products** entries for signature services with photos (acts like a mini-catalog in the profile).

### 1.3 Photos & video (Week 1, then ongoing)
- [ ] Upload **geo-tagged** photos: exterior + signage, interior bays, diagnostic equipment, team at work, real customer cars (with consent), before/after.
- [ ] Add a logo and a cover photo.
- [ ] Short videos of diagnostics/ECU work (also post to YouTube @asl_garage and embed on-site).
- [ ] **Cadence:** add fresh photos every 1–2 weeks (signals active business).

### 1.4 GBP Posts (ongoing, weekly–biweekly)
- [ ] Post offers, "what we fixed this week" (real jobs), seasonal tips (monsoon prep), new service announcements. Each post = a freshness + engagement signal and an extra surface in search.

### 1.5 GBP Q&A (Week 1)
- [ ] **Seed** the Q&A with the same real questions as `/faq/` (you can ask + answer your own as the owner). Pre-empts confusion and feeds AI/local results.
- [ ] Monitor and answer new questions within 24h.

### 1.6 Messaging & booking
- [ ] Enable GBP **messaging** (route to the same WhatsApp/phone workflow); respond fast.
- [ ] Add a booking/appointment link to the contact page.

---

## 2. Reviews — the compounding advantage

Reviews drive both ranking and conversion, and they fix the current **fake-testimonial EEAT liability** (see audit T4).

### 2.1 Build the engine (Week 1–2)
- [ ] Create a short GBP **review short-link**; turn it into a QR code for the workshop, invoices, and WhatsApp.
- [ ] **Ask every satisfied customer** at handover: "Would you leave us a Google review? Here's the link." (Best moment = car returned, problem solved.)
- [ ] WhatsApp follow-up template 1–2 days after service with the review link.
- [ ] Train front-desk/technicians on the ask (politely, never incentivised — incentivised reviews violate Google policy).

### 2.2 Manage & leverage (ongoing)
- [ ] **Respond to every review** (positive: thank + specific; negative: calm, solution-oriented, offline resolution). Owner responses are a ranking/trust signal.
- [ ] **Target velocity: ≥4 genuine new reviews/month.** Steady velocity beats a sudden burst.
- [ ] Pull real review quotes (with first name + consent) onto the homepage and brand pages; add `Review`/`aggregateRating` schema **only** for genuine reviews.
- [ ] Encourage reviewers to mention the **car/brand and service** ("BMW ECU coding", "Range Rover suspension") — entity-rich reviews help relevance.
- [ ] Seek reviews on **Facebook** too (you have an active FB presence) for diversity.

---

## 3. Citations & directories (Months 1–2)

Consistent NAP across the web validates the business entity. **Quality + consistency > quantity** (correcting the source docs' "50 links fast").

### 3.1 Foundational (Bangladesh)
- [ ] Bing Places for Business; Apple Business Connect (Apple Maps).
- [ ] Bangladesh business directories: e.g. local Yellow Pages-type sites, Dhaka business listings, BD startup/business registries.
- [ ] Industry/automotive BD listings and car-community business pages.
- [ ] Facebook page (verify NAP matches), Instagram bio, LinkedIn company page (all already exist — audit NAP consistency).

### 3.2 Global/structured
- [ ] Ensure consistent presence where relevant (no spammy mass-submission). Prioritise directories that are actually used in BD and that pass real referral traffic.

### 3.3 Hygiene
- [ ] Maintain a **citation tracker** (sheet): platform, URL, NAP-as-listed, status. Fix any mismatch (old phone/address) — inconsistent citations dilute local ranking.

---

## 4. Location pages (Months 2–4) — see also architecture §2

Each location page reinforces local relevance. **Must be genuinely differentiated**, not spun duplicates (doorway pages are penalised).

Per page:
- [ ] H1: "[European/Premium] Car Repair in [Area] — Autobahn Solutions"
- [ ] Genuinely local intro: drive time/route from that area to Tejgaon, why owners in that area choose us, area-specific context (e.g. Gulshan/Baridhara = luxury/diplomatic; Uttara = north-Dhaka convenience).
- [ ] Services available + links to service/brand pages.
- [ ] Real reviews from customers in/near that area where possible.
- [ ] Embedded map + directions + NAP + CTA.
- [ ] `AutoRepair` (with `areaServed`) + `BreadcrumbList` schema.

Order: **Tejgaon → Gulshan → Banani → Baridhara → Dhanmondi → Bashundhara → Uttara.**

---

## 5. Maps visibility ("near me" & map-pack)

Ranking in the local pack depends on **relevance, distance, prominence**:
- **Relevance:** categories + services + entity-rich reviews + on-site content matching brand/service queries.
- **Distance:** fixed (Tejgaon) — reinforced by location pages + service-area settings for the affluent catchment.
- **Prominence:** review count/velocity/rating + citations + links + site authority + activity (posts/photos).

Action: keep all three fed continuously (this whole doc). Track **GBP Insights** monthly: how customers find you (discovery vs direct), searches that triggered you, calls, direction requests, website clicks.

---

## 6. Local authority building

- [ ] **Brand & enthusiast communities:** become the recommended workshop in BD BMW/Mercedes/Audi/Land Rover owner groups (Facebook groups are huge in BD) — through genuine helpfulness, not spam. (Also feeds links — see [07-link-building-roadmap.md](07-link-building-roadmap.md).)
- [ ] **Local partnerships:** premium car importers/dealers, detailers, tyre/wheel shops, insurers, luxury car-rental firms — referral + citation + link relationships.
- [ ] **Sponsor/host** a local car meet or owners' event; document it (content + PR + links + photos).
- [ ] **Embassy/NGO/corporate** outreach for fleet servicing (Baridhara diplomatic zone) — B2B relationships that also yield citations.

---

## 7. Local KPIs (monthly)

| Metric | Source | Target trend |
|---|---|---|
| GBP calls / messages / direction requests | GBP Insights | up MoM |
| Review count & average rating | GBP | +≥4/mo, ≥4.7★ |
| Map-pack appearances (Tejgaon/Gulshan/Banani core terms) | rank tracker / manual | top-3 by M6 |
| "near me" + local query clicks | Search Console | up MoM |
| Local leads (WhatsApp/call from maps + local pages) | GA4 events + call log | up MoM |
