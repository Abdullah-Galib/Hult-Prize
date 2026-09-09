'use client';
import { useState } from 'react';

export default function SponsorForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-white/40 dark:bg-green-500/10 p-8 rounded-3xl border border-white/60 dark:border-green-500/30 text-center backdrop-blur-2xl shadow-2xl">
        <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Proposal Received</h3>
        <p className="text-slate-700 dark:text-slate-300">Thank you for your interest. Our partnership team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/40 dark:bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/60 dark:border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Full Name *</label>
          <input type="text" required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] focus:border-transparent outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Work Email *</label>
          <input type="email" required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] focus:border-transparent outline-none transition-all" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Organization *</label>
          <input type="text" required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] focus:border-transparent outline-none transition-all" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Partnership Type *</label>
          {/* Dropdown with specific text color for options */}
          <select required className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
            <option value="" className="text-slate-900">Select a category...</option>
            <option value="Title Sponsor" className="text-slate-900">Title Sponsor</option>
            <option value="Co-Sponsor" className="text-slate-900">Co-Sponsor</option>
            <option value="Media Partner" className="text-slate-900">Media Partner</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Message *</label>
        <textarea required rows={4} className="w-full bg-white/70 dark:bg-black/30 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 border border-slate-300 dark:border-white/10 rounded-xl p-3.5 focus:ring-2 focus:ring-[#E6007F] focus:border-transparent outline-none transition-all"></textarea>
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-[#E6007F] to-[#A30A7B] text-white py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_20px_rgba(230,0,127,0.5)] transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100">
        {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}