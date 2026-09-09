'use client';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="mb-4 text-5xl font-bold text-brand-pink">Oops!</h2>
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Something went wrong</h3>
      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
        An unexpected error occurred. Please try again — if the problem persists,{' '}
        <Link href="/contact" className="font-semibold text-brand-pink hover:underline">
          let us know
        </Link>
        .
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-full bg-navy px-6 py-3 font-medium text-white transition hover:bg-brand-pink dark:bg-white dark:text-slate-900 dark:hover:bg-brand-pink dark:hover:text-white"
      >
        Try again
      </button>
    </div>
  );
}
