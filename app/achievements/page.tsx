import { achievementsData } from '@/data/achievements';
import AchievementCard from '@/components/achievements/AchievementCard';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Achievements',
  description: 'Innovation and impact milestones from Hult Prize at Green University.',
});

export default function AchievementsPage() {
  const achievements = [...achievementsData].sort((a, b) => b.year - a.year);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Our Achievements</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Recognitions, milestones, and venture breakthroughs from Hult Prize at Green University of Bangladesh.
        </p>
      </div>

      <div className="space-y-6">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}
