import Link from 'next/link';
import { Achievement } from '../../types';

interface AchievementCardProps {
  achievement: Achievement;
}

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
      <div className="bg-[#FFDA00] text-slate-900 font-black px-5 py-2.5 rounded-xl shrink-0 shadow-md">
        {achievement.year}
      </div>
      <div className="flex-grow">
        <span className="text-[10px] font-bold text-[#E6007F] tracking-widest uppercase mb-2 bg-[#E6007F]/10 inline-block px-3 py-1 rounded-full">
          {achievement.category}
        </span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-[#E6007F] transition-colors">{achievement.title}</h2>
        <p className="text-slate-600 dark:text-slate-300 mb-4 font-medium leading-relaxed">{achievement.description}</p>
        <Link href={`/achievements/${achievement.slug}`} className="text-[#E6007F] font-bold hover:underline flex items-center gap-1">
          Read Full Story <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
}