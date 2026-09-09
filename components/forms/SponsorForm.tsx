'use client';

import { useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function SponsorForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/sponsor', {
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
      <div className="rounded-3xl border border-slate-300 bg-white/40 p-8 text-center shadow-2xl backdrop-blur-2xl dark:border-green-500/30 dark:bg-green-500/10">
        <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Proposal Received</h3>
        <p className="text-slate-700 dark:text-slate-300">Thank you for your interest. Our partnership team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-slate-200 bg-white/40 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-white/5">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="sponsorName" className="input-label">Full Name *</label>
          <input type="text" id="sponsorName" name="name" required autoComplete="name" className="input-field" />
        </div>
        <div>
          <label htmlFor="sponsorEmail" className="input-label">Work Email *</label>
          <input type="email" id="sponsorEmail" name="email" required autoComplete="email" className="input-field" />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="sponsorOrganization" className="input-label">Organization *</label>
          <input type="text" id="sponsorOrganization" name="organization" required autoComplete="organization" className="input-field" />
        </div>
        <div>
          <label htmlFor="sponsorType" className="input-label">Partnership Type *</label>
          <select id="sponsorType" name="partnershipType" required className="input-field cursor-pointer appearance-none">
            <option value="" className="text-slate-900">Select a category...</option>
            <option value="Title Sponsor" className="text-slate-900">Title Sponsor</option>
            <option value="Co-Sponsor" className="text-slate-900">Co-Sponsor</option>
            <option value="Media Partner" className="text-slate-900">Media Partner</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="sponsorMessage" className="input-label">Message *</label>
        <textarea id="sponsorMessage" name="message" required rows={4} className="input-field" />
      </div>

      {status === 'error' && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-600 dark:text-red-300">
          {errorMessage}
        </p>
      )}

      <button disabled={status === 'submitting'} type="submit" className="w-full rounded-xl bg-gradient-to-r from-brand-pink to-brand-magenta py-4 text-lg font-bold transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(230,0,127,0.5)] disabled:opacity-70 disabled:hover:scale-100">
        {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
}
