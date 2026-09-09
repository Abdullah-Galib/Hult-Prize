import { constructMetadata } from '@/lib/seo';

export const metadata = constructMetadata({
  title: 'Media Gallery',
  description: 'Photo highlights from Hult Prize events at GUB.',
});

export default function GalleryPage() {
  const placeholders = Array.from({ length: 6 });

  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white">Media Gallery</h1>
      <p className="mb-12 text-slate-600 dark:text-slate-300">Capturing the energy and innovation of our student changemakers.</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {placeholders.map((_, i) => (
          <div key={i} className="flex aspect-square items-center justify-center rounded-md border border-slate-200 bg-slate-100 dark:border-white/10 dark:bg-white/5">
            <span className="text-sm text-slate-400">[Optimized Image {i + 1}]</span>
          </div>
        ))}
      </div>
    </div>
  );
}
