export const metadata = {
  title: 'Contact Us | Hult Prize at GUB',
  description: 'Get in touch with the organizing team.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Contact <span className="text-[#E6007F]">Us</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 font-medium">
            Whether you are a student looking to participate, a potential mentor, or media personnel, we would love to hear from you.
          </p>
          
          <div className="space-y-6 text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E6007F]/10 flex items-center justify-center text-[#E6007F] shrink-0">📧</div>
              <p><strong className="text-slate-900 dark:text-white block">Email</strong> contact@hultprizegub.org</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#E6007F]/10 flex items-center justify-center text-[#E6007F] shrink-0">📍</div>
              <p><strong className="text-slate-900 dark:text-white block">Address</strong> Green University of Bangladesh, Purbachal American City</p>
            </div>
          </div>
        </div>

        {/* Glassmorphism Form */}
        <form className="bg-white/60 dark:bg-[#131B2F]/60 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-white/10 shadow-2xl space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Name</label>
            <input type="text" required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Email</label>
            <input type="email" required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] outline-none transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-1">Message</label>
            <textarea required rows={4} className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] outline-none transition-all"></textarea>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#E6007F] to-[#A30A7B] text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(230,0,127,0.4)] transition-all hover:scale-[1.02]">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}