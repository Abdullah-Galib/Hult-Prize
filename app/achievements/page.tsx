import Link from 'next/link';
import { achievementsData } from '@/data/achievements';
import AchievementCard from '@/components/achievements/AchievementCard';

export const metadata = {
  title: 'Achievements',
  description: 'Innovation and impact milestones from Hult Prize at Green University.',
};

export default function AchievementsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Achievements</h1>
        <p className="text-slate-600 dark:text-slate-300">
          Recognitions, milestones and venture breakthroughs from Hult Prize at Green University of Bangladesh.
        </p>
      </div>

      <div className="space-y-6">
        {achievementsData.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </div>
  );
}