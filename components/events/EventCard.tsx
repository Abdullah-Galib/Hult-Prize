import Link from 'next/link';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  // Extracting day and month for the badge (assuming format "DD MMM, YYYY")
  const dateParts = event.date.split(' ');
  const day = dateParts[0] || '01';
  const month = dateParts[1]?.replace(',', '') || 'JAN';

  return (
    <div className="bg-white dark:bg-[#131B2F] rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 group flex flex-col h-full transition-all hover:-translate-y-1 hover:shadow-2xl">
      {/* Thumbnail with Date Badge */}
      <div className="relative h-48 bg-slate-200 dark:bg-slate-800 w-full overflow-hidden">
        {/* Placeholder for actual image */}
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
          [Image: {event.title}]
        </div>
        {/* Date Badge */}
        <div className="absolute bottom-0 left-4 translate-y-1/2 bg-[#E6007F] text-white flex flex-col items-center justify-center w-12 h-14 rounded-lg shadow-md z-10">
          <span className="text-xl font-black leading-none">{day}</span>
          <span className="text-[10px] font-bold uppercase tracking-wider">{month}</span>
        </div>
      </div>

      <div className="p-6 pt-10 flex-grow flex flex-col">
        <span className="text-[10px] font-bold text-[#A30A7B] dark:text-[#FFDA00] uppercase tracking-wider mb-2">
          {event.status === 'upcoming' ? 'Upcoming' : 'Archive'}
        </span>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2">{event.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 flex-grow line-clamp-2">{event.description}</p>
        
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-auto pt-4 border-t border-slate-100 dark:border-white/10">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <span>10:00 AM • GUB Campus</span>
        </div>
      </div>
    </div>
  );
}