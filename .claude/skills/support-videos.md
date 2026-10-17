# Support Videos Skill

Use this skill when you add, move or revise a product video on a support page (`/docs/*`), or
revise a support article that covers something a video shows.

Trigger phrases: "add the video", "embed the demo", "video for this section", "re-recorded",
"new take", "support video", "/support-videos"

**Status (2026-10-15): §3a-3d BUILT** (`src/data/videos.ts`, `src/components/docs/DocVideo.tsx`,
24 clips wired per §5, local posters, YouTube line in the cookie policy).

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

## 3. The build

### 3a. One registry, `src/data/videos.ts`, and a `clip()` helper that fails the build

```ts
export interface IVideo {
  title: string;                                        // 'On site to invoice'
  youtubeId: string | null;                             // null = not uploaded yet: renders NOTHING
  duration: number;                                     // seconds
  chapters: readonly { title: string; start: number }[]; // from <slug>.chapters.txt, first at 0
}
export const videos = {
  'on-site-to-invoice': { title: 'On site to invoice', youtubeId: null, duration: 156,
    chapters: [{ title: 'Overview', start: 0 }, { title: 'Arrive on site', start: 12 }, /* … */] },
} as const satisfies Record<string, IVideo>;   // compiles on this repo's TS 5.6 (checked)
export type VideoSlug = keyof typeof videos;   // the key IS the product repo's spec slug
type ChapterOf<V extends VideoSlug> = (typeof videos)[V]['chapters'][number]['title'];

export interface IVideoClip { video: VideoSlug; videoTitle: string; youtubeId: string | null;
  label: string; start: number; end?: number; duration: number }

/** No chapter = the whole video (start 0, no end), NOT the "Overview" chapter. */
export function clip<V extends VideoSlug>(video: V, chapter?: ChapterOf<V>): IVideoClip { … }
```

- `clip()` **throws** on an unknown slug or chapter. A chapter's clip runs from its `start` to
  the next chapter's `start`, and the last one runs to `duration`.
- `chapters.txt` lines are `M:SS Title`. Convert them to seconds.
- ⚠ **Why `clip()` is called in the guide DATA, not resolved in the component.** Most doc sections
  sit in a collapsed Headless UI `Disclosure` (only `overview` opens by default), and a closed
  panel is not rendered at prerender. So a lookup inside the component would pass the build and
  then crash the page when a reader expands the section (there is no `error.tsx`). Called in the
  guide file, it runs when the module loads, so `npm run build` fails on any page importing the
  guide. The `ChapterOf<V>` type makes `tsc` and the editor reject a wrong name even earlier. The
  docs routes are fully static (checked 2026-10-14).

### 3b. Articles reference a video by slug and chapter NAME

Add `video?: IVideoClip` to `IDocSubsection` in `src/types.ts`, next to `mockup?`. Use
`import type { IVideoClip } from './data/videos'` to avoid a data↔types import cycle. A whole
video goes in a section's first subsection; there is no section-level field.

```ts
import { clip } from '@/data/videos';
// in a guide:
{ title: 'Filling the certificate on site', content: '…',
  video: clip('on-site-to-invoice', 'Certificate') }
```

⚠ **Never write seconds in an article.** A re-record would silently point every section at the
wrong moment.

### 3c. One component, `src/components/docs/DocVideo.tsx`, rendered by `DocPageLayout` wherever a subsection has `video` (as it renders `mockup`)

- **Click to load.** Show a 16:9 poster with a play button and "Watch: Certificate (43 s)". Create
  the iframe only on click, then move focus to it.
  - **Poster: a LOCAL still per clip, so no request goes to Google before a click.**
    `public/images/videos/<slug>/<chapter-kebab>.webp` (1280 × 720), plus `<slug>/full.webp` for
    the whole video. `clip()` returns it as `clip.poster`, from the one function `posterPath()` in
    `videos.ts`. Never type a poster path. `DocVideo` renders it with `next/image`.
  - **Made by `npm run video-posters`** (`scripts/video-posters.ts`): ffmpeg grabs a frame from
    the take's mp4 (needs ffmpeg; `VIDEO_DIR`, default `~/Downloads`, prefers `yt-1440/`), `sharp`
    writes the webp. Chapter starts come from `videos.ts`. The per-chapter frame offsets live in
    ONE place, the `OFFSETS` map at the top of that script. It fails on a chapter with no offset.
  - **Guard: `prebuild` runs `scripts/check-video-posters.ts`**, which fails `npm run build` if
    any chapter, or any video's `full`, has no poster file. A missing poster cannot ship.
  - **Picking offsets:** extract candidates a second apart, LOOK at them, avoid transitions, loading
    screens and the previous chapter's last frame. Prefer a frame where the chapter's own title
    card is clean, else one that shows the chapter's content.
