# 16 · Non-Google & AI Search Roadmap

*Wave 3 — after the Google foundation in docs 13–15 stabilised. Branch: `seo/non-google-and-ai-search`.*

Google SEO is now in a healthy state (29 indexed URLs, schema-valid, EEAT block, real reviews). This wave widens the surface area to **every other place a Dhaka BMW/Mercedes/Audi owner might find us** — primarily Bing, Apple, and the AI assistants. Most of these are zero-cost, complementary to the Google work, and only require small code additions plus a handful of one-off owner verifications.

> **Strategic note.** Bangladesh is overwhelmingly Google — Bing/Yandex/Baidu are statistically small here. But the *people who own a BMW or Mercedes in Dhaka* skew heavily toward iPhone (Apple Maps + Siri + Spotlight) and increasingly use AI assistants for research. That is why Apple Maps and AI search punch above their generic-market-share weight for our specific customer.

---

## 1. Target surfaces (priority order)

| # | Surface | Why it matters | What it indexes from | Effort | Priority |
|---|---|---|---|---|---|
| 1 | **Bing** | Powers Yahoo, DuckDuckGo, Ecosia, AOL, Brave Search fallback, **ChatGPT Search**, **Microsoft Copilot** — one verification unlocks ~8 downstream surfaces. | Direct crawl + sitemap; IndexNow for instant updates | S | **P1** |
| 2 | **Apple Maps / Siri / Spotlight** | The premium-customer surface. Free Apple Business Connect listing = appearance on iPhone Maps, Siri "find me a BMW workshop near me", and Spotlight search results. | Apple Business Connect (separate from any web index) | S | **P1** |
| 3 | **AI assistants** (ChatGPT, Claude, Perplexity, Gemini, Copilot, Meta AI) | Increasingly the first place high-income customers research a workshop. We want each assistant to *name Autobahn* when asked "who fixes BMWs in Dhaka". | Web crawl by their bot fleet + post-training corpora + retrieval at query time | M | **P1** |
| 4 | **IndexNow** | Single API ping notifies Bing, Yandex, Seznam (Czech), Naver (Korean) of new/changed URLs in seconds. Trivial to wire. | sitemap + push pings | S | **P1** |
| 5 | **Yandex** | Near-zero relevance in BD. Skip verification unless we get Russian-speaking expat traffic; the IndexNow ping handles it anyway. | IndexNow + (optional) Yandex Webmaster | S | P3 |
| 6 | **Baidu / Naver / Seznam** | Negligible BD market. IndexNow covers Naver + Seznam at no cost. Baidu we skip. | IndexNow | — | P3 |

## 2. AI search readiness — the strategy

AI assistants surface a business in three ways. We want to be eligible for all three:

1. **Direct retrieval at query time** — assistants with browse access (Perplexity, ChatGPT Search, Copilot, Gemini Live) fetch live URLs. The same SEO that wins Google wins here, *plus* an `llms.txt` index file makes their retrieval cheaper and more accurate.
2. **Training-corpus inclusion** — assistants without browse (older Claude, base GPT-4 class, Gemini base) only know us if their crawler ingested us during pre-training. We must explicitly allow the major crawlers in `robots.txt`.
3. **Citation-quality content** — assistants prefer to cite *named expert sources with structured data*. Our FAQ schema, case studies, and the EEAT block (named technicians, certifications, exact tools) already serve this. We add `Speakable` schema so voice surfaces (Siri, Alexa, Bixby, Google Assistant readouts) know which sentences to read aloud.

### Bot allowlist (added to robots.txt)

| Bot | Surfaces | Notes |
|---|---|---|
| `Bingbot` | Bing, Yahoo, DuckDuckGo, Ecosia, ChatGPT Search, Copilot | Already covered by `User-agent: *` — adding explicit allow for clarity |
| `Applebot` | Siri, Apple Maps, Spotlight, Safari Smart Suggest | Critical for premium-customer search |
| `Applebot-Extended` | Apple Intelligence training | Separate consent signal from `Applebot` |
| `OAI-SearchBot` | ChatGPT Search (browse) | Separate from `GPTBot` (training) |
| `GPTBot` | OpenAI training corpus | Already allowed |
| `ChatGPT-User` | ChatGPT direct user-triggered fetches | |
| `ClaudeBot` | Anthropic training & retrieval | Already allowed |
| `Claude-SearchBot` | Claude live search | Newer agent |
| `Claude-User` | User-triggered fetches by Claude | |
| `PerplexityBot` | Perplexity index | Already allowed |
| `Perplexity-User` | User-triggered fetches by Perplexity | |
| `Google-Extended` | Google Gemini & Vertex AI training | Already allowed |
| `GoogleOther` | Misc Google product crawls | |
| `CCBot` | Common Crawl → most open-source LLM training sets | High leverage |
| `Bytespider` | TikTok / ByteDance / Doubao | Surprising amount of automotive how-to traffic |
| `Meta-ExternalAgent` | Meta AI training & Llama series | |
| `Meta-ExternalFetcher` | Meta link-preview & AI retrieval | |
| `Amazonbot` | Alexa, Rufus | |
| `DuckDuckBot` | DuckDuckGo direct (most via Bing but a separate index too) | |
| `YandexBot` | Yandex (low BD relevance but free to allow) | |
| `MJ12bot`, `Diffbot`, `Mojeek` | Independent indexes used by smaller AI tools | Free to allow |
| `cohere-ai` | Cohere training | |

