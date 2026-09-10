export const metadata = {
  title: 'Mission & Vision | Hult Prize GUB',
  description: 'The core mission of Hult Prize at Green University of Bangladesh.',
};

export default function MissionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-12 text-center">
        Mission & <span className="text-[#E6007F]">Vision</span>
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 lg:p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-[#E6007F]/10 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">🚀</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            To inspire, educate, and equip Green University students to build sustainable, impact-driven startup enterprises that solve the world's most pressing challenges.
          </p>
        </section>
        
        <section className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl border border-slate-200 dark:border-white/10 p-8 lg:p-10 rounded-3xl shadow-lg hover:-translate-y-2 transition-transform duration-300">
          <div className="w-14 h-14 bg-[#FFDA00]/10 rounded-2xl flex items-center justify-center mb-6">
            <span className="text-3xl">👁️</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
            To establish Green University of Bangladesh as a leading hub for student innovation and social entrepreneurship in the region, bridging the gap between academic theory and real-world corporate partnerships.
          </p>
        </section>
      </div>
    </div>
  );
}