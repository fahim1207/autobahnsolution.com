# 10 · Master Backlog · Phased Todos · Execution Queue

*The day-to-day execution file. 2026-06-02. Check items off as you ship. Cross-references: opportunity IDs (A1, B2…) from [02-opportunity-matrix.md](02-opportunity-matrix.md); technical IDs (T2…) from [08-technical-seo-audit.md](08-technical-seo-audit.md).*

---

## Part 1 — Prioritized execution queue (do in this order)

The single ordered list. If you only ever read one section, read this.

1. **[P0]** Claim & verify Google Business Profile *(C1)*
2. **[P0]** Add GA4 lead-conversion events: WhatsApp, call, form *(A5/T11)*
3. **[P0]** Verify GSC + Bing Webmaster; submit sitemap *(Phase 0)*
4. **[P0]** Lock final URL slugs + confirm AWS access *(Phase 0)*
5. **[P0]** Set up review request flow + GBP review QR/link *(C2)*
6. **[P0]** Implement CloudFront sub-directory index rewrite + test *(A1/T2)*
7. **[P0]** Build shared page template + title/meta/H1 + schema partials *(A2/A3/A4)*
8. **[P0]** GBP full optimisation: categories, services, photos, hours, description *(C1)*
9. **[P0]** Homepage refine + swap fake testimonials → real reviews + schema *(B1/A8/T4)*
10. **[P0]** `/services/` hub page *(B9)*
11. **[P0]** BMW pillar `/services/bmw-repair-dhaka/` *(B2)*
12. **[P0]** Mercedes pillar *(B2)*
13. **[P0]** Audi pillar *(B2)*
14. **[P0]** Diagnostics pillar `/services/car-diagnostics-dhaka/` *(B3)*
15. **[P0]** ECU coding pillar `/services/ecu-coding-programming-dhaka/` *(B3)*
16. **[P1]** `/faq/` hub + FAQPage schema *(B10)*
17. **[P1]** `/about/` with named team + credentials *(D4)*
18. **[P1]** `/contact/` page *(B6)*
19. **[P1]** Foundational citations (Bing/Apple Maps + BD directories), consistent NAP *(C3/E1)*
20. **[P1]** Location page: Tejgaon *(C4)*
21. **[P1]** Location pages: Gulshan, Banani *(C4)*
22. **[P1]** Electrical + Hybrid-battery service pillars *(B4)*
23. **[P1]** Porsche + Land Rover + Toyota-hybrid brand pages *(B5)*
24. **[P1]** Pre-purchase inspection + scheduled maintenance pages *(B6)*
25. **[P1]** `/blog/` hub + first 4–6 problem/symptom spokes *(D1/D2)*
26. **[P2]** Remaining brand pages: Jaguar, Volvo, VW, Lexus *(B7)*
27. **[P2]** Remaining service pages: engine, transmission, suspension, brakes, AC, key programming *(B7)*
28. **[P2]** Fleet maintenance B2B page *(B8)*
29. **[P2]** Remaining location pages: Baridhara, Dhanmondi, Bashundhara, Uttara *(C4)*
30. **[P2]** Privacy + Terms pages *(A12/T18)*; Organization schema + priceRange fix *(A9)*
31. **[P2]** Begin relevance/partner/PR link building *(E2/E3/E4)*
32. **[P2]** Ownership/cost guides + linkable asset *(D3)*
33. **[P3]** Bengali/Banglish layer + hreflang *(D6/A14)*; SSG migration if >20 pages *(A13)*; CWV pass *(A11)*; /llms.txt *(A15)*

---

## Part 2 — Phased todo lists

### PHASE 0 — Foundation & measurement
- [ ] Claim & verify Google Business Profile (existing CID 18414568033373560881 — do NOT make a duplicate)
- [ ] Confirm GA4 (G-CF829CH9FW) is collecting; create events `generate_lead` for WhatsApp/call/form; mark as key events
- [ ] Verify Google Search Console (domain property) + submit `sitemap.xml`
- [ ] Verify Bing Webmaster Tools + submit sitemap
- [ ] Create rank-tracking sheet (~40 keywords: brand × service × location)
- [ ] Create citation tracker sheet (platform · URL · NAP-as-listed · status)
- [ ] Generate GBP review short-link + QR code
- [ ] Lock final URL slug list (sign-off) — see architecture §2
- [ ] Confirm AWS (S3/CloudFront) access for Dev
- [ ] Record baseline metrics (current GBP insights, GSC impressions, GA4 sessions)

### PHASE 1 — Technical substrate
- [ ] Write + deploy CloudFront Function (viewer-request) to append `index.html`/trailing slash *(T2)*
- [ ] Deploy `/test-page/index.html`; confirm `…/test-page/` returns 200; then remove
- [ ] Build shared header/nav/breadcrumb/footer/sticky-CTA template *(T1/F1)*
- [ ] Define title (≤60c) + meta description (≤155c) + single-H1 pattern *(T5/T7)*
- [ ] Build schema partials: `Service`, `BreadcrumbList`, `FAQPage`, `Organization` *(T9/T10/T14)*
- [ ] Fix `priceRange` to standard format; keep `currenciesAccepted: BDT` *(T15)*
- [ ] Document sitemap-update step in page "Definition of Done" *(T6)*
- [ ] Validate template page in Google Rich Results Test

