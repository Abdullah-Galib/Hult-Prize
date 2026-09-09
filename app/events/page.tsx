import Link from 'next/link';
import { eventsData } from '../../data/events';

export const metadata = {
  title: 'Events Archive',
  description: 'Upcoming and past events from Hult Prize at Green University.',
};

export default function EventsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-10">Events</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eventsData.map((event) => (
          <div key={event.id} className="border border-gray-100 rounded-lg overflow-hidden shadow-sm flex flex-col">
            <div className="h-48 bg-gray-200 w-full flex items-center justify-center text-gray-400">
              {/* Placeholder for actual next/image */}
              [Image Placeholder]
            </div>
            <div className="p-6 flex-grow flex flex-col">
              <span className={`text-xs font-bold uppercase tracking-wider mb-2 ${event.status === 'upcoming' ? 'text-[#E6007F]' : 'text-gray-500'}`}>
                {event.status}
              </span>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-sm text-gray-600 mb-4 flex-grow">{event.description}</p>
              <div className="text-sm text-gray-500 mb-4">
                <p>Date: {event.date}</p>
              </div>
              <Link href={`/events/${event.slug}`} className="text-[#E6007F] font-semibold hover:underline mt-auto">
                View Details &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}