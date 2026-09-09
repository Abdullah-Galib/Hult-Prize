import Link from 'next/link';

export const metadata = {
  title: 'News & Press',
  description: 'Latest news, press releases, and articles about Hult Prize at Green University.',
};

export default function NewsPage() {
  // Placeholder data for the initial static setup
  const articles = [
    {
      id: '1',
      title: 'Hult Prize at GUB Secures Title Sponsor for 2026',
      slug: 'gub-secures-title-sponsor-2026',
      excerpt: 'In a landmark partnership, Hult Prize at Green University announces its primary backer for the upcoming pitch cycle.',
      publishedAt: '2026-09-10',
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">News & Press</h1>
      
      <div className="space-y-8">
        {articles.map((article) => (
          <article key={article.id} className="border-b border-gray-100 pb-8 last:border-0">
            <span className="text-xs text-gray-500 font-medium mb-2 block">{article.publishedAt}</span>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              <Link href={`/media/news/${article.slug}`} className="hover:text-[#E6007F] transition">
                {article.title}
              </Link>
            </h2>
            <p className="text-gray-600 mb-4">{article.excerpt}</p>
            <Link href={`/media/news/${article.slug}`} className="text-[#E6007F] font-semibold text-sm hover:underline">
              Read Article &rarr;
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}