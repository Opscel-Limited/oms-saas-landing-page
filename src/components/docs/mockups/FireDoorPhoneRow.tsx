'use client';

/**
 * Field app: one door on the Fire Door Inspection sheet. Checklist answers,
 * the "Mark unanswered core checks Pass" shortcut (never the self-closer or
 * signage), gap readings with an advisory warning outside the usual range,
 * outcome, priority, notes and up to 3 photos. Demo content only.
 */

import React, { useId, useState } from 'react';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';

import './fire-door-mockups.css';

type Answer = 'pass' | 'fail' | 'advisory' | 'na';

const ANSWERS: { id: Answer; label: string }[] = [
  { id: 'pass', label: 'Pass' },
  { id: 'fail', label: 'Fail' },
  { id: 'advisory', label: 'Advisory' },
  { id: 'na', label: 'N/A' },
];

// The product checklist, in order. `core` items are the ones the shortcut fills.
const CHECKS: { key: string; label: string; core: boolean }[] = [
  { key: 'leaf', label: 'Door, frame and wall undamaged', core: true },
  { key: 'letterbox', label: 'Letterbox (where fitted)', core: false },
  { key: 'glazing', label: 'Glazing and vision panel (where fitted)', core: false },
  { key: 'ironmongery', label: 'Hinges, locks and ironmongery', core: true },
  { key: 'gaps', label: 'Gaps around the door', core: true },
  { key: 'seals', label: 'Strips and seals (where fitted)', core: false },
  { key: 'closer', label: 'Self-closer closes and latches', core: false },
  { key: 'altered', label: 'No alterations', core: true },
  { key: 'held_open', label: 'Not wedged or held open', core: true },
  { key: 'signage', label: 'Fire door signage', core: false },
  { key: 'damage', label: 'No other damage', core: true },
];

const GAPS: { key: string; label: string; min: number; max: number; warn: string }[] = [
  { key: 'hinge', label: 'Hinge side', min: 2, max: 4, warn: "Outside 2-4 mm - check against the door's certificate" },
  { key: 'lock', label: 'Lock side', min: 2, max: 4, warn: "Outside 2-4 mm - check against the door's certificate" },
  { key: 'head', label: 'Head', min: 2, max: 4, warn: "Outside 2-4 mm - check against the door's certificate" },
  { key: 'meeting', label: 'Meeting stiles', min: 2, max: 4, warn: "Outside 2-4 mm - check against the door's certificate" },
  { key: 'threshold', label: 'Threshold', min: 0, max: 8, warn: "Over 8 mm - check against the door's certificate" },
];

const OUTCOMES = ['Pass', 'Remediate', 'Replace leaf', 'Replace doorset', 'Not inspected'] as const;
const PRIORITIES = ['Immediate', 'Within 1 month', 'Within 3 months', 'Advisory'] as const;

