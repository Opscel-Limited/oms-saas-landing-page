/**
 * Static mock of the last page of the Fire Risk Assessment PDF: the Action
 * plan table, with a placeholder photo strip under the first action. Severity
 * chips use the scoped tokens in fra-mockups.css. Demo content only.
 */

import React from 'react';

import DocMockupFrame from './DocMockupFrame';

import './fra-mockups.css';

type Severity = 'serious' | 'minor' | 'best';

const SEVERITY: Record<Severity, { label: string; bg: string; ink: string }> = {
  serious: { label: 'Serious', bg: 'var(--fra-sev-serious-bg)', ink: 'var(--fra-sev-serious-ink)' },
  minor: { label: 'Minor', bg: 'var(--fra-sev-minor-bg)', ink: 'var(--fra-sev-minor-ink)' },
  best: { label: 'Best practice', bg: 'var(--fra-sev-best-bg)', ink: 'var(--fra-sev-best-ink)' },
};

interface Row {
  ref: string;
  finding: string;
  recommendation: string;
  severity: Severity;
  due: string;
  photos?: string[];
}

const ROWS: Row[] = [
  {
    ref: 'A1',
    finding: 'Storage in the stairwell blocks the escape route',
    recommendation: 'Remove all items and agree a no-storage policy with residents',
    severity: 'serious',
    due: 'Within 7 days',
    photos: ['P1', 'P2'],
  },
  {
    ref: 'A2',
    finding: 'Fire door to the bin store does not close fully',
    recommendation: 'Adjust or replace the door closer',
    severity: 'minor',
    due: 'Within 3 months',
  },
  {
    ref: 'A3',
    finding: 'No fire action notices at the stair entrances',
    recommendation: 'Install notices at each entrance',
    severity: 'best',
    due: 'Within 12 months',
  },
];

const COLUMNS = ['Ref', 'Finding', 'Recommendation', 'Severity', 'Due'];

const cell = 'border-b px-2.5 py-2 align-top text-[12px] leading-snug';

const FraActionPlan: React.FC = () => (
  <DocMockupFrame>
    <div className="fra-mockup not-prose my-8 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
      <section
        aria-label="Fire Risk Assessment PDF, page 14: Action plan"
        className="mx-auto flex w-full max-w-[760px] flex-col gap-3 border p-4 sm:p-6"
        style={{ background: 'var(--fra-page-bg)', color: 'var(--fra-page-ink)', borderColor: 'var(--fra-page-line)' }}
      >
        <h3 className="m-0 text-[20px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
          Action plan
        </h3>

        <div
          role="region"
          aria-label="Action plan table, scrolls sideways on small screens"
          tabIndex={0}
          className="w-full max-w-full overflow-x-auto"
        >
          <table className="w-full min-w-[620px] border-collapse text-left">
            <caption className="sr-only">Action plan: findings, recommendations, severity and due dates</caption>
            <thead>
              <tr>
                {COLUMNS.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className="border-b-2 px-2.5 py-2 text-[11px] font-bold uppercase tracking-wide"
                    style={{ borderColor: 'var(--fra-page-ink)' }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => {
                const sev = SEVERITY[r.severity];
                return (
                  <React.Fragment key={r.ref}>
                    <tr>
                      <td className={`${cell} mono font-bold`} style={{ borderColor: r.photos ? 'transparent' : 'var(--fra-page-line)' }}>
                        {r.ref}
                      </td>
                      <td className={cell} style={{ borderColor: r.photos ? 'transparent' : 'var(--fra-page-line)' }}>{r.finding}</td>
                      <td className={cell} style={{ borderColor: r.photos ? 'transparent' : 'var(--fra-page-line)' }}>{r.recommendation}</td>
                      <td className={cell} style={{ borderColor: r.photos ? 'transparent' : 'var(--fra-page-line)' }}>
                        <span
                          className="inline-block whitespace-nowrap rounded px-2 py-0.5 text-[11px] font-bold"
                          style={{ background: sev.bg, color: sev.ink }}
                        >
                          {sev.label}
                        </span>
                      </td>
                      <td className={`${cell} whitespace-nowrap`} style={{ borderColor: r.photos ? 'transparent' : 'var(--fra-page-line)' }}>{r.due}</td>
                    </tr>
                    {r.photos && (
                      <tr>
                        <td colSpan={COLUMNS.length} className="border-b px-2.5 pb-2.5 pt-0" style={{ borderColor: 'var(--fra-page-line)' }}>
                          <ul aria-label={`Photos for action ${r.ref} (placeholders)`} className="m-0 flex list-none gap-2 p-0">
                            {r.photos.map((p) => (
                              <li
                                key={p}
                                aria-label={`Photo placeholder ${p}`}
                                className="flex h-14 w-20 items-end justify-start rounded border p-1 text-[10px] font-bold"
                                style={{ background: 'var(--fra-thumb-bg)', color: 'var(--fra-thumb-ink)', borderColor: 'var(--fra-page-line)' }}
                              >
                                {p}
                              </li>
                            ))}
                          </ul>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="m-0 border-t pt-2 text-right text-[11px]" style={{ borderColor: 'var(--fra-page-line)' }}>
          Page 14 of 14
        </p>
      </section>
    </div>
  </DocMockupFrame>
);

export default FraActionPlan;
