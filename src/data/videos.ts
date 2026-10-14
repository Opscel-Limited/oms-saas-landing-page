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
    if (chapter === undefined) return { ...base, label: v.title, start: 0 };

    const i = v.chapters.findIndex((c) => c.title === chapter);
    if (i === -1) throw new Error(`clip(): video "${video}" has no chapter "${chapter}"`);
    const next = v.chapters[i + 1];
    return { ...base, label: chapter, start: v.chapters[i].start, end: next ? next.start : v.duration };
}
