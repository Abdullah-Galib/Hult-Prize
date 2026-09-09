import { notFound } from 'next/navigation';
import Link from 'next/link';
import { newsData } from '@/data/news';
import { constructMetadata } from '@/lib/seo';
import { siteConfig } from '@/config/site';
import { formatDate } from '@/lib/dates';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return newsData.map((article) => ({ slug: article.slug }));
}

// Unknown slugs 404 at build time instead of rendering on demand.
export const dynamicParams = false;

export function generateMetadata({ params }: Props) {
  const article = newsData.find((a) => a.slug === params.slug);
  if (!article) return constructMetadata({ title: 'Article Not Found', noIndex: true });
  return constructMetadata({
    title: article.title,
    description: article.excerpt,
    image: article.coverImage,
  });
}

export default function NewsArticlePage({ params }: Props) {
  const article = newsData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.publishedAt,
    author: { '@type': 'Organization', name: siteConfig.name },
    publisher: { '@type': 'Organization', name: siteConfig.name },
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/media/news" className="mb-8 inline-block text-sm text-slate-500 hover:text-brand-pink dark:text-slate-400">
        &larr; Back to News
      </Link>
      <article>
        <time dateTime={article.publishedAt} className="mb-2 block text-sm font-medium text-slate-500 dark:text-slate-400">
          {formatDate(article.publishedAt, { year: 'numeric', month: 'long', day: 'numeric' })}{' '}
          • {article.author}
        </time>
        <h1 className="mb-8 text-4xl font-bold text-slate-900 dark:text-white">{article.title}</h1>
        <div className="prose prose-lg prose-slate dark:prose-invert">
          {article.content.split('\n\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </article>
    </div>
  );
}
