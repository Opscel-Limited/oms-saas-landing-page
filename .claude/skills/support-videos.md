# Support Videos Skill

Use this skill when you add, move or revise a product video on a support page (`/docs/*`), or
revise a support article that covers something a video shows.

Trigger phrases: "add the video", "embed the demo", "video for this section", "re-recorded",
"new take", "support video", "/support-videos"

**Status (2026-10-14): design agreed with the owner, NOT built yet.** §3 is the build. Until it
ships, nothing on the site plays a video.

---

## 1. What the owner decided (2026-10-14)

- **The support docs are the home for the product videos.** One video can serve many articles,
  and an article section can play just the part of a video it describes.
- **YouTube hosts them, as Unlisted, embedded on the support pages.** The channel opens later. On
  that day each video flips Unlisted → Public, and nothing on this site changes.
- ⚠ **Never "Private".** A Private YouTube video plays only for invited Google accounts, so every
  visitor would see "Video unavailable". Unlisted = not in search or on the channel, but plays
  wherever it is embedded.

## 2. Where the videos come from

They are made in the **product repo** (`~/opscel-starter-kit`, GitHub
`Opscel-Limited/opscel-starter-kit`) by a spec-driven runner. Read
`docs/agent-context/process/demo-videos.md` there. Each take writes:

| File | Use here |
|---|---|
| `<slug>.mp4` | upload to YouTube (1920 × 1080) |
| `<slug>.srt` | upload to YouTube as the English captions |
| `<slug>.chapters.txt` | YouTube description (chapters), **and** the chapter list in `src/data/videos.ts` |
| `<slug>.phone.mp4` | portrait cut for social (LinkedIn/Shorts). Not used on support pages for now |
| `<slug>.chapters.vtt` | only if we ever self-host (§6) |

The videos are re-recorded whenever the UI changes. Chapter **names** stay stable. Chapter
**times** and the YouTube ID change with every take. Everything below is built around that.

Uploading is the owner's job: the YouTube account is theirs, and Claude cannot upload. The owner
hands over the new video ID and the take's `chapters.txt`.

## 3. The build (one PR, not started)

### 3a. One registry: `src/data/videos.ts`

```ts
export interface IVideoChapter { title: string; start: number }   // seconds from 0
export interface IVideo {
  slug: string;              // the product repo's spec slug, e.g. 'on-site-to-invoice'
  title: string;             // 'On site to invoice'
  youtubeId: string | null;  // null = not uploaded yet: references render NOTHING (no broken box)
  duration: number;          // seconds, from the take
  recordedOn: string;        // 'YYYY-MM-DD'
  chapters: IVideoChapter[]; // straight from <slug>.chapters.txt, in order, first at 0
}
export const videos = { 'on-site-to-invoice': { … }, … } as const satisfies Record<string, IVideo>;
export type VideoSlug = keyof typeof videos;
```

A chapter's clip runs from its `start` to the next chapter's `start`. The last chapter runs to
`duration`.

### 3b. Articles reference a video by slug and chapter NAME

Add `video?: IDocVideoRef` to `IDocSubsection` in `src/types.ts`, next to `mockup?`, and to
`IDocSection` if a whole section wants one.

```ts
export interface IDocVideoRef {
  video: VideoSlug;   // which video
  chapter?: string;   // a chapter TITLE from the registry; omitted = the whole video
  caption?: string;   // optional line under the player
}
// in a guide:
{ title: 'Filling the certificate on site', content: '…',
  video: { video: 'on-site-to-invoice', chapter: 'Certificate' } }
```

⚠ **Never write seconds in an article.** A re-record would silently point every section at the
wrong moment. The name is resolved against the registry at render time.

### 3c. One component: `src/components/docs/DocVideo.tsx`

`DocPageLayout` renders it wherever a section or subsection has `video`, the same way it renders
`mockup`.

- **Resolve** `{video, chapter}` → `{youtubeId, start, end}`. An unknown slug or chapter name
  must **throw**, so the build fails rather than publishing a broken reference. Docs pages are
  statically generated, so a render-time throw fails `npm run build`. Confirm that the docs routes
  really are static before relying on it. If one is dynamic, add a `scripts/check-video-refs.ts`
  to `prebuild` instead.
- **Click to load.** Show the thumbnail (`https://i.ytimg.com/vi/<id>/hqdefault.jpg`, which works
  for Unlisted) with a play button and "Watch: Certificate (43 s)". Create the iframe only on
  click. Nothing loads from YouTube before then, which keeps the page fast and cookie-free.
