import Link from 'next/link';
import { eventsData } from '../../data/events';
import EventCard from '@/components/events/EventCard';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Events Archive',
  description: 'Upcoming and past events from Hult Prize at Green University.',
});

export default function EventsPage() {
  const events = [...eventsData].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-10 text-4xl font-bold text-slate-900 dark:text-white">Events</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Link key={event.id} href={`/events/${event.slug}`} className="block">
            <EventCard event={event} />
          </Link>
        ))}
      </div>
    </div>
  );
}
