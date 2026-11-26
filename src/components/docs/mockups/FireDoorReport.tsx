/**
 * Static mock of a Fire Door Inspection Report floor plan page: the plan with
 * numbered pins coloured by result, and the key beneath it (pin, door,
 * location, result). Demo content only.
 */

import React from 'react';

import DocMockupFrame from './DocMockupFrame';
import { LEVEL_1_DOORS, TONE } from './fire-door-shared';

import './fire-door-mockups.css';

const ROOMS: Array<[number, number, number, number, string]> = [
  [0, 0, 130, 430, 'Stair A'],
  [130, 0, 240, 430, 'Flat 3'],
  [370, 0, 255, 430, 'Flat 4'],
  [625, 0, 245, 430, 'Flat 5'],
  [870, 0, 130, 430, 'Stair B'],
  [0, 570, 560, 430, 'Flat 6'],
  [560, 570, 140, 430, 'Riser'],
  [700, 570, 300, 430, 'Flat 6a'],
];

const COLUMNS = ['Pin', 'Door', 'Location', 'Result'];
const cell = 'border-b px-2.5 py-1.5 align-top text-[12px] leading-snug';

const FireDoorReport: React.FC = () => (
  <DocMockupFrame>
    <div className="fd-mockup not-prose my-8 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
      <section
        aria-label="Fire Door Inspection Report, floor plan page for Level 1"
        className="mx-auto flex w-full max-w-[760px] flex-col gap-3 border p-4 sm:p-6"
        style={{ background: 'var(--fd-page-bg)', color: 'var(--fd-page-ink)', borderColor: 'var(--fd-page-line)' }}
      >
        <div className="flex flex-col gap-0.5">
          <h3 className="m-0 text-[20px] font-bold" style={{ fontFamily: 'var(--mockup-font-heading)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Floor plan - Level 1
          </h3>
          <span className="text-[11px]">Plan as at 25/11/2026</span>
        </div>

        <div className="relative w-full overflow-hidden border" style={{ aspectRatio: '2 / 1', borderColor: 'var(--fd-page-line)' }} aria-hidden="true">
          <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full">
            <rect x="0" y="0" width="1000" height="500" fill="var(--fd-plan-corridor)" />
            {ROOMS.map(([x, y, w, h, label]) => (
              <g key={label}>
                <rect x={x} y={y / 2} width={w} height={h / 2} fill="var(--fd-plan-room)" stroke="var(--fd-plan-wall)" strokeWidth="4" />
                <text x={x + w / 2} y={(y + h / 2) / 2 + 9} textAnchor="middle" fontSize="26" fill="var(--ink2)" style={{ fontFamily: 'var(--mockup-font-body)' }}>
                  {label}
                </text>
              </g>
            ))}
            <rect x="3" y="3" width="994" height="494" fill="none" stroke="var(--fd-plan-wall)" strokeWidth="6" />
          </svg>
          {LEVEL_1_DOORS.map((d) => (
            <span
              key={d.ref}
              className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[10px] font-bold"
              style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%`, background: TONE[d.tone].ink, color: 'var(--bg)', borderColor: 'var(--bg)' }}
            >
              {d.pin}
            </span>
          ))}
        </div>

        <div role="region" aria-label="Pin key, scrolls sideways on small screens" tabIndex={0} className="w-full max-w-full overflow-x-auto">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <caption className="sr-only">Pin key: each pin number, its door, location and result</caption>
            <thead>
              <tr>
                {COLUMNS.map((c) => (
                  <th key={c} scope="col" className="border-b-2 px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide" style={{ borderColor: 'var(--fd-page-ink)' }}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LEVEL_1_DOORS.map((d) => (
                <tr key={d.ref}>
                  <td className={`${cell} mono font-bold`} style={{ borderColor: 'var(--fd-page-line)' }}>
                    {d.pin}
                  </td>
                  <td className={`${cell} mono`} style={{ borderColor: 'var(--fd-page-line)' }}>
                    {d.ref}
                  </td>
                  <td className={cell} style={{ borderColor: 'var(--fd-page-line)' }}>
                    {d.location}
                  </td>
                  <td className={cell} style={{ borderColor: 'var(--fd-page-line)' }}>
                    <span className="inline-block whitespace-nowrap rounded px-2 py-0.5 text-[11px] font-bold" style={{ background: TONE[d.tone].bg, color: TONE[d.tone].ink }}>
                      {d.result}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="m-0 border-t pt-2 text-right text-[11px]" style={{ borderColor: 'var(--fd-page-line)' }}>
          Page 9 of 11
        </p>
      </section>
    </div>
  </DocMockupFrame>
);

export default FireDoorReport;
