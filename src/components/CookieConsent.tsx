'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

/**
 * Cookie consent for www.opscel.com (PECR reg 6). Google Analytics is NOT loaded until the visitor chooses
 * "Accept analytics"; "Reject" is equally prominent and nothing non-essential runs before a choice. The choice is
 * kept in localStorage (strictly necessary: it records the choice itself) and asked again after 12 months.
 * The footer's "Cookie settings" button dispatches OPEN_EVENT to reopen the banner.
 */
export const CONSENT_KEY = 'opscel-cookie-consent';
export const OPEN_EVENT = 'opscel:cookie-settings';
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

type Choice = 'granted' | 'denied';

function readChoice(): Choice | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { choice?: string; at?: number };
    if ((parsed.choice !== 'granted' && parsed.choice !== 'denied') || typeof parsed.at !== 'number') return null;
    if (Date.now() - parsed.at > MAX_AGE_MS) return null;
    return parsed.choice;
  } catch {
    return null;
  }
}

function saveChoice(choice: Choice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, at: Date.now() }));
  } catch {
    // Storage blocked: the choice applies to this page view only.
  }
}

/** Removes Google Analytics cookies (_ga, _ga_<id>) on this host and the parent domain. */
function clearAnalyticsCookies() {
  const host = window.location.hostname;
  const domains = ['', host, `.${host}`, `.${host.split('.').slice(-2).join('.')}`];
  document.cookie.split(';').forEach((c) => {
    const name = c.split('=')[0]?.trim();
    if (!name || !(name === '_ga' || name.startsWith('_ga_'))) return;
    domains.forEach((d) => {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? `; domain=${d}` : ''}`;
    });
  });
}

const CookieConsent: React.FC<{ gaId?: string }> = ({ gaId }) => {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const stored = readChoice();
    // No consent (rejected, withdrawn, expired or never given): remove any GA cookies left from an earlier visit,
    // including ones GA rewrote just before a withdrawal reload.
    if (stored !== 'granted') clearAnalyticsCookies();
    setChoice(stored);
    setOpen(stored === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  const decide = useCallback(
    (next: Choice) => {
      const withdrawing = choice === 'granted' && next === 'denied';
      saveChoice(next);
      setChoice(next);
      setOpen(false);
      if (withdrawing) {
        clearAnalyticsCookies();
        // The analytics script is already running on this page; reload so it is no longer loaded.
        window.location.reload();
      }
    },
    [choice],
  );

  return (
    <>
      {gaId && choice === 'granted' && <GoogleAnalytics gaId={gaId} />}
      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card px-4 py-4 shadow-lg md:inset-x-auto md:bottom-4 md:left-4 md:max-w-md md:rounded-lg md:border"
        >
          <h2 id="cookie-consent-title" className="font-heading text-base font-semibold text-foreground">
            Cookies on this site
          </h2>
          <p className="mt-1 text-sm text-foreground-accent">
            We would like to use Google Analytics cookies to understand how people use our website. They are only set
            if you accept. See our{' '}
            <Link href="/cookies" className="underline hover:text-foreground">
              Cookie Policy
            </Link>
            .
          </p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => decide('granted')}
              className="min-h-[44px] flex-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-mechanical ease-mechanical hover:bg-primary-accent"
            >
              Accept analytics
            </button>
            <button
              type="button"
              onClick={() => decide('denied')}
              className="min-h-[44px] flex-1 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-mechanical ease-mechanical hover:bg-primary-accent"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;

/** Footer button that reopens the consent banner. */
export const CookieSettingsButton: React.FC<{ className?: string }> = ({ className }) => (
  <button type="button" className={className} onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}>
    Cookie settings
  </button>
);
