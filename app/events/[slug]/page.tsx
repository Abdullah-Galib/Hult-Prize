import { notFound } from 'next/navigation';
import { eventsData } from '../../../data/events';
import Link from 'next/link';

export default function EventDetailPage({ params }: { params: { slug: string } }) {
  const event = eventsData.find(e => e.slug === params.slug);
  
  if (!event) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <Link href="/events" className="text-gray-500 hover:text-[#E6007F] text-sm mb-8 inline-block">
        &larr; Back to Events
      </Link>
      <div className="w-full h-64 bg-gray-200 rounded-lg mb-10 flex items-center justify-center text-gray-400">
        [Event Cover Image Placeholder]
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{event.title}</h1>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-100">
        <div className="flex items-center"><span className="font-bold mr-2">Date:</span> {event.date}</div>
        <div className="flex items-center"><span className="font-bold mr-2">Location:</span> {event.location || 'TBA'}</div>
        <div className="flex items-center">
          <span className="font-bold mr-2">Status:</span> 
          <span className={event.status === 'upcoming' ? 'text-[#E6007F] font-bold uppercase' : 'text-gray-500 uppercase'}>
            {event.status}
          </span>
        </div>
      </div>
      <div className="prose prose-lg text-gray-600">
        <p>{event.description}</p>
        <h3>Event Highlights</h3>
        <p>[Future structured data including speakers, judges, and winners will be loaded here.]</p>
      </div>
    </div>
  );
}