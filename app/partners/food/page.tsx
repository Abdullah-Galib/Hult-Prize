import Link from 'next/link';

export const metadata = {
  title: 'Food & Beverage Partners | Hult Prize GUB',
  description: 'Our previous and current food and beverage partners.',
};

export default function FoodPartnersPage() {
  // Replace these with your actual previous sponsors
  const sponsors = [
    { id: 1, name: 'Burger King BD', year: '2024-25', logo: '🍔' },
    { id: 2, name: 'Coca-Cola', year: '2023-24', logo: '🥤' },
    { id: 3, name: 'Nescafe', year: '2022-23', logo: '☕' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <Link href="/partners" className="text-sm font-bold text-slate-500 hover:text-[#E6007F] transition-colors mb-8 inline-block">
        &larr; Back to All Partners
      </Link>
      
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
          Food & Beverage <span className="text-[#E6007F]">Partners</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl font-medium">
          Honoring the amazing food and beverage brands that have fueled our changemakers throughout the previous seasons.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sponsors.map((sponsor) => (
          <div key={sponsor.id} className="bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 rounded-3xl flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-2 transition-all duration-300 group hover:border-[#E6007F]/50">
            <div className="w-20 h-20 bg-slate-100 dark:bg-[#0B1221] rounded-full flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform shadow-inner">
              {sponsor.logo}
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-lg">{sponsor.name}</h3>
            <span className="text-xs font-bold text-[#E6007F] bg-[#E6007F]/10 px-3 py-1 rounded-full mt-3 uppercase tracking-wider">
              Season {sponsor.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}