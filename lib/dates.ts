/**
 * Date-only ISO strings (YYYY-MM-DD) are parsed as UTC midnight per the spec,
 * so in negative-UTC-offset timezones they render as the PREVIOUS day. Since
 * pages are statically generated, that would bake the wrong day into the HTML
 * depending on the build server's timezone. Normalize to local midnight.
 */
export function parseDate(value: string): Date {
  if (/^\d{4}-\d{2}-\d{2}$/.test(value.trim())) {
    return new Date(`${value.trim()}T00:00:00`);
  }
  return new Date(value);
}

/** Formats a date string; falls back to the raw value if unparseable. */
export function formatDate(
  value: string,
  options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' }
): string {
  const date = parseDate(value);
  return Number.isNaN(date.getTime()) ? value : date.toLocaleDateString('en-US', options);
}
