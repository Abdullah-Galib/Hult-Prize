export const metadata = {
  title: 'Register | Hult Prize at GUB',
  description: 'Welcome to the global entrepreneurship competition to prove yourself.',
};

export default function RegisterPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 text-center min-h-[85vh] flex flex-col justify-center items-center">
      
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight">
        Welcome to the <br className="hidden md:block" />
        <span className="bg-gradient-to-r from-[#E6007F] via-[#A30A7B] to-[#FFDA00] bg-clip-text text-transparent drop-shadow-sm">
          Global Entrepreneurship Competition
        </span>
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-16 font-medium max-w-3xl leading-relaxed italic">
        "This is your moment to prove yourself. Step up, build a startup that changes the world, and leave a lasting impact."
      </p>

      <div className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-10 md:p-14 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-2xl w-full max-w-2xl relative overflow-hidden group">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E6007F]/20 blur-[80px] rounded-full pointer-events-none group-hover:bg-[#E6007F]/30 transition-colors duration-700"></div>

        <div className="relative z-10">
          
          {/* AI-Generated / Minimalist SVG Icon instead of Emoji */}
          <div className="w-20 h-20 bg-slate-100 dark:bg-[#0B1221] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-slate-200 dark:border-white/5 group-hover:scale-110 group-hover:border-[#E6007F]/30 transition-all duration-300">
            <svg className="w-9 h-9 text-slate-500 dark:text-slate-400 group-hover:text-[#E6007F] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Ready to take the challenge?
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 mb-10 font-medium">
            Click the button below to access the official registration form and secure your spot in this season's competition.
          </p>

          <a 
            href="YOUR_GOOGLE_FORM_LINK_HERE" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-gradient-to-r from-[#E6007F] to-[#A30A7B] text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-[0_10px_30px_rgba(230,0,127,0.4)] transition-all duration-300 hover:-translate-y-1"
          >
            Access Registration Link
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
          </a>
        </div>
      </div>
    </div>
  );
}