/**
 * Demo doors shared by the fire door mockups. Dummy data only ("Kestrel House").
 * Tone labels are the office Plans view's pin outcomes (Pass / Fail / No access /
 * No visit recorded); the report mockup prints each door's outcome instead.
 */

export type DoorTone = 'fail' | 'noaccess' | 'pass' | 'none';

export const TONE: Record<DoorTone, { bg: string; ink: string; label: string }> = {
  fail: { bg: 'var(--fd-fail-bg)', ink: 'var(--fd-fail-ink)', label: 'Fail' },
  noaccess: { bg: 'var(--fd-noaccess-bg)', ink: 'var(--fd-noaccess-ink)', label: 'No access' },
  pass: { bg: 'var(--fd-pass-bg)', ink: 'var(--fd-pass-ink)', label: 'Pass' },
  none: { bg: 'var(--fd-none-bg)', ink: 'var(--fd-none-ink)', label: 'No visit recorded' },
};

export interface DemoDoor {
  pin: number;
  ref: string;
  location: string;
  fn: 'Communal' | 'Flat entrance' | 'Other';
  rating: 'FD30' | 'FD60';
  result: string;
  tone: DoorTone;
  /** Position on the plan, 0..1. */
  x: number;
  y: number;
}

export const LEVEL_1_DOORS: DemoDoor[] = [
  { pin: 7, ref: 'FD-1.01', location: 'Level 1, Stair A lobby', fn: 'Communal', rating: 'FD30', result: 'Remediate', tone: 'fail', x: 0.08, y: 0.43 },
  { pin: 8, ref: 'FD-1.02', location: 'Level 1, cross-corridor door', fn: 'Communal', rating: 'FD30', result: 'Pass', tone: 'pass', x: 0.63, y: 0.5 },
  { pin: 9, ref: 'FD-1.03', location: 'Flat 3 entrance', fn: 'Flat entrance', rating: 'FD30', result: 'Replace leaf', tone: 'fail', x: 0.26, y: 0.43 },
  { pin: 10, ref: 'FD-1.04', location: 'Flat 4 entrance', fn: 'Flat entrance', rating: 'FD30', result: 'No access', tone: 'noaccess', x: 0.5, y: 0.43 },
  { pin: 11, ref: 'FD-1.05', location: 'Flat 5 entrance', fn: 'Flat entrance', rating: 'FD30', result: 'Pass', tone: 'pass', x: 0.75, y: 0.43 },
  { pin: 12, ref: 'FD-1.06', location: 'Level 1, Stair B lobby', fn: 'Communal', rating: 'FD30', result: 'Pass', tone: 'pass', x: 0.92, y: 0.43 },
];

/** Level 1 rooms on a 1000-wide plan (y and height halved when drawn, for a 2:1 plan). */
export const ROOMS: Array<[number, number, number, number, string]> = [
  [0, 0, 130, 430, 'Stair A'],
  [130, 0, 240, 430, 'Flat 3'],
  [370, 0, 255, 430, 'Flat 4'],
  [625, 0, 245, 430, 'Flat 5'],
  [870, 0, 130, 430, 'Stair B'],
  [0, 570, 560, 430, 'Flat 6'],
  [560, 570, 140, 430, 'Riser'],
  [700, 570, 300, 430, 'Flat 6a'],
];
