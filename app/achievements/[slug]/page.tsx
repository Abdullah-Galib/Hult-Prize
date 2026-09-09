import { notFound } from 'next/navigation';
import Link from 'next/link';
import { achievementsData } from '../../../data/achievements';
import { constructMetadata } from '@/lib/seo';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return achievementsData.map((achievement) => ({ slug: achievement.slug }));
}

export const dynamicParams = false;

export function generateMetadata({ params }: Props) {
  const achievement = achievementsData.find((a) => a.slug === params.slug);
  if (!achievement) return constructMetadata({ title: 'Achievement Not Found', noIndex: true });
  return constructMetadata({
    title: achievement.title,
    description: achievement.description,
  });
}

export default function AchievementDetailPage({ params }: Props) {
  const achievement = achievementsData.find((a) => a.slug === params.slug);
  if (!achievement) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/achievements" className="mb-8 inline-block text-sm text-slate-500 hover:text-brand-pink dark:text-slate-400">
        &larr; Back to Achievements
      </Link>
      <div className="mb-8">
        <span className="mr-3 rounded bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-800 dark:bg-white/10 dark:text-slate-200">
          {achievement.category}
        </span>
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{achievement.year}</span>
      </div>
      <h1 className="mb-6 text-4xl font-bold text-slate-900 dark:text-white">{achievement.title}</h1>
      <div className="prose prose-lg prose-slate dark:prose-invert">
        <p>{achievement.description}</p>
        <p>[Detailed content, media, and certificate attachments will be dynamically injected here via CMS in Phase 8.]</p>
      </div>
    </div>
  );
}