- **Embed URL:**
  `https://www.youtube-nocookie.com/embed/<id>?start=<s>&end=<e>&autoplay=1&rel=0&cc_load_policy=1&cc_lang_pref=en`.
  - Use the privacy-enhanced domain only, and never autoplay on page load.
  - `cc_load_policy=1` turns captions on by default (people watch at work with the sound off).
  - `rel=0` only limits the end-of-clip suggestions to our own channel; it does not remove them.
  - `end` fires once: a viewer who seeks past it plays on to the real end, and the scrubber always
    shows the full video. That is fine.
- **iframe attributes:** `allow="autoplay; encrypted-media; picture-in-picture"`,
  `allowFullScreen`, and `title` set to the video and chapter name. Without `allow`, Chrome blocks
  the autoplay-on-click.
- **Under the player:** "Watch the whole video (2:36)" sets a fresh iframe `src` with `start=0`
  and no `end`. Don't try to seek the old player. iOS Safari ignores `autoplay` after a `src` swap,
  so the reader taps play once; that is acceptable.
- The play button has an `aria-label`. No overflow at 390 px.
- `youtubeId: null` → render nothing.
- Keep every Tailwind class inside `DocVideo.tsx`. Tailwind does not scan `src/data/`, so a class
  in guide data would not compile.
- The fixed labels ("Watch: …", "Watch the whole video") are UI chrome, not article prose, so
  CLAUDE.md note 13 does not apply to them.

### 3d. Cookie policy (DONE 2026-10-15)

`src/app/cookies/page.tsx` §3 "Third-Party Cookies" has a YouTube entry: "If you press play on
a video, YouTube (privacy-enhanced mode) may store data on your device", with Google's privacy
policy link. Wording approved by the owner.

⚠ **Pre-existing, separate from this build: tell the owner.** `src/app/layout.tsx` loads Google
Analytics on every page, while the cookie policy promises a consent banner that does not exist.
The video change must not make that worse, so the click-to-load player is the only YouTube load.
Fixing the banner is its own decision.

### 3e. Verify

`npm run lint` and `npm run build`, since this repo has no tests. Then a negative control: misspell
one chapter name, confirm that both `tsc` and `npm run build` fail, and revert.

In the browser, check:
- a chapter clip inside a **collapsed** section starts and stops at the right point;
- "Watch the whole video" works;
- a `youtubeId: null` video renders nothing;
- no overflow at 390 px;
- captions show;
- on an **iPhone**, the play-after-swap works;
- nothing loads from youtube.com before a click.

## 4. When a video is re-recorded (the common job)

1. The owner uploads the new take as **Unlisted**:
   - paste `chapters.txt` into the description;
   - upload the `.srt` as English captions;
   - set "Made for kids: No";
   - allow embedding.
2. Update its `videos.ts` entry: `youtubeId`, `duration` and `chapters`.
   Then **regenerate posters**: `npm run video-posters` (re-check the `OFFSETS` frames by eye,
   since new timings can land on a transition) and commit the webp files. The build fails
   until every chapter has one.
3. If a chapter was **renamed**, `tsc` and the build fail on every article still using the old
   name. Fix each one. That failure is the point.
4. Deploy, then tell the owner the old upload can be removed. Never before: removing it first
   breaks the live pages.

## 5. When you revise a support article

- If the section describes something a video chapter shows, reference it (§3b). **Reuse is the
  point**: the same chapter can sit in several articles.
