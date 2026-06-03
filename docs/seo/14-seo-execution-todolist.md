# 14 · SEO Execution To-Do List (this wave)

*Phased, checkable task list for the second build wave. Created 2026-06-03. Companion to [13-next-seo-implementation-roadmap.md](13-next-seo-implementation-roadmap.md). Status is updated as each phase is committed.*

Legend: `[x]` done in-repo · `[ ]` pending · `TODO(owner)` requires real business data or external access.

---

## PHASE 1 — Technical deployment readiness
- [x] Review `infra/cloudfront-subdir-index.js`
- [x] Add CloudFront attach runbook to doc 13
- [x] Add production preflight checklist to doc 13
- [x] Improve `infra/README.md` with deploy + preflight pointers
- [x] **DONE (2026-06-03):** merged viewer-request function published & associated to Default (*) on Viewer request; console-tested OK
- [x] **DONE:** HTTP→HTTPS confirmed via Viewer protocol policy (not the function)
- [ ] TODO(owner): run the live preflight curl checks **after this branch is merged to `main` and deployed to S3** (the new pages only exist in production post-deploy); invalidate CloudFront cache (`/*`) if any stale 404

## PHASE 2 — EEAT completion
- [x] Strengthen `/about/`: brands-specialised, quality-control sections; keep schema valid
- [x] Strengthen homepage EEAT/trust (workshop process, warranty, quality control) without breaking design
- [ ] TODO(owner): founding year / years in business (replace "15+ years" if a precise figure is preferred)
- [ ] TODO(owner): number of technicians + their certifications/training bodies
- [ ] TODO(owner): number of vehicles serviced / years operating
- [ ] TODO(owner): exact diagnostic equipment brands/tools (e.g. specific OEM systems) if you want them named
- [ ] TODO(owner): real customer reviews to replace homepage placeholder testimonials + add review schema

## PHASE 3 — Commercial service landing pages
- [x] `/bmw-diagnostics-dhaka/`
- [x] `/bmw-suspension-repair-dhaka/`
- [x] `/bmw-engine-repair-dhaka/`
- [x] `/mercedes-diagnostics-dhaka/`
- [x] `/mercedes-suspension-repair-dhaka/`
- [x] `/mercedes-sbc-repair-dhaka/`
- [x] `/audi-diagnostics-dhaka/`
- [x] `/hybrid-battery-repair-dhaka/`
- [x] `/prius-hybrid-battery-repair-dhaka/`
- [x] `/car-ac-repair-dhaka/` (premium climate-control framing)
- [x] Each: unique title/meta, one H1, symptoms, process, why-Autobahn, FAQ, Service+Breadcrumb(+FAQ) schema, sticky CTA, links up to pillar + /contact/

## PHASE 4 — Location SEO pages
- [x] `/car-repair-tejgaon/`
- [x] `/car-repair-gulshan/`
- [x] `/car-repair-banani/`
- [x] `/car-repair-uttara/`
- [x] Each differentiated (no thin/duplicate); area-specific rationale; directions/contact CTA; AutoRepair+Breadcrumb schema

## PHASE 5 — Case studies
- [x] `/case-studies/` hub
- [x] `/case-studies/bmw-drivetrain-malfunction-diagnosis/`
- [x] `/case-studies/mercedes-air-suspension-repair/`
- [x] `/case-studies/audi-bcm2-diagnosis/`
- [x] `/case-studies/prius-p0aa6-leak-detection/`
- [x] Safe "example workflow / common scenario" wording; educational; CTA
- [ ] TODO(owner): real photos, before/after results, job-card/invoice references, customer permission before labelling as actual cases

## PHASE 6 — Internal linking & sitemap
- [x] Link new pages from `/services/`, brand/diagnostics/ECU pillars, FAQ, About, Contact, homepage (contextual)
- [x] Update `sitemap.xml` with all live new pages
- [x] Keep nav/footer lean

## PHASE 7 — Verification & summary
- [x] Run verification: 1×H1, canonical, JSON-LD validity, GA4 present, no broken internal links, no relative-path leaks, sitemap=live-only
- [x] Fix all failures
- [x] Write [15-phase-completion-summary.md](15-phase-completion-summary.md)
- [ ] TODO(owner): submit sitemap in Google Search Console after CloudFront deploy
- [ ] TODO(owner): upload GBP photos + drive real reviews

> Checkboxes marked `[x]` reflect work completed **in the repository**. Items marked `TODO(owner)` are external (AWS, GSC, GBP) or require real business data and cannot be completed from the codebase.
