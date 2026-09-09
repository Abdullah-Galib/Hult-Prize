import { Event } from '../../types';
import { parseDate } from '../../lib/dates';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  // event.date is a date-only ISO string (e.g. "2026-11-15").
  const date = parseDate(event.date);
  const isValid = !Number.isNaN(date.getTime());
  const day = isValid ? date.toLocaleDateString('en-GB', { day: '2-digit' }) : '--';
  const month = isValid
    ? date.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
    : 'TBA';
  const fullDate = isValid
    ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    : event.date;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg transition-all hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-navy-light">
      {/* Thumbnail with Date Badge */}
      <div className="relative h-48 w-full overflow-hidden bg-slate-200 dark:bg-slate-800">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 transition-transform duration-500 group-hover:scale-105">
          [Image: {event.title}]
        </div>
        {/* Date Badge */}
        <div className="absolute bottom-0 left-4 z-10 flex h-14 w-12 translate-y-1/2 flex-col items-center justify-center rounded-lg bg-brand-pink text-white shadow-md">
          <span className="text-xl font-black leading-none">{day}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">{month}</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col p-6 pt-10">
        <span className="mb-2 text-[10px] font-bold uppercase tracking-wider text-brand-magenta dark:text-brand-yellow">
          {event.status === 'upcoming' ? 'Upcoming' : 'Archive'}
        </span>
        <h3 className="mb-3 line-clamp-2 text-xl font-bold text-slate-900 dark:text-white">{event.title}</h3>
        <p className="mb-4 line-clamp-2 flex-grow text-sm text-slate-600 dark:text-slate-400">{event.description}</p>

        <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-4 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>{fullDate} • {event.location || 'GUB Campus'}</span>
        </div>
      </div>
    </article>
  );
}
