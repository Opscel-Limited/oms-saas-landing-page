import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { IBlogPostCta, IBlogPostMeta } from '@/types';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

function calculateReadingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
}

function parseCta(value: unknown): IBlogPostCta | undefined {
    if (!value || typeof value !== 'object') return undefined;
    const { href, label } = value as Record<string, unknown>;
    return typeof href === 'string' && typeof label === 'string' ? { href, label } : undefined;
}

export function getAllPosts(): IBlogPostMeta[] {
    if (!fs.existsSync(BLOG_DIR)) return [];

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.mdx'));

    const posts = files
        .map(filename => {
            const slug = filename.replace(/\.mdx$/, '');
            const raw = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
            const { data, content } = matter(raw);

            return {
                slug,
                title: data.title ?? '',
                description: data.description ?? '',
                date: data.date ?? '',
                lastUpdated: data.lastUpdated,
                author: data.author ?? 'opscel',
                tags: data.tags ?? [],
                heroImage: data.heroImage,
                draft: data.draft ?? false,
                readingTime: calculateReadingTime(content),
                cta: parseCta(data.cta),
            } satisfies IBlogPostMeta;
        })
        .filter(post => !post.draft)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): { meta: IBlogPostMeta; content: string } | null {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    if (!fs.existsSync(filePath)) return null;

    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const meta: IBlogPostMeta = {
        slug,
        title: data.title ?? '',
        description: data.description ?? '',
        date: data.date ?? '',
        lastUpdated: data.lastUpdated,
        author: data.author ?? 'opscel',
        tags: data.tags ?? [],
        heroImage: data.heroImage,
        draft: data.draft ?? false,
        readingTime: calculateReadingTime(content),
        cta: parseCta(data.cta),
    };

    return { meta, content };
}

export function getAllTags(): string[] {
    const posts = getAllPosts();
    const tags = new Set<string>();
    posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).sort();
}

export function getPostsByTag(tag: string): IBlogPostMeta[] {
    return getAllPosts().filter(post =>
        post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
    );
}

/** Posts sharing the most tags with this one, newest first on a tie, topped up with the latest posts. */
export function getRelatedPosts(slug: string, tags: string[], limit = 3): IBlogPostMeta[] {
    const wanted = new Set(tags.map(t => t.toLowerCase()));
    const others = getAllPosts().filter(post => post.slug !== slug);
    const scored = others
        .map(post => ({ post, score: post.tags.filter(t => wanted.has(t.toLowerCase())).length }))
        .filter(({ score }) => score > 0)
        .sort((a, b) => b.score - a.score || new Date(b.post.date).getTime() - new Date(a.post.date).getTime())
        .map(({ post }) => post);
    const related = scored.slice(0, limit);
    for (const post of others) {
        if (related.length >= limit) break;
        if (!related.includes(post)) related.push(post);
    }
    return related;
}
