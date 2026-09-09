import { notFound } from 'next/navigation';
import { achievementsData } from '../../../data/achievements';
import Link from 'next/link';

export default function AchievementDetailPage({ params }: { params: { slug: string } }) {
  const achievement = achievementsData.find(a => a.slug === params.slug);
  
  if (!achievement) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <Link href="/achievements" className="text-gray-500 hover:text-[#E6007F] text-sm mb-8 inline-block">
        &larr; Back to Achievements
      </Link>
      <div className="mb-8">
        <span className="bg-gray-100 text-gray-800 text-xs font-bold px-3 py-1 rounded uppercase mr-3">
          {achievement.category}
        </span>
        <span className="text-gray-500 text-sm font-medium">{achievement.year}</span>
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">{achievement.title}</h1>
      <div className="prose prose-lg text-gray-600">
        <p>{achievement.description}</p>
        <p>[Detailed content, media, and certificate attachments will be dynamically injected here via CMS in Phase 8.]</p>
      </div>
    </div>
  );
}