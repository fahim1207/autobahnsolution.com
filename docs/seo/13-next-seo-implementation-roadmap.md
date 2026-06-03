# 13 · Next SEO Implementation Roadmap

*Execution roadmap for the second build wave. Created 2026-06-03. Branch: `seo/foundation-and-commercial-core`.*

This roadmap covers the work that follows the foundation + commercial-core wave (docs 01–11). It is an **execution** document — every phase is built, verified, and committed separately. The companion checklist is [14-seo-execution-todolist.md](14-seo-execution-todolist.md); the completion record is [15-phase-completion-summary.md](15-phase-completion-summary.md).

---

## Locked decisions for this wave

1. **URL scheme for this wave = root-level, flat, kebab-case, location-suffixed.** The high-intent service cluster, location pages, and case studies live at the site root (e.g. `/bmw-diagnostics-dhaka/`, `/car-repair-tejgaon/`, `/case-studies/…/`). The existing **pillars stay under `/services/`** (`/services/bmw-repair-dhaka/`, `/services/car-diagnostics-dhaka/`, `/services/ecu-coding-programming-dhaka/`). New pages are **spokes that link UP to those pillars** — this is deliberate hub-and-spoke clustering, not duplication. Each spoke targets a narrower long-tail intent than its pillar, with a distinct H1/title, so there is no cannibalisation.
2. **Page pattern = the BMW pillar** (`services/bmw-repair-dhaka/index.html`). Every new page copies that shell byte-for-byte: GA4 snippet, absolute `/assets/…` paths, fixed-top nav, dark `.page-header` with breadcrumb, sticky sidebar CTA, footer, FAB, `main.js`. Only the head metadata, schema, H1, and body content change.
3. **No fabricated data — ever.** No invented technician names, certifications, review counts, customer/vehicle numbers, awards, founding year, or exact equipment lists. Where real business data is needed, leave a visible-in-source `<!-- TODO(owner): … -->` comment.
4. **No internal links to pages that do not exist.** Links go only to live pillars (`/services/…`), `/`, `/about/`, `/faq/`, `/contact/`, and siblings created in the same phase. Sitemap lists live URLs only.
5. **Clean folder URLs depend on the CloudFront function** (`infra/cloudfront-subdir-index.js`). Until it is attached in AWS, every new `/…/` URL 404s in production. This is the gating dependency for the whole wave going live — see Phase 1.
6. **`/docs/seo/` stays internal.** It is excluded from the S3 sync by `.github/workflows/main.yml` (`--exclude "*.md"`).

---

## Phase 1 — Technical deployment readiness
**Objective:** make it unambiguous how to take clean URLs live, and give the owner a copy-paste deploy + preflight procedure. (We do **not** have AWS access from here, so deployment itself is a `TODO(owner)`.)
- Review `infra/cloudfront-subdir-index.js`.
- Add full CloudFront-attach instructions + a production preflight checklist to the docs and `infra/README.md`.
- `TODO(owner)`: perform the AWS deploy. We do **not** claim it is done.
- **Success:** owner can attach the function and verify clean URLs by following the checklist; no code claims deployment is complete.

## Phase 2 — EEAT completion
**Objective:** strengthen trust signals on `/about/` and the homepage using only repo-confirmed facts.
- Add brands-specialised, workshop-process, warranty, and quality-control trust sections.
- Use `TODO(owner)` for founding year, technician count, vehicles serviced, certifications, real reviews, exact equipment list.
- Keep all JSON-LD valid.
- **Success:** richer EEAT, schema still valid, zero fabricated claims.

## Phase 3 — Commercial service landing pages (high-intent spokes)
**Objective:** capture specific high-intent queries. Pages (root-level):
`/bmw-diagnostics-dhaka/`, `/bmw-suspension-repair-dhaka/`, `/bmw-engine-repair-dhaka/`, `/mercedes-diagnostics-dhaka/`, `/mercedes-suspension-repair-dhaka/`, `/mercedes-sbc-repair-dhaka/`, `/audi-diagnostics-dhaka/`, `/hybrid-battery-repair-dhaka/`, `/prius-hybrid-battery-repair-dhaka/`, `/car-ac-repair-dhaka/`.
- Each: unique title/meta, one H1, local Dhaka relevance, service explanation, **symptoms** section, **diagnostic/process** section, **why Autobahn**, **FAQ**, `Service` + `BreadcrumbList` (+`FAQPage`) schema, sticky WhatsApp/call CTA, links up to relevant pillar(s) + `/contact/`.
- `/car-ac-repair-dhaka/` is framed for **premium/European climate-control** work (not commodity gas-refill) to protect positioning.
- **Success:** 10 live pages passing all checks; each links up to a pillar; no 404s.

## Phase 4 — Location SEO pages
**Objective:** local relevance for the affluent catchment. Pages: `/car-repair-tejgaon/`, `/car-repair-gulshan/`, `/car-repair-banani/`, `/car-repair-uttara/`.
- Each genuinely differentiated (no thin/duplicate): why owners *in that area* choose us, drive context to Tejgaon, premium/European/diagnostics/AC/suspension/hybrid relevance, directions + contact CTA, breadcrumbs, correct canonical, `AutoRepair`-with-`areaServed` + `BreadcrumbList` schema.
- **Success:** 4 distinct local pages passing all checks.