- A whole video (`clip(slug)`) suits the first subsection of an article's `overview` section. A chapter suits the subsection with the
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
| | Turn it into a job | `quotations` › `converting-to-job`; `jobs` › `creating-jobs` ("Method 2: Convert an Accepted Quote", wired); `quote-to-invoice-workflow` › `the-job` |
| | Schedule it on the planner | `planner` › `booking-from-backlog` |
| | whole video | `quote-to-invoice-workflow` › `overview` |
| `on-site-to-invoice` | Arrive on site | `field-service` › `on-site-checkin`; `rams` › `engineer-sign-off` (the risk assessment) |
| | Job sheet and customer sign-off | `worksheets` › `filling-onsite`; `field-service` › `capturing-work` |
| | Certificate | `certificates` › `creating-certificates` ("Method 2: From a Job (Recommended)"); `certificates` › `signatures` |
| | Finish the visit | `field-service` › `completing-job`; `quote-to-invoice-workflow` › `the-job` ("Completing the job") |
| | In the office | `certificates` › `issuing`; `quote-to-invoice-workflow` › `fixed-price-path` |
| | whole video | `field-service` › `overview` |
| `field-start-your-day` (F1) | Today's jobs | `field-service` › `todays-jobs` ("Navigating the Jobs List") |
| | Tomorrow | `field-service` › `todays-jobs` ("Filters and Sorting") |
| | Before you set off | `field-service` › `pre-visit` ("Opening a Job") |
| `field-emergency-callout` (F6) | Raise a callout | `jobs` › `overview` (until a callout method exists in `jobs` › `creating-jobs`) |
| | Work and write up | `jobs` › `multi-visit` ("Per-Visit Work Summaries") |
| | Leave site, come back later | `jobs` › `multi-visit` ("When to Use Multi-Visit") |
| `field-photos-parts-defects` (F3) | Take photos | `field-service` › `capturing-photos` ("Taking Photos") |
| | Log parts used | `field-service` › `capturing-work` ("Recording Parts Used") |
| | Raise a defect | `field-service` › `capturing-work` ("Logging Defects"); `defects-to-quotation` › `how-it-works` ("Step 1 — A Defect Is Logged on the Job"); `remedial-scope-of-works` › `how-it-works` ("Step 1: Log the Defects") |
| `field-fire-alarm-service` (F4) | Load the site's devices | `asset-tracking` › `engineer-journey` ("Three Ways Equipment Lands on a Row") |
| | Test each device | `asset-tracking` › `engineer-journey` (the device test list phone figure); `asset-lifecycle` › `auto-promotion` ("The Device Test List (Fire Alarm Service & Asset Service)") |
| | Update the register | `asset-tracking` › `auto-register` ("What Auto-Register Commits on Its Own") |
| `field-electrical-certificate` (F5) | Start the certificate | `certificates` › `certificate-types` ("Minor Works Certificate") |
| | Circuit and test results | `certificates` › `section-completion` ("General Pattern for Filling Sections") |
| | Submit for review | `certificates` › `certificate-lifecycle` ("Status Flow") |
| `field-clock-in-out` (F8) | whole video (no chapters) | `field-service` › `field-settings` ("Clocking In and Out", was "Shift History") |

Wired differently (2026-10-14):
- F4 "Load the site's devices" sits on `asset-tracking` › `engineer-journey`, not `existing-equipment`
  (the product plan's pick): that section is about importing a register, and the chapter shows the
  register arriving pre-loaded on the worksheet. `which-worksheets` is not wired.
- F5 is not on the product plan's picks: `creating-certificates` "Method 2" already plays the
  demo 3 clip; `circuits` is the EIC/EICR circuit SCHEDULE, which a Minor Works doesn't have; and
  `signatures` would mislead, because F5 draws no signature (the office signs a Minor Works as
  constructor). Prose on the wired sections predates the field app (e.g. "Save Section", Minor Works
  "Signatures required: Installer/Tester"): owner's wording.
- Not wired (2026-10-15): F1 whole video on `field-service` › `overview`. Its only subsection
  already plays `on-site-to-invoice`, and a subsection holds one video.
- F6 "Work and write up" sits on `jobs` › `multi-visit`, not `field-service` › `capturing-work`
  (the product plan's pick): "Filling Worksheets" already plays the demo 3 clip, and the chapter
  writes the VISIT's work summary on the job sheet's sign-off step. `field-service` ›
  `completing-job` "Writing the Work Summary" would fit, but its steps still say to tap a
  "Work Summary" tile the app removed in 5.70.0: wire it there once the owner approves new wording.
- F8 (2026-10-17): the "Shift History" subsection became "Clocking In and Out" and its steps were
  corrected, because they were wrong on the day: the app's path is Settings › Shifts › Shift
  history (the row shipped in app 5.142.0; before it, nothing linked the page), and a shift row is
  not tappable (no "jobs worked" detail). Owner may reword.
- Not wired: `rams` › `engineer-sign-off`. The "Arrive on site" chapter shows the hazard and PPE
  picker, not the Read-and-understood sign-off card that section describes.
- "Mark the quote as accepted" sits on `quotations` › `quote-status-workflow`, not
  `customer-acceptance` (that section is the customer's portal flow; the video marks it by hand).

The demo 3 certificate is a **Fire Alarm Modification** certificate (BS 5839), so in
`certificates` it shows the fire-alarm path, not BS 7671.

## 6. Not now

- **Self-hosting** (Vercel Blob plus a plain `<video>` with `#t=start,end` and the `.chapters.vtt`
  track). Only if Unlisted proves not private enough. It loses the one-click switch to a public
  channel and adds bandwidth cost.
- **Portrait cuts on support pages.** They are for social, and support readers are mostly on
  desktop.
- **Video schema / SEO markup.** Add it when the channel goes public.
