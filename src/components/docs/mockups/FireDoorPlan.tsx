'use client';

/**
 * Office Plans view (site > Assets > Plans) for one floor: numbered pins
 * coloured by each door's last result, the pin details on click, and one
 * door in "Not on any plan yet" you can Place, then tap the plan to drop.
 * Demo content only.
 */

import React, { useEffect, useId, useRef, useState } from 'react';

import DocMockupFrame from './DocMockupFrame';
import { LEVEL_1_DOORS, ROOMS, TONE, type DemoDoor, type DoorTone } from './fire-door-shared';

import './fire-door-mockups.css';

const UNPLACED: DemoDoor = {
  pin: 13,
  ref: 'FD-1.07',
  location: 'Level 1, riser cupboard',
  fn: 'Other',
  rating: 'FD30',
  result: 'No visit recorded',
  tone: 'none',
  x: 0.62,
  y: 0.57,
};

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const FireDoorPlan: React.FC = () => {
  const [doors, setDoors] = useState<DemoDoor[]>(LEVEL_1_DOORS);
  const [selected, setSelected] = useState<number | null>(7);
  const [placing, setPlacing] = useState(false);
  const [announce, setAnnounce] = useState('');
  const planRef = useRef<HTMLDivElement>(null);
  const placeHereRef = useRef<HTMLButtonElement>(null);

  // The Place button disables while placing, so move focus to the placing banner's action.
  useEffect(() => {
    if (placing) placeHereRef.current?.focus();
  }, [placing]);
  const uid = useId();

  const unplaced = doors.some((d) => d.ref === UNPLACED.ref) ? [] : [UNPLACED];
  const current = doors.find((d) => d.pin === selected) ?? null;
  const counts = (Object.keys(TONE) as DoorTone[]).map((t) => [t, doors.filter((d) => d.tone === t).length] as const);

  const place = (x: number, y: number) => {
    setDoors((cur) => [...cur, { ...UNPLACED, x, y }]);
    setPlacing(false);
    setSelected(UNPLACED.pin);
    setAnnounce(`${UNPLACED.ref} placed as pin ${UNPLACED.pin}`);
  };

  const onPlanClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!placing || !planRef.current) return;
    const r = planRef.current.getBoundingClientRect();
    place(Math.min(0.98, Math.max(0.02, (e.clientX - r.left) / r.width)), Math.min(0.96, Math.max(0.04, (e.clientY - r.top) / r.height)));
  };

  const reset = () => {
    setDoors(LEVEL_1_DOORS);
    setSelected(7);
    setPlacing(false);
    setAnnounce('');
  };

  return (
    <DocMockupFrame>
      <div className="fd-mockup not-prose my-8 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <section
          aria-label="Office Plans view for Kestrel House, Level 1"
          className="mx-auto flex w-full max-w-[820px] flex-col gap-3 rounded border border-[var(--line)] bg-[var(--card)] p-3 sm:p-4"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="m-0 text-[18px] font-bold" style={hdStyle}>
              Kestrel House · Level 1
            </h3>
            <span className="mono text-[11px]" style={{ color: 'var(--ink2)' }}>
              Assets › Plans
            </span>
          </div>

          <ul aria-label="Pin colour key" className="m-0 flex list-none flex-wrap gap-1.5 p-0">
            {counts.filter(([, n]) => n > 0).map(([t, n]) => (
              <li
                key={t}
                className="rounded px-2 py-1 text-[11px] font-semibold"
                style={{ background: TONE[t].bg, color: TONE[t].ink }}
              >
                {TONE[t].label} ({n})
              </li>
            ))}
          </ul>

          {placing && (
            <div className="fd-anim-fade flex flex-wrap items-center gap-2 rounded border px-3 py-2 text-[13px]" style={{ borderColor: 'var(--accent)', color: 'var(--ink)' }}>
              <span>Tap the plan where {UNPLACED.ref} is.</span>
              <button
                ref={placeHereRef}
                type="button"
                onClick={() => place(UNPLACED.x, UNPLACED.y)}
                className="min-h-[44px] rounded border px-3 text-[13px] font-semibold"
                style={{ borderColor: 'var(--accent)', color: 'var(--accent)', background: 'var(--card)' }}
              >
                Place at the riser door
              </button>
              <button
                type="button"
                onClick={() => setPlacing(false)}
                className="min-h-[44px] rounded px-3 text-[13px] font-semibold underline"
                style={{ color: 'var(--link)', background: 'transparent' }}
              >
                Cancel
              </button>
            </div>
          )}

          <div className="grid gap-3 md:grid-cols-[1fr_220px]">
            <div
              ref={planRef}
              onClick={onPlanClick}
              className="relative w-full overflow-hidden rounded border"
              style={{ aspectRatio: '2 / 1', borderColor: 'var(--line)', cursor: placing ? 'crosshair' : 'default' }}
            >
              <svg viewBox="0 0 1000 500" className="absolute inset-0 h-full w-full" aria-hidden="true">
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
              {doors.map((d) => (
                <button
                  key={d.ref}
                  type="button"
                  aria-label={`Pin ${d.pin}: ${d.ref}, ${TONE[d.tone].label}`}
                  aria-pressed={selected === d.pin}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!placing) setSelected(d.pin);
                  }}
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
                  style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%`, background: 'transparent' }}
                >
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-bold"
                    style={{
                      background: TONE[d.tone].ink,
                      color: 'var(--bg)',
                      borderColor: selected === d.pin ? 'var(--ink)' : 'var(--bg)',
                    }}
                  >
                    {d.pin}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              {current ? (
                <section aria-label="Pin details" className="fd-anim-fade flex flex-col gap-1 rounded border border-[var(--line)] p-3 text-[13px]">
                  <span className="mono text-[11px] font-bold" style={{ color: 'var(--accent)' }}>
                    PIN {current.pin}
                  </span>
                  <strong className="text-[15px]">{current.ref}</strong>
                  <span>{current.location}</span>
                  <span style={{ color: 'var(--ink2)' }}>
                    {current.fn} · {current.rating}
                  </span>
                  <span
                    className="mt-1 self-start rounded px-2 py-0.5 text-[12px] font-semibold"
                    style={{ background: TONE[current.tone].bg, color: TONE[current.tone].ink }}
                  >
                    Last result: {TONE[current.tone].label}
                  </span>
                  <span className="mt-1 text-[12px]" style={{ color: 'var(--ink2)' }}>
                    Move pin · Take off plan
                  </span>
                </section>
              ) : null}

              <section aria-labelledby={`${uid}-np`} className="flex flex-col gap-2 rounded border border-[var(--line)] p-3">
                <h4 id={`${uid}-np`} className="m-0 text-[13px] font-bold" style={hdStyle}>
                  Not on any plan yet
                </h4>
                {unplaced.length === 0 ? (
                  <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>
                    Every door on this floor is placed.
                  </p>
                ) : (
                  unplaced.map((d) => (
                    <div key={d.ref} className="flex flex-wrap items-center justify-between gap-2 text-[13px]">
                      <span>
                        <strong>{d.ref}</strong> · {d.location}
                      </span>
                      <button
                        type="button"
                        disabled={placing}
                        onClick={() => {
                          setPlacing(true);
                          setAnnounce(`Placing ${d.ref}. Tap the plan where the door is, or use Place at the riser door.`);
                        }}
                        className="min-h-[44px] rounded px-3 text-[13px] font-semibold"
                        style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
                      >
                        Place
                      </button>
                    </div>
                  ))
                )}
              </section>
            </div>
          </div>

          <div role="status" aria-live="polite" className="sr-only">
            {announce}
          </div>

          <button
            type="button"
            onClick={reset}
            className="min-h-[44px] self-start rounded px-2 text-[13px] font-semibold underline"
            style={{ background: 'transparent', color: 'var(--link)' }}
          >
            Reset demo
          </button>
        </section>
      </div>
    </DocMockupFrame>
  );
};

export default FireDoorPlan;
