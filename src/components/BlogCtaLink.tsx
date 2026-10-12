'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

interface Props extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> {
    href: string;
    /** The post's slug, so GA can attribute the click. */
    post: string;
    /** demo, trial, feature or link. */
    cta: string;
    /** sidebar, bottom or inline. */
    placement: string;
    children: React.ReactNode;
}

/** A blog link that reports its click to GA as a `blog_cta` event. */
const BlogCtaLink: React.FC<Props> = ({ href: rawHref, post, cta, placement, children, ...rest }) => {
    // Absolute links to our own site become client-side navigations.
    const href = rawHref.replace(/^https:\/\/(www\.)?opscel\.com(?=\/)/, '');
    const track = () => {
        if (!href.startsWith('#')) sendGAEvent('event', 'blog_cta', { cta, placement, post, link_url: href });
    };

    if (href.startsWith('/')) {
        return (
            <Link href={href} {...rest} onClick={track}>
                {children}
            </Link>
        );
    }

    // The app opens in the same tab; anything off our domains opens a new one.
    const external = /^https?:\/\//.test(href) && !/^https:\/\/[a-z.]*opscel\.com(\/|$)/.test(href);
    return (
        <a
            href={href}
            {...rest}
            onClick={track}
            {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
        >
            {children}
        </a>
    );
};

export default BlogCtaLink;