We **deliberately do not block** any of these. The cost of being absent from the corpus of a major AI is much higher than the cost of being crawled.

---

## 3. IndexNow

`IndexNow` is a single-POST protocol that pushes new/changed URLs to participating engines simultaneously. We host a key file (`/{key}.txt` containing only the key) at the site root, reference it in `robots.txt`, and ping `https://api.indexnow.org/indexnow` whenever we deploy.

**Participating engines:** Bing, Yandex, Seznam, Naver (and any downstream that relies on them).
**Not participating:** Google (Google ignores IndexNow; it relies on its own crawl + sitemap).

The key file is `indexnow.txt` at the site root. The key string is committed in code; it is **not a secret** — it only proves we own the domain (IndexNow re-fetches the key file at ping time to verify).

### Ping recipe (one-line per URL, or batched)

```bash
curl -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "autobahnsolution.com",
    "key": "<KEY>",
    "keyLocation": "https://autobahnsolution.com/<KEY>.txt",
    "urlList": [
      "https://autobahnsolution.com/services/bmw-repair-dhaka/"
    ]
  }'
```

Wire this into the GitHub Action that deploys to S3/CloudFront so every push that changes a page pings IndexNow with the affected URLs. Until then, do it manually after material content changes.

---

## 4. Verification placeholders

The homepage `<head>` now contains commented placeholders for:

- `<meta name="msvalidate.01" content="…">` — Bing Webmaster Tools
- `<meta name="yandex-verification" content="…">` — Yandex Webmaster (low priority for BD; commented out by default)
- `<meta name="p:domain_verify" content="…">` — Pinterest (visual product surface for detailing/before-after content)

Owner uncomments and fills in the value supplied by each tool after starting verification. Google Search Console verification is via DNS (already done) — no homepage tag needed.

---

## 5. Owner action checklist (one-off)

These cannot be done from the codebase and require ~60 minutes total:

- [ ] **Bing Webmaster Tools** — sign in with Microsoft account → "Add a site" → `https://autobahnsolution.com/` → choose meta-tag verification → paste tag into the placeholder in `index.html` → verify → submit `sitemap.xml`.
  - Alternative: "Import from Google Search Console" — one click if both use the same account email.
- [ ] **Bing Places for Business** — separate from Webmaster Tools. Imports from Google Business Profile in one click once GBP is verified. → bingplaces.com.
- [ ] **Apple Business Connect** — businessconnect.apple.com → claim Autobahn Solutions Ltd → verify (postcard / phone / video) → fill profile (use the locked NAP). Free; required for Apple Maps + Siri results.
- [ ] **IndexNow** — no signup required. After the key file is live, send one initial ping with all 29 URLs (see §3). Then add to deploy pipeline.
- [ ] **(Optional, low priority)** Yandex Webmaster — only worth doing if we see Yandex traffic in GA4. Otherwise rely on IndexNow.
- [ ] **(Optional)** Pinterest — only if we start a detailing-results / before-after photo strategy.

---

## 6. Success criteria (90 days)

- [ ] `site:autobahnsolution.com` returns ≥25 URLs in Bing.
- [ ] Bing Webmaster Tools shows ≥100 impressions/week for European-car keywords.
- [ ] Autobahn appears in Apple Maps for "BMW repair Dhaka" / "car workshop Tejgaon" with full profile.
- [ ] Direct query to ChatGPT / Perplexity / Claude with web: **"Who's the best independent BMW workshop in Dhaka?"** names Autobahn Solutions in the answer at least once across the three.
- [ ] IndexNow pings logged on every deploy in the GitHub Action.

## 7. What this wave does NOT do

- Does not write any new content pages (that's the next blog wave).
- Does not migrate to SSG / introduce a build step (deferred to T3 from doc 08).
- Does not add Bengali/Banglish pages or `hreflang` (T16).
- Does not change the CloudFront function or routing (separate ops concern).

## 8. Files changed in this wave

- `robots.txt` — explicit allow for ~20 bots, IndexNow key location reference.
- `<KEY>.txt` — IndexNow key file (root).
- `llms.txt` — concise AI-readable site index at root.
- `index.html` — commented verification meta placeholders + `Speakable` schema on FAQ.
- `docs/seo/16-non-google-and-ai-search-roadmap.md` (this file).
