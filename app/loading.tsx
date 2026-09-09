export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-pink/20 border-t-brand-pink" />
        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Loading…</span>
      </div>
    </div>
  );
}
