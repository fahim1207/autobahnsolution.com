# Infra

Operational/infrastructure assets that are **not** part of the deployed site.

## `cloudfront-subdir-index.js`
A CloudFront **viewer-request Function** that makes clean folder URLs (e.g.
`/services/bmw-repair-dhaka/`) resolve to their `index.html` on an S3-origin
distribution, and 301-redirects extensionless paths to the trailing-slash
canonical form.

**Why it's needed:** plain S3-origin CloudFront does not serve directory index
documents automatically, so every folder-based page on this site would 404
without it. This is a one-time AWS setup — deploy steps are in the file header.

> **TODO(owner): this function is NOT yet deployed.** Until it is attached to the
> CloudFront distribution (Viewer request event) and published, every clean
> folder URL — `/services/…/`, `/bmw-diagnostics-dhaka/`, `/car-repair-tejgaon/`,
> `/case-studies/…/`, `/about/`, `/contact/`, `/faq/` — will return 404 in
> production.
>
> Full attach **runbook + production preflight checklist** (test clean URLs,
> trailing-slash 301, asset pass-through, sitemap submission) is in
> [`docs/seo/13-next-seo-implementation-roadmap.md`](../docs/seo/13-next-seo-implementation-roadmap.md)
> under "CloudFront clean-URL deployment (owner runbook)".

> Note: `*.md` files (including this one) are excluded from the S3 sync by
> `.github/workflows/main.yml`, so this folder stays internal to the repo.
> The `.js` function here is **not** auto-deployed either — it is applied
> manually in the CloudFront console. (It is harmless if synced to S3; it is
> never linked from the site.)