## Phase 5 — Case study templates + first case studies
**Objective:** demonstrate expertise (EEAT) safely. Hub `/case-studies/` + pages: `/case-studies/bmw-drivetrain-malfunction-diagnosis/`, `/case-studies/mercedes-air-suspension-repair/`, `/case-studies/audi-bcm2-diagnosis/`, `/case-studies/prius-p0aa6-leak-detection/`.
- **Safe wording:** these are framed as *"example diagnostic workflow / common repair scenario"* — **not** claimed as exact customer jobs unless evidence exists in-repo (it does not). Educational: symptoms, inspection steps, likely causes, process, CTA.
- `TODO(owner)`: real photos, actual before/after results, job-card/invoice references, customer permission before re-labelling as real cases.
- **Success:** hub + 4 case studies passing all checks, no fabricated customer claims.

## Phase 6 — Internal linking & sitemap
**Objective:** wire the new spokes into the link graph and the sitemap.
- Add contextual links from `/services/`, the brand/diagnostics/ECU pillars, FAQ, About, Contact, and the homepage to the relevant new live pages.
- Update `sitemap.xml` with all newly built live pages (real `lastmod`).
- Keep nav/footer lean — prefer contextual in-body links over bloating global nav.
- **Success:** every new page reachable by ≥1 contextual internal link; sitemap = live URLs only.

## Phase 7 — Verification & summary
**Objective:** prove correctness and record the wave.
- Run the verification script (`docs/seo` companion / temp script) across all pages.
- Fix every failure.
- Write [15-phase-completion-summary.md](15-phase-completion-summary.md): pages created/edited, schema added, sitemap changes, verification results, remaining `TODO(owner)`, and recommended owner actions (CloudFront deploy, GSC sitemap submission, GBP photos/reviews, real testimonial replacement).
- **Success:** all checks green; summary committed; branch pushed.

---

## CloudFront clean-URL deployment (owner runbook)

> **STATUS (2026-06-03): DONE for this deployment.** The merged viewer-request
> function in [`infra/cloudfront-subdir-index.js`](../../infra/cloudfront-subdir-index.js)
> has been **published and associated** to the distribution's **Default (\*)**
> behavior on the **Viewer request** event. It was tested in the console
> (`/services/bmw-repair-dhaka/` → `/services/bmw-repair-dhaka/index.html`).
> The steps below are retained for reference / future changes.

**Final deployed setup (what's live)**
- **One** viewer-request CloudFront Function on Default (\*), doing three jobs:
  (1) `www.autobahnsolution.com` → `https://autobahnsolution.com` (301, path preserved),
  (2) folder URLs → `…/index.html`, (3) extensionless → 301 trailing slash.
  It pre-existed as a www→apex redirect; the folder logic was **merged into it**
  (CloudFront allows only one function per event type per behavior).
- **HTTP → HTTPS** is handled by the behavior's **Viewer protocol policy =
  "Redirect HTTP to HTTPS"** (a viewer-request function cannot read the scheme),
  not by the function.
- `host` is read defensively so the console **Test** event (which may omit the
  host header) doesn't throw a TypeError.

**Attach / re-publish the function (reference)**
1. AWS Console → **CloudFront → Functions** → open the existing function (or Create one, runtime `cloudfront-js-2.0`).
2. Paste the contents of [`infra/cloudfront-subdir-index.js`](../../infra/cloudfront-subdir-index.js). **Save changes → Publish** (associations always use the latest published version).
3. If not already associated: distribution serving `autobahnsolution.com` → **Behaviors** → edit **Default (\*)** → **Function associations** → **Viewer request** → choose the function → Save. *(Only one function per event type — merge logic rather than adding a second.)*
4. Confirm **Viewer protocol policy = Redirect HTTP to HTTPS** on the same behavior.
5. Wait for the distribution to redeploy (a few minutes).

**Production preflight checklist (run after attaching)**
- [ ] Deploy a throwaway `/_preflight/index.html`; confirm `https://autobahnsolution.com/_preflight/` returns **200** (not 404). Remove it after.
- [ ] `https://autobahnsolution.com/_preflight` (no trailing slash) returns **301** → `/_preflight/`.
- [ ] `https://autobahnsolution.com/services/bmw-repair-dhaka/` returns **200** and renders.
- [ ] A real asset (`/assets/css/style.css`) still returns **200** (rewrite must not touch files with extensions).
- [ ] `https://autobahnsolution.com/sitemap.xml` and `/robots.txt` return **200**.
- [ ] Homepage `/` still returns **200** and is unaffected.
- [ ] Spot-check one page per cluster (service, location, case-study) returns **200**.
- [ ] In Google Search Console, use **URL Inspection** on 2–3 new URLs → "URL is on Google"/indexable; then **submit `sitemap.xml`**.

If a clean URL still 404s after attaching: confirm the function is on **Viewer request** (not Viewer response), is **Published**, and the behavior was saved; invalidate the CloudFront cache (`/*`).
