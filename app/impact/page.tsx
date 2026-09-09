import { impactData } from '../../data/impact';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Impact',
  description: 'Measurable impact and metrics created by Hult Prize at GUB.',
});

export default function ImpactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">Our Impact</h1>
        <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          We measure our success by the tangible innovation and engagement we foster within the Green University community.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {impactData.map((metric) => (
          <div key={metric.id} className="rounded-lg border border-slate-200 p-8 text-center shadow-sm dark:border-white/10">
            <span className="mb-4 block text-5xl font-bold text-brand-pink">{metric.value}</span>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{metric.label}</h3>
            <p className="text-xs uppercase tracking-wider text-slate-400 dark:text-slate-500">Source: {metric.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
