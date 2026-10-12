# Opscel SEO & Content Strategy

*Oct 12, 2026 · Animesh Chowdhury. Transcribed from "Opscel SEO & Content Strategy" (PDF). This file is the copy that Claude Code sessions read. When a strategy decision changes, update it here.*

## Purpose

This doc is the "why" behind Opscel's SEO programme; the calendar spreadsheet (`Opscel_SEO_Content_Calendar.xlsx`) is the "what and when". Any new strategy decision gets written here, so a new chat session or Claude Code picks it up without re-explaining.

- **This doc:** goals, rules, policies, workflow, open decisions.
- **Calendar spreadsheet:** one row per page (26 pages), keywords, briefs, linking, illustration scene, status.
- **Source keyword list:** the original Google Sheet, superseded by the consolidated calendar.

## Goals, ICP and competition

The goal is organic acquisition of UK compliance-heavy trade contractors, by owning electrical and fire-safety topics before attacking broad head terms.

**Buyer (ICP):** UK electrical and fire safety contractors, from sole traders to small multi-engineer firms. Gas and heating engineers are a secondary segment.

**Searcher vs buyer:** on informational queries ("what is an EICR", "PAT testing requirements") the searcher is usually a landlord, owner or manager, not the contractor. We write for the searcher and bridge to the contractor at the end of the page.

**Competition:** head terms are held by established domains: Tradify, Commusoft, Joblogic, BigChange, simPRO and Powered Now. A newer domain cannot outrank them early, so we win long-tail, templates and guides first.

## Content types

The calendar has 26 pages across six types; product announcements sit outside it.

| Type | Funnel | Job it does | Pages |
|---|---|---|---|
| Template | MOFU | Free certificate download, lead capture, backlinks | #1–4 |
| Informational guide | TOFU | Answers compliance questions, feeds links to spokes | #5–8 |
| Feature page (spoke) | BOFU | One page per buyer intent, synonyms folded in | #9–17 |
| Persona / integration page | BOFU | Sole trader, small team, accounting tie-in | #18–20 |
| Pillar / hub | BOFU | Broad category terms, links down to every spoke | #21–24 |
| Comparison | BOFU | Shortlist intent, honest table incl. competitors | #25–26 |
| Product announcement | Existing users, prospects | New feature launches (e.g. the Planner); no keyword target | Outside calendar |

## Sequencing

Pages are ordered by how winnable they are, not by theme. Win templates and guides first; attack head terms last.

| Phase | Pages | What |
|---|---|---|
| 1 · Fast wins | #1–8 | 4 templates, 4 guides. Low difficulty, rank fastest. Feed links into Phase 2 pages |
| *Gate:* keyword volumes validated, dates re-planned | | |
| 2 · Commercial | #9–20 | One page per buyer intent. Feature, persona, integration. Synonyms folded into one page |
| *Gate:* electrical and fire spokes live and indexed | | |
| 3 · Head terms | #21–26 | Pillars, hub, comparisons. Most contested terms. Only once spokes rank |

Phase 1 pages rank fastest and pass link equity into Phase 2 spokes. Pillars and the hub only work once those spokes exist and rank.

## Keyword consolidation and linking

About 50 raw keywords became 26 pages, one per search intent, joined in a hub-and-spoke structure. Every spoke links up to its pillar; every pillar links up to the hub.

