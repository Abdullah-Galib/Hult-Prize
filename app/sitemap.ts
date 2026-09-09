import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { eventsData } from '@/data/events';
import { achievementsData } from '@/data/achievements';
import { newsData } from '@/data/news';
import { parseDate } from '@/lib/dates';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '',
    '/about',
    '/about/mission',
    '/about/advisor',
    '/achievements',
    '/impact',
    '/events',
    '/team',
    '/partners',
    '/media/gallery',
    '/media/news',
    '/sponsor',
    '/sponsorship',
    '/contact',
    '/privacy',
    '/terms',
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '' ? 1 : 0.7,
  }));

  const dynamicRoutes = [
    ...eventsData.map((event) => ({
      url: `${siteConfig.url}/events/${event.slug}`,
      lastModified: parseDate(event.date),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...achievementsData.map((achievement) => ({
      url: `${siteConfig.url}/achievements/${achievement.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
    ...newsData.map((article) => ({
      url: `${siteConfig.url}/media/news/${article.slug}`,
      lastModified: parseDate(article.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...dynamicRoutes];
}