const START_ANSWERS: Record<string, Answer> = { closer: 'fail', held_open: 'fail' };
const START_GAPS: Record<string, string> = { hinge: '3', lock: '3.5', head: '3', threshold: '6' };

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const FireDoorPhoneRow: React.FC = () => {
  const [answers, setAnswers] = useState<Record<string, Answer>>(START_ANSWERS);
  const [gaps, setGaps] = useState<Record<string, string>>(START_GAPS);
  const [outcome, setOutcome] = useState<string>('Remediate');
  const [priority, setPriority] = useState<string>('Immediate');
  const [photos, setPhotos] = useState(1);
  const [announce, setAnnounce] = useState('');
  const uid = useId();

  const outOfRange = (g: (typeof GAPS)[number]) => {
    const raw = gaps[g.key]?.trim();
    if (!raw) return false;
    const n = Number(raw);
    return Number.isFinite(n) && (n < g.min || n > g.max);
  };

  const markCorePass = () => {
    // Like the product: a gap reading outside the usual range keeps "Gaps around the door" for the engineer.
    const gapFlagged = GAPS.some((g) => outOfRange(g));
    setAnswers((cur) => {
      const next = { ...cur };
      for (const c of CHECKS) if (c.core && !next[c.key] && !(c.key === 'gaps' && gapFlagged)) next[c.key] = 'pass';
      return next;
    });
    setAnnounce(
      gapFlagged
        ? 'Unanswered core checks marked Pass. Gaps, self-closer and signage left for you.'
        : 'Unanswered core checks marked Pass. Self-closer and signage left for you.'
    );
  };

  const reset = () => {
    setAnswers(START_ANSWERS);
    setGaps(START_GAPS);
    setOutcome('Remediate');
    setPriority('Immediate');
    setPhotos(1);
    setAnnounce('');
  };

  return (
    <DocMockupFrame>
      <div className="fd-mockup not-prose my-8 flex flex-col gap-3 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <PhoneFrame ariaLabel="Field app Fire Door Inspection: one door">
          <div className="flex flex-col gap-3 p-3">
            <div className="flex flex-col gap-0.5">
              <span className="mono text-[11px] font-bold" style={{ color: 'var(--accent)' }}>
                FD-1.01 · INSPECT (ON REGISTER)
              </span>
              <h3 className="m-0 text-[17px] font-bold leading-snug" style={{ fontFamily: 'var(--mockup-font-body)' }}>
                Level 1, Stair A lobby
              </h3>
              <span className="text-[12px]" style={{ color: 'var(--ink2)' }}>
                Communal · FD30
              </span>
            </div>

            <button
              type="button"
              onClick={markCorePass}
              className="min-h-[44px] rounded border px-3 py-2 text-left text-[13px] font-semibold"
              style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--card)' }}
            >
              Mark unanswered core checks Pass (not self-closer or signage)
            </button>

            <section aria-label="Checklist" className="flex flex-col gap-2">
              <h4 className="m-0 text-[13px] font-bold" style={hdStyle}>
                Checklist
              </h4>
              {CHECKS.map((c) => (
                <div key={c.key} className="flex flex-col gap-1">
                  <span id={`${uid}-${c.key}`} className="text-[13px]">
                    {c.label}
                  </span>
                  <div role="group" aria-labelledby={`${uid}-${c.key}`} className="grid grid-cols-4 gap-1">
                    {ANSWERS.map((a) => {
                      const on = answers[c.key] === a.id;
                      const failOn = on && a.id === 'fail';
                      return (
                        <button
                          key={a.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => setAnswers((cur) => ({ ...cur, [c.key]: a.id }))}
                          className="min-h-[44px] min-w-0 rounded border px-0.5 text-[11px] font-semibold"
                          style={{
                            background: failOn ? 'var(--fd-fail-bg)' : on ? 'var(--accent)' : 'var(--card)',
                            color: failOn ? 'var(--fd-fail-ink)' : on ? 'var(--on-accent)' : 'var(--ink)',
                            borderColor: failOn ? 'var(--fd-fail-ink)' : on ? 'var(--accent)' : 'var(--line)',
                          }}
                        >
                          {a.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            <section aria-label="Gap readings" className="flex flex-col gap-2">
              <h4 className="m-0 text-[13px] font-bold" style={hdStyle}>
                Gaps (mm)
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {GAPS.map((g) => (
                  <div key={g.key} className="flex flex-col gap-1">
                    <label htmlFor={`${uid}-g-${g.key}`} className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
                      {g.label}
                    </label>
                    <input
                      id={`${uid}-g-${g.key}`}
                      inputMode="decimal"
                      value={gaps[g.key] ?? ''}
                      onChange={(e) => setGaps((cur) => ({ ...cur, [g.key]: e.target.value }))}
                      aria-describedby={outOfRange(g) ? `${uid}-gw-${g.key}` : undefined}
                      className="min-h-[44px] w-full min-w-0 rounded border bg-[var(--card)] px-2.5 text-[14px]"
                      style={{ borderColor: outOfRange(g) ? 'var(--fd-noaccess-ink)' : 'var(--line)', color: 'var(--ink)' }}
                    />
                    {outOfRange(g) && (
                      <span id={`${uid}-gw-${g.key}`} role="status" className="fd-anim-fade rounded px-1.5 py-1 text-[11px]" style={{ background: 'var(--fd-noaccess-bg)', color: 'var(--fd-noaccess-ink)' }}>
                        {g.warn}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <p className="m-0 text-[11px]" style={{ color: 'var(--ink2)' }}>
                Try a lock-side gap of 6.5: it warns, it never fails the door.
              </p>
            </section>

            <section aria-label="Result" className="flex flex-col gap-2">
              <h4 className="m-0 text-[13px] font-bold" style={hdStyle}>
                Outcome
              </h4>
              <div role="group" aria-label="Outcome" className="flex flex-wrap gap-1.5">
                {OUTCOMES.map((o) => (
                  <button
                    key={o}
                    type="button"
                    aria-pressed={outcome === o}
                    onClick={() => setOutcome(o)}
                    className="min-h-[44px] rounded-full border px-3 text-[12px] font-semibold"
                    style={{
                      background: outcome === o ? 'var(--accent)' : 'var(--card)',
                      color: outcome === o ? 'var(--on-accent)' : 'var(--ink)',
                      borderColor: outcome === o ? 'var(--accent)' : 'var(--line)',
                    }}
                  >
                    {o}
                  </button>
                ))}
              </div>
              <div className="flex flex-col gap-1.5">
                  <span className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
                    Priority
                  </span>
                  <div role="group" aria-label="Priority" className="flex flex-wrap gap-1.5">
                    {PRIORITIES.map((p) => (
                      <button
                        key={p}
                        type="button"
                        aria-pressed={priority === p}
                        onClick={() => setPriority(p)}
                        className="min-h-[44px] rounded-full border px-3 text-[12px] font-semibold"
                        style={{
                          background: priority === p ? 'var(--fd-fail-bg)' : 'var(--card)',
                          color: priority === p ? 'var(--fd-fail-ink)' : 'var(--ink)',
                          borderColor: priority === p ? 'var(--fd-fail-ink)' : 'var(--line)',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                  <label htmlFor={`${uid}-notes`} className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
                    Remedial notes
                  </label>
                  <textarea
                    id={`${uid}-notes`}
                    rows={3}
                    defaultValue="Found wedged open. Closer arm snapped. Wedge removed on site; replace the closer."
                    className="w-full min-w-0 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 py-2 text-[13px]"
                    style={{ color: 'var(--ink)' }}
                  />
                </div>
            </section>

            <section aria-label="Photos of this door" className="flex flex-col gap-2">
              <h4 className="m-0 text-[13px] font-bold" style={hdStyle}>
                Photos ({photos} of 3)
              </h4>
              <ul className="m-0 flex list-none gap-2 p-0">
                {Array.from({ length: photos }, (_, i) => (
                  <li
                    key={i}
                    aria-label={`Photo placeholder ${i + 1}`}
                    className="flex h-16 w-16 items-end rounded border p-1 text-[10px] font-bold"
                    style={{ background: 'var(--chip)', color: 'var(--ink2)', borderColor: 'var(--line)' }}
                  >
                    P{i + 1}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 gap-2">
                {['Take photo', 'From gallery'].map((label) => (
                  <button
                    key={label}
                    type="button"
                    disabled={photos >= 3}
                    onClick={() => {
                      setPhotos((n) => Math.min(3, n + 1));
                      setAnnounce('Photo added');
                    }}
                    className="min-h-[44px] rounded border px-2 text-[13px] font-semibold"
                    style={{ borderColor: 'var(--line)', background: 'var(--card)', color: 'var(--ink)' }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </section>

            <div role="status" aria-live="polite" className="sr-only">
              {announce}
            </div>

            <button
              type="button"
              onClick={reset}
              className="mt-1 min-h-[44px] self-start rounded px-2 text-[13px] font-semibold underline"
              style={{ background: 'transparent', color: 'var(--link)' }}
            >
              Reset demo
            </button>
          </div>
        </PhoneFrame>
      </div>
    </DocMockupFrame>
  );
};

export default FireDoorPhoneRow;
