import { teamData } from '../../data/team';

export const metadata = {
  title: 'Our Team',
  description: 'Meet the organizing committee of Hult Prize at Green University of Bangladesh.',
};

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Organizing Team</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {teamData.sort((a, b) => a.displayOrder - b.displayOrder).map((member) => (
          <div key={member.id} className="text-center group">
            <div className="w-48 h-48 mx-auto bg-gray-200 rounded-full mb-4 overflow-hidden flex items-center justify-center text-gray-400">
              [Photo]
            </div>
            <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
            <p className="text-sm text-[#E6007F] font-medium">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}