- **Embed URL:**
  `https://www.youtube-nocookie.com/embed/<id>?start=<s>&end=<e>&autoplay=1&rel=0&cc_lang_pref=en`.
  Use the privacy-enhanced domain only. Never autoplay on page load.
- **Under the player:** "Watch the whole video (2:36)", which swaps the same player to `start=0`
  with no `end`.
- Responsive 16:9 box. The button has an `aria-label`, and the iframe has a `title` (the video and
  chapter name).
- `youtubeId: null` → render nothing.

### 3d. Cookie policy

`src/app/cookies/page.tsx` §3 "Third-Party Cookies" lists only Google Analytics. Add YouTube: "If
you press play on a video, YouTube (privacy-enhanced mode) may store data on your device", with
Google's privacy policy link. The owner approves the wording.

### 3e. Verify

`npm run lint` and `npm run build`. This repo has no tests. Then check in the browser:
- each chapter clip starts and stops at the right point;
- "Watch the whole video" works;
- a `youtubeId: null` video renders nothing;
- 390 px width with no overflow;
- no request to youtube.com or ytimg.com before a click. The thumbnail is the exception; host it
  locally if even that is unwanted.

## 4. When a video is re-recorded (the common job)

1. The owner uploads the new take as **Unlisted**:
   - paste `chapters.txt` into the description;
   - upload the `.srt` as English captions;
   - set "Made for kids: No";
   - allow embedding.
2. Update its `videos.ts` entry: `youtubeId`, `duration`, `recordedOn`, `chapters`.
3. If a chapter was **renamed**, the build fails on every article still using the old name. Fix
   each one. That failure is the point.
4. Deploy, then tell the owner the old upload can be removed. Never before: removing it first
   breaks the live pages.

## 5. When you revise a support article

- If the section describes something a video chapter shows, reference it (§3b). **Reuse is the
  point**: the same chapter can sit in several articles.
- A whole video suits an article's `overview` section. A chapter suits the subsection with the
  matching steps.
- Wiring a `video` reference is repo-side data work. Any NEW prose (a caption line, a rewritten
  step) still follows CLAUDE.md note 13: it arrives approved from chat, and Claude Code does not
  write it.
- The written steps stay. The video sits beside them, never instead of them, because people skim
  text and search indexes it.
- If the video and the article disagree, the article is probably stale. The videos are recorded
  against the live app. Check the product before editing either.

### Where each current chapter fits (suggested; check the section text before wiring)

Section ids are from `origin/main` on 2026-10-14.

| Video (slug) | Chapter | Fits |
|---|---|---|
| `add-first-customer` (no chapters, 1:04) | whole video | `onboarding` › `checklist` |
| `quote-to-scheduled-job` | Mark the quote as accepted | `quotations` › `customer-acceptance`; `quote-to-invoice-workflow` › `the-quote` ("After acceptance") |
| | Turn it into a job | `quotations` › `converting-to-job`; `jobs` › `creating-jobs` ("Method 2: From Accepted Quote"); `quote-to-invoice-workflow` › `the-job` |
| | Schedule it on the planner | `planner` › `booking-from-backlog` |
| | whole video | `quote-to-invoice-workflow` › `overview` |
| `on-site-to-invoice` | Arrive on site | `field-service` › `on-site-checkin`; `rams` › `engineer-sign-off` (the risk assessment) |
| | Job sheet and customer sign-off | `worksheets` › `filling-onsite`; `field-service` › `capturing-work` |
| | Certificate | `certificates` › `creating-certificates` ("Method 2: From a Job"); `certificates` › `signatures` |
| | Finish the visit | `field-service` › `completing-job`; `quote-to-invoice-workflow` › `the-job` ("Completing the job") |
| | In the office | `certificates` › `issuing`; `quote-to-invoice-workflow` › `fixed-price-path` |
| | whole video | `field-service` › `overview` |

The demo 3 certificate is a **Fire Alarm Modification** certificate (BS 5839), so in
`certificates` it shows the fire-alarm path, not BS 7671.

## 6. Not now

- **Self-hosting** (Vercel Blob plus a plain `<video>` with `#t=start,end` and the `.chapters.vtt`
  track). Only if Unlisted proves not private enough. It loses the one-click switch to a public
  channel and adds bandwidth cost.
- **Portrait cuts on support pages.** They are for social, and support readers are mostly on
  desktop.
- **Video schema / SEO markup.** Add it when the channel goes public.
