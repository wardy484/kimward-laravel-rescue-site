# Autonomous SEO Backlog

## Blockers / access gaps

- [ ] **Search Console access not confirmed.** Need property for `https://kimward.co.uk/` or domain property `kimward.co.uk`, plus a usable API path/credential. Current `gws` CLI exposes Google Workspace APIs but not Search Console.
- [ ] **Analytics access not confirmed.** No GA4/analytics tag found in repo during initial grep.
- [ ] **Production deploy verification via Laravel Cloud monitor not fully automated.** Push-to-deploy is confirmed, but cron should verify with public HTTP checks and use Cloud deployment commands if available.

## P0 — technical SEO basics

- [ ] Add `/sitemap.xml` for the single-page site.
  - Evidence: initial public check returned `404` for `https://kimward.co.uk/sitemap.xml`.
  - Acceptance: `/sitemap.xml` returns 200, references `https://kimward.co.uk/`, and `robots.txt` references sitemap URL.
- [ ] Add canonical URL in the page head.
  - Acceptance: homepage contains `<link rel="canonical" href="https://kimward.co.uk/">`.
- [ ] Add Open Graph and Twitter metadata.
  - Acceptance: title, description, image/card tags are present and match current positioning.
- [ ] Add Schema.org JSON-LD.
  - Suggested type: `Person` + `ProfessionalService` or `LocalBusiness`-style service object.
  - Acceptance: valid JSON-LD, no fake business address/phone.

## P1 — proof and conversion

- [ ] Add compact Tutorful proof section.
  - Source: `/root/workspace/kim-brain/projects/tutorful-proof-catalogue.md`.
  - Acceptance: public-safe wording, no private metrics, no internal screenshots, no over-claiming.
- [ ] Add a short “good first task” email prompt near contact CTA.
  - Acceptance: tells prospects exactly what to send first.
- [ ] Check LinkedIn and Upwork links manually.
  - Automated HEAD checks can be blocked by LinkedIn/Upwork; human click-check needed.

## P2 — measurement

- [ ] Add Search Console property and API access.
- [ ] Add privacy-safe analytics if Kim wants measurement beyond Search Console.
- [ ] Create weekly KPI snapshot once data exists: impressions, clicks, CTR, queries, pages.

## P3 — performance/content polish

- [ ] Run Lighthouse/Core Web Vitals baseline.
- [ ] Review rendered desktop/mobile screenshots after each visual/content change.
- [ ] Consider a dedicated `/laravel-support` page only after first outreach data suggests the homepage needs more search depth.
