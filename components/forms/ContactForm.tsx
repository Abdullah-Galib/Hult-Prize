'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => { setIsSubmitting(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div className="bg-[#E6007F]/20 p-8 rounded-3xl border border-[#E6007F]/50 text-center backdrop-blur-md">
        <p className="text-white font-medium">Your message has been sent successfully. We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl space-y-5">
      <div>
        <label htmlFor="contactName" className="block text-sm font-medium text-slate-300 mb-1">Name *</label>
        <input type="text" id="contactName" required className="w-full bg-[#0B1221]/50 text-white placeholder-slate-500 border-white/10 rounded-xl p-3 border focus:ring-2 focus:ring-[#E6007F] focus:outline-none transition-all" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="contactEmail" className="block text-sm font-medium text-slate-300 mb-1">Email *</label>
        <input type="email" id="contactEmail" required className="w-full bg-[#0B1221]/50 text-white placeholder-slate-500 border-white/10 rounded-xl p-3 border focus:ring-2 focus:ring-[#E6007F] focus:outline-none transition-all" placeholder="john@example.com" />
      </div>
      <div>
        <label htmlFor="contactMessage" className="block text-sm font-medium text-slate-300 mb-1">Message *</label>
        <textarea id="contactMessage" required rows={5} className="w-full bg-[#0B1221]/50 text-white placeholder-slate-500 border-white/10 rounded-xl p-3 border focus:ring-2 focus:ring-[#E6007F] focus:outline-none transition-all" placeholder="How can we collaborate?"></textarea>
      </div>
      <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-[#E6007F] to-[#A30A7B] text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(230,0,127,0.5)] transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100">
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}