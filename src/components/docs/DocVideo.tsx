'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { FiPlay } from 'react-icons/fi';

import type { IVideoClip } from '@/data/videos';

/**
 * A support video, or one chapter of it, on a doc page. Click to load: nothing is fetched from
 * YouTube until the reader presses play. The poster is a local still of that chapter
 * (clip.poster, public/images/videos/..., made by scripts/video-posters.ts), so no request goes
 * to Google before a click. Plays on the privacy-enhanced youtube-nocookie.com domain, captions on.
 * See .claude/skills/support-videos.md.
 */

interface DocVideoProps {
  clip: IVideoClip;
}

interface IPlaying {
  start: number;
  end?: number;
  // A fresh key gives a fresh iframe (and src), rather than seeking the old player.
  key: number;
}

function formatLength(seconds: number): string {
  if (seconds < 60) return `${seconds} s`;
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

function embedUrl(youtubeId: string, start: number, end?: number): string {
  const params = new URLSearchParams({ start: String(start) });
  if (end !== undefined) params.set('end', String(end));
  params.set('autoplay', '1');
  params.set('rel', '0');
  params.set('cc_load_policy', '1');
  params.set('cc_lang_pref', 'en');
  return `https://www.youtube-nocookie.com/embed/${youtubeId}?${params.toString()}`;
}

const DocVideo: React.FC<DocVideoProps> = ({ clip }) => {
  const [playing, setPlaying] = useState<IPlaying | null>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (playing) iframeRef.current?.focus();
  }, [playing]);

  if (!clip.youtubeId) return null;

  const isWholeVideo = clip.start === 0 && clip.end === undefined;
  const clipLength = (clip.end ?? clip.duration) - clip.start;
  const watchLabel = `Watch: ${clip.label} (${formatLength(clipLength)})`;
  const iframeTitle = isWholeVideo ? clip.videoTitle : `${clip.videoTitle}: ${clip.label}`;

  return (
    <div className="my-4 max-w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border bg-foreground">
        {playing ? (
          <iframe
            key={playing.key}
            ref={iframeRef}
            src={embedUrl(clip.youtubeId, playing.start, playing.end)}
            title={iframeTitle}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying({ start: clip.start, end: clip.end, key: 0 })}
            className="group absolute inset-0 h-full w-full focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary"
          >
            <Image
              src={clip.poster}
              alt=""
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
            />
            <span className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/20" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-lg transition-transform group-hover:scale-105">
              <FiPlay className="ml-1 h-7 w-7" aria-hidden="true" />
            </span>
            <span className="absolute inset-x-0 bottom-0 truncate bg-gradient-to-t from-black/80 to-transparent px-3 pb-3 pt-8 text-left text-sm font-medium text-white sm:text-base">
              {watchLabel}
            </span>
          </button>
        )}
      </div>
      {!isWholeVideo && !(playing && playing.end === undefined) && (
        <button
          type="button"
          onClick={() => setPlaying((p) => ({ start: 0, key: (p?.key ?? 0) + 1 }))}
          className="mt-2 text-sm font-medium text-secondary hover:underline"
        >
          Watch the whole video ({formatLength(clip.duration)})
        </button>
      )}
    </div>
  );
};

export default DocVideo;
