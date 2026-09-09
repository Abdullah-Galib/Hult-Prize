import SponsorForm from '@/components/forms/SponsorForm';

export const metadata = {
  title: 'Partnership & Pitch Deck',
  description: 'View our pitch deck and submit a sponsorship inquiry.',
};

export default function SponsorLeadPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
          Partnership <span className="text-[#E6007F]">Proposal</span>
        </h1>
        <p className="text-lg text-slate-800 dark:text-slate-200 max-w-2xl mx-auto font-medium">
          Review our official Pitch Deck below. Ready to collaborate? View our packages or fill out the form to start a conversation.
        </p>
      </div>

      {/* Side-by-Side Layout */}
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Side: Embedded Pitch Deck & Packages */}
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Official Pitch Deck</h2>
            {/* Direct Google Drive Fetch Button for Packages */}
            <a 
              href="https://drive.google.com/drive/folders/YOUR_PACKAGE_FOLDER_ID" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center gap-2 bg-[#FFDA00] text-slate-900 px-5 py-2.5 rounded-full font-bold hover:bg-[#E6007F] hover:text-white transition-all shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>
              Sponsorship Packages
            </a>
          </div>
          
          {/* Glassmorphism Presentation Container (Canva / Google Slides Embed) */}
          <div className="w-full aspect-video bg-white dark:bg-[#131B2F] rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden relative group p-2">
            <div className="w-full h-full rounded-2xl overflow-hidden relative">
              {/* Canva or Google Slides embed link goes in 'src' */}
              <iframe 
                src="https://docs.google.com/presentation/d/e/2PACX-1vQ_PLACEHOLDER_LINK/embed?start=false&loop=false&delayms=3000" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
              
              {/* Fallback visible only if iframe is missing/fails */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-[#0B1221] -z-10">
                <svg className="w-12 h-12 mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                <p className="font-bold">Pitch Deck Live Viewer</p>
                <p className="text-sm">Fetching from Canva/Slides...</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-lg">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Why Sponsor Us?</h4>
            <ul className="space-y-3 text-slate-800 dark:text-slate-200 font-medium">
              <li className="flex items-center gap-3"><span className="text-[#E6007F] text-xl">✓</span> Access to 500+ top student innovators.</li>
              <li className="flex items-center gap-3"><span className="text-[#E6007F] text-xl">✓</span> Premium brand visibility across campus.</li>
              <li className="flex items-center gap-3"><span className="text-[#E6007F] text-xl">✓</span> Direct alignment with UN Sustainable Development Goals.</li>
            </ul>
          </div>
        </div>

        {/* Right Side: Sponsorship Form */}
        <div className="space-y-6 bg-white dark:bg-transparent rounded-3xl p-0 dark:p-0">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Submit Inquiry</h2>
          <SponsorForm />
        </div>

      </div>
    </div>
  );
}