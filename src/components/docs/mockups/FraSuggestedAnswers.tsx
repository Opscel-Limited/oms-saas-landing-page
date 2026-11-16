'use client';

/**
 * Field app Fire Risk Assessment question screen with suggested answers.
 * Tap a suggestion to add it to the comment (never replaces what is there);
 * "+ Add action" adds one row to the Action plan. Demo content only.
 */

import React, { useId, useState } from 'react';

import DocMockupFrame, { PhoneFrame } from './DocMockupFrame';

import './fra-mockups.css';

type Answer = 'yes' | 'no' | 'unknown';

const ANSWERS: { id: Answer; label: string }[] = [
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No' },
  { id: 'unknown', label: 'Unknown' },
];

const QUESTION = 'Are escape routes kept clear of storage and combustible items?';

const SUGGESTIONS = [
  {
    id: 's1',
    text: 'Combustible items stored in the communal stairwell.',
    action: {
      recommendation: 'Remove all items and agree a no-storage policy with residents',
      severity: 'Serious',
      timescale: 'Immediate (7 days)',
    },
  },
  { id: 's2', text: 'Bin store door wedged open.', action: null },
] as const;

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const FraSuggestedAnswers: React.FC = () => {
  const [answer, setAnswer] = useState<Answer>('no');
  const [comment, setComment] = useState('');
  const [actionIds, setActionIds] = useState<string[]>([]);
  const [announce, setAnnounce] = useState('');
  const uid = useId();

  const addText = (text: string) => {
    setComment((cur) => {
      if (cur.includes(text)) return cur;
      return cur.trim() === '' ? text : `${cur}\n${text}`;
    });
  };

  const addAction = (id: string) => {
    setActionIds((cur) => (cur.includes(id) ? cur : [...cur, id]));
    setAnnounce('Action added to the action plan');
  };

  const reset = () => {
    setAnswer('no');
    setComment('');
    setActionIds([]);
    setAnnounce('');
  };

  const showSuggestions = answer !== 'yes';
  const actions = SUGGESTIONS.filter((s) => s.action && actionIds.includes(s.id));

  return (
    <DocMockupFrame>
      <div className="fra-mockup not-prose my-8 flex flex-col gap-3 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <PhoneFrame ariaLabel="Field app Fire Risk Assessment question with suggested answers">
          <div className="flex flex-col gap-3 p-3">
            <div className="flex flex-col gap-1">
              <span className="mono text-[11px] font-bold" style={{ color: 'var(--accent)' }}>
                MEANS OF ESCAPE
              </span>
              <h3 id={`${uid}-q`} className="m-0 text-[17px] font-bold leading-snug" style={{ fontFamily: 'var(--mockup-font-body)' }}>
                {QUESTION}
              </h3>
              <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>
                Check stairwells, landings and communal corridors
              </p>
            </div>

            <div role="group" aria-labelledby={`${uid}-q`} className="grid grid-cols-3 gap-2">
              {ANSWERS.map((a) => (
                <button
                  key={a.id}
                  type="button"
                  aria-pressed={answer === a.id}
                  onClick={() => setAnswer(a.id)}
                  className="min-h-[44px] rounded border px-2 text-[14px] font-semibold"
                  style={{
                    background: answer === a.id ? 'var(--accent)' : 'var(--card)',
                    color: answer === a.id ? 'var(--on-accent)' : 'var(--ink)',
                    borderColor: answer === a.id ? 'var(--accent)' : 'var(--line)',
                  }}
                >
                  {a.label}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor={`${uid}-c`} className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
                Comment
              </label>
              <textarea
                id={`${uid}-c`}
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full min-w-0 rounded border border-[var(--line)] bg-[var(--card)] px-2.5 py-2 text-[14px]"
                style={{ color: 'var(--ink)' }}
              />
            </div>

            {showSuggestions && (
              <div className="fra-anim-fade flex flex-col gap-2">
                <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>
                  Suggested answers. Tap one to fill the comment; you can edit it.
                </p>
                <div role="group" aria-label="Suggested answers" className="flex flex-col gap-2">
                  {SUGGESTIONS.map((s) => {
                    const added = actionIds.includes(s.id);
                    return (
                      <div key={s.id} className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => addText(s.text)}
                          className="min-h-[44px] max-w-full rounded-full border px-3.5 py-2 text-left text-[13px] font-semibold leading-snug"
                          style={{ background: 'var(--chip)', color: 'var(--ink)', borderColor: 'var(--line)' }}
                        >
                          {s.text}
                        </button>
                        {s.action && (
                          <button
                            type="button"
                            disabled={added}
                            onClick={() => addAction(s.id)}
                            className="min-h-[44px] rounded-full border px-3.5 py-2 text-[13px] font-semibold"
                            style={{
                              background: added ? 'var(--ok-bg)' : 'var(--card)',
                              color: added ? 'var(--ok-ink)' : 'var(--accent)',
                              borderColor: added ? 'var(--ok-ink)' : 'var(--accent)',
                            }}
                          >
                            {added ? 'Action added' : '+ Add action'}
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {actions.length > 0 && (
              <section aria-label="Action plan" className="fra-anim-fade flex flex-col gap-2 rounded border border-[var(--line)] bg-[var(--card)] p-3">
                <h4 className="m-0 text-[14px] font-bold" style={hdStyle}>
                  Action plan
                </h4>
                <ul className="m-0 flex list-none flex-col gap-2 p-0">
                  {actions.map((s) => (
                    <li key={s.id} className="flex flex-col gap-1.5 text-[13px]">
                      <span>{s.action!.recommendation}</span>
                      <span className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="rounded px-2 py-1 text-[12px] font-semibold"
                          style={{ background: 'var(--fra-sev-serious-bg)', color: 'var(--fra-sev-serious-ink)' }}
                        >
                          {s.action!.severity}
                        </span>
                        <span className="rounded px-2 py-1 text-[12px] font-semibold" style={{ background: 'var(--chip)', color: 'var(--ink2)' }}>
                          {s.action!.timescale}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

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

export default FraSuggestedAnswers;
