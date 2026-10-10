export const withBase = (path = '') => {
  const base = import.meta.env.BASE_URL || '/';
  const clean = path.replace(/^\/+/, '');
  return `${base}${clean}`.replace(/\/+/g, '/');
};

export const yes = (value: unknown) => String(value || '').trim().toUpperCase() === 'YES';

export const splitIds = (value: unknown) => String(value || '')
  .split(/[;,]/)
  .map((v) => v.trim())
  .filter(Boolean);

export const textList = (value: unknown) => String(value || '')
  .split(/[;|]/)
  .map((v) => v.trim())
  .filter(Boolean);

export const compact = <T>(values: Array<T | null | undefined | ''>) => values.filter(Boolean) as T[];

export const display = (value: unknown, fallback = 'Not specified') => {
  const s = value == null ? '' : String(value).trim();
  return s || fallback;
};

export const approachClass = (approach = '') => {
  if (approach.startsWith('Instrument')) return 'instrument';
  if (approach.startsWith('Assessment')) return 'assessment';
  if (approach.startsWith('Methods')) return 'method';
  if (approach.startsWith('Indicators')) return 'indicator';
  return 'qualitative';
};
