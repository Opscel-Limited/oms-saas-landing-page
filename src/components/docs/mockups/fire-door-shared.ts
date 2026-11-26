/**
 * Demo doors shared by the fire door mockups. Dummy data only ("Kestrel House").
 * Tones follow the product: fail > no access / not found > pass > no result.
 */

export type DoorTone = 'fail' | 'noaccess' | 'pass' | 'none';

export const TONE: Record<DoorTone, { bg: string; ink: string; label: string }> = {
  fail: { bg: 'var(--fd-fail-bg)', ink: 'var(--fd-fail-ink)', label: 'Needs work' },
  noaccess: { bg: 'var(--fd-noaccess-bg)', ink: 'var(--fd-noaccess-ink)', label: 'No access / not found' },
  pass: { bg: 'var(--fd-pass-bg)', ink: 'var(--fd-pass-ink)', label: 'Pass' },
  none: { bg: 'var(--fd-none-bg)', ink: 'var(--fd-none-ink)', label: 'No visit yet' },
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
