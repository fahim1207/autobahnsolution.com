# 11 · Page Briefs, Templates & Infra Snippets

*Copy-paste-ready specs so Dev and Content can ship without re-deriving anything. 2026-06-02.*

Conventions: replace `{BRAND}`, `{SERVICE}`, `{AREA}` placeholders. Use the locked NAP from [README.md](README.md). Title ≤ 60 chars, meta description ≤ 155 chars.

---

## 1. On-page brief template (use for every commercial page)

```
URL:            /services/{slug}/
Primary KW:     {primary keyword}
Secondary KW:   {2–4 supporting terms}
Search intent:  commercial / problem-solving
Title:          {Primary KW, title case} | Autobahn Solutions
Meta desc:      {value prop} in Dhaka — {differentiator}. Call +880 1734-205682 / WhatsApp.
H1:             {Primary KW, natural phrasing}
H2 outline:     1) What we do  2) {Brand/Service}-specific faults/issues we fix
                3) Our process & equipment  4) Why a specialist (vs generic/dealer)
                5) Models/scope covered  6) FAQ  7) Reviews  8) Book / contact
CTAs:           Sticky WhatsApp + Call; in-body "Get a quote on WhatsApp"; diagnostic booking
Internal links: up → /services/ hub; cross → related service/brand pages; down → blog spokes
Schema:         Service + BreadcrumbList + FAQPage
Media:          real workshop/car photos, descriptive filenames + alt
```

### Brand-page brief example — BMW
```
URL:        /services/bmw-repair-dhaka/
Primary:    BMW repair Dhaka
Secondary:  BMW service Bangladesh, BMW specialist Dhaka, BMW ECU coding, BMW diagnostics
Title:      BMW Repair & Service in Dhaka | Autobahn Solutions
Meta desc:  Specialist BMW repair, diagnostics & ECU coding in Tejgaon, Dhaka. OEM-grade tools, expert techs. WhatsApp +880 1734-205682.
H1:         BMW Repair & Diagnostics Specialists in Dhaka
H2s:        BMW services we offer · Common BMW faults we fix in Dhaka (EML, drivetrain
            malfunction, electrical) · BMW ECU coding & programming · Our diagnostic
            equipment · BMW models we service · Why choose a BMW specialist · FAQ · Reviews
Links up:   /services/ · cross: /services/ecu-coding-programming-dhaka/, /car-diagnostics-dhaka/,
            /auto-electrical-repair-dhaka/ · down: /blog/bmw/* spokes · /locations/gulshan/
```
*(Replicate for Mercedes, Audi, Porsche, Land Rover, etc. — swap brand-specific faults: Mercedes limp mode/AdBlue; Audi EPC/DSG; Land Rover air suspension.)*

### Specialist-service brief example — ECU coding
```
URL:        /services/ecu-coding-programming-dhaka/
Primary:    ECU coding & programming Dhaka
Secondary:  ECU programming Bangladesh, module coding, ECU tuning, retrofit coding
Title:      ECU Coding & Programming in Dhaka | Autobahn Solutions
Meta desc:  Professional ECU coding, programming & module retrofits for European cars in Dhaka. OEM-grade equipment. WhatsApp +880 1734-205682.
H1:         ECU Coding & Programming in Dhaka
H2s:        What ECU coding/programming is · When you need it · Coding vs programming vs
            tuning · Brands we code (BMW/Merc/Audi/VW/Porsche…) · Our equipment & process ·
            FAQ · Book a session
Links:      up → /services/; cross → every brand page; down → /blog/diagnostics/* , ECU guide
```

### Location-page brief example — Gulshan
```
URL:        /locations/gulshan/
Primary:    luxury car repair Gulshan
Title:      Luxury & European Car Repair in Gulshan | Autobahn Solutions
Meta desc:  BMW, Mercedes & Audi specialist serving Gulshan from our Tejgaon workshop. ~15 min away. WhatsApp +880 1734-205682.
H1:         European & Luxury Car Repair for Gulshan
Must differ: drive route/time Gulshan→Tejgaon, why Gulshan owners choose us, local reviews
Schema:     AutoRepair (areaServed Gulshan) + BreadcrumbList
```

---

## 2. Title & meta patterns (per page type)

| Page type | Title pattern | Meta description pattern |
|---|---|---|
| Brand | `{Brand} Repair & Service in Dhaka \| Autobahn Solutions` | `Specialist {Brand} repair, diagnostics & ECU coding in Dhaka. OEM-grade tools. WhatsApp +880 1734-205682.` |
| Specialist service | `{Service} in Dhaka \| Autobahn Solutions` | `{Service} for European & premium cars in Dhaka. {differentiator}. Call/WhatsApp +880 1734-205682.` |
| Location | `{Segment} Car Repair in {Area} \| Autobahn Solutions` | `{Brands} specialist serving {Area} from Tejgaon. {drive time}. WhatsApp +880 1734-205682.` |
| Blog | `{Question/Topic} — Autobahn Solutions` | `{1-line answer + who it's for}. Expert European-car help in Dhaka.` |
| FAQ | `Car Repair FAQ — BMW, Mercedes, Audi in Dhaka \| Autobahn Solutions` | `Answers on European car repair, diagnostics, ECU coding, hybrid batteries & booking in Dhaka.` |

