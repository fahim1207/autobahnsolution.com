# 08 · Technical SEO Audit (grounded in the live site)

*Audited against the actual repo: `index.html`, `sitemap.xml`, `robots.txt`, `sw.js`, `site.webmanifest`, `.github/workflows/main.yml`, `.replit`. 2026-06-02.*

This is not generic advice — every finding references what is (or isn't) in your code today.

---

## 0. What's already good (keep it)

The current `index.html` is in **much better shape** than the source SEO docs assume. Already present and correct:

- ✅ GA4 installed (`G-CF829CH9FW`).
- ✅ Single, correct **canonical** (`https://autobahnsolution.com/`).
- ✅ Strong **`AutoRepair`/LocalBusiness JSON-LD** with `@id`, NAP, geo, `openingHoursSpecification`, `areaServed`, `makesOffer`, `brand[]`, `sameAs[]`, `hasMap` (with CID).
- ✅ **WebSite** schema and a **FAQPage** schema block.
- ✅ Open Graph + Twitter card, `og:locale en_BD`, geo meta tags.
- ✅ `robots.txt` allows AI crawlers (GPTBot, ClaudeBot, Google-Extended, PerplexityBot) and references the sitemap.
- ✅ HTTPS via CloudFront; PWA/service worker; lazy-loading + `decoding="async"` on images; preconnect hints; WebP brand logos.
- ✅ Sitemap already contains the *planned* URL structure as comments (flat URLs — good).

So the technical job is **not** "fix a broken site." It's "evolve a strong one-pager into a crawlable multi-page architecture without breaking what works."

---

## CRITICAL (P0) — blockers for the whole strategy

### T1. The site is a single page; the entire strategy needs real pages
Every internal "link" is an on-page anchor (`#services`, `#about`, `#contact`). There are **no service, brand, location, or blog pages** — so there is nothing for Google to rank for "BMW repair Dhaka" etc.
- **Fix:** build out the architecture in [03-site-architecture.md](03-site-architecture.md). Each page = a folder + `index.html`. Convert footer "Services" links from `#services` to the real service URLs as they ship.
- **Owner:** Dev. **Blocks:** everything in content/keyword/local roadmaps.

### T2. CloudFront sub-directory index rewrite (clean URLs will 404 without it)
Deploy is `aws s3 sync . s3://… ` → CloudFront (`.github/workflows/main.yml`). Plain S3-origin CloudFront does **not** automatically serve `…/services/bmw-repair-dhaka/index.html` when a user requests `…/services/bmw-repair-dhaka/`. Without a rewrite, every new clean URL 404s.
- **Fix (pick one):**
  - **CloudFront Function (recommended, cheapest):** a viewer-request function that appends `index.html` to any URI ending in `/` and adds a trailing slash to extensionless paths. ~15 lines of JS; documented in [11-page-briefs.md](11-page-briefs.md) §Infra snippets.
  - Or set the S3 bucket to **website hosting** mode and point CloudFront at the *website endpoint* (handles index docs natively) — but you lose OAC/private-bucket security.
- **Test before relying on it:** deploy one `/test-page/index.html`, confirm `…/test-page/` returns 200.
- **Owner:** Dev/DevOps. **Blocks:** all new pages.

### T3. `*.md` excluded from deploy — confirm nothing public depends on Markdown
The Action excludes `*.md` from the S3 sync. Good for these internal docs. Just be aware: if you ever build a Markdown-driven blog, the **built HTML** must be committed (or the build must run in CI before sync) — raw `.md` will never reach production.
- **Action:** when the blog ships, either pre-render to HTML in the repo or add a build step to the workflow *before* `aws s3 sync`.

### T4. Fake/unverifiable testimonials + no review schema (EEAT + trust)
`index.html` hard-codes generic testimonials ("Ahmed Rahman – BMW X5 Owner", etc.) with 5 stars and **no `Review`/`aggregateRating` schema**. For a premium brand this reads as fabricated and is an EEAT liability; inventing `aggregateRating` would also violate Google's review-snippet policy.
- **Fix:** replace with **real Google reviews** (pull quotes with real first names + consent), link to the GBP review page, and add `aggregateRating`/`Review` schema **only when backed by genuine reviews**. See [06-local-seo-roadmap.md](06-local-seo-roadmap.md).
- **Owner:** Marketing + Dev.

---

## HIGH (P1)

### T5. No per-page title/meta system
Today there's exactly one `<title>` and one meta description (both good, for the homepage). Multi-page SEO needs unique, intent-matched titles/descriptions per page.
- **Fix:** define the title/description pattern per template (see [11-page-briefs.md](11-page-briefs.md)). Pattern: `Primary Keyword | Autobahn Solutions` ≤ 60 chars; description ≤ 155 chars with a CTA + phone.

### T6. Sitemap is homepage-only; needs to grow with the site
`sitemap.xml` lists only `/` (the rest are commented out) and uses a static `lastmod`. As pages ship they must be uncommented/added.
- **Fix:** maintain the sitemap as part of each page's Definition of Done. Keep flat URLs. Update `lastmod` to real dates. Consider splitting into `sitemap-pages.xml` + `sitemap-blog.xml` once >50 URLs.
- **Minor bug to verify:** the homepage `lastmod` is `2026-04-25` (static/future-ish relative to edits) — set it to the real last-modified date and stop hand-faking it.

### T7. Heading hierarchy & keyword targeting on the homepage
H1 is good ("European Car Repair & Diagnostics Specialists in Dhaka"). But the homepage is doing the job of ~10 pages. As pages split out, the homepage H1 should stay brand+category, and each new page gets its own keyword-targeted H1.
- **Fix:** enforce one `<h1>` per page = the page's primary keyword, naturally phrased.

### T8. Internal linking is non-existent (anchors only)
No descriptive internal links pass context/authority between topics (because there's only one page).
- **Fix:** implement the internal-linking model in [03-site-architecture.md](03-site-architecture.md) §Internal linking — hub→spoke, spoke→hub, breadcrumb schema, related-links blocks.

### T9. `BreadcrumbList` schema missing
Needed once we have nested-looking paths (`/services/…/`) for rich breadcrumb results.
- **Fix:** add `BreadcrumbList` JSON-LD per non-home page (template in page briefs).

### T10. Service pages have no `Service`/`Offer` schema of their own
The homepage lists offers, but individual service pages (when built) should each carry `Service` schema with `provider`, `areaServed`, and `serviceType`.
- **Fix:** per-service `Service` JSON-LD (template in page briefs).

---

## MEDIUM (P2)

### T11. Conversion tracking not wired as GA4 events
GA4 is installed but WhatsApp clicks, `tel:` clicks, and the (future) form submit aren't instrumented as **key events**. Without this, "leads from organic" — the metric that matters — is unmeasurable.
- **Fix:** add `gtag('event', 'generate_lead', {method:'whatsapp'|'call'|'form'})` on those interactions; mark as key events in GA4; optionally GBP call tracking. (Snippet in page briefs §Infra snippets.)

### T12. Render-blocking CSS from CDN; no critical-CSS inlining
Bootstrap + Bootstrap-Icons + Google Fonts load render-blocking from CDNs. Fine for now, but as Core Web Vitals matter for competitive terms, consider self-hosting a trimmed CSS bundle and inlining critical CSS.
- **Fix (later):** subset/​self-host fonts, purge unused Bootstrap, inline above-the-fold CSS. Measure with PageSpeed/CrUX first — don't optimise blind.

### T13. Image SEO
Brand logos have alt text (good). But hero/service/package images (`IMG_5271.webp` …) have generic alts ("Service Package 1") and non-descriptive filenames.
- **Fix:** descriptive filenames (`bmw-engine-diagnostics-dhaka.webp`) and descriptive, keyword-natural alt text on all meaningful images. Add `width`/`height` to prevent CLS.

### T14. No `Organization` logo entity / knowledge-panel reinforcement
`AutoRepair` has a `logo`, but a distinct `Organization` node with `logo`, `founder`, `foundingDate`, `sameAs` strengthens the entity for knowledge panels and AI.
- **Fix:** add an `Organization` JSON-LD (can `@id`-reference the business node).

### T15. `priceRange` uses "৳৳" — use a recognised format
`"priceRange": "৳৳"` is non-standard. Google expects `$$`-style or a numeric range.
- **Fix:** use `"$$"`–`"$$$"` (premium) or a textual range; keep `currenciesAccepted: BDT`.

### T16. Single language signal, no `hreflang`
Site is `en-BD` only. If/when Bengali pages are added, implement `hreflang` (`en-BD` / `bn-BD`) reciprocal tags.
- **Fix:** defer until Bengali content exists; then add `hreflang` + `x-default`.

---

## LOW (P3) / housekeeping

- **T17.** Footer still labels a "Services" column linking to `#services`; "Contact Info" duplicates address without the postcode — align to the locked NAP block.
- **T18.** Privacy Policy / Terms links are `href="#"` placeholders — ship real `/privacy/` and `/terms/` pages (trust + AdSense/GBP hygiene).
- **T19.** `theme-color`, manifest, icons all fine — no action.
- **T20.** Service worker precaches `/` and `/index.html`; when multi-page ships, decide a caching strategy that doesn't serve stale pages (bump `CACHE_NAME`, network-first for HTML — already network-first per `replit.md`).
- **T21.** Add `Sitemap`-referenced **`/llms.txt`** (emerging convention) summarising the site for AI crawlers — cheap, future-facing, optional.

---

## Technical fix order (dependency-aware)

1. **T2** CloudFront rewrite → **T1** first real pages (proves the pipeline) →
2. **T5/T7/T9/T10** per-page title/heading/schema templates →
3. **T6** sitemap discipline + **T8** internal linking (as pages ship) →
4. **T4** real reviews + review schema (parallel, with Marketing) →
5. **T11** conversion events (do early — you want data from day one) →
6. **T13/T15/T14** image/schema polish → **T12** CWV → **T16/T18/T21** later.

> Do **T11 (conversion tracking)** in week 1 regardless of order — every week without it is leads you can't attribute.
