import Link from 'next/link';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="border border-gray-200 p-8 rounded-lg flex flex-col md:flex-row gap-6 items-start hover:border-gray-300 transition">
      <div className="bg-[#FFDA00] text-gray-900 font-bold px-4 py-2 rounded shrink-0">
        {achievement.year}
      </div>
      <div className="flex-grow">
        <span className="text-sm font-semibold text-[#E6007F] tracking-wider uppercase mb-1 block">
          {achievement.category}
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{achievement.title}</h2>
        <p className="text-gray-600 mb-4">{achievement.description}</p>
        <Link href={`/achievements/${achievement.slug}`} className="text-[#E6007F] font-medium hover:underline">
          Read Full Story &rarr;
        </Link>
      </div>
    </div>
  );
}