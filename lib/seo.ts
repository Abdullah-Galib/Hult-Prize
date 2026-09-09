import { siteConfig } from '../config/site';
import { Metadata } from 'next';

type MetadataProps = {
  title?: string;
  description?: string;
  image?: string;
  noIndex?: boolean;
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = '/social/default-og.jpg', // Ensure this image exists in public/social/
  noIndex = false
}: MetadataProps = {}): Metadata {
  return {
    title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.name,
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.name,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: title ? `${title} | ${siteConfig.shortName}` : siteConfig.name,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  };
}