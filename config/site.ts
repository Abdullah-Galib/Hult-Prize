export const siteConfig = {
  name: 'Hult Prize at Green University of Bangladesh',
  shortName: 'Hult Prize at GUB',
  description:
    'Empowering Student Changemakers. A credible, modern, high-impact student innovation movement.',

  /**
   * Set NEXT_PUBLIC_SITE_URL in your deploy environment (e.g. Vercel project
   * settings). Falls back to localhost, which will make OG/canonical/sitemap
   * URLs wrong in production if left unset.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',

  email: 'contact@hultprizegub.org',
  address: 'Purbachal American City, Kanchpur, Dhaka, Bangladesh',

  social: {
    facebook: 'https://facebook.com/hultprizegub',
    linkedin:
      'https://linkedin.com/company/hult-prize-at-green-university-of-bangladesh',
  },

  university: {
    name: 'Green University of Bangladesh',
    url: 'https://green.edu.bd',
  },

  parentOrganization: {
    name: 'EF Hult Prize Global',
    url: 'https://www.hultprize.org/',
  },

  // Static credit (avoids hitting the GitHub API at runtime / build time).
  developer: {
    name: 'Abdullah Md Galib',
    login: 'Abdullah-Galib',
    profileUrl: 'https://github.com/Abdullah-Galib',
    avatarUrl: 'https://avatars.githubusercontent.com/Abdullah-Galib',
    title: 'GUB Sponsorship Management Team',
  },
};

export type SiteConfig = typeof siteConfig;
