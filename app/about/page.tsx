export const metadata = {
  title: 'About Us | Hult Prize at GUB',
  description: 'Learn about the premier student-led innovation ecosystem at Green University of Bangladesh.',
};

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
          About <span className="text-brand-pink">Us</span>
        </h1>
      </div>

      {/* Content Section with Glassmorphism */}
      <div className="bg-white/80 dark:bg-navy-light/80 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto space-y-8">
        
        {/* Main Paragraphs: text-justify added for alignment */}
        <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium text-justify">
          The Hult Prize at Green University of Bangladesh (GUB) is a premier student-led innovation ecosystem. We challenge students to solve the world&apos;s most pressing issues through social entrepreneurship.
        </p>
        
        <p className="text-lg md:text-xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium text-justify">
          Operating at the intersection of business, technology, and social impact, our program equips students with the mentorship, resources, and platform needed to transform their ideas into viable startup ventures.
        </p>

        {/* Mission & Vision Highlight (Icons Removed, Justified Alignment Added) */}
        <div className="grid md:grid-cols-2 gap-8 pt-8 mt-8 border-t border-slate-200 dark:border-white/10">
          
          <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
            <h3 className="text-brand-yellow font-bold text-xl mb-3">
              Our Mission
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              To inspire and empower GUB students to build scalable, sustainable enterprises that address global challenges aligned with the UN SDGs.
            </p>
          </div>
          
          <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl border border-slate-100 dark:border-white/5">
            <h3 className="text-brand-pink font-bold text-xl mb-3">
              Our Vision
            </h3>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
              To establish Green University of Bangladesh as a leading hub for youth-driven social innovation and entrepreneurship in the region.
            </p>
          </div>

        </div>
        
      </div>
    </div>
  );
}