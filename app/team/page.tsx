import { teamData } from '../../data/team';
import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Our Team',
  description: 'Meet the organizing committee of Hult Prize at Green University of Bangladesh.',
});

export default function TeamPage() {
  // Copy before sorting — .sort() mutates the imported module data in place.
  const team = [...teamData].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-12 text-center text-4xl font-bold text-slate-900 dark:text-white">Organizing Team</h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.id} className="group text-center">
            <div className="mx-auto mb-4 flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-slate-200 text-slate-400 dark:bg-slate-800">
              [Photo]
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
            <p className="text-sm font-medium text-brand-pink">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
