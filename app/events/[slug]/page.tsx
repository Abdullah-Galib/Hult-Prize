import { notFound } from 'next/navigation';
import Link from 'next/link';
import { eventsData } from '../../../data/events';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return eventsData.map((event) => ({ slug: event.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props) {
  const event = eventsData.find((e) => e.slug === params.slug);
  if (!event) return constructMetadata({ title: 'Event Not Found', noIndex: true });
  return constructMetadata({
    title: event.title,
    description: event.description,
    image: event.coverImage,
  });
}

export default function EventDetailPage({ params }: Props) {
  const event = eventsData.find((e) => e.slug === params.slug);
  if (!event) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    startDate: event.date,
    eventStatus:
      event.status === 'upcoming'
        ? 'https://schema.org/EventScheduled'
        : 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: event.location || 'Green University of Bangladesh',
      address: siteConfig.address,
    },
    organizer: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  };

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/events" className="mb-8 inline-block text-sm text-slate-500 hover:text-brand-pink dark:text-slate-400">
        &larr; Back to Events
      </Link>
      <div className="mb-10 flex h-64 w-full items-center justify-center rounded-lg bg-slate-200 text-slate-400 dark:bg-slate-800">
        [Event Cover Image Placeholder]
      </div>
      <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">{event.title}</h1>
      <div className="mb-8 flex flex-wrap gap-4 border-b border-slate-100 pb-8 text-sm text-slate-600 dark:border-white/10 dark:text-slate-300">
        <div><span className="mr-2 font-bold">Date:</span> {event.date}</div>
        <div><span className="mr-2 font-bold">Location:</span> {event.location || 'TBA'}</div>
        <div>
          <span className="mr-2 font-bold">Status:</span>{' '}
          <span className={event.status === 'upcoming' ? 'font-bold uppercase text-brand-pink' : 'uppercase text-slate-500'}>
            {event.status === 'upcoming' ? 'Upcoming' : 'Archive'}
          </span>
        </div>
      </div>
      <div className="prose prose-lg prose-slate dark:prose-invert">
        <p>{event.description}</p>
        <h3>Event Highlights</h3>
        <p>[Future structured data including speakers, judges, and winners will be loaded here.]</p>
      </div>
    </div>
  );
}
