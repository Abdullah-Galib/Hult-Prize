'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Something went wrong. Please try again.');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl border border-brand-pink/50 bg-brand-pink/20 p-8 text-center backdrop-blur-md">
        <p className="font-medium text-white">Your message has been sent successfully. We will get back to you soon.</p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm font-semibold text-slate-300 underline hover:text-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl">
      <div>
        <label htmlFor="contactName" className="mb-1 block text-sm font-medium text-slate-300">Name *</label>
        <input type="text" id="contactName" name="name" required autoComplete="name" className="w-full rounded-xl border border-white/10 bg-navy/50 p-3 text-white transition-all placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-pink" placeholder="John Doe" />
      </div>
      <div>
        <label htmlFor="contactEmail" className="mb-1 block text-sm font-medium text-slate-300">Email *</label>
        <input type="email" id="contactEmail" name="email" required autoComplete="email" className="w-full rounded-xl border border-white/10 bg-navy/50 p-3 text-white transition-all placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-pink" placeholder="john@example.com" />
      </div>
      <div>
        <label htmlFor="contactMessage" className="mb-1 block text-sm font-medium text-slate-300">Message *</label>
        <textarea id="contactMessage" name="message" required rows={5} className="w-full rounded-xl border border-white/10 bg-navy/50 p-3 text-white transition-all placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-pink" placeholder="How can we collaborate?" />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
          {errorMessage}
        </p>
      )}

      <button disabled={status === 'submitting'} type="submit" className="w-full rounded-xl bg-gradient-to-r from-brand-pink to-brand-magenta py-4 font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(230,0,127,0.5)] disabled:opacity-70 disabled:hover:scale-100">
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
