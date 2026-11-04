# Next blog posts: handoff briefs (Nov 2026)

*Prepared 4 Nov 2026 by Claude Code from a review of the 15 live posts against `SEO_CONTENT_STRATEGY.md`.*

These are **briefs, not copy**. Under the strategy's workflow, Claude in chat drafts the prose from each brief, Animesh approves it, and Claude Code then does the repo side (frontmatter, links, assets, build, PR).

**Read before drafting:**
- **Keyword volumes are unvalidated.** The target keywords below are based on search intent, not on Search Console or Ahrefs data. Re-rank this list once volumes are pulled.
- **Facts marked "Verify"** come from secondary sources found during research (training providers, certification bodies' news pages). Check each one against the primary text (the BS itself, IET or BSI publications, NSI or BAFE guidance) before it goes in a post.

## Priority order

| # | Page | Calendar | Type | Blocked by |
|---|---|---|---|---|
| 1 | EICR certificate template | Row #1 | Template (MOFU) | PDF export of the Opscel EICR (A4:2026 version), and a template page route |
| 2 | BS 7671 Amendment 4: what changed | **Not in calendar**: needs a row | Guide (TOFU) | Approval to add it |
| 3 | Emergency lighting testing (BS 5266-1) | **Not in calendar**: needs a row | Guide (TOFU) | Approval to add it |
| 4 | Fire alarm certificates explained (BS 5839-1) | **Not in calendar**: needs a row | Guide (TOFU/MOFU) | Approval to add it |
| 5 | Electrical quote software | Row #9 | Spoke (BOFU) | Open decision: spoke URL vs `/features/quotations` |

---

## 1 · EICR certificate template (calendar #1)

- **Target keyword:** `eicr certificate template`. **Secondary:** `eicr template`, `eicr form pdf`, `electrical installation condition report template`.
- **Slug:** `/templates/eicr-certificate-template`. A new route is needed: there's no template route in the repo yet.
- **Title (≤60):** `Free EICR Certificate Template (BS 7671:2018+A4:2026)`
- **Meta (≤160):** `Download a free EICR certificate template in PDF, updated for BS 7671:2018+A4:2026. What each section means and how to fill it in, page by page.`
- **Status:** the copy and Word template were drafted on 12 Oct (per the strategy doc).
- **Repo-side tasks:**
  1. Create the template page route and add it to `sitemap.ts`.
  2. Host the PDF in `public/templates/`, **ungated** (the strategy's gating rule).
  3. Add the optional email block for the editable Word version.
  4. Link to the template from `/blog/what-is-an-eicr`, `/blog/bs-7671-eicr-codes-explained` and `/blog/eic-vs-eicr-vs-minor-works-certificate`.
- **Blocker:** the template must follow the **A4:2026** model form. The strategy's open item says the live EICR output still cited A2:2022, so confirm the product fix shipped before exporting the PDF.
- **Illustration scene:** an electrician at a consumer unit with a clipboard. Teal dominant, no readable text.

## 2 · BS 7671 Amendment 4 (2026): what changed for electricians

- **Target keyword:** `bs 7671 amendment 4`. **Secondary:** `a4 2026 changes`, `18th edition amendment 4`, `orange book wiring regs`.
- **Slug:** `/blog/bs-7671-amendment-4-2026-changes`
- **Title (≤60):** `BS 7671 Amendment 4 (2026): What Changed for Electricians`
- **Meta (≤160):** `What BS 7671:2018+A4:2026 changed: new battery and PoE rules, EICR outcomes, and the dates that matter now the transition period has ended.`
- **Searcher:** electricians, contractor owners and trainees. This is a contractor-intent post, so the bridge to Opscel can come earlier than in landlord-facing posts.
- **Why now:** this is time-sensitive. A4 was published 15 Apr 2026 and A3 was withdrawn 15 Oct 2026, so search interest is at its peak. The three EICR posts already state A4 facts, and this gives them one page to link to.
- **Suggested outline (H2s as questions):**
  1. What is BS 7671 Amendment 4, and when did it take effect? (direct answer in the first two sentences)
  2. What changed for EICRs? (C3 and FI no longer make a report unsatisfactory; only C1 or C2 do)
  3. What are the new battery storage rules?
  4. What does the new Power over Ethernet section cover?
  5. What else changed? (medical locations, functional earthing, PNB earthing recognition)
  6. What do you need to do now? (certificates, forms, software, qualifications)
  7. TL;DR table: change → who it affects → what to do
- **Required table:** A3 vs A4 side by side, covering EICR outcome rule, battery storage, PoE and forms.
- **Verify:**
  - Publication date 15 Apr 2026: confirmed by the IET press release.
  - The A3 withdrawal date (15 Oct 2026) and the 2382-22 qualification dates (registration closes 31 Jul 2026, certification closes 31 Dec 2026): sources differ.
  - The battery chapter number (sources say both Ch. 57 and Ch. 81).
  - Section 716 for PoE, and the 750 mA per contact figure.
  - The functional earthing section number (545?).
  - The scope of the medical locations (Section 710) change.
  - **Use the Orange Book or the IET's own summary as the source, not training-provider blogs.**
- **Internal links:**
  - [/blog/what-is-an-eicr](/blog/what-is-an-eicr)
  - [/blog/bs-7671-eicr-codes-explained](/blog/bs-7671-eicr-codes-explained)
  - [/blog/eic-vs-eicr-vs-minor-works-certificate](/blog/eic-vs-eicr-vs-minor-works-certificate)
  - [/features/certificates](/features/certificates)
  - [/docs/certificates](/docs/certificates)
- **CTA:** Opscel's EIC, EICR and Minor Works certificates follow the A4 model forms → `/features/certificates`. **Only state this if the product fix is confirmed live.**
- **Disclaimer:** required, since the post makes regulatory claims.
- **Tags:** `electrical`, `BS 7671`, `compliance`, `guides`
- **Illustration scene:** an electrician comparing a new regulations book against a consumer unit, with a battery storage unit in the background.

## 3 · Emergency lighting testing: monthly and annual checks (BS 5266-1)

- **Target keyword:** `emergency lighting testing`. **Secondary:** `how often should emergency lighting be tested`, `emergency lighting test requirements`, `bs 5266 testing`, `emergency light flick test`.
- **Slug:** `/blog/emergency-lighting-testing-bs-5266`
- **Title (≤60):** `Emergency Lighting Testing: Monthly & Annual (BS 5266-1)`
- **Meta (≤160):** `How often emergency lighting must be tested under BS 5266-1, what the monthly and annual full-duration tests involve, who is responsible, and what to record.`
- **Searcher:** Responsible Persons, facilities managers and landlords. Write for them, then bridge to the contractor at the end (the same pattern as the FRA post).
- **Why:** it rebalances the blog towards fire safety (currently 4 fire posts vs 7 electrical), and Opscel already issues emergency lighting certificates.
- **Suggested outline:**
  1. How often should emergency lighting be tested? (direct answer: a short monthly functional test plus an annual full rated-duration test)
  2. Is emergency lighting testing a legal requirement? (duty under the RRO 2005 via the FRA; BS 5266-1 as the recognised code of practice)
  3. What happens in a monthly test?
  4. What happens in the annual full-duration test? (usually 3 hours; timing it to limit risk while batteries recharge)
  5. Who can do the tests: the Responsible Person or a competent contractor?
  6. What should go in the logbook?
  7. Self-test and automatic test systems (BS EN 62034)
  8. Summary table: test → frequency → duration → who → what to record
- **Required table:** monthly vs annual tests, covering purpose, duration, who does it and the record.
- **Verify:**
  - The current edition is BS 5266-1:2016, unless it has been superseded. Check BSI.
  - The exact monthly test wording ("short functional test").
  - The annual test is the "full rated duration". Sources mention shorter durations for some systems; check the conditions.
  - The 6-monthly scheme quoted in older material is from **BS 5266-1:2011** and is superseded. **Don't repeat it.**
  - Primary sources: the FPA guidance and BS 5266-1 / BS EN 50172.
- **Internal links:**
  - [/blog/fire-risk-assessment-uk](/blog/fire-risk-assessment-uk)
  - [/blog/fire-alarm-servicing-bs-5839-1-2025](/blog/fire-alarm-servicing-bs-5839-1-2025)
  - [/features/certificates](/features/certificates)
  - Later, brief #4 once it's live, using a placeholder until then.
- **CTA:** contractors can log test results on site and issue the emergency lighting certificate from the job → `/features/certificates`.
- **Disclaimer:** required.
- **Tags:** `fire safety`, `compliance`, `guides`. Consider adding `emergency lighting` as a new tag.
- **Illustration scene:** a fire/electrical engineer pressing a test key under an emergency exit sign in a corridor, with an office coordinator holding a logbook.

## 4 · Fire alarm certificates explained: which one do you issue? (BS 5839-1)

- **Target keyword:** `fire alarm certificate`. **Secondary:** `fire alarm commissioning certificate`, `fire alarm installation certificate`, `bs 5839 certificates`, `fire alarm service certificate`.
- **Slug:** `/blog/fire-alarm-certificates-bs-5839-1`
- **Title (≤60):** `Fire Alarm Certificates Explained: Which One Do You Need?`
- **Meta (≤160):** `Design, installation, commissioning, acceptance or servicing? Which BS 5839-1:2025 fire alarm certificate applies to each stage of the work, and who signs it.`
- **Searcher:** fire alarm engineers and installers, and building managers asking for "the fire alarm certificate". The post serves both, contractor-first.
- **Why:** it mirrors the structure of "EIC vs EICR vs Minor Works" on the fire side, and pairs with the BS 5839-1:2025 servicing post.
- **Suggested outline:**
  1. What is a fire alarm certificate? (direct answer: it's not one document; BS 5839-1 has a certificate for each stage)
  2. What are the certificate types? Design, installation, commissioning, acceptance, verification, inspection and servicing, modification
  3. Which certificate for which job? (new system, extension, replacement panel, routine service)
  4. Who signs each one, and can one company sign several?
  5. What changed with BS 5839-1:2025? (renumbered model forms; certificates must cite 2025 for work started after 30 Apr 2025)
  6. Where does BAFE SP203-1 fit?
  7. Summary table: job → certificate(s) → who signs
- **Required table:** job scenario → certificates needed.
- **Verify:**
  - The full list of model certificates and their annex letters in BS 5839-1:2025. One source cites Annex G for the inspection and servicing certificate and Annex H for the logbook.
  - The transition rules per NSI guidance: 2025 took effect 30 Apr 2025 and 2017 is withdrawn.
  - Clause 25.1, which points electrical installation aspects to BS 7671.
  - The current version of the BAFE SP203-1 scheme.
  - **Don't state annex or figure numbers you can't check in the standard.**
- **Internal links:**
  - [/blog/fire-alarm-servicing-bs-5839-1-2025](/blog/fire-alarm-servicing-bs-5839-1-2025)
  - [/blog/defect-to-remedial-quote-fire-alarm-contractors](/blog/defect-to-remedial-quote-fire-alarm-contractors)
  - [/blog/eic-vs-eicr-vs-minor-works-certificate](/blog/eic-vs-eicr-vs-minor-works-certificate) (cross-trade)
  - [/features/certificates](/features/certificates)
- **CTA:** issue the right BS 5839-1 certificate from the job, with signatures captured on site → `/features/certificates`. Confirm which fire alarm certificate types Opscel supports before naming them.
- **Disclaimer:** required.
- **Tags:** `fire safety`, `BS 5839`, `fire alarm`, `compliance`, `guides`
- **Illustration scene:** two engineers at a fire alarm panel, one handing a clipboard to a building manager.

## 5 · Electrical quote software (calendar #9)

- **Target keyword:** `electrical quote software`. **Synonyms folded in:** `electrical estimating software`, `quotation software for electricians`, `electrical quote generator`.
- **Recommendation:** **optimise `/features/quotations`** rather than publishing a new spoke URL, at least until the open decision is made. A new page at `/electrical-quote-software-uk` would compete with the existing feature page for the same intent, which breaks the strategy's "one page per intent" rule.
- **Repo-side, if approved:**
  1. Retune the feature page's title and description, which come from the `IFeatureDetail` data in `src/data/featureDetails/quotations.ts`.
  2. Add the synonyms as H2s or FAQ entries. **Copy for those still comes through the chat workflow.**
  3. Add a sideways link from `/blog/how-to-price-electrical-work`.
- **Gate:** the strategy puts Phase 2 after Phase 1 is indexed. Phase 1 is complete except for the template pages.

---

## Housekeeping found in this review

- **Done in this PR:** meta titles and descriptions tightened on 8 posts, bringing the SEO audit from 11 warnings to 1. No body copy changed.
- **Open: hero image.** `fire-alarm-servicing-bs-5839-1-2025` has no hero image. It needs an illustration per the strategy's checklist.
- **Open: old-style heroes.** `eicr-codes.png` and `electrical-contractors-software.png` are the older text-bearing PNG heroes. Replace them with checklist-compliant `.webp` illustrations.
- **Open: head-term post.** `job-management-software-electrical-contractors` targets the hub's head term (#24, Phase 3). When the hub is built, merge this post into it or retarget it, so the two don't compete.

### Research sources (secondary: verify against primaries)

- [IET press release, 15 Apr 2026: Amendment 4 published](https://www.theiet.org/media/press-releases/press-releases-2026/press-releases-2026-april-june/15-april-2026-iet-bsi-officially-publish-amendment-4-2026-to-bs-76712018-iet-wiring-regulations)
- [NICEIC: Understanding Amendment 4](https://niceic.com/amendment-four/)
- [EAL: Amendment 4 key changes](https://eal.org.uk/news/bs-7671-amendment-4-2026-key-changes-to-the-iet-wiring-regulations-explained)
- [FPA: How to test emergency lighting](https://www.thefpa.co.uk/advice-and-guidance/advice-and-guidance-articles/how-to-test-emergency-lighting)
- [NSI: Publication of BS 5839-1:2025](https://documents.nsi.org.uk/wp-content/uploads/2025/05/NSI-005-25-Publication-of-BS-5839-1_2025.pdf)
- [IET Wiring Matters: Key changes to BS 5839-1:2025 (part 2)](https://electrical.theiet.org/wiring-matters/years/2025/108-november-2025/key-changes-to-bs-5839-12025-part-2/)
- [FIA: Understanding BS 5839-1:2025](https://www.fia.uk.com/news/understanding-bs-5839-1-2025-and-your-route-to-compliance.html)
