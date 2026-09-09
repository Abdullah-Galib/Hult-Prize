import Link from 'next/link';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <article className="flex flex-col items-start gap-6 rounded-lg border border-slate-200 p-8 transition hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20 md:flex-row">
      <div className="shrink-0 rounded bg-brand-yellow px-4 py-2 font-bold text-slate-900">
        {achievement.year}
      </div>
      <div className="flex-grow">
        <span className="mb-1 block text-sm font-semibold uppercase tracking-wider text-brand-pink">
          {achievement.category}
        </span>
        <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">{achievement.title}</h2>
        <p className="mb-4 text-slate-600 dark:text-slate-300">{achievement.description}</p>
        <Link href={`/achievements/${achievement.slug}`} className="font-medium text-brand-pink hover:underline">
          Read Full Story &rarr;
        </Link>
      </div>
    </article>
  );
}
