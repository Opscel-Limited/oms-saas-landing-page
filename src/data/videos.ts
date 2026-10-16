// Product videos for the support pages. The videos are recorded in the product repo
// (docs/agent-context/process/demo-videos.md) and hosted on YouTube as Unlisted.
// How to add, wire or replace one: .claude/skills/support-videos.md.
//
// Each key is the product repo's spec slug. `chapters` comes from that take's
// <slug>.chapters.txt (M:SS Title, converted to seconds). A re-record changes `youtubeId`,
// `duration` and the chapter times; chapter NAMES stay stable, because articles use them.

export interface IVideo {
    title: string;
    /** null = not uploaded yet: the player renders nothing. */
    youtubeId: string | null;
    /** Seconds. */
    duration: number;
    /** First chapter starts at 0. Empty = a video without chapters. */
    chapters: readonly { title: string; start: number }[];
}

export const videos = {
    'add-first-customer': {
        title: 'Add your first customer',
        youtubeId: '5pE9UIKk67Y',
        duration: 64,
        chapters: [],
    },
    'quote-to-scheduled-job': {
        title: 'From quote to scheduled job',
        youtubeId: 'mXYBz4fQLP8',
        duration: 101,
        chapters: [
            { title: 'Overview', start: 0 },
            { title: 'Mark the quote as accepted', start: 12 },
            { title: 'Turn it into a job', start: 42 },
            { title: 'Schedule it on the planner', start: 65 },
        ],
    },
    'on-site-to-invoice': {
        title: 'On site to invoice',
        youtubeId: 'hKUE6APg1JU',
        duration: 156,
        chapters: [
            { title: 'Overview', start: 0 },
            { title: 'Arrive on site', start: 12 },
            { title: 'Job sheet and customer sign-off', start: 35 },
            { title: 'Certificate', start: 65 },
            { title: 'Finish the visit', start: 107 },
            { title: 'In the office', start: 130 },
        ],
    },
    'field-start-your-day': {
        title: 'Start your day in the field app',
        youtubeId: 'BZPoMAUqWJ0',
        duration: 59,
        chapters: [
            { title: "Today's jobs", start: 0 },
            { title: 'Tomorrow', start: 13 },
            { title: 'Before you set off', start: 27 },
        ],
    },
    'field-emergency-callout': {
        title: 'Raise a callout and leave site',
        youtubeId: 'Rj514sLfe0Q',
        duration: 74,
        chapters: [
            { title: 'Raise a callout', start: 0 },
            { title: 'Work and write up', start: 27 },
            { title: 'Leave site, come back later', start: 56 },
        ],
    },
    'field-photos-parts-defects': {
        title: 'Photos, parts and defects',
        youtubeId: '8kQYhPv4MRM',
        duration: 61,
        chapters: [
            { title: 'Take photos', start: 0 },
            { title: 'Log parts used', start: 14 },
            { title: 'Raise a defect', start: 27 },
        ],
    },
    'field-fire-alarm-service': {
        title: 'Service a fire alarm system',
        youtubeId: 'Aoibz4FjbI4',
        duration: 70,
        chapters: [
            { title: "Load the site's devices", start: 0 },
            { title: 'Test each device', start: 13 },
            { title: 'Update the register', start: 34 },
        ],
    },
} as const satisfies Record<string, IVideo>;

export type VideoSlug = keyof typeof videos;
type ChapterOf<V extends VideoSlug> = (typeof videos)[V]['chapters'][number]['title'];

export interface IVideoClip {
    video: VideoSlug;
    videoTitle: string;
    youtubeId: string | null;
    /** The chapter name, or the video title for the whole video. */
    label: string;
    start: number;
    /** Absent = play to the end. */
    end?: number;
    /** Length of the whole video, in seconds. */
    duration: number;
    /** Local poster (public/images/videos/...). From posterPath(): never typed by hand. */
    poster: string;
}

/** 'Job sheet and customer sign-off' -> 'job-sheet-and-customer-sign-off'. */
export function kebab(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

/**
 * The one place a poster path is derived. No chapter = the whole-video poster ('full').
 * scripts/video-posters.ts writes these files and scripts/check-video-posters.ts (the
 * `prebuild` step) fails the build if any is missing, so a poster can't be forgotten.
 */
export function posterPath(video: string, chapter?: string): string {
    return `/images/videos/${video}/${chapter === undefined ? 'full' : kebab(chapter)}.webp`;
}

/**
 * A playable part of a video, for a doc subsection's `video` field.
 * No chapter = the whole video (start 0, no end), NOT the "Overview" chapter.
 *
 * Call it in the guide DATA, never in a component: guide modules load at build time, so a bad
 * slug or chapter name fails `npm run build` instead of crashing a collapsed section when a
 * reader opens it. `ChapterOf` makes `tsc` reject a wrong name even earlier.
 */
export function clip<V extends VideoSlug>(video: V, chapter?: ChapterOf<V>): IVideoClip {
    const v: IVideo | undefined = videos[video];
    if (!v) throw new Error(`clip(): unknown video "${video}"`);
    const base = { video, videoTitle: v.title, youtubeId: v.youtubeId, duration: v.duration };
    const poster = posterPath(video, chapter);
    if (chapter === undefined) return { ...base, poster, label: v.title, start: 0 };

    const i = v.chapters.findIndex((c) => c.title === chapter);
    if (i === -1) throw new Error(`clip(): video "${video}" has no chapter "${chapter}"`);
    const next = v.chapters[i + 1];
    return { ...base, poster, label: chapter, start: v.chapters[i].start, end: next ? next.start : v.duration };
}
