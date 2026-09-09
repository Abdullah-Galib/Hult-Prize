import { partnersData } from '../../data/partners';
import Link from 'next/link';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Partners',
  description: 'Organizations and corporate partners driving impact with Hult Prize at GUB.',
});

export default function PartnersPage() {
  // Anchor ids matching the navbar dropdown links (/partners#sponsors etc.).
  const anchorByType: Record<string, string> = {
    'Title Sponsor': 'sponsors',
    'Food & Beverage Partner': 'food',
    'Stationary Partner': 'stationary',
    'Media Partner': 'media',
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">Our Partners</h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          We are proud to collaborate with organizations that share our vision for youth-led innovation.
        </p>
        <Link href="/sponsor" className="btn-primary px-6 py-3 font-medium">
          Become a Partner
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
        {partnersData.map((partner) => (
          <div
            key={partner.id}
            id={anchorByType[partner.partnershipType]}
            className="flex flex-col items-center justify-center rounded-lg border border-slate-200 p-6 text-center shadow-sm dark:border-white/10"
          >
            <div className="mb-4 flex h-24 w-full items-center justify-center rounded bg-slate-100 text-slate-400 dark:bg-white/5">
              [Logo: {partner.name}]
            </div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">{partner.name}</h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{partner.partnershipType} • {partner.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
