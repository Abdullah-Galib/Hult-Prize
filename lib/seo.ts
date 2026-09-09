import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = '/social/default-og.jpg',
  noIndex = false,
}: MetadataProps = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : siteConfig.name;

  return {
    title: resolvedTitle,
    description,
    openGraph: {
      title: resolvedTitle,
      description,
      url: siteConfig.url,
      siteName: siteConfig.shortName,
      images: [{ url: image }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(siteConfig.url),
  };
}
