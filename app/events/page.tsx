import Link from 'next/link';
import { eventsData } from '../../data/events';
import EventCard from '@/components/events/EventCard';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Events Archive',
  description: 'Upcoming and past events from Hult Prize at Green University.',
});

interface Props {
  searchParams?: { q?: string };
}

export default function EventsPage({ searchParams }: Props) {
  const query = searchParams?.q?.trim().toLowerCase();
  const events = [...eventsData]
    .sort((a, b) => b.date.localeCompare(a.date))
    .filter(
      (event) =>
        !query ||
        `${event.title} ${event.description} ${event.location ?? ''}`
          .toLowerCase()
          .includes(query)
    );

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold text-slate-900 dark:text-white">Events</h1>

      {query && (
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm dark:border-white/10 dark:bg-white/5">
          <p className="text-slate-600 dark:text-slate-300">
            {events.length > 0 ? (
              <>
                {events.length} result{events.length === 1 ? '' : 's'} for{' '}
                <span className="font-bold text-slate-900 dark:text-white">&ldquo;{searchParams?.q}&rdquo;</span>
              </>
            ) : (
              <>
                No events match <span className="font-bold text-slate-900 dark:text-white">&ldquo;{searchParams?.q}&rdquo;</span>
              </>
            )}
          </p>
          <Link href="/events" className="ml-auto font-semibold text-brand-pink hover:underline">
            Clear search
          </Link>
        </div>
      )}

      {events.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <Link key={event.id} href={`/events/${event.slug}`} className="block">
              <EventCard event={event} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-slate-500 dark:text-slate-400">Check back soon for upcoming events.</p>
      )}
    </div>
  );
}
