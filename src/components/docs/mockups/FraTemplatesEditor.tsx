'use client';

/**
 * Office settings page "Risk assessment templates" (Fire Risk Assessment).
 * Fields are display-only; the one working control is "Save template", which
 * shows "Saved" for two seconds with no network call. Demo content only.
 */

import React, { useEffect, useId, useRef, useState } from 'react';

import DocMockupFrame from './DocMockupFrame';

import './fra-mockups.css';

const hdStyle: React.CSSProperties = {
  fontFamily: 'var(--mockup-font-heading)',
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
};

const Card: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section
    aria-label={label}
    className="flex min-w-0 flex-col gap-3 rounded border border-[var(--line)] bg-[var(--card)] p-3"
  >
    {children}
  </section>
);

interface FieldProps {
  label: string;
  value: string;
  multiline?: boolean;
  select?: boolean;
}

/** A read-only field: real label, real (read-only) control. */
const Field: React.FC<FieldProps> = ({ label, value, multiline, select }) => {
  const id = useId();
  const common =
    'w-full min-w-0 rounded border border-[var(--line)] bg-[var(--surf)] px-2.5 py-2 text-[13px]';
  return (
    <div className="flex min-w-0 flex-col gap-1">
      <label htmlFor={id} className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
        {label}
      </label>
      <div className="relative">
        {multiline ? (
          <textarea id={id} readOnly rows={2} value={value} className={`${common} resize-none`} style={{ color: 'var(--ink)' }} />
        ) : (
          <input
            id={id}
            readOnly
            value={value}
            className={`${common} ${select ? 'pr-8' : ''}`}
            style={{ color: 'var(--ink)' }}
          />
        )}
        {select && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px]"
            style={{ color: 'var(--ink2)' }}
          >
            &#9660;
          </span>
        )}
      </div>
    </div>
  );
};

const IconButton: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <button
    type="button"
    aria-label={label}
    title={label}
    tabIndex={-1}
    aria-disabled="true"
    className="fra-inert flex h-9 w-9 flex-shrink-0 items-center justify-center rounded border border-[var(--line)] bg-[var(--card)] text-[14px]"
    style={{ color: 'var(--ink2)' }}
  >
    <span aria-hidden="true">{children}</span>
  </button>
);

const SERVICE_TYPES = ['Fire Risk Assessment - Domestic', 'Fire Risk Assessment - Communal'];

const FraTemplatesEditor: React.FC = () => {
  const [saved, setSaved] = useState(false);
  const uid = useId();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  const save = () => {
    setSaved(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setSaved(false), 2000);
  };

  return (
    <DocMockupFrame>
      <div className="fra-mockup not-prose my-8 flex min-w-0 flex-col gap-4 rounded border border-[var(--line)] bg-[var(--stage)] p-3 sm:p-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h3 className="m-0 text-[20px] font-bold" style={hdStyle}>
              Risk assessment templates
            </h3>
            <p className="m-0 mt-1 text-[13px]" style={{ color: 'var(--ink2)' }}>
              Your own fire risk assessment questions, with suggested answers
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span role="status" aria-live="polite" className="min-w-[48px] text-[13px] font-semibold" style={{ color: 'var(--ok-ink)' }}>
              {saved && <span className="fra-anim-fade">Saved</span>}
            </span>
            <button
              type="button"
              onClick={save}
              className="min-h-[40px] rounded px-4 py-2 text-[13px] font-semibold"
              style={{ background: 'var(--accent)', color: 'var(--on-accent)' }}
            >
              Save template
            </button>
          </div>
        </div>

        <Card label="Template details">
          <h4 className="m-0 text-[15px] font-bold" style={hdStyle}>
            Template details
          </h4>
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Name" value="Housing blocks (BS 9792)" />
            <Field label="Description" value="For blocks of flats and HMOs" />
          </div>
          <div className="flex min-w-0 flex-col gap-1.5">
            <span id={`${uid}-svc`} className="text-[12px] font-semibold" style={{ color: 'var(--ink2)' }}>
              Use for these service types
            </span>
            <ul aria-labelledby={`${uid}-svc`} className="m-0 flex list-none flex-wrap gap-1.5 p-0">
              {SERVICE_TYPES.map((s) => (
                <li
                  key={s}
                  className="max-w-full rounded px-2 py-1 text-[12px] font-semibold leading-snug"
                  style={{ background: 'var(--due-bg)', color: 'var(--due-ink)' }}
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              role="switch"
              aria-checked="false"
              aria-labelledby={`${uid}-default`}
              aria-disabled="true"
              tabIndex={-1}
              className="fra-inert relative h-6 w-11 flex-shrink-0 rounded-full border border-[var(--line)] bg-[var(--chip)]"
            >
              <span aria-hidden="true" className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-[var(--ink2)]" />
            </button>
            <span id={`${uid}-default`} className="text-[13px] font-semibold">
              Default template
            </span>
          </div>
        </Card>

        <Card label="Template section: Means of escape">
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Part of the report" value="Hazards" select />
            <Field label="Section title" value="Means of escape" />
          </div>

          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex min-w-0 flex-col gap-3 rounded border border-[var(--line)] bg-[var(--surf)] p-3">
              <div className="flex min-w-0 items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <Field label="Question 1" value="Are escape routes kept clear of storage and combustible items?" multiline />
                </div>
                <div className="flex flex-shrink-0 gap-1 pt-5">
                  <IconButton label="Move question up">&#8593;</IconButton>
                  <IconButton label="Move question down">&#8595;</IconButton>
                  <IconButton label="Delete question">&#10005;</IconButton>
                </div>
              </div>
              <Field label="Help text" value="Check stairwells, landings and communal corridors" />

              <div
                role="group"
                aria-label="Suggested answer 1"
                className="flex min-w-0 flex-col gap-3 rounded border border-[var(--line)] bg-[var(--card)] p-3"
              >
                <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                  <Field label="Offered when the answer is" value="No" select />
                </div>
                <Field
                  label="Comment (what is written on the report)"
                  value="Combustible items stored in the communal stairwell."
                  multiline
                />
                <p className="m-0 text-[12px]" style={{ color: 'var(--ink2)' }}>
                  Optional action: filled in when the assessor taps &quot;Add action&quot;.
                </p>
                <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2">
                  <Field label="Finding" value="Storage in the stairwell blocks the escape route" />
                  <Field label="Recommendation" value="Remove all items and agree a no-storage policy with residents" multiline />
                  <Field label="Severity" value="Serious" select />
                  <Field label="Timescale" value="Immediate (7 days)" select />
                </div>
              </div>
            </div>

            <div className="flex min-w-0 items-start justify-between gap-2 rounded border border-[var(--line)] bg-[var(--surf)] p-3">
              <div className="min-w-0 flex-1">
                <Field label="Question 2" value="Are fire doors on the escape route in good working order?" multiline />
              </div>
              <div className="flex flex-shrink-0 gap-1 pt-5">
                <IconButton label="Move question up">&#8593;</IconButton>
                <IconButton label="Move question down">&#8595;</IconButton>
                <IconButton label="Delete question">&#10005;</IconButton>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DocMockupFrame>
  );
};

export default FraTemplatesEditor;