### PHASE 2 — Commercial core
- [ ] Homepage: tighten H1/CTAs; ensure one H1; add `Organization` schema *(B1)*
- [ ] Replace hard-coded testimonials with real Google reviews + `Review`/`aggregateRating` schema *(A8/T4)*
- [ ] Build `/services/` hub with links to all (planned) service/brand pages *(B9)*
- [ ] Build `/services/bmw-repair-dhaka/` (faults, services, models, FAQ, reviews, CTA) *(B2)*
- [ ] Build `/services/mercedes-benz-repair-dhaka/` *(B2)*
- [ ] Build `/services/audi-repair-dhaka/` *(B2)*
- [ ] Build `/services/car-diagnostics-dhaka/` *(B3)*
- [ ] Build `/services/ecu-coding-programming-dhaka/` *(B3)*
- [ ] Build `/faq/` (20–40 real Q&As, grouped, FAQPage schema) *(B10)*
- [ ] Build `/about/` (named technicians/founder, credentials, equipment, warranty, photos) *(D4)*
- [ ] Build `/contact/` (map, NAP, hours, form, CTAs) *(B6)*
- [ ] Add all new URLs to sitemap with real `lastmod` *(T6)*
- [ ] Wire internal links (hub⇄spoke⇄cross-link) + breadcrumbs *(T8)*
- [ ] Repoint homepage/footer `#services` anchors to real service URLs
- [ ] Submit new URLs for indexing in GSC; confirm indexed

### PHASE 3 — Local expansion + trust
- [ ] GBP: confirm primary + secondary categories; add all Services + Products; description *(C1)*
- [ ] GBP: upload geo-tagged photos (exterior/bays/equipment/team/before-after) *(C1)*
- [ ] GBP: seed Q&A from `/faq/`; enable messaging *(C1)*
- [ ] GBP: start weekly/biweekly Posts (real jobs, tips, offers) *(C5)*
- [ ] Review engine: ask every happy customer; WhatsApp follow-up; respond to all *(C2)* — **target ≥4/mo**
- [ ] Citations: Bing Places, Apple Business Connect, BD directories, social NAP audit *(C3/E1)*
- [ ] Build `/locations/tejgaon/` *(C4)*
- [ ] Build `/locations/gulshan/`, `/locations/banani/` *(C4)*
- [ ] Build `/services/auto-electrical-repair-dhaka/` *(B4)*
- [ ] Build `/services/hybrid-battery-repair-dhaka/` *(B4)*
- [ ] Build `/services/porsche-repair-dhaka/`, `/land-rover-repair-dhaka/`, `/toyota-hybrid-service-dhaka/` *(B5)*
- [ ] Build `/services/pre-purchase-inspection-dhaka/`, `/scheduled-maintenance-dhaka/` *(B6)*
- [ ] Build `/blog/` hub + cluster category pages *(D1)*
- [ ] Publish first 4–6 problem/symptom spokes, each linking up to its pillar *(D2)*

### PHASE 4 — Topical authority & links
- [ ] Brand pages: Jaguar, Volvo, Volkswagen, Lexus *(B7)*
- [ ] Service pages: engine, transmission, suspension, brakes, AC (premium framing), key programming *(B7)*
- [ ] `/services/fleet-maintenance-dhaka/` (B2B) *(B8)*
- [ ] Remaining location pages: Baridhara, Dhanmondi, Bashundhara, Uttara *(C4)*
- [ ] Sustain blog: 4–6 posts/month across clusters *(D2)*
- [ ] Publish ownership/cost guides + 1 linkable asset *(D3/E6)*
- [ ] Add author bylines/entities *(D5)*
- [ ] Link building: communities, partners, BD auto/business media outreach *(E2/E3/E4)*
- [ ] Privacy + Terms pages *(A12)*; image SEO pass *(A10)*
- [ ] Quarterly review: keywords (validate volumes), content gaps, technical, link profile

### PHASE 5 — Dominate & compound
- [ ] Refresh/expand top pages; prune/merge underperformers
- [ ] Scale reviews + GBP activity; expand B2B/fleet + partnerships
- [ ] (Optional) Bengali/Banglish layer + hreflang *(D6/A14)*
- [ ] (Optional) SSG migration if page count > ~20 *(A13)*
- [ ] CWV optimisation pass if competitive terms require it *(A11)*
- [ ] /llms.txt for AI crawlers *(A15)*

---

## Part 3 — Ongoing (every month, forever)

- [ ] Publish 2–4 quality blog posts (real expertise, link up to pillars)
- [ ] Acquire ≥4 genuine Google reviews; respond to **all** reviews
- [ ] Post to GBP 2–4×; add fresh photos
- [ ] Review GSC (queries/pages/coverage) + GA4 (organic leads) + GBP insights
- [ ] Update rank tracker; note movement; act on decay
- [ ] Add new FAQ items from real customer/GBP questions
- [ ] Pursue 1–3 relevant links/partnerships
- [ ] Audit NAP consistency across citations (spot-check)

## Part 4 — Quarterly

- [ ] Validate keyword volumes in Keyword Planner; re-prioritise
- [ ] Content-gap analysis vs competitors (dealers + top garages)
- [ ] Technical SEO audit (crawl, CWV, schema validity, broken links)
- [ ] Link-profile quality review
- [ ] Refresh top-10 pages with new info/photos/reviews

---

## Definition of Done (every new page)

A page is not "done" until **all** of these are true:
- [ ] Unique, intent-matched `<title>` (≤60c) + meta description (≤155c)
- [ ] Exactly one `<h1>` = primary keyword, naturally phrased
- [ ] Body genuinely answers the query better than current BD results
- [ ] Correct schema (Service/Article/etc. + BreadcrumbList + FAQ where relevant), validated in Rich Results Test
- [ ] Sticky WhatsApp/Call CTA + at least one in-body CTA
- [ ] Internal links: up to pillar/hub + relevant cross-links + breadcrumb
- [ ] Real images with descriptive filenames + alt + width/height
- [ ] Added to `sitemap.xml` with real `lastmod`
- [ ] Mobile-checked; loads fast; no console errors
- [ ] Submitted for indexing in GSC
