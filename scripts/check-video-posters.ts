// Fails the build if any video poster the site can show is missing.
// Runs as `prebuild`. Every chapter of every video, plus the whole-video poster, needs a file at
// the path posterPath() returns. See .claude/skills/support-videos.md.
import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { posterPath, videos } from '../src/data/videos';

const publicDir = join(process.cwd(), 'public');
const missing: string[] = [];
let count = 0;

for (const [slug, v] of Object.entries(videos)) {
    const wanted = [posterPath(slug), ...v.chapters.map((c) => posterPath(slug, c.title))];
    // Two chapters that kebab alike (or a chapter named "Full") would share one file and still pass.
    const dupes = wanted.filter((p, i) => wanted.indexOf(p) !== i);
    if (dupes.length > 0) {
        console.error(`${slug}: chapters share a poster path: ${dupes.join(', ')}`);
        process.exit(1);
    }
    for (const path of wanted) {
        count += 1;
        if (!existsSync(join(publicDir, path))) missing.push(path);
    }
}

if (missing.length > 0) {
    console.error(`Missing video posters (${missing.length}):`);
    for (const m of missing) console.error(`  public${m}`);
    console.error('Run `npm run video-posters` (needs the take mp4s), then commit the files.');
    process.exit(1);
}
console.log(`Video posters: all ${count} present.`);
