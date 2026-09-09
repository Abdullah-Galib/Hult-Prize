import Link from 'next/link';
import { newsData } from '@/data/news';
import { constructMetadata } from '@/lib/seo';
import { formatDate } from '@/lib/dates';

export const metadata = constructMetadata({
  title: 'News & Press',
  description: 'Latest news, press releases, and articles about Hult Prize at Green University.',
});

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-12 text-4xl font-bold text-slate-900 dark:text-white">News &amp; Press</h1>

      <div className="space-y-8">
        {newsData.map((article) => (
          <article key={article.id} className="border-b border-slate-100 pb-8 last:border-0 dark:border-white/10">
            <span className="mb-2 block text-xs font-medium text-slate-500 dark:text-slate-400">
              <time dateTime={article.publishedAt}>
                {formatDate(article.publishedAt, { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </span>
            <h2 className="mb-3 text-2xl font-bold text-slate-900 dark:text-white">
              <Link href={`/media/news/${article.slug}`} className="transition hover:text-brand-pink">
                {article.title}
              </Link>
            </h2>
            <p className="mb-4 text-slate-600 dark:text-slate-300">{article.excerpt}</p>
            <Link href={`/media/news/${article.slug}`} className="text-sm font-semibold text-brand-pink hover:underline">
              Read Article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
