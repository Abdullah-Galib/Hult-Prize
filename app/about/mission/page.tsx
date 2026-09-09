import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Mission & Vision',
  description: 'The core mission of Hult Prize at Green University of Bangladesh.',
});

export default function MissionPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">Mission &amp; Vision</h1>
      <div className="space-y-10">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-brand-pink">Our Mission</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            To inspire, educate, and equip Green University students to build sustainable, impact-driven startup enterprises that solve the world&apos;s most pressing challenges.
          </p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-brand-orange">Our Vision</h2>
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            To establish Green University of Bangladesh as a leading hub for student innovation and social entrepreneurship in the region, bridging the gap between academic theory and real-world corporate partnerships.
          </p>
        </section>
      </div>
    </div>
  );
}
