// Regenerates every video poster in public/images/videos/<slug>/ from the take's mp4.
// One command after a re-record:  npm run video-posters
//
// Chapter starts come from src/data/videos.ts. The frame offsets live in OFFSETS below, the one
// place to tune them. Needs ffmpeg on PATH. Reads <slug>.mp4 from VIDEO_DIR (default
// ~/Downloads), preferring VIDEO_DIR/yt-1440/<slug>.mp4. The mp4s are data: only ffmpeg reads them.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync } from 'node:fs';
import { homedir, tmpdir } from 'node:os';
import { join } from 'node:path';

import sharp from 'sharp';

import { posterPath, videos } from '../src/data/videos';

interface IOffsets {
    /** Seconds from the VIDEO start, for the whole-video poster. */
    full: number;
    /** Seconds AFTER each chapter's start. Keyed by chapter title. */
    chapters: Record<string, number>;
}

// Chosen by looking at candidate frames (2026-10-15). Where a chapter's title card is cleanly
// visible shortly after its start, that frame is used. Otherwise a frame that shows the
// chapter's content. Re-check these after a re-record: a new take shifts the timings.
const OFFSETS: Record<string, IOffsets> = {
    'add-first-customer': { full: 20, chapters: {} }, // step 1 of Create New Customer
    'quote-to-scheduled-job': {
        full: 34, // the sent quote, no overlay
        chapters: {
            'Overview': 2, // "Overview" card over the Dashboard setup checklist
            'Mark the quote as accepted': 26, // the quote menu with "Mark as Accepted" (t=38)
            'Turn it into a job': 2, // card + Convert to Job highlighted
            'Schedule it on the planner': 2, // card over the planner with the backlog
        },
    },
    'on-site-to-invoice': {
        full: 0, // the scheduled job on the desktop, no overlay
        chapters: {
            'Overview': 2, // "Overview" card over the scheduled job
            'Arrive on site': 4, // field app Today's route (card has faded, t=16)
            'Job sheet and customer sign-off': 1, // card over the job sections grid
            'Certificate': 6, // New certificate type picker (t=71)
            'Finish the visit': 3, // card over the job page
            'In the office': 4, // the completed job on the desktop (t=134)
        },
    },
    'field-start-your-day': {
        full: 5, // Today's route with the morning's two jobs, no overlay
        chapters: {
            "Today's jobs": 6, // Today's route (the card sits over the desktop, so skip it)
            'Tomorrow': 6, // Tomorrow tab selected, the EICR listed (t=19)
            'Before you set off': 6, // the job page: access note, site contact, Check in (t=33)
        },
    },
    'field-emergency-callout': {
        full: 3, // Today's route with the Emergency Call Out card
        chapters: {
            'Raise a callout': 23, // the filled form, Emergency Call Out service type chosen
            'Work and write up': 24, // the work carried out typed on the sign-off step (t=51)
            'Leave site, come back later': 7, // "Job stays open" with Continue on the list (t=63)
        },
    },
    'field-photos-parts-defects': {
        full: 13.5, // the fuse board photo just uploaded on the Photos page
        chapters: {
            'Take photos': 13.5, // the same frame: "Photo uploaded" with the thumbnail
            'Log parts used': 11.5, // the first part listed, the second being typed (t=25.5)
            'Raise a defect': 24, // the saved Major defect with its photo and the Remedial Scope toast (t=51)
        },
    },
    'field-fire-alarm-service': {
        full: 30, // the device test list mid-service: 3 of 7 tested, the kitchen heat detector marked Fault
        chapters: {
            "Load the site's devices": 11.5, // the register pre-loaded: 0/7 tested, grouped by zone
            'Test each device': 17, // the same frame as the full poster (t=30)
            'Update the register': 27, // "Job sheet marked as complete" and "1 failed device raised as a defect" (t=61)
        },
    },
};

const W = 1280;
const H = 720;
const videoDir = process.env.VIDEO_DIR ?? join(homedir(), 'Downloads');
const outRoot = join(process.cwd(), 'public');

function source(slug: string): string {
    for (const p of [join(videoDir, 'yt-1440', `${slug}.mp4`), join(videoDir, `${slug}.mp4`)]) {
        if (existsSync(p)) return p;
    }
    throw new Error(`No ${slug}.mp4 in ${videoDir} (or ${videoDir}/yt-1440)`);
}

async function main() {
    const tmp = mkdtempSync(join(tmpdir(), 'video-posters-'));
    let total = 0;
    try {
        for (const [slug, v] of Object.entries(videos)) {
            const offsets = OFFSETS[slug];
            if (!offsets) throw new Error(`OFFSETS has no entry for video "${slug}"`);
            const src = source(slug);

            const jobs: { out: string; at: number }[] = [{ out: posterPath(slug), at: offsets.full }];
            for (const c of v.chapters) {
                const off = offsets.chapters[c.title];
                if (off === undefined) throw new Error(`OFFSETS["${slug}"] has no offset for chapter "${c.title}"`);
                jobs.push({ out: posterPath(slug, c.title), at: c.start + off });
            }
            for (const key of Object.keys(offsets.chapters)) {
                if (!v.chapters.some((c) => c.title === key)) throw new Error(`OFFSETS["${slug}"] names unknown chapter "${key}"`);
            }

            for (const { out, at } of jobs) {
                if (at >= v.duration) throw new Error(`${out}: ${at}s is past the end (${v.duration}s)`);
                const png = join(tmp, 'frame.png');
                execFileSync('ffmpeg', ['-v', 'error', '-y', '-ss', String(at), '-i', src, '-frames:v', '1', png]);
                const dest = join(outRoot, out);
                mkdirSync(join(dest, '..'), { recursive: true });
                await sharp(png).resize(W, H, { fit: 'cover' }).webp({ quality: 80 }).toFile(dest);
                const size = statSync(dest).size;
                total += size;
                console.log(`${out}  <- ${slug} @ ${at}s  (${(size / 1024).toFixed(1)} KB)`);
            }
        }
    } finally {
        rmSync(tmp, { recursive: true, force: true });
    }
    console.log(`Total: ${(total / 1024).toFixed(1)} KB`);
}

main().catch((e) => {
    console.error(e instanceof Error ? e.message : e);
    process.exit(1);
});