- **Hub:** Job management software UK · #24. Comparisons (#25–26) link to the hub.
- **Electrical pillar · #21:** Quote software #9 · EICR software #10 · Job scheduling #11 · Invoicing #12 · PAT testing software #13 · CRM #14 · Sole traders #18 · Small teams #19 · Accounting tie-in #20
- **Fire safety pillar · #22:** Gas safety software #15 · Fire risk assessment #16 · Boiler maintenance #17
- **Multi-trade pillar · #23:** bridges both pillars (electrical, fire and gas)
- **Guides and templates (#1–8)** link sideways into the matching spoke page.

Each spoke links up to its pillar and each pillar links down to all its spokes. Guides and templates link sideways into the commercial page that matches their topic.

Examples of intent consolidation:

- Six quote synonyms (estimating, quotation, generator…) → one page, #9.
- EICR software plus "electrical testing report software" → one page, #10.
- Dispatch software folded into job scheduling, #11.
- Gas certificate, Gas Safe and gas safety record software → one page, #15.

## Editorial rules

Every page is accurate first and persuasive second; a wrong compliance claim costs more trust than a soft hook loses.

- **Verify before drafting.** Any legal or regulatory claim is checked against current sources first, and names the regulation (e.g. Electrical Safety Standards Regulations 2020, RRO 2005).
- **Write for who searches.** Match the dominant search intent, even when the searcher isn't the buyer. The contractor CTA goes at the end.
- **One page per intent.** Near-synonyms become H2s or FAQ entries on one page, never separate posts.
- **No false precision.** Where sources disagree (day rates, fees), give ranges plus the method, not one confident number.
- **No overclaiming.** PAT testing is duty-based, not a named statute. Opscel is not accounting software.
- **Show freshness.** Include 2026 changes where relevant: BS 7671:2018+A4:2026, social-landlord duties from May 2026, PEEP regulations.
- **Close with a soft CTA** to the matching feature page, and a short disclaimer on any page making legal claims.
- **Links to unbuilt pages** use a placeholder Claude Code can find and replace, never a live dead link.
- **UK English**, plain words, short paragraphs.

## Lead capture and gating

Core template downloads stay ungated; email capture is an optional extra below the download, never a wall in front of it.

- **Free, no email:** the PDF template on every template page.
- **Optional capture:** the editable Word/Google Doc version, or "tell me when this template changes for new regulations".
- **Why:** templates exist to earn backlinks and authority. Sites rarely link to a gated page, and a gate is a poor first impression for a new brand.
- **Reversible:** if lead volume matters more than authority once traffic data exists, a gate can be added later. Lost backlinks from launch can't be recovered.
- **Product announcements and guides** carry no capture; their CTA is the product.

## Illustration direction

Every post gets a friendly, character-based hero illustration in a flat, paper-grain style, using brand teal #0097B2 and warm neutrals.

- **Why this style:** abstract geometric (v1) was dropped. Gemini kept rendering 3D isometric blocks despite explicit instructions. The character style held up on its first real test.
- **Palette:** teal is the hero colour; off-white paper background; muted greys. No orange, which appeared in the reference sample but is not a brand colour.
- **Recurring cast:** electrician, fire/gas/heating engineer, office coordinator, a landlord stand-in (only for reader-facing guides like #5), and small mixed groups for team pages.
- **How to generate:** master prompt in the calendar's "Illustration Guide" sheet, plus the row's "Illustration Scene" line. Use one tool for the whole batch.
- **Approval checklist:** flat not 3D, teal dominant, no logos or readable text, calm expression, minimal background, reads at thumbnail size.

## Workflow: who does what

Claude in chat writes the prose; Claude Code does everything in the repo; Animesh approves every page before it ships.

1. Pick the next row from the calendar.
2. **Claude (chat):** verify current regulations, draft the page as clean markdown, and flag judgment calls for approval.
3. **Animesh:** review, decide the flagged calls, approve.
4. **Illustration:** generate from the master prompt plus the row's scene, check against the approval checklist.
5. **Claude Code:** frontmatter, meta title and description, slug, internal links, hosted assets (PDF/Word), email block where specified, build and publish. It receives one handoff brief per page.
6. Update the row's status in the calendar.

**Claude Code does not write or rewrite prose.** Long-form copy produced in an unattended agent loop tends to read generic, and every page needs a human review gate.

## Progress (as of the PDF, Oct 12, 2026)

Phase 1 is 5 of 8 pages drafted, plus one product announcement; nothing is marked published yet.

| # | Page | Status | Notes |
|---|---|---|---|
| 1 | EICR certificate template | Drafted | Copy and Word template done; PDF export and email block left for Claude Code |
| 5 | What is an EICR? | Drafted | Retitled for landlords, the dominant searcher |
| 6 | PAT testing requirements UK | Drafted | Framed as duty-based, not a named statute |
| 7 | How to price electrical work | Drafted | Ranges plus a cost-up method, no single day rate |
| 8 | Fire risk assessment guide | Drafted | Includes 2026 PEEP and recording changes |
| – | Introducing the Planner | Drafted | Product announcement, outside the calendar; no illustration brief yet |
| 2–4 | Fire, gas and boiler templates | Awaiting input | Waiting on the matching Opscel PDFs |
| 9–26 | Phase 2 and 3 pages | Not started | Next up: #9 electrical quote software |

### Repo status, Oct 12, 2026 (added by Claude Code)

- **Already live on opscel.com:** #5 `/blog/what-is-an-eicr`, #6 `/blog/pat-testing-requirements-uk`, #7 `/blog/how-to-price-electrical-work`, #8 `/blog/fire-risk-assessment-uk` and the Planner announcement `/blog/introducing-the-planner` (published 7 Aug 2026). They are marked "Drafted" above.
- **#1 EICR certificate template:** no template page or route exists in the repo yet.
- **Outside the calendar, drafted by Claude Code before this doc was adopted:** "Fire Alarm Servicing Under BS 5839-1:2025" and "EIC vs EICR vs Minor Works". They sit unpublished (`draft: true`) on their own PR, awaiting review and a calendar decision.
- **Hero images before this doc:** existing posts use text-bearing UI-card illustrations, which don't meet the approval checklist above.

## Open decisions and risks

The most urgent item is product, not content: the live EICR output still cites BS 7671:2018+A2:2022, and the A4:2026 transition period ends on Oct 15, 2026.

- [ ] **Update live EICR output to A4:2026.** Product ticket, separate from the blog. Check other certificate types for the same issue.
- [ ] **Validate keyword volume and difficulty** (GSC plus Ahrefs or Semrush) and re-sort the calendar. Sequencing is intent logic, not data. Biggest strategic risk.
- [ ] **Re-date the calendar.** Target months still read Jul 2026 to Apr 2027 and are already behind.
- [ ] **Decide spoke URLs vs existing feature pages.** opscel.com already has /features/quotations, /features/certificates, /features/jobs, /features/invoicing, /features/customers and /features/accounting-integration. New pages like /electrical-quote-software-uk could compete with them. Options: optimise the existing pages for the calendar keywords, or build new pages and differentiate. Until decided, forward links in drafts should point at the existing feature pages, not dead URLs.
- [ ] **Send Opscel PDFs** for fire safety, gas safety and boiler service certificates (templates #2–4).
- [ ] **Merge #18 and #19** (sole traders, small teams) into one "by team size" page if volumes are thin.
- [ ] **Replace indicative cost figures** in drafts with real numbers from pilot customers, if available.
- [ ] **Move the calendar into Google Sheets** so there is one shared source of truth, not a file in a chat.
- [ ] **Track product announcements** as their own category, and brief an illustration for the Planner post.
- [ ] **Vary the cast within each role** (gender, age, presentation), so 26 images don't repeat one person.
