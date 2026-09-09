import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="mb-4 text-6xl font-bold text-brand-pink">404</h2>
      <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">Page Not Found</h3>
      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-300">
        The page you are looking for does not exist, has been removed, or is temporarily unavailable.
      </p>
      <Link href="/" className="rounded-full bg-navy px-6 py-3 font-medium text-white transition hover:bg-brand-pink dark:bg-white dark:text-slate-900 dark:hover:bg-brand-pink dark:hover:text-white">
        Return to Homepage
      </Link>
    </div>
  );
}
