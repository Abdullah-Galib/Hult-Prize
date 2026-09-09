import Link from 'next/link';
import { sponsorshipPackages } from '../../data/sponsorship';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Sponsorship',
  description: 'Partner with Hult Prize at Green University to drive social impact and youth innovation.',
});

export default function SponsorshipPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">Partner With Us</h1>
        <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Align your brand with the world&apos;s largest youth movement for social impact.
          Gain unparalleled visibility among the brightest minds at Green University of Bangladesh.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-2">
        {sponsorshipPackages.map((pkg) => (
          <div key={pkg.id} className="rounded-lg border border-slate-200 p-8 shadow-sm transition hover:shadow-md dark:border-white/10">
            <h3 className="mb-2 text-2xl font-bold text-brand-pink">{pkg.name}</h3>
            <p className="mb-6 text-xl font-semibold text-slate-900 dark:text-white">{pkg.amount}</p>
            <ul className="mb-8 space-y-3">
              {pkg.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                  <span className="mr-3 text-brand-yellow">✔</span> {benefit}
                </li>
              ))}
            </ul>
            <Link href="/sponsor" className="block w-full rounded bg-navy py-3 text-center font-medium text-white transition hover:bg-brand-pink dark:bg-white dark:text-slate-900 dark:hover:bg-brand-pink dark:hover:text-white">
              Select Package
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
