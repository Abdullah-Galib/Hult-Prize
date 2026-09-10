import { impactData } from '@/data/impact';

export const metadata = {
  title: 'Our Impact | Hult Prize at GUB',
  description: 'Measurable impact and metrics created by Hult Prize at GUB.',
};

export default function ImpactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Our <span className="text-[#E6007F]">Impact</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
          We measure our success by the tangible innovation and engagement we foster within the Green University community.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {impactData.map((metric) => (
          <div 
            key={metric.id} 
            className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl p-8 lg:p-10 border border-slate-200 dark:border-white/10 rounded-3xl text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-2xl hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(230,0,127,0.15)] transition-all duration-300 group flex flex-col justify-between"
          >
            <div>
              <span className="block text-5xl font-black text-[#E6007F] mb-4 drop-shadow-sm group-hover:scale-105 transition-transform duration-300">
                {metric.value}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                {metric.label}
              </h3>
            </div>
            
            {/* Elegant Source Badge */}
            <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/5">
              <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-full inline-block">
                Source: {metric.source}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}