---

## 3. Schema snippets

### 3a. Service (per service/brand page)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "BMW Repair & Diagnostics",
  "provider": { "@id": "https://autobahnsolution.com/#business" },
  "areaServed": [
    {"@type":"City","name":"Dhaka"},
    {"@type":"Place","name":"Gulshan"},
    {"@type":"Place","name":"Banani"},
    {"@type":"Place","name":"Tejgaon"}
  ],
  "url": "https://autobahnsolution.com/services/bmw-repair-dhaka/",
  "name": "BMW Repair & Service in Dhaka"
}
</script>
```

### 3b. BreadcrumbList (every non-home page)
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"BreadcrumbList",
  "itemListElement":[
    {"@type":"ListItem","position":1,"name":"Home","item":"https://autobahnsolution.com/"},
    {"@type":"ListItem","position":2,"name":"Services","item":"https://autobahnsolution.com/services/"},
    {"@type":"ListItem","position":3,"name":"BMW Repair Dhaka","item":"https://autobahnsolution.com/services/bmw-repair-dhaka/"}
  ]
}
</script>
```

### 3c. Organization (add once, e.g. homepage; reuse `@id`)
```html
<script type="application/ld+json">
{
  "@context":"https://schema.org","@type":"Organization",
  "@id":"https://autobahnsolution.com/#org",
  "name":"Autobahn Solutions Ltd",
  "url":"https://autobahnsolution.com/",
  "logo":"https://autobahnsolution.com/assets/images/brand-logo.png",
  "sameAs":[
    "https://www.facebook.com/autobahnsolutions",
    "https://www.instagram.com/autobahnsolutionsltd",
    "https://youtube.com/@asl_garage",
    "https://www.linkedin.com/company/autobahn-solutions-limited/"
  ]
}
</script>
```

### 3d. aggregateRating / Review — ONLY with real reviews (audit T4)
```html
<!-- Place on the business node or a page that genuinely shows these reviews.
     Numbers MUST reflect real Google reviews, or it violates Google policy. -->
"aggregateRating": { "@type":"AggregateRating", "ratingValue":"4.9", "reviewCount":"37" }
```

### 3e. FAQPage (FAQ hub + on-page FAQ blocks) — follow the existing homepage pattern in `index.html` (already correct).

---

## 4. Infra snippets

### 4a. CloudFront Function — sub-directory index rewrite (audit T2)
Attach as a **viewer-request** function to the distribution. Makes `…/path/` serve `…/path/index.html` and adds trailing slashes to extensionless paths.
```js
function handler(event) {
  var req = event.request;
  var uri = req.uri;
  if (uri.endsWith('/')) {
    req.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    // extensionless → redirect to trailing-slash canonical
    return {
      statusCode: 301, statusDescription: 'Moved Permanently',
      headers: { 'location': { value: uri + '/' } }
    };
  }
  return req;
}
```
**Test:** deploy `/test-page/index.html`, confirm `https://autobahnsolution.com/test-page/` → 200 and `/test-page` → 301 → `/test-page/`. Remove the test page after.

### 4b. GA4 lead-conversion events (audit T11 / opportunity A5/F2)
Add to `assets/js/main.js`; mark `generate_lead` as a key event in GA4.
```js
function trackLead(method){ if(window.gtag){ gtag('event','generate_lead',{method:method}); } }
// Attach to the existing CTAs:
document.querySelectorAll('a[href^="https://wa.me"], a[href*="wa.me"]').forEach(function(a){
  a.addEventListener('click', function(){ trackLead('whatsapp'); });
});
document.querySelectorAll('a[href^="tel:"]').forEach(function(a){
  a.addEventListener('click', function(){ trackLead('call'); });
});
// On future form submit: trackLead('form');
```

### 4c. Sitemap entry (per new page — uncomment/add in `sitemap.xml`, real date)
```xml
<url>
  <loc>https://autobahnsolution.com/services/bmw-repair-dhaka/</loc>
  <lastmod>2026-06-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

### 4d. WhatsApp deep link with prefilled, per-service message (F5)
```
https://wa.me/8801734205682?text=Hi%20Autobahn%2C%20I%20need%20BMW%20diagnostics.%20My%20issue%20is%3A%20
```

### 4e. Blog build note (audit T3)
`*.md` is excluded from the S3 sync. If the blog is Markdown-driven, commit **built HTML** or add a build step in `.github/workflows/main.yml` **before** `aws s3 sync`. Bump `CACHE_NAME` in `sw.js` and keep HTML network-first so new pages aren't served stale.

---

## 5. Page-build checklist (mirror of "Definition of Done" in doc 10)
- [ ] Title/meta/H1 per pattern · [ ] best-in-BD body · [ ] schema validated
- [ ] sticky + in-body CTAs · [ ] internal links + breadcrumb · [ ] image alt/dims
- [ ] sitemap updated · [ ] mobile-checked · [ ] submitted to GSC
