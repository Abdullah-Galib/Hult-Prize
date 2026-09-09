export type NavItem = {
  label: string;
  href: string;
};

export type SponsorPackage = {
  id: string;
  name: string;
  amount: string;
  benefits: string[];
};

export type Event = {
  id: string;
  title: string;
  slug: string;
  date: string;
  location?: string;
  status: 'upcoming' | 'past';
  description: string;
  coverImage: string;
};

export type Achievement = {
  id: string;
  year: number;
  title: string;
  slug: string;
  description: string;
  category: string;
  featured?: boolean;
};

export type Person = {
  id: string;
  name: string;
  role: string;
  bio?: string;
  image: string;
  linkedin?: string;
  displayOrder: number;
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  partnershipType: string;
  year: number;
  website?: string;
  featured: boolean;
};

export type ImpactMetric = {
  id: string;
  label: string;
  value: string;
  period: string;
  source: string;
  featured: boolean;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  designation: string;
  organization: string;
  image: string;
  approved: boolean;
};

export type NewsArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  author: string;
  externalSource?: string;